import React, { ReactNode } from "react";

interface STProps {
  children: ReactNode;
}

const SkillTag = ({ children }: STProps) => {
  return (
    <span className="bg-gray-200 w-fit px-1 xl:px-2 rounded-md text-[10px] lg:text-xs xl:text-sm font-medium inline-block mx-1">
      {children}
    </span>
  );
};

export default SkillTag;
