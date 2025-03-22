
import { useEffect, useState } from 'react'
import './App.css'
import Hero from "./components/Hero"
function App() {
  const [darkMode , setDarkMode] = useState(()=>{
    const saveTheme= localStorage.getItem('theme')
    if(saveTheme){
      return saveTheme=== 'dark'
    }else{

      return window.matchMedia('(prefers-color-scheme: dark)').matches 
    }
    
  })
  useEffect(()=>{
    if(darkMode){document.documentElement.classList.add("dark")
      localStorage.setItem('theme', 'dark')  }
      else{ document.documentElement.classList.remove("dark")
        localStorage.setItem('theme', 'light') 
      }

  },[darkMode])
  const toggleDarkMode =()=>{
    setDarkMode(!darkMode)
  }
  return (
    
     <div className=' min-h-screen bg-neutral-100  dark:bg-neutral-950 relative transition-colors duration-300'>
       <div className='absolute ' style={{backgroundImage:'linear-gradient( to right, rgba(0,0,0,0.05) 1px ,transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)' ,backgroundSize: '40px 40px'}}></div>
       <div className='absolute ' style={{backgroundImage:'radial-gradient(rgba(0,0,0,0.1) 1px ,transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <button onClick={toggleDarkMode} className='fixed top-3 lg:top-4 right-3 h-9 w-9 lg:h-10 lg:w-10 lg:right-4 flex
        justify-center items-center rounded-full bg-amber-500 text-neutrak-950  shadow-lg hover:bg-amber-600 transition-colors '>
          <i className={`bx bx-${darkMode ? "sun": "moon"} text-lg lg:text-xl`}></i>
        </button>
      <Hero/>
     </div>

  )
}

export default App
