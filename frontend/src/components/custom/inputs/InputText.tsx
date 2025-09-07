import React from "react";
import TextField from "@mui/material/TextField";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
  className?: string;
  value?: string;
}

const InputText: React.FC<InputProps> = ({
  className,
  label,
  register,
  error,
  type = "text",
  value
}) => {
  return (
    <TextField
      {...register}
      className={className}
      type={type}
      label={label}
      placeholder={label}
      variant="outlined"
      fullWidth
      margin="normal"
      error={!!error}
      value={value}
      autoComplete="new-password"  // 🔹 mais confiável que "off"
      helperText={error ? error.message : " "}
      FormHelperTextProps={{
        sx: { minHeight: "1.5em" },
      }}
      sx={{
        color: "black",
        fontSize: "12px",
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#c2c2c9ff",
          "& fieldset": {
            borderColor: "#0099c0ff",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#0099c0ff",
          },
          // 🔹 Autofill do navegador
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1020px #c2c2c9ff inset !important",
            WebkitTextFillColor: "black !important",
          },
          "& input:-webkit-autofill:hover": {
            WebkitBoxShadow: "0 0 0 1000px #c2c2c9ff inset !important",
          },
          "& input:-webkit-autofill:focus": {
            WebkitBoxShadow: "0 0 0 1000px #c2c2c9ff inset !important",
          },
          "& input:-webkit-autofill:active": {
            WebkitBoxShadow: "0 0 0 1000px #c2c2c9ff inset !important",
          },
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#0099c0ff",
          fontWeight: "bolder",
        },
        "& .MuiInputLabel-root.MuiInputLabel-shrink": {
          color: "black",
          fontWeight: "bolder",
          paddingBottom: "20px",
        },
      }}
    />
  );
};

export default InputText;
