import iconAccessAnywhere from "../assets/images/icon-access-anywhere.svg";
import iconAnyFile from "../assets/images/icon-any-file.svg";
import iconCollaboration from "../assets/images/icon-collaboration.svg";
import iconSecurity from "../assets/images/icon-security.svg";

export default function ComponentTwo() {
    return (
        <div className="component-two grid items-center justify-center md:grid-cols-2 gap-24 p-8 md:p-10 lg:p-12 text-white">
            <Card
                icon={iconAccessAnywhere}
                iconTitle="icon-access-anywhere"
                title="Access your files, anywhere"
                description="The ability to use a smartphone, tablet, or computer to access your account means your 
                            files follow you everywhere."
            />
            <Card
                icon={iconSecurity}
                iconTitle="icon-security"
                title="Security you can trust"
                description="2-factor authentication and user-controlled encryption are just a couple of the security 
                            features we allow to help secure your files."
            />
            <Card
                icon={iconCollaboration}
                iconTitle="icon-collaboration"
                title="Real-time collaboration"
                description="Securely share files and folders with friends, family and colleagues for live collaboration. 
                            No email attachments required."
            />
            <Card
                icon={iconAnyFile}
                iconTitle="icon-any-file"
                title="Store any type of file"
                description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
                            file types to be securely stored and shared."
            />
        </div>
    );
}

function Card({ icon, iconTitle, title, description }) {
    return (
        <div>
            <div className="flex justify-center">
                <img src={icon} alt={iconTitle} />
            </div>
            <div>
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold my-4">{title}</h3>
                <p className="text-gray-400 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-normal">{description}</p>
            </div>
        </div>
    );
}
