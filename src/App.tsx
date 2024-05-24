import { useEffect, useState } from "react"
import { About } from "./components/About"
import { Feedbacks } from "./components/Feedbacks"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Projects } from "./components/Projects"
import imgs from "./assets/imgs/paisagens";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }
    setDarkMode(savedMode === "dark" ? true : false);

  }, []);

  const toogleDisplayMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("displayMode", !darkMode ? "dark" : "light");
  }
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Header />
      <main className="dark:bg-red-600 dark:text-white justify-center items-center mx-auto px-4 flex flex-col gap-14 scroll-mt-16 ">
        <Home id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Feedbacks id="feedbacks" />
      </main>
      <Footer />
      <button onClick={() => { toogleDisplayMode() }}
        className=" bg-white rounded-full fixed bottom-2 right-2 transiction duration-300 z-20"
      >{darkMode
        ? <img src={imgs.yingYang} className="size-12 md:size-16 text-red-800 rounded-full object-contain transiction duration-300" />
        : <img src={imgs.yingYang} className="size-12 md:size-16 text-red-600 rounded-full object-contain rotate-180 transiction duration-300" />}
      </button>
    </div>
  )
}

export default App
