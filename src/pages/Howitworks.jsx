import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const clientSteps = [
  {
    title: '✅ Step 1: Register as a Client',
    points: [
      'Provide your basic details (Name, Email, Mobile Number, City)',
      'Choose your legal issue type (e.g., Property, Family, Criminal, etc.)',
      'No fees or legal knowledge required to register',
    ],
  },
  {
    title: '✅ Step 2: Browse or Get Matched with Verified Advocates',
    points: [
      'Based on your location and issue type, the platform shows verified professionals',
      'No promotion or advertisement is used — only factual profiles',
      'Clients can view advocate experience, area of practice, languages, and ratings (if applicable)',
    ],
  },
  {
    title: '✅ Step 3: Securely Contact the Advocate',
    points: [
      'Use the in-app messaging system to discuss your issue confidentially',
      'Schedule a consultation (telephonic, video, or in-person)',
      'Payments (if required) are handled through a secure gateway — E-Advocate does not take a commission',
    ],
  },
  {
    title: '✅ Step 4: Track, Save, and Rate Your Experience',
    points: [
      'Track consultation status',
      'View legal history and upload/download documents securely',
      'Provide feedback (without ranking or commercial promotion)',
    ],
  },
];

const advocateSteps = [
  {
    title: '✅ Step 1: Register with Valid BCI Credentials',
    points: [
      'Upload Bar Council ID, certificate of practice, and identity proof',
      'Select Department (e.g., Civil, Criminal, Corporate) and languages',
      'Your profile will be verified manually by the admin team',
    ],
  },
  {
    title: '✅ Step 2: Get Discovered by Clients (No Ads or Boosts)',
    points: [
      'Your profile is shown neutrally based on the client’s need and city',
      'No boost, ranking, or visibility payment allowed as per Rule 36',
    ],
  },
  {
    title: '✅ Step 3: Connect with Clients Securely',
    points: [
      'Use the in-app chat or call option to offer advice',
      'Schedule consultations at your preferred timing',
      'Maintain client confidentiality — chat logs are encrypted and never public',
    ],
  },
  {
    title: '✅ Step 4: Access Dashboard for Leads, History, and Documents',
    points: [
      'See appointment requests',
      'Upload legal opinions, draft files securely',
      'Respond to grievances or ratings professionally',
    ],
  },
];

const complianceMeasures = [
  ['✅ No Ads or Solicitation', 'Advocates are never promoted or ranked'],
  ['✅ Verified Advocate Listings Only', 'Only licensed advocates with valid BCI/State Bar IDs are approved'],
  ['✅ Ethical Content', 'No legal advice is published publicly'],
  ['✅ Neutral Client-Advocate Matching', 'Based on law type & region, not payment or promotion'],
  ['✅ Grievance & Reporting Tools', 'Users can report unethical behavior; we report to BCI if needed'],
];

const HowItWorksPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">How E-Advocate Services Works</h1>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
            Connecting Clients and Advocates — Ethically, Securely, and Seamlessly
          </p>
          <p className="mb-8 text-gray-700 dark:text-gray-300">
            E-Advocate Services is a professional digital platform created to connect clients with verified legal professionals across India.
            The platform strictly complies with the Bar Council of India (BCI) rules, particularly Rule 36, by avoiding any kind of advertisement,
            ranking, or promotion of advocates.
          </p>

          {/* Clients section */}
          <h2 className="text-2xl font-semibold mb-4">👤 For Clients – Legal Help in 4 Simple Steps</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {clientSteps.map((step, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                  {step.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Advocates section */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">⚖️ For Advocates – Build Your Presence with Ethics</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {advocateSteps.map((step, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                  {step.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Compliance table */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">🔐 How We Stay BCI-Compliant</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
              <thead className="bg-gray-200 dark:bg-gray-800">
                <tr>
                  <th className="p-3 text-left font-medium">Feature</th>
                  <th className="p-3 text-left font-medium">Compliance Measure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                {complianceMeasures.map(([feature, measure], idx) => (
                  <tr key={idx}>
                    <td className="p-3">{feature}</td>
                    <td className="p-3">{measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Transparency & help */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">🔎 Transparency for Everyone</h2>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Clients: Access legal help with no hidden fees or influence</li>
            <li>Advocates: Build trust and visibility through professional, ethical service</li>
            <li>BCI: Full alignment with legal regulations and ethical practice standards</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">🧑‍💼 Need Help?</h2>
          <ul className="text-gray-700 dark:text-gray-300 space-y-1 mb-10">
            <li>📧 <a href="mailto:support@eadvocateservices.in" className="underline text-blue-600 dark:text-blue-400">support@eadvocateservices.in</a></li>
            <li>📞 <a href="tel:+91XXXXXXXXXX" className="underline text-green-600 dark:text-green-400">+91-XXXXXXXXXX</a></li>
            <li>🕐 Mon–Sat, 10:00 AM – 6:00 PM IST</li>
          </ul>

          <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
            &copy; {new Date().getFullYear()} E-Advocate Services – All rights reserved.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
