import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const membershipPlans = [
  {
    name: 'Free Plan',
    price: '₹0/month',
    description: 'Ideal for new advocates starting online.',
    features: [
      'Verified Profile Listing',
      'Limited Appointments',
      'Basic Legal Resource Access',
    ],
    buttonText: 'Join for Free',
    highlight: false,
  },
  {
    name: 'Pro Plan',
    price: '₹999/month',
    description: 'Best for independent advocates ready to grow.',
    features: [
      'Unlimited Appointments',
      'Priority Search Listing',
      'Video Consultations',
      'Profile Analytics',
    ],
    buttonText: 'Upgrade to Pro',
    highlight: true,
  },
  {
    name: 'Premium Plan',
    price: '₹2499/month',
    description: 'Perfect for senior advocates & law firms.',
    features: [
      'Dedicated Account Manager',
      'Custom Website Page',
      'Featured Homepage Slot',
      'Client Feedback Dashboard',
    ],
    buttonText: 'Go Premium',
    highlight: false,
  },
];

const MembershipPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Membership Options</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-10">
            Choose a membership plan that fits your legal journey. Scale your visibility, credibility, and reach with our flexible pricing.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl shadow-lg bg-white dark:bg-gray-900 border ${
                  plan.highlight
                    ? 'border-blue-600 dark:border-blue-400'
                    : 'border-gray-200 dark:border-gray-800'
                }`}
              >
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-3xl font-bold mb-2">{plan.price}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                <ul className="text-left space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/advocate-register"
                  className="block w-full py-2 px-4 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition"
                >
                  {plan.buttonText}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            Need help choosing? Email us at <a href="mailto:support@advocateservices.com" className="underline">support@advocateservices.com</a>
            <br />
            &copy; {new Date().getFullYear()} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MembershipPage;
