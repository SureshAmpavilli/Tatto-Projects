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
  
     languagesKnown: [],
  otherLanguage: '',
  subscriptions: [],
  paymentModes: [],
  otherPaymentMode: '',
   courtOfPractice: [],
  otherCourt: '',
  barAssociation: '',
   practiceLicense: null,
    availableFor: [],
     availableDays: [],
      declarations: [],
  signature: '',
  date: '',
   categories: [],
  otherCategory: '',
    advocateType: '',
      consultationModes: [],
      
         legalIssue: '',
         
           documentType: '',
     firstName: '',
  lastName: '',
  
 
 country: '',
  state: '',
  city: '',
  currentOfficeAddress: '',
  permanentAddress: '',
  pinCode: '',
   category: '',
    consultationMode: '',
    workingHoursStart: '',
    workingHoursEnd: '',
    languageKnown: '',
     
     
   
  
    
    
  });


  
const handleFileChange = (e) => {
  const file = e.target.files[0];
  setFormData((prev) => ({
    ...prev,
    practiceLicense: file,
  }));
};

const handleConsultationModeChange = (e) => {
  const { value, checked } = e.target;
  setFormData((prev) => {
    const updated = checked
      ? [...prev.consultationModes, value]
      : prev.consultationModes.filter((v) => v !== value);
    return { ...prev, consultationModes: updated };
  });
};



