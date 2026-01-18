import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar p-0 fixed-top">
            <div className="container-fluid p-3">

                {/* LOGO */}
                <a className="navbar-brand logo ms-5 fs-3" href="#home">
                    Neev.
                </a>

                {/* TOGGLER */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* LINKS */}
                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav mx-auto text-center">

                        <li className="nav-item ms-5">
                            <a className="nav-link text-light" href="#home">Home</a>
                        </li>

                        <li className="nav-item ms-5">
                            <a className="nav-link text-light" href="#about">About</a>
                        </li>

                        <li className="nav-item ms-5">
                            <a className="nav-link text-light" href="#projects">Projects</a>
                        </li>

                        <li className="nav-item ms-5">
                            <a className="nav-link text-light" href="/resume/Neev__CV.pdf" download
                                target="_blank"
                                rel="noopener noreferrer">Resume</a>
                        </li>

                    </ul>

                    {/* CONTACT BUTTON */}
                    <div className="text-center me-5">
                        <a href="#contact">
                            <button className="contact-btn">Contact Me</button>
                        </a>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
