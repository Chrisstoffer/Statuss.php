
import React from "react";

const BGCHeader = () => (
  <div className="w-full bg-white rounded-t-xl flex flex-col p-0 shadow-md mb-0 border-b-0">
    {/* Logo and title */}
    <div className="flex justify-center px-2 pt-4 pb-1 w-full">
      <img
        src="/lovable-uploads/4f1bfbe3-ddb0-418c-967b-59bc4407a5a3.png"
        alt="BGC Trust University Bangladesh Header"
        className="w-full h-auto object-contain"
        draggable={false}
        style={{ userSelect: "none", pointerEvents: "none" }}
      />
    </div>
  </div>
);

export default BGCHeader;
