import React, { useEffect } from "react";
import { useAppForm } from "../../hooks/useForm/useAppForm";
import { loginSchema } from "../../validators/loginSchema";
import InputText from '../../components/custom/inputs/InputText';
import { AuthService } from "../../services/AuthService";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showError, showSuccess } from "../../utils/toast";
import { setToken } from "../../config/redux/AuthSlice";
import { ToastContainer } from "react-toastify";
import style from "./Login.module.css";
import Logo from "../../assets/logo/logo-devsec-erp-preta.png";
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
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useAppForm<LoginFormInputs>(loginSchema, {
    defaultValues: {
      email: localStorage.getItem("rememberEmail") || "",
      password: localStorage.getItem("rememberPassword") || "",
      rememberMe: localStorage.getItem("rememberMe") === "true"
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    const savedPassword = localStorage.getItem("rememberPassword");
    const savedRememberMe = localStorage.getItem("rememberMe") === "true";

    setValue("rememberMe", savedRememberMe);

    if (savedEmail && savedPassword && savedRememberMe) {
      setValue("email", savedEmail);
      setValue("password", savedPassword);
    }
  }, [setValue]);
  
  const onSavedInfoLogin = (checked: boolean) => {

    const {email, password} = getValues()

    if (checked) {
        localStorage.setItem("rememberEmail", email);
        localStorage.setItem("rememberPassword", password);
        localStorage.setItem("rememberMe", "true");
    }else{ 
        localStorage.removeItem("rememberEmail");
        localStorage.removeItem("rememberPassword");
        localStorage.removeItem("rememberMe");
    }

  }

  const onSubmit = async (data: LoginFormInputs & { rememberMe: boolean }) => {
    try {
      const response = await AuthService(data);
      

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
          <img style={{ color: "red" }} src={Logo} />
        </div>
        <form className={style.form_login} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div>
            <InputText
              className={style.InputText}
              label="Email"
              register={register("email")}
              error={errors.email}
            />
          </div>
          <div>
            <InputText
              className={style.InputText}
              label="Senha"
              type="password"
                register={register("password")}
              error={errors.password}
            />
          </div>
          <div className={style.container_checkbox}>
            <div className={style.checkbox}>
              <CustomCheckBox
                  name="rememberMe"      
                  label="Lembrar Minha Senha"
                  control={control}
                  error={errors.rememberMe} 
                  className={style.checkbox}
                  onClick={onSavedInfoLogin}
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
