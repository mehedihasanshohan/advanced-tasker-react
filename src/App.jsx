import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TaskBoard from './components/TaskBoard/TaskBoard'

function App() {

  return (
    <>
        <h2 className='text-red-400 font-bold text-center'>welcome to tasker app</h2>
       <Navbar></Navbar>
       <div className='flex flex-col justify-center items-center'>
         <Hero></Hero>
         <TaskBoard></TaskBoard>
        </div>
       <Footer></Footer>

       {/* <AddTaskModal></AddTaskModal> */}

    </>
  )
}

export default App
