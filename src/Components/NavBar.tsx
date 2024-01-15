import React from "react";
import NavBarItem from "./NavBarItem";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

interface NBProps {
  setSelected: (selected: string) => void;
  selected: string;
}

const NavBar = ({ setSelected, selected }: NBProps) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-y-5">
        <NavBarItem
          navString={"lawrence"}
          setSelected={setSelected}
          selected={selected}
        >
          .getLawrence()
        </NavBarItem>
        <NavBarItem
          navString={"projects"}
          setSelected={setSelected}
          selected={selected}
        >
          .getProjects()
        </NavBarItem>
        {/* <NavBarItem
        navString={"skills"}
        setSelected={setSelected}
        selected={selected}
      >
        .getSkills()
      </NavBarItem> */}
        <NavBarItem
          navString={"experience"}
          setSelected={setSelected}
          selected={selected}
        >
          .getExperiences()
        </NavBarItem>
        <NavBarItem
          navString={"education"}
          setSelected={setSelected}
          selected={selected}
        >
          .getEduaction()
        </NavBarItem>
        <NavBarItem
          navString={"contact"}
          setSelected={setSelected}
          selected={selected}
        >
          .contact()
        </NavBarItem>
      </div>
      <div className="flex flex-col hover:cursor-pointer">
        <a href="https://github.com/lawrenxe" target="_blank">
          <div className="font-bold flex flex-row items-center gap-2">
            <FaGithub />
            @lawrenxe
          </div>
        </a>
        <div className="flex flex-col hover:cursor-pointer">
          <a href="https://leetcode.com/lawrenxe/" target="_blank">
            <div className="font-bold flex flex-row items-center gap-2">
              <SiLeetcode />
              @lawrenX3
            </div>
          </a>
        </div>
        <div className="flex flex-col hover:cursor-pointer">
          <a
            href="https://www.linkedin.com/in/yizhou-lawrence-wang/"
            target="_blank"
          >
            <div className="font-bold flex flex-row items-center gap-2">
              <FaLinkedin />
              Yizhou Lawrence Wang
            </div>
          </a>
        </div>
        <div className="flex flex-col hover:cursor-pointer">
          <a href="mailto: jobs.yizhou@gmail.com" target="_blank">
            <div className="font-bold flex flex-row items-center gap-2">
              <MdEmail />
              jobs.yizhou@gmail.com
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

<div className="flex">
  <div className="line"></div>
  <div className="img"></div>
</div>;
