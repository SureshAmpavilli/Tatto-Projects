import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserShield } from "react-icons/fa";
import Swal from 'sweetalert2';


const RegisterAdvocate = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    mobileNumber: '',
    email: '',
    aadharNumber: '',
    profilePicture: null,
    lawDegree: '',
    universityName: '',
    graduationYear: '',
    enrolmentNumber: '',
    stateBarCouncil: '',
    enrollmentYear: '',
    enrollmentCertificate: null,
    yearsOfExperience: '',
    specialization: '',
    subSpecialization: '',
    subDepartment: '',
    location: '',
    address: '',
    careerInfo: '',
    subscriptionPlan: '',
    availableSlots: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    workTypes: [],
    otherWorkType: '',
     languagesKnown: [],
  otherLanguage: '',
  subscriptions: [],
  paymentModes: [],
  otherPaymentMode: '',
   courtOfPractice: [],
   languageKnown: '',
   currentFirm: '',
    designation: '',
    workType: '',
   
    
   
  
 
 country: '',
  state: '',
  city: '',
  currentOfficeAddress: '',
  permanentAddress: '',
  pinCode: '',
   
    availableFor: [],
     availableDays: [],
      declarations: [],
  signature: '',
  date: '',
   documentType: '',
     firstName: '',
  lastName: '',
   otherCourt: '',
  category: '',
  otherCategory: '',
  barAssociation: '',
  practiceLicense: null,
   

  });


  const handleWorkTypeChange = (e) => {
  const { value, checked } = e.target;
  setFormData((prev) => {
    if (checked) {
      return { ...prev, workTypes: [...prev.workTypes, value] };
    } else {
      return {
        ...prev,
        workTypes: prev.workTypes.filter((type) => type !== value),
      };
    }
  });
};

const handleFileChange = (e) => {
  const file = e.target.files[0];
  setFormData((prev) => ({
    ...prev,
    practiceLicense: file,
  }));
};


const handleDeclarationChange = (e) => {
  const { value, checked } = e.target;
  setFormData(prev => {
    let updated = [...prev.declarations];
    if (checked) {
      updated.push(value);
    } else {
      updated = updated.filter(item => item !== value);
    }
    return { ...prev, declarations: updated };
  });
  setFormErrors(prev => ({
    ...prev,
    declarations: ''
  }));
};




  // handle input changes
 

const handleLanguagesChange = (e) => {
  const { value, checked } = e.target;
  setFormData((prev) => {
    if (checked) {
      return { ...prev, languagesKnown: [...prev.languagesKnown, value] };
    } else {
      return {
        ...prev,
        languagesKnown: prev.languagesKnown.filter((lang) => lang !== value),
      };
    }
  });
};

const validateStep1 = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }

 if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }


    if (!formData.gender) {
      errors.gender = "Gender is required";
    }
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required";
    }
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = "Mobile number must be 10 digits";
    }
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Valid email is required";
    }
     if (!formData.documentType) {
    errors.documentType = 'Please select a document type';
  }
    
    if (!formData.profilePicture) {
      errors.profilePicture = "Profile picture is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const validateStep2 = () => {
  const errors = {};

  if (!formData.lawDegree.trim()) {
    errors.lawDegree = "Law degree is required";
  }
  if (!formData.universityName.trim()) {
    errors.universityName = "University name is required";
  }
  if (!formData.graduationYear || formData.graduationYear < 1900 || formData.graduationYear > new Date().getFullYear()) {
    errors.graduationYear = "Enter a valid graduation year";
  }
  if (!formData.enrolmentNumber.trim()) {
    errors.enrolmentNumber = "Enrolment number is required";
  }
  if (!formData.stateBarCouncil.trim()) {
    errors.stateBarCouncil = "State bar council name is required";
  }
  if (!formData.enrollmentYear || formData.enrollmentYear < 1900 || formData.enrollmentYear > new Date().getFullYear()) {
    errors.enrollmentYear = "Enter a valid enrollment year";
  }
  if (!formData.enrollmentCertificate) {
    errors.enrollmentCertificate = "Enrollment certificate is required";
  }

  setFormErrors(errors);
  return Object.keys(errors).length === 0;
};



