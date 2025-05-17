
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

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
                  I'm Adithyan S Kumar, a passionate photographer with a keen eye for detail and composition. My journey in photography began when I discovered the power of visual storytelling.
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
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                    alt="Adithyan S Kumar, Photographer" 
                    className="rounded-lg shadow-lg max-w-full"
                  />
                  <div className="absolute inset-0 border-8 border-white transform translate-x-4 translate-y-4 -z-10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* My Journey Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-center">
              My Photography Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6">
                My passion for photography began in my early teens when I received my first camera as a gift. What started as a casual hobby quickly evolved into a deep passion for capturing moments that tell compelling stories.
              </p>
              <p className="text-lg mb-6">
                Over the years, I've refined my skills through formal education, workshops, and countless hours in the field. I believe that great photography comes from a combination of technical knowledge, artistic vision, and genuine connection with the subject.
              </p>
              <p className="text-lg mb-6">
                I'm particularly drawn to the way photography can freeze fleeting moments in time, preserving emotions and memories that might otherwise fade. Whether I'm shooting landscapes that showcase the beauty of our world, portraits that reveal the essence of a person, or events that capture the energy of special occasions, my goal remains the same – to create images that resonate and inspire.
              </p>
            </div>
          </div>
        </section>
        
        {/* Specializations Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12 text-center">
              My Specializations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-medium mb-4">Nature Photography</h3>
                <p className="text-gray-700 mb-4">
                  Capturing the raw beauty of landscapes, wildlife, and natural phenomena. I specialize in creating images that showcase the majesty and detail of our natural world.
                </p>
                <Separator className="my-4" />
                <ul className="text-gray-700 space-y-2">
                  <li>• Landscape Photography</li>
                  <li>• Wildlife Photography</li>
                  <li>• Macro Nature Photography</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-medium mb-4">Portrait Photography</h3>
                <p className="text-gray-700 mb-4">
                  Creating expressive portraits that reveal the character and emotion of individuals. From formal headshots to environmental portraits, I focus on authentic representation.
                </p>
                <Separator className="my-4" />
                <ul className="text-gray-700 space-y-2">
                  <li>• Individual Portraits</li>
                  <li>• Family Portraits</li>
                  <li>• Environmental Portraits</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-medium mb-4">Event Photography</h3>
                <p className="text-gray-700 mb-4">
                  Documenting special occasions and events with attention to detail, candid moments, and the overall atmosphere that makes each event unique.
                </p>
                <Separator className="my-4" />
                <ul className="text-gray-700 space-y-2">
                  <li>• Wedding Photography</li>
                  <li>• Corporate Events</li>
                  <li>• Cultural Celebrations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Equipment Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-center">
              My Approach
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6">
                I believe that exceptional photography is about more than just technical perfection—it's about emotion, storytelling, and creating a connection with the viewer. My approach combines technical expertise with artistic vision to create images that are both visually stunning and emotionally compelling.
              </p>
              
              <p className="text-lg mb-6">
                When working with clients, I prioritize understanding their vision and needs while providing guidance based on my expertise. This collaborative approach ensures that the final images exceed expectations and truly capture what matters most.
              </p>
              
              <p className="text-lg mb-6">
                Whether I'm shooting in a controlled studio environment or adapting to the unpredictable conditions of outdoor locations, I bring the same level of dedication, creativity, and attention to detail to every project.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
