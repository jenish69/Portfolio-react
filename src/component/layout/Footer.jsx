import "./css/Footer.css"; // Import the CSS

export const Footer = () => {
  return (
        <footer className="footer">
            {/* Logo */}
            <div className="footer-logo">
                <span className="logo-orange">J</span>
                <span className="logo-red">ENISH</span>
            </div>

            {/* Navigation Links */}
            {/* <nav className="footer-nav">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">About me</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact me</a>
            </nav> */}

            {/* Social Icons */}
            <div className="footer-social">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-dribbble"></i></a>
                <a href="#"><i className="fab fa-behance"></i></a>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
                <a href="mailto:jenishpatel49113@gmail.com?subject=Hello, I wanted to contact you."><i className="fas fa-envelope"></i> jenishpatel49113@gmail.com</a>
                <a href="tel:+918758204295"><i className="fas fa-phone"></i> +91 87582 04295</a>
            </div>

            {/* Divider Line */}
            <hr className="footer-line" />

            {/* Copyright */}
            <p className="footer-bottom">
                Designed by <span>@jenish.patel</span> Full Stack Developer
            </p>
        </footer>
    );
};