import React from "react";

export default function Dinning() {
  return (
    <div
      className="w-full min-h-screen px-20 py-10 flex justify-center items-center bg-no-repeat bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('images/Interior-dining.png')`,
      }}
    >
      <div className="flex flex-col justify-center items-center relative z-10 md:w-full w-full bg-gray-800/60 text-white p-8 overflow-y-auto min-h-screen">
        <h1 className="text-4xl">An Incredible Dinning Experience</h1>
        <h2 className="text-2xl"></h2>
      </div>
    </div>
  );
}
