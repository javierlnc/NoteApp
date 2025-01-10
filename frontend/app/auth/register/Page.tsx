"use client";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
export default function Page() {

    const [formData, setFormData] = useState({
        first_name : '',
        last_name : '',
        email : '',
        password : '',
        re_password : '',
    });

    const {first_name, last_name, email, password, re_password}= formData

    const onChange = (event : ChangeEvent<HTMLInputElement>) =>{

        setFormData({...formData, [event.target.name]: event.target.value})
    }
  return (
    <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src="/icon-notes.svg"
          alt="Notes logo"
          width={50}
          height={50}
          className="object-contain mx-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-thight text-gray-800">
          Sign up for your account
        </h2>
      </div>

      <div>
        <form className="max-w-md mx-auto mt-10">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              className="form__input-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="form__label"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
              className="form__input-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="form__label"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="re_password"
              id="re_password"
              value={re_password}
              onChange={onChange}
              className="form__input-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="re_password"
              className="form__label"
            >
              Confirm password
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={first_name}
                onChange={onChange}
                className="form__input-field peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="first_name"
                className="form__label"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={last_name}
                onChange={onChange}
                className="form__input-field peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="last_name"
                className="form__label"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            
          </div>
          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
