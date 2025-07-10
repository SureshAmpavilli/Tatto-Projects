import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfServicePage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

          <p className="mb-4">
            Welcome to AdvocateServices.com. These Terms of Service govern your access to and use of our website, services,
            and applications. By using our platform, you agree to these terms in full.
          </p>

          <h2 className="text-xl font-semibold mb-4">1. Eligibility</h2>
          <p className="mb-4">
            To use our services, you must be at least 18 years of age and capable of entering into binding contracts under
            applicable law. If you are representing a law firm or organization, you must be authorized to bind that entity.
          </p>

          <h2 className="text-xl font-semibold mb-4">2. Advocate Verification</h2>
          <p className="mb-4">
            All advocates on our platform are required to provide valid documentation for identity, qualifications, and bar
            registration. We reserve the right to suspend or terminate accounts with false or misleading information.
          </p>

          <h2 className="text-xl font-semibold mb-4">3. User Conduct</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Do not engage in unlawful, offensive, or fraudulent behavior.</li>
            <li>Respect the privacy and confidentiality of all users and advocates.</li>
            <li>Do not impersonate others or misrepresent your identity.</li>
            <li>Do not attempt to harm or overload the platform through technical means.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">4. Payment & Fees</h2>
          <p className="mb-4">
            All payments to advocates must be made via the AdvocateServices.com platform. We are not responsible for any
            losses incurred due to payments made outside of our system. Our platform may charge service or transaction fees,
            which will be clearly communicated before payment.
          </p>

          <h2 className="text-xl font-semibold mb-4">5. Disclaimers</h2>
          <p className="mb-4">
            AdvocateServices.com does not provide legal advice. We are a technology platform connecting users with qualified
            legal professionals. Any legal service or representation is provided solely by the advocate and not by the
            platform.
          </p>

          <h2 className="text-xl font-semibold mb-4">6. Termination</h2>
          <p className="mb-4">
            We reserve the right to suspend or terminate your access to the platform at any time, with or without cause or
            notice, particularly in cases of policy violation or suspected fraud.
          </p>

          <h2 className="text-xl font-semibold mb-4">7. Modifications</h2>
          <p className="mb-4">
            We may revise these Terms of Service from time to time. Continued use of the platform after changes constitutes
            acceptance of the updated terms.
          </p>

          <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
          <p className="mb-6">
            For questions or concerns regarding these Terms of Service, please email us at
            <a href="mailto:support@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline ml-1">
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

export default TermsOfServicePage;
