import React, { useEffect, useState, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from './components/Header'
import Hero from './components/Hero'
import PracticeAreas from './components/PracticeAreas'
import TransitionStatement2 from './components/TransitionStatement2'
import SuccessCases from './components/SuccessCases'
import TeamSection from './components/TeamSection'
import BottomCTA from './components/BottomCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Preloader from './components/Preloader'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(true)
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const updateLenis = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(updateLenis)
      lenis.destroy()
    }
  }, [])

  const handlePreloaderComplete = () => {
    setLoading(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
    ScrollTrigger.refresh()
  }

  return (
    <div class="relative min-h-screen text-[#0f0f0f] antialiased selection:bg-[#bf9d5a] selection:text-[#0f0f0f]">
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <Header />
      <main class="relative z-10 bg-fixed-geometric-sections">
        <Hero />
        <PracticeAreas />
        <TransitionStatement2 />
        <SuccessCases />
        <TeamSection />
        <BottomCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}