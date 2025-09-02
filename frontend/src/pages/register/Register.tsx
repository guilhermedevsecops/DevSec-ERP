import React from 'react';
import style from './Register.module.css';
import InputText from '../../components/custom/inputs/InputText';
import { registerSchema } from "../../validators/registerSchema";
import { useAppForm } from '../../hooks/useForm/useAppForm';
import CustomSelect from '../../components/custom/select/CustomSelect';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

const Register = () => {

  interface RegisterFormInputs {
    userName: string;
    firstName: string;
    lastName: string;
    enterpriseName: string;
    functionType: string;
    departament: string;
    address: string;
    city: string;
    state: string;
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    defaultValues: {
      departament: "recepção",
    },
  });

  return (
    <div>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Cadastro</h1>
        </div>
        <form>
          <div className={style.lineOneForm}>
            <div>
              <InputText
                className={style.input}
                label="Nome de Usuário"
                type="text"
                register={register("userName")}
                error={errors.userName}
              />
            </div>
            <div>
              <InputText
                className={style.input}
                label="Primeiro Nome"
                type="text"
                register={register("userName")}
                error={errors.userName}
              />
            </div>
            <div>
              <InputText
                className={style.input}
                label="Sobrenome"
                type="text"
                register={register("userName")}
                error={errors.userName}
              />
            </div>
          </div>

          <div className={style.lineTwoForm}>
            <div>
              <InputText
                className={style.input}
                label="Nome Empresa"
                type="text"
                register={register("userName")}
                error={errors.userName}
              />
            </div>

            <div className={style.selectCamp}>
              <div className={style.selectCustom}>
                <CustomSelect
                  label="Funcao"
                  register={register("departament")}
                  error={errors.departament}
                  options={[
                    { value: "recepcao", label: "Recepcao" },
                    { value: "financeiro", label: "Financeiro" },
                    { value: "rh", label: "Recursos Humanos" }
                  ]}
                />
              </div>
              <div className={style.selectCamp}>
                <CustomSelect
                  label="Departamento"
                  register={register("departament")}
                  error={errors.departament}
                  options={[
                    { value: "financeiro", label: "Financeiro" },
                    { value: "contabilidade", label: "Analista Contabil" },
                    { value: "rh", label: "Analista de Recursos Humanos" }
                  ]}
                />
              </div>
            </div>
          </div>

          <div className={style.lineThreeForm}>
            <div className={style.address}>
              <InputText
                className={style.input}
                label="Endereço"
                register={register("address")}
                error={errors.address}
              />
            </div>
          </div>

          <div className={style.lineFourForm}>
            <div className={style.div}>
              <InputText
                className={style.input}
                label='Cidade'
                register={register("city")}
                error={errors.city}
              />
            </div>
            <div className={style.div}>
              <InputText
                className={style.input}
                label='Estado'
                register={register("state")}
                error={errors.state}
              />
            </div>
            <div className={style.div}>
              <InputText
                className={style.input}
                label='Senha'
                register={register('password')}
                error={errors.password}
              />
            </div>
          </div>

          <div className={style.lineFiveForm}>
            <div className={style.emailInput}>
              <InputText
                className={style.input}
                label="Email"
                register={register("email")}
                error={errors.email}
              />
            </div>
          </div>

          <div className={style.Buttons}>
            <div>
              <Button variant="contained" type="submit">
                Cadastrar
              </Button>
            </div>
            <div>
              <Button variant="contained" type="submit">
                Esqueci Minha Senha
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
