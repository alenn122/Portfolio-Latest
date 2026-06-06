import { useState } from 'react';

const Portfolio = () => {
    // Sample certificates data - replace with your actual images
    const certificates = [
        {
            id: 1,
            title: "Web Development Certificate",
            issuer: "Google",
            date: "2024",
            image: "https://via.placeholder.com/400x300/7c3aed/ffffff?text=Certificate+1",
            description: "Completed comprehensive web development course"
        },
        {
            id: 2,
            title: "React Masterclass",
            issuer: "Meta",
            date: "2024",
            image: "https://via.placeholder.com/400x300/7c3aed/ffffff?text=Certificate+2",
            description: "Advanced React concepts and best practices"
        },
        {
            id: 3,
            title: "UI/UX Design Fundamentals",
            issuer: "Coursera",
            date: "2023",
            image: "https://via.placeholder.com/400x300/7c3aed/ffffff?text=Certificate+3",
            description: "User-centered design principles"
        },
        {
            id: 4,
            title: "JavaScript Advanced",
            issuer: "Microsoft",
            date: "2023",
            image: "https://via.placeholder.com/400x300/7c3aed/ffffff?text=Certificate+4",
            description: "Advanced JavaScript programming"
        },
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        My Certificates
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    <p className="text-gray-300 mt-4 text-lg">
                        Professional certifications and achievements
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                            onClick={() => setSelectedImage(cert.image)}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                                <p className="text-purple-400 text-sm mb-2">{cert.issuer} • {cert.date}</p>
                                <p className="text-gray-300 text-sm">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal for full-size image */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl w-full">
                            <img
                                src={selectedImage}
                                alt="Certificate full view"
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;