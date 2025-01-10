"use client";

import { CustomButton, Input } from "../common";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";
import { useRegister } from "@/hooks";

const RegisterForm = () => {
  const {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    handleChange,
    handleSubmit,
  } = useRegister();
  return (
    <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit}>
      {[
        { label: "Email address", type: "email", name: "email", value: email },
        {
          label: "Password",
          type: "password",
          name: "password",
          value: password,
        },
        {
          label: "Confirm password",
          type: "password",
          name: "re_password",
          value: re_password,
        },
        {
          label: "First name",
          type: "text",
          name: "first_name",
          value: first_name,
        },
        {
          label: "Last name",
          type: "text",
          name: "last_name",
          value: last_name,
        },
      ].map(({ label, type, name, value }) => (
        <Input
          key={name}
          name={name}
          label={label}
          type={type}
          value={value}
          handleChange={handleChange}
        />
      ))}
      <CustomButton
        type="submit"
        className={"button--primary"}
        isLoading={isLoading}
        spinnerStyles={"h-4 w-4"}
      >
        Login In
      </CustomButton>
    </form>
  );
};

export default RegisterForm;
