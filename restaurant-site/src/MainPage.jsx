import Dinning from "./components/Dinning";
import HeroCarousel from "./components/HeroCarousel";
import NavModalHeader from "./components/NavModalHeader";
// import Dessert from "@/components/dessert";
// import Dinning from "@/components/dinning";
// import Footer from "@/components/Footer";
// import PizzaComponent from "@/components/pizzaComponent";
// import PastaComponent from "@/components/pastaComponent";


export default function MainPage() {
  return (
    <div>
    < NavModalHeader />
    <HeroCarousel />
     <Dinning />
      {/* <PizzaComponent />
      <PastaComponent />
      <Dessert />
      <Footer /> */}
    </div>
  );
}