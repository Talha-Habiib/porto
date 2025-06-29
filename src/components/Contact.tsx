import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle, Calendar, Clock, CheckCircle, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'hello@example.com',
      description: 'Send me an email anytime',
      color: 'from-blue-500 to-cyan-500',
      href: 'mailto:hello@example.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call for urgent projects',
      color: 'from-purple-500 to-pink-500',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'San Francisco, CA',
      description: 'Available for local meetings',
      color: 'from-emerald-500 to-teal-500',
      href: '#'
    }
  ];

  const stats = [
    { icon: <Clock size={20} />, number: '< 24h', label: 'Response Time', color: 'from-blue-400 to-cyan-500' },
    { icon: <CheckCircle size={20} />, number: '100%', label: 'Project Success', color: 'from-emerald-400 to-teal-500' },
    { icon: <Users size={20} />, number: '50+', label: 'Happy Clients', color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            <MessageCircle size={14} className="animate-pulse" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something extraordinary together.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 animate-fade-in-up delay-200">
          {stats.map((stat, index) => (
            <div key={stat.label} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>
              <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className={`inline-flex p-3 bg-gradient-to-r ${stat.color} rounded-xl text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8 animate-fade-in-up delay-300">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.title}
                    href={method.href}
                    className="group relative block"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${method.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300`}></div>
                    <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-gradient-to-r ${method.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                          <p className="text-blue-300 font-medium">{method.value}</p>
                          <p className="text-sm text-slate-400">{method.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
                  { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  >
                    <div className="text-slate-300 group-hover:text-blue-400 transition-colors duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:hello@example.com"
                className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Mail size={18} />
                Quick Email
              </a>
              <button
                onClick={() => window.open('https://calendly.com', '_blank')}
                className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
              >
                <Calendar size={18} />
                Schedule Call
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-500">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-20"></div>
              <div className="relative p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm text-white placeholder-slate-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm text-white placeholder-slate-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm resize-none text-white placeholder-slate-400"
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Send size={20} />
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/10 animate-fade-in-up delay-700">
          <p className="text-slate-400">
            © 2025 Creative Developer. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;