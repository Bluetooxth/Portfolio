import About from '@/components/Home/About'
import ContactMe from '@/components/Home/Contact'
import Hero from '@/components/Home/Hero'
import Skills from '@/components/Home/Skills'
import React from 'react'

const Home = () => {
  return (
    <>
    <main className='space-y-12 py-12'>
      <Hero />
      <About />
      <Skills />
      <ContactMe />
    </main>
    </>
  )
}

export default Home