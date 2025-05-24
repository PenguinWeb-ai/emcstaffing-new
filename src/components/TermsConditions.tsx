import React, { useEffect } from 'react';

function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-secondary mb-6">Terms and Conditions</h1>
          <p className="text-gray-600 mb-8">Effective Date: March 15, 2025</p>

          <div className="prose max-w-none text-secondary">
            <p className="mb-6">
              PLEASE READ CAREFULLY – These Terms and Conditions ("Agreement") constitute a binding legal agreement between EMC Staffing, a Florida corporation ("Company," "we," "our," or "us"), and you ("you," "your," "user," or "participant") governing your access to and use of the Company's services, website, platform, and staffing arrangements (collectively, the "Services").
            </p>

            <p className="mb-8">
              By accessing or using any part of our Services, you unconditionally agree to be bound by the terms of this Agreement. If you do not agree, you must not use or access the Services.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Nature of Services</h2>
                <p>
                  Company provides a platform to facilitate the identification, vetting, and placement of emergency management personnel ("Personnel") with third-party entities ("Clients") in the context of disaster relief, recovery, and response efforts. Company does not warrant or guarantee continuous engagement or employment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. No Employment Relationship</h2>
                <p>
                  Use of our Services does not create an employment relationship between Personnel and Company unless explicitly established by a written agreement. Personnel may be engaged as independent contractors, contingent workers, or employees of the Client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Eligibility</h2>
                <p className="mb-4">You represent and warrant that you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Are at least 18 years of age;</li>
                  <li>Have the legal capacity and authority to enter into this Agreement;</li>
                  <li>Have provided accurate and truthful information;</li>
                  <li>Are in compliance with all applicable laws and licensing requirements.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Use of Platform</h2>
                <p className="mb-4">You agree to use the Services solely for lawful purposes and in accordance with this Agreement. You shall not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Engage in any form of fraud, misrepresentation, or unauthorized access;</li>
                  <li>Circumvent, disable, or interfere with security features;</li>
                  <li>Disclose confidential or proprietary information obtained through the platform.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Client Responsibilities</h2>
                <p className="mb-4">Clients agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comply with all applicable federal, state, and local labor and safety laws;</li>
                  <li>Ensure proper onboarding, orientation, and supervision of assigned Personnel;</li>
                  <li>Not misclassify Personnel or engage in discriminatory or unlawful conduct.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Disclaimer of Warranties</h2>
                <p>
                  The Services are provided "AS IS" and "AS AVAILABLE" without warranty of any kind. To the fullest extent permissible by law, Company disclaims all express or implied warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by law, in no event shall Company, its affiliates, officers, directors, employees, or agents be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages (including loss of profits, data, or business opportunities), whether based in contract, tort, or otherwise, arising out of or in connection with your use of the Services.
                </p>
                <p>
                  Company's aggregate liability shall not exceed the total amount paid by you (if any) for use of the Services during the twelve (12) months preceding the event giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless Company, its affiliates, and their respective officers, directors, and employees from and against all claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your breach of this Agreement;</li>
                  <li>Your violation of any law or rights of a third party;</li>
                  <li>Your conduct or misconduct while using our Services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Intellectual Property</h2>
                <p>
                  All content, trademarks, service marks, and intellectual property on our platform are the exclusive property of Company or its licensors. You may not reproduce, modify, or distribute any content without prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                <p>
                  We reserve the right to suspend or permanently terminate your access to the Services at any time, with or without notice, for any violation of this Agreement or applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Governing Law and Venue</h2>
                <p>
                  This Agreement shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles. Any dispute arising hereunder shall be resolved exclusively in the state or federal courts located in Orange County, Florida.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Dispute Resolution</h2>
                <p>
                  All disputes arising under or in connection with this Agreement shall be resolved through binding arbitration conducted under the rules of the American Arbitration Association. The arbitration shall take place in Orlando, Florida. Each party shall bear its own costs unless otherwise awarded.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Severability</h2>
                <p>
                  If any provision of this Agreement is found invalid or unenforceable, the remainder shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">14. Entire Agreement</h2>
                <p>
                  This Agreement constitutes the entire understanding between you and Company and supersedes all prior oral or written agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">15. Amendments</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Material changes will be posted with an updated effective date. Continued use of the Services constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">16. Contact Us</h2>
                <div className="mt-4">
                  <p>EMC Staffing</p>
                  <p>Legal Department</p>
                  <p>info@emc-staffing.com</p>
                  <p>(689) 283-9646F</p>
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

export default TermsConditions;