import React, { useState } from 'react';

export default function GalleryComponent() {
  // State to track the currently selected image URL
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "/images/landing-hero/pizza.png",
    "/images/pasta.png",
    "/images/landing-hero/beer-pour.png",
    "/images/landing-hero/pizza-in-oven.png",
    "/images/landing-hero/pizza2.png",
    "/images/landing-hero/pizza3.png",
    "/images/Interior-dining.png",
    "/images/pasta2.png",
    "/images/cocktail.jpg", 
    "/images/interior-dining3.jpg",
    "/images/pasta3.jpg",
    "/images/wine.jpg",

    
  ];

  return (
    <div className="flex justify-center items-center bg-gray-900 py-10 px-2  sm:px-20 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-25" id="gallery">
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