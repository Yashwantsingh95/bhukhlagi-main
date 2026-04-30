import ComingSoon from "../component/ComingSoon";
import FloatingBgDoodles from "../component/FloatingBgDoodles";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import AboutIntro from "../layout/AboutIntro";
import Founders from "../layout/Founders";
import OurValues from "../layout/OurValues";

function About() {
  return (
    <>
      <NavBar currentPage="about" />
      <FloatingBgDoodles />
      <AboutIntro />
      <Founders />
      <OurValues />
      <Footer />
    </>
  )
}
export default About;