import React from 'react'
import Contact from './Contact.js'
import About from './About.js'
import Header from './Header.js'
import Nav from './Nav.js'
import Services from './Services.js'
import WCU from './WCU.js'

export default function Home() {
    return (
        <div>
            <Nav />
            <Header />
            <About />
            <Services />
            <WCU />
            <Contact />
        </div>
    )
}
