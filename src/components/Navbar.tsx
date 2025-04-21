import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    {
      label: 'Services',
      children: [
        { path: '/global-finance', label: 'Global Finance Education' },
        { path: '/financial-services', label: 'Financial Services' },
        { path: '/money-research', label: 'Money Research' },
        { path: '/business-consultancy', label: 'Business Consultancy' },
        { path: '/job-consultancy', label: 'Job Consultancy' },
        { path: '/agro-projects', label: 'Agro Projects' },
        { path: '/media-entertainment', label: 'Media & Entertainment' }
      ]
    },
    { path: '/blogs', label: 'Blogs' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-lg'
        : 'bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <img
                  src="/mahasamvit-logo.jpeg"
                  alt="Mahasamvit Logo"
                  className="h-14 w-auto mr-2"
                  />
                <span
                  className={`text-2xl font-bold ${
                    scrolled ? 'text-blue-700' : 'text-white'
                  } transition-colors duration-300`}
                >
                  Mahasamvit
                </span>
              </motion.div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              item.children ? (
                <div key={index} className="relative group">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      scrolled ? 'text-black hover:text-blue-700' : 'text-black hover:text-white'
                    } transition-colors duration-300`}
                  >
                    {item.label}
                    <span className="ml-1">▼</span>
                  </motion.button>
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                    <div className="relative">
                      <div className="absolute top-0 left-5 w-3 h-3 bg-white transform rotate-45 -mt-1 border-t border-l border-gray-100"></div>
                    </div>
                    <div className="py-2 rounded-md bg-white">
                      {item.children.map((child, childIndex) => (
                        <motion.div
                          key={childIndex}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: childIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            to={child.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isActive(item.path)
                        ? scrolled
                          ? 'text-blue-700 border-b-2 border-blue-700'
                          : 'text-black border-b-2 border-black'
                        : scrolled
                          ? 'text-black hover:text-blue-700'
                          : 'text-black hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-black hover:text-blue-700' : 'text-black hover:text-white'
              }`}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                item.children ? (
                  <div key={index} className="space-y-1">
                    <div className="px-3 py-2 text-blue-700 font-medium border-b border-gray-100">
                      {item.label}
                    </div>
                    {item.children.map((child, childIndex) => (
                      <motion.div
                        key={childIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: childIndex * 0.05 }}
                      >
                        <Link
                          to={child.path}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 pl-6"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 ${
                        isActive(item.path) ? 'bg-blue-50 text-blue-700' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}