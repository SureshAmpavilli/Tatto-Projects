import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FraudAlertPage = () => {
  return (
    <div className="">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8 ">
          <h1 className="text-3xl font-bold mb-6">Fraud Alerts</h1>

          <p className="mb-4">
            At AdvocateServices.com, your safety is our top priority. We are committed to building a secure and trustworthy
            legal platform where clients and verified advocates can connect with confidence.
          </p>

          <p className="mb-6">
            While we employ several security measures, we strongly advise our users to exercise personal caution and follow
            these guidelines when using our website or mobile application.
          </p>

          <h2 className="text-xl font-semibold mb-4">⚠️ Protect Yourself From Fraudulent Activities</h2>

          <ul className="list-disc pl-5 space-y-4 mb-6">
            <li>
              <strong>Beware of Fake Advocate Profiles:</strong> If any user provides false information about their legal
              qualifications, years of experience, bar registration, or practice location, please report the profile
              immediately using the “Report Abuse” option.
            </li>
            <li>
              <strong>Do Not Share Personal or Financial Information:</strong> Never disclose sensitive data like your Aadhar
              number, bank account details, PAN, passwords, or case documents unless absolutely sure of the advocate’s
              authenticity. AdvocateServices will <strong>never</strong> ask for your password, OTP, or PIN through email, SMS, or phone.
            </li>
            <li>
              <strong>Avoid Unofficial Payments:</strong> Do not send money or fees to advocates outside the AdvocateServices
              payment system. All transactions should be processed through our secure payment gateway.
            </li>
            <li>
              <strong>Be Alert to Phishing and Lookalike Websites:</strong> Only trust URLs that begin with
              <span className="text-blue-600 dark:text-blue-400"> https://www.advocateservices.com</span>. If in doubt, contact our support.
            </li>
            <li>
              <strong>Watch Out for Fake Phone Calls or Emails:</strong> Fraudsters may impersonate our team. We only
              communicate from official domains (<em>@advocateservices.com</em>).
            </li>
            <li>
              <strong>Conduct Safe Meetings:</strong> Always meet in public locations or the advocate’s verified office and
              inform someone close about the meeting.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">🛡️ Report Suspicious Behavior</h2>

          <p className="mb-4">
            If you encounter any of the following, report to us immediately:
          </p>
          <ul className="list-disc pl-5 space-y-3 mb-6">
            <li>Advocates requesting payment in exchange for guaranteed legal outcomes.</li>
            <li>Attempts to sell or promote services unrelated to legal consultation.</li>
            <li>Profiles with fake photographs or plagiarized content.</li>
            <li>Communication containing threats, harassment, or coercion.</li>
          </ul>

          <p className="mb-4">
            <strong>Contact us:</strong><br />
            Email: <a href="mailto:support@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">support@advocateservices.com</a><br />
            Phone: <span className="font-medium">1800-XXX-XXXX</span> (Toll-Free)<br />
            Use the <strong>"Report Profile"</strong> button on any user page.
          </p>

          <h2 className="text-xl font-semibold mb-4">✅ What We Do to Keep You Safe</h2>

          <ul className="list-disc pl-5 space-y-3 mb-6">
            <li>Every advocate is required to submit identity and license proof.</li>
            <li>Our platform uses secure encryption to protect your data.</li>
            <li>Regular audits and manual profile checks are conducted.</li>
            <li>We act swiftly on reports of misconduct or fraud.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">👥 User Responsibility</h2>

          <p className="mb-6">
            Your safety is a shared responsibility. Always use your best judgment when interacting with others. If something
            feels wrong — it probably is. Stay cautious, verify before you trust, and when in doubt, ask us.
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

export default FraudAlertPage;
