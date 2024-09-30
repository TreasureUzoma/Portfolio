import Head from "next/head";

import "./globals.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";

function Home() {
    return (
        <>
            <Nav />
            <Hero />
        </>
    );
}
export default Home;
