
import Particle from './components/Particles'

function App() {


  return (
  <>
 
 <div className="relative bg-black w-screen h-screen">
      <Particle />
      <div className="absolute inset-0 z-10 flex items-center justify-center text-gray-500">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </div>
    </div>
  </>
  )
}

export default App
