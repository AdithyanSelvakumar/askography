
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { PhoneCall, Mail, Instagram, MessageCirclePlus } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">
                  About Me
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                  I'm Adithyan S Kumar, an intermediate photographer with a passion for photography. I've developed my skills in capturing compelling visual stories.
                </p>
                <div className="flex items-center space-x-4 mt-8">
                  <a 
                    href="https://www.instagram.com/_adi._.sk_" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    Personal Instagram
                  </a>
                  <span className="text-gray-300">|</span>
                  <a 
                    href="https://www.instagram.com/askography" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    Professional Instagram
                  </a>
                  <span className="text-gray-300">|</span>
                  <a 
                    href="https://wa.me/919744351138" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <img 
                    src="src/pages/images/adisk.jpg" 
                    alt="Adithyan S Kumar, Photographer" 
                    className="rounded-lg shadow-lg max-w-full"
                  />
                  <div className="absolute inset-0 border-8 border-white transform translate-x-4 translate-y-4 -z-10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills & Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Skills Column */}
              <div>
                <h2 className="text-3xl font-serif font-medium mb-8">My Skills</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-4">Editing Software</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        Adobe Photoshop
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        Adobe Lightroom
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        Snapseed
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-4">Technical Skills</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        Color Grading
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        Composition
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        Photo Editing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Contact Information Column */}
              <div>
                <h2 className="text-3xl font-serif font-medium mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <PhoneCall className="w-5 h-5 text-black mt-1" />
                    <div>
                      <h3 className="text-xl font-medium mb-1">Phone</h3>
                      <p className="text-gray-700">+91 9744351138</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-black mt-1" />
                    <div>
                      <h3 className="text-xl font-medium mb-1">Email</h3>
                      <a href="mailto:adiskkunnil04@gmail.com" className="text-gray-700 hover:underline">
                        adiskkunnil04@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MessageCirclePlus className="w-5 h-5 text-black mt-1" />
                    <div>
                      <h3 className="text-xl font-medium mb-1">WhatsApp</h3>
                      <a href="https://wa.me/919744351138" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
                        +91 9744351138
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Instagram className="w-5 h-5 text-black mt-1" />
                    <div>
                      <h3 className="text-xl font-medium mb-1">Social Media</h3>
                      <div className="space-y-1">
                        <a 
                          href="https://www.instagram.com/_adi._.sk_" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-gray-700 hover:underline"
                        >
                          Personal: @_adi._.sk_
                        </a>
                        <a 
                          href="https://www.instagram.com/askography" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-gray-700 hover:underline"
                        >
                          Professional: @askography
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
