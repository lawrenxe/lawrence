import React, { ReactNode } from "react";

interface PWProps {
  setPopup: (isPopup: boolean) => void;
  children: ReactNode;
}

const PopupWindow = ({ setPopup, children }: PWProps) => {
  return (
    <div className="absolute w-2/3 h-1/2 max-w-[1200px] max-h-[800px] min-h-[600px] bg-white border border-2 border-black shadow-solid-8">
      <div
        onClick={() => setPopup(false)}
        className="text-3xl pb-1 absolute top-10 right-10 hover:cursor-pointer hover:animate-spin flex justify-center items-center"
      >
        <p className="align-middle inline-table">×</p>
      </div>
      <div className="w-full h-full flex px-20 py-20 flex-col">{children}</div>
    </div>
  );
};

export default PopupWindow;
