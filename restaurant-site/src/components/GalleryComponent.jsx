export default function GalleryComponent() {

const images = [
  "/images/landing-hero/pizza.png",
  "/images/pasta.png",
  "/images/landing-hero/beer-pour.png",
  "/images/landing-hero/pizza-in-oven.png",
  "/images/landing-hero/pizza2.png",
  "/images/landing-hero/pizza3.png",
];


    return (
        <div className="flex justify-center items-center bg-gray-900 py-10 px-5">
        <div className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-900 justify-center" id="gallery">
           {images.map((src, index) => (
             <div key={index} className="gallery-item p-2 bg-gray-700  max-h-65 w-75 "> 
               <img src={src} alt={`Gallery image ${index + 1}`} className="gallery-image h-full w-full " />
             </div>
           ))}
        </div>
        </div>
    );
}