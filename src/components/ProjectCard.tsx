import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Star, Calendar, TrendingUp, Zap } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    featured?: boolean;
    category?: string;
    impact?: string;
    duration?: string;
  };
  index: number;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, featured = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`project-${index}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      id={`project-${index}`}
      className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      {/* Enhanced Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>

      <div className={`relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group-hover:scale-105 group-hover:-translate-y-2 ${featured ? 'lg:col-span-1' : ''
        }`}>

        {/* Enhanced Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-bold text-black shadow-lg">
              <Star size={12} className="animate-pulse" />
              <span className="hidden sm:inline">Featured Project</span>
              <span className="sm:hidden">Featured</span>
            </div>
          </div>
        )}

        {/* Category Badge */}
        {project.category && (
          <div className="absolute top-4 right-4 z-20">
            <div className="px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
              {project.category}
            </div>
          </div>
        )}

        {/* Enhanced Image Section */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${featured ? 'h-56 sm:h-72' : 'h-48 sm:h-56'
              }`}
          />

          {/* Multi-layered Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Enhanced Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all hover:scale-110 border border-white/30"
              title="View Live Demo"
            >
              <ExternalLink size={16} className="text-white group-hover/btn:text-blue-300 transition-colors" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all hover:scale-110 border border-white/30"
              title="View Source Code"
            >
              <Github size={16} className="text-white group-hover/btn:text-emerald-300 transition-colors" />
            </a>
          </div>

          {/* Enhanced Project Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed line-clamp-2 mb-3">
                {project.description}
              </p>

              {/* Impact & Duration */}
              {(project.impact || project.duration) && (
                <div className="flex items-center gap-4 text-xs text-gray-300">
                  {project.impact && (
                    <div className="flex items-center gap-1">
                      <TrendingUp size={12} className="text-emerald-400" />
                      <span>{project.impact}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-blue-400" />
                      <span>{project.duration}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 flex-1">
              {project.title}
            </h3>
            {project.impact && (
              <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/20 rounded-full border border-emerald-400/30">
                <Zap size={12} className="text-emerald-400" />
                <span className="text-xs text-emerald-300 font-medium whitespace-nowrap">{project.impact}</span>
              </div>
            )}
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3 text-sm sm:text-base">
            {project.description}
          </p>

          {/* Enhanced Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 ${tagIndex % 4 === 0 ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30 hover:bg-blue-500/30' :
                    tagIndex % 4 === 1 ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30 hover:bg-purple-500/30' :
                      tagIndex % 4 === 2 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500/30' :
                        'bg-orange-500/20 text-orange-300 border border-orange-400/30 hover:bg-orange-500/30'
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm"
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 text-sm"
            >
              <Github size={14} />
              <span className="hidden sm:inline">Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;