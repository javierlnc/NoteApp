import { useState, ChangeEvent, FormEvent } from "react";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";
import { LoginFormData } from "@/types";
export default function useLogin() {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(formData)
      .unwrap()
      .then(() => {
        toast.success("Welcome aboard.", {
          duration: 4000,
          progress: true,
          position: "top-center",
          transition: "bounceIn",
          icon: "",
          sonido: true,
        });
        router.push("/dashboard");
      })
      .catch(() => {
        toast.error("Login failed. Please try again later.", {
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
    email,
    password,
    isLoading,
    handleChange,
    handleSubmit,
  };
}
