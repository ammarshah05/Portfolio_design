import { useState } from 'react'
import { Topbar } from './components/Topbar'
import { HeroSection } from './components/HeroSection'
import { WorkExperience } from './components/WorkExperience'

import './App.css'

function App() {


  return (
    <>
      <Topbar/>
      <HeroSection/>
      <WorkExperience/>
    </>
  )
}

export default App
