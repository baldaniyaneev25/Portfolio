import React from "react";
import "./Skills.css";

const skills = [
    {
        name: "HTML5",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS3",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "Bootstrap",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
        name: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        name: "GitHub",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section ">
            <div className="container-fluid text-center">
                <h2 className="skills-title mt-5 pt-5">My Skills</h2>
                <p className="skills-subtitle">
                    Technologies I use to build modern web applications
                </p>

                <div className="row justify-content-center mt-5">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-6 col-md-4 ms-5 me-5 col-lg-3 mb-4">
                            <div className="skill-card">
                                <img src={skill.img} alt={skill.name} />
                                <h5>{skill.name}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
