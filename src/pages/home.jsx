import React from 'react'
import { ScrollRestoration } from 'react-router-dom'
import Hero from '../components/sections/hero'
import Portfolio from '../components/sections/portfolio'
import CallToAction from '../components/sections/callToAction'
import Partners from '../components/sections/partners'
import HeroShowReel from '../components/sections/hero2'

const Home = () => {
  return (
    <>
        {/* <Hero/> */}
        <HeroShowReel/>
        <Partners/>
        <Portfolio/>
      
        <CallToAction/>
        <ScrollRestoration/>
    </>
  )
}

export default Home