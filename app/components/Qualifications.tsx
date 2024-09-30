const Qualifications = () => {
    return (
        <section>
            <div className="flex justify-center py-[2.5rem]">
                <div className="my_fixed_width">
                    <h2 className="text-2xl font-bold font-clash">
                        Qualifications
                        <span className="inline-block animate-bounce">
                            💡
                        </span>
                    </h2>
                    <p className="text-sm text-[#808e91] font-rubik my-3">
                        Why you should hire me
                    </p>
                    <div className="flex items-center justify-center">
                        {/*
                      #a3afb2
                      */}
                        <h3 className="px-[1.3rem] flex items-center justify-center text-[#34afcb] space-x-3 text-xl font-bold">
                            <span className="material-icons">school</span>
                            <span>Education</span>
                        </h3>
                        <h3 className="px-[1.3rem] flex items-center justify-center text-[#a3afb2] space-x-3 text-xl font-bold">
                            <span className="material-icons">work</span>
                            <span>Work</span>
                        </h3>
                    </div>
                    <ul className="timeline" id="education-block">
                        <li className="timeline-item">
                            <div>
                                <h4>Computer Science</h4>
                                <p>Lasustech, Nigeria</p>
                                <p className="time-text">
                                    <i className="material-icons">event</i> 2024
                                    till date
                                </p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div>
                                <h4>Frontend Development</h4>
                                <p>Sololearn</p>
                                <p className="time-text">
                                    <i className="material-icons">event</i> 2021
                                    - 2022
                                </p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div>
                                <h4>Frontend Development</h4>
                                <p>Programming Hero</p>
                                <p className="time-text">
                                    <i className="material-icons">event</i> 2020
                                    - 2021
                                </p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div>
                                <h4>Web Development</h4>
                                <p>W3schools</p>
                                <p className="time-text">
                                    <i className="material-icons">event</i> 2020
                                    till date
                                </p>
                            </div>
                        </li>
                    </ul>
                    <ul className="timeline" id="work-block">
                        <li className="timeline-item">
                            <div>
                                <h4>Software Engineer</h4>
                                <p>InfinitySwap</p>
                                <p className="time-text">
                                    <i className="material-icons">event</i> 2024
                                </p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div>
                                <h4>Frontend Developer</h4>
                                <p>Gappay NG</p>
                                <p className="time-text">
                                    <i className="material-icons">event</i> 2024
                                </p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div>
                                <h4>Frontend Developer</h4>
                                <p>Code Byte Agency</p>
                                <p className="time-text">
                                    <i className="material-icons">event</i> 2023
                                    till date
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default Qualifications;
