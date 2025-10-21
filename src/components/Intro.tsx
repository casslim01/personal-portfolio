import '../styles/wordAnim.css'
import LineAnim from './LineAnim'

function Intro() {
  const title = "Hello, I'm Cassler Lim";
  const subtitle = "And these are some of my works.";

  return (
      <div className="flex items-center justify-center min-h-screen p-32">
        <div className="bg-black border-4 border-white p-8 rounded-lg">
          <div className='mb-8'>
            <LineAnim />
          </div>
          <h1 className="text-6xl text-white mb-4" style={{fontFamily: 'Linebeam, sans-serif'}}>
            {title.split('').map((char, index) => (
              <span 
                key={index} 
                className="letter-animate"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className="text-xl text-gray-300" style={{fontFamily: 'Linebeam, sans-serif'}}>
            {subtitle.split('').map((char, index) => (
              <span 
                key={index} 
                className="letter-animate-delayed"
                style={{animationDelay: `${1.5 + index * 0.03}s`}}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>
          <div className='mt-8'>
            <LineAnim />
          </div>
        </div>
      </div>
  )
}

export default Intro