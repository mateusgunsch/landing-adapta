import { Button } from "@/components/ui/button"
import { Users, Award, Clock } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais com formação específica em autismo e transtornos do desenvolvimento.",
  },
  {
    icon: Award,
    title: "Abordagem Personalizada",
    description: "Cada plano terapêutico é desenvolvido individualmente, respeitando as necessidades únicas.",
  },
  {
    icon: Clock,
    title: "Acompanhamento Contínuo",
    description: "Monitoramento constante do progresso com ajustes regulares no tratamento.",
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Sobre o Espaço Adapta T.O</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos um espaço dedicado ao atendimento especializado de pessoas com Transtorno do Espectro Autista
                (TEA). Nossa missão é proporcionar desenvolvimento, autonomia e qualidade de vida através de um
                atendimento multidisciplinar humanizado e baseado em evidências científicas.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-adapta-purple/10 rounded-full flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-adapta-purple" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button className="bg-adapta-primary hover:bg-adapta-primary/90 text-white">Conheça Nossa Equipe</Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-adapta-yellow/30 to-adapta-primary/10 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Promover o desenvolvimento integral de pessoas com TEA através de intervenções terapêuticas
                    especializadas, respeitando a individualidade e potencializando as habilidades de cada pessoa.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center p-4 bg-white/50 rounded-xl">
                    <div className="text-2xl font-bold text-adapta-primary">8</div>
                    <div className="text-sm text-gray-600">Especialidades</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-xl">
                    <div className="text-2xl font-bold text-adapta-purple">100%</div>
                    <div className="text-sm text-gray-600">Dedicação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
