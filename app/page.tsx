import Head from "next/head";

import "./globals.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import BlogIntro from "./components/BlogIntro";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
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
              <Qualifications />
              <BlogIntro />
            </main>
            <Footer />
        </>
    );
}
export default Home;
