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

          <h2 className="text-xl font-semibold mb-2">1. Terms & Conditions Policy</h2>
          <p className="mb-4">
          Outlines user responsibilities and usage rules.
          </p>

          
 <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Ensures advocates don’t advertise or solicit in violation of BCI Rule 36.

</li>
            <li>Includes eligibility, account usage, and dispute clauses.
</li>

            <li>Covers liability, suspension, and termination conditions.
</li>
           
          </ul>



          <h2 className="text-xl font-semibold mb-2">2. Privacy Policy</h2>
          <p className="mb-4">
           Explains what data is collected (e.g., Bar Council ID, client queries).
          </p>
<ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Describes how user data is stored, used, and shared.

</li>
            <li>Ensures compliance with:
</li>

            <li>Indian IT Act, 2000
</li>

            <li>BCI ethical data handling

</li>

            <li>Includes user rights (access/edit/delete), data retention, and encryption.
</li>
           
          </ul>






          <h2 className="text-xl font-semibold mb-2">3. Cookie Policy</h2>
          <p className="mb-4">
           Describes limited use of cookies (functional & necessary only).

No marketing or advertising cookies, to comply with BCI norms.

Option for users to control cookie settings.
          </p>





          <h2 className="text-xl font-semibold mb-2">4. Fraud Alert Policy</h2>
          <p className="mb-4">
            Warns against impersonation, unauthorized practice, or fake credentials.
          </p>

<ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Includes a clear reporting mechanism.

</li>
            <li>States consequences like account suspension, legal action, and BCI reporting.
</li>

            <li>Maintains a zero-tolerance policy for advocate/client fraud.
</li>
           
          </ul>




          <h2 className="text-xl font-semibold mb-2">5. Third-Party Terms of Use</h2>
          <p className="mb-4">
           Lists tools used for OTP, payment, analytics, or storage (e.g., Razorpay, Twilio).
          </p>

<ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Emphasizes that these services don’t access legal communications.

</li>
            <li>Clarifies that these tools comply with Indian laws and don't allow ads or promotions.
</li>

            
           
          </ul>




          <h2 className="text-xl font-semibold mb-2">6. Data Protection & Security Policy</h2>
          <p className="mb-4">
           Ensures SSL encryption, secure logins, and password hashing.
          </p>

<ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Details how advocate/client data is stored and accessed.

</li>
            <li>Provides for internal audits and external data protection standards.
</li>

            
           
          </ul>



          <h2 className="text-xl font-semibold mb-2">7. Content Policy</h2>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Regulates profile content uploaded by advocates.

</li>
            <li>Prohibits promotional slogans, fee-based marketing, and ranking features.
</li>
 <li>Ensures listings are factual (Bar ID, experience, department).
</li>

            
           
          </ul>


          <h2 className="text-xl font-semibold mb-2">8. Grievance Redressal Policy</h2>
          <p className="mb-4">
           Provides a grievance officer contact as per Rule 3(2) of IT Rules 2021.
          </p>

<ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Timeline for resolution (e.g., 7 to 15 days).

</li>
            <li>Ensures BCI can be contacted for violations of the Advocates Act.
</li>

            
           
          </ul>





          <h2 className="text-xl font-semibold mb-2">9. User Verification Policy</h2>
          <p className="mb-6">
           Ensures that all advocates are verified with:
          </p>
<ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Valid BCI ID / Enrollment Number

</li>
            <li>Certificates of practice
</li>
<li>Clients also undergo mobile/email verification.
</li>

            
           
          </ul>

            <h2 className="text-xl font-semibold mb-2">10. Payment & Refund Policy</h2>
          <p className="mb-6">
          Clearly outlines paid plans (if applicable), advocate listing fees, or subscriptions.
          </p>
<ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Refunds allowed only for technical errors or in accordance with guidelines.

</li>
            <li>Complies with RBI and fintech regulations.
</li>

            
           
          </ul>
<p className='mb-6'>🛡️ Bar Council of India Compliance Checklist:
Rule	Policy Alignment
Rule 36 (BCI Rules)	No ads, no fee-based ranking, no endorsements
Advocates Act, 1961	Only BCI-registered advocates allowed
IT Act, 2000	User data protected under national law
IT Rules, 2021	Includes grievance redressal and transparency</p>

<p className='mb-6'>Would you like me to deliver this as a Word or PDF document formatted for your legal documentation or website section?</p>





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
