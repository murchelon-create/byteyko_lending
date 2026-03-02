import React from 'react';
import { Check, Gift, Send, Clock } from 'lucide-react';
import SectionTransition from './SectionTransition';

const TELEGRAM_BOT = 'breathing_opros_bot'; // Имя бота для обработки заказов

const Products = () => {
  const courseModules = [
    {
      title: 'Модуль 1: Основы дыхания',
      description: 'После этого модуля вы поймете базовые принципы правильного дыхания',
      duration: '2 недели'
    },
    {
      title: 'Модуль 2: Оздоравливающие практики',
      description: 'Оздоровите организм более чем от 100+ заболеваний',
      duration: '2 недели'
    },
    {
      title: 'Модуль 3: Энергетические практики',
      description: 'Освоите техники для повышения энергии и работоспособности',
      duration: '2 недели'
    },
    {
      title: 'Модуль 4: Правильные привычки',
      description: 'Научитесь применять техники в повседневной жизни',
      duration: '2 недели'
    }
  ];

  const handleTelegramRedirect = (product) => {
    const links = {
      starter: `https://t.me/${TELEGRAM_BOT}?start=starter`,
      consultation: `https://t.me/${TELEGRAM_BOT}?start=consultation`,
      course: `https://t.me/${TELEGRAM_BOT}?start=course`
    };
    window.open(links[product], '_blank');
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-primary-100">
      <SectionTransition>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Подробное описание каждого формата
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Изучите детальную информацию о каждом формате обучения и выберите наиболее подходящий для вас вариант
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Стартовый комплект */}
            <div id="basic" className="bg-white rounded-2xl shadow-xl group hover:shadow-2xl transition-all duration-300">
              <div className="relative p-8">
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-xl text-lg transform rotate-12 shadow-lg font-bold z-10 whitespace-nowrap">
                  💎 Самый доступный старт 💎
                </div>
                <div className="bg-teal-50 rounded-xl p-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Стартовый комплект дыхательных практик</h3>
                  <p className="text-gray-600 mt-2">Идеально для начинающих</p>
                  <div className="mt-2 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    ⚡️ Мгновенный доступ
                  </div>
                </div>
                <div className="space-y-4 mb-8 bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900">Преимущества:</h4>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Видеоурок длительностью 40 минут</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">PDF-инструкция для самостоятельной практики</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Мгновенный доступ после оплаты</span>
                  </div>
                </div>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-8">
                  <div className="flex items-center gap-2 text-yellow-600 font-bold mb-2">
                    <Gift className="h-5 w-5" />
                    <span>Бонусы:</span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-yellow-800 flex items-center">
                      <Check className="h-4 w-4 text-yellow-600 mr-2" />
                      Урок по замеру контрольной паузы
                    </div>
                    <div className="text-yellow-800 flex items-center">
                      <Check className="h-4 w-4 text-yellow-600 mr-2" />
                      Аудиозапись для медитативного дыхания (15 минут)
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900">990</span>
                    <span className="text-xl text-gray-500 ml-1">₽</span>
                    <span className="ml-3 text-lg text-gray-400 line-through">2600 ₽</span>
                    <span className="ml-2 text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">-62%</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleTelegramRedirect('starter')}
                  className="w-full bg-primary-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Получить доступ через Telegram
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Доступ открывается мгновенно после оплаты
                </p>
              </div>
            </div>

            {/* Индивидуальные консультации */}
            <div id="consultation" className="bg-white rounded-2xl shadow-xl group hover:shadow-2xl transition-all duration-300">
              <div className="relative p-8">
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-xl text-lg transform rotate-12 shadow-lg font-bold z-10 whitespace-nowrap">
                  ⭐️ Персональный подход ⭐️
                </div>
                <div className="bg-teal-50 rounded-xl p-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Индивидуальные консультации</h3>
                  <p className="text-gray-600 mt-2">Пакет из 3 персональных консультаций</p>
                  <div className="mt-2 inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-base font-semibold">
                    <Clock className="h-5 w-5 animate-pulse" />
                    Осталось 2 места на этой неделе
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Разбор вашей техники дыхания</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Работа с вашими запросами</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Видеозапись консультаций для повторного просмотра</span>
                  </div>
                </div>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-8">
                  <div className="flex items-center gap-2 text-yellow-600 font-bold mb-2">
                    <Gift className="h-5 w-5" />
                    <span>Ваш бонус:</span>
                  </div>
                  <div className="text-yellow-800 font-medium">
                    Бесплатный краткий анализ вашего дыхания перед первой консультацией
                  </div>
                </div>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">4 500</span>
                  <span className="text-xl text-gray-500 ml-1">₽</span>
                  <span className="ml-3 text-lg text-gray-400 line-through">6 000 ₽</span>
                  <span className="ml-2 text-sm text-red-500 font-medium">-25%</span>
                </div>
                <button 
                  onClick={() => handleTelegramRedirect('consultation')}
                  className="w-full bg-primary-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Записаться на консультации в Telegram
                </button>
              </div>
            </div>

            {/* Полный курс видеоуроков */}
            <div id="complete" className="bg-white rounded-2xl shadow-xl group hover:shadow-2xl transition-all duration-300">
              <div className="relative p-8">
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-xl text-lg transform rotate-12 shadow-lg font-bold z-10 whitespace-nowrap">
                  🔥 Акция -20% 🔥
                </div>
                <div className="bg-teal-50 rounded-xl p-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Полный курс видеоуроков</h3>
                  <p className="text-gray-600 mt-2">2 недели поддержки + доступ к материалам 6 месяцев</p>
                  <div className="mt-2 inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-base font-semibold">
                    <Clock className="h-5 w-5 animate-pulse" />
                    Скидка действует 24 часа
                  </div>
                </div>
                <div className="space-y-6 mb-8">
                  {courseModules.map((module, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-primary-200">
                      <div className="absolute left-0 top-0 -ml-[9px] h-4 w-4 rounded-full bg-primary-600" />
                      <h4 className="font-semibold text-gray-900 mb-1">{module.title}</h4>
                      <p className="text-gray-600 text-sm mb-1">{module.description}</p>
                      <p className="text-sm text-primary-600">{module.duration}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-8">
                  <div className="flex items-center gap-2 text-yellow-600 font-bold mb-2">
                    <Gift className="h-5 w-5" />
                    <span>Ваш бонус:</span>
                  </div>
                  <div className="text-yellow-800 font-medium flex items-center">
                    <Check className="h-4 w-4 text-yellow-600 mr-2" />
                    Урок по дыхательным практикам для детей
                  </div>
                  <div className="text-yellow-800 font-medium flex items-center mt-2">
                    <Check className="h-4 w-4 text-yellow-600 mr-2" />
                    2 недели персонального сопровождения
                  </div>
                </div>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">11 900</span>
                  <span className="text-xl text-gray-500 ml-1">₽</span>
                  <span className="ml-3 text-lg text-gray-400 line-through">16 000 ₽</span>
                  <span className="ml-2 text-sm text-red-500 font-medium">-26%</span>
                </div>
                <button 
                  onClick={() => handleTelegramRedirect('course')}
                  className="w-full bg-primary-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Начать обучение через Telegram
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>
    </section>
  );
};

export default Products; 