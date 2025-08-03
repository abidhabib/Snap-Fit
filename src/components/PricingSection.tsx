import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Perfect for trying out our AI tools",
      features: [
        "5 AI credits",
        "Basic AI photo editing",
        "Standard quality exports",
        "Community support",
        "Watermarked outputs"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Starter",
      price: "$23.2",
      originalPrice: "$29",
      period: "/month",
      description: "Great for small businesses and freelancers",
      features: [
        "200 AI credits/month",
        "All AI editing tools",
        "HD quality exports",
        "Priority support",
        "No watermarks",
        "Commercial usage rights",
        "API access"
      ],
      buttonText: "Buy Now",
      popular: false
    },
    {
      name: "Growth",
      price: "$63.2",
      originalPrice: "$79",
      period: "/month",
      description: "Perfect for growing e-commerce businesses",
      features: [
        "600 AI credits/month",
        "All AI editing tools",
        "4K quality exports",
        "Priority support",
        "No watermarks",
        "Commercial usage rights",
        "API access",
        "Bulk processing",
        "Custom backgrounds"
      ],
      buttonText: "Buy Now",
      popular: true
    },
    {
      name: "Advanced",
      price: "$79.2",
      originalPrice: "$99",
      period: "/month",
      description: "For large businesses and agencies",
      features: [
        "1,200 AI credits/month",
        "All AI editing tools",
        "8K quality exports",
        "24/7 premium support",
        "No watermarks",
        "Commercial usage rights",
        "Full API access",
        "Bulk processing",
        "Custom backgrounds",
        "White label solutions",
        "Team collaboration",
        "Advanced analytics"
      ],
      buttonText: "Buy Now",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Pricing</span> Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you need a simple image editor or a powerful AI art creator, we have the right plan for you. 
            Get the AI-powered creative tools you need at a price that works.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-lg p-1 flex">
            <button className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-md text-muted-foreground hover:text-foreground transition-colors">
              Annual (20% OFF)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-6 h-fit ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border hover:border-primary/50"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through ml-2">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <Button
                className={`w-full mb-6 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary-hover text-primary-foreground"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                {plan.buttonText}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-primary">Compare</span> Plans
          </h3>
          
          <div className="bg-card rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Subscription Plans</th>
                    <th className="text-center p-4 font-semibold">Free</th>
                    <th className="text-center p-4 font-semibold">Starter</th>
                    <th className="text-center p-4 font-semibold">Growth</th>
                    <th className="text-center p-4 font-semibold bg-primary/10">Advanced</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-medium">Credits Benefits</td>
                    <td className="p-4 text-center">5 credits</td>
                    <td className="p-4 text-center">200 credits/mo</td>
                    <td className="p-4 text-center">600 credits/mo</td>
                    <td className="p-4 text-center bg-primary/5">1,200 credits/mo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">AI Tools Access</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Full Access</td>
                    <td className="p-4 text-center">Full Access</td>
                    <td className="p-4 text-center bg-primary/5">Full Access</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Export Quality</td>
                    <td className="p-4 text-center">Standard</td>
                    <td className="p-4 text-center">HD</td>
                    <td className="p-4 text-center">4K</td>
                    <td className="p-4 text-center bg-primary/5">8K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-4">
            {[
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a free plan with 5 AI credits so you can try our platform without any cost. The trial includes basic editing features, and you'll get unlimited access to explore our interface."
              },
              {
                question: "How do credits work?",
                answer: "Credits are used for AI-powered enhancements. Each tool consumes different amounts of credits based on complexity."
              },
              {
                question: "Can I use the images I create for commercial purposes?",
                answer: "Yes, all paid plans include commercial usage rights for the images you create."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg p-6">
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;