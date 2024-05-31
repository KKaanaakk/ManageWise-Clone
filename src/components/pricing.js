const Pricing = () => {
    return (
        <section id="pricing">
            <div className="my-20 flex flex-col max-w-screen-2xl mx-auto items-center p-5 space-y-4">

                <h4 className="px-4 py-1 shadow rounded-lg text-[#8247ff] text-xs font-bold border border-[#8147ff1c] ">
                    💲 PRICING
                </h4>
                <h1 className="px-4 text-center text-3xl font-semibold text-black sm:text-5xl">
                    Select your ideal <span className="text-[#fe8162]">Pricing</span> plan
                </h1>
                <p className="max-w-xl text-lg md:text-xl  text-center font-medium text-gray-500">
                    At Manage Wise, we believe in providing you with pricing plans that
                    adapt to your unique needs.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:p-20 ">
                    <div className="bg-[#ededfa] rounded-3xl shadow-md p-8">
                        <h4 className="px-4 py-1 mb-4 w-fit shadow rounded-lg bg-white text-[#fe8162] text-xs font-bold border border-[#8147ff1c] ">
                            FREE
                        </h4>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl md:text-5xl  font-bold">$0</span>
                            <span className="text-lg ml-1">/month</span>
                        </div>
                        <ul className="mb-6">
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Access to all basic features</span>
                            </li>
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Reporting and analytics</span>
                            </li>
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Up to 5 individual users</span>
                            </li>
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Chat and email support</span>
                            </li>
                        </ul>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
                            Get started
                        </button>
                    </div>

                    <div className="bg-[#1c1c1c] text-white rounded-3xl shadow-md p-8">
                        <h4 className="px-4 py-1 mb-4 w-fit shadow rounded-lg bg-white text-[#fe8162] text-xs font-bold border border-[#8147ff1c] ">
                            STANDARD
                        </h4>

                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl md:text-5xl  font-bold">$25</span>
                            <span className="text-lg ml-1">/month</span>
                        </div>
                        <ul className="mb-6">
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Access to all basic features</span>
                            </li>
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Reporting and analytics</span>
                            </li>
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Up to 5 individual users</span>
                            </li>
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Chat and email support</span>
                            </li>
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>C3+ integrations</span>
                            </li>
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Account performance reporting</span>
                            </li>
                        </ul>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
                            Get started
                        </button>
                    </div>

                    <div className="bg-[#ededfa] rounded-3xl shadow-md p-8">
                        <h4 className="px-4 py-1 mb-4 w-fit shadow rounded-lg bg-white text-[#fe8162] text-xs font-bold border border-[#8147ff1c] ">
                            BUSSINESS
                        </h4>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl md:text-5xl font-bold">$42</span>
                            <span className="text-lg ml-1">/month</span>
                        </div>
                        <ul className="mb-6">
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Access to all basic features</span>
                            </li>
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Reporting and analytics</span>
                            </li>
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Up to 5 individual users</span>
                            </li>
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Chat and email support</span>
                            </li>
                            <li className="flex items-center text-gray-500 font-medium mb-2">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>C3+ integrations</span>
                            </li>
                        </ul>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
                            Get started
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default Pricing