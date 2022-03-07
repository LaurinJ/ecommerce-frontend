import React from "react";

function Loader({ message }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-50 opacity-50 z-50">
      <div className="w-20 h-20 border-t-4 border-l-4 border-b-4 border-primary rounded-full animate-spin"></div>
      <span className="text-lg font-medium">{message}</span>
    </div>
  );
}

export default Loader;
