import { BrowserRouter as Router } from 'react-router-dom'
import Intro from './sections/Intro.jsx';
import NavBar from './components/NavBar.jsx';
import TechStack from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
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
