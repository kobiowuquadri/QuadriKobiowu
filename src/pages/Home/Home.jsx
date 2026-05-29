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

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Services />
      <Skills />
      <Collaboration />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Home
