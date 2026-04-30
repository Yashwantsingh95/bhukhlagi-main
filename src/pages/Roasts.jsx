import NavBar from "../component/NavBar";
import HomePage from "../layout/Hero";
import FloatingBgDoodles from "../component/FloatingBgDoodles";
import InternalError from "../component/InternalServerError";
import GetSocial from "../layout/GetSocial";
import Review from "../layout/Review";
import Footer from "../component/Footer";
import AnimatePizza from "../layout/AnimatePizza"

function Roasts() {
  return (
    <>
      <FloatingBgDoodles />
      <NavBar currentPage="roasts" />
      <HomePage />
      <AnimatePizza />
      <GetSocial />
      <Review />
      <Footer />
    </>
  )
}
export default Roasts;