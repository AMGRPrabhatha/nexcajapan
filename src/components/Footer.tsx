"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only when page is scrolled down past 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappUrl = "https://wa.me/818051662345?text=Hello%20Nexca%20Team%2C%20I%20would%20like%20to%20inquire%20about%20vehicles.";

  return (
    <>
      <footer className="bg-white text-gray-900 border-t border-gray-100 pt-16 pb-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main 4-Column Grid matching reference design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            
            {/* Column 1: RESOURCES */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-6">
                RESOURCES
              </h4>
              <ul className="space-y-3.5 text-sm text-gray-600 font-normal">
                <li>
                  <Link href="/shop" className="hover:text-gray-950 transition-colors">
                    Vehicle Inventory
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-gray-950 transition-colors">
                    Vehicle Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/export-services" target="_blank" rel="noopener noreferrer" className="hover:text-gray-950 transition-colors">
                    Export Services
                  </Link>
                </li>
                <li>
                  <Link href="/auction-sheet-guide" target="_blank" rel="noopener noreferrer" className="hover:text-gray-950 transition-colors">
                    Auction Sheet Guide
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: HELP */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-6">
                HELP
              </h4>
              <ul className="space-y-3.5 text-sm text-gray-600 font-normal">
                <li>
                  <Link href="/contact" className="hover:text-gray-950 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/payment-options" target="_blank" rel="noopener noreferrer" className="hover:text-gray-950 transition-colors">
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link href="/pre-shipment-inspection" target="_blank" rel="noopener noreferrer" className="hover:text-gray-950 transition-colors">
                    Pre-Shipment Inspection
                  </Link>
                </li>
                <li>
                  <Link href="/order-status" target="_blank" rel="noopener noreferrer" className="hover:text-gray-950 transition-colors">
                    Order / Shipment Status
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: COMPANY */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-6">
                COMPANY
              </h4>
              <ul className="space-y-3.5 text-sm text-gray-600 font-normal">
                <li>
                  <Link href="/about" className="hover:text-gray-950 transition-colors">
                    About Nexca
                  </Link>
                </li>
                <li>
                  <Link href="/quality-assurance" target="_blank" rel="noopener noreferrer" className="hover:text-gray-950 transition-colors">
                    Quality Assurance
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" target="_blank" rel="noopener noreferrer" className="hover:text-gray-950 transition-colors">
                    Customer Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/partner-with-us" target="_blank" rel="noopener noreferrer" className="hover:text-gray-950 transition-colors">
                    Partner With Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: CONTACT INFO & Social Icons */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-6">
                  CONTACT INFO
                </h4>
                <ul className="space-y-3.5 text-sm text-gray-600 font-normal">
                  <li className="leading-relaxed">
                    <span className="font-semibold text-gray-900 block text-xs uppercase tracking-wider mb-1">
                      Japan Office
                    </span>
                    <span className="block text-gray-800 font-medium">〒455-0023</span>
                    <span>Aichi-ken, Nagoya Shi, Minato ku</span>
                    <br />
                    <span>1 Higashitsukiji-cho</span>
                    <br />
                    <span>Higashitsukiji-so 1206.</span>
                  </li>
                  <li className="pt-1">
                    <span className="text-gray-500 text-xs font-medium block">Phone:</span>
                    <a href="tel:+818051662345" className="hover:text-gray-950 transition-colors block font-medium">
                      +81 80-5166-2345
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-500 text-xs font-medium block">Fax:</span>
                    <a href="tel:+81526270204" className="hover:text-gray-950 transition-colors block font-medium">
                      +81 52 627 0204
                    </a>
                  </li>
                  <li>
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-gray-950 transition-colors block font-medium text-[#FF6B35]"
                    >
                      WhatsApp Us
                    </a>
                  </li>
                  <li>
                    <a href="mailto:nexcainfo@gmail.com" className="hover:text-gray-950 transition-colors block">
                      nexcainfo@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media Icons (Facebook, Instagram, TikTok) */}
              <div className="flex items-center gap-3 mt-6 lg:mt-0">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/share/1FMWRNzJ6K/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-gray-400 hover:bg-[#FF6B35] text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/nexca_japan/?utm_source=ig_web_button_share_sheet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-gray-400 hover:bg-[#FF6B35] text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@nexca18?is_from_webapp=1&sender_device=pc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-10 h-10 rounded-full bg-gray-400 hover:bg-[#FF6B35] text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Sub-Bar */}
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-gray-700 font-semibold">
                <span className="text-red-500 text-sm">📍</span> Japan
              </span>
              <span>© {new Date().getFullYear()} Nexca. All rights reserved</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-500">
              <Link href="/blog" className="hover:text-gray-900 transition-colors">
                Guides
              </Link>
              <Link href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                Terms of Use
              </Link>
              <Link href="/booking-terms" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                Booking Terms &amp; Conditions
              </Link>
              <Link href="/company-details" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                Company Details
              </Link>
              <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                Privacy &amp; Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Bottom-Left: Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to Top"
        className={`fixed bottom-6 left-6 z-40 w-12 h-12 rounded-2xl bg-[#FF6B35] hover:bg-[#E85D2A] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all duration-300 group cursor-pointer ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100' 
            : 'opacity-0 translate-y-8 pointer-events-none scale-75'
        }`}
      >
        <ChevronUp className="w-6 h-6 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* Floating Bottom-Right: WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] hover:scale-110 active:scale-95 transition-all duration-200 group cursor-pointer"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 bg-[#25D366]/30 rounded-full blur-sm -z-10 animate-pulse"></span>

        {/* Authentic WhatsApp Icon */}
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.073-1.895-.449-1.523-.629-2.527-2.148-2.604-2.25-.077-.102-.622-.828-.622-1.579 0-.751.391-1.12.53-1.27.14-.15.306-.188.408-.188.102 0 .204.002.293.007.094.005.22.02.322.253.111.253.375.918.408.986.033.068.055.148.01.238-.045.09-.068.146-.135.224-.068.078-.143.173-.204.233-.068.067-.139.14-.06.276.08.136.353.582.757.942.52.463.958.607 1.094.675.136.068.216.057.296-.034.08-.09.345-.405.437-.544.092-.139.183-.116.307-.07.124.046.788.372.924.44.136.068.226.102.26.16.034.057.034.333-.11.738z"/>
          <path d="M12.004 2c-5.523 0-10 4.477-10 10 0 1.767.458 3.427 1.257 4.873l-1.261 4.607 4.747-1.246c1.394.76 2.979 1.196 4.667 1.196 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.25c-1.564 0-3.033-.438-4.3-1.201l-.308-.187-2.823.741.753-2.75-.205-.327c-.854-1.359-1.31-2.934-1.31-4.526 0-4.549 3.701-8.25 8.25-8.25 4.549 0 8.25 3.701 8.25 8.25 0 4.549-3.701 8.25-8.25 8.25z"/>
        </svg>
      </a>
    </>
  );
}
