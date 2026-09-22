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
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none py-3 sm:py-4 px-3 sm:px-5 md:px-6">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between pointer-events-none">
        
        {/* Left: Logo Capsule with liquid glass effect */}
        <div className="flex-shrink-0 flex items-center pointer-events-auto">
          <Link 
            href="/" 
            prefetch={true}
            className="flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/80 hover:bg-white/95 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.15)] transition-all duration-300 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shadow-md group-hover:scale-105 transition-transform bg-[#0b101e] border border-black/5 flex-shrink-0">
              <img 
                src="/logo.PNG" 
                alt="Nexca Logo" 
                className="w-full h-full object-cover scale-110" 
              />
            </div>
            <span className="text-base sm:text-[17px] font-extrabold text-gray-900 tracking-tight">
              Nexca
            </span>
          </Link>
        </div>
        
        {/* Center: Desktop Menu Capsule (Liquid Frosted Glass) */}
        <nav className="hidden md:flex items-center bg-white/75 hover:bg-white/85 backdrop-blur-2xl border border-white/60 rounded-full px-6 lg:px-8 py-2 sm:py-2.5 space-x-1 lg:space-x-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.8)] pointer-events-auto transition-all duration-300">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                prefetch={true}
                className={`relative px-4 py-2 rounded-full text-[14.5px] font-semibold transition-all duration-200 cursor-pointer ${
                  active
                    ? 'text-gray-950 bg-black/5 font-bold shadow-inner'
                    : 'text-gray-700 hover:text-black hover:bg-black/[0.03]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Contact Us Button + Mobile Hamburger */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <Link 
            href="/contact" 
            prefetch={true}
            className="hidden md:inline-flex bg-[#FF6B35] hover:bg-[#E85D2A] text-white px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3.5 rounded-full font-bold text-xs sm:text-[12.5px] tracking-wider uppercase shadow-[0_6px_22px_rgba(255,107,53,0.4)] hover:shadow-[0_8px_28px_rgba(255,107,53,0.5)] hover:scale-[1.02] active:scale-95 border border-white/20 transition-all duration-200 cursor-pointer"
          >
            CONTACT US
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-2xl border border-white/60 text-gray-800 shadow-md transition-all active:scale-95 cursor-pointer ml-1"
            aria-label="Open Navigation Menu"
          >
            <Menu size={20} />
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
