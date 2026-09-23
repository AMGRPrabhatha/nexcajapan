import Link from 'next/link';
import AboutFaq from '@/components/AboutFaq';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Floating Rounded Hero Banner (sltraveler / Bloomora style) */}
      <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 md:px-5 pt-[72px] sm:pt-[80px] pb-5">
        <div 
          className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[480px] rounded-[24px] sm:rounded-[36px] md:rounded-[42px] flex items-center justify-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/about-hero.jpg')" }}
        >
          {/* Soft Gradient Overlay for image clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/25"></div>

          {/* Hero Centered Content */}
          <div className="relative z-10 px-6 sm:px-12 py-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
              Our Story
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium max-w-xl mx-auto leading-relaxed drop-shadow">
              Passionate about sourcing and delivering the pinnacle of Japanese automotive engineering to the world.
            </p>
          </div>
        </div>
      </div>

      {/* Bento Grid Service Feature Section (//OUR SERVICE) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-gray-100">
        
        {/* Top Tag Badge & Header */}
        <div className="mb-12">
          <span className="text-gray-400 font-bold text-xs tracking-wider uppercase block mb-3">
           
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Explore <span className="text-gray-400">endless options</span> with our service
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
            Discover a myriad of choices available through our service, offering limitless possibilities for your exploration and enjoyment.
          </p>
        </div>

        {/* Mobile Slider Layout (Visible up to lg) */}
        <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 hide-scrollbar">
          {/* Card 1 */}
          <div className="w-[85vw] flex-shrink-0 snap-center relative rounded-3xl overflow-hidden shadow-sm group h-[280px] bg-gray-900">
            <img 
              src="/service-1.png" 
              alt="Comprehensive Export Support" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                Comprehensive Travel &amp; Import Support
              </h3>
              <p className="text-gray-200 text-xs font-medium leading-relaxed">
                24/7 customer service to assist you before, during, and after your vehicle import.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[85vw] flex-shrink-0 snap-center relative rounded-3xl overflow-hidden shadow-sm group h-[280px] bg-gray-900">
            <img 
              src="/service-2.png" 
              alt="Expert Vehicle Advice" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                Expert Vehicle Advice
              </h3>
              <p className="text-gray-200 text-xs font-medium">
                Tips and guides to enhance your Japanese car import experience.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[85vw] flex-shrink-0 snap-center relative rounded-3xl overflow-hidden shadow-sm group h-[280px] bg-gray-900">
            <img 
              src="/service-3.jpg" 
              alt="Diverse Destination Ports" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                Diverse Destinations
              </h3>
              <p className="text-gray-200 text-xs font-medium">
                Access to a wide range of domestic and international destination ports.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Bento Grid Layout (Visible on lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6">
          {/* Left Column: Large Hero Card */}
          <div className="col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-sm group h-[500px] bg-gray-900">
              <img 
                src="/service-1.png" 
                alt="Comprehensive Export Support" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                  Comprehensive Travel &amp; Import Support
                </h3>
                <p className="text-gray-200 text-sm font-medium leading-relaxed">
                  24/7 customer service to assist you before, during, and after your vehicle import.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Stacked Cards */}
          <div className="col-span-6 flex flex-col gap-6">
            {/* Top Card: Expert Vehicle Advice */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm group h-[238px] bg-gray-900">
              <img 
                src="/service-2.png" 
                alt="Expert Vehicle Advice" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                  Expert Vehicle Advice
                </h3>
                <p className="text-gray-200 text-sm font-medium">
                  Tips and guides to enhance your Japanese car import experience.
                </p>
              </div>
            </div>

            {/* Bottom Card: Diverse Destination Ports */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm group h-[238px] bg-gray-900">
              <img 
                src="/service-3.jpg" 
                alt="Diverse Destination Ports" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                  Diverse Destinations
                </h3>
                <p className="text-gray-200 text-sm font-medium">
                  Access to a wide range of domestic and international destination ports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section (nexcajapan.com style) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-b border-gray-100 text-center">
        
        {/* Top Centered Pill Badge */}
        <div className="mb-10 flex justify-center">
        
        </div>

        {/* Main Headline with Mixed Styling */}
        <h2 className="text-[19px] sm:text-2xl md:text-4xl font-bold text-gray-500 max-w-5xl mx-auto leading-[1.4] tracking-tight mb-10 sm:mb-16">
          We're a group of automotive professionals, direct importers,{" "}
          <span className="text-gray-900">and luxury vehicle specialists working together to deliver vehicles that matter.</span>{" "}
          <span className="text-gray-900">From the first inquiry to the final handover, we take care of the details</span>{" "}
          so your import process feels effortless and personal.
        </h2>

        {/* 3 Rounded Studio Vehicle Cards */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-auto sm:px-0 sm:grid sm:grid-cols-3 md:gap-6 max-w-5xl hide-scrollbar">
          {/* Card 1: Mercedes SUV in Garage */}
          <div className="rounded-3xl overflow-hidden shadow-sm h-[240px] sm:h-auto sm:aspect-[4/3] group hover:shadow-md transition-shadow relative bg-gray-100 min-w-[70vw] snap-center sm:min-w-0 sm:snap-align-none flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80" 
              alt="Luxury SUV" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 2: Blue Audi Sedan */}
          <div className="rounded-3xl overflow-hidden shadow-sm h-[240px] sm:h-auto sm:aspect-[4/3] group hover:shadow-md transition-shadow relative bg-gray-100 min-w-[70vw] snap-center sm:min-w-0 sm:snap-align-none flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=800&q=80" 
              alt="Performance Sedan" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 3: Detailed Engine/Wheel */}
          <div className="rounded-3xl overflow-hidden shadow-sm h-[240px] sm:h-auto sm:aspect-[4/3] group hover:shadow-md transition-shadow relative bg-gray-100 min-w-[70vw] snap-center sm:min-w-0 sm:snap-align-none flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80" 
              alt="Precision Engineering" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </section>

      {/* Showcase / Destination List Section */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Badge */}
          

          {/* Main Headline */}
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-[1.25] text-gray-900 max-w-6xl mb-16 uppercase">
            DRIVE EXCELLENCE WITH NEXCA MOTORS: YOUR TRUSTED GATEWAY TO JAPANESE AUTOMOTIVE ENGINEERING, WHERE{" "}
            <span className="text-gray-400 font-medium">
              EVERY VEHICLE DELIVERS UNCOMPROMISED QUALITY AND PERFORMANCE.
            </span>
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            
            {/* Left Column: Core Export Capabilities */}
            <div className="lg:col-span-6 space-y-2">
              
              {/* Row 1 */}
              <Link 
                href="/shop" 
                className="border-b border-gray-200 py-6 flex items-center justify-between group hover:border-black transition-colors block"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-900 group-hover:translate-x-1 group-hover:text-orange-500 transition-all">
                  Japanese Auction Direct Bidding
                </span>
                <div className="flex items-center gap-2">
                  <span className="border border-gray-800 text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    AUCTIONS
                  </span>
                  <span className="border border-gray-300 text-gray-600 px-2.5 py-1 rounded-full text-xs font-semibold">
                    140+ VENUES
                  </span>
                </div>
              </Link>

              {/* Row 2 */}
              <Link 
                href="/shop" 
                className="border-b border-gray-200 py-6 flex items-center justify-between group hover:border-black transition-colors block"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-900 group-hover:translate-x-1 group-hover:text-orange-500 transition-all">
                  JDM Sports &amp; Legendary Classics
                </span>
                <div className="flex items-center gap-2">
                  <span className="border border-gray-800 text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    JDM ICONS
                  </span>
                  <span className="border border-gray-300 text-gray-600 px-2.5 py-1 rounded-full text-xs font-semibold">
                    VERIFIED
                  </span>
                </div>
              </Link>

              {/* Row 3 */}
              <Link 
                href="/shop" 
                className="border-b border-gray-200 py-6 flex items-center justify-between group hover:border-black transition-colors block"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-900 group-hover:translate-x-1 group-hover:text-orange-500 transition-all">
                  Luxury Sedans &amp; Prestige 4WD SUVs
                </span>
                <div className="flex items-center gap-2">
                  <span className="border border-gray-800 text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    LUXURY &amp; 4X4
                  </span>
                  <span className="border border-gray-300 text-gray-600 px-2.5 py-1 rounded-full text-xs font-semibold">
                    GRADE 4.5+
                  </span>
                </div>
              </Link>

              {/* Row 4 */}
              <Link 
                href="/contact" 
                className="border-b border-gray-200 py-6 flex items-center justify-between group hover:border-black transition-colors block"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-900 group-hover:translate-x-1 group-hover:text-orange-500 transition-all">
                  Worldwide Ro-Ro Shipping &amp; Customs
                </span>
                <div className="flex items-center gap-2">
                  <span className="border border-gray-800 text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    LOGISTICS
                  </span>
                  <span className="border border-gray-300 text-gray-600 px-2.5 py-1 rounded-full text-xs font-semibold">
                    GLOBAL
                  </span>
                </div>
              </Link>

            </div>

            {/* Right Column: Image with floating circle button */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80" 
                  alt="Nexca Vehicle Showcase" 
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Floating Orange Circle Arrow Button */}
              <Link 
                href="/shop" 
                className="absolute -left-6 bottom-8 w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-xl hover:scale-110 hover:bg-orange-600 transition-all z-10"
              >
                ↗
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <AboutFaq />
    </div>
  );
}
