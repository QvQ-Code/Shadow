const element = [ 
    { name: "ice"},
    { name: "fire"},
    { name: "earth"},
    { name: "light"},
    { name: "dark"},
];

// Array of objects for buffs
const buffs = [
    { name: "Increase Attack"},
    { name: "Increase Defense"},
    { name: "Invincible"},
    { name: "Increase Speed"},
    { name: "Immortality"},
    { name: "Barrier"},
    { name: "Increase Critical Hit Resistance"},
    { name: "Continuous Heal"},
    { name: "Counterattack"},
    { name: "Stealth"},
    { name: "Reflect"},
    { name: "Increase Critical Hit Chance"},
    { name: "Debuff Immunity"},
    { name: "Cleanse"},
    { name: "Skill Nullifier"},
    { name: "Evasion"},
    { name: "Increase Attack (Greater)"},
    { name: "Increase Critical Hit Damage"},
    { name: "Guardians Blessing"},
    { name: "Bubble"},
    { name: "Effect Resistance"},
    { name: "Effectiveness"},
    { name: "Weakness Shared"},
    { name: "Escort"},
    { name: "Exploiting Weak Points"},
];

// Array of objects for debuffs
const debuffs = [
    { name: "Defense Break"},
    { name: "Decrease Speed"},
    { name: "Decrease Attack"},
    { name: "Stun"},
    { name: "Unhealable"},
    { name: "Burn"},
    { name: "Cannot Buff"},
    { name: "Sleep"},
    { name: "Poison"},
    { name: "Provoke"},
    { name: "Decrease Critical Hit Resistance"},
    { name: "Decrease Hit Chance"},
    { name: "Silence"},
    { name: "Bleed"},
    { name: "Vampiric Touch"},
    { name: "Target"},
    { name: "Magic Nail"},
    { name: "Curse Boss"},
    { name: "Bomb"},
    { name: "Curse"},
    { name: "Restrict"},
    { name: "Redirected Provoke"},
    { name: "Seal"},
    { name: "Stigma"},
    { name: "Venom"},
    { name: "Beguile"},
    { name: "Cannot Counterattack"},
    { name: "Block"},
];

// Array of objects for abilities
const special = [
    
];

// Array of objects for characters
const characters = [
    // Fire Element
    { name: "Ravi", 
        role: "Warrior", 
        element: "Fire", 
        trait: [
            "Stun",
        ]
    },
    
    { name: "Tamarinne", 
        role: "Soul Weaver", 
        element: "Fire", 
        trait: [

        ],
    },

    { name: "Lilias", 
        role: "Knight", 
        element: "Fire", 
        trait: [
            "Provoke",
        ],
    },

    { name: "Haste", 
        role: "Thief", 
        element: "Fire", 
        trait: [
            ""
        ] 
    },

    { name: "Ken", 
        role: "Warrior", 
        element: "Fire", 
        trait: [
            ""
        ] 
    },

    { name: "Cermia", 
        role: "Warrior", 
        element: "Fire", 
        trait: [
            ""
        ] 
    },

    { name: "Sol", 
        role: "Warrior", 
        element: "Fire", 
        trait: [
            ""
        ] 
    },

    { name: "Lilibet", 
        role: "Warrior", 
        element: "Fire", 
        trait: [
            ""
        ] 
    },

    { name: "Baiken", 
        role: "Thief", 
        element: "Fire", 
        trait: [
            ""
        ] 
    },

    { name: "Kawerik", 
        role: "Mage", 
        element: "Fire", 
        trait: [
            ""
        ] 
    },

    { name: "Iseria", 
        role: "Ranger", 
        element: "Fire", 
        trait: [
            ""
        ] 
    },

    { name: "Tenebria", 
        role: "Mage", 
        element: "Fire", 
        trait: [
            ""
        ] 
    },
    
    // Ice Element
    { name: "Diene", 
        role: "Soul Weaver", 
        element: "Ice", 
        trait: [
            ""
        ] 
    },

    { name: "Krau", 
        role: "Knight", 
        element: "Ice", 
        trait: [
            ""
        ] 
    },

    { name: "Angelica", 
        role: "Soul Weaver", 
        element: "Ice", 
        trait: [
            ""
        ] 
    },
    
    { name: "Luluca", 
        role: "Mage", 
        element: "Ice", 
        trait: [
            ""
        ] 
    },
    
    { name: "Sigret", 
        role: "Warrior", 
        element: "Ice", 
        trait: [
            ""
        ] 
    },
    
    { name: "Chloe", 
        role: "Warrior", 
        element: "Ice", 
        trait: [
            ""
        ] 
    },
    
    { name: "Rem", 
        role: "Warrior", 
        element: "Ice", 
        trait: [
            ""
        ] 
    },
    
    { name: "Dizzy", 
        role: "Mage", 
        element: "Ice", 
        trait: [
            ""
        ] 
    },
    
    { name: "Politis", 
        role: "Mage", 
        element: "Ice", 
        trait: [
            ""
        ] 
    },
    
    { name: "Karin", 
        role: "Thief", 
        element: "Ice", 
        trait: [
            ""
        ] 
    },
    
    { name: "Remnant Violet", 
        role: "Thief", 
        element: "Ice", 
        trait: [
            ""
        ] 
    },
    
    { name: "Sez", 
        role: "Thief", 
        element: "Ice", 
        trait: [
            ""
        ] 
    },
  
    // Earth Element
    { name: "Landy", 
        role: "Ranger", 
        element: "Earth",
        trait: [
            ""
        ] 
    },
    
    { name: "Charles", 
        role: "Knight", 
        element: "Earth", 
        trait: [
            ""
        ] 
    },
    
    { name: "Vildred", 
        role: "Thief", 
        element: "Earth", 
        trait: [
            ""
        ] 
    },
    
    { name: "Aramintha", 
        role: "Mage", 
        element: "Earth", 
        trait: [
            ""
        ] 
    },
    
    { name: "Violet", 
        role: "Thief", 
        element: "Earth", 
        trait: [
            ""
        ] 
    },
    
    { name: "Baiken", 
        role: "Thief", 
        element: "Earth", 
        trait: [
            ""
        ] 
    },
    
    { name: "Yufine", 
        role: "Warrior", 
        element: "Earth", 
        trait: [
            ""
        ] 
    },
    
    { name: "Lidica", 
        role: "Ranger", 
        element: "Earth", 
        trait: [
            ""
        ] 
    },
    
    { name: "Pavel", 
        role: "Ranger", 
        element: "Earth", 
        trait: [
            ""
        ] 
    },
    
    { name: "Alencia", 
        role: "Warrior", 
        element: "Earth", 
        trait: [
            ""
        ] 
    },
    
    { name: "Cerise", 
        role: "Ranger", 
        element: "Earth", 
        trait: [
            ""
        ] 
    },
    
    // Light Element
    { name: "Arbiter Vildred", 
        role: "Thief", 
        element: "Dark", 
        trait: [
            ""
        ] 
    },
    
    { name: "Judge Kise", 
        role: "Warrior", 
        element: "Light", 
        trait: [
            ""
        ] 
    },
    
    { name: "Fallen Cecilia", 
        role: "Knight", 
        element: "Light", 
        trait: [
            ""
        ] 
    },
    
    { name: "Shooting Star Achates", 
        role: "Soul Weaver", 
        element: "Light", 
        trait: [
            ""
        ] 
    },
    
    { name: "Roana", 
        role: "Soul Weaver", 
        element: "Light", 
        trait: [
            ""
        ] 
    },
    
    { name: "Tamarinne", 
        role: "Soul Weaver", 
        element: "Light", 
        trait: [
            ""
        ] 
    },
    
    { name: "Top Model Luluca", 
        role: "Mage", 
        element: "Light", 
        trait: [
            ""
        ] 
    },
    
    { name: "Last Rider Krau", 
        role: "Knight", 
        element: "Light", 
        trait: [
            ""
        ] 
    },
    { name: "Silver Blade Aramintha", 
        role: "Mage", 
        element: "Light", 
        trait: [
            ""
        ] 
    },
    { name: "Tempest Surin", 
        role: "Thief", 
        element: "Light", 
        trait: [
            ""
        ] 
    },
    { name: "Adventurer Ras", 
        role: "Knight", 
        element: "Light", 
        trait: [
            ""
        ] 
    },
    { name: "Specter Tenebria", 
        role: "Mage", 
        element: "Dark", 
        trait: [
            ""
        ] 
    },
    { name: "Ruele of Light", 
        role: "Soul Weaver", 
        element: "Light", 
        trait: [
            ""
        ] 
    },
    { name: "Martial Artist Ken", 
        role: "Warrior", 
        element: "Dark", 
        trait: [
            ""
        ] 
    },
    { name: "Dark Corvus", 
        role: "Warrior", 
        element: "Dark", 
        trait: [
            ""
        ] 
    },
    { name: "Blood Moon Haste", 
        role: "Soul Weaver", 
        element: "Dark", 
        trait: [
            ""
        ] 
    },
    { name: "Remnant Violet", 
        role: "Thief", 
        element: "Dark", 
        trait: [
            ""
        ] 
    },
    { name: "Operator Sigret", 
        role: "Ranger", 
        element: "Dark", 
        trait: [
            ""
        ] 
    },
    { name: "Apocalypse Ravi", 
        role: "Warrior", 
        element: "Dark", 
        trait: [
            ""
        ] 
    },
    { name: "Specter Tenebria", 
        role: "Mage", 
        element: "Dark", 
        trait: [
            ""
        ] 
    },
    { name: "Briar Witch Iseria", 
        role: "Ranger", 
        element: "Dark", 
        trait: [
            ""
        ] 
    },
    { name: "Maid Chloe", 
        role: "Soul Weaver", 
        element: "Dark", 
        trait: [
            ""
        ] 
    },

    { name: "Luna", 
      role: "Warrior", 
      element: "Ice", 
      trait: [
        ""
      ] 
    },
    { name: "Basar", 
      role: "Mage", 
      element: "Earth", 
      trait: [
        ""
      ] 
    },
    { name: "Flan", 
      role: "Ranger", 
      element: "Ice", 
      trait: [
        ""
      ] 
    },
    { name: "Melissa", 
      role: "Mage", 
      element: "Fire", 
      trait: [
        ""
      ] 
    },
    { name: "Taranor Guard", 
      role: "Knight", 
      element: "Ice", 
      trait: [
        ""
      ] 
    },
    { name: "Destina", 
      role: "Soul Weaver", 
      element: "Earth", 
      trait: [
        ""
      ] 
    },
    { name: "Landy", 
      role: "Ranger", 
      element: "Earth", 
      trait: [
        ""
      ] 
    },
    { name: "Zeno", 
      role: "Mage", 
      element: "Ice", 
      trait: [
        ""
      ] 
    },
    { name: "Hurado", 
      role: "Mage", 
      element: "Dark", 
      trait: [
        ""
      ] 
    },
    { name: "Clarissa", 
      role: "Warrior", 
      element: "Ice", 
      trait: [
        ""
      ] 
    },

    { name: "Alexa", 
        role: "Thief", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Arowell", 
        role: "Knight", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Assassin Cartuja", 
        role: "Warrior", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Assassin Cidd", 
        role: "Thief", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Auxiliary Lots", 
        role: "Soul Weaver", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Bellona", 
        role: "Ranger", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Cidd", 
        role: "Thief", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Doris", 
        role: "Soul Weaver", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Elena", 
        role: "Soul Weaver", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "General Purrgis", 
        role: "Warrior", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Kise", 
        role: "Thief", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Mascot Hazel", 
        role: "Soul Weaver", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Pearlhorizon", 
        role: "Mage", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Ray", 
        role: "Soul Weaver", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Surin", 
        role: "Thief", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Taranor Royal Guard", 
        role: "Knight", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },

      { name: "Vildred", 
        role: "Thief", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Khawazu", 
        role: "Warrior", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Elena", 
        role: "Soul Weaver", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Tywin", 
        role: "Knight", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Aither", 
        role: "Soul Weaver", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Clarissa", 
        role: "Warrior", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Auxiliary Lots", 
        role: "Soul Weaver", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Corvus", 
        role: "Warrior", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Assassin Coli", 
        role: "Thief", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Gunther", 
        role: "Warrior", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Serila", 
        role: "Mage", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Achates", 
        role: "Soul Weaver", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Dingo", 
        role: "Warrior", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Guider Aither", 
        role: "Mage", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Camilla", 
        role: "Soul Weaver", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Elphelt", 
        role: "Ranger", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Fairytale Tenebria", 
        role: "Mage", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },

      { name: "Adlay", 
        role: "Mage", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Ambitious Tywin", 
        role: "Knight", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Armin", 
        role: "Knight", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Blaze Dingo", 
        role: "Soul Weaver", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Chaos Inquisitor", 
        role: "Knight", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Crescent Moon Rin", 
        role: "Thief", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Desert Jewel Basar", 
        role: "Soul Weaver", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Doll Maker Pearl", 
        role: "Mage", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Ervalen", 
        role: "Warrior", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Fighter Maya", 
        role: "Knight", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Glenn", 
        role: "Ranger", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Inferno Khawazu", 
        role: "Warrior", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Lena", 
        role: "Warrior", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Melissa", 
        role: "Mage", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Researcher Carrot", 
        role: "Mage", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Rin", 
        role: "Soul Weaver", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Shadow Rose", 
        role: "Knight", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Specimen Sez", 
        role: "Thief", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Summer's Disciple Alexa", 
        role: "Thief", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Wanderer Silk", 
        role: "Ranger", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Watcher Schuri", 
        role: "Ranger", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Adel", 
        role: "Warrior", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Angel of Light", 
        role: "Soul Weaver", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Black Cat", 
        role: "Thief", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Flurry", 
        role: "Ranger", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Joon", 
        role: "Mage", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Krun", 
        role: "Warrior", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Luna", 
        role: "Soul Weaver", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Ophilia", 
        role: "Ranger", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Purgis", 
        role: "Knight", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Sally", 
        role: "Mage", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Taranor", 
        role: "Knight", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Yuna", 
        role: "Thief", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Blaze Dingo", 
        role: "Warrior", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Catalina", 
        role: "Warrior", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Demon King", 
        role: "Mage", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Eda", 
        role: "Ranger", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Fire Spirit", 
        role: "Soul Weaver", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Glenn", 
        role: "Ranger", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Hannah", 
        role: "Soul Weaver", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Luna", 
        role: "Mage", 
        element: "Ice", 
        trait: [
          ""
        ] 
      },
      { name: "Moonlight", 
        role: "Thief", 
        element: "Dark", 
        trait: [
          ""
        ] 
      },
      { name: "Priscilla", 
        role: "Knight", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Serina", 
        role: "Ranger", 
        element: "Fire", 
        trait: [
          ""
        ] 
      },
      { name: "Sylvan", 
        role: "Mage", 
        element: "Earth", 
        trait: [
          ""
        ] 
      },
      { name: "Thea", 
        role: "Thief", 
        element: "Light", 
        trait: [
          ""
        ] 
      },
      { name: "Wanderer", 
        role: "Mage", 
        element: "Fire", 
        trait: [
          ""
        ] 
      }
];
