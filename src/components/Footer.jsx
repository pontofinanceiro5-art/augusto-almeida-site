import React from 'react'
import { ArrowUp, MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer class="relative z-30 bg-[#0f0f0f] text-[#ece1d6] border-t border-[#bf9d5a]/25 pt-16 pb-12 overflow-hidden shadow-[0_-35px_70px_rgba(0,0,0,0.95)]">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-6">
          <div class="lg:col-span-4">
            <a href="#inicio" class="inline-block mb-4">
              <img
                src="/assets/Logo-Escuro.png"
                alt="Augusto & Almeida - Sociedade de Advogados"
                class="h-10 sm:h-12 w-auto object-contain"
              />
            </a>
            <p class="text-xs text-[#9ca3af] leading-relaxed mb-6">
              Sociedade de Advogados focada em governança corporativa, eficiência tributária e defesa de ativos de alto valor empresarial.
            </p>
            <div class="text-xs font-medium text-[#bf9d5a] space-y-1">
              <p>OAB/SP nº 123.456 • CNPJ 12.345.678/0001-90</p>
              <p>ISO 27001 Security & Compliance Certified</p>
            </div>
          </div>

          <div class="lg:col-span-3">
            <h4 class="text-xs font-bold uppercase tracking-widest text-[#bf9d5a] mb-4">Navegação</h4>
            <ul class="space-y-2.5 text-xs text-[#9ca3af]">
              <li><a href="#inicio" class="hover:text-white transition-colors">Início</a></li>
              <li><a href="#escritorio" class="hover:text-white transition-colors">O Escritório</a></li>
              <li><a href="#especialidades" class="hover:text-white transition-colors">Áreas de Atuação</a></li>
              <li><a href="#casos" class="hover:text-white transition-colors">Casos de Sucesso</a></li>
              <li><a href="#equipe" class="hover:text-white transition-colors">Equipe & Sócios</a></li>
              <li><a href="#diagnostico" class="hover:text-white transition-colors">Diagnóstico Estratégico</a></li>
            </ul>
          </div>

          <div class="lg:col-span-3">
            <h4 class="text-xs font-bold uppercase tracking-widest text-[#bf9d5a] mb-4">Endereço da Sede</h4>
            <div class="space-y-3 text-xs text-[#9ca3af]">
              <div class="flex items-start gap-2.5">
                <MapPin class="w-4 h-4 text-[#bf9d5a] flex-shrink-0 mt-0.5" />
                <span>Av. Brigadeiro Faria Lima, 3477 - 14º Andar • Itaim Bibi, São Paulo - SP</span>
              </div>
              <div class="flex items-center gap-2.5">
                <Phone class="w-4 h-4 text-[#bf9d5a] flex-shrink-0" />
                <span>+55 (11) 3090-0000</span>
              </div>
              <div class="flex items-center gap-2.5">
                <Mail class="w-4 h-4 text-[#bf9d5a] flex-shrink-0" />
                <span>contato@augusto-almeida.adv.br</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2">
            <h4 class="text-xs font-bold uppercase tracking-widest text-[#bf9d5a] mb-4">Redes Sociais</h4>
            <div class="flex flex-col gap-2.5 text-xs text-[#9ca3af]">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2.5 hover:text-[#bf9d5a] transition-colors">
                <Instagram class="w-4 h-4 text-[#bf9d5a]" />
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2.5 hover:text-[#bf9d5a] transition-colors">
                <Facebook class="w-4 h-4 text-[#bf9d5a]" />
                <span>Facebook</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2.5 hover:text-[#bf9d5a] transition-colors">
                <Linkedin class="w-4 h-4 text-[#bf9d5a]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div class="my-8 sm:my-12 text-center select-none overflow-hidden pointer-events-none">
          <h2 class="text-[7.5vw] sm:text-[8.4vw] font-extrabold font-heading tracking-tighter uppercase leading-none whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-[#ece1d6]/25 via-[#bf9d5a]/15 to-transparent">
            Augusto & Almeida
          </h2>
        </div>

        <div class="pt-8 border-t border-[#22252a] flex flex-col items-center justify-center text-center gap-3 text-xs text-[#9ca3af]">
          <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
            <span>© {new Date().getFullYear()} Augusto & Almeida - Sociedade de Advogados. Todos os direitos reservados.</span>
            <span class="hidden sm:inline text-[#bf9d5a]/40">•</span>
            <span class="text-[#bf9d5a] font-medium">Desenvolvido por <strong class="text-[#ece1d6] font-bold">ASG Web</strong></span>
          </div>

          <div class="flex items-center justify-center text-xs text-[#9ca3af] mt-1">
            <button
              onClick={scrollToTop}
              class="inline-flex items-center gap-1.5 text-xs text-[#bf9d5a] hover:text-white transition-colors cursor-pointer"
              title="Voltar ao topo"
            >
              <span>Voltar ao topo</span>
              <ArrowUp class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}