import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponseModel} from "../models/IProductsResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
  username: string
  password: string
  expiresInMins: number
}

// Создаём настроенный экземпляр axios:
// baseURL — базовый URL для всех запросов (чтобы не писать его каждый раз).
// headers — указываем, что будем отправлять данные в формате JSON.
const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/auth',
  headers: {"Content-Type": "application/json"}
})

// Добавляем интерцептор (перехватчик) запросов:
axiosInstance.interceptors.request.use((requestObject) => {
  // Перед каждым запросом axios проверяет:
  // если метод запроса GET,
  if (requestObject.method?.toUpperCase() === 'GET') {
    // то добавляет заголовок Authorization с токеном из localStorage.
      requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
  }
  return requestObject
})

// Определяем функцию login,
// которая принимает данные для входа и возвращает объект пользователя с токенами.
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
  // Отправляем POST-запрос на /login:
  // В теле запроса передаём username, password, expiresInMins.
  // Указываем тип ответа IUserWithTokens.
  // Через деструктуризацию сохраняем data как userWithTokens.
  const {data:userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins})
  console.log(userWithTokens)
  // Сохраняем данные пользователя с токенами в localStorage,
  // чтобы не вводить логин/пароль заново при обновлении страницы.
  localStorage.setItem('user', JSON.stringify(userWithTokens))
  // Возвращаем объект пользователя с токенами из функции login.
  return userWithTokens
}

// Определяем функцию loadAuthProducts, которая вернёт массив продуктов (IProduct[]).
export const loadAuthProducts = async (): Promise<IProduct[]> => {
  //Выполняется GET-запрос на /products:
  // Ответ ожидается в виде IProductsResponseModel.
  // Из ответа сразу достаём поле products с массивом товаров.
  const {data: {products}} = await axiosInstance.get<IProductsResponseModel>('/products')
  // Возвращаем массив продуктов.
  return products
}

// Определяем функцию refresh, которая обновляет accessToken и refreshToken, когда старый истёк.
export const refresh = async () => {
  // Получаем текущие токены пользователя из localStorage.
  const iUserWithToken = retriveLocalStorage<IUserWithTokens>('user')
  // Отправляем POST-запрос на /refresh:
  const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
  // Передаём refreshToken и желаемое время жизни нового токена.
  // Ожидаем ответ с новым accessToken и refreshToken.
    refreshToken: iUserWithToken.refreshToken,
    expiresInMins:1
  })
  // Обновляем токены в объекте пользователя, который мы достали из localStorage.
  iUserWithToken.accessToken = accessToken
  iUserWithToken.refreshToken = refreshToken
  // Сохраняем обновлённые токены обратно в localStorage.
  localStorage.setItem('user', JSON.stringify(iUserWithToken))
}