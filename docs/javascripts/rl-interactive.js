// Interactive behaviour for the CEO-assistant handbook.
//  .rl-app  — two-pane component used on Scenarios and Skills.
//    Left: accordion cards. Opening a card selects it and loads its content
//    into the right-hand viewer. No per-card buttons.
//    data-mode="prompt": viewer shows a copyable prompt (base64 in <script>).
//    data-mode="detail": viewer shows rich HTML (from <template data-detail>).
// Uses Material's document$ so it also runs after instant navigation.

(function () {
  function b64ToUtf8(b64) {
    var bin = atob(b64);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder('utf-8').decode(bytes);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text; ta.setAttribute('readonly', '');
        ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); document.body.removeChild(ta);
        resolve();
      } catch (e) { reject(e); }
    });
  }

  function flashCopied(btn) {
    var label = btn.querySelector('.rl-btn__label');
    if (btn._rlPrev === undefined) btn._rlPrev = label ? label.textContent : '';
    btn.classList.add('is-copied');
    if (label) label.textContent = 'Скопійовано';
    clearTimeout(btn._rlTimer);
    btn._rlTimer = setTimeout(function () {
      btn.classList.remove('is-copied');
      if (label) label.textContent = btn._rlPrev;
    }, 1800);
  }

  function initApp(root) {
    var mode = root.getAttribute('data-mode') || 'prompt';
    var store = {};
    if (mode === 'prompt') {
      root.querySelectorAll('.rl-prompts script[data-prompt]').forEach(function (s) {
        store[s.getAttribute('data-prompt')] = { raw: s.textContent.trim(), text: null };
      });
    } else {
      // Keep the <template> element; clone its parsed content into the viewer
      // (first-party static HTML — cloneNode avoids any innerHTML string parsing).
      root.querySelectorAll('.rl-details template[data-detail]').forEach(function (t) {
        store[t.getAttribute('data-detail')] = t;
      });
    }
    function promptText(slug) {
      var e = store[slug]; if (!e) return '';
      if (e.text == null) e.text = b64ToUtf8(e.raw);
      return e.text;
    }

    var cards = Array.prototype.slice.call(root.querySelectorAll('.rl-card'));
    var viewer = root.querySelector('[data-rl-viewer]');
    var vEmpty = viewer.querySelector('.rl-viewer__empty');
    var vContent = viewer.querySelector('.rl-viewer__content');
    var vTitle = viewer.querySelector('.rl-viewer__title');
    var vCode = viewer.querySelector('.rl-viewer__code');
    var vDetail = viewer.querySelector('.rl-viewer__detail');
    var vCopy = viewer.querySelector('[data-copy-current]');
    var current = null;
    var isMobile = function () { return window.matchMedia('(max-width: 76.1875em)').matches; };

    function select(card) {
      var slug = card.getAttribute('data-slug');
      current = slug;
      var titleEl = card.querySelector('.rl-card__title');
      var emojiEl = card.querySelector('.rl-card__emoji');
      vTitle.textContent = (emojiEl ? emojiEl.textContent + '  ' : '') + (titleEl ? titleEl.textContent : '');
      if (mode === 'prompt' && vCode) vCode.textContent = promptText(slug);
      if (mode === 'detail' && vDetail) {
        var tpl = store[slug];
        vDetail.replaceChildren(tpl ? tpl.content.cloneNode(true) : document.createDocumentFragment());
      }
      vEmpty.hidden = true;
      vContent.hidden = false;
      cards.forEach(function (c) { c.classList.toggle('is-active', c === card); });
      if (isMobile()) viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    cards.forEach(function (card) {
      var head = card.querySelector('.rl-card__head');
      var body = card.querySelector('.rl-card__body');
      head.addEventListener('click', function () {
        var open = head.getAttribute('aria-expanded') === 'true';
        cards.forEach(function (c) {
          c.querySelector('.rl-card__head').setAttribute('aria-expanded', 'false');
          var b = c.querySelector('.rl-card__body'); if (b) b.hidden = true;
          c.classList.remove('is-open');
        });
        if (!open) {
          head.setAttribute('aria-expanded', 'true');
          if (body) body.hidden = false;
          card.classList.add('is-open');
          select(card);
        }
      });
    });

    if (vCopy) vCopy.addEventListener('click', function () {
      if (!current) return;
      copyText(promptText(current)).then(function () { flashCopied(vCopy); }, function () {});
    });

    // tag filter
    var chips = Array.prototype.slice.call(root.querySelectorAll('.rl-filter .rl-chip'));
    var active = new Set();
    var allChip = root.querySelector('.rl-filter .rl-chip[data-tag=""]');
    function apply() {
      cards.forEach(function (c) {
        var tags = (c.getAttribute('data-tags') || '').split(' ');
        var show = active.size === 0 || Array.from(active).some(function (t) { return tags.indexOf(t) !== -1; });
        c.style.display = show ? '' : 'none';
      });
      if (allChip) allChip.classList.toggle('is-active', active.size === 0);
    }
    chips.forEach(function (ch) {
      ch.addEventListener('click', function () {
        var tag = ch.getAttribute('data-tag');
        if (tag === '') { active.clear(); chips.forEach(function (c) { c.classList.remove('is-active'); }); }
        else if (active.has(tag)) { active.delete(tag); ch.classList.remove('is-active'); }
        else { active.add(tag); ch.classList.add('is-active'); }
        apply();
      });
    });
    apply();
  }

  // Ideas page: expandable cards + tag filter (no viewer).
  function initIdeas(root) {
    var cards = Array.prototype.slice.call(root.querySelectorAll('.rl-idea'));
    cards.forEach(function (card) {
      var head = card.querySelector('.rl-idea__head');
      var body = card.querySelector('.rl-idea__body');
      if (!head || !body) return;
      head.addEventListener('click', function () {
        var open = head.getAttribute('aria-expanded') === 'true';
        head.setAttribute('aria-expanded', open ? 'false' : 'true');
        body.hidden = open;
        card.classList.toggle('is-open', !open);
      });
    });
    var chips = Array.prototype.slice.call(root.querySelectorAll('.rl-filter .rl-chip'));
    var active = new Set();
    var allChip = root.querySelector('.rl-filter .rl-chip[data-tag=""]');
    function apply() {
      cards.forEach(function (c) {
        var tags = (c.getAttribute('data-tags') || '').split(' ');
        var show = active.size === 0 || Array.from(active).some(function (t) { return tags.indexOf(t) !== -1; });
        c.style.display = show ? '' : 'none';
      });
      if (allChip) allChip.classList.toggle('is-active', active.size === 0);
    }
    chips.forEach(function (ch) {
      ch.addEventListener('click', function () {
        var tag = ch.getAttribute('data-tag');
        if (tag === '') { active.clear(); chips.forEach(function (c) { c.classList.remove('is-active'); }); }
        else if (active.has(tag)) { active.delete(tag); ch.classList.remove('is-active'); }
        else { active.add(tag); ch.classList.add('is-active'); }
        apply();
      });
    });
    apply();
  }

  function init() {
    document.querySelectorAll('.rl-app[data-rl-app]').forEach(initApp);
    var ideas = document.querySelector('.rl-ideas[data-rl-ideas]');
    if (ideas) initIdeas(ideas);
  }

  if (window.document$) window.document$.subscribe(init);
  else if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
