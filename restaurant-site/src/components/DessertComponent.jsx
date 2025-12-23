import React from "react";

export default function DessertComponent() {
  return (
    <div className="relative min-h-screen" id="dessert">
      {/* Background Image Container - This will be the full-screen layer */}
      <div
        className="absolute  inset-0 bg-cover bg-[position:10%_60%]"
        style={{
          backgroundImage: `url('/images/dessert.png')`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Left side: Scrollable content layered on top */}
      <div className="relative z-10 md:w-1/2 w-full bg-gray-800/80 text-white p-8 overflow-y-auto min-h-screen">
        <h1 className="text-4xl md:text-4xl font-extrabold mb-8 rounded-lg">Decadent Desserts </h1>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Our desserts are the perfect finale to any meal, crafted with the same care and
            attention as our main courses. Each one is made in-house using premium ingredients to
            ensure a truly satisfying and sweet conclusion. From the creamy richness of our
            traditional tiramisu, layered with coffee-soaked ladyfingers and mascarpone, to the
            delicate, crisp shell and sweet ricotta filling of our cannoli, every dessert is a
            celebration of classic Italian flavors.
          </p>
          <p>
            We believe a great dessert should be both comforting and exciting. Our offerings provide
            a taste of indulgence, whether you're savoring the smooth, velvety texture of our panna
            cotta or enjoying a warm, decadent chocolate lava cake. It's the ideal way to complete
            your dining experience with a moment of pure, delicious bliss.
          </p>
        </div>
      </div>
    </div>
  );
}
