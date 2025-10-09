import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import InspirationGallery from "@/components/InspirationGallery";
import ContentCreationSection from "@/components/ContentCreationSection";
import FeaturesSections from "@/components/FeaturesSections";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TrustedBrandsSection from "@/components/TrustedBrandsSection";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import IntegrationsSection from "@/components/IntegrationsSection";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <TrustedBrandsSection/>
                <FeaturesSections />
                              <BeforeAfterShowcase />
<IntegrationsSection/>
<CTABanner/>
        <ResultsSection />

        <InspirationGallery />
        <ContentCreationSection />
        <CTASection/>
        <FAQSection />
    
        <Footer />
      </div>
    </div>
  );
}