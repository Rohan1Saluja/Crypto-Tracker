import React from "react";
import "./TextInput.scss";
import { TextField } from "@mui/material";

interface Props {
  label?: string;
  width?: string;
  errorMessage?: string;
  name?: string;
  ref?: any;
  value?: string;
  handleChange?: any;
  type?: string;
  placeholder?: string;
  className?: string;
  radius?: string;
}

export const TextInput: React.FC<Props> = React.forwardRef(
  (
    {
      label,
      width,
      errorMessage = "",
      name,
      value,
      handleChange,
      type = "text",
      placeholder = "",
      className = "",
      radius = "0.4rem",
    },
    ref
  ) => {
    const translatedPlaceholder = placeholder;
    return (
      <div className={`text-input ${width ? width : ""} ${className}`}>
        <TextField
          type={type}
          value={value}
          inputRef={ref}
          label={label}
          helperText={errorMessage}
          name={name}
          onChange={handleChange}
          placeholder={translatedPlaceholder}
          InputProps={{ sx: { borderRadius: radius } }}
        />
      </div>
    );
  }
);
