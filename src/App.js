import Experience from "./pages/Experience";
import Intro from "./pages/Intro";
import NavBar from "./components/NavBar";
import Skills from "./pages/Skills"
import "./css/app.css";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
        <NavBar />
        <Intro id="intro" />
        <About id="about" />
        <Skills id="skills" />
        <Project id="project" />
        <Experience id="experience" />
        <Contact id="contact" />

    </div>
  
  );
}

export default App;
