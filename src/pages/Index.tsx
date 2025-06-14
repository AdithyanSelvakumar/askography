
import React from 'react';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ErrorBoundary from '@/components/ErrorBoundary';
import LazyImage from '@/components/LazyImage';

// Sample data for the home page
const categories = [
  { 
    name: 'Nature', 
    image: '/images/nature/nwIMG_8580.jpg',
    link: '/gallery#nature',
  },
  { 
    name: 'Portraits', 
    image: '/images/portraits/pxIMG_9542x%20(2).jpg',
    link: '/gallery#portraits',
  },
  { 
    name: 'Events', 
    image: '/images/events/eIMG_8303x.jpg',
    link: '/gallery#events',
  },
  { 
    name: 'Random', 
    image: '/images/random/rIMG_2170%20(1).jpg',
    link: '/gallery#random',
  }
];

const Index: React.FC = () => {
  return (
    <ErrorBoundary>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero 
          title="Adithyan S Kumar"
          description="Welcome to my photography portfolio - where I transform everyday scenes into memorable visual stories through my photography skills."
          imageSrc="/backDrop.jpg"
          altText="Professional camera on tripod at sunset"
        />
        
        {/* About Preview Section */}
        <section className="py-20 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">About Me</h2>
                <p className="mb-6 text-gray-700">
                  I'm Adithyan S Kumar, an intermediate photographer with a passion for capturing the beauty in everyday moments.
                  With an eye for composition and detail, I transform ordinary scenes into compelling visual stories.
                </p>
                <p className="mb-8 text-gray-700">
                  I'm particularly interested in color grading techniques that enhance the mood and atmosphere of my photographs,
                  whether it's landscapes, portraits, or candid moments.
                </p>
                <Link to="/about">
                  <Button 
                    variant="outline" 
                    className="bg-black text-white border-black rounded-md"
                  >
                    Learn More About Me
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <LazyImage 
                  src="/adisk.jpg" 
                  alt="Adithyan Selvakumar"
                  className="w-full shadow-lg rounded-lg"
                />
                <div className="absolute inset-0 border-8 border-white transform translate-x-4 translate-y-4 -z-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Preview */}
        <section className="py-20 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Featured Galleries</h2>
              <p className="max-w-2xl mx-auto text-gray-700">
                Explore my collection of photography across different themes and discover the stories behind each image.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <Link 
                  key={index} 
                  to={category.link}
                  className="group block relative overflow-hidden h-80 rounded-lg shadow-md"
                >
                  <LazyImage
                    src={category.image}
                    alt={`${category.name} photography`}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    onError={() => console.warn(`Failed to load featured gallery image: ${category.image}`)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-serif">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/gallery">
                <Button 
                  className="bg-black text-white hover:bg-black/80 rounded-none"
                >
                  View All Galleries
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* About CTA */}
        <section className="py-20 px-4 md:px-6 bg-black text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">About My Photography</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Passionate about photography and color grading. Learn more about my journey and approach to visual storytelling.
            </p>
            <Link to="/about">
              <Button 
                variant="outline" 
                className="bg-white text-black border-white rounded-md px-8"
              >
                Learn About Me
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </ErrorBoundary>
  );
};

export default Index;
