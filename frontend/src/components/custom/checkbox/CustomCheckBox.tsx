import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface CheckBoxProps {
  label: string;
  register?: UseFormRegisterReturn; // opcional
  error?: FieldError;
  defaultChecked?: boolean; // ✅ para marcar inicialmente
}

const CustomCheckBox: React.FC<CheckBoxProps> = ({ label, register, error, defaultChecked }) => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            {...(register ?? {})}
            defaultChecked={defaultChecked} // ✅ valor inicial
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
                borderRadius: "4px",
              },
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.1)",
              },
            }}
          />
        }
        label={label}
        sx={{
          ".MuiFormControlLabel-label": {
            fontSize: "14px",
            color: error ? "red" : "#b3a5a5ff",
          },
        }}
      />
      {error && (
        <span style={{ color: "red", fontSize: "12px", marginLeft: "8px" }}>
          {error.message}
        </span>
      )}
    </div>
  );
};

export default CustomCheckBox;
