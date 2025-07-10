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

          <h2 className="text-xl font-semibold mb-2">1. What is a Grievance?</h2>
          <p className="mb-4">
            A grievance may include (but is not limited to) dissatisfaction or complaint regarding:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Misconduct or unprofessional behavior by advocates</li>
            <li>Payment disputes or overcharging</li>
            <li>Technical or service issues with our platform</li>
            <li>Content misuse or privacy violations</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">2. Grievance Officer Details</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-6">
            <p className="font-medium">Grievance Officer</p>
            <p>AdvocateServices Legal Pvt. Ltd.</p>
            <p>Email: <a href="mailto:grievance@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">grievance@advocateservices.com</a></p>
            <p>Phone: <span className="font-medium">1800-000-0000</span></p>
            <p>Office Hours: Monday–Friday, 10:00 AM – 6:00 PM (IST)</p>
          </div>

          <h2 className="text-xl font-semibold mb-2">3. How to File a Grievance</h2>
          <p className="mb-4">You may file a grievance by:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Emailing the details to <a href="mailto:grievance@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">grievance@advocateservices.com</a></li>
            <li>Using the “Report Issue” button inside your dashboard</li>
            <li>Submitting a physical letter to our registered office (see Contact page)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">4. Grievance Redressal Process</h2>
          <ol className="list-decimal pl-5 mb-4 space-y-1">
            <li>We acknowledge all grievances within 48 hours.</li>
            <li>We investigate and respond within 15 working days.</li>
            <li>In case of complex issues, we may take up to 30 days with proper justification.</li>
            <li>Updates will be shared via email or phone.</li>
          </ol>

          <h2 className="text-xl font-semibold mb-2">5. Escalation</h2>
          <p className="mb-4">
            If your grievance is not resolved satisfactorily, you may escalate the matter to the Managing Director by writing to:
            <a href="mailto:escalation@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline"> escalation@advocateservices.com</a>
          </p>

          <h2 className="text-xl font-semibold mb-2">6. Compliance Note</h2>
          <p className="mb-4">
            This redressal mechanism complies with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
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
