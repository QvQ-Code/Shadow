const numberToWordMap = {
  3: "three",
  4: "four",
  5: "five",
};
const star = [
  { name: 3 },
  { name: 4 },
  { name: 5 },
];

const classes = [
  { name: "Knight" },
  { name: "Mage" },
  { name: "Ranger" },
  { name: "Soul Weaver" },
  { name: "Thief" },
  { name: "Warrior" },
];

const element = [
  { name: "ice" },
  { name: "fire" },
  { name: "earth" },
  { name: "light" },
  { name: "dark" },
];

// Array of objects for buffs
const buffs = [
  { name: "Increase Attack" },
  { name: "Increase Defense" },
  { name: "Invincible" },
  { name: "Increase Speed" },
  { name: "Immortality" },
  { name: "Barrier" },
  { name: "Increase Critical Hit Resistance" },
  { name: "Continuous Heal" },
  { name: "Counterattack" },
  { name: "Stealth" },
  { name: "Reflect" },
  { name: "Increase Critical Hit Chance" },
  { name: "Immunity" },
  { name: "Cleanse" },
  { name: "Skill Nullifier" },
  { name: "Evasion" },
  { name: "Increase Attack (Greater)" },
  { name: "Increase Critical Hit Damage" },
  { name: "Guardians Blessing" },
  { name: "Bubble" },
  { name: "Effect Resistance" },
  { name: "Effectiveness" },
  { name: "Weakness Shared" },
  { name: "Escort" },
  { name: "Exploiting Weak Points" },

  // Undispellable
  { name: "Idol" },
  { name: "Vigor" },
  { name: "Dual Attack" },
  { name: "Penetrate" },
  { name: "Extra Turn" },
];

// Array of objects for debuffs
const debuffs = [
  { name: "Decrease Defense" },
  { name: "Decrease Speed" },
  { name: "Decrease Attack" },
  { name: "Stun" },
  { name: "Unhealable" },
  { name: "Burn" },
  { name: "Cannot Buff" },
  { name: "Sleep" },
  { name: "Poison" },
  { name: "Provoke" },
  { name: "Decrease Critical Hit Resistance" },
  { name: "Decrease Hit Chance" },
  { name: "Silence" },
  { name: "Bleed" },
  { name: "Vampiric Touch" },
  { name: "Target" },
  { name: "Magic Nail" },
  { name: "Curse Boss" },
  { name: "Bomb" },
  { name: "Curse" },
  { name: "Restrict" },
  { name: "Redirected Provoke" },
  { name: "Seal" },
  { name: "Stigma" },
  { name: "Venom" },
  { name: "Beguile" },
  { name: "Cannot Counterattack" },
  { name: "Block" },
];

// Array of objects for abilities
const special = [

];

// Array of objects for characters
const characters = [
  {
    name: "Ras",
    star: 3,
    role: "Knight",
    element: "Fire",
    trait: ["Dual Attack", "Increase Defense"]
  },
  {
    name: "Ludwig",
    star: 5,
    role: "Mage",
    element: "Earth",
    trait: ["Stun", "Invincible", "Penetrate"]
  },
  {
    name: "Krau",
    star: 5,
    role: "Knight",
    element: "Ice",
    trait: ["Provoke", "Increase Defense", "Barrier", "Penetrate"]
  },
  {
    name: "Ravi",
    star: 5,
    role: "Warrior",
    element: "Fire",
    trait: ["Stun"]
  },
  {
    name: "Tamarinne",
    star: 5,
    role: "Soul Weaver",
    element: "Fire",
    trait: ["Increase Attack", "Idol", "Extra Turn", "Dual Attack"]
  },
  {
    name: "Lilias",
    star: 5,
    role: "Knight",
    element: "Fire",
    trait: ["Provoke", "Barrier", "Dual Attack"]
  },
  {
    name: "Haste",
    star: 5,
    role: "Thief",
    element: "Fire",
    trait: ["Decrease Defense", "Unhealable", "Vampiric Touch", "Bleed"]
  },
  {
    name: "Ken",
    star: 5,
    role: "Warrior",
    element: "Fire",
    trait: ["Decrease Defense", "vigor", "Burn", "Increase Speed", "Decrease Attack", "Stun"]
  },
  {
    name: "Cermia",
    star: 5,
    role: "Warrior",
    element: "Fire",
    trait: ["Unhealable", "Increase Attack (Greater)", "Penetrate"]
  },
  {
    name: "Sol",
    star: 5,
    role: "Warrior",
    element: "Fire",
    trait: ["Extra Turn", "Silence", "Cannot Buff"]
  },
  {
    name: "Lilibet",
    star: 5,
    role: "Warrior",
    element: "Fire",
    trait: ["Cannot Buff", "Bleed", "Skill Nullifier"]
  },
  {
    name: "Baiken",
    star: 5,
    role: "Thief",
    element: "Fire",
    trait: ["Bleed"]
  },
  {
    name: "Kawerik",
    star: 5,
    role: "Mage",
    element: "Fire",
    trait: ["Silence", "Stealth", "Increase Speed"]
  },
  {
    name: "Iseria",
    star: 5,
    role: "Ranger",
    element: "Earth",
    trait: ["Decrease Defense", "Cannot Buff"]
  },
  {
    name: "Tenebria",
    star: 5,
    role: "Mage",
    element: "Fire",
    trait: ["Sleep", "Decrease Speed", "Restrict", "Decrease Defense", "Increase Attack"]
  },
  {
    name: "Diene",
    star: 5,
    role: "Soul Weaver",
    element: "Ice",
    trait: ["Barrier", "Increase Attack", "Increase Critical Hit Resistance"]
  },
  {
    name: "Angelica",
    star: 5,
    role: "Soul Weaver",
    element: "Ice",
    trait: ["Stun", "Immunity", "Barrier"]
  },
  {
    name: "Luluca",
    star: 5,
    role: "Mage",
    element: "Ice",
    trait: ["Decrease Defense", "Increase Defense", "Barrier"]
  },
  {
    name: "Sigret",
    star: 5,
    role: "Warrior",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Chloe",
    star: 5,
    role: "Warrior",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Rem",
    star: 5,
    role: "Warrior",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Dizzy",
    star: 5,
    role: "Mage",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Politis",
    star: 5,
    role: "Mage",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Karin",
    star: 5,
    role: "Thief",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Remnant Violet",
    star: 5,
    role: "Thief",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Sez",
    star: 5,
    role: "Thief",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Landy",
    star: 5,
    role: "Ranger",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Charles",
    star: 5,
    role: "Knight",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Vildred",
    star: 5,
    role: "Thief",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Aramintha",
    star: 5,
    role: "Mage",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Violet",
    star: 5,
    role: "Thief",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Baiken",
    star: 5,
    role: "Thief",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Yufine",
    star: 5,
    role: "Warrior",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Lidica",
    star: 5,
    role: "Ranger",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Pavel",
    star: 5,
    role: "Ranger",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Alencia",
    star: 5,
    role: "Warrior",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Cerise",
    star: 5,
    role: "Ranger",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Arbiter Vildred",
    star: 5,
    role: "Thief",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Judge Kise",
    star: 5,
    role: "Warrior",
    element: "Light",
    trait: [""]
  },
  {
    name: "Fallen Cecilia",
    star: 5,
    role: "Knight",
    element: "Light",
    trait: [""]
  },
  {
    name: "Shooting Star Achates",
    star: 5,
    role: "Soul Weaver",
    element: "Light",
    trait: [""]
  },
  {
    name: "Roana",
    star: 5,
    role: "Soul Weaver",
    element: "Light",
    trait: [""]
  },
  {
    name: "Top Model Luluca",
    star: 5,
    role: "Mage",
    element: "Light",
    trait: [""]
  },
  {
    name: "Last Rider Krau",
    star: 5,
    role: "Knight",
    element: "Light",
    trait: [""]
  },
  {
    name: "Silver Blade Aramintha",
    star: 5,
    role: "Mage",
    element: "Light",
    trait: [""]
  },
  {
    name: "Tempest Surin",
    star: 5,
    role: "Thief",
    element: "Light",
    trait: [""]
  },
  {
    name: "Adventurer Ras",
    star: 5,
    role: "Knight",
    element: "Light",
    trait: [""]
  },
  {
    name: "Specter Tenebria",
    star: 5,
    role: "Mage",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Ruele of Light",
    star: 5,
    role: "Soul Weaver",
    element: "Light",
    trait: [""]
  },
  {
    name: "Martial Artist Ken",
    star: 5,
    role: "Warrior",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Dark Corvus",
    star: 5,
    role: "Warrior",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Blood Moon Haste",
    star: 5,
    role: "Soul Weaver",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Remnant Violet",
    star: 5,
    role: "Thief",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Operator Sigret",
    star: 5,
    role: "Ranger",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Apocalypse Ravi",
    star: 5,
    role: "Warrior",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Briar Witch Iseria",
    star: 5,
    role: "Ranger",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Maid Chloe",
    star: 5,
    role: "Soul Weaver",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Luna",
    star: 5,
    role: "Warrior",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Basar",
    star: 5,
    role: "Mage",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Flan",
    star: 5,
    role: "Ranger",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Melissa",
    star: 5,
    role: "Mage",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Taranor Guard",
    star: 5,
    role: "Knight",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Destina",
    star: 5,
    role: "Soul Weaver",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Landy",
    star: 5,
    role: "Ranger",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Zeno",
    star: 5,
    role: "Mage",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Hurado",
    star: 5,
    role: "Mage",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Clarissa",
    star: 5,
    role: "Warrior",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Alexa",
    star: 5,
    role: "Thief",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Arowell",
    star: 5,
    role: "Knight",
    element: "Light",
    trait: [""]
  },
  {
    name: "Assassin Cartuja",
    star: 5,
    role: "Warrior",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Assassin Cidd",
    star: 5,
    role: "Thief",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Auxiliary Lots",
    star: 5,
    role: "Soul Weaver",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Bellona",
    star: 5,
    role: "Ranger",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Cidd",
    star: 5,
    role: "Thief",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Doris",
    star: 5,
    role: "Soul Weaver",
    element: "Light",
    trait: [""]
  },
  {
    name: "Elena",
    star: 5,
    role: "Soul Weaver",
    element: "Ice",
    trait: [""]
  },
  {
    name: "General Purrgis",
    star: 5,
    role: "Warrior",
    element: "Light",
    trait: [""]
  },
  {
    name: "Kise",
    star: 5,
    role: "Thief",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Mascot Hazel",
    star: 5,
    role: "Soul Weaver",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Pearlhorizon",
    star: 5,
    role: "Mage",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Ray",
    star: 5,
    role: "Soul Weaver",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Surin",
    star: 5,
    role: "Thief",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Taranor Royal Guard",
    star: 5,
    role: "Knight",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Vildred",
    star: 5,
    role: "Thief",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Khawazu",
    star: 5,
    role: "Warrior",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Elena",
    star: 5,
    role: "Soul Weaver",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Tywin",
    star: 5,
    role: "Knight",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Aither",
    star: 5,
    role: "Soul Weaver",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Clarissa",
    star: 5,
    role: "Warrior",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Auxiliary Lots",
    star: 5,
    role: "Soul Weaver",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Corvus",
    star: 5,
    role: "Warrior",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Assassin Coli",
    star: 5,
    role: "Thief",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Gunther",
    star: 5,
    role: "Warrior",
    element: "Light",
    trait: [""]
  },
  {
    name: "Serila",
    star: 5,
    role: "Mage",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Achates",
    star: 5,
    role: "Soul Weaver",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Dingo",
    star: 5,
    role: "Warrior",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Guider Aither",
    star: 5,
    role: "Mage",
    element: "Light",
    trait: [""]
  },
  {
    name: "Camilla",
    star: 5,
    role: "Soul Weaver",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Elphelt",
    star: 5,
    role: "Ranger",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Fairytale Tenebria",
    star: 5,
    role: "Mage",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Adlay",
    star: 5,
    role: "Mage",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Ambitious Tywin",
    star: 5,
    role: "Knight",
    element: "Light",
    trait: [""]
  },
  {
    name: "Armin",
    star: 5,
    role: "Knight",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Blaze Dingo",
    star: 5,
    role: "Soul Weaver",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Chaos Inquisitor",
    star: 5,
    role: "Knight",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Crescent Moon Rin",
    star: 5,
    role: "Thief",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Desert Jewel Basar",
    star: 5,
    role: "Soul Weaver",
    element: "Light",
    trait: [""]
  },
  {
    name: "Doll Maker Pearl",
    star: 5,
    role: "Mage",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Ervalen",
    star: 5,
    role: "Warrior",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Fighter Maya",
    star: 5,
    role: "Knight",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Frostfire Dingo",
    star: 5,
    role: "Warrior",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Hwayoung",
    star: 5,
    role: "Thief",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Julian",
    star: 5,
    role: "Mage",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Krazy",
    star: 5,
    role: "Warrior",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Lionheart Cermia",
    star: 5,
    role: "Warrior",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Lotus",
    star: 5,
    role: "Soul Weaver",
    element: "Light",
    trait: [""]
  },
  {
    name: "Nightmare Cid",
    star: 5,
    role: "Thief",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Sylvan Sage",
    star: 5,
    role: "Mage",
    element: "Light",
    trait: [""]
  },
  {
    name: "Sylvan Sage",
    star: 5,
    role: "Mage",
    element: "Light",
    trait: [""]
  },
  {
    name: "Taranor Royal Guard",
    star: 5,
    role: "Knight",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Wanderer Silk",
    star: 5,
    role: "Soul Weaver",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Wanderer Silk",
    star: 5,
    role: "Soul Weaver",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Watcher Schuri",
    star: 5,
    role: "Ranger",
    element: "Light",
    trait: [""]
  },
  {
    name: "Adel",
    star: 5,
    role: "Warrior",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Angel of Light",
    star: 5,
    role: "Soul Weaver",
    element: "Light",
    trait: [""]
  },
  {
    name: "Black Cat",
    star: 5,
    role: "Thief",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Flurry",
    star: 5,
    role: "Ranger",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Joon",
    star: 5,
    role: "Mage",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Krun",
    star: 5,
    role: "Warrior",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Luna",
    star: 5,
    role: "Soul Weaver",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Ophilia",
    star: 5,
    role: "Ranger",
    element: "Light",
    trait: [""]
  },
  {
    name: "Purgis",
    star: 5,
    role: "Knight",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Sally",
    star: 5,
    role: "Mage",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Taranor",
    star: 5,
    role: "Knight",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Yuna",
    star: 5,
    role: "Thief",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Blaze Dingo",
    star: 5,
    role: "Warrior",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Catalina",
    star: 5,
    role: "Warrior",
    element: "Light",
    trait: [""]
  },
  {
    name: "Demon King",
    star: 5,
    role: "Mage",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Eda",
    star: 5,
    role: "Ranger",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Fire Spirit",
    star: 5,
    role: "Soul Weaver",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Glenn",
    star: 5,
    role: "Ranger",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Hannah",
    star: 5,
    role: "Soul Weaver",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Luna",
    star: 5,
    role: "Mage",
    element: "Ice",
    trait: [""]
  },
  {
    name: "Moonlight",
    star: 5,
    role: "Thief",
    element: "Dark",
    trait: [""]
  },
  {
    name: "Priscilla",
    star: 5,
    role: "Knight",
    element: "Light",
    trait: [""]
  },
  {
    name: "Serina",
    star: 5,
    role: "Ranger",
    element: "Fire",
    trait: [""]
  },
  {
    name: "Sylvan",
    star: 5,
    role: "Mage",
    element: "Earth",
    trait: [""]
  },
  {
    name: "Thea",
    star: 5,
    role: "Thief",
    element: "Light",
    trait: [""]
  },
  {
    name: "Wanderer",
    star: 5,
    role: "Mage",
    element: "Fire",
    trait: [""]
  }
];
