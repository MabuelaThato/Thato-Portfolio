import Contact from "./contact";
import Experience from "./experience";
import { Hero } from "./hero";
import Projects from "./projects";
import { Skills } from "./skills";


export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#F9F8FD] ">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
