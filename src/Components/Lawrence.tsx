import React, { useEffect, useState } from "react";
import potrait from "../assets/Potrait.png";
import Bubble from "./Bubble";
import Transition from "./Transition";

const Lawrence = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 relative w-full">
        <Transition time={2000} delay={0} loaded={loaded}>
          <Bubble className="">Hello, My name is Lawrence Yizhou Wang.</Bubble>
        </Transition>
        <Transition time={2000} delay={600} loaded={loaded}>
          <Bubble>
            I am a 2023 IT Graduate with{" "}
            <span className="text-blue-700">one-year industry experience</span>{" "}
            in Front-end Development,
          </Bubble>
        </Transition>
        <Transition time={2000} delay={1200} loaded={loaded}>
          <Bubble>
            currently seeking employment as a{" "}
            <span className="text-blue-700">Front-end developer</span>.
          </Bubble>
        </Transition>
        <Transition time={2000} delay={1800} loaded={loaded}>
          <Bubble>
            I am a communicative and reliable{" "}
            <span className="text-blue-700">team player</span>.
          </Bubble>
        </Transition>
        <Transition time={2000} delay={2400} loaded={loaded}>
          <Bubble>
            <span className="text-blue-700">NOTE:</span> I don't drink at work.
          </Bubble>
        </Transition>
        <Transition time={2000} delay={3000} loaded={loaded}>
          <Bubble>Seriously.</Bubble>
        </Transition>
      </div>
      <Transition time={2000} delay={0} loaded={loaded}>
        <img
          className="-mt-36 self-end w-96"
          src={potrait}
          alt="Lawrence's Potrait"
        />
      </Transition>
    </div>
  );
};

export default Lawrence;
