import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function CourseSidebar({ currentLesson, setCurrentLesson }) {
    const [openIndex, setOpenIndex] = useState(0)

    const progress = 0

    const sections = [
        {
            title: "Introducción a Python",
            lessons: [
                {
                    title: "¿Qué es Python?",
                    video: "https://www.youtube.com/embed/kqtD5dpn9C8",
                    description: "Aprende qué es Python, para qué sirve y por qué es tan popular.",
                },
                {
                    title: "Instalación y entorno de trabajo",
                    video: "https://www.youtube.com/embed/rfscVS0vtbw",
                    description: "Aprende a instalar Python y preparar tu entorno de desarrollo.",
                },
                {
                    title: "🚀 Tu primer programa en Python",
                    video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
                    description: "Crea tu primer programa en Python paso a paso.",
                },
            ],
        },
        {
            title: "Fundamentos del Lenguaje",
            lessons: [
                {
                    title: "Variables y tipos de datos",
                    video: "https://www.youtube.com/embed/khKv-8q7YmY",
                    description: "Aprende a usar variables, strings, números y booleanos.",
                },
                {
                    title: "Operadores básicos",
                    video: "https://www.youtube.com/embed/kqtD5dpn9C8",
                    description: "Aprende operadores matemáticos, comparaciones y lógica básica.",
                },
                {
                    title: "Entrada y salida de datos",
                    video: "https://www.youtube.com/embed/rfscVS0vtbw",
                    description: "Aprende a recibir datos del usuario y mostrar resultados.",
                },
            ],
        },
        {
            title: "Estructuras de Control",
            lessons: [
                {
                    title: "Condicionales if, else y elif",
                    video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
                    description: "Aprende a tomar decisiones dentro de tus programas.",
                },
                {
                    title: "Bucles for y while",
                    video: "https://www.youtube.com/embed/kqtD5dpn9C8",
                    description: "Aprende a repetir instrucciones usando ciclos.",
                },
            ],
        },
    ]

    return (
        <aside
            className="h-[calc(100vh-140px)] overflow-y-auto rounded-2xl border border-white/20 bg-[#2b1645]/70 shadow-2xl backdrop-blur-xl"
            style={{
                padding: "28px",
            }}
        >
            <div className="flex flex-col gap-8">
                <h1 className="text-[22px] font-extrabold leading-[1.25] text-white">
                    Introducción a Python
                </h1>

                <div
                    className="rounded-2xl border border-white/10 bg-white/10"
                    style={{ padding: "18px" }}
                >
                    <div className="mb-3 flex items-center justify-between text-[14px] font-bold text-white">
                        <span>Progreso</span>
                        <span>{progress}%</span>
                    </div>

                    <div className="h-[18px] w-full overflow-hidden rounded-full bg-white/20">
                        <div
                            className="flex h-full items-center rounded-full bg-[#f8d77c] px-2 text-[11px] font-bold text-black"
                            style={{ width: `${progress || 8}%` }}
                        >
                            {progress}%
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {sections.map((section, index) => {
                        const isOpen = openIndex === index

                        return (
                            <div
                                key={section.title}
                                className="rounded-xl border border-white/15 bg-white/10"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="!m-0 !flex !h-auto !min-h-[56px] !w-full !items-center !justify-between !gap-4 !rounded-xl !border-0 !bg-transparent !px-5 !py-4 !text-left !leading-normal !shadow-none transition hover:!bg-white/10"
                                >
                                    <span className="block text-[16px] font-extrabold leading-[1.35] text-white">
                                        {section.title}
                                    </span>

                                    {isOpen ? (
                                        <ChevronUp size={20} className="shrink-0 text-white/80" />
                                    ) : (
                                        <ChevronDown size={20} className="shrink-0 text-white/80" />
                                    )}
                                </button>

                                {isOpen && (
                                    <div className="flex flex-col gap-3 border-t border-white/15 px-4 pb-4 pt-3">
                                        {section.lessons.map((lesson) => (
                                            <button
                                                type="button"
                                                key={lesson.title}
                                                onClick={() => setCurrentLesson(lesson)}
                                                className={`!m-0 !h-auto !min-h-[52px] !w-full !rounded-xl !border-0 !px-5 !py-4 !text-left !text-[15px] !font-semibold !leading-[1.35] !shadow-none transition ${currentLesson?.title === lesson.title
                                                        ? "!bg-[#f8d77c] !text-black"
                                                        : "!bg-[#2b1645]/70 !text-white hover:!bg-white/10"
                                                    }`}
                                            >
                                                {lesson.title}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </aside>
    )
}