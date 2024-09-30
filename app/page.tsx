import Head from "next/head";

import "./globals.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <Footer />
        </>
    );
}
export default Home;
