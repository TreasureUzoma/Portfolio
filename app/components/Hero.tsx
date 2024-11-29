"use client"

import SvgIcons from "./icons/SvgIcons";
import HeroImage from "./mainComponents/HeroImage";

const Hero = () => {
    return (
      <header className="my-[5.4rem] flex items-center justify-center min-h-screen relative overflow-hidden w-full lg:min-h-[100vh] md:mt-0">
        <div className="my_fixed_width md:flex justify-between items-center sm:pr-2 md:px-3">
          <div className="md:w-[52%] lg:w-[60%]">
            <h1 className="gradient_text text-[2.1rem] font-clash leading-[2.5rem] md:text-[2.83rem]">
              Creative <br className="md:hidden" /> Frontend Developer.
            </h1>
            <div className="font-[400] mt-[2.5rem] font-rubik pr-5 text-sm">
              <p className="gradient_text">
                Crafting simple, beautiful, and intuitive digital experiences is
                what I do best.
              </p>
              <p className="gradient_text py-[1.8rem]">
                With over 3 years of experience, I specialize in building
                powerful products that create seamless, enjoyable web
                experiences for clients across Africa and beyond.
              </p>
              <p className="gradient_text">
                I’m dedicated to progressive enhancement, design systems, and UI
                engineering, with a constant focus on performance and
                scalability to bring ideas to life.
                <br />
                Let’s make something amazing together.
              </p>
            </div>
            <div className="mt-[2rem] flex space-x-5">
              <a
                href="https://www.facebook.com/profile.php?id=100085862181551"
                className="rounded-full border border-2 border-[#34afcb] hover:border-green hover:bg-green"
                target="_blank"
              >
                <SvgIcons
                  type="facebook"
                  height="20"
                  width="20"
                  color="#34afcb"
                  className="m-1 hover:fill-[#061417]"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/treasure-uzoma-40a789260"
                className="rounded-full border border-2 border-[#34afcb] hover:border-green hover:bg-green"
                target="_blank"
              >
                <SvgIcons
                  type="linkedin"
                  height="20"
                  width="20"
                  color="#34afcb"
                  className="m-1 hover:fill-[#061417]"
                />
              </a>
              <a
                href="https://www.twitter.com/TreasureUzoma1"
                className="rounded-full border border-2 border-[#34afcb] hover:border-green hover:bg-green"
                target="_blank"
              >
                <SvgIcons
                  type="twitter"
                  height="20"
                  width="20"
                  color="#34afcb"
                  className="m-1 hover:fill-[#061417]"
                />
              </a>
              <a
                href="https://www.instagram.com/naira_jasper"
                className="rounded-full border border-2 border-[#34afcb] hover:border-green hover:bg-green"
                target="_blank"
              >
                <SvgIcons
                  type="instagram"
                  height="20"
                  width="20"
                  color="#34afcb"
                  className="m-1 hover:fill-[#061417]"
                />
              </a>
            </div>
          </div>
          <HeroImage />
        </div>
      </header>
    );
};
export default Hero;
