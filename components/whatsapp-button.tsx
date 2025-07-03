'use client';

import Link from "next/link";
import { Button } from "./ui/button";

export default function WhatsAppButton() {
    const phone = '5565999893202';
    const message = encodeURIComponent('Olá, gostaria de saber mais sobre seus serviços e marcar uma consulta.');
    const whatsappLink = `https://wa.me/${phone}?text=${message}`;

    return (
        <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        >
        <Button size="lg" className="bg-adapta-primary hover:bg-adapta-primary/90 text-white w-full">
            Agendar Avaliação
        </Button>
        </Link>
    );
}
