export default function BookingTermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Booking Terms & Conditions</h1>
        <div className="space-y-6 text-[13px] md:text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">1. Reservation & Deposit</h2>
            <p>To secure a vehicle from our inventory or Japanese auctions, a minimum refundable deposit is required. The deposit amount varies based on the vehicle class and destination country. The vehicle will be placed on hold only upon the successful clearance of the deposit.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">2. Payment Terms</h2>
            <p>Full payment must be completed within 5 working days after the final invoice (Proforma Invoice) is issued. Acceptable methods of payment include Telegraphic Transfer (TT) and Letter of Credit (LC) for corporate clients. All bank charges must be borne by the buyer.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">3. Cancellations & Refunds</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>If you cancel a booking before the vehicle is purchased at auction, the deposit will be fully refunded minus banking fees.</li>
              <li>If cancellation occurs after a successful auction bid or stock reservation, a cancellation penalty will apply to cover auction fees and domestic logistics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">4. Shipping & Logistics</h2>
            <p>Nexca acts as an agent to arrange shipping on your behalf. While we strive to secure the earliest available vessel, shipping schedules are subject to change due to weather, port congestion, and shipping line operational delays. Nexca is not liable for indirect losses caused by shipping delays.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">5. Import Regulations</h2>
            <p>It is solely the buyer's responsibility to verify the import regulations of the destination country, including year restrictions, emission standards, and required inspections (e.g., JEVIC, QISJ, EAA). Nexca will not be held responsible if a purchased vehicle cannot be registered in your country.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
