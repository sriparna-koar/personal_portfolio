
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef(null);
  const categoriesRef = useRef(null);
  const skillsContainerRef = useRef(null);
  
  // Technical Skills Data with blue theme
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "C++", level: 85, icon: "🔧" },
        { name: "JavaScript", level: 88, icon: "🟨" },
        { name: "SQL", level: 80, icon: "🗃️" }
      ],
      icon: "💻"
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Pandas", level: 92, icon: "🐼" },
        { name: "Numpy", level: 88, icon: "🔢" },
        { name: "Scikit-learn", level: 85, icon: "🧠" },
        { name: "Tensorflow", level: 75, icon: "📊" },
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 82, icon: "▲" }
      ],
      icon: "🧩"
    },
    {
      category: "Back-end",
      skills: [
        { name: "Flask", level: 85, icon: "🧪" },
        { name: "Node.js", level: 82, icon: "📦" },
        { name: "Express", level: 78, icon: "🚂" },
        { name: "MongoDB", level: 80, icon: "🍃" }
      ],
      icon: "⚙️"
    },
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 95, icon: "📄" },
        { name: "CSS", level: 90, icon: "🎨" },
        { name: "React", level: 88, icon: "⚛️" },
        { name: "Next", level: 89, icon: "⚛️" },
        { name: "Tailwind", level: 85, icon: "💨" }
      ],
      icon: "🎨"
    },
    {
      category: "Dev Tools",
      skills: [
        { name: "Git", level: 90, icon: "🔄" },
        { name: "VS Code", level: 95, icon: "📝" },
        { name: "Jupyter", level: 88, icon: "📓" },
        { name: "Postman", level: 80, icon: "📮" }
      ],
      icon: "🛠️"
    }
  ];

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [sectionRef.current, categoriesRef.current, skillsContainerRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Skill level indicator component
  const SkillLevel = ({ level }) => {
    return (
      <div className="w-full bg-gray-800 rounded-full h-2 mb-1">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 transition-all duration-700 opacity-0 translate-y-4"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium text-blue-100 tracking-wider uppercase">Expertise</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 bg-gradient-to-r from-blue-100 to-blue-100 bg-clip-text text-transparent">
            Technical Skills
          </h2>
   
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>
        <div 
          ref={categoriesRef}
          className="flex flex-wrap justify-center mb-12 opacity-0 translate-y-4 transition-all duration-700 delay-200"
        >
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center px-5 py-3 m-2 rounded-full transition-all duration-300 ${
                activeCategory === index 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg' 
                  : 'bg-gray-800 text-blue-100 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mr-2">{category.icon}</span>
              <span className="font-medium">{category.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div 
          ref={skillsContainerRef}
          className="opacity-0 translate-y-4 transition-all duration-700 delay-400"
        >
          <div className="bg-opacity-50 backdrop-blur rounded-2xl p-8 shadow-2xl shadow-blue-900/20">
            <div className="flex items-center mb-8 pb-4 border-b border-blue-900">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4 bg-gradient-to-br from-blue-500 to-blue-700">
                {skillCategories[activeCategory].icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-100">
                {skillCategories[activeCategory].category} Skills
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories[activeCategory].skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="group bg-gray-900 bg-opacity-60 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:translate-y-[-2px] border border-blue-900"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <h4 className="text-lg font-medium text-blue-100">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="text-sm font-medium text-blue-300">{skill.level}%</span>
                    </div>
                    
                    <SkillLevel level={skill.level} />
                    
                    <div className="mt-4 pt-3 border-t border-blue-900/40">
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-1">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></span>
                          <span className={`w-2 h-2 rounded-full ${skill.level > 50 ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gray-700'}`}></span>
                          <span className={`w-2 h-2 rounded-full ${skill.level > 75 ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gray-700'}`}></span>
                          <span className={`w-2 h-2 rounded-full ${skill.level > 90 ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gray-700'}`}></span>
                        </div>
                        <span className="text-xs text-blue-200 capitalize">
                          {skill.level > 90 ? 'Expert' : skill.level > 75 ? 'Advanced' : skill.level > 50 ? 'Intermediate' : 'Beginner'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;