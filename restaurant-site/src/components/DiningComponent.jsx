import React from "react";

export default function DiningComponent({id}) {
  return (
    <div
      className="w-full h-screen px-50 pt-25 pb-5 flex justify-center items-center bg-no-repeat bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('images/Interior-dining.png')`,
      }}
      id={id}
    >
      <div className="flex flex-col justify-center items-center relative z-10 h-full md:w-full w-full bg-gray-800/60 text-white  p-8">
       
        <div className="w-full h-full   flex">
          <div className="w-1/2 h-full"> 
          <div>
        <h1 className="text-5xl shadow-xl">Dining Experience</h1>
        <p className="text-2xl mt-5 shadow-xl">Step into a warm, modern-rustic pizzeria where natural textures, soft lighting, and contemporary design create an inviting atmosphere.
          <br></br>
          <br></br> 
          The aroma of wood-fired pizzas fills the space, setting the tone for a relaxed dining experience focused on handcrafted flavours, quality ingredients, and shared moments around the table.
          </p>
        </div> 
          </div>
          <div className="  w-1/2 flex flex-col justify-center items-center gap-1">
            <div className="w-2/3   flex justify-end items-center">
              <div className="p-2 bg-gray-900 h-auto rounded-lg shadow-lg"> 
                <img src={"images/interior-dining3.jpg"} alt="restaurant seating" className=" mx-auto w-60 h-auto rounded-lg shadow-lg"/>
              </div>
            </div>




            <div className="w-2/3   flex justify-start items-center">
              <div className="p-2 bg-gray-900 h-auto rounded-lg shadow-lg"> 
                <img src={"images/interior-dining3.jpg"} alt="restaurant seating" className=" mx-auto w-60 h-auto rounded-lg shadow-lg"/>
              </div>
            </div>
            <div className="w-2/3   flex justify-end items-center">
              <div className="p-2 bg-gray-900 h-auto rounded-lg shadow-lg"> 
                <img src={"images/interior-dining3.jpg"} alt="restaurant seating" className=" mx-auto w-60 h-auto rounded-lg shadow-lg"/>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}
