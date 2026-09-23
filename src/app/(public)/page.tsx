import { createClient } from '@/lib/supabase/server';
import FeaturedVehiclesClient from '@/components/FeaturedVehiclesClient';
import Link from 'next/link';
import Image from 'next/image';
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const supabase = await createClient();
  
  let featuredVehicles: any[] = [];
  try {
    const fetchPromise = supabase
      .from('vehicles')
      .select('*, vehicle_images(image_url, is_main)')
      .eq('status', 'available')
      .order('created_at', { ascending: false })
      .limit(4);

    const timeoutPromise = new Promise<{ data: any[] | null; error: any }>((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), 50)
    );

    const res = await Promise.race([fetchPromise, timeoutPromise]);
    if (res?.data) {
      featuredVehicles = res.data;
    }
  } catch (err) {
    console.warn("Home page: Supabase fetch timed out or offline, using fallback.");
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Floating Rounded Hero Container (Bloomora / sltraveler style) */}
      <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 md:px-5 pt-[72px] sm:pt-[80px] pb-4 sm:pb-6">
        <div 
          className="relative min-h-[380px] sm:min-h-[440px] md:h-[calc(100vh-100px)] md:min-h-[680px] lg:min-h-[720px] max-h-[820px] rounded-[24px] sm:rounded-[36px] md:rounded-[42px] flex items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          {/* Soft Gradient Overlay for image clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent"></div>
          
          {/* Hero Content (Left-aligned) */}
          <div className="relative z-10 px-6 sm:px-12 md:px-16 py-14 sm:py-18 md:py-24 max-w-3xl text-left">
            <h1 className="text-3xl sm:text-5xl md:text-[56px] font-extrabold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-lg">
              Discover Excellence <br /> with Nexca
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-10 max-w-xl font-medium leading-relaxed drop-shadow">
              Experience the ultimate driving performance with top-tier vehicles. Explore breathtaking JDM models, enjoy luxury imports, and create magical driving memories through carefully curated sourcing.
            </p>
            
            <div className="flex items-center gap-6">
              {/* Primary Action Button: White pill with blue right arrow */}
              <Link 
                href="/shop" 
                className="inline-flex items-center gap-4 bg-white text-gray-900 font-bold text-xs tracking-wider uppercase pl-6 pr-2 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-all group"
              >
                <span>EXPLORE NOW</span>
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </Link>

              {/* Secondary Link: Underlined text */}
              <Link 
                href="/about" 
                className="text-white font-bold text-xs tracking-widest uppercase hover:underline underline-offset-8 transition-all drop-shadow py-2"
              >
                OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Designed like eutours.eu */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-8 md:pb-12">
        {/* Heading & Learn More Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            <span className="text-gray-400">About  </span>Nexca
          </h2>
          <div>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 bg-orange-100/80 hover:bg-orange-200/80 text-orange-600 font-bold text-sm px-6 py-3 rounded-full transition-all"
            >
              Learn More &gt;&gt;&gt;
            </Link>
          </div>
        </div>

        {/* Paragraphs */}
        <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mb-14">
          <p>
            At Nexca Motors, we believe exceptional vehicles deserve exceptional sourcing. With years of experience, we curate bespoke Japanese vehicle imports that are as reliable as they are breathtaking.
          </p>
          <p>
            From the first moment you select your vehicle to its arrival at your destination port, our dedicated team manages every detail with precision and transparency ensuring a journey defined by quality assurance, exclusivity, and peace of mind. Renowned for our personalized service and unwavering commitment to excellence, we transform vehicle buying into extraordinary experiences and lasting memories.
          </p>
          <p>
            At Nexca Motors, your vehicle import is more than a transaction—it is a carefully crafted experience, designed around you.
          </p>
        </div>

        {/* 01 & 02 Cards */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 hide-scrollbar">
          {/* Card 01 */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow min-w-[85vw] sm:min-w-0 snap-center md:snap-align-none">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-6 bg-gray-100">
              <Image 
                src="/gtr.webp" 
                alt="Japanese Car Sourcing" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-900 text-3xl font-extrabold px-3 py-1 rounded-xl shadow-sm">
                01
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Curated Vehicle Sourcing
            </h3>
            <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed">
              We don't just export vehicles; we create journeys tailored to your dreams, ensuring every drive is unforgettable.
            </p>
          </div>

          {/* Card 02 - Global Export & Logistics with about.jpg */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow min-w-[85vw] sm:min-w-0 snap-center md:snap-align-none">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-6 bg-gray-100">
              <img 
                src="/about.jpg" 
                alt="Worldwide Vehicle Export Network" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-900 text-3xl font-extrabold px-3 py-1 rounded-xl shadow-sm">
                02
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Worldwide Export &amp; Logistics Network
            </h3>
            <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed">
              With our trusted global network, we export premium Japanese vehicles seamlessly to clients across Canada, UK, Australia, Sri Lanka, UAE, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section (Live client-synced) */}
      <FeaturedVehiclesClient initialVehicles={featuredVehicles} />

      {/* 3-Column Service Feature Banners Section */}
      <section className="w-full flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 mt-10 hide-scrollbar pb-4 md:pb-0">
        {/* Column 1 - Red Range Rover */}
        <Link href="/shop" className="group relative h-[380px] md:h-[460px] overflow-hidden block min-w-[90vw] snap-center md:min-w-0 md:snap-align-none">
          <img 
            src="/service-1.png" 
            alt="Japanese Auction & Vehicle Sourcing" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
            <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
              Japanese Auction &amp; Vehicle Sourcing
            </h3>
          </div>
        </Link>

        {/* Column 2 - Jeep Renegade */}
        <Link href="/contact" className="group relative h-[380px] md:h-[460px] overflow-hidden block border-l border-white/10 min-w-[90vw] snap-center md:min-w-0 md:snap-align-none">
          <img 
            src="/service-2.png" 
            alt="Customs Clearance & Documentation" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
            <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
              Customs Clearance &amp; Export Support
            </h3>
          </div>
        </Link>

        {/* Column 3 - White Rivian SUV */}
        <Link href="/contact" className="group relative h-[380px] md:h-[460px] overflow-hidden block border-l border-white/10 min-w-[90vw] snap-center md:min-w-0 md:snap-align-none">
          <img 
            src="/service-3.jpg" 
            alt="Global Shipping & Logistics" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
            <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
              Global Port &amp; Worldwide Shipping
            </h3>
          </div>
        </Link>
      </section>

      {/* What You Can't Find Section (nexcajapan.com style) */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading & Subheading */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4 uppercase">
              What You Can't Find At Your <br className="hidden md:block" /> Local Dealer, Can Be Found Here
            </h2>
            <p className="text-gray-600 text-base md:text-lg font-medium flex items-center justify-center gap-2">
              Premium Imports In The <span className="bg-black text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">World</span>
            </p>
          </div>

          {/* 3 Categories Cards Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:gap-6 mb-16 hide-scrollbar">
            {/* Card 1 - JDM Sports */}
            <Link href="/shop" className="group relative h-[440px] md:h-[480px] rounded-2xl overflow-hidden shadow-sm block bg-gray-100 min-w-[85vw] sm:min-w-0 snap-center md:snap-align-none">
              <img 
                src="/sports.jpg" 
                alt="JDM Sports" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl md:text-3xl font-extrabold text-white tracking-tight uppercase leading-tight drop-shadow-md">
                  JDM <br /> SPORTS
                </h3>
              </div>
            </Link>

            {/* Card 2 - Luxury SUVs */}
            <Link href="/shop" className="group relative h-[440px] md:h-[480px] rounded-2xl overflow-hidden shadow-sm block bg-gray-100 min-w-[85vw] sm:min-w-0 snap-center md:snap-align-none">
              <img 
                src="/suv.jpg" 
                alt="Luxury SUVs" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl md:text-3xl font-extrabold text-white tracking-tight uppercase leading-tight drop-shadow-md">
                  LUXURY <br /> SUVS
                </h3>
              </div>
            </Link>

            {/* Card 3 - Premium Sedans */}
            <Link href="/shop" className="group relative h-[440px] md:h-[480px] rounded-2xl overflow-hidden shadow-sm block bg-gray-100 min-w-[85vw] sm:min-w-0 snap-center md:snap-align-none">
              <img 
                src="/sedans.jpg" 
                alt="Premium Sedans" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl md:text-3xl font-extrabold text-white tracking-tight uppercase leading-tight drop-shadow-md">
                  PREMIUM <br /> SEDANS
                </h3>
              </div>
            </Link>
          </div>

          {/* Bottom Stats & CTA Banner */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pt-8 border-t border-gray-100">
            <div className="max-w-xl">
              <p className="text-gray-900 font-bold text-base md:text-lg leading-snug mb-6">
                Dive Into Exciting Journeys As Nexca Opens Doors To Premium Vehicles, Whether It's High-Performance JDM Legends Or Exploring Luxury SUVs.
              </p>
              <Link 
                href="/shop" 
                className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white font-bold text-xs tracking-widest uppercase px-7 py-4 rounded-full transition-all shadow-md group"
              >
                SEE ALL VEHICLES
                <span className="text-base leading-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </Link>
            </div>


          </div>

        </div>
      </section>

      {/* Exploring Best Selling Cars Makes Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-xl">
              Exploring best selling cars makes
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
              Corporate entities should engage in strategic initiatives to boost brand visibility and connect with their audiences. This includes digital marketing, community outreach, and innovative partnerships that reflect their values.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="space-y-4">
            
            {/* Top Row: 2 Cards (BMW & Toyota) */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 hide-scrollbar">
              
              {/* BMW Card */}
              <Link href="/shop?make=BMW" className="group relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden block bg-gray-900 min-w-[85vw] snap-center sm:min-w-0 sm:snap-align-none">
                <Image 
                  src="/bmw_car.webp" 
                  alt="BMW" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                
                {/* Bottom Left Info Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center font-bold text-sm shadow-md border border-white/10">
                    B
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base md:text-lg leading-tight">BMW</h3>
                    <p className="text-gray-300 text-xs font-medium">from $50K</p>
                  </div>
                </div>

                {/* Bottom Right Arrow */}
                <div className="absolute bottom-6 right-6 text-white text-lg font-semibold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </div>
              </Link>

              {/* Toyota Card */}
              <Link href="/shop?make=Toyota" className="group relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden block bg-gray-900 min-w-[85vw] snap-center sm:min-w-0 sm:snap-align-none">
                <Image 
                  src="/toyota.webp" 
                  alt="Toyota" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                
                {/* Bottom Left Info Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF3B30] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    T
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base md:text-lg leading-tight">Toyota</h3>
                    <p className="text-gray-300 text-xs font-medium">from $50K</p>
                  </div>
                </div>

                {/* Bottom Right Arrow */}
                <div className="absolute bottom-6 right-6 text-white text-lg font-semibold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </div>
              </Link>

            </div>

            {/* Bottom Row: 3 Cards (Mercedes-Benz, Lexus, Ford) */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 hide-scrollbar">
              
              {/* Mercedes-Benz Card */}
              <Link href="/shop?make=Mercedes" className="group relative h-[320px] md:h-[360px] rounded-2xl overflow-hidden block bg-gray-900 min-w-[85vw] snap-center sm:min-w-0 sm:snap-align-none">
                <Image 
                  src="/benz.webp" 
                  alt="Mercedes - Benz" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                
                {/* Bottom Left Info Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm shadow-md">
                    M
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">Mercedes-Benz</h3>
                    <p className="text-gray-300 text-xs font-medium">from $50K</p>
                  </div>
                </div>

                {/* Bottom Right Arrow */}
                <div className="absolute bottom-6 right-6 text-white text-lg font-semibold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </div>
              </Link>

              {/* Lexus Card */}
              <Link href="/shop?make=Lexus" className="group relative h-[320px] md:h-[360px] rounded-2xl overflow-hidden block bg-gray-900 min-w-[85vw] snap-center sm:min-w-0 sm:snap-align-none">
                <Image 
                  src="/lexus.webp" 
                  alt="Lexus" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                
                {/* Bottom Left Info Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-900 flex items-center justify-center font-bold text-sm shadow-md border border-white/20">
                    L
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">Lexus</h3>
                    <p className="text-gray-300 text-xs font-medium">from $50K</p>
                  </div>
                </div>

                {/* Bottom Right Arrow */}
                <div className="absolute bottom-6 right-6 text-white text-lg font-semibold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </div>
              </Link>

              {/* Ford Card */}
              <Link href="/shop?make=Ford" className="group relative h-[320px] md:h-[360px] rounded-2xl overflow-hidden block bg-gray-900 min-w-[85vw] snap-center sm:min-w-0 sm:snap-align-none">
                <Image 
                  src="/ford.webp" 
                  alt="Ford" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                
                {/* Bottom Left Info Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#003478] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    F
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">Ford</h3>
                    <p className="text-gray-300 text-xs font-medium">from $50K</p>
                  </div>
                </div>

                {/* Bottom Right Arrow */}
                <div className="absolute bottom-6 right-6 text-white text-lg font-semibold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </div>
              </Link>
              
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
