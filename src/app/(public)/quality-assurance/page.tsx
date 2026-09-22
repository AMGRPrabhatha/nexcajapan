export default function QualityAssurancePage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Quality Assurance</h1>
        <div className="space-y-6 text-[13px] md:text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">Our Promise</h2>
            <p>At Nexca, we guarantee that every vehicle exported matches its provided description and auction sheet grading. We believe in 100% transparency.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">Multi-Point Inspection</h2>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Engine & Transmission:</strong> Checked for leaks, abnormal noises, and smooth shifting.</li>
              <li><strong>Electrical Systems:</strong> Testing of AC, power windows, hybrid batteries, and navigation screens.</li>
              <li><strong>Undercarriage:</strong> Inspected for heavy rust and corrosion, ensuring structural integrity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">Odometer Verification</h2>
            <p>We guarantee genuine mileage. Every vehicle's odometer reading is cross-checked against Japanese auction records and export certificates to prevent odometer rollback.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
