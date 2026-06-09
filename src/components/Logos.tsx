import React, { useRef, useEffect } from 'react';

// Logo data with placeholder paths - replace with your actual image paths
const logos = [
    { id: 1, name: 'CSS3', originalColor: '#2965F1', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { id: 2, name: 'Bootstrap', originalColor: '#7952B3', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { id: 3, name: 'JavaScript', originalColor: '#F7DF1E', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { id: 4, name: 'React', originalColor: '#61DAFB', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { id: 5, name: 'TypeScript', originalColor: '#3178C6', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { id: 6, name: 'Node.js', originalColor: '#339933', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { id: 7, name: 'Python', originalColor: '#3776AB', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { id: 8, name: 'Git', originalColor: '#F05032', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { id: 9, name: 'Figma', originalColor: '#F24E1E', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { id: 10, name: 'VS Code', originalColor: '#007ACC', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
];

const LogoCarousel: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | undefined>(undefined);
    const isHoveringRef = useRef(false);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scroll = () => {
            if (!isHoveringRef.current && container) {
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += 1;
                }
            }
            animationRef.current = requestAnimationFrame(scroll);
        };

        animationRef.current = requestAnimationFrame(scroll);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        isHoveringRef.current = true;
    };

    const handleMouseLeave = () => {
        isHoveringRef.current = false;
    };

    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className="w-full overflow-hidden py-4 md:py-6 lg:py-8 relative">
            {/* Gradient fade effects on edges */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none z-10" />
            
            <div
                ref={scrollContainerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex gap-8 md:gap-12 lg:gap-16 overflow-x-auto scroll-smooth px-4 md:px-8 cursor-grab hide-scrollbar"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                {duplicatedLogos.map((logo, index) => (
                    <div
                        key={`${logo.id}-${index}`}
                        className="flex-shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                    >
                        <img
                            src={logo.iconPath}
                            alt={logo.name}
                            title={logo.name}
                            className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain transition-all duration-300 grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;