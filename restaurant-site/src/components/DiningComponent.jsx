import React from "react";

export default function DiningComponent({id}) {
  return (
    <div
      className="w-full sm:min-h-screen sm:px-10 lg:px-25 pt-20 pb-5 flex justify-center items-center bg-no-repeat bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('images/Interior-dining.png')`,
      }}
      id={id}
    >
      <div className="flex flex-col justify-center items-center relative z-10 h-full sm:w-full w-full bg-gray-800/60 text-white p-3 sm:p-8">
       
        <div className="w-full h-full flex flex-col sm:flex-row">
          <div className=" w-full sm:w-1/2 h-full"> 
          <div className="w-full">
        <h1 className="text-4xl sm:text-5xl shadow-xl w-full">Dining Experience</h1>
        <p className="text-xl md:text-2xl mt-5 shadow-xl">Step into a warm, modern-rustic pizzeria where natural textures, soft lighting, and contemporary design create an inviting atmosphere.
          <br></br>
          <br></br> 
          The aroma of wood-fired pizzas fills the space, setting the tone for a relaxed dining experience focused on handcrafted flavours, quality ingredients, and shared moments around the table.
          </p>
        </div> 
          </div>

          {/* Images Section */}
          <div className=" pt-4 sm:pt-0  sm:w-1/2 flex flex-col justify-center items-center gap-1">
            {/* First image */}
            <div className=" w-full md:w-3/4 flex justify-center sm:justify-end items-center">
              <div className="p-2 bg-gray-900 h-auto rounded-lg shadow-lg"> 
                <img src={"images/interior-dining3.jpg"} alt="restaurant seating" className=" mx-auto w-full sm:w-60 h-auto rounded-lg shadow-lg"/>
              </div>
            </div>
            {/* Second image */}
            <div className=" w-full md:w-3/4   flex justify-center sm:justify-start items-center">
              <div className="p-2 bg-gray-900 h-auto rounded-lg shadow-lg"> 
                <img src={"images/cocktail.jpg"} alt="restaurant seating" className=" mx-auto w-full sm:w-50 h-auto rounded-lg shadow-lg"/>
              </div>
            </div>
            {/* Third image */}
            <div className=" w-full md:w-3/4   flex justify-center sm:justify-end items-center">
              <div className="p-2 bg-gray-900 h-auto rounded-lg shadow-lg"> 
                <img src={"images/wine.jpg"} alt="restaurant seating" className=" mx-auto w-full sm:w-60 h-auto rounded-lg shadow-lg"/>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}
