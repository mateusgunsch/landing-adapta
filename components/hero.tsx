import { Button } from "@/components/ui/button"
import { Heart, Users, Star } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-adapta-yellow/30 to-adapta-purple/20 py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Cuidado especializado para
                <span className="text-adapta-primary"> pessoas autistas</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                No Espaço Adapta T.O oferecemos atendimento multidisciplinar com profissionais especializados,
                proporcionando desenvolvimento e qualidade de vida através de terapias personalizadas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-adapta-primary hover:bg-adapta-primary/90 text-white">
                Agendar Avaliação
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-adapta-primary text-adapta-primary hover:bg-adapta-primary hover:text-white bg-transparent"
              >
                Conhecer Serviços
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-adapta-primary" />
                <span className="text-sm font-medium text-gray-700">Atendimento Humanizado</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-adapta-purple" />
                <span className="text-sm font-medium text-gray-700">Equipe Multidisciplinar</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-adapta-yellow" />
                <span className="text-sm font-medium text-gray-700">Excelência no Cuidado</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-adapta-yellow/20 to-adapta-primary/10 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-adapta-yellow/30 rounded-full mx-auto flex items-center justify-center">
                  <Heart className="h-16 w-16 text-adapta-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Espaço Adapta T.O</h3>
                <p className="text-gray-600">Transformando vidas através do cuidado especializado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
