import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

import './App.css'
import DrawerToggle from "./components/DrawerToggle";
function App() {
  return (
    <div className="font-poppins bg-light text-dark relative" >
      <DrawerToggle/>
      <section className=" flex flex-col min-h-svh sec">
        <Header />
        <Hero />
      </section>

      <section className="sec min-h-svh">
        <Projects />
      </section>
    </div>
  );
}

export default App;
