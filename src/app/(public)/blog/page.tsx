"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogPosts';

const CATEGORIES = ['All', 'Market Trends', 'JDM Classics', 'Import Guide', 'Auction Guides', 'Logistics'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Floating Rounded Hero Banner (sltraveler / Bloomora style) */}
      <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 md:px-5 pt-[72px] sm:pt-[80px] pb-5">
        <div 
          className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[480px] rounded-[24px] sm:rounded-[36px] md:rounded-[42px] flex items-center justify-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/blog.jpg')" }}
        >
          {/* Soft Gradient Overlay for image clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/25"></div>

          {/* Hero Centered Content */}
          <div className="relative z-10 px-6 sm:px-12 py-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
              Our Blog
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium max-w-xl mx-auto leading-relaxed drop-shadow">
              Expert insights, auction guides, Japanese import regulations, and market trends from our automotive specialists.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-gray-950 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.id}`}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                    <Tag className="w-3 h-3 text-[#FF6B35]" />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-gray-400 text-xs font-medium mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-[#FF6B35] transition-colors mb-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#FF6B35] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <BookOpen className="w-4 h-4 text-gray-300 group-hover:text-[#FF6B35] transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter / Custom Order Banner (White Liquid Glass Style) */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-white/80 hover:bg-white/95 backdrop-blur-2xl border border-gray-200/80 p-8 sm:p-12 md:p-14 relative overflow-hidden shadow-[0_12px_40px_0_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.9)] transition-all duration-300">
          {/* Subtle Ambient Glowing Orbs */}
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-orange-500/[0.08] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-blue-500/[0.06] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2.5 block">
              // JAPAN CAR SOURCING
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
              Looking for a Specific Model from Japan Auctions?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
              We provide access to over 150,000 vehicles weekly across all major Japanese auto auctions. Let us source your dream car today.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-[#FF6B35] hover:bg-[#E85D2A] text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-[0_6px_22px_rgba(255,107,53,0.35)] hover:shadow-[0_8px_28px_rgba(255,107,53,0.45)] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Inquire With Specialists
              </Link>
              <Link
                href="/shop"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm text-xs sm:text-[13px] font-bold uppercase tracking-wider hover:border-gray-300 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                View Available Inventory
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
