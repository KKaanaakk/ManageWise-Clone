import Image from 'next/image'
import asset from '../../public/asset 12.png'

const JoinUs = () => {
    return (
        <section className='p-5 bg-gradient-to-t from-[#FDF2EC] to-white'>
            <div className="mx-auto max-w-5xl rounded-2xl border bg-white mb-10 shadow-xl">
                <div className="flex flex-col md:flex-row items-center justify-between p-5 md:p-20">
                    <div className="w-full md:w-1/2 text-left">
                        <h4 className="px-4 py-1 shadow rounded-lg inline-block text-[#8247ff] text-xs font-bold border border-[#8147ff1c]">
                            👋 DON&apos;T MISS OUT
                        </h4>
                        <h2 className="text-4xl font-bold my-4">
                            Unleash your <span className="text-orange-500">Potential</span> with us
                        </h2>
                        <p className="text-gray-700 mb-8">
                            Join our community of ambitious individuals and organizations eager to make a difference.
                        </p>
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
                            Try out now
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 gap-6 flex flex-col items-center">
                        <div className="text-center">
                            <span className="text-purple-600 text-lg border shadow-xl p-4 rounded-2xl">
                                200+ Happy users
                            </span>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src={asset.src} alt="Happy Users" width={500} height={400} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default JoinUs
