import React, { useEffect } from 'react';

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-secondary mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: March 15, 2025</p>

          <div className="prose max-w-none text-secondary">
            <p className="mb-6">
              This Privacy Policy ("Policy") sets forth the data handling and privacy practices of EMC Staffing, a Florida corporation, with principal offices located in Orlando, Florida ("Company," "we," "us," or "our"), as they relate to the collection, use, processing, disclosure, retention, and protection of personal data.
            </p>

            <p className="mb-8">
              By accessing our website, mobile application, or utilizing our services, you ("you," "your," "user," or "data subject") acknowledge that you have read, understood, and agree to the terms of this Policy. If you do not agree, you must immediately discontinue use of our services.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Scope</h2>
                <p>
                  This Policy applies to personal data collected from applicants, contractors, staff, clients, and visitors to our website in the context of our emergency staffing and disaster relief services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Data Categories Collected</h2>
                <p className="mb-4">We may collect, directly or indirectly, the following categories of personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identifying Information:</strong> Full legal name, date of birth, contact information, and government-issued identification.</li>
                  <li><strong>Professional Credentials:</strong> Employment history, licenses, certifications, training, and references.</li>
                  <li><strong>Sensitive Personal Information:</strong> Background check results, drug screening results, and health information as required by law or assignment.</li>
                  <li><strong>Usage and Technical Data:</strong> IP addresses, browser types, device identifiers, geolocation data, and metadata collected via cookies and tracking tools.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Legal Basis for Processing</h2>
                <p className="mb-4">We process personal data based on one or more of the following legal bases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Consent;</li>
                  <li>Performance of a contract;</li>
                  <li>Legal obligation;</li>
                  <li>Legitimate interest;</li>
                  <li>Public interest (emergency management).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Purpose of Collection and Use</h2>
                <p className="mb-4">Data is collected and processed strictly for lawful purposes, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personnel placement and assignment matching;</li>
                  <li>Compliance with legal, contractual, or regulatory obligations;</li>
                  <li>Emergency notification and deployment logistics;</li>
                  <li>Internal business operations, analytics, and risk management.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Data Sharing and Disclosure</h2>
                <p className="mb-4">We may disclose personal data to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clients and Partner Organizations for the purpose of staffing engagements;</li>
                  <li>Third-party vendors and subprocessors bound by confidentiality and data protection agreements;</li>
                  <li>Governmental, judicial, or regulatory authorities where required by applicable law or pursuant to valid legal process.</li>
                </ul>
                <p className="mt-4">
                  We do not sell personal data. We do not share personal data with unaffiliated third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
                <p>
                  We maintain administrative, physical, and technical safeguards designed to protect the confidentiality, integrity, and availability of personal data. However, no method of transmission or storage is 100% secure, and we disclaim any liability for unauthorized access beyond our reasonable control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
                <p>
                  Personal data is retained for as long as necessary to fulfill the purposes outlined in this Policy or to comply with applicable laws, whichever is longer. Data may be anonymized or aggregated for archival and analytic purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
                <p className="mb-4">Subject to jurisdiction and applicable law, you may have rights to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, rectify, or erase your data;</li>
                  <li>Restrict or object to certain processing;</li>
                  <li>Withdraw consent (where processing is based on consent);</li>
                  <li>Lodge a complaint with a supervisory authority.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
                <p>
                  Our services are not directed toward individuals under 18 years of age. We do not knowingly collect data from minors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
                <p>
                  If data is transferred outside the jurisdiction of origin, we will implement appropriate safeguards, such as Standard Contractual Clauses or other legal mechanisms, to ensure adequate protection.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Amendments</h2>
                <p>
                  We reserve the right to modify this Policy at any time. Material changes will be published on our website and become effective upon posting. Continued use constitutes acceptance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                <p>For questions regarding this Policy, please contact:</p>
                <div className="mt-4">
                  <p>Privacy Officer</p>
                  <p>EMC Staffing</p>
                  <p>info@emc-staffing.com</p>
                  <p>(689) 283-9646</p>
                  <p>Orlando, Florida</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;