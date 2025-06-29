import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  skill: {
    name: string;
    percentage: number;
  };
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            animatePercentage();
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`skill-${skill.name}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [skill.name, delay]);

  const animatePercentage = () => {
    let current = 0;
    const increment = skill.percentage / 50; // 50 steps for smooth animation
    const timer = setInterval(() => {
      current += increment;
      if (current >= skill.percentage) {
        current = skill.percentage;
        clearInterval(timer);
      }
      setAnimatedPercentage(Math.round(current));
    }, 30);
  };

  return (
    <div id={`skill-${skill.name}`} className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {animatedPercentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
        <div
          className="h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{
            width: isVisible ? `${skill.percentage}%` : '0%'
          }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-gradient-x"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;