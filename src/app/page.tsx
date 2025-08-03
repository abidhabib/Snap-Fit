import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import InspirationGallery from "@/components/InspirationGallery";
import ContentCreationSection from "@/components/ContentCreationSection";
import FeaturesSections from "@/components/FeaturesSections";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ResultsSection />
        <InspirationGallery />
        <ContentCreationSection />
        <FeaturesSections />
        <CTASection/>
        <FAQSection />
    
        <Footer />
      </div>
    </div>
  );
}