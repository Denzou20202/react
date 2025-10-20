import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginPage = () => {
  useEffect(() => {
    login({
      username: "michaelw",
      password: "michaelwpass",
      expiresInMins: 1
    })
  }, [])
  return (
    <>
    Login Page
    </>
  );
};