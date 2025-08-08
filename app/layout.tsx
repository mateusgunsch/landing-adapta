import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Espaço Adapta TO",
  description: "Clínica especializada para atendimento de pessoas com TEA",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Espaço Adapta TO",
    "Psicologia",
    "Terapia Ocupacional",
    "Psicomotricidade",
    "Psicopedagogia",
    "Musicoterapia",
    "Fonoaudiologia",
    "Fisioterapia",
    "Autismo",
    "Terapia",
    "TEA",
    "Clínica",
    "Adapta TO",
    "Cuiaba",
    "Cuiabá",
    "Cuiaba - MT",
    "Cuiabá - MT",
    "Mato Grosso",
    "MT"
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
