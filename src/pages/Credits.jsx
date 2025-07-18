import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const apiRequests = [
  { department: 'NIC', status: 'Requested', purpose: 'Data linking & verification', link: 'https://www.nic.in' },
  { department: 'eCourts', status: 'Requested', purpose: 'Case search & listing', link: 'https://ecourts.gov.in' },
  { department: 'BCI', status: 'Requested', purpose: 'Advocate verification', link: 'https://barcouncilofindia.org' },
  { department: 'RTI', status: 'Referenced', purpose: 'Public legal documents', link: 'https://rti.gov.in' },
  { department: 'MeitY', status: 'Referenced', purpose: 'Digital policy compliance', link: 'https://www.meity.gov.in' },
];

const CreditsPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Credits & Acknowledgements</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-10 text-center">
          E‑Advocate Services acknowledges and extends its sincere gratitude to the following official institutions, platforms, 
          and government departments that have enabled legal digitalization through their API services, data accessibility, and governance frameworks.
        </p>

        {/* Intro paragraph */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow mb-8 text-left">
          <p className="text-gray-700 dark:text-gray-300">
            As per our commitment to ethical legal tech development under BCI guidelines and Government of India norms, 
            we list detailed credits and acknowledgments to every department whose services are integrated or requested.
          </p>
        </section>

        {/* Acknowledgements */}
        <section className="space-y-8 text-left">

          <div>
            <h2 className="text-xl font-semibold mb-2">1️⃣ National Informatics Centre (NIC)</h2>
            <p><span className="font-semibold">Role:</span> Primary government IT partner for backend infrastructure, digital security, and public APIs.</p>
            <p><span className="font-semibold">Credit Purpose:</span> Officially approached NIC for secure integration and authentication for access to selected judiciary-related APIs and citizen service modules.</p>
            <p className="italic mt-2 text-green-700 dark:text-green-400">
              "We thank the National Informatics Centre (NIC) for its foundational contributions to e-Governance and its technical guidance in ensuring the ethical and secure use of public digital services in our application."
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2️⃣ eCourts (ecourts.gov.in)</h2>
            <p><span className="font-semibold">Role:</span> Official digital platform for Indian courts case status, CNR number lookups, daily orders, and judgments.</p>
            <p><span className="font-semibold">Credit Purpose:</span> API access requested for real-time case search, eFiling status, and court information linked to advocate profiles.</p>
            <p className="italic mt-2 text-green-700 dark:text-green-400">
              "E‑Advocate Services acknowledges the open data initiatives and transparency drive of the eCourts project under the Department of Justice, Government of India.
              We respect their vision of making legal data accessible for informed citizen use, and our integration efforts strictly follow their guidelines."
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3️⃣ Bar Council of India (BCI)</h2>
            <p><span className="font-semibold">Role:</span> Statutory regulatory body of legal practice in India.</p>
            <p><span className="font-semibold">Credit Purpose:</span> Sought permission to authenticate advocates using BCI roll numbers and State Bar Council verification mechanisms.</p>
            <p className="italic mt-2 text-green-700 dark:text-green-400">
              "We extend gratitude to the Bar Council of India for upholding the dignity and discipline of the legal profession.
              All advocate verifications on our platform are in line with BCI Rules and no promotion, ranking, or solicitation is allowed."
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4️⃣ Right to Information (RTI)</h2>
            <p><span className="font-semibold">Role:</span> Enabler of public transparency in government data and services.</p>
            <p><span className="font-semibold">Credit Purpose:</span> RTI APIs and proactive disclosures are referenced for verification of public legal documents.</p>
            <p className="italic mt-2 text-green-700 dark:text-green-400">
              "We honor the spirit of the RTI Act, 2005, which empowers Indian citizens to access public records.
              We use such data responsibly, only for enabling transparency and without infringing on privacy."
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5️⃣ Digital India / Ministry of Electronics and IT (MeitY)</h2>
            <p><span className="font-semibold">Role:</span> Parent program enabling digital transformation in legal services.</p>
            <p><span className="font-semibold">Credit Purpose:</span> E‑Advocate Services aligns itself with Digital India’s goals for citizen-centric legal access.</p>
            <p className="italic mt-2 text-green-700 dark:text-green-400">
              "We thank MeitY and the Digital India Mission for pioneering legal tech evolution and for empowering startups working on inclusive justice platforms."
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6️⃣ Government of India – Department of Justice</h2>
            <p><span className="font-semibold">Role:</span> Key policymaker behind judiciary reform and legal aid.</p>
            <p><span className="font-semibold">Credit Purpose:</span> Acknowledgement for alignment with ongoing projects like Tele Law and Nyaya Bandhu.</p>
            <p className="italic mt-2 text-green-700 dark:text-green-400">
              "E‑Advocate Services expresses its deep appreciation to the Department of Justice, Ministry of Law and Justice, for leading reforms in judicial access and technology enablement."
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow mt-10 text-left">
          <h2 className="text-2xl font-bold mb-2">✅ Disclaimer</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Integration of APIs from Government departments is subject to official approvals, data usage agreements, and non-commercial, ethical practices.
            E‑Advocate Services does not claim ownership of government data and acts as a responsible digital facilitator for public benefit, without breaching BCI norms or engaging in legal solicitation.
          </p>
        </section>

        {/* API Request Status */}
        <section className="mt-10 text-left">
          <h2 className="text-2xl font-bold mb-4">📝 API Request Status & Transparency</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-800">
                  <th className="p-3 text-left">Department</th>
                  <th className="p-3 text-left">API Request Status</th>
                  <th className="p-3 text-left">Purpose</th>
                  <th className="p-3 text-left">Link</th>
                </tr>
              </thead>
              <tbody>
                {apiRequests.map((api, idx) => (
                  <tr key={idx} className="border-b border-gray-300 dark:border-gray-700">
                    <td className="p-3">{api.department}</td>
                    <td className="p-3">{api.status}</td>
                    <td className="p-3">{api.purpose}</td>
                    <td className="p-3">
                      <a href={api.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">
                        {api.link}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CreditsPage;
