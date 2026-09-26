"use client";

import { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Check, Info, Phone, ArrowLeft, Calendar, Settings, Gauge, Fuel, Mail } from 'lucide-react';
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
  const [activeImage, setActiveImage] = useState<string>('');

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
  }, [vehicleId, vehicle, supabase]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-[#f9f9f9]">
        <div className="w-12 h-12 border-4 border-[#FF4B33]/20 border-t-[#FF4B33] rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500 font-semibold tracking-wide">Loading vehicle details...</p>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-[#f9f9f9]">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Vehicle Not Found</h2>
        <p className="text-gray-500 font-medium mb-8 max-w-md mx-auto">The vehicle listing you are looking for is unavailable, sold, or has been removed from our inventory.</p>
        <Link 
          href="/shop" 
          className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-3.5 rounded-xl shadow transition-all hover:-translate-y-1"
        >
          Browse Inventory
        </Link>
      </div>
    );
  }

  const images = vehicle.vehicle_images?.sort((a: any, b: any) => (b.is_main ? 1 : 0) - (a.is_main ? 1 : 0)) || [];
  const mainImage = images.length > 0 ? images[0].image_url : '/Inventory.webp';
  const displayImage = activeImage || mainImage;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price || 0);
  };

  const whatsappMessage = encodeURIComponent(`Hi, I am interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (ID: ${vehicle.id}). Is it still available?`);
  const whatsappUrl = `https://wa.me/818051662345?text=${whatsappMessage}`;
  const emailUrl = `mailto:nexcainfo@gmail.com?subject=Inquiry: ${vehicle.year} ${vehicle.make} ${vehicle.model}&body=Hi,%0D%0A%0D%0AI am interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (ID: ${vehicle.id}). Is it still available?`;

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20 pt-24 sm:pt-28 lg:pt-32">
      {/* Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back Button */}
        <div className="mb-6 lg:mb-8">
          <Link href="/shop" className="inline-flex items-center text-[13px] sm:text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
            <ArrowLeft size={16} strokeWidth={2.5} className="mr-2" /> Back to Inventory
          </Link>
        </div>

        {/* Title Section */}
        <div className="mb-8 lg:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
                {vehicle.make} <span className="text-gray-400">{vehicle.model}</span>
              </h1>
              <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-gray-600">
                <span className="bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded-md">{vehicle.year}</span>
                <span>{vehicle.title}</span>
              </div>
            </div>
            <div className="text-left lg:text-right border-t lg:border-t-0 pt-4 lg:pt-0 border-gray-200">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FF4B33] tracking-tight">
                {formatPrice(vehicle.price_usd)}
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">FOB Price (USD)</p>
            </div>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-start">
          
          {/* Main Content (Left: 2 columns wide) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Image Gallery */}
            <div className="bg-white rounded-[24px] sm:rounded-[32px] p-2 sm:p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
              <div className="aspect-[4/3] sm:aspect-[16/10] relative rounded-[16px] sm:rounded-[24px] overflow-hidden bg-gray-100 mb-2 sm:mb-3 group">
                <img 
                  src={displayImage} 
                  alt={`${vehicle.make} ${vehicle.model}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/Inventory.webp');
                  }}
                />
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-5 gap-2 sm:gap-3 px-1 pb-1">
                  {images.map((img: any, i: number) => (
                    <button 
                      key={i} 
                      onClick={() => setActiveImage(img.image_url)}
                      className={`aspect-[4/3] relative rounded-lg sm:rounded-xl overflow-hidden hover:opacity-90 transition-all cursor-pointer border-2 ${displayImage === img.image_url ? 'border-[#FF4B33] shadow-md opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
                    >
                      <img src={img.image_url} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Specs Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white p-4 sm:p-5 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center text-center group hover:border-gray-200 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-[#FF4B33]/10 transition-colors">
                  <Calendar className="text-gray-400 group-hover:text-[#FF4B33] transition-colors" size={20} strokeWidth={2} />
                </div>
                <span className="text-[10px] sm:text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1">Year</span>
                <span className="text-[15px] sm:text-[16px] font-extrabold text-gray-900">{vehicle.year}</span>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center text-center group hover:border-gray-200 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-[#FF4B33]/10 transition-colors">
                  <Gauge className="text-gray-400 group-hover:text-[#FF4B33] transition-colors" size={20} strokeWidth={2} />
                </div>
                <span className="text-[10px] sm:text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1">Mileage</span>
                <span className="text-[15px] sm:text-[16px] font-extrabold text-gray-900">{(vehicle.mileage || 0).toLocaleString()} km</span>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center text-center group hover:border-gray-200 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-[#FF4B33]/10 transition-colors">
                  <Settings className="text-gray-400 group-hover:text-[#FF4B33] transition-colors" size={20} strokeWidth={2} />
                </div>
                <span className="text-[10px] sm:text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1">Trans</span>
                <span className="text-[15px] sm:text-[16px] font-extrabold text-gray-900 capitalize">{vehicle.transmission}</span>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center text-center group hover:border-gray-200 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-[#FF4B33]/10 transition-colors">
                  <Fuel className="text-gray-400 group-hover:text-[#FF4B33] transition-colors" size={20} strokeWidth={2} />
                </div>
                <span className="text-[10px] sm:text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1">Fuel</span>
                <span className="text-[15px] sm:text-[16px] font-extrabold text-gray-900 capitalize">{vehicle.fuel_type}</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FF4B33]/10 flex items-center justify-center">
                  <Info size={18} strokeWidth={2.5} className="text-[#FF4B33]" />
                </span>
                Vehicle Overview
              </h2>
              <div className="text-gray-600 leading-relaxed font-medium">
                {vehicle.description ? (
                  <p className="whitespace-pre-wrap text-[15px] sm:text-[16px]">{vehicle.description}</p>
                ) : (
                  <p className="italic text-gray-400">No detailed description provided by the dealer.</p>
                )}
              </div>
            </div>
            
          </div>

          {/* Sticky Sidebar (Right: 1 column wide) */}
          <div className="lg:sticky lg:top-32 space-y-6 sm:space-y-8">
            
            {/* Contact Action Card */}
            <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-gray-100/50 relative overflow-hidden">
              {/* Decorative background blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4B33]/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

              <h3 className="text-xl font-extrabold text-gray-900 mb-2 relative z-10">Interested in this vehicle?</h3>
              <p className="text-[14px] text-gray-500 mb-8 font-medium leading-relaxed relative z-10">Contact our sales team directly for the best shipping quote and purchasing options.</p>
              
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2.5 transition-all duration-300 mb-3 shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:-translate-y-1 relative z-10 text-[15px]"
              >
                <Phone size={20} strokeWidth={2.5} />
                Inquire via WhatsApp
              </a>
              
              <a 
                href={emailUrl}
                className="w-full bg-gray-900 text-white hover:bg-black font-bold py-4 px-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_14px_rgba(0,0,0,0.15)] relative z-10 text-[15px]"
              >
                <Mail size={20} strokeWidth={2.5} />
                Send Email Inquiry
              </a>
            </div>

            {/* Specifications Details */}
            <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-gray-100">
              <h3 className="text-[14px] font-extrabold text-gray-900 mb-6 uppercase tracking-widest flex items-center gap-2">
                <Settings size={16} className="text-gray-400" />
                Technical Specs
              </h3>
              <div className="space-y-1">
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-500 text-[13px] font-semibold">Chassis Number</span>
                  <span className="text-gray-900 font-bold text-[14px]">{vehicle.chassis_no || '-'}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-500 text-[13px] font-semibold">Make</span>
                  <span className="text-gray-900 font-bold text-[14px]">{vehicle.make}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-500 text-[13px] font-semibold">Model</span>
                  <span className="text-gray-900 font-bold text-[14px]">{vehicle.model}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-500 text-[13px] font-semibold">Model Code</span>
                  <span className="text-gray-900 font-bold text-[14px]">{vehicle.model_code || '-'}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-500 text-[13px] font-semibold">Engine Size</span>
                  <span className="text-gray-900 font-bold text-[14px]">{vehicle.engine_size ? `${vehicle.engine_size} cc` : '-'}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-500 text-[13px] font-semibold">Drive</span>
                  <span className="text-gray-900 font-bold text-[14px] capitalize">{vehicle.drive || '-'}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-500 text-[13px] font-semibold">Steering</span>
                  <span className="text-gray-900 font-bold text-[14px] capitalize">{vehicle.steering || '-'}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-500 text-[13px] font-semibold">Location</span>
                  <span className="text-gray-900 font-bold text-[14px] capitalize">{vehicle.location || 'Japan'}</span>
                </div>
              </div>
            </div>

            {/* Eligible Destinations */}
            {vehicle.target_countries && vehicle.target_countries.length > 0 && (
               <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-gray-100">
                 <h3 className="text-[13px] font-extrabold text-gray-500 uppercase tracking-widest mb-5">Eligible For Shipping</h3>
                 <div className="flex flex-wrap gap-2.5">
                   {vehicle.target_countries.map((country: string, idx: number) => (
                     <span key={idx} className="bg-green-50 text-green-700 text-[13px] font-bold px-3.5 py-2 rounded-xl flex items-center gap-2 border border-green-100/50">
                       <Check size={16} strokeWidth={3} className="text-green-600" /> {country}
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
