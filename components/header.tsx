"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-adapta-primary">
              Espaço Adapta T.O
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-adapta-primary transition-colors">
              Início
            </Link>
            <Link href="#servicos" className="text-gray-700 hover:text-adapta-primary transition-colors">
              Serviços
            </Link>
            <Link href="#sobre" className="text-gray-700 hover:text-adapta-primary transition-colors">
              Sobre
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-adapta-primary transition-colors">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Button className="bg-adapta-primary hover:bg-adapta-primary/90 text-white">Agendar Consulta</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#inicio"
                className="text-gray-700 hover:text-adapta-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="#servicos"
                className="text-gray-700 hover:text-adapta-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="#sobre"
                className="text-gray-700 hover:text-adapta-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#contato"
                className="text-gray-700 hover:text-adapta-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Button className="bg-adapta-primary hover:bg-adapta-primary/90 text-white w-full">
                Agendar Consulta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
