import illustrationStayProductive from "../assets/illustration-stay-productive.png";
import iconArrow from "../assets/icon-arrow.svg";

export default function Productive() {
    return (
        <div className="component-three grid md:grid-cols-2 gap-x-16 px-6 md:px-0 md:w-[80%] mx-auto my-20">
            <div>
                <img src={illustrationStayProductive} alt="illustration stay productive" className="w-full max-w-xl mx-auto" />
            </div>
            <div className="text-start text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] mt-12">
                <h1 className="text-white text-[14px] sm:text-[16px] md:text-[22px] lg:text-[24px] font-bold">Stay productive, wherever you are</h1>
                <p className="text-gray-100 my-6">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p className="text-gray-100 my-6">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <button className="flex items-center justify-start text-cyan-500 font-bold hover:text-cyan-300 border-b border-cyan-300 md:border-b-0 md:hover:border-b pb-1 transition-all duration-100 cursor-pointer">
                    <span>See how Fylo works</span>
                    <img src={iconArrow} alt="arrow icon" className="w-5 lg:w-6 ml-2 mt-1 md:mt-0" />
                </button>
            </div>
        </div>
    );
}