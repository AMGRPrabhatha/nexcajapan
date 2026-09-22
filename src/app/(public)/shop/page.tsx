import { createClient } from '@/lib/supabase/server';
import ShopClient from '@/components/ShopClient';

export const dynamic = 'force-dynamic';

export default async function ShopPage() {
  const supabase = await createClient();
  
  let vehicles: any[] = [];
  try {
    const fetchPromise = supabase
      .from('vehicles')
      .select('*, vehicle_images(image_url, is_main)')
      .eq('status', 'available')
      .order('created_at', { ascending: false });

    const timeoutPromise = new Promise<{ data: any[] | null; error: any }>((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), 50)
    );

    const res = await Promise.race([fetchPromise, timeoutPromise]);
    if (res?.data) {
      vehicles = res.data;
    }
  } catch (err) {
    console.warn("Shop page: Supabase fetch timed out or offline, falling back gracefully.");
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Floating Rounded Hero Banner (sltraveler / Bloomora style) */}
      <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 md:px-5 pt-[72px] sm:pt-[80px] pb-5">
        <div 
          className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[480px] rounded-[24px] sm:rounded-[36px] md:rounded-[42px] flex items-center justify-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/Inventory.webp')" }}
        >
          {/* Soft Gradient Overlay for image clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/25"></div>

          {/* Hero Centered Content */}
          <div className="relative z-10 px-6 sm:px-12 py-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
              Our Inventory
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium max-w-xl mx-auto leading-relaxed drop-shadow">
              Browse our curated collection of verified Japanese vehicles, sports classics, and luxury SUVs ready for global shipping.
            </p>
          </div>
        </div>
      </div>

      <ShopClient initialVehicles={vehicles || []} />
    </div>
  );
}
