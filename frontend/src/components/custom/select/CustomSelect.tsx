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
          error={!!error}
          sx={{
           
            "& .MuiInputLabel-root": {
              color: "black", 
            },
            "& .MuiSelect-root": {
              color: "black", 
              background : "#c2c2c9ff"
            },
            "& .MuiFormHelperText-root": {
              color: "black",
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
