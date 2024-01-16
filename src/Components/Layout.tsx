import React, { ReactNode, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { GiHamburgerMenu } from "react-icons/gi";

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
        "bg-green-600 w-screen h-screen flex justify-center items-center"
      }
    >
      <div
        className={
          "bg-amber-400 w-screen h-screen flex flex-col p-10 lg:p-15 xl:p-20 items-center max-w-[1280px] max-h-[960px]  xl:border-4 xl:shadow-solid-8 xl:border-black xl:rounded-xl relative "
        }
      >
        <section className="h-20 font-mono font-black text-xl xl:text-3xl lg:text-2xl flex flex-row gap-4 w-full justify-between items-center">
          <p>
            <span className="border-solid border-black rounded-lg border-4 p-3 bg-black shadow-solid-4 text-white">
              {titleMap[selected as keyof typeof titleMap]}
            </span>
            <span>{" {"}</span>
          </p>
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
