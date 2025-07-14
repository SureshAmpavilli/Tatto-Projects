import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const clientRights = [
  ['Privacy & Confidentiality', 'We don’t sell or advertise your data'],
  ['Access to Verified Lawyers', 'No fake or unlicensed listings allowed'],
  ['Grievance Redressal', 'File complaints against misconduct or non-response'],
  ['No Solicitation', 'Advocates cannot solicit or advertise services'],
];

const ClientHowItWorksPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">👥 How It Works – For Clients</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Ethical, Transparent, and Secure Access to Legal Help
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            E-Advocate Services is India’s trusted digital bridge between individuals seeking legal help and Bar Council-verified advocates. The process ensures user safety, data privacy, and full compliance with BCI norms.
          </p>

          {/* Step 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">✅ Step 1: Sign Up as a Client</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Click on “Register as Client” and fill in:</p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Name</li>
              <li>Mobile Number (OTP Verified)</li>
              <li>Email ID (optional)</li>
              <li>City/Location</li>
              <li>Legal Issue Type (e.g., Property, Family, Criminal, etc.)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-2">🔐 Your data is protected and only shared with advocates you choose to connect with.</p>
          </section>

          {/* Step 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">✅ Step 2: Find Relevant Advocates</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">After sign-up, the system shows verified advocates based on:</p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Location</li>
              <li>Legal issue (department)</li>
              <li>Language preference</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-2">🚫 No ranking, advertisement, or paid visibility — strictly factual listings only in accordance with Rule 36 of BCI.</p>
          </section>

          {/* Step 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">✅ Step 3: View Advocate Profile Details</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
                <thead className="bg-gray-200 dark:bg-gray-800">
                  <tr>
                    <th className="p-3 text-left font-medium">Field</th>
                    <th className="p-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                  <tr>
                    <td className="p-3">👨‍⚖️ Name & Enrollment Number</td>
                    <td className="p-3">As verified with State Bar Council</td>
                  </tr>
                  <tr>
                    <td className="p-3">📚 Department / Area of Practice</td>
                    <td className="p-3">e.g., Criminal, Family, Civil</td>
                  </tr>
                  <tr>
                    <td className="p-3">📍 Location & Court Jurisdiction</td>
                    <td className="p-3">e.g., Hyderabad – High Court</td>
                  </tr>
                  <tr>
                    <td className="p-3">🗣️ Languages Spoken</td>
                    <td className="p-3">To help you communicate better</td>
                  </tr>
                  <tr>
                    <td className="p-3">🕒 Experience</td>
                    <td className="p-3">Years of active legal practice</td>
                  </tr>
                  <tr>
                    <td className="p-3">📎 Documents (Optional)</td>
                    <td className="p-3">Verified certificates (no promotional media shown)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">🚫 You will not see reviews, promotions, ads, or offers — in line with legal ethics.</p>
          </section>

          {/* Step 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">✅ Step 4: Connect with the Advocate</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Use the in-app chat or call request to contact the advocate. The advocate may respond to schedule a consultation:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Over chat</li>
              <li>On voice/video call (within app)</li>
              <li>Or in person (location-based)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-2">🧑‍⚖️ All communications are private, encrypted, and not accessible to any third party.</p>
          </section>

          {/* Step 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">✅ Step 5: Pay & Proceed (If Required)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              If the advocate sets a consultation fee, you’ll be notified clearly. Make payment via secure UPI/card gateway.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              You’ll receive an invoice and can track appointment status. E-Advocate Services does not take any commission or promote fee-based visibility.
            </p>
          </section>

          {/* Step 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">✅ Step 6: Track Progress & Close</h2>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1 mb-2">
              <li>Upload or receive legal documents (if applicable)</li>
              <li>Mark case/consultation as “closed” when done</li>
              <li>Provide optional feedback (factual only – no public reviews)</li>
            </ul>
          </section>

          {/* Client Rights */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">🔐 Client Rights & Platform Ethics</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
                <thead className="bg-gray-200 dark:bg-gray-800">
                  <tr>
                    <th className="p-3 text-left font-medium">Your Rights</th>
                    <th className="p-3 text-left font-medium">Platform's Responsibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                  {clientRights.map(([right, responsibility], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{right}</td>
                      <td className="p-3">{responsibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Grievances */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">🧾 Grievances or Assistance</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              If you face any misconduct, fraud, or difficulty:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>📧 <a href="mailto:grievance@eadvocateservices.in" className="underline text-blue-600 dark:text-blue-400">grievance@eadvocateservices.in</a></li>
              <li>📞 <a href="tel:+91XXXXXXXXXX" className="underline text-green-600 dark:text-green-400">+91-XXXXXXXXXX</a></li>
              <li>📥 In-App Grievance Form (under Settings → Help)</li>
            </ul>
          </section>

          <p className="text-gray-500 dark:text-gray-400 mt-6 text-center text-sm">
            &copy; {new Date().getFullYear()} E-Advocate Services – All rights reserved.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClientHowItWorksPage;
