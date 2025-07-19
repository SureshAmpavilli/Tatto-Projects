import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Video, Zap, Eye, Contact } from 'lucide-react';

const clientPlans = [
  {
    name: 'Basic Access',
    features: ['Search Advocates', 'View limited profiles', '2 inquiries/month'],
    duration: '1 Month',
    price: '₹0 (Free)',
  },
  {
    name: 'Legal Connect',
    features: ['Unlimited Advocate Search', 'View all profiles', 'Priority Support', '5 inquiries/month'],
    duration: '3 Months',
    price: '₹499',
  },
  {
    name: 'Legal Assist Pro',
    features: ['All Legal Connect features', 'Direct chat access', 'Profile save', '10 inquiries/month'],
    duration: '6 Months',
    price: '₹999',
  },
  {
    name: 'Enterprise Legal',
    features: ['Designed for startups/businesses', '20 inquiries/month', 'Live support', 'Document upload access'],
    duration: '12 Months',
    price: '₹1999',
  },
];

const MembershipPage = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const [activeTab, setActiveTab] = useState('prolite');


 const [activeExclusiveTab, setActiveExclusiveTab] = useState('exclusive');
  

  const benefits1 = [
    "A Relationship Manager is assigned to you",
    "Works on your profile to ensure it gets noticed",
    "Understands qualities that you are looking for in your desired partner",
    "Sends Interests to handpicked profiles matching your criteria",
    "Contacts profiles shortlisted by you and arrange meetings"
  ];

  const plans = [
    { months: 3, price: '₹ *****', tag: 'Popular' },
    { months: 6, price: '₹ *****' },
    { months: 12, price: '₹ *****' }
  ];







  const benefits = {
    prolite: [
      { text: "Get up to 2x more matches daily", included: true },
      { text: "Unlock access to advanced search", included: true },
      { text: "Make unlimited voice and video calls", included: true },
      { text: "Appear on top of the list for 24 hours with 3 free spotlights", included: false },
      { text: "Unlock 20 contact views", included: false },
      { text: "Get a personal relationship manager", included: false },
    ],
    pro: [
      { text: "Get up to 4x more matches daily", included: true },
      { text: "Unlock access to premium search filters", included: true },
      { text: "Unlimited voice, video, and text chat", included: true },
      { text: "Appear on top of the list for 24 hours with 5 spotlights", included: true },
      { text: "Unlock 50 contact views", included: true },
      { text: "Get a personal relationship manager", included: true },
    ],
  };

  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Page Heading */}
          <h1 className="text-4xl font-bold mb-4">Membership Options – E-Advocate Services</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-10">
            Choose a membership plan that fits your legal journey as an advocate or client.
          </p>

        


          {/* Intro */}
         <section className="p-4 rounded-xl shadow mb-12 flex flex-col md:flex-row justify-between  w-[1200px] h-[100px] bg-white dark:bg-gray-900 dark:text-white text-black
 ">
  <div className="bg-white/10 dark:bg-black/30 backdrop-blur-sm px-4 py-2 rounded mb-2 md:mb-0 mt-3">
    <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">
      Browse membership plans to find your perfect life partner!
    </h2>
  </div>

  <div className="flex flex-col md:flex-row md:space-x-4 text-sm text-black dark:text-gray-200 mt-5">
    <a href="#" className="hover:underline">Why Paid Member? Know More</a>
    <a href="#" className="hover:underline">Buy Personalized Services - Exclusive</a>
  </div>
