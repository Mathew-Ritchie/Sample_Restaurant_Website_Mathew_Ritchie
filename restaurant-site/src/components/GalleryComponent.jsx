import React, { useState } from 'react';

export default function GalleryComponent() {
  // State to track the currently selected image URL
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "/images/landing-hero/pizza.jpeg",
    "/images/pasta.jpeg",
    "/images/landing-hero/beer-pour.jpeg",
    "/images/landing-hero/pizza-in-oven.jpeg",
    "/images/landing-hero/pizza2.jpeg",
    "/images/landing-hero/pizza3.jpeg",
    "/images/Interior-dining.jpeg",
    "/images/pasta2.jpeg",
    "/images/cocktail.jpeg", 
    "/images/interior-dining3.jpeg",
    "/images/pasta3.jpeg",
    "/images/wine.jpeg",

    
  ];

  return (
    <div id="gallery" className="flex flex-col justify-center items-center bg-gray-900 py-10 px-2  sm:px-20 w-full">
      <h1 className="text-4xl font-bold text-white mb-10  pt-15">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" >
        {images.map((src, index) => (
          <div 
            key={index} 
            className="gallery-item p-2 bg-gray-700 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setSelectedImg(src)} // Open modal on click
          > 
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="object-cover h-full w-full" 
            />
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImg(null)} // Close modal when clicking background
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            {/* Close Button */}
            <button 
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
            
            <img 
              src={selectedImg} 
              alt="Selected" 
              className="max-h-[85vh] max-w-full rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </div>
        </div>
      )}
    </div>
  );
}