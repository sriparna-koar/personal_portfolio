const Portfolio = () => {
    const projects = [
      { title: 'Project 1', description: 'A great project.', link: '#' },
      { title: 'Project 2', description: 'Another great project.', link: '#' },
      // Add more projects as needed
    ];
  
    return (
      <section id="portfolio" className="container mx-auto my-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">My Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a href={project.link} key={index} className="transform hover:scale-105 transition duration-300">
              <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  