</section>


          {/* Pro / Pro Lite Membership Section */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex border-b border-gray-300 dark:border-gray-700 space-x-16">
                <button
                  onClick={() => setActiveTab('prolite')}
                  className={`relative px-6 py-2 text-lg font-semibold ${
                    activeTab === 'prolite'
                      ? 'border-b-2 border-blue-600 dark:border-blue-400 text-black dark:text-white'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Pro Lite
                  <span className="absolute -top-[-10px] left-28  bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-0.5 rounded-full w-[70px]">
                    Top Seller
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('pro')}
                  className={`px-6 py-2 text-lg font-semibold ${
                    activeTab === 'pro'
                      ? 'border-b-2 border-blue-600 dark:border-blue-400 text-black dark:text-white'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Pro
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mt-8 bg-white dark:bg-gray-900 p-6 rounded shadow">
                <div className="flex-1 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black h-48 rounded">
                  <div className="text-center">
                    <h2 className="text-xl font-bold">Membership Plan starts @ ₹ ****</h2>
                    <p className="mt-2 text-sm">You must be logged in to see detailed plans and prices</p>
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold mb-4">{activeTab === 'prolite' ? 'Pro Lite Benefits' : 'Pro Benefits'}</h3>
                  <ul className="space-y-2">
                    {benefits[activeTab].map((b, i) => (
                      <li key={i} className={`flex items-center ${b.included ? 'text-black dark:text-white' : 'text-gray-400 line-through'}`}>
                        <span className="mr-2">{b.included ? '✔️' : '❌'}</span>
                        {b.text}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('/login')}
                    className="mt-6 w-full py-3  bg-black dark:bg-white text-white dark:text-black  font-semibold rounded hover:bg-red-700 transition"
                  >
                    Login to Continue
                  </button>
                </div>
              </div>
            </div>
          </section>


    <div className="bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Tabs */}
        
        {/* Main Card */}
      <div className="bg-black dark:bg-white  dark:text-black   text-white rounded-lg shadow p-6 flex flex-col md:flex-row md:justify-between md:items-center w-[1500px] ml-[-255px]">
          <div className="mb-4 md:mb-0 md:w-2/3">
          <h2 className="text-2xl font-bold mb-2">
  <span className="underline">Exclusive</span>{' '}
  <span className="text-sm font-normal">Personalised service</span>
</h2>

            <hr className="border-t border-white mb-4" />
            <ul className="space-y-1 mb-4">
              {benefits1.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">✔️</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>Also get benefits of the Pro plan</p>
            <a href="#" className="text-white dark:text-black hover:underline mt-2 inline-block">Know More</a>
          </div>

          {/* Plans */}
          <div className="md:w-1/3 flex flex-col space-y-3">
            <div className="flex">
              {plans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`flex-1 text-center py-3 px-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white 
                    ${idx === 0 ? 'rounded-l-md' : ''} ${idx === plans.length - 1 ? 'rounded-r-md' : ''}`}
                >
                  <div className="text-sm">{plan.months} Months</div>
                  <div className="font-bold">{plan.price}</div>
                  {plan.tag && (
                    <div className="mt-1 text-xs bg-black dark:bg-white  dark:text-black   text-white rounded-full px-2 py-0.5 inline-block">
                      {plan.tag}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/login')}
              className=" hover:bg-red-700  bg-white  dark:bg-black  dark:text-white   text-black py-3 rounded font-semibold"
            >
              Login to Continue
            </button>
          </div>
        </div>

        {/* Why Paid Membership */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-semibold mb-2">Why Paid Membership?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Upgrade your membership now to find your perfect partner! With a paid membership, you can seamlessly connect 
            with prospects and get more responses. Here are some key benefits:
          </p>

       <div className="flex flex-wrap justify-center gap-12">
  {/* Voice/Video Calls */}
  <div className="flex flex-col items-center space-y-2 max-w-[150px]">
    <div className="flex flex-col  items-center justify-center w-28 h-28 border border-gray-600 dark:border-gray-700 rounded-full">
      <Video size={34} className="text-gray-700 dark:text-gray-300" />
        <p className="text-[10px] text-center text-gray-700 dark:text-gray-300">Voice/video calls</p>
    </div>
  
    <p className="text-[13px] text-center text-gray-700 dark:text-gray-300">
      Make unlimited voice/video calls
    </p>
  </div>

  {/* Spotlights */}
  <div className="flex flex-col items-center space-y-2 max-w-[150px]">
    <div className="flex flex-col  items-center justify-center w-28 h-28 border border-gray-600 dark:border-gray-700 rounded-full">
      <Zap size={34} className="text-gray-700 dark:text-gray-300" />
       <p className="text-[10px] text-center text-gray-700 dark:text-gray-300">Spotlights</p>
    </div>
   
    <p className="text-[13px] text-center text-gray-700 dark:text-gray-300">
      Get spotlights for better visibility
    </p>
  </div>

  {/* View Contacts */}
  <div className="flex flex-col items-center space-y-2 max-w-[150px]">
    <div className="flex flex-col  items-center justify-center w-28 h-28 border border-gray-600 dark:border-gray-700 rounded-full">
      <Eye size={34} className="text-gray-700 dark:text-gray-300" />
       <p className="text-[10px] text-center text-gray-700 dark:text-gray-300">View contacts</p>
    </div>
   
    <p className="text-[13px] text-center text-gray-700 dark:text-gray-300">
      View contact details of the members
    </p>
  </div>

  {/* Show Contacts */}
  <div className="flex flex-col items-center space-y-2 max-w-[150px]">
    <div className="flex flex-col   items-center justify-center w-28 h-28 border border-gray-600 dark:border-gray-700 rounded-full">
      <Contact size={34} className="text-gray-700 dark:text-gray-300" />
        <p className="text-[10px] text-center text-gray-700 dark:text-gray-300">Show contacts</p>
    </div>
  
    <p className="text-[13px] text-center text-gray-700 dark:text-gray-300">
      Show your contact details to other members
    </p>
  </div>
</div>







        </div>
      </div>
    </div>






<div className="dark:bg-black bg-white dark:text-gray-100 text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-10">
       
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Membership Plans – E-Advocate Services</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Empowering Legal Access with Transparent Plans
          </p>
        </div>

        {/* Compliance Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Legal & Ethical Compliance</h2>
        <ul className="list-disc list-outside pl-5 space-y-1 text-left ml-[260px] mt-10">
  <li>No direct advertisement of lawyers.</li>
  <li>All listings are equal and based on filters set by users.</li>
  <li>Advocates do not pay to boost visibility (in compliance with BCI rules).</li>
  <li>Client benefits are related to platform usage, not legal outcome.</li>
</ul>



        </section>

        {/* Membership Plans Table */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Available Plans for Clients</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-600">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 border dark:border-gray-600">Plan Name</th>
                  <th className="px-4 py-2 border dark:border-gray-600">Features</th>
                  <th className="px-4 py-2 border dark:border-gray-600">Duration</th>
                  <th className="px-4 py-2 border dark:border-gray-600">Price (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border px-4 py-2 dark:border-gray-600">Basic Access</td>
                  <td className="border px-4 py-2 text-sm dark:border-gray-600">
                    - Search Advocates<br/>
                    - View limited profiles<br/>
                    - 2 inquiries/month
                  </td>
                  <td className="border px-4 py-2 dark:border-gray-600">1 Month</td>
                  <td className="border px-4 py-2 dark:border-gray-600">₹0 (Free)</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border px-4 py-2 dark:border-gray-600">Legal Connect</td>
                  <td className="border px-4 py-2 text-sm dark:border-gray-600">
                    - Unlimited Advocate Search<br/>
                    - View all profiles<br/>
                    - Priority Support<br/>
                    - 5 inquiries/month
                  </td>
                  <td className="border px-4 py-2 dark:border-gray-600">3 Months</td>
                  <td className="border px-4 py-2 dark:border-gray-600">₹499</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border px-4 py-2 dark:border-gray-600">Legal Assist Pro</td>
                  <td className="border px-4 py-2 text-sm dark:border-gray-600">
                    - All Legal Connect features<br/>
                    - Direct chat access<br/>
                    - Profile save<br/>
                    - 10 inquiries/month
                  </td>
                  <td className="border px-4 py-2 dark:border-gray-600">6 Months</td>
                  <td className="border px-4 py-2 dark:border-gray-600">₹999</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border px-4 py-2 dark:border-gray-600">Enterprise Legal</td>
                  <td className="border px-4 py-2 text-sm dark:border-gray-600">
                    - Designed for startups/businesses<br/>
                    - 20 inquiries/month<br/>
                    - Live support<br/>
                    - Document upload access
                  </td>
                  <td className="border px-4 py-2 dark:border-gray-600">12 Months</td>
                  <td className="border px-4 py-2 dark:border-gray-600">₹1999</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Key Benefits for Clients</h2>
          <ul className="list-disc list-outside pl-5 space-y-1 text-left ml-[260px] mt-10">
            <li>Access to verified advocates based on department, location & experience.</li>
            <li>No hidden charges. Transparent inquiry system.</li>
            <li>Secure platform; your data is never shared without consent.</li>
          </ul>
        </section>

        {/* Important Notes */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Important Notes</h2>
          <ul className="list-disc list-outside pl-5 space-y-1 text-left ml-[260px] mt-10">
            <li>These membership fees are for accessing platform features, not legal fees.</li>
            <li>Advocate selection, advice, and payments are between client & advocate only.</li>
            <li>Platform does not interfere or influence legal proceedings or outcomes.</li>
            <li>Membership plans can be upgraded anytime from client dashboard.</li>
          </ul>
        </section>

        {/* BCI Norms Compliance */}
        <section className="text-sm text-left ml-[260px]">
          <h2 className="text-xl font-semibold mb-2">BCI Norms Compliance</h2>
          <p className="mb-1">- This structure follows the Advocates Act, 1961, and BCI advertising restrictions.</p>
          <p className="mb-1">- Membership plans are strictly for enhanced user experience, not lawyer promotion.</p>
          <p>- Every profile listed is validated and displayed neutrally.</p>
        </section>
      </div>
    </div>
 

<div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-300 dark:border-gray-700">
        
        {/* WHY US */}
        <div>
          <h3 className="font-semibold text-lg mb-2 border-b border-gray-400 pb-1">
            WHY Advocates
          </h3>
          <ul className="space-y-1 text-sm mt-5">
            <li>Verified advocate listings</li>
            <li>Easy and transparent pricing</li>
            <li>Access to top legal experts</li>
          </ul>
        </div>

        {/* WHAT'S NEW */}
        <div>
          <h3 className="font-semibold text-lg mb-2 border-b border-gray-400 pb-1">
            WHAT'S NEW
          </h3>
          <ul className="space-y-1 text-sm mt-5">
            <li>Real-time advocate updates</li>
            <li>Better profile verification</li>
            <li>Improved legal search tools</li>
          </ul>
        </div>

        {/* WE ARE SECURE */}
        <div>
          <h3 className="font-semibold text-lg mb-2 border-b border-gray-400 pb-1">
            WE ARE SECURE
          </h3>
          <ul className="space-y-1 text-sm mt-5">
            <li>Multiple secure payment methods</li>
            <li>Safe & encrypted transactions</li>
            <li>We never store your card data</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-gray-700 dark:bg-gray-900 text-gray-100 flex flex-col md:flex-row justify-between items-center px-4 py-4 space-y-2 md:space-y-0">
        {/* Contact */}
        <div className="text-sm font-semibold">
          support@advocateservice.com | Request Callback
        </div>

        {/* Payment and social icons */}
        <div className="flex items-center space-x-2">
          {/* Payment icons */}
          <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6" />
          <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6" />
          <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="h-6" />
          <img src="https://img.icons8.com/color/48/000000/maestro.png" alt="Maestro" className="h-6" />
          <img src="https://img.icons8.com/color/48/000000/rupay.png" alt="RuPay" className="h-6" />

          {/* Social icons */}
          <a href="#" aria-label="Facebook">
            <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook" className="h-6" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" className="h-6" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="h-6" />
          </a>
          <a href="#" aria-label="Google">
            <img src="https://img.icons8.com/color/48/000000/google-plus.png" alt="Google" className="h-6" />
          </a>
        </div>
      </div>
    </div>
 


         

          {/* Other sections can follow here (Legal & Ethical Compliance, Key Benefits, Notes, etc.) */}

          {/* Footer note */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            Need help choosing? Email{' '}
            <a href="mailto:support@advocateservices.com" className="underline">
              support@advocateservices.com
            </a>
            <br />© {year} AdvocateServices.com – All rights reserved.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MembershipPage;
