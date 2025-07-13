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

          <h2 className="text-xl font-semibold mb-4">1.Introduction</h2>
          <p className="mb-4">
           Welcome to E-Advocate Services (“Platform”), a technology-driven platform that connects clients with legal professionals. By using our mobile application or website, you agree to these Terms & Conditions.
          </p>

          <h2 className="text-xl font-semibold mb-4">2. Legal Compliance</h2>
          <p className="mb-4">
           All advocates registered on this platform are required to be members of the Bar Council of India and possess valid enrollment.The platform operates in full compliance with the Advocates Act, 1961 and Bar Council of India Rules, especially Rule 36 of BCI Rules, which prohibits advertising by advocates.

This platform does not promote or advertise legal services directly but serves as a means for information dissemination and lawful connection.
          </p>

         

          <h2 className="text-xl font-semibold mb-4">3. Registration & Eligibility</h2>
          <p className="mb-4">
           Only licensed advocates recognized by BCI are eligible to register as professionals.

Clients must provide accurate information and must be 18+ years of age.

The platform reserves the right to verify bar council credentials of every advocate.

Any false information will lead to suspension or termination of the account.
          </p>

          <h2 className="text-xl font-semibold mb-4">4. Scope of Services</h2>
          <p className="mb-4">
           We facilitate connections between advocates and clients based on department, location, experience, etc.

We do not provide legal advice ourselves.

Communication and contracts between clients and advocates are independent. We are not liable for legal advice or actions provided by advocates.
          </p>


           <h2 className="text-xl font-semibold mb-4">5. User Conduct</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Post or promote misleading legal information.</li>
            <li>Violate any legal or ethical standards of the Bar Council.</li>
            <li>Misuse the platform to defame, harass, or scam users.</li>
           
          </ul>

          <h2 className="text-xl font-semibold mb-4">6. Fees & Payment</h2>
          <p className="mb-4">
           Certain features may require subscription or payment (e.g., premium listings, highlighted profiles).

All payments are processed through secure gateways.

The platform does not interfere in payments between clients and advocates for services outside the platform.
          </p>

          <h2 className="text-xl font-semibold mb-4">7. Confidentiality</h2>
          <p className="mb-4">
           Client-advocate communication is private and secure.

The platform does not store or access confidential legal advice or discussions.

Users are responsible for maintaining the confidentiality of their login information.
          </p>

          <h2 className="text-xl font-semibold mb-4">8. Content & Profile Management</h2>
          <p className="mb-6">
           Advocates may upload information such as area of practice, experience, qualifications, and availability.

E-Advocate Services may moderate or remove content that violates our terms, the BCI norms, or community guidelines.

           
          </p>
          
          <h2 className="text-xl font-semibold mb-4">9. Account Suspension & Termination</h2>
          <p className="mb-6">
         We reserve the right to:

Suspend or terminate accounts that violate these terms.

Report unethical or illegal behavior to appropriate legal authorities or the Bar Council.


           
          </p>
          
          <h2 className="text-xl font-semibold mb-4">10. Limitation of Liability</h2>
          <p className="mb-6">
          E-Advocate Services is not liable for disputes or outcomes resulting from legal consultations.

We are not responsible for the accuracy of information provided by users.

           
          </p>
          
          <h2 className="text-xl font-semibold mb-4">11. Governing Law & Jurisdiction</h2>
          <p className="mb-6">
          These terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts located in [Your State/City].

           
          </p>
          
          <h2 className="text-xl font-semibold mb-4">12. Amendments</h2>
          <p className="mb-6">
         We may update or modify these Terms & Conditions from time to time. Users will be notified and continued use of the platform will constitute acceptance of the changes.

           
          </p>
          <p className='mb-6'>Would you like me to prepare this as a Word or PDF file for download?</p>

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
