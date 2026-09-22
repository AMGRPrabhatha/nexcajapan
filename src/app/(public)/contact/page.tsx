"use client";

import { MessageSquare, HelpCircle, MapPin, Phone, Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "How does the vehicle import process work?",
    answer: "The process starts by selecting a vehicle from our inventory or Japanese auctions. Once a deposit is made, we handle the purchase, pre-shipment inspections, and arrange the shipping to your destination port. You will receive all necessary export documents via DHL."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We primarily accept secure Telegraphic Transfers (T/T) to our official Japanese bank account. For corporate clients and bulk orders, Letter of Credit (L/C) options are available upon request."
  },
  {
    question: "Do you provide shipping insurance?",
    answer: "Yes, marine insurance can be added to your invoice upon request. It covers total loss or major damage while the vehicle is in transit on the vessel."
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping duration depends on the destination port. For example, shipments to Mombasa (Kenya) or Dar es Salaam (Tanzania) typically take 25-35 days, while shipments to the UK or Australia take 35-45 days."
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner (Preserved) */}
      <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 md:px-5 pt-[72px] sm:pt-[80px] pb-5">
        <div 
          className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[480px] rounded-[24px] sm:rounded-[36px] md:rounded-[42px] flex items-center justify-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/25"></div>
          <div className="relative z-10 px-6 sm:px-12 py-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium max-w-xl mx-auto leading-relaxed drop-shadow">
              Have questions about vehicle sourcing, shipping, or auction bidding? Our export specialists in Japan are here to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* New Redesign Content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#3B63F6] font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full mb-4">
            Contact us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Get in touch with our team
          </h2>
          <p className="text-gray-500 text-lg md:text-xl">
            We have the team and know-how to help you import your next vehicle faster.
          </p>
        </div>

        {/* Global Map Section */}
        <div className="relative w-full max-w-5xl mx-auto mb-20 flex justify-center">
          <img 
            src="/contact-map.png" 
            alt="Global Network Map" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          
          {/* Sales */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col shadow-sm">
            <div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center mb-6">
              <MessageSquare className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Chat to sales</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">Speak to our friendly team.</p>
            <a href="mailto:nexcainfo@gmail.com" className="w-full py-2.5 rounded-lg bg-[#3B63F6] hover:bg-blue-600 text-white text-sm font-semibold text-center transition-colors">
              nexcainfo@gmail.com
            </a>
          </div>

          {/* Support */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col shadow-sm">
            <div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center mb-6">
              <HelpCircle className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Chat to support</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">We're here to help.</p>
            <a href="mailto:nexcainfo@gmail.com" className="w-full py-2.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-semibold text-center transition-colors">
              nexcainfo@gmail.com
            </a>
          </div>

          {/* Visit */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col shadow-sm">
            <div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center mb-6">
              <MapPin className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Visit us</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">Visit our office HQ.</p>
            <a href="https://www.google.com/maps/search/?api=1&query=1+Higashitsukiji-cho,+Minato+ku,+Nagoya,+Aichi+455-0023,+Japan" target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-semibold text-center transition-colors">
              View on Google Maps
            </a>
          </div>

          {/* Call */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col shadow-sm">
            <div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center mb-6">
              <Phone className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Call us</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">Mon-Sat from 9am to 6pm.</p>
            <a href="tel:+818051662345" className="w-full py-2.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-semibold text-center transition-colors">
              +81 80-5166-2345
            </a>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
            {faqs.map((faq, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div 
                  className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center shrink-0 cursor-pointer hover:bg-gray-50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-gray-400" />
                  ) : (
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <div>
                  <h4 
                    className="font-bold text-gray-900 text-base mb-2 cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    {faq.question}
                  </h4>
                  {openFaq === index && (
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-16">
            <button className="px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Load more
            </button>
          </div>

          {/* Still Have Questions Footer Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
              {/* Avatar group */}
              <div className="flex -space-x-3 shrink-0">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Team" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Team" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Team" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Still have questions?</h4>
                <p className="text-gray-500 text-sm">
                  Can't find the answer you're looking for? Please <a href="https://wa.me/818051662345" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline underline-offset-2">chat to our friendly team</a>.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <a href="/contact" className="flex-1 md:flex-none px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-center">
                Documentation
              </a>
              <a href="https://wa.me/818051662345" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none px-6 py-2.5 bg-[#3B63F6] hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors text-center">
                Get in touch
              </a>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
