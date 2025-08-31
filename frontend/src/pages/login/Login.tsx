import React, { useEffect } from "react";
import { useAppForm } from "../../hooks/useForm/useAppForm";
import { loginSchema } from "../../validators/loginSchema";
import InputText from "../../components/custom/inputs/InputText";
import { AuthService } from "../../services/AuthService";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showError, showSuccess } from "../../utils/toast";
import { setToken } from "../../config/redux/AuthSlice";
import { ToastContainer } from "react-toastify";
import style from "./Login.module.css";
import Logo from "../../assets/logo/logo-devsec-erp.svg";
import { Button, Checkbox } from "@mui/material";
import CustomCheckBox from "../../components/custom/checkbox/CustomCheckBox";
import PathRoutes from "../../config/RoutesPath";

interface LoginFormInputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useAppForm<LoginFormInputs>(loginSchema);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    const savedPassword = localStorage.getItem("rememberPassword");

    if (savedEmail && savedPassword) {
      setValue("email", savedEmail);
      setValue("password", savedPassword);
      setValue("rememberMe", true);
    }
  }, [setValue]);

  const onSubmit = async (data: LoginFormInputs & { rememberMe: boolean }) => {
    try {
      const response = await AuthService(data);
      if (data.rememberMe) {
        localStorage.setItem("rememberEmail", data.email);
        localStorage.setItem("rememberPassword", data.password);
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberEmail");
        localStorage.removeItem("rememberPassword");
        localStorage.removeItem("rememberMe");
      }

      if (response?.token) {
        dispatch(setToken(response.token));
        showSuccess("Entrando na Home Page!", true);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        navigate("/home");
      } else {
        showError("Email ou senha inválidos", true);
      }
    } catch (error: any) {
      showError(error.response?.data || "Erro ao logar", true);
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
          <div className={style.container_checkbox}>
            <div className={style.checkbox}>
              <CustomCheckBox
                label="Lembrar Minha Senha"
                register={register("rememberMe")}
                error={errors.rememberMe}
                defaultChecked={localStorage.getItem("rememberMe") === "true"} 
              />
            </div>
          </div>
          <div className={style.container_btn_logar}>
            <Button variant="contained" type="submit">
              Logar
            </Button>
          </div>
          <div className={style.container_btn_cadastrar}>
            <Button variant="contained" >
              <NavLink to={PathRoutes.commonPath.registration}>Cadastrar</NavLink>
            </Button>
          </div>
        </form>
        <div className={style.container_esqueci_senha}>
          <NavLink
            className={style.esqueci_senha}
            to={PathRoutes.commonPath.forgotPassword}
          >
            Esqueci Minha Senha
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
