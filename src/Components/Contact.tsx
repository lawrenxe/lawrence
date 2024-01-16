import React, { useEffect, useState } from "react";
import Bubble from "./Bubble";
import { useForm } from "react-hook-form";
import ContactForm from "./ContactForm";
import { Message } from "../App";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Transition from "./Transition";

interface CProps {
  setContact: (isContact: boolean) => void;
  message: Message | null;
}

const Contact = ({ setContact, message }: CProps) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="flex flex-col relative h-full">
      <div className="flex flex-col gap-y-4 w-full h-fit overflow-y-auto">
        <Transition time={1000} delay={0} loaded={loaded}>
          <Bubble>You can click the following options to contact me:</Bubble>
        </Transition>
        <Transition time={1000} delay={150} loaded={loaded}>
          <Bubble
            className="ml-5 hover:cursor-pointer hover:shadow-solid-4"
            link="https://github.com/lawrenxe"
          >
            <div className="font-bold flex flex-row items-center gap-2">
              <FaGithub />
              @lawrenxe
            </div>
          </Bubble>
        </Transition>
        <Transition time={1000} delay={300} loaded={loaded}>
          <Bubble
            className="ml-5 hover:cursor-pointer hover:shadow-solid-4"
            link="https://linkedin.com/in/yizhou-lawrence-wang/"
          >
            <div className="font-bold flex flex-row items-center gap-2">
              <FaLinkedin />
              @yizhou-lawrence-wang
            </div>
          </Bubble>
        </Transition>
        <Transition time={1000} delay={450} loaded={loaded}>
          <Bubble
            className=" ml-5 hover:cursor-pointer hover:shadow-solid-4"
            link="https://leetcode.com/lawrenxe/"
          >
            <div className="font-bold flex flex-row items-center gap-2">
              <SiLeetcode />
              @lawrenX3
            </div>
          </Bubble>
        </Transition>
        <Transition time={1000} delay={600} loaded={loaded}>
          <Bubble
            className="ml-5 hover:cursor-pointer hover:shadow-solid-4"
            link="mailto: jobs.yizhou@gmail.com"
          >
            <div className="font-bold flex flex-row items-center gap-2">
              <MdEmail />
              jobs.yizhou@gmail.com
            </div>
          </Bubble>
        </Transition>
        <Transition time={1000} delay={750} loaded={loaded}>
          <Bubble
            className="ml-5 hover:cursor-pointer hover:shadow-solid-4"
            onClick={() => {
              setContact(true);
            }}
          >
            Or leave a message here
          </Bubble>
        </Transition>

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
