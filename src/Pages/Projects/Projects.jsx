import React from "react";
import "./Project.css";

const projectData = [
  {
    id: 1,
    img: "/p-1.png",
    link: "https://zerodha-fron.vercel.app/",
  },
  {
    id: 2,
    img: "/p-2.png",
    link: "https://to-do-list-ashy-nu-80.vercel.app/",
  },
  {
    id: 3,
    img: "/p-3.jpg",
    link: "https://quiz-app-one-sigma-16.vercel.app/",
  },
  {
    id: 4,
    img: "/p-4.jpeg",
    link: "https://weather-app-mu-five-11.vercel.app/",
  },

];

const Projects = () => {
  return (
    <div className="container py-5 mt-5 " id="projects">
      <h1 className="text-center mt-5">Projects</h1>
      <p className="text-center text-info">Some of my work</p>

      <div className="row g-4 mt-4">
        {projectData.map((project) => (
          <div key={project.id} className="col-lg-4 col-md-6">
            <div className="project-card">
              <img src={project.img} alt="project" />
              <div className="overlay">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW PROJECT
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
