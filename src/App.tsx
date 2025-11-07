import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-[1600px] mx-auto space-y-4">
        {/* Top Row - Header + About */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-12">
            <Header />
          </div>
          <div className="bg-white p-12">
            <About />
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="bg-white p-12">
          <Skills />
        </div>
        
        {/* Projects Section */}
        <div className="bg-white p-12">
          <Projects />
        </div>
        
        {/* Contact Section */}
        <div className="bg-white p-12">
          <Contact />
        </div>
        
        {/* Footer */}
        <div className="bg-black text-white py-8 text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
