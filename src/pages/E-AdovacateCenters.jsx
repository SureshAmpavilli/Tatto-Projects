import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Video, Users, ShieldCheck } from 'lucide-react';

const centers = [
  {
    name: 'Hyderabad Legal Hub',
    city: 'Hyderabad, Telangana',
    services: ['Family Law', 'Property Disputes', 'Free Legal Aid'],
    type: 'District e-Center',
  },
  {
    name: 'Bangalore E-Court Connect',
    city: 'Bangalore, Karnataka',
    services: ['Civil Litigation', 'Startup Advisory'],
    type: 'Urban e-Center',
  },
  {
    name: 'Vizag Virtual Legal Clinic',
    city: 'Visakhapatnam, Andhra Pradesh',
    services: ['Legal Aid for Women', 'Consumer Complaints'],
    type: 'Community e-Center',
  },
];

const EAdvocateCentersPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">E-Advocate Centers</h1>
          <p className="mb-8 text-gray-700 dark:text-gray-300">
            E-Advocate Centers are government or privately supported hubs that connect you to experienced lawyers using
            digital infrastructure — especially useful for remote and rural areas.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
              <Video className="text-blue-600 dark:text-blue-400 w-6 h-6 mb-2" />
              <h3 className="text-lg font-semibold mb-1">Video Consultation Booths</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Users can connect to licensed advocates via secure video conferencing systems with local assistance.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
              <Users className="text-green-600 dark:text-green-400 w-6 h-6 mb-2" />
              <h3 className="text-lg font-semibold mb-1">Local Support Staff</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Each center includes trained operators to help schedule appointments, upload case docs, and more.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
              <ShieldCheck className="text-yellow-600 dark:text-yellow-400 w-6 h-6 mb-2" />
              <h3 className="text-lg font-semibold mb-1">Secure Legal Access</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                All consultations are encrypted, confidential, and follow Bar Council of India norms.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Available Centers</h2>
          <div className="grid gap-6">
            {centers.map((center, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex items-center mb-2">
                  <MapPin className="text-red-500 dark:text-red-400 mr-2" />
                  <h3 className="text-xl font-semibold">{center.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{center.city}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Type: <span className="font-medium">{center.type}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Services: {center.services.join(', ')}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/book-consultation"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              Find a Legal Center Near Me
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EAdvocateCentersPage;
