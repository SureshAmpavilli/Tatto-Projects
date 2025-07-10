import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
