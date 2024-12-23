import Image from "next/image";

const Skills = () => {
  const skillsList = [
    { name: "HTML", image: "/images/stacks/html.png", desc: "Markup Language" },
    { name: "CSS", image: "/images/stacks/css.png", desc: "Styling" },
    { name: "JavaScript", image: "/images/stacks/js.png", desc: "Programming Language" },
    { name: "Firebase", image: "/images/stacks/firebase.png", desc: "Database/Auth" },
    { name: "React.Js", image: "/images/stacks/react.png", desc: "Frontend Framework" },
    { name: "TailwindCSS", image: "/images/stacks/tailwind.png", desc: "Utility-First Styling" },
    { name: "Search Engine Optimization", image: "/images/stacks/seo.png", desc: "" },
    { name: "Next.Js", image: "/images/stacks/nextjs.png", desc: "Fullstack Framework" },
    { name: "Git/Github", image: "/images/stacks/git.png", desc: "Version Control" },
    { name: "Framer Motions", image: "/images/stacks/framer.png", desc: "Animations" },
    { name: ". . .", image: "/images/stacks/etc.png", desc: "" },
  ];

  return (
    <section>
      <div className="flex justify-center py-5">
        <div className="my_fixed_width">
          <h2 className="text-2xl font-bold font-clash">
            Skills
            <span className="inline-block animate-bounce">🤹</span>
          </h2>
          <p className="text-sm text-[#808e91] font-rubik my-3">
            These are some of the skills I&apos;ve learnt over the past years.
          </p>
          <div className="grid place-items-center my-5 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {skillsList.map((skill, index) => (
              <div
                key={skill.name}
                className="w-full border-[rgba(255,255,255,0.1)] rounded-xl flex items-center relative overflow-hidden p-2 bg-[#0a1c20] font-clash transition-all duration-300 text-[0.9rem] hover:scale-95 md:hover:scale-105 border-2"
              >
                <figure className="rounded-lg bg-[rgba(255,255,255,0.1)] w-12 h-12 mr-3 flex justify-center items-center">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={34}
                    height={34}
                    className="rounded"
                  />
                </figure>
                <div>
                  <p>{skill.name}</p>
                  <p className="text-[0.8rem] font-rubik text-[#b0b8ba]">{skill.desc || ""}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
