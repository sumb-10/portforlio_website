import { GraduationCap, Briefcase, BookOpen }  from "lucide-react";

export function Header() {
    return (
        <section className="header-section">
            <div className="space-y-8">
                <div className="space-y-4 pb-8 border-b border-black">
                    <h1 className="text-black">김개발</h1>
                    <p className="text-black/60">Software Developer</p>
                    <p className="text-black/80 italic">
                    "Building elegant solutions through clean code"
                    </p>
                </div>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                    <GraduationCap size={24} className="text-black mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                        <p className="text-black/60">학력</p>
                        <p className="text-black">서울대학교 컴퓨터공학과</p>
                        <p className="text-black/60">2018 - 2022</p>
                    </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                    <Briefcase size={24} className="text-black mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                        <p className="text-black/60">경력</p>
                        <p className="text-black">ABC Tech · Frontend Developer</p>
                        <p className="text-black/60">2022 - Present</p>
                    </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                    <BookOpen size={24} className="text-black mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                        <p className="text-black/60">블로그</p>
                        <a 
                        href="https://blog.example.com" 
                        className="text-black hover:text-black/60 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        blog.example.com
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}