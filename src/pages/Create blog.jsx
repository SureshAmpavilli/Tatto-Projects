import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CreateBlogPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <main className="max-w-6xl mx-auto py-12 px-4 space-y-10">
        {/* Page title & purpose */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">✅ Create Blog</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            This page allows verified advocates and admin-approved legal professionals to share legal awareness, case studies,
            law updates, and educational content — not promotional or client-soliciting content, in compliance with BCI norms.
          </p>
        </section>

        {/* Who can access */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🔐 Who Can Access This Page?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Only verified advocates (registered on the platform)</li>
            <li>✅ Admin-approved contributors (e.g., retired judges, legal scholars)</li>
            <li>❌ Clients cannot post blogs</li>
          </ul>
        </section>

        {/* BCI compliance */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
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
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">📦 Create Blog Form</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold">📝 Title:</label>
              <input type="text" placeholder="Enter blog title" className="w-full mt-1 p-2 border rounded dark:bg-gray-800" />
            </div>
            <div>
              <label className="block font-semibold">🗂️ Category:</label>
              <select className="w-full mt-1 p-2 border rounded dark:bg-gray-800">
                <option>Criminal Law</option>
                <option>Civil Law</option>
                <option>Family Law</option>
                <option>Tax Law</option>
                <option>Others</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold">📑 Tags:</label>
              <input type="text" placeholder="#bail, #rights, #ipc" className="w-full mt-1 p-2 border rounded dark:bg-gray-800" />
            </div>
            <div>
              <label className="block font-semibold">🖋️ Author:</label>
              <input type="text" value="Auto-filled with Advocate Name" disabled className="w-full mt-1 p-2 border rounded bg-gray-200 dark:bg-gray-700" />
            </div>
            <div>
              <label className="block font-semibold">🖼️ Cover Image:</label>
              <input type="file" className="mt-1" />
            </div>
            <div>
              <label className="block font-semibold">📄 Blog Body:</label>
              <textarea rows="6" placeholder="Write your blog content..." className="w-full mt-1 p-2 border rounded dark:bg-gray-800"></textarea>
              <p className="text-sm text-gray-500 mt-1">Rich Text Editor – Bold, Italic, Links, etc.</p>
            </div>
            <div>
              <label className="block font-semibold">📅 Publish Date:</label>
              <input type="date" className="w-full mt-1 p-2 border rounded dark:bg-gray-800" />
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600">⏱️ Draft</button>
              <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">Submit for Review</button>
              <button className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">Save</button>
            </div>
          </div>
        </section>

        {/* Functionality options */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
          <h2 className="text-2xl font-bold mb-4">🔧 Functionality Options</h2>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-800">
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
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
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
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
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

      <Footer />
    </div>
  );
};

export default CreateBlogPage;
