import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePolicyPage = () => {
  return (
    <div className="">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

          <p className="mb-4">
            This Cookie Policy explains how AdvocateServices.com (“we”, “our”, or “us”) uses cookies and similar technologies
            to recognize you when you visit our website or use our services.
          </p>

          <h2 className="text-xl font-semibold mb-2">1. What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are stored on your browser or device when you visit a website. They help us remember
            your preferences, improve site performance, and provide a personalized experience.
          </p>

          <h2 className="text-xl font-semibold mb-2">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li><strong>Essential Cookies:</strong> Necessary for basic website functionality (e.g., logins, security).</li>
            <li><strong>Performance Cookies:</strong> Help us understand how users interact with the website (e.g., Google Analytics).</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences and settings (e.g., language, theme).</li>
            <li><strong>Targeting/Advertising Cookies:</strong> Used to deliver relevant ads or limit repeat ads (only if applicable).</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">3. Why We Use Cookies</h2>
          <p className="mb-4">
            We use cookies to:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Enhance user experience and platform performance</li>
            <li>Analyze usage and traffic patterns</li>
            <li>Store login sessions and user preferences</li>
            <li>Ensure security and fraud prevention</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">4. Your Choices</h2>
          <p className="mb-4">
            Most browsers accept cookies automatically, but you can change your settings to decline them. Please note that
            disabling cookies may limit functionality on our site.
          </p>

          <h2 className="text-xl font-semibold mb-2">5. Third-Party Cookies</h2>
          <p className="mb-4">
            Some cookies are placed by trusted third parties such as analytics or payment service providers. These cookies are subject
            to the respective provider’s privacy policy.
          </p>

          <h2 className="text-xl font-semibold mb-2">6. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
          <p className="mb-6">
            For questions about this Cookie Policy or your data privacy, please contact us at:<br />
            <a href="mailto:privacy@advocateservices.com" className="text-blue-600 dark:text-blue-400 underline">
              privacy@advocateservices.com
            </a>
          </p>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            © {new Date().getFullYear()} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
