import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

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
              Contact Us
            </a>
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            &copy; {new Date().getFullYear()} E-Advocate Services – Empowering Justice Through Technology
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
