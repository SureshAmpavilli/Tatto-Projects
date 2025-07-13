import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy – E-Advocate Services</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Last Updated: [Insert Date]</p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              E-Advocate Services is committed to protecting your privacy. This Privacy Policy outlines how we collect,
              use, and protect your data in compliance with Indian IT laws and Bar Council of India (BCI) norms. By accessing
              our website or mobile app, you agree to the terms of this policy.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. Data Collection</h2>
            <p>
              We collect personal data including name, contact details, email, Bar Council ID (for advocates), profile details,
              and legal needs (for clients). This information is collected during registration, profile setup, and while using
              the platform.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. Use of Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Create user profiles (Advocate/Client)</li>
              <li>Facilitate matching and communication</li>
              <li>Provide location-based legal services</li>
              <li>Verify professional credentials (BCI ID verification)</li>
              <li>Improve app functionality and user experience</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Data Sharing & Disclosure</h2>
            <p>
              E-Advocate Services does not share your data with any third-party without explicit consent, except:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To comply with legal obligations</li>
              <li>When required by court orders or Bar Council requests</li>
              <li>For internal audits and security assessments</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">5. Advocate Compliance with BCI</h2>
            <p>
              All advocate data is collected, verified, and displayed in accordance with BCI rules. No promotional, misleading,
              or advertising content is allowed under Rule 36 of the BCI Rules.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">6. User Rights</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access their data</li>
              <li>Edit/update their profile</li>
              <li>Request deletion of their account</li>
              <li>Opt out of non-essential communications</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">7. Security Measures</h2>
            <p>
              We use SSL encryption, secure databases, and restricted access policies to protect user data.
              Passwords are encrypted and sensitive data is not stored beyond required durations.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">8. Cookies & Tracking</h2>
            <p>
              We use minimal cookies for user session tracking and app analytics. No personal data is stored in cookies.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">9. Children's Privacy</h2>
            <p>
              Our services are not intended for users under 18 years of age.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">10. Updates to Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Users will be notified of any significant changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
            <p>
              For any privacy-related queries, contact us at:
              <br />
              Email:{' '}
              <a
                href="mailto:support@eadvocateservices.in"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                support@eadvocateservices.in
              </a>
              <br />
              Phone: +91-XXXXXXXXXX
            </p>
          </section>

          <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-10">
            © {new Date().getFullYear()} E-Advocate Services – All rights reserved.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
