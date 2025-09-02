import React from "react";
import TextField from "@mui/material/TextField";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
  className? : string;
}

const InputText: React.FC<InputProps> = ({ className, label, register, error, type = "text" }) => {
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
      helperText={error ? error.message : " "} 
      FormHelperTextProps={{
        sx: { minHeight: "1.5em", width: '20rem' },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "9px",
          background: "#D9D9D9",
          height: "45px", 
          padding: 0,
          "& input": {
            height: "100%",
            padding: "0 12px", // padding horizontal ajustado
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center", // centraliza verticalmente
            color: "#000",
            fontSize: "14px",
          },
          "& fieldset": {
            borderColor: error ? "red" : "black",
            borderWidth: error ? 2 : 1,
          },
          "&.Mui-focused fieldset": {
            borderColor: error ? "red" : "white",
          },
        },
        "& .MuiInputLabel-root": {
          color: "black",
          fontSize: "15px",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "black",
        },
        "& input::placeholder": {
          color: "rgba(34, 76, 192, 1)",
          fontSize: "20px",
          opacity: 0,
        },
      }}
    />
  );
};

export default InputText;
