import Link from 'next/link';
import { Settings, Gauge, Fuel, Plus, Heart } from 'lucide-react';

type Vehicle = {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price_usd: number;
  mileage: number;
  transmission: string;
  fuel_type: string;
  vehicle_images: { image_url: string; is_main: boolean }[];
};

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const mainImage = vehicle.vehicle_images?.find(img => img.is_main)?.image_url 
    || vehicle.vehicle_images?.[0]?.image_url 
    || '/Inventory.webp';

  const emailUrl = `mailto:nexcainfo@gmail.com?subject=Inquiry: ${vehicle.year} ${vehicle.make} ${vehicle.model}&body=Hi,%0D%0A%0D%0AI am interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (ID: ${vehicle.id}). Is it still available?`;

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1">
      
      {/* Invisible Absolute Link covering the entire card */}
      <Link href={`/cars/${vehicle.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${vehicle.year} ${vehicle.title}`} />
      
      {/* Top Image Area */}
      <div className="relative aspect-[4/3] bg-[#f9f9f9] overflow-hidden">
        <img 
          src={mainImage} 
          alt={vehicle.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      
      {/* Content Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between relative z-0">
        <div>
          {/* Main Title in Bold Black */}
          <h3 className="text-[16px] sm:text-[18px] font-bold text-gray-900 mb-1 leading-snug line-clamp-1">
            {vehicle.make} {vehicle.model}
          </h3>
          
          {/* Subtitle */}
          <p className="text-[12px] sm:text-[13px] text-gray-500 font-medium mb-4 line-clamp-1">
            {vehicle.year} {vehicle.title}
          </p>
          
          {/* Specs Details Row */}
          <div className="flex items-center text-gray-600 text-[11px] sm:text-[12px] font-semibold py-3 border-t border-gray-100/80 gap-x-3 sm:gap-x-4">
            <div className="flex items-center gap-1.5">
              <Gauge size={14} strokeWidth={2.5} className="text-gray-400" />
              <span>{vehicle.mileage.toLocaleString()} km</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <Settings size={14} strokeWidth={2.5} className="text-gray-400" />
              <span className="capitalize line-clamp-1">{vehicle.transmission}</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <Fuel size={14} strokeWidth={2.5} className="text-gray-400" />
              <span className="capitalize line-clamp-1">{vehicle.fuel_type}</span>
            </div>
          </div>
        </div>

        {/* Footer Action Row */}
        <div className="border-t border-gray-100 flex items-center justify-between pt-4 mt-1">
          {/* Note: Give this anchor a higher z-index so it's clickable over the card link */}
          <a 
            href={emailUrl} 
            className="relative z-20 text-[#FF4B33] hover:text-[#E5422B] text-[11px] sm:text-[12px] font-bold tracking-wider uppercase transition-colors flex items-center gap-1 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg"
          >
            INQUIRE <Plus size={14} strokeWidth={3} />
          </a>
          <div className="text-gray-400 group-hover:text-[#FF4B33] transition-colors text-[11px] sm:text-xs font-semibold flex items-center gap-1">
            Details <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
