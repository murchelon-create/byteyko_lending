import React, { useEffect } from 'react';
import '../styles/InteractiveButtons.css';

const InteractiveButtons = () => {
  useEffect(() => {
    // Обработка переключения табов
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Эффект пульсации для кнопки
    function createRipple(event) {
      const button = event.currentTarget;
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
      circle.classList.add('ripple');
      
      const ripple = button.querySelector('.ripple');
      if (ripple) {
        ripple.remove();
      }
      
      button.appendChild(circle);
    }

    const warningButton = document.querySelector('.warning-button');
    if (warningButton) {
      warningButton.addEventListener('click', createRipple);
    }

    // Очистка обработчиков событий
    return () => {
      if (warningButton) {
        warningButton.removeEventListener('click', createRipple);
      }
    };
  }, []);

  return (
    <div className="test-section">
      <div className="main-cta-button">
        <button className="animated-button primary-button glow-effect">
          <span className="button-content">
            <span className="button-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 12L7 12M17 12L13 16M17 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="button-text">Пройти тест за 2-3 минуты</span>
          </span>
          <span className="glow-container">
            <span className="glow"></span>
          </span>
        </button>
      </div>
      
      <div className="warning-cta-button">
        <button className="animated-button warning-button pulse-effect">
          <span className="button-content">
            <span className="button-icon warning-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V14M12 17.5V18M4.9 19C3.8 19 3 18.2 3 17.1V6.9C3 5.8 3.8 5 4.9 5H19.1C20.2 5 21 5.8 21 6.9V17.1C21 18.2 20.2 19 19.1 19H4.9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="button-text">Начать исправлять сейчас</span>
          </span>
        </button>
      </div>
      
      <div className="info-cta-button">
        <button className="animated-button info-button shine-effect">
          <span className="button-text">Узнать больше о научной базе</span>
          <span className="shine"></span>
        </button>
      </div>
      
      <div className="tab-buttons">
        <button className="tab-button active">
          <span className="tab-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C12 13.1046 11.1046 14 10 14C8.89543 14 8 13.1046 8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </span>
          <span className="tab-text">Как это работает</span>
        </button>
        
        <button className="tab-button">
          <span className="tab-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12H15M9 16H15M16.1109 3C17.6655 3 18.6681 3 19.3637 3.73C20 4.3993 20 5.44522 20 7H4C4 5.44522 4 4.3993 4.63634 3.73C5.33186 3 6.33454 3 8 3H16.1109ZM4 7H20V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="tab-text">Проверено исследованиями</span>
        </button>
        
        <button className="tab-button">
          <span className="tab-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L12 20M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="tab-text">Признано медициной</span>
        </button>
        
        <button className="tab-button">
          <span className="tab-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 18C17 18.5523 16.5523 19 16 19C15.4477 19 15 18.5523 15 18C15 17.4477 15.4477 17 16 17C16.5523 17 17 17.4477 17 18Z" fill="currentColor"/>
              <path d="M12 6C12 6.55228 11.5523 7 11 7C10.4477 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5C11.5523 5 12 5.44772 12 6Z" fill="currentColor"/>
              <path d="M7 15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14C6.55228 14 7 14.4477 7 15Z" fill="currentColor"/>
              <path d="M6.5 14L10.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15.5 17L11.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="tab-text">Индивидуальный подход</span>
        </button>
      </div>
    </div>
  );
};

export default InteractiveButtons; 