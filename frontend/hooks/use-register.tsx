import { useState, ChangeEvent, FormEvent } from "react";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";
import { FormData } from "@/types";
export default function useRegister() {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { first_name, last_name, email, password, re_password } = formData;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
  return {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    handleChange,
    handleSubmit,
  };
}
