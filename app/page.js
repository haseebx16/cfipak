import Nav from "./Components/Sections/Nav";
import Services from "./Components/Sections/Services";
import Testimonials from "./Components/Sections/Testimonials";
import Welcome from "./Components/Sections/Welcome";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Welcome/>
      <Services/>
      <Testimonials/>
    </div>
  );
}
