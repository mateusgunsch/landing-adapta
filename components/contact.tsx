import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import WhatsAppButton from "./whatsapp-button"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    color: "text-adapta-primary",
    details: [
      { text: "(65) 99989-3202", link: "tel:+5565999893202" },
      { text: "(65) 99233-0091", link: "tel:+5565992330091" },
    ],
  },
  {
    icon: Mail,
    title: "E-mail",
    color: "text-adapta-purple",
    details: [{ text: "espacoadaptatocomercial@hotmail.com", link: "mailto:espacoadaptatocomercial@hotmail.com" }],
  },
  {
    icon: MapPin,
    title: "Endereço",
    color: "text-adapta-green",
    details: [
      {
        text: "Matriz: Rua Major Gama, 950, Centro Sul - Cuiabá/MT",
        link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rua Major Gama, 950, Centro Sul - Cuiabá/MT")}`,
      },
      {
        text: "Filial: Rua Barão de Melgaço, 2350, Edifício Barão Center, Sala 104, Centro Sul - Cuiabá/MT",
        link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rua Barão de Melgaço, 2350, Edifício Barão Center, Sala 104, Centro Sul - Cuiabá/MT")}`,
      },
    ],
  },
  {
    icon: Clock,
    title: "Horário",
    color: "text-adapta-primary",
    details: [{ text: "Seg à Sex: 8h às 18h", link: null }],
  },
]

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar. Entre em contato conosco para agendar uma avaliação ou esclarecer suas dúvidas
            sobre nossos serviços.
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-12"> */}
        <div className="grid lg:grid-cols-1 gap-12 w-fit mx-auto">
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
                    <div className="space-y-1">
                      {" "}
                      {/* Adicionado para espaçamento entre múltiplos detalhes */}
                      {item.details.map((detail, detailIndex) =>
                        detail.link ? (
                          <a
                            key={detailIndex}
                            href={detail.link}
                            target={item.title === "Endereço" ? "_blank" : undefined} // Abre em nova aba apenas para o Maps
                            rel={item.title === "Endereço" ? "noopener noreferrer" : undefined}
                            className="block text-gray-600 hover:underline"
                          >
                            {detail.text}
                          </a>
                        ) : (
                          <p key={detailIndex} className="text-gray-600">
                            {detail.text}
                          </p>
                        ),
                      )}
                    </div>
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
                <WhatsAppButton />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
