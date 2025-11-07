// src/App.tsx

import "./App.css";
{/*import { Hero } from "./sections/Hero";*/}
import { About } from "./sections/About";
import { Header } from "./sections/Header";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

function App() {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-[1600px] mx-auto space-y-0">
        {/* Top Row - Header + About */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-white p-12 border border-black">
            <Header />
          </div>
          <div className="bg-white p-12 border border-black">
            <About />
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="bg-white p-12 border border-black">
          <Skills />
        </div>
        
        {/* Projects Section */}
        <div className="bg-white p-12 border border-black">
          <Projects />
        </div>
        
        {/* Contact Section */}
        <div className="bg-white p-12 border border-black">
          <Contact />
        </div>
        
        {/* Footer */}
        <div className="bg-white text-white py-8 text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;