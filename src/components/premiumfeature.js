import Home from "../../public/Home2.webp";
import col1 from "../../public/col1.png";
import col2 from "../../public/col2.png";
import col3 from "../../public/col3.png";
const PremiumFeature = () => {
    return (
        <section>
            <div className="my-20 flex p-5 flex-col items-center space-y-6 max-w-7xl mx-auto">
                <h4 className="px-4 py-1 shadow rounded-lg text-[#8247ff] text-xs font-bold border border-[#8147ff1c] ">
                    🔥 PREMIER FEATURES
                </h4>
                <h1 className="px-4 text-center text-3xl font-semibold text-black sm:text-5xl">
                    Discover our product&apos;s{" "}
                    <span className="text-[#fe8162]">Capabilities</span>{" "}
                </h1>
                <p className="max-w-2xl text-gray-500 text-xl text-center font-medium">
                    Don&apos;t settle for mediocrity - embrace the future of management with
                    Manage Wise.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#ededfa] p-6 rounded-2xl border">
                    <h2 className="text-4xl md:text-7xl rounded-2xl p-2 my-4">⭐️</h2>
                        <h1 className="md:text-4xl text-2xl font-semibold leading-relaxed">
                            Boost productivity and streamline workflow with us. Enjoy our
                            intuitive interface and robust features.
                        </h1>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border ">
                    <img src={Home.src}  />
                        <h2 className="text-xl font-semibold mb-2">Flexible Scheduling</h2>
                        <p className="text-gray-400 font-medium">
                            Stay productive with our flexible scheduling system
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-2xl border ">
                    <img src={col1.src}  />
                        <h2 className="text-xl font-semibold mb-2">
                            Smart Task Management
                        </h2>
                        <p className="text-gray-400 font-medium">
                            Say goodbye to chaos with our smart task management system
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border ">
                    <img src={col2.src} />
                        <h2 className="text-xl font-semibold mb-2">Easy Communication</h2>
                        <p className="text-gray-400 font-medium">
                            Collaborate seamlessly with your team in real-time
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border ">
                    <img src={col3.src} className="" />
                        <h2 className="text-xl font-semibold mb-2">Analytics</h2>
                        <p className="text-gray-400 font-medium">
                            Gain valuable insights with our advanced analytics feature
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default PremiumFeature