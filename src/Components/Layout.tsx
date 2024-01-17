import React, { ReactNode, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { GiHamburgerMenu } from "react-icons/gi";
import Rainbow from "../assets/rainbow.png";

interface LProps {
  children: ReactNode;
  setSelected: (selected: string) => void;
  selected: string;
}

const Layout = ({ children, setSelected, selected }: LProps) => {
  const [isHamburgerClicked, setHamburgerClicked] = useState<boolean>(false);
  useEffect(() => {
    setHamburgerClicked(false);
  }, [selected]);

  const titleMap = {
    lawrence: "Class Lawrence",
    projects: "getProjects()",
    experience: "getExperiences()",
    education: "getEducation()",
    contact: "void contact()",
  };

  return (
    <div
      className={
        "bg-amber-400 lg:bg-green-600 w-screen h-screen flex justify-center items-center overflow-hidden"
      }
    >
      <div
        className={
          "bg-amber-400 w-screen h-screen flex flex-col p-10 lg:p-15  items-center max-w-[1280px] max-h-[960px]  lg:border-4 lg:shadow-solid-8 lg:border-black lg:rounded-xl relative overflow-hidden"
        }
      >
        <section className="h-20 font-mono font-black text-xl xl:text-3xl lg:text-2xl flex flex-row gap-2 w-full justify-between items-center">
          <div className="flex flex-row items-center gap-6">
            <div className="border-solid border-black rounded-lg border-4 p-3 bg-black shadow-solid-4 text-white flex flex-row items-center gap-x-3">
              {titleMap[selected as keyof typeof titleMap]}
              {selected == "lawrence" && (
                <img src={Rainbow} className="w-6 h-6" alt="rainbow" />
              )}
            </div>

            <span>{"{"}</span>
          </div>
          <section
            className="lg:hidden hover:cursor-pointer"
            onClick={() => {
              setHamburgerClicked(!isHamburgerClicked);
            }}
          >
            <GiHamburgerMenu size="1em" />
          </section>
        </section>

        <section className="flex w-full min-h-fit flex-row flex-1 overflow-x-auto no-scrollbar">
          <section className="w-fit">
            <section className="hidden lg:block h-full px-10">
              <NavBar selected={selected} setSelected={setSelected} />
            </section>
          </section>
          <section className="py-5 lg:py-8 xl:py-12 px-2 w-full h-full min-h-fit overflow-y-scroll no-scrollbar relative flex ">
            {isHamburgerClicked ? (
              <div>
                <div
                  className="lg:hidden h-full w-full"
                  onClick={() => {
                    setHamburgerClicked(false);
                  }}
                >
                  <NavBar selected={selected} setSelected={setSelected} />
                </div>
                <div className="hidden lg:block w-full h-full">{children}</div>
              </div>
            ) : (
              children
            )}
          </section>
        </section>
        <section className="h-10 font-mono font-bold md:text-2xl lg:text-3xl text-xl w-full flex items-center">
          {" }"}
        </section>
      </div>
    </div>
  );
};

export default Layout;
