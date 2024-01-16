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
    education: "getEducations()",
    contact: "void contact()",
  };

  return (
    <div
      className={
        "bg-neutral-200 w-screen h-screen flex justify-center items-center"
      }
    >
      <div
        className={
          "bg-white w-screen h-screen flex flex-col p-10 items-center max-w-[1536px] max-h-[1000px]  2xl:border-4 2xl:shadow-solid-8 2xl:border-black relative"
        }
      >
        <section className="h-10 font-mono font-bold text-xl flex flex-row gap-4 w-full justify-between items-center">
          <p className="">
            {titleMap[selected as keyof typeof titleMap]}
            {" {"}
          </p>
          <section
            className="xl:hidden hover:pointer-cursor"
            onClick={() => {
              setHamburgerClicked(!isHamburgerClicked);
            }}
          >
            <GiHamburgerMenu size="1em" />
          </section>
        </section>

        <section className="flex w-full min-h-fit flex-row flex-1 overflow-x-auto">
          <section className="w-fit">
            <section className="hidden xl:block h-full px-10">
              <NavBar selected={selected} setSelected={setSelected} />
            </section>
          </section>
          <section className="py-5 px-2 min-h-fit overflow-y-scroll no-scrollbar relative ">
            {isHamburgerClicked ? (
              <NavBar selected={selected} setSelected={setSelected} />
            ) : (
              children
            )}
          </section>
        </section>
        <section className="h-10 font-mono font-bold text-xl w-full flex items-center">
          {" }"}
        </section>
      </div>
    </div>
  );
};

export default Layout;
