"use client";

import { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Check, Info, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function VehicleDetailsClient({ 
  initialVehicle, 
  vehicleId 
}: { 
  initialVehicle: any; 
  vehicleId: string;
}) {
  const [vehicle, setVehicle] = useState<any>(initialVehicle);
  const [loading, setLoading] = useState(!initialVehicle);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    if (vehicle) return;

    // 1. Try local cache
    try {
      const local = JSON.parse(localStorage.getItem('nexca_local_vehicles') || '[]');
      const found = local.find((v: any) => v.id === vehicleId);
      if (found) {
        setVehicle(found);
        setLoading(false);
        return;
      }
    } catch (e) {}

    // 2. Try client-side Supabase
    const fetchVehicle = async () => {
      try {
        const { data, error } = await supabase
          .from('vehicles')
          .select('*, vehicle_images(image_url, is_main)')
          .eq('id', vehicleId)
          .single();

        if (!error && data) {
          setVehicle(data);
        }
      } catch (err) {
        console.warn("Client vehicle fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [vehicleId]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
        <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500 font-medium">Loading vehicle details...</p>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Vehicle Not Found</h2>
        <p className="text-gray-500 mb-6">The vehicle listing you are looking for is unavailable or has been removed.</p>
        <Link 
          href="/shop" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl shadow transition"
        >
          Browse All Vehicles
        </Link>
      </div>
    );
  }

  const images = vehicle.vehicle_images?.sort((a: any, b: any) => (b.is_main ? 1 : 0) - (a.is_main ? 1 : 0)) || [];
  const mainImage = images.length > 0 ? images[0].image_url : '/Inventory.webp';

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price || 0);
  };

  const whatsappMessage = encodeURIComponent(`Hi, I am interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (ID: ${vehicle.id}). Is it still available?`);
  const whatsappUrl = `https://wa.me/819012345678?text=${whatsappMessage}`;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-blue-600">Inventory</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{vehicle.make} {vehicle.model}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Images & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <div className="aspect-[4/3] sm:aspect-[16/9] relative bg-gray-100">
                <img 
                  src={mainImage} 
                  alt={vehicle.title} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/Inventory.webp');
                  }}
                />
              </div>
              {images.length > 1 && (
                <div className="p-4 grid grid-cols-5 gap-2 bg-gray-50/50 border-t border-gray-100">
                  {images.slice(0, 5).map((img: any, i: number) => (
                    <div key={i} className="aspect-[4/3] relative bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
                      <img src={img.image_url} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Vehicle Description</h2>
              <div className="prose max-w-none text-gray-600 leading-relaxed">
                {vehicle.description ? (
                  <p className="whitespace-pre-wrap">{vehicle.description}</p>
                ) : (
                  <p>No description provided for this vehicle.</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Specs & Contact */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h1 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">{vehicle.title}</h1>
              <p className="text-gray-500 font-mono text-xs mb-6">Chassis No: {vehicle.chassis_no}</p>
              
              <div className="text-4xl font-extrabold text-blue-600 mb-6">
                {formatPrice(vehicle.price_usd)}
                <span className="text-xs text-gray-500 font-normal block mt-1 uppercase tracking-wider">FOB Price</span>
              </div>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition mb-3 shadow-sm"
              >
                <Phone size={18} />
                Inquire via WhatsApp
              </a>
              
              <Link 
                href={`/contact?vehicle_id=${vehicle.id}`}
                className="w-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 font-bold py-3 px-4 rounded-xl flex items-center justify-center transition text-sm"
              >
                Send Email Inquiry
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Info size={18} className="text-blue-600" />
                Specifications
              </h3>
              
              <div className="divide-y divide-gray-100 text-sm">
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500">Make</span>
                  <span className="font-semibold text-gray-900">{vehicle.make}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500">Model</span>
                  <span className="font-semibold text-gray-900">{vehicle.model}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500">Year</span>
                  <span className="font-semibold text-gray-900">{vehicle.year}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500">Mileage</span>
                  <span className="font-semibold text-gray-900">{(vehicle.mileage || 0).toLocaleString()} km</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500">Transmission</span>
                  <span className="font-semibold text-gray-900 capitalize">{vehicle.transmission}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500">Fuel Type</span>
                  <span className="font-semibold text-gray-900 capitalize">{vehicle.fuel_type}</span>
                </div>
              </div>
            </div>

            {vehicle.target_countries && vehicle.target_countries.length > 0 && (
               <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                 <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Eligible Destinations</h3>
                 <div className="flex flex-wrap gap-2">
                   {vehicle.target_countries.map((country: string, idx: number) => (
                     <span key={idx} className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                       <Check size={12} /> {country}
                     </span>
                   ))}
                 </div>
               </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
