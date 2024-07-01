import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import AboutMe from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Skills/> 
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home