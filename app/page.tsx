import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import { Hero } from "./hero";
import Projects from "./projects";
import { Skills } from "./skill";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full bg-[#FBFAFE] ">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
