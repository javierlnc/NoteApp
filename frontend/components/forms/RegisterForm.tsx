"use client";

import { Spinner } from "../common";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";
import { FormData } from "@/types";
import { useRegister } from "@/hooks";
const RegisterForm = () => {
  const { formData, isLoading, handleChange, handleSubmit } = useRegister();
  return (
    <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit}>
      {[
        { label: "Email address", type: "email", name: "email" },
        { label: "Password", type: "password", name: "password" },
        { label: "Confirm password", type: "password", name: "re_password" },
        { label: "First name", type: "text", name: "first_name" },
        { label: "Last name", type: "text", name: "last_name" },
      ].map(({ label, type, name }) => (
        <div key={name} className="relative z-0 w-full mb-5 group">
          <input
            type={type}
            name={name}
            id={name}
            value={formData[name as keyof FormData]}
            onChange={handleChange}
            className="form__input-field peer"
            placeholder=" "
            required
          />
          <label htmlFor={name} className="form__label">
            {label}
          </label>
        </div>
      ))}
      <div className="grid md:grid-cols-2 md:gap-6"></div>
      <button
        type="submit"
        className="text-black mt-5 bg-orange hover:bg-orange-focus focus:ring-4 focus:outline-none focus:ring-orange-focus font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        {isLoading ? <Spinner containerStyles={"h-4 w-4"} /> : "Sing Up"}
      </button>
    </form>
  );
};

export default RegisterForm;
