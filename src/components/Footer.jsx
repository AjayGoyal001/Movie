import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-red-500">MOVIES</h2>
          <p className="text-sm text-gray-400 mt-2">
            Your ultimate destination for movies, trailers, and entertainment.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Now Showing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                TV Shows
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="#">
              <FaFacebookF className="hover:text-white" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-white" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-white" />
            </a>
            <a href="#">
              <FaYoutube className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} MOVIES. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
