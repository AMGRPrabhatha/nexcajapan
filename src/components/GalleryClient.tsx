"use client";

import { useState, useEffect } from "react";
import { createBrowserClient } from '@supabase/ssr';
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

export interface GalleryCardData {
  id: string;
  title: string;
  images: string[];
}



interface GalleryCardProps {
  item: GalleryCardData;
  onOpenLightbox: (item: GalleryCardData, initialIndex: number) => void;
}

function GalleryCard({ item, onOpenLightbox }: GalleryCardProps) {
  const images = item.images && item.images.length > 0 ? item.images.slice(0, 3) : ['/hero-bg.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll images every 3.5 seconds if card has multiple images
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  return (
    <div
      className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden aspect-[4/3] bg-gray-900 group shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenLightbox(item, currentIndex)}
    >
      {/* Background Images with smooth crossfade */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          <img
            src={img}
            alt={`${item.title} angle ${idx + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/45 transition-colors duration-300"></div>

      {/* Centered "View Image" Pill Button (matches rrmasterkey reference style) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <button
          type="button"
          className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border border-white/90 bg-white/15 backdrop-blur-md text-white font-medium text-[10px] sm:text-sm tracking-wide shadow-lg group-hover:scale-105 hover:bg-white hover:text-gray-950 transition-all duration-200"
        >
          View Image
        </button>
      </div>

      {/* Multi-image indicators (dots at bottom) */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5 z-20">
          {images.map((_, dotIdx) => (
            <span
              key={dotIdx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex ? "w-5 bg-white shadow-sm" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* Image Counter Badge (Top-right) */}
      {images.length > 1 && (
        <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-semibold tracking-wider z-20">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Vehicle Title overlay at bottom */}
      {item.title && (
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
          <p className="text-white text-[10px] sm:text-sm font-semibold truncate drop-shadow">
            {item.title}
          </p>
        </div>
      )}
    </div>
  );
}

export default function GalleryClient({ initialItems }: { initialItems: GalleryCardData[] }) {
  const [items, setItems] = useState<GalleryCardData[]>(initialItems || []);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Sync gallery items from Supabase client and localStorage
  useEffect(() => {
    const fetchGallery = async () => {
      let combined: GalleryCardData[] = [];

      // 1. Try localStorage
      try {
        const local = JSON.parse(localStorage.getItem('nexca_local_gallery') || '[]');
        if (Array.isArray(local) && local.length > 0) {
          combined = [...local];
        }
      } catch (e) {}

      // 2. Client-side fetch from Supabase
      try {
        const { data, error } = await supabase
          .from('gallery_items')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          const supabaseIds = new Set(data.map((item: any) => item.id));
          const localOnly = combined.filter((item: any) => !supabaseIds.has(item.id));
          combined = [...data, ...localOnly];
          try {
            localStorage.setItem('nexca_local_gallery', JSON.stringify(combined));
          } catch (e) {}
        }
      } catch (err) {
        console.warn("Client gallery fetch warning:", err);
      } finally {
        if (combined.length > 0) {
          setItems(combined);
        }
      }
    };

    fetchGallery();
  }, []);

  // Lightbox Modal State
  const [activeItem, setActiveItem] = useState<GalleryCardData | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (item: GalleryCardData, initialIndex: number) => {
    setActiveItem(item);
    setActiveImageIndex(initialIndex);
  };

  const closeLightbox = () => {
    setActiveItem(null);
  };

  const nextImage = () => {
    if (!activeItem) return;
    const total = activeItem.images.slice(0, 3).length;
    setActiveImageIndex((prev) => (prev + 1) % total);
  };

  const prevImage = () => {
    if (!activeItem) return;
    const total = activeItem.images.slice(0, 3).length;
    setActiveImageIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem]);

  return (
    <div>
      {/* 3-Column Responsive Grid matching rrmasterkey.com/gallery reference */}
      {items.length === 0 ? (
        <div className="py-24 text-center text-gray-500 bg-gray-50 rounded-3xl border border-gray-100">
          <p className="text-base font-semibold text-gray-700 mb-1">No vehicles in the gallery yet</p>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            Uploaded gallery images from the Admin Panel will appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {items.map((item) => (
            <GalleryCard key={item.id} item={item} onOpenLightbox={openLightbox} />
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Close viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          {activeItem.images.slice(0, 3).length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              title="Previous photo"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}

          {/* Active Image & Caption */}
          <div
            className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeItem.images.slice(0, 3)[activeImageIndex]}
              alt={activeItem.title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />

            {/* Bottom Caption Bar */}
            <div className="mt-4 text-center">
              <p className="text-white font-bold text-base sm:text-lg">
                {activeItem.title}
              </p>
              {activeItem.images.slice(0, 3).length > 1 && (
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  Photo {activeImageIndex + 1} of {activeItem.images.slice(0, 3).length}
                </p>
              )}
            </div>
          </div>

          {/* Next Arrow */}
          {activeItem.images.slice(0, 3).length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              title="Next photo"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
