import About from "./sections/About"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"
import Skills from "./sections/Skills"

const App = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
