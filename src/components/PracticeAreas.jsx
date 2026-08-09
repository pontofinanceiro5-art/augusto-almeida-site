import React, { useState, useEffect, useRef } from 'react'
import { FileText, ShieldAlert, Building2, Lock, Scale, MoveUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const specialtiesData = [
  {
    id: 'tributario',
    title: 'Direito Tributário',
    desc: 'Analisamos minuciosamente as DREs e o balanço patrimonial da sua empresa para modelar o ponto de equilíbrio perfeito da sua operação. Estruturamos transições seguras para regimes mais complexos — como o Lucro Real —, destravando deduções avançadas e métodos de depreciação acelerada de ativos que injetam liquidez imediata no seu fluxo de caixa e blindam o crescimento do negócio.',
    metric: '+R$ 120M Recuperados',
    submetric: 'Créditos tributários identificados e compensados com zero risco autuatório.',
    icon: FileText,
    image: '/assets/specialty-tax.jpg',
  },
  {
    id: 'trabalhista',
    title: 'Trabalhista Patronal',
    desc: 'Atuamos na raiz do seu custo operacional. Simulamos e mitigamos o impacto real da folha de pagamento na sua margem de lucro, auditando desde o recolhimento exato do INSS da folha até os reflexos jurídicos de adicionais noturnos em operações logísticas complexas. Uma prevenção ativa que protege o seu caixa contra surpresas judiciais e otimiza a estruturação das suas equipes.',
    metric: '85% Mitigação de Passivo',
    submetric: 'Auditoria de folha, acordos coletivos e defesa perante Tribunais do Trabalho.',
    icon: ShieldAlert,
    image: '/assets/specialty-labor.jpg',
  },
  {
    id: 'societario',
    title: 'Societário e M&A',
    desc: 'Desenhamos a arquitetura societária ideal para proteger o patrimônio dos fundadores e garantir a perpetuidade da empresa. Criamos o alicerce jurídico e de governança necessário para viabilizar captações de investimento rodadas de negócios, sucessão patrimonial e transações de alto valor (M&A) com absoluta segurança institucional e clareza de deveres.',
    metric: '+R$ 500M em Operações',
    submetric: 'Holdings familiares e patrimoniais, acordo de sócios e auditoria due diligence.',
    icon: Building2,
    image: '/assets/specialty-ma.jpg',
  },
  {
    id: 'contratos',
    title: 'Contratos Empresariais',
    desc: 'Muito além de redigir termos, atuamos com a avaliação holística de parceiros, editais e processos licitatórios. Dissecamos cada cláusula documental e analisamos rigorosamente o escopo do objeto de contratação para garantir que todo acordo firmado — seja no setor público ou privado — tenha o encaixe perfeito com a sua atividade matriz, sem margem para passivos ou rupturas na operação.',
    metric: 'Zero Brechas Comerciais',
    submetric: 'Contratos de distribuição, joint-ventures, franquias e acordos internacionais.',
    icon: Lock,
    image: '/assets/specialty-contracts.jpg',
  },
  {
    id: 'contencioso',
    title: 'Contencioso Estratégico',
    desc: 'Quando a disputa judicial ou arbitral se torna inevitável, nossa equipe não olha apenas para o processo de forma isolada; aplicamos uma avaliação completa dos riscos operacionais e financeiros da sua empresa. Defendemos os interesses e o patrimônio do seu negócio em litígios decisivos com foco implacável na resolução ágil e na preservação da sua reputação de mercado.',
    metric: 'Tribunais Superiores',
    submetric: 'Defesa de ativos corporativos e sustentação oral perante STF, STJ e TST.',
    icon: Scale,
    image: '/assets/specialty-litigation.jpg',
  },
]

export default function PracticeAreas() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'center center',
          end: '+=2200',
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const idx = Math.min(
              specialtiesData.length - 1,
              Math.floor(self.progress * specialtiesData.length)
            )
            setActiveIndex(idx)
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const currentSpecialty = specialtiesData[activeIndex]

  return (
    <section id="especialidades" ref={containerRef} class="py-24 bg-transparent relative overflow-hidden flex items-center min-h-screen">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span class="text-xs font-extrabold uppercase tracking-widest text-[#bf9d5a] mb-3 block">
              Hub de Soluções Corporativas
            </span>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-[#0f0f0f] font-heading">
              Especialidades
            </h2>
          </div>
          
          <a href="#diagnostico" class="sensei-btn sensei-btn-black flex items-center mt-6 md:mt-0 w-fit min-h-[44px]">
            <span>Explorar Nossas Soluções</span>
            <div class="btn-arrow-circle">
              <MoveUpRight class="w-4 h-4 text-white" />
            </div>
          </a>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div class="lg:col-span-5 relative flex gap-6 py-2">
            <div class="relative w-1 bg-[#bf9d5a]/25 rounded-full my-2 flex-shrink-0">
              <div
                class="absolute top-0 left-0 w-full bg-[#bf9d5a] rounded-full transition-all duration-500 ease-out shadow-sm"
                style={{
                  height: `${100 / specialtiesData.length}%`,
                  transform: `translateY(${activeIndex * 100}%)`,
                }}
              />
            </div>

            <div class="space-y-4 flex-grow">
              {specialtiesData.map((item, idx) => {
                const isActive = activeIndex === idx
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    class={`cursor-pointer transition-all duration-500 select-none ${
                      isActive
                        ? 'opacity-100 translate-x-2'
                        : 'opacity-35 hover:opacity-75 translate-x-0'
                    }`}
                  >
                    <div class="flex items-center gap-3 mb-1">
                      <span class={`text-xl sm:text-2xl font-extrabold font-heading transition-colors duration-300 ${
                        isActive ? 'text-[#0f0f0f]' : 'text-[#5e6255]'
                      }`}>
                        {item.title}
                      </span>
                    </div>

                    {isActive && (
                      <div class="mt-2 pl-1 space-y-2.5 animate-fadeIn">
                        <p class="text-xs sm:text-sm text-[#3a3d35] leading-relaxed font-medium">
                          {item.desc}
                        </p>

                        <a
                          href="#diagnostico"
                          class="inline-flex items-center gap-2 text-xs font-bold text-[#bf9d5a] hover:text-[#0f0f0f] transition-colors"
                        >
                          <span>Saiba Mais sobre {item.title}</span>
                          <MoveUpRight class="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div class="lg:col-span-7 flex">
            <div class="w-full h-full rounded-none shadow-2xl relative overflow-hidden border border-[#bf9d5a]/40 transition-all duration-700 min-h-[380px]">
              <div key={currentSpecialty.id} class="absolute inset-0 z-0 transition-opacity duration-700">
                <img
                  src={currentSpecialty.image}
                  alt={currentSpecialty.title}
                  class="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}