import Link from "next/link"
import { Heart, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const phoneNumbers = [
    { text: "(65) 99989-3202", link: "tel:+5565999893202" },
    { text: "(65) 99233-0091", link: "tel:+5565992330091" },
  ]
  const emails = [{ text: "financeiroadaptato@hotmail.com", link: "mailto:financeiroadaptato@hotmail.com" }]
  const addresses = [
    {
      text: "Matriz: Rua Major Gama, 950, Centro Sul - Cuiabá/MT",
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rua Major Gama, 950, Centro Sul - Cuiabá/MT")}`,
    },
    {
      text: "Filial: Rua Barão de Melgaço, 2350, Edifício Barão Center, Sala 104, Centro Sul - Cuiabá/MT",
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rua Barão de Melgaço, 2350, Edifício Barão Center, Sala 104, Centro Sul - Cuiabá/MT")}`,
    },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 justify-between">
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
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="min-h-4 min-w-4 max-h-4 max-w-4" />
                <div className="flex flex-col">
                  {phoneNumbers.map((item, index) => (
                    <a key={index} href={item.link} className="hover:text-white transition-colors">
                      {item.text}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="min-h-4 min-w-4 max-h-4 max-w-4" />
                <div className="flex flex-col">
                  {emails.map((item, index) => (
                    <a key={index} href={item.link} className="hover:text-white transition-colors text-md">
                      {item.text}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="min-h-4 min-w-4 max-h-4 max-w-4" />
                <div className="flex flex-col">
                  {addresses.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
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
