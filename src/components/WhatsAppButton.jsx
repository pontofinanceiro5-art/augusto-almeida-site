import React, { useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
    'Olá! Gostaria de agendar um diagnóstico jurídico estratégico para minha empresa com a diretoria do Augusto & Almeida.'
  )}`

  return (
    <div class="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        class="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#0f0f0f]/90 backdrop-blur-md border border-[#25D366]/50 shadow-2xl text-white hover:border-[#25D366] transition-all duration-500 ease-out hover:scale-105 cursor-pointer"
        aria-label="Falar com Especialista via WhatsApp"
      >
        <div class="relative flex items-center justify-center">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <div class="w-8 h-8 rounded-full bg-[#25D366] text-[#0f0f0f] flex items-center justify-center relative z-10 shadow-md">
            <MessageCircle class="w-5 h-5 fill-current stroke-[1.5]" />
          </div>
        </div>

        <div class="flex flex-col text-left pr-1">
          <span class="text-[10px] font-extrabold tracking-widest uppercase text-[#25D366]">
            PLANTÃO B2B ONLINE
          </span>
          <span class="text-xs font-bold text-[#ece1d6] group-hover:text-[#25D366] transition-colors">
            Falar no WhatsApp
          </span>
        </div>
      </a>
    </div>
  )
}