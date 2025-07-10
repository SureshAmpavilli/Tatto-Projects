import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LegalNoticesPage = () => {
  return (
    <div className="">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Summons & Legal Notices</h1>

          <p className="mb-4">
            AdvocateServices.com is a platform connecting verified advocates and clients. We respect the law and cooperate
            with all valid legal processes. This page outlines the procedures for sending or responding to court summons,
            statutory notices, or law enforcement requests.
          </p>

          <h2 className="text-xl font-semibold mb-2">1. Official Communication Address</h2>
          <p className="mb-4">
            All legal notices, court summons, or statutory documents must be addressed to:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-6">
            <p className="font-medium">Legal Compliance Department</p>
            <p>AdvocateServices Legal Pvt. Ltd.</p>
            <p>123 Legal Hub, Sector 7</p>
            <p>New Delhi, India - 110011</p>
            <p>Email: <a href="mailto:legal@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">legal@advocateservices.com</a></p>
          </div>

          <h2 className="text-xl font-semibold mb-2">2. Valid Notice Requirements</h2>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Must include sender’s full name and contact details</li>
            <li>Clearly mention the purpose of notice and reference documents</li>
            <li>Attach copy of court/agency order, if applicable</li>
            <li>Specify deadline for response, if any</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">3. How We Process Legal Notices</h2>
          <p className="mb-4">
            Upon receiving a valid legal notice:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>We acknowledge receipt within 3–5 business days</li>
            <li>Verify the authenticity and jurisdiction of the request</li>
            <li>Notify the involved user or advocate (if necessary)</li>
            <li>Respond as per applicable laws or court requirements</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">4. Advocate Responsibility</h2>
          <p className="mb-4">
            Advocates listed on our platform are independent professionals and solely responsible for their legal obligations.
            We may assist in routing notices to the concerned advocate but are not liable for their individual conduct.
          </p>

          <h2 className="text-xl font-semibold mb-2">5. Emergency Law Enforcement Requests</h2>
          <p className="mb-4">
            In case of time-sensitive requests from government agencies, we provide expedited review and assistance, subject
            to verification. Contact: <a href="mailto:emergency@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">emergency@advocateservices.com</a>
          </p>

          <h2 className="text-xl font-semibold mb-2">6. Retention of Documentation</h2>
          <p className="mb-4">
            All legal notices and responses are archived securely for a minimum of 5 years, as required by law or internal policy.
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

export default LegalNoticesPage;
