import {useEffect, useState} from "react";
import {getAllCars} from "../../services/api.service.ts";
import type {ICar} from "../../models/ICar.ts";

export const CarsComponent = () => {
  const [cars, setCars] = useState<ICar[]>([])

  useEffect(() =>{
    getAllCars().then((cars) => {
      setCars(cars)
    })
  }, [])

  return (
    <div style={{display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center", gap: 15}}>
      {
        cars.map((car) => (
          <div key={car.id} style={{border: "1px solid grey", width: 160, padding: 10}}>
            <p>ID: {car.id}</p>
            <p>Brand: {car.brand}</p>
            <p>Year: {car.year}</p>
            <p>Price: {car.price} $</p>
          </div>
        ))
      }
    </div>
  );
};