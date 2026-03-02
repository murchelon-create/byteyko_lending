import React, { useState, useEffect } from 'react';
import '../styles/BreathingTest.css';

const BreathingTest = () => {
  // Состояния теста
  const [currentScreen, setCurrentScreen] = useState('screening'); // screening, base, specialized, results
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [healthConditions, setHealthConditions] = useState([]);
  const [activityLevel, setActivityLevel] = useState('');
  const [breathingGoal, setBreathingGoal] = useState('');
  const [specializedQuestions, setSpecializedQuestions] = useState([]);

  // Вопросы для скрининга здоровья
  const healthScreeningQuestions = [
    {
      id: 'health_conditions',
      type: 'checkbox',
      text: 'Отметьте, если у вас есть следующие состояния:',
      options: [
        { value: 'asthma', label: 'Астма', description: 'Хроническое воспалительное заболевание дыхательных путей' },
        { value: 'hypertension', label: 'Гипертония', description: 'Повышенное артериальное давление' },
        { value: 'copd', label: 'ХОБЛ', description: 'Хроническая обструктивная болезнь лёгких' },
        { value: 'anxiety', label: 'Тревожное расстройство', description: 'Повышенная тревожность, панические атаки' },
        { value: 'sleep_apnea', label: 'Апноэ сна', description: 'Остановки дыхания во время сна' },
        { value: 'none', label: 'Ничего из перечисленного', description: 'У меня нет диагностированных заболеваний' }
      ]
    },
    {
      id: 'activity_level',
      type: 'radio',
      text: 'Уровень вашей физической активности:',
      options: [
        { value: 'low', label: 'Низкий', description: 'Минимальная активность, преимущественно сидячий образ жизни' },
        { value: 'moderate', label: 'Средний', description: 'Регулярные прогулки, умеренная активность' },
        { value: 'high', label: 'Высокий', description: 'Регулярные тренировки, активный образ жизни' }
      ]
    },
    {
      id: 'breathing_goal',
      type: 'radio',
      text: 'Ваша основная цель улучшения дыхания:',
      options: [
        { value: 'health', label: 'Улучшение здоровья', description: 'Решение проблем, связанных со здоровьем' },
        { value: 'stress', label: 'Снижение стресса', description: 'Работа с тревожностью и психоэмоциональным состоянием' },
        { value: 'energy', label: 'Больше энергии', description: 'Повышение работоспособности и жизненного тонуса' },
        { value: 'sleep', label: 'Улучшение сна', description: 'Решение проблем с засыпанием и качеством сна' }
      ]
    }
  ];

  // Базовые вопросы для всех
  const baseQuestions = [
    {
      id: 'morning_fatigue',
      text: 'Как часто вы просыпаетесь с чувством усталости?',
      options: [
        { value: 'never', label: 'Никогда' },
        { value: 'rarely', label: 'Редко' },
        { value: 'sometimes', label: 'Иногда' },
        { value: 'often', label: 'Часто' }
      ]
    },
    {
      id: 'stress_breathing',
      text: 'Замечаете ли вы, что ваше дыхание учащается в стрессовых ситуациях?',
      options: [
        { value: 'never', label: 'Никогда' },
        { value: 'rarely', label: 'Редко' },
        { value: 'sometimes', label: 'Иногда' },
        { value: 'often', label: 'Часто' }
      ]
    },
    {
      id: 'exercise_breathing',
      text: 'Как быстро вы начинаете тяжело дышать при физической нагрузке?',
      options: [
        { value: 'slow', label: 'Медленно' },
        { value: 'normal', label: 'Нормально' },
        { value: 'fast', label: 'Быстро' },
        { value: 'very_fast', label: 'Очень быстро' }
      ]
    }
  ];

  // Специализированные вопросы по заболеваниям
  const specializedQuestionsByCondition = {
    asthma: [
      {
        id: 'asthma_inhaler',
        text: 'Как часто вы используете ингалятор для облегчения симптомов астмы?',
        options: [
          { value: 'rarely', label: 'Практически не использую (реже раза в месяц)' },
          { value: 'sometimes', label: 'Иногда (1-2 раза в месяц)' },
          { value: 'often', label: 'Регулярно (несколько раз в неделю)' },
          { value: 'daily', label: 'Ежедневно или почти ежедневно' }
        ]
      }
    ],
    hypertension: [
      {
        id: 'hypertension_breathing',
        text: 'Замечаете ли вы связь между вашим дыханием и колебаниями артериального давления?',
        options: [
          { value: 'no_connection', label: 'Не замечал(а) никакой связи' },
          { value: 'sometimes', label: 'Иногда при стрессе замечаю учащение дыхания и повышение давления' },
          { value: 'often', label: 'Часто наблюдаю, что при неправильном дыхании повышается давление' },
          { value: 'clear_connection', label: 'Определенно есть прямая связь между моим дыханием и давлением' }
        ]
      }
    ]
  };

  // Обработчики
  const handleHealthConditionsChange = (selectedConditions) => {
    setHealthConditions(selectedConditions);
  };

  const handleActivityLevelChange = (level) => {
    setActivityLevel(level);
  };

  const handleBreathingGoalChange = (goal) => {
    setBreathingGoal(goal);
  };

  const handleScreeningSubmit = () => {
    // Проверяем, что все необходимые поля заполнены
    if (healthConditions.length > 0 && activityLevel && breathingGoal) {
      // Формируем специализированные вопросы на основе выбранных заболеваний
      const specialQuestions = healthConditions.reduce((acc, condition) => {
        if (specializedQuestionsByCondition[condition]) {
          return [...acc, ...specializedQuestionsByCondition[condition]];
        }
        return acc;
      }, []);
      
      setSpecializedQuestions(specialQuestions);
      setCurrentScreen('base');
      setCurrentQuestionIndex(0);
    }
  };

  const handleAnswer = (answer) => {
    // Сохраняем ответ
    setAnswers(prev => ({
      ...prev,
      [getCurrentQuestion().id]: answer
    }));

    // Определяем следующий шаг
    if (currentScreen === 'base') {
      if (currentQuestionIndex < baseQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else if (specializedQuestions.length > 0) {
        setCurrentScreen('specialized');
        setCurrentQuestionIndex(0);
      } else {
        setCurrentScreen('results');
      }
    } else if (currentScreen === 'specialized') {
      if (currentQuestionIndex < specializedQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setCurrentScreen('results');
      }
    }
  };

  const getCurrentQuestion = () => {
    if (currentScreen === 'base') {
      return baseQuestions[currentQuestionIndex];
    } else if (currentScreen === 'specialized') {
      return specializedQuestions[currentQuestionIndex];
    }
    return null;
  };

  const calculateProgress = () => {
    const totalQuestions = baseQuestions.length + specializedQuestions.length;
    let answeredQuestions = 0;

    if (currentScreen === 'base') {
      answeredQuestions = currentQuestionIndex;
    } else if (currentScreen === 'specialized') {
      answeredQuestions = baseQuestions.length + currentQuestionIndex;
    } else if (currentScreen === 'results') {
      answeredQuestions = totalQuestions;
    }

    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  // Компоненты для разных экранов
  const ScreeningForm = () => (
    <div className="test-modal health-screening">
      <div className="modal-header">
        <div className="status-indicator">
          <div className="status-icon"></div>
          <div className="status-text">Подготовка персонализированного теста</div>
        </div>
      </div>

      <div className="modal-title">
        <h2>Давайте создадим тест специально для вас</h2>
        <p className="subtitle">Ответьте на несколько вопросов, чтобы мы могли адаптировать тест под ваши особенности</p>
      </div>

      <div className="health-form">
        {healthScreeningQuestions.map((question) => (
          <div key={question.id} className="health-question">
            <p>{question.text}</p>
            <div className="health-options">
              {question.options.map((option) => (
                <label key={option.value} className="health-option">
                  <input
                    type={question.type}
                    name={question.id}
                    value={option.value}
                    onChange={(e) => {
                      if (question.id === 'health_conditions') {
                        const newValue = e.target.checked
                          ? [...healthConditions, option.value]
                          : healthConditions.filter(c => c !== option.value);
                        handleHealthConditionsChange(newValue);
                      } else if (question.id === 'activity_level') {
                        handleActivityLevelChange(option.value);
                      } else if (question.id === 'breathing_goal') {
                        handleBreathingGoalChange(option.value);
                      }
                    }}
                  />
                  <span className={question.type === 'checkbox' ? 'checkbox-custom' : 'radio-custom'}></span>
                  <div className="option-content">
                    <span className="option-title">{option.label}</span>
                    <span className="option-description">{option.description}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="disclaimers">
        <p className="disclaimer-text">
          💡 <strong>Важно:</strong> Адаптированный тест НЕ является медицинской диагностикой и не заменяет консультацию врача
        </p>
      </div>

      <div className="form-actions">
        <button className="cta-button" onClick={handleScreeningSubmit}>
          Создать персональный тест
          <span className="button-icon">→</span>
        </button>
      </div>
    </div>
  );

  const QuestionScreen = () => {
    const question = getCurrentQuestion();
    if (!question) return null;

    return (
      <div className="test-modal test-question">
        <div className="modal-header">
          <div className="status-indicator">
            <div className="status-icon"></div>
            <div className="status-text">
              {currentScreen === 'specialized' ? 'Специализированный вопрос' : 'Базовый вопрос'}
            </div>
          </div>
        </div>

        <div className="test-progress">
          <div className="question-counter">
            Вопрос {currentQuestionIndex + 1} из {
              currentScreen === 'base' ? baseQuestions.length : specializedQuestions.length
            }
          </div>
          <div className="progress-percentage">Прогресс: {calculateProgress()}%</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${calculateProgress()}%` }}></div>
          </div>
        </div>

        <div className="question-content">
          <h3 className="question-title">{question.text}</h3>
          <div className="question-options">
            {question.options.map((option) => (
              <label key={option.value} className="option-card">
                <div className="option-radio">
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    onChange={() => handleAnswer(option.value)}
                  />
                  <span className="radio-custom"></span>
                </div>
                <span className="option-text">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <div className="time-remaining">
            <div className="time-icon"></div>
            <div className="time-text">Осталось примерно 2-3 минуты</div>
          </div>
          <div className="security-notice">
            <div className="security-icon"></div>
            <div className="security-text">Ваши данные защищены и не передаются третьим лицам</div>
          </div>
        </div>
      </div>
    );
  };

  const ResultsScreen = () => (
    <div className="test-modal test-results">
      <div className="modal-header">
        <div className="status-indicator success">
          <div className="status-icon"></div>
          <div className="status-text">Тест завершен! Результаты готовы</div>
        </div>
      </div>

      <div className="results-content">
        <h2 className="results-title">Ваш персональный анализ дыхания</h2>
        <p className="results-subtitle">Результаты адаптированы с учетом ваших особенностей</p>

        <div className="results-summary">
          <div className="summary-tag">
            <span className="tag-icon">🔍</span> Персонализированный анализ
          </div>
          {healthConditions.map((condition) => (
            <div key={condition} className="summary-tag condition-tag">
              <span className="tag-icon">🫁</span> 
              Учтены особенности {condition === 'asthma' ? 'астмы' : condition}
            </div>
          ))}
        </div>

        <div className="results-card">
          <h3>Основные выявленные проблемы:</h3>
          <div className="problems-list">
            {Object.entries(answers).map(([questionId, answer]) => {
              const question = [...baseQuestions, ...specializedQuestions]
                .find(q => q.id === questionId);
              const option = question?.options.find(o => o.value === answer);
              
              return (
                <div key={questionId} className="problem-item">
                  <span className="problem-icon">⚠️</span>
                  <div className="problem-content">
                    <span className="problem-title">{question?.text}</span>
                    <span className="problem-description">Ваш ответ: {option?.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="next-steps">
          <h3>Что дальше?</h3>
          <p>Для получения полного плана с персональными рекомендациями и специализированными упражнениями, оставьте ваши контакты:</p>

          <div className="form-fields">
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input type="text" id="name" placeholder="Имя" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email для получения результатов</label>
              <input type="email" id="email" placeholder="email@example.com" />
            </div>
          </div>

          <button className="cta-button results-button">
            Получить персональный план дыхательных практик
          </button>

          <div className="results-guarantee">
            <div className="guarantee-icon">🔒</div>
            <p className="guarantee-text">
              Ваши данные защищены. Никакого спама, только полезная информация для вашего здоровья
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="breathing-test">
      {currentScreen === 'screening' && <ScreeningForm />}
      {(currentScreen === 'base' || currentScreen === 'specialized') && <QuestionScreen />}
      {currentScreen === 'results' && <ResultsScreen />}
    </div>
  );
};

export default BreathingTest; 