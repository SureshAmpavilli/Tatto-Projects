import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { UserPlus, ShieldCheck, TrendingUp, CalendarCheck } from 'lucide-react';

const benefits = [
  {
    icon: <UserPlus className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Get Verified & Visible',
    description:
      'Create your professional profile and get listed as a verified advocate on our platform seen by thousands.',
  },
  {
    icon: <CalendarCheck className="w-6 h-6 text-green-600 dark:text-green-400" />,
    title: 'Manage Appointments Easily',
    description:
      'Let clients book consultations online. Control your availability and reschedule anytime.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
    title: 'Secure & Compliant Platform',
    description:
      'We follow all Bar Council norms. Client data and case history are encrypted and protected.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'Grow Your Practice',
    description:
      'Reach clients from your city or anywhere in India. Increase your reach with digital visibility.',
  },
];

const JoinPlatformPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Join AdvocateServices.com</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Are you a licensed advocate? Join India’s trusted digital legal platform to expand your practice and serve more clients.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="flex items-center mb-2">
                  {item.icon}
                  <h3 className="ml-3 text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/advocate-register"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              Apply Now as Advocate
            </a>
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            Only licensed professionals with Bar Council ID are eligible. Profiles are reviewed before approval.
            <br />
            &copy; {new Date().getFullYear()} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JoinPlatformPage;
