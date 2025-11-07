import { GraduationCap, Briefcase, BookOpen }  from "lucide-react";

export function Header() {
    return (
        <section className="header-section">
            <div className="space-y-8">
                <div className="space-y-4 pb-8 border-b border-black">
                    <h1 className="text-black">조호진 Hojin Cho</h1>
                    <p className="text-black/60">Software Developer</p>
                    <p className="text-black/80 italic">
                        Software Developer specializing in building a simple product with high UX fast.<br></br>
                        Currently focused on creating accessible, user-centered products.
                    </p>
                </div>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                    <GraduationCap size={24} className="text-black mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                        <p className="text-black/60">학력</p>
                        <p className="text-black">University of Seoul <br></br>
                        Department of Computer Science</p>
                        <p className="text-black/60">2020 - present</p>
                    </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                    <Briefcase size={24} className="text-black mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                        <p className="text-black/60">경력</p>
                        <p className="text-black">TBD</p>
                        <p className="text-black/60"></p>
                    </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                    <BookOpen size={24} className="text-black mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                        <p className="text-black/60">블로그</p>
                        <a 
                        href="https://sumb.tistory.com/" 
                        className="text-black hover:text-black/60 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        sumb.tistory.com
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}