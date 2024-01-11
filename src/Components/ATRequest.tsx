import React from "react";
import ContactForm from "./ContactForm";

const ATRequest = () => {
  return (
    <div className="flex flex-col gap-y-12 w-full h-full">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-3xl font-bold">
          Request to get a copy of my Academic Transcript
        </h1>
        <h2 className="text-xl font-medium">
          I will get back to you as soon as possible.
        </h2>
      </div>
      <ContactForm />
    </div>
  );
};

export default ATRequest;
