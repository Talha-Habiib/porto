import React from 'react';
import { Star, Quote, User, Building2, Award, TrendingUp, Users, CheckCircle } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    rating: number;
    text: string;
    project: string;
    result: string;
    featured: boolean;
}

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO',
            company: 'TechFlow Solutions',
            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 5,
            text: 'Working with this developer was an absolute game-changer for our business. The e-commerce platform they built exceeded all our expectations. The attention to detail, performance optimization, and user experience are simply outstanding.',
            project: 'E-Commerce Platform',
            result: '300% increase in sales',
            featured: true
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'CTO',
            company: 'DataVision Analytics',
            image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 5,
            text: 'The AI-powered analytics dashboard transformed how we make business decisions. The real-time insights and predictive analytics have given us a competitive edge. Exceptional technical skills and professional communication throughout.',
            project: 'AI Analytics Dashboard',
            result: '85% faster decision making',
            featured: true
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Product Manager',
            company: 'StartupBoost',
            image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 5,
            text: 'Outstanding work on our task management platform. The developer understood our vision perfectly and delivered a solution that our team loves using. The collaborative features and intuitive design have boosted our productivity significantly.',
            project: 'Task Management App',
            result: '40% productivity increase',
            featured: false
        },
        {
            id: 4,
            name: 'David Park',
            role: 'Founder',
            company: 'Creative Studios',
            image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 5,
            text: 'The portfolio website created for our agency is absolutely stunning. It perfectly captures our brand identity and has significantly increased client inquiries. The smooth animations and performance optimization are top-notch.',
            project: 'Portfolio Website',
            result: '200% more inquiries',
            featured: false
        },
        {
            id: 5,
            name: 'Lisa Thompson',
            role: 'Marketing Director',
            company: 'SocialConnect',
            image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 5,
            text: 'The social media platform development was flawless from start to finish. The real-time features, security implementation, and scalability considerations show true expertise. Our user engagement has skyrocketed.',
            project: 'Social Platform',
            result: '10K+ active users',
            featured: false
        },
        {
            id: 6,
            name: 'James Wilson',
            role: 'App Entrepreneur',
            company: 'WeatherTech',
            image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 5,
            text: 'The weather app exceeded all expectations. Beautiful design, accurate forecasting, and smooth performance across all devices. The personalized alerts feature has been particularly well-received by users.',
            project: 'Weather Application',
            result: '50K+ downloads',
            featured: false
        }
    ];

    const featuredTestimonials = testimonials.filter(t => t.featured);
    const regularTestimonials = testimonials.filter(t => !t.featured);

    const stats = [
        { icon: <Users size={24} />, number: '98%', label: 'Client Satisfaction', color: 'from-blue-400 to-cyan-500' },
        { icon: <Award size={24} />, number: '45+', label: 'Happy Clients', color: 'from-purple-400 to-pink-500' },
        { icon: <TrendingUp size={24} />, number: '100%', label: 'Project Success', color: 'from-emerald-400 to-teal-500' },
        { icon: <CheckCircle size={24} />, number: '24/7', label: 'Support Available', color: 'from-yellow-400 to-orange-500' }
    ];

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                size={16}
                className={`${index < rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-400'
                    } transition-colors duration-200`}
            />
        ));
    };

    const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number; featured?: boolean }> = ({
        testimonial,
        index,
        featured = false
    }) => (
        <div
            className={`group relative animate-fade-in-up ${featured ? 'lg:col-span-1' : ''}`}
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className={`relative ${featured ? 'p-8' : 'p-6'} bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-500 h-full`}>
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                    <Quote size={20} className="text-blue-300" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm text-slate-300">({testimonial.rating}.0)</span>
                </div>

                {/* Testimonial Text */}
                <blockquote className={`${featured ? 'text-lg' : 'text-base'} text-slate-200 leading-relaxed mb-6 italic`}>
                    "{testimonial.text}"
                </blockquote>

                {/* Project & Result */}
                <div className="flex flex-wrap gap-3 mb-6">
                    <div className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                        <span className="text-xs text-blue-300 font-medium">{testimonial.project}</span>
                    </div>
                    <div className="px-3 py-1 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
                        <span className="text-xs text-emerald-300 font-medium">{testimonial.result}</span>
                    </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-50"></div>
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="relative w-12 h-12 rounded-full object-cover border-2 border-white/20"
                        />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-white font-semibold text-base">{testimonial.name}</h4>
                        <p className="text-slate-300 text-sm">{testimonial.role}</p>
                        <div className="flex items-center gap-1 mt-1">
                            <Building2 size={12} className="text-slate-400" />
                            <p className="text-slate-400 text-xs">{testimonial.company}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-slate-900 transition-colors duration-500 relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-40 right-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-40 left-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-float delay-1000"></div>
                <div className="absolute top-1/3 left-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

                {/* Animated grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-gradient-x"></div>

                {/* Floating particles */}
                <div className="absolute top-60 right-60 w-2 h-2 sm:w-4 sm:h-4 bg-purple-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-80 left-80 w-1 h-1 sm:w-3 sm:h-3 bg-blue-400/50 rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-96 right-96 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400/45 rounded-full animate-ping delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        <Quote size={14} className="animate-pulse flex-shrink-0" />
                        <span className="whitespace-nowrap">Client Testimonials</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            What Clients Say
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4 mb-8 sm:mb-12">
                        Don't just take my word for it. Here's what clients and collaborators have to say about
                        working with me and the results we've achieved together.
                    </p>

                    {/* Client Satisfaction Stats */}
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

                {/* Featured Testimonials */}
                <div className="mb-12 sm:mb-20">
                    <div className="flex items-center justify-between mb-8 sm:mb-12 animate-fade-in-up delay-300">
                        <div className="flex items-center gap-3">
                            <div className="p-2 sm:p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl">
                                <Star size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Featured Reviews</h3>
                                <p className="text-sm sm:text-base text-slate-300">Top client experiences</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {featuredTestimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                                index={index}
                                featured={true}
                            />
                        ))}
                    </div>
                </div>

                {/* Regular Testimonials */}
                <div className="mb-12 sm:mb-16">
                    <div className="flex items-center justify-between mb-8 sm:mb-12 animate-fade-in-up delay-500">
                        <div className="flex items-center gap-3">
                            <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                                <Users size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">More Reviews</h3>
                                <p className="text-sm sm:text-base text-slate-300">Additional client feedback</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {regularTestimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                                index={index + featuredTestimonials.length}
                            />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center animate-fade-in-up delay-700">
                    <div className="group relative inline-block max-w-2xl mx-auto">
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-gradient-x"></div>
                        <div className="relative p-6 sm:p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
                            <div className="text-center">
                                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    Ready to Join These Happy Clients?
                                </h4>
                                <p className="text-sm sm:text-base text-slate-300 mb-6">
                                    Let's discuss your project and create something amazing together
                                </p>
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group/btn relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <User size={18} className="sm:w-5 sm:h-5" />
                                        Start Your Project
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;