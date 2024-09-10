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

const buffs = [
  { name: "Increase Attack" },
  { name: "Increase Defense" },
  { name: "Invincible" },
  { name: "Increase Speed" },
  { name: "Immortal" },
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

  
  { name: "Idol" },
  { name: "Vigor" },
  { name: "Spirit's Blessing" },
  { name: "Ice Cream" },
  { name: "Indomitable" },
  { name: "Rage" },
  // { name: "Multilayer Barrier" },

  { name: "Dual Attack" },
  { name: "Penetrate" },
  { name: "Extra Turn" },
  { name: "Detonate" },
  { name: "Random Buff" },
];

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
  { name: "Random Debuff" },

  // { name: "Soul Steal" },
  // { name: "Injury" },
  { name: "Extinction" },
];

const special = [

];

const characters = [
  {
    name: "Ras",
    star: 3,
    role: "Knight",
    element: "Fire",
    imprint: {
      "release": "Health",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "X-Slash",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Command Strike",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Sword of the Heir",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Defense"],
      },
    },
  },

  {
    name: "Ludwig",
    star: 5,
    role: "Mage",
    element: "Earth",
    imprint: {
      "release": "Attack",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Starlight",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Moonlight Blow",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun", "Invincible"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Call of the Full Moon",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Penetrate", "Invincible"],
      },
    },
  },

  {
    name: "Krau",
    star: 5,
    role: "Knight",
    element: "Ice",
    imprint: {
      "release": "Health",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Swordstorm",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Charge",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Defense"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Summon Ziegfried",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier", "Penetrate"],
      },
    },
  },

  {
    name: "Yuna",
    star: 5,
    role: "Ranger",
    element: "Ice",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Homing Laser",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Upgrade",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Speed", "Extra Turn"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Meteor Cannon",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
    },
  },

  {
    name: "Iseria",
    star: 5,
    role: "Ranger",
    element: "Earth",
    imprint: {
      "release": "Attack",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Refined Flower",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Oathkeeper",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extra Turn"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Full Bloom",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff", "Decrease Defense"],
      },
    },
  },

  {
    name: "Summertime Iseria",
    star: 5,
    role: "Ranger",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Are you the Culprit?",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Suppression Attempt",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bomb"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Sword of Flowers!",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack", "Increase Speed", "Bomb", "Detonate"],
      },
    },
  },

  {
    name: "Destina",
    star: 5,
    role: "Soul Weaver",
    element: "Earth",
    imprint: {
      "release": "Health",
      "concentration": "Effect Resistance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Key to an Oath",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Regen",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Destina's Grace",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Spirit's Blessing"],
      },
    },
  },

  {
    name: "Kayron",
    star: 5,
    role: "Thief",
    element: "Fire",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Void Slash",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Hit Chance"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Immortal Will",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Immortal", "Evasion"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Apocalypse",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack"],
      },
    },
  },

  {
    name: "Tenebria",
    star: 5,
    role: "Mage",
    element: "Fire",
    imprint: {
      "release": "Critical Hit Chance",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Dark Explosion",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Sleep"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Ominous Thunder",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Speed", "Restrict"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Nightmare",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense", "Sleep", "Increase Attack"],
      },
    },
  },

  {
    name: "Fairytale Tenebria",
    star: 5,
    role: "Mage",
    element: "Ice",
    imprint: {
      "release": "Health",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "One Pair",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Redirected Provoke"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Wild Card",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke", "Redirected Provoke", "Random Debuff"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Tea Party",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff", "Redirected Provoke"],
      },
    },
  },

  {
    name: "Tamarinne",
    star: 5,
    role: "Soul Weaver",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Serene Tune",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Song of the Forest",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Shining Star★",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extra Turn", "Idol"],
      },
    },
  },

  {
    name: "Roana",
    star: 5,
    role: "Soul Weaver",
    element: "Earth",
    imprint: {
      "release": "Health",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Soul Purification",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Vigilant Eye",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Noble Reckos",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier", "Revive"],
      },
    },
  },

  {
    name: "Ravi",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Defense",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Slaughter",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Demon's Blood",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Devil Drive",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Injury", "Stun"],
      },
    },
  },

  {
    name: "Lilias",
    star: 5,
    role: "Knight",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Follow Me! Charge!",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "That's Far Enough!",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke", "Barrier"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Ready, Load, Fire!",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Injury", "Stun"],
      },
    },
  },

  {
    name: "Haste",
    star: 5,
    role: "Thief",
    element: "Fire",
    imprint: {
      "release": "Health",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Envoy's Scythe",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Blood Rend",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Unhealable", "Vampiric Touch"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Vampiric Seal",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed", "Decrease Defense"],
      },
    },
  },

  {
    name: "Ken",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Health",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Knockout",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense", "vigor", "Burn"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Celestial Kick",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Speed", "Vigor"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Phoenix Flurry",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack", "Stun", "Vigor"],
      },
    },
  },

  {
    name: "Cermia",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Critical Hit Chance",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Playing with Fire!",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Unhealable"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Hot Streak!",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack (Greater)", "Extra Turn"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "All-In!",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Penetrate"],
      },
    },
  },

  {
    name: "Sol",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Defense",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Gunflame",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extra Turn"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Volcanic Viper",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Tyrant Rave ver.Beta",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff"],
      },
    },
  },

  {
    name: "Lilibet",
    star: 5,
    role: "Warrior",
    element: "Earth",
    imprint: {
      "release": "Critical Hit Chance",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Slice-Slice",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Snip-Snip",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Soul Cutter",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Skill Nullifier", "Extinction"],
      },
    },
  },

  {
    name: "Baiken",
    star: 5,
    role: "Thief",
    element: "Earth",
    imprint: {
      "release": "Attack",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Tatami Gaeshi",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Tsurane Sanzu-watashi",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed", "Extra Turn"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Garyo Tensei",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed", "Detonate"],
      },
    },
  },

  {
    name: "Kawerik",
    star: 5,
    role: "Mage",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Spatial Relocation",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Dimensional Corridor",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stealth", "Increase Speed"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Dimensional Explosion",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence", "Penetrate"],
      },
    },
  },

  {
    name: "Diene",
    star: 5,
    role: "Soul Weaver",
    element: "ice",
    imprint: {
      "release": "Attack",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Light of Judgment",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Blessings of th Goddess",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Saint's Prayer",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Critical Hit Resistance"],
      },
    },
  },

  {
    name: "Laia",
    star: 5,
    role: "Warrior",
    element: "Earth",
    imprint: {
      "release": "Health",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Sing with Me!",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Sweet Cheers",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "The Spirit of Rock",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extra Turn", "Penetrate"],
      },
    },
  },

  {
    name: "Luluca",
    star: 5,
    role: "Mage",
    element: "Ice",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Wild Wave",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Rekos's Blessing",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Defense", "Barrier"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Wave of vengeance",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
    },
  },

  {
    name: "Zeno",
    star: 5,
    role: "Mage",
    element: "Ice",
    imprint: {
      "release": "Effectievness",
      "concentration": "Defense",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Black Thron",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Star's Armor",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Ancient Beast",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence", "Bleed"],
      },
    },
  },

  {
    name: "Ocean Breeze Luluca",
    star: 5,
    role: "Soul Weaver",
    element: "Earth",
    imprint: {
      "release": "Health",
      "concentration": "Effect Resistance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Order's in, Just wait!",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "One Luluca's Special!",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence", "Decrease Hit Chance"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "This One's on Me",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Defense", "Ice Cream"],
      },
    },
  },

  {
    name: "Straze",
    star: 5,
    role: "Warrior",
    element: "Dark",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Powerfull Strike",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Destructive Gaze",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Star Extinction",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Penetrate", "Invincible"],
      },
    },
  },

  {
    name: "Zio",
    star: 5,
    role: "Mage",
    element: "Dark",
    imprint: {
      "release": "Attack",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Let Me Destroy You",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Deify", "Penetrate"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Supreme Authority",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Bow Down Before Me",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence", "deify", "Penetrate"],
      },
    },
  },

  {
    name: "Belian",
    star: 5,
    role: "Knight",
    element: "Light",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Light of Destruction",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Speed", "Decrease Hit Chance"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Shackles of Suppression",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Random Buff"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Apocalypse",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke", "Increase Defense"],
      },
    },
  },

  {
    name: "Archdemon's Shadow",
    star: 5,
    role: "Mage",
    element: "Dark",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Touch of Chaos",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Seal"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Twisted Power",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Seal", "Decrease Hit Chance"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Dissolution",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense", "Burn", "Extra Turn"],
      },
    },
  },

  {
    name: "Adin",
    star: 3,
    role: "Thief",
    element: "Earth",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Ankle Cut",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Seal"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Blade Gust",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Lightning Bolt",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Weakness Shared", "Decrease Defense"],
      },
    },
  },

  {
    name: "Taeyou",
    star: 5,
    role: "Warrior",
    element: "Ice",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Full Moon Slash",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Rage"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Azure Wave Of The Ocean",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Rage", "Skill Nullifier"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Tornado Sweep",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Speed", "Rage"],
      },
    },
  },
  
  {
    name: "Arunka",
    star: 5,
    role: "Warrior",
    element: "Earth",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Dagger Throw",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Wild Instinct",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "A Trashing In The Prairie",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extinction", "Penetrate", "Barrier"],
      },
    },
  },

  {
    name: "Ran",
    star: 5,
    role: "Thief",
    element: "Ice",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Tempest",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Penetrate"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Mental Focus",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Immunity", "Increase Attack", "Extra Turn"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Instant Blade",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stigma", "Decrease Defense", "Skill Nullifier"],
      },
    },
  },

  {
    name: "Ran",
    star: 5,
    role: "Thief",
    element: "Ice",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Tempest",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Penetrate"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Mental Focus",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Immunity", "Increase Attack", "Extra Turn"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Instant Blade",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stigma", "Decrease Defense", "Skill Nullifier"],
      },
    },
  },

  {
    name: "Vildred",
    star: 5,
    role: "Thief",
    element: "Earth",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Tempest",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Penetrate"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Mental Focus",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Immunity", "Increase Attack", "Extra Turn"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Instant Blade",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stigma", "Decrease Defense", "Skill Nullifier"],
      },
    },
  },

  {
    name: "Vildred",
    star: 5,
    role: "Thief",
    element: "Earth",
    imprint: {
      "release": "Speed",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Sweep",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Dancing Blade",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Blade Ascent",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
    },
  },

  {
    name: "Aither",
    star: 3,
    role: "Soul Weaver",
    element: "Ice",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Whispering Spirit",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Speed"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Guard",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Spirit's Call",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier"],
      },
    },
  },

  {
    name: "Charles",
    star: 5,
    role: "Knight",
    element: "Earth",
    imprint: {
      "release": "Critical Hit Chance",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Slash",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Smash",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Faithfull Strike",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Defense"],
      },
    },
  },

  {
    name: "Alexa",
    star: 3,
    role: "Thief",
    element: "Ice",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Fell",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Cold Edge",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Poison"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Crushing Blow",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
    },
  },

  {
    name: "Bask",
    star: 3,
    role: "Knight",
    element: "Ice",
    imprint: {
      "release": "Health",
      "concentration": "Effect Resistance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Protective Strike",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Shield Blow",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Poison"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Will fo Protection",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Immunity", "Barrier"],
      },
    },
  },

  {
    name: "Elson",
    star: 3,
    role: "Soul Weaver",
    element: "Light",
    imprint: {
      "release": "Defense",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Heavy Strike",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Meteor Shower",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Light's Protection",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Defense"],
      },
    },
  },

  {
    name: "Maya",
    star: 4,
    role: "Knight",
    element: "Fire",
    imprint: {
      "release": "Defense",
      "concentration": "Defense",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Weakening Blow",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Concuss",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Morale Boost",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke", "Decrease Attack", "Increase Defense"],
      },
    },
  },

  {
    name: "Crozet",
    star: 4,
    role: "Knight",
    element: "Ice",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Defense",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Rush",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Mark of Protection",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier", "Increase Defense"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Breakthrough",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke"],
      },
    },
  },

  {
    name: "Lorina",
    star: 3,
    role: "Warrior",
    element: "Dark",
    imprint: {
      "release": "Attack",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Sharp Blow",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Spiritual Armament",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Resolve",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
    },
  },

  {
    name: "Achates",
    star: 4,
    role: "Soul Weaver",
    element: "Fire",
    imprint: {
      "release": "Defense",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Magic Design",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Rapid Cure",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Invincible"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Curing Prayer",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
    },
  },

  {
    name: "Angelica",
    star: 4,
    role: "Soul Weaver",
    element: "ice",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Holy Strike",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Origin of Life",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Invincible"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Guide of the Goddess",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Immunity", "Barrier"],
      },
    },
  },

  {
    name: "Clarissa",
    star: 4,
    role: "Warrior",
    element: "ice",
    imprint: {
      "release": "Attack",
      "concentration": "Dual Attack Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Harsh Lesson",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Rage",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Rage"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Hysteric",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed", "Decrease Defense", "Rage"],
      },
    },
  },

  {
    name: "Montmorancy",
    star: 3,
    role: "Soul Weaver",
    element: "ice",
    imprint: {
      "release": "Defense",
      "concentration": "Effect Resistance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Sleep Sorcery",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Sleep"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Purification",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [""],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Watery Curtain",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Immunity"],
      },
    },
  },

  {
    name: "Corvus",
    star: 4,
    role: "Knight",
    element: "Fire",
    imprint: {
      "release": "Defense",
      "concentration": "Effect Resistance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Shield Slam",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Transfer", "Indomitable", "Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Macerate",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun", "Indomitable"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Fury's Advent",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Indomitable", "Extra Turn"],
      },
    },
  },

  {
    name: "Enott",
    star: 3,
    role: "Warrior",
    element: "Ice",
    imprint: {
      "release": "Attack",
      "concentration": "Ciritcal Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Smash",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Judgment",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense", "Cannot Buff"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Prepare Judgment",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Critical Hit Chance"],
      },
    },
  },

  {
    name: "Jane",
    star: 3,
    role: "Mage",
    element: "Ice",
    imprint: {
      "release": "Attack",
      "concentration": "Effectiviness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Cold Blow",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Coerce",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Frostbite", "Immunity"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Cold Snap",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
    },
  },

  {
    name: "Byblis",
    star: 5,
    role: "Ranger",
    element: "Ice",
    imprint: {
      "release": "Health",
      "concentration": "Effectiviness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Floral Arrangement",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Gardener's Secret",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "A Larunda's Hospitality",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Hit Chance", "Soul Steal", "Barrier"],
      },
    },
  },

  {
    name: "Blooming Lidica",
    star: 5,
    role: "Thief",
    element: "Earth",
    imprint: {
      "release": "Attack",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Twirling Thorns",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Seductive Scent",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Fruit of Ecstasy",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Skill Nullifier", "Penetrate"],
      },
    },
  },

  {
    name: "Blooming Lidica",
    star: 5,
    role: "Thief",
    element: "Earth",
    imprint: {
      "release": "Attack",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Twirling Thorns",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Seductive Scent",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Fruit of Ecstasy",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Skill Nullifier", "Penetrate"],
      },
    },
  },

  {
    name: "Abigail",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Ambush",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Blood Banquet",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Curse", "Immortal", "Vampirism"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Scarlet Garden",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Injury"],
      },
    },
  },

  {
    name: "Benimaru",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Move Out of the Way",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Multilayer Barrier"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Universal Perception",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extra Turn", "Multilayer Barrier", "Penetrate"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Show No Mercy",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense","Multilayer Barrier"],
      },
    },
  },

  {
    name: "Edward Elric",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Move Out of the Way",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Multilayer Barrier"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Universal Perception",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extra Turn", "Multilayer Barrier", "Penetrate"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Show No Mercy",
        soul: "",
        cooldown: "",
        description: "",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense","Multilayer Barrier"],
      },
    },
  },
  // {
  //   name: "Angelica",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Ice",
  //   trait: ["Stun", "Immunity", "Barrier"]
  // },
  // {
  //   name: "Luluca",
  //   star: 5,
  //   role: "Mage",
  //   element: "Ice",
  //   trait: ["Decrease Defense", "Increase Defense", "Barrier"]
  // },
  // {
  //   name: "Sigret",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Chloe",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Rem",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Dizzy",
  //   star: 5,
  //   role: "Mage",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Politis",
  //   star: 5,
  //   role: "Mage",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Karin",
  //   star: 5,
  //   role: "Thief",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Remnant Violet",
  //   star: 5,
  //   role: "Thief",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Sez",
  //   star: 5,
  //   role: "Thief",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Landy",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Charles",
  //   star: 5,
  //   role: "Knight",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Vildred",
  //   star: 5,
  //   role: "Thief",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Aramintha",
  //   star: 5,
  //   role: "Mage",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Violet",
  //   star: 5,
  //   role: "Thief",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Baiken",
  //   star: 5,
  //   role: "Thief",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Yufine",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Lidica",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Pavel",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Alencia",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Cerise",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Arbiter Vildred",
  //   star: 5,
  //   role: "Thief",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Judge Kise",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Fallen Cecilia",
  //   star: 5,
  //   role: "Knight",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Shooting Star Achates",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Roana",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Top Model Luluca",
  //   star: 5,
  //   role: "Mage",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Last Rider Krau",
  //   star: 5,
  //   role: "Knight",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Silver Blade Aramintha",
  //   star: 5,
  //   role: "Mage",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Tempest Surin",
  //   star: 5,
  //   role: "Thief",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Adventurer Ras",
  //   star: 5,
  //   role: "Knight",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Specter Tenebria",
  //   star: 5,
  //   role: "Mage",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Ruele of Light",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Martial Artist Ken",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Dark Corvus",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Blood Moon Haste",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Remnant Violet",
  //   star: 5,
  //   role: "Thief",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Operator Sigret",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Apocalypse Ravi",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Briar Witch Iseria",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Maid Chloe",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Luna",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Basar",
  //   star: 5,
  //   role: "Mage",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Flan",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Melissa",
  //   star: 5,
  //   role: "Mage",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Taranor Guard",
  //   star: 5,
  //   role: "Knight",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Destina",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Landy",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Zeno",
  //   star: 5,
  //   role: "Mage",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Hurado",
  //   star: 5,
  //   role: "Mage",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Clarissa",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Alexa",
  //   star: 5,
  //   role: "Thief",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Arowell",
  //   star: 5,
  //   role: "Knight",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Assassin Cartuja",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Assassin Cidd",
  //   star: 5,
  //   role: "Thief",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Auxiliary Lots",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Bellona",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Cidd",
  //   star: 5,
  //   role: "Thief",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Doris",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Elena",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "General Purrgis",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Kise",
  //   star: 5,
  //   role: "Thief",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Mascot Hazel",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Pearlhorizon",
  //   star: 5,
  //   role: "Mage",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Ray",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Surin",
  //   star: 5,
  //   role: "Thief",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Taranor Royal Guard",
  //   star: 5,
  //   role: "Knight",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Vildred",
  //   star: 5,
  //   role: "Thief",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Khawazu",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Elena",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Tywin",
  //   star: 5,
  //   role: "Knight",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Aither",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Clarissa",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Auxiliary Lots",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Corvus",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Assassin Coli",
  //   star: 5,
  //   role: "Thief",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Gunther",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Serila",
  //   star: 5,
  //   role: "Mage",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Achates",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Dingo",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Guider Aither",
  //   star: 5,
  //   role: "Mage",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Camilla",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Elphelt",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Fairytale Tenebria",
  //   star: 5,
  //   role: "Mage",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Adlay",
  //   star: 5,
  //   role: "Mage",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Ambitious Tywin",
  //   star: 5,
  //   role: "Knight",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Armin",
  //   star: 5,
  //   role: "Knight",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Blaze Dingo",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Chaos Inquisitor",
  //   star: 5,
  //   role: "Knight",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Crescent Moon Rin",
  //   star: 5,
  //   role: "Thief",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Desert Jewel Basar",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Doll Maker Pearl",
  //   star: 5,
  //   role: "Mage",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Ervalen",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Fighter Maya",
  //   star: 5,
  //   role: "Knight",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Frostfire Dingo",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Hwayoung",
  //   star: 5,
  //   role: "Thief",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Julian",
  //   star: 5,
  //   role: "Mage",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Krazy",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Lionheart Cermia",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Lotus",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Nightmare Cid",
  //   star: 5,
  //   role: "Thief",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Sylvan Sage",
  //   star: 5,
  //   role: "Mage",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Sylvan Sage",
  //   star: 5,
  //   role: "Mage",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Taranor Royal Guard",
  //   star: 5,
  //   role: "Knight",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Wanderer Silk",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Wanderer Silk",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Watcher Schuri",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Adel",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Angel of Light",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Black Cat",
  //   star: 5,
  //   role: "Thief",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Flurry",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Joon",
  //   star: 5,
  //   role: "Mage",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Krun",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Luna",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Ophilia",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Purgis",
  //   star: 5,
  //   role: "Knight",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Sally",
  //   star: 5,
  //   role: "Mage",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Taranor",
  //   star: 5,
  //   role: "Knight",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Blaze Dingo",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Catalina",
  //   star: 5,
  //   role: "Warrior",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Demon King",
  //   star: 5,
  //   role: "Mage",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Eda",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Fire Spirit",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Glenn",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Hannah",
  //   star: 5,
  //   role: "Soul Weaver",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Luna",
  //   star: 5,
  //   role: "Mage",
  //   element: "Ice",
  //   trait: [""]
  // },
  // {
  //   name: "Moonlight",
  //   star: 5,
  //   role: "Thief",
  //   element: "Dark",
  //   trait: [""]
  // },
  // {
  //   name: "Priscilla",
  //   star: 5,
  //   role: "Knight",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Serina",
  //   star: 5,
  //   role: "Ranger",
  //   element: "Fire",
  //   trait: [""]
  // },
  // {
  //   name: "Sylvan",
  //   star: 5,
  //   role: "Mage",
  //   element: "Earth",
  //   trait: [""]
  // },
  // {
  //   name: "Thea",
  //   star: 5,
  //   role: "Thief",
  //   element: "Light",
  //   trait: [""]
  // },
  // {
  //   name: "Wanderer",
  //   star: 5,
  //   role: "Mage",
  //   element: "Fire",
  //   trait: [""]
  // }
];
