import './App.css'
import Home from './pages/Home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import Success from './components/Contact/Success'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BuyMeCoffee from './components/BuyMeCoffee/BuyMeCoffee'


import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import ProjectsPage from './pages/Projects/ProjectsPage'

const RouteScrollReset = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  return (
    <div className="bg-primary-bg min-h-screen">
      <RouteScrollReset />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
        <Route path='/success' element={<Success />} />
      </Routes>
      <BuyMeCoffee />
    </div>
  )
}

export default App
