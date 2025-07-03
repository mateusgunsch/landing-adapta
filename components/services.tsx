import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Hand, Activity, BookOpen, Music, MessageCircle, Dumbbell, Apple, UserCheck } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Psicologia",
    description: "Acompanhamento psicológico especializado para desenvolvimento emocional e comportamental.",
    color: "text-adapta-primary",
  },
  {
    icon: Hand,
    title: "Terapia Ocupacional",
    description: "Desenvolvimento de habilidades para atividades da vida diária e autonomia.",
    color: "text-adapta-purple",
  },
  {
    icon: Activity,
    title: "Psicomotricidade",
    description: "Estímulo ao desenvolvimento motor, cognitivo e afetivo através do movimento.",
    color: "text-adapta-green",
  },
  {
    icon: BookOpen,
    title: "Psicopedagogia",
    description: "Apoio no processo de aprendizagem e desenvolvimento de habilidades acadêmicas.",
    color: "text-adapta-primary",
  },
  {
    icon: Music,
    title: "Musicoterapia",
    description: "Uso terapêutico da música para comunicação, expressão e desenvolvimento.",
    color: "text-adapta-purple",
  },
  {
    icon: MessageCircle,
    title: "Fonoaudiologia",
    description: "Desenvolvimento da comunicação, linguagem, interação social e motricidade orofacial.",
    color: "text-adapta-green",
  },
  {
    icon: Dumbbell,
    title: "Fisioterapia",
    description: "Fortalecimento muscular, coordenação motora e desenvolvimento físico.",
    color: "text-adapta-primary",
  },
  {
    icon: Apple,
    title: "Nutrição",
    description: "Orientação nutricional especializada em seletividade alimentar.",
    color: "text-adapta-purple",
  },
  {
    icon: UserCheck,
    title: "Acompanhamento Terapêutico",
    description: "Suporte individualizado no ambiente natural para desenvolvimento de habilidades sociais e autonomia.",
    color: "text-adapta-green",
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma abordagem multidisciplinar completa, com profissionais especializados em cada área para
            proporcionar o melhor cuidado e desenvolvimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
