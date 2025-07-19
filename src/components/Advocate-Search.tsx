import React, { useState } from 'react';

// ✅ All your constants (can move to filterOptions.js later)
const DEPARTMENTS = [
  { value: 'criminal', label: 'Criminal' },
  { value: 'civil', label: 'Civil' },
  { value: 'property', label: 'Property' },
  { value: 'family', label: 'Family' },
];
const SUB_DEPARTMENTS = [
  { value: 'cheque_bounce', label: 'Cheque Bounce' },
  { value: 'land_dispute', label: 'Land Dispute' },
  { value: 'divorce', label: 'Divorce' },
  { value: 'bail', label: 'Bail' },
];
const STATES = [
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'karnataka', label: 'Karnataka' },
];
const CITIES = [
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'bengaluru', label: 'Bengaluru' },
  { value: 'delhi', label: 'Delhi' },
];
const COURT_TYPES = [
  { value: 'high_court', label: 'High Court' },
  { value: 'district_court', label: 'District Court' },
  { value: 'supreme', label: 'Supreme' },
  { value: 'tribunal', label: 'Tribunal' },
  { value: 'family_court', label: 'Family Court' },
];
const QUALIFICATIONS = [
  { value: 'llb', label: 'LLB' },
  { value: 'llm', label: 'LLM' },
  { value: 'phd', label: 'PhD' },
];
const ADVOCATE_TYPES = [
  { value: 'solo', label: 'Solo Practitioner' },
  { value: 'firm', label: 'Firm' },
];
const LANGUAGES = [
  { value: 'english', label: 'English' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'telugu', label: 'Telugu' },
];
const FEE_STRUCTURES = [
  { value: 'pro_bono', label: 'Pro Bono' },
  { value: 'fixed_fee', label: 'Fixed Fee' },
  { value: 'hourly_rate', label: 'Hourly Rate' },
];
const GENDER_PREFERENCES = [
  { value: 'any', label: 'Any' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];
const RESPONSE_TIMES = [
  { value: 'immediate', label: 'Immediate' },
  { value: 'within_24hr', label: 'Within 24hr' },
  { value: 'flexible', label: 'Flexible' },
];
const CONSULTATION_MODES = [
  { value: 'online', label: 'Online' },
  { value: 'offline', label: 'Offline' },
  { value: 'call', label: 'Call' },
  { value: 'chat', label: 'Chat' },
];


// ✅ Reusable multi-checkbox component
const MultiCheckboxGroup = ({ options, selected, setSelected, name }) => (
  <div className="flex flex-wrap gap-2">
    {options.map((opt, idx) => (
      <div key={opt.value} className="flex items-center space-x-1">
        <input
          id={`${name}-${idx}`}
          type="checkbox"
          value={opt.value}
          checked={selected.includes(opt.value)}
          onChange={() =>
            setSelected(prev =>
              prev.includes(opt.value)
                ? prev.filter(v => v !== opt.value)
                : [...prev, opt.value]
            )
          }
          className="accent-blue-600"
        />
        <label htmlFor={`${name}-${idx}`} className="text-gray-700 dark:text-gray-300">{opt.label}</label>
      </div>
    ))}
  </div>
);


const AdvancedFilter = () => {
  // State
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSubDepartments, setSelectedSubDepartments] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [selectedEducation, setSelectedEducation] = useState('');
  const [advocateType, setAdvocateType] = useState('');
  const [selectedCourtType, setSelectedCourtType] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [feeStructure, setFeeStructure] = useState([]);
  const [genderPreference, setGenderPreference] = useState('any');
  const [responseTime, setResponseTime] = useState('');
  const [consultationMode, setConsultationMode] = useState([]);

  // Handle search
  const handleSearch = () => {
    const filters = {
      selectedDepartment,
      selectedSubDepartments,
      selectedState,
      selectedCity,
      yearsOfExperience,
      selectedEducation,
      advocateType,
      selectedCourtType,
      selectedLanguages,
      feeStructure,
      genderPreference,
      responseTime,
      consultationMode,
    };
    console.log('Filters:', filters);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        🔍 Advanced Advocate Search Filter
      </h2>

      {/* Department */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">📚 Department of Law:</label>
        <select
          value={selectedDepartment}
          onChange={e => setSelectedDepartment(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
        >
          <option value="">Select Department</option>
          {DEPARTMENTS.map(d => (
            <option key={d.value} value={d.value}>{d.label}</option>
          ))}
        </select>
      </div>

      {/* Sub Departments */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">🏷️ Sub Department (Multi-select):</label>
        <MultiCheckboxGroup
          options={SUB_DEPARTMENTS}
          selected={selectedSubDepartments}
          setSelected={setSelectedSubDepartments}
          name="sub"
        />
      </div>

      {/* State & City */}
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex-1">
          <label className="block mb-1 text-gray-700 dark:text-gray-300">📍 State:</label>
          <select
            value={selectedState}
            onChange={e => setSelectedState(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          >
            <option value="">Select State</option>
            {STATES.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block mb-1 text-gray-700 dark:text-gray-300">🏙️ City:</label>
          <select
            value={selectedCity}
            onChange={e => setSelectedCity(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          >
            <option value="">Select City</option>
            {CITIES.map(c => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Court Type */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">🏛️ Court Type:</label>
        <div className="flex flex-wrap gap-2">
          {COURT_TYPES.map(ct => (
            <button
              key={ct.value}
              type="button"
              onClick={() => setSelectedCourtType(ct.value)}
              className={`px-3 py-1 rounded text-sm ${
                selectedCourtType === ct.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
              }`}
            >
              {ct.label}
            </button>
          ))}
        </div>
      </div>

      {/* Years of Experience */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">📅 Years of Experience: {yearsOfExperience}+</label>
        <input
          type="range"
          min="0"
          max="30"
          value={yearsOfExperience}
          onChange={e => setYearsOfExperience(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Education */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">🎓 Education/Qualification:</label>
        <select
          value={selectedEducation}
          onChange={e => setSelectedEducation(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
        >
          <option value="">Select Qualification</option>
          {QUALIFICATIONS.map(q => (
            <option key={q.value} value={q.value}>{q.label}</option>
          ))}
        </select>
      </div>

      {/* Advocate Type */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">🏢 Advocate Type:</label>
        <div className="flex gap-2">
          {ADVOCATE_TYPES.map(at => (
            <button
              key={at.value}
              type="button"
              onClick={() => setAdvocateType(at.value)}
              className={`px-3 py-1 rounded text-sm ${
                advocateType === at.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
              }`}
            >
              {at.label}
            </button>
          ))}
        </div>
      </div>

      {/* Language Preference */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">🔗 Language Preference (Multi-select):</label>
        <MultiCheckboxGroup
          options={LANGUAGES}
          selected={selectedLanguages}
          setSelected={setSelectedLanguages}
          name="lang"
        />
      </div>

      {/* Fee Structure */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">💰 Fee Structure:</label>
        <MultiCheckboxGroup
          options={FEE_STRUCTURES}
          selected={feeStructure}
          setSelected={setFeeStructure}
          name="fee"
        />
      </div>

      {/* Gender Preference */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">🔘 Gender Preference:</label>
        <div className="flex gap-2">
          {GENDER_PREFERENCES.map(gp => (
            <button
              key={gp.value}
              type="button"
              onClick={() => setGenderPreference(gp.value)}
              className={`px-3 py-1 rounded text-sm ${
                genderPreference === gp.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
              }`}
            >
              {gp.label}
            </button>
          ))}
        </div>
      </div>

      {/* Response Time */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">⏱️ Response Time Preference:</label>
        <select
          value={responseTime}
          onChange={e => setResponseTime(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
        >
          <option value="">Select</option>
          {RESPONSE_TIMES.map(rt => (
            <option key={rt.value} value={rt.value}>{rt.label}</option>
          ))}
        </select>
      </div>

      {/* Consultation Mode */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">💻 Consultation Mode:</label>
        <MultiCheckboxGroup
          options={CONSULTATION_MODES}
          selected={consultationMode}
          setSelected={setConsultationMode}
          name="cm"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        🔍 Search
      </button>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        ⚖️ Compliant with BCI norms: no ratings, no promotions, filters help match by practice area & logistics.
      </p>
    </div>
  );
};

export default AdvancedFilter;
