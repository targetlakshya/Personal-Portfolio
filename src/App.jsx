import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Themes from './Components/Themes'

function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Themes />
    <Routes>
     <Route index element={<Home/>}  />
     <Route path='about' element={<About />} />
     <Route path='portfolio' element={<Portfolio />} />
     <Route path='contact' element={<Contact />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
