import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
        <h2 className='text-red-400 font-bold text-center'>welcome to tasker app</h2>
       <Navbar></Navbar>
       <Hero></Hero>
       <Footer></Footer>

    </>
  )
}

export default App
