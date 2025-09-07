import axios from "axios";
import api from "../../config/axios";

interface ResetPasswordForm {
  password: string;
  token: string;
}

export const ResetPassordRequired = async (payload: ResetPasswordForm) => {
  try {
    const response = await api.post("/auth/reset-password", {
      token: payload.token,
      password: payload.password,
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    } else if (error instanceof Error) {
      return error.message;
    } else {
      return error;
    }
  }
};
