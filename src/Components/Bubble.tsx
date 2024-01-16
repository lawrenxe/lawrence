import React, { ReactNode } from "react";

interface BProps {
  children: ReactNode;
  className?: string;
  link?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Bubble = ({ children, className, link, onClick }: BProps) => {
  return (
    <a
      className={`  border-black border-2 w-fit text-sm lg:text-md xl:text-lg px-2 py-1 font-medium ${className}`}
      href={link}
      target="_blank"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Bubble;
