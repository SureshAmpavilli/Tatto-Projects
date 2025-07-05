import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { motion } from "framer-motion";
import {
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

const ClientRegistration = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    password: "",
    issueDescription: "",
    department: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit logic
  };

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Heading */}
      <div className="max-w-2xl mx-auto text-center mb-8">
        <div className="text-4xl mb-2">🧑‍💼</div>
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
        className="max-w-2xl mx-auto p-8 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FaUserTie className="text-2xl" />
            <h3 className="text-xl font-semibold">Client Registration</h3>
          </div>
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 hover:underline cursor-pointer text-sm"
          >
            ← Go back
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Contact */}
          <div>
            <label className="block mb-1">
              Email or Phone <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MdEmail className="absolute left-3 top-3 text-xl text-gray-500" />
              <input
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your email or phone"
                className="w-full border rounded px-12 py-3 bg-transparent"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1">
              Create Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MdLock className="absolute left-3 top-3 text-xl text-gray-500" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border rounded px-12 py-3 bg-transparent"
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

          {/* Issue Description */}
          <div>
            <label className="block mb-1">
              Describe Your Legal Issue <span className="text-red-500">*</span>
            </label>
            <textarea
              name="issueDescription"
              rows={3}
              value={formData.issueDescription}
              onChange={handleChange}
              placeholder="Briefly explain your issue"
              className="w-full border rounded px-3 py-3"
              required
            />
          </div>

          {/* Department */}
          <div>
            <label className="block mb-1">
              Choose Department <span className="text-red-500">*</span>
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
              placeholder="Type or select department"
            />
          </div>

          {/* Terms */}
          <div className="flex gap-2">
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
          <button
            type="submit"
            className="w-full py-3 bg-black text-white dark:bg-white dark:text-black rounded font-semibold hover:opacity-90"
          >
            Register
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ClientRegistration;
