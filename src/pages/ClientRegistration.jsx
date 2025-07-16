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
       subDepartment: '',
         legalIssue: '',
          otherCategory: '',
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

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
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
    if (!/^\d{12}$/.test(formData.aadharNumber)) {
      errors.aadharNumber = "Aadhar number must be 12 digits";
    }
    if (!formData.profilePicture) {
      errors.profilePicture = "Profile picture is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };




const validateStep2 = () => {
  const errors = {};

  if (!formData.city.trim()) {
    errors.city = "City / Town is required";
  }
  if (!formData.state.trim()) {
    errors.state = "State is required";
  }
  if (!formData.pinCode.trim()) {
    errors.pinCode = "Pin code is required";
  } else if (!/^\d{5,6}$/.test(formData.pinCode.trim())) {
    errors.pinCode = "Enter a valid 5 or 6 digit pin code";
  }
  if (!formData.currentOfficeAddress.trim()) {
    errors.currentOfficeAddress = "Current office address is required";
  }
  if (!formData.permanentAddress.trim()) {
    errors.permanentAddress = "Permanent address is required";
  }

  setFormErrors(errors);
  return Object.keys(errors).length === 0;
};

const validateStep3 = () => {
  let errors = {};

  if (formData.categories.length === 0) {
    errors.categories = "Please select at least one category.";
  } else if (formData.categories.includes("Other") && !formData.otherCategory.trim()) {
    errors.categories = "Please specify the 'Other' category.";
  }

  if (!formData.advocateType) {
    errors.advocateType = "Please select advocate type.";
  }

  if (!formData.legalIssue.trim()) {
    errors.legalIssue = "Please describe your legal issue.";
  }

  if (formData.consultationModes.length === 0) {
    errors.consultationModes = "Please select at least one consultation mode.";
  }

  if (formData.languagesKnown.length === 0) {
    errors.languagesKnown = "Please select at least one language.";
  } else if (formData.languagesKnown.includes("Other") && !formData.otherLanguage.trim()) {
    errors.languagesKnown = "Please specify the 'Other' language.";
  }

  setFormErrors(errors);
  return Object.keys(errors).length === 0;
};



const validateStep4 = () => {
  let errors = {};
  let isValid = true;

  if (formData.subscriptions.length === 0) {
    errors.subscriptions = "Please select at least one subscription option.";
    isValid = false;
  }

  if (formData.paymentModes.length === 0) {
    errors.paymentModes = "Please select at least one payment mode.";
    isValid = false;
  }

  if (
    formData.paymentModes.includes("Other") &&
    !formData.otherPaymentMode.trim()
  ) {
    errors.otherPaymentMode = "Please specify other payment mode.";
    isValid = false;
  }

  setFormErrors(prev => ({ ...prev, ...errors }));
  return isValid;
};




const validateStep5 = () => {
  let errors = {};
  let isValid = true;

  if (formData.declarations.length === 0) {
    errors.declarations = "Please check at least one declaration.";
    isValid = false;
  }
  if (!formData.signature.trim()) {
    errors.signature = "Signature is required.";
    isValid = false;
  }
  if (!formData.date) {
    errors.date = "Date is required.";
    isValid = false;
  }

  setFormErrors(prev => ({ ...prev, ...errors }));
  return isValid;
};

const handleFinalSubmit = async () => {
  if (validateStep5()) {
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
        <div className="grid grid-cols-4 md:grid-cols-8 gap-56 mb-6">
          {[
            'Personal Details', 
            'Address & Location ', '  Legal Help Required ', '  Subscription & Packages ', '  Declarations '
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
  <label className="block mb-1">Full Name *</label>
  <input
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    placeholder="Enter your full name"
    className="w-full border rounded px-3 py-2 text-black"
    required
  />
    {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}
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
  <label className="block mb-1">Aadhar Number *</label>
  <input
    name="aadharNumber"
    value={formData.aadharNumber}
    onChange={handleChange}
    placeholder="Enter 12-digit Aadhar number"
    maxLength={12}
    className="w-full border rounded px-3 py-2 text-black"
    required
  />
    {formErrors.aadharNumber && <p className="text-red-500 text-sm">{formErrors.aadharNumber}</p>}
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
  <label className="block mb-1">Pin Code*: </label>
  <input
    type="text"
    name="pinCode"
    value={formData.pinCode}
    onChange={handleChange}
    placeholder="Enter your pin code"
    className="w-full border rounded px-3 py-2 text-black lg:w-[600px]"
    required
  />
   {formErrors.pinCode && <p className="text-red-500 text-sm">{formErrors.pinCode}</p>}
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






<div>
  <label className="block mb-1">Looking For (Category)*:</label>
  <div className="space-y-1">
    <label className="flex items-center">
      <input
        type="checkbox"
        name="categories"
        value="Civil"
        checked={formData.categories.includes("Civil")}
        onChange={handleCategoryChange}
        className="mr-2"
        required={formData.categories.length === 0} // ensures at least one
      />
      Civil
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="categories"
        value="Criminal"
        checked={formData.categories.includes("Criminal")}
        onChange={handleCategoryChange}
        className="mr-2"
      />
      Criminal
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="categories"
        value="Family"
        checked={formData.categories.includes("Family")}
        onChange={handleCategoryChange}
        className="mr-2"
      />
      Family
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="categories"
        value="Property"
        checked={formData.categories.includes("Property")}
        onChange={handleCategoryChange}
        className="mr-2"
      />
      Property
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="categories"
        value="Divorce"
        checked={formData.categories.includes("Divorce")}
        onChange={handleCategoryChange}
        className="mr-2"
      />
      Divorce
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="categories"
        value="Employment"
        checked={formData.categories.includes("Employment")}
        onChange={handleCategoryChange}
        className="mr-2"
      />
      Employment
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="categories"
        value="Cyber Crime"
        checked={formData.categories.includes("Cyber Crime")}
        onChange={handleCategoryChange}
        className="mr-2"
      />
      Cyber Crime
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="categories"
        value="Other"
        checked={formData.categories.includes("Other")}
        onChange={handleCategoryChange}
        className="mr-2"
      />
      Other:
      <input
        type="text"
        name="otherCategory"
        value={formData.otherCategory || ''}
        onChange={handleChange}
        placeholder="Specify"
        className="ml-2 border rounded px-2 py-1 text-red-700 flex-1 lg:flex-none lg:w-[450px]"
      />
    </label>
  </div>
  {formErrors.categories && (
    <p className="text-red-500 text-sm">{formErrors.categories}</p>
  )}
</div>


<div>
  <label htmlFor="subDepartment" className="block mb-1">
    Sub Department (Optional):
  </label>
  <input
    id="subDepartment"
    type="text"
    name="subDepartment"
    value={formData.subDepartment}
    onChange={handleChange}
    placeholder="Enter sub department"
    className="w-full border rounded px-3 py-2 text-black lg:w-[450px]"
  />
</div>






<div>
  <label className="block mb-1">Preferred Advocate Type*:</label>
  <div className="space-y-1">
    <label className="flex items-center">
      <input
        type="radio"
        name="advocateType"
        value="Junior Advocate"
        checked={formData.advocateType === "Junior Advocate"}
        onChange={handleChange}
        className="mr-2"
        required
      />
      Junior Advocate
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="advocateType"
        value="Experienced Advocate"
        checked={formData.advocateType === "Experienced Advocate"}
        onChange={handleChange}
        className="mr-2"
      />
      Experienced Advocate
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="advocateType"
        value="Any"
        checked={formData.advocateType === "Any"}
        onChange={handleChange}
        className="mr-2"
      />
      Any
    </label>
  </div>
  {formErrors.advocateType && (
    <p className="text-red-500 text-sm">{formErrors.advocateType}</p>
  )}
</div>



<div>
  <label htmlFor="legalIssue" className="block mb-1">
    Brief About Your Legal Issue*:
  </label>
  <textarea
    id="legalIssue"
    name="legalIssue"
    value={formData.legalIssue}
    onChange={handleChange}
    placeholder="Describe your issue briefly"
    className="w-full border rounded px-3 py-2 text-black lg:w-[450px]"
    required
    rows={4} // adjust rows to control height
  ></textarea>
  {formErrors.legalIssue && (
    <p className="text-red-500 text-sm">{formErrors.legalIssue}</p>
  )}
</div>



<div>
  <label className="block mb-1">Preferred Consultation Mode*:</label>
  <div className="space-y-1">
    <label className="flex items-center">
      <input
        type="checkbox"
        name="consultationModes"
        value="Phone"
        checked={formData.consultationModes.includes("Phone")}
        onChange={handleConsultationModeChange}
        className="mr-2"
        required={formData.consultationModes.length === 0}
      />
      Phone
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="consultationModes"
        value="Video"
        checked={formData.consultationModes.includes("Video")}
        onChange={handleConsultationModeChange}
        className="mr-2"
      />
      Video
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="consultationModes"
        value="In-person"
        checked={formData.consultationModes.includes("In-person")}
        onChange={handleConsultationModeChange}
        className="mr-2"
      />
      In-person
    </label>
  </div>
  {formErrors.consultationModes && (
    <p className="text-red-500 text-sm">{formErrors.consultationModes}</p>
  )}
</div>




<div>
  <label htmlFor="consultationTime" className="block mb-1">
    Preferred Consultation Time:
  </label>
  <input
    id="consultationTime"
    type="text"
    name="consultationTime"
    value={formData.consultationTime}
    onChange={handleChange}
    placeholder="e.g., 10:00 AM - 11:00 AM"
    className="w-full border rounded px-3 py-2 text-black lg:w-[450px]"
  />
  {formErrors.consultationTime && (
    <p className="text-red-500 text-sm">{formErrors.consultationTime}</p>
  )}
</div>





<div>
  <label className="block mb-1">Preferred Language: </label>
  <div className="space-y-1">
    <label className="flex items-center">
      <input
        type="checkbox"
        name="languagesKnown"
        value="English"
        checked={formData.languagesKnown.includes("English")}
        onChange={handleLanguagesChange}
        className="mr-2"
        required={formData.languagesKnown.length === 0}
      />
      English
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="languagesKnown"
        value="Hindi"
        checked={formData.languagesKnown.includes("Hindi")}
        onChange={handleLanguagesChange}
        className="mr-2"
      />
      Hindi
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="languagesKnown"
        value="Telugu"
        checked={formData.languagesKnown.includes("Telugu")}
        onChange={handleLanguagesChange}
        className="mr-2"
      />
      Telugu
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="languagesKnown"
        value="Other"
        checked={formData.languagesKnown.includes("Other")}
        onChange={handleLanguagesChange}
        className="mr-2"
      />
      Other: 
      <input
        type="text"
        name="otherLanguage"
        value={formData.otherLanguage}
        onChange={handleChange}
        placeholder="Specify"
        className="ml-2 border rounded px-2 py-1 text-black flex-1 lg:flex-none lg:w-[350px]"
      />
    </label>
  </div>
    {formErrors.languagesKnown && <p className="text-red-500 text-sm">{formErrors.languagesKnown}</p>}
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



          

            {step === 4 && (
            <>
             <div className="grid md:grid-cols-2 gap-8 mt-8 w-[1300px] ml-4">
              <div className="mt-4">
  <label className="block mb-1 font-semibold">Subscription & Packages</label>
  <div className="space-y-1">
    <label className="flex items-center">
      <input
        type="checkbox"
        name="subscriptions"
        value="Free Basic Listing"
        checked={formData.subscriptions.includes("Free Basic Listing")}
        onChange={handleSubscriptionChange}
        className="mr-2"
      />
      Free Basic Listing
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="subscriptions"
        value="Premium Plan – ₹499/month"
        checked={formData.subscriptions.includes("Premium Plan – ₹499/month")}
        onChange={handleSubscriptionChange}
        className="mr-2"
      />
      Premium Plan – ₹499/month
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="subscriptions"
        value="Verified Badge – ₹999/year"
        checked={formData.subscriptions.includes("Verified Badge – ₹999/year")}
        onChange={handleSubscriptionChange}
        className="mr-2"
      />
      Verified Badge – ₹999/year
    </label>
  </div>

   {formErrors.subscriptions && (
      <p className="text-red-500 text-sm mt-1">{formErrors.subscriptions}</p>
    )}

  <label className="block mt-3 mb-1">Mode of Payment:</label>
  <div className="space-y-1">
    <label className="flex items-center">
      <input
        type="checkbox"
        name="paymentModes"
        value="UPI"
        checked={formData.paymentModes.includes("UPI")}
        onChange={handlePaymentModeChange}
        className="mr-2"
      />
      UPI
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="paymentModes"
        value="Card"
        checked={formData.paymentModes.includes("Card")}
        onChange={handlePaymentModeChange}
        className="mr-2"
      />
      Card
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="paymentModes"
        value="Net Banking"
        checked={formData.paymentModes.includes("Net Banking")}
        onChange={handlePaymentModeChange}
        className="mr-2"
      />
      Net Banking
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        name="paymentModes"
        value="Other"
        checked={formData.paymentModes.includes("Other")}
        onChange={handlePaymentModeChange}
        className="mr-2"
      />
      Other: 
      <input
        type="text"
        name="otherPaymentMode"
        value={formData.otherPaymentMode}
        onChange={handleChange}
        placeholder="Specify"
        disabled={!formData.paymentModes.includes("Other")}
        className="ml-2 border rounded px-2 py-1 flex-1 disabled:bg-gray-100"
      />
    </label>
  </div>
   {formErrors.paymentModes && (
      <p className="text-red-500 text-sm mt-1">{formErrors.paymentModes}</p>
    )}
    {formErrors.otherPaymentMode && (
      <p className="text-red-500 text-sm mt-1">{formErrors.otherPaymentMode}</p>
    )}
</div>
</div>
             
              <div className="md:col-span-2 flex justify-between">
                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-full">Back</button>
              <button
    type="button"
    onClick={() => {
      if (validateStep4()) {
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
          {step === 5 && (
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
      <span>I understand that all advocate-client communication is confidential and abides by legal ethics. </span>
    </label>
  </div>

   {formErrors.declarations && (
      <p className="text-red-500 text-sm mt-1">{formErrors.declarations}</p>
    )}

  <div className="mt-4">
    <label className="block mb-1">Signature*: </label>
    <input
      type="text"
      name="signature"
      value={formData.signature}
      onChange={handleChange}
      placeholder="Enter your signature"
      className="w-full border rounded px-3 py-2 text-black"
      required
    />
  </div>

   {formErrors.signature && (
        <p className="text-red-500 text-sm mt-1">{formErrors.signature}</p>
      )}

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
    if (validateStep5()) {
      // Call submit logic here (e.g., API request)
      // After successful submission, show success popup:
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Successfully Client Registered',
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
