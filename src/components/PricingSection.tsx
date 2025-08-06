"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  price: number;
  credits: number;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

const PricingSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const snapfitPlans: Plan[] = [
    {
      id: "freemium",
      name: "Freemium",
      price: 0,
      credits: 6,
      description: "Try SnapFit with 3 free images",
      features: [
        "3 free product images",
        "Basic image processing",
        "Limited-time access",
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      id: "basic",
      name: "Basic Plan",
      price: 5000,
      credits: 40,
      description: "Perfect for small businesses",
      features: [
        "20 product images", 
        "Basic support",
        "Standard quality exports",
        "Commercial usage rights"
      ],
      buttonText: "Choose Basic",
      popular: false
    },
    {
      id: "standard",
      name: "Standard Plan",
      price: 12500,
      credits: 100,
      description: "Ideal for growing businesses",
      features: [
        "50 product images", 
        "Priority support", 
        "Premium features",
        "HD quality exports",
        "Advanced processing",
        "Bulk operations"
      ],
      buttonText: "Choose Standard",
      popular: true
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "How do SnapFit credits work?",
      answer: "Credits are used to process your product images with AI background replacement. Each image processing consumes credits based on the complexity and size of the image."
    },
    {
      question: "Can I upgrade my plan anytime?",
      answer: "Yes, you can upgrade your plan at any time. Your remaining credits will be preserved and additional credits from the new plan will be added to your account."
    },
    {
      question: "What happens after I use all my credits?",
      answer: "Once you've used all your credits, you can purchase a new plan to continue using SnapFit. The Freemium plan resets periodically for continued free access."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a satisfaction guarantee. If you're not happy with your purchase within 7 days and haven't used more than 20% of your credits, we'll provide a full refund."
    }
  ];

 

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-950/20 dark:to-green-950/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-lime-600 dark:text-lime-400">SnapFit</span> Pricing Plans
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Transform your product images with AI-powered background replacement. 
            Choose the perfect plan for your business needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {snapfitPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative p-6 h-fit bg-white dark:bg-slate-900 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-lime-500 shadow-lg scale-105 shadow-lime-500/25"
                  : "border-slate-200 dark:border-slate-700 hover:border-lime-300 dark:hover:border-lime-600"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-lime-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{plan.price === 0 ? "Free" : `₨${plan.price}`}</span>
                  {plan.price > 0 && (
                    <span className="text-slate-500 dark:text-slate-400 text-sm ml-1">one-time</span>
                  )}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">{plan.description}</p>
                <div className="text-sm font-medium text-lime-600 dark:text-lime-400 bg-lime-100 dark:bg-lime-900/30 px-3 py-1 rounded-full inline-block">
                  {plan.credits} credits included
                </div>
              </div>

              <Button
                className={`w-full mb-6 font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl"
                    : plan.price === 0
                    ? "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-600"
                    : "bg-lime-500 hover:bg-lime-600 text-white shadow-md hover:shadow-lg"
                }`}
              >
                {plan.buttonText}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-lime-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-slate-700 dark:text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            <span className="text-lime-600 dark:text-lime-400">Compare</span> Plans
          </h3>
          
          <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-lime-50 dark:bg-lime-950/50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Features</th>
                    <th className="text-center p-4 font-semibold text-slate-900 dark:text-white">Freemium</th>
                    <th className="text-center p-4 font-semibold text-slate-900 dark:text-white">Basic</th>
                    <th className="text-center p-4 font-semibold text-slate-900 dark:text-white bg-lime-100 dark:bg-lime-900/30">Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-900 dark:text-white">Product Images</td>
                    <td className="p-4 text-center text-slate-600 dark:text-slate-300">3 images</td>
                    <td className="p-4 text-center text-slate-600 dark:text-slate-300">20 images</td>
                    <td className="p-4 text-center text-slate-600 dark:text-slate-300 bg-lime-50 dark:bg-lime-900/20">50 images</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-900 dark:text-white">Credits Included</td>
                    <td className="p-4 text-center text-slate-600 dark:text-slate-300">6 credits</td>
                    <td className="p-4 text-center text-slate-600 dark:text-slate-300">40 credits</td>
                    <td className="p-4 text-center text-slate-600 dark:text-slate-300 bg-lime-50 dark:bg-lime-900/20">100 credits</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-900 dark:text-white">Support Level</td>
                    <td className="p-4 text-center text-slate-600 dark:text-slate-300">Community</td>
                    <td className="p-4 text-center text-slate-600 dark:text-slate-300">Basic Support</td>
                    <td className="p-4 text-center text-slate-600 dark:text-slate-300 bg-lime-50 dark:bg-lime-900/20">Priority Support</td>
                  </tr>
             
              
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200 rounded-lg"
                >
                  <h4 className="font-semibold text-slate-900 dark:text-white pr-4">{faq.question}</h4>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-lime-600 dark:text-lime-400 transition-transform duration-200" />
                    ) : (
                      <Plus className="w-5 h-5 text-lime-600 dark:text-lime-400 transition-transform duration-200" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;