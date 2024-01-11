import React from "react";
import potrait from "../assets/Potrait.png";
import Bubble from "./Bubble";

const Lawrence = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 relative">
        <Bubble>Hello, My name is Lawrence Yizhou Wang.</Bubble>
        <Bubble>
          I am a 2023 IT Graduate with{" "}
          <span className="text-blue-700">one-year industry experience</span> in
          Front-end Development,
        </Bubble>
        <Bubble>
          currently seeking employment as a{" "}
          <span className="text-blue-700">Front-end developer</span>.
        </Bubble>
        <Bubble>
          I am a communicative and reliable{" "}
          <span className="text-blue-700">team player</span>.
        </Bubble>
        <Bubble>
          <span className="text-blue-700">NOTE:</span> I don't drink at work.
        </Bubble>
        <Bubble>Seriously.</Bubble>
      </div>
      <img
        className="-mt-36 self-end w-96"
        src={potrait}
        alt="Lawrence's Potrait"
      />
    </div>
  );
};

export default Lawrence;
