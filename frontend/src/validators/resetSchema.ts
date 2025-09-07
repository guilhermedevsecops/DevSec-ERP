import * as yup from "yup";

export const resetSchema = yup.object({
  password: yup.string().required("Deve ser digitado uma senha"),
});