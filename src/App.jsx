import './App.css'
import Home from './Pages/Home/home'
import About from './Pages/About/about.page'
import Projects from './Pages/Projects/projects.page'
import Research from './Pages/Research/research.page'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </Router>
  );
}

export default App