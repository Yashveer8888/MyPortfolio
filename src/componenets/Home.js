import React from 'react'

import About from './About'
import Coding from './Coding'
import Web from './Web'
import Ml from './Ml'
import Contact from './Contact'
import NavBar from './NavBar'

export default function Home() {
  return (
    <>
        <NavBar/>
    <section id="about">
        <About/>
    </section>

    <section id="coding">
        <Coding/>
    </section>

    <section id="web-projects">
        <Web/>
    </section>

    <section id="ml-projects">
        <Ml/>
    </section>

    <section id="contact">
        <Contact/>
    </section>
    
    </>
  )
}
