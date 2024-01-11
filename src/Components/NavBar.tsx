import React from "react";
import NavBarItem from "./NavBarItem";

interface NBProps {
  setSelected: (selected: string) => void;
  selected: string;
}

const NavBar = ({ setSelected, selected }: NBProps) => {
  return (
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
  );
};

export default NavBar;

<div className="flex">
  <div className="line"></div>
  <div className="img"></div>
</div>;
