"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { Spinner } from "../common";
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";
import { FormData } from "@/types";
const RegisterForm = () => {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    register(formData)
      .unwrap()
      .then(() => {
        toast.success("Registration successful! Welcome aboard.", {
          duration: 4000,
          progress: true,
          position: "top-center",
          transition: "bounceIn",
          icon: "",
          sonido: true,
        });
        router.push("/auth/login");
      })
      .catch(() => {
        toast.error("Registration failed. Please try again later.", {
          duration: 4000,
          progress: true,
          position: "top-center",
          transition: "bounceIn",
          icon: "",
          sonido: true,
        });
      });
  };
  return (
    <form className="max-w-md mx-auto mt-10" onSubmit={onSubmit}>
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
       {isLoading ? <Spinner containerStyles={"h-4 w-4"}/> : 'Sing Up'} 
      </button>
    </form>
  );
};

export default RegisterForm;
