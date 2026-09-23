import { createClient } from '@/lib/supabase/server';
import GalleryClient from '@/components/GalleryClient';

export const dynamic = 'force-dynamic';

export default async function GalleryPage() {
  const supabase = await createClient();

  let galleryItems = [];
  try {
    const fetchPromise = supabase
      .from('gallery_items')
      .select('*')
      .order('created_at', { ascending: false });

    const timeoutPromise = new Promise<{ data: any[] | null; error: any }>((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), 50)
    );

    const res = await Promise.race([fetchPromise, timeoutPromise]);
    if (res?.data) {
      galleryItems = res.data;
    }
  } catch (err) {
    console.warn("gallery_items table not found, timed out or offline, using fallback sample items.");
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Floating Rounded Hero Banner (sltraveler / Bloomora style) */}
      <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 md:px-5 pt-[72px] sm:pt-[80px] pb-5">
        <div 
          className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[480px] rounded-[24px] sm:rounded-[36px] md:rounded-[42px] flex items-center justify-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/gallery.jpg')" }}
        >
          {/* Soft Gradient Overlay for image clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/25"></div>

          {/* Hero Centered Content */}
          <div className="relative z-10 px-6 sm:px-12 py-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
              Vehicle Gallery
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium max-w-xl mx-auto leading-relaxed drop-shadow">
              A curated showcase of verified Japanese vehicles, classic JDM imports, and luxury SUVs sourced and exported worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Section Intro */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-gray-400 font-bold text-xs tracking-wider uppercase block mb-2">
            RECENT INSPECTIONS &amp; DELIVERIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Explore Our Sourced Vehicles
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Hover over any vehicle to view images. Cards automatically cycle through multiple angles.
          </p>
        </div>

        {/* Gallery Client Grid */}
        <GalleryClient initialItems={galleryItems} />
      </div>
    </div>
  );
}
