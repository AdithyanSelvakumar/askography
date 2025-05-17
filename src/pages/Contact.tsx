
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-medium mb-8">Get In Touch</h1>
              
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                Have a project in mind or want to discuss potential collaboration? Fill out the form, and I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">Email</h3>
                  <a href="mailto:adiskkunnil04@gmail.com" className="text-gray-700 hover:text-black transition-colors">
                    adiskkunnil04@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">Phone</h3>
                  <a href="tel:+919744351138" className="text-gray-700 hover:text-black transition-colors">
                    +91 9744351138
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/_adi._.sk_" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                      aria-label="Personal Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/askography" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                      aria-label="Professional Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-medium mb-4">Working Hours</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-medium mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
