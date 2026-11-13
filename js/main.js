// Work filter. Without JavaScript every piece simply stays visible.
(function () {
  var buttons = document.querySelectorAll('.filters button');
  var entries = document.querySelectorAll('.work [data-category]');
  var empty = document.querySelector('.work .empty');

  function show(category) {
    var visible = 0;
    entries.forEach(function (el) {
      var match = category === 'all' || el.dataset.category === category;
      el.hidden = !match;
      if (match) visible++;
    });
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.filter === category));
    });
    if (empty) empty.hidden = visible > 0;
  }

  // Filter buttons, the "See … work" links in Services, and the empty-state reset.
  document.addEventListener('click', function (event) {
    var trigger = event.target.closest('[data-filter]');
    if (trigger) show(trigger.dataset.filter);
  });
})();
