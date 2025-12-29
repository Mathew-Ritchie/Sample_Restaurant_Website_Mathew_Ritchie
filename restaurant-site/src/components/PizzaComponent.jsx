import React from "react";

export default function PizzaComponent() {
  return (
    <div className="relative min-h-screen" id="pizza">
      {/* Background Image Container - This will be the full-screen layer */}
      <div
        className="absolute inset-0 bg-cover bg-[position:10%_60%]"
        style={{
          backgroundImage: `url('/images/pizza-in-oven2.png')`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Left side: Scrollable content layered on top */}
      <div className="relative z-10 md:w-1/2 w-full bg-gray-800/80 text-white pt-25 p-8 overflow-y-auto min-h-screen">
        <h1 className="text-4xl md:text-4xl font-extrabold mb-8 rounded-lg">Oven Baked Pizza</h1>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Our pizzas start with a crust that's crafted daily, using a simple, quality dough that
            provides the perfect foundation. It’s light and airy, with a satisfying crunch on the
            outside and a soft, flavorful interior. We then top it with our homemade tomato sauce,
            simmered with fresh herbs, and a generous layer of creamy, whole-milk mozzarella that
            melts into a golden, bubbly blanket.
          </p>
          <p>
            We believe the best pizza is all about the ingredients. That's why we use only the
            freshest toppings, from classic pepperoni that crisps up perfectly to vibrant vegetables
            and savory Italian sausage. Each ingredient is carefully selected to ensure every bite
            is a perfect blend of flavors and textures, making our pizza an experience you’ll want
            to have again and again.
          </p>
        </div>
      </div>
    </div>
  );
}
