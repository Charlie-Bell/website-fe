import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Chat } from './components/Chat/Chat'

function App() {

  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <hr></hr>
        <Hero />
        <About />
        <Experience />
        <Chat />
      </div>
    </>
  )
}

export default App
