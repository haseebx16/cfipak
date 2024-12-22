import Nav from "./Components/Sections/Nav";
import Services from "./Components/Sections/Services";
import Welcome from "./Components/Sections/Welcome";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Welcome/>
      <Services/>
    </div>
  );
}
