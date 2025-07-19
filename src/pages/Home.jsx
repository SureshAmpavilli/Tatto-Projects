import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaMapMarkedAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";
import Footer from "../components/Footer";
   // ➜ added import

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


         <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 mt-10">
     

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          
          <h1 className="text-4xl font-bold mb-4 text-center">About E-Advocate Services</h1>
          
          <p>
            Welcome to <strong>E-Advocate Services</strong>, your trusted digital platform connecting clients with verified legal professionals across India.
          </p>

          <p>
            We aim to empower citizens with legal awareness & provide easy access to qualified advocates, legal information, and case assistance —
            ensuring transparency, professionalism, & compliance with the Bar Council of India (BCI) regulations.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">✅ What You’ll Find Here</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Legal awareness videos</li>
            <li>Client guidance</li>
            <li>Advocate registration and ethical practice info</li>
            <li>Case types & process explanation</li>
            <li>Legal rights awareness</li>
            <li>Law career and BCI-approved tips for aspiring advocates</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-2">📌 Disclaimer</h2>
          <p>We strictly adhere to BCI norms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>No advocate is promoted or advertised individually.</li>
            <li>All information is shared for educational and awareness purposes only.</li>
            <li>Legal advice is offered by registered professionals only, upon user request & consent.</li>
          </ul>

          <p className="mt-4">🔒 Verified. Secure. Professional.</p>
          <p>🔔 Subscribe, turn on notifications for weekly legal updates & support!</p>
          <p>📞 Visit our website or app to register or consult.</p>

          <div className="mt-8 text-center">
            <a
              href="/contact"
              aria-label="Contact E-Advocate Services"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              ContactUs
            </a>
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            &copy; {new Date().getFullYear()} E-Advocate Services – Empowering Justice Through Technology
          </div>
        </div>
      </div>

    </div>



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



  <div  id="blog"  className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
    <main    id="blog" className="max-w-6xl mx-auto py-12 px-4 space-y-10">
        {/* Page title & purpose */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">✅ Create Blog</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            This page allows verified advocates and admin-approved legal professionals to share legal awareness, case studies,
            law updates, and educational content — not promotional or client-soliciting content, in compliance with BCI norms.
          </p>
        </section>

        {/* Who can access */}
        <section className="bg-white dark:bg-black p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🔐 Who Can Access This Page?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Only verified advocates (registered on the platform)</li>
            <li>✅ Admin-approved contributors (e.g., retired judges, legal scholars)</li>
            <li>❌ Clients cannot post blogs</li>
          </ul>
        </section>

        {/* BCI compliance */}
        <section className="bg-white dark:bg-black p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">⚖️ BCI Norms Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">✅ Allowed:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Legal analysis of recent judgments</li>
                <li>Awareness content on rights, processes, and laws</li>
                <li>Commentary on Acts, Amendments</li>
                <li>RTI usage tips, PIL guidelines, eCourts process guidance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">❌ Not Allowed:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Self-promotion (e.g., “I won a case in...”)</li>
                <li>Client testimonials or promotional offers</li>
                <li>Misrepresentation of success rates or influence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Create blog form UI */}
        <section className="bg-white dark:bg-black p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">📦 Create Blog Form</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold">📝 Title:</label>
              <input type="text" placeholder="Enter blog title" className="w-full mt-1 p-2 border rounded dark:bg-black" />
            </div>
            <div>
              <label className="block font-semibold">🗂️ Category:</label>
              <select className="w-full mt-1 p-2 border rounded dark:bg-black">
                <option>Criminal Law</option>
                <option>Civil Law</option>
                <option>Family Law</option>
                <option>Tax Law</option>
                <option>Others</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold">📑 Tags:</label>
              <input type="text" placeholder="#bail, #rights, #ipc" className="w-full mt-1 p-2 border rounded dark:bg-black" />
            </div>
            <div>
              <label className="block font-semibold">🖋️ Author:</label>
              <input type="text" value="Auto-filled with Advocate Name" disabled className="w-full mt-1 p-2 border rounded bg-gray-200 dark:bg-black" />
            </div>
            <div>
              <label className="block font-semibold">🖼️ Cover Image:</label>
              <input type="file" className="mt-1" />
            </div>
            <div>
              <label className="block font-semibold">📄 Blog Body:</label>
              <textarea rows="6" placeholder="Write your blog content..." className="w-full mt-1 p-2 border rounded dark:bg-black"></textarea>
              <p className="text-sm text-gray-500 mt-1">Rich Text Editor – Bold, Italic, Links, etc.</p>
            </div>
            <div>
              <label className="block font-semibold">📅 Publish Date:</label>
              <input type="date" className="w-full mt-1 p-2 border rounded dark:bg-black" />
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="py-2 px-4 bg-black text-white rounded hover:bg-red-400">⏱️ Draft</button>
              <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">Submit for Review</button>
              <button className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">Save</button>
            </div>
          </div>
        </section>

        {/* Functionality options */}
        <section className="bg-white dark:bg-black p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🔧 Functionality Options</h2>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-black">
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="p-3">Rich Text Editor</td>
                <td className="p-3">Allows formatting (headings, bullet points, links, quotes, code blocks)</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="p-3">Preview Blog</td>
                <td className="p-3">Preview post before submission</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="p-3">Save as Draft</td>
                <td className="p-3">Save incomplete post for later editing</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="p-3">Submit for Review</td>
                <td className="p-3">Blog is reviewed by admin for BCI compliance before going live</td>
              </tr>
              <tr>
                <td className="p-3">Upload Feature</td>
                <td className="p-3">Cover image upload, with auto resize and preview</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Submission flow */}
        <section className="bg-white dark:bg-black p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🔐 Blog Submission Flow</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>✅ Advocate logs in</li>
            <li>🖊️ Clicks Create Blog</li>
            <li>✍️ Fills in content with legal insights</li>
            <li>🔎 Clicks Submit for Review</li>
            <li>👨‍⚖️ Admin reviews for BCI compliance</li>
            <li>📢 Once approved, it appears on Blog Feed</li>
          </ol>
        </section>

        {/* Example blog preview */}
        <section className="bg-white dark:bg-black p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🧑‍💼 Example Blog Preview Card</h2>
          <div className="border rounded-lg p-4 space-y-2">
            <h3 className="text-xl font-semibold">📘 Title: Understanding Anticipatory Bail Under Indian Law</h3>
            <p>👤 Author: Adv. Ravi Verma</p>
            <p>📆 Published: 18 July 2025 | 🗂️ Category: Criminal Law</p>
            <p>🔖 Tags: #bail #ipc #section438</p>
            <div className="bg-gray-200 dark:bg-gray-800 h-40 flex items-center justify-center text-gray-500">
              🖼️ [Cover Image]
            </div>
            <p>📝 Excerpt: In this blog, we’ll explore the essentials of anticipatory bail, its scope, and recent judgments...</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-600 dark:text-blue-400 underline">🔗 Read Full Blog</a>
              <span>❤️ Like</span>
              <span>💬 Comment</span>
              <span>🔄 Share</span>
            </div>
          </div>
        </section>
      </main>
