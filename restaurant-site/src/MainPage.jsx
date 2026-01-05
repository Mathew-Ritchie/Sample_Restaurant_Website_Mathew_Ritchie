import CallToActionComponent from "./components/CallToActionComponent";
import DessertComponent from "./components/DessertComponent";
import DiningComponent from "./components/DiningComponent";
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
     <DiningComponent id="dining" />
     <PizzaComponent id="pizza" />
     <PastaComponent id="pasta" />
     <DessertComponent id="dessert" />
     <CallToActionComponent />
     <GalleryComponent id="gallery" />
    <Footer id="contactUs" />
    </div>
  );
}