import Image from "next/image";
import img from "../../public/herosectionimage.webp";
import { FaArrowAltCircleRight, FaPlayCircle } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="bg-gradient-to-t from-white to-[#FDF2EC]">
            <div className="flex flex-col items-center space-y-6 p-5 justify-center w-full gap-4 text-center">
                <h4 className="px-4 py-1 shadow rounded-lg bg-white text-[#8247ff] text-xs font-bold border border-[#8147ff1c] ">
                    👋 WELCOME TO MANAGE WISE!
                </h4>
                <h2 className="text-center max-w-6xl text-5xl md:text-7xl font-semibold">
                    Empower your business with <span className="text-[#fe8162]">Strategic</span> insights
                </h2>
                <p className="max-w-3xl text-gray-500 text-xl text-center font-medium">
                    Powerful management platform designed to streamline your business
                    operations, boost productivity, and drive success
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <button className="flex items-center justify-center px-12 rounded-2xl text-lg font-semibold py-3 bg-[#8247ff] text-white">
                        Get Started <FaArrowAltCircleRight className="ml-2" />
                    </button>
                    <button className="flex items-center justify-center px-12 py-3 border shadow rounded-2xl border-black/50">
                        Watch Demo <FaPlayCircle className="ml-2" />
                    </button>
                </div>
                <div className="max-w-6xl mb-10 shadow-lg rounded-3xl ">
                    <img src={img.src} className="w-full h-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