</div>
      
{/*Help Section */}

<div id="help">
<main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Help & Support – E-Advocate Services</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Welcome to the E-Advocate Services Help Center. We're here to assist you with any queries, issues, or concerns while using our app or website.
            We are committed to maintaining transparency, ethical compliance, and high-quality user support as per Bar Council of India (BCI) norms.
          </p>

          {/* FAQs */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🙋‍♂️ Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">1. How do I register as an Advocate?</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Go to the “Register” page → Select Advocate → Fill in your name, Bar Council ID, state, department, and upload your certificate.
                  Once verified, your profile will be activated.
                </p>
              </div>
              <div>
                <p className="font-medium">2. How do I register as a Client?</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Select Client Registration, fill in your details, legal issue type, and location. You’ll be matched with available advocates in your region.
                </p>
              </div>
              <div>
                <p className="font-medium">3. Is E-Advocate Services legally approved?</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes. We strictly follow BCI Rule 36 by not advertising or promoting any advocate. All listings are neutral and based on verified credentials only.
                </p>
              </div>
              <div>
                <p className="font-medium">4. Can I talk to the advocate directly?</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, once matched, you can chat or request a consultation via the secure in-app system.
                </p>
              </div>
              <div>
                <p className="font-medium">5. How are payments handled?</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Paid consultations or premium features are handled through secure third-party gateways (e.g., Razorpay). You’ll receive an invoice for every transaction.
                </p>
              </div>
            </div>
          </section>

          {/* Security & Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🛡️ Security & Privacy</h2>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 space-y-2">
              <li>We do not store sensitive legal data.</li>
              <li>All data is encrypted and complies with Indian data protection laws.</li>
              <li>Advocates must comply with Bar Council confidentiality norms.</li>
            </ul>
          </section>

          {/* Grievance & Complaints */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">📝 Grievance & Complaints</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">If you experience:</p>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 space-y-1 mb-2">
              <li>Advocate misconduct</li>
              <li>Account abuse or impersonation</li>
              <li>Technical issues or fraud</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              ➡️ Email: <a href="mailto:grievance@eadvocateservices.in" className="underline text-blue-600 dark:text-blue-400">grievance@eadvocateservices.in</a><br/>
              ➡️ Phone: <a href="tel:+91XXXXXXXXXX" className="underline text-green-600 dark:text-green-300">+91-XXXXXXXXXX</a>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Your complaint will be acknowledged within 24 hours and resolved within 15 working days.
            </p>
          </section>

          {/* Refund & Payment Issues */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">💸 Refund & Payment Issues</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">If you've faced:</p>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 space-y-1 mb-2">
              <li>A failed transaction</li>
              <li>Double charge</li>
              <li>Advocate didn’t respond after payment</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              Please submit a refund request to:<br/>
              📧 <a href="mailto:refunds@eadvocateservices.in" className="underline text-blue-600 dark:text-blue-400">refunds@eadvocateservices.in</a>
            </p>
          </section>

          {/* Bar Council Reporting */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🧑‍💼 Bar Council Reporting</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If an advocate violates professional conduct or falsely claims BCI affiliation, we will report the matter to the Bar Council of India or the relevant State Bar Council.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🔗 Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">We use verified third-party services for:</p>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Payment (e.g., Razorpay)</li>
              <li>OTP (e.g., Twilio, Msg91)</li>
              <li>Hosting (e.g., AWS)</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              No third-party has access to your legal conversations or files.
            </p>
          </section>

          {/* Contact Support */}
          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-4">📞 Contact Support</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Having trouble with login, registration, or profile? Contact us anytime:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>Support Email: <a href="mailto:support@eadvocateservices.in" className="underline text-blue-600 dark:text-blue-400">support@eadvocateservices.in</a></li>
              <li>Working Hours: Monday – Saturday, 10:00 AM – 6:00 PM IST</li>
              <li>Phone: <a href="tel:+91XXXXXXXXXX" className="underline text-green-600 dark:text-green-300">+91-XXXXXXXXXX</a></li>
            </ul>
          </section>

        

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            &copy; {new Date().getFullYear()} E-Advocate Services – All rights reserved.
          </div>
        </div>
      </main>

</div>




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



