import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skill from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
    </main>
  )
}
