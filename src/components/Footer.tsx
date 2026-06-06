const Footer = () => {
    return (
        <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                            <i>alenn</i>
                        </h3>
                        <p className="text-gray-300">
                            BSIT Student passionate about creating amazing digital experiences.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-purple-400 transition-colors">Home</button></li>
                            <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-purple-400 transition-colors">About</button></li>
                            <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-purple-400 transition-colors">Projects</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/alenn122" target="_blank" className="text-gray-300 hover:text-purple-400 transition-colors">GitHub</a>
                            <a href="https://www.linkedin.com/in/jonathan-allen-mina-165408414/" target="_blank" className="text-gray-300 hover:text-purple-400 transition-colors">LinkedIn</a>
                            <a href="https://www.facebook.com/jonathanallen.wagasmina/" target="_blank" className="text-gray-300 hover:text-purple-400 transition-colors">Facebook</a>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-white/10">
                    <p className="text-gray-400 text-sm">
                        © 2026 alenn. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;