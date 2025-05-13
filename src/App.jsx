import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import StorySection from './pages/About'
import ContactPage from './pages/Contact'
import ProjectsPage from './pages/Projects'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<StorySection />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
    <Analytics />
    </>
  )
}

export default App
