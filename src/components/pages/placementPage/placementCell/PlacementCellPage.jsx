import React from 'react'
import Header from '../../../common/Header'
import Navbar from '../../../common/Navbar'
import PlacementHero from './PlacementHero'
import PlacementAbout from './PlacementAbout'
import OurRecruiter from './OurRecruiter'
import Footer from '../../../common/Footer'

const PlacementCellPage = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <PlacementHero/>
    <PlacementAbout/>
    <OurRecruiter/>
    <Footer/>  
    </>
  )
}

export default PlacementCellPage