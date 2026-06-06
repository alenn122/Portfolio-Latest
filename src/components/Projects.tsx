const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "A beautiful web application built with React and Tailwind",
            tech: ["React", "TypeScript", "Tailwind"],
        },
        {
            title: "Project 2",
            description: "Mobile-first responsive design with modern animations",
            tech: ["Next.js", "Tailwind", "Framer Motion"],
        },
        {
            title: "Project 3",
            description: "Full-stack application with database integration",
            tech: ["Node.js", "Express", "MongoDB"],
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        My Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    <p className="text-gray-300 mt-4 text-lg">Here are some of my recent works</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;