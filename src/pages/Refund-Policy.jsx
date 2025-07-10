import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPolicyPage = () => {
  return (
    <div className="">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

          <p className="mb-4">
            AdvocateServices.com is committed to offering a fair and transparent refund process. This Refund Policy explains the
            conditions under which a user may request a refund, how requests are processed, and exceptions that apply.
          </p>

          <h2 className="text-xl font-semibold mb-2">1. Eligibility for Refund</h2>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>No consultation was conducted after confirmed payment.</li>
            <li>The advocate failed to join a scheduled appointment without prior notice.</li>
            <li>Duplicate payments due to technical issues.</li>
            <li>Non-delivery of promised service due to platform error.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">2. Non-Refundable Situations</h2>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Completed consultations, even if you disagreed with the legal advice.</li>
            <li>Delay in response from the advocate unless clearly unreasonable.</li>
            <li>Change of mind or personal dispute with the advocate.</li>
            <li>Refund requests made after 7 days from transaction date.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">3. How to Request a Refund</h2>
          <p className="mb-4">You can submit a refund request through:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Dashboard → My Orders → Request Refund</li>
            <li>Emailing <a href="mailto:support@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">support@advocateservices.com</a></li>
            <li>Calling our toll-free line: <strong>1800-XXX-XXXX</strong></li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">4. Refund Processing Timeline</h2>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Refund review and confirmation within 5–7 working days</li>
            <li>Processed to your original payment method within 7–10 working days</li>
            <li>You will receive email confirmation of the refund</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">5. Dispute Resolution</h2>
          <p className="mb-4">
            In case of refund disputes, the matter will be reviewed by our internal support team and, if required, the Grievance Officer.
            Their decision will be final.
          </p>

          <h2 className="text-xl font-semibold mb-2">6. Contact Support</h2>
          <p className="mb-6">
            For any refund-related concerns, please contact:<br />
            <a href="mailto:support@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">
              support@advocateservices.com
            </a><br />
            Phone: <strong>1800-XXX-XXXX</strong>
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

export default RefundPolicyPage;
