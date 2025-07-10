import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const siteSections = [
  {
    title: 'Legal Services',
    links: [
      { name: 'Find Advocates', href: '/find-advocates' },
      { name: 'Find Clients', href: '/find-clients' },
      { name: 'Legal Resources', href: '/legal-resources' },
      { name: 'Summons / Notices', href: '/summons-notices' },
      { name: 'Grievances', href: '/grievances' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Help', href: '/help' },
      { name: 'How It Works', href: '/how-it-works' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Privacy Features', href: '/privacy-features' },
      { name: 'Refund Policy', href: '/refund-policy' },
    ],
  },
  {
    title: 'Membership',
    links: [
      { name: 'Membership Plans', href: '/membership' },
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Third Party Terms', href: '/third-party-terms' },
    ],
  },
];

const SiteMapPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Site Map</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Quickly navigate through all important sections of AdvocateServices.com
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteSections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-12">
            &copy; {new Date().getFullYear()} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SiteMapPage;
