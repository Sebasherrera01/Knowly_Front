import { CheckCircle } from "lucide-react"

export default function CourseContent({ lesson }) {
    return (
        <section className="flex min-h-[calc(100vh-140px)] items-start justify-center px-6 pb-10">
            <div
                className="mx-auto w-full max-w-[1100px] rounded-2xl border border-white/20 bg-[#2b1645]/70 shadow-2xl backdrop-blur-xl"
                style={{
                    padding: "28px",
                }}
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-[28px] font-extrabold text-white">
                        {lesson.title}
                    </h2>

                    <CheckCircle size={32} className="text-white/80" />
                </div>

                <div
                    className="overflow-hidden rounded-2xl border border-white/20 bg-black"
                    style={{
                        marginTop: "28px",
                        marginLeft: "22px",
                        marginRight: "22px",
                    }}
                >
                    <div className="aspect-video">
                        <iframe
                            className="h-full w-full"
                            src={lesson.video}
                            title={lesson.title}
                            allowFullScreen
                        />
                    </div>
                </div>

                <div className="mt-7 border-t border-white/20" />

                <div className="mt-8">
                    <h3 className="text-[22px] font-extrabold text-white">
                        ✨ {lesson.title} ✨
                    </h3>

                    <p className="mt-4 text-[17px] leading-7 text-white/85">
                        {lesson.description}
                    </p>
                </div>
            </div>
        </section>
    )
}