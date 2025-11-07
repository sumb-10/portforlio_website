import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-16"
    >
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-gray-900">John Doe</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Software Developer specializing in building exceptional digital
          experiences. Currently focused on creating accessible, user-centered
          products.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <a
            href="mailto:john.doe@example.com"
            className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-50 transition-colors"
          >
            View work
          </a>
        </div>
      </div>
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
