import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import { Message } from "../App";
import Transition from "./Transition";

interface LAMProp {
  setMessage: (message: Message) => void;
  setContact: (isContact: boolean) => void;
}

const LeaveAMessage = ({ setMessage, setContact }: LAMProp) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="flex flex-col gap-y-12 w-full h-full">
      <div className="flex flex-col gap-y-2">
        <Transition time={1000} delay={0} loaded={loaded}>
          <h1 className="text-xl font-bold">Leave a Message</h1>
        </Transition>
        <Transition time={1000} delay={150} loaded={loaded}>
          <h2 className="text-sm font-medium">
            I will get back to you as soon as possible.
          </h2>
        </Transition>
      </div>
      <Transition time={1000} delay={300} loaded={loaded}>
        <ContactForm setMessage={setMessage} setContact={setContact} />
      </Transition>
    </div>
  );
};

export default LeaveAMessage;
