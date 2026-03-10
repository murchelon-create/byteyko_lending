import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const navigation = [
  { name: 'О дыхании', href: '#about-breathing' },
  { name: 'Обо мне', href: '#about-me' },
  { name: 'Отзывы', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Пройти тест', href: '#breathing-test', isHighlighted: true },
  { name: 'Купить курс', href: '#products' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    const section = document.querySelector(item.href);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-start flex-col">
            <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Александр Попов
            </h1>
            <span className={`text-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-600' : 'text-white/90'
            }`}>
              Инструктор по дыхательной гимнастике Бутейко
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`text-lg font-medium transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg whitespace-nowrap ${
                  isScrolled
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white hover:text-white/80 hover:bg-white/10'
                } ${
                  item.name === 'Купить курс'
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl'
                    : item.isHighlighted
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl'
                    : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Контактные иконки */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-white/30">
              <a
                href="https://t.me/AS_Popov87"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                title="Telegram"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="tel:+79224705187"
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                title="Телефон: +7 (922) 470-51-87"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <button
            className="md:hidden p-3 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800 h-8 w-8' : 'text-white h-8 w-8'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800 h-8 w-8' : 'text-white h-8 w-8'} />
            )}
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[600px]' : 'max-h-0'
        }`}>
          <div className="py-6 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`block w-full px-6 py-3 text-left text-lg font-medium rounded-lg transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white hover:text-white/80 hover:bg-white/10'
                } ${
                  item.name === 'Купить курс'
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
                    : item.isHighlighted
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
                    : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Контакты в мобильном меню */}
            <div className="flex gap-3 px-6 pt-4 border-t border-white/20">
              <a
                href="https://t.me/AS_Popov87"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Telegram</span>
              </a>
              <a
                href="tel:+79224705187"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>Позвонить</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
