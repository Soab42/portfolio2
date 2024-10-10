import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Education from "./sections/Education.jsx";
import Intro from "./sections/Intro.jsx";
import Projects from "./sections/Projects.jsx";
import TechStack from "./sections/Skills.jsx";
import About from "./sections/About.jsx";

const App = () => {
  return (
    <Router>
      <main className="max-w-7xl mx-auto text-white relative">
        <NavBar />
        <Intro />
        <About />
        <Education />
        <TechStack />
        <Projects />
      </main>
    </Router>
  );
};

export default App;
