
import { useState, useEffect } from 'react';
import { Moon, Sun, Download, Github, Linkedin, Facebook, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const { toast } = useToast();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  const technologies = [
    { name: 'Next.js', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'PHP', icon: '🐘' },
    { name: 'CakePHP', icon: '🍰' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'HTML', icon: '📄' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'AI Integration', icon: '🤖' },
    { name: 'WhatsApp Messaging', icon: '💬' },
    { name: 'Mobile & Web Apps', icon: '📱' }
  ];

  const projects = [
    {
      title: "AI-Powered Dashboard",
      description: "A modern dashboard with AI integration for data analytics and insights.",
      tech: ["React", "Node.js", "AI"],
      link: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin panel.",
      tech: ["Next.js", "MongoDB", "PHP"],
      link: "#"
    },
    {
      title: "WhatsApp Business Bot",
      description: "Automated messaging system for business communication and customer support.",
      tech: ["Node.js", "WhatsApp API", "MySQL"],
      link: "#"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RKS
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#technologies" className="hover:text-blue-600 transition-colors">Technologies</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              className="p-2"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-6 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-scale-in">
                Rupam Kumar Singh
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
                Building digital experiences with passion and precision
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Rupam_Kumar_Singh_Resume.pdf';
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                
                <div className="flex space-x-4">
                  <a href="https://github.com/RupamSingh333" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-110">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/rupam-kumar-1061321b2" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-110">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://www.facebook.com/Rupamsingh.0007" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-110">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/rupamsingh_007" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-110">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white/50 dark:bg-slate-800/50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    I'm a passionate software developer with expertise in modern web technologies and AI integration. 
                    I love creating digital solutions that make a real impact.
                  </p>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    With experience in full-stack development, I specialize in building scalable applications 
                    using React, Next.js, Node.js, and various databases. I'm also passionate about integrating 
                    AI technologies to create intelligent, user-friendly solutions.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span>India</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span>rupamkumar333@gmail.com</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                      RKS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {technologies.map((tech, index) => (
                <Card key={tech.name} className="hover:scale-105 transition-all duration-300 hover:shadow-lg border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">{tech.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white/50 dark:bg-slate-800/50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <Card key={project.title} className="hover:scale-105 transition-all duration-300 hover:shadow-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                      <ExternalLink className="text-white h-8 w-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <Card className="border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Name</label>
                      <Input 
                        type="text" 
                        required 
                        className="w-full border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Email</label>
                      <Input 
                        type="email" 
                        required 
                        className="w-full border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Message</label>
                      <Textarea 
                        required 
                        rows={5}
                        className="w-full border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Made with ❤️ by Rupam Kumar Singh
              </p>
              
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/RupamSingh333" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/rupam-kumar-1061321b2" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/Rupamsingh.0007" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/rupamsingh_007" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
