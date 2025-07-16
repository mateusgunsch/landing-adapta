import { Button } from "@/components/ui/button"
import { Users, Award, Clock } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const features = [
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Cada profissional contribui com sua visão técnica e abordagem específica, contribuindo para o atendimento multidisciplinar.",
  },
  {
    icon: Award,
    title: "Abordagem Terapêutica",
    description: `Análise do Comportamento Aplicada (ABA), Modelo Denver de Intervenção Precoce (ESDM), Comunicação Alternativa e Aumentativa (CAA), Integração Sensorial (IS) e PediaSuit.`,
  },
  {
    icon: Clock,
    title: "Acompanhamento Personalizado",
    description: "Permite monitorar a evolução e ajustar estratégias terapêuticas conforme as suas necessidades.",
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

            {/* <div className="pt-4">
              <Button className="bg-adapta-primary hover:bg-adapta-primary/90 text-white">Conheça Nossa Equipe</Button>
            </div> */}
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
                  <div className="text-center p-4 bg-white/50 rounded-xl flex flex-col items-center">
                    <div className="text-2xl font-bold text-adapta-primary">9</div>
                    <div className="text-sm text-gray-600">Especialidades</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-xl flex flex-col items-center">
                    <div className="text-2xl font-bold text-adapta-purple">100%</div>
                    <div className="text-sm text-gray-600">Dedicação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Nossa História */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-adapta-yellow/10 to-adapta-purple/5">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">Nossa História</h3>
                </div>
                <div className="w-24 h-1 bg-adapta-primary mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-adapta-primary">Sou Sumara Najla, Terapeuta Ocupacional</span>, e
                  iniciei essa trajetória em 2019, com o coração cheio de propósito e fé. A Adapta nasceu oferecendo inicialmente atendimentos em 
                  Terapia Ocupacional, Psicologia e Fonoaudiologia, com o desejo
                  sincero de acolher e transformar vidas.
                </p>

                <p>
                  Conforme as demandas foram chegando, senti que era hora de algo maior. Orei, pedi a Deus direção,
                  porque aquilo não estava nos meus planos. E Deus me deu a resposta, foi então que convidei minha irmã,{" "}
                  Sâmara Ribeiro, para caminhar comigo nessa
                  missão.
                </p>

                <p>
                  Hoje, ela é minha sócia e parceira, contribuindo com dedicação, ética e amor, para que possamos,
                  juntas, dar continuidade a esse projeto de cuidado e acolhimento. Com a expansão conseguimos alcançar
                  ainda mais famílias, oferecendo um atendimento humano, sensível e comprometido.
                </p>

                <div className="bg-white/60 rounded-lg p-6 border-l-4 border-adapta-primary">
                  <p className="font-medium text-gray-800 italic">
                    "Sou grata a cada profissional que faz parte do nosso corpo clínico e a cada família que confia em
                    nós. Seguimos firmes nessa missão, guiadas por Deus."
                  </p>
                  <p className="text-right mt-3 text-adapta-primary font-semibold">— Sumara Najla, Fundadora</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
