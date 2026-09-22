export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Terms of Use</h1>
        <div className="space-y-6 text-[13px] md:text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">1. Acceptance of Terms</h2>
            <p>By accessing and using the Nexca website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">2. Description of Service</h2>
            <p>Nexca provides users with access to a rich collection of resources, including vehicle inventory, auction sheets, and international shipping coordination. You understand and agree that the service may include certain communications from Nexca, such as service announcements and administrative messages.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">3. User Conduct</h2>
            <p>You agree not to use the service to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Upload, post, email, or otherwise transmit any content that is unlawful, harmful, or abusive.</li>
              <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
              <li>Interfere with or disrupt the service or servers or networks connected to the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">4. Modification of Terms</h2>
            <p>Nexca reserves the right to change these conditions from time to time as it sees fit and your continued use of the site will signify your acceptance of any adjustment to these terms.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">5. Disclaimer of Warranties</h2>
            <p>The materials on Nexca's website are provided on an 'as is' basis. Nexca makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
