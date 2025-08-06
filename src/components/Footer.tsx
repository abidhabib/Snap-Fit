import React from 'react';
import {  Facebook, Twitter, Instagram,  Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }, 
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const footerSections = [
    {
      title: 'PAGES',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Inspiration', href: '/inspiration' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'TOOLS',
      links: [
        { name: 'All Tools', href: '/tools' },
        { name: "Clothes on Models ", href: '/tools/virtual-tryon-apparel' },
        { name: 'Video with Images  ', href: '/tools/virtual-tryon-accessories' },
        { name: 'Videos with Accessory Images ', href: '/tools/swap-fashion-model' },
        { name: 'Background Remover', href: '/tools/multi-angle-shots' },
        { name: 'Image Enhancer', href: '/tools/product-in-hand' },
     
      ]
    },
    
    {
      title: 'COMPANY',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Help Center', href: '/help' },
        { name: 'Term of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'DMCA Policy', href: '/dmca' },
        { name: 'Security', href: '/security' }
      ]
    }
  ];

  return (
    <footer className="bg-black text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 leading-tight">
                Supercharge Your Photos with AI
                <br />
                Boost Sales in Minutes.
              </h2>
              <div className="mb-6">
                <a 
                  href="mailto:support@snapfit.ai" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  support@snapfit.ai
                </a>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="lg:col-span-1">
              {section.title && (
                <h3 className="text-sm font-semibold text-white mb-6 tracking-wider">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm leading-relaxed"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12 max-w-7xl mx-auto"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-r from-lime-400 to-lime-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold">Snapfit</span>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-right">
            Copyright 2025 © ECOCREATE TECHNOLOGY PTE. LTD. | All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;