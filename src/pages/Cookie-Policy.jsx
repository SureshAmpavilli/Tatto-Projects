import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePolicyPage = () => {
  return (
    <div className="">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

          <p className="mb-4">
            This Cookie Policy explains how AdvocateServices.com (“we”, “our”, or “us”) uses cookies and similar technologies
            to recognize you when you visit our website or use our services.
          </p>

          <h2 className="text-xl font-semibold mb-2">1.Introduction</h2>
          <p className="mb-4">
           E-Advocate Services ("we", "our", or "us") uses cookies and similar tracking technologies on our website and mobile app to enhance user experience, ensure platform functionality, and maintain compliance with Indian laws and Bar Council of India (BCI) norms.
          </p>
          <p className='mb-4'>This policy explains what cookies are, how we use them, and your rights regarding their use.
</p>

         

        

          <h2 className="text-xl font-semibold mb-2">2. What Are Cookies?</h2>
          <p className="mb-4">
           Cookies are small data files placed on your device (computer, tablet, smartphone) when you visit a website or use an app. They help us remember your preferences, improve security, and understand usage behavior.

          </p>

          <h2 className="text-xl font-semibold mb-2">3. Third-Party Cookies</h2>
          <p className="mb-4">
           We use only essential and functional cookies, in accordance with Rule 36 of the BCI Rules which prohibits any form of indirect advertising or commercialization of legal services.
          </p>

          <p className='mb-4'>Type	Purpose
Strictly Necessary	Required for login, session control, and security of the platform.
Performance Cookies	Help us understand app/website traffic and usage (e.g., crash reports).
Functionality Cookies	Store user preferences like language and city filters.</p>


<p className='mb-4'>❌ No marketing, advertising, or promotional cookies are used to ensure full compliance with BCI's ethical standards.</p>


  <h2 className="text-xl font-semibold mb-2">4. Third-Party Cookies</h2>
          <p className="mb-4">
          We may use third-party service providers (e.g., analytics tools) who place cookies on our behalf to collect non-personal, anonymized data:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>
These third parties do not access legal or client-advocate communication.</li>
            <li>All such tools are vetted for security and legal compliance.
</li>
           
          </ul>



 <h2 className="text-xl font-semibold mb-2">5. User Consent & Control</h2>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Upon first visit, you will be prompted to accept or reject non-essential cookies (where applicable).
</li>
            <li>You may disable cookies in your browser or device settings at any time, though certain functionalities may be limited.
</li>
           
          </ul>












          <h2 className="text-xl font-semibold mb-2">6. Data Privacy & Security</h2>
          <p className="mb-4">
         All cookies used by us:
          </p>




 <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Do not collect personally identifiable information (PII) unless necessary for registration or authentication.

</li>
            <li>Are stored securely and deleted after session expiration or as required by law.
</li>
           
          </ul>









          <h2 className="text-xl font-semibold mb-2">7. Legal & BCI Compliance</h2>
          <p className='mb-6'>This cookie policy is crafted to:</p>


 <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Ensure full compliance with the Information Technology Act, 2000

</li>
            <li>Uphold the Code of Conduct of the Bar Council of India

</li>
  <li>Avoid any form of solicitation, endorsement, or privacy violations


</li>
           
          </ul>



          <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p className='mb-6'>We may update this Cookie Policy periodically to reflect changes in technology, law, or platform features. Updates will be posted here with a revised date.</p>


 <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Ensure full compliance with the Information Technology Act, 2000

</li>
            <li>Uphold the Code of Conduct of the Bar Council of India

</li>
  <li>Avoid any form of solicitation, endorsement, or privacy violations


</li>
           
          </ul>

  <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>



          <p className="mb-6">
          For questions or concerns regarding this Cookie Policy:<br />
            <a href="mailto:privacy@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">
            📧 Email: privacy@eadvocateservices.in
            </a>
             <a href="mailto:privacy@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">
            📧 📞 Phone: +91-XXXXXXXXXX

            </a>
          </p>
          <p className='mb-6'>Would you like this delivered in Word or PDF format once file generation is available again?</p>


          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            © {new Date().getFullYear()} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
