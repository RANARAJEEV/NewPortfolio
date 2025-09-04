import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import About  from './components/About'
// import { Canvas } from '@react-three/fiber'
// import { Model } from './components/Model.jsx'
// import { OrbitControls } from '@react-three/drei'
import Hero from './components/HeroSection.jsx'
import ProjectPage from './components/ProjectPage.jsx';
import ResumeAndCertification from './components/ResumeAndCertification.jsx';
function App() {

  return (
    // bg-[radial-gradient(circle_at_center,_#E80406,_#ffffff)]
    <div className=' min-h-screen  '>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<ProjectPage />} />
        <Route path="/Resume" element={<ResumeAndCertification />} />
      </Routes>
   </div>
  )
}

export default App
