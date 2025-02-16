import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Github,
  Twitter,
  Instagram,
  Youtube,
  Music2,
  MessageCircle,
  Share2,
  Code2,
  Palette,
  Smartphone,
  Monitor,
  Database,
  Layout,
  Box,
  Figma,
  Image as ImageIcon,
  Play,
  Zap
} from 'lucide-react';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const fullText = 'Full Stack Developer & Designer';
  const terminalRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);
  
  // Typing animation
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  // Random glitch effect
  useEffect(() => {
    if (typingComplete) {
      const glitchInterval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }, 3000);
      
      return () => clearInterval(glitchInterval);
    }
  }, [typingComplete]);

  // Terminal scroll effect
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = 0;
      setShowContent(false);
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    }
  }, [activePage]);

  // Add the cursor effect script
  useEffect(() => {
    const cursor = document.getElementById('cursor-glow');
    if (cursor) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    }
  }, []);

  // Add the custom animations
  useEffect(() => {
    const customStyles = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes fadeInUp {
      from { 
        opacity: 0;
        transform: translateY(10px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }

    @keyframes glitch {
      0% {
        transform: translate(0);
        text-shadow: 0.5px 0.5px 0 #00ff00, -0.5px -0.5px 0 #00ffff;
      }
      20% {
        transform: translate(-1px, 1px);
        text-shadow: 0.5px 0.5px 0 #00ff00, -0.5px -0.5px 0 #00ffff;
      }
      40% {
        transform: translate(-1px, -1px);
        text-shadow: 1px 1px 0 #00ff00, -1px -1px 0 #00ffff;
      }
      60% {
        transform: translate(1px, 1px);
        text-shadow: 1px 1px 0 #00ff00, -1px -1px 0 #00ffff;
      }
      80% {
        transform: translate(1px, -1px);
        text-shadow: 0.5px 0.5px 0 #00ff00, -0.5px -0.5px 0 #00ffff;
      }
      100% {
        transform: translate(0);
        text-shadow: 0.5px 0.5px 0 #00ff00, -0.5px -0.5px 0 #00ffff;
      }
    }

    @keyframes scan {
      0% {
        background-position: 0 -100vh;
      }
      100% {
        background-position: 0 100vh;
      }
    }

    @keyframes terminalTyping {
      from {
        max-height: 0;
        opacity: 0;
      }
      to {
        max-height: 1000px;
        opacity: 1;
      }
    }

    .pixelated {
      image-rendering: pixelated;
      image-rendering: crisp-edges;
    }

    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out forwards;
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-glitch {
      animation: glitch 0.3s linear forwards;
    }

    .animate-terminalTyping {
      animation: terminalTyping 0.8s ease-out forwards;
      overflow: hidden;
    }
    `;
    
    const style = document.createElement('style');
    style.innerHTML = customStyles;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const skills = [
    { icon: <Code2 className="w-5 h-5" />, name: 'Backend Development', description: 'Building robust server-side applications' },
    { icon: <Layout className="w-5 h-5" />, name: 'Frontend Development', description: 'Creating beautiful user interfaces' },
    { icon: <Smartphone className="w-5 h-5" />, name: 'Mobile Development', description: 'Developing cross-platform mobile apps' },
    { icon: <Palette className="w-5 h-5" />, name: 'Graphic Design', description: 'Crafting visual experiences' },
    { icon: <Monitor className="w-5 h-5" />, name: 'Desktop Applications', description: 'Building native desktop software' },
  ];

  const technologies = [
    { icon: <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/react.ico' alt="React" className="pixelated" />, name: 'React' },
    { icon: <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/expo.ico' alt="React Native" className="pixelated" />, name: 'React Native' },
    { icon: <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/electron.ico' alt="Electron" className="pixelated" />, name: 'Electron' },
    { icon: <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/flutter.ico' alt="Flutter" className="pixelated" />, name: 'Flutter' },
    { icon: <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/nextjs.ico' alt="Next.js" className="pixelated" />, name: 'Next.js' },
    { icon: <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/postgre.ico' alt="PostgreSQL" className="pixelated" />, name: 'PostgreSQL' },
    { icon: <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/supabase.ico' alt="Supabase" className="pixelated" />, name: 'Supabase' },
    { icon: <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/fastapi.ico' alt="FastApi" className="pixelated" />, name: 'FastApi' },
    { icon: <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/wordpress.ico' alt="WordPress" className="pixelated" />, name: 'WordPress' },
    { icon: <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/photoshop.ico' alt="Photoshop" className="pixelated" />, name: 'Photoshop' },
    { icon: <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/aftereffect.ico' alt="After Effects" className="pixelated" />, name: 'After Effects' },
    { icon: <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/figma.ico' alt="Figma" className="pixelated" />, name: 'Figma' },
  ];
  
  const projects = [
    {
      title: 'Project 1',
      description: 'A beautiful mobile app for tracking daily habits and promoting mindfulness.',
      image: '/api/placeholder/320/180',
      technologies: ['React Native', 'Supabase', 'TypeScript']
    },
    {
      title: 'Project 2',
      description: 'E-commerce platform with real-time inventory management.',
      image: '/api/placeholder/320/180',
      technologies: ['Next.js', 'PostgreSQL', 'Tailwind']
    },
    {
      title: 'Project 3',
      description: 'Cross-platform desktop application for video editing.',
      image: '/api/placeholder/320/180',
      technologies: ['Electron', 'React', 'FFmpeg']
    }
  ];

  const renderTerminalCommand = (section: string) => {
    return (
      <div className="flex items-start mb-1 animate-fadeIn">
        <span className="text-green-400 mr-2">madson@portfolio:~$</span>
        <span className="text-yellow-400">cat {section}.txt</span>
      </div>
    );
  };

  const renderContent = () => {
    if (!showContent) return null;
    
    switch (activePage) {
      case 'home':
        return (
          <>
            {renderTerminalCommand('about')}
            <div className="mb-8 text-green-200 animate-terminalTyping">
              <p className="mb-4">
                Hello! I'm a passionate developer and designer who loves creating beautiful and functional digital experiences.
                I specialize in full-stack development, mobile apps, and creative design.
              </p>
            </div>
            
            {renderTerminalCommand('skills')}
            <div className="mb-8">
              <div className="grid grid-cols-1 gap-3">
                {skills.map((skill, index) => (
                  <div key={skill.name} 
                    className="border border-green-800 bg-black bg-opacity-30 rounded p-3 transform hover:scale-[1.02] transition-all duration-300 hover:border-green-400"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-green-400">{skill.icon}</span>
                      <span className="text-yellow-300 font-bold">{skill.name}</span>
                    </div>
                    <p className="text-green-200 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      
      case 'tech':
        return (
          <>
            {renderTerminalCommand('technologies')}
            <div className="mb-8">
              <span className='text-l'>Tech I Focused On Instead of Socializing:</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 mt-2 md:grid-cols-4 gap-3">
                {technologies.map((tech, index) => (
                  <div key={tech.name} 
                    className="border border-green-800 bg-black bg-opacity-30 rounded p-2 flex items-center gap-2 hover:bg-green-900 transition-all duration-300 transform hover:scale-[1.05]"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.5s both'
                    }}
                  >
                    <span className="text-green-400">{tech.icon}</span>
                    <span className="text-green-200 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      
      case 'projects':
        return (
          <>
            {renderTerminalCommand('projects')}
            <div className="mb-8">
              {projects.map((project, index) => (
                <div key={project.title} 
                  className="mb-6 border border-green-800 bg-black bg-opacity-30 rounded overflow-hidden hover:border-green-400 transition-all duration-500"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animation: 'fadeInUp 0.6s both'
                  }}
                >
                  <div className="p-4">
                    <h3 className="text-yellow-300 font-bold mb-2">{project.title}</h3>
                    <p className="text-green-200 mb-3 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, i) => (
                        <span key={tech} 
                          className="text-xs px-2 py-1 bg-green-900 text-green-200 rounded-sm"
                          style={{ 
                            animationDelay: `${(index * 200) + (i * 100)}ms`,
                            animation: 'fadeIn 0.5s both'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="border border-green-700 p-1 inline-block relative overflow-hidden group">
                      <img loading="lazy" src={project.image} alt={project.title} className="w-full h-auto pixelated" />
                      <div className="absolute inset-0 bg-green-800 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <Zap className="w-0 h-0 group-hover:w-10 group-hover:h-10 transition-all duration-300 text-green-300 opacity-0 group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      
      case 'contact':
        return (
          <>
            {renderTerminalCommand('contact')}
            <div className="mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {[
                  { icon: <Github className="w-4 h-4 text-green-400" />, name: 'GitHub' },
                  { icon: <Twitter className="w-4 h-4 text-green-400" />, name: 'X' },
                  { icon: <Instagram className="w-4 h-4 text-green-400" />, name: 'Instagram' },
                  { icon: <Share2 className="w-4 h-4 text-green-400" />, name: 'Mastodon' },
                  { icon: <Youtube className="w-4 h-4 text-green-400" />, name: 'YouTube' },
                  { icon: <MessageCircle className="w-4 h-4 text-green-400" />, name: 'Discord' },
                  { icon: <Music2 className="w-4 h-4 text-green-400" />, name: 'Spotify' },
                ].map((item, index) => (
                  <a href="#" key={item.name}
                    className="border border-green-800 bg-black bg-opacity-30 rounded p-2 flex items-center gap-2 hover:bg-green-900 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-green-900/50"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeIn 0.4s both'
                    }}
                  >
                    {item.icon}
                    <span className="text-green-200 text-sm">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </>
        );
      
      default:
        return <p>Page not found. Type 'help' to see available commands.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-300 font-mono p-4 md:p-8 relative overflow-hidden" 
         style={{
           backgroundImage: 'radial-gradient(#0f360f 1px, transparent 1px)',
           backgroundSize: '20px 20px'
         }}>
      
      {/* CRT Overlay Effect */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent to-green-900 opacity-10"></div>
      <div className="pointer-events-none fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjE1IiAvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIgLz48L3N2Zz4=')]"></div>
      
      {/* Header with ASCII Art */}
      <header className="max-w-3xl mx-auto mb-8 animate-float">
        <div className="flex justify-center">
          <pre className={`text-green-500 text-xs sm:text-sm whitespace-pre overflow-x-auto ${isGlitching ? 'animate-glitch' : ''}`}>
{`
███╗   ███╗ █████╗ ██████╗ ███████╗ ██████╗ ███╗   ██╗
████╗ ████║██╔══██╗██╔══██╗██╔════╝██╔═══██╗████╗  ██║
██╔████╔██║███████║██║  ██║███████╗██║   ██║██╔██╗ ██║
██║╚██╔╝██║██╔══██║██║  ██║╚════██║██║   ██║██║╚██╗██║
██║ ╚═╝ ██║██║  ██║██████╔╝███████║╚██████╔╝██║ ╚████║
╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝
`}
          </pre>
        </div>
      </header>

      {/* Main Content with Terminal Style */}
      <main className="max-w-3xl mx-auto relative">
        {/* Profile Header */}
        <div className="border border-green-700 bg-black bg-opacity-80 rounded mb-8 p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-fadeIn shadow-lg shadow-green-900/20">
          <img
            src="https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/avatar.jpg"
            alt="Profile"
            className="w-20 h-20 rounded border-2 border-green-700 pixelated"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-green-400">{isGlitching ? 'S4d3gh 3ght3s4d1' : 'Sadegh Eghtesadi'}</h1>
            <div className="text-yellow-300 h-6">
              {typedText}
              <span className="animate-pulse">_</span>
            </div>
            <div className="text-green-600 text-xs mt-2">Last login: {new Date().toLocaleString()}</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-4 flex flex-wrap gap-2 animate-fadeIn" style={{ animationDelay: '400ms' }}>
          {['home', 'tech', 'projects', 'contact'].map((page, index) => (
            <button 
              key={page}
              onClick={() => setActivePage(page)}
              className={`px-3 py-1 border ${activePage === page ? 'border-green-500 bg-green-900' : 'border-green-800'} rounded text-sm hover:bg-green-900 transition-all duration-300 transform hover:scale-105`}
              style={{ animationDelay: `${500 + (index * 100)}ms` }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="border border-green-700 bg-black bg-opacity-80 rounded overflow-hidden animate-fadeIn shadow-lg shadow-green-900/30" 
             style={{ animationDelay: '600ms' }}>
          {/* Terminal Header */}
          <div className="bg-green-900 px-4 py-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-green-200" />
              <span className="text-xs text-green-200">madson@portfolio: ~/{activePage}</span>
            </div>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '500ms' }}></div>
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="p-4 max-h-[70vh] overflow-y-auto font-mono text-sm" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(0, 15, 0, 0.9), rgba(0, 20, 0, 0.95))'
            }}
          >
            {renderContent()}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-green-700 text-xs animate-fadeIn" style={{ animationDelay: '800ms' }}>
          <span>~$ All Rights Reserved [madson] - {new Date().getFullYear()}</span>
        </div>
        <div className='flex justify-center items-center mt-3'>
            <img loading="lazy" src='https://raw.githubusercontent.com/itsmadson/itsmadson.github.io/refs/heads/main/assets/madson.png' alt="logo" className="w-8 h-8 inline-block mr-1 " />
        </div>    
      </main>

      {/* Add glowing cursor that follows mouse */}
      <div id="cursor-glow" className="hidden md:block fixed w-40 h-40 rounded-full pointer-events-none mix-blend-screen" 
           style={{
             background: 'radial-gradient(circle, rgba(0,255,0,0.1) 0%, rgba(0,255,0,0) 70%)',
             transform: 'translate(-50%, -50%)',
             left: '50%',
             top: '50%',
             zIndex: 10
           }}
      ></div>
    </div>
  );
}

export default App;