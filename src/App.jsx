
import './App.css';
import Navbar from './navbar/Navbar';
import Hero from './hero/hero';
import Cards from './cards/Cards';  // Add this import
import Footer from './footer/Footer';
import Projects from './projects/projects';
import { Camera } from 'lucide-react';
import About from './about/About';
import Contact from './contact/Contact';

export default function App() {
  
  

  return (
    <div className="box">
      <Navbar />
       <Hero /> 
       <Cards /> 
      <Projects/>
     
       <About />
        <Contact/>
       <Footer/>
   
    </div>
  );
}