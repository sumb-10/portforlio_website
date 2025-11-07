import { Mail, Github, Linkedin, FileText } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:saku07891@gmail.com",
    text: "saku07891@gmail.com",
    description: "프로젝트 문의 및 협업 제안"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sumb-10",
    text: "github.com/sumb-10",
    description: "오픈소스 프로젝트 및 코드"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    text: "linkedin.com/in/username",
    description: "프로필 및 경력 사항"
  },
  {
    icon: FileText,
    label: "Resume",
    href: "#",
    text: "Download Resume",
    description: "이력서 다운로드"
  }
];

export function Contact() {
    return (
        <section className="contact-section">
            <div className="space-y-8">
                <h2 className="text-black pb-8 border-b border-black">Contact</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contacts.map((contact) => (
                    <a
                        key={contact.label}
                        href={contact.href}
                        className="group p-6 border border-black hover:bg-black hover:text-white transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <contact.icon size={32} className="mb-4" />
                        <h3 className="mb-2">{contact.label}</h3>
                        <p className="text-sm opacity-70 mb-2">{contact.description}</p>
                        <p className="text-xs opacity-60 group-hover:opacity-80 break-all">
                        {contact.text}
                        </p>
                    </a>
                    ))}
                </div>
            </div>
        </section>

    );
}