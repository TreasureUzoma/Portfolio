const Skills = () => {
    const skillsList = [
        "HTML", "CSS", "JavaScript", "Firebase", "ReactJs", 
        "TailwindCSS", "Bootstrap", "Git/Github", "Animations", "SEO", ". . ."
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
                        These are some of the skills I’ve learnt over the past years.
                    </p>
                    <div className="grid place-items-center my-5 gap-5 md:grid-cols-3">
                        {skillsList.map((skill, index) => (
                            <div 
                                key={skill} 
                                className={`w-full flex items-center relative overflow-hidden p-4 bg-[#0a1c20] ${index % 2 === 0 ? 'block_left' : 'block_right'} transition-all duration-300 hover:p-5`}
                            >
                                <p className="text-[0.9rem]">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
