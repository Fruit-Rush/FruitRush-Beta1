import Footer from '../components/Footer'
import SignUpSection from './SignUpSection'
import BuyEatSection from './BuyEatSection'
import ReviewSection from './ReviewSection'
import FeatureSection from './FeatureSection'
import ProductSection from './ProductSection'
import HeroSection from './HeroSection'
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
