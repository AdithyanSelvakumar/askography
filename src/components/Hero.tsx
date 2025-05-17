
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  altText?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  description, 
  imageSrc,
  showButton = true,
  buttonText = "Explore Portfolio",
  buttonLink = "/gallery",
  altText = "Hero image"
}) => {
  return (
    <div className="relative w-full h-screen">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imageSrc} 
          alt={altText}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
          {title}
        </h1>
        
        {subtitle && (
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 font-serif max-w-3xl">
            {subtitle}
          </h2>
        )}
        
        {description && (
          <p className="text-base md:text-lg max-w-2xl mb-8">
            {description}
          </p>
        )}
        
        {showButton && (
          <div>
            <Link to={buttonLink}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white hover:bg-white hover:text-black text-white transition-colors text-lg rounded-none px-8 py-6"
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
