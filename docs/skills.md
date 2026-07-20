---
hide:
  - toc
---

# Скіли

Конектор дає асистенту доступ до даних. Скіл дає йому метод: сталий спосіб виконати задачу, за яким чеклістом писати, як форматувати звіт, яких помилок уникати. Один раз підключили, і асистент застосовує цей метод у кожній відповіді, без нагадувань у промпті.

Для керівника найкорисніші скіли стосуються тексту й документів, які потім читає хтось інший: листи, нотатки в CRM, підсумки зустрічей, дописи.

Відкрийте картку скіла: праворуч зʼявиться, що він робить, коли його застосовувати й команда для встановлення.

<div class="rl-app" data-rl-app data-mode="detail">
<div class="rl-app__list">
<div class="rl-filter">
<button class="rl-chip is-active" type="button" data-tag="">Всі</button>
<button class="rl-chip" type="button" data-tag="текст">текст</button>
<button class="rl-chip" type="button" data-tag="ідеї">ідеї</button>
<button class="rl-chip" type="button" data-tag="маркетинг">маркетинг</button>
<button class="rl-chip" type="button" data-tag="аналітика">аналітика</button>
<button class="rl-chip" type="button" data-tag="комунікація">комунікація</button>
</div>
<ul class="rl-cards">
<li class="rl-card" data-slug="humanizer" data-tags="текст комунікація">
<button class="rl-card__head" type="button" aria-expanded="false" aria-controls="rl-body-humanizer"><span class="rl-card__emoji" aria-hidden="true">✍️</span><span class="rl-card__main"><span class="rl-card__title">Humanizer</span><span class="rl-card__meta">олюднення тексту</span></span><span class="rl-card__chevron" aria-hidden="true"></span></button>
<div class="rl-card__body" id="rl-body-humanizer" hidden>
<p class="rl-card__desc">Прибирає ознаки AI-письма: штампи, шаблонні звороти, зайві тире й «воду». Застосовуйте до будь-якого тексту, який читатиме хтось інший: листів, нотаток у CRM, документів, дописів.</p>
<div class="rl-card__tags"><span class="rl-tag">текст</span> <span class="rl-tag">комунікація</span></div>
</div>
</li>
<li class="rl-card" data-slug="creative-ideation" data-tags="ідеї маркетинг">
<button class="rl-card__head" type="button" aria-expanded="false" aria-controls="rl-body-creative"><span class="rl-card__emoji" aria-hidden="true">💡</span><span class="rl-card__main"><span class="rl-card__title">Creative Ideation</span><span class="rl-card__meta">генерація ідей</span></span><span class="rl-card__chevron" aria-hidden="true"></span></button>
<div class="rl-card__body" id="rl-body-creative" hidden>
<p class="rl-card__desc">Допомагає швидко згенерувати багато різних напрямів, коли треба вийти за межі очевидного: назви, кампанії, продуктові гіпотези, кути подачі.</p>
<div class="rl-card__tags"><span class="rl-tag">ідеї</span> <span class="rl-tag">маркетинг</span></div>
</div>
</li>
<li class="rl-card" data-slug="verbalized-sampling" data-tags="ідеї аналітика">
<button class="rl-card__head" type="button" aria-expanded="false" aria-controls="rl-body-vs"><span class="rl-card__emoji" aria-hidden="true">🎲</span><span class="rl-card__main"><span class="rl-card__title">Verbalized Sampling</span><span class="rl-card__meta">різні варіанти відповіді</span></span><span class="rl-card__chevron" aria-hidden="true"></span></button>
<div class="rl-card__body" id="rl-body-vs" hidden>
<p class="rl-card__desc">Змушує асистента давати кілька різних варіантів замість одного усередненого. Корисно для брейнштормів і там, де перший варіант завжди виходить однаковим.</p>
<div class="rl-card__tags"><span class="rl-tag">ідеї</span> <span class="rl-tag">аналітика</span></div>
</div>
</li>
<li class="rl-card" data-slug="karpathy-skills" data-tags="аналітика текст">
<button class="rl-card__head" type="button" aria-expanded="false" aria-controls="rl-body-karpathy"><span class="rl-card__emoji" aria-hidden="true">🧠</span><span class="rl-card__main"><span class="rl-card__title">Karpathy Skills</span><span class="rl-card__meta">набір робочих навичок</span></span><span class="rl-card__chevron" aria-hidden="true"></span></button>
<div class="rl-card__body" id="rl-body-karpathy" hidden>
<p class="rl-card__desc">Добірка навичок у стилі підходів Андрія Карпаті: ясніше мислення, охайна робота з даними й кодом, прості пояснення складного.</p>
<div class="rl-card__tags"><span class="rl-tag">аналітика</span> <span class="rl-tag">текст</span></div>
</div>
</li>
</ul>
</div>
<aside class="rl-app__viewer" data-rl-viewer>
<div class="rl-viewer__empty">Оберіть скіл ліворуч. Опис і команда для встановлення зʼявляться тут.</div>
<div class="rl-viewer__content" hidden>
<div class="rl-viewer__bar"><span class="rl-viewer__title"></span></div>
<div class="rl-viewer__detail"></div>
</div>
</aside>
<div class="rl-details" hidden aria-hidden="true">
<template data-detail="humanizer"><h4>Що робить</h4><p>Переписує згенерований текст так, щоб він звучав по-людськи: прибирає канцелярит, шаблонні звороти, надмірні узагальнення й зайві тире. В основі — гайд Вікіпедії «Signs of AI writing».</p><h4>Коли застосовувати</h4><ul><li>листи клієнтам і партнерам;</li><li>нотатки в CRM і підсумки зустрічей;</li><li>дописи, презентації, будь-який текст назовні.</li></ul><h4>Встановлення</h4><p>Крос-платформно: <code>npx skills add blader/humanizer</code>. У Claude також як плагін: <code>/plugin marketplace add blader/humanizer</code>, далі <code>/plugin install humanizer@humanizer</code>.</p><p><a href="https://github.com/blader/humanizer">Репозиторій на GitHub →</a></p></template>
<template data-detail="creative-ideation"><h4>Що робить</h4><p>Веде асистента через дивергентне мислення: замість одного «правильного» варіанта він видає широкий спектр несхожих ідей, а тоді допомагає їх звузити.</p><h4>Коли застосовувати</h4><ul><li>назви продуктів, кампаній, рубрик;</li><li>гіпотези для тестів і лідмагнітів;</li><li>кути подачі для контенту.</li></ul><h4>Встановлення</h4><p>Через skills CLI: <code>npx skills add NousResearch/hermes-agent</code>. Сам скіл лежить у теці <code>optional-skills/creative/creative-ideation</code>.</p><p><a href="https://github.com/NousResearch/hermes-agent/tree/main/optional-skills/creative/creative-ideation">Репозиторій на GitHub →</a></p></template>
<template data-detail="verbalized-sampling"><h4>Що робить</h4><p>Метод підказки, за яким асистент проговорює кілька варіантів відповіді з різною ймовірністю замість одного найбільш очікуваного. Так повертається різноманіття, яке моделі зазвичай згладжують.</p><h4>Коли застосовувати</h4><ul><li>брейншторми, де потрібні несхожі варіанти;</li><li>заголовки й копірайтинг;</li><li>задачі, де перша відповідь завжди однакова.</li></ul><h4>Встановлення</h4><p>Через skills CLI: <code>npx skills add CHATS-lab/verbalized-sampling</code>.</p><p><a href="https://github.com/CHATS-lab/verbalized-sampling">Репозиторій на GitHub →</a></p></template>
<template data-detail="karpathy-skills"><h4>Що робить</h4><p>Набір готових навичок, зібраних за принципами роботи Андрія Карпаті: структуроване мислення, робота з даними, чіткі й короткі пояснення.</p><h4>Коли застосовувати</h4><ul><li>розбір складних тем простими словами;</li><li>аналіз даних і перевірка міркувань;</li><li>підготовка технічних матеріалів.</li></ul><h4>Встановлення</h4><p>Через skills CLI: <code>npx skills add multica-ai/andrej-karpathy-skills</code>.</p><p><a href="https://github.com/multica-ai/andrej-karpathy-skills">Репозиторій на GitHub →</a></p></template>
</div>
</div>

## Найпростіший спосіб встановити

Не встановлюйте кожен скіл вручну. Попросіть асистента встановити весь список вище. Скажіть ChatGPT або Claude:

> Встанови скіли, перелічені на сторінці https://ceo-assistant.remilink.com/skills/, і надалі застосовуй їх за призначенням.

Асистент відкриє цю сторінку, знайде перелік і встановить кожен скіл. Далі він застосовуватиме їх сам, коли задача цього потребує.

![Асистент встановлює скіли зі сторінки за одним проханням](assets/skills-install-chatgpt.png)

## Як вказувати скіл у промптах

Якщо скіл встановлено в асистенті, він застосовується сам, окремо в промпті вказувати не треба. Якщо скіл не встановлено, є два варіанти: згадати його в запиті (`застосуй humanizer`) або вписати його правила текстом, наприклад:

> Після того, як напишеш текст, застосуй принципи humanizer: прибери типові ознаки AI-письма (штампи, надлишкові узагальнення, шаблонні звороти й «воду»). Залиш просте, конкретне формулювання.

## Свій метод як скіл

Будь-яку повторювану інструкцію можна оформити як скіл і не повторювати щоразу:

- **Бренд-голос** — єдиний тон і словник у всіх листах та дописах.
- **Структура звітів** — один формат вихідних документів: розділи, порядок, рівень деталізації.
- **Правила комунікації** — чого не писати клієнтам, як звертатися, які дані не розкривати.

Оформлення власних скілів описано в офіційній документації: [docs.claude.com](https://docs.claude.com/en/resources/prompt-library).

!!! note "Де побачити встановлені скіли"
    Перелік підключених навичок видно в налаштуваннях асистента: у Claude — у розділі зі скілами (Capabilities), у ChatGPT — у розділі навичок і застосунків.
