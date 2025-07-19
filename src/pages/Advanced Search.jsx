import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdvocateSearch from '../components/Advocate-Search';


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

       
               <AdvocateSearch/>


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
