import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const profileFields = [
  ['👤 Name & Enrollment Number', 'As per BCI or State Bar records'],
  ['🏛️ Department / Area of Practice', 'Criminal, Civil, Family, etc.'],
  ['📍 Practice Location', 'City, Court name'],
  ['🗣️ Languages Known', 'To assist regional clients'],
  ['📄 Years of Experience', 'Auto-calculated from enrollment date'],
  ['📎 Document Uploads (Optional)', 'Certificates, Legal Opinions, ID (no promotional media allowed)'],
  ['📞 Secure Contact Options', 'Call/Chat via platform (client contact hidden unless accepted)'],
];

const ethicalGuidelines = [
  ['Display your credentials & practice info', 'Do not promote discounts or fees'],
  ['Use real, verified documents', 'Avoid promotional slogans'],
  ['Respond professionally to client inquiries', 'Do not solicit or advertise legal services'],
];

const AdvocateHowItWorksPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">⚖️ How Advocate Profiles Work – E-Advocate Services</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Building a Trusted Digital Identity for Legal Professionals
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            E-Advocate Services empowers verified legal professionals to build a transparent, ethical, and functional profile that allows clients to discover and connect with them — without violating the rules laid down by the Bar Council of India (BCI).
          </p>

          {/* Step 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">✅ Step 1: Register with Bar Council Verification</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Click on “Register as Advocate” and submit:</p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Bar Council ID / Enrollment Number</li>
              <li>Certificate of Practice</li>
              <li>Government-issued ID (Aadhaar/PAN)</li>
              <li>Choose Department (e.g., Criminal, Civil, Family, Corporate)</li>
              <li>Select Languages, Court Level, and Location(s) of Practice</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-2">🔒 All submissions are verified manually before profile activation.</p>
          </section>

          {/* Step 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">✅ Step 2: Profile Approval and Activation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Once documents are verified:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Your advocate profile goes live to clients seeking legal services in your department and region</li>
              <li>You will not be promoted, advertised, or ranked — in full compliance with BCI Rule 36</li>
              <li>Only neutral, factual data is displayed</li>
            </ul>
          </section>

          {/* Step 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">✅ Step 3: What Clients See in Your Profile</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
                <thead className="bg-gray-200 dark:bg-gray-800">
                  <tr>
                    <th className="p-3 text-left font-medium">Section</th>
                    <th className="p-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                  {profileFields.map(([section, desc], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{section}</td>
                      <td className="p-3">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">🚫 No fee rates, advertisements, slogans, endorsements, or promotional banners are shown.</p>
          </section>

          {/* Step 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">✅ Step 4: Managing Your Dashboard</h2>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Accept or reject client requests</li>
              <li>View appointment calendar</li>
              <li>Upload drafts or case files (optional, private to client only)</li>
              <li>Respond to client queries via secure chat</li>
              <li>Track your verified lead history</li>
              <li>Access grievance alerts or support if flagged</li>
            </ul>
          </section>

          {/* Ethical Guidelines */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">✅ Ethical Profile Guidelines (as per BCI)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
                <thead className="bg-gray-200 dark:bg-gray-800">
                  <tr>
                    <th className="p-3 text-left font-medium">Do ✅</th>
                    <th className="p-3 text-left font-medium">Don’t ❌</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                  {ethicalGuidelines.map(([doItem, dontItem], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{doItem}</td>
                      <td className="p-3">{dontItem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Rule 36 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">🛡️ BCI Rule 36 – Strict Compliance</h2>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>No rankings, paid boosts, or featured listings</li>
              <li>No promotional media or client reviews beyond factual ratings</li>
              <li>No involvement in client fees or negotiation</li>
              <li>Profiles reflect transparency, not marketing</li>
            </ul>
          </section>

          {/* Support */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">📢 Support for Advocates</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Need help updating your profile or verifying your ID?</p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>📧 <a href="mailto:advocate.support@eadvocateservices.in" className="underline text-blue-600 dark:text-blue-400">advocate.support@eadvocateservices.in</a></li>
              <li>📞 <a href="tel:+91XXXXXXXXXX" className="underline text-green-600 dark:text-green-400">+91-XXXXXXXXXX</a></li>
              <li>🕐 Mon–Sat, 10:00 AM – 6:00 PM IST</li>
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

export default AdvocateHowItWorksPage;
