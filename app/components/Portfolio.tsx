const Portfolio = () => {
    const tagStyle =
        "p-1 rounded-lg bg-[#061417] text-white text-[0.65rem] font-bold overflow-nextline";
    const divStyle =
        "min-h-[300px] my-2 flex items-center justify-center overflow-hidden px-7 bg-[#0a1c20] w-full md:px-8";
    const buttonStyle =
        "bg-white rounded-lg w-full mt-5 py-2 text-sm text-black space-x-3 justify-center text-center font-bold flex items-center hover:bg-gray-400";
    const buttonStyleTwo =
        "bg-white rounded-lg w-[50%] mt-5 py-2 text-sm text-black space-x-3 justify-center text-center font-bold flex items-center hover:bg-gray-400";
    const tagsWrapperStyle = "my-[1rem] flex flex-wrap gap-y-3 w-[230px]";
    const pStyle = "text-sm font-rubik text-[#808e91] leading-[1.4rem] mt-2";
    // must shorten this code !!!

    return (
        <section>
            <div className="flex justify-center py-5">
                <div className="my_fixed_width">
                    <h2 className="text-2xl font-bold font-clash">
                        Recent Work
                        <span className="inline-block animate-bounce">👨‍🍳</span>
                    </h2>
                    <p className="text-sm text-[#808e91] font-rubik my-3">
                        Here are some of the fun and recent projects I’ve worked
                        on
                    </p>
                    <div className="grid place-items-center my-5 gap-6 md:grid-cols-3 md:gap-8">
                        <div className={divStyle}>
                            <div>
                                <p className="text-xl text-white">
                                    GapPay Website
                                </p>
                                <p className={pStyle}>
                                    Fintech landing page streamlining transactions with secure user-friendly interface.
                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>CSS</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>JavaScript</span>
                                </div>
                                <div>
                                    <a
                                        href="https://gappaywebsite.onrender.com"
                                        className={buttonStyle}
                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <p className="text-xl text-white">
                                    SecretSender
                                </p>
                                <p className={pStyle}>
                                    Landing page for a web app for getting anonymous replies on questions from friends.
                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>ReactJs</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        TailwindCSS
                                    </span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        Framer Motion
                                    </span>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <a
                                        href="https://secretsenderweb.vercel.app/"
                                        className={buttonStyle}
                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/TreasureUzoma/secretsenderweb/"
                                        className={buttonStyleTwo}
                                        target="_blank"
                                    >
                                        <i className="!text-[1rem] fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <p className="text-xl text-white">
                                    SecretSender PWA
                                </p>
                                <p className={pStyle}>
                                    Mobile-responsive web app for receiving anonymous replies on the go just like ngl.
                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>ReactJs</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        TailwindCSS
                                    </span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>Firebase</span>
                                </div>
                                <div>
                                    <a
                                        href="https://secretsenderapp.vercel.app"
                                        className={buttonStyle}
                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <p className="text-xl text-white">
                                    StreakMaster
                                </p>
                                <p className={pStyle}>
                                    Landing page for a habit tracker PWA app promoting goal achievement.
                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>ReactJs</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        TailwindCSS
                                    </span>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <a
                                        href="https://streakmastersite.vercel.app/"
                                        className={buttonStyle}
                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/TreasureUzoma/secretsenderweb/"
                                        className={buttonStyleTwo}
                                        target="_blank"
                                    >
                                        <i className="!text-[1rem] fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div className="py-5">
                                <p className="text-xl text-white">
                                    StreakMaster PWA
                                </p>
                                <p className={pStyle}>
                                    Cloud-based habit tracker and streak & progress counter web app 
                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>ReactJs</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        TailwindCSS
                                    </span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>Firebase</span>
                                </div>
                                <div>
                                    <a
                                        href="https://streakmasterapp.vercel.app"
                                        className={buttonStyle}
                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <p className="text-xl text-white">Paddy AI</p>
                                <p className={pStyle}>
                                    Gemini powered AI Chatbot for task management and assistance.
                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        TailwindCSS
                                    </span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>Gemeni API</span>
                                </div>
                                <div>
                                    <a
                                        href="https://paddyai.vercel.app/"
                                        target="_blank"
                                        className={buttonStyle}
                                        rel="nofollow"
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <p className="text-xl text-white">
                                    LinkLite - Link Shortener
                                </p>
                                <p className={pStyle}>
                                    Convert’s long cumbersome links to shorter
                                    links efficiently.
                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>TinyUrlAPI</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>CSS</span>
                                </div>
                                <div>
                                    <a
                                        href="https://linklite-theta.vercel.app/"
                                        target="_blank"
                                        className={buttonStyle}
                                        rel="nofollow"
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <p className="text-xl text-white">
                                    GitHub Roast AI
                                </p>
                                <p className={pStyle}>
                                    AI-powered GitHub profile roasts for humourous insights.
                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>GithubAPI</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        TailwindcssCSS
                                    </span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>ReactJs</span>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <a
                                        href="https://github-profile-roast.vercel.app/"
                                        target="_blank"
                                        className={buttonStyle}
                                        rel="nofollow"
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/TreasureUzoma/GitHubRoast"
                                        target="_blank"
                                        className={buttonStyleTwo}
                                    >
                                        <i className="!text-[1rem] fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <p className="text-xl text-white">
                                    Recipe Chat Bot
                                </p>
                                <p className={pStyle}>
                                    Conversational Chatbot for providing 1000+ recipes and cooking
                                    instructions.
                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>API</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>CSS</span>
                                </div>
                                <div>
                                    <a
                                        href="https://dreamforge-eta.vercel.app"
                                        target="_blank"
                                        className={buttonStyle}
                                        rel="nofollow"
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <p className="text-xl text-white">Code Byte</p>
                                <p className={pStyle}>
                                    A web design agency portfolio showcasing modern, responsive design expertise.
                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        FirebaseAPI
                                    </span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>CSS</span>
                                </div>
                                <div>
                                    <a
                                        href="https://codebytehq.web.app"
                                        target="_blank"
                                        className={buttonStyle}
                                        rel="nofollow"
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <p className="text-xl text-white">
                                    Password Generator
                                </p>
                                <p className={pStyle}>
                                    Secure password generator tool go for generating secure memorable                                     passwords.
                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>ReactJs</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        TailwindCSS
                                    </span>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <a
                                        href="https://password-generator-iota-seven-45.vercel.app/"
                                        target="_blank"
                                        className={buttonStyle}
                                        rel="nofollow"
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/TreasureUzoma/password-generator/"
                                        className={buttonStyleTwo}
                                    >
                                        <i className="!text-[1rem] fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <p className="text-xl text-white">
                                    Jokes Generator
                                </p>
                                <p className={pStyle}>
                                    Random dry jokes generator delivering humor on a click of a button.
                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>JokeAPI</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>CSS</span>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <a
                                        href="https://jokegenerator.onrender.com/"
                                        target="_blank"
                                        className={buttonStyle}
                                        rel="nofollow"
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/TreasureUzoma/passwordgenerator/"
                                        target="_blank"
                                        className={buttonStyleTwo}
                                    >
                                        <i className="!text-[1rem] fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Portfolio;
