import React, { useState, useEffect } from "react";

// The HeroCarousel component is a full-screen hero section with a fading image slideshow.
// All images and animation logic are contained within this single file.
const images = [
  "/images/landing-hero/pizza.png",
  "/images/pasta.png",
  "/images/landing-hero/beer-pour.png",
  "/images/landing-hero/pizza-in-oven.png",
  "/images/landing-hero/pizza2.png",
  "/images/landing-hero/pizza3.png",
];

const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect hook to handle the automatic image change.
  // It sets an interval to change the image every 5 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts.
    return () => clearInterval(timer);
  }, []);

//   const goToNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const goToPrevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

  return (
  
      <div className="relative w-full h-screen overflow-hidden  bg-black">
        {/* Image container */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Hero image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-3000 ease-in 
              ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>

        {/* Hero text overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-4">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg ">
              Bayside Pizzeria
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium drop-shadow-lg text-center">
              Authentic Italian Flavours by the Sea
            </p>
          </div>
        </div>
      </div>
  );
};

export default HeroCarousel;
