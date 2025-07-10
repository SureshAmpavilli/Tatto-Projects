import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyFeaturesPage = () => {
  return (
    <div className="">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Features</h1>

          <p className="mb-4">
            AdvocateServices.com is committed to protecting your data and privacy. We implement strong technical and organizational
            safeguards to ensure that your information is handled securely and transparently. Below are the key privacy-focused
            features built into our platform.
          </p>

          <h2 className="text-xl font-semibold mb-2">1. End-to-End Data Encryption</h2>
          <p className="mb-4">
            All communications and sensitive data (e.g., case details, identity documents, payment info) are protected using
            industry-standard encryption protocols, both in transit and at rest.
          </p>

          <h2 className="text-xl font-semibold mb-2">2. Secure Advocate Verification</h2>
          <p className="mb-4">
            All listed advocates go through a rigorous KYC verification process to prevent impersonation and fraud. Only verified
            legal professionals are allowed to offer services.
          </p>

          <h2 className="text-xl font-semibold mb-2">3. Private Consultations</h2>
          <p className="mb-4">
            Your messages, documents, and consultations are private. We never share them with third parties unless required by law or
            explicitly authorized by you.
          </p>

          <h2 className="text-xl font-semibold mb-2">4. Session Auto-Logout</h2>
          <p className="mb-4">
            To minimize the risk of unauthorized access, our system automatically logs users out after extended inactivity.
          </p>

          <h2 className="text-xl font-semibold mb-2">5. Data Access Controls</h2>
          <p className="mb-4">
            Only authorized support personnel have access to your account information, and only when necessary to resolve service-related
            issues. All access is logged and audited.
          </p>

          <h2 className="text-xl font-semibold mb-2">6. Profile Visibility Settings</h2>
          <p className="mb-4">
            Users and advocates can control the visibility of their public profile information (such as contact number or location)
            through their privacy settings.
          </p>

          <h2 className="text-xl font-semibold mb-2">7. GDPR & Local Law Compliance</h2>
          <p className="mb-4">
            We comply with applicable privacy laws including the GDPR, IT Act (India), and others. You may request access to, correction of,
            or deletion of your data at any time.
          </p>

          <h2 className="text-xl font-semibold mb-2">8. No Selling of Personal Data</h2>
          <p className="mb-4">
            We do not sell, rent, or trade your personal data to advertisers or third parties. Your trust and privacy are fundamental to
            our values.
          </p>

          <h2 className="text-xl font-semibold mb-2">9. Two-Factor Authentication (2FA)</h2>
          <p className="mb-6">
            For additional account protection, users can enable two-factor authentication via SMS or authenticator apps.
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

export default PrivacyFeaturesPage;
