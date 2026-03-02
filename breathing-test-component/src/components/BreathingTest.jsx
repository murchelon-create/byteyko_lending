import React, { useState, useEffect } from 'react';
import { ClipboardCheck, X, ArrowLeft, AlertTriangle, CheckCircle2, AlertCircle, Shield, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/breathing-test.css';

const questions = [
  {
    id: 1,
    category: 'breathing',
    question: 'Как часто вы испытываете затруднения с дыханием?',
    options: [
      { text: 'Практически никогда', score: 1 },
      { text: 'Иногда в течение дня', score: 2 },
      { text: 'Часто чувствую нехватку воздуха', score: 3 },
      { text: 'Постоянно ощущаю проблемы с дыханием', score: 4 }
    ],
    impact: {
      anxiety: 0.5,
      energy: 0.3
    }
  },
  {
    id: 2,
    category: 'energy',
    question: 'Как бы вы оценили свой уровень энергии в течение дня?',
    options: [
      { text: 'Высокий уровень энергии весь день', score: 1 },
      { text: 'Средний уровень, бывает усталость', score: 2 },
      { text: 'Часто чувствую упадок сил', score: 3 },
      { text: 'Постоянная усталость', score: 4 }
    ],
    impact: {
      sleep: 0.4,
      breathing: 0.3
    }
  }
  // ... остальные вопросы
];

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.645, 0.045, 0.355, 1.000]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3
    }
  }
};

const BreathingTest = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalScore = newAnswers.reduce((acc, curr) => acc + curr, 0);
      setTotalScore(finalScore);
      setShowResults(true);
      if (onComplete) {
        onComplete(finalScore);
      }
    }
  };

  const getResultCategory = (score) => {
    const maxScore = questions.length * 4;
    const percentage = (score / maxScore) * 100;

    if (percentage <= 35) {
      return {
        title: 'Хороший результат',
        description: 'Ваше дыхание в целом здоровое, но есть потенциал для улучшения.',
        icon: <CheckCircle2 className="h-12 w-12 text-green-500" />,
        color: 'bg-green-100 text-green-800'
      };
    } else if (percentage <= 65) {
      return {
        title: 'Требует внимания',
        description: 'Есть признаки нарушения дыхательного паттерна, которые можно исправить.',
        icon: <AlertCircle className="h-12 w-12 text-yellow-500" />,
        color: 'bg-yellow-100 text-yellow-800'
      };
    } else {
      return {
        title: 'Необходима коррекция',
        description: 'Выявлены серьезные отклонения в паттерне дыхания.',
        icon: <AlertTriangle className="h-12 w-12 text-red-500" />,
        color: 'bg-red-100 text-red-800'
      };
    }
  };

  const result = getResultCategory(totalScore);

  return (
    <div className="breathing-test-container">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="question"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            className="question-container"
          >
            <div className="progress-bar">
              <div 
                className="progress"
                style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
              />
            </div>
            
            <h3 className="question-title">
              {questions[currentQuestion].question}
            </h3>
            
            <div className="options-container">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="option-button"
                  onClick={() => handleAnswer(option.score)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            className={`results-container ${result.color}`}
          >
            <div className="result-icon">
              {result.icon}
            </div>
            <h3 className="result-title">{result.title}</h3>
            <p className="result-description">{result.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BreathingTest; 