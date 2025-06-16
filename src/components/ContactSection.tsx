
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
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
  );
};

export default ContactSection;
