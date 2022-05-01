import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './components/landing'
import Aboutme from './components/aboutme'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-me" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
