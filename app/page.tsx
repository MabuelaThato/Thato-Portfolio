import { Hero } from "./hero";
import { Skills } from "./skill";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <Skills />
    </main>
  )
}
