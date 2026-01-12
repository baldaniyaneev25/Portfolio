import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Hero from "../Pages/Hero/Hero"
import Aboutme from "../Pages/AboutMe/Aboutme"
import Projects from "../Pages/Projects/Projects"
import Getintouch from "../Pages/GetInTouch/Getintouch"
import Skills from './Skills/Skills'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <Aboutme />
            <Projects />
            <Getintouch />
            <Footer />



        </>
    )
}

export default Home