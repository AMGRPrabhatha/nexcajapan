"use client";

import { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Gauge, 
  Settings, 
  Fuel, 
  Palette, 
  Hash, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Truck, 
  FileText, 
  Share2, 
  Check, 
  Sparkles,
  Camera
} from 'lucide-react';
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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [copied, setCopied] = useState(false);

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
      <div className="min-h-[75vh] flex flex-col items-center justify-center p-8 bg-[#FAFAFA]">
        <div className="w-10 h-10 border-2 border-neutral-300 border-t-neutral-900 rounded-full animate-spin mb-4"></div>
        <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Loading Vehicle Data...</p>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="min-h-[75vh] flex flex-col items-center justify-center p-8 text-center bg-[#FAFAFA]">
        <span className="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-2">Inventory Notice</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 tracking-tight">Vehicle Not Available</h2>
        <p className="text-neutral-500 text-sm max-w-sm mb-8 leading-relaxed">This unit has been archived, exported, or is temporarily undergoing maintenance.</p>
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-200"
        >
          <ArrowLeft size={14} /> Return to Inventory
        </Link>
      </div>
    );
  }

  const rawImages = vehicle.vehicle_images?.sort((a: any, b: any) => (b.is_main ? 1 : 0) - (a.is_main ? 1 : 0)) || [];
  const images = rawImages.length > 0 ? rawImages : [{ image_url: '/Inventory.webp', is_main: true }];
  const currentImage = images[activeIndex]?.image_url || '/Inventory.webp';

  const handlePrevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Nexca Motors! I am inquiring about the ${vehicle.year || ''} ${vehicle.make || ''} ${vehicle.model || ''} (Chassis: ${vehicle.chassis_no || 'N/A'}). Could you provide the export pricing and shipping schedule?`
  );
  const whatsappUrl = `https://wa.me/818051662345?text=${whatsappMessage}`;
  const emailUrl = `mailto:nexcainfo@gmail.com?subject=Inquiry: ${vehicle.year || ''} ${vehicle.make || ''} ${vehicle.model || ''} [Chassis: ${vehicle.chassis_no || ''}]&body=Hi Nexca Team,%0D%0A%0D%0AI would like to receive further details and quotation for the ${vehicle.title || vehicle.model} (Chassis No: ${vehicle.chassis_no || ''}).%0D%0A%0D%0AThank you.`;

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-neutral-900 antialiased pt-24 sm:pt-28 pb-24">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Bar / Breadcrumb */}
        <div className="flex items-center justify-between py-4 mb-3 border-b border-neutral-200/70">
          <Link 
            href="/shop" 
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Inventory</span>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-900 font-bold">{vehicle.make}</span>
          </Link>

          <button 
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 bg-white/80 hover:bg-white backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-200/80 shadow-xs transition-all"
            title="Copy link"
          >
            {copied ? <Check size={13} className="text-emerald-600" /> : <Share2 size={13} />}
            <span>{copied ? 'Copied' : 'Share'}</span>
          </button>
        </div>

        {/* Hero Title Block */}
        <div className="mb-6 sm:mb-8 pt-2">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Verified Stock
            </span>
            {vehicle.chassis_no && (
              <span className="text-[11px] font-mono text-neutral-500 bg-white/80 px-2.5 py-0.5 rounded-md border border-neutral-200/70">
                VIN: {vehicle.chassis_no}
              </span>
            )}
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            {vehicle.year ? `${vehicle.year} ` : ''}{vehicle.title || `${vehicle.make} ${vehicle.model}`}
          </h1>
        </div>

        {/* Main Grid: Gallery & Details (Left) + Concierge Card & Specs (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Gallery, Quick Specs Strip, Overview */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Gallery Frame */}
            <div className="relative bg-neutral-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
              {/* Main Image Stage */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-neutral-900 overflow-hidden select-none">
                <img 
                  src={currentImage} 
                  alt={vehicle.title || 'Vehicle photo'} 
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/Inventory.webp');
                  }}
                />

                {/* Subtle dark gradient overlay on bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                {/* Counter Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex items-center gap-1.5 bg-neutral-950/75 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                  <Camera size={13} className="text-neutral-300" />
                  <span>{activeIndex + 1} / {images.length}</span>
                </div>

                {/* Navigation Arrows (Show only if multiple images) */}
                {images.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrevImage}
                      className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-neutral-900 flex items-center justify-center shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} strokeWidth={2.5} />
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-neutral-900 flex items-center justify-center shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} strokeWidth={2.5} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {images.length > 1 && (
                <div className="p-3 bg-neutral-950/90 backdrop-blur-md border-t border-white/10 flex items-center gap-2 overflow-x-auto">
                  {images.map((img: any, i: number) => {
                    const isSelected = activeIndex === i;
                    return (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`relative flex-shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                          isSelected 
                            ? 'border-white opacity-100 ring-2 ring-white/30 scale-102' 
                            : 'border-transparent opacity-50 hover:opacity-90'
                        }`}
                      >
                        <img 
                          src={img.image_url} 
                          alt={`Thumbnail ${i + 1}`} 
                          className="w-full h-full object-cover" 
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Modern Clean Specs Ribbon (Liquid Glass Minimal Look) */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-2xl p-4 sm:p-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100">
                
                {/* Year */}
                <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-2 first:pt-0">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100/80 flex items-center justify-center text-neutral-600 flex-shrink-0">
                    <Calendar size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">Year</span>
                    <span className="text-sm sm:text-base font-bold text-neutral-900">{vehicle.year || '—'}</span>
                  </div>
                </div>

                {/* Mileage */}
                <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100/80 flex items-center justify-center text-neutral-600 flex-shrink-0">
                    <Gauge size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">Odometer</span>
                    <span className="text-sm sm:text-base font-bold text-neutral-900">
                      {vehicle.mileage ? `${vehicle.mileage.toLocaleString()} km` : '—'}
                    </span>
                  </div>
                </div>

                {/* Transmission */}
                <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100/80 flex items-center justify-center text-neutral-600 flex-shrink-0">
                    <Settings size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">Gearbox</span>
                    <span className="text-sm sm:text-base font-bold text-neutral-900 capitalize">{vehicle.transmission || '—'}</span>
                  </div>
                </div>

                {/* Fuel */}
                <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100/80 flex items-center justify-center text-neutral-600 flex-shrink-0">
                    <Fuel size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">Fuel</span>
                    <span className="text-sm sm:text-base font-bold text-neutral-900 capitalize">{vehicle.fuel_type || '—'}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Vehicle Overview / Editorial Notes */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-neutral-500" />
                  <h2 className="text-base font-bold tracking-tight text-neutral-900">
                    Vehicle Overview & Condition
                  </h2>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  Dealer Notes
                </span>
              </div>

              <div className="text-neutral-700 font-normal leading-relaxed text-sm sm:text-[15px]">
                {vehicle.description ? (
                  <p className="whitespace-pre-line">{vehicle.description}</p>
                ) : (
                  <p className="text-neutral-400 italic">No additional dealer notes provided for this vehicle listing.</p>
                )}
              </div>

              {/* Service & Export Assurance */}
              <div className="mt-8 pt-6 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">Authentic JDM History</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Verified chassis inspection prior to export loading.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Truck size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">Global Port Transit</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Direct Ro-Ro & container shipping from Nagoya/Yokohama.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">Export Documentation</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Full export certificates, Bill of Lading, and customs papers.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Concierge Card & Technical Specs */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* Concierge & Purchase Action Card */}
            <div className="bg-white/90 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-2xl sm:rounded-3xl p-6 sm:p-7 relative overflow-hidden">
              <div className="mb-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF4B33]">Export Concierge</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 tracking-tight">Request CIF / FOB Quote</h3>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  Connect with our Japanese export agents for direct port-to-port quotations, schedule, and live walkaround video.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 shadow-[0_4px_14px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_18px_rgba(37,211,102,0.35)] text-sm cursor-pointer"
                >
                  <Phone size={17} strokeWidth={2.2} />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a 
                  href={emailUrl}
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 text-sm cursor-pointer"
                >
                  <Mail size={17} strokeWidth={2.2} />
                  <span>Send Direct Email</span>
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Direct Hotline:</span>
                <a href="tel:+818051662345" className="font-mono font-semibold text-neutral-700 hover:text-neutral-950">
                  +81 80-5166-2345
                </a>
              </div>
            </div>

            {/* Structured Technical Specs Sheet */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-2xl p-6 sm:p-7">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                Technical Specifications
              </h3>

              <div className="space-y-2.5 text-xs">
                
                {/* Chassis */}
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-100/80">
                  <span className="text-neutral-500 font-medium flex items-center gap-1.5">
                    <Hash size={13} className="text-neutral-400" /> Chassis No
                  </span>
                  <span className="font-mono font-bold text-neutral-900">{vehicle.chassis_no || '—'}</span>
                </div>

                {/* Make */}
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-100/80">
                  <span className="text-neutral-500 font-medium">Make</span>
                  <span className="font-semibold text-neutral-900">{vehicle.make || '—'}</span>
                </div>

                {/* Model */}
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-100/80">
                  <span className="text-neutral-500 font-medium">Model</span>
                  <span className="font-semibold text-neutral-900">{vehicle.model || '—'}</span>
                </div>

                {/* Year */}
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-100/80">
                  <span className="text-neutral-500 font-medium">Model Year</span>
                  <span className="font-semibold text-neutral-900">{vehicle.year || '—'}</span>
                </div>

                {/* Color */}
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-100/80">
                  <span className="text-neutral-500 font-medium flex items-center gap-1.5">
                    <Palette size={13} className="text-neutral-400" /> Exterior Color
                  </span>
                  <span className="font-semibold text-neutral-900 capitalize">{vehicle.color || '—'}</span>
                </div>

                {/* Mileage */}
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-100/80">
                  <span className="text-neutral-500 font-medium">Recorded Mileage</span>
                  <span className="font-semibold text-neutral-900">
                    {vehicle.mileage ? `${vehicle.mileage.toLocaleString()} km` : '—'}
                  </span>
                </div>

                {/* Transmission */}
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-100/80">
                  <span className="text-neutral-500 font-medium">Transmission</span>
                  <span className="font-semibold text-neutral-900 capitalize">{vehicle.transmission || '—'}</span>
                </div>

                {/* Fuel Type */}
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-neutral-500 font-medium">Fuel Type</span>
                  <span className="font-semibold text-neutral-900 capitalize">{vehicle.fuel_type || '—'}</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
