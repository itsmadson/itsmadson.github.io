import React, { useState, useEffect } from 'react';
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
  Play
} from 'lucide-react';


function App() {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer & Designer';
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const skills = [
    { icon: <Code2 className="w-5 h-5" />, name: 'Backend Development', description: 'Building robust server-side applications' },
    { icon: <Layout className="w-5 h-5" />, name: 'Frontend Development', description: 'Creating beautiful user interfaces' },
    { icon: <Smartphone className="w-5 h-5" />, name: 'Mobile Development', description: 'Developing cross-platform mobile apps' },
    { icon: <Palette className="w-5 h-5" />, name: 'Graphic Design', description: 'Crafting visual experiences' },
    { icon: <Monitor className="w-5 h-5" />, name: 'Desktop Applications', description: 'Building native desktop software' },
  ];

  const technologies = [
    { icon: <img src='../assets/react.ico' className="w-fit" />, name: 'React' },
    { icon: <img src='../assets/expo.ico' className="w-fit" />, name: 'React Native' },
    { icon: <img src='../assets/electron.ico' className="w-fit" />, name: 'Electron' },
    { icon: <img src='../assets/flutter.ico' className="w-fit" />, name: 'Flutter' },
    { icon: <img src='../assets/nextjs.ico' className="w-50 h-50" />, name: 'Next.js' },
    { icon: <img src='../assets/postgre.ico' className="w-fit" />, name: 'PostgreSQL' },
    { icon: <img src='../assets/supabase.ico' className="w-fit" />, name: 'Supabase' },
    { icon: <img src='../assets/fastapi.ico' className="w-fit" />, name: 'FastApi' },
    { icon: <img src='../assets/wordpress.ico' className="w-fit" />, name: 'WordPress' },
    { icon: <img src='../assets/photoshop.ico' className="w-fit" />, name: 'Photoshop' },
    { icon: <img src='../assets/aftereffect.ico' className="w-fit" />, name: 'After Effects' },
    { icon: <img src='../assets/figma.ico' className="w-fit" />, name: 'Figma' },
  ];
  
  const projects = [
    {
      title: 'Project 1',
      description: 'A beautiful mobile app for tracking daily habits and promoting mindfulness.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80',
      technologies: ['React Native', 'Supabase', 'TypeScript']
    },
    {
      title: 'Project 2',
      description: 'E-commerce platform with real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1000&q=80',
      technologies: ['Next.js', 'PostgreSQL', 'Tailwind']
    },
    {
      title: 'Project 3',
      description: 'Cross-platform desktop application for video editing.',
      image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=1000&q=80',
      technologies: ['Electron', 'React', 'FFmpeg']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono p-8">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-20">
        <div className="flex justify-center items-center space-x-3">
          <Terminal className="w-6 h-6 text-pink-500" />
          <span className="text-sm text-pink-500 font-mono whitespace-pre">
{`
░█▄█░█▀█░█▀▄░█▀▀░█▀█░█▀█
░█░█░█▀█░█░█░▀▀█░█░█░█░█
░▀░▀░▀░▀░▀▀░░▀▀▀░▀▀▀░▀░▀
`}
</span>

        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="mb-16 flex items-center gap-8">
          <img
            src="../assets/avatar.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-lg border-2 border-pink-500"
          />
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Sadegh Eghtesadi</h1>
            <div className="text-xl md:text-2xl text-pink-500 h-8">{text}</div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-16">
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Hello! I'm a passionate developer and designer who loves creating beautiful and functional digital experiences.
            I specialize in full-stack development, mobile apps, and creative design.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-pink-500">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="border border-gray-800 rounded-lg p-4 hover:border-pink-500 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-2">
                  {skill.icon}
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-pink-500">Technologies</h2>
          <div className="flex items-center justify-center flex-wrap gap-4">
            {technologies.map((tech) => (
              <div 
                key={tech.name} 
                className="flex flex-col items-center justify-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                {tech.icon}
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>


        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-pink-500">Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <div key={project.title} 
                className="border border-gray-800 rounded-lg overflow-hidden hover:border-pink-500 transition-colors duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-sm px-2 py-1 bg-gray-900 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-6 text-gray-400">
          <a href="#" className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2">
            <Twitter className="w-5 h-5" />
            <span>X</span>
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2">
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            <span>Mastodon</span>
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2">
            <Youtube className="w-5 h-5" />
            <span>YouTube</span>
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span>Discord</span>
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2">
            <Music2 className="w-5 h-5" />
            <span>Spotify</span>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;