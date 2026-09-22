"use client";

import { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import VehicleCard from '@/components/VehicleCard';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ShopClient({ initialVehicles }: { initialVehicles: any[] }) {
  const [vehicles, setVehicles] = useState<any[]>(initialVehicles || []);
  const searchParams = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Sync with Supabase client-side and localStorage
  useEffect(() => {
    const fetchVehicles = async () => {
      let combined: any[] = [];

      // 1. Local storage cache
      try {
        const local = JSON.parse(localStorage.getItem('nexca_local_vehicles') || '[]');
        if (Array.isArray(local)) {
          combined = [...local.filter((v: any) => v.status === 'available' || !v.status)];
        }
      } catch (e) {}

      // 2. Client-side fetch from Supabase
      try {
        const { data, error } = await supabase
          .from('vehicles')
          .select('*, vehicle_images(image_url, is_main)')
          .eq('status', 'available')
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          const supabaseIds = new Set(data.map((v: any) => v.id));
          const localOnly = combined.filter((v: any) => !supabaseIds.has(v.id));
          combined = [...data, ...localOnly];
        }
      } catch (err) {
        console.warn("Client shop fetch error:", err);
      } finally {
        if (combined.length > 0) {
          setVehicles(combined);
        }
      }
    };

    fetchVehicles();
  }, []);

  const [filters, setFilters] = useState({
    make: searchParams.get('make') || '',
    year: searchParams.get('year') || '',
    transmission: searchParams.get('transmission') || '',
    country: searchParams.get('country') || ''
  });
  const [sort, setSort] = useState('newest');

  const [openSections, setOpenSections] = useState({
    make: true,
    year: true,
    transmission: true,
    country: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: prev[key] === value ? '' : value })); // allow unchecking
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  // Apply filters to state vehicles
  let filteredVehicles = vehicles.filter(v => {
    if (filters.make && v.make.toLowerCase() !== filters.make.toLowerCase()) return false;
    if (filters.year && v.year.toString() !== filters.year) return false;
    if (filters.transmission && v.transmission.toLowerCase() !== filters.transmission.toLowerCase()) return false;
    if (filters.country && (!v.target_countries || !v.target_countries.includes(filters.country))) return false;
    return true;
  });

  // Apply sort
  if (sort === 'newest') {
    filteredVehicles.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  } else if (sort === 'oldest') {
    filteredVehicles.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
  }

  const clearFilters = () => {
    setFilters({ make: '', year: '', transmission: '', country: '' });
  };

  const removeFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: '' }));
  };

  return (
    <>
      {/* Top Filter Bar */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-orange-500 transition tracking-wide cursor-pointer"
            >
              <Filter size={16} /> Show Filters
            </button>
            <span className="text-sm text-gray-500 hidden sm:inline">{filteredVehicles.length} vehicles</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <Filter size={16} className="text-gray-400 hidden sm:inline" />
            <select 
              value={sort} 
              onChange={(e) => setSort(e.target.value)}
              className="border-none bg-transparent outline-none cursor-pointer focus:ring-0 text-sm font-semibold"
            >
              <option value="newest">Date, new to old</option>
              <option value="oldest">Date, old to new</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active Filter Badges */}
      {activeFiltersCount > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-wrap items-center gap-2">
            {Object.entries(filters).map(([key, value]) => {
              if (!value) return null;
              return (
                <span key={key} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-800 bg-white shadow-sm">
                  {key === 'country' ? value : value}
                  <button onClick={() => removeFilter(key as any)} className="hover:text-black">
                    <X size={12} strokeWidth={3} />
                  </button>
                </span>
              );
            })}
          </div>
          <button onClick={clearFilters} className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 whitespace-nowrap cursor-pointer">
            Clear filters
          </button>
        </div>
      )}

      {/* Main Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 md:gap-x-6 md:gap-y-10">
          {filteredVehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
        {filteredVehicles.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No vehicles match your current filters.
          </div>
        )}
      </div>

      {/* Overlay */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity" 
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      {/* Slide-out Drawer */}
      <div className={`fixed inset-y-0 left-0 w-full sm:w-[380px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-extrabold tracking-wide text-gray-900">Filter</h2>
          <button 
            onClick={() => setIsFilterOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors bg-gray-50 border border-gray-200"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Drawer Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Make Accordion */}
          <div className="border-b border-gray-100 pb-4">
            <button onClick={() => toggleSection('make')} className="flex items-center justify-between w-full text-left font-bold text-gray-900 mb-4 text-base">
              Make {openSections.make ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {openSections.make && (
              <div className="space-y-4">
                {['Toyota', 'Honda', 'Nissan', 'Lexus', 'Mazda', 'Subaru'].map(make => (
                  <label key={make} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="make"
                      checked={filters.make === make}
                      onChange={() => handleFilterChange('make', make)}
                      className="w-4 h-4 text-black focus:ring-black border-gray-300" 
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">{make}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Year Accordion */}
          <div className="border-b border-gray-100 pb-4">
            <button onClick={() => toggleSection('year')} className="flex items-center justify-between w-full text-left font-bold text-gray-900 mb-4 text-base">
              Year {openSections.year ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {openSections.year && (
              <div className="space-y-4">
                {['2026', '2025', '2024', '2023', '2022'].map(year => (
                  <label key={year} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="year"
                      checked={filters.year === year}
                      onChange={() => handleFilterChange('year', year)}
                      className="w-4 h-4 text-black focus:ring-black border-gray-300" 
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">{year}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Transmission Accordion */}
          <div className="border-b border-gray-100 pb-4">
            <button onClick={() => toggleSection('transmission')} className="flex items-center justify-between w-full text-left font-bold text-gray-900 mb-4 text-base">
              Transmission {openSections.transmission ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {openSections.transmission && (
              <div className="space-y-4">
                {['Automatic', 'Manual', 'CVT'].map(trans => (
                  <label key={trans} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="transmission"
                      checked={filters.transmission.toLowerCase() === trans.toLowerCase()}
                      onChange={() => handleFilterChange('transmission', trans)}
                      className="w-4 h-4 text-black focus:ring-black border-gray-300" 
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">{trans}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Country Accordion */}
          <div className="pb-4">
            <button onClick={() => toggleSection('country')} className="flex items-center justify-between w-full text-left font-bold text-gray-900 mb-4 text-base">
              Destination Country {openSections.country ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {openSections.country && (
              <div className="space-y-4">
                {['New Zealand', 'Australia', 'UK', 'Kenya', 'Sri Lanka'].map(country => (
                  <label key={country} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="country"
                      checked={filters.country === country}
                      onChange={() => handleFilterChange('country', country)}
                      className="w-4 h-4 text-black focus:ring-black border-gray-300" 
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">{country}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          
        </div>

        {/* Drawer Footer / Sticky Button */}
        <div className="p-6 border-t border-gray-100 bg-white">
          <button 
            onClick={() => setIsFilterOpen(false)}
            className="w-full bg-white border-2 border-black text-black font-bold tracking-widest py-3.5 rounded hover:bg-black hover:text-white transition-colors uppercase text-sm"
          >
            VIEW PRODUCTS
          </button>
        </div>
      </div>
    </>
  );
}
