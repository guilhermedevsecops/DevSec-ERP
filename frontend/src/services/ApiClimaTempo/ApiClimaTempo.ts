import axios from "axios";
import api from "../../config/axios";



export const ApiClimaTempo = async () => {
      try{
        const response = await api.get(`/api/tempo`);
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