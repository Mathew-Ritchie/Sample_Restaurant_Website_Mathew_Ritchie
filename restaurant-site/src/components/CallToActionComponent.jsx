import '../App.css'


export default function CallToActionComponent() {
    return (
        <div className="w-full bg-red-800 py-10 px-5 flex flex-col justify-center items-center text-center">
            <h2 className=" dancing-script text-3xl md:text-6xl font-bold text-white mb-4">
                Ready to Savour the Best Pizza in Town?
            </h2>
            {/* <p className="text-white mb-6 max-w-xl">
                Join us for an unforgettable dining experience filled with mouth-watering flavors, cozy ambiance, and exceptional service. Book your table now and indulge in the ultimate pizza feast! 
            </p> */}
            <a 
                href="#contactUs"
                className="bg-white text-red-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
            >
                Reserve Your Table
            </a>
        </div>
    );
}