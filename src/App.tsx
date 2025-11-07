// src/App.tsx

import "./App.css";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Header } from "./sections/Header";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Navigation } from "./sections/Navigation";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

function App() {
  return (
    <div className="page">
      <Header />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;