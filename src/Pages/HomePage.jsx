import FeaturedSection from "../Components/FeaturedSection ";
import {Hero} from "../Components/Hero";
import {VideoSection} from "../Components/VideoSection";
import {BestDealSection} from "../Components/BestDealSection";
import PropertiesSection from "../Components/PropertiesSection";
import Contact from "../Components/Contact";
export const HomePage = () => {
  return (
    <div>
        <Hero/>
        <FeaturedSection/>
        <VideoSection/>
        <BestDealSection/>
        <PropertiesSection isHome={true}/>
        <Contact/>
    </div>
  )
}
