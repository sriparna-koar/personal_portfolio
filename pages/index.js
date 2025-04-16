import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
// import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import ExperienceSection from '../components/ExperienceSection';
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <Projects/>
        <Contact />
      </main>
    </div>
  );
}
