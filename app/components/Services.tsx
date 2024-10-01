"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Services = () => {
    const [visibleStates, setVisibleStates] = useState(Array(6).fill(false)); // Array to track visibility of each service
    const refs = useRef<HTMLDivElement[]>([]);

    const pStyle = "text-sm font-rubik text-[#808e91] mt-4 leading-[1.44rem]";

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1.05 // Add a slight scale for the pop effect
        }
    };

    useEffect(() => {
        const observers = refs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleStates(prev => {
                            const newState = [...prev];
                            newState[index] = true; // Mark this service as visible
                            return newState;
                        });
                        observer.disconnect();
                    }
                },
                {
                    threshold: 0.1 // 10 view of the blocks activates the animation
                }
            );

            if (ref) {
                observer.observe(ref);
            }

            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect()); // Clean up observers
        };
    }, []);

    return (
        <section>
            <div className="flex justify-center py-5">
                <div className="my_fixed_width">
                    <h2 className="text-2xl font-bold font-clash">
                        Services
                        <span className="inline-block animate-bounce">🔥</span>
                    </h2>
                    <p className="text-sm text-[#808e91] font-rubik my-3">
                        These are some of the services I offer as a frontend web
                        developer
                    </p>
                    <div className="grid place-items-center my-5 gap-6 md:grid-cols-3">
                        {[
                            {
                                title: "WEB DEVELOPMENT",
                                description:
                                    "I design and build beautiful websites with React Js, CSS, Tailwind, NextJs and JavaScript.",
                                className: "block_left"
                            },
                            {
                                title: "API INTEGRATIONS",
                                description:
                                    "Integrating backend services and APIs to the frontend securely to fetch and display data in real time.",
                                className: "block_right"
                            },
                            {
                                title: "RESPONSIVE DESIGN",
                                description:
                                    "Building websites and applications that work seamlessly on various devices and screen sizes, from desktop to smartphones.",
                                className: "block_left"
                            },
                            {
                                title: "VERSION CONTROL",
                                description:
                                    "Using version control systems like Git/GitHub to collaborate with other developers and manage code changes effectively.",
                                className: "block_right"
                            },
                            {
                                title: "CONTINUOUS LEARNING",
                                description:
                                    "Staying updated with the latest frontend technologies, trends, and best practices to deliver modern and innovative solutions.",
                                className: "block_left"
                            },
                            {
                                title: "TECHNICAL SUPPORT",
                                description:
                                    "Providing technical support to troubleshoot frontend-related issues.",
                                className: "block_right"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                               ref={(el) => refs.current[index] = el as HTMLDivElement | null;
}}
                                // Assign each block's ref without returning
                                className={`w-full h-[270px] flex items-center justify-center relative overflow-hidden px-7 bg-[#0a1c20] ${service.className}`}
                                variants={itemVariants}
                                initial="hidden"
                                animate={
                                    visibleStates[index] ? "visible" : "hidden"
                                }
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 300
                                }} // Add spring effect
                            >
                                <div>
                                    <h3 className="font-bold text-xl text-white">
                                        {service.title}
                                    </h3>
                                    <p className={pStyle}>
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