const handleCategoryChange = (e) => {
  const { value, checked } = e.target;

  setFormData((prevFormData) => {
    let updatedCategories;
    if (checked) {
      // Add category to array
      updatedCategories = [...prevFormData.categories, value];
    } else {
      // Remove category from array
      updatedCategories = prevFormData.categories.filter((category) => category !== value);
    }

    return {
      ...prevFormData,
      categories: updatedCategories,
    };
  });
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

const validateStep3 = () => {
  let errors = {};

  if (!formData.category) {
      errors.category = 'Category is required';
    }
    if (formData.category === 'Others' && !formData.otherCategory.trim()) {
      errors.otherCategory = 'Please specify other category';
    }
  
    if (!formData.consultationMode) {
      errors.consultationMode = 'Preferred consultation mode is required';
    }
    if (!formData.advocateType) {
      errors.advocateType = 'Preferred advocate type is required';
    }
    if (!formData.languageKnown) {
      errors.languageKnown = 'Language is required';
    }
    if (formData.languageKnown === 'Other' && !formData.otherLanguage.trim()) {
      errors.otherLanguage = 'Please specify other language';
    }
    if (!formData.legalIssue.trim()) {
      errors.legalIssue = 'Please describe your legal issue';
    }
     if (!formData.specialization) {
      errors.specialization = 'Specialization is required';
    }
    if (!formData.subSpecialization) {
      errors.subSpecialization = 'Sub-department is required';
    }
    // Optional: validate working hours
    if (formData.workingHoursStart && formData.workingHoursEnd) {
      if (formData.workingHoursEnd <= formData.workingHoursStart) {
        errors.workingHours = 'End time must be after start time';
      }
    }


  setFormErrors(errors);
  return Object.keys(errors).length === 0;
};






const validateStep4 = () => {
  let errors = {};
  let isValid = true;

  if (!formData.declarations || formData.declarations.length === 0) {
      errors.declarations = 'Please accept at least one declaration.';
    }
    if (!formData.signature) {
      errors.signature = 'Please upload your signature.';
    }
    if (!formData.date) {
      errors.date = 'Please select a date.';
    }
    if (!formData.termsAccepted) {
      errors.termsAccepted = 'You must accept the Terms & Conditions.';
    }


  setFormErrors(prev => ({ ...prev, ...errors }));
  return isValid;
};

const handleFinalSubmit = async () => {
  if (validateStep4()) {
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


const handleDeclarationChange = (e) => {
  const { value, checked } = e.target;
  setFormData((prev) => {
    if (checked) {
      return { ...prev, declarations: [...prev.declarations, value] };
    } else {
      return {
        ...prev,
        declarations: prev.declarations.filter((item) => item !== value),
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
          <h2 className="text-2xl font-extrabold mt-3">Client Registration</h2>
      </div>

      

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className=" mx-auto p-8 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black lg:w-[1200px]"
      >
        {/* Step Indicator */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-72 mb-6 ml-9">
          {[
            'Personal Details', 
            'Address & Location ', '  Legal Help Required ',  '  Declarations '
          ].map((label, index) => (
            <div
              key={index}
              className={`text-center text-xs md:text-sm font-semibold pb-1 border-b-2 ${
                step === index + 1 ? 'border-purple-500 text-purple-700  lg:w-[200px]' : 'border-gray-300 text-gray-500 lg:w-[200px]'
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
            <div className="grid md:grid-cols-2 gap-8 mt-8 w-[1100px] ml-4">
             


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

         

         



          {/* Step 4–7: Add your fields for location, career, subscription, availability */}
             {step === 2 && (
            <>
             <div className="grid md:grid-cols-2 gap-8 mt-8 w-[1300px] ml-4">


<div>
  <label className="block mb-1">Country*:</label>
  <input
    name="country"
    value={formData.country}
    onChange={handleChange}
    className="w-full border rounded px-3 py-2 text-black lg:w-[600px]"
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
    className="w-full border rounded px-3 py-2 text-black lg:w-[450px]"
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
    className="w-full border rounded px-3 py-2 text-black lg:w-[600px]"
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
    className="w-full border rounded px-3 py-2 text-black lg:w-[450px]"
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
    className="w-full border rounded px-3 py-4 text-black lg:w-[600px]"
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
    className="w-full border rounded px-3 py-2 text-black lg:w-[450px]"
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
    if (validateStep2()) {
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

            {step === 3 && (
            <>
 <div className="grid md:grid-cols-2 gap-8 mt-8 w-[1300px] ml-4">

  <div className="mt-4">
        <label className="block mb-1 font-semibold">Category *</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2 text-black focus:outline-none focus:ring focus:border-blue-300"
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
            className="mt-2 w-full border rounded px-3 py-2 text-black focus:outline-none focus:ring focus:border-blue-300"
          />
        )}
        {formErrors.category && (
          <p className="text-red-500 text-sm mt-1">{formErrors.category}</p>
        )}
        {formErrors.otherCategory && (
          <p className="text-red-500 text-sm mt-1">{formErrors.otherCategory}</p>
        )}
      </div>

      {/* Sub-Department */}
     {/* Specialization */}
 <div className="mt-4">
        <label className="block mb-1 font-semibold">Specialization *</label>
        <select
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2 text-black focus:outline-none focus:ring focus:border-blue-300 lg:w-[450px]"
        >
          <option value="" disabled>Select specialization</option>
          {Object.keys(specializations).map((spec) => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
        {formErrors.specialization && (
          <p className="text-red-500 text-sm mt-1">{formErrors.specialization}</p>
        )}
      </div>

      {/* Sub-Department */}
      <div className="mt-4">
        <label className="block mb-1 font-semibold">Sub-Department *</label>
        <select
          name="subSpecialization"
          value={formData.subSpecialization}
          onChange={handleChange}
          required
          disabled={!formData.specialization}
          className="w-full border rounded px-3 py-2 text-black focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="" disabled>Select sub-department</option>
          {specializations[formData.specialization]?.map((sub) => (
            <option key={sub} value={sub}>{sub}</option>
          ))}
        </select>
        {formErrors.subSpecialization && (
          <p className="text-red-500 text-sm mt-1">{formErrors.subSpecialization}</p>
        )}
      </div>

      {/* Preferred Consultation Mode */}
      <div className="mt-4">
        <label className="block mb-1 font-semibold">Preferred Consultation Mode *</label>
        <select
          name="consultationMode"
          value={formData.consultationMode}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2 text-black focus:outline-none focus:ring focus:border-blue-300 lg:w-[450px]"
        >
          <option value="">Select mode</option>
          <option value="Phone">Phone</option>
          <option value="Video">Video</option>
          <option value="In-person">In-person</option>
        </select>
        {formErrors.consultationMode && (
          <p className="text-red-500 text-sm mt-1">{formErrors.consultationMode}</p>
        )}
      </div>

      {/* Preferred Advocate Type */}
      <div className="mt-4">
        <label className="block mb-1 font-semibold">Preferred Advocate Type *</label>
        <select
          name="advocateType"
          value={formData.advocateType}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2 text-black focus:outline-none focus:ring focus:border-blue-300 lg:w-[630px]"
        >
          <option value="">Select advocate type</option>
          <option value="Junior Advocate">Junior Advocate</option>
          <option value="Experienced Advocate">Experienced Advocate</option>
          <option value="Any">Any</option>
        </select>
        {formErrors.advocateType && (
          <p className="text-red-500 text-sm mt-1">{formErrors.advocateType}</p>
        )}
      </div>

      {/* Preferred Consultation Time */}
      <div className="mt-4">
        <label className="block mb-1 font-semibold">Preferred Consultation Time</label>
        <div className="flex space-x-3">
          <input
            type="time"
            name="workingHoursStart"
            value={formData.workingHoursStart}
            onChange={handleChange}
            className="w-1/2 border rounded px-3 py-2 text-black focus:outline-none focus:ring focus:border-blue-300 lg:w-[225px]"
          />
          <input
            type="time"
            name="workingHoursEnd"
            value={formData.workingHoursEnd}
            onChange={handleChange}
            className="w-1/2 border rounded px-3 py-2 text-black focus:outline-none focus:ring focus:border-blue-300 lg:w-[225px]"
          />
        </div>
        {formErrors.workingHours && (
          <p className="text-red-500 text-sm mt-1">{formErrors.workingHours}</p>
        )}
      </div>

      {/* Languages Known */}
      <div className="mt-4">
        <label className="block mb-1 font-semibold">Languages Known *</label>
        <select
          name="languageKnown"
          value={formData.languageKnown}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2 text-black focus:outline-none focus:ring focus:border-blue-300 lg:w-[630px]"
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
            required
            className="mt-2 w-full border rounded px-3 py-2 text-black focus:outline-none focus:ring focus:border-blue-300 lg:w-[450px]"
          />
        )}
        {formErrors.languageKnown && (
          <p className="text-red-500 text-sm mt-1">{formErrors.languageKnown}</p>
        )}
        {formErrors.otherLanguage && (
          <p className="text-red-500 text-sm mt-1">{formErrors.otherLanguage}</p>
        )}
      </div>

      {/* Brief About Legal Issue */}
      <div className="mt-4">
        <label htmlFor="legalIssue" className="block mb-1 font-semibold">
          Brief About Your Legal Issue *
        </label>
        <textarea
          id="legalIssue"
          name="legalIssue"
          value={formData.legalIssue}
          onChange={handleChange}
          placeholder="Describe your issue briefly"
          rows={4}
          required
          className="w-full border rounded px-3 py-2 text-black focus:outline-none focus:ring focus:border-blue-300 lg:w-[450px]"
        ></textarea>
        {formErrors.legalIssue && (
          <p className="text-red-500 text-sm mt-1">{formErrors.legalIssue}</p>
        )}
      </div>

</div>









            
              
              <div className="md:col-span-2 flex justify-between">
                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-full">Back</button>
            <button
  type="button"
  onClick={() => {
    if (validateStep3()) {
      nextStep(); // go to next step
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
          {step === 4 && (
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
          onClick={handleFinalSubmit}
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
