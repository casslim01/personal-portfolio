import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import './styles/intro.css'


function App() {

  return (
    <div className="min-h-screen bg-black grid-background">
      <Navbar />
      <Intro />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
