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
      className={`bg-white border-black border-2 w-fit text-sm lg:text-md xl:text-lg rounded-md px-2 py-1 font-medium ${className} shadow-solid-4`}
      href={link}
      target="_blank"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Bubble;
