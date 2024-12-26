import Consultation from "./Components/Sections/Consultation";
import Footer from "./Components/Sections/Footer";
import Hero from "./Components/Sections/Hero";
import Nav from "./Components/Sections/Nav";
import Services from "./Components/Sections/Services";
import Testimonials from "./Components/Sections/Testimonials";
import Welcome from "./Components/Sections/Welcome";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Nav />
        <Hero />
      </div>
      <Welcome/>
      <Services/>
      <Testimonials/>
      <Consultation/>
      <Footer/>
    </div>
  );
}
