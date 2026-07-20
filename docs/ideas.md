# Ідеї доручень асистенту

Це приклади доручень, які показують, наскільки далі можна зайти за межі звичайного пошуку. Беріть будь-який за основу: розгорніть картку, прочитайте ідею й адаптуйте її під свої дані. Фільтруйте за темою.

<div class="rl-ideas" data-rl-ideas>
<div class="rl-filter">
<button class="rl-chip is-active" type="button" data-tag="">Всі</button>
<button class="rl-chip" type="button" data-tag="продажі">продажі</button>
<button class="rl-chip" type="button" data-tag="фінанси">фінанси</button>
<button class="rl-chip" type="button" data-tag="аналітика">аналітика</button>
<button class="rl-chip" type="button" data-tag="конкуренти">конкуренти</button>
<button class="rl-chip" type="button" data-tag="маркетинг">маркетинг</button>
<button class="rl-chip" type="button" data-tag="SMM">SMM</button>
<button class="rl-chip" type="button" data-tag="контент">контент</button>
<button class="rl-chip" type="button" data-tag="розробка">розробка</button>
<button class="rl-chip" type="button" data-tag="задачі">задачі</button>
<button class="rl-chip" type="button" data-tag="голос">голос</button>
<button class="rl-chip" type="button" data-tag="документи">документи</button>
<button class="rl-chip" type="button" data-tag="веб">веб</button>
</div>
<div class="rl-ideas__app">
<ul class="rl-ideas__list">
<li class="rl-idea" data-tags="продажі аналітика задачі">
<button class="rl-idea__head" type="button" aria-expanded="false" aria-controls="idea-sales"><span class="rl-idea__emoji" aria-hidden="true">💹</span><span class="rl-idea__title">Зведення продажів у Slack щопонеділка</span><span class="rl-idea__chevron" aria-hidden="true"></span></button>
<div class="rl-idea__body" id="idea-sales" hidden>
<p class="rl-idea__desc">Наприкінці місяця асистент бере цифри продажів із CRM, зводить їх у таблицю, будує підсумковий графік і викладає у командний канал до понеділка, 9:00. Ви приходите, а зведення вже там.</p>
<p class="rl-idea__ex"><strong>Приклад запиту:</strong> «Візьми продажі за минулий місяць із CRM, зроби таблицю й підсумковий графік і поклади в канал #sales до понеділка 9:00.»</p>
<p class="rl-idea__out"><strong>Що отримаєте:</strong> готову таблицю, графік і короткий підсумок у робочому чаті, без ручного зведення.</p>
<div class="rl-idea__tags"><span class="rl-tag">продажі</span> <span class="rl-tag">аналітика</span> <span class="rl-tag">задачі</span></div>
</div>
</li>
<li class="rl-idea" data-tags="документи аналітика">
<button class="rl-idea__head" type="button" aria-expanded="false" aria-controls="idea-doc"><span class="rl-idea__emoji" aria-hidden="true">📄</span><span class="rl-idea__title">Швидкий розбір документа перед виступом</span><span class="rl-idea__chevron" aria-hidden="true"></span></button>
<div class="rl-idea__body" id="idea-doc" hidden>
<p class="rl-idea__desc">Асистент читає файл із ваших завантажень (PDF, презентацію, договір) і повертає стислу вижимку. Зручно перед дзвінком, коли часу на повне читання немає.</p>
<p class="rl-idea__ex"><strong>Приклад запиту:</strong> «Відкрий пропозицію в моїх завантаженнях і дай ключові тези. Маю 15 хвилин до презентації.»</p>
<p class="rl-idea__out"><strong>Що отримаєте:</strong> суть документа, головні цифри, ризики й відкриті питання на пів сторінки.</p>
<div class="rl-idea__tags"><span class="rl-tag">документи</span> <span class="rl-tag">аналітика</span></div>
</div>
</li>
<li class="rl-idea" data-tags="задачі аналітика">
<button class="rl-idea__head" type="button" aria-expanded="false" aria-controls="idea-team"><span class="rl-idea__emoji" aria-hidden="true">📋</span><span class="rl-idea__title">Пульс команди з таск-менеджера</span><span class="rl-idea__chevron" aria-hidden="true"></span></button>
<div class="rl-idea__body" id="idea-team" hidden>
<p class="rl-idea__desc">Підключіть таск-менеджер, і асистент підсумує стан команди: скільки задач закрито й за який час, де аномалії, у кого просів темп, що застрягло.</p>
<p class="rl-idea__ex"><strong>Приклад запиту:</strong> «Підсумуй наш таск-менеджер за два тижні: закриті задачі, швидкість, аномалії, у кого просів темп.»</p>
<p class="rl-idea__out"><strong>Що отримаєте:</strong> короткий звіт про темп команди замість ручного перегляду дощок.</p>
<div class="rl-idea__tags"><span class="rl-tag">задачі</span> <span class="rl-tag">аналітика</span></div>
</div>
</li>
<li class="rl-idea" data-tags="розробка аналітика">
<button class="rl-idea__head" type="button" aria-expanded="false" aria-controls="idea-dev"><span class="rl-idea__emoji" aria-hidden="true">🛠️</span><span class="rl-idea__title">GitHub: що відбувається в розробці</span><span class="rl-idea__chevron" aria-hidden="true"></span></button>
<div class="rl-idea__body" id="idea-dev" hidden>
<p class="rl-idea__desc">Підключіть GitHub у ChatGPT або Claude. Асистент перегляне репозиторії й пояснить без коду, що команда випустила, які PR чекають на рішення, де робота зупинилася і що може вплинути на строки. Налаштування є в розділі <a href="../plugins/">Плагіни</a>.</p>
<p class="rl-idea__ex"><strong>Приклад запиту:</strong> «Підготуй огляд GitHub за тиждень для CEO: що вийшло в реліз, які PR або задачі застрягли, де ризики для строків. Без технічного жаргону.»</p>
<p class="rl-idea__out"><strong>Що отримаєте:</strong> коротку картину розробки, рішення, на які варто звернути увагу, і питання до команди.</p>
<div class="rl-idea__tags"><span class="rl-tag">розробка</span> <span class="rl-tag">аналітика</span></div>
</div>
</li>
<li class="rl-idea" data-tags="голос задачі">
<button class="rl-idea__head" type="button" aria-expanded="false" aria-controls="idea-voice"><span class="rl-idea__emoji" aria-hidden="true">🎙️</span><span class="rl-idea__title">Голосові нотатки — у задачі й листи</span><span class="rl-idea__chevron" aria-hidden="true"></span></button>
<div class="rl-idea__body" id="idea-voice" hidden>
<p class="rl-idea__desc">Наговоріть думки голосом, і асистент перетворить їх на задачі, чернетки листів і події в календарі. Зручно між зустрічами.</p>
<p class="rl-idea__ex"><strong>Приклад запиту:</strong> «Ось голосова нотатка з наради. Зроби з неї задачі з відповідальними, дві чернетки листів і подію в календарі.»</p>
<p class="rl-idea__out"><strong>Що отримаєте:</strong> структуровані задачі, чернетки й події замість розсипаних думок.</p>
<div class="rl-idea__tags"><span class="rl-tag">голос</span> <span class="rl-tag">задачі</span></div>
</div>
</li>
<li class="rl-idea" data-tags="конкуренти веб маркетинг">
<button class="rl-idea__head" type="button" aria-expanded="false" aria-controls="idea-site"><span class="rl-idea__emoji" aria-hidden="true">🔍</span><span class="rl-idea__title">Повний розбір сайту конкурента</span><span class="rl-idea__chevron" aria-hidden="true"></span></button>
<div class="rl-idea__body" id="idea-site" hidden>
<p class="rl-idea__desc">Асистент заходить на відкритий у вас сайт конкурента й розбирає його: офери, гачки, структуру, дизайн і сильні сторони.</p>
<p class="rl-idea__ex"><strong>Приклад запиту:</strong> «Зайди на відкритий у мене сайт і зроби повний розбір: офери, гачки, структура, дизайн, сильні сторони.»</p>
<p class="rl-idea__out"><strong>Що отримаєте:</strong> розбір чужої сторінки, який можна взяти в роботу над власним сайтом.</p>
<div class="rl-idea__tags"><span class="rl-tag">конкуренти</span> <span class="rl-tag">веб</span> <span class="rl-tag">маркетинг</span></div>
</div>
</li>
<li class="rl-idea" data-tags="контент конкуренти маркетинг">
<button class="rl-idea__head" type="button" aria-expanded="false" aria-controls="idea-yt"><span class="rl-idea__emoji" aria-hidden="true">💬</span><span class="rl-idea__title">Болі аудиторії з коментарів на YouTube</span><span class="rl-idea__chevron" aria-hidden="true"></span></button>
<div class="rl-idea__body" id="idea-yt" hidden>
<p class="rl-idea__desc">Асистент витягує коментарі під відео конкурента й розбирає їх: які питання ставлять, на що скаржаться, чого бракує. Технічно йому може знадобитися інструмент на кшталт yt-dlp, це разове налаштування.</p>
<p class="rl-idea__ex"><strong>Приклад запиту:</strong> «Витягни коментарі під цим відео й згрупуй: питання, скарги, чого людям бракує. Дай живі формулювання.»</p>
<p class="rl-idea__out"><strong>Що отримаєте:</strong> живі болі аудиторії, з яких виходять теми контенту та ідеї лідмагнітів.</p>
<div class="rl-idea__tags"><span class="rl-tag">контент</span> <span class="rl-tag">конкуренти</span> <span class="rl-tag">маркетинг</span></div>
</div>
</li>
<li class="rl-idea" data-tags="SMM контент маркетинг">
<button class="rl-idea__head" type="button" aria-expanded="false" aria-controls="idea-smm"><span class="rl-idea__emoji" aria-hidden="true">🎬</span><span class="rl-idea__title">Контент для соцмереж: пости, каруселі, відео</span><span class="rl-idea__chevron" aria-hidden="true"></span></button>
<div class="rl-idea__body" id="idea-smm" hidden>
<p class="rl-idea__desc">Асистент готує контент для соцмереж: пише пости й сценарії каруселей, дизайн каруселей, а для відео готує чернетку монтажу.</p>
<p class="rl-idea__ex"><strong>Приклад запиту:</strong> «Зроби серію з трьох дописів і сценарій каруселі на цю тему, плюс ідею короткого відео.»</p>
<p class="rl-idea__out"><strong>Що отримаєте:</strong> готові чернетки постів, каруселей і відео. Ви лишаєтесь редактором.</p>
<div class="rl-idea__tags"><span class="rl-tag">SMM</span> <span class="rl-tag">контент</span> <span class="rl-tag">маркетинг</span></div>
</div>
</li>
<li class="rl-idea" data-tags="фінанси аналітика">
<button class="rl-idea__head" type="button" aria-expanded="false" aria-controls="idea-pnl"><span class="rl-idea__emoji" aria-hidden="true">🧮</span><span class="rl-idea__title">Аналіз P&amp;L, що прислали</span><span class="rl-idea__chevron" aria-hidden="true"></span></button>
<div class="rl-idea__body" id="idea-pnl" hidden>
<p class="rl-idea__desc">Хтось прислав P&amp;L у документі, і асистент проводить forensic-розбір: звіряє цифри до першоджерела, перевіряє формули, шукає аномалії й дає висновки з доказами.</p>
<p class="rl-idea__ex"><strong>Приклад запиту:</strong> «Ось P&amp;L у документі. Перевір цифри до першоджерела, знайди аномалії й дай висновки з посиланнями.»</p>
<p class="rl-idea__out"><strong>Що отримаєте:</strong> перевірку з доказами замість переказу таблиці.</p>
<div class="rl-idea__tags"><span class="rl-tag">фінанси</span> <span class="rl-tag">аналітика</span></div>
</div>
</li>
</ul>
<aside class="rl-ideas__viewer" data-rl-ideas-viewer aria-live="polite">
<div class="rl-ideas-viewer__empty">Розгорніть ідею, щоб побачити приклад запиту та результат.</div>
<div class="rl-ideas-viewer__content" hidden>
<div class="rl-ideas-viewer__bar"><span class="rl-ideas-viewer__title"></span></div>
<div class="rl-ideas-viewer__detail"></div>
</div>
</aside>
</div>
</div>

Готового промпту тут немає навмисно: ідеї надто різні під конкретні дані. Візьміть формулювання як основу, додайте свій контекст і, якщо задача регулярна, поставте її на [розклад](schedule.md).

## Більше ідей

Приклади застосування та історії компаній, які підкажуть, що ще можна доручити:

- [OpenAI Academy — приклади застосування](https://academy.openai.com/)
- [Кейси клієнтів Anthropic](https://www.anthropic.com/customers)
- [ChatGPT для бізнесу — сценарії застосування](https://openai.com/business/)
