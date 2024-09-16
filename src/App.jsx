import './App.css'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Success from './components/Contact/Success'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    })
  }, [])

  return (
    <>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/success' element={<Success />} />
    </Routes>
    </>
  )
}

export default App
