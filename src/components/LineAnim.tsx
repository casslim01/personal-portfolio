import '../styles/LineAnim.css'

function LineAnim() {
  return (
    <div className="relative w-full h-16 overflow-hidden bg-black rounded border-2 border-white">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="diagonal-line"
            style={{
              left: `${i * 15 - 100}%`,
              animationDelay: `${i * 100}ms`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default LineAnim