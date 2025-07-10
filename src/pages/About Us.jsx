import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">About AdvocateServices.com</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            Connecting clients to verified advocates with trust, transparency, and technology.
          </p>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            <p>
              AdvocateServices.com is a technology-first platform designed to simplify and secure the process of finding legal help in India. 
              Our mission is to empower individuals, businesses, and communities to access trusted legal professionals quickly and confidently.
            </p>

            <p>
              We believe that access to justice should be fair, transparent, and affordable. Through digital tools, verified profiles, secure 
              communication channels, and user feedback, we aim to build the most reliable legal services ecosystem in the country.
            </p>

            <p>
              Our platform is built for both clients and advocates. While clients can discover legal help, book appointments, or request 
              consultations easily — advocates get tools to manage their practice online, receive genuine leads, and grow their reputation.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-2">🌐 What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verified Advocate Profiles</li>
              <li>Client Ratings & Reviews</li>
              <li>Appointment Booking & Video Consultations</li>
              <li>Legal Resources and Blogs</li>
              <li>Secure & Transparent Communication</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-2">👥 Our Team</h2>
            <p>
              We are a diverse team of lawyers, technologists, designers, and customer support specialists — all working toward one common goal:
              making legal help accessible and trustworthy.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-2">📍 Our Offices</h2>
            <p>
              Hyderabad | Bengaluru | Delhi | Remote
            </p>

            <p className="mt-6">
              Whether you're a user seeking justice, or an advocate seeking growth — we’re here to support you every step of the way.
            </p>

            <div className="mt-8 text-center">
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Contact Us
              </a>
            </div>

            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
              &copy; {new Date().getFullYear()} AdvocateServices.com – Empowering Justice Through Technology
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
