import DessertComponent from "./components/DessertComponent";
import DinningComponent from "./components/DinningComponent";
import Footer from "./components/Footer";
import GalleryComponent from "./components/GalleryComponent";
import HeroCarousel from "./components/HeroCarousel";
import NavModalHeader from "./components/NavModalHeader";
import PastaComponent from "./components/PastatComponent";
import PizzaComponent from "./components/PizzaComponent";
// import Dessert from "@/components/dessert";
// import Footer from "@/components/Footer";

// import PastaComponent from "@/components/pastaComponent";


export default function MainPage() {
  return (
    <div className="w-full">
     <NavModalHeader />
     <HeroCarousel />
     <DinningComponent />
     <PizzaComponent />
     <PastaComponent  />
     <DessertComponent />
     <GalleryComponent />
    <Footer />
    </div>
  );
}