import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { motion } from "framer-motion";
import {
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = { email: "", password: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulated login check
      if (
        formData.email === "" &&
        formData.password === "123456"
      ) {
        navigate("/layout"); // Redirect after successful login
      } else {
        setErrors({
          ...errors,
          password: "Invalid email or password.",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <div className="flex justify-center items-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md rounded-xl glass-btn p-8 shadow-lg"
        >
          <div className="text-3xl font-bold text-center mb-4">
            ⚖️ E‑Advocate Services
          </div>

          <h2 className="text-2xl font-semibold text-center">
            Sign in to your account
          </h2>
          <p className="text-sm text-center mb-6 text-black dark:text-white">
            or{" "}
            <span
              onClick={() => navigate("/register")}
              className="hover:underline cursor-pointer"
            >
              create your account
            </span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MdEmail className="absolute left-3 top-3 text-xl text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring focus:border-blue-400"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
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
                  className="w-full pl-12 pr-12 py-2 rounded border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring focus:border-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-2.5 text-xl text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 rounded bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          {/* Back to Home */}
          <div className="text-center text-sm mt-6 text-black dark:text-white">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer hover:underline"
            >
              ← Back to Home
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
