import React from 'react'
import Header from '../../../common/Header'
import Navbar from '../../../common/Navbar'
import PlacementHero from './PlacementHero'
import PlacementAbout from './PlacementAbout'
import OurRecruiter from './OurRecruiter'
import Footer from '../../../common/Footer'
import SEO from '../../../seo/SEO'

const PlacementCellPage = () => {
  return (
    <>
    <SEO 
      title="Fire Safety Jobs & Placement Cell | Safety Officer Jobs | JIFSA Careers"
      description="Get 100% placement assistance in fire safety jobs, industrial safety careers, HSE positions. Top fire safety institute with guaranteed job placement in safety officer roles."
      keywords="fire safety jobs, safety officer jobs, fire safety placement, industrial safety jobs, HSE jobs, fire safety career opportunities, safety manager jobs, fire protection jobs, fire safety employment, safety officer placement"
    />
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