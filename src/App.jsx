
import Particle from './components/Particles'

function App() {


  return (
  <>
 
  <div className="relative bg-gradient-to-r from-cyan-700 to-purple-800  h-screen">
 
  <Particle></Particle>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="sm:text-5xl text-4xl text-center font-bold mx-2 text-gray-300">tsParticles created by Mehedi </h1>
        <h1 className='sm:text-3xl text-2xl text-center font-bold text-gray-300'>Play with Particles</h1>
      </div>
    </div>
  </>
  )
}

export default App
