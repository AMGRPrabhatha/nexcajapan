export default function OrderStatusPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Order / Shipment Status</h1>
        
        <div className="text-[13px] md:text-sm text-gray-600 leading-relaxed mb-10">
          <p className="mb-4">Track the progress of your vehicle from the moment of purchase to its arrival at your destination port. Please have your Chassis Number or Invoice Number ready when contacting our logistics team.</p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
            <svg className="w-8 h-8 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Check Your Status</h3>
          <p className="text-gray-600 text-sm mb-6">Our automated tracking portal is currently under maintenance. For immediate updates regarding your shipment, vessel name, ETD (Estimated Time of Departure), or ETA (Estimated Time of Arrival), please contact your dedicated agent or our logistics department.</p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/818051662345" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#20bd5a] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.073-1.895-.449-1.523-.629-2.527-2.148-2.604-2.25-.077-.102-.622-.828-.622-1.579 0-.751.391-1.12.53-1.27.14-.15.306-.188.408-.188.102 0 .204.002.293.007.094.005.22.02.322.253.111.253.375.918.408.986.033.068.055.148.01.238-.045.09-.068.146-.135.224-.068.078-.143.173-.204.233-.068.067-.139.14-.06.276.08.136.353.582.757.942.52.463.958.607 1.094.675.136.068.216.057.296-.034.08-.09.345-.405.437-.544.092-.139.183-.116.307-.07.124.046.788.372.924.44.136.068.226.102.26.16.034.057.034.333-.11.738z"/><path d="M12.004 2c-5.523 0-10 4.477-10 10 0 1.767.458 3.427 1.257 4.873l-1.261 4.607 4.747-1.246c1.394.76 2.979 1.196 4.667 1.196 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.25c-1.564 0-3.033-.438-4.3-1.201l-.308-.187-2.823.741.753-2.75-.205-.327c-.854-1.359-1.31-2.934-1.31-4.526 0-4.549 3.701-8.25 8.25-8.25 4.549 0 8.25 3.701 8.25 8.25 0 4.549-3.701 8.25-8.25 8.25z"/></svg>
              WhatsApp Us
            </a>
            <a href="mailto:nexcainfo@gmail.com" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-black transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
