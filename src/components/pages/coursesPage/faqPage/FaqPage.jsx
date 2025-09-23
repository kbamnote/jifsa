import React from 'react'
import FaqHero from './FaqHero'
import Header from '../../../common/Header'
import Navbar from '../../../common/Navbar'
import Footer from '../../../common/Footer'
import FaqQuestions from './FaqQuestions'

const FaqPage = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <FaqHero/>
    <FaqQuestions/>
    <Footer/>
    
    </>
  )
}

export default FaqPage