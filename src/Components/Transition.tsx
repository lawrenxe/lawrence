import { ReactNode } from "react";

interface TProps {
  time: number;
  delay: number;
  loaded: boolean;
  children: ReactNode;
}

const Transition = ({ time, delay, children, loaded }: TProps) => {
  return (
    <div className="w-full h-full">
      <div
        className={`h-full ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{
          transitionDelay: `${delay}ms`,
          transitionDuration: `${time}ms`,
        }}
      >
        <div className="h-full flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default Transition;
