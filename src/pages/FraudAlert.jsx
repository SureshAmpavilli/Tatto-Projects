import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FraudAlertPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-2">⚠️ Fraud Alert – E‑Advocate Services</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Last Updated: [Insert Date]</p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300">
              E‑Advocate Services is committed to ensuring a safe and trustworthy platform for clients and legal professionals.
              This Fraud Alert policy outlines the types of fraud we guard against, user responsibilities, and actions we take 
              to comply with Bar Council of India (BCI) norms and the Advocates Act, 1961.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. Zero Tolerance Policy</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Misrepresentation of identity or credentials</li>
              <li>Unauthorized practice of law</li>
              <li>Collection of fees without offering services</li>
              <li>Impersonating an advocate or client</li>
              <li>Soliciting or advertising legal services in violation of BCI Rule 36</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. Advocate Verification</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              All advocates on our platform must:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Provide a valid Bar Council of India registration ID</li>
              <li>Upload a copy of their Bar Certificate</li>
              <li>Be verified by our internal team before profile approval</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Fake or fraudulent profiles are rejected or removed immediately.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Client Awareness Guidelines</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Always check the advocate’s verified badge and profile</li>
              <li>Never make payments outside the app or without official invoices</li>
              <li>Report any suspicious behavior or fraudulent request immediately</li>
              <li>Avoid sharing confidential information before verification</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">5. Reporting Suspicious Activity</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Users can report fraud or suspicious activity via:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Email: <a href="mailto:report@eadvocateservices.in" className="text-blue-600 dark:text-blue-400 underline">report@eadvocateservices.in</a></li>
              <li>In‑app report button on advocate/client profile</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              All reports are confidential and investigated within 24–48 hours.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">6. Platform Action</h2>
            <p className="text-gray-700 dark:text-gray-300">
              On identification of fraud, we may:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Suspend or permanently ban accounts</li>
              <li>Report the user to appropriate legal authorities</li>
              <li>Notify the Bar Council of India or relevant State Bar Council</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">7. Legal Consequences</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Engaging in fraud through the E‑Advocate Services platform may result in:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Legal action under the Indian Penal Code (IPC)</li>
              <li>Disciplinary proceedings under the Advocates Act</li>
              <li>Bar Council disqualification or license cancellation</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">8. Our Commitment</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We strive to maintain transparency, safety, and legal compliance on our platform. Fraud prevention is a shared 
              responsibility between users and the E‑Advocate Services team.
            </p>
          </section>

          <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">
            &copy; {new Date().getFullYear()} E‑Advocate Services – All rights reserved.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FraudAlertPage;
