import axios from "axios";
import api from "../config/axios";

interface LoginPayLoad{
    email: string;
    password: string;
}

export const AuthService = async(payload : LoginPayLoad) => {
    try{
        const response = await api.post("/auth/login", payload);
        return response.data;
    }catch (error: unknown) {
  if (axios.isAxiosError(error)) {
        return error.response?.data;
  } else if (error instanceof Error) {
        return error.message;
  } else {
        return error;
  }
}
}