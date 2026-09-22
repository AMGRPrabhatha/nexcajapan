export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Privacy & Cookie Policy</h1>
        <div className="space-y-6 text-[13px] md:text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">1. Data Collection</h2>
            <p>Nexca collects personal data that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products, or otherwise contact us. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">2. How We Use Your Data</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To facilitate account creation and logon process.</li>
              <li>To send you marketing and promotional communications regarding available stock and auction news.</li>
              <li>To fulfill and manage your vehicle orders, payments, and shipping logistics.</li>
              <li>To respond to user inquiries and offer support to users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">3. Cookies and Tracking Technologies</h2>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy. We use functional cookies to remember your preferences (like currency and language) and analytical cookies to understand how our website is being used.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">4. Data Security</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-2">5. Third-Party Sharing</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services (such as sharing your details with shipping lines and clearing agents), to protect your rights, or to fulfill business obligations.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
