// src/components/IntegrationsSection.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Zap, Shield, GitBranch } from "lucide-react";

const IntegrationsSection = () => {
  const platforms = [
    {
      name: "Shopify",
      description: "Sync your product catalog and auto-generate images for new products",
      icon: "🛒",
      status: "Live"
    },
    {
      name: "WooCommerce",
      description: "WordPress plugin for seamless e-commerce integration",
      icon: "🛍️",
      status: "Live"
    },
    {
      name: "Magento",
      description: "Enterprise-grade integration for large catalogs",
      icon: "🏢",
      status: "Beta"
    },
    {
      name: "Custom API",
      description: "Build custom workflows with our REST API",
      icon: "🔧",
      status: "Live"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-lime-600" />,
      title: "Real-time Sync",
      description: "Automatic background generation for new products"
    },
    {
      icon: <Shield className="w-6 h-6 text-lime-600" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime"
    },
    {
      icon: <GitBranch className="w-6 h-6 text-lime-600" />,
      title: "Bulk Processing",
      description: "Process thousands of images simultaneously"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-lime-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-block bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium">
              Seamless Integration
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Works seamlessly with your{' '}
            <span className="bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent">
              existing stack
            </span>
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Connect SnapFit with your favorite platforms and automate your product photography workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Platforms Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-900">Supported Platforms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platforms.map((platform) => (
                <Card
                  key={platform.name}
                  className="p-6 bg-white border border-slate-200 hover:border-lime-300 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{platform.icon}</span>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">{platform.name}</h4>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          platform.status === 'Live' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {platform.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {platform.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Features & CTA */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Powerful Integration Features</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200">
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-r from-lime-50 to-green-50 border border-lime-200 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-8 h-8 text-lime-600" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Developer Friendly</h4>
                  <p className="text-slate-600 text-sm">Comprehensive documentation and SDKs</p>
                </div>
              </div>
              <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white font-medium">
                See API Documentation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;