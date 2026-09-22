export default function AuctionSheetGuidePage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Auction Sheet Guide</h1>
        <div className="space-y-6 text-[13px] md:text-sm text-gray-600 leading-relaxed">
          <p>Japanese auction sheets provide a detailed condition report of a vehicle. Here is a quick guide to understanding the grading system:</p>
          
          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">Overall Grades</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Grade S / 6:</strong> Brand new condition.</li>
              <li><strong>Grade 5:</strong> Excellent condition, near perfect.</li>
              <li><strong>Grade 4.5:</strong> Very good condition, minimal scratches.</li>
              <li><strong>Grade 4:</strong> Good condition, standard wear and tear.</li>
              <li><strong>Grade 3.5:</strong> Noticeable scratches, dents, or minor repairs needed.</li>
              <li><strong>Grade R / RA:</strong> Repaired history (accident repaired).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">Interior Grades</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>A:</strong> Excellent interior, no stains.</li>
              <li><strong>B:</strong> Average condition, minor wear.</li>
              <li><strong>C:</strong> Noticeable wear, cigarette burns, or stains.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
