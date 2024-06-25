import React from 'react'
import NavBar from './navbar'
import Header from './Header'
import "./styleHP.css"
import Footer from './footer'

function LandingPage() {
  return (
    <div className='container'>
        <NavBar />
        <Header />
        <Footer />      
    </div>
  )
}

export default LandingPage
