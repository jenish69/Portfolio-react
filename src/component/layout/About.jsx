import './css/AboutMe.css';
import Skills from './Skills';

export const AboutMe = ({ref}) => {
  return (
    <section className="about" ref={ref}>
        <div className="about-title-cnt">
          <h2>About Me</h2>
          <p className="about-subtitle">Full Stack Devlopement and Web Devlopement</p>
        </div>
      <div className="about-container">
        <div className="about-hero-image">
            <img src="your image.png" alt="Designer" className="hero-image-1"/>
        </div>
        <div className="about-right">
          <p className="about-description">
            Hi, I'm a passionate Full Stack Developer with a strong interest in building responsive and user-friendly web applications. I’m currently working as a Full Stack Developer Intern at DecodeX Infotech, where I’m gaining hands-on experience with both front-end and back-end technologies.

            I enjoy working across the full development cycle—from designing intuitive user interfaces to developing efficient server-side logic. My skill set includes React.js and more, and I'm always eager to learn and take on new challenges.

            I believe in writing clean, maintainable code and continuously improving my skills to stay updated with the latest trends in web development.
          </p>
          <button className="cv-button">⬇ Download CV</button>
        </div>
      </div>

      <Skills />
    </section>
  );
};