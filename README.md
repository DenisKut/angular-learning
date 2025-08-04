# Angular Learning Project

Этот проект создан для изучения Angular с настройкой современных инструментов разработки.

Проект был сгенерирован с помощью [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## Настройка инструментов разработки

Проект настроен с использованием современных инструментов для обеспечения качества кода:

### 🎨 Prettier

- Автоматическое форматирование кода
- Конфигурация в `.prettierrc`
- Игнорируемые файлы в `.prettierignore`

### 🔍 ESLint

- Проверка качества TypeScript кода
- Конфигурация в `eslint.config.js`
- Включает правила для TypeScript и сортировки импортов

### 🎯 Stylelint

- Проверка качества CSS/SCSS кода
- Конфигурация в `.stylelintrc.cjs`
- Поддержка SCSS синтаксиса

### 📝 Commitlint

- Проверка формата коммитов согласно Conventional Commits
- Конфигурация в `commitlint.config.js`

### 🐶 Husky + Lint-staged

- Автоматический запуск проверок перед коммитом
- Pre-commit hook запускает lint-staged
- Commit-msg hook проверяет формат сообщения коммита

## Development server

To start a local development server, run:

```bash
bun start
```

## Доступные команды

### Разработка

```bash
bun start          # Запуск dev сервера (ng serve)
bun run build      # Сборка проекта
bun test           # Запуск тестов
```

### Проверка кода

```bash
bun run lint              # Проверка TypeScript
bun run lint:fix          # Исправление проблем ESLint
bun run format            # Форматирование всех файлов
bun run format:check      # Проверка форматирования
bun run stylelint         # Проверка стилей
bun run stylelint:fix     # Исправление проблем Stylelint
```

## Формат коммитов

Используйте conventional commits формат:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Типы коммитов:

- `feat` — новая функциональность
- `fix` — исправление бага
- `docs` — только документация
- `style` — форматирование
- `refactor` — рефакторинг
- `perf` — улучшение производительности
- `test` — тесты
- `chore` — обновление сборки/зависимостей
- `ci` — изменения в CI/CD
- `build` — изменения в сборке

### Примеры:

```bash
git commit -m "feat: добавлен новый компонент"
git commit -m "fix: исправлена ошибка валидации"
git commit -m "docs: обновлена документация API"
```

## Рабочий процесс

1. Делайте изменения в коде
2. При коммите автоматически запустятся:
   - Prettier (форматирование)
   - ESLint (проверка TypeScript)
   - Stylelint (проверка стилей)
   - Commitlint (проверка формата сообщения)
3. Если есть ошибки - исправьте их и попробуйте снова

## Additional Resources

For more information on using the Angular CLI, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
