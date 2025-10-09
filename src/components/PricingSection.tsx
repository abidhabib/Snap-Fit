"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Check, X, Star, Zap, Clock, Shield, Users, Globe, TrendingDown } from "lucide-react";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      id: "freemium",
      name: "Freemium",
      price: 0,
      originalPrice: 0,
      credits: 6,
      description: "Perfect for trying out SnapFit",
      features: [
        { text: "3 product images", included: true },
        { text: "Basic image processing", included: true },
        { text: "Standard quality exports", included: true },
        { text: "Commercial usage rights", included: false },
        { text: "Priority support", included: false },
        { text: "HD quality exports", included: false },
        { text: "Bulk operations", included: false },
        { text: "API access", included: false }
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      id: "basic",
      name: "Basic",
      price: 5000,
      originalPrice: 6000,
      credits: 40,
      description: "Great for small businesses",
      features: [
        { text: "20 product images", included: true },
        { text: "Basic image processing", included: true },
        { text: "Standard quality exports", included: true },
        { text: "Commercial usage rights", included: true },
        { text: "Priority support", included: false },
        { text: "HD quality exports", included: false },
        { text: "Bulk operations", included: false },
        { text: "API access", included: false }
      ],
      buttonText: "Choose Basic",
      popular: false
    },
    {
      id: "standard",
      name: "Standard",
      price: 12500,
      originalPrice: 15000,
      credits: 100,
      description: "Ideal for growing brands",
      features: [
        { text: "50 product images", included: true },
        { text: "Basic image processing", included: true },
        { text: "Standard quality exports", included: true },
        { text: "Commercial usage rights", included: true },
        { text: "Priority support", included: true },
        { text: "HD quality exports", included: true },
        { text: "Bulk operations", included: true },
        { text: "API access", included: false }
      ],
      buttonText: "Choose Standard",
      popular: true
    },
    {
      id: "premium",
      name: "Premium",
      price: 25000,
      originalPrice: 30000,
      credits: 250,
      description: "For enterprises & agencies",
      features: [
        { text: "125 product images", included: true },
        { text: "Basic image processing", included: true },
        { text: "Standard quality exports", included: true },
        { text: "Commercial usage rights", included: true },
        { text: "Priority support", included: true },
        { text: "HD quality exports", included: true },
        { text: "Bulk operations", included: true },
        { text: "API access", included: true }
      ],
      buttonText: "Choose Premium",
      popular: false
    }
  ];

  const comparisonData = [
    {
      feature: "Cost per Image",
      snapfit: {
        value: "From Rs. 100 per image",
        icon: <TrendingDown className="w-4 h-4 text-green-600" />,
        highlight: true
      },
      traditional: {
        value: "Rs. 1,000–5,000 per image",
        icon: <X className="w-4 h-4 text-red-500" />,
        highlight: false
      },
      competitors: {
        value: "Rs. 200–560 (USD pricing)",
        icon: <X className="w-4 h-4 text-red-500" />,
        highlight: false
      }
    },
    {
      feature: "Turnaround Time",
      snapfit: {
        value: "Minutes / Hours",
        icon: <Zap className="w-4 h-4 text-green-600" />,
        highlight: true
      },
      traditional: {
        value: "Days / Weeks",
        icon: <X className="w-4 h-4 text-red-500" />,
        highlight: false
      },
      competitors: {
        value: "1–2 days average",
        icon: <Clock className="w-4 h-4 text-yellow-500" />,
        highlight: false
      }
    },
    {
      feature: "Licensing & Royalties",
      snapfit: {
        value: "All-inclusive, no hidden fees",
        icon: <Shield className="w-4 h-4 text-green-600" />,
        highlight: true
      },
      traditional: {
        value: "Model & studio royalties extra",
        icon: <X className="w-4 h-4 text-red-500" />,
        highlight: false
      },
      competitors: {
        value: "Usage limits / hidden fees",
        icon: <X className="w-4 h-4 text-red-500" />,
        highlight: false
      }
    },
    {
      feature: "Scale & API Integration",
      snapfit: {
        value: "Bulk-ready, API support",
        icon: <Check className="w-4 h-4 text-green-600" />,
        highlight: true
      },
      traditional: {
        value: "Manual only",
        icon: <X className="w-4 h-4 text-red-500" />,
        highlight: false
      },
      competitors: {
        value: "Limited or custom-only",
        icon: <X className="w-4 h-4 text-red-500" />,
        highlight: false
      }
    },
    {
      feature: "Diversity & Model Choice",
      snapfit: {
        value: "Extensive: local + global styles",
        icon: <Users className="w-4 h-4 text-green-600" />,
        highlight: true
      },
      traditional: {
        value: "Limited availability",
        icon: <X className="w-4 h-4 text-red-500" />,
        highlight: false
      },
      competitors: {
        value: "Often western-only models",
        icon: <X className="w-4 h-4 text-red-500" />,
        highlight: false
      }
    },
    {
      feature: "Local Advantage",
      snapfit: {
        value: "PKR pricing, local support",
        icon: <Globe className="w-4 h-4 text-green-600" />,
        highlight: true
      },
      traditional: {
        value: "Expensive setups",
        icon: <X className="w-4 h-4 text-red-500" />,
        highlight: false
      },
      competitors: {
        value: "USD-only, no local payments",
        icon: <X className="w-4 h-4 text-red-500" />,
        highlight: false
      }
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    // Scroll to comparison table
    document.getElementById('comparison-table')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-slate-50 to-lime-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-block bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Simple, Honest{' '}
            <span className="bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            No hidden fees. No surprise charges. Just straightforward pricing that scales with your business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative p-6 h-fit bg-white border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? "border-lime-500 shadow-lg scale-105"
                  : "border-slate-200 hover:border-lime-300"
              } ${selectedPlan === plan.id ? 'ring-2 ring-lime-500 ring-opacity-50' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-lime-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-slate-900">
                    {plan.price === 0 ? "Free" : `₨${plan.price.toLocaleString()}`}
                  </span>
                  {plan.price > 0 && plan.originalPrice > plan.price && (
                    <span className="text-slate-500 line-through text-sm ml-2">
                      ₨{plan.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 mb-2">{plan.description}</p>
                <div className="text-sm font-medium text-lime-600 bg-lime-100 px-3 py-1 rounded-full inline-block">
                  {plan.credits} credits
                </div>
              </div>

              <Button
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full mb-6 font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white shadow-lg"
                    : plan.price === 0
                    ? "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300"
                    : "bg-lime-500 hover:bg-lime-600 text-white"
                } ${selectedPlan === plan.id ? 'ring-2 ring-lime-500 ring-offset-2' : ''}`}
              >
                {plan.buttonText}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-lime-500 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div id="comparison-table" className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              See Why Brands Choose{' '}
              <span className="bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent">
                SnapFit
              </span>
            </h3>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Compare how SnapFit outperforms traditional studios and international competitors
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden max-w-6xl mx-auto">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-slate-50 to-lime-50/50 border-b border-slate-200">
              <div className="text-lg font-semibold text-slate-900">Feature</div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white px-4 py-3 rounded-xl shadow-lg">
                  <div className="font-bold text-lg">SnapFit</div>
                  <div className="text-sm opacity-90">Recommended</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-slate-100 text-slate-700 px-4 py-3 rounded-xl border border-slate-300">
                  <div className="font-bold text-lg">Traditional Studio</div>
                  <div className="text-sm opacity-75">Local Options</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-slate-100 text-slate-700 px-4 py-3 rounded-xl border border-slate-300">
                  <div className="font-bold text-lg">Competitors</div>
                  <div className="text-sm opacity-75">International</div>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-slate-100">
              {comparisonData.map((row, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-4 gap-4 p-6 hover:bg-lime-50/30 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <span className="text-lg font-medium text-slate-900">
                      {row.feature}
                    </span>
                  </div>

                  <div className={`text-center p-4 rounded-lg transition-all duration-200 ${
                    row.snapfit.highlight 
                      ? 'bg-green-50 border border-green-200 shadow-sm' 
                      : 'bg-white'
                  }`}>
                    <div className="flex flex-col items-center gap-2">
                      {row.snapfit.icon}
                      <span className={`font-medium ${
                        row.snapfit.highlight ? 'text-green-700' : 'text-slate-700'
                      }`}>
                        {row.snapfit.value}
                      </span>
                    </div>
                  </div>

                  <div className="text-center p-4 rounded-lg bg-slate-50/50">
                    <div className="flex flex-col items-center gap-2">
                      {row.traditional.icon}
                      <span className="text-slate-600 font-medium">
                        {row.traditional.value}
                      </span>
                    </div>
                  </div>

                  <div className="text-center p-4 rounded-lg bg-slate-50/50">
                    <div className="flex flex-col items-center gap-2">
                      {row.competitors.icon}
                      <span className="text-slate-600 font-medium">
                        {row.competitors.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-lime-50 to-green-50 border border-lime-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Product Images?
            </h3>
            <p className="text-slate-700 mb-6">
              Join hundreds of brands creating stunning product visuals with SnapFit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white px-8 shadow-lg"
              >
                Start with Free Plan
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Book a Demo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;