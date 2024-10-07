import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

import Image from "next/image";

const Hero = () => {
    return (
        <header className="my-[5.4rem] flex items-center justify-center min-h-screen relative overflow-hidden w-full md:min-h-[55vh] lg:min-h-[100vh]">
            <div className="my_fixed_width px-3 md:flex justify-between items-center">
                <div className="md:w-[52%] lg:w-[60%]">
                    <h1 className="gradient_text text-[2.1rem] font-clash leading-[2.5rem]">
                        Creative Frontend Developer.
                    </h1>
                    <div className="font-[400] mt-[2.5rem] font-rubik pr-5 text-sm">
                        <p className="gradient_text">
                            I code and design simple beautiful things, and I
                            love what I do.
                        </p>
                        <p className="gradient_text py-[1.8rem]">
                            3+ years of experience. Specialized in building
                            products, while ensuring a seamless web experience
                            for clients across Africa.
                        </p>
                        <p className="gradient_text">
                            Highly skilled at progressive enhancement, design
                            systems & UI Engineering - performance and
                            scalability are top objectives on my radar.
                        </p>
                    </div>
                    <div className="mt-[2rem] flex space-x-5">
                        <a
                            href="https://www.facebook.com/profile.php?id=100085862181551"
                            className="p-1 rounded-full border border-2 border-[#34afcb]"
                            target="_blank"
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/treasure-uzoma-40a789260"
                            className="p-1 rounded-full border border-2 border-[#34afcb]"
                            target="_blank"
                        >
                            <LinkedinIcon/>
                        </a>
                        <a
                            href="https://www.twitter.com/TreasureUzoma1"
                            className="p-1 rounded-full border border-2 border-[#34afcb]"
                            target="_blank"
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            href="https://www.instagram.com/naira_jasper"
                            className="p-1 rounded-full border border-2 border-[#34afcb]"
                            target="_blank"
                        >
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="avatar_container inline-block">
                        <Image
                            src="/images/hero.png"
                            width={280}
                            height={280}
                            alt="avatar"
                            className="avatar_pic block"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Hero;
