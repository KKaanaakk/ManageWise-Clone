import { FaBell, FaFire, FaMobileButton } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import connectanappimg from "../../public/connectanapp.jpg";
const ThirdSectionCard = ({ icon, heading, para }) => {
    return (
        <div className="w-full rounded-3xl bg-[#212121] p-12 flex flex-col justify-center items-center gap-6 text-center">
            <div className="p-2 rounded-lg bg-[#8247ff] text-4xl text-white">
                {icon}
            </div>
            <h2 className="text-2xl font-semibold text-white">{heading}</h2>
            <p className="text-base font-medium text-gray-500">{para}</p>
        </div>
    );
};

const ThirdSectionLower = () => {
    return (
        <div className="w-full p-4 pb-0 flex flex-col justify-center items-center gap-4 pt-[40vh] text-center">
            <p className="px-4 py-1 bg-white rounded-lg text-[#8247ff] text-xs font-bold inline-flex justify-center items-center gap-2">
                <FaTools /> INTEGRATIONS
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold text-white">
                Enable <span className="text-[#fe8162]">integration</span> with other{" "}
                <br />
                popular tools and platforms
            </h2>
            <p className="max-w-md text-lg font-medium text-gray-500">
                Seamlessly connect and amplify your workflow by enabling integration
                with a diverse array of widely-used tools and platforms.
            </p>
            <div className="w-full max-w-xl overflow-hidden rounded-t-3xl">
                <img src={connectanappimg.src} className="w-full" />
            </div>
        </div>
    );
};
const ThirdSection = () => {
    return (
        <section>
            <div className="bg-[#1c1c1c] max-w-screen-2xl mx-auto md:px-32 md:pt-24 px-10 pt-8 pb-0 space-y-4">
                <p className="px-4 py-1 bg-white rounded-lg inline-block text-[#8247ff] text-xs font-bold ">
                    🤩 AND MORE...
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold text-white">
                    Explore an array of features that elevate your{" "}
                    <span className="text-[#fe8162]">Productivity</span> to new
                    heights
                </h2>
                <p className="max-w-xl text-lg font-medium text-gray-500">
                    Discover the tools that will revolutionize the way you manage and
                    optimize your operations
                </p>
                <div className="w-full grid lg:grid-cols-3 gap-8">
                    {" "}
                    <ThirdSectionCard
                        icon={<FaMobileButton />}
                        heading={"Cross-Platform Compatibility"}
                        para={
                            "Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
                        }
                    />
                    <ThirdSectionCard
                        icon={<FaBell />}
                        heading={"Stay Informed with Essential Notifications"}
                        para={
                            "Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
                        }
                    />
                    <ThirdSectionCard
                        icon={<FaFire />}
                        heading={"Secure Data Encryption at all times"}
                        para={
                            "Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
                        }
                    />
                </div>
                <ThirdSectionLower />
            </div>
        </section>

    );
};
export default ThirdSection;


