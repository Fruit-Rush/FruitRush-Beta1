import Footer from '../components/Footer'
import SignUpSection from '../sections/SignUpSection'
import BuyEatSection from '../sections/BuyEatSection'
import ReviewSection from '../sections/ReviewSection'
import FeatureSection from '../sections/FeatureSection'
import ProductSection from '../sections/ProductSection'
import HeroSection from '../sections/HeroSection'
import Shop from '../components/Shop'
import HeroPop from '../components/HeroPop'
import Navbar from '../components/Navbar'

function HomePage() {
    return (
        <>
            <Navbar />
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

export default HomePage;
