import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const jobOpenings = [
  {
    title: 'Legal Content Writer',
    type: 'Remote / Part-time',
    location: 'India',
    description: 'Write articles and legal explainers for our blog and resource center. Law background preferred.',
  },
  {
    title: 'Frontend React Developer',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
    description: 'Build and maintain UI features using React + Tailwind. 2+ years of experience required.',
  },
  {
    title: 'Customer Support Executive',
    type: 'Full-time',
    location: 'Bangalore',
    description: 'Handle client and advocate queries through email, chat, and phone support.',
  },
  {
    title: 'Digital Marketing Intern',
    type: 'Internship',
    location: 'Remote',
    description: 'Assist with SEO, social media, and content promotions.',
  },
];

const CareersPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Careers at AdvocateServices</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join our mission to build India’s most trusted legal technology platform.
          </p>

          <div className="text-left space-y-6">
            {jobOpenings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {job.type} | {job.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{job.description}</p>
                <a
                  href={`mailto:careers@advocateservices.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            Can’t find a suitable role? Send us your resume at{' '}
            <a href="mailto:careers@advocateservices.com" className="underline">
              careers@advocateservices.com
            </a>
            <br />
            &copy; {new Date().getFullYear()} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CareersPage;
