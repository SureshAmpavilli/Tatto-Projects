import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { FaUserShield } from "react-icons/fa";

const RegisterAdvocate = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    department: "",
    experience: "",
    barId: "",
    profilePic: null,
    certificates: null,
    consultationFee: "",
    officeAddress: "",
    availabilityDates: [],
    licenseDoc: null,
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") setFormData({ ...formData, [name]: files[0] });
    else if (type === "checkbox") setFormData({ ...formData, [name]: checked });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: submit logic
  };

  const formatAvailability = (dates) =>
    dates.map((d, i) => (
      <div key={i}>
        {i + 1}. {format(new Date(d), "yyyy-MM-dd hh:mm a")}
      </div>
    ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-12 px-4"
    >
      {/* Logo + sub‑heading */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <div className="text-4xl mb-2">⚖️</div>
        <h2 className="text-3xl font-extrabold">Create your account</h2>
        <p className="mt-2 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto p-8 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900"
      >
        {/* Header row with icon + title + go‑back */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FaUserShield className="text-2xl" />
            <h3 className="text-xl font-semibold">Advocate Registration</h3>
          </div>
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 hover:underline cursor-pointer text-sm"
          >
            ← Go back
          </span>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div>
            <label className="block mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded px-3 py-3"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MdEmail className="absolute left-3 top-3 text-xl text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 border rounded bg-transparent"
                required
              />
            </div>
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full border rounded px-3 py-3"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MdLock className="absolute left-3 top-3 text-xl text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-3 border rounded bg-transparent"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-3 text-xl text-gray-500"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>
          </div>

          {/* Department */}
          <div>
            <label className="block mb-1">
              Department / Specialization <span className="text-red-500">*</span>
            </label>
            <CreatableSelect
              value={
                formData.department
                  ? { label: formData.department, value: formData.department }
                  : null
              }
              onChange={(opt) =>
                setFormData({ ...formData, department: opt?.value || "" })
              }
              options={[
                { value: "Family", label: "Family" },
                { value: "Criminal", label: "Criminal" },
                { value: "Corporate", label: "Corporate" },
              ]}
              placeholder="Type or select specialization"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-1">
              Years of Experience <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Years of experience"
              className="w-full border rounded px-3 py-3"
              required
            />
          </div>

          {/* Bar ID */}
          <div>
            <label className="block mb-1">
              Bar Council ID / License <span className="text-red-500">*</span>
            </label>
            <input
              name="barId"
              value={formData.barId}
              onChange={handleChange}
              placeholder="License number"
              className="w-full border rounded px-3 py-3"
              required
            />
          </div>

          {/* Profile Picture (optional) */}
          <div>
            <label className="block mb-1">Profile Picture (optional)</label>
            <input
              type="file"
              name="profilePic"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Consultation Fee */}
          <div>
            <label className="block mb-1">
              Consultation Fee (₹/hour) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="consultationFee"
              value={formData.consultationFee}
              onChange={handleChange}
              placeholder="Fee per hour"
              className="w-full border rounded px-3 py-3"
              required
            />
          </div>

          {/* Office Address */}
          <div>
            <label className="block mb-1">
              Office Address/Location <span className="text-red-500">*</span>
            </label>
            <textarea
              name="officeAddress"
              rows={3}
              value={formData.officeAddress}
              onChange={handleChange}
              placeholder="Enter your office address"
              className="w-full border rounded px-3 py-3"
              required
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block mb-1">
              Available Dates & Times <span className="text-red-500">*</span>
            </label>
            <div className="w-full border rounded px-3 py-3">
              <DatePicker
                multiple
                value={formData.availabilityDates}
                onChange={(v) =>
                  setFormData({ ...formData, availabilityDates: v })
                }
                plugins={[<TimePicker position="bottom" />]}
                format="YYYY-MM-DD hh:mm A"
              />
            </div>
            <div className="mt-2 space-y-1">
              {formatAvailability(formData.availabilityDates)}
            </div>
          </div>

          {/* License Doc */}
          <div>
            <label className="block mb-1">
              Upload License Document <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="licenseDoc"
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>

          {/* Certificates (optional) */}
          <div>
            <label className="block mb-1">Upload Certificates (Optional)</label>
            <input
              type="file"
              name="certificates"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Terms */}
          <div className="md:col-span-2 flex gap-2">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <p className="text-sm">
              I accept the{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 bg-black text-white dark:bg-white dark:text-black rounded font-semibold hover:opacity-90"
            >
              Register
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default RegisterAdvocate;
