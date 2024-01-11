import React from "react";
import { useForm } from "react-hook-form";
import Bubble from "./Bubble";

interface CFProps {
  setData: (data: string) => void;
}

const ContactForm = ({ setData }: CFProps) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className="flex flex-col gap-2 absolute bottom-0 w-full"
      onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
    >
      <div className="flex flex-row gap-2">
        <Bubble className="w-1/3">
          <input
            id="name"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Your Name"
            type="text"
            className="w-full"
          />
        </Bubble>
        <Bubble className="w-2/3">
          <input
            className="w-full"
            id="email"
            placeholder="Your Email"
            {...register("email", {
              required: "required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Wrong Email format",
              },
            })}
            type="email"
          />
        </Bubble>
      </div>
      <Bubble className="w-full flex flex-row items-end h-fit">
        <textarea
          {...register("message", { required: true })}
          placeholder="Your Message"
          className="w-full h-full"
        />
        <input type="submit" value="✈︎" />
      </Bubble>
    </form>
  );
};

export default ContactForm;
