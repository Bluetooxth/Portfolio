"use client"
import React, {useEffect} from 'react'
import Hero from '@/components/Hero'
import AboutMe from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Expertise from '@/components/Expertise'
import Experience from '@/components/Experience'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactMe from '@/components/Contact'

const LandingPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-in-out-back',
      mirror: false,
    });
  }, []);

  return (
    <React.Fragment>
      <main className='py-16 space-y-16'>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Expertise />
        <Experience />
        <ContactMe />
      </main>
    </React.Fragment>
  )
}

export default LandingPage