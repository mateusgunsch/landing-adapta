import Link from "next/link"
import { Heart, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-adapta-primary" />
              <span className="text-xl font-bold">Espaço Adapta T.O</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Cuidado especializado e humanizado para pessoas com Transtorno do Espectro Autista.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Psicologia
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Terapia Ocupacional
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Fonoaudiologia
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Fisioterapia
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Psicopedagogia
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Musicoterapia
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Acompanhamento Terapêutico
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Úteis</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@adaptato.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Rua das Flores, 123 - Centro</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Espaço Adapta T.O. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
