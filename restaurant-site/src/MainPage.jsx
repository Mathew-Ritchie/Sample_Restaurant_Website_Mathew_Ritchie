import DinningComponent from "./components/DinningComponent";
import HeroCarousel from "./components/HeroCarousel";
import NavModalHeader from "./components/NavModalHeader";
import PastaComponent from "./components/PastatComponent";
import PizzaComponent from "./components/PizzaComponent";
// import Dessert from "@/components/dessert";
// import Footer from "@/components/Footer";

// import PastaComponent from "@/components/pastaComponent";


export default function MainPage() {
  return (
    <div>
     <NavModalHeader />
     <HeroCarousel />
     <DinningComponent />
     <PizzaComponent />
     <PastaComponent  />

      {/* <Dessert />
      <Footer />  */}
    </div>
  );
}