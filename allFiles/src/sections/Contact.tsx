import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useParallax } from '@/hooks/useParallax';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'official.bipinchandra@gmail.com',
    href: 'mailto:official.bipinchandra@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9565025178',
    href: 'tel:+919565025178',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gorakhpur, Uttar Pradesh',
    href: '#',
  },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const sectionRef = useRef<HTMLElement>(null);
  const { y: parallaxY } = useParallax(-0.15, sectionRef);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // STEP: Yahan apni EmailJS keys dalein (emailjs.com se)
      const SERVICE_ID = "service_gftxphi";    // Updated with your service ID
      const TEMPLATE_ID = "template_do2nhmp";   // Updated with your template ID
      const PUBLIC_KEY = "bmwfr9gy4javgit25";    // Updated with your key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Bipin Chandra Pandey",
        message: formData.message,
      };

      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      if (res.status === 200) {
        alert('Message sent successfully! 🚀');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      alert(`Error: ${error?.text || 'Failed to send message'}. Please ensure your EmailJS keys are correct.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef as React.LegacyRef<HTMLElement>}
      className="relative py-20 bg-[#080d1a] dark:bg-black overflow-hidden"
    >
      {/* Background effects — parallax layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: parallaxY }} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-400/8 dark:bg-purple-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/8 dark:bg-cyan-600/10 rounded-full blur-[150px]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white dark:text-white">Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Drop me a message and let's
            create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Name
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    maxLength={50}
                    className="bg-purple-50/60 dark:bg-gray-900/50 border-purple-200 dark:border-white/10 text-indigo-950 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-mono pointer-events-none">
                    {formData.name.length}/50
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    maxLength={100}
                    className="bg-purple-50/60 dark:bg-gray-900/50 border-purple-200 dark:border-white/10 text-indigo-950 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-mono pointer-events-none">
                    {formData.email.length}/100
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Message
                </label>
                <div className="relative">
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    maxLength={500}
                    rows={5}
                    className="bg-white/5 dark:bg-gray-900/50 border-purple-500/30 dark:border-white/10 text-white dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-600 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl resize-none"
                  />
                  <div className="absolute bottom-3 right-3 text-[10px] text-gray-500 font-mono">
                    {formData.message.length}/500
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 rounded-xl font-medium text-base transition-all duration-300 hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-indigo-950 dark:text-white mb-4">
                Let's <span className="gradient-text">Connect</span>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing
                people. Whether you have a specific project in mind or just want to
                explore possibilities, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/5 dark:bg-gray-900/50 border border-purple-500/20 dark:border-white/5 rounded-xl hover:border-purple-400/50 dark:hover:border-purple-500/30 transition-all group shadow-lg dark:shadow-none"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition-shadow">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">{info.label}</p>
                    <p className="text-gray-200 dark:text-white font-medium group-hover:text-purple-400 dark:group-hover:text-purple-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-gray-800 flex items-center justify-center text-purple-500 dark:text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
