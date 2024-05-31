import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import logo from "../../public/logo.jpg";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="bg-[#FDF2EC] px-20 py-12 space-y-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <Image src={logo.src} alt="ManageWise Logo" width={50} height={50} className="mr-2" />
                    <span className="text-lg font-semibold">ManageWise</span>
                </div>
                <div className="flex flex-col space-y-4 text-gray-700">
                    <a href="#features" className="hover:underline">Features</a>
                    <a href="#faq" className="hover:underline">FAQ</a>
                    <a href="#pricing" className="hover:underline">Pricing</a>
                    <a href="#testimonials" className="hover:underline">Testimonials</a>
                </div>
            </div>
            <hr />
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-8">
                <p className="text-gray-700 mb-4 md:mb-0">&copy; 2022 ManageWise, Inc.</p>
                <div className="flex space-x-4">
                    <FaInstagram className="text-gray-700 hover:text-gray-900" />
                    <FaXTwitter className="text-gray-700 hover:text-gray-900" />
                    <FaLinkedinIn className="text-gray-700 hover:text-gray-900" />
                </div>
            </div>
        </footer>

    );
}

export default Footer