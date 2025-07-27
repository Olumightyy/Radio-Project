import React from "react";

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-8">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex gap-4">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M..." /></svg>
        </a>
        {/* Add more social icons as needed */}
      </div>
      <div className="text-gray-700 dark:text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} RadioLive. All rights reserved.
      </div>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="rounded px-2 py-1 border border-gray-300 dark:bg-gray-700 dark:text-white"
          aria-label="Newsletter email"
        />
        <button type="submit" className="bg-primary text-white px-3 py-1 rounded">Subscribe</button>
      </form>
    </div>
  </footer>
);

export default Footer;
