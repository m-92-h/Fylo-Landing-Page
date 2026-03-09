import logo from "../assets/logo.svg";
import emailIcon from "../assets/icon-email.svg";
import locationIcon from "../assets/icon-location.svg";
import phoneIcon from "../assets/icon-phone.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { useState } from "react";
import type { IconType } from "react-icons";

interface CardFooterProps {
    email: string;
    setEmail: (value: string) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    error: string;
}

interface SocialIcon {
    nameIcon: string;
    Icon: IconType;
    color: string;
}

export default function Footer() {
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            setError("Please enter your email address");
        } else if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
        } else {
            setError("");
            alert("Thank you for signing up!");
            setEmail("");
        }
    };

    return (
        <footer className="bg-footer text-gray-400 py-24 relative mt-[clamp(16rem,20vw,20rem)]">
            <CardFooter email={email} setEmail={setEmail} handleSubmit={handleSubmit} error={error} />
            <div className="w-[90%] mx-auto mb-[clamp(1.5rem,2vw,2rem)] mt-[clamp(4rem,14vw,20rem)]">
                <div className="w-24 md:w-32 lg:w-40">
                    <img src={logo} alt="fylo Logo" className="w-full h-auto" />
                </div>
            </div>
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-2">
                <div className="md:col-span-2">
                    <div className="flex gap-[clamp(1rem,2vw,1.5rem)]">
                        <div className="shrink-0 w-[clamp(.7rem,2vw,1rem)]">
                            <img src={locationIcon} alt="location icon" className="w-full" />
                        </div>
                        <p className="text-[clamp(.8rem,2vw,1rem)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className="md:col-span-2 md:ps-3 lg:ps-12">
                    <div className="flex gap-[clamp(1rem,2vw,1.5rem)]">
                        <div className="shrink-0 mb-6 w-[clamp(.7rem,2vw,1rem)]">
                            <img src={phoneIcon} alt="icon phone" className="w-full" />
                        </div>
                        <p className="text-[clamp(.8rem,2vw,1rem)]">+1-543-123-4567</p>
                    </div>
                    <div className="flex gap-[clamp(1rem,2vw,1.5rem)]">
                        <div className="shrink-0 w-[clamp(.7rem,2vw,1rem)]">
                            <img src={emailIcon} alt="icon email" className="w-full" />
                        </div>
                        <p className="text-[clamp(.8rem,2vw,1rem)]">example@fylo.com</p>
                    </div>
                </div>
                <div>
                    <ul className="text-[clamp(.8rem,2vw,1rem)]">
                        <li><a href="#AboutUs" className="my-2 hover:text-white cursor-pointer">About Us</a></li>
                        <li className="my-2 hover:text-white cursor-pointer"><a href="#jobs">Jobs</a></li>
                        <li className="my-2 hover:text-white cursor-pointer"><a href="#press">Press</a></li>
                        <li className="my-2 hover:text-white cursor-pointer"><a href="#blog">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="text-[clamp(.8rem,2vw,1rem)]">
                        <li><a href="#contactUs" className="my-2 hover:text-white cursor-pointer">Contact Us</a></li>
                        <li className="my-2 hover:text-white cursor-pointer"><a href="#terms">Terms</a></li>
                        <li className="my-2 hover:text-white cursor-pointer"><a href="#privacy">Privacy</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex gap-3 md:gap-4 justify-center md:justify-start">
                        {([
                            { nameIcon: "Facebook", Icon: FaFacebookF, color: "text-blue-600" },
                            { nameIcon: "Twitter", Icon: FaTwitter, color: "text-blue-400" },
                            { nameIcon: "Instagram", Icon: FaInstagram, color: "text-pink-600" },
                        ] as SocialIcon[]).map((item, index) => (
                            <li
                                key={index}
                                className={`
                                    w-[clamp(1.3rem,4vw,1.9rem)] 
                                    h-[clamp(1.3rem,4vw,1.9rem)] 
                                    flex items-center justify-center 
                                    border rounded-full cursor-pointer transition-all duration-100 
                                    text-[clamp(.7rem,2vw,1rem)]
                                    ${item.color} md:p-2
                                `}
                            >
                                <a href={`#${item.nameIcon}`}>
                                    <item.Icon />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

function CardFooter({ email, setEmail, handleSubmit, error }: CardFooterProps) {
    return (
        <div className="bg-footercard absolute -top-36 left-1/2 -translate-x-1/2 text-center rounded-xl shadow-2xl p-5 md:p-10 w-[85%] md:w-[50%] z-10">
            <h2 className="text-white font-bold text-[clamp(1rem,4vw,1.5rem)] mb-4">Get early access today</h2>
            <p className="mb-10 text-gray-300 text-[clamp(.8rem,2vw,1.1rem)]">
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 lg:items-start justify-center h-[clamp(3rem,6vw,4rem)] my-4 lg:my-0">
                <div className="flex flex-col flex-1 text-left">
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className={`w-full bg-white border rounded-full text-[clamp(.8rem,2vw,1rem)] py-1 sm:py-1.5 lg:py-2 px-[clamp(.8rem,2vw,1rem)] focus:outline-none text-black ${
                            error ? "border-red-500" : "border-transparent"
                        }`}
                    />
                    {error && <p className="text-red-500 text-xs italic mt-1 ml-4 font-bold">{error}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-300 text-white font-bold text-[clamp(.8rem,2vw,1rem)] py-1 sm:py-1.5 lg:py-2 px-[clamp(.8rem,2vw,1rem)] rounded-full transition-all duration-200 shadow-lg cursor-pointer"
                >
                    Get Started For Free
                </button>
            </form>
        </div>
    );
}