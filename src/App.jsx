import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

import './App.css'
function App() {
  return (
    <div className="font-poppins bg-light text-dark" >

      <section className=" flex flex-col min-h-screen sec">
        <Header />
        <Hero />
      </section>

      <section className="sec">
        <Projects />
      </section>
    </div>
  );
}

export default App;
