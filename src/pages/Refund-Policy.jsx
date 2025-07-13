import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPolicyPage = () => {
  return (
    <div className="">
      <Header />

      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

          <p className="mb-4">
            AdvocateServices.com is committed to offering a fair and transparent refund process. This Refund Policy explains the
            conditions under which a user may request a refund, how requests are processed, and exceptions that apply.
          </p>

          <h2 className="text-xl font-semibold mb-2">1. Overview</h2>
           <p className="mb-4">
         At E-Advocate Services, we strive to ensure that our platform serves users ethically and professionally. This Refund Policy explains the terms and conditions under which users (clients or advocates) may be eligible for a refund for services, subscriptions, or plans offered through the platform.
          </p>
         

          <h2 className="text-xl font-semibold mb-2">2. Scope of Refunds</h2>
          <p className='mb-4'>This policy applies to payments made through:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Subscription plans for premium features (e.g., visibility tools for advocates)</li>
            <li>One-time fees for booking consultations via the platform
.</li>
            <li>Verified profile upgrades or listings</li>
            <li>Note: E-Advocate Services does not charge any fee for basic account registration or free usage features.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">3. Eligibility Criteria for Refunds</h2>
          <p className="mb-4">Refunds may be considered under the following circumstances:</p>
            <h3 className='text-[18px] font-medium mb-2'>✅ Technical Errors</h3>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Payment deducted but service not activated
</li>
            <li>Duplicate payment due to system fault</li>
            <li>Failure in transaction processing within our system</li>
          </ul>

           <h3 className='text-[18px] font-medium mb-2'>✅ Service Not Delivered</h3>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>If a booked consultation is not fulfilled by the advocate and not rescheduled
</li>
            <li>Advocate was suspended or blocked due to BCI violation or platform fraud</li>
          </ul>


           <h3 className='text-[18px] font-medium mb-2'>✅ Unauthorized Transactions</h3>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>If your account was accessed and charged without your consent (subject to investigation and proof)
</li>
          
          </ul>





          <h2 className="text-xl font-semibold mb-2">4. Non-Refundable Situations</h2>
              <p className='mb-4'>Refunds will not be granted under the following:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>❌ User changes mind after payment</li>
            <li>❌ Services were successfully rendered (e.g., consultation completed)
</li>
            <li>❌ Complaints made beyond 7 days of payment
</li>
 <li>❌ Payments made outside the platform (e.g., direct cash or UPI to advocate)

</li>
 <li>❌ Subscription benefits used before refund request
</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">5. Refund Request Process</h2>
          <h3 className='text-[18px] font-medium mb-2'>To request a refund:</h3>
         

  <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Full Name</li>
            <li>Registered Email / Mobile
</li>
            <li>Payment Receipt or Transaction ID
</li>
 <li>Reason for refund request

</li>
 <li>Refunds must be requested within 7 days of the original transaction.
</li>

<li>Our team will verify the claim and respond within 5–7 working days.
</li>
          </ul>





          <h2 className="text-xl font-semibold mb-2">6. Refund Timeline</h2>
          <p className="mb-6">
           Approved refunds will be processed within 7–10 working days

Refunds will be returned to the original payment method (e.g., card, UPI, wallet)
          </p>

           <h2 className="text-xl font-semibold mb-2">7. Legal & Ethical Compliance</h2>
          <p className="mb-6">
           This policy is crafted to align with:
          </p>

            <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Consumer Protection Act, 2019
</li>
            <li>Bar Council of India Rules, including Rule 36 prohibiting legal service advertising
</li>
            <li>Ethical and transparent fee handling between clients and legal professionals

</li>
 

          </ul>



           <h2 className="text-xl font-semibold mb-2">8. Contact for Refunds</h2>
            <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>📧 Email: refunds@eadvocateservices.in
</li>
            <li>📞 Support: +91-XXXXXXXXXX
</li>
           

          </ul>
          <p className="mb-6">
          Would you like this content exported as a Word or PDF document for your website or policy page?
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

export default RefundPolicyPage;
