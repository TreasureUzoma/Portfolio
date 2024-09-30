const Services = () => {
    return (
        <section>
            <div className="flex justify-center py-5">
                <div className="my_fixed_width">
                    <h2 className="text-2xl font-bold font-clash">
                        Services
                        <span className="inline-block animate-bounce">🔥</span>
                    </h2>
                    <p className="text-sm text-[#808e91] font-rubik my-3">
                        These are some of the services I offer as a frontend
                        developer
                    </p>
                    <div className="grid place-items-center my-5 gap-5 md:grid-cols-3">
                        <div className="w-full h-[270px] flex items-center justify-center relative overflow-hidden px-7 bg-[#0a1c20] block_left">
                            <div>
                                <h3 className="font-bold text-xl text-white">
                                    WEB DEVELOPMENT
                                </h3>
                                <p className="text-sm font-rubik text-[#808e91] mt-4">
                                    I design and build beautiful websites with
                                    React Js, CSS, Tailwind, NextJs and
                                    JavaScript.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-[270px] flex items-center justify-center relative overflow-hidden px-7 bg-[#0a1c20] block_right">
                            <div>
                                <h3 className="font-bold text-xl text-white">
                                    API INTEGRATIONS
                                </h3>
                                <p className="text-sm font-rubik text-[#808e91] mt-4">
                                    Integrating backend services and APIs to the
                                    frontend securely to fetch and display data
                                    in real time.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-[270px] flex items-center justify-center relative overflow-hidden px-7 bg-[#0a1c20] block_left">
                            <div>
                                <h3 className="font-bold text-xl text-white">
                                    RESPONSIVE DESIGN
                                </h3>
                                <p className="text-sm font-rubik text-[#808e91] mt-4">
                                    Building websites and applications that work
                                    seamlessly on various devices and screen
                                    sizes, from desktop to smartphones.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-[270px] flex items-center justify-center relative overflow-hidden px-7 bg-[#0a1c20] block_right">
                            <div>
                                <h3 className="font-bold text-xl text-white">
                                    VERSION CONTROL
                                </h3>
                                <p className="text-sm font-rubik text-[#808e91] mt-4">
                                    Using version control systems like
                                    Git/GitHub to collaborate with other
                                    developers and manage code changes
                                    effectively.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-[270px] flex items-center justify-center relative overflow-hidden px-7 bg-[#0a1c20] block_left">
                            <div>
                                <h3 className="font-bold text-xl text-white">
                                    CONTINUOUS LEARNING
                                </h3>
                                <p className="text-sm font-rubik text-[#808e91] mt-4">
                                    Staying updated with the latest frontend
                                    technologies, trends, and best practices to
                                    deliver modern and innovative solutions.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-[270px] flex items-center justify-center relative overflow-hidden px-7 bg-[#0a1c20] block_right">
                            <div>
                                <h3 className="font-bold text-xl text-white">
                                    TECHNICAL SUPPORT
                                </h3>
                                <p className="text-sm font-rubik text-[#808e91] mt-4">
                                    Providing technical supports to troubleshoot
                                    frontend-related issues.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Services;
