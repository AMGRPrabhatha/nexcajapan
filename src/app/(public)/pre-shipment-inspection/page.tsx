export default function PreShipmentInspectionPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Pre-Shipment Inspection (PSI)</h1>
        <div className="space-y-6 text-[13px] md:text-sm text-gray-600 leading-relaxed">
          <p className="text-base font-medium text-gray-800 mb-4">Ensuring your vehicle meets all regulatory requirements before it sets sail.</p>
          
          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">Why is PSI Required?</h2>
            <p>Many countries mandate a Pre-Shipment Inspection (PSI) to verify the roadworthiness, mileage authenticity, and emission standards of used vehicles imported from Japan. Failure to obtain the required PSI certificate can result in severe penalties, rejection of entry at the destination port, or deportation of the vehicle.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">Authorized Inspection Agencies</h2>
            <p>Nexca coordinates seamlessly with all major government-approved inspection bodies in Japan, including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold text-gray-800">JEVIC</span> (Japan Export Vehicle Inspection Center) - Common for Zambia, Uganda, Kenya, etc.</li>
              <li><span className="font-semibold text-gray-800">EAA</span> (East Africa Automobile Services) - Common for Tanzania and Uganda.</li>
              <li><span className="font-semibold text-gray-800">QISJ</span> (Quality Inspection Services Japan) - Common for Kenya, Tanzania, and UK.</li>
              <li><span className="font-semibold text-gray-800">Intertek / Bureau Veritas</span> - Required for various global destinations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">Our Process</h2>
            <ol className="list-decimal pl-5 mt-2 space-y-2">
              <li><strong>Booking:</strong> Once your vehicle arrives at our export yard, our logistics team automatically identifies if your destination country requires an inspection.</li>
              <li><strong>Preparation:</strong> The vehicle undergoes a preliminary check. If any minor repairs are needed to pass the inspection (e.g., replacing worn tires or fixing warning lights), we will notify you immediately.</li>
              <li><strong>Inspection:</strong> We book and transport the vehicle to the authorized inspection facility.</li>
              <li><strong>Certification:</strong> Upon passing, the original certificate is dispatched along with your Bill of Lading and other export documents via DHL.</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
