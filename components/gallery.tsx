"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect } from "react"

const galleryItems = [
    {
        type: "image",
        src: "/salas/sala1-1.jpg",
    },
    {
        type: "image",
        src: "/salas/sala1-2.jpg",
    },
    {
        type: "image",
        src: "/salas/sala2-1.jpg",
    },
    {
        type: "image",
        src: "/salas/sala2-2.jpg",
    },
    {
        type: "image",
        src: "/salas/to1.jpg",
    },
    {
        type: "image",
        src: "/salas/to2.jpg",
    },
    {
        type: "image",
        src: "/salas/to3.jpg",
    },
    {
        type: "image",
        src: "/salas/to4.jpg",
    },
    {
        type: "video",
        src: "/salas/video3.mp4",
    },
    {
        type: "image",
        src: "/salas/sala3.jpg",
    },
]

export default function Gallery() {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null)
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
        return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const handleItemClick = (index: number) => {
        setSelectedItemIndex(index)
    }

    const selectedItem = selectedItemIndex !== null ? galleryItems[selectedItemIndex] : null

    return (
        <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Nossos Espaços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça nossos ambientes especialmente projetados para proporcionar conforto, segurança e desenvolvimento em
                cada etapa do tratamento.
            </p>
            </div>

            <div className="max-w-4xl mx-auto">
            <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                loop: true,
                }}
            >
                <CarouselContent>
                {galleryItems.map((item, index) => (
                    // <CarouselItem key={index}>
                    <CarouselItem key={index} className="flex justify-center">
                    {/* <Card className="border-0 shadow-lg overflow-hidden"> */}
                        <Card className="border-0 shadow-lg overflow-hidden w-fit max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto" onClick={() => handleItemClick(index)}>
                            <div className="relative group cursor-pointer aspect-[3/4] overflow-hidden max-h-[300px] sm:max-h-[400px] lg:max-h-[500px]">
                                {item.type === "image" ? (
                                    <img
                                        src={item.src || "/placeholder.svg"}
                                        alt={"Imagem " + index}
                                        // className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                ) : (
                                    <video
                                        src={item.src}
                                        controls
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        preload="metadata" // Carrega apenas metadados para otimização
                                    />
                                )}
                            
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                                <p className="text-lg font-semibold mb-2">{item.type === "image" ? "Clique para ampliar" : "Clique para reproduzir"}</p>
                                </div>
                            </div>
                            </div>
                        </Card>
                    </CarouselItem>
                ))}
                </CarouselContent>

                <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
                <CarouselNext className="right-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
            </Carousel>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: count }).map((_, index) => (
                <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index + 1 === current ? "bg-adapta-primary" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Ir para imagem ${index + 1}`}
                />
                ))}
            </div>
            </div>

            {/* Modal Simples */}
            <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItemIndex(null)}>
            <DialogTitle className="hidden">Itemm ampliada</DialogTitle>
            <DialogContent
                className="max-w-4xl w-[90vw] max-h-[80vh] p-0 bg-transparent border-0 shadow-none content-center lg:[&>button]:absolute lg:[&>button]:right-44 lg:[&>button]:top-4 [&>button]:z-50 [&>button]:bg-black/20 [&>button]:hover:bg-black/40 [&>button]:text-white [&>button]:rounded-full"
                onClick={(e) => {
                // Fecha o modal se clicar fora da itemm
                if (e.target === e.currentTarget) {
                    setSelectedItemIndex(null)
                }
                }}
            >
                <div className="relative flex items-center justify-center w-full h-full max-h-[80vh]">
                {selectedItem && selectedItem.type === "image" ? (
                    <img
                        src={selectedItem.src || "/placeholder.svg"}
                        alt={"Imagem " + selectedItemIndex}
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                ) : selectedItem && selectedItem.type === "video" ? (
                    <video
                        src={selectedItem.src}
                        className="max-w-full max-h-full object-contain rounded-lg"
                        controls
                        autoPlay
                        playsInline
                        muted
                        onClick={(e) => e.stopPropagation()}
                    />
                ) : null}
                </div>
            </DialogContent>
            </Dialog>
        </div>
        </section>
    )
}
