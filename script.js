// --- Type Chart Data ---
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

// --- On Load ---
window.addEventListener("DOMContentLoaded", () => {
  const primarySelect = document.getElementById("primaryType");
  const secondarySelect = document.getElementById("secondaryType");

  // Populate dropdowns
  Object.keys(typeChart).forEach(type => {
    const option = new Option(type.charAt(0).toUpperCase() + type.slice(1), type);
    primarySelect.add(option.cloneNode(true));
    secondarySelect.add(option);
  });

  document.getElementById("submitBtn").addEventListener("click", analyze);
  document.getElementById("resetBtn").addEventListener("click", resetAll);
});

// --- Functions ---
function analyze() {
  const type1 = document.getElementById("primaryType").value;
  const type2 = document.getElementById("secondaryType").value || null;

  if (!type1) return;

  // Damage Taken
  const taken = combineMultipliers(type1, type2, 'damageTakenFrom');
  populateTable("damageTakenTable", extractCategoryMap(taken));

  // Damage Dealt (primary)
  const dealt1 = typeChart[type1]?.damageDealtTo || {};
  populateTable("primaryDealtTable", extractCategoryMap(dealt1));

  // Damage Dealt (secondary)
  if (type2) {
    const dealt2 = typeChart[type2]?.damageDealtTo || {};
    populateTable("secondaryDealtTable", extractCategoryMap(dealt2));
  } else {
    clearTable("secondaryDealtTable");
  }
}

function resetAll() {
  document.getElementById("primaryType").selectedIndex = 0;
  document.getElementById("secondaryType").selectedIndex = 0;
  clearTable("damageTakenTable");
  clearTable("primaryDealtTable");
  clearTable("secondaryDealtTable");
}

function clearTable(tableId) {
  document.querySelector(`#${tableId} tbody`).innerHTML = "";
}

function populateTable(tableId, categoryMap) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = "";
  Object.entries(categoryMap).forEach(([category, types]) => {
    const row = `<tr><td>${category}</td><td>${types.join(", ") || "None"}</td></tr>`;
    tbody.insertAdjacentHTML("beforeend", row);
  });
}

function combineMultipliers(type1, type2, property) {
  const result = {};
  Object.keys(typeChart).forEach(target => {
    const val1 = typeChart[type1]?.[property]?.[target] ?? 1;
    const val2 = type2 ? typeChart[type2]?.[property]?.[target] ?? 1 : 1;
    result[target] = val1 * val2;
  });
  return result;
}

function extractCategoryMap(multipliers) {
  const categories = {
    "4× 🔥🔥": [],
    "2× 🔥": [],
    "1× ⚖️": [],
    "½× 🛡️": [],
    "¼× 🧱": [],
    "0× 🚫": []
  };

  Object.entries(multipliers).forEach(([type, value]) => {
    if (value === 4) categories["4× 🔥🔥"].push(type);
    else if (value === 2) categories["2× 🔥"].push(type);
    else if (value === 1) categories["1× ⚖️"].push(type);
    else if (value === 0.5) categories["½× 🛡️"].push(type);
    else if (value === 0.25) categories["¼× 🧱"].push(type);
    else if (value === 0) categories["0× 🚫"].push(type);
  });

  return categories;
}

