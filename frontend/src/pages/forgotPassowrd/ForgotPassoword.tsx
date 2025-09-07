import React from "react";
import InputText from "../../components/custom/inputs/InputText";
import { useAppForm } from "../../hooks/useForm/useAppForm";
import { forgotSchema } from "../../validators/forgotSchema";
import { showError, showSuccess } from "../../utils/toast";
import { Button } from "@mui/material";
import style from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import PathRoutes from "../../config/RoutesPath";
import { ForgotPasswordRequest } from "../../services/ForgotPassword/ForgotPassword";
import { ToastContainer } from "react-toastify";

const ForgotPassoword = () => {
  interface ForgotFormInputs {
    email: string;
  }

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm<ForgotFormInputs>(forgotSchema, {
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotFormInputs) => {
    try {
      if (data.email === "") {
        showError("Email não pode estar vazio", true);
      } else {
        const response = await ForgotPasswordRequest(data);
        showSuccess("Instruções serão enviadas para seu email", true)
      }
    } catch (error: any) {
        showError("Erro ao enviar email", true)
    }
  };

   const LoginButtons = () => {
        navigate(PathRoutes.commonPath.login)
  }

  return (
    <div>
        <ToastContainer/>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Recuperação de Senhas</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.input}>
          <InputText
            className={style.inputRequest}
            label="Digite seu email"
            type="text"
            register={register("email")}
            error={errors.email}
          />
        </div>
        <div className={style.buttons}>
        <div>
          <Button variant="contained" type="submit">
            Enviar email
          </Button>
        </div>
        <div>
            <Button variant="contained" onClick={() => LoginButtons()}>
                Ir para login
            </Button>
        </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassoword;
