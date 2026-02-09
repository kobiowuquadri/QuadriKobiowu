import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import AboutMe from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Experience from '../../components/Experience/Experience'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Mentorship from '../../components/Mentorship/Mentorship'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Skills />
      <Mentorship />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Home