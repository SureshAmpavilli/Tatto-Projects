import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const exampleAdvocates = [
  {
    name: 'Adv. Anjali Sharma',
    department: 'Family Law',
    experience: '6 Years',
    location: 'Mumbai, Maharashtra',
    languages: 'Hindi, English',
    bar: 'BCI, Bombay High Court',
    availability: 'Online & Offline',
    fee: '₹1,500 per session',
  },
  // Add more advocate objects as needed
];

const FindAdvocatesPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="max-w-6xl mx-auto py-12 px-4 space-y-10">

        {/* Page Title & Purpose */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">✅ Find Advocates</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            To help clients search for and connect with verified advocates based on legal needs, department, location,
            experience, and language — without violating BCI norms on advertising or solicitation.
          </p>
        </section>

        {/* Advanced Filter Menu */}
       
           <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
  <h2 className="text-2xl font-bold mb-4">🔹 Advanced Filter Menu</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    <div>
      <label className="block font-semibold mb-1">Department</label>
      <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
        <option>All</option>
        <option>Criminal</option>
        <option>Civil</option>
        <option>Corporate</option>
        <option>Family</option>
        <option>Consumer</option>
      </select>
    </div>

    <div>
      <label className="block font-semibold mb-1">Sub-Department</label>
      <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
        <option>All</option>
        <option>Cheque Bounce</option>
        <option>Property Dispute</option>
        <option>Divorce</option>
      </select>
    </div>

    <div>
      <label className="block font-semibold mb-1">Location</label>
      <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
        <option>All</option>
        <option>Hyderabad</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Bangalore</option>
      </select>
    </div>

    <div>
      <label className="block font-semibold mb-1">Years of Experience</label>
      <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
        <option>All</option>
        <option>0–2 yrs</option>
        <option>3–5 yrs</option>
        <option>6+ yrs</option>
      </select>
    </div>

    <div>
      <label className="block font-semibold mb-1">Language Spoken</label>
      <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
        <option>All</option>
        <option>Hindi</option>
        <option>Telugu</option>
        <option>Tamil</option>
        <option>Kannada</option>
        <option>English</option>
      </select>
    </div>

    <div>
      <label className="block font-semibold mb-1">Bar Association Member</label>
      <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
        <option>All</option>
        <option>BCI Registered</option>
        <option>High Court</option>
        <option>Supreme Court</option>
      </select>
    </div>

    <div>
      <label className="block font-semibold mb-1">Gender Preference</label>
      <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
        <option>Any</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>

    <div>
      <label className="block font-semibold mb-1">Availability</label>
      <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
        <option>All</option>
        <option>Online Consultation</option>
        <option>Physical Visit</option>
      </select>
    </div>

  </div>
</section>

        {/* Advocate Profile Cards */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">🟦 Advocate Profiles</h2>
          <div className="grid gap-6">
            {exampleAdvocates.map((adv, idx) => (
              <div key={idx} className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg space-y-1">
                <p className="font-bold text-lg">👤 {adv.name}</p>
                <p>🎓 Department: {adv.department} | {adv.experience} Experience</p>
                <p>🌐 Location: {adv.location}</p>
                <p>🗣️ Languages: {adv.languages}</p>
                <p>🏛️ Registered: {adv.bar}</p>
                <p>🕑 Availability: {adv.availability}</p>
                <p>🏷️ Consultation Fee: {adv.fee}</p>
                <div className="flex gap-2 mt-2">
                  <a href="#" className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">🔍 View Profile</a>
                  <a href="#" className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">📞 Request Callback</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Actions Table */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🛠️ Client Actions</h2>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-800">
                <th className="p-3 text-left">Action</th>
                <th className="p-3 text-left">Function</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="p-3">🔍 View Profile</td>
                <td className="p-3">Detailed info, ratings, reviews, consultation slots</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="p-3">📅 Book Appointment</td>
                <td className="p-3">Select date/time for consultation</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="p-3">📞 Request Callback</td>
                <td className="p-3">Notify advocate for a free callback</td>
              </tr>
              <tr>
                <td className="p-3">🛑 Report Profile</td>
                <td className="p-3">Flag if advocate violates policy</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* BCI Norms Compliance */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🔐 BCI Norms Compliance</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Allowed: Listing factual advocate details, qualifications, bar memberships, scheduling</li>
            <li>🚫 Not Allowed: Rankings, promotional badges, success claims, off-platform solicitation</li>
          </ul>
        </section>

        {/* Optional UX Features */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🔁 Optional Features for UX</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>⭐ Bookmark Advocate</li>
            <li>🔔 Notify me when available</li>
            <li>📄 Compare Advocates side by side</li>
          </ul>
        </section>

        {/* Example Profile Detail View */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🧑‍💼 Example Profile Detail View</h2>
          <div className="space-y-1 text-gray-700 dark:text-gray-300">
            <p>👩‍⚖️ Adv. Anjali Sharma</p>
            <p>📍 Mumbai, Maharashtra</p>
            <p>🎓 Department: Family Law</p>
            <p>🕑 Experience: 6 Years</p>
            <p>📑 Bar Member: BCI, Bombay High Court</p>
            <p>🗣️ Languages: Hindi, English</p>
            <p>📞 Consultation Fee: ₹1,500</p>
            <p>📆 Availability: Mon–Sat (10 AM – 6 PM)</p>
            <p>📥 Book: [Book Video Call] [Request Office Visit]</p>
            <p>🛡️ Verified by E-Advocate Services ✔</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FindAdvocatesPage;
