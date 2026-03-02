import React, { useState } from 'react';
import { Brain, Activity, Heart, Stethoscope, UserCircle2 } from 'lucide-react';
import '../styles/ScienceBlock.css';

const ScienceBlock = () => {
  const [activeTab, setActiveTab] = useState('mechanisms');
  const [showMoreButton, setShowMoreButton] = useState(true);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleLearnMoreClick = () => {
    // Здесь будет логика для отображения информации об исследованиях
    console.log('Показать информацию об исследованиях');
  };

  const tabs = [
    {
      id: 'mechanisms',
      title: 'Как это работает',
      icon: <Brain size={24} />,
      content: (
        <div className="science-cards">
          <div className="science-card">
            <div className="card-icon">
              <Brain size={60} color="#4cdfff" />
            </div>
            <h3>Влияние на нервную систему</h3>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-value negative">-40%</div>
                <div className="stat-description">снижение стресса</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">+35%</div>
                <div className="stat-description">восстановление</div>
              </div>
            </div>
            <p>Активирует "нерв спокойствия" (блуждающий нерв), помогая быстрее расслабиться и восстановиться</p>
          </div>
          
          <div className="science-card">
            <div className="card-icon">
              <Activity size={60} color="#4cdfff" />
            </div>
            <h3>Биохимические изменения</h3>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-value negative">-23%</div>
                <div className="stat-description">кортизол</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">+20%</div>
                <div className="stat-description">кислород в тканях</div>
              </div>
            </div>
            <p>Регулярные дыхательные практики изменяют биохимию тела, снижая уровень стрессовых гормонов</p>
          </div>
          {showMoreButton && (
            <button 
              onClick={handleLearnMoreClick}
              className="learn-more-button full-width"
            >
              Узнать больше о научной базе
            </button>
          )}
        </div>
      )
    },
    {
      id: 'research',
      title: 'Проверено исследованиями',
      icon: <Activity size={24} />,
      content: (
        <div className="science-cards">
          <div className="science-card">
            <div className="card-icon">
              <Brain size={60} color="#4cdfff" />
            </div>
            <h3>Психическое здоровье</h3>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-value negative">-48%</div>
                <div className="stat-description">уровень тревожности</div>
              </div>
              <div className="stat-item">
                <div className="stat-value negative">-42%</div>
                <div className="stat-description">симптомы депрессии</div>
              </div>
            </div>
            <p>Исследования показывают значительное улучшение психологического состояния при регулярной практике</p>
          </div>
          
          <div className="science-card">
            <div className="card-icon">
              <Heart size={60} color="#4cdfff" />
            </div>
            <h3>Физическое здоровье</h3>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-value negative">-8mm</div>
                <div className="stat-description">снижение давления</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">+32%</div>
                <div className="stat-description">укрепление иммунитета</div>
              </div>
            </div>
            <p>Клинические исследования подтверждают значительное влияние на физиологические показатели</p>
          </div>

          <div className="research-info">
            <div className="info-icon">i</div>
            <p><strong>128 научных публикаций</strong> подтверждают эффективность дыхательных практик за последние 5 лет, включая исследования в таких журналах как The Lancet, JAMA и British Medical Journal.</p>
          </div>
        </div>
      )
    },
    {
      id: 'medicine',
      title: 'Признано медициной',
      icon: <Stethoscope size={24} />,
      content: (
        <div className="organizations-container">
          <h3>Признание медицинским сообществом</h3>
          <div className="org-logos">
            <div className="org-logo-item">
              <div className="org-logo-icon">
                <Stethoscope size={40} color="#4cdfff" />
              </div>
              <p>Всемирная организация здравоохранения</p>
              <div className="status">Рекомендовано с 2019 года</div>
            </div>
            <div className="org-logo-item">
              <div className="org-logo-icon">
                <Heart size={40} color="#4cdfff" />
              </div>
              <p>Американская ассоциация кардиологов</p>
              <div className="status">57 научных публикаций</div>
            </div>
            <div className="org-logo-item">
              <div className="org-logo-icon">
                <Activity size={40} color="#4cdfff" />
              </div>
              <p>Британский национальный институт здоровья</p>
              <div className="status">В официальных рекомендациях</div>
            </div>
          </div>
          
          <div className="quote-block">
            <div className="quote-marks">"</div>
            <p className="quote-text">
              Дыхательные практики перестали быть просто альтернативной медициной — сегодня они признаны ведущими медицинскими организациями мира как эффективный метод поддержания здоровья и профилактики множества состояний.
            </p>
            <div className="quote-source">Из отчета ВОЗ, 2022</div>
          </div>
        </div>
      )
    },
    {
      id: 'approach',
      title: 'Индивидуальный подход',
      icon: <UserCircle2 size={24} />,
      content: (
        <div className="personalized-approach">
          <div className="factors-grid">
            <div className="factor-item">
              <div className="factor-icon">
                <UserCircle2 size={30} color="#4cdfff" />
              </div>
              <div className="factor-content">
                <h4>Физические особенности</h4>
                <ul className="factor-list">
                  <li>Анализ строения дыхательной системы</li>
                  <li>Учет физиологических особенностей</li>
                  <li>Адаптация под активность</li>
                </ul>
              </div>
            </div>
            <div className="factor-item">
              <div className="factor-icon">
                <Heart size={30} color="#4cdfff" />
              </div>
              <div className="factor-content">
                <h4>Здоровье</h4>
                <ul className="factor-list">
                  <li>Учет имеющихся состояний здоровья</li>
                  <li>Безопасные уровни нагрузки</li>
                  <li>Техники для конкретных состояний</li>
                </ul>
              </div>
            </div>
            <div className="factor-item">
              <div className="factor-icon">
                <Brain size={30} color="#4cdfff" />
              </div>
              <div className="factor-content">
                <h4>Эмоциональное состояние</h4>
                <ul className="factor-list">
                  <li>Техники для снижения тревожности</li>
                  <li>Практики для разных эмоций</li>
                  <li>Корректировка под уровень стресса</li>
                </ul>
              </div>
            </div>
            <div className="factor-item">
              <div className="factor-icon">
                <Activity size={30} color="#4cdfff" />
              </div>
              <div className="factor-content">
                <h4>Дыхательный паттерн</h4>
                <ul className="factor-list">
                  <li>Анализ естественного ритма дыхания</li>
                  <li>Постепенная корректировка</li>
                  <li>Мониторинг прогресса</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="science-base">
            <div className="science-base-title">Научная основа:</div>
            <p className="science-base-text">
              Наш подход основан на лучших мировых практиках и более чем 200 научных исследованиях. 
              Мы индивидуально адаптируем методики для достижения максимального эффекта именно в вашем случае.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="science-block">
      <div className="container">
        <h2 className="section-title">Научное обоснование дыхательных практик</h2>
        
        <div className="science-tabs">
          <div className="tab-buttons">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>
          
          <div className="tab-content">
            {tabs.find(tab => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceBlock; 