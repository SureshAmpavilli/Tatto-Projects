import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Example client leads
const exampleClients = [
  {
    caseId: '#CLNT1249',
    date: '18 July 2025',
    location: 'Pune, Maharashtra',
    department: 'Family Law – Divorce',
    clientType: 'Individual',
    requirement: 'Need representation for a mutual divorce case. Already discussed terms.',
    status: 'Open to responses',
    urgency: 'Normal',
  },
  // Add more client objects if needed
];

const FindClientsPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="max-w-6xl mx-auto py-12 px-4 space-y-10">

        {/* ✅ Page Title & Purpose */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">✅ Find Clients</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            To help registered and verified advocates discover client requests, legal needs, or consultation queries posted
            on the platform — while fully complying with BCI norms regarding solicitation and promotion.
          </p>
        </section>

        {/* 🔹 Tabs / Filter Menu */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">🔹 Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Department', options: ['All', 'Civil', 'Criminal', 'Family', 'Corporate'] },
              { label: 'Sub-Department', options: ['All', 'Divorce', 'Cheque Bounce', 'Bail'] },
              { label: 'City/State', options: ['All', 'Delhi', 'Hyderabad', 'Bengaluru', 'Mumbai'] },
              { label: 'Case Type', options: ['All', 'Legal Advice', 'Court Representation'] },
              { label: 'Client Type', options: ['All', 'Individual', 'Corporate', 'NGO'] },
              { label: 'Date Posted', options: ['All', 'Today', 'This Week', 'This Month'] },
              { label: 'Urgency', options: ['All', 'Urgent', 'Normal'] },
            ].map((filter, idx) => (
              <div key={idx}>
                <label className="block font-semibold mb-1">{filter.label}</label>
                <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
                  {filter.options.map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </section>

        {/* 🟦 Client Lead Cards */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">🟦 Client Leads</h2>
          <div className="grid gap-6">
            {exampleClients.map((client, idx) => (
              <div key={idx} className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg space-y-1">
                <p className="font-bold">🔎 Case ID: {client.caseId}</p>
                <p>📅 Date Posted: {client.date}</p>
                <p>📍 Location: {client.location}</p>
                <p>📘 Department: {client.department}</p>
                <p>👤 Client Type: {client.clientType}</p>
                <p>📢 Requirement: “{client.requirement}”</p>
                <p>🔐 Status: {client.status}</p>
                <p>🟢 Urgency: {client.urgency}</p>
                <div className="flex gap-2 mt-2">
                  <a href="#" className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">🔗 View Details</a>
                  <a href="#" className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">💬 Send Proposal</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🛠️ Actions for Advocates */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">🛠️ Actions Available for Advocates</h2>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-800">
                <th className="p-3 text-left">Action</th>
                <th className="p-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                { action: '🔍 View Details', desc: 'See more info (blurred contact unless premium or verified)' },
                { action: '📬 Send Proposal', desc: 'Message client with your fee quote and availability' },
                { action: '⭐ Save Client Lead', desc: 'Bookmark for later follow-up' },
                { action: '✅ Apply for Case', desc: 'Express interest to take up legal case' },
                { action: '🔒 Unlock Contact', desc: 'See client contact info if paid or admin-approved' },
              ].map((item, i) => (
                <tr key={i} className="border-b border-gray-300 dark:border-gray-700">
                  <td className="p-3">{item.action}</td>
                  <td className="p-3">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 🔐 BCI Norms Compliance */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">🔐 BCI Norms Compliance</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Allowed: factual display of client needs, category-based search, proposals without promises</li>
            <li>🚫 Not Allowed: advertising success rates, guaranteed results, off-platform solicitation</li>
          </ul>
        </section>

        {/* 💬 Optional Advocate Preferences Filter */}
       
      </main>

      <Footer />
    </div>
  );
};

export default FindClientsPage;
