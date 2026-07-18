// Filter the scenarios overview by generic source tag (пошта, календар, ...).
// Uses Material's document$ so it also runs after instant navigation.
(function () {
  function init() {
    var root = document.querySelector('.rl-scen');
    if (!root) return;
    var chips = root.querySelectorAll('.rl-chip');
    var rows = root.querySelectorAll('table tbody tr');
    var active = new Set();
    var allChip = root.querySelector('.rl-chip[data-tag=""]');

    function apply() {
      rows.forEach(function (r) {
        var tags = (r.getAttribute('data-tags') || '').split(' ');
        var show = active.size === 0 ||
          Array.from(active).some(function (t) { return tags.indexOf(t) !== -1; });
        r.style.display = show ? '' : 'none';
      });
      if (allChip) allChip.classList.toggle('is-active', active.size === 0);
    }

    chips.forEach(function (ch) {
      ch.addEventListener('click', function () {
        var tag = ch.getAttribute('data-tag');
        if (tag === '') {
          active.clear();
          chips.forEach(function (c) { c.classList.remove('is-active'); });
        } else if (active.has(tag)) {
          active.delete(tag);
          ch.classList.remove('is-active');
        } else {
          active.add(tag);
          ch.classList.add('is-active');
        }
        apply();
      });
    });

    apply();
  }

  if (window.document$) window.document$.subscribe(init);
  else if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
