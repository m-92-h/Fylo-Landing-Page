import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";
import bgQuotes from "../assets/images/bg-quotes.png";

export default function Cards() {
    return (
        <div className="w-[80%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-26 mb-54 lg:my-64 relative">
            <img src={bgQuotes} alt="background quotes" className="w-10 sm:w-12 md:w-14 absolute -top-6 sm:-top-8 md:-top-9 -left-3 sm:-left-4 z-0" />
            <Card
                quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine."
                profileImg={profile1}
                name="Satish Patel"
                title="Founder & CEO, Huddle"
            />
            <Card
                quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine."
                profileImg={profile2}
                name="Bruce McKenzie"
                title="Founder & CEO, Huddle"
            />
            <Card
                quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine."
                profileImg={profile3}
                name="Iva Boyd"
                title="Founder & CEO, Huddle"
            />
        </div>
    );
}

function Card({ quote, profileImg, name, title }) {
    return (
        <div className="bg-card p-6 rounded-md text-start shadow-lg relative z-10">
            <p className="text-gray-100 text-[12px] sm:text-[14px] lg:text-[16px] mb-8">{quote}</p>
            <div className="flex items-center justify-start gap-4">
                <img src={profileImg} alt={name} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
                <div className="text-start">
                    <h3 className="text-white text-[12px] lg:text-[18px] font-bold">{name}</h3>
                    <p className="text-gray-400 text-[12px] lg:text-[16px]">{title}</p>
                </div>
            </div>
        </div>
    );
}
