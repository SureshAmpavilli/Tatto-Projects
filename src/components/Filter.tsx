import React from 'react';

const Filters = () => (
  <div className="flex flex-wrap justify-center gap-3 mb-6">
    <select className="border rounded px-2 py-1 bg-white dark:bg-gray-800 dark:border-gray-700">
      <option>Department</option>
      <option>Civil / Property Law</option>
      <option>Criminal Law</option>
    </select>
    <select className="border rounded px-2 py-1 bg-white dark:bg-gray-800 dark:border-gray-700">
      <option>Location</option>
      <option>Mumbai</option>
      <option>Delhi NCR</option>
    </select>
    <select className="border rounded px-2 py-1 bg-white dark:bg-gray-800 dark:border-gray-700">
      <option>Year</option>
      <option>2024</option>
      <option>2023</option>
    </select>
    <select className="border rounded px-2 py-1 bg-white dark:bg-gray-800 dark:border-gray-700">
      <option>Case Type</option>
      <option>Property Dispute</option>
      <option>False Allegation</option>
    </select>
  </div>
);

export default Filters;
