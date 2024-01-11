import React from "react";
import ContactForm from "./ContactForm";
import { Message } from "../App";

interface LAMProp {
  setMessage: (message: Message) => void;
  setContact: (isContact: boolean) => void;
}

const LeaveAMessage = ({ setMessage, setContact }: LAMProp) => {
  return (
    <div className="flex flex-col gap-y-12 w-full h-full">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-3xl font-bold">Leave a Message</h1>
        <h2 className="text-xl font-medium">
          I will get back to you as soon as possible.
        </h2>
      </div>
      <ContactForm setMessage={setMessage} setContact={setContact} />
    </div>
  );
};

export default LeaveAMessage;
