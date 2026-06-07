import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { ArrowUp, Instagram, Twitter } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const { y: parallaxY } = useParallax(-0.1, sectionRef);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={sectionRef as React.LegacyRef<HTMLElement>}
      className="relative bg-[#080d1a] dark:bg-black border-t border-purple-500/20 dark:border-white/5 overflow-hidden"
    >
      {/* Background effects — parallax layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: parallaxY }} className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-400/5 dark:bg-purple-600/5 rounded-full blur-[150px]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-white dark:text-white">Port</span>
              <span className="gradient-text">folio</span>
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building modern, high-performance web experiences through elegant design,
              clean code, and the latest technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-gray-800 flex items-center justify-center text-purple-500 dark:text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-indigo-950 dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get In Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-indigo-950 dark:text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-500 dark:text-gray-400">
                <span className="text-gray-400 dark:text-gray-500">Email:</span>{' '}
                <a
                  href="mailto:official.bipinchandra@gmail.com"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  official.bipinchandra@gmail.com
                </a>
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                <span className="text-gray-400 dark:text-gray-500">Phone:</span>{' '}
                <a
                  href="tel:+919565025178"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  +91 9565025178
                </a>
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                <span className="text-gray-400 dark:text-gray-500">Location:</span> Gorakhpur, Uttar Pradesh
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-purple-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © 2025 Bipin Chandra Pandey. All rights reserved.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full hover:shadow-glow transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
