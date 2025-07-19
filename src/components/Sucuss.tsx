import React from 'react';

const SuccessStoryCard = ({
  type,
  title,
  department,
  location,
  testimonial,
  summary,
  clientType,
  duration,
  advocate,
}) => (
  <div className="border border-gray-300 dark:border-gray-700 rounded p-4 bg-gray-50 dark:bg-gray-800">
    <h2 className="text-lg font-semibold mb-2">✅ {title}</h2>
    <p className="text-sm mb-1">🔹 Department: {department}</p>
    <p className="text-sm mb-1">📍 Location: {location}</p>

    {type === 'client' && (
      <>
        <p className="text-sm mb-1">🧾 Testimonial:</p>
        <p className="text-sm italic mb-1">“{testimonial}”</p>
        <p className="text-sm mb-1">🗓️ Duration: {duration}</p>
        <p className="text-sm">👨‍⚖️ Advocate: {advocate}</p>
      </>
    )}

    {type === 'advocate' && (
      <>
        <p className="text-sm mb-1">🧾 Summary:</p>
        <p className="text-sm italic mb-1">“{summary}”</p>
        <p className="text-sm mb-1">👨‍💼 Client Type: {clientType}</p>
        <p className="text-sm">🗓️ Case Duration: {duration}</p>
      </>
    )}
  </div>
);

export default SuccessStoryCard;
