import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

interface SelectProps {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  options: { value: string | number; label: string }[];
  className?: string;
}

const CustomSelect: React.FC<SelectProps> = ({ label, register, error, options, className }) => {
  return (
    <FormControl
      fullWidth
      className={className}
      margin="normal"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "9px",
          width: "24rem",
          height: "45px",
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            fontSize: "14px",
            background:"white",
            color: "#000",
          },
          "& fieldset": {
            borderColor: error ? "red" : "#B0B0B0",
            borderWidth: error ? 2 : 1,
            background:"white",
          },
          "&.Mui-focused fieldset": {
            borderColor: error ? "red" : "#1976d2",
            background:"white",
          },
        },
        "& .MuiInputLabel-root": {
          color: "#333",
          fontSize: "14px",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "white",
        },
      }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        {...register}
        label={label}
        defaultValue="" // evita warning quando vazio
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText sx={{ minHeight: "1.5em" }}>
        {error ? error.message : " "}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomSelect;
