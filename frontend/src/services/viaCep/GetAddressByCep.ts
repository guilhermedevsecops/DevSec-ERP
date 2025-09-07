import axios from "axios";
import api from "../../config/axios";

interface CepPayload{
    cep : string;
}

export const getAddressByCep = async(payload : CepPayload) => {
      try{
        const response = await api.get(`/api/cep/${payload.cep}`);
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