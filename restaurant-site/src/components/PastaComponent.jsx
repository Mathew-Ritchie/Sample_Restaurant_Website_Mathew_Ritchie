import React from "react";
import { motion } from "framer-motion";
export default function PastaComponent() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Container - This will be the full-screen layer */}
      <div
        className="absolute inset-0 bg-cover bg-[position:90%_60%]"
        style={{
          backgroundImage: `url('/images/pasta2.png')`,
          backgroundAttachment: "fixed",
        }}
        id="pasta"
      ></div>

      {/* Right side: Scrollable content layered on top */}
      <div className="relative z-10 md:w-1/2 w-full bg-gray-800/80 text-white pt-25  p-8 overflow-y-auto min-h-screen md:ml-auto">
        <h1 className="text-4xl md:text-4xl font-extrabold mb-8 rounded-lg">Home Made Pasta</h1>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Our pasta dishes begin with a foundation of perfectly cooked pasta, each shape selected
            to pair with its sauce. We use high-quality durum wheat pasta, cooked al dente to
            achieve that ideal balance of firm and tender. This provides the perfect base for the
            rich, flavorful sauces we create from scratch.
          </p>
          <p>
            Each sauce is a tribute to authentic Italian tradition, made with the freshest
            ingredients. From our slow-simmered marinara, bursting with the taste of vine-ripened
            tomatoes, to our creamy Alfredo, rich with butter and Parmesan, every sauce is crafted
            to cling to the pasta, ensuring a perfect bite every time. We top each dish with a final
            touch of fresh herbs or a sprinkle of cheese, bringing together a truly satisfying meal.
          </p>
           <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            //whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/pasta2.png" alt="Pizza in Oven" className="w-full sm:h-60 md:h-50  object-cover rounded-lg" />
            </motion.div>
  
            <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            // whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/pasta3.jpg" alt="Delicious pasta" className="w-full sm:h-60 md:h-50  object-cover rounded-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
