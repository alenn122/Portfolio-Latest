const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                <div className="bg-purple-700/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                        Hi! I'm alenn, a BSIT student with a passion for technology and web development. I enjoy watching tech videos and building websites in my free time.
                    </p>

                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                        Constantly learning and exploring new trends in the digital world, I strive to improve my skills and create impactful web experiences.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-purple-700/10 rounded-xl p-4 border border-white/10">
                            <h3 className="font-heading text-purple-400 font-semibold text-lg mb-2">Education</h3>
                            <p className="text-gray-300">BS Information Technology</p>
                            <p className="text-gray-300">Lyceum of San Pedro</p>
                        </div>

                        <div className="bg-purple-700/10 rounded-xl p-4 border border-white/10">
                            <h3 className="font-heading text-purple-400 font-semibold text-lg mb-2">Interests</h3>
                            <p className="text-gray-300">Web Development, UI/UX Design, Tech Innovation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;