"use client";
import { Spinner } from "../common";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";
import { useLogin } from "@/hooks";
import {Input} from "../common";

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
    <button
      type="submit"
      className="text-black mt-5 bg-orange hover:bg-orange-focus focus:ring-4 focus:outline-none focus:ring-orange-focus font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      {isLoading ? <Spinner containerStyles={"h-4 w-4"} /> : "Sing Up"}
    </button>
  </form>
);
};
export default LoginForm;