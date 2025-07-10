import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdvancedSearchPage = () => {
  const [form, setForm] = useState({
    location: '',
    practiceArea: '',
    language: '',
    experience: '',
    availability: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would send this data to a backend or filter your results
    console.log('Searching with:', form);
  };

  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Advanced Advocate Search</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Location</label>
              <input
                type="text"
                name="location"
                placeholder="e.g., Hyderabad, Delhi"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                value={form.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Practice Area</label>
              <select
                name="practiceArea"
                value={form.practiceArea}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              >
                <option value="">-- Select --</option>
                <option value="family">Family Law</option>
                <option value="criminal">Criminal Law</option>
                <option value="property">Property Disputes</option>
                <option value="corporate">Corporate Law</option>
                <option value="labour">Labour & Employment</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Language</label>
              <input
                type="text"
                name="language"
                placeholder="e.g., Hindi, Telugu"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                value={form.language}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Years of Experience</label>
              <select
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              >
                <option value="">-- Select --</option>
                <option value="0-2">0–2 Years</option>
                <option value="3-5">3–5 Years</option>
                <option value="6-10">6–10 Years</option>
                <option value="10+">10+ Years</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Availability</label>
              <select
                name="availability"
                value={form.availability}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              >
                <option value="">-- Select --</option>
                <option value="online">Available for Online Consultation</option>
                <option value="in-person">Available for In-Person Consultation</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Search Now
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
          Can’t find an advocate? Email us at{' '}
          <a href="mailto:support@advocateservices.com" className="underline">
            support@advocateservices.com
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdvancedSearchPage;
