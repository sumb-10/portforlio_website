import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "tea_DB",
    description: "다양한 차(tea) 정보를 제공하는 웹 애플리케이션. 필터 기능 및 사용자 관리 기능 및 권한 별 접근 제어 포함",
    tech: "React · typescript · PostgreSQL · Next.js",
    image: "https://images.unsplash.com/photo-1490785972325-fe9bc08360c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYWJzdHJhY3QlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYyNDE2ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "TBD",
    description: "TBD",
    tech: "TBD",
    image: "https://images.unsplash.com/photo-1720962158802-f80b1e855e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI1MDA1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    live: "https://github.com"
  },
  {
    title: "TBD",
    description: "TBD",
    tech: "TBD",
    image: "https://images.unsplash.com/photo-1720962158802-f80b1e855e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI1MDA1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    live: "https://github.com"
  }
];

export function Projects() {
  return (
    <div className="space-y-8">
      <h2 className="text-black pb-8 border-b border-black">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="border border-black group hover:shadow-2xl transition-all"
          >
            {/*<div className="aspect-video overflow-hidden border-b border-black">
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            </div>*/}
            <div className="p-6 space-y-4">
              <h3 className="text-black">{project.title}</h3>
              <p className="text-black/70 leading-relaxed">{project.description}</p>
              <p className="text-xs text-black/50">{project.tech}</p>
              <div className="flex gap-4 pt-2">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-black hover:text-black/60 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-black hover:text-black/60 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  <span>Live</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
