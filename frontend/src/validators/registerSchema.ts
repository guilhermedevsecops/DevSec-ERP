import * as yup from "yup";

export const registerSchema = yup.object({
  userName: yup.string().required("Nome de Usuario é Obrigatório"),
  firstName : yup.string().required("Primeiro Nome é Obrigatório"),
  lastName: yup.string().required("Sobrenome é Obrigatório"),
  enterpriseName: yup.string().required("Nome da Empresa é Obrigatório"),
  functionType: yup.string().required("É obrigatorio a seleção da função"),
  departament: yup.string().required("É obrigatório selecionar o departamento"),
  address: yup.string(),
  city: yup.string(),
  state: yup.string(),
  email: yup.string().email("É obrigatório inserir o email"),
  password: yup.string().required("Senha é obrigatória"),
});