import React, { useState } from "react";
import Bubble from "./Bubble";
import { useForm } from "react-hook-form";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [data, setData] = useState("");
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex flex-col relative h-full">
      <div className="flex flex-col gap-y-4 w-full overflow-y-auto max-h-full">
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
        <Bubble>Or you can leave a message here</Bubble>
        {data && <Bubble className="self-end">{data}</Bubble>}
      </div>

      <ContactForm setData={setData} />
    </div>
  );
};

export default Contact;
