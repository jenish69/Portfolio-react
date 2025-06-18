import "./css/Hero.css";

export const Hero = ({ref}) => {
  return (
    <section className="hero" ref={ref} >
      <div className="hero-content">
        <p className="intro">Hi I am</p>
        <h2 className="name">Jenish Patel</h2>
        <h1 className="title">Full Stack Developer</h1>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-dribbble"></i></a>
          <a href="#"><i className="fab fa-behance"></i></a>
        </div>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="hire-btn">Hire Me</button>
          <button className="cv-btn">Download CV</button>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-box">
            <h3>3 months</h3>
            <p>Experiences</p>
          </div>
          <div className="stat-box">
            <h3>5+</h3>
            <p>Project done</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-image">
        <img src="your image.png" alt="Designer" className="hero-image-1"/>
      </div>
    </section>
  );
};