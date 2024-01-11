import React, { useState } from "react";
import Bubble from "./Bubble";
import { useForm } from "react-hook-form";
import ContactForm from "./ContactForm";
import { Message } from "../App";

interface CProps {
  setContact: (isContact: boolean) => void;
  message: Message | null;
}

const Contact = ({ setContact, message }: CProps) => {
  return (
    <div className="flex flex-col relative h-full">
      <div className="flex flex-col gap-y-4 w-full h-full overflow-y-auto max-h-full">
        <Bubble>You can contact me with one of the following options</Bubble>
        <Bubble
          className="hover:cursor-pointer hover:shadow-solid-4"
          link="https://github.com/lawrenxe"
        >
          <span className="font-bold">GitHub: @lawrenxe</span>
        </Bubble>
        <Bubble
          className="hover:cursor-pointer hover:shadow-solid-4"
          link="https://linkedin.com/in/yizhou-lawrence-wang/"
        >
          <span className="font-bold">
            LinkedIn: https://linkedin.com/in/yizhou-lawrence-wang/
          </span>
        </Bubble>
        <Bubble
          className="hover:cursor-pointer hover:shadow-solid-4"
          link="mailto: jobs.yizhou@gmail.com"
        >
          <span className="font-bold">Email: jobs.yizhou@gmail.com</span>
        </Bubble>
        <Bubble
          className="hover:cursor-pointer hover:shadow-solid-4"
          onClick={() => {
            setContact(true);
          }}
        >
          Or you can click here to leave a message
        </Bubble>

        {message && (
          <div className="flex flex-col gap-y-4">
            <div className="w-full flex-col flex self-end">
              <p className="self-end font-medium ml-4">{message.name}</p>
              <Bubble className="self-end ml-16">{message.message}</Bubble>
            </div>

            <Bubble className="self-start mr-16">
              I have received your message, and will reply to you ASAP.
            </Bubble>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
