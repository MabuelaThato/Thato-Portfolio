import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import { Hero } from "./hero";
import Projects from "./projects";
import { Skills } from "./skills";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full bg-[#F9F8FD] ">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
