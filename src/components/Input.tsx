import React, { useState } from "react";

type InputProps = {
  type: string;
  className?: string;
  Name?: boolean;
  email?: boolean;
  message?: boolean;
  onTextChange?: (value: string) => void; // Optional callback to return the entered text
} & React.InputHTMLAttributes<HTMLInputElement>; // Extends all input attributes

const Input = ({ type, className, onTextChange, ...props }: InputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onTextChange) {
      onTextChange(e.target.value); // Return the text to the parent if the callback is provided
    }
  };

  return (
    <input
      type={type}
      className={`${className} p-2 outline-none bg-transparent border-b `}
      value={value}
      onChange={handleChange}
      {...props} // Pass all other props dynamically
    />
  );
};

export default Input;
