(() => {
  const root = document.querySelector('.library-search');
  if (!root) return;
  const form = root.querySelector('form');
  const input = form.querySelector('[name="q"]');
  const topic = form.querySelector('[name="topic"]');
  const status = root.querySelector('[role="status"]');
  const results = root.querySelector('.library-results');
  const pager = root.querySelector('.library-search-pages');
  const previous = pager.querySelector('[data-prev]');
  const next = pager.querySelector('[data-next]');
  const pageLabel = pager.querySelector('[data-page]');
  const browse = [...document.querySelectorAll('[data-library-browse]')];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const pageSize = 12;
  let records = [], currentPage = 1;

  const makeCard = (record, index) => {
    const link = document.createElement('a');
    link.className = 'article-card human-article-card';
    link.setAttribute('data-topic', record.category);
    link.href = `${record.slug}.html`;
    const visual = document.createElement('div');
    visual.className = 'article-visual';
    visual.setAttribute('aria-hidden', 'true');
    const number = document.createElement('span');
    number.textContent = String(index + 1).padStart(2, '0');
    visual.append(number);
    const copy = document.createElement('div');
    copy.className = 'article-card-copy';
    const category = document.createElement('span');
    category.className = 'category';
    category.textContent = record.categoryLabel;
    const title = document.createElement('h3');
    title.textContent = record.title;
    const read = document.createElement('span');
    read.className = 'read';
    read.textContent = `Read the guide · ${record.minutes} min read`;
    copy.append(category, title, read);
    link.append(visual, copy);
    return link;
  };

  const render = () => {
    const query = normalize(input.value.trim());
    const tokens = query.split(/\s+/).filter(Boolean);
    const active = Boolean(query || topic.value);
    const matches = records.filter(record => {
      if (topic.value && record.category !== topic.value) return false;
      const text = normalize(`${record.title} ${record.description} ${record.categoryLabel}`);
      return tokens.every(token => text.includes(token));
    });
    const totalPages = Math.max(1, Math.ceil(matches.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);
    const start = (currentPage - 1) * pageSize;
    const fragment = document.createDocumentFragment();
    if (active) matches.slice(start, start + pageSize).forEach((record, index) => fragment.append(makeCard(record, start + index)));
    results.replaceChildren(fragment);
    results.hidden = !active;
    pager.hidden = !active || matches.length <= pageSize;
    previous.disabled = currentPage === 1;
    next.disabled = currentPage === totalPages;
    pageLabel.textContent = `Page ${currentPage} of ${totalPages}`;
    status.textContent = !active ? 'Search across all 110 guides, or browse the collections below.' : matches.length ? `${matches.length} ${matches.length === 1 ? 'guide' : 'guides'} found. Showing ${start + 1}–${Math.min(start + pageSize, matches.length)}.` : 'No matching guide yet. Try a broader term or another topic.';
    browse.forEach(section => { section.hidden = active; });
  };
  const refresh = () => { currentPage = 1; render(); };
  form.addEventListener('submit', event => { event.preventDefault(); refresh(); });
  input.addEventListener('input', refresh);
  topic.addEventListener('change', refresh);
  form.addEventListener('reset', () => { setTimeout(refresh, 0); });
  previous.addEventListener('click', () => { if (currentPage > 1) { currentPage -= 1; render(); input.focus(); } });
  next.addEventListener('click', () => { currentPage += 1; render(); input.focus(); });
  fetch(root.dataset.catalog)
    .then(response => { if (!response.ok) throw new Error('Catalog unavailable'); return response.json(); })
    .then(data => {
      if (!Array.isArray(data) || !data.every(record => typeof record.slug === 'string' && /^[a-z0-9-]+$/.test(record.slug) && typeof record.title === 'string' && typeof record.description === 'string' && typeof record.categoryLabel === 'string')) throw new Error('Invalid catalog');
      records = data;
      root.hidden = false;
      render();
    })
    .catch(() => { root.hidden = true; browse.forEach(section => { section.hidden = false; }); });
})();
