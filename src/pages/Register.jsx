import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { FaUserTie, FaUserShield } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const roles = [
    {
      label: "Client",
      description: "Find advocates and manage legal consultations.",
      route: "/register/client",
      icon: (
        <FaUserTie
          size={36}
          className="text-black dark:text-white mb-3"
        />
      ),
    },
    {
      label: "Advocate",
      description: "Offer your legal expertise and manage clients.",
      route: "/register/advocate",
      icon: (
        <FaUserShield
          size={36}
          className="text-black dark:text-white mb-3"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />
<div className="flex flex-col md:flex-row justify-center items-center min-h-screen px-4 py-12 gap-16">
  {/* Left Section - Form Box */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full max-w-xl glass-btn p-8 rounded-xl shadow-lg"
  >
    {/* Logo */}
    <div className="text-3xl font-bold text-center mb-4">
      <img
        src="/advocate_logo_page2.png"
        alt="Advocate Logo"
        className="h-[150px] w-[200px] object-contain invert-0 dark:invert dark:mt-2 mx-auto"
      />
      <div className="mt-2">E‑Advocate Services</div>
    </div>

    <h2 className="text-2xl font-semibold text-center mb-8">
      Create your account
    </h2>

    <div className="flex flex-col md:flex-row gap-6">
      {roles.map((role) => (
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          key={role.label}
          onClick={() => navigate(role.route)}
          className="flex-1 p-6 rounded-xl cursor-pointer border border-gray-300 dark:border-gray-600
                     hover:bg-gray-100 dark:hover:bg-zinc-800 transition text-center"
        >
          <div className="flex justify-center">{role.icon}</div>
          <h3 className="text-xl font-bold mb-2">{role.label}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {role.description}
          </p>
        </motion.div>
      ))}
    </div>

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

  {/* Right Section - Image */}
  <div>
    <img
      src="../../public/advocate_logo_page2.png"
      alt="Advocate"
      className="h-[650px] w-[600px] object-contain invert-0 dark:invert dark:mt-2"
    />
    
  </div>
</div>


    </div>
  );
};

export default Register;
