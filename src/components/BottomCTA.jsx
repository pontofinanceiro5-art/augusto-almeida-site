import React, { useEffect, useRef } from 'react'
import { MoveUpRight, MessageCircle } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BottomCTA() {
  const ctaRef = useRef(null)
  const overlayDarkRef = useRef(null)

  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
    'Olá! Gostaria de agendar um diagnóstico jurídico estratégico para minha empresa com a diretoria do Augusto & Almeida.'
  )}`

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        ScrollTrigger.create({
          trigger: ctaRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: false,
          scrub: true,
          invalidateOnRefresh: true,
        })

        if (overlayDarkRef.current) {
          gsap.to(overlayDarkRef.current, {
            opacity: 0.85,
            ease: 'none',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top top',
              end: '+=100%',
              scrub: true,
            },
          })
        }
      })
    }, ctaRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ctaRef}
      id="diagnostico"
      class="relative w-full h-screen bg-transparent overflow-hidden flex flex-col items-center justify-center py-20 z-10"
    >
      <div
        ref={overlayDarkRef}
        class="absolute inset-0 bg-[#0f0f0f] pointer-events-none opacity-0 z-20 transition-opacity"
      />

      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#bf9d5a]/10 rounded-full blur-3xl pointer-events-none" />

      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span class="px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase bg-[#0f0f0f] text-[#bf9d5a] border border-[#bf9d5a]/40 mb-8 inline-block shadow-sm">
          DIAGNÓSTICO ESTRATÉGICO B2B
        </span>

        <h2 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0f0f0f] font-heading tracking-tight leading-[1.08] mb-8 max-w-[900px] mx-auto">
          Pronto para proteger o seu caixa e escalar com segurança?
        </h2>

        <p class="text-lg sm:text-xl text-[#3a3d35] leading-relaxed font-medium max-w-[680px] mx-auto mb-12">
          Agende um diagnóstico com nossos sócios fundadores e descubra como a engenharia jurídica e tributária pode blindar a sua operação.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="sensei-btn sensei-btn-gold shadow-xl shadow-[#bf9d5a]/20 min-h-[50px] inline-flex items-center gap-2"
          >
            <span>Fale com um Especialista</span>
            <div class="btn-arrow-circle">
              <MoveUpRight class="w-4 h-4" />
            </div>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="sensei-btn sensei-btn-black shadow-xl min-h-[50px] inline-flex items-center gap-2"
          >
            <MessageCircle class="w-4 h-4 text-[#25D366]" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}