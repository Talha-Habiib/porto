import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code, Palette } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-slate-900 dark:to-black"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float delay-2000"></div>

        {/* Smaller accent orbs */}
        <div className="absolute top-20 right-20 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-r from-orange-400/40 to-red-400/40 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 md:w-40 md:h-40 bg-gradient-to-r from-violet-400/40 to-purple-400/40 rounded-full blur-2xl animate-pulse delay-1000"></div>

        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-gradient-x"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1 mt-16">
            <div className="animate-slide-in-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles size={14} className="animate-pulse flex-shrink-0" />
                <span className="whitespace-nowrap">Available for new projects</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 pb-2 leading-snug">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x block">
                  SOFTWARE
                </span>
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x block">
                  ENGINEER
                </span>
              </h1>

              {/* Paragraph */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I make technology that
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text font-semibold">
                  {' '}work for you.
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 animate-slide-in-left delay-300">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform relative overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10">Let's Work Together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 animate-slide-in-left delay-500">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/10"
              >
                <Github size={20} className="sm:w-6 sm:h-6 text-white group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/10"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6 text-white group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="group p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/10"
              >
                <Mail size={20} className="sm:w-6 sm:h-6 text-white group-hover:text-emerald-400 transition-colors" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="group p-3 sm:p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                title="Download Resume"
              >
                <Download size={20} className="sm:w-6 sm:h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden sm:flex justify-center lg:justify-end animate-slide-in-right delay-700 order-1 lg:order-2 mt-16 lg:mt-24">
            <div className="relative">

              {/* Main decorative background */}
              <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl animate-pulse"></div>

              {/* Secondary glow effect */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-3xl blur-xl animate-glow"></div>

              {/* Image Container */}
              <div className="relative z-10 p-2 sm:p-3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 relative">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Creative Developer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-purple-900/30"></div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 p-3 sm:p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl border border-blue-400/30 shadow-lg animate-float">
                <Code size={20} className="sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 p-3 sm:p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-purple-400/30 shadow-lg animate-float delay-1000">
                <Palette size={20} className="sm:w-6 sm:h-6 text-purple-400" />
              </div>
              <div className="absolute top-1/2 -right-8 sm:-right-12 p-2 sm:p-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl border border-emerald-400/30 shadow-lg animate-float delay-2000">
                <Sparkles size={16} className="sm:w-5 sm:h-5 text-emerald-400" />
              </div>

              {/* Orbiting Dots */}
              <div className="absolute top-6 sm:top-8 left-6 sm:left-8 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping delay-1000"></div>
            </div>
          </div>


        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:block absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up delay-1000 z-50">
          <button
            onClick={scrollToAbout}
            className="group animate-bounce p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ArrowDown size={20} className="sm:w-6 sm:h-6 text-white group-hover:text-blue-400 transition-colors" />
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;