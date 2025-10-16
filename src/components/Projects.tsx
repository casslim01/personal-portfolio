import AVDIPage from "../assets/images/AVDIPage.png"
import TeeBox from "../assets/images/TeeBoxPage.png"
import ARPeriodicTable from "../assets/video/ARPeriodicTable.mp4"


function Projects() {
  return (
      <div className="max-w-7xl mx-auto pb-32">
        <h2 className="text-6xl font-bold text-center mb-12 text-white" style={{fontFamily: 'Linebeam, sans-serif'}}>My Projects</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {/* Project 1 */}
          <div className="flex-1 bg-black rounded-lg shadow-lg p-6 border-2 border-white">
            <h3 className="text-2xl font-bold mb-4 text-white">Project One</h3>
            <img 
              src={AVDIPage} 
              alt="Project One Screenshot"
              className="w-full h-48 object-cover border-2 border-white mb-4 rounded-lg"
            />
            <p className="text-gray-300 mb-4">
              Description of your first project goes here. Explain what it does and the technologies used.
            </p>
            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex-1 bg-black rounded-lg shadow-lg p-6 border-2 border-white">
            <h3 className="text-2xl font-bold mb-4 text-white">Project Two</h3>
            <img 
              src={TeeBox} 
              alt="Project One Screenshot"
              className="w-full h-48 object-cover border-2 border-white mb-4 rounded-lg"
            />
            <p className="text-gray-300 mb-4">
              Description of your second project goes here. Explain what it does and the technologies used.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Appwrite</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">React Native</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex-1 bg-black rounded-lg shadow-lg p-6 border-2 border-white">
            <h3 className="text-2xl font-bold mb-4 text-white">Project Three</h3>
            <video 
              src={ARPeriodicTable}
              autoPlay
              muted
              loop
              className="w-full h-48 object-cover border-2 border-white mb-4 rounded-lg"
            ></video>
            <p className="text-gray-300 mb-4">
              Description of your third project goes here. Explain what it does and the technologies used.
            </p>
            <div className="flex gap-2">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Unity</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">C#</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Blender</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Projects