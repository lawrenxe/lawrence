import React, { ReactNode, useEffect, useState } from "react";
import NavBar from "./NavBar";

interface LProps {
  children: ReactNode;
  setSelected: (selected: string) => void;
  selected: string;
}

const Layout = ({ children, setSelected, selected }: LProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [isOverThreshold, setIsOverThreshold] = useState(
    screenWidth > 1500 || screenHeight > 1000
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
      setIsOverThreshold(screenWidth > 1500 || screenHeight > 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth, screenHeight]);

  return (
    <div
      className={`${
        isOverThreshold ? "bg-neutral-200" : ""
      } w-screen h-screen flex justify-center items-center`}
    >
      <div
        className={`bg-white w-screen h-screen flex flex-col p-20 items-center max-w-[1500px] max-h-[1000px] ${
          isOverThreshold ? "border border-4 shadow-solid-8 border-black" : ""
        }`}
      >
        <section className="h-20 font-mono font-bold text-3xl flex flex-row gap-4 w-full">
          <p className="">class Lawrence {"{"}</p>
        </section>
        <section className="flex w-full min-h-fit flex-row flex-1 px-10 overflow-x-auto">
          <section className="w-[30%]">
            <NavBar selected={selected} setSelected={setSelected} />
          </section>
          <section className="w-[70%] min-h-fit overflow-y-scroll no-scrollbar relative ">
            {children}
          </section>
        </section>
        <section className="h-20 font-mono font-bold text-3xl w-full">
          {" }"}
        </section>
      </div>
    </div>
  );
};

export default Layout;
