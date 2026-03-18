import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import portfolioData from './data/portfolioData';
import './App.css';

function App() {
  const { dark, toggle } = useTheme();
  const [projectFilter, setProjectFilter] = useState<string>('All');

  return (
    <div className="app">
      <Navbar dark={dark} onToggleTheme={toggle} />
      <main>
        <Hero bio={portfolioData.bio} />
        <Skills skills={portfolioData.skills} />
        <Projects
          projects={portfolioData.projects}
          filter={projectFilter}
          onFilterChange={setProjectFilter}
        />
        <Experience experience={portfolioData.experience} />
        <Contact contactInfo={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.bio.name} />
    </div>
  );
}

export default App;
