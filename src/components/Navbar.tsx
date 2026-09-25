"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Inventory', href: '/shop' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/shop') return pathname === '/shop' || pathname.startsWith('/shop') || pathname === '/inventory' || pathname.startsWith('/cars');
    if (href === '/blog') return pathname.startsWith('/blog');
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none py-3 sm:py-5 px-3 sm:px-5">
      
      {/* --- DESKTOP VIEW (Zyner Style Unified Navbar) --- */}
      <div className="hidden md:flex max-w-[1200px] mx-auto pointer-events-auto bg-white/85 hover:bg-white/95 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_0_0_rgba(255,255,255,0.8)] rounded-[16px] px-3 sm:px-4 py-2 items-center justify-between transition-all duration-300">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link 
            href="/" 
            prefetch={true}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden flex items-center justify-center bg-[#0b101e] flex-shrink-0 shadow-sm transition-transform group-hover:scale-105">
              <img 
                src="/logo.PNG" 
                alt="Nexca Logo" 
                className="w-full h-full object-cover scale-110" 
              />
            </div>
            <span className="text-[17px] font-extrabold text-gray-900 tracking-tight hidden sm:block">
              Nexca
            </span>
          </Link>
        </div>
        
        {/* Right Group: Links + Contact */}
        <div className="flex items-center gap-5 sm:gap-6 lg:gap-8">
          
          {/* Desktop Menu - Right Aligned, Plain Text */}
          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  className={`text-[14px] font-medium transition-colors cursor-pointer flex items-center ${
                    active
                      ? 'text-gray-900 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact Group */}
          <div className="flex items-center gap-3 lg:gap-4">
            
            {/* Zyner-style "Online" Indicator with Phone Icon */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 text-red-500 border border-gray-100/80">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="text-[12.5px] font-medium text-red-400">Online</span>
            </div>

            {/* Clickable Phone Number */}
            <a 
              href="tel:+818051662345" 
              className="hidden lg:block text-[14px] font-medium text-gray-800 hover:text-black transition-colors"
            >
              +81 80-5166-2345
            </a>

            {/* Contact Us Button - Zyner Style (rounded-xl) */}
            <Link 
              href="/contact" 
              prefetch={true}
              className="hidden sm:inline-flex bg-[#FF4B33] hover:bg-[#E5422B] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium text-[13px] shadow-[0_2px_10px_rgba(255,75,51,0.2)] hover:shadow-[0_4px_14px_rgba(255,75,51,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW (Two Separate Capsules) --- */}
      <div className="md:hidden w-full flex items-center justify-between pointer-events-none">
        
        {/* Left: Logo Capsule with liquid glass effect */}
        <div className="pointer-events-auto flex items-center">
          <Link 
            href="/" 
            prefetch={true}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white/95 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer"
          >
            <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center justify-center bg-[#0b101e] border border-black/5 flex-shrink-0 shadow-sm">
              <img 
                src="/logo.PNG" 
                alt="Nexca Logo" 
                className="w-full h-full object-cover scale-110" 
              />
            </div>
            <span className="text-[16px] font-extrabold text-gray-900 tracking-tight pr-0.5">
              Nexca
            </span>
          </Link>
        </div>

        {/* Right: Hamburger Capsule */}
        <div className="pointer-events-auto">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center justify-center w-[46px] h-[46px] rounded-full bg-white/80 hover:bg-white backdrop-blur-2xl border border-white/60 text-gray-800 shadow-[0_8px_32px_0_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.8)] transition-all active:scale-95 cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <Menu size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Modern Slide-in Side Drawer (Mobile Only) */}
      <div 
        className={`md:hidden fixed inset-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-[85vw] max-w-[360px] bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden bg-[#0b101e] flex items-center justify-center">
                <img src="/logo.PNG" alt="Nexca Logo" className="w-full h-full object-cover scale-110" />
              </div>
              <span className="text-lg font-extrabold text-gray-900 tracking-tight">Nexca</span>
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm"
              aria-label="Close Menu"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col px-8 py-8 flex-grow gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-3xl sm:text-4xl font-extrabold tracking-tight uppercase transition-colors flex items-center gap-4 ${
                    active ? 'text-[#FF6B35]' : 'text-gray-900 hover:text-gray-600'
                  }`}
                >
                  {link.name}
                  {active && <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]"></span>}
                </Link>
              );
            })}
            <Link
              href="/contact"
              prefetch={true}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight uppercase transition-colors flex items-center gap-4 ${
                isActive('/contact') ? 'text-[#FF6B35]' : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              CONTACT US
              {isActive('/contact') && <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]"></span>}
            </Link>
          </div>

          {/* Drawer Footer */}
          <div className="p-8 mt-auto">
            <div className="border-t border-gray-100 pt-8 mb-2">
              <h4 className="text-base font-extrabold text-gray-900 mb-1">Nexca Motors</h4>
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">Importing Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
