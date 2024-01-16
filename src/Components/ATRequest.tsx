import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Transition from "./Transition";

const ATRequest = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="flex flex-col gap-y-12 w-full h-full lg:px-8">
      <div className="flex flex-col gap-y-2">
        <Transition time={1000} delay={0} loaded={loaded}>
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold">
            Request to get a copy of my Academic Transcript
          </h1>
        </Transition>
        <Transition time={1000} delay={150} loaded={loaded}>
          <h2 className="text-sm lg:text-md xl:text-lg font-medium">
            I will get back to you as soon as possible.
          </h2>
        </Transition>
      </div>
      <Transition time={1000} delay={300} loaded={loaded}>
        <ContactForm />
      </Transition>
    </div>
  );
};

export default ATRequest;
