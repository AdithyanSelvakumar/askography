
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-serif font-semibold">
            Adithyan S Kumar
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" current={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/gallery" current={location.pathname.startsWith("/gallery")}>Gallery</NavLink>
            <NavLink to="/about" current={location.pathname === "/about"}>About</NavLink>
          </div>
          
          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink to="/" current={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/gallery" current={location.pathname.startsWith("/gallery")}>Gallery</NavLink>
            <NavLink to="/about" current={location.pathname === "/about"}>About</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  current: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, current, children }) => {
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors hover:text-black/70 ${
        current 
        ? 'text-primary border-b-2 border-primary pb-1' 
        : 'text-primary/80'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
