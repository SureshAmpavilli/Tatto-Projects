import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const siteMapData = [
  {
    title: '📂 Home',
    items: ['Welcome / Landing', 'About Us', 'How It Works > For Clients', 'How It Works > For Advocates'],
  },
  {
    title: '📂 User Profiles',
    items: ['Register as Client', 'Register as Advocate', 'Login', 'Profile Dashboard'],
  },
  {
    title: '📂 Search & Connect',
    items: ['Find Advocates', 'Find Clients', 'Advanced Filter'],
  },
  {
    title: '📂 Services',
    items: ['Book Consultation', 'Legal Advice Request', 'RTI / PIL Guidance'],
  },
  {
    title: '📂 Legal Resources',
    items: ['Blog / News', 'Case Study Library', 'eCourts API Integration'],
  },
  {
    title: '📂 Engagement',
    items: ['Success Stories', 'Testimonials', 'Create Blog'],
  },
  {
    title: '📂 Membership',
    items: ['Plans & Pricing', 'Upgrade to Premium'],
  },
  {
    title: '📂 Information',
    items: ['FAQ / Help', 'Refund Policy', 'Terms & Conditions', 'Privacy Policy', 'Credits'],
  },
  {
    title: '📂 Contact & Locations',
    items: ['Contact Us', 'Advocate Service Centers', 'Social Media Links'],
  },
  {
    title: '📂 Admin Panel (Restricted Access)',
    items: ['Profile Verification', 'Blog Review', 'API Key Management', 'Admin Controls'],
  },
];

const SiteMapPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="max-w-6xl mx-auto py-12 px-4 space-y-10">
        {/* Title & purpose */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">✅ Site Map</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            The Site Map page provides users (clients, advocates, admins) with a clear, clickable outline of all major sections
            of the E-Advocate Services platform — improving navigation, user experience, and transparency, while complying with BCI norms.
          </p>
        </section>

        {/* BCI Norms Compliance */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">⚖️ BCI Norms Compliance</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Educational & legal resources are clearly separated from service-based options.</li>
            <li>✅ No direct promotional or advertising-based linking.</li>
            <li>✅ Transparency of structure to help users access what they legally need.</li>
          </ul>
        </section>

        {/* Site map box */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🧭 E-Advocate Site Map</h2>
          <div className="space-y-4">
            {siteMapData.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-lg mb-1">{section.title}</h3>
                <ul className="ml-4 list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      {/* Replace '#' with actual routes or URLs when ready */}
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Functional Suggestions */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🔧 Functional Suggestions</h2>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-800">
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="p-3">Collapsible Sections</td>
                <td className="p-3">Each category can expand/collapse for clarity</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="p-3">Clickable Links</td>
                <td className="p-3">Each page in the site map links to the actual section</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="p-3">Breadcrumbs</td>
                <td className="p-3">Show top navigation like Home {'>'} Site Map</td>
              </tr>
              <tr>
                <td className="p-3">Search Filter</td>
                <td className="p-3">Small search bar to quickly find a page</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Optional UI wireframe preview */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🎨 UI Wireframe Sample</h2>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>🗺️ Site Map</p>
            <p>[🏠] Home</p>
            <p>[👤] Register as Client</p>
            <p>[⚖️] Find Advocate</p>
            <p>[📚] Legal Resources &gt; Blog</p>
            <p>[🧾] Membership Plans</p>
            <p>[📝] Create Blog</p>
            <p>[📞] Contact Us</p>
            <p>[🔒] Terms & Conditions</p>
            <p>[🏛️] Credits (NIC, BCI, eCourts, RTI, etc.)</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SiteMapPage;
