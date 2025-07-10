import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for new advocates starting their digital presence.',
    features: [
      'Profile Listing',
      'Limited Appointments per Month',
      'Access to Legal Resources',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹999/month',
    description: 'Ideal for growing practices wanting visibility & automation.',
    features: [
      'Unlimited Appointments',
      'Profile Highlighting',
      'Priority Listing in Search',
      'Video Consultations',
    ],
    highlight: true,
  },
  {
    name: 'Elite',
    price: '₹2499/month',
    description: 'Best for established advocates & firms.',
    features: [
      'Dedicated Support',
      'Client Analytics Dashboard',
      'Featured on Homepage',
      'Custom Legal Webpage',
    ],
    highlight: false,
  },
];

const PricingPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            Choose the plan that fits your legal practice and start connecting with more clients today.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl shadow-lg p-8 bg-white dark:bg-gray-900 ${
                  plan.highlight ? 'border-4 border-blue-600 dark:border-blue-400' : ''
                }`}
              >
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-3xl font-bold mb-2">{plan.price}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                <ul className="text-left space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/advocate-register"
                  className="inline-block w-full py-2 px-4 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition"
                >
                  {plan.price === 'Free' ? 'Get Started' : 'Choose Plan'}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            All payments are processed securely. You can cancel or change plans anytime.
            <br />
            &copy; {new Date().getFullYear()} AdvocateServices.com
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PricingPage;
