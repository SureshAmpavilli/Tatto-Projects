import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HelpCircle, Phone, Mail, BookOpenText } from 'lucide-react';

const HelpPage = () => {
  return (
    <div className="">
      <Header />

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <HelpCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-2" />
            <h1 className="text-3xl font-bold">Help & Support</h1>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Need help using AdvocateServices.com? Whether you're booking a legal consultation or trying to resolve a payment issue, we're here to guide you.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" /> Call Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Toll-Free: <strong>1800-XXX-XXXX</strong><br />
                Timings: Mon–Fri, 10:00 AM – 6:00 PM
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" /> Email Support
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Write to us at: <br />
                <a href="mailto:support@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">
                  support@advocateservices.com
                </a>
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <BookOpenText className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" /> Self Help
              </h2>
              <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li><a href="/faq" className="underline">Frequently Asked Questions</a></li>
                <li><a href="/legal-resources" className="underline">Legal Resources</a></li>
                <li><a href="/refund-policy" className="underline">Refund Policy</a></li>
                <li><a href="/grievances" className="underline">Raise a Complaint</a></li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                💬 Live Chat (Coming Soon)
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our 24/7 virtual assistant will soon be available to help you instantly via chat.
              </p>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            &copy; {new Date().getFullYear()} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HelpPage;
