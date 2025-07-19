import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SuccessStoryCard from '../components/Sucuss';
import Filters from '../components/Filter';

const stories = [
  {
    name: 'Adv. Priya Mehta',
    city: 'Mumbai, Maharashtra',
    quote:
      'Thanks to AdvocateServices.com, I’ve received 5x more client consultations in just 3 months. The platform makes scheduling and video consultations seamless.',
    image: 'https://source.unsplash.com/100x100/?woman,lawyer',
  },
  {
    name: 'Adv. Rajeev Sharma',
    city: 'Delhi',
    quote:
      'This portal helped me build credibility online. I now have clients from other cities seeking virtual legal advice, and my profile ranks on top.',
    image: 'https://source.unsplash.com/100x100/?man,lawyer',
  },
  {
    name: 'Adv. Sana Ali',
    city: 'Hyderabad, Telangana',
    quote:
      'The dashboard and client review system helped me scale my solo practice. The Pro Plan is definitely worth it!',
    image: 'https://source.unsplash.com/100x100/?woman,advocate',
  },
];

const SuccessStoriesPage = () => {

    const [activeTab, setActiveTab] = useState('client'); // client | advocate
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-10">
            Hear how real advocates have grown their legal practices with AdvocateServices.com.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-left"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{story.city}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">&ldquo;{story.quote}&rdquo;</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/advocate-register"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              Share Your Story / Join Now
            </a>
          </div>

          

      <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Success Stories – Real Experiences from Real Users
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab('client')}
          className={`px-4 py-2 rounded-t ${
            activeTab === 'client'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
        >
          🙋 Client Stories
        </button>
        <button
          onClick={() => setActiveTab('advocate')}
          className={`px-4 py-2 rounded-t ${
            activeTab === 'advocate'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
        >
          🧑‍⚖️ Advocate Stories
        </button>
      </div>

      {/* Filters */}
      <Filters />

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {activeTab === 'client' ? (
          <>
            <SuccessStoryCard
              type="client"
              title="Quick Settlement in Property Dispute"
              department="Civil / Property Law"
              location="Mumbai, Maharashtra"
              testimonial="The platform helped me connect with a verified legal expert who resolved my case in 2 months."
              duration="Feb 2024 – April 2024"
              advocate="[Hidden / Displayed with Consent]"
            />
          </>
        ) : (
          <>
            <SuccessStoryCard
              type="advocate"
              title="Successfully Defended a False Allegation"
              department="Criminal Law"
              location="Delhi NCR"
              summary="Through this app, I received a case from a verified client. We achieved acquittal in 5 weeks."
              clientType="Corporate / Individual"
              duration="Jan–Feb 2024"
            />
          </>
        )}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-8">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          📤 Share Your Experience
        </button>
      </div>

      {/* Compliance note */}
      <div className="mt-10 text-xs text-gray-600 dark:text-gray-400 border-t pt-4">
        <p className="font-semibold mb-1">📜 BCI Norms Compliance:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>❌ No promotions or guarantees.</li>
          <li>✅ Only factual case summaries.</li>
          <li>✅ Optional anonymity.</li>
          <li>✅ Explicit consent if names or profiles are shown.</li>
        </ul>
      </div>
    </div>
 <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            Want to be featured here? Email us at <a className="underline" href="mailto:stories@advocateservices.com">stories@advocateservices.com</a><br />
            &copy; {new Date().getFullYear()} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;
