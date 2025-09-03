import React from "react";
import { FieldError, Control, Controller } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

interface Option {
  value: string | number;
  label: string;
}

interface CustomSelectProps {
  label: string;
  name: string;
  control: Control<any>; // control do useForm
  error?: FieldError;
  options: Option[];
  className?: string;
  defaultValue?: string | number;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  control,
  error,
  options,
  className,
  defaultValue = "",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
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
                background: "white",
                color: "white",
              },
              "& fieldset": {
                borderColor: error ? "red" : "black",
                borderWidth: error ? 2 : 1,
                background: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: error ? "red" : "#1976d2",
                background: "black",
              },
            },
            "& .MuiInputLabel-root": {
              color: "white",
              fontSize: "14px",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
          }}
        >
          <InputLabel>{label}</InputLabel>
          <Select {...field} label={label}>
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
      )}
    />
  );
};

export default CustomSelect;
