import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <Projects />
        <div style={{ background: "linear-gradient(to bottom, #121212 0%, #58778B 45%, #E7E7E7 100%)", width: "100%" }}>
          <About />
          <Footer />
        </div>
      </main>
    </>
  );
}
