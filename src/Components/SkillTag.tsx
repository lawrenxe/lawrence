import React, { ReactNode } from "react";

interface STProps {
  children: ReactNode;
}

const SkillTag = ({ children }: STProps) => {
  return (
    <span className="bg-gray-200 w-fit px-2 py-1 rounded-md text-xs font-medium inline-block m-1">
      {children}
    </span>
  );
};

export default SkillTag;
