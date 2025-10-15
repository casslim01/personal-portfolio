
function Projects() {
  return (
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {/* Project 1 */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Project One</h3>
            <p className="text-gray-600 mb-4">
              Description of your first project goes here. Explain what it does and the technologies used.
            </p>
            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Project Two</h3>
            <p className="text-gray-600 mb-4">
              Description of your second project goes here. Explain what it does and the technologies used.
            </p>
            <div className="flex gap-2">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Project Three</h3>
            <p className="text-gray-600 mb-4">
              Description of your third project goes here. Explain what it does and the technologies used.
            </p>
            <div className="flex gap-2">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">CSS</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Projects