import { NavLink, useNavigate } from "react-router";
import "./css/Header.css"

export const Header = ({aboutMeRef, contactMeRef, homeRef, portfolioRef}) => {
    const scrollToAboutMe = () => {
        aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContactMe = () => {
        contactMeRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollTohome = () => {
        homeRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToPortfolio = () => {
        portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    };
    
    return (
         <header className="header">
            {/* Logo */}
            <div className="logo">
                <span className="logo-orange">J</span>
                <span className="logo-red">ENISH</span>
            </div>

            {/* Nav Links */}
            <nav className="nav-links">
                <NavLink className="is-Active" to="" onClick={() => scrollTohome()}>Home</NavLink>
                <NavLink to="" onClick={() => scrollToAboutMe()}>About me</NavLink>
                <NavLink to="" onClick={() => scrollToPortfolio()}>Porfolio</NavLink>
                <NavLink to="" onClick={() => scrollToContactMe()}>Contact me</NavLink>
            </nav>

            {/* Hire Me Button */}
            <button className="hire-me-btn">
                Hire Me
            </button>
        </header>
    );
}