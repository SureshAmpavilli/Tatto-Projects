import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="min-h-screen px-6 py-16 bg-white dark:bg-black text-black dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">About E‑Advocate Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Empowering legal connections with transparency and trust.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto space-y-16 text-lg leading-relaxed">

        {/* Our Mission */}
        <section>
          <h2 className="text-2xl font-bold mb-4">📜 Our Mission</h2>
          <p>
            E‑Advocate Services was created to bridge the gap between individuals seeking legal help
            and professional advocates. We aim to make legal support accessible, reliable, and efficient
            for everyone.
          </p>
        </section>

        {/* Why E‑Advocate? */}
        <section>
          <h2 className="text-2xl font-bold mb-4">💡 Why E‑Advocate?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>🔍 Search and filter verified advocates based on expertise, experience, and location.</li>
            <li>🕒 Book consultations and get timely legal advice.</li>
            <li>💬 Communicate easily through built-in chat features.</li>
            <li>🔐 Ensure privacy and data security across all interactions.</li>
          </ul>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-bold mb-4">⚙️ How It Works</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Clients register and describe their legal needs.</li>
            <li>Advocates create profiles, listing their credentials and specialties.</li>
            <li>Clients browse and choose from a list of available advocates.</li>
            <li>Consultations and communication happen right through the platform.</li>
          </ol>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
