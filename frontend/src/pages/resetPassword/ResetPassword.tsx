import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { showError, showSuccess } from '../../utils/toast';
import InputText from '../../components/custom/inputs/InputText';
import style from './ResetPassword.module.css'
import { resetSchema } from '../../validators/resetSchema';
import { useAppForm } from '../../hooks/useForm/useAppForm';
import { Button } from '@mui/material';
import PathRoutes from '../../config/RoutesPath';
import { ResetPassordRequired } from '../../services/ResetPassword/ResetPasswordRequired';
import { ToastContainer } from 'react-toastify';

const ResetPassword = () => {

      interface ResetPasswordForm {
    password: string;
    token : string;
  }

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useAppForm<ResetPasswordForm>(resetSchema, {
      defaultValues: {
        password: "",
      },
    });


    const navigate = useNavigate();
   


    const NavigateButtons = () => {
        navigate(PathRoutes.commonPath.login)
    }

    const { token } = useParams<{ token: string }>();
  const onSubmit = async (data: ResetPasswordForm) => {

    console.log(token)

    if (!token) {
        showError("Token de autorização vazio", true);
        return; // impede envio sem token
    }

    const payload: ResetPasswordForm = {
        password: data.password,
        token: token 
    };

    console.log("=============", payload);

    try {
        if (data.password === "") {
            showError("A senha não pode ser vazia", true);
        } else {
            const response = await ResetPassordRequired(payload);
            showSuccess("Senha alterada com sucesso", true);
            //navigate(PathRoutes.commonPath.login)
        }
    } catch {
        showError("Erro ao alterar a senha", true);
    }
};


return (
    <div>
      <ToastContainer/>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Redefinição de Senha</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.input}>
          <InputText
            className={style.inputRequest}
            label="Digite sua nova senha"
            type="text"
            register={register("password")}
            error={errors.password}
          />
        </div>
        <div className={style.buttons}>
        <div>
          <Button variant="contained" type="submit">
            Enviar email
          </Button>
        </div>
        <div>
            <Button variant="contained" onClick={() => NavigateButtons()}>
                Ir para login
            </Button>
        </div>
        </div>
        </form>
      </div>
    </div>
  );
};


export default ResetPassword