import { useState } from "react"
import CourseSidebar from "../Components/CourseSidebar.jsx"
import CourseContent from "../Components/CourseContent.jsx"

const firstLesson = {
    title: "¿Qué es Python?",
    video: "https://www.youtube.com/embed/kqtD5dpn9C8",
    description: "Aprende qué es Python, para qué sirve y por qué es tan popular.",
}

export default function Vista() {
    const [currentLesson, setCurrentLesson] = useState(firstLesson)

    return (
        <main
            className="min-h-screen bg-gradient-to-br from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] text-white"
            style={{
                paddingTop: "32px",
                paddingBottom: "64px",
            }}
        >
            <div
                className="w-full"
                style={{
                    paddingLeft: "70px",
                    paddingRight: "40px",
                }}
            >
                <div className="grid min-h-[calc(100vh-140px)] grid-cols-[420px_minmax(0,1fr)] gap-10">
                    <CourseSidebar
                        currentLesson={currentLesson}
                        setCurrentLesson={setCurrentLesson}
                    />

                    <CourseContent lesson={currentLesson} />
                </div>
            </div>
        </main>
    )
}