// Interactive behaviour for the CEO-assistant handbook.
//  - .rl-app : Scenarios page — accordion cards, one-click copy, right-hand prompt viewer, tag filter.
//  - .rl-ideas : Ideas page — expandable cards + tag filter (no prompt copy).
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
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
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

  function flashError(btn) {
    var label = btn.querySelector('.rl-btn__label');
    if (label) { var p = label.textContent; label.textContent = 'Скопіюйте вручну'; setTimeout(function () { label.textContent = p; }, 1800); }
  }

  // ---- Scenarios app ----
  function initApp(root) {
    var promptFor = {};
    root.querySelectorAll('.rl-prompts script[data-prompt]').forEach(function (s) {
      promptFor[s.getAttribute('data-prompt')] = s.textContent.trim();
    });
    function textFor(slug) {
      if (promptFor[slug] == null) return '';
      // decode lazily, cache the decoded string
      if (typeof promptFor[slug] === 'string') promptFor[slug] = { raw: promptFor[slug], text: null };
      if (promptFor[slug].text == null) promptFor[slug].text = b64ToUtf8(promptFor[slug].raw);
      return promptFor[slug].text;
    }

    var cards = Array.prototype.slice.call(root.querySelectorAll('.rl-card'));
    var viewer = root.querySelector('[data-rl-viewer]');
    var vEmpty = viewer.querySelector('.rl-viewer__empty');
    var vContent = viewer.querySelector('.rl-viewer__content');
    var vTitle = viewer.querySelector('.rl-viewer__title');
    var vCode = viewer.querySelector('.rl-viewer__code');
    var vCopy = viewer.querySelector('[data-copy-current]');
    var current = null;

    // accordion
    cards.forEach(function (card) {
      var head = card.querySelector('.rl-card__head');
      var body = card.querySelector('.rl-card__body');
      head.addEventListener('click', function () {
        var open = head.getAttribute('aria-expanded') === 'true';
        cards.forEach(function (c) {
          var h = c.querySelector('.rl-card__head'), b = c.querySelector('.rl-card__body');
          h.setAttribute('aria-expanded', 'false');
          b.hidden = true;
          c.classList.remove('is-open');
        });
        if (!open) {
          head.setAttribute('aria-expanded', 'true');
          body.hidden = false;
          card.classList.add('is-open');
        }
      });
    });

    // copy inside cards
    root.querySelectorAll('.rl-card [data-copy]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        copyText(textFor(btn.getAttribute('data-copy'))).then(function () { flashCopied(btn); }, function () { flashError(btn); });
      });
    });

    // view -> render in the right-hand viewer
    function showViewer(slug, title) {
      current = slug;
      vTitle.textContent = title;
      vCode.textContent = textFor(slug);
      vEmpty.hidden = true;
      vContent.hidden = false;
      cards.forEach(function (c) { c.classList.toggle('is-active', c.getAttribute('data-slug') === slug); });
      if (window.matchMedia('(max-width: 76.1875em)').matches) {
        viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    root.querySelectorAll('.rl-card [data-view]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var card = btn.closest('.rl-card');
        var title = card.querySelector('.rl-card__title').textContent;
        var emoji = card.querySelector('.rl-card__emoji');
        showViewer(btn.getAttribute('data-view'), (emoji ? emoji.textContent + '  ' : '') + title);
      });
    });
    if (vCopy) vCopy.addEventListener('click', function () {
      if (!current) return;
      copyText(textFor(current)).then(function () { flashCopied(vCopy); }, function () { flashError(vCopy); });
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

  // ---- Ideas page ----
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
    var app = document.querySelector('.rl-app[data-rl-app]');
    if (app) initApp(app);
    var ideas = document.querySelector('.rl-ideas[data-rl-ideas]');
    if (ideas) initIdeas(ideas);
  }

  if (window.document$) window.document$.subscribe(init);
  else if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
