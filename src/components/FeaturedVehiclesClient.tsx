"use client";

import { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import VehicleCard from '@/components/VehicleCard';
import Link from 'next/link';

export default function FeaturedVehiclesClient({ initialVehicles }: { initialVehicles: any[] }) {
  const [vehicles, setVehicles] = useState<any[]>(initialVehicles || []);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const fetchFeatured = async () => {
      let combined: any[] = [];

      // 1. Check localStorage for newly added/updated vehicles
      try {
        const local = JSON.parse(localStorage.getItem('nexca_local_vehicles') || '[]');
        if (Array.isArray(local)) {
          combined = [...local.filter((v: any) => v.status === 'available' || !v.status)];
        }
      } catch (e) {}

      // 2. Fetch live latest vehicles directly from Supabase in browser
      try {
        const { data, error } = await supabase
          .from('vehicles')
          .select('*, vehicle_images(image_url, is_main)')
          .eq('status', 'available')
          .order('created_at', { ascending: false })
          .limit(4);

        if (!error && data && data.length > 0) {
          const supabaseIds = new Set(data.map((v: any) => v.id));
          const localOnly = combined.filter((v: any) => !supabaseIds.has(v.id));
          combined = [...data, ...localOnly];
        }
      } catch (err) {
        console.warn("Client featured vehicles fetch warning:", err);
      } finally {
        if (combined.length > 0) {
          setVehicles(combined.slice(0, 4));
        }
      }
    };

    fetchFeatured();
  }, []);

  if (vehicles.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Featured Vehicles</h2>
        <Link href="/shop" className="text-sm font-semibold text-gray-800 hover:text-black transition-colors">
          See more
        </Link>
      </div>
      
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 hide-scrollbar">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="min-w-[85vw] sm:min-w-0 snap-center sm:snap-align-none">
            <VehicleCard vehicle={vehicle} />
          </div>
        ))}
      </div>
    </div>
  );
}
