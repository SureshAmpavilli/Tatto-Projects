import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const mockAdvocates = [
  {
    id: 1,
    name: 'Adv. Riya Sharma',
    specialization: 'Family Law',
    location: 'Delhi',
    experience: '7 years',
    languages: ['English', 'Hindi'],
    profileImg: 'https://via.placeholder.com/80',
  },
  {
    id: 2,
    name: 'Adv. Arjun Mehta',
    specialization: 'Criminal Law',
    location: 'Mumbai',
    experience: '10 years',
    languages: ['English', 'Marathi'],
    profileImg: 'https://via.placeholder.com/80',
  },
  {
    id: 3,
    name: 'Adv. Neha Reddy',
    specialization: 'Civil Litigation',
    location: 'Hyderabad',
    experience: '5 years',
    languages: ['English', 'Telugu'],
    profileImg: 'https://via.placeholder.com/80',
  },
];

const FindAdvocatesPage = () => {
  const [search, setSearch] = useState('');

  const filteredAdvocates = mockAdvocates.filter(
    (adv) =>
      adv.name.toLowerCase().includes(search.toLowerCase()) ||
      adv.specialization.toLowerCase().includes(search.toLowerCase()) ||
      adv.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Find Verified Advocates</h1>

          <input
            type="text"
            placeholder="Search by name, location, or specialization..."
            className="w-full p-3 mb-6 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {filteredAdvocates.length > 0 ? (
              filteredAdvocates.map((adv) => (
                <div
                  key={adv.id}
                  className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={adv.profileImg}
                      alt={adv.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h2 className="text-xl font-semibold">{adv.name}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {adv.specialization}
                      </p>
                    </div>
                  </div>
                  <p><strong>Location:</strong> {adv.location}</p>
                  <p><strong>Experience:</strong> {adv.experience}</p>
                  <p><strong>Languages:</strong> {adv.languages.join(', ')}</p>

                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    View Profile
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400 col-span-2">No advocates found.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FindAdvocatesPage;
