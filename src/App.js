import { Header } from "./Header/Header";
import { Navbars } from "./Navbar/Navbar";
import "remixicon/fonts/remixicon.css";
import { About } from "./Components/About/About";
import { Clientss } from "./Components/Clients/Clientss";
import { Features } from "./Features/Features";
import { Services } from "./Components/Services/Services";
import { Cta } from "./Cta/Cta";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { Count } from "./Components/Count/Count";
import { Testimonialss } from "./Components/testimonials/Testimonialss";
import { Team } from "./Components/Team/Team";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Footer/Footer";
import AOS from "aos"

export function App() {

  AOS.init({
    duration: 2000
  }); 

  return (
    <div>
      <Navbars />
      <Header />
      <About />
      <Clientss />
      <Features />
      <Services />
      <Cta />
      <Portfolio />
      <Count />
      <Testimonialss />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
