import logo from '../assets/Kyanoxia.svg'

import Typewriter from "../components/Typewriter"
import Cursor from '../components/Cursor'

function Home() {
  return (
    <>
      <Cursor/>
      <div className="flex flex-col justify-center items-center w-screen mb-10">
        <div className="landing min-h-screen flex flex-col justify-center items-center gap-5">
          <img src={logo} className="min-w-20 max-w-32"></img>
          <div className="header text-center">
            <Typewriter className="text-center text-2xl" input="THE WORLD IS BROKEN" />
            <Typewriter className="text-center text-2xl" input="THE KYANET IS NOT" />
          </div>
        </div>
        <div className="about flex flex-col gap-8 text-center max-w-screen-md mb-32 p-10 bg-zinc-800 rounded-3xl shadow-lg text-gray-200">
          <h1 className="text-2xl text-gray-200">What is The Kyanet?</h1>
          <p className="text-gray-200">Everything in my vicinity. All that I see and all that I grace with my touch. I know not from whence this name yields from, yet I was and always will be familiar with it.</p>
          <a className="text-white" href="/join">/join</a>
        </div>
        <div className="aboutme flex flex-col gap-8 text-center max-w-screen-md mb-32 p-10 bg-zinc-800 rounded-3xl shadow-lg text-gray-200">
          <h1 className="text-2xl text-gray-200">Kyanoxia?</h1>
          <p className="text-gray-200">Now there's a name I remember.<br/>They are rather difficult to describe. If you can think of everyone all at once, tied up neatly into a single package plagued with a creative drive, you can picture Kyanoxia.</p>
        </div>
      </div>
    </>
  )
}

export default Home
