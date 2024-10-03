import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Intro from "./sections/Intro.jsx";
import Projects from "./sections/Projects.jsx";
import TechStack from "./sections/Skills.jsx";
const App = () => {
  return (
    <Router>
      <main className="max-w-7xl mx-auto text-white relative">
        <NavBar />
        <Intro />
        <TechStack />
        <Projects />
      </main>
    </Router>
  );
};

export default App;
