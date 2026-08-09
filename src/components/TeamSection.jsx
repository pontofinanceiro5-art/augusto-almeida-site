import React, { useEffect, useRef } from 'react'
import { MoveUpRight, Users } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TeamSection() {
  const teamSectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = teamSectionRef.current?.querySelectorAll('.team-word')
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.2, y: 10, filter: 'blur(2px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: teamSectionRef.current,
              start: 'top 80%',
              end: 'top 35%',
              scrub: 0.8,
            },
          }
        )
      }
    }, teamSectionRef)

    return () => ctx.revert()
  }, [])

  const title1 = "Inteligência jurídica."
  const title2 = "Visão de negócios."
  const paragraph = "Nosso conselho de sócios não entrega apenas pareceres; atua como extensão direta da sua diretoria, lendo nas entrelinhas de cada projeto para antecipar riscos antes que eles cheguem ao seu caixa."

  return (
    <section id="equipe" class="py-24 bg-transparent relative overflow-hidden">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={teamSectionRef} class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div class="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <span class="team-word px-3.5 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-[#0f0f0f] text-[#bf9d5a] border border-[#bf9d5a]/40 mb-6 inline-block shadow-sm">
                A EQUIPE • CORPO EXECUTIVO
              </span>

              <h2 class="text-3xl sm:text-5xl font-extrabold font-heading mb-6 leading-tight">
                <span class="block">
                  {title1.split(' ').map((word, i) => (
                    <span key={i} class="team-word inline-block mr-2.5 text-[#0f0f0f]">
                      {word}
                    </span>
                  ))}
                </span>
                <span class="block">
                  {title2.split(' ').map((word, i) => (
                    <span key={i} class="team-word inline-block mr-2.5 text-[#bf9d5a]">
                      {word}
                    </span>
                  ))}
                </span>
              </h2>

              <p class="text-[#3a3d35] text-base sm:text-lg leading-relaxed font-medium mb-8">
                {paragraph.split(' ').map((word, i) => (
                  <span key={i} class="team-word inline-block mr-1.5 text-[#5e6255]">
                    {word}
                  </span>
                ))}
              </p>

              <div class="space-y-4 mb-8 border-l-2 border-[#bf9d5a] pl-4">
                <div>
                  <h4 class="font-bold text-[#0f0f0f] text-sm">Sócio Fundador • Dr. Augusto Silva</h4>
                  <p class="text-xs text-[#5e6255]">Especialista em Contencioso Estratégico & Gestão de Riscos Patronais.</p>
                </div>
                <div>
                  <h4 class="font-bold text-[#0f0f0f] text-sm">Sócio Fundador • Dr. Jefferson Almeida</h4>
                  <p class="text-xs text-[#5e6255]">Especialista em Direito Tributário & M&A corporativo.</p>
                </div>
              </div>
            </div>

            <a href="#diagnostico" class="sensei-btn sensei-btn-black inline-flex items-center min-h-[48px] w-fit mt-4">
              <span>Conheça a Diretoria Jurídica</span>
              <div class="btn-arrow-circle">
                <MoveUpRight class="w-4 h-4 text-white" />
              </div>
            </a>
          </div>

          <div class="lg:col-span-6 flex">
            <div class="w-full h-full rounded-none overflow-hidden shadow-2xl relative border border-[#bf9d5a]/40 group min-h-[440px]">
              <img
                src="/assets/team-partners.jpg"
                alt="Diretoria Jurídica Augusto & Almeida"
                class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/85 via-transparent to-transparent" />
              <div class="absolute bottom-6 left-6 right-6 p-4 rounded-none bg-[#0f0f0f]/85 backdrop-blur-md border border-[#bf9d5a]/40 text-[#ece1d6] flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold uppercase text-[#bf9d5a] block">Diretoria Jurídica Executiva</span>
                  <span class="text-sm font-semibold">Augusto & Almeida - Sociedade de Advogados</span>
                </div>
                <Users class="w-6 h-6 text-[#bf9d5a]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}