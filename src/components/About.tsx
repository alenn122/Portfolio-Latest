const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                        Hello! I'm Jonathan Allen Mina, a passionate BSIT student who loves
                        exploring the world of technology. I'm constantly learning and
                        building new things to improve my skills.
                    </p>

                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                        My journey in tech started with curiosity about how things work,
                        and that curiosity has grown into a full-blown passion for
                        creating amazing digital experiences.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <h3 className="text-purple-400 font-semibold text-lg mb-2">🎓 Education</h3>
                            <p className="text-gray-300">BS Information Technology</p>
                        </div>

                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <h3 className="text-purple-400 font-semibold text-lg mb-2">💡 Interests</h3>
                            <p className="text-gray-300">Web Development, UI/UX Design, Tech Innovation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;