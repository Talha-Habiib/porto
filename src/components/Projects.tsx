import React from 'react';
import { ExternalLink, Github, Star, Zap, Eye, Code2, Sparkles, Trophy, ArrowRight, Play } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and responsive design.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      category: 'Full Stack',
      impact: '300% increase in sales',
      duration: '3 months'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'A data visualization dashboard with machine learning insights, real-time charts, and predictive analytics for business intelligence.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'React', 'D3.js', 'TensorFlow'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      category: 'AI/ML',
      impact: '85% faster insights',
      duration: '4 months'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      category: 'Productivity',
      impact: '40% productivity boost',
      duration: '2 months'
    },
    {
      title: 'Social Media Platform',
      description: 'A full-featured social platform with real-time messaging, media sharing, and advanced privacy controls built for modern users.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'PostgreSQL', 'Socket.io', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      category: 'Social',
      impact: '10K+ active users',
      duration: '6 months'
    },
    {
      title: 'Digital Portfolio',
      description: 'A responsive portfolio website with smooth animations, dark mode toggle, and optimized performance for creative professionals.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      category: 'Portfolio',
      impact: '200% more inquiries',
      duration: '1 month'
    },
    {
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'API', 'Maps', 'Push Notifications'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      category: 'Mobile',
      impact: '50K+ downloads',
      duration: '2 months'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const stats = [
    { icon: <Trophy size={24} />, number: '50+', label: 'Projects Completed', color: 'from-yellow-400 to-orange-500' },
    { icon: <Eye size={24} />, number: '1M+', label: 'Total Views', color: 'from-blue-400 to-cyan-500' },
    { icon: <Code2 size={24} />, number: '15+', label: 'Technologies', color: 'from-purple-400 to-pink-500' },
    { icon: <Zap size={24} />, number: '99%', label: 'Performance Score', color: 'from-emerald-400 to-teal-500' }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-slate-900 transition-colors duration-500 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-gradient-x"></div>

        {/* Floating particles */}
        <div className="absolute top-40 right-40 w-2 h-2 sm:w-4 sm:h-4 bg-blue-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-60 left-60 w-1 h-1 sm:w-3 sm:h-3 bg-purple-400/50 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-80 left-80 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400/45 rounded-full animate-ping delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 sm:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles size={14} className="animate-pulse flex-shrink-0" />
            <span className="whitespace-nowrap">Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4 mb-8 sm:mb-12">
            Discover my latest work showcasing innovative solutions, cutting-edge technologies, and exceptional design.
            Each project represents a unique challenge solved with creativity and technical excellence.
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300`}></div>
                <div className="relative p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className={`inline-flex p-2 sm:p-3 bg-gradient-to-r ${stat.color} rounded-xl text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects - Enhanced Layout */}
        <div className="mb-12 sm:mb-20">
          <div className="flex items-center justify-between mb-8 sm:mb-12 animate-fade-in-up delay-300">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl">
                <Star size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Featured Work</h3>
                <p className="text-sm sm:text-base text-slate-300">My most impactful projects</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Play size={16} className="text-emerald-400" />
              <span className="text-sm text-slate-300">Live Demos Available</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} featured={true} />
            ))}
          </div>
        </div>

        {/* Other Projects - Enhanced Grid */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between mb-8 sm:mb-12 animate-fade-in-up delay-500">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Code2 size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">More Projects</h3>
                <p className="text-sm sm:text-base text-slate-300">Additional work & experiments</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index + featuredProjects.length} featured={false} />
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fade-in-up delay-700">
          <div className="group relative inline-block max-w-2xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-gradient-x"></div>
            <div className="relative p-6 sm:p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="text-center sm:text-left flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Want to see more of my work?
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-0">
                    Explore my complete portfolio on GitHub with detailed documentation and live demos
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden whitespace-nowrap"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Github size={18} className="sm:w-5 sm:h-5" />
                      View GitHub
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group/btn relative px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-2xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    <span className="flex items-center gap-2">
                      Let's Collaborate
                      <ArrowRight size={16} className="sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;