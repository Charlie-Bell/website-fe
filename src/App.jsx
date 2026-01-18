import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { CaseStudies } from './components/CaseStudies/CaseStudies'
import { HowIWork } from './components/HowIWork/HowIWork'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <CaseStudies />
      <HowIWork />
      <About />
      <Contact />
    </div>
  )
}

export default App
