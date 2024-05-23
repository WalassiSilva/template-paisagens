import { About } from "./components/About"
import { Feedbacks } from "./components/Feedbacks"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Projects } from "./components/Projects"

function App() {

  return (
    <>

      <Header />
      <main className="container justify-center items-center mx-auto px-4 flex flex-col gap-14 scroll-mt-16">
        <Home id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Feedbacks id="feedbacks" />
      </main>
      <Footer />
    </>
  )
}

export default App
