import Head from "next/head";

import "./globals.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <main>
              <Services />
              <Portfolio />
              <Skills />
            </main>
            <Footer />
        </>
    );
}
export default Home;
