import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaMapMarkedAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";
import Footer from "../components/Footer";   // ➜ added import

/* -------------------------------------------------------------------------- */
/* Dummy data — swap with API data later                                       */
/* -------------------------------------------------------------------------- */
const advocateData = [
  {
    name: "Adv. Priya Sharma",
    location: "Mumbai, Maharashtra",
    practice: "Family Law",
    rating: 4.8,
    experience: "8 years",
    fee: "₹2,000/hr",
    img: "https://via.placeholder.com/120?text=PS",
  },
  {
    name: "Adv. Rajesh Kumar",
    location: "Delhi, NCR",
    practice: "Criminal Law",
    rating: 4.9,
    experience: "12 years",
    fee: "₹3,500/hr",
    img: "https://via.placeholder.com/120?text=RK",
  },
  {
    name: "Adv. Meera Patel",
    location: "Bangalore, Karnataka",
    practice: "Corporate Law",
    rating: 4.7,
    experience: "15 years",
    fee: "₹4,000/hr",
    img: "https://via.placeholder.com/120?text=MP",
  },
];

const clientRequests = [
  {
    name: "Amit Singh",
    location: "Pune, Maharashtra",
    priority: "High Priority",
    title: "Property Dispute",
    description:
      "Need help with property documentation and legal dispute resolution",
    budget: "₹50,000 – ₹1,00,000",
  },
  {
    name: "Sana Verma",
    location: "Lucknow, Uttar Pradesh",
    priority: "Medium Priority",
    title: "Divorce Settlement",
    description:
      "Looking for legal guidance on mutual divorce process and settlements",
    budget: "₹30,000 – ₹70,000",
  },
  {
    name: "Rohit Kapoor",
    location: "Chandigarh",
    priority: "High Priority",
    title: "Criminal Defense",
    description: "Need urgent assistance for a bail plea and court hearing",
    budget: "₹75,000 – ₹1,50,000",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("advocates");

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section className="flex-grow flex items-center justify-center px-4 relative overflow-hidden">
        <motion.div
          className="text-center max-w-2xl z-10 pt-24"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.15, 0.9, 1.05, 0.98, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          >
            Welcome to E‑Advocate Services
          </motion.h1>
          <p className="text-lg md:text-xl mb-10 text-gray-700 dark:text-gray-300">
            Find qualified advocates, get legal consultation, and resolve your
            legal matters with confidence.
          </p>
          
        </motion.div>
      </section>

      {/* ── About Section ─────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-20 px-6 bg-gray-50 dark:bg-zinc-900 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">
            Why Choose E‑Advocate Services?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            E‑Advocate Services bridges the gap between individuals seeking
            legal help and professional advocates. We make legal support
            accessible, reliable, and efficient for everyone.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaCheckCircle size={36} />,
                title: "Verified Professionals",
                text: "All advocates are verified with Bar Council credentials",
              },
              {
                icon: <FaMapMarkedAlt size={36} />,
                title: "Smart Matching",
                text: "Find the perfect advocate based on specialization and location",
              },
              {
                icon: <FaClock size={36} />,
                title: "Quick Response",
                text: "Get responses from advocates within 24 hours",
              },
              {
                icon: <FaStar size={36} />,
                title: "Quality Assured",
                text: "Experienced professionals with proven track records",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -4 }}
                className="p-6 rounded-lg shadow-md bg-white dark:bg-black border
                           border-gray-200 dark:border-gray-700 space-y-3 text-center"
              >
                <div className="text-black dark:text-white mx-auto">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-xl">{card.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Profiles Section ──────────────────────────────────────────── */}
      <section
        id="profiles"
        className="py-20 px-6 bg-white dark:bg-black text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Browse Profiles</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            Find the right legal professional or client for your needs
          </p>

          {/* Tab selector */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setTab("advocates")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold border transition
                ${
                  tab === "advocates"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-transparent text-black dark:text-white border-black dark:border-white"
                } hover:opacity-90`}
            >
              Browse Advocates
            </button>
            <button
              onClick={() => setTab("clients")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold border transition
                ${
                  tab === "clients"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-transparent text-black dark:text-white border-black dark:border-white"
                } hover:opacity-90`}
            >
              Browse Client Requests
            </button>
          </div>

          {/* Advocate cards */}
          {tab === "advocates" && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {advocateData.map((a) => (
                <motion.div
                  key={a.name}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-lg shadow-md bg-gray-50 dark:bg-zinc-900 border
                             border-gray-200 dark:border-gray-700 space-y-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={a.img}
                      alt={a.name}
                      className="w-16 h-16 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{a.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {a.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">{a.practice}</span>
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" /> {a.rating}
                    </span>
                  </div>

                  <div className="text-sm space-y-1">
                    <p>Experience: {a.experience}</p>
                  
                  </div>

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

          {/* Client request cards */}
          {tab === "clients" && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left">
              {clientRequests.map((c, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-lg shadow-md bg-gray-50 dark:bg-zinc-900 border
                             border-gray-200 dark:border-gray-700 space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{c.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {c.location}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                      {c.priority}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold">{c.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {c.description}
                  </p>
                

                  <div className="pt-3 text-center">
                    <button className="px-4 py-2 text-sm font-semibold rounded
                                       bg-black text-white dark:bg-white dark:text-black hover:opacity-90">
                      Apply for this Case
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* ── Connect Section ───────────────────────────────────────────── */}
      <section
        id="connect"
        className="py-24 px-6 bg-gray-100 dark:bg-zinc-950 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Connect?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
            Join thousands of legal professionals and clients who trust
            E‑Advocate Services
          </p>
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-3 text-lg font-semibold rounded-lg border transition
                       bg-black text-white border-black
                       dark:bg-white dark:text-black dark:border-white
                       hover:bg-gray-900 dark:hover:bg-gray-100"
          >
            Create Your Profile Today
          </button>
        </motion.div>
      </section>

      {/* ── Footer (new) ──────────────────────────────────────────────── */}
      <Footer />
    </motion.div>
  );
};

export default Home;







// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaCheckCircle,
//   FaMapMarkedAlt,
//   FaClock,
//   FaStar,
// } from "react-icons/fa";
// import Footer from "../components/Footer";

// /* -------------------------------------------------------------------------- */
// /* Dummy data (replace with API later)                                         */
// /* -------------------------------------------------------------------------- */
// const advocateData = [
//   {
//     name: "Adv. Priya Sharma",
//     location: "Mumbai, Maharashtra",
//     practice: "Family Law",
//     rating: 4.8,
//     experience: "8 years",
//     fee: "₹2,000/hr",
//     img: "https://via.placeholder.com/120?text=PS",
//   },
//   {
//     name: "Adv. Rajesh Kumar",
//     location: "Delhi, NCR",
//     practice: "Criminal Law",
//     rating: 4.9,
//     experience: "12 years",
//     fee: "₹3,500/hr",
//     img: "https://via.placeholder.com/120?text=RK",
//   },
//   {
//     name: "Adv. Meera Patel",
//     location: "Bangalore, Karnataka",
//     practice: "Corporate Law",
//     rating: 4.7,
//     experience: "15 years",
//     fee: "₹4,000/hr",
//     img: "https://via.placeholder.com/120?text=MP",
//   },
// ];

// const clientRequests = [
//   {
//     name: "Amit Singh",
//     location: "Pune, Maharashtra",
//     priority: "High Priority",
//     title: "Property Dispute",
//     description:
//       "Need help with property documentation and legal dispute resolution",
//     budget: "₹50,000 – ₹1,00,000",
//   },
//   {
//     name: "Sana Verma",
//     location: "Lucknow, Uttar Pradesh",
//     priority: "Medium Priority",
//     title: "Divorce Settlement",
//     description:
//       "Looking for legal guidance on mutual divorce process and settlements",
//     budget: "₹30,000 – ₹70,000",
//   },
//   {
//     name: "Rohit Kapoor",
//     location: "Chandigarh",
//     priority: "High Priority",
//     title: "Criminal Defense",
//     description: "Need urgent assistance for a bail plea and court hearing",
//     budget: "₹75,000 – ₹1,50,000",
//   },
// ];

// const Home = () => {
//   const navigate = useNavigate();
//   const [tab, setTab] = useState("advocates");
//   const [showIntro, setShowIntro] = useState(true); // ▶ intro splash

//   /* ───────────────────────── Intro Splash Screen ─────────────────────── */
//   if (showIntro) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.8 }}
//         className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center
//                    bg-white dark:bg-black text-black dark:text-white"
//       >
//         <div className="text-6xl mb-4">⚖</div>
//         <h1 className="text-3xl md:text-4xl font-bold mb-2">E‑Advocate Services</h1>
//         <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
//           Connecting You with Legal Experts
//         </p>
//         <button
//           onClick={() => setShowIntro(false)}
//           className="px-6 py-3 text-lg font-semibold rounded-lg border transition
//                      bg-black text-white border-black
//                      dark:bg-white dark:text-black dark:border-white
//                      hover:bg-gray-900 dark:hover:bg-gray-100"
//         >
//           Get Started
//         </button>
//       </motion.div>
//     );
//   }

//   /* ───────────────────────── Main Website ─────────────────────────────── */
//   return (
//     <motion.div
//       className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* ── Hero Section ──────────────────────────────────────────────── */}
//       <section className="flex-grow flex items-center justify-center px-4 relative overflow-hidden">
//         <motion.div
//           className="text-center max-w-2xl z-10 pt-24"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.h1
//             className="text-4xl md:text-5xl font-extrabold mb-6"
//             initial={{ scale: 1 }}
//             animate={{ scale: [1, 1.15, 0.9, 1.05, 0.98, 1] }}
//             transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
//           >
//             Welcome to E‑Advocate Services
//           </motion.h1>
//           <p className="text-lg md:text-xl mb-10 text-gray-700 dark:text-gray-300">
//             Find qualified advocates, get legal consultation, and resolve your
//             legal matters with confidence.
//           </p>
//           <div className="flex justify-center gap-6 flex-wrap">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               onClick={() => navigate("/register/client")}
//               className="px-6 py-3 text-lg font-semibold rounded-lg border transition
//                          bg-black text-white border-black
//                          dark:bg-white dark:text-black dark:border-white
//                          hover:bg-gray-900 dark:hover:bg-gray-100"
//             >
//               Find an Advocate
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               onClick={() => navigate("/register/advocate")}
//               className="px-6 py-3 text-lg font-semibold rounded-lg border transition
//                          bg-white text-black border-black
//                          dark:bg-black dark:text-white dark:border-white
//                          hover:bg-gray-100 dark:hover:bg-gray-900"
//             >
//               Join as Advocate
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── About Section ─────────────────────────────────────────────── */}
//       <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-zinc-900 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-3xl font-bold mb-4">Why Choose E‑Advocate Services?</h2>
//           <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
//             E‑Advocate Services bridges the gap between individuals seeking
//             legal help and professional advocates. We make legal support
//             accessible, reliable, and efficient for everyone.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: <FaCheckCircle size={36} />, title: "Verified Professionals", text: "All advocates are verified with Bar Council credentials", },
//               { icon: <FaMapMarkedAlt size={36} />, title: "Smart Matching", text: "Find the perfect advocate based on specialization and location", },
//               { icon: <FaClock size={36} />, title: "Quick Response", text: "Get responses from advocates within 24 hours", },
//               { icon: <FaStar size={36} />, title: "Quality Assured", text: "Experienced professionals with proven track records", },
//             ].map((card) => (
//               <motion.div
//                 key={card.title}
//                 whileHover={{ y: -4 }}
//                 className="p-6 rounded-lg shadow-md bg-white dark:bg-black border
//                            border-gray-200 dark:border-gray-700 space-y-3 text-center"
//               >
//                 <div className="text-black dark:text-white mx-auto">{card.icon}</div>
//                 <h3 className="font-semibold text-xl">{card.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{card.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Profiles Section ──────────────────────────────────────────── */}
//       <section id="profiles" className="py-20 px-6 bg-white dark:bg-black text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-6xl mx-auto"
//         >
//           <h2 className="text-3xl font-bold mb-4">Browse Profiles</h2>
//           <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
//             Find the right legal professional or client for your needs
//           </p>

//           {/* Tabs */}
//           <div className="flex justify-center gap-4 mb-12">
//             <button
//               onClick={() => setTab("advocates")}
//               className={`px-5 py-2 rounded-lg text-sm font-semibold border transition ${
//                 tab === "advocates"
//                   ? "bg-black text-white dark:bg-white dark:text-black"
//                   : "bg-transparent text-black dark:text-white border-black dark:border-white"
//               } hover:opacity-90`}
//             >
//               Browse Advocates
//             </button>
//             <button
//               onClick={() => setTab("clients")}
//               className={`px-5 py-2 rounded-lg text-sm font-semibold border transition ${
//                 tab === "clients"
//                   ? "bg-black text-white dark:bg-white dark:text-black"
//                   : "bg-transparent text-black dark:text-white border-black dark:border-white"
//               } hover:opacity-90`}
//             >
//               Browse Client Requests
//             </button>
//           </div>

//           {/* Advocate cards */}
//           {tab === "advocates" && (
//             <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//               {advocateData.map((a) => (
//                 <motion.div
//                   key={a.name}
//                   whileHover={{ y: -4 }}
//                   className="p-6 rounded-lg shadow-md bg-gray-50 dark:bg-zinc-900 border
//                              border-gray-200 dark:border-gray-700 space-y-4 text-left"
//                 >
//                   {/* Header */}
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={a.img}
//                       alt={a.name}
//                       className="w-16 h-16 rounded-full object-cover border border-gray-300 dark:border-gray-600"
//                     />
//                     <div>
//                       <h3 className="font-bold text-lg">{a.name}</h3>
//                       <p className="text-sm text-gray-600 dark:text-gray-400">{a.location}</p>
//                     </div>
//                   </div>

//                   {/* Practice & rating */}
//                   <div className="flex justify-between items-center">
//                     <span className="font-medium">{a.practice}</span>
//                     <span className="flex items-center gap-1">
//                       <FaStar className="text-yellow-400" /> {a.rating}
//                     </span>
//                   </div>

//                   {/* Details */}
//                   <div className="text-sm space-y-1">
//                     <p>Experience: {a.experience}</p>
//                     <p>Consultation Fee: {a.fee}</p>
//                   </div>

//                   {/* Actions */}
//                   <div className="flex gap-3 pt-2">
//                     <button className="flex-1 px-3 py-2 text-sm font-medium rounded border
//                                        border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/10">
//                       View Profile
//                     </button>
//                     <button className="flex-1 px-3 py-2 text-sm font-medium rounded
//                                        bg-black text-white dark:bg-white dark:text-black hover:opacity-90">
//                       Contact
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {/* Client request cards */}
//           {tab === "clients" && (
//             <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left">
//               {clientRequests.map((c, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ y: -4 }}
//                   className="p-6 rounded-lg shadow-md bg-gray-50 dark:bg-zinc-900 border
//                              border-gray-200 dark:border-gray-700 space-y-4"
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="font-bold">{c.name}</h3>
//                       <p className="text-sm text-gray-600 dark:text-gray-400">{c.location}</p>
//                     </div>
//                     <span className="text-sm font-semibold text-red-600 dark:text-red-400">
//                       {c.priority}
//                     </span>
//                   </div>

//                   <h4 className="text-lg font-semibold">{c.title}</h4>
//                   <p className="text-sm text-gray-700 dark:text-gray-300">{c.description}</p>
//                   <p className="text-sm font-medium">Budget: {c.budget}</p>

//                   <div className="pt-3 text-center">
//                     <button className="px-4 py-2 text-sm font-semibold rounded
//                                        bg-black text-white dark:bg-white dark:text-black hover:opacity-90">
//                       Apply for this Case
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </motion.div>
//       </section>

//       {/* ── Connect Section ───────────────────────────────────────────── */}
//       <section id="connect" className="py-24 px-6 bg-gray-100 dark:bg-zinc-950 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-2xl mx-auto"
//         >
//           <h2 className="text-3xl font-bold mb-4">Ready to Get Connect?</h2>
//           <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
//             Join thousands of legal professionals and clients who trust
//             E‑Advocate Services
//           </p>
//           <button
//             onClick={() => navigate("/register")}
//             className="px-6 py-3 text-lg font-semibold rounded-lg border transition
//                        bg-black text-white border-black
//                        dark:bg-white dark:text-black dark:border-white
//                        hover:bg-gray-900 dark:hover:bg-gray-100"
//           >
//             Create Your Profile Today
//           </button>
//         </motion.div>
//       </section>

//       {/* ── Footer ───────────────────────────────────────────────────── */}
//       <Footer />
//     </motion.div>
//   );
// };

// export default Home;



