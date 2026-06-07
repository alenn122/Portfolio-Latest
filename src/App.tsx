import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Logos from './components/Logos';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="logos">
          <Logos />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;