import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const proposedCenters = {
  'Southern India': [
    'Hyderabad (Telangana) – Regional Support & Legal Education Centre',
    'Bangalore (Karnataka) – Advocate Onboarding & KYC Unit',
    'Chennai (Tamil Nadu) – Regional Digital Legal Access Point',
  ],
  'Northern India': [
    'New Delhi (NCR) – Admin HQ & Liaison with Bar Council of India',
    'Lucknow (UP) – North India Support Hub',
    'Jaipur (Rajasthan) – Outreach & Helpdesk Zone',
  ],
  'Eastern India': [
    'Kolkata (West Bengal) – Advocate Verification Cell',
    'Patna (Bihar) – State Grievance & Legal Awareness Centre',
  ],
  'Western India': [
    'Mumbai (Maharashtra) – Technical & Legal Resource Office',
    'Ahmedabad (Gujarat) – Advocate Training & Profile Review Station',
  ],
};

const EAdvocateCentersPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-3xl font-bold mb-4">E-Advocate Services Centres (State & Regional Offices)</h1>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Your Trusted Legal Access Points Across India
          </p>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            E-Advocate Services is committed to bridging the gap between verified legal professionals and the general public.
            While our platform is primarily digital, we also offer physical Support & Verification Centres in select cities
            to assist with advocate verification, client grievance support, and legal awareness programs.
          </p>
          <p className="mb-8 text-gray-700 dark:text-gray-300">
            All our centres operate in accordance with Bar Council of India (BCI) norms — no marketing or legal solicitation
            is conducted from any location.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">🔍 What Do Our Centres Offer?</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 dark:border-gray-700">
                <thead className="bg-gray-200 dark:bg-gray-800">
                  <tr>
                    <th className="p-3 text-left font-medium">Service Provided</th>
                    <th className="p-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                  <tr>
                    <td className="p-3">✅ Advocate KYC & Bar ID Verification</td>
                    <td className="p-3">In-person document submission & approval</td>
                  </tr>
                  <tr>
                    <td className="p-3">✅ Legal Awareness Sessions</td>
                    <td className="p-3">Free sessions on citizen legal rights (in collaboration with local bar associations)</td>
                  </tr>
                  <tr>
                    <td className="p-3">✅ Grievance Redressal Desk</td>
                    <td className="p-3">File offline complaints if unable to access online support</td>
                  </tr>
                  <tr>
                    <td className="p-3">✅ App Assistance & Registration</td>
                    <td className="p-3">Help for users without smartphones or digital literacy</td>
                  </tr>
                  <tr>
                    <td className="p-3">✅ Court-Link Helpdesk</td>
                    <td className="p-3">Guidance on using e-Courts, cause list access, and legal aid services (non-representational)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">📍 Proposed E-Advocate Services Centre Locations</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm italic">
              (Expansion will be based on legal demand, bar council guidance, and digital access gaps.)
            </p>
            {Object.entries(proposedCenters).map(([region, centers], idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold mb-2">{region}</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  {centers.map((center, i) => (
                    <li key={i}>{center}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">🧑‍⚖️ BCI-Aligned Operations</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Operate only as support centres, not legal chambers</li>
              <li>Do not engage in paid promotion, ranking, or advertisement of any advocate</li>
              <li>Maintain complete neutrality and transparency under Rule 36 of the BCI Rules</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">🕐 Timings & Availability</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Working Days: Monday to Saturday</li>
              <li>Hours: 10:00 AM – 5:30 PM</li>
              <li>Walk-ins: Allowed with valid ID and appointment</li>
              <li>Virtual Appointments: Supported via video call from any region</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">📞 For Support or Appointments</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Email: <a href="mailto:centres@eadvocateservices.in" className="underline text-blue-600 dark:text-blue-400">centres@eadvocateservices.in</a></li>
              <li>Phone: <a href="tel:+91XXXXXXXXXX" className="underline text-green-600 dark:text-green-400">+91-XXXXXXXXXX</a></li>
              <li>Website: <a href="https://www.eadvocateservices.in/centres" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">www.eadvocateservices.in/centres</a></li>
            </ul>
          </section>

        

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            &copy; {new Date().getFullYear()} E-Advocate Services – All rights reserved.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EAdvocateCentersPage;
