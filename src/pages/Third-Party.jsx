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

          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
          E-Advocate Services may integrate or collaborate with third-party service providers (such as payment gateways, analytics tools, verification services, or cloud infrastructure providers) to enhance functionality, security, and user experience. This document outlines how such third-party integrations are managed in compliance with the applicable legal standards and the ethical framework of the Bar Council of India (BCI).

          </p>

   <h2 className="text-xl font-semibold mb-4">2. Nature of Third-Party Services</h2>
          <p className="mb-4">
        We may use trusted third parties for the following services:

          </p>



          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Payment Processing: Razorpay, Paytm, Stripe, etc.</li>
            <li>SMS/OTP Verification: Twilio, Msg91, or other local SMS providers.</li>
            <li>Cloud Hosting & Storage: AWS, Google Cloud, Azure, etc.</li>
            <li>User Behavior Analytics: Firebase, Google Analytics.</li>
            <li>Bar Council ID & Document Verification APIs: For advocate authentication.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">3. Compliance with BCI Norms</h2>
          <p className="mb-4">In accordance with Rule 36 of the BCI Rules, we ensure:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
             No third-party tool is used to advertise legal services.
            </li>
            <li>
             No solicitation, endorsement, or paid promotion of any advocate is allowed.
            </li>
            <li>
             All data shared with third parties is minimal, encrypted, and non-commercial in nature.
            </li>
             <li>
           We retain control over content, listings, and communications to comply with legal ethics.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">4. Data Handling & Security</h2>
          <p className="mb-4">
           Only essential data is shared with third-party providers and solely for platform functionality (e.g., OTP delivery or payment processing).
          </p>


           <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
             All third-party vendors must comply with the Information Technology Act, 2000 and Indian Data Privacy regulations.
            </li>
            <li>
          Non-Disclosure Agreements (NDAs) and security checks are conducted before integrations.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">5. User Consent</h2>
          <p className="mb-4">
           By continuing to use the E-Advocate Services app or web platform, users agree that:
          </p>


 <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
           Limited information may be securely transferred to vetted third parties to facilitate services.
            </li>
            <li>
        Third-party terms, where applicable (e.g., payment gateway policies), may apply in addition to this document.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="mb-4">
           E-Advocate Services is not liable for actions, data misuse, or breaches that occur outside the scope of our agreements with third-party vendors.

We take reasonable care to select only compliant, secure, and ethical partners.
          </p>





          <h2 className="text-xl font-semibold mb-4">7. Termination of Third-Party Use</h2>
          <p className="mb-4">
           We may suspend or replace any third-party service provider:
          </p>
 <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
           If it violates data security or legal ethics,
            </li>
            <li>
        If required by law, court order, or Bar Council notification,
            </li>
             <li>
       Or if it no longer aligns with the mission and compliance standards of E-Advocate Services.
            </li>
          </ul>




          <h2 className="text-xl font-semibold mb-4">8. Contact for Concerns</h2>
          <p className="mb-6">
            If you believe a third-party integration compromises your privacy, legal rights, or ethical guidelines:
            <a
              href="mailto:support@advocateservices.com"
              className="text-blue-600 dark:text-blue-400 underline ml-1"
            >
             📧 Email: legal@eadvocateservices.in
            </a>.
             <a
              href="mailto:support@advocateservices.com"
              className="text-blue-600 dark:text-blue-400 underline ml-1"
            >
           📞 Phone: +91-XXXXXXXXXX
            </a>.
          </p>

          <p className='mb-6'>Would you like this content delivered in Word or PDF format later when generation is available again?</p>

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
