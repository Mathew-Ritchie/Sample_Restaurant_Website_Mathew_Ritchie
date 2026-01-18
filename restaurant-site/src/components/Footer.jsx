import React from "react";
import { Linkedin, Facebook, Instagram, Contact } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Footer({ id }) {
  return (
    <div
      className="w-full min-h-screen px-10 py-10 flex justify-center items-center gap-10 bg-gray-900 text-white"
      id={id}
    >
      <div className="relative z-10 md:w-full w-full bg-gray-900 text-white p-8 overflow-y-auto ">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 rounded-lg text-center">
          Contact Us
        </h1>
        <div className="w-full flex flex-col justify-center items-center gap-20">
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5">
            <img className="w-70" src={"/images/pizza-oven-sketch.png"} width={1500} height={1000} />


            {/* Contact Information Div */}
            <div className=" flex flex-col justify-start items-start space-y-6 text-gray-300 leading-relaxed">
              {/* Phone */}
              <div className=" flex justify-start items-center gap-2">
                <img src="/icons/contact.gif" className="w-10" />
                <p className="contact-details">+27 (000) 1111 222</p>
                </div>
              {/* Email */}
              <div className=" flex justify-start items-center gap-2"> 
                <img src="/icons/email.gif" className="w-10" />
                <p className="contact-details">bestpizza@pizza.co.za</p>
                </div>
              {/* Address */}
              <div className=" flex justify-start items-center gap-2">
                <img src="/icons/google-maps.gif" className="w-10" />
                <p className="contact-details">n.o. 1 One Street, Cape Town</p>
                </div>
              
             
              
            </div>

            
          </div>
          <ContactForm />

          <div>
            {" "}
            <div className="flex items-center space-x-6 sm:space-x-8">
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-linkedin-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              {/* Facebook Link */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-facebook-500"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>

              {/* Instagram Link */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-instagram-500"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
