import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, CalendarCheck, MonitorPlay, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Connect with Verified Clients',
    description: 'Receive leads from clients who are actively seeking legal advice in your area of expertise.',
  },
  {
    icon: <CalendarCheck className="w-6 h-6 text-green-600 dark:text-green-400" />,
    title: 'Smart Appointment Tools',
    description: 'Easily manage consultation slots, accept or reschedule meetings through your dashboard.',
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'Online Video Consultations',
    description: 'Reach clients beyond your city via encrypted, secure video consultations.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
    title: 'Build Reputation & Trust',
    description: 'Collect client reviews, build your credibility, and appear higher in search results.',
  },
];

const FindClientsPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Find New Clients</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Discover how AdvocateServices.com helps verified lawyers grow their practice by connecting with genuine clients online.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {features.map((item, idx) => (
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
              Start Getting Clients
            </a>
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            Listings are shown based on service area, profile quality, and client reviews.
            <br />
            &copy; {new Date().getFullYear()} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FindClientsPage;
