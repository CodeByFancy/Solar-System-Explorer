const cardsHost = document.getElementById('planetCards');
let currentPlanet = 'earth';
let currentFilter = 'all';

function createPlanetCard(planet) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'planet-card';
  button.dataset.id = planet.id;
  button.dataset.type = planet.type;
  button.setAttribute('aria-label', `Show ${planet.name} profile`);
  button.setAttribute('aria-pressed', 'false');
  button.style.setProperty('--planet-color', planet.color);
  button.innerHTML = `<span class="card-planet ${planet.id === 'saturn' ? 'ringed' : ''}" style="--surface:${planet.surface}"></span>
    <strong>${planet.name}</strong><small>${planet.classification}</small>`;
  button.addEventListener('click', () => showPlanet(planet.id));
  return button;
}

function renderCards() {
  cardsHost.replaceChildren(...PLANETS.map(createPlanetCard));
  applyFilter();
}

function applyFilter() {
  document.querySelectorAll('.planet-card').forEach(card => {
    card.hidden = currentFilter !== 'all' && card.dataset.type !== currentFilter;
  });
}

document.querySelectorAll('.planet-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    currentFilter = tab.dataset.filter;
    document.querySelectorAll('.planet-tab').forEach(item => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    applyFilter();
  });
});

function showPlanet(id) {
  const planet = PLANETS.find(item => item.id === id);
  if (!planet) return;
  currentPlanet = id;
  document.querySelectorAll('.planet-card').forEach(card => {
    const selected = card.dataset.id === id;
    card.classList.toggle('selected', selected);
    card.setAttribute('aria-pressed', String(selected));
  });
  document.getElementById('detailType').textContent = `${planet.classification} / ${planet.type.toUpperCase()}`;
  document.getElementById('detailName').textContent = planet.name;
  document.getElementById('detailDescription').textContent = planet.description;
  document.getElementById('detailFact').textContent = planet.fact;
  const orb = document.getElementById('detailOrb');
  orb.className = `detail-orb ${planet.id === 'saturn' ? 'ringed' : ''}`;
  orb.style.setProperty('--surface', planet.surface);
  orb.style.setProperty('--glow', `${planet.color}66`);
  const facts = [
    ['DISTANCE FROM SUN', planet.distance],
    ['ROTATION PERIOD', planet.day],
    ['AVG. TEMPERATURE', planet.temp],
    ['KNOWN MOONS', planet.moons],
    ['GRAVITY', planet.gravity],
    ['PLANET TYPE', planet.classification]
  ];
  document.getElementById('detailFacts').innerHTML = facts.map(([label,value]) =>
    `<div class="fact"><span>${label}</span><b>${value}</b></div>`).join('');
}

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('primaryNav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
}));

renderCards();
showPlanet(currentPlanet);