const validateStep3 = () => {
  const errors = {};

 
 if (!formData.courtOfPractice) errors.courtOfPractice = "Please select a court of practice";
    if (!formData.specialization) errors.specialization = "Please select specialization";
    if (!formData.subSpecialization) errors.subSpecialization = "Please select sub-specialization";
    if (!formData.category) errors.category = "Please select category";
    if (!formData.yearsOfExperience) errors.yearsOfExperience = "Please enter years of experience";
    if (!formData.practiceLicense) errors.practiceLicense = "Please upload practice license";
  
  setFormErrors(errors);
  return Object.keys(errors).length === 0;
};



const validateStep4 = () => {
  const errors = {};

  if (!formData.country.trim()) {
    errors.country = 'Country is required';
  }

  if (!formData.state.trim()) {
    errors.state = 'State is required';
  }

  if (!formData.city.trim()) {
    errors.city = 'City or town is required';
  }

  if (!formData.currentOfficeAddress.trim()) {
    errors.currentOfficeAddress = 'Current office address is required';
  }

  if (!formData.permanentAddress.trim()) {
    errors.permanentAddress = 'Permanent address is required';
  }

    if (!formData.pinCode.trim()) {
    errors.pinCode = 'Pin code is required';
  } else if (!/^\d{5,6}$/.test(formData.pinCode.trim())) {
    errors.pinCode = 'Pin code must be 5 or 6 digits';
  }

  setFormErrors(errors);
  return Object.keys(errors).length === 0;
};



const validateStep5 = () => {
  const errors = {};

  if (!formData.workType) {
      errors.workType = "Please select your work type";
    } else if (formData.workType === "Other" && !formData.otherWorkType.trim()) {
      errors.otherWorkType = "Please specify other work type";
    }

    if (!formData.languageKnown) {
      errors.languageKnown = "Please select a language";
    } else if (formData.languageKnown === "Other" && !formData.otherLanguage.trim()) {
      errors.otherLanguage = "Please specify other language";
    }
  

  setFormErrors(errors);
  return Object.keys(errors).length === 0;
};






const validateStep6 = () => {
  let errors = {};
  let isValid = true;

  if (formData.availableFor.length === 0) {
    errors.availableFor = "Please select at least one option for 'Available For'.";
    isValid = false;
  }

  if (!formData.workingHoursStart || !formData.workingHoursEnd) {
    errors.workingHours = "Please select both start and end working hours.";
    isValid = false;
  }

  if (formData.availableDays.length === 0) {
    errors.availableDays = "Please select at least one available day.";
    isValid = false;
  }

  setFormErrors(prev => ({ ...prev, ...errors }));
  return isValid;
};


const validateStep7 = () => {
  let errors = {};
  let isValid = true;

 if (formData.declarations.length === 0) {
  errors.declarations = "Please check at least one declaration";
}

if (!formData.signature) {
  errors.signature = "Please upload your signature";
}

if (!formData.date) {
  errors.date = "Please select a date";
}


  setFormErrors(prev => ({ ...prev, ...errors }));
  return isValid;
};



const handleFinalSubmit = async () => {
  if (validateStep7()) {
    try {
      // await axios.post('/api/submit', formData);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Successfully Advocate Registered',
        confirmButtonColor: '#6B46C1'
      }).then(() => {
        // e.g., resetForm(); navigate('/success');
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Something went wrong. Please try again.'
      });
    }
  }
};

  

const handleAvailableForChange = (e) => {
  const { value, checked } = e.target;
  setFormData((prev) => {
    if (checked) {
      return { ...prev, availableFor: [...prev.availableFor, value] };
    } else {
      return {
        ...prev,
        availableFor: prev.availableFor.filter((item) => item !== value),
      };
    }
  });
};



const handleSubscriptionChange = (e) => {
  const { value, checked } = e.target;
  setFormData((prev) => {
    if (checked) {
      return { ...prev, subscriptions: [...prev.subscriptions, value] };
    } else {
      return {
        ...prev,
        subscriptions: prev.subscriptions.filter((sub) => sub !== value),
      };
    }
  });
};

const handlePaymentModeChange = (e) => {
  const { value, checked } = e.target;
  setFormData((prev) => {
    if (checked) {
      return { ...prev, paymentModes: [...prev.paymentModes, value] };
    } else {
      return {
        ...prev,
        paymentModes: prev.paymentModes.filter((mode) => mode !== value),
      };
    }
  });
};





