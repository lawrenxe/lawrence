import React, { ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";

interface PWProps {
  setPopup: (isPopup: boolean) => void;
  children: ReactNode;
}

const PopupWindow = ({ setPopup, children }: PWProps) => {
  return (
    <div className="absolute w-[90%] h-[90%] max-w-[1000px] max-h-[600px] min-h-[600px] bg-white border-2 border-black shadow-solid-8 flex flex-col">
      <div
        onClick={() => setPopup(false)}
        className="text-3xl self-end p-3 h-[10%] hover:cursor-pointer hover:animate-spin flex justify-center items-center"
      >
        <RxCross2 />
      </div>
      <div className="w-full h-[85%] flex px-5 flex-col">{children}</div>
    </div>
  );
};

export default PopupWindow;
