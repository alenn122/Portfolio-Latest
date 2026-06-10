import alenn from '../assets/alenn.png';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-40">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* LEFT COLUMN (Content) */}
                <div className="text-center md:text-left flex-1">

                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-10">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Hey! My name is
                        </span>
                        <br />
                        <span className="text-white font-heading">Jonathan Allen Mina,</span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            and I'm a BSIT student
                        </span>
                        <br />
                        <span className="text-white">
                            with a passion for all things tech.
                        </span>
                    </h1>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-12">
                        <button className="group px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-lg">
                            <a href="https://www.linkedin.com/in/jonathan-allen-mina-165408414/" target="_blank">Get in Touch</a>
                            <span className="group-hover:translate-x-1 transition-transform text-xl">→</span>
                        </button>

                        <button className="px-8 py-3 rounded-full bg-purple-500/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-purple-600/20 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                            <a href="https://github.com/alenn122" target="_blank"><span>🐱‍🚀</span>
                                GitHub</a>
                        </button>
                    </div>
                </div>

                {/* RIGHT COLUMN (Image replaces Decorative Element) */}
                <div className="flex-1 flex justify-center align-items-center">
                        <img
                            src={alenn}
                            alt="Profile"
                            className="w-full max-w-md rounded-3xl object-cover"
                        />
                </div>

            </div>
        </div>
    );
};

export default Home;