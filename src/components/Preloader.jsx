import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const preloaderRef = useRef(null)
  const logoRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)

    const counterObj = { value: 0 }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          onComplete: () => {
            document.body.style.overflow = ''
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
            if (onComplete) onComplete()
          },
        })
      },
    })

    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
      .to(
        counterObj,
        {
          value: 100,
          duration: 1.8,
          ease: 'power2.inOut',
          onUpdate: () => {
            setProgress(Math.floor(counterObj.value))
          },
        },
        '-=0.4'
      )
      .to(
        barRef.current,
        {
          width: '100%',
          duration: 1.8,
          ease: 'power2.inOut',
        },
        '<'
      )
      .to(logoRef.current, {
        scale: 1.05,
        filter: 'drop-shadow(0 0 35px rgba(191,157,90,0.5))',
        duration: 0.4,
      })

    return () => {
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div
      ref={preloaderRef}
      class="fixed inset-0 z-[100] bg-[#0f0f0f] text-[#ece1d6] flex flex-col items-center justify-between p-8 sm:p-12 select-none"
    >
      <div class="w-full max-w-[1200px] flex justify-between items-center text-[10px] font-extrabold tracking-[0.25em] uppercase text-[#bf9d5a]">
        <span>Augusto & Almeida</span>
        <span>Sociedade de Advogados</span>
      </div>

      <div class="flex flex-col items-center justify-center my-auto">
        <div ref={logoRef} class="opacity-0 transform translate-y-6 mb-8 flex flex-col items-center">
          <img
            src="/assets/Logo-Escuro.png"
            alt="Augusto & Almeida - Sociedade de Advogados"
            class="h-auto w-[400px] mb-4 drop-shadow-[0_0_20px_rgba(191,157,90,0.3)]"
          />
          <span class="text-xs font-semibold text-[#9ca3af] tracking-widest uppercase">
            Carregando Arquitetura Jurídica
          </span>
        </div>

        <div class="text-5xl sm:text-7xl font-extrabold font-heading text-[#bf9d5a] tracking-tight">
          {progress}<span class="text-2xl sm:text-4xl text-[#ece1d6]/60">%</span>
        </div>
      </div>

      <div class="w-full max-w-[1200px]">
        <div class="w-full h-[2px] bg-[#22252a] rounded-full overflow-hidden relative mb-4">
          <div
            ref={barRef}
            class="h-full bg-gradient-to-r from-[#bf9d5a] via-[#ece1d6] to-[#bf9d5a] w-0 rounded-full"
          />
        </div>
        <div class="flex justify-between items-center text-[10px] text-[#5e6255] font-semibold">
          <span>OAB/SP • ISO 27001</span>
          <span>B2B Corporate Law</span>
        </div>
      </div>
    </div>
  )
}