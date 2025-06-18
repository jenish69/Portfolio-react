import React, { useState } from "react";
import  "./css/Portfolio.css";

const projects = [
  {
    id: 1,
    image: "/images/project1.png",
    title: "Name Project",
    category: "Categories",
  },
  {
    id: 2,
    image: "/images/project2.png",
    title: "Name Project",
    category: "Categories",
  },
  {
    id: 3,
    image: "/images/project3.png",
    title: "Name Project",
    category: "Categories",
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>


      <div className="portfolio-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="portfolio-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="portfolio-project-title">{project.title}</h3>
              <p className="portfolio-project-category">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
