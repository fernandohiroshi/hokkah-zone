import { Hero } from "@/components/Hero";
import Sections from "@/components/Sections";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto py-6 px-2">
      <Hero />
      <Sections />
    </main>
  );
}
