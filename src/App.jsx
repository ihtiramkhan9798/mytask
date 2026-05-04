
import {React ,useState} from 'react';
import ConversionGallery from './components/component/ConversionGallery';
import Header from './components/component/Header';
import Hero from "./components/component/Hero"
import Marquee from './components/component/Marquee';
import Stats from './components/component/Stats';
import Services from './components/component/Services';
import About from './components/component/About';
import Image from './components/component/Image';
import TrustBadges from './components/component/TrustBadges';
import { Operations, Support } from './components/component/Solutions';
import { Boost, Reasons } from './components/component/Boost';
import Projects from './components/component/Projects';
import Footer from './components/component/Footer';
import { marqueeItems, marqueeItems2 } from './mock/mock';
import './App.css'




function App() {
 

  return (
  <div className="min-h-screen bg-[#070708] text-white overflow-x-hidden" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
      <Header />
      <main>
        <Hero />
       
        <About /> 
        <Image></Image>
        <Marquee items={marqueeItems} />
        <Stats />
        <Services />
        <Marquee items={marqueeItems2} gradient />
        <ConversionGallery />
        <Boost />
       <Reasons />
        <Projects />
      </main>
      <Footer />
      
    </div>
  )
}

export default App
