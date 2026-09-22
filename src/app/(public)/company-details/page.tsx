export default function CompanyDetailsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Company Details</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px] md:text-sm text-gray-600">
          <div className="space-y-6">
            <section>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Company Name</h2>
              <p className="text-base font-semibold text-gray-900">Nexca Co., Ltd.</p>
            </section>
            
            <section>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Head Office Address</h2>
              <p className="text-gray-800">
                〒455-0023<br />
                Aichi-ken, Nagoya Shi, Minato ku<br />
                1 Higashitsukiji-cho<br />
                Higashitsukiji-so 1206<br />
                Japan
              </p>
            </section>

            <section>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Business Hours</h2>
              <p className="text-gray-800">Monday - Saturday<br />09:00 AM - 18:00 PM (JST)</p>
            </section>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Contact Numbers</h2>
              <p className="text-gray-800">
                <span className="font-semibold text-gray-500 w-16 inline-block">Phone:</span> +81 80-5166-2345<br />
                <span className="font-semibold text-gray-500 w-16 inline-block">WhatsApp:</span> +81 80-5166-2345<br />
                <span className="font-semibold text-gray-500 w-16 inline-block">Fax:</span> +81 52 627 0204
              </p>
            </section>
            
            <section>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email Contacts</h2>
              <p className="text-gray-800">
                <span className="font-semibold text-gray-500 w-16 inline-block">General:</span> nexcainfo@gmail.com<br />
                <span className="font-semibold text-gray-500 w-16 inline-block">Sales:</span> sales@nexca.jp
              </p>
            </section>

            <section>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Business Activities</h2>
              <ul className="list-disc pl-5 mt-1 text-gray-800 space-y-1">
                <li>Export of used and new Japanese vehicles</li>
                <li>Direct auction bidding services</li>
                <li>Heavy machinery and commercial truck export</li>
                <li>International shipping and logistics coordination</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
