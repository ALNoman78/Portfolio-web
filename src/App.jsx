import CardsSection from "./CardSection"
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
    </>
  )
}

export default App
