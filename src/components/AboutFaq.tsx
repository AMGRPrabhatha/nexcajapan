"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to import a vehicle from Japan?",
    answer: "Shipping and port delivery typically take between 2 to 4 weeks depending on the destination port, shipping vessel schedules, and customs clearance procedures."
  },
  {
    question: "What payment methods are available?",
    answer: "We accept secure Bank Transfers, Letters of Credit (L/C), and other standard corporate payment methods to ensure a transparent and safe transaction."
  },
  {
    question: "Do you handle all the customs clearing process?",
    answer: "Yes, we provide end-to-end support including export certificates, translation, bill of lading, and coordination with local clearance agents."
  },
  {
    question: "Are the Japanese auction grades reliable?",
    answer: "Japanese auction inspection sheets are internationally recognized for their strict scoring system and high accuracy regarding vehicle condition, mileage, and interior/exterior grading."
  },
  {
    question: "Can I order a specific custom vehicle configuration?",
    answer: "Absolutely. You can request specific makes, models, trim levels, colors, and auction grading criteria, and our sourcing team will bid on and secure matching vehicles for you."
  }
];

export default function AboutFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default open to item 1 (matching screenshot)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 md:py-28 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-none mb-2">
              Frequently Asked
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-300 tracking-tight leading-none mb-6">
              Question
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
              Find answers to the most common questions about our vehicle importing process, including bidding, payment, and delivery details.
            </p>
          </div>

          {/* Right Column: FAQ Accordion List */}
          <div className="lg:col-span-7 divide-y divide-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-5">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                  >
                    <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-black transition-colors">
                      {faq.question}
                    </span>
                    <span className="text-gray-400 group-hover:text-gray-900 flex-shrink-0 transition-colors">
                      {isOpen ? <Minus size={20} strokeWidth={2} /> : <Plus size={20} strokeWidth={2} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-8">
                      <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
