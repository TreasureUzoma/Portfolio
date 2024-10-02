"use client";
import React, { useState } from "react";

const Qualifications = () => {
    const [showEducation, setShowEducation] = useState(true);

    const toggleSection = () => {
        setShowEducation(prev => !prev);
    };
    const titleStyle = "font-bold text-lg !leading-[1.5rem]";
    const itemStyle = "font-rubik text-[#808e91] mt-3 text-sm";

    return (
        <section>
            <div className="flex justify-center py-[2.5rem]">
                <div className="my_fixed_width">
                    <h2 className="text-2xl font-bold font-clash">
                        Qualifications
                        <span className="inline-block animate-bounce">💡</span>
                    </h2>
                    <p className="text-sm text-[#808e91] font-rubik my-3 mb-[2rem]">
                        Why you should hire me
                    </p>
                    <div className="flex items-center justify-center">
                        <h3
                            className={`px-[1.3rem] flex items-center justify-center ${
                                showEducation
                                    ? "text-[#34afcb]"
                                    : "text-[#a3afb2]"
                            } space-x-3 text-xl font-bold`}
                            onClick={toggleSection}
                        >
                            <span className="material-icons">school</span>
                            <span>Education</span>
                        </h3>
                        <h3
                            className={`px-[1.3rem] flex items-center justify-center ${
                                !showEducation
                                    ? "text-[#34afcb]"
                                    : "text-[#a3afb2]"
                            } space-x-3 text-xl font-bold`}
                            onClick={toggleSection}
                        >
                            <span className="material-icons">work</span>
                            <span>Work</span>
                        </h3>
                    </div>
                    <ul
                        className="timeline"
                        id="education-block"
                        style={{ display: showEducation ? "block" : "none" }}
                    >
                        <li className="timeline-item">
                            <div>
                                <p className={titleStyle}>Computer Science</p>
                                <p className={itemStyle}>Lasustech, Nigeria</p>
                                <p className="text-sm text-[#808e91] font-rubik mt-3">
                                    <i className="material-icons">event</i> 2024
                                    till date
                                </p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div>
                                <p className={titleStyle}>
                                    Frontend Development
                                </p>
                                <p className={itemStyle}>Sololearn</p>
                                <p className={itemStyle}>
                                    <i className="material-icons">event</i> 2021
                                    - 2022
                                </p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div>
                                <p className={titleStyle}>
                                    Frontend Development
                                </p>
                                <p className={itemStyle}>Programming Hero</p>
                                <p className={itemStyle}>
                                    <i className="material-icons">event</i> 2020
                                    - 2021
                                </p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div>
                                <p className={titleStyle}>Web Development</p>
                                <p className={itemStyle}>W3schools</p>
                                <p className={itemStyle}>
                                    <i className="material-icons">event</i> 2020
                                    till date
                                </p>
                            </div>
                        </li>
                    </ul>
                    <ul
                        className="timeline"
                        id="work-block"
                        style={{ display: showEducation ? "none" : "block" }}
                    >
                        <li className="timeline-item">
                            <div>
                                <p className={titleStyle}>Software Engineer</p>
                                <p className={itemStyle}>InfinitySwap</p>
                                <p className={itemStyle}>
                                    <i className="material-icons">event</i> 2024
                                </p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div>
                                <p className={titleStyle}>Frontend Developer</p>
                                <p className={itemStyle}>Gappay NG</p>
                                <p className={itemStyle}>
                                    <i className="material-icons">event</i> 2024
                                </p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div>
                                <p className={titleStyle}>Frontend Developer</p>
                                <p className={itemStyle}>Code Byte Agency</p>
                                <p className={itemStyle}>
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
