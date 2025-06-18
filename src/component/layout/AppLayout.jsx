import { Header } from "./Header";
import {Footer} from "./Footer";
import { AboutMe } from "./About";
import {Hero} from "./Hero";
import { useRef } from "react";
import { ContactMe } from "./Contact";
import Portfolio from "./PortfoilioSec";

export const AppLayout = () => {
    const aboutMeRef = useRef(null);
    const contactMeRef = useRef(null);
    const homeRef = useRef(null);
    const portfolioRef = useRef(null);


    return (
        <>
            <Header aboutMeRef={aboutMeRef} contactMeRef={contactMeRef} homeRef={homeRef} portfolioRef={portfolioRef}/>
            <Hero ref={homeRef} />
            <AboutMe ref={aboutMeRef}/>
            <Portfolio ref={portfolioRef} />
            <ContactMe ref={contactMeRef} />
            <Footer />
        </>
    );
}