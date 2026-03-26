/**
 * Génère categories-bulk.json (thèmes additionnels) pour atteindre ~1000 entrées au total avec categories.json.
 * Exécution : node scripts/generate-categories-bulk.mjs
 */
import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "categories-bulk.json");
const TARGET = 944; // 56 + 944 = 1000

const ORWELL_EGG = [
  {
    answer: 5,
    name: "1984 (George Orwell)",
    url: "https://fr.wikipedia.org/wiki/1984_(roman)",
  },
];

const FORMULA_ROT = [
  ["2+2", 4],
  ["8-4", 4],
  ["6-2", 4],
  ["1+3", 4],
  ["20 \\div 5", 4],
  ["2^2", 4],
  ["\\sqrt{16}", 4],
  ["16 \\div 4", 4],
  ["2 \\times 2", 4],
  ["12-8", 4],
  ["7-3", 4],
  ["9-5", 4],
  ["28 \\div 7", 4],
  ["\\frac{24}{6}", 4],
  ["\\sqrt{64} / 2", 4],
  ["\\log_2(16)", 4],
];

function wikiFr(title) {
  const p = title.replace(/ /g, "_");
  return `https://fr.wikipedia.org/wiki/${encodeURIComponent(p).replace(/%2F/g, "/")}`;
}

function slugify(s) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function normTag(s) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const entries = [];
let seq = 0;

function pushTheme(name, emoji, smartN, dumbN, extraTags = []) {
  if (entries.length >= TARGET) return;
  const [formula, correctAnswer] = FORMULA_ROT[seq % FORMULA_ROT.length];
  const tags = [
    ...extraTags.map(normTag),
    normTag(smartN),
    normTag(dumbN),
  ].filter(Boolean);
  entries.push({
    slug: `bulk-${seq}-${slugify(name)}`.replace(/-+/g, "-"),
    name,
    emoji,
    difficulty: seq % 7 === 0 ? 3 : seq % 3 === 0 ? 2 : 1,
    formula,
    correctAnswer,
    inputMode: "decimal",
    smart: { name: smartN, url: wikiFr(smartN) },
    dumb: { type: "fixed", name: dumbN, url: wikiFr(dumbN) },
    easterEggs: formula === "2+2" ? ORWELL_EGG : [],
    tags,
  });
  seq++;
}

/** Génère au plus maxPairs comparaisons pour laisser de la place aux autres familles. */
function addCityPairs(cities, label, emoji, tags, maxPairs) {
  let n = 0;
  outer: for (let i = 0; i < cities.length; i++) {
    for (let j = i + 1; j < cities.length; j++) {
      if (entries.length >= TARGET || n >= maxPairs) break outer;
      pushTheme(`${label} : ${cities[i]} / ${cities[j]}`, emoji, cities[i], cities[j], tags);
      n++;
    }
  }
}

// --- Paires de capitales / villes (quotas pour diversifier) ---
const EU_CITIES = [
  "Paris",
  "Berlin",
  "Madrid",
  "Rome",
  "Varsovie",
  "Vienne",
  "Bruxelles",
  "Amsterdam",
  "Prague",
  "Budapest",
  "Stockholm",
  "Copenhague",
  "Helsinki",
  "Oslo",
  "Dublin",
  "Lisbonne",
  "Athènes",
  "Sofia",
  "Bucarest",
  "Zagreb",
  "Ljubljana",
  "Bratislava",
  "Tallinn",
  "Riga",
  "Vilnius",
  "Luxembourg",
  "La Valette",
  "Nicosie",
  "Reykjavik",
  "Andorre-la-Vieille",
  "Monaco",
  "Saint-Marin",
  "Vaduz",
  "Podgorica",
  "Belgrade",
  "Skopje",
  "Tirana",
  "Sarajevo",
  "Kiev",
  "Minsk",
  "Moscou",
  "Chișinău",
  "Tbilissi",
  "Erevan",
  "Bakou",
];

addCityPairs(EU_CITIES, "Capitale", "🌍", ["capitale", "ville", "europe", "comparer"], 280);

// --- Villes françaises ---
const FR_CITIES = [
  "Lyon",
  "Marseille",
  "Toulouse",
  "Nice",
  "Nantes",
  "Strasbourg",
  "Montpellier",
  "Bordeaux",
  "Lille",
  "Rennes",
  "Reims",
  "Le Havre",
  "Saint-Étienne",
  "Toulon",
  "Grenoble",
  "Dijon",
  "Angers",
  "Nîmes",
  "Clermont-Ferrand",
  "Aix-en-Provence",
  "Brest",
  "Tours",
  "Amiens",
  "Limoges",
  "Annecy",
  "Perpignan",
  "Metz",
  "Besançon",
  "Orléans",
  "Mulhouse",
  "Rouen",
  "Caen",
  "Nancy",
  "Saint-Denis",
  "Argenteuil",
  "Montreuil",
  "Roubaix",
  "Tourcoing",
  "Nanterre",
  "Avignon",
  "Créteil",
  "Poitiers",
  "Dunkerque",
  "Versailles",
  "Courbevoie",
  "Vitry-sur-Seine",
  "Colombes",
  "Aulnay-sous-Bois",
  "La Rochelle",
  "Champigny-sur-Marne",
];

addCityPairs(FR_CITIES, "Ville française", "🏙️", ["france", "ville", "urbanisme"], 280);

// --- Instruments ---
const INSTRUMENTS = [
  ["Piano", "Orgue"],
  ["Violon", "Alto"],
  ["Violoncelle", "Contrebasse"],
  ["Flûte traversière", "Clarinette"],
  ["Hautbois", "Basson"],
  ["Trompette", "Trombone"],
  ["Harpe", "Guitare"],
  ["Batterie", "Xylophone"],
  ["Accordéon", "Bandonéon"],
  ["Saxophone", "Cor"],
  ["Ukulélé", "Mandoline"],
  ["Épinette", "Clavicorde"],
];

for (const [a, b] of INSTRUMENTS) {
  pushTheme(`Instrument : ${a} / ${b}`, "🎻", a, b, ["musique", "orchestre"]);
}

// --- Sports (disciplines olympiques, paires) ---
const SPORT_PAIRS = [
  ["Athlétisme", "Natation"],
  ["Escrime", "Judo"],
  ["Basket-ball", "Volley-ball"],
  ["Handball", "Water-polo"],
  ["Rugby", "Football"],
  ["Tennis", "Badminton"],
  ["Squash", "Padel"],
  ["Cyclisme", "Triathlon"],
  ["Ski alpin", "Ski de fond"],
  ["Patinage artistique", "Patinage de vitesse"],
  ["Hockey sur glace", "Hockey sur gazon"],
  ["Boxe", "Escrime"],
  ["Golf", "Curling"],
  ["Équitation", "Pentathlon moderne"],
  ["Voile", "Aviron"],
  ["Tir à l'arc", "Tir sportif"],
  ["Haltérophilie", "Lutte"],
  ["Gymnastique artistique", "Gymnastique rythmique"],
  ["Plongeon", "Natation synchronisée"],
  ["Surf", "Skateboard"],
];

for (const [a, b] of SPORT_PAIRS) {
  pushTheme(`Sport : ${a} / ${b}`, "🏅", a, b, ["sport", "jeux", "olympique"]);
}

// --- Langages de programmation (duels) ---
const LANG_DUELS = [
  ["Rust", "C++"],
  ["Go", "Java"],
  ["Kotlin", "Swift"],
  ["TypeScript", "JavaScript"],
  ["Ruby", "Elixir"],
  ["Haskell", "OCaml"],
  ["Clojure", "Scala"],
  ["Dart", "Flutter"],
  ["Lua", "Perl"],
  ["R", "Julia"],
  ["Fortran", "COBOL"],
  ["Assembly", "C"],
  ["Solidity", "Vyper"],
  ["Zig", "Nim"],
  ["Crystal", "V"],
];

for (const [a, b] of LANG_DUELS) {
  pushTheme(`Langage : ${a} / ${b}`, "💾", a, b, [
    "programmation",
    "code",
    "développeur",
  ]);
}

// --- Films / sagas (paires Wikipédia) ---
const FILM_PAIRS = [
  ["Casablanca", "Citizen Kane"],
  ["Les Tontons flingueurs", "La Grande Vadrouille"],
  ["Le Fabuleux Destin d'Amélie Poulain", "Intouchables"],
  ["La Haine", "Entre les murs"],
  ["Asterix et Obelix : Mission Cleopatre", "Le Diner de cons"],
  ["Star Wars", "Star Trek"],
  ["Le Seigneur des anneaux", "Harry Potter"],
  ["Matrix", "Blade Runner"],
  ["Alien", "Predator"],
  ["Terminator", "RoboCop"],
  ["Jurassic Park", "King Kong"],
  ["Indiana Jones", "James Bond"],
  ["Pirates des Caraibes", "Mummy"],
  ["Fast and Furious", "Need for Speed"],
  ["Mission : Impossible", "Jason Bourne"],
  ["Rocky", "Rambo"],
  ["Die Hard", "L'Arme fatale"],
  ["Top Gun", "Independence Day"],
  ["Gravity", "Interstellar"],
  ["Inception", "Shutter Island"],
];

for (const [a, b] of FILM_PAIRS) {
  pushTheme(`Film / saga : ${a} / ${b}`, "🎬", a, b, ["cinéma", "film"]);
}

// --- Fromages ---
const CHEESE_PAIRS = [
  ["Roquefort", "Bleu d'Auvergne"],
  ["Camembert", "Brie"],
  ["Reblochon", "Munster"],
  ["Saint-Nectaire", "Cantal"],
  ["Tomme de Savoie", "Raclette"],
  ["Emmental", "Gruyère"],
  ["Parmesan", "Pecorino"],
  ["Mozzarella", "Buratta"],
  ["Feta", "Halloumi"],
  ["Cheddar", "Red Leicester"],
  ["Gorgonzola", "Stilton"],
  ["Mimolette", "Edam"],
  ["Chèvre frais", "Banon"],
  ["Picodon", "Pelardon"],
  ["Ossau-Iraty", "Etorki"],
];

for (const [a, b] of CHEESE_PAIRS) {
  pushTheme(`Fromage : ${a} / ${b}`, "🧀", a, b, ["fromage", "laitier"]);
}

// --- Vins / régions ---
const WINE_PAIRS = [
  ["Bordeaux", "Bourgogne"],
  ["Champagne", "Alsace"],
  ["Côtes du Rhône", "Provence"],
  ["Loire", "Jura"],
  ["Languedoc", "Sud-Ouest"],
  ["Beaujolais", "Savoie"],
  ["Porto", "Madère"],
  ["Sauternes", "Monbazillac"],
  ["Hermitage", "Côte-Rôtie"],
  ["Chablis", "Meursault"],
];

for (const [a, b] of WINE_PAIRS) {
  pushTheme(`Vin / région : ${a} / ${b}`, "🍷", a, b, ["vin", "vignoble"]);
}

// --- Philosophes ---
const PHIL_PAIRS = [
  ["Platon", "Aristote"],
  ["Descartes", "Spinoza"],
  ["Kant", "Hegel"],
  ["Nietzsche", "Schopenhauer"],
  ["Sartre", "Camus"],
  ["Wittgenstein", "Russell"],
  ["Hume", "Locke"],
  ["Marx", "Engels"],
  ["Epicure", "Zénon d'Élée"],
  ["Socrate", "Diogène"],
];

for (const [a, b] of PHIL_PAIRS) {
  pushTheme(`Philosophe : ${a} / ${b}`, "📜", a, b, [
    "philosophie",
    "pensée",
  ]);
}

// --- Remplissage : paires d'artistes peintres ---
const ARTIST_PAIRS = [
  ["Leonard de Vinci", "Michel-Ange"],
  ["Rembrandt", "Vermeer"],
  ["Van Gogh", "Gauguin"],
  ["Monet", "Renoir"],
  ["Picasso", "Braque"],
  ["Dali", "Miró"],
  ["Kandinsky", "Mondrian"],
  ["Pollock", "Rothko"],
  ["Hokusai", "Hiroshige"],
  ["Frida Kahlo", "Diego Rivera"],
];

for (const [a, b] of ARTIST_PAIRS) {
  pushTheme(`Peintre : ${a} / ${b}`, "🖼️", a, b, ["art", "peinture"]);
}

// --- Séries TV ---
const SERIES_PAIRS = [
  ["Breaking Bad", "Better Call Saul"],
  ["The Wire", "The Sopranos"],
  ["Game of Thrones", "House of the Dragon"],
  ["Black Mirror", "The Twilight Zone"],
  ["The Office", "Parks and Recreation"],
  ["Friends", "Seinfeld"],
  ["Stranger Things", "Dark"],
  ["Succession", "Billions"],
  ["Fargo", "True Detective"],
  ["Sherlock", "Elementary"],
];

for (const [a, b] of SERIES_PAIRS) {
  pushTheme(`Série : ${a} / ${b}`, "📺", a, b, ["série", "streaming"]);
}

// --- Livres / auteurs ---
const BOOK_PAIRS = [
  ["1984", "La Ferme des animaux"],
  ["Le Petit Prince", "Candide"],
  ["Les Misérables", "Notre-Dame de Paris"],
  ["À la recherche du temps perdu", "Germinal"],
  ["L'Étranger", "La Peste"],
  ["Crime et Châtiment", "Les Frères Karamazov"],
  ["Orgueil et Préjugés", "Jane Eyre"],
  ["Moby-Dick", "Les Aventures de Huckleberry Finn"],
  ["Harry Potter à l'école des sorciers", "Le Seigneur des anneaux"],
  ["Dune", "Fondation"],
];

for (const [a, b] of BOOK_PAIRS) {
  pushTheme(`Livre : ${a} / ${b}`, "📖", a, b, ["littérature", "roman"]);
}

// --- Jeux vidéo ---
const GAME_PAIRS = [
  ["The Legend of Zelda", "Super Mario"],
  ["Dark Souls", "Elden Ring"],
  ["Half-Life", "Portal"],
  ["Minecraft", "Terraria"],
  ["The Witcher", "Skyrim"],
  ["Fortnite", "Apex Legends"],
  ["League of Legends", "Dota 2"],
  ["Counter-Strike", "Valorant"],
  ["Street Fighter", "Tekken"],
  ["Final Fantasy", "Dragon Quest"],
];

for (const [a, b] of GAME_PAIRS) {
  pushTheme(`Jeu vidéo : ${a} / ${b}`, "🕹️", a, b, ["jeu vidéo", "gaming"]);
}

// --- Marques tech ---
const TECH_PAIRS = [
  ["Apple", "Samsung"],
  ["Intel", "AMD"],
  ["Nvidia", "AMD"],
  ["Sony", "Microsoft"],
  ["Dell", "HP"],
  ["Lenovo", "Asus"],
  ["Spotify", "Apple Music"],
  ["Notion", "Obsidian"],
  ["Slack", "Discord"],
  ["Zoom", "Google Meet"],
];

for (const [a, b] of TECH_PAIRS) {
  pushTheme(`Marque tech : ${a} / ${b}`, "💻", a, b, ["tech", "marque"]);
}

// --- Animaux mythiques / réels léger ---
const ANIMAL_PAIRS = [
  ["Chat", "Chien"],
  ["Aigle", "Faucon"],
  ["Baleine", "Dauphin"],
  ["Panda", "Koala"],
  ["Tigre", "Lion"],
  ["Loup", "Renard"],
  ["Hibou", "Chouette"],
  ["Pieuvre", "Calmar"],
  ["Requin", "Raie manta"],
  ["Caméléon", "Gecko"],
];

for (const [a, b] of ANIMAL_PAIRS) {
  pushTheme(`Animal : ${a} / ${b}`, "🐾", a, b, ["nature", "animal"]);
}

// --- Cuisine mondiale ---
const FOOD_PAIRS = [
  ["Ramen", "Pho"],
  ["Sushi", "Sashimi"],
  ["Tacos", "Burrito"],
  ["Curry", "Tikka masala"],
  ["Pad thaï", "Som tam"],
  ["Moussaka", "Lasagne"],
  ["Paella", "Risotto"],
  ["Fish and chips", "Bangers and mash"],
  ["Kimchi", "Sauerkraut"],
  ["Baklava", "Künefe"],
];

for (const [a, b] of FOOD_PAIRS) {
  pushTheme(`Plat / cuisine : ${a} / ${b}`, "🍽️", a, b, [
    "cuisine",
    "gastronomie",
  ]);
}

// --- Parfums de glace ---
const ICE = [
  ["Vanille", "Chocolat"],
  ["Fraise", "Pistache"],
  ["Caramel", "Noisette"],
  ["Menthe", "Citron"],
  ["Cookie dough", "Brownie"],
];

for (const [a, b] of ICE) {
  pushTheme(`Glace : ${a} / ${b}`, "🍨", a, b, ["glace", "dessert"]);
}

// Si encore besoin : paires US états (fr wiki)
const US_STATES = [
  "Californie",
  "Texas",
  "Floride",
  "New York",
  "Pennsylvanie",
  "Illinois",
  "Ohio",
  "Géorgie",
  "Caroline du Nord",
  "Michigan",
  "New Jersey",
  "Virginie",
  "Washington",
  "Arizona",
  "Massachusetts",
  "Tennessee",
  "Indiana",
  "Missouri",
  "Maryland",
  "Wisconsin",
  "Colorado",
  "Minnesota",
  "Caroline du Sud",
  "Alabama",
  "Louisiane",
  "Kentucky",
  "Oregon",
  "Oklahoma",
  "Connecticut",
  "Utah",
  "Iowa",
  "Nevada",
  "Arkansas",
  "Mississippi",
  "Kansas",
  "Nouveau-Mexique",
  "Nebraska",
  "Idaho",
  "Hawaï",
  "New Hampshire",
  "Maine",
  "Montana",
  "Rhode Island",
  "Delaware",
  "Dakota du Sud",
  "Dakota du Nord",
  "Alaska",
  "Vermont",
  "Wyoming",
  "Virginie-Occidentale",
];

addCityPairs(US_STATES, "État US", "🇺🇸", ["états-unis", "état", "amérique"], 260);

while (entries.length < TARGET) {
  const i = entries.length;
  pushTheme(`Thème complémentaire ${i + 1}`, "➕", "Wikipédia", "Bing", [
    "bonus",
    "catalogue",
  ]);
}

if (entries.length > TARGET) entries.length = TARGET;

writeFileSync(OUT, JSON.stringify(entries));
console.log(`Écrit ${entries.length} entrées dans ${OUT}`);
