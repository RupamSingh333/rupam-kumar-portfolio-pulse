
import { useState, useEffect } from 'react';
import { Moon, Sun, Download, Github, Linkedin, Facebook, Instagram, Mail, Phone, MapPin, ExternalLink, Calendar, Code, Database, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [typewriterText, setTypewriterText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { toast } = useToast();

  const typewriterWords = [
    'Building digital experiences',
    'Creating innovative solutions',
    'Developing modern web apps',
    'Integrating AI technologies',
    'Crafting user-friendly interfaces'
  ];

  // Typewriter effect
  useEffect(() => {
    const word = typewriterWords[currentWordIndex];
    let currentText = '';
    let charIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      if (!isDeleting && charIndex < word.length) {
        currentText += word[charIndex];
        charIndex++;
        setTypewriterText(currentText);
        setTimeout(typeWriter, 100);
      } else if (isDeleting && charIndex > 0) {
        currentText = currentText.slice(0, -1);
        charIndex--;
        setTypewriterText(currentText);
        setTimeout(typeWriter, 50);
      } else if (!isDeleting && charIndex === word.length) {
        setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 2000);
      } else if (isDeleting && charIndex === 0) {
        setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
        isDeleting = false;
        setTimeout(typeWriter, 500);
      }
    };

    typeWriter();
  }, [currentWordIndex]);

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

  const handleCallUs = () => {
    window.open('tel:+918538945025', '_self');
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

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -25, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textUpDownVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const smoothBounceVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDark ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 text-slate-900 dark:text-slate-100 transition-colors duration-700">
        
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 transition-all duration-500"
        >
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold"
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
                variants={smoothBounceVariants}
                animate="animate"
              >
                Codelabs India
              </motion.span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Technologies', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="hover:text-blue-600 transition-all duration-300 relative group"
                  whileHover={{ y: -3, scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.span variants={textUpDownVariants} animate="animate">
                    {item}
                  </motion.span>
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"
                  />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)" }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  onClick={handleCallUs}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-full transition-all duration-500 shadow-lg"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }} 
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
          {/* Enhanced floating background elements */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
            animate={{ 
              y: [0, -40, 0], 
              x: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"
            animate={{ 
              y: [0, 40, 0], 
              x: [0, -25, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"
            animate={{ 
              y: [0, -20, 0], 
              x: [0, 20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Enhanced name animation */}
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6"
                variants={nameVariants}
                initial="hidden"
                animate="visible"
              >
                {"Rupam Kumar Singh".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.div 
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto h-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.span
                  key={typewriterText}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium"
                >
                  {typewriterText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1 text-blue-600"
                  >
                    |
                  </motion.span>
                </motion.span>
              </motion.div>

              <motion.p 
                className="text-lg text-slate-500 dark:text-slate-400 mb-8 font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.span variants={smoothBounceVariants} animate="animate">
                  with passion and precision
                </motion.span>
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    y: -5
                  }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-500 shadow-xl"
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
                    { href: "https://www.instagram.com/rupamsingh_007", icon: Instagram },
                    { href: "https://youtube.com/@codelabs_india?si=GtP7PycEuJZFVar0", icon: Youtube }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-200/70 dark:bg-slate-700/70 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-500 backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: 15,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                        y: -5
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.2 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced phone number display */}
              <motion.div
                className="text-lg font-semibold text-slate-600 dark:text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 px-6 py-3 rounded-full backdrop-blur-sm border border-green-200 dark:border-green-700"
                  variants={smoothBounceVariants}
                  animate="animate"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(34, 197, 94, 0.2)"
                  }}
                >
                  <Phone className="h-5 w-5 text-green-600" />
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">
                    +91 8538945025
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
                variants={smoothBounceVariants}
                animate="animate"
              >
                About Me
              </motion.span>
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <motion.p 
                    className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                    variants={textUpDownVariants}
                    animate="animate"
                  >
                    I'm a passionate software developer at <strong className="text-blue-600 font-semibold">Codelabs India</strong> with expertise in modern web technologies and AI integration. 
                    I love creating digital solutions that make a real impact.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                    variants={textUpDownVariants}
                    animate="animate"
                  >
                    With experience in full-stack development, I specialize in building scalable applications 
                    using React, Next.js, Node.js, and various databases. I'm also passionate about integrating 
                    AI technologies to create intelligent, user-friendly solutions.
                  </motion.p>
                  
                  <div className="flex flex-wrap gap-4">
                    <motion.div 
                      className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full"
                      whileHover={{ x: 5, scale: 1.05 }}
                      variants={textUpDownVariants}
                      animate="animate"
                    >
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span>India</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full"
                      whileHover={{ x: 5, scale: 1.05 }}
                      variants={textUpDownVariants}
                      animate="animate"
                    >
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span>rupamkumar333@gmail.com</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full"
                      whileHover={{ x: 5, scale: 1.05 }}
                      variants={textUpDownVariants}
                      animate="animate"
                    >
                      <Youtube className="h-5 w-5 text-red-600" />
                      <a 
                        href="https://youtube.com/@codelabs_india?si=GtP7PycEuJZFVar0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-red-600 transition-colors"
                      >
                        Codelabs India Channel
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-full opacity-20"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                      <motion.span 
                        variants={smoothBounceVariants} 
                        animate="animate"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100"
                      >
                        RKS
                      </motion.span>
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
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
                variants={smoothBounceVariants}
                animate="animate"
              >
                Technologies
              </motion.span>
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
                    scale: 1.08, 
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    y: -8
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Card className="hover:shadow-2xl border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm h-full transition-all duration-500">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="text-4xl mb-3"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: index * 0.2,
                          ease: "easeInOut"
                        }}
                      >
                        {tech.icon}
                      </motion.div>
                      <motion.h3 
                        className="font-semibold text-slate-800 dark:text-slate-200"
                        variants={textUpDownVariants}
                        animate="animate"
                      >
                        {tech.name}
                      </motion.h3>
                      <motion.div 
                        className={`mt-2 h-1 bg-gradient-to-r ${tech.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
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
        <section id="projects" className="py-20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
                variants={smoothBounceVariants}
                animate="animate"
              >
                Featured Projects
              </motion.span>
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
                    y: -15,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    scale: 1.02
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Card className="border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden group h-full transition-all duration-500">
                    <CardContent className="p-6">
                      <motion.div 
                        className={`h-40 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="text-6xl"
                          animate={{ 
                            rotate: [0, 8, -8, 0],
                            scale: [1, 1.15, 1]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            delay: index * 0.5,
                            ease: "easeInOut"
                          }}
                        >
                          {project.image}
                        </motion.div>
                        <motion.div
                          className="absolute top-2 right-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium"
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
                        variants={textUpDownVariants}
                        animate="animate"
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed"
                        variants={textUpDownVariants}
                        animate="animate"
                      >
                        {project.description}
                      </motion.p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span 
                            key={tech} 
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.15, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      <motion.div 
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
                        }} 
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-500 border-blue-200 hover:border-blue-400">
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
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
                variants={smoothBounceVariants}
                animate="animate"
              >
                Get In Touch
              </motion.span>
            </motion.h2>
            
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <Card className="border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-8">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <motion.label 
                        className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                        variants={textUpDownVariants}
                        animate="animate"
                      >
                        Name
                      </motion.label>
                      <Input 
                        type="text" 
                        required 
                        className="w-full border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-700/80 transition-all duration-500 focus:scale-105 focus:shadow-lg"
                        placeholder="Your full name"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <motion.label 
                        className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                        variants={textUpDownVariants}
                        animate="animate"
                      >
                        Email
                      </motion.label>
                      <Input 
                        type="email" 
                        required 
                        className="w-full border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-700/80 transition-all duration-500 focus:scale-105 focus:shadow-lg"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <motion.label 
                        className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                        variants={textUpDownVariants}
                        animate="animate"
                      >
                        Message
                      </motion.label>
                      <Textarea 
                        required 
                        rows={5}
                        className="w-full border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-700/80 transition-all duration-500 focus:scale-105 focus:shadow-lg"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 text-white py-3 rounded-lg transition-all duration-500 shadow-lg"
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
          className="py-12 bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <div className="text-center">
              <motion.p 
                className="text-slate-600 dark:text-slate-300 mb-6 font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.span variants={smoothBounceVariants} animate="animate">
                  Made with ❤️ by Rupam Kumar Singh | Codelabs India
                </motion.span>
              </motion.p>
              
              <div className="flex justify-center space-x-6">
                {[
                  { href: "https://github.com/RupamSingh333", icon: Github },
                  { href: "https://www.linkedin.com/in/rupam-kumar-1061321b2", icon: Linkedin },
                  { href: "https://www.facebook.com/Rupamsingh.0007", icon: Facebook },
                  { href: "https://www.instagram.com/rupamsingh_007", icon: Instagram },
                  { href: "https://youtube.com/@codelabs_india?si=GtP7PycEuJZFVar0", icon: Youtube }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.4, 
                      rotate: 20,
                      y: -5,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
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
