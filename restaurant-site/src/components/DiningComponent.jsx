import React from "react";

export default function DiningComponent({id}) {
  return (
    <div
      className="w-full h-screen px-50 py-25 flex justify-center items-center bg-no-repeat bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('images/Interior-dining.png')`,
      }}
      id={id}
    >
      <div className="flex flex-col justify-center items-center relative z-10 h-full md:w-full w-full bg-gray-800/40 text-white  p-8">
        <h1 className="text-4xl">An Incredible Dining Experience</h1>
        <h2 className="text-2xl"></h2>
      </div>
    </div>
  );
}
