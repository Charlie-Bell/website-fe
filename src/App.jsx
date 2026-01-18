import { useState } from 'react'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { CaseStudies } from './components/CaseStudies/CaseStudies'
import { HowIWork } from './components/HowIWork/HowIWork'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'

function App() {
  const [panelOpen, setPanelOpen] = useState(false)

  return (
    <div className={`${styles.App} ${panelOpen ? styles.AppShifted : ''}`}>
      <Navbar />
      <Hero />
      <CaseStudies onPanelChange={setPanelOpen} />
      <HowIWork />
      <About />
      <Contact />
    </div>
  )
}

export default App
