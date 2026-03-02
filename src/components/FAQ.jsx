import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Это слишком дорого',
    answer: 'Дыхательные практики - это инвестиция в ваше здоровье с долгосрочной отдачей. Одно посещение врача или курс лекарств часто стоит дороже, а наш курс дает пожизненные навыки управления своим состоянием.'
  },
  {
    question: 'Где гарантия, что это поможет именно мне?',
    answer: 'Дыхательные техники научно доказаны и работают для большинства людей. Мы предлагаем 14-дневную гарантию возврата средств. Если не почувствуете улучшений после регулярной практики, мы вернем ваши деньги.'
  },
  {
    question: 'У меня нет времени на регулярные практики',
    answer: 'Наши базовые методики занимают всего 10 минут в день. Многие ученики встраивают их в повседневные ритуалы - во время утреннего кофе или перед сном. Вопрос не в наличии времени, а в приоритетах здоровья.'
  },
  {
    question: 'Я могу найти бесплатные видео на YouTube',
    answer: 'Бесплатные ресурсы отлично подходят для первого знакомства, но наш курс предлагает структурированную программу, персональные рекомендации и доступ к эксперту для вопросов - это то, чего нет в бесплатных материалах.'
  },
  {
    question: 'У меня есть заболевания, безопасно ли это для меня?',
    answer: 'Базовые техники безопасны для большинства людей. Однако при наличии серьезных заболеваний (астма, гипертония) необходимо проконсультироваться с врачом. В курсе есть специальные рекомендации для людей с различными состояниями.'
  },
  {
    question: 'Как быстро я увижу результаты?',
    answer: 'Большинство учеников отмечают первые улучшения (лучший сон, меньше тревоги) уже через 3-7 дней регулярной практики. Более глубокие эффекты для здоровья появляются через 3-4 недели.'
  },
  {
    question: 'Мне нужна постоянная поддержка, чтобы не бросить',
    answer: 'Мы предоставляем двухнедельную поддержку в Telegram для учеников полного курса. Кроме того, наше сообщество практикующих помогает поддерживать мотивацию и делиться опытом.'
  },
  {
    question: 'Я не уверен, что смогу правильно выполнять упражнения',
    answer: 'Все техники разбираются детально, с визуальными подсказками. В пакете с индивидуальными занятиями вы получаете персональную обратную связь от инструктора.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-primary-100 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на популярные вопросы о курсе
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 