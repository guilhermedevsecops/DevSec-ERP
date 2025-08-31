import React from "react";
import TextField from "@mui/material/TextField";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
}

const InputText: React.FC<InputProps> = ({ label, register, error, type = "text" }) => {
  return (
    <TextField
      {...register}
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
          width: "21rem",
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
            borderColor: error ? "red" : "#B0B0B0",
            borderWidth: error ? 2 : 1,
          },
          "&.Mui-focused fieldset": {
            borderColor: error ? "red" : "#1976d2",
          },
        },
        "& .MuiInputLabel-root": {
          color: "#333",
          fontSize: "14px",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "white",
        },
        "& input::placeholder": {
          color: "#999",
          opacity: 1,
        },
      }}
    />
  );
};

export default InputText;
