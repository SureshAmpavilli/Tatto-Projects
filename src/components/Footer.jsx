import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 text-black dark:text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-2">E‑Advocate Services</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            India&apos;s premier legal matchmaking platform connecting advocates and clients.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">For Advocates</h4>
          <ul className="space-y-1 text-sm">
            <li>Join Platform</li>
            <li>Find Clients</li>
            <li>Pricing</li>
            <li>Success Stories</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">For Clients</h4>
          <ul className="space-y-1 text-sm">
            <li>Find Advocates</li>
            <li>Legal Resources</li>
            <li>How it Works</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Support</h4>
          <ul className="space-y-1 text-sm">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2025 <span className="font-medium">E‑Advocate Services</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
