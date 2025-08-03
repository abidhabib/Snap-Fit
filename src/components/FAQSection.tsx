"use client";
import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "How easy is it to use Snapfit?",
      answer: "Very easy! Snapfit is designed for users of all skill levels. Whether you're a professional designer or someone with no prior editing experience, you can create stunning visuals in just a few clicks."
    },
    {
      question: "Can I try Snapfit for free?",
      answer: "Yes! Snapfit offers a free trial so you can explore all our features and see how they work for your business before committing to a subscription."
    },
    {
      question: "What kind of images can I edit with Snapfit?",
      answer: "You can edit a wide variety of images including product photos, fashion items, accessories, lifestyle shots, and more. Our AI tools work best with clear, well-lit product images."
    },
    {
      question: "Do I need to download any software?",
      answer: "No downloads required! Snapfit is a web-based platform that works directly in your browser. However, we also offer a mobile app for iOS and Android for editing on the go."
    },
    {
      question: "Are the edits high-quality and professional?",
      answer: "Absolutely! Our AI technology produces professional-grade results that are suitable for e-commerce platforms, marketing materials, and social media. All outputs are high-resolution and market-ready."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period."
    },
    {
      question: "Is my data safe with Snapfit?",
      answer: "Your data security is our top priority. We use enterprise-grade encryption and follow strict privacy policies. Your images and personal information are never shared with third parties and are stored securely."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How easy is it to use{' '}
            <span className="bg-gradient-to-r from-lime-600 to-blue-600 bg-clip-text text-transparent italic">
              Snapfit
            </span>
            ?
          </h2>
        </div>

        {/* FAQ Items - Full Width Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-500 ease-in-out transform ${
                openIndex === index 
                  ? 'shadow-lg scale-[1.02] border-lime-200' 
                  : 'hover:shadow-md hover:scale-[1.01]'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300"
              >
                <h3 className={`text-lg font-semibold pr-4 transition-colors duration-300 ${
                  openIndex === index ? 'text-lime-600' : 'text-gray-900'
                }`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-lime-100 text-lime-600 rotate-180' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {/* Answer with enhanced smooth animation */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100 transform translate-y-0' 
                    : 'max-h-0 opacity-0 transform -translate-y-2'
                }`}
                style={{
                  overflow: 'hidden'
                }}
              >
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-100">
                    <div className={`transition-all duration-300 delay-100 ${
                      openIndex === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
                    }`}>
                      <p className="text-gray-600 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
