import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    info: "(11) 99999-9999",
    color: "text-adapta-primary",
  },
  {
    icon: Mail,
    title: "E-mail",
    info: "contato@adaptato.com.br",
    color: "text-adapta-purple",
  },
  {
    icon: MapPin,
    title: "Endereço",
    info: "Rua das Flores, 123 - Centro",
    color: "text-adapta-green",
  },
  {
    icon: Clock,
    title: "Horário",
    info: "Seg à Sex: 8h às 18h",
    color: "text-adapta-primary",
  },
]

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar. Entre em contato conosco para agendar uma avaliação ou esclarecer suas dúvidas
            sobre nossos serviços.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.info}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Agende sua Consulta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Nossa equipe está pronta para oferecer o melhor atendimento. Agende uma avaliação inicial e conheça
                  nosso trabalho.
                </p>
                <Button className="bg-adapta-primary hover:bg-adapta-primary/90 text-white w-full">
                  Agendar Agora
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nome</label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Telefone</label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">E-mail</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Mensagem</label>
                  <Textarea placeholder="Conte-nos como podemos ajudar..." className="min-h-[120px]" />
                </div>

                <Button className="bg-adapta-primary hover:bg-adapta-primary/90 text-white w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
