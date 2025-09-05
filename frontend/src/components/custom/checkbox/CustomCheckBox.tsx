import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Controller, Control, FieldError } from "react-hook-form";

interface CheckBoxProps {
  name: string;
  label: string;
  control: Control<any>;
  error?: FieldError;
  className?: string;
  onClick?: (checked: boolean) => void; // Apenas o valor do checkbox
}

const CustomCheckBox: React.FC<CheckBoxProps> = ({
  name,
  label,
  control,
  error,
  className,
  onClick,
}) => {
  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={field.value}
                onChange={(e) => {
                  const checked = e.target.checked;
                  field.onChange(checked); // Atualiza o estado
                  if (onClick) onClick(checked); // Chama o onClick com o valor do checkbox
                }}
              />
            }
            label={label}
          />
        )}
      />
      {error && <span className="checkbox-error">{error.message}</span>}
    </div>
  );
};

export default CustomCheckBox;
