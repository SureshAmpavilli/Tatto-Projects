import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HelpPage = () => {
  return (
    <div>
      <Header />

      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Help & Support – E-Advocate Services</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Welcome to the E-Advocate Services Help Center. We're here to assist you with any queries, issues, or concerns while using our app or website.
            We are committed to maintaining transparency, ethical compliance, and high-quality user support as per Bar Council of India (BCI) norms.
          </p>

          {/* FAQs */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🙋‍♂️ Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">1. How do I register as an Advocate?</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Go to the “Register” page → Select Advocate → Fill in your name, Bar Council ID, state, department, and upload your certificate.
                  Once verified, your profile will be activated.
                </p>
              </div>
              <div>
                <p className="font-medium">2. How do I register as a Client?</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Select Client Registration, fill in your details, legal issue type, and location. You’ll be matched with available advocates in your region.
                </p>
              </div>
              <div>
                <p className="font-medium">3. Is E-Advocate Services legally approved?</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes. We strictly follow BCI Rule 36 by not advertising or promoting any advocate. All listings are neutral and based on verified credentials only.
                </p>
              </div>
              <div>
                <p className="font-medium">4. Can I talk to the advocate directly?</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, once matched, you can chat or request a consultation via the secure in-app system.
                </p>
              </div>
              <div>
                <p className="font-medium">5. How are payments handled?</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Paid consultations or premium features are handled through secure third-party gateways (e.g., Razorpay). You’ll receive an invoice for every transaction.
                </p>
              </div>
            </div>
          </section>

          {/* Security & Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🛡️ Security & Privacy</h2>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 space-y-2">
              <li>We do not store sensitive legal data.</li>
              <li>All data is encrypted and complies with Indian data protection laws.</li>
              <li>Advocates must comply with Bar Council confidentiality norms.</li>
            </ul>
          </section>

          {/* Grievance & Complaints */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">📝 Grievance & Complaints</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">If you experience:</p>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 space-y-1 mb-2">
              <li>Advocate misconduct</li>
              <li>Account abuse or impersonation</li>
              <li>Technical issues or fraud</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              ➡️ Email: <a href="mailto:grievance@eadvocateservices.in" className="underline text-blue-600 dark:text-blue-400">grievance@eadvocateservices.in</a><br/>
              ➡️ Phone: <a href="tel:+91XXXXXXXXXX" className="underline text-green-600 dark:text-green-300">+91-XXXXXXXXXX</a>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Your complaint will be acknowledged within 24 hours and resolved within 15 working days.
            </p>
          </section>

          {/* Refund & Payment Issues */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">💸 Refund & Payment Issues</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">If you've faced:</p>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 space-y-1 mb-2">
              <li>A failed transaction</li>
              <li>Double charge</li>
              <li>Advocate didn’t respond after payment</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              Please submit a refund request to:<br/>
              📧 <a href="mailto:refunds@eadvocateservices.in" className="underline text-blue-600 dark:text-blue-400">refunds@eadvocateservices.in</a>
            </p>
          </section>

          {/* Bar Council Reporting */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🧑‍💼 Bar Council Reporting</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If an advocate violates professional conduct or falsely claims BCI affiliation, we will report the matter to the Bar Council of India or the relevant State Bar Council.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🔗 Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">We use verified third-party services for:</p>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Payment (e.g., Razorpay)</li>
              <li>OTP (e.g., Twilio, Msg91)</li>
              <li>Hosting (e.g., AWS)</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              No third-party has access to your legal conversations or files.
            </p>
          </section>

          {/* Contact Support */}
          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-4">📞 Contact Support</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Having trouble with login, registration, or profile? Contact us anytime:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>Support Email: <a href="mailto:support@eadvocateservices.in" className="underline text-blue-600 dark:text-blue-400">support@eadvocateservices.in</a></li>
              <li>Working Hours: Monday – Saturday, 10:00 AM – 6:00 PM IST</li>
              <li>Phone: <a href="tel:+91XXXXXXXXXX" className="underline text-green-600 dark:text-green-300">+91-XXXXXXXXXX</a></li>
            </ul>
          </section>

        

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            &copy; {new Date().getFullYear()} E-Advocate Services – All rights reserved.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HelpPage;
