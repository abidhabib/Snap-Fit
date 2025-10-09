"use client";

import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const footerSections = [
    {
      title: 'PAGES',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Features', href: '#features' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'TOOLS',
      links: [
        { name: 'All Tools', href: '/tools' },
        { name: "Clothes on Models", href: '/tools/virtual-tryon-apparel' },
        { name: 'Video with Images', href: '/tools/virtual-tryon-accessories' },
        { name: 'Videos with Accessory Images', href: '/tools/swap-fashion-model' },
        { name: 'Background Remover', href: '/tools/multi-angle-shots' },
        { name: 'Image Enhancer', href: '/tools/product-in-hand' },
      ]
    },
    
    {
      title: 'COMPANY',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Help Center', href: '/help' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'DMCA Policy', href: '/dmca' },
        { name: 'Security', href: '/security' }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              {/* Brand Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                  SnapFit
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-4 leading-tight text-white">
                Transform Your Product Photos with AI
                <br />
                <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                  Boost Sales in Minutes
                </span>
              </h2>
              
              {/* Contact Info */}
              <div className="mb-6 flex items-center gap-2">
                <Mail className="w-4 h-4 text-lime-400" />
                <a 
                  href="mailto:support@snapfit.ai" 
                  className="text-gray-300 hover:text-lime-400 transition-colors duration-200"
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
                      className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-lime-600 transition-all duration-200 hover:scale-110 group"
                    >
                      <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white" />
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
                <h3 className="text-sm font-semibold text-lime-400 mb-6 tracking-wider uppercase">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-lime-400 transition-colors duration-200 text-sm leading-relaxed"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-12 max-w-7xl mx-auto"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            Copyright 2024 © ECOCREATE TECHNOLOGY PTE. LTD. | All rights reserved
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-slate-700 text-slate-300 hover:bg-lime-600 hover:border-lime-600 hover:text-white transition-all duration-200"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;