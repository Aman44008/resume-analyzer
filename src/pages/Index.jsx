import Footer from "../component/Footer";
import IndexNavBar from "../component/IndexNavBar";
import HeroSection from "../component/HeroSection";
import Features from "../component/Features";
import Pricing from "../component/Pricing";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            
            {/* Navbar */}
            <IndexNavBar />

            {/* Hero */}
            <HeroSection />

            {/* Features */}
            <Features />

            {/* Pricing */}
            <Pricing />

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default Index;
