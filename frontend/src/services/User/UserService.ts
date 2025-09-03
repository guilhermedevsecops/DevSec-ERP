import axios from "axios";
import api from "../../config/axios";

interface UserPayload{
    username       : string;
    firstname      : string;
    lastname       : string;
    //enterprisename? : string;
    function       : string;
    departament    : string;
    city?          : string;
    state?         : string;
    address?       : string;
    cep?           : string;
    logadouro?     : string;
    referencia?    : string;
    password       : string;
    email          : string;
}

export const RegisterService = async(payload : UserPayload) => {
      console.log("PAYLOAD" , payload)
    try{
        const response = await api.post("/register", payload);
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