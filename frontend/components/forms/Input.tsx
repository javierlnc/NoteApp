"use client";
import { NextPage } from "next";
import { ChangeEvent } from "react";

interface Props {
    name: string;
    label: string;
    type: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value:string

}

const Input: NextPage<Props> = ({name,label, type, handleChange, value}) => {
  return (
    <div key={name} className="relative z-0 w-full mb-5 group">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form__input-field peer"
        placeholder=" "
        required
      />
      <label htmlFor={name} className="form__label">
        {label}
      </label>
    </div>
  );
};

export default Input;
