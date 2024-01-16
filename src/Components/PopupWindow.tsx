import React, { ReactNode } from "react";

interface PWProps {
  setPopup: (isPopup: boolean) => void;
  children: ReactNode;
}

const PopupWindow = ({ setPopup, children }: PWProps) => {
  return (
    <div className="absolute w-[90%] h-[90%] max-w-[1200px] max-h-[800px] min-h-[600px] bg-white border-2 border-black shadow-solid-8 flex flex-col">
      <div
        onClick={() => setPopup(false)}
        className="text-3xl pb-1 self-end pr-3 pt-3 right-3 h-[10%] hover:cursor-pointer hover:animate-spin flex justify-center items-center"
      >
        <p className="align-middle inline-table">×</p>
      </div>
      <div className="w-full h-[85%] flex px-5 flex-col">{children}</div>
    </div>
  );
};

export default PopupWindow;