const handleAvailableDaysChange = (e) => {
  const { value, checked } = e.target;
  setFormData((prev) => {
    if (checked) {
      return { ...prev, availableDays: [...prev.availableDays, value] };
    } else {
      return {
        ...prev,
        availableDays: prev.availableDays.filter((day) => day !== value),
      };
    }
  });
};


const handleCourtChange = (e) => {
  const { value, checked } = e.target;
  setFormData((prev) => {
    if (checked) {
      return { ...prev, courtOfPractice: [...prev.courtOfPractice, value] };
    } else {
      return {
        ...prev,
        courtOfPractice: prev.courtOfPractice.filter((court) => court !== value),
      };
    }
  });
};




  const specializations = {
    "Civil Law": ["Property Disputes", "Contract Law", "Tort Law"],
    "Criminal Law": ["White Collar Crime", "Cyber Crime", "Juvenile Justice"],
    "Corporate Law": ["Mergers & Acquisitions", "Banking & Finance", "Securities Law"],
    "Family Law": ["Divorce", "Child Custody", "Adoption"],
    "Intellectual Property Law": ["Copyright", "Trademark", "Patent"],
    "Tax Law": ["Direct Tax", "Indirect Tax", "GST"],
    "Labor & Employment Law": ["Industrial Disputes", "Employee Benefits", "Wages"],
    "Environmental Law": ["Pollution Control", "Wildlife Protection", "Climate Change Law"],
    "Human Rights Law": ["Women's Rights", "Children's Rights", "Disability Rights"],
    "Other": ["General Practice"]
  };

  const subDepartments = {
    "Property Disputes": ["Land", "Real Estate", "Tenancy"],
    "Contract Law": ["Commercial", "Employment", "Service"],
    "White Collar Crime": ["Fraud", "Embezzlement", "Insider Trading"],
    // add more if needed
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 8));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
      ...(name === "specialization" && { subSpecialization: "", subDepartment: "" })
    }));
  };

  const [formErrors, setFormErrors] = useState({});

  // handle input changes
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted!');
    // navigate("/success") or send data to API here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-12 px-4"
    >
      <div className="max-w-4xl mx-auto text-center mb-8">
        <div className="text-4xl mb-2">⚖️</div>
        <h2 className="text-3xl font-extrabold">Create your account</h2>
        <p className="mt-2 text-sm">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="text-blue-600 hover:underline cursor-pointer">Sign in</span>
        </p>
           <h2 className="text-2xl font-extrabold mt-3">Advocate Registration</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className=" mx-auto p-8 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black lg:w-[1400px]"
      >
        {/* Step Indicator */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-36 mb-6 ml-12 ">
          {[
            'Personal Details', 'Educational Details', 'Practice Information',
            'Location Details', 'Career Info',  'Availability', 'Declarations'
          ].map((label, index) => (
            <div
              key={index}
              className={`text-center text-xs md:text-sm font-semibold pb-1 border-b-2 ${
                step === index + 1 ? 'border-purple-500 text-purple-700 lg:w-[150px]' : 'border-gray-300 text-gray-500 lg:w-[150px]'
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <>
            <div className="grid md:grid-cols-2 gap-8 mt-8 w-[1300px] ml-4">


           <div>
  <label className="block mb-1">First Name *</label>
  <input
    name="firstName"
    value={formData.firstName}
    onChange={handleChange}
    placeholder="Enter your first name"
    className="w-full border rounded px-3 py-2 text-black"
    required
  />
  {formErrors.firstName && (
    <p className="text-red-500 text-sm">{formErrors.firstName}</p>
  )}
</div>


<div>
  <label className="block mb-1">Last Name *</label>
  <input
    name="lastName"
    value={formData.lastName}
    onChange={handleChange}
    placeholder="Enter your last name"
    className="w-full border rounded px-3 py-2 text-black"
    required
  />
  {formErrors.lastName && (
    <p className="text-red-500 text-sm">{formErrors.lastName}</p>
  )}
</div>






  <div>
  <label className="block mb-1">Gender *</label>
  <select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    className="w-full border rounded px-3 py-2 bg-white text-black"
    required
  >
    <option value="" disabled>Select your gender</option>
    <option>Male</option>
    <option>Female</option>
    <option>Other</option>
  </select>
    {formErrors.gender && <p className="text-red-500 text-sm">{formErrors.gender}</p>}
</div>


<div>
  <label className="block mb-1">Date of Birth *</label>
  <input
    type="date"
    name="dateOfBirth"
    value={formData.dateOfBirth}
    onChange={handleChange}
    placeholder="Select your birth date"
    className="w-full border rounded px-3 py-2 bg-white text-black"
    required
  />
   {formErrors.dateOfBirth && <p className="text-red-500 text-sm">{formErrors.dateOfBirth}</p>}
</div>




<div>
  <label className="block mb-1">Mobile Number *</label>
  <input
    type="tel"
    name="mobileNumber"
    value={formData.mobileNumber}
    onChange={handleChange}
    placeholder="Enter 10-digit mobile number"
    className="w-full border rounded px-3 py-2 text-black"
    required
  />
    {formErrors.mobileNumber && <p className="text-red-500 text-sm">{formErrors.mobileNumber}</p>}
</div>

<div>
  <label className="block mb-1">Email *</label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter your email address"
    className="w-full border rounded px-3 py-2 text-black"
    required
  />
   {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
</div>

<div>
  <label className="block mb-1">Document / Proof Type *</label>
  <select
    name="documentType"
    value={formData.documentType}
    onChange={handleChange}
    className="w-full border rounded px-3 py-2 text-black"
    required
  >
    <option value="">Select document type</option>
    <option value="aadhar">Aadhar Card</option>
    <option value="pan">PAN Card</option>
    <option value="passport">Passport</option>
    <option value="voter">Voter ID</option>
     <option value="voter">Driving Licence</option>
    {/* add more as needed */}
  </select>
  {formErrors.documentType && (
    <p className="text-red-500 text-sm">{formErrors.documentType}</p>
  )}
</div>

<div className="md:col-span-2">
  <label className="block mb-1">Profile Picture *</label>
  <input
    type="file"
    name="profilePicture"
    accept="image/*"
    onChange={handleChange}
    className="w-full border rounded px-3 py-2 text-black"
    required
  />
    {formErrors.profilePicture && <p className="text-red-500 text-sm">{formErrors.profilePicture}</p>}
</div>
</div>

              <div className="md:col-span-2 flex justify-end">
                <button
              type="button"
              onClick={() => {
                if (validateStep1()) {
                  nextStep();
                }
              }}
              className="px-4 py-2 bg-purple-500 text-white rounded-full"
            >
              Next
            </button>
                
              </div>
            </>
          )}

          {/* Step 2: Educational Details */}
          {step === 2 && (
            <>
             <div className="grid md:grid-cols-2 gap-8 mt-8 w-[1300px] ml-4">
              <div><label className="block mb-1">Law Degree *</label>
              <input name="lawDegree" value={formData.lawDegree} onChange={handleChange}    placeholder="e.g., LLB, LLM" className="w-full border rounded px-3 py-2 text-black" required />  
               {formErrors.lawDegree && <p className="text-red-500 text-sm">{formErrors.lawDegree}</p>}
              </div>

              <div><label className="block mb-1">University Name *</label>
              <input name="universityName" value={formData.universityName} onChange={handleChange}  placeholder="Enter university name" className="w-full border rounded px-3 py-2 text-black" required />
                {formErrors.universityName && <p className="text-red-500 text-sm">{formErrors.universityName}</p>}
              </div>


              <div><label className="block mb-1">Graduation Year *</label>
              <input type="number" name="graduationYear" value={formData.graduationYear} onChange={handleChange}   placeholder="e.g., 2020" className="w-full border rounded px-3 py-2 text-black" required />

                {formErrors.graduationYear && <p className="text-red-500 text-sm">{formErrors.graduationYear}</p>}
              </div>



              <div><label className="block mb-1">Bar Council Enrolment Number *</label>
              <input name="enrolmentNumber" value={formData.enrolmentNumber} onChange={handleChange}  placeholder="Enter enrolment number" className="w-full border rounded px-3 py-2 text-black" required />
               {formErrors.enrolmentNumber && <p className="text-red-500 text-sm">{formErrors.enrolmentNumber}</p>}
              </div>


              <div><label className="block mb-1">State Bar Council *</label>
              <input name="stateBarCouncil" value={formData.stateBarCouncil} onChange={handleChange}   placeholder="Enter state bar council name" className="w-full border rounded px-3 py-2 text-black" required />
               {formErrors.stateBarCouncil && <p className="text-red-500 text-sm">{formErrors.stateBarCouncil}</p>}
              </div>



              <div><label className="block mb-1">Enrollment Year *</label>
              <input type="number" name="enrollmentYear" value={formData.enrollmentYear} onChange={handleChange}  placeholder="e.g., 2021" className="w-full border rounded px-3 py-2 text-black" required />
               {formErrors.enrollmentYear && <p className="text-red-500 text-sm">{formErrors.enrollmentYear}</p>}
              </div>


              <div className="md:col-span-2"><label className="block mb-1">Enrollment Certificate *</label>
              <input type="file" name="enrollmentCertificate" onChange={handleChange}   className="w-full border rounded px-3 py-2 text-black" required />
                 {formErrors.enrollmentCertificate && <p className="text-red-500 text-sm">{formErrors.enrollmentCertificate}</p>}
              </div>
              </div>
              <div className="md:col-span-2 flex justify-between">
                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-full">Back</button>
             <button
  type="button"
  onClick={() => {
    if (validateStep2()) {
      nextStep();  // move to step 3
    }
  }}
  className="px-4 py-2 bg-purple-500 text-white rounded-full"
>
  Next
</button>

              </div>
            </>
          )}

          {/* Step 3–8: Fill in similarly */}
          {step === 3 && (
            <>
             <div className="grid md:grid-cols-2 gap-8 mt-8 w-[1300px] ml-4">
            
<div className="mt-4">
        <label className="block mb-1">Court of Practice *</label>
        <select
          name="courtOfPractice"
          value={formData.courtOfPractice}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 text-black"
          required
        >
          <option value="">Select court</option>
          <option value="Supreme Court">Supreme Court</option>
          <option value="High Court">High Court</option>
          <option value="District Court">District Court</option>
          <option value="Family Court">Family Court</option>
          <option value="Consumer Forum">Consumer Forum</option>
          <option value="Others">Others</option>
        </select>

        {formData.courtOfPractice === 'Others' && (
          <input
            type="text"
            name="otherCourt"
            value={formData.otherCourt}
            onChange={handleChange}
            placeholder="Please specify"
            className="mt-2 w-full border rounded px-3 py-2 text-black"
          />
        )}

        {formErrors.courtOfPractice && (
          <p className="text-red-500 text-sm">{formErrors.courtOfPractice}</p>
        )}
      </div>

      {/* Specialization */}
      <div className="mt-4">
        <label className="block mb-1">Specialization/Department *</label>
        <select
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 text-black"
          required
        >
          <option value="" disabled>Select specialization</option>
          {Object.keys(specializations).map(spec => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
        {formErrors.specialization && (
          <p className="text-red-500 text-sm">{formErrors.specialization}</p>
        )}
      </div>

      {/* Sub-Specialization */}
      {formData.specialization && (
        <div className="md:col-span-2 mt-4">
          <label className="block mb-1">Sub-Department *</label>
          <select
            name="subSpecialization"
            value={formData.subSpecialization}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
            required
          >
            <option value="" disabled>Select sub-specialization</option>
            {specializations[formData.specialization].map(sub => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
          {formErrors.subSpecialization && (
            <p className="text-red-500 text-sm">{formErrors.subSpecialization}</p>
          )}
        </div>
      )}

      {/* Category */}
      <div className="mt-4">
        <label className="block mb-1">Category *</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 text-black"
          required
        >
          <option value="">Select category</option>
          <option value="Civil">Civil</option>
          <option value="Criminal">Criminal</option>
          <option value="Corporate">Corporate</option>
          <option value="Tax">Tax</option>
          <option value="Intellectual Property">Intellectual Property</option>
          <option value="Others">Others</option>
        </select>

        {formData.category === 'Others' && (
          <input
            type="text"
            name="otherCategory"
            value={formData.otherCategory}
            onChange={handleChange}
            placeholder="Please specify"
            className="mt-2 w-full border rounded px-3 py-2 text-black"
          />
        )}

        {formErrors.category && (
          <p className="text-red-500 text-sm">{formErrors.category}</p>
        )}
      </div>

      {/* Years of Experience */}
      <div className="mt-4">
        <label className="block mb-1">Years of Experience *</label>
        <input
          type="number"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          placeholder="e.g., 5"
          className="w-full border rounded px-3 py-2 text-black"
          required
        />
        {formErrors.yearsOfExperience && (
          <p className="text-red-500 text-sm">{formErrors.yearsOfExperience}</p>
        )}
      </div>

      {/* Bar Association */}
      <div className="mt-4">
        <label className="block mb-1">Bar Association Name (If any):</label>
        <input
          type="text"
          name="barAssociation"
          value={formData.barAssociation}
          onChange={handleChange}
          placeholder="Enter your bar association name"
          className="w-full border rounded px-3 py-2 text-black"
        />
      </div>

      {/* Practice License */}
      <div className="mt-4">
        <label className="block mb-1">
          Practice License Upload* <span className="text-gray-500 text-sm">(.pdf / .jpg)</span>
        </label>
        <input
          type="file"
          name="practiceLicense"
          accept=".pdf, .jpg"
          onChange={handleFileChange}
          className="w-full border rounded px-3 py-2 text-black"
          required
        />
        {formErrors.practiceLicense && (
          <p className="text-red-500 text-sm">{formErrors.practiceLicense}</p>
        )}
      </div>
</div>


              <div className="md:col-span-2 flex justify-between">
                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-full">Back</button>
              <button
  type="button"
  onClick={() => {
    if (validateStep3()) {
      nextStep(); // go to step 4
    }
  }}
  className="px-4 py-2 bg-purple-500 text-white rounded-full"
>
  Next
</button>

              </div>
            </>
          )}

          {/* Step 4–7: Add your fields for location, career, subscription, availability */}
             {step === 4 && (
            <>
             <div className="grid md:grid-cols-2 gap-8 mt-8 w-[1300px] ml-4">


<div>
  <label className="block mb-1">Country*:</label>
  <input
    name="country"
    value={formData.country}
    onChange={handleChange}
    className="w-full border rounded px-3 py-2 text-black"
    placeholder="Enter your country"
    required
  />
  {formErrors.country && <p className="text-red-500 text-sm">{formErrors.country}</p>}
</div>



<div>
  <label className="block mb-1">State*: </label>
  <input
    name="state"
    value={formData.state}
    onChange={handleChange}
    placeholder="Enter your state"
    className="w-full border rounded px-3 py-2 text-black"
    required
  />
    {formErrors.state && <p className="text-red-500 text-sm">{formErrors.state}</p>}
</div>

             <div>
  <label className="block mb-1">City / Town*: </label>
  <input
    name="city"
    value={formData.city}
    onChange={handleChange}
    className="w-full border rounded px-3 py-2 text-black"
   placeholder="Enter your city or town"
    required
  />
     {formErrors.city && <p className="text-red-500 text-sm">{formErrors.city}</p>}
</div>





<div>
  <label className="block mb-1">Current Office Address*: </label>
  <input
    type="text"
    name="currentOfficeAddress"
    value={formData.currentOfficeAddress}
    onChange={handleChange}
    placeholder="Enter your current office address"
    className="w-full border rounded px-3 py-2 text-black"
    required
  />
    {formErrors.currentOfficeAddress && <p className="text-red-500 text-sm">{formErrors.currentOfficeAddress}</p>}
</div>


<div>
  <label className="block mb-1">Permanent Address*: </label>
  <textarea
    name="permanentAddress"
    value={formData.permanentAddress}
    onChange={handleChange}
    placeholder="Enter your permanent address"
    className="w-full border rounded px-3 py-4 text-black"
    required
  ></textarea>
   {formErrors.permanentAddress && <p className="text-red-500 text-sm">{formErrors.permanentAddress}</p>}
</div>




<div>
  <label className="block mb-1">Pin Code*: </label>
  <input
    type="text"
    name="pinCode"
    value={formData.pinCode}
    onChange={handleChange}
    placeholder="Enter your pin code"
    className="w-full border rounded px-3 py-2 text-black"
    required
  />
   {formErrors.pinCode && <p className="text-red-500 text-sm">{formErrors.pinCode}</p>}
</div>



</div>


             
             
              <div className="md:col-span-2 flex justify-between">
                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-full">Back</button>
               <button
  type="button"
  onClick={() => {
    if (validateStep4()) {
      nextStep(); // move to step 5
    }
  }}
  className="px-4 py-2 bg-purple-500 text-white rounded-full"
>
  Next
</button>

              </div>
            </>
          )}

            {step === 5 && (
            <>
 <div className="grid md:grid-cols-2 gap-8 mt-8 w-[1300px] ml-4">

<div>
        <label className="block mb-1">Current Firm / Organization (If any): </label>
        <input
          type="text"
          name="currentFirm"
          value={formData.currentFirm}
          onChange={handleChange}
          placeholder="Enter your current firm or organization"
          className="w-full border rounded px-3 py-2 text-black"
        />
        {formErrors.currentFirm && <p className="text-red-500 text-sm">{formErrors.currentFirm}</p>}
      </div>

      <div>
        <label className="block mb-1">Position / Designation: </label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          placeholder="Enter your position or designation"
          className="w-full border rounded px-3 py-2 text-black"
        />
        {formErrors.designation && <p className="text-red-500 text-sm">{formErrors.designation}</p>}
      </div>

      <div>
        <label className="block mb-1">Work Type*:</label>
        <select
          name="workType"
          value={formData.workType}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 text-black"
          required
        >
          <option value="">Select work type</option>
          <option value="Independent Advocate">Independent Advocate</option>
          <option value="Law Firm Partner/Associate">Law Firm Partner/Associate</option>
          <option value="Legal Advisor">Legal Advisor</option>
          <option value="Government Lawyer">Government Lawyer</option>
          <option value="In-house Counsel">In-house Counsel</option>
          <option value="Other">Other</option>
        </select>
        {formData.workType === "Other" && (
          <input
            type="text"
            name="otherWorkType"
            value={formData.otherWorkType || ''}
            onChange={handleChange}
            placeholder="Specify other work type"
            className="mt-2 border rounded px-3 py-2 w-full text-black"
            required
          />
        )}
        {formErrors.workType && <p className="text-red-500 text-sm">{formErrors.workType}</p>}
        {formErrors.otherWorkType && <p className="text-red-500 text-sm">{formErrors.otherWorkType}</p>}
      </div>

      <div>
        <label className="block mb-1">Languages Known*:</label>
        <select
          name="languageKnown"
          value={formData.languageKnown}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 text-black"
          required
        >
          <option value="">Select language</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Telugu">Telugu</option>
          <option value="Other">Other</option>
        </select>
        {formData.languageKnown === "Other" && (
          <input
            type="text"
            name="otherLanguage"
            value={formData.otherLanguage}
            onChange={handleChange}
            placeholder="Specify other language"
            className="mt-2 border rounded px-3 py-2 w-full text-black"
            required
          />
        )}
        {formErrors.languageKnown && <p className="text-red-500 text-sm">{formErrors.languageKnown}</p>}
        {formErrors.otherLanguage && <p className="text-red-500 text-sm">{formErrors.otherLanguage}</p>}
      </div>



</div>
            
              
              <div className="md:col-span-2 flex justify-between">
                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-full">Back</button>
              <button
  type="button"
  onClick={() => {
    if (validateStep5()) {
      nextStep(); // go to step 6
    }
  }}
  className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
>
  Next
</button>

              </div>
            </>
          )}

           


            {step === 6 && (
            <>
 <div className="grid md:grid-cols-2 gap-8 mt-8 w-[1300px] ml-4">

<div className="mt-4">
  <label className="block mb-1">Available For*: </label>
  <div className="space-y-1">
    <label className="flex items-center">
      <input
        type="checkbox"
        name="availableFor"
        value="Phone Consultation"
        checked={formData.availableFor.includes("Phone Consultation")}
        onChange={handleAvailableForChange}
        className="mr-2"
        required={formData.availableFor.length === 0} // to ensure at least one is selected
      />
      Phone Consultation
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="availableFor"
        value="Video Consultation"
        checked={formData.availableFor.includes("Video Consultation")}
        onChange={handleAvailableForChange}
        className="mr-2"
      />
      Video Consultation
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="availableFor"
        value="In-person Consultation"
        checked={formData.availableFor.includes("In-person Consultation")}
        onChange={handleAvailableForChange}
        className="mr-2"
      />
      In-person Consultation
    </label>
  </div>
    {formErrors.availableFor && (
      <p className="text-red-500 text-sm mt-1">{formErrors.availableFor}</p>
    )}
</div>



<div className="mt-4">
  <label className="block mb-1">Working Hours: </label>
  <div className="flex space-x-3">
    <input
      type="time"
      name="workingHoursStart"
      value={formData.workingHoursStart}
      onChange={handleChange}
      className="w-1/2 border rounded px-3 py-2 text-black"
      placeholder="Start time"
    />
    <input
      type="time"
      name="workingHoursEnd"
      value={formData.workingHoursEnd}
      onChange={handleChange}
      className="w-1/2 border rounded px-3 py-2 text-black"
      placeholder="End time"
    />
  </div>
    {formErrors.workingHours && (
      <p className="text-red-500 text-sm mt-1">{formErrors.workingHours}</p>
    )}
</div>


<div className="mt-4">
  <label className="block mb-1">Available Days*: </label>
  <div className="flex flex-wrap gap-3">
    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
      <label key={day} className="flex items-center">
        <input
          type="checkbox"
          name="availableDays"
          value={day}
          checked={formData.availableDays.includes(day)}
          onChange={handleAvailableDaysChange}
          className="mr-1"
          required={formData.availableDays.length === 0} // ensure at least one selected
        />
        {day}
      </label>
    ))}
  </div>
   {formErrors.availableDays && (
      <p className="text-red-500 text-sm mt-1">{formErrors.availableDays}</p>
    )}
</div>

</div>
              <div className="md:col-span-2 flex justify-between">
                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-full">Back</button>
              <button
    type="button"
    onClick={() => {
      if (validateStep6()) {
        nextStep();
      }
    }}
    className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
  >
    Next
  </button>
              </div>
            </>
          )}
           
         
          {/* Step 8: Password & Declarations */}
          {step === 7 && (
            <>
             <div className="grid md:grid-cols-2 gap-8 mt-8 w-[1300px] ml-4">

              
<div className="mt-6">
  <label className="block mb-2 font-semibold">Declarations</label>

  <div className="space-y-2">
    <label className="flex items-start">
      <input
        type="checkbox"
        name="declarations"
        value="infoTrue"
        checked={formData.declarations.includes("infoTrue")}
        onChange={handleDeclarationChange}
        className="mt-1 mr-2"
        required={formData.declarations.length === 0} // at least one required
      />
      <span>I hereby declare that all the above information is true and correct to the best of my knowledge.</span>
    </label>

    <label className="flex items-start">
      <input
        type="checkbox"
        name="declarations"
        value="agreeTerms"
        checked={formData.declarations.includes("agreeTerms")}
        onChange={handleDeclarationChange}
        className="mt-1 mr-2"
      />
      <span>I agree to abide by the terms and conditions of E-Advocate Services and BCI norms.</span>
    </label>

    <label className="flex items-start">
      <input
        type="checkbox"
        name="declarations"
        value="consentShare"
        checked={formData.declarations.includes("consentShare")}
        onChange={handleDeclarationChange}
        className="mt-1 mr-2"
      />
      <span>I consent to share my profile with clients registered on this platform.</span>
    </label>
  </div>

  {formErrors.declarations && (
    <p className="text-red-500 text-sm mt-1">{formErrors.declarations}</p>
  )}

  <div className="mt-4">
    <label className="block mb-1">Signature*:</label>
    <input
      type="file"
      name="signature"
      accept="image/*"
      onChange={handleFileChange}
      className="w-full border rounded px-3 py-2 text-black"
      required
    />
    {formErrors.signature && (
      <p className="text-red-500 text-sm">{formErrors.signature}</p>
    )}
  </div>

  <div className="mt-4">
    <label className="block mb-1">Date*: </label>
    <input
      type="date"
      name="date"
      value={formData.date}
      onChange={handleChange}
      className="w-full border rounded px-3 py-2 text-black"
      required
    />
    {formErrors.date && (
      <p className="text-red-500 text-sm mt-1">{formErrors.date}</p>
    )}
  </div>
</div>



           </div>


              <div className="md:col-span-2 flex gap-2">
                <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
                <p className="text-sm">I accept the <span className="text-blue-600 hover:underline">Terms & Conditions</span> and <span className="text-blue-600 hover:underline">Privacy Policy</span></p>
              </div>
              <div className="md:col-span-2 flex justify-between">
                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-full">Back</button>
             <button
  type="button"
  onClick={() => {
    if (validateStep7()) {
      // Call submit logic here (e.g., API request)
      // After successful submission, show success popup:
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Successfully Advocate Registered',
        confirmButtonColor: '#6B46C1', // purple
        confirmButtonText: 'OK'
      }).then(() => {
        // Optional: redirect, reset form, etc.
        console.log("Form submitted!");
      });
    }
  }}
  className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
>
  Submit
</button>

              </div>
            </>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default RegisterAdvocate;
