import About from "./about/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

import Navbar from "./navbar/page";
import Navlink from "./navlink/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navlink title="About" />

      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
