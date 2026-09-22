export default function PaymentOptionsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Payment Options</h1>
        <div className="space-y-6 text-[13px] md:text-sm text-gray-600 leading-relaxed">
          <p>We accept secure international payments via the following methods:</p>
          
          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">Telegraphic Transfer (T/T)</h2>
            <p>The most common and secure method for international transactions. Bank transfers usually take 2 to 3 business days to clear in our Japanese bank accounts. All bank transfer fees must be covered by the remitter.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">Letter of Credit (L/C)</h2>
            <p>Available for corporate clients and bulk orders. Please contact our sales team to confirm if L/C terms are accepted for your specific destination country.</p>
          </section>

          <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 mt-6 text-orange-800">
            <strong>Security Warning:</strong> Nexca will only request payments to our official bank accounts registered in Japan. Always verify our bank details on your Proforma Invoice before making a transfer.
          </div>
        </div>
      </div>
    </div>
  );
}
