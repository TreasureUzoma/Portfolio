const Portfolio = () => {
    const tagStyle =
        "p-1 rounded-lg bg-[#061417] text-white text-[0.65rem] font-bold overflow-nextline";
    const divStyle =
        "min-h-[300px] my-2 flex items-center justify-center px-7 bg-[#0a1c20]";
    const buttonStyle =
        "bg-white rounded-lg w-full mt-5 py-2 text-sm text-black space-x-3 justify-center text-center font-bold flex items-center hover:bg-gray-300";
    const buttonStyleTwo =
        "bg-white rounded-lg w-[50%] mt-5 py-2 text-sm text-black space-x-3 justify-center text-center font-bold flex items-center hover:bg-gray-300";
    const tagsWrapperStyle = "my-[1rem] flex flex-wrap gap-y-3 w-[230px]";
    const pStyle = "text-sm font-rubik text-[#808e91] mt-4";

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
                    <div className="grid place-items-center my-5 gap-5 md:grid-cols-3">
                        <div className={divStyle}>
                            <div>
                                <h3 className="text-xl text-white">
                                    GapPay Website
                                </h3>
                                <p className={pStyle}>
                                    A fintech landing page for a platform that
                                    simplifies transactions.
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
                                <h3 className="text-xl text-white">
                                    SecretSender
                                </h3>
                                <p className={pStyle}>
                                    A landing page for a web app for sending
                                    anonymous messages.
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
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/TreasureUzoma/secretsenderweb/"
                                        className={buttonStyleTwo}
                                    >
                                        <i className="!text-[1rem] fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <h3 className="text-xl text-white">
                                    SecretSender PWA
                                </h3>
                                <p className={pStyle}>
                                    A fun mobile-responsive web app that allows
                                    users send anonymous messages just like ngl.
                                </p>                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>ReactJs</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        TailwindCSS
                                    </span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        Firebase
                                    </span>
                                </div>

                                <div>
                                    <a
                                        href="https://secretsenderapp.vercel.app"
                                        className={buttonStyle}
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
                                <h3 className="text-xl text-white">
                                    StreakMaster
                                </h3>
                                <p className={pStyle}>
                                  Landing page for a habit tracker PWA app.
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
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/TreasureUzoma/secretsenderweb/"
                                        className={buttonStyleTwo}
                                    >
                                        <i className="!text-[1rem] fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div className="py-5">
                                <h3 className="text-xl text-white">
                                    StreakMaster PWA
                                </h3>
                                <p className={pStyle}>A cloud based web app for
                            tracking habits, creating streaks and monitoring
                            progress
                                </p>                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>ReactJs</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        TailwindCSS
                                    </span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        Firebase
                                    </span>
                                </div>

                                <div>
                                    <a
                                        href="https://secretsenderapp.vercel.app"
                                        className={buttonStyle}
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
                                <h3 className="text-xl text-white">
                                    Paddy AI
                                </h3>                                <p className={pStyle}>A friendly AI assistant powered by Google’s Gemini
                                </p>                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>TailwindCSS</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        Gemeni API
                                    </span>
                                </div>

                                <div>
                                    <a
                                        href="https://paddyai.vercel.app/"
                     target="_blank"
                     className={buttonStyle}
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
                                <h3 className="text-xl text-white">
                                    LinkLite - Link Shortener
                                </h3>                                <p className={pStyle}>Convert’s long
                            cumbersome links to shorter links.
                                </p>                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>TinyUrlAPI</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        CSS
                                    </span>
                                </div>

                                <div>
                                    <a
                                        href="https://linklite-theta.vercel.app/"
                     target="_blank"
                     className={buttonStyle}
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
                                <h3 className="text-xl text-white">
                                    GitHub Roast AI
                                </h3>                                <p className={pStyle}>A websites that roasts gitHub profiles using AI.
                                </p>                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>GithubAPI</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        TailwindcssCSS
                                    </span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        ReactJs
                                    </span>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <a
                                        href="https://github-profile-roast.vercel.app/"
                    target="_blank"
                          className={buttonStyle}
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/TreasureUzoma/"
                                        className={buttonStyleTwo}
                                    >
                                        <i className="!text-[1rem] fa-brands fa-github"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <h3 className="text-xl text-white">
                                    Recipe Chat Bot
                                </h3>                                <p className={pStyle}>Chatbot for giving recipe and preparation
                            instructions for over 1000 different food
                                </p>                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>API</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        CSS
                                    </span>
                                </div>

                                <div>
                                    <a
                                        href="https://dreamforge-eta.vercel.app"
                     target="_blank"
                     className={buttonStyle}
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
                                <h3 className="text-xl text-white">
                                    Code Byte
                                </h3>                                <p className={pStyle}>A web design agency portfolio
                                </p>                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>FirebaseAPI</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        CSS
                                    </span>
                                </div>

                                <div>
                                    <a
                                        href="https://codebytehq.web.app"
                     target="_blank"
                     className={buttonStyle}
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
                                <h3 className="text-xl text-white">
                                    Password Generator
                                </h3>
                                <p className={pStyle}>A website that generates easy to remember passwords

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
                                    >
                                        <span>Preview</span>
                                        <span className="!text-[0.9rem] material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/TreasureUzoma/passwordgenerator/"
                                        className={buttonStyleTwo}
                                    >
                                        <i className="!text-[1rem] fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={divStyle}>
                            <div>
                                <h3 className="text-xl text-white">
                                    Jokes Generator
                                </h3>
                                <p className={pStyle}>A website that generates random dry jokes

                                </p>
                                <div className={tagsWrapperStyle}>
                                    <span className={tagStyle}>JokeAPI</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>JavaScript</span>
                                    <span className="px-3">•</span>
                                    <span className={tagStyle}>
                                        CSS
                                    </span>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <a
                                        href="https://jokegenerator.onrender.com/"
                     target="_blank"
                                        className={buttonStyle}
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