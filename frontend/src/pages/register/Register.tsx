import React from 'react';
import style from './Register.module.css';
import InputText from '../../components/custom/inputs/InputText';
import { showError, showSuccess } from "../../utils/toast";
import CustomSelect from '../../components/custom/select/CustomSelect';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { RegisterService } from '../../services/User/UserService';

const Register = () => {

  interface RegisterFormInputs {
    username: string;
    firstname: string;
    lastname: string;
    enterpriseName?: string;
    function: string;
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
    control,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    defaultValues: {
    username: "",
    firstname: "",
    lastname: "",
    departament: "recepcao", 
    function: "financeiro",
    address: "",
    city: "",
    state: "",
    email: "",
    password: ""
    },
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    try{
      console.log(data)
      const response = await RegisterService(data);
      //console.log("Iniciando....", response)
      
      showSuccess("Usuário criado com sucesso!", true);
      await new Promise((resolve) => setTimeout(resolve, 2000));

    }catch(error : any){
      showError("Erro ao efetuar o cadastro, por favor tente novamente", false);

    }
  }

  return (
    <div>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Cadastro</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.lineOneForm}>
            <div>
              <InputText
                className={style.input}
                label="Nome de Usuário"
                type="text"
                register={register("username")}
                error={errors.username}
              />
            </div>
            <div>
              <InputText
                className={style.input}
                label="Primeiro Nome"
                type="text"
                register={register("firstname")}
                error={errors.firstname}
              />
            </div>
            <div>
              <InputText
                className={style.input}
                label="Sobrenome"
                type="text"
                register={register("lastname")}
                error={errors.lastname}
              />
            </div>
          </div>

          <div className={style.lineTwoForm}>
            <div>
              <InputText
                className={style.input}
                label="Nome Empresa"
                type="text"
                register={register("enterpriseName")}
                error={errors.enterpriseName}
              />
            </div>

            <div className={style.selectCamp}>
              <div className={style.selectCustom}>
                <CustomSelect
  label="Departamento"
  name="departament"
  control={control}
  error={errors.departament}
  options={[
    { value: "financeiro", label: "Financeiro" },
    { value: "contabilidade", label: "Analista Contabil" },
    { value: "rh", label: "Analista de Recursos Humanos" },
  ]}
  defaultValue="financeiro"
/>

              </div>
              <div className={style.selectCamp}>
                <CustomSelect
  label="Função"
  name="function"
  control={control}
  error={errors.function}
  options={[
    { value: "financeiro2", label: "Financeiro" },
    { value: "contabilidade1", label: "Analista Contabil" },
    { value: "rh3", label: "Analista de Recursos Humanos" },
  ]}
  defaultValue="financeiro"
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
              <Button variant="contained">
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
