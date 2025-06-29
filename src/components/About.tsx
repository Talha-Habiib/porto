import React from 'react';
import { Code, Palette, Zap, Globe, Sparkles, Star, Award, Target, Users, Coffee, Brain, Rocket, Heart } from 'lucide-react';
import SkillBar from './SkillBar';

const About: React.FC = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', percentage: 95 },
    { name: 'React/Next.js', percentage: 90 },
    { name: 'Node.js', percentage: 85 },
    { name: 'CSS/Tailwind', percentage: 92 },
    { name: 'Python', percentage: 80 },
    { name: 'UI/UX Design', percentage: 88 },
  ];

  const services = [
    {
      icon: <Code size={28} />,
      title: 'Frontend Development',
      description: 'Creating stunning, responsive interfaces with React, Next.js, and modern CSS frameworks.',
      color: 'from-blue-500 to-cyan-500',
      features: ['React/Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: <Globe size={28} />,
      title: 'Backend Development',
      description: 'Building robust APIs and server-side solutions with Node.js, Python, and cloud services.',
      color: 'from-emerald-500 to-teal-500',
      features: ['Node.js', 'Python', 'Database Design']
    },
    {
      icon: <Palette size={28} />,
      title: 'UI/UX Design',
      description: 'Designing user-centered experiences that are both beautiful and highly functional.',
      color: 'from-purple-500 to-pink-500',
      features: ['Figma', 'User Research', 'Prototyping']
    },
    {
      icon: <Zap size={28} />,
      title: 'Performance Optimization',
      description: 'Ensuring your applications are lightning-fast with SEO optimization and best practices.',
      color: 'from-orange-500 to-red-500',
      features: ['Core Web Vitals', 'SEO', 'Optimization']
    },
  ];

  const achievements = [
    {
      icon: <Target size={24} />,
      number: '50+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries'
    },
    {
      icon: <Award size={24} />,
      number: '5+',
      label: 'Years Experience',
      description: 'Professional development experience with cutting-edge technologies'
    },
    {
      icon: <Users size={24} />,
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Maintaining perfect client relationships and project success rate'
    },
  ];

  const highlights = [
    {
      title: 'Creative Problem Solver',
      description: 'I transform complex business challenges into elegant, scalable digital solutions that exceed expectations.',
      icon: <Brain size={24} />,
      color: 'from-blue-500 to-purple-500',
      accent: 'blue'
    },
    {
      title: 'Pixel-Perfect Craftsman',
      description: 'Every detail matters. I obsess over user experience, ensuring flawless execution from concept to launch.',
      icon: <Star size={24} />,
      color: 'from-purple-500 to-pink-500',
      accent: 'purple'
    },
    {
      title: 'Innovation Enthusiast',
      description: 'Always exploring cutting-edge technologies and methodologies to deliver future-ready solutions.',
      icon: <Rocket size={24} />,
      color: 'from-emerald-500 to-teal-500',
      accent: 'emerald'
    },
    {
      title: 'Client-First Mindset',
      description: 'Your success is my priority. I build lasting partnerships through transparent communication and exceptional results.',
      icon: <Heart size={24} />,
      color: 'from-orange-500 to-red-500',
      accent: 'orange'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-black transition-colors duration-500 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Geometric patterns */}
        <div className="absolute top-40 right-40 w-2 h-2 sm:w-4 sm:h-4 bg-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-40 w-1 h-1 sm:w-3 sm:h-3 bg-purple-400/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-60 left-60 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400/35 rounded-full animate-ping delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 sm:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles size={14} className="animate-pulse flex-shrink-0" />
            <span className="whitespace-nowrap">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Crafting Digital Excellence
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            I'm a passionate full-stack developer who transforms ideas into powerful digital experiences.
            With 5+ years of expertise, I combine technical excellence with creative vision to deliver
            solutions that drive real business results.
          </p>
        </div>

        {/* Enhanced Achievement Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 animate-fade-in-up delay-300">
          {achievements.map((achievement, index) => (
            <div key={achievement.label} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500 animate-gradient-x"></div>
              <div className="relative p-6 sm:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 sm:mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Redesigned Main Content - Side by Side Cards */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-20">
          {/* Skills Section - Enhanced Card Design */}
          <div className="group relative animate-slide-in-left">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative p-6 sm:p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <Code size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Technical Expertise
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Mastering modern web technologies
                  </p>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                ))}
              </div>
            </div>
          </div>

          {/* Personal Highlights - Enhanced Grid */}
          <div className="animate-slide-in-right">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl">
                <Sparkles size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  What Sets Me Apart
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Beyond just writing code
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((highlight, index) => (
                <div key={highlight.title} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${highlight.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300`}></div>
                  <div className="relative p-4 sm:p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 h-full">
                    <div className={`inline-flex p-2 sm:p-3 bg-gradient-to-r ${highlight.color} rounded-xl text-white mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {highlight.icon}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Services Section */}
        <div className="mb-12 sm:mb-16 animate-fade-in-up delay-500">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Services I Offer
              </span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              From concept to deployment, I provide comprehensive solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="group relative">
                <div className={`absolute -inset-2 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-75 transition duration-500`}></div>
                <div className="relative p-6 sm:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-full">
                  <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-r ${service.color} rounded-2xl text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                    {service.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="px-2 sm:px-3 py-1 text-xs font-medium bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fade-in-up delay-700">
          <div className="group relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-gradient-x"></div>
            <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="text-center sm:text-left flex-1">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Ready to bring your vision to life?
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Let's discuss how we can create something amazing together
                </p>
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group/btn relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 whitespace-nowrap overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Coffee size={16} className="sm:w-5 sm:h-5" />
                  Let's Talk
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;