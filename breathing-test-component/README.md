# Breathing Test Component

React-компонент для проведения теста на оценку дыхания.

## Установка

```bash
npm install breathing-test-component
```

## Использование

```jsx
import { BreathingTest } from 'breathing-test-component';

function App() {
  const handleTestComplete = (score) => {
    console.log('Тест завершен, результат:', score);
  };

  return (
    <div>
      <h1>Тест дыхания</h1>
      <BreathingTest onComplete={handleTestComplete} />
    </div>
  );
}
```

## Props

| Prop | Тип | Описание |
|------|-----|----------|
| onComplete | function | Callback-функция, вызывается при завершении теста. Получает итоговый балл в качестве аргумента. |

## Зависимости

- React 18+
- Framer Motion
- Lucide React

## Стилизация

Компонент использует собственные CSS-классы, которые можно переопределить в вашем проекте. Основные классы:

- `.breathing-test-container`
- `.question-container`
- `.options-container`
- `.option-button`
- `.results-container`

## Лицензия

MIT 