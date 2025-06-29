import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navTextColor = scrolled
    ? theme === 'light'
      ? 'text-black'
      : 'text-white/80'
    : 'text-white';

  const iconColor = scrolled
    ? theme === 'light'
      ? 'text-black'
      : 'text-white'
    : 'text-white';

  const backgroundClass = scrolled
    ? 'bg-white/80 dark:bg-gray-900/20 border-b border-black/10 dark:border-white/20'
    : 'bg-transparent';

  const menuBackgroundClass = theme === 'light'
    ? 'bg-white/90 text-black border border-black/10 bg-transparent'
    : 'bg-white/10 text-white border border-white/20';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${backgroundClass}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="text-xl sm:text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Talha Habib
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`${navTextColor} hover:text-blue-500 transition-colors font-medium text-sm lg:text-base`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20 hover:bg-black/20 dark:hover:bg-white/20 transition-all"
            >
              {theme === 'light' ? (
                <Moon size={18} className={iconColor} />
              ) : (
                <Sun size={18} className={iconColor} />
              )}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20"
            >
              {theme === 'light' ? (
                <center><Moon size={18} className={iconColor} /></center>
              ) : (
                <center><Sun size={18} className={iconColor} /></center>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20"
            >
              {isMenuOpen ? (
                <center><X size={20} className={iconColor} /></center>
              ) : (
                <center>
                  <Menu size={20} className={iconColor} />
                </center>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 p-4 rounded-2xl ${menuBackgroundClass} backdrop-blur-xl`}>
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left hover:text-blue-500 transition-colors font-medium py-2"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
