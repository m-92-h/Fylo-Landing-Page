import illustrationIntro from "../assets/illustration-intro.png";

export default function Hero() {
    return (
        <div className="component-one-bg flex flex-col items-center pt-14 md:pt-20 lg:pt-24 px-6 md:px-0">
            <div className="text-center mb-8 w-2xs sm:w-md lg:w-2xl transition-all duration-300">
                <img src={illustrationIntro} alt="illustration intro" className="w-full h-auto" />
            </div>
            <div className="text-center md:w-[60%] lg:w-[70%]">
                <h1 className="text-white text-[14px] sm:text-[16px] md:text-[24px] lg:text-[32px] font-bold mt-8">All your files in one secure location, accessible anywhere.</h1>
                <p className="text-gray-100 text-[12px] sm:text-[14px] md:text-[18px] lg:text-[22px] my-6 md:mb-10">
                    Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
                </p>
            </div>
            <div className="mx-auto pb-16 ">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-[12px] sm:text-[14px] md:text-[18px] lg:text-[22px] font-bold py-2 px-6 sm:px-8 lg:py-3 md:px-10 lg:px-14 rounded-full transition-all duration-300 cursor-pointer">Get Started</button>
            </div>
        </div>
    );
}
