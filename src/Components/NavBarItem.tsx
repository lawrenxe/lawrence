import React, { ReactNode } from "react";

interface NBIProps {
  children: ReactNode;
  navString: string;
  setSelected: (selected: string) => void;
  selected: string;
}

const NavBarItem = ({
  children,
  navString,
  setSelected,
  selected,
}: NBIProps) => {
  return (
    <div
      onClick={() => {
        setSelected(navString);
      }}
      className={`hover:cursor-pointer font-mono font-bold text-2xl ${
        selected === navString
          ? "underline underline-offset-4 decoration-4"
          : ""
      } `}
    >
      {children}
      {}
    </div>
  );
};

export default NavBarItem;
