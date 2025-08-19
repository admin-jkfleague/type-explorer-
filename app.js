// JKF League — Type Explorer (dual-type)
// Layout: controls left + mascot, primary dealt right; bottom has taken + secondary dealt

const typeChart = {
  normal: { damageTakenFrom: { fighting: 2, ghost: 0 }, damageDealtTo: { rock: 0.5, ghost: 0, steel: 0.5 } },
  fire: { damageTakenFrom: { fire: 0.5, water: 2, grass: 0.5, ice: 0.5, bug: 0.5, rock: 2, steel: 0.5, ground: 2 }, damageDealtTo: { grass: 2, ice: 2, bug: 2, steel: 2, fire: 0.5, water: 0.5, rock: 0.5, dragon: 0.5 } },
  water: { damageTakenFrom: { fire: 0.5, water: 0.5, electric: 2, grass: 2, ice: 0.5, steel: 0.5 }, damageDealtTo: { fire: 2, ground: 2, rock: 2, water: 0.5, grass: 0.5, dragon: 0.5 } },
  electric: { damageTakenFrom: { electric: 0.5, flying: 0.5, ground: 2, steel: 0.5 }, damageDealtTo: { water: 2, flying: 2, electric: 0.5, grass: 0.5, dragon: 0.5, ground: 0 } },
  grass: { damageTakenFrom: { water: 0.5, electric: 0.5, grass: 0.5, fire: 2, ice: 2, poison: 2, flying: 2, bug: 2 }, damageDealtTo: { water: 2, ground: 2, rock: 2, fire: 0.5, grass: 0.5, poison: 0.5, flying: 0.5, bug: 0.5, dragon: 0.5, steel: 0.5 } },
  ice: { damageTakenFrom: { ice: 0.5, fire: 2, fighting: 2, rock: 2, steel: 2 }, damageDealtTo: { grass: 2, ground: 2, flying: 2, dragon: 2, fire: 0.5, water: 0.5, ice: 0.5, steel: 0.5 } },
  fighting: { damageTakenFrom: { bug: 0.5, rock: 0.5, dark: 0.5, flying: 2, psychic: 2, fairy: 2 }, damageDealtTo: { normal: 2, ice: 2, rock: 2, dark: 2, steel: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, fairy: 0.5, ghost: 0 } },
  poison: { damageTakenFrom: { grass: 0.5, fighting: 0.5, poison: 0.5, bug: 0.5, ground: 2, psychic: 2 }, damageDealtTo: { grass: 2, fairy: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0 } },
  ground: { damageTakenFrom: { poison: 0.5, rock: 0.5, electric: 0, water: 2, ice: 2, grass: 2 }, damageDealtTo: { fire: 2, electric: 2, poison: 2, rock: 2, steel: 2, bug: 0.5, grass: 0.5, flying: 0 } },
  flying: { damageTakenFrom: { grass: 0.5, fighting: 0.5, bug: 0.5, ground: 0, electric: 2, ice: 2, rock: 2 }, damageDealtTo: { grass: 2, fighting: 2, bug: 2, electric: 0.5, rock: 0.5, steel: 0.5 } },
  psychic: { damageTakenFrom: { fighting: 0.5, psychic: 0.5, bug: 2, ghost: 2, dark: 2 }, damageDealtTo: { fighting: 2, poison: 2, psychic: 0.5, steel: 0.5, dark: 0 } },
  bug: { damageTakenFrom: { grass: 0.5, fighting: 0.5, ground: 0.5, fire: 2, flying: 2, rock: 2 }, damageDealtTo: { grass: 2, psychic: 2, dark: 2, fire: 0.5, fighting: 0.5, poison: 0.5, flying: 0.5, ghost: 0.5, steel: 0.5, fairy: 0.5 } },
  rock: { damageTakenFrom: { normal: 0.5, fire: 0.5, poison: 0.5, flying: 0.5, water: 2, grass: 2, fighting: 2, ground: 2, steel: 2 }, damageDealtTo: { fire: 2, ice: 2, flying: 2, bug: 2, fighting: 0.5, ground: 0.5, steel: 0.5 } },
  ghost: { damageTakenFrom: { poison: 0.5, bug: 0.5, normal: 0, fighting: 0, ghost: 2, dark: 2 }, damageDealtTo: { psychic: 2, ghost: 2, dark: 0.5, normal: 0 } },
  dragon: { damageTakenFrom: { fire: 0.5, water: 0.5, electric: 0.5, grass: 0.5, ice: 2, dragon: 2, fairy: 2 }, damageDealtTo: { dragon: 2, steel: 0.5, fairy: 0 } },
  dark: { damageTakenFrom: { ghost: 0.5, dark: 0.5, fighting: 2, bug: 2, fairy: 2 }, damageDealtTo: { psychic: 2, ghost: 2, dark: 0.5, fighting: 0.5, fairy: 0.5 } },
  steel: { damageTakenFrom: { normal: 0.5, grass: 0.5, ice: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 0.5, dragon: 0.5, steel: 0.5, fairy: 0.5, fire: 2, fighting: 2, ground: 2, poison: 0 }, damageDealtTo: { ice: 2, rock: 2, fairy: 2, fire: 0.5, water: 0.5, electric: 0.5, steel: 0.5 } },
  fairy: { damageTakenFrom: { fighting: 0.5, bug: 0.5, dark: 0.5, poison: 2, steel: 2, dragon: 0 }, damageDealtTo: { fighting: 2, dragon: 2, dark: 2, fire: 0.5, poison: 0.5, steel: 0.5 } }
};

