import React from "react";
import TextField from "@mui/material/TextField";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
  className?: string;
}

const InputText: React.FC<InputProps> = ({
  className,
  label,
  register,
  error,
  type = "text",
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
      helperText={error ? error.message : " "}
      FormHelperTextProps={{
        sx: { minHeight: "1.5em" },
      }}
      sx={{
        color: "black",
        fontSize : "12px",
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#c2c2c9ff", 
          "& fieldset": {
            borderColor: "0099c0ff",
          },
          "&.Mui-focused fieldset": {
            borderColor: "0099c0ff",
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px white inset !important", 
            WebkitTextFillColor: "black !important", 
            height: "1.5em",
            padding: "0 14px",
          },
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#0099c0ff",
          fontWeight : "bolder",
        },
        "& .MuiInputLabel-root.MuiInputLabel-shrink": {
          color: "black",
          fontWeight : "bolder",
          paddingBottom: "20px",
          
          
          
          
          
        },
      }}
    />
  );
};

export default InputText;
