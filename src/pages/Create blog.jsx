import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogPosts = [
  {
    title: 'Understanding Divorce Laws in India',
    date: 'July 5, 2025',
    author: 'Adv. Sneha Iyer',
    excerpt: 'Get a simple explanation of divorce procedures, types, and timelines under Indian law.',
    image: 'https://source.unsplash.com/600x400/?law,divorce',
    link: '/blog/divorce-laws-india',
  },
  {
    title: 'How to Draft a Will in India',
    date: 'June 20, 2025',
    author: 'Adv. Raj Malhotra',
    excerpt: 'A step-by-step guide to writing a legally valid will and ensuring a smooth inheritance process.',
    image: 'https://source.unsplash.com/600x400/?will,law,document',
    link: '/blog/how-to-draft-will',
  },
  {
    title: 'Your Rights When Arrested',
    date: 'June 10, 2025',
    author: 'Adv. Kavita Desai',
    excerpt: 'Know your fundamental legal rights during arrest, detention, and interrogation.',
    image: 'https://source.unsplash.com/600x400/?law,arrest',
    link: '/blog/rights-during-arrest',
  },
];

const BlogPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <Header />

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Legal Blog & Insights</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-10">
            Explore legal guides, client rights, and practical tips from verified Indian advocates.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <a
                key={idx}
                href={post.link}
                className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white dark:bg-gray-900"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-5 text-left">
                  <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {post.date} · By {post.author}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{post.excerpt}</p>
                  <span className="text-blue-600 dark:text-blue-400 text-sm mt-3 inline-block">
                    Read More →
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
            Want to contribute? Email us your blog idea at{' '}
            <a href="mailto:editor@advocateservices.com" className="underline">
              editor@advocateservices.com
            </a>
            <br />
            &copy; {new Date().getFullYear()} AdvocateServices.com
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
