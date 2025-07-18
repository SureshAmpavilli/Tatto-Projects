import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GrievanceRedressalPage = () => {
  return (
    <div className="">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Grievance Redressal</h1>

          <p className="mb-4">
            AdvocateServices.com values transparency, accountability, and fair treatment of all users—both clients and advocates.
            This page outlines how you can report grievances and how we handle them.
          </p>

          <h2 className="text-xl font-semibold mb-2">1. Objective</h2>
          <p className="mb-4">
           This Grievance Redressal Policy is established to resolve complaints, disputes, or concerns raised by users (advocates or clients) of the E-Advocate Services app or website.
We aim to ensure transparency, fairness, and accountability in all grievance handling processes in accordance with:

Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021

Ethical guidelines of the Bar Council of India (BCI)
          </p>
         

          <h2 className="text-xl font-semibold mb-2">2. Scope</h2>
           <p className="mb-4">Grievances may include (but are not limited to):</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Misconduct or unethical behavior by an advocate or client</li>
            <li>Impersonation or fraudulent profiles</li>
            <li>Misuse of platform features or communication tools</li>
             <li>Privacy or data-related violations</li>
            <li>Violations of Bar Council rules or misuse of credentials</li>
            <li>Technical issues (login, payment, messaging, verification, etc.)</li>
          </ul>
        

          <h2 className="text-xl font-semibold mb-2">3. Grievance Officer</h2>
          <p className="mb-4">You can contact our designated Grievance Officer:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Name: [Insert Officer Name]</li>
            <li>Email: grievance@eadvocateservices.in</li>
            <li>Phone: +91-XXXXXXXXXX</li>
             <li>Designation: Grievance Redressal Officer</li>
            <li>Working Hours: Monday to Friday, 10:00 AM – 6:00 PM IST</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">4. How to File a Grievance</h2>
          <p className="mb-4">You may submit a grievance using one of the following channels::</p>
          <ol className="list-decimal pl-5 mb-4 space-y-1">
            <li>Email to grievance@eadvocateservices.in
.</li>
            <li>In-app report form under “Help & Support”</li>
            <li>Contact Form on our official website.</li>
              <p className="mb-4">Required Information:</p>
            <li>Your full name and contact details</li>
               <li>Type of user (Advocate/Client)</li>
                  <li>Description of the issue</li>
                     <li>Relevant evidence (screenshots, profile links, documents, etc.)</li>
          </ol>

          <h2 className="text-xl font-semibold mb-2">5. Grievance Handling Timeline</h2>
          <p className="mb-4">
           Acknowledgement: Within 24 hours of receiving the complaint
          </p>

           <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Resolution: Within 15 working days</li>
            <li>Extension (if needed): We will notify you with valid reasons</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">6. Escalation to Bar Council of India</h2>
          <p className="mb-4">
           If the grievance involves:
          </p>

 <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advocate misconduct, ethical breaches, or license misuse</li>
            <li>Any verified violation of BCI Rule 36 (advertising/promotion)</li>
            <li>We reserve the right to:</li>
             <li>Suspend or terminate the account</li>
            <li>Notify the respective State Bar Council or Bar Council of India</li>
              <li>Share case details with legal authorities if necessary</li>
          </ul>

           <h2 className="text-xl font-semibold mb-2">7. Confidentiality</h2>
          <p className="mb-4">
         All grievances are handled with complete confidentiality.
User details and complaint data will not be disclosed to third parties except for legal compliance or regulatory action.
          </p>

 


           <h2 className="text-xl font-semibold mb-2">8. Review & Update of Policy</h2>
          <p className="mb-4">
          This policy is reviewed quarterly or upon legal/regulatory updates.
Latest versions are always published on our official app and website.
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

export default GrievanceRedressalPage;
