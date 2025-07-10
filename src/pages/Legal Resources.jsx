import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const legalResources = [
  {
    id: 1,
    title: 'Basic Rights Under Indian Constitution',
    type: 'Guide',
    description: 'An overview of your fundamental rights as an Indian citizen.',
    link: '/resources/constitution-rights',
  },
  {
    id: 2,
    title: 'Free Legal Notice Template (Property Dispute)',
    type: 'Template',
    description: 'Download a sample format for sending a legal notice in a property matter.',
    link: '/downloads/legal-notice-property.pdf',
  },
  {
    id: 3,
    title: 'Women\'s Rights in Marriage and Divorce',
    type: 'Article',
    description: 'Understand legal protections available to women in marriage, divorce, and maintenance cases.',
    link: '/resources/women-rights-marriage',
  },
  {
    id: 4,
    title: 'How to File an FIR Online',
    type: 'Guide',
    description: 'Step-by-step process to file an FIR digitally in different states.',
    link: '/resources/file-fir-online',
  },
  {
    id: 5,
    title: 'Stamp Duty Calculator',
    type: 'Tool',
    description: 'Calculate stamp duty applicable on property registration in your state.',
    link: '/tools/stamp-duty-calculator',
  },
];

const LegalResourcesPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Legal Resources</h1>
          <p className="mb-8 text-gray-700 dark:text-gray-300">
            Explore free legal tools, templates, and articles curated by experts to empower you with basic legal knowledge and practical help.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {legalResources.map((res) => (
              <div
                key={res.id}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold mb-2">{res.title}</h2>
                <span className="inline-block mb-3 px-2 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-300 rounded">
                  {res.type}
                </span>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{res.description}</p>
                <a
                  href={res.link}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resource →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LegalResourcesPage;
