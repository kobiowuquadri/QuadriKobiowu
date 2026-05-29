import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import AboutMe from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Experience from '../../components/Experience/Experience'
import Skills from '../../components/Skills/Skills'
import Services from '../../components/Services/Services'
import Collaboration from '../../components/Collaboration/Collaboration'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import SectionArrow from '../../components/SectionArrow/SectionArrow'

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <SectionArrow targetId="projects" label="Projects" className="bg-secondary-bg" />
      <Projects />
      <SectionArrow targetId="experience" label="Experience" className="bg-primary-bg" />
      <Experience />
      <SectionArrow targetId="services" label="Services" className="bg-primary-bg" />
      <Services />
      <SectionArrow targetId="skills" label="Skills" className="bg-secondary-bg" />
      <Skills />
      <SectionArrow targetId="collaboration" label="Collaborate" className="bg-primary-bg" />
      <Collaboration />
      <SectionArrow targetId="contact" label="Contact" className="bg-secondary-bg" />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Home
