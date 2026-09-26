// 날짜는 YYYY-MM-DD 형식. 한 날짜에 하나의 공개 글을 연결합니다.
(function () {
  'use strict';
  const posts = typeof JOURNAL_POSTS === 'undefined' ? [] : JOURNAL_POSTS;
  const entries = new Map();
  posts.forEach(function (post) {
    if (!post.hidden && /^\d{4}-\d{2}-\d{2}$/.test(post.date) && /^\/journal\/[^/]+\/$/.test(post.href)) entries.set(post.date, post);
  });
  const today = new Date();
  const thisMonth = today.getFullYear() * 12 + today.getMonth();
  const latest = Math.max(thisMonth, ...Array.from(entries.keys(), date => Number(date.slice(0, 4)) * 12 + Number(date.slice(5, 7)) - 1));
  const requested = new URLSearchParams(window.location.search).get('month');
  const requestedMonth = /^\d{4}-(0[1-9]|1[0-2])$/.test(requested || '')
    ? Number(requested.slice(0, 4)) * 12 + Number(requested.slice(5, 7)) - 1 : thisMonth;
  document.querySelectorAll('[data-journal-calendar]').forEach(function (calendar) {
    let current = Math.min(latest, Math.max(12, requestedMonth));
    const grid = calendar.querySelector('[data-calendar-grid]');
    const label = calendar.querySelector('[data-calendar-month]');
    const prev = calendar.querySelector('[data-calendar-prev]');
    const next = calendar.querySelector('[data-calendar-next]');
    function render() {
      const year = Math.floor(current / 12), month = current % 12;
      label.textContent = year + '년 ' + (month + 1) + '월';
      next.disabled = current >= latest;
      prev.disabled = current <= 12;
      const first = new Date(0);
      first.setFullYear(year, month, 1);
      const last = new Date(0);
      last.setFullYear(year, month + 1, 0);
      const offset = first.getDay(), days = last.getDate();
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < Math.ceil((offset + days) / 7) * 7; i++) {
        const day = i - offset + 1;
        const valid = day > 0 && day <= days;
        const key = String(year).padStart(4, '0') + '-' + String(month + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
        const post = valid && entries.get(key);
        const cell = document.createElement(post ? 'a' : 'div');
        cell.className = 'journal-cal-cell' + (post ? ' has-entry' : '');
        if (valid) {
          cell.dataset.date = key;
          const fullDate = year + '년 ' + (month + 1) + '월 ' + day + '일';
          cell.setAttribute('aria-label', fullDate + (post ? ': ' + post.title : ', 글 없음'));
          if (post) { cell.href = post.href; cell.title = post.title; }
          const num = document.createElement('span');
          num.className = 'journal-cal-num';
          num.textContent = day;
          cell.appendChild(num);
          const dot = document.createElement('span');
          dot.className = 'journal-cal-dot';
          dot.setAttribute('aria-hidden', 'true');
          cell.appendChild(dot);
        } else cell.setAttribute('aria-hidden', 'true');
        fragment.appendChild(cell);
      }
      grid.replaceChildren(fragment);
    }
    prev.addEventListener('click', function () { if (current > 12) { current--; render(); } });
    next.addEventListener('click', function () { if (current < latest) { current++; render(); } });
    render();
  });
})();
