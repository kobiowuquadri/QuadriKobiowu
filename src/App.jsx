import './App.css'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Success from './components/Contact/Success'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BuyMeCoffee from './components/BuyMeCoffee/BuyMeCoffee'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  return (
    <div className="bg-[#0A192F] min-h-screen">
      <Routes>
        <Route index element={<Home />} />
        <Route path='/success' element={<Success />} />
      </Routes>
      <BuyMeCoffee />
    </div>
  )
}

export default App
