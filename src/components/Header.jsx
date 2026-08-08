import React, { useState, useEffect } from 'react'
import { MoveUpRight } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    const footerElement = document.querySelector('footer')
    let observer = null

    if (footerElement) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsFooterVisible(entry.isIntersecting)
          })
        },
        {
          rootMargin: '0px 0px -10% 0px',
          threshold: 0.1,
        }
      )

      observer.observe(footerElement)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (observer && footerElement) {
        observer.unobserve(footerElement)
      }
    }
  }, [])

  return (
    <header
      class={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isFooterVisible
          ? 'opacity-0 -translate-y-6 pointer-events-none'
          : 'opacity-100 translate-y-0'
      } ${
        isScrolled
          ? 'bg-white/40 backdrop-blur-md shadow-sm py-1.5'
          : 'bg-gradient-to-b from-[#0f0f0f]/80 via-[#0f0f0f]/40 to-transparent py-2.5'
      }`}
    >
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#inicio"
          class="flex items-center group rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf9d5a]"
        >
          <img
            src={isScrolled ? '/assets/Logo01.png' : '/assets/Logo-Escuro.png'}
            alt="Augusto & Almeida - Sociedade de Advogados"
            class="h-auto w-[120px] transition-all duration-300"
          />
        </a>

        <div class="flex items-center gap-6 lg:gap-8">
          <nav class="hidden lg:flex items-center gap-7 text-sm font-semibold">
            <a
              href="#escritorio"
              class={`transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf9d5a] rounded ${
                isScrolled
                  ? 'text-[#0f0f0f] hover:text-[#bf9d5a]'
                  : 'text-[#ece1d6] hover:text-[#bf9d5a]'
              }`}
            >
              O Escritório
            </a>
            <a
              href="#especialidades"
              class={`transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf9d5a] rounded ${
                isScrolled
                  ? 'text-[#0f0f0f] hover:text-[#bf9d5a]'
                  : 'text-[#ece1d6] hover:text-[#bf9d5a]'
              }`}
            >
              Áreas de Atuação
            </a>
            <a
              href="#equipe"
              class={`transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf9d5a] rounded ${
                isScrolled
                  ? 'text-[#0f0f0f] hover:text-[#bf9d5a]'
                  : 'text-[#ece1d6] hover:text-[#bf9d5a]'
              }`}
            >
              Equipe
            </a>
            <a
              href="#insights"
              class={`transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf9d5a] rounded ${
                isScrolled
                  ? 'text-[#0f0f0f] hover:text-[#bf9d5a]'
                  : 'text-[#ece1d6] hover:text-[#bf9d5a]'
              }`}
            >
              Insights
            </a>
          </nav>

          <a
            href="#diagnostico"
            class={`sensei-btn ${
              isScrolled
                ? 'sensei-btn-black'
                : 'sensei-btn-gold shadow-lg shadow-amber-950/20'
            }`}
          >
            <span>Fale com um Especialista</span>
            <div class="btn-arrow-circle">
              <MoveUpRight class="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}