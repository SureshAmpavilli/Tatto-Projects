import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const roles = [
  {
    title: 'App & Web Developers',
    description: 'Frontend/Backend (React, Node, Firebase, etc.)',
    icon: '👨‍💻',
  },
  {
    title: 'Client Support Executives',
    description: 'Handle helpdesk, grievances, and onboarding',
    icon: '📞',
  },
  {
    title: 'Social Media Managers',
    description: 'Run awareness campaigns (non-promotional)',
    icon: '📱',
  },
  {
    title: 'Legal Research Assistants',
    description: 'Help prepare non-advisory public legal content',
    icon: '📊',
  },
  {
    title: 'Legal Awareness Coordinators',
    description: 'Organize webinars & events (in collaboration with BCI-approved bodies)',
    icon: '🎓',
  },
  {
    title: 'Regional Centre Assistants',
    description: 'Front office support at physical support centres',
    icon: '🏢',
  },
];

const CareersPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Careers at E-Advocate Services</h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Build the Future of Digital Legal Access in India
          </p>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            At E-Advocate Services, we’re transforming how clients connect with trusted, verified legal professionals — ethically and digitally.
            If you’re passionate about access to justice, digital transformation, and service-driven innovation, join us.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 rounded mb-8">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              🛡️ <strong>Note:</strong> We do not offer legal roles to individuals who are not enrolled with the Bar Council of India or a State Bar Council.
              We strictly follow BCI Rule 36 and do not engage in legal advertisement or unauthorized practice.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">🔍 Who Can Apply?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {roles.map((role, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-4 rounded shadow hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-1 flex items-center">
                  <span className="mr-2 text-xl">{role.icon}</span> {role.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{role.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">🚫 What We Don’t Offer</h2>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
            <li>We do not employ non-advocates as legal advisors</li>
            <li>We do not allow legal representation, advice, or document drafting by non-lawyers</li>
            <li>We do not promote advocates based on payment, ranking, or ads</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">📋 Application Process</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">
            • Email your CV/Resume to: <a href="mailto:careers@eadvocateservices.in" className="underline text-blue-600 dark:text-blue-400">careers@eadvocateservices.in</a>
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">
            • Include a short cover letter explaining your interest
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
            • Mention the position you're applying for in the subject line
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-sm">
            Shortlisted candidates will be contacted for an interview (online or at a regional centre)
          </p>

          <h2 className="text-2xl font-semibold mb-4">🕒 Work Culture & Ethics</h2>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
            <li>Work from home & hybrid roles available</li>
            <li>Transparent code of conduct, weekly check-ins</li>
            <li>No tolerance for unethical promotion, favoritism, or BCI violations</li>
            <li>Opportunity to contribute to legal access and social justice</li>
          </ul>

          <div className="mt-10 text-center">
            <p className="text-lg font-semibold mb-2">🌐 Join Us. Serve India’s Justice Movement.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We’re more than a tech company — we’re building the bridge to legal help for every Indian, one verified connection at a time.
            </p>
            <a href="mailto:careers@eadvocateservices.in" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
              Apply Now
            </a>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              📧 careers@eadvocateservices.in | 📍 Head Office | 🌐 www.eadvocateservices.in/careers
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
