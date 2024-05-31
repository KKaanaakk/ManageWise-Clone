import asset7 from "../../public/asset 7.jpeg";
import asset8 from "../../public/asset 8.jpeg";
import asset9 from "../../public/asset 9.jpeg";
import asset10 from "../../public/asset 10.jpeg";
const Testimonials = () => {
    return (
        <section>
            <div className="my-20 max-w-screen-2xl mx-auto md:p-20 p-5 flex flex-col space-y-6">

                <h4 className="px-4 py-1 shadow rounded-lg w-fit text-[#8247ff] text-xs font-bold border border-[#8147ff1c] ">
                    🧡 TESTIMONIALS
                </h4>
                <h1 className="text-left text-3xl font-bold text-black sm:text-5xl">
                    Hear from our <span className="text-[#fe8162]">Satisfied</span>{" "}
                    clients
                </h1>
                <p className="max-w-xl text-lg font-medium text-gray-500">
                    Discover why our clients love working with us. Read their testimonials
                    and learn how we has helped businesses.
                </p>

                <div className="my-20 flex flex-col items-center space-y-6">
                    <div className="flex justify-center items-center py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="max-w-sm rounded-3xl border border-gray-200 shadow-md p-6">
                                <p className="text-black text-xl font-medium mb-4">
                                &apos;Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.&apos;
                                </p>
                                <div className="flex items-center">
                                    <img src={asset8.src} className="w-12 h-w-12" />
                                    <div className="ml-4">
                                        <p className="text-gray-900 font-semibold">David</p>
                                        <p className="text-gray-500">Freelancer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-sm rounded-3xl border border-gray-200 shadow-md p-6">
                                <p className="text-black text-xl font-medium mb-4">
                                &apos;Manage Wise transformed our team&apos;s productivity. The intuitive interface and powerful features have made a significant impact on our daily operations&apos;
                                </p>
                                <div className="flex items-center">
                                    <img src={asset7.src} className="w-12 h-w-12" />
                                    <div className="ml-4">
                                        <p className="text-gray-900 font-semibold">Emily</p>
                                        <p className="text-gray-500">Art Director</p>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-sm rounded-3xl border border-gray-200 shadow-md p-6">
                                <p className="text-black text-xl font-medium mb-4">
                                &apos;Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.&apos;
                                </p>
                                <div className="flex items-center">
                                    <img src={asset9.src} className="w-12 h-w-12" />
                                    <div className="ml-4">
                                        <p className="text-gray-900 font-semibold">Alex</p>
                                        <p className="text-gray-500">IT Manager</p>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-sm rounded-3xl border border-gray-200 shadow-md p-6">
                                <p className="text-black text-xl font-medium mb-4">
                                &apos;Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.&apos;
                                </p>
                                <div className="flex items-center">
                                    <img src={asset10.src} className="w-12 h-w-12" />
                                    <div className="ml-4">
                                        <p className="text-gray-900 font-semibold">Sarah</p>
                                        <p className="text-gray-500">Project Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;