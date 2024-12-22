"use client";
import { motion } from "framer-motion";
import SvgIcons from "./icons/SvgIcons";

const Portfolio = () => {
  const tagsWrapperStyle = "my-[1rem] flex flex-wrap gap-y-3 w-[230px]";
  const tagStyle =
    "py-1 px-2 rounded-lg bg-[#061417] text-white text-[0.65rem] font-bold overflow-nextline";

  const projects = [
    {
      title: "Eversub",
      description:
        "A full-stack VTU web app for paying bills and handling subscriptions effortlessly.",
      tags: ["NextJs", "Typescript", "TailwindCSS", "Framer Motion", "Firebase", "API"],
      previewLink: "https://eversub.vercel.app/",
      githubLink: "https://github.com/TreasureUzoma/eversubsite/",
    },
    {
      title: "GapPay Website",
      description:
        "Fintech landing page streamlining transactions with user-friendly interface.",
      tags: ["NextJs", "Typescript", "TailwindCSS", "Framer Motion", "Node Mailer"],
      previewLink: "https://gappayfinance.vercel.app",
    },
    
    {
      title: "SecretSender",
      description:
        "Full-stack web app for getting anonymous replies on questions from friends like ngl.",
      tags: ["ReactJs", "JavaScript", "TailwindCSS", "Framer Motion", "Firebase"],
      previewLink: "https://secretsenderweb.vercel.app/",
      githubLink: "https://github.com/TreasureUzoma/secretsenderweb/",
    },
    {
      title: "StreakMaster",
      description:
        "Cloud-based full-stack habit tracker and streak & progress counter web app",
      tags: ["ReactJs", "JavaScript", "TailwindCSS", "Framer Motion", "Firebase"],
      previewLink: "https://streakmastersite.vercel.app",
    },
    {
      title: "LinkLite - Link Shortener",
      description:
        "Convert’s long cumbersome links to shorter links efficiently.",
      tags: ["ReactJs", "TailwindCSS", "TinyUrlAPI", "CSS"],
      previewLink: "https://link-lite-eta.vercel.app/",
      githubLink: "https://github.com/TreasureUzoma/LinkLite"
    },
    {
      title: "Paddy AI",
      description:
        "Gemini powered AI Chatbot for task management and assistance.",
      tags: ["ReactJS", "TailwindCSS", "Gemeni API"],
      previewLink: "https://mypaddy.vercel.app/",
      githubLink: "https://github.com/TreasureUzoma/MyPaddy",
    },
    {
      title: "GitHub Roast AI",
      description: "AI-powered GitHub profile roasts for humorous insights.",
      tags: ["JavaScript", "GithubAPI", "Tailwindcss", "ReactJs"],
      previewLink: "https://github-profile-roast.vercel.app/",
    },
    {
      title: "Tastrees Clone",
      description:
        "AI powered recipe generator for generating recipes based on food/recipe image uploaded.",
      tags: ["NextJS", "TypeScript", "Gemini API", "TailwindCSS"],
      previewLink: "https://tastreesclone.vercel.app",
      githubLink: "https://github.com/TreasureUzoma/tastreesClone",
    },
    {
      title: "Password Generator",
      description:
        "Secure password generator tool for generating secure memorable passwords.",
      tags: ["ReactJs", "JavaScript", "TailwindCSS"],
      previewLink: "https://password-generator-iota-seven-45.vercel.app/",
      githubLink: "https://github.com/TreasureUzoma/password-generator/",
    },
    {
      title: "Jokes Generator",
      description:
        "Random dry jokes generator delivering humor on a click of a button.",
      tags: ["JokeAPI", "JavaScript", "CSS"],
      previewLink: "https://jokegenerator.onrender.com/",
      githubLink: "https://github.com/TreasureUzoma/Dev-Joke-Generator/",
    },
  ];

  return (
    <section>
      <div className="flex justify-center py-5">
        <div className="my_fixed_width">
          <h2 className="text-2xl font-bold font-clash">
            Recent Work
            <span className="inline-block animate-bounce">👨‍🍳</span>
          </h2>
          <p className="text-sm text-[#808e91] font-rubik my-3">
            Here are some of the fun and recent projects I’ve worked on
          </p>
          <div className="grid place-items-center my-5 gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={`project-${index}`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 },
                }}
                className="min-h-[300px] my-2 flex items-center justify-center overflow-hidden px-7 bg-[#0a1c20] w-full md:px-8"
              >
                <div>
                  <p className="text-xl text-white font-clash">
                    {project.title}
                  </p>
                  <p className="text-sm font-rubik text-[#808e91] leading-[1.4rem] mt-2">
                    {project.description}
                  </p>
                  <div className={tagsWrapperStyle}>
                    {project.tags
                      .map((tag, tagIndex) => (
                        <span
                          key={`tag-${index}-${tagIndex}`}
                          className={tagStyle}
                        >
                          {tag}
                        </span>
                      ))
                      .reduce((prev, curr) => (
                        <>
                          {prev}
                          <span key={`dot-${index}`} className="text-sm px-[0.7rem]">
                            •
                          </span>
                          {curr}
                        </>
                      ))}
                  </div>

                  <div className="flex justify-center items-center gap-3">
                    <a
                      href={project.previewLink}
                      className="bg-white rounded-md w-full mt-5 py-2 text-sm text-black space-x-3 justify-center text-center font-bold flex items-center hover:bg-gray-400"
                      rel="nofollow"
                      target="_blank"
                    >
                      <span>Preview</span>
                      <SvgIcons type="visibility" width="15" height="15" className="inline-block" />
                    </a>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        className="bg-white rounded-md w-[30%] mt-5 py-[0.59rem] text-sm text-black space-x-3 justify-center text-center font-bold flex items-center hover:bg-gray-400"
                        target="_blank"
                      >
                        <i className="!text-[1rem] fa-brands fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
