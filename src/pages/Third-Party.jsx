import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThirdPartyTermsForAdvocates = () => {
  return (
    <div>
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Third-Party Terms of Use for Advocates</h1>

          <p className="mb-4">
            This policy outlines the terms under which advocates using AdvocateServices.com interact with third-party tools,
            platforms, or services that are integrated into or accessible through our platform.
          </p>

          <h2 className="text-xl font-semibold mb-4">1. Third-Party Integrations</h2>
          <p className="mb-4">
            AdvocateServices.com may use third-party services such as:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Payment processors for fee collection and payouts</li>
            <li>Video conferencing or communication tools (e.g., Zoom, WhatsApp)</li>
            <li>Calendar and appointment scheduling tools</li>
            <li>Document sharing and e-signature platforms</li>
            <li>Identity verification services</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">2. Advocate Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              You must comply with the individual terms and privacy policies of any third-party service used in
              connection with AdvocateServices.com.
            </li>
            <li>
              You are responsible for maintaining the confidentiality and security of any credentials used to access
              third-party tools.
            </li>
            <li>
              You may not misuse or attempt to reverse engineer any third-party APIs, scripts, or platforms.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">3. Data Sharing</h2>
          <p className="mb-4">
            To enable seamless services, AdvocateServices.com may share limited data (e.g., name, contact info, schedules)
            with approved third-party platforms. By using the platform as an advocate, you agree to this necessary exchange.
          </p>

          <h2 className="text-xl font-semibold mb-4">4. Payment & Financial Tools</h2>
          <p className="mb-4">
            Advocate earnings are processed through third-party payment providers. By receiving payments through our
            platform, you agree to comply with the terms of the payment gateway (e.g., Razorpay, Stripe, PayPal).
          </p>

          <h2 className="text-xl font-semibold mb-4">5. Service Limitations</h2>
          <p className="mb-4">
            AdvocateServices.com is not liable for downtime, errors, or losses caused by third-party platforms. We will make
            reasonable efforts to maintain service quality but cannot guarantee availability or performance of integrated
            services.
          </p>

          <h2 className="text-xl font-semibold mb-4">6. Changes to Third-Party Tools</h2>
          <p className="mb-4">
            The list of third-party integrations may change without prior notice. It is your responsibility to review
            updates and ensure continued compliance with applicable third-party terms.
          </p>

          <h2 className="text-xl font-semibold mb-4">7. Contact & Support</h2>
          <p className="mb-6">
            For concerns or questions related to third-party tools or integrations, contact us at:
            <a
              href="mailto:support@advocateservices.com"
              className="text-blue-600 dark:text-blue-400 underline ml-1"
            >
              support@advocateservices.com
            </a>.
          </p>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            © {new Date().getFullYear()} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThirdPartyTermsForAdvocates;
