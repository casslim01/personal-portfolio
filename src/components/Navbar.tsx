import '../styles/rainbow.css'

function Navbar() {
  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center py-4">
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-32">
            
            <a href="#projects" className="text-5xl rainbow-hover" style={{fontFamily: 'Linebeam, sans-serif'}}>
              Projects
            </a>

            <a href="#about" className="text-5xl rainbow-hover" style={{fontFamily: 'Linebeam, sans-serif'}}>
              Extras
            </a>
            
            <a href="#contact" className="text-5xl rainbow-hover" style={{fontFamily: 'Linebeam, sans-serif'}}>
              Contact
            </a>
            

          </div>
          
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar