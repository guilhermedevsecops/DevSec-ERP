import React from "react";
import { useAppForm } from "../../hooks/useForm/useAppForm";
import { loginSchema } from "../../validators/loginSchema";
import InputText from "../../components/custom/inputs/InputText";
import { AuthService } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showError, showSuccess } from "../../utils/toast";
import { setToken } from "../../config/redux/AuthSlice";
import { ToastContainer } from "react-toastify";
import style from "./Login.module.css";
import Logo from "../../assets/logo/logo-devsec-erp.svg";
import { Checkbox } from "@mui/material";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm<LoginFormInputs>(loginSchema);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await AuthService(data);

      if (response?.token) {
        dispatch(setToken(response.token));
        showSuccess("Email ou senha inválidos!", false);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        navigate("/home");
      } else {
        showError("Email ou senha inválidos", false);
      }
    } catch (error: any) {
      showError(error.response?.data || "Erro ao logar", false);
    }
  };

  return (
    <div className={style.page_login}>
      <ToastContainer />
      <div className={style.container}>
        <div className={style.imagem_logo}>
          <img src={Logo} />
        </div>
        <form className={style.form_login} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.input_email}>
            <InputText
              label="Email"
              register={register("email")}
              error={errors.email}
            />
          </div>
          <div className={style.input_password}>
            <InputText
              label="Senha"
              type="password"
              register={register("password")}
              error={errors.password}
            />
          </div>
          <div>
            <Checkbox/>
            <p>Lembrar Minha Senha</p>
          </div>
          <button type="submit">Logar</button>
          <button>Cadastrar</button>
        </form>
        <a>Esqueci Minha Senha</a>
      </div>
    </div>
  );
};

export default Login;
