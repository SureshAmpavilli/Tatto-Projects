import React from 'react';
import { Eye, Phone, Contact, Search, ArrowRight } from 'lucide-react';

const PremiumSection = () => {
  const benefits = [
    {
      icon: Eye,
      title: 'Get upto 3x more profile views',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Phone,
      title: 'Unlimited voice & video calls',
      color: 'text-yellow-600 bg-yellow-50'
    },
    {
      icon: Contact,
      title: 'Get access to contact details',
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: Search,
      title: 'Perform unlimited searches',
      color: 'text-blue-600 bg-blue-50'
    }
  ];

  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          You are <span className="text-pink-600">missing out on the</span>
        </h3>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">premium benefits!</h3>
        
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className={`p-2 rounded-lg mr-3 ${benefit.color}`}>
                <benefit.icon className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-pink-50 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-600 mb-3">Flat 42% OFF till 13 Jul</p>
        <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors flex items-center justify-center">
          Upgrade now
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PremiumSection;
