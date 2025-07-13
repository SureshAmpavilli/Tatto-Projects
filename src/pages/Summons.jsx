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

          <h2 className="text-xl font-semibold mb-2">1. Legal Disclaimer Notice</h2>
          <h3 className='text-[18px] font-medium mb-2'>  Disclaimer:</h3>
          <p className="mb-4">
           Disclaimer:
E-Advocate Services is a platform designed to connect clients with verified legal professionals. We do not provide legal advice ourselves and are not liable for any legal opinion, advice, or services rendered by advocates on this platform. All advocates listed here are responsible for their own professional conduct and compliance with the Bar Council of India norms.

          </p>


        

          <h2 className="text-xl font-semibold mb-2">2. BCI Rule 36 Compliance Notice</h2>
          <h3 className='text-[18px] font-medium mb-2'>Important Notice – BCI Rule 36:</h3>
          <p className='mb-6'>This platform is strictly designed to comply with Rule 36 of the Bar Council of India Rules, which prohibits advertising or solicitation of legal services. No paid promotion, ranking, or sponsored visibility of any advocate is allowed. All advocate profiles are listed equally and verified on merit, not for promotional purposes.</p>
         

          <h2 className="text-xl font-semibold mb-2">3.Verification Notice</h2>
           <h3 className='text-[18px] font-medium mb-2'>IAdvocate Verification Notice:</h3>
          <p className="mb-4">
            All advocates on E-Advocate Services are required to provide valid Bar Council Registration Numbers and supporting identity documents. Any misrepresentation or fraudulent submission will lead to permanent account suspension and notification to the respective State Bar Council.
          </p>
          





          <h2 className="text-xl font-semibold mb-2">4. Consent Notice for Clients</h2>
           <h3 className='text-[18px] font-medium mb-2'>Client Consent Notice:</h3>
          <p className="mb-4">
            By using this platform, you consent to allow your queries and contact details to be shared with verified legal professionals for the purpose of consultation. You have the right to revoke this consent or delete your profile at any time from your account settings.
          </p>

          <h2 className="text-xl font-semibold mb-2">5. Payment Responsibility Notice</h2>
           <h3 className='text-[18px] font-medium mb-2'>Payment & Interaction Disclaimer:</h3>
          <p className="mb-4">
            Any payments made to advocates through this platform are strictly for consultation purposes only. E-Advocate Services is not liable for any outcome resulting from such consultations and does not participate in fee negotiations or settlements between clients and advocates.
          </p>

          <h2 className="text-xl font-semibold mb-2">6. Communication Notice</h2>
           <h3 className='text-[18px] font-medium mb-2'>Safe Communication Reminder:</h3>
          <p className="mb-4">
            For your safety, always use the in-app messaging and appointment system for communication. Avoid sharing sensitive information (like personal documents or case files) outside of secured channels unless verified.
          </p>

            <h2 className="text-xl font-semibold mb-2">7.Privacy & Data Use Notice</h2>
           <h3 className='text-[18px] font-medium mb-2'>Privacy Notice:</h3>
          <p className="mb-4">
            Your personal information is collected only for verification, profile matching, and secure communication. We do not sell or share your data with advertisers. All use of data complies with Indian IT laws and BCI confidentiality standards.
          </p>

            <h2 className="text-xl font-semibold mb-2">8. Grievance Redressal Notice</h2>
           <h3 className='text-[18px] font-medium mb-2'>Grievance Redressal::</h3>
          <p className="mb-4">
          If you have any complaints or encounter misconduct by any registered advocate or user, please contact our Grievance Officer at:
          </p>

           <p className="mb-4">
          📧 grievance@eadvocateservices.in
          </p>
             <p className="mb-4">
        📞 +91-XXXXXXXXXX
All complaints are confidential and handled as per IT Rules 2021 and BCI ethical guidelines.
          </p>

             <p className="mb-4">
          Would you like these notices delivered in a formatted Word or PDF file for easy integration into your app/website?
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
