import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { VibeCoding } from "../components/VibeCoding";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <VibeCoding />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
