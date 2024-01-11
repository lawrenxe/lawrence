import React from "react";
import { useForm } from "react-hook-form";
import Bubble from "./Bubble";
import { Message } from "../App";

interface CFProps {
  setMessage?: (message: Message) => void;
  setContact?: (isContact: boolean) => void;
}

const ContactForm = ({ setMessage, setContact }: CFProps) => {
  const { register, handleSubmit } = useForm<Message>();

  return (
    <form
      className="flex flex-col gap-6  bottom-0 w-full h-full"
      onSubmit={handleSubmit((data, e) => {
        e?.preventDefault();
        if (setMessage) setMessage(data);
        if (setContact) setContact(false);
      })}
    >
      <div className="flex flex-row gap-6 w-full">
        <input
          id="name"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Your Name"
          type="text"
          className="w-1/3 border border-black border-2 p-2"
        />

        <input
          className="w-2/3 border border-black border-2 p-2"
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
      </div>

      <textarea
        {...register("message", { required: true })}
        placeholder="Your Message"
        className="w-full h-2/3 border border-black border-2 p-2 resize-none"
      />
      <input
        type="submit"
        value="✈︎"
        className="text-2xl hover:cursor-pointer"
      />
    </form>
  );
};

export default ContactForm;
