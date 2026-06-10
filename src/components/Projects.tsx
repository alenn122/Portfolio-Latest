import lyceum from "../assets/lyceum-facility-control.jfif";
import tahanan from "../assets/tahanan.jfif";
import eventList from "../assets/event-list-app.jfif";

type Project = {
    title: string;
    description: string;
    tech: string[];
    image: string;
};

const Projects = () => {
    const projects: Project[] = [
        {
            title: "Lyceum Facility Control System",
            description:
                "A real-time RFID-based facility access control system that monitors and manages access to campus facilities through a centralized dashboard.",
            tech: ["React", "TypeScript", "Tailwind CSS"],
            image: lyceum,
        },
        {
            title: "Tahanan",
            description:
                "A full-featured apartment management platform that helps landlords manage tenants, payments, and property listings efficiently.",
            tech: ["JavaScript", "Bootstrap", "PHP"],
            image: tahanan,
        },
        {
            title: "Event List App",
            description:
                "A full-stack event management application that allows users to create, manage, and organize events with database integration.",
            tech: ["Laravel", "Bootstrap", "MySQL"],
            image: eventList,
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center px-4 py-20"
        >
            <div className="max-w-6xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        My Projects
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />

                    <p className="text-gray-300 mt-4 text-lg">
                        Here are some of my recent works
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-purple-700/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-500/50"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300"
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
        </section>
    );
};

export default Projects;