import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import './styles/intro.css'


function App() {

  return (
    <div className="min-h-screen bg-black grid-background">
      <Navbar />
      <Intro />
      <Projects />
    </div>
  )
}

export default App
