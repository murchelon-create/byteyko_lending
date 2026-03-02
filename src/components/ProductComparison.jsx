import React from 'react';
import '../styles/ProductComparison.css';

const ProductComparison = () => {
  return (
    <section className="products-comparison light-bg">
      <div className="container">
        <h2 className="section-title text-center">Сравнение программ и выбор подходящего формата</h2>
        <p className="section-subtitle text-center">Выберите оптимальный вариант для достижения ваших целей оздоровления</p>
        
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-header">Характеристики</th>
                <th className="product-header">
                  <div className="product-name">Стартовый комплект</div>
                  <div className="product-price">990₽</div>
                  <div className="old-price">2600₽</div>
                  <div className="discount-badge">-62%</div>
                </th>
                <th className="product-header">
                  <div className="product-name">Индивидуальные консультации</div>
                  <div className="product-price">4 500₽</div>
                  <div className="old-price">6000₽</div>
                  <div className="discount-badge">-25%</div>
                  <div className="text-sm text-gray-600 mt-1">(3 консультации)</div>
                </th>
                <th className="product-header highlight">
                  <div className="bestseller-tag">Лучший выбор</div>
                  <div className="product-name">Полный курс</div>
                  <div className="product-price">14 999₽</div>
                  <div className="old-price">22000₽</div>
                  <div className="discount-badge">-32%</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Основное содержание */}
              <tr>
                <td className="feature-name">Доступ к материалам</td>
                <td>Навсегда</td>
                <td>60 дней</td>
                <td>6 месяцев</td>
              </tr>
              <tr>
                <td className="feature-name">Формат</td>
                <td>Видеоурок и PDF</td>
                <td>3 персональные консультации</td>
                <td>Видеоуроки</td>
              </tr>
              <tr>
                <td className="feature-name">Базовые техники дыхания</td>
                <td><span className="yes-icon">✓</span></td>
                <td><span className="yes-icon">✓</span></td>
                <td><span className="yes-icon">✓</span></td>
              </tr>
              <tr>
                <td className="feature-name">Оздоровительные практики</td>
                <td>2 базовые</td>
                <td>Индивидуальный подбор</td>
                <td>Полный комплекс (12+)</td>
              </tr>
              <tr>
                <td className="feature-name">Поддержка</td>
                <td><span className="no-icon">×</span></td>
                <td>Во время консультаций</td>
                <td>2 недели</td>
              </tr>
              
              {/* Здоровье и профилактика болезней */}
              <tr className="category-row">
                <td colSpan="4">Оздоровительный эффект</td>
              </tr>
              <tr>
                <td className="feature-name">Снижение тревожности</td>
                <td><span className="partial-icon">◐</span></td>
                <td><span className="yes-icon">✓</span></td>
                <td><span className="yes-icon">✓</span></td>
              </tr>
              <tr>
                <td className="feature-name">Повышение энергии</td>
                <td><span className="partial-icon">◐</span></td>
                <td><span className="yes-icon">✓</span></td>
                <td><span className="yes-icon">✓</span></td>
              </tr>
              <tr>
                <td className="feature-name">Улучшение сна</td>
                <td><span className="partial-icon">◐</span></td>
                <td><span className="yes-icon">✓</span></td>
                <td><span className="yes-icon">✓</span></td>
              </tr>
              <tr>
                <td className="feature-name">Нормализация давления</td>
                <td><span className="partial-icon">◐</span></td>
                <td><span className="yes-icon">✓</span></td>
                <td><span className="yes-icon">✓</span></td>
              </tr>
              <tr>
                <td className="feature-name">Профилактика заболеваний</td>
                <td>15+ состояний</td>
                <td>30+ состояний</td>
                <td>100+ заболеваний</td>
              </tr>
              
              {/* Бонусы */}
              <tr className="category-row">
                <td colSpan="4">Бонусы</td>
              </tr>
              <tr>
                <td className="feature-name">Урок по замеру контрольной паузы</td>
                <td><span className="yes-icon">✓</span></td>
                <td><span className="yes-icon">✓</span></td>
                <td><span className="yes-icon">✓</span></td>
              </tr>
              <tr>
                <td className="feature-name">Аудиозапись для медитации</td>
                <td><span className="yes-icon">✓</span></td>
                <td><span className="no-icon">×</span></td>
                <td><span className="no-icon">×</span></td>
              </tr>
              <tr>
                <td className="feature-name">Анализ дыхания</td>
                <td><span className="no-icon">×</span></td>
                <td><span className="yes-icon">✓</span></td>
                <td><span className="no-icon">×</span></td>
              </tr>
              <tr>
                <td className="feature-name">Персональное сопровождение</td>
                <td><span className="no-icon">×</span></td>
                <td>Во время консультаций</td>
                <td>2 недели</td>
              </tr>
              <tr>
                <td className="feature-name">Урок по дыхательным практикам для детей</td>
                <td><span className="no-icon">×</span></td>
                <td><span className="no-icon">×</span></td>
                <td><span className="yes-icon">✓</span></td>
              </tr>
              
              {/* Кнопки покупки */}
              <tr className="action-row">
                <td></td>
                <td>
                  <a href="#basic" className="cta-button cta-small">Получить доступ</a>
                </td>
                <td>
                  <a href="#consultation" className="cta-button cta-small">Забронировать</a>
                </td>
                <td>
                  <a href="#complete" className="cta-button cta-small cta-primary">Начать обучение</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="table-footnote">
          <p>* Результаты могут отличаться в зависимости от индивидуальных особенностей и регулярности практики</p>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison; 