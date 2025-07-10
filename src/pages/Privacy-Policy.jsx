import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p className="mb-4">
            AdvocateServices.com (“we”, “us”, or “our”) respects your privacy and is committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our platform, services,
            or mobile application.
          </p>

          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li><strong>Personal Information:</strong> Name, email, phone number, ID proof, professional qualifications, etc.</li>
            <li><strong>Account Information:</strong> Login data, payment preferences, settings.</li>
            <li><strong>Usage Data:</strong> Pages visited, device information, IP address, location.</li>
            <li><strong>Case & Legal Info:</strong> If submitted by users for consultation purposes.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>To verify and onboard advocates</li>
            <li>To enable secure advocate-client communication</li>
            <li>To process payments and transactions</li>
            <li>To monitor and improve platform performance</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">3. Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar technologies to personalize content, analyze traffic, and enhance your experience.
            You can manage cookie preferences in your browser. Read our full <a href="/cookie-policy" className="text-blue-600 dark:text-blue-400 underline">Cookie Policy</a>.
          </p>

          <h2 className="text-xl font-semibold mb-2">4. Data Sharing & Disclosure</h2>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>With advocates or clients you engage with</li>
            <li>With third-party service providers (e.g., payment gateways, hosting)</li>
            <li>To comply with law enforcement or court orders</li>
            <li>To prevent fraud or illegal activities</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p className="mb-4">
            We implement industry-standard security measures such as SSL encryption, access control, and regular audits to protect your data.
            However, no method of transmission is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Access, update or delete your personal information</li>
            <li>Withdraw consent for processing</li>
            <li>Request a copy of your data in portable format</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
          <p className="mb-4">
            We retain your information for as long as your account is active or as needed to fulfill our legal obligations,
            enforce agreements, or resolve disputes.
          </p>

          <h2 className="text-xl font-semibold mb-2">8. Children’s Privacy</h2>
          <p className="mb-4">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.
            If we become aware, we will delete it promptly.
          </p>

          <h2 className="text-xl font-semibold mb-2">9. International Transfers</h2>
          <p className="mb-4">
            Your data may be stored or processed in servers located outside your country. We ensure appropriate safeguards
            are in place to comply with applicable data protection laws.
          </p>

          <h2 className="text-xl font-semibold mb-2">10. Updates to This Policy</h2>
          <p className="mb-4">
            We may revise this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.
            Continued use of the platform signifies acceptance of the updated policy.
          </p>

          <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
          <p className="mb-6">
            If you have questions or concerns regarding this Privacy Policy, contact us at:<br />
            <a href="mailto:privacy@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">
              privacy@advocateservices.com
            </a>
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

export default PrivacyPolicyPage;
