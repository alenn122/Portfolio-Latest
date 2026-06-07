const Projects = () => {
    const projects = [
        {
            title: "Lyceum Facility Control System",
            description: "A real-time RFID-based facility access control system that monitors individuals across campus buildings through a centralized dashboard.",
            tech: ["React", "TypeScript", "Tailwind"],
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        },
        {
            title: "Tahanan",
            description: "A full-featured apartment management platform that helps landlords efficiently manage tenants and property listings in one system.",
            tech: ["Javascript", "Bootstrap", "PHP"],
            image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
        },
        {
            title: "Event List App",
            description: "A full-stack event management application that allows users to create, view, and organize events with persistent database storage.",
            tech: ["Laravel", "Tailwind", "MySQL"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-6xl mx-auto w-full">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        My Projects
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>

                    <p className="text-gray-300 mt-4 text-lg">
                        Here are some of my recent works
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-purple-700/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                        >

                            {/* Image */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
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