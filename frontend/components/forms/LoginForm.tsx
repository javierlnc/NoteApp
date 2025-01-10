"use client";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";
import { useLogin } from "@/hooks";
import {Input, CustomButton} from "../common";

const LoginForm = () => {
    const{
        email,
        password,
        isLoading,
        handleChange,
        handleSubmit,
    }= useLogin();

return(
    <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit}>
    {[
      { label: "Email address", type: "email", name: "email", value: email },
      { label: "Password", type: "password", name: "password",value: password},
    ].map(({ label, type, name, value }) => (
      <Input key={name} name={name} label={label} type={type} value={value} handleChange={handleChange} />
    ))}
   <CustomButton type="submit" className={"button--primary"} isLoading={isLoading} spinnerStyles={"h-4 w-4"}>
    Login In
   </CustomButton>
  </form>
);
};
export default LoginForm;