const standardCategories = {
  '4× 🔥🔥': [],
  '2× 🔥': [],
  '1× ⚖️': [],
  '½× 🛡️': [],
  '¼× 🧱': [],
  '0× 🚫': []
};

const primarySel = document.getElementById('primaryType');
const secondarySel = document.getElementById('secondaryType');
const runBtn = document.getElementById('runBtn');
const resetBtn = document.getElementById('resetBtn');
const yearSpan = document.getElementById('year');
const secondaryCard = document.getElementById('secondaryCard');

const takenTable = document.getElementById('damageTakenTable').querySelector('tbody');
const dealt1Table = document.getElementById('primaryDealtTable').querySelector('tbody');
const dealt2Table = document.getElementById('secondaryDealtTable').querySelector('tbody');

const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

function buildOptions() {
  const types = Object.keys(typeChart);
  const opts = types.map(t => `<option value="${t}">${cap(t)}</option>`).join('');
  primarySel.innerHTML = `<option value="" selected disabled>Select type…</option>${opts}`;
  secondarySel.innerHTML = `<option value="">None</option>${opts}`;
}

function combineMultipliers(type1, type2, property){
  const result = {};
  const allTypes = Object.keys(typeChart);
  allTypes.forEach(targetType => {
    const v1 = typeChart[type1]?.[property]?.[targetType] ?? 1;
    const v2 = type2 ? (typeChart[type2]?.[property]?.[targetType] ?? 1) : 1;
    result[targetType] = v1 * v2;
  });
  return result;
}

function extractCategoryMap(multipliers){
  const cats = JSON.parse(JSON.stringify(standardCategories));
  Object.entries(multipliers).forEach(([t, v]) => {
    if (v === 4) cats['4× 🔥🔥'].push(t);
    else if (v === 2) cats['2× 🔥'].push(t);
    else if (v === 1) cats['1× ⚖️'].push(t);
    else if (v === 0.5) cats['½× 🛡️'].push(t);
    else if (v === 0.25) cats['¼× 🧱'].push(t);
    else if (v === 0) cats['0× 🚫'].push(t);
  });
  return cats;
}

function renderTable(tbody, catMap){
  const rows = Object.entries(catMap).map(([label, arr]) => {
    const txt = arr.length ? arr.map(cap).join(', ') : 'None';
    return `<tr><td>${label}</td><td>${txt}</td></tr>`;
  }).join('');
  tbody.innerHTML = rows;
}

function dealtFor(type){
  const map = typeChart[type]?.damageDealtTo || {};
  return extractCategoryMap(map);
}

function run(){
  const t1 = primarySel.value;
  const t2 = secondarySel.value || null;

  if (!t1){
    takenTable.innerHTML = '';
    dealt1Table.innerHTML = '';
    dealt2Table.innerHTML = '';
    secondaryCard.hidden = true;
    return;
  }

  // damage taken (defender)
  const combined = combineMultipliers(t1, t2, 'damageTakenFrom');
  const takenCats = extractCategoryMap(combined);
  renderTable(takenTable, takenCats);

  // damage dealt — primary
  const d1 = dealtFor(t1);
  renderTable(dealt1Table, d1);

  // damage dealt — secondary (optional)
  if (t2){
    const d2 = dealtFor(t2);
    renderTable(dealt2Table, d2);
    secondaryCard.hidden = false;
  } else {
    dealt2Table.innerHTML = '';
    secondaryCard.hidden = true;
  }
}

function hydrateFromURL(){
  // (keeping URL-free to match your mock; easy to add back if you want)
}

function resetAll(){
  primarySel.selectedIndex = 0;
  secondarySel.selectedIndex = 0;
  takenTable.innerHTML = '';
  dealt1Table.innerHTML = '';
  dealt2Table.innerHTML = '';
  secondaryCard.hidden = true;
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  buildOptions();

  runBtn.addEventListener('click', run);
  resetBtn.addEventListener('click', resetAll);

  // Enter key runs explorer
  [primarySel, secondarySel].forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') run();
    });
  });
});

