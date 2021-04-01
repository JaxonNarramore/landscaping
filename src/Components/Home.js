import React from 'react'
import Contact from './Contact.js'
import Header from './Header.js'
import Navbar from './Navbar.js'
import ServicesHome from './ServicesHome.js'
import WCU from './WCU.js'
import Quote from './Quote.js'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Quote />
            <ServicesHome />
            <WCU />
            <Contact />
        </div>
    )
}
