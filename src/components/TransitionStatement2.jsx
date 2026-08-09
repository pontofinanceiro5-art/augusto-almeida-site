import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TransitionStatement2() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sectionRef.current?.querySelectorAll('.reader-word')
      
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          {
            opacity: 0.2,
            filter: 'blur(3px)',
            y: 10,
          },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            stagger: 0.08,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 40%',
              end: 'center 40%',
              scrub: 0.8,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const heading1 = "Visão além do risco."
  const heading2 = "Foco irrestrito no seu resultado."
  const paragraph = "Não somos o conselho jurídico que diz \"não\". Somos a engenharia que descobre o \"como\". Protegemos o seu caixa enquanto você domina o mercado."

  return (
    <section
      ref={sectionRef}
      class="py-36 lg:py-44 bg-[#0f0f0f] text-[#ece1d6] relative overflow-hidden flex items-center justify-center my-16 rounded-3xl border border-[#bf9d5a]/30 shadow-2xl"
    >
      <div class="absolute -left-20 -top-20 w-96 h-96 bg-[#bf9d5a]/10 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-[#bf9d5a]/10 rounded-full blur-3xl pointer-events-none" />

      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="max-w-[75%] lg:max-w-[65%] mx-auto">
          <span class="reader-word text-xs font-extrabold uppercase tracking-[0.25em] text-[#bf9d5a] mb-8 block">
            ENGENHARIA & ESTRATÉGIA CORPORATIVA
          </span>

          <h2 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.08] mb-10">
            <span class="block mb-2">
              {heading1.split(' ').map((word, i) => (
                <span key={i} class="reader-word inline-block mr-3 text-[#ece1d6]">
                  {word}
                </span>
              ))}
            </span>
            <span class="block">
              {heading2.split(' ').map((word, i) => (
                <span key={i} class="reader-word inline-block mr-3 text-[#bf9d5a]">
                  {word}
                </span>
              ))}
            </span>
          </h2>

          <p class="text-lg sm:text-xl text-[#ece1d6]/90 leading-relaxed font-medium">
            {paragraph.split(' ').map((word, i) => (
              <span key={i} class="reader-word inline-block mr-2 text-[#9ca3af]">
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}