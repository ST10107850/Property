import "@fortawesome/fontawesome-free/css/all.min.css";
import { TopBar } from "./Components/TopBar";
import { NavBar } from "./Components/NavBar";
import { Hero } from "./Components/Hero";
import FeaturedSection from "./Components/FeaturedSection ";
import { VideoSection } from "./Components/VideoSection";
import { BestDealSection } from "./Components/BestDealSection";
import PropertiesSection from "./Components/PropertiesSection";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero/>
      <FeaturedSection/>
      <VideoSection/>
      <BestDealSection/>
      <PropertiesSection/> 
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
