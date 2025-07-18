import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const clientPlans = [
  {
    name: 'Basic Access',
    features: [
      'Search Advocates',
      'View limited profiles',
      '2 inquiries/month',
    ],
    duration: '1 Month',
    price: '₹0 (Free)',
  },
  {
    name: 'Legal Connect',
    features: [
      'Unlimited Advocate Search',
      'View all profiles',
      'Priority Support',
      '5 inquiries/month',
    ],
    duration: '3 Months',
    price: '₹499',
  },
  {
    name: 'Legal Assist Pro',
    features: [
      'All Legal Connect features',
      'Direct chat access',
      'Profile save',
      '10 inquiries/month',
    ],
    duration: '6 Months',
    price: '₹999',
  },
  {
    name: 'Enterprise Legal',
    features: [
      'Designed for startups/businesses',
      '20 inquiries/month',
      'Live support',
      'Document upload access',
    ],
    duration: '12 Months',
    price: '₹1999',
  },
];

const MembershipPage = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">

          {/* Page Heading */}
          <h1 className="text-4xl font-bold mb-4">Membership Options – E-Advocate Services</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-10">
            Choose a membership plan that fits your legal journey as an advocate or client.
          </p>

          {/* Intro section */}
          <section className="text-left bg-white dark:bg-gray-900 p-6 rounded-xl shadow mb-12">
            <h2 className="text-2xl font-bold mb-4">Empowering Legal Access with Transparent Plans</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To ensure fair and transparent access to legal services, E‑Advocate Services offers flexible membership plans for clients.
              All plans are created in alignment with ethical standards prescribed by the Bar Council of India (BCI) and do not promote or advertise advocates individually.
            </p>
          </section>

          {/* Legal & Ethical Compliance Section */}
          <section className="text-left bg-white dark:bg-gray-900 p-6 rounded-xl shadow mb-12">
            <h2 className="text-2xl font-bold mb-4">Legal & Ethical Compliance</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>No direct advertisement of lawyers.</li>
              <li>All listings are equal and based on filters set by users.</li>
              <li>Advocates do not pay to boost visibility (in compliance with BCI rules).</li>
              <li>Client benefits are related to platform usage, not legal outcome.</li>
            </ul>
          </section>

          {/* Client Membership Plans */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Available Plans for Clients</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-800">
                    <th className="p-3 text-left">Plan Name</th>
                    <th className="p-3 text-left">Features</th>
                    <th className="p-3 text-left">Duration</th>
                    <th className="p-3 text-left">Price (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  {clientPlans.map((plan, idx) => (
                    <tr key={idx} className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-3 font-semibold">{plan.name}</td>
                      <td className="p-3">
                        <ul className="list-disc list-inside space-y-1">
                          {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                      </td>
                      <td className="p-3">{plan.duration}</td>
                      <td className="p-3">{plan.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="text-left mt-10">
            <h2 className="text-2xl font-bold mb-4">Key Benefits for Clients</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Access to verified advocates based on department, location & experience.</li>
              <li>No hidden charges. Transparent inquiry system.</li>
              <li>Secure platform; your data is never shared without consent.</li>
            </ul>
          </section>

          {/* Important Notes */}
          <section className="text-left mt-10">
            <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Membership fees are for platform access, not legal fees.</li>
              <li>Advocate selection, advice, and payments happen directly between client & advocate.</li>
              <li>Platform does not interfere with legal proceedings or outcomes.</li>
              <li>Membership plans can be upgraded anytime from client dashboard.</li>
            </ul>
          </section>

          {/* BCI Compliance */}
          <section className="text-left mt-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">BCI Norms Compliance</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Follows Advocates Act, 1961, and BCI advertising restrictions.</li>
              <li>Plans are for enhanced user experience, not lawyer promotion.</li>
              <li>Every profile is validated and displayed neutrally.</li>
            </ul>
          </section>

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            Need help choosing? Email us at{' '}
            <a href="mailto:support@advocateservices.com" className="underline">
              support@advocateservices.com
            </a>
            <br />
            &copy; {year} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MembershipPage;
