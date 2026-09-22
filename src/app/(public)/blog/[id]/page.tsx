import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogPosts';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = BLOG_POSTS.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  // Recommended posts (all other posts)
  const recommendedPosts = BLOG_POSTS.filter((p) => p.id !== post.id);

  return (
    <div className="bg-white min-h-screen">
      {/* Article Container (spacing for floating navbar) */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16">
        
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#FF6B35] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all articles</span>
          </Link>
        </div>

        {/* 2-Column Layout matching reference design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Article Column (Left - 8 cols) */}
          <article className="lg:col-span-8">
            
            {/* Article Heading */}
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-[1.15] mb-6">
              {post.title}
            </h1>

            {/* Author Meta Row */}
            <div className="flex items-center gap-3.5 mb-8">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm"
              />
              <div>
                <p className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                  {post.author.name}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {post.updatedDate}
                </p>
              </div>
            </div>

            {/* Main Featured Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] w-full bg-gray-100 shadow-sm mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body Content */}
            <div className="prose prose-lg max-w-none text-gray-700 text-base sm:text-lg leading-relaxed space-y-6">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article Tags & Sharing */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Category:</span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold">
                  {post.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold">
                  {post.readTime}
                </span>
              </div>
              
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF6B35] hover:bg-[#E85D2A] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all"
              >
                Inquire About This Vehicle
              </Link>
            </div>

          </article>

          {/* Recommended Sidebar Column (Right - 4 cols) */}
          <aside className="lg:col-span-4 sticky top-28 space-y-8">
            <div>
              {/* Section Heading with subtle underline matching reference */}
              <h3 className="text-lg font-bold text-gray-900 pb-3 mb-6 border-b border-gray-300">
                Recommended for you
              </h3>

              {/* Recommended Articles List */}
              <div className="space-y-6">
                {recommendedPosts.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.id}`}
                    className="flex items-start gap-4 group"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0 shadow-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#FF6B35] transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1.5">
                        {item.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Sourcing CTA Banner */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              <h4 className="font-bold text-gray-900 text-sm mb-2">Need Help Importing?</h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Our export team in Tokyo can help you bid, inspect, and ship any vehicle directly to your local port.
              </p>
              <a
                href="https://wa.me/818051662345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold tracking-wider uppercase transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </aside>

        </div>

      </div>
    </div>
  );
}
