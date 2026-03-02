import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navigationItems = [
  { id: 'breathing-issues', label: 'Проблемы дыхания' },
  { id: 'symptoms', label: 'Симптомы' },
  { id: 'consequences', label: 'Последствия' },
  { id: 'science', label: 'Научное обоснование' },
  { id: 'about-breathing', label: 'О практиках' },
  { id: 'about-me', label: 'О преподавателе' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'quick-test', label: 'Тест' },
  { id: 'products', label: 'Программы' },
  { id: 'faq', label: 'FAQ' }
];

const PageNavigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показываем навигацию только после прокрутки Hero секции
      const heroSection = document.querySelector('header');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }

      // Определяем активную секцию
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Учитываем высоту фиксированной навигации
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-40 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="overflow-x-auto">
          <div className="flex space-x-1 py-3 min-w-max">
            {navigationItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeSection === item.id
                    ? 'bg-primary-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default PageNavigation; 