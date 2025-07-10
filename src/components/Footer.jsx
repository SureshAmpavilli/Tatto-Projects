import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram,
  
  FaGoogle,
  FaYoutube,
  FaLinkedinIn, } from 'react-icons/fa';
  import { Link } from 'react-router-dom';
import { FaApple, FaGooglePlay } from "react-icons/fa6"; // You can also use simple images


const Footer = () => {


const icons = [
    { icon: <FaFacebookF />, link: 'https://facebook.com' },
    { icon: <FaTwitter />, link: 'https://twitter.com' },
   { icon: <FaInstagram />, link: 'https://instagram.com' },
    { icon: <FaGoogle />, link: 'https://google.com' },
    { icon: <FaYoutube />, link: 'https://youtube.com' },
    { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
  ];



  return (
    <footer className="bg-gray-100 dark:bg-black text-black dark:text-white py-12 px-2 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-2">E‑Advocate Services</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            India&apos;s premier legal matchmaking platform connecting advocates and clients.
          </p>
        </div>


         <div>
  <h4 className="text-lg font-semibold mb-2">Explore</h4>
  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
    <li>
      <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Home
      </Link>
    </li>
    <li>
      <Link to="/advanced-search" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Advanced Search
      </Link>
    </li>
    <li>
      <Link to="/success-stories" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Success Stories
      </Link>
    </li>
    <li>
      <Link to="/site-map" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Site Map
      </Link>
    </li>
    <li>
      <Link to="/create-blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Create Blog
      </Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        About Us
      </Link>
    </li>
  </ul>
</div>


         <div>
  <h4 className="text-lg font-semibold mb-2">More</h4>
  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
    <li>
      <Link to="/membership" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Membership Options
      </Link>
    </li>
    <li>
      <Link to="/careers" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Careers
      </Link>
    </li>
  </ul>
</div>

        {/* Column 2 */}
       <div>
  <h4 className="text-lg font-semibold mb-2">For Advocates</h4>
  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
    <li>
      <Link to="/join" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Join Platform
      </Link>
    </li>
    <li>
      <Link to="/find-clients" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Find Clients
      </Link>
    </li>
    <li>
      <Link to="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Pricing
      </Link>
    </li>
    <li>
      <Link to="/success-stories" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Success Stories
      </Link>
    </li>
  </ul>
</div>

        {/* Column 3 */}
       <div>
  <h4 className="text-lg font-semibold mb-2">For Clients</h4>
  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
    <li>
      <Link to="/find-advocates" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Find Advocates
      </Link>
    </li>
    <li>
      <Link to="/legal-resources" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Legal Resources
      </Link>
    </li>
    <li>
      <Link to="/howitworks" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        How it Works
      </Link>
    </li>
    <li>
      <Link to="/support" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
        Support
      </Link>
    </li>
  </ul>
</div>

        {/* Column 4 */}
     


          <div>
          <h4 className="text-lg font-semibold mb-2">Help</h4>
          <ul className="space-y-1 text-sm">
         
            <li>
     <Link to="/help" className="hover:underline">Help</Link>
    </li>
     <li>
     <Link to="/e-advocate-centers" className="hover:underline">E-AdovacateCenters</Link>
    </li>
         
           
          </ul>
        </div>

 <div>
  <h4 className="text-lg font-semibold mb-2">Legal</h4>
  <ul className="space-y-1 text-sm">
    <li>
     <Link to="/frud-alert" className="hover:underline">Fraud Alert</Link>
    </li>
    <li>
      <Link to="/terms-service" className="hover:underline">Terms Of Use</Link>
    </li>
    <li>
      <Link to="/third-party" className="hover:underline">Third Party Terms Of Use</Link>
    </li>
    <li>
      <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
    </li>
    <li>
      <Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link>
    </li>
    <li>
      <Link to="/privacy-features" className="hover:underline">Privacy Features</Link>
    </li>
    <li>
      <Link to="/summons-notices" className="hover:underline">Summons / Notices</Link>
    </li>
    <li>
      <Link to="/grievances" className="hover:underline">Grievances</Link>
    </li>
    <li>
      <Link to="/refund-policy" className="hover:underline">Refund Policy</Link>
    </li>
  </ul>
</div>



     {/* Social Icons */}
<div className="mt-8 flex justify-center items-center space-x-4">
  {icons.map((item, index) => (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        border dark:border-white border-black
        text-black dark:text-white
        rounded-full p-3
        hover:bg-black dark:hover:bg-white
        hover:text-white dark:hover:text-black
        transition duration-300
      "
    >
      <span className="text-lg">{item.icon}</span>
    </a>
  ))}
</div>




      </div>

    <div className="bg-gray-200 dark:bg-zinc-800 text-black dark:text-white py-6 px-4 transition-colors duration-300 mt-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* App Section */}
        <div className="flex flex-col items-center md:items-start">
          <p className="font-semibold mb-2">App available on</p>
          <div className="flex space-x-4 text-2xl">
            <FaGooglePlay className="hover:text-blue-600 dark:hover:text-gray-300 cursor-pointer" />
            <FaApple className="hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-end">
          <p className="font-semibold mb-2">Follow us on</p>
          <div className="flex space-x-4 text-2xl">
            <FaFacebookF className="hover:text-blue-600 dark:hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 dark:hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 dark:hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

      </div>
    </div>

      <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2025 <span className="font-medium">E‑Advocate Services</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
