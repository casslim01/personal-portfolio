function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="bg-black border-2 border-white p-12 rounded-lg max-w-md w-full text-center">
        <h1 className="text-6xl text-white mb-8" style={{fontFamily: 'Linebeam, sans-serif'}}>
          Contact Me
        </h1>
        
        <p className="text-xl text-gray-300 mb-12" style={{fontFamily: 'Linebeam, sans-serif'}}>
          Let's work together
        </p>

        <div className="space-y-6">
          <a 
            href="mailto:your.email@example.com"
            className="block p-4 border border-gray-600 rounded-lg hover:border-white hover:bg-gray-900 transition-all duration-300"
          >
            <p className="text-white text-lg">📧 Email Me</p>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/cassler-winn-lim-a2b758234/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-600 rounded-lg hover:border-white hover:bg-gray-900 transition-all duration-300"
          >
            <p className="text-white text-lg">💼 LinkedIn</p>
          </a>
          
          <a 
            href="https://github.com/casslim01"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-600 rounded-lg hover:border-white hover:bg-gray-900 transition-all duration-300"
          >
            <p className="text-white text-lg">💻 GitHub</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact