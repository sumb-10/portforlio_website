export function Navigation() {
    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <button
                    onClick={() => scrollToSection("hero")}
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                >
                JD
                </button>
                <div className="flex gap-8">
                    {["about", "skills", "projects", "contact"].map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="text-gray-600 hover:text-gray-900 transition-colors capitalize"
                    >
                    {section}
                    </button>
                    ))}
                </div>
            </div>
        </div>
    </nav>
    );
}
