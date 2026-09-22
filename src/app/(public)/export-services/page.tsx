export default function ExportServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Export Services</h1>
        <div className="space-y-6 text-[13px] md:text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">1. Vehicle Sourcing</h2>
            <p>We source high-quality vehicles directly from over 120 auction houses across Japan and through our private dealer networks. Our expert buyers inspect each vehicle before bidding to ensure it meets our strict quality standards.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">2. RO-RO & Container Shipping</h2>
            <p>We handle all aspects of international shipping. Whether you need Roll-on/Roll-off (RO-RO) for single vehicles or secure container shipping for high-value cars and bulk orders, we negotiate the best freight rates for your destination.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">3. Customs Clearance & Documentation</h2>
            <p>Our team expertly prepares all necessary export documents, including the Bill of Lading, Export Certificate, and Proforma Invoice, ensuring a smooth customs clearance process upon arrival in your country.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
