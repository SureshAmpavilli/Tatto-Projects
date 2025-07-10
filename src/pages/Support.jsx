import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, HelpCircle, MessageCircle } from 'lucide-react';

const SupportPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Support & Help Center</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Need help? We're here for you. Get support related to appointments, advocate services, payments, or platform issues.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <Mail className="text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-xl font-semibold">Email Support</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Write to us at:
                <br />
                <a href="mailto:support@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">
                  support@advocateservices.com
                </a>
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <Phone className="text-green-600 dark:text-green-400 mr-2" />
                <h2 className="text-xl font-semibold">Call Us</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Toll-Free Helpline: <strong>1800-XXX-XXXX</strong>
                <br />
                Mon–Fri, 10:00 AM – 6:00 PM (IST)
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <MessageCircle className="text-purple-600 dark:text-purple-400 mr-2" />
                <h2 className="text-xl font-semibold">Chat Support</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Use the chat icon on the bottom right corner of any page to talk to our support assistant.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <HelpCircle className="text-yellow-600 dark:text-yellow-400 mr-2" />
                <h2 className="text-xl font-semibold">FAQs & Help Center</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Browse answers to common questions in our{' '}
                <a href="/faq" className="text-blue-600 dark:text-blue-400 underline">
                  FAQ section
                </a>{' '}
                or get help navigating our platform.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
            For urgent legal issues, please contact local authorities or a legal helpline directly.
            <br />
            &copy; {new Date().getFullYear()} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SupportPage;
