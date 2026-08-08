import React, { useEffect, useRef } from 'react'
import { MoveUpRight, ShieldCheck, Gavel } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef(null)
  const imageWrapperRef = useRef(null)
  const heroInitialContentRef = useRef(null)
  const rightTextContentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tlEntrance = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } })
      tlEntrance.from('.anim-hero-badge', { y: -20, opacity: 0, delay: 0.1 })
        .from('.anim-hero-title', { y: 40, opacity: 0 }, '-=0.7')
        .from('.anim-hero-subtitle', { y: 30, opacity: 0 }, '-=0.7')
        .from('.anim-hero-cta', { y: 20, opacity: 0 }, '-=0.5')

      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const tlScroll = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=1800',
            scrub: 1.2,
            pin: true,
            invalidateOnRefresh: true,
          }
        })

        tlScroll.to(heroInitialContentRef.current, {
          opacity: 0,
          y: -40,
          duration: 0.3,
          ease: 'power1.out',
          pointerEvents: 'none',
        }, 0)

        tlScroll.to(imageWrapperRef.current, {
          width: '42vw',
          height: '66vh',
          x: '4vw',
          y: '19vh',
          left: '0vw',
          top: '0vh',
          borderRadius: '0px',
          boxShadow: '0 25px 60px -15px rgba(15, 15, 15, 0.6), 0 0 0 1px rgba(191, 157, 90, 0.35)',
          duration: 0.55,
          ease: 'power2.inOut',
          force3D: true,
        }, 0)

        tlScroll.fromTo(rightTextContentRef.current,
          {
            y: '80vh',
            opacity: 0,
          },
          {
            y: '0vh',
            opacity: 1,
            duration: 0.45,
            ease: 'power2.out',
          },
          0.55
        )

        const lineElements = rightTextContentRef.current?.querySelectorAll('.line-reveal')
        if (lineElements && lineElements.length > 0) {
          tlScroll.fromTo(lineElements,
            {
              y: '100%',
              opacity: 0,
            },
            {
              y: '0%',
              opacity: 1,
              duration: 0.4,
              stagger: 0.06,
              ease: 'power2.out',
            },
            0.6
          )
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} id="inicio" class="relative w-full min-h-screen lg:h-screen bg-transparent overflow-hidden">
      <div
        ref={imageWrapperRef}
        class="absolute inset-0 w-full h-full z-0 overflow-hidden shadow-2xl origin-top-left rounded-none will-change-[transform,width,height]"
        style={{ borderRadius: '0px', transform: 'translate3d(0,0,0)' }}
      >
        <img
          src="/assets/hero-bg.jpg"
          alt="Augusto & Almeida - Sociedade de Advogados"
          class="w-full h-full object-cover object-center transform scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/90 via-[#0f0f0f]/60 to-[#0f0f0f]/30" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/80 via-transparent to-[#0f0f0f]/30" />

        <div ref={heroInitialContentRef} class="absolute inset-0 z-10 flex items-center justify-start max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div class="max-w-[70%]">
            <h1 class="anim-hero-title text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Arquitetura jurídica para negócios que <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#ece1d6] via-[#bf9d5a] to-[#ece1d6]">não podem parar.</span>
            </h1>

            <p class="anim-hero-subtitle text-lg sm:text-xl text-[#ece1d6]/90 leading-relaxed mb-10 max-w-[660px] font-normal drop-shadow">
              Realizamos uma avaliação holística do seu cenário corporativo, estruturando defesas implacáveis e estratégias fiscais que impulsionam o seu fluxo de caixa.
            </p>

            <div class="anim-hero-cta flex flex-wrap items-center gap-4">
              <a href="#diagnostico" class="sensei-btn sensei-btn-gold shadow-2xl shadow-[#bf9d5a]/20">
                <span>Agende um Diagnóstico Estratégico</span>
                <div class="btn-arrow-circle">
                  <MoveUpRight class="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="escritorio" class="hidden lg:block relative z-20 max-w-[1200px] mx-auto h-full px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div class="grid grid-cols-12 h-full items-center pt-16">
          <div class="col-span-6" />
          <div ref={rightTextContentRef} class="col-span-6 pl-12 pt-6 pointer-events-auto opacity-0 transform translate-y-[80vh]">
            <h2 class="text-3xl sm:text-5xl font-extrabold text-[#0f0f0f] font-heading mb-5 leading-tight">
              <div class="overflow-hidden py-0.5">
                <span class="line-reveal block">Clareza absoluta em</span>
              </div>
              <div class="overflow-hidden py-0.5">
                <span class="line-reveal block">decisões complexas.</span>
              </div>
            </h2>

            <div class="overflow-hidden mb-6">
              <p class="line-reveal text-[#3a3d35] text-base sm:text-lg leading-relaxed font-medium">
                Transformamos o risco em dados previsíveis, protegendo a operação para que a sua diretoria foque apenas na expansão.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-3.5 mb-8">
              <div class="overflow-hidden">
                <div class="line-reveal flex flex-col items-start gap-2.5 p-4 rounded-none bg-transparent border border-[#bf9d5a]/40 shadow-xs h-full justify-between">
                  <div class="w-8 h-8 rounded-xl bg-[#bf9d5a]/20 text-[#bf9d5a] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck class="w-4 h-4" />
                  </div>
                  <div>
                    <h4 class="font-bold text-[#0f0f0f] text-xs sm:text-sm mb-1 leading-snug">Consultoria Preventiva & Blindagem Fiscal</h4>
                    <p class="text-[11px] text-[#5e6255] leading-normal font-medium">Estruturação societária de risco zero e eficiência de tributos.</p>
                  </div>
                </div>
              </div>

              <div class="overflow-hidden">
                <div class="line-reveal flex flex-col items-start gap-2.5 p-4 rounded-none bg-transparent border border-[#bf9d5a]/40 shadow-xs h-full justify-between">
                  <div class="w-8 h-8 rounded-xl bg-[#bf9d5a]/20 text-[#bf9d5a] flex items-center justify-center flex-shrink-0">
                    <Gavel class="w-4 h-4" />
                  </div>
                  <div>
                    <h4 class="font-bold text-[#0f0f0f] text-xs sm:text-sm mb-1 leading-snug">Contencioso Estratégico em Tribunais Superiores</h4>
                    <p class="text-[11px] text-[#5e6255] leading-normal font-medium">Atuação incisiva na defesa de ativos corporativos e patrimoniais.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}