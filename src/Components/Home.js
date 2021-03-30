import React from 'react'
import Contact from './Contact.js'
import Header from './Header.js'
import Nav from './Nav.js'
import ServicesHome from './ServicesHome.js'
import WCU from './WCU.js'

export default function Home() {
    return (
        <div>
            <Nav />
            <Header />
            <ServicesHome />
            <WCU />
            <Contact />
        </div>
    )
}
