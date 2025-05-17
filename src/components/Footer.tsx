
import React from 'react';
import { Facebook, Instagram, Linkedin, WhatsApp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-serif font-semibold">
              Adithyan S Kumar
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Capturing life's finest moments through photography and creative color grading.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-serif mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-medium">Email:</span> adiskkunnil04@gmail.com
              </li>
              <li className="text-gray-400">
                <span className="font-medium">Phone:</span> +91 9744351138
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.instagram.com/_adi._.sk_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Personal Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/askography" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Professional Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919744351138" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsApp className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Adithyan S Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
