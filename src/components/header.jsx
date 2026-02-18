import logo from "../assets/images/logo.svg";

export default function Header() {
    return (
        <header className="header w-full h-14 sm:h-20 md:h-24 flex items-center justify-between px-4 md:px-8 text-gray-300">
            <div className="w-18 sm:w-24 md:w-32 lg:w-40 transition-all duration-300">
                <img src={logo} alt="fylo Logo" className="w-full h-auto" />
            </div>
            <div className="flex space-x-2 sm:space-x-4 md:space-x-6 text-[12px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-medium">
                <a href="#Features" className="hover:text-white hover:underline underline-offset-8 decoration-white transition-all duration-300">
                    Features
                </a>
                <a href="#Team" className="hover:text-white hover:underline underline-offset-8 decoration-white transition-all duration-300">
                    Team
                </a>
                <a href="#SignIn" className="hover:text-white hover:underline underline-offset-8 decoration-white transition-all duration-300">
                    Sign In
                </a>
            </div>
        </header>
    );
}
