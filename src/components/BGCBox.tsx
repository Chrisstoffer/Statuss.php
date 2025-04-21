
import React from "react";

const BGCBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white rounded-xl shadow border border-gray-300 w-full max-w-3xl mx-auto p-7 mt-4 mb-8 min-h-[320px]">
    {children}
  </div>
);

export default BGCBox;
