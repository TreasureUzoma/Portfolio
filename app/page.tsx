import type { Metadata } from "next";
import "./globals.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";

export const metadata: Metadata = {
    title: "Treasure Uzoma - Portfolio",
    description:
        "3+ years of experience. Specialized in building products, while ensuring a seamless web experience for clients across Africa.",
    themeColor: "#061417"
};

function Home() {
    return (
        <>
            <Nav />
            <Hero />
        </>
    );
}
export default Home;
