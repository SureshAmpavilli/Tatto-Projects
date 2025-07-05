import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const advocateData = [
  {
    name: "Adv. Priya Sharma",
    location: "Mumbai, Maharashtra",
    practice: "Family Law",
    rating: 4.8,
    experience: "8 years",
    
    img: "https://via.placeholder.com/120?text=PS",
  },
  {
    name: "Adv. Rajesh Kumar",
    location: "Delhi, NCR",
    practice: "Criminal Law",
    rating: 4.9,
    experience: "12 years",
   
    img: "https://via.placeholder.com/120?text=RK",
  },
  {
    name: "Adv. Meera Patel",
    location: "Bangalore, Karnataka",
    practice: "Corporate Law",
    rating: 4.7,
    experience: "15 years",
   
    img: "https://via.placeholder.com/120?text=MP",
  },
];

const Profiles = () => {
  const [tab, setTab] = useState("advocates"); // "advocates" | "clients"

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Browse Profiles</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Find the right legal professional or client for your needs
        </p>

        {/* Toggle buttons */}
        <div className="mt-8 flex justify-center gap-4">
          {[
            { id: "advocates", label: "Browse Advocates" },
            { id: "clients", label: "Browse Client Requests" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setTab(btn.id)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold border
                transition
                ${
                  tab === btn.id
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-transparent text-black dark:text-white border-black dark:border-white"
                } hover:opacity-90`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Advocate Cards */}
      {tab === "advocates" && (
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {advocateData.map((adv) => (
            <motion.div
              key={adv.name}
              whileHover={{ y: -4 }}
              className="p-6 rounded-lg shadow-md bg-white dark:bg-zinc-900
                         border border-gray-200 dark:border-gray-700 space-y-4"
            >
              {/* Image & name */}
              <div className="flex items-center gap-4">
                <img
                  src={adv.img}
                  alt={adv.name}
                  className="w-16 h-16 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                />
                <div>
                  <h3 className="font-bold text-lg">{adv.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {adv.location}
                  </p>
                </div>
              </div>

              {/* Practice + rating */}
              <div className="flex justify-between items-center">
                <span className="font-medium">{adv.practice}</span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" /> {adv.rating}
                </span>
              </div>

              {/* Experience & fee */}
              <div className="space-y-1 text-sm">
                <p>Experience: {adv.experience}</p>
               
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2">
                <button className="flex-1 px-3 py-2 text-sm font-medium rounded border
                                   border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/10">
                  View Profile
                </button>
                <button className="flex-1 px-3 py-2 text-sm font-medium rounded
                                   bg-black text-white dark:bg-white dark:text-black hover:opacity-90">
                  Contact
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Placeholder for client requests */}
      {tab === "clients" && (
        <div className="text-center text-gray-600 dark:text-gray-400 mt-20">
          <p>(Client requests UI coming next.)</p>
        </div>
      )}
    </motion.div>
  );
};

export default Profiles;
