import Hero from './components/Hero/Hero';
import Proejcts from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import "./App.css"

function App() {
  return (
    <div >
      <Navbar/>
      <Hero />
      <Proejcts />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
