import { Button } from "@/components/ui/button"
import { Heart, Users, Star } from "lucide-react"
import Link from "next/link"
import WhatsAppButton from "./whatsapp-button"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-adapta-yellow/30 to-adapta-purple/20 py-12 sm:py-20 lg:py-32"
    >
      <div className="max-w-full mx-auto 3xl:mx-64 px-4 sm:px-6 lg:px-8 justify-center content-center items-center">
        <div className="grid xl:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Clínica especializada para atendimento em
                <span className="text-adapta-primary"> TEA (Transtorno do Espectro Autista)</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                No Espaço Adapta T.O oferecemos atendimento multidisciplinar com profissionais especializados,
                proporcionando desenvolvimento e qualidade de vida através de terapias personalizadas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton />
              <Link href="#servicos">
                <Button
                  size="lg" variant="outline" className="border-adapta-primary text-adapta-primary hover:bg-adapta-primary hover:text-white bg-transparent w-full">
                  Conhecer Serviços
                </Button>
              </Link>
            </div>

            <div className="relative w-full block xl:hidden">
              <Image
                src="/frente.jpg"
                alt="Sala de atendimento individual - Espaço Adapta T.O"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-3xl"
              />
          </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-adapta-primary" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Atendimento Humanizado</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-adapta-purple" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Equipe Multidisciplinar</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-adapta-yellow" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Excelência no Cuidado</span>
              </div>
            </div>
          </div>

          <div className="relative w-full hidden xl:block">
              <Image
                src="/frente.jpg"
                alt="Sala de atendimento individual - Espaço Adapta T.O"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-3xl"
              />
          </div>
        </div>
      </div>
    </section>
  )
}
