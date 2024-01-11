import React, { ReactNode } from "react";

interface BProps {
  children: ReactNode;
  className?: string;
  link?: string;
}

const Bubble = ({ children, className, link }: BProps) => {
  return (
    <a
      className={` border border-black border-2 w-fit text-xl px-4 py-2 font-medium ${className}`}
      href={link}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Bubble;
