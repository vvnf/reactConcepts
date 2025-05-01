import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

function FormComponent() {
  //const [errors, setErrors] = useState<any>({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const create = async (data) => {
    console.log("Form data", data, errors);
  };

  return (
    <div className="w-1/2 bg-gray-400 p-4 rounded-md shadow-md">
      <h2 className="pb-2">
        {" "}
        ON Blur trigger Form Validation- react-hook-form
      </h2>
      <form onSubmit={handleSubmit(create)}>
        <div className="space-y-5">
          <Input
            label="Full Name: "
            placeholder="Enter your full name"
            {...register("name", {
              required: "Name is required",
              validate: {
                matchPattern: (value) =>
                  /^[A-Za-z]{2,}$/.test(value) ||
                  "Name must be at least 2 letters and contain only letters",
              },
            })}
            error={errors.name?.message}
          />
          <Input
            label="Email: "
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
            error={errors.email?.message}
          />
          <Input
            label="Password: "
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
            error={errors.password?.message}
          />
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
