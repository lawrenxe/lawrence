import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Bubble from "./Bubble";
import { Message } from "../App";
import emailjs from "@emailjs/browser";
import { log } from "console";
import Spinner from "./Spinner";

interface CFProps {
  setMessage?: (message: Message) => void;
  setContact?: (isContact: boolean) => void;
}

const ContactForm = ({ setMessage, setContact }: CFProps) => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    ? process.env.REACT_APP_EMAILJS_SERVICE_ID
    : "";
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    ? process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    : "";
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ? process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    : "";
  console.log(serviceId);
  const { register, handleSubmit } = useForm<Message>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = (data: Message, e: any) => {
    e?.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(serviceId, templateId, e?.target, publicKey)
      .then(() => {
        setLoading(false);
        console.log("email sent successfully");
        if (setMessage) setMessage(data);
        if (setContact) setContact(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <form
      className="flex flex-col gap-2 w-full h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <input
          id="name"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Your Name"
          type="text"
          className="md:w-1/3 w-full border-black text-xs md:text-sm lg:text-md border-2 p-2"
        />

        <input
          className="md:w-2/3 w-full border-black text-xs md:text-sm lg:text-md border-2 p-2"
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
        className="w-full h-2/3 border-black border-2 p-2 resize-none text-xs md:text-sm lg:text-md"
      />

      {isLoading ? (
        <div className="flex flex-col justify-center items-center w-full ">
          <Spinner />
        </div>
      ) : (
        <input
          type="submit"
          value="✈︎"
          className="text-2xl hover:cursor-pointer"
        />
      )}
    </form>
  );
};

export default ContactForm;
