// src/components/CTABanner.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, Shield } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 to-lime-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-lime-500/20 text-lime-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Limited Time Offer
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Brand{' '}
            <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
              Without Studio Costs?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get <span className="text-lime-400 font-semibold">5 Free Credits</span> today and transform your product images in minutes.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 text-slate-300">
              <Star className="w-5 h-5 text-lime-400" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Zap className="w-5 h-5 text-lime-400" />
              <span className="text-sm">Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Shield className="w-5 h-5 text-lime-400" />
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Start Now - Get 5 Free Credits
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900 font-medium"
            >
              Book a Demo
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-slate-400 text-sm mt-6">
            Trusted by 500+ brands worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;