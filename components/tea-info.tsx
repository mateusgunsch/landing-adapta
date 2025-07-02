import { Brain, Heart, Users, BookOpen } from "lucide-react"

export default function TeaInfo() {
    return (
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
                <h2 className="text-4xl font-bold text-gray-900">O que é TEA?</h2>
                <div className="w-24 h-1 bg-adapta-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                    O transtorno do espectro autista (TEA) é um distúrbio do neurodesenvolvimento caracterizado por
                    desenvolvimento atípico, manifestações comportamentais, déficits na comunicação e na interação social,
                    padrões de comportamentos repetitivos e estereotipados, podendo apresentar um repertório restrito de
                    interesses e atividades.
                </p>

                <div className="bg-adapta-yellow/10 border-l-4 border-adapta-primary p-6 rounded-r-lg flex items-center">
                    <p className="text-gray-700 font-medium text-center w-full">
                    Cada pessoa com TEA é única, com suas próprias características, habilidades e necessidades. Por isso,
                    nosso atendimento é sempre personalizado e respeitoso.
                    </p>
                </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-adapta-primary/5 p-4 sm:p-6 rounded-xl text-center flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px]">
                    <div className="w-12 h-12 bg-adapta-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-6 w-6 text-adapta-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-center text-xs sm:text-sm lg:text-base leading-tight px-1">
                    Neurodesenvolvimento
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 text-center leading-tight px-1">
                    Desenvolvimento atípico do sistema nervoso
                    </p>
                </div>

                <div className="bg-adapta-purple/5 p-4 sm:p-6 rounded-xl text-center flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px]">
                    <div className="w-12 h-12 bg-adapta-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-adapta-purple" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-center text-xs sm:text-sm lg:text-base leading-tight px-1">
                    Interação Social
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 text-center leading-tight px-1">
                    Desafios na comunicação e socialização
                    </p>
                </div>

                <div className="bg-adapta-green/5 p-4 sm:p-6 rounded-xl text-center flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px]">
                    <div className="w-12 h-12 bg-adapta-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-adapta-green" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-center text-xs sm:text-sm lg:text-base leading-tight px-1">
                    Comportamentos
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 text-center leading-tight px-1">
                    Padrões repetitivos e estereotipados
                    </p>
                </div>

                <div className="bg-adapta-yellow/20 p-4 sm:p-6 rounded-xl text-center flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px]">
                    <div className="w-12 h-12 bg-adapta-yellow/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-adapta-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-center text-xs sm:text-sm lg:text-base leading-tight px-1">
                    Interesses
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 text-center leading-tight px-1">
                    Repertório restrito de atividades
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}






























// import { Brain, Heart, Users, BookOpen } from "lucide-react"

// export default function TeaInfo() {
//     return (
//         <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-4xl mx-auto">
//             <div className="text-center space-y-6 mb-12">
//                 <h2 className="text-4xl font-bold text-gray-900">O que é TEA?</h2>
//                 <div className="w-24 h-1 bg-adapta-primary mx-auto rounded-full"></div>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 <div className="space-y-6">
//                 <p className="text-lg text-gray-600 leading-relaxed">
//                     O Transtorno do Espectro Autista (TEA) é um distúrbio do neurodesenvolvimento caracterizado por
//                     desenvolvimento atípico, manifestações comportamentais, déficits na comunicação e na interação social,
//                     padrões de comportamentos repetitivos e estereotipados, podendo apresentar um repertório restrito de
//                     interesses e atividades.
//                 </p>

//                 <div className="bg-adapta-yellow/10 border-l-4 border-adapta-primary p-6 rounded-r-lg flex items-center">
//                     <p className="text-gray-700 font-medium text-center w-full">
//                     Cada pessoa com TEA é única, com suas próprias características, habilidades e necessidades. Por isso,
//                     nosso atendimento é sempre personalizado e respeitoso.
//                     </p>
//                 </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-adapta-primary/5 p-6 rounded-xl text-center flex flex-col items-center justify-center min-h-[140px]">
//                     <div className="w-12 h-12 bg-adapta-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Brain className="h-6 w-6 text-adapta-primary" />
//                     </div>
//                     <h3 className="font-semibold text-gray-900 mb-2 text-center max-w-fit">Neurodesenvolvimento</h3>
//                     <p className="text-sm text-gray-600 text-center">Desenvolvimento atípico do sistema nervoso</p>
//                 </div>

//                 <div className="bg-adapta-purple/5 p-6 rounded-xl text-center flex flex-col items-center justify-center min-h-[140px]">
//                     <div className="w-12 h-12 bg-adapta-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Users className="h-6 w-6 text-adapta-purple" />
//                     </div>
//                     <h3 className="font-semibold text-gray-900 mb-2 text-center">Interação Social</h3>
//                     <p className="text-sm text-gray-600 text-center">Desafios na comunicação e socialização</p>
//                 </div>

//                 <div className="bg-adapta-green/5 p-6 rounded-xl text-center flex flex-col items-center justify-center min-h-[140px]">
//                     <div className="w-12 h-12 bg-adapta-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Heart className="h-6 w-6 text-adapta-green" />
//                     </div>
//                     <h3 className="font-semibold text-gray-900 mb-2 text-center">Comportamentos</h3>
//                     <p className="text-sm text-gray-600 text-center">Padrões repetitivos e estereotipados</p>
//                 </div>

//                 <div className="bg-adapta-yellow/20 p-6 rounded-xl text-center flex flex-col items-center justify-center min-h-[140px]">
//                     <div className="w-12 h-12 bg-adapta-yellow/30 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <BookOpen className="h-6 w-6 text-adapta-primary" />
//                     </div>
//                     <h3 className="font-semibold text-gray-900 mb-2 text-center">Interesses</h3>
//                     <p className="text-sm text-gray-600 text-center">Repertório restrito de atividades</p>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </section>
//     )
// }
