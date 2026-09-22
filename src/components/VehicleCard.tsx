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
    <div className="group bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
      
      {/* Top Image Area */}
      <div className="relative aspect-[4/3] bg-[#f9f9f9] overflow-hidden">
        <img 
          src={mainImage} 
          alt={vehicle.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        

      </div>
      
      {/* Content Area */}
      <div className="p-3 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Main Title in Bold Black */}
          <h3 className="text-sm sm:text-[17px] font-bold text-gray-900 mb-0.5 sm:mb-1 leading-snug line-clamp-1">
            {vehicle.make} {vehicle.model}
          </h3>
          
          {/* Subtitle */}
          <p className="text-[10px] sm:text-xs text-gray-500 font-medium mb-3 sm:mb-4 line-clamp-1">
            {vehicle.year} {vehicle.title}
          </p>
          
          {/* Specs Details Row */}
          <div className="flex flex-wrap sm:flex-nowrap items-center text-gray-500 text-[10px] sm:text-[12px] font-medium py-2 sm:py-2.5 border-t border-gray-100 gap-y-1">
            <div className="flex items-center gap-1 sm:gap-1.5 pr-2 sm:pr-3">
              <Gauge size={13} strokeWidth={2} className="text-gray-400 sm:w-[15px] sm:h-[15px]" />
              <span>{vehicle.mileage.toLocaleString()} km</span>
            </div>
            
            <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 border-l border-gray-200">
              <Settings size={13} strokeWidth={2} className="text-gray-400 sm:w-[15px] sm:h-[15px]" />
              <span className="capitalize line-clamp-1">{vehicle.transmission}</span>
            </div>
            
            <div className="flex items-center gap-1 sm:gap-1.5 pl-2 sm:pl-3 border-l border-gray-200">
              <Fuel size={13} strokeWidth={2} className="text-gray-400 sm:w-[15px] sm:h-[15px]" />
              <span className="capitalize line-clamp-1">{vehicle.fuel_type}</span>
            </div>
          </div>
        </div>

        {/* Footer Action Row */}
        <div className="border-t border-gray-100 flex items-center justify-between pt-2.5 sm:pt-3.5 mt-2">
          <a 
            href={emailUrl} 
            className="text-gray-900 hover:text-black text-[10px] sm:text-[12px] font-bold tracking-wider uppercase transition-colors flex items-center gap-1"
          >
            INQUIRE <Plus size={12} strokeWidth={3} className="sm:w-[14px] sm:h-[14px]" />
          </a>
          <Link href={`/shop/${vehicle.id}`} className="text-gray-400 hover:text-gray-900 transition-colors text-[10px] sm:text-xs font-semibold flex items-center gap-1">
            Details <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
