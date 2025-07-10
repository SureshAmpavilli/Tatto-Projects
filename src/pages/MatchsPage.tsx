import React from 'react';
import { Filter } from 'lucide-react';
import ProfileCard from '../components/Profile-card';

const MatchesPage = () => {
  const profiles = [
    {
      name: 'Sree Lakshmi',
      age: 25,
      height: '4ft 10in',
      location: 'Nellore',
      caste: 'Rajaka',
      education: 'MBA/PGDM, B.Com',
      occupation: 'Not working',
      income: 'No Income',
      maritalStatus: 'Never Married',
      lastSeen: '07-Jul-25',
      isRequestPhoto: true
    },
    {
      name: 'Hema Devi',
      age: 24,
      height: '4ft 10in',
      location: 'Gudivada',
      caste: 'Brahmin-Valam',
      education: 'Trade School',
      occupation: 'Not working',
      income: 'No Income',
      maritalStatus: 'Never Married',
      lastSeen: '26-Jun-25',
      imageUrl: '/lovable-uploads/13584bb2-f235-459f-933a-d4251c658bae.png',
      photoCount: 2
    },
    {
      name: 'WRWR9949',
      age: 24,
      height: '4ft 10in',
      location: 'Gudivada',
      caste: 'Brahmin-Valam',
      education: 'Trade School',
      occupation: 'Not working',
      income: 'No Income',
      maritalStatus: 'Never Married',
      lastSeen: '27-May-25',
      imageUrl: '/lovable-uploads/13584bb2-f235-459f-933a-d4251c658bae.png',
      photoCount: 2
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Looking For</h2>
        <button className="flex items-center px-4 py-2 text-pink-600 border border-pink-600 rounded-lg hover:bg-pink-50">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </button>
      </div>

      <div className="space-y-4">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default MatchesPage;