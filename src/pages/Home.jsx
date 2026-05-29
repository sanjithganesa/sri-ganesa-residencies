import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/layout/HeroSection";
import ApartmentSection from "../components/apartments/ApartmentSection";
import AmenitiesSection from "../components/layout/AmenitiesSection";
import ContactSection from "../components/layout/ContactSection";


function Home() {
  return (
    <div className="bg-black">


      <Navbar />

      <HeroSection />

      <ApartmentSection />

      <AmenitiesSection />

      <ContactSection/>

    </div>
  );
}

export default Home;