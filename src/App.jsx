import CardsSection from "./CardSection"
import Footer from "./Components/Footer"
import Review from "./Components/ReviewSection/Review"
import HeroSection from "./HeroSection"
import NavBar from "./NavBar"
import Projects from "./Project"
import RadialProgress from "./RadialProgress"
import RecentProject from "./RecentProject"

function App() {

  return (
    <>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <CardsSection></CardsSection>
    <RadialProgress></RadialProgress>
    <Projects></Projects>
    <RecentProject></RecentProject>
    <Review></Review>
    <Projects></Projects>
    <Footer></Footer>
    </>
  )
}

export default App
