import React, { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Transition from "./Transition";

interface NBProps {
  setSelected: (selected: string) => void;
  selected: string;
}

const NavBar = ({ setSelected, selected }: NBProps) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="flex flex-col justify-between h-full py-10">
      <div className="flex flex-col gap-y-2 lg:gap-y-4">
        <Transition time={1000} delay={0} loaded={loaded}>
          <NavBarItem
            navString={"lawrence"}
            setSelected={setSelected}
            selected={selected}
          >
            .getLawrence()
          </NavBarItem>
        </Transition>
        <Transition time={1000} delay={100} loaded={loaded}>
          <NavBarItem
            navString={"projects"}
            setSelected={setSelected}
            selected={selected}
          >
            .getProjects()
          </NavBarItem>
        </Transition>
        <Transition time={1000} delay={200} loaded={loaded}>
          <NavBarItem
            navString={"experience"}
            setSelected={setSelected}
            selected={selected}
          >
            .getExperiences()
          </NavBarItem>
        </Transition>
        <Transition time={1000} delay={300} loaded={loaded}>
          <NavBarItem
            navString={"education"}
            setSelected={setSelected}
            selected={selected}
          >
            .getEduaction()
          </NavBarItem>
        </Transition>
        <Transition time={1000} delay={400} loaded={loaded}>
          <NavBarItem
            navString={"contact"}
            setSelected={setSelected}
            selected={selected}
          >
            .contact()
          </NavBarItem>
        </Transition>
      </div>
      <div className="flex flex-col gap-y-2">
        <Transition time={1000} delay={800} loaded={loaded}>
          <div className="flex flex-col hover:cursor-pointer">
            <a href="https://github.com/lawrenxe" target="_blank">
              <div className="font-medium flex flex-row items-center gap-2">
                <FaGithub />
                @lawrenxe
              </div>
            </a>
          </div>
        </Transition>
        <Transition time={1000} delay={900} loaded={loaded}>
          <div className="flex flex-col hover:cursor-pointer">
            <a href="https://leetcode.com/lawrenxe/" target="_blank">
              <div className="font-medium flex flex-row items-center gap-2">
                <SiLeetcode />
                @lawrenX3
              </div>
            </a>
          </div>
        </Transition>
        <Transition time={1000} delay={1000} loaded={loaded}>
          <div className="flex flex-col hover:cursor-pointer">
            <a
              href="https://www.linkedin.com/in/yizhou-lawrence-wang/"
              target="_blank"
            >
              <div className="font-medium flex flex-row items-center gap-2">
                <FaLinkedin />
                Yizhou Lawrence Wang
              </div>
            </a>
          </div>
        </Transition>
        <Transition time={1000} delay={1100} loaded={loaded}>
          <div className="flex flex-col hover:cursor-pointer">
            <a href="mailto:jobs.yizhou@gmail.com" target="_blank">
              <div className="font-medium flex flex-row items-center gap-2">
                <MdEmail />
                jobs.yizhou@gmail.com
              </div>
            </a>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default NavBar;

<div className="flex">
  <div className="line"></div>
  <div className="img"></div>
</div>;
