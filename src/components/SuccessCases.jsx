import React, { useEffect, useRef } from 'react'
import { TrendingDown, ShieldCheck, CheckCircle2, BarChart3, MoveUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const authorityMetrics = [
  {
    id: 1,
    number: '+R$ 2B',
    growth: '+24%',
    label: 'em operações estruturadas',
  },
  {
    id: 2,
    number: '100%',
    growth: 'FOCO',
    label: 'na avaliação da atividade empresarial',
  },
  {
    id: 3,
    number: 'Top 500',
    growth: 'RANKING',
    label: 'Escritórios Mais Admirados do Brasil',
  },
  {
    id: 4,
    number: '99.4%',
    growth: '+15%',
    label: 'retenção de clientes corporativos B2B',
  },
]

const successCases = [
  {
    id: 1,
    category: 'SETOR INDUSTRIAL MULTINACIONAL',
    title: 'Redução de 22% na carga tributária global',
    metric: '22% de economia fiscal',
    desc: 'Estruturação de tese tributária sobre insumos fiscais e aproveitamento de créditos acumulados em operações interestaduais.',
    icon: TrendingDown,
  },
  {
    id: 2,
    category: 'TECNOLOGIA & VALE DO SILÍCIO / BR',
    title: 'Operação de M&A avaliada em R$ 50 Milhões',
    metric: 'R$ 50M estruturados',
    desc: 'Due diligence completa, elaboração de acordos de acionistas e proteção de ativos de propriedade intelectual sem qualquer contingência.',
    icon: BarChart3,
  },
  {
    id: 3,
    category: 'GRUPO VAREJISTA NACIONAL',
    title: 'Mitigação de 85% do passivo trabalhista patronal',
    metric: '85% de redução de passivo',
    desc: 'Reestruturação completa de políticas internas de RH, negociação de acordo coletivo preventivo e arbitragem trabalhista.',
    icon: ShieldCheck,
  },
]

export default function SuccessCases() {
  const authoritySectionRef = useRef(null)
  const casesGridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = authoritySectionRef.current?.querySelectorAll('.auth-word')
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
              trigger: authoritySectionRef.current,
              start: 'top 80%',
              end: 'top 35%',
              scrub: 0.8,
            },
          }
        )
      }

      const cards = authoritySectionRef.current?.querySelectorAll('.auth-card')
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: authoritySectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      const caseWords = casesGridRef.current?.querySelectorAll('.case-word')
      if (caseWords && caseWords.length > 0) {
        gsap.fromTo(
          caseWords,
          { opacity: 0.2, y: 8, filter: 'blur(2px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            stagger: 0.04,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: casesGridRef.current,
              start: 'top 80%',
              end: 'center 50%',
              scrub: 0.8,
            },
          }
        )
      }
    }, [authoritySectionRef, casesGridRef])

    return () => ctx.revert()
  }, [])

  const titleText = "A força motriz por trás de grandes operações."
  const subText = "Engenharia jurídica e tributária de alta precisão para empresas que buscam expansão acelerada, mitigação irrestrita de riscos e proteção de caixa."

  return (
    <section id="casos" class="py-24 bg-transparent relative">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={authoritySectionRef} class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div class="lg:col-span-5">
            <span class="auth-word px-3.5 py-1 rounded-full text-xs font-extrabold tracking-widest uppercase bg-[#0f0f0f] text-[#bf9d5a] border border-[#bf9d5a]/40 mb-6 inline-block shadow-sm">
              AUTORIDADE & PROVA SOCIAL
            </span>

            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#0f0f0f] font-heading mb-6 leading-tight">
              {titleText.split(' ').map((word, i) => (
                <span key={i} class="auth-word inline-block mr-2.5">
                  {word}
                </span>
              ))}
            </h2>

            <p class="text-[#3a3d35] text-base sm:text-lg leading-relaxed font-medium">
              {subText.split(' ').map((word, i) => (
                <span key={i} class="auth-word inline-block mr-1.5 text-[#5e6255]">
                  {word}
                </span>
              ))}
            </p>
          </div>

          <div class="lg:col-span-7">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {authorityMetrics.map((item) => (
                <div
                  key={item.id}
                  class="auth-card p-6 sm:p-7 rounded-none bg-[#0f0f0f] text-[#ece1d6] border border-[#bf9d5a]/40 shadow-xl flex flex-col justify-between h-[170px] relative overflow-hidden group hover:border-[#bf9d5a] transition-all duration-300"
                >
                  <div class="flex items-center justify-between mb-2">
                    <MoveUpRight class="w-5 h-5 text-[#bf9d5a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span class="text-[10px] font-extrabold tracking-widest uppercase text-[#bf9d5a]/70">
                      {item.growth}
                    </span>
                  </div>

                  <div>
                    <span class="text-3xl sm:text-4xl font-extrabold text-[#bf9d5a] font-heading block mb-1">
                      {item.number}
                    </span>
                    <p class="text-xs text-[#9ca3af] font-medium leading-snug">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={casesGridRef} class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successCases.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                class="corner-frame p-8 rounded-none bg-transparent border border-[#bf9d5a]/45 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div class="flex items-center justify-between mb-6">
                    <span class="case-word px-3.5 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-[#0f0f0f] text-[#bf9d5a] border border-[#bf9d5a]/40 shadow-xs inline-block">
                      {item.category}
                    </span>
                    <div class="w-10 h-10 rounded-xl bg-[#bf9d5a]/20 text-[#bf9d5a] flex items-center justify-center">
                      <Icon class="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div class="mb-4">
                    <span class="font-extrabold text-2xl text-[#0f0f0f] font-heading block mb-2">
                      {item.metric.split(' ').map((word, i) => (
                        <span key={i} class="case-word inline-block mr-1.5 text-[#0f0f0f]">
                          {word}
                        </span>
                      ))}
                    </span>

                    <h3 class="text-lg font-bold text-[#0f0f0f] leading-snug">
                      {item.title.split(' ').map((word, i) => (
                        <span key={i} class="case-word inline-block mr-1.5 text-[#0f0f0f]">
                          {word}
                        </span>
                      ))}
                    </h3>
                  </div>

                  <p class="text-xs text-[#3a3d35] leading-relaxed mb-6 font-medium">
                    {item.desc.split(' ').map((word, i) => (
                      <span key={i} class="case-word inline-block mr-1 text-[#3a3d35]">
                        {word}
                      </span>
                    ))}
                  </p>
                </div>

                <div class="pt-4 border-t border-[#bf9d5a]/30 flex items-center justify-between text-xs font-semibold text-[#5e6255]">
                  <div class="flex items-center gap-1.5">
                    <CheckCircle2 class="w-4 h-4 text-[#bf9d5a]" />
                    <span class="case-word">Case Anonimizado OAB</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}