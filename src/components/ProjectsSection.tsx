
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/types/animations';

const ProjectsSection = () => {
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

  return (
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
  );
};

export default ProjectsSection;
