
import { useState, useEffect } from 'react';
import { Moon, Sun, Download, Github, Linkedin, Facebook, Instagram, Mail, Phone, MapPin, ExternalLink, Calendar, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

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
    { name: 'Next.js', icon: '⚡', color: 'from-black to-gray-700' },
    { name: 'React.js', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'PHP', icon: '🐘', color: 'from-purple-400 to-purple-600' },
    { name: 'CakePHP', icon: '🍰', color: 'from-red-400 to-red-600' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700' },
    { name: 'MySQL', icon: '🐬', color: 'from-blue-500 to-blue-700' },
    { name: 'HTML', icon: '📄', color: 'from-orange-400 to-orange-600' },
    { name: 'JavaScript', icon: '💛', color: 'from-yellow-400 to-yellow-600' },
    { name: 'AI Integration', icon: '🤖', color: 'from-cyan-400 to-cyan-600' },
    { name: 'WhatsApp Messaging', icon: '💬', color: 'from-green-400 to-green-600' },
    { name: 'Mobile & Web Apps', icon: '📱', color: 'from-indigo-400 to-indigo-600' }
  ];

  const projects = [
    {
      title: "AI-Powered Dashboard",
      description: "A modern dashboard with AI integration for data analytics and insights, featuring real-time data visualization and machine learning predictions.",
      tech: ["React", "Node.js", "AI", "MongoDB"],
      link: "#",
      status: "Completed",
      image: "🤖",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and comprehensive admin panel for business operations.",
      tech: ["Next.js", "MongoDB", "PHP", "Stripe"],
      link: "#",
      status: "Completed",
      image: "🛒",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "WhatsApp Business Bot",
      description: "Automated messaging system for business communication, customer support, and lead generation with advanced AI responses.",
      tech: ["Node.js", "WhatsApp API", "MySQL", "AI"],
      link: "#",
      status: "Completed",
      image: "💬",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Real Estate Management",
      description: "Complete property management system with listing management, client tracking, and automated reporting features.",
      tech: ["React", "PHP", "MySQL", "Maps API"],
      link: "#",
      status: "Completed",
      image: "🏠",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Task Management Suite",
      description: "Collaborative project management tool with team coordination, deadline tracking, and progress analytics.",
      tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
      link: "#",
      status: "Completed",
      image: "📋",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "Restaurant POS System",
      description: "Point of sale system for restaurants with order management, inventory tracking, and sales reporting.",
      tech: ["React", "Node.js", "MySQL", "Payment Gateway"],
      link: "#",
      status: "Completed",
      image: "🍽️",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
        
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700"
        >
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              RKS
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Technologies', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="hover:text-blue-600 transition-colors relative"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDark(!isDark)}
                className="p-2"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </motion.div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
          {/* Floating background elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Rupam Kumar Singh
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Building digital experiences with passion and precision
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300"
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
                </motion.div>
                
                <div className="flex space-x-4">
                  {[
                    { href: "https://github.com/RupamSingh333", icon: Github },
                    { href: "https://www.linkedin.com/in/rupam-kumar-1061321b2", icon: Linkedin },
                    { href: "https://www.facebook.com/Rupamsingh.0007", icon: Facebook },
                    { href: "https://www.instagram.com/rupamsingh_007", icon: Instagram }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white/50 dark:bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
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
                    <motion.div 
                      className="flex items-center space-x-2 text-slate-600 dark:text-slate-300"
                      whileHover={{ x: 5 }}
                    >
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span>India</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 text-slate-600 dark:text-slate-300"
                      whileHover={{ x: 5 }}
                    >
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span>rupamkumar333@gmail.com</span>
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                      RKS
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Technologies
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="hover:shadow-lg border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="text-4xl mb-3"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {tech.icon}
                      </motion.div>
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200">{tech.name}</h3>
                      <motion.div 
                        className={`mt-2 h-1 bg-gradient-to-r ${tech.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white/50 dark:bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden group h-full">
                    <CardContent className="p-6">
                      <motion.div 
                        className={`h-40 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="text-6xl"
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            delay: index * 0.5 
                          }}
                        >
                          {project.image}
                        </motion.div>
                        <motion.div
                          className="absolute top-2 right-2 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {project.status}
                        </motion.div>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200"
                        whileHover={{ color: "#3b82f6" }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span 
                            key={tech} 
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Project
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h2>
            
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Name</label>
                      <Input 
                        type="text" 
                        required 
                        className="w-full border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 transition-all duration-300 focus:scale-105"
                        placeholder="Your full name"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Email</label>
                      <Input 
                        type="email" 
                        required 
                        className="w-full border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 transition-all duration-300 focus:scale-105"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Message</label>
                      <Textarea 
                        required 
                        rows={5}
                        className="w-full border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 transition-all duration-300 focus:scale-105"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <motion.footer 
          className="py-12 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <div className="text-center">
              <motion.p 
                className="text-slate-600 dark:text-slate-300 mb-6"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Made with ❤️ by Rupam Kumar Singh
              </motion.p>
              
              <div className="flex justify-center space-x-6">
                {[
                  { href: "https://github.com/RupamSingh333", icon: Github },
                  { href: "https://www.linkedin.com/in/rupam-kumar-1061321b2", icon: Linkedin },
                  { href: "https://www.facebook.com/Rupamsingh.0007", icon: Facebook },
                  { href: "https://www.instagram.com/rupamsingh_007", icon: Instagram }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
