import * as yup from "yup";

export const registerSchema = yup.object({
  username: yup.string().required("Nome de Usuario é Obrigatório"),
  firstname : yup.string().required("Primeiro Nome é Obrigatório"),
  lastname: yup.string().required("Sobrenome é Obrigatório"),
  enterpriseName: yup.string().required("Nome da Empresa é Obrigatório"),
  address: yup.string(),
  city: yup.string(),
  state: yup.string(),
  email: yup.string().email().required("É obrigatório inserir o email"),
  password: yup.string().required("Senha é obrigatória"),
});