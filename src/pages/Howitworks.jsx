import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    step: '1',
    title: 'Search Verified Advocates',
    description:
      'Use filters like location, specialization, language, and experience to browse verified legal professionals across India.',
  },
  {
    step: '2',
    title: 'View Profile & Book Appointment',
    description:
      'Check advocate profiles, ratings, practice areas, and availability. Choose between in-person or video consultations.',
  },
  {
    step: '3',
    title: 'Make Secure Payment',
    description:
      'Pay through our secure payment gateway. We support all major UPI, credit/debit cards, and wallets. Invoices are auto-generated.',
  },
  {
    step: '4',
    title: 'Get Legal Advice',
    description:
      'Join your scheduled session and get trusted legal consultation. You can download session notes, documents, or follow-up links.',
  },
  {
    step: '5',
    title: 'Rate & Follow Up',
    description:
      'Give feedback after your consultation and reconnect anytime for case updates or further legal action.',
  },
];

const HowItWorksPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">How AdvocateServices.com Works</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-10">
            Connecting with the right legal expert is easy. Here's how you can get legal help in just a few steps.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {steps.map(({ step, title, description }) => (
              <div
                key={step}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="flex items-center mb-3">
                  <CheckCircle className="text-green-600 dark:text-green-400 mr-2" />
                  <h2 className="text-xl font-semibold">{title}</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/find-advocates"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
