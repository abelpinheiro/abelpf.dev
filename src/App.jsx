import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Blogs from './components/Blogs'

function App() {
  return (
    <ThemeProvider>
      <Router basename="/abelpf.dev">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
