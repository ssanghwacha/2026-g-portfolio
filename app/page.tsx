import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <Hero />
        <Projects />
        <div style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #58778B 55%, #000000 100%)" }}>
          <About />
          <Footer />
        </div>
      </main>
    </>
  );
}
