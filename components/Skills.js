
import React from 'react';
import { FaPython, FaJava, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiCplusplus, SiHtml5, SiCss3, SiFlask, SiMysql, SiMongodb, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Platforms',
      skills: [
        { name: 'Visual Studio Code', icon: <SiHtml5 /> },
        { name: 'Jupyter Notebook', icon: <FaPython /> },
      ],
    },
    {
      category: 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Python', icon: <FaPython /> },
      ],
    },
    {
      category: 'Frameworks',
      skills: [
        { name: 'Pandas', icon: <FaPython /> },
        { name: 'Numpy', icon: <FaPython /> },
        { name: 'Scikit-learn', icon: <FaPython /> },
        { name: 'Matplotlib', icon: <FaPython /> },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', icon: <SiHtml5 /> },
        { name: 'CSS', icon: <SiCss3 /> },
        { name: 'JavaScript', icon: <FaReact /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'Node.js & Express', icon: <FaNodeJs /> },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="container mx-auto my-20 px-8 py-12 rounded-lg"
      style={{
        background: 'linear-gradient(135deg, rgb(5, 5, 5), rgb(0, 0, 0))',
        boxShadow: '0 0 25px rgba(0, 0, 0, 0.8)',
        color: '#FFFFFF',
      }}
    >
      <h2 className="text-4xl font-semibold text-center text-white mb-10 tracking-wide">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 bg-gray-900 text-white p-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(90deg, rgba(27, 27, 27, 0.92), rgb(39, 0, 8))',
                    boxShadow: '0px 6px 18px rgba(54, 0, 18, 0.6)',
                  }}
                >
                  <div
                    className="text-2xl"
                    style={{
                      color: '#ff4b82',
                      transition: 'color 0.3s',
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium tracking-wide">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
