# AI-асистент CEO — довідник сценаріїв

Публічний сайт-довідник: готові промпти та сценарії, як перетворити ChatGPT або
Claude на персонального асистента CEO з доступом до пошти, календаря, CRM і
документів. Кожен сценарій можна розгорнути, скопіювати промпт однією кнопкою і
зробити з нього регулярну задачу.

Живий сайт: **https://remilink.github.io/ceo-assistant/**

## Як редагувати

Увесь контент — це Markdown у `docs/`. Один файл на розділ.

- `docs/index.md` — Вступ
- `docs/quick-start.md` — Швидкий старт (конектори + інструкції)
- `docs/scenarios.md` — Сценарії (картки з промптами)
- `docs/schedule.md` — Регулярні задачі
- `docs/future.md` — Ідеї на майбутнє
- `docs/about.md` — Про нас / Контакти

Найпростіший спосіб правки — кнопка ✏️ «Редагувати» на будь-якій сторінці
(веде у файл на GitHub). Після `git push` у `main` сайт перезбирається
автоматично (~1 хв) через GitHub Actions.

### Додати новий сценарій

Скопіюйте в `docs/scenarios.md` блок картки й змініть текст:

```markdown
??? tip "Назва сценарію"
    Один рядок опису — що робить асистент.

    **Потрібно:** `Gmail` · `Google Calendar` · `HubSpot`

    ```text
    Тут повний готовий промпт...
    ```
```

### Додати скріншот

1. Покладіть PNG у `docs/assets/` (напр. `docs/assets/my-shot.png`).
2. У картці додайте рядок: `![Підпис](assets/my-shot.png)` — зображення
   отримає рамку та зум по кліку.

## Локальний запуск

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve      # http://127.0.0.1:8000
```

Рушій: [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).
