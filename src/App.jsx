import Footer from './components/Footer'
import SignUpSection from './pages/SignUpSection'
import BuyEatSection from './pages/BuyEatSection'
import ReviewSection from './pages/ReviewSection'
import FeatureSection from './pages/FeatureSection'
import ProductSection from './pages/ProductSection'
import HeroSection from './pages/HeroSection'
import Shop from './components/Shop'
import HeroPop from './components/HeroPop'

function App() {
  return (
    <>
    <HeroSection />
    <HeroPop />
    <ProductSection />
    <FeatureSection />
    <Shop />
    <ReviewSection />
    <BuyEatSection />
    <SignUpSection />
    <Footer />
    </>
  )
}

export default App;
