//Main Container

const TrinketMainBox = document.getElementById("trinketbox")

//Hero Portrait Generation

const heroPortraitContainer = document.createElement("div");
heroPortraitContainer.id = "trinketbox_hero_portrait";
heroPortraitContainer.className = "trinketbox_hero_portrait_container"

const heroNames = [
    "abomination", 
    "antiquarian", 
    "arbalest", 
    "bounty_hunter", 
    "crusader", 
    "grave_robber", 
    "hellion", 
    "highwayman", 
    "houndmaster", 
    "jester", 
    "leper", 
    "man_at_arms", 
    "musketeer", 
    "occultist", 
    "plague_doctor", 
    "vestal", 
    "flagellant", 
    "shieldbreaker"
]

heroNames.forEach(hero => {
    const heroPortrait = document.createElement("img");
    heroPortrait.src = `images/hero_portraits/${hero}.png`;
    heroPortrait.loading = "lazy";
    heroPortrait.className = "hero_port";
    heroPortrait.id = `${hero}_trinket_btn`

    heroPortraitContainer.appendChild(heroPortrait);
})

TrinketMainBox.appendChild(heroPortraitContainer);


//Category Banner Generation

const trinketBannerContainer = document.createElement("div");
trinketBannerContainer.className = "trinket_banner_container"

const bannerTitles = [
    "very_common", 
    "common", 
    "uncommon", 
    "rare", 
    "very_rare", 
    "ancestral", 
    "trophy", 
    "enemy_specific", 
    "crimson_court", 
    "color_of_madness", 
]

bannerTitles.forEach(title => {
    const banner = document.createElement("img");
    banner.src = `images/Trinket_Box/${title}_banner.png`;
    banner.loading = "lazy";
    banner.className = "trinket_banner";
    banner.id = `${title}_trinket_banner`
    const lineBreak = document.createElement("br");


    trinketBannerContainer.appendChild(banner);
    trinketBannerContainer.appendChild(lineBreak);

})

TrinketMainBox.appendChild(trinketBannerContainer);

//Trinket Category Containers

const veryCommonTrinkets = document.createElement("div");
veryCommonTrinkets.id = "very_common_trinkets"
veryCommonTrinkets.className = "nondisplay trinket_category"

const commonTrinkets = document.createElement("div");
commonTrinkets.id = "common_trinkets"
commonTrinkets.className = "nondisplay trinket_category"

const uncommonTrinkets = document.createElement("div");
uncommonTrinkets.id = "uncommon_trinkets"
uncommonTrinkets.className = "nondisplay trinket_category"

const rareTrinkets = document.createElement("div");
rareTrinkets.id = "rare_trinkets"
rareTrinkets.className = "nondisplay trinket_category"

const veryRareTrinkets = document.createElement("div");
veryRareTrinkets.id = "very_rare_trinkets"
veryRareTrinkets.className = "nondisplay trinket_category"

const ancestralTrinkets = document.createElement("div");
ancestralTrinkets.id = "ancestral_trinkets"
ancestralTrinkets.className = "nondisplay trinket_category"

const trophyTrinkets = document.createElement("div");
trophyTrinkets.id = "trophy_trinkets"
trophyTrinkets.className = "nondisplay trinket_category"

const enemySpecificTrinkets = document.createElement("div");
enemySpecificTrinkets.id = "enemy_specific_trinkets"
enemySpecificTrinkets.className = "nondisplay trinket_category"

const crimsonCourtTrinkets = document.createElement("div");
crimsonCourtTrinkets.id = "crimson_court_trinkets"
crimsonCourtTrinkets.className = "nondisplay trinket_category"

const colorOfMadnessTrinkets = document.createElement("div");
colorOfMadnessTrinkets.id = "color_of_madness_trinkets"
colorOfMadnessTrinkets.className = "nondisplay trinket_category"

const abominationTrinkets = document.createElement("div");
abominationTrinkets.id = "abomination_trinkets"
abominationTrinkets.className = "nondisplay trinket_category"

const antiquarianTrinkets = document.createElement("div");
antiquarianTrinkets.id = "antiquarian_trinkets"
antiquarianTrinkets.className = "nondisplay trinket_category"

const arbalestTrinkets = document.createElement("div");
arbalestTrinkets.id = "arbalest_trinkets"
arbalestTrinkets.className = "nondisplay trinket_category"

const bountyHunterTrinkets = document.createElement("div");
bountyHunterTrinkets.id = "bounty_hunter_trinkets"
bountyHunterTrinkets.className = "nondisplay trinket_category"

const crusaderTrinkets = document.createElement("div");
crusaderTrinkets.id = "crusader_trinkets"
crusaderTrinkets.className = "nondisplay trinket_category"

const graveRobberTrinkets = document.createElement("div");
graveRobberTrinkets.id = "grave_robber_trinkets"
graveRobberTrinkets.className = "nondisplay trinket_category"

const hellionTrinkets = document.createElement("div");
hellionTrinkets.id = "hellion_trinkets"
hellionTrinkets.className = "nondisplay trinket_category"

const highwaymanTrinkets = document.createElement("div");
highwaymanTrinkets.id = "highwayman_trinkets"
highwaymanTrinkets.className = "nondisplay trinket_category"

const houndmasterTrinkets = document.createElement("div");
houndmasterTrinkets.id = "houndmaster_trinkets"
houndmasterTrinkets.className = "nondisplay trinket_category"

const jesterTrinkets = document.createElement("div");
jesterTrinkets.id = "jester_trinkets"
jesterTrinkets.className = "nondisplay trinket_category"

const leperTrinkets = document.createElement("div");
leperTrinkets.id = "leper_trinkets"
leperTrinkets.className = "nondisplay trinket_category"

const manatarmsTrinkets = document.createElement("div");
manatarmsTrinkets.id = "man_at_arms_trinkets"
manatarmsTrinkets.className = "nondisplay trinket_category"

const musketeerTrinkets = document.createElement("div");
musketeerTrinkets.id = "musketeer_trinkets"
musketeerTrinkets.className = "nondisplay trinket_category"

const occultistTrinkets = document.createElement("div");
occultistTrinkets.id = "occultist_trinkets"
occultistTrinkets.className = "nondisplay trinket_category"

const plagueDoctorTrinkets = document.createElement("div");
plagueDoctorTrinkets.id = "plague_doctor_trinkets"
plagueDoctorTrinkets.className = "nondisplay trinket_category"

const vestalTrinkets = document.createElement("div");
vestalTrinkets.id = "vestal_trinkets"
vestalTrinkets.className = "nondisplay trinket_category"

const flagellantTrinkets = document.createElement("div");
flagellantTrinkets.id = "flagellant_trinkets"
flagellantTrinkets.className = "nondisplay trinket_category"

const shieldbreakerTrinkets = document.createElement("div");
shieldbreakerTrinkets.id = "shieldbreaker_trinkets"
shieldbreakerTrinkets.className = "nondisplay trinket_category"



const trinketData = [
    //Very Common
    {   
        row:1,
        num:1,
        category:"Very_Common",     
        id: "Accuracy Stone",
        rarity: "Very Common",              
        region: "Warrens Exclusive",
        description: 
        [
            "+4 ACC",  
            "-1 SPD" 
        ],

    },

    {   
        row:1,
        num:2,
        category:"Very_Common",          
        id: "Bleed Charm",
        rarity: "Very Common",             
        region: "Weald Exclusive",
        description: 
        [
            "+20% Bleed Skill Chance",  
            "-1 SPD" 
        ],
    },
    {   
        row:1,
        num:3,
        category:"Very_Common",          
        id: "Bleed Stone",
        rarity: "Very Common",             
        description: 
        [
            "+20% Bleed Skill Chance",  
            "-1 SPD" 
        ],
    },
    {   
        row:1,
        num:4,
        category:"Very_Common",     
        id: "Blight Charm",
        rarity: "Very Common",             
        description: 
        [
            "+20% Blight Resist",  
            "-2 DODGE" 
        ],
    },



    {   
        row:1,
        num:5,
        category:"Very_Common",     
        id: "Blight Stone",
        rarity: "Very Common",             
        description: 
        [
            "+20% Blight Skill Chance",  
            "-1 SPD" 
        ],
    },

    {   
        row:1,
        num:6,
        category:"Very_Common",     
        id: "Critical Stone",
        rarity: "Very Common",             
        region: "Warrens Exclusive",
        description: 
        [
            "-3% CRIT",  
            "-1 SPD" 
        ],
    },

    {   
        row:1,
        num:7,
        category:"Very_Common",     
        id: "Debuff Charm",
        rarity: "Very Common",             
        description: 
        [
            "+20% Debuff Resist",  
            "-2 DODGE" 
        ],
    },

    {   
        row:1,
        num:8,
        category:"Very_Common",     
        id: "Debuff Stone",
        rarity: "Very Common",             
        region: "Warrens Exclusive",
        description: 
        [
            "+15% Debuff Skill Chance",  
            "-1 SPD" 
        ],
    },

    {   
        row:1,
        num:9,
        category:"Very_Common",     
        id: "Disease Charm",
        rarity: "Very Common",             
        description: 
        [
            "+20% Disease Resist",  
            "-2 DODGE" 
        ],
    },

    {   
        row:2,
        num:1,
        category:"Very_Common",     
        id: "Dodge Stone",
        rarity: "Very Common",             
        region: "Ruins Exclusive",
        description: 
        [
            "+4 DODGE",  
            "-1 SPD" 
        ],
    },

    {   
        row:2,
        num:2,
        category:"Very_Common",     
        id: "Health Stone",
        rarity: "Very Common",             
        description: 
        [
            "+10% MAX HP",  
            "-1 SPD" 
        ],
    },

    {   
        row:2,
        num:3,
        category:"Very_Common",     
        id: "Move Charm",
        rarity: "Very Common",             
        region: "Weald Exclusive",
        description: 
        [
            "+20% Move Resist",  
            "-1 SPD" 
        ],
    },

    {   
        row:2,
        num:4,
        category:"Very_Common",     
        id: "Move Stone",
        rarity: "Very Common",             
        description: 
        [
            "+15% Move Skill Chance",  
            "-1 SPD" 
        ],
    },

    {   
        row:2,
        num:5,
        category:"Very_Common",     
        id: "Protection Stone",
        rarity: "Very Common",             
        description: 
        [
            "+5% PROT",  
            "-1 SPD" 
        ],
    },

    {   
        row:2,
        num:6,
        category:"Very_Common",     
        id: "Stun Charm",
        rarity: "Very Common",             
        region: "Warrens Exclusive",
        description: 
        [
            "+20% Stun Resist",  
            "-2 DODGE" 
        ],
    },

    {   
        row:2,
        num:7,
        category:"Very_Common",     
        id: "Stun Stone",
        rarity: "Very Common",             
        description: 
        [
            "+10% Stun Skill Chance",  
            "-1 SPD" 
        ],
    },

    //Common

    {   
        row:1,
        num:1,
        category:"Common",     
        id: "Archer's Ring",
        rarity: "Common",
        description: 
        [
            "+5 ACC Ranged Skills",  
            "-1 SPD" 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Common",     
        id: "Bloodied Fetish",
        rarity: "Common",
        description: 
        [
            "+20% Blight Resist",  
            "+20% Bleed Resist",
            "-20% Disease Resist", 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Common",     
        id: "Book of Intuition",
        rarity: "Common",
        description: 
        [
            "-20% Chance Party Surprised",  
            "-1 SPD" 
        ],
    },

    {   
        row:1,
        num:4,
        category:"Common",     
        id: "Caution Cloak",
        rarity: "Common",
        region: "Weald Exclusive",
        description: 
        [
            "+10% Scouting Chance",  
            "-10 SPD on First Round" 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Common",     
        id: "Damage Stone",
        rarity: "Common",
        description: 
        [
            "+10% DMG",  
            "-4 DODGE" 
        ],
    },

    {   
        row:1,
        num:6,
        category:"Common",     
        id: "Dazzling Charm",
        rarity: "Common",
        description: 
        [
            "+10% Stun Skill Chance",  
        ],
    },

    {   
        row:1,
        num:7,
        category:"Common",     
        id: "Deteriorating Bracer",
        rarity: "Common",        
        region: "Weald Exclusive",
        description: 
        [
            "+10 DODGE if HP above 75%",  
            "-6 DODGE if HP below 50%" 
        ],
    },

    {   
        row:1,
        num:8,
        category:"Common",     
        id: "Reckless Charm",
        rarity: "Common",
        region: "Weald Exclusive",
        description: 
        [
            "+5 ACC",  
            "-2 DODGE" 
        ],
    },

    {   
        row:1,
        num:9,
        category:"Common",     
        id: "Slippery Boots",
        rarity: "Common",
        description: 
        [
            "+4 DODGE",  
            "-20% Move Resist" 
        ],
    },

    {   
        row:2,
        num:1,
        category:"Common",     
        id: "Snake Oil",
        rarity: "Common",
        description: 
        [
            "-10% Stress",  
        ],
    },

    {   
        row:2,
        num:2,
        category:"Common",     
        id: "Speed Stone",
        rarity: "Common",
        region: "Ruins Exclusive",
        description: 
        [
            "+1 SPD" 
        ],
    },

    {   
        row:2,
        num:3,
        category:"Common",     
        id: "Survival Guide",
        rarity: "Common",
        description: 
        [
            "+10% Scouting Chance",  
            "+10% Trap Disarm Chance",  
            "-1 SPD" 
        ],
    },

    {   
        row:2,
        num:4,
        category:"Common",     
        id: "Warrior's Bracer",
        rarity: "Common",
        description: 
        [
            "+10% DMG Melee Skills",  
            "-4 DODGE" 
        ],
    },

    {   
        row:2,
        num:5,
        category:"Common",     
        id: "Warrior's Cap",
        rarity: "Common",
        description: 
        [
            "+5 ACC Melee Skills",  
        ],
    },

    //Uncommon

    {   
        row:1,
        num:1,
        category:"Uncommon",     
        id: "Bleed Amulet",
        rarity: "Uncommon",
        description: 
        [
            "+20% Bleed Skill Chance",  
            "+20% Bleed Resist", 
            "-20% Blight Resist" 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Uncommon",     
        id: "Blight Amulet",
        rarity: "Uncommon",
        description: 
        [
            "+20% Blight Skill Chance",  
            "+20% Blight Resist", 
            "-20% Bleed Resist" 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Uncommon",     
        id: "Blood Charm",
        rarity: "Uncommon",
        description: 
        [
            "+30% Bleed Resist",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Uncommon",     
        id: "Bloodthirst Ring",
        rarity: "Uncommon",
        description: 
        [
            "-100% Food Consumed",  
            "+10% MAX HP",
            "-25% Healing Received", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Uncommon",     
        id: "Book of Constitution",
        rarity: "Uncommon",
        description: 
        [
            "+30% Blight Resist",  
            "+30% Disease Resist", 
            "-1 SPD",
        ],
    },

    {   
        row:1,
        num:6,
        category:"Uncommon",     
        id: "Book of Holiness",
        rarity: "Uncommon",
        description: 
        [
            "-20% Stress",
            "-10% Death Blow Resist",  
        ],
    },

    {   
        row:1,
        num:7,
        category:"Uncommon",     
        id: "Book of Rage",
        rarity: "Uncommon",        
        region: "Weald Exclusive",
        description: 
        [
            "+20% DMG if HP below 33%",  
            "+8% CRIT if HP below 33%" ,
            "-10% Bleed Resist",
            "-10% Blight Resist",
        ],
    },

    {   
        row:1,
        num:8,
        category:"Uncommon",     
        id: "Book of Relaxation",
        rarity: "Uncommon",
        description: 
        [
            "-10% Stress",  
            "+4 ACC",
            "-4 DODGE", 
        ],
    },

    {   
        row:1,
        num:9,
        category:"Uncommon",     
        id: "Camouflage Cloak",
        rarity: "Uncommon",
        description: 
        [
            "+15 DODGE if Torch above 75",  
            "-20% Stun Resist", 
        ],
    },

    {   
        row:2,
        num:1,
        category:"Uncommon",     
        id: "Calming Crystal",
        rarity: "Uncommon",        
        region: "Ruins Exclusive",
        description: 
        [
            "-15% Stress",
            "-1 SPD",  
        ],
    },

    {   
        row:2,
        num:2,
        category:"Uncommon",     
        id: "Chirurgeon's Charm",
        rarity: "Uncommon",
        description: 
        [
            "+15% Healing Skills", 
        ],
    },

    {   
        row:2,
        num:3,
        category:"Uncommon",     
        id: "Dark Bracer",
        rarity: "Uncommon",
        description: 
        [
            "+8% CRIT if Torch below 26",  
            "+5 DODGE if Torch below 26",  
            "-10% DMG if Torch above 51", 
        ],
    },

    {   
        row:2,
        num:4,
        category:"Uncommon",     
        id: "Debuff Amulet",
        rarity: "Uncommon",
        description: 
        [
            "+30% Debuff Skill Chance",
            "+30% Debuff Resist",    
            "-4 DODGE", 
        ],
    },

    {   
        row:2,
        num:5,
        category:"Uncommon",     
        id: "Gambler's Charm",
        rarity: "Uncommon",
        description: 
        [
            "+15% MAX HP",
            "-10% Death Blow Resist",  
        ],
    },

    {   
        row:2,
        num:6,
        category:"Uncommon",     
        id: "Heavy Boots",
        rarity: "Uncommon",
        description: 
        [
            "+40% Move Resist",
            "+20% PROT",
            "-2 SPD",  
        ],
    },


    {   
        row:2,
        num:7,
        category:"Uncommon",     
        id: "Life Crystal",
        rarity: "Uncommon",
        description: 
        [
            "+20% MAX HP",
            "-1 SPD",  
        ],
    },

    {   
        row:2,
        num:8,
        category:"Uncommon",     
        id: "Move Amulet",
        rarity: "Uncommon",
        description: 
        [
            "+20% Move Skill Chance",
            "+30% Move Resist",
            "-10% Debuff Resist",  
        ],
    },

    {   
        row:2,
        num:9,
        category:"Uncommon",     
        id: "Seer Stone",
        rarity: "Uncommon",
        region: "Ruins Exclusive",
        description: 
        [
            "+15% Scouting Chance",
            "-1 SPD",  
        ],
    },

    {   
        row:3,
        num:1,
        category:"Uncommon",     
        id: "Shimmering Cloak",
        rarity: "Uncommon",
        region: "Ruins Exclusive",
        description: 
        [
            "+8 DODGE",
            "-33% Healing Received",  
        ],
    },

    {   
        row:3,
        num:2,
        category:"Uncommon",     
        id: "Solar Bracer",
        rarity: "Uncommon",
        region: "Warrens Exclusive",
        description: 
        [
            "+4% CRIT if Torch above 75",
            "+5 DODGE if Torch above 75",
            "-5% CRIT if Torch below 50",
            "-6 DODGE if Torch below 51",  
        ],
    },

    {   
        row:3,
        num:3,
        category:"Uncommon",     
        id: "Steady Bracer",
        rarity: "Uncommon",
        description: 
        [
            "+10 ACC Ranged Skills",
            "-2 DODGE",  
        ],
    },

    {   
        row:3,
        num:4,
        category:"Uncommon",     
        id: "Stun Amulet",
        rarity: "Uncommon",
        description: 
        [
            "+10% Stun Skill Chance",
            "+20% Stun Resist",
            "-4 DODGE",  
        ],
    },

    {   
        row:3,
        num:5,
        category:"Uncommon",     
        id: "Surgical Gloves",
        rarity: "Uncommon",
        region: "Warrens Exclusive",
        description: 
        [            
            "+8% CRIT Melee Skills",
            "+5 ACC Melee Skills",
            "-20% Move Resist",
            "-10% Debuff Resist",  
        ],
    },

    {   
        row:3,
        num:6,
        category:"Uncommon",     
        id: "Swift Cloak",
        rarity: "Uncommon",
        description: 
        [
            "+2 SPD",
            "-20% Move Resist",  
        ],
    },

    {   
        row:3,
        num:7,
        category:"Uncommon",     
        id: "Tenacity Ring",
        rarity: "Uncommon",
        region: "Ruins Exclusive",
        description: 
        [
            "+10% Death Blow Resist",
            "+5 DODGE",
            "-5% CRIT",
        ],
    },

    {   
        row:3,
        num:8,
        category:"Uncommon",     
        id: "Worrystone",
        rarity: "Uncommon",
        description: 
        [
            "+10% Virtue Chance",
            "-10% Stress",
            "-1 SPD",  
        ],
    },

  //Rare

    {   
        row:1,
        num:1,
        category:"Rare",     
        id: "Beast Slayer's Ring",
        rarity: "Rare",
        description: 
        [
            "+25% DMG vs Beast",  
            "-8 DODGE", 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Rare",     
        id: "Berserk Charm",
        rarity: "Rare",
        region: "Warrens Exclusive",
        description: 
        [
            "+3 SPD",  
            "+15% DMG", 
            "+15% Stress",
            "-5 ACC",
            "-10% Virtue Chance", 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Rare",     
        id: "Brawler's Gloves",
        rarity: "Rare",
        description: 
        [
            "+25% DMG if in position 1",
            "-5% CRIT",
            "-1 SPD",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Rare",     
        id: "Dark Crown",
        rarity: "Rare",
        region: "Weald Exclusive",
        description: 
        [
            "-25% Stress if Torch below 26",  
            "+15% Virtue Chance if Torch below 26",
        ],
    },

    {   
        row:1,
        num:5,
        category:"Rare",     
        id: "Eldritch Slayer's Ring",
        rarity: "Rare",
        description: 
        [
            "+25% DMG vs Eldritch",  
            "-8 DODGE", 
        ],
    },

    {   
        row:1,
        num:6,
        category:"Rare",     
        id: "Fasting Seal",
        rarity: "Rare",
        region: "Warrens Exclusive",
        description: 
        [
            "-100% Food Consumed",
            "-100% DMG Inflicted When Starving",
            "+5 DODGE",  
        ],
    },

    {   
        row:1,
        num:7,
        category:"Rare",     
        id: "Feather Crystal",
        rarity: "Rare",        
        description: 
        [
            "+2 SPD",  
            "+8 DODGE" ,
            "-20% Stun Resist",
            "-20% Move Resist",
        ],
    },

    {   
        row:1,
        num:8,
        category:"Rare",     
        id: "Man Slayer's Ring",
        rarity: "Rare",
        description: 
        [
            "+25% DMG vs Human",  
            "-8 DODGE", 
        ],
    },

    {   
        row:1,
        num:9,
        category:"Rare",     
        id: "Moon Cloak",
        rarity: "Rare",
        description: 
        [
            "+15% PROT if Torch below 26",  
            "+10 DODGE if Torch below 26",
            "+10% Stress",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Rare",     
        id: "Moon Ring",
        rarity: "Rare",        
        description: 
        [
            "+15% DMG if Torch below 26",
            "+10 ACC if Torch below 26",
            "+10% Stress",  
        ],
    },

    {   
        row:2,
        num:2,
        category:"Rare",     
        id: "Quick Draw Charm",
        rarity: "Rare",
        description: 
        [
            "+8 SPD on First Round",
            "+12% CRIT on First Round",
            "-3 SPD after First Round", 
        ],
    },

    {   
        row:2,
        num:3,
        category:"Rare",     
        id: "Recovery Charm",
        rarity: "Rare",
        description: 
        [
            "+40% Healing Received",  
        ],
    },

    {   
        row:2,
        num:4,
        category:"Rare",     
        id: "Sniper's Ring",
        rarity: "Rare",
        description: 
        [
            "+15 ACC if in position 4",  
            "+4% CRIT if in position 4",
            "-2 SPD", 
        ],
    },

    {   
        row:2,
        num:5,
        category:"Rare",     
        id: "Solar Crown",
        rarity: "Rare",
        description: 
        [
            "-20% Stress if Torch above 75",  
        ],
    },

    {   
        row:2,
        num:6,
        category:"Rare",     
        id: "Sun Cloak",
        rarity: "Rare",
        description: 
        [
            "+5% PROT if Torch above 75",
            "+10 DODGE if Torch above 75",
            "+10% Stress",  
        ],
    },


    {   
        row:2,
        num:7,
        category:"Rare",     
        id: "Sun Ring",
        rarity: "Rare",
        description: 
        [
            "+10% DMG if Torch above 75",
            "+5 ACC if Torch above 75",
            "+10% Stress",  
        ],
    },

    {   
        row:2,
        num:8,
        category:"Rare",     
        id: "Unholy Slayer's Ring",
        rarity: "Rare",
        description: 
        [
            "+25% DMG vs Unholy",
            "-8 DODGE",  
        ],
    },


    //Very Rare

    {   
        row:1,
        num:1,
        category:"Very_Rare",     
        id: "Book of Sanity",
        rarity: "Very Rare",
        description: 
        [
            "-20% Stress",  
        ],
    },

    {   
        row:1,
        num:2,
        category:"Very_Rare",     
        id: "Cleansing Crystal",
        rarity: "Very Rare",
        region: "Warrens Exclusive",
        description: 
        [
            "+40% Blight Resist",  
            "+40% Bleed Resist", 
            "+40% Debuff Resist",
            "-15% Blight Skill Chance",
            "-15% Bleed Skill Chance",
            "-15% Debuff Skill Chance",
        ],
    },

    {   
        row:1,
        num:3,
        category:"Very_Rare",
        extrainfo:"Limited to 1 per Estate",     
        id: "Ethereal Crucifix",
        rarity: "Very Rare",
        description: 
        [
            "+25% DMG vs Eldritch",           
            "+30% Bleed Resist",
            "-20% MAX HP", 
        ],
    },

    {   
        row:1,
        num:4,
        category:"Very_Rare",     
        id: "Focus Ring",
        rarity: "Very Rare",
        description: 
        [
            "+10 ACC",  
            "+5% CRIT",
            "-8 DODGE", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Very_Rare",
        extrainfo:"Limited to 1 per Estate",     
        id: "Fortifying Garlic",
        rarity: "Very Rare",
        description: 
        [
            "+33% Blight Resist",  
            "+33% Bleed Resist", 
            "+33% Disease Resist", 
        ],
    },

    {   
        row:1,
        num:6,
        category:"Very_Rare",     
        id: "Hero's Ring",
        rarity: "Very Rare",
        description: 
        [
            "+25% Virtue Chance",  
        ],
    },

    {   
        row:1,
        num:7,
        category:"Very_Rare",     
        id: "Legendary Bracer",
        rarity: "Very Rare",        
        description: 
        [
            "+20% DMG",  
            "-1 SPD" ,
            "+10% Stress",
        ],
    },

    {   
        row:1,
        num:8,
        category:"Very_Rare",     
        id: "Martyr's Seal",
        rarity: "Very Rare",
        description: 
        [
            "+60% DMG at Death's Door",  
            "+14% CRIT at Death's Door",
            "+12% Death Blow Resist",
            "+15% MAX HP", 
        ],
    },

    {   
        row:1,
        num:9,
        category:"Very_Rare",     
        id: "Tough Ring",
        rarity: "Very Rare",
        description: 
        [
            "+10% PROT",  
            "+15% MAX HP",
            "-15% DMG",
            "+10% Stress", 
        ],
    },


    //Ancestral

    {   
        row:1,
        num:1,
        category:"Ancestral",
        extrainfo:"Obtained by Defeating the Shambler or its Darkest Level Counterpart",          
        id: "Ancestor's Bottle",
        rarity: "Ancestral",
        description: 
        [
            "+25% MAX HP",  
            "+50% Food Consumed", 
            "+10% Stress",
        ],
    },

    {   
        row:1,
        num:2,
        category:"Ancestral",
        extrainfo:"Obtained by Defeating the Shambler or its Darkest Level Counterpart",               
        id: "Ancestor's Candle",
        rarity: "Ancestral",
        description: 
        [
            "+15% DMG if Torch above 50",  
            "+2 SPD if Torch above 50", 
            "+5 DODGE if Torch above 50",
            "+10% Stress",
        ],
    },

    {   
        row:1,
        num:3,
        category:"Ancestral",     
        id: "Ancestor's Coat",
        rarity: "Ancestral",
        description: 
        [
            "+15 DODGE",
            "+10% Stress",
        ],
    },

    {   
        row:1,
        num:4,
        category:"Ancestral",     
        id: "Ancestor's Handkerchief",
        rarity: "Ancestral",
        description: 
        [
            "+50% Disease Resist",  
            "+50% Bleed Resist",
            "+10% Stress",
        ],
    },

    {   
        row:1,
        num:5,
        category:"Ancestral",     
        id: "Ancestor's Lantern",
        rarity: "Ancestral",
        description: 
        [
            "-20% Chance Party Surprised",  
            "+20% Chance Monsters Surprised", 
            "+10% Stress",
        ],
    },

    {   
        row:1,
        num:6,
        category:"Ancestral",
        extrainfo:"Obtained by Defeating the Shambler or its Darkest Level Counterpart",               
        id: "Ancestor's Map",
        rarity: "Ancestral",
        description: 
        [
            "+25% Trap Disarm Chance",
            "+25% Scouting Chance",
            "+10% Stress",
        ],
    },

    {   
        row:1,
        num:7,
        category:"Ancestral",     
        id: "Ancestor's Mustache Cream",
        rarity: "Ancestral",        
        description: 
        [
            "+50% Debuff Resist",  
            "+50% Blight Resist" ,
            "+10% Stress",
        ],
    },

    {   
        row:1,
        num:8,
        category:"Ancestral",     
        id: "Ancestor's Musket Ball",
        rarity: "Ancestral",        
        region: "Weald Exclusive",
        description: 
        [
            "+10% DMG Ranged Skills",  
            "+8% CRIT Ranged Skills",
            "+10% Stress",
        ],
    },

    {   
        row:1,
        num:9,
        category:"Ancestral",     
        id: "Ancestor's Pen",
        rarity: "Ancestral",
        description: 
        [
            "+10% DMG Melee Skills",  
            "+8% CRIT Melee Skills",
            "+10% Stress",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Ancestral",     
        id: "Ancestor's Pistol",
        rarity: "Ancestral",        
        description: 
        [
            "+15 ACC Ranged Skills",
            "+3 SPD",
            "+10% Stress",
        ],
    },

    {   
        row:2,
        num:2,
        category:"Ancestral",     
        id: "Ancestor's Portrait",
        rarity: "Ancestral",
        description: 
        [
            "+50% Resolve XP",
            "+10% Stress",
        ],
    },

    {   
        row:2,
        num:3,
        category:"Ancestral",
        extrainfo:"Obtained by Defeating the Shambler or its Darkest Level Counterpart",               
        id: "Ancestor's Scroll",
        rarity: "Ancestral",
        description: 
        [
            "+25% Healing Skills",  
            "+25% Stress Skills",  
            "+10% Stress",
        ],
    },

    {   
        row:2,
        num:4,
        category:"Ancestral",     
        id: "Ancestor's Signet Ring",
        rarity: "Ancestral",
        description: 
        [
            "+10 ACC",  
            "+10% PROT",
            "+10% Stress",
        ],
    },

    {   
        row:2,
        num:5,
        category:"Ancestral",
        extrainfo:"Obtained by Defeating the Shambler or its Darkest Level Counterpart",               
        id: "Ancestor's Tentacle Idol",
        rarity: "Ancestral",
        description: 
        [
            "+20% Virtue Chance",
            "+8% Death Blow Resist",  
        ],
    },

    {   
        row:3,
        num:1,
        category:"Ancestral",
        extrainfo:"Cannot be lost",               
        id: "Talisman of the Flame",
        rarity: "Darkest Dungeon",
        description: 
        [
            "Revelation: -100% Stress",
            "Negates only 80% Stress due to Stress Reducing Buffs being capped at 80%",
            "Revelation: -100% DMG Taken",  
        ],
    },


    
    //Trophy

    {   
        row:1,
        num:1,
        category:"Trophy",     
        id: "Necromancer's Collar",
        rarity: "Trophy",
        description: 
        [
            "+20% DMG vs Unholy",  
            "+8% CRIT vs Unholy",  
        ],
    },

    {   
        row:1,
        num:2,
        category:"Trophy",     
        id: "Prophet's Eye",
        rarity: "Trophy",
        description: 
        [
            "+15 ACC if in position 4",  
            "+3 SPD if in position 4", 
            "-15% Stress if in position 4" 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Trophy",     
        id: "Hag's Ladle",
        rarity: "Trophy",
        description: 
        [
            "+30% Blight Skill Chance",
            "+40% Blight Resist",
            "+40% Disease Resist",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Trophy",     
        id: "Fuseman's Matchstick",
        rarity: "Trophy",
        description: 
        [
            "+2 SPD",  
            "+10% DMG Ranged Skills",
            "+6% CRIT Ranged Skills", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Trophy",     
        id: "Wilbur's Flag",
        rarity: "Trophy",
        description: 
        [
            "+50% Stun Resist",  
            "+10 DODGE", 
        ],
    },

    {   
        row:1,
        num:6,
        category:"Trophy",     
        id: "Flesh's Heart",
        rarity: "Trophy",
        description: 
        [
            "+50% Bleed Resist",
            "+15% MAX HP",  
        ],
    },

    {   
        row:1,
        num:7,
        category:"Trophy",     
        id: "Siren's Conch",
        rarity: "Trophy",        
        description: 
        [
            "+50% Debuff Resist",  
            "-20% Stress" ,
        ],
    },

    {   
        row:1,
        num:8,
        category:"Trophy",     
        id: "Crew's Bell",
        rarity: "Trophy",
        description: 
        [
            "+50% Move Resist",  
            "+20% Healing Received", 
        ],
    },

    {   
        row:1,
        num:9,
        category:"Trophy",     
        id: "Vvulf's Tassle",
        rarity: "Trophy",
        description: 
        [
            "+20% DMG vs Branded",  
            "+10 ACC vs Branded",
            "+5% CRIT vs Size 2 or Above", 
        ],
    },

    //Enemy Specific

    {   
        row:1,
        num:1,
        category:"Enemy_Specific",
        extrainfo:"Obtained by Defeating the Collector(25%) <br> or from Secret Rooms <br> (3 rolls with 25% chance each)",                    
        id: "Barristan's Head",
        rarity: "Very Rare",
        description: 
        [
            "+25% PROT",  
            "+20% Stress" 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Enemy_Specific",
        extrainfo:"Obtained by Defeating the Collector(25%) <br> or from Secret Rooms <br> (3 rolls with 25% chance each)",                    
        id: "Dismas' Head",
        rarity: "Very Rare",
        description: 
        [
            "+25% DMG",  
            "-10% MAX HP", 
            "+20% Stress" 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Enemy_Specific",
        extrainfo:"Obtained by Defeating the Collector(25%) <br> or from Secret Rooms <br> (3 rolls with 25% chance each)",                    
        id: "Junia's Head",
        rarity: "Very Rare",
        description: 
        [
            "+30% Healing Skills",  
            "+20% Stress" 
        ],
    },

    {   
        row:1,
        num:6,
        category:"Enemy_Specific",
        extrainfo:"Obtained by killing a Madman enemy <br> (about 4% Chance)",                    
        id: "Aria Box",
        rarity: "Very Rare",
        description: 
        [
            "-25% Stress",  
        ],
    },

    {   
        row:1,
        num:7,
        category:"Enemy_Specific",
        extrainfo:"Obtained by killing a Madman enemy <br>(about 4% Chance)",                    
        id: "Crescendo Box",
        rarity: "Very Rare",
        description: 
        [
            "+2 SPD",  
            "+15% DMG", 
            "+10% Stress" 
        ],
    },

    {   
        row:1,
        num:8,
        category:"Enemy_Specific",
        extrainfo:"Obtained by killing a Madman enemy <br> (about 4% Chance)",                    
        id: "Overture Box",
        rarity: "Very Rare",
        description: 
        [
            "+15% MAX HP",  
            "+8 DODGE", 
            "-2 ACC" 
        ],
    },

    {   
        row:2,
        num:1,
        category:"Enemy_Specific",
        extrainfo:"Obtained by killing a <span class = 'champion'>Champion</span> Level Bone Courtier enemy <br> (about 4.5% Chance)",                    
        id: "Tempting Goblet",
        rarity: "Very Rare",
        description: 
        [
            "+20% MAX HP",  
            "+3 SPD", 
            "+8 DODGE",
            "+25% Stress",
            "-10% Virtue Chance", 
        ],
    },

    
    {   
        row:3,
        num:1,
        category:"Enemy_Specific",
        extrainfo: 'Obtained during the "Shrieker\'s Prize" <br> Town Event',
        id: "Callous Talon",
        rarity: "Shrieker",
        description: 
        [
            "+7% CRIT",  
            "+33% Disease Resist if Torch below 75", 
            "+33% Bleed Skill Chance if Torch below 50",
            "+15% Stress", 
        ],
    },

    {   
        row:3,
        num:2,
        category:"Enemy_Specific",
        extrainfo: 'Obtained during the "Shrieker\'s Prize" <br> Town Event',
        id: "Distended Crowseye",
        rarity: "Shrieker",
        description: 
        [
            "+10 ACC",  
            "++33% Disease Resist if Torch below 75", 
            "+15% Scouting Chance if Torch below 50",
            "+15% Stress", 
        ],
    },

    {   
        row:3,
        num:3,
        category:"Enemy_Specific",
        extrainfo: 'Obtained during the "Shrieker\'s Prize" <br> Town Event',
        id: "Molted Tailfeather",
        rarity: "Shrieker",
        description: 
        [
            "+4 SPD",  
            "+33% Disease Resist if Torch below 75", 
            "+33% Stun Resist if Torch below 50",
            "+15% Stress", 
        ],
    },

    {   
        row:3,
        num:4,
        category:"Enemy_Specific",
        extrainfo: 'Obtained during the "Shrieker\'s Prize" <br> Town Event',
        id: "Molted Wingfeather",
        rarity: "Shrieker",
        description: 
        [
            "+10 DODGE",  
            "+33% Disease Resist if Torch below 75", 
            "+33% Move Resist if Torch below 50",
            "+15% Stress", 
        ],
    },

    //Crimson Court Shared

    {   
        row:1,
        num:1,
        category:"Crimson_Court",
        extrainfo:"Limited to 1 per Estate",          
        id: "Ancestor's Vintage",
        rarity: "Very Rare",
        description: 
        [
            "Delayed Crimson Curse Craving",
            "(By 69 Turns/Tiles)",  
        ],
    },

    {   
        row:1,
        num:2,
        category:"Crimson_Court",
        extrainfo:"Limited to 1 per Estate",      
        id: "Coven Signet",
        rarity: "Very Rare",
        description: 
        [
            "-25% Stress if has Crimson Curse",  
        ],
    },

    {   
        row:1,
        num:3,
        category:"Crimson_Court",
        extrainfo:"Limited to 1 per Estate",      
        id: "Dazzling Mirror",
        rarity: "Very Rare",
        description: 
        [
            "+4 SPD if Bloodsuckers are Present",
            "+20% Stun Skill Chance vs Bloodsucker",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Crimson_Court",
        extrainfo:"Limited to 1 per Estate",      
        id: "Mantra of Fasting",
        rarity: "Very Rare",
        description: 
        [
            "+40% MAX HP if Crimson Curse - Wasting",  
            "++7 SPD if Crimson Curse - Wasting",
        ],
    },

    {   
        row:1,
        num:5,
        category:"Crimson_Court",
        extrainfo:"Limited to 1 per Estate",      
        id: "Mercurial Salve",
        rarity: "Very Rare",
        description: 
        [
            "+25% DMG vs Bloodsuckers",  
        ],
    },

    {   
        row:1,
        num:6,
        category:"Crimson_Court",
        extrainfo:"Limited to 1 per Estate",      
        id: "Pagan Talisman",
        rarity: "Very Rare",
        description: 
        [
            "+25% DMG vs Fanatic",
            "-10% Stress",  
        ],
    },

    {   
        row:1,
        num:7,
        category:"Crimson_Court",
        extrainfo:"Limited to 2 per Estate",     
        id: "Rat Carcass",
        rarity: "Very Rare",                
        description: 
        [
            "Immune to death by Crimson Curse",
            "Works on Heroes in the Hamlet",  
        ],
    },

    {   
        row:1,
        num:8,
        category:"Crimson_Court",
        extrainfo:"Limited to 1 per Estate",      
        id: "Sanguine Snuff",
        rarity: "Very Rare",
        description: 
        [
            "+8% CRIT if Crimson Curse - Bloodlust",  
            "+15 DODGE if Crimson Curse - Bloodlust", 
        ],
    },

    {   
        row:1,
        num:9,
        category:"Crimson_Court",
        extrainfo:"Limited to 1 per Estate",      
        id: "Sculptor's Tools",
        rarity: "Very Rare",
        description: 
        [
            "+40% DMG vs Stonework",  
        ],
    },

    {   
        row:2,
        num:1,
        category:"Crimson_Court",
        id: "Baron's Lash",
        rarity: "Trophy",
        description: 
        [
            "+75% Debuff Resist if has Crimson Curse",
            "+4 SPD if has Crimson Curse",
            "-10% Stun Resist if has Crimson Curse",  
        ],
    },

    {   
        row:2,
        num:2,
        category:"Crimson_Court",
        id: "Viscount's Spices",
        rarity: "Trophy",
        description: 
        [
            "+5% CRIT if has Crimson Curse",
            "+100% Healing when Eating if has",
            "Crimson Curse",
            "+100% Food Consumed if has Crimson Curse",  
        ],
    },

    {   
        row:2,
        num:3,
        category:"Crimson_Court",
        id: "Countess' Fan",
        rarity: "Trophy",
        description: 
        [
            "+50% Healing Received if has Crimson Curse",
            "-25% Bleed Resist if has Crimson Curse",  
        ],
    },

    //Color of Madness Shared

    
    {   
        row:1,
        num:1,
        category:"Color_Of_Madness",
        extrainfo:"Costs 25 <span class = 'crystalline'>Shards</span>",     
        id: "Lens of the Comet",
        rarity: "Crystalline",
        description: 
        [
            "Ignores Stealth",  
            "-20% Virtue Chance", 
            "+5% CRIT if Shard Dust in inventory" 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Color_Of_Madness", 
        extrainfo:"Costs 65 <span class = 'crystalline'>Shards</span>",         
        id: "Crystal Pendant",
        rarity: "Crystalline",
        description: 
        [
            "+15% Shards Given",  
            "+15% Stress", 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Color_Of_Madness",
        extrainfo:"Costs 100 <span class = 'crystalline'>Shards</span>",          
        id: "Cluster Pendant",
        rarity: "Crystalline",
        description: 
        [
            "+25% Shards Given",
            "+15% Stress",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Color_Of_Madness",
        extrainfo:"Works with DoT Damage <br> Costs 180 <span class = 'crystalline'>Shards</span>",                                       
        id: "Coat Of Many Colors",
        rarity: "Crystalline",
        description: 
        [
            "On Monster Kill:",
            "Empower Me",  
            "-2% Stress (2 Battles)",
            "+2 ACC (2 Battles)", 
            "Hero Killed:",
            "Party:",
            "Stun (120% Base)",
            "Stress +45",
        ],
    },

    {   
        row:1,
        num:5,
        category:"Color_Of_Madness", 
        extrainfo:"Works with DoT Damage <br> Costs 180 <span class = 'crystalline'>Shards</span>",                                  
        id: "Miller's Pipe",
        rarity: "Crystalline",
        description: 
        [
            "On Monster Kill:",  
            " Stress -2",
            "All Monsters: Blight (120% Base) <br> 2 pts/rd for 3 rds", 
            "Hero Killed:",
            "Party: Stress +45",
            "Hinder Party (Until Quest End)",
            "-20% PROT (100% Base)",
            "-2 SPD (100% Base)",
        ],
    },

    {   
        row:1,
        num:6,
        category:"Color_Of_Madness",
        extrainfo:"Obtained from the Mildred in the Farmstead",                              
        id: "Mildred's Locket",
        rarity: "Keepsake",
        description: 
        [
            "Miller: The Reaping: -100% DMG Taken",
            "+40% Blight Resist",
            "+3 SPD",
            "+40% DMG vs Miller",
            "Causes the Miller to use Immortal Beloved if equipped",  
        ],
    },

    {   
        row:2,
        num:1,
        category:"Color_Of_Madness",
        extrainfo:"Obtained by killing a Thing From the Stars <br> (6.7% > Chance)",                         
        id: "Thing's Mesmerizing Eye",
        rarity: "Thing",        
        description: 
        [
            "+4% CRIT if HP above 41%",  
            "+8% CRIT if HP below 40%" ,
        ],
    },

    {   
        row:2,
        num:2,
        category:"Color_Of_Madness",  
        extrainfo:"Obtained by killing a Thing From the Stars <br> (6.7% > Chance)",                            
        id: "Crystalline Fang",
        rarity: "Thing",
        description: 
        [
            "+10% Stun Skill Chance if HP above 40%",  
            "+40% Stun Skill Chance if HP below 41%", 
        ],
    },

    {   
        row:2,
        num:3,
        category:"Color_Of_Madness",
        extrainfo:"Obtained by killing a Thing From the Stars <br> (6.7% > Chance)",                              
        id: "Phase Shifting Hide",
        rarity: "Thing",
        description: 
        [
            "-15% Stress if HP above 41%",  
            "-50% Stress if HP below 40%", 
        ],
    },

    {   
        row:2,
        num:4,
        category:"Color_Of_Madness",
        extrainfo:"Obtained by killing a Thing From the Stars <br> (6.7% > Chance)",                              
        id: "Prismatic Heart Crystal",
        rarity: "Thing",        
        description: 
        [
            "+35% Blight Skill Chance vs Thing",
            "+35% Bleed Skill Chance vs Thing",
            "+12% CRIT vs Thing",  
        ],
    },


    

    //Abomination

    {   
        row:1,
        num:1,
        category:"Abomination",     
        id: "Lock of Patience",
        rarity: "Common",
        restrictions: "Abomination",
        description: 
        [
            "+10% Virtue Chance",  
        ],
    },

    {   
        row:1,
        num:2,
        category:"Abomination",     
        id: "Padlock of Transference",
        rarity: "Uncommon",
        restrictions: "Abomination",
        description: 
        [
            "+20% Stun Skill Chance", 
            "+20% Blight Skill Chance",  
        ],
    },

    {   
        row:1,
        num:3,
        category:"Abomination",     
        id: "Protective Padlock",
        rarity: "Uncommon",
        restrictions: "Abomination",
        description: 
        [
            "+15% PROT", 
            "-1 SPD", 
        ],
    },

    {   
        row:1,
        num:4,
        category:"Abomination",     
        id: "Lock of Fury",
        rarity: "Rare",
        restrictions: "Abomination",
        description: 
        [
            "+10% DMG",              
            "+3 SPD", 
            "-10% MAX HP",

        ],
    },

    {   
        row:1,
        num:5,
        category:"Abomination",     
        id: "Restraining Padlock",
        rarity: "Very Rare",
        restrictions: "Abomination",
        description: 
        [
            "Transform: -40% Stress Inflicted on Party",  
            "-40% Self Stress While Transformed", 
        ],
    },

    {   
        row:2,
        num:1,
        category:"Abomination",     
        id: "Shameful Shroud",
        rarity: "Crimson Court",
        restrictions: "Abomination",        
        description: 
        [
            "-15% Stress",
            "+10 DODGE",  
        ],
        ccsettxt: "I must hide from the world.",
        ccsetdescription: ["+20% DMG if in position 1"]
    },

    {   
        row:2,
        num:2,
        category:"Abomination",     
        id: "Osmond Chains",
        rarity: "Crimson Court",        
        restrictions: "Abomination",        
        description: 
        [
            "+20% DMG Ranged Skills",  
            "+8% CRIT Ranged Skills" ,
        ],
        ccsettxt: "I must hide from the world.",
        ccsetdescription: ["+20% DMG if in position 1"]
    },

    {   
        row:3,
        num:1,
        category:"Abomination",
        extrainfo:"Costs 30 <span class ='crystalline'>Shards</span>",     
        id: "Broken Key",
        rarity: "Crystalline",
        restrictions: "Abomination",        
        description: 
        [
            "+15 ACC",  
            "+35% Stun Skill Chance",
            "+10% Stress", 
        ],
    },

     //Antiquarian

    {   
        row:1,
        num:1,
        category:"Antiquarian",     
        id: "Bag of Marbles",
        rarity: "Common",
        restrictions: "Antiquarian",
        description: 
        [
            "+10 DODGE",  
        ],
    },

    {   
        row:1,
        num:2,
        category:"Antiquarian",     
        id: "Bloodcourse Medallion",
        rarity: "Uncommon",
        restrictions: "Antiquarian",
        description: 
        [
            "+33% Healing Received",  
        ],
    },

    {   
        row:1,
        num:3,
        category:"Antiquarian",     
        id: "Carapace Idol",
        rarity: "Uncommon",
        restrictions: "Antiquarian",
        description: 
        [
            "+25% PROT",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Antiquarian",     
        id: "Fleet Florin",
        rarity: "Rare",
        restrictions: "Antiquarian",
        description: 
        [
            "+4 SPD",  
            "+20% Debuff Skill Chance",
        ],
    },

    {   
        row:1,
        num:5,
        category:"Antiquarian",     
        id: "Candle of Life",
        rarity: "Very Rare",
        restrictions: "Antiquarian",
        description: 
        [
            "+50% Healing Skills",  
            "+15% MAX HP", 
        ],
    },

    {   
        row:2,
        num:1,
        category:"Antiquarian",     
        id: "The Master's Essence",
        rarity: "Crimson Court",
        restrictions: "Antiquarian",        
        description: 
        [
            "+50% Healing Skills",
            "+35% Blight Skill Chance",
            "+35% Debuff Skill Chance",  
        ],
        ccsettxt: "It will be mine - whatever the cost!",
        ccsetdescription: ["+4 SPD", "+10 DODGE"]
    },

    {   
        row:2,
        num:2,
        category:"Antiquarian",     
        id: "Two of Three",
        rarity: "Crimson Court",        
        restrictions: "Antiquarian",        
        description: 
        [
            "+50% DMG vs Poisoned",  
            "+8% CRIT vs Poisoned" ,
        ],
        ccsettxt: "It will be mine - whatever the cost!",
        ccsetdescription: ["+4 SPD", "+10 DODGE"]
    },

    {   
        row:3,
        num:1,
        category:"Antiquarian",
        extrainfo:"Costs 45 <span class ='crystalline'>Shards</span>",          
        id: "Smoking Skull",
        rarity: "Crystalline",
        restrictions: "Antiquarian",        
        description: 
        [
            "+35 DODGE if Shard Dust in inventory",  
            "-15 ACC",
            "-15% Blight Resist", 
        ],
    },

    //Arbalest

    {   
        row:1,
        num:1,
        category:"Arbalest",     
        id: "Sturdy Greaves",
        rarity: "Common",
        restrictions: "Arbalest",
        description: 
        [
            "+30% Move Resist",  
            "+30% Move Skill Chance", 
            "-1 SPD" 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Arbalest",     
        id: "Vengeful Greaves",
        rarity: "Common",
        restrictions: "Arbalest",
        description: 
        [
            "+3% CRIT",  
        ],
    },

    {   
        row:1,
        num:3,
        category:"Arbalest",     
        id: "Medic's Greaves",
        rarity: "Uncommon",
        restrictions: "Arbalest",
        description: 
        [
            "+33% Healing Skills",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Arbalest",     
        id: "Bull's Eye Bandana",
        rarity: "Rare",
        restrictions: "Arbalest",
        description: 
        [
            "+8 ACC",  
            "+5% CRIT",
            "-4 DODGE", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Arbalest",     
        id: "Wrathful Bandana",
        rarity: "Very Rare",
        restrictions: "Arbalest",
        region: "Warrens Exclusive",
        description: 
        [
            "+25% DMG if in position 4",  
            "+30% Debuff Skill Chance", 
            "-50% Healing Skills",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Arbalest",     
        id: "Childhood Treasure",
        rarity: "Crimson Court",
        restrictions: "Arbalest",        
        description: 
        [
            "+30% Healing Skills",
            "+20% Healing Skills while Camping",
            "-15% Stress",  
        ],
        ccsettxt: "I remember my father's kindly eyes.",
        ccsetdescription: ["+25% PROT"]
    },

    {   
        row:2,
        num:2,
        category:"Arbalest",     
        id: "Bedtime Story",
        rarity: "Crimson Court",        
        restrictions: "Arbalest",        
        description: 
        [
            "+15 ACC vs Branded",  
            "+8% CRIT vs Branded" ,
            "+35% Debuff Skill Chance",
            "+35% Move Skill Chance",
        ],
        ccsettxt: "I remember my father's kindly eyes.",
        ccsetdescription: ["+25% PROT"]
    },

    {   
        row:3,
        num:1,
        category:"Arbalest",
        extrainfo:"Costs 170 <span class ='crystalline'>Shards</span>",          
        id: "Keening Bolts",
        rarity: "Crystalline",
        restrictions: "Arbalest",        
        description: 
        [
            "+20% DMG",  
            "+7% CRIT Ranged Skills",
            "On Attack:", 
            "Self: Stress +3 (25% chance)", 
        ],
    },

       //Musketeer

       {   
        row:1,
        num:1,
        category:"Musketeer",     
        id: "Sturdy Boots",
        rarity: "Common",
        restrictions: "Musketeer",
        description: 
        [
            "+30% Move Resist",  
            "+30% Move Skill Chance", 
            "-1 SPD" 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Musketeer",     
        id: "Vengeful Boots",
        rarity: "Common",
        restrictions: "Musketeer",
        description: 
        [
            "+3% CRIT",  
        ],
    },

    {   
        row:1,
        num:3,
        category:"Musketeer",     
        id: "Medic's Boots",
        rarity: "Uncommon",
        restrictions: "Musketeer",
        description: 
        [
            "+33% Healing Skills",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Musketeer",     
        id: "Bull's Eye Hat",
        rarity: "Rare",
        restrictions: "Musketeer",
        description: 
        [
            "+8 ACC",  
            "+5% CRIT",
            "-4 DODGE", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Musketeer",     
        id: "Wrathful Hat",
        rarity: "Very Rare",
        restrictions: "Musketeer",
        region: "Warrens Exclusive",
        description: 
        [
            "+25% DMG if in position 4",  
            "+30% Debuff Skill Chance", 
            "-50% Healing Skills",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Musketeer",     
        id: "Second Place Trophy",
        rarity: "Crimson Court",
        restrictions: "Musketeer",        
        description: 
        [
            "+30% Healing Skills",
            "+20% Healing Skills while Camping",
            "-15% Stress",  
        ],
        ccsettxt: "I...I missed!? But how...?",
        ccsetdescription: ["+25% PROT"]
    },

    {   
        row:2,
        num:2,
        category:"Musketeer",     
        id: "Silver Musket Ball",
        rarity: "Crimson Court",        
        restrictions: "Musketeer",        
        description: 
        [
            "+15 ACC vs Branded",  
            "+8% CRIT vs Branded" ,
            "+35% Debuff Skill Chance",
            "+35% Move Skill Chance"
        ],
        ccsettxt: "I...I missed!? But how...?",
        ccsetdescription: ["+25% PROT"]
    },

    {   
        row:3,
        num:1,
        category:"Musketeer",
        extrainfo:"Costs 150 <span class ='crystalline'>Shards</span>",          
        id: "Icosahedric Musket Balls",
        rarity: "Crystalline",
        restrictions: "Musketeer",        
        description: 
        [
            "+20% DMG",  
            "+20% Random Target Chance", 
        ],
    },


    
    //Bounty Hunter

    {   
        row:1,
        num:1,
        category:"Bounty_Hunter",     
        id: "Agility Talon",
        rarity: "Common",
        restrictions: "Bounty Hunter",
        description: 
        [
            "+1 SPD",  
            "+4 DODGE", 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Bounty_Hunter",     
        id: "Unmovable Helmet",
        rarity: "Common",
        restrictions: "Bounty Hunter",
        description: 
        [
            "+30% Move Resist",  
            "+20% Move Skill Chance", 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Bounty_Hunter",     
        id: "Camper's Helmet",
        rarity: "Uncommon",
        restrictions: "Bounty Hunter",
        description: 
        [
            "+20% Stress Heal Received while Camping",
            "+10% Scouting Chance",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Bounty_Hunter",     
        id: "Hunter's Talons",
        rarity: "Rare",
        restrictions: "Bounty Hunter",
        region: "Warrens Exclusive",
        description: 
        [
            "+6% CRIT",  
            "+10% ACC",
            "+50% Food Consumed", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Bounty_Hunter",     
        id: "Wounding Helmet",
        rarity: "Very Rare",
        restrictions: "Bounty Hunter",
        description: 
        [
            "+25% DMG Melee Skills",  
            "-25% Move Skill Chance", 
            "-20% Stun Skill Chance",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Bounty_Hunter",     
        id: "Crime Lords' Molars",
        rarity: "Crimson Court",
        restrictions: "Bounty Hunter",        
        description: 
        [
            "+20% DMG vs Branded",
            "+20% DMG vs Dazed",
            "+20% DMG vs Lacerated",
            "-10 DODGE",  
        ],
        ccsettxt: "They. Will. Pay.",
        ccsetdescription: [
            "+5% CRIT vs Branded", 
            "+5% CRIT vs Dazed",
            "+5% CRIT vs Lacerated",
        ]
    },

    {   
        row:2,
        num:2,
        category:"Bounty_Hunter",     
        id: "Vengeful Kill List",
        rarity: "Crimson Court",        
        restrictions: "Bounty Hunter",        
        description: 
        [
            "+50% Move Skill Chance",  
            "+35% Bleed Skill Chance" ,
            "+15 ACC Ranged Skills",
        ],
        ccsettxt: "They. Will. Pay.",
        ccsetdescription: [
            "+5% CRIT vs Branded", 
            "+5% CRIT vs Dazed",
            "+5% CRIT vs Lacerated",
        ]
    },

    {   
        row:3,
        num:1,
        category:"Bounty_Hunter",
        extrainfo:"Costs 75 <span class ='crystalline'>Shards</span>",          
        id: "Mask Of The Timeless",
        rarity: "Crystalline",
        restrictions: "Bounty Hunter",        
        description: 
        [
            "+2 SPD",  
            "+15 DODGE",
            "+5% Stress", 
        ],
    },

    
    //Crusader

    {   
        row:1,
        num:1,
        category:"Crusader",     
        id: "Defender's Seal",
        rarity: "Common",
        restrictions: "Crusader",
        description: 
        [
            "+5% PROT",  
            "-3% CRIT", 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Crusader",     
        id: "Knight's Crest",
        rarity: "Common",
        restrictions: "Crusader",
        description: 
        [
            "+10% MAX HP",  
        ],
    },

    {   
        row:1,
        num:3,
        category:"Crusader",     
        id: "Swordsman's Crest",
        rarity: "Common",
        restrictions: "Crusader",
        description: 
        [
            "+10% DMG Melee Skills",  
            "-50% Healing Skills", 
        ],
    },

    {   
        row:1,
        num:4,
        category:"Crusader",     
        id: "Paralyzer's Crest",
        rarity: "Uncommon",
        restrictions: "Crusader",
        description: 
        [
            "+20% Stun Skill Chance",
            "-2 DODGE",  
        ],
    },

    {   
        row:1,
        num:5,
        category:"Crusader",     
        id: "Commander's Orders",
        rarity: "Rare",
        restrictions: "Crusader",
        description: 
        [
            "+15% Stress Heal Received",  
            "+33% Healing Skills",
            "-10% DMG", 
        ],
    },

    {   
        row:1,
        num:6,
        category:"Crusader",     
        id: "Holy Orders",
        rarity: "Very Rare",
        restrictions: "Crusader",
        description: 
        [
            "+15% Virtue Chance",  
            "-20% Stress", 
            "+12% Death Blow Resist",
            "-20% Blight Resist",
            "-20% Bleed Resist",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Crusader",     
        id: "Glittering Spaulders",
        rarity: "Crimson Court",
        restrictions: "Crusader",        
        description: 
        [
            "+15% PROT", 
            "+35% Move Resist",
            "-15% Stress",
            "-2 SPD", 
        ],
        ccsettxt: "I will forget them. Regret is sin.",
        ccsetdescription: ["+20% MAX HP"]
    },

    {   
        row:2,
        num:2,
        category:"Crusader",     
        id: "Signed Conscription",
        rarity: "Crimson Court",        
        restrictions: "Crusader",        
        description: 
        [
            "+20% Healing Skills",  
            "+20% Stress Skills" ,
        ],
        ccsettxt: "I will forget them. Regret is sin.",
        ccsetdescription: ["+20% MAX HP"]
    },

    {   
        row:3,
        num:1,
        category:"Crusader", 
        extrainfo:"Costs 200 <span class ='crystalline'>Shards</span>",         
        id: "Non-Euclidean Hilt",
        rarity: "Crystalline",
        restrictions: "Crusader",        
        description: 
        [
            "+15% MAX HP",  
            "+5% Random Target Chance",
            "+25% Stun Skill Chance if Holy Water in inventory",
            "On Attack Hit: Blight (120% Base)", 
            "2 pts/rd for 2 rds", 
        ],
    },

    
    //Flagellant

    {   
        row:1,
        num:1,
        category:"Flagellant",     
        id: "Heartburst Hood",
        rarity: "Common",
        restrictions: "Flagellant",
        description: 
        [
            "+4 SPD if HP below 40%",  
        ],
    },

    {   
        row:1,
        num:2,
        category:"Flagellant",     
        id: "Resurrection's Collar",
        rarity: "Uncommon",
        restrictions: "Flagellant",
        description: 
        [
            "+33% Healing Skills",  
            "-15% Bleed Skill Chance", 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Flagellant",     
        id: "Punishment's Hood",
        rarity: "Uncommon",
        restrictions: "Flagellant",
        description: 
        [
            "+20% Bleed Skill Chance",
            "-20% Healing Skills",
            "+15% DMG if HP below 40%",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Flagellant",     
        id: "Suffering's Collar",
        rarity: "Rare",
        restrictions: "Flagellant",
        description: 
        [
            "+20% Bleed Resist if HP below 40%",  
            "+20% Blight Resist if HP below 40%",
            "+10% MAX HP", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Flagellant",     
        id: "Eternity's Collar",
        rarity: "Very Rare",
        restrictions: "Flagellant",
        description: 
        [
            "+10% Death Blow Resist",  
            "+20 DODGE at Death's Door", 
            "+20% DMG if Stress above 85",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Flagellant",     
        id: "Chipped Tooth",
        rarity: "Crimson Court",
        restrictions: "Flagellant",        
        description: 
        [
            "+20% MAX HP",
            "+35% Move Resist",  
        ],
        ccsettxt: "We're all falling apart...",
        ccsetdescription: ["+10% Death Blow Resist"]
    },

    {   
        row:2,
        num:2,
        category:"Flagellant",     
        id: "Shard of Glass",
        rarity: "Crimson Court",        
        restrictions: "Flagellant",        
        description: 
        [
            "+35% Bleed Skill Chance",  
            "-20% Bleed Resist" ,
        ],
        ccsettxt: "We're all falling apart...",
        ccsetdescription: ["+10% Death Blow Resist"]
    },

    {   
        row:3,
        num:1,
        category:"Flagellant",
        extrainfo:"Costs 65 <span class ='crystalline'>Shards</span>",          
        id: "Acidic Husk Ichor",
        rarity: "Crystalline",
        restrictions: "Flagellant",        
        description: 
        [
            "-25% MAX HP",  
            "+30% DMG",
            "+30% Bleed Skill Chance vs Husk",
            "+25% Healing Received if HP below 20%", 
        ],
    },


    //Grave Robber

    {   
        row:1,
        num:1,
        category:"Grave_Robber",     
        id: "Quickening Satchel",
        rarity: "Common",
        restrictions: "Grave Robber",
        description: 
        [
            "+2 SPD",  
        ],
    },

    {   
        row:1,
        num:2,
        category:"Grave_Robber",     
        id: "Sickening Satchel",
        rarity: "Common",
        restrictions: "Grave Robber",
        description: 
        [
            "+20% DMG vs Blighted",  
        ],
    },

    {   
        row:1,
        num:3,
        category:"Grave_Robber",     
        id: "Blighting Satchel",
        rarity: "Uncommon",
        restrictions: "Grave Robber",
        description: 
        [
            "+25% Blight Skill Chance",
            "+1 SPD",
            "-4 DODGE",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Grave_Robber",     
        id: "Lucky Talisman",
        rarity: "Rare",
        restrictions: "Grave Robber",
        description: 
        [
            "+12 DODGE",  
            "+10 ACC Ranged Skills",
            "+10% Stress", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Grave_Robber",     
        id: "Raider's Talisman",
        rarity: "Very Rare",
        restrictions: "Grave Robber",
        region:"Warrens Exclusive",
        description: 
        [
            "+5% CRIT",  
            "+30% Trap Disarm Chance", 
            "+2 SPD",
            "+15% Scouting Chance",
            "-10% MAX HP",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Grave_Robber",     
        id: "Absinthe",
        rarity: "Crimson Court",
        restrictions: "Grave Robber",        
        description: 
        [
            "+35% Disease Resist",
            "+35% Blight Resist",
            "+35% Blight Skill Chance",
            "-10% MAX HP",  
        ],
        ccsettxt: "Poise makes perfect, darling!",
        ccsetdescription: ["5% CRIT"]
    },

    {   
        row:2,
        num:2,
        category:"Grave_Robber",     
        id: "Sharpened Letter Opener",
        rarity: "Crimson Court",        
        restrictions: "Grave Robber",        
        description: 
        [
            "+25% DMG Melee Skills",  
            "+10 ACC Melee Skills" ,
            "+5 DODGE",
        ],
        ccsettxt: "Poise makes perfect, darling!",
        ccsetdescription: ["5% CRIT"]
    },

    {   
        row:3,
        num:1,
        category:"Grave_Robber",
        extrainfo:"Costs 80 <span class ='crystalline'>Shards</span>",          
        id: "Topshelf Tonic",
        rarity: "Crystalline",
        restrictions: "Grave Robber",        
        description: 
        [
            "+15 DODGE if Medicinal Herbs in inventory",  
            "+3 SPD",
            "-20% Blight Resist",
            "+50% Blight Duration", 
        ],
    },


    //Hellion

    {   
        row:1,
        num:1,
        category:"Hellion",     
        id: "Bleeding Pendant",
        rarity: "Common",
        restrictions: "Hellion",
        description: 
        [
            "+15% Bleed Skill Chance",  
        ],
    },

    {   
        row:1,
        num:2,
        category:"Hellion",     
        id: "Selfish Pendant",
        rarity: "Common",
        restrictions: "Hellion",
        region:"Weald Exclusive",
        description: 
        [
            "-15% Stress",  
        ],
    },

    {   
        row:1,
        num:3,
        category:"Hellion",     
        id: "Double-Edged Pendant",
        rarity: "Uncommon",
        restrictions: "Hellion",
        description: 
        [
            "+15% MAX HP",
            "-20% Stun Resist",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Hellion",     
        id: "Heaven's Hairpin",
        rarity: "Rare",
        restrictions: "Hellion",        
        region:"Cove Exclusive",
        description: 
        [
            "-25% Stress if Torch above 75",  
            "+10 ACC if Torch above 75",
        ],
    },

    {   
        row:1,
        num:5,
        category:"Hellion",     
        id: "Hell's Hairpin",
        rarity: "Very Rare",
        restrictions: "Hellion",
        description: 
        [
            "+10% CRIT if Torch below 25",  
            "+15 ACC if Torch below 25", 
            "-10% Debuff Resist",
            "-10% Bleed Resist",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Hellion",     
        id: "Lioness Warpaint",
        rarity: "Crimson Court",
        restrictions: "Hellion",        
        description: 
        [
            "+20% DMG if HP below 75%",
            "+20% DMG if HP below 50%",
            "+20% DMG if HP below 25%",
            "+10% Stress",  
        ],
        ccsettxt: "Outcast. Alone. Shamed.",
        ccsetdescription: ["+7 ACC", "+7 DODGE"]
    },

    {   
        row:2,
        num:2,
        category:"Hellion",     
        id: "Mark of the Outcast",
        rarity: "Crimson Court",        
        restrictions: "Hellion",        
        description: 
        [
            "+2 SPD",  
            "+35% Bleed Skill Chance" ,
            "+15% Death Blow Resist",
            "-15% Healing Received",
        ],
        ccsettxt: "Outcast. Alone. Shamed.",
        ccsetdescription: ["+7 ACC", "+7 DODGE"]
    },

    {   
        row:3,
        num:1,
        category:"Hellion",
        extrainfo:"Costs 120 <span class ='crystalline'>Shards</span>",          
        id: "Thirsting Blade",
        rarity: "Crystalline",
        restrictions: "Hellion",        
        description: 
        [
            "+15 ACC",  
            "-20% Bleed Resist",
            "+2 SPD",
            "+8% CRIT vs Lacerated",
            "On Attack Miss: ", 
            "Self: Lose 5 HP",
        ],
    },

  

    //Highwayman

    {   
        row:1,
        num:1,
        category:"Highwayman",     
        id: "Drifter's Buckle",
        rarity: "Common",
        restrictions: "Highwayman",
        description: 
        [
            "+10% Trap Disarm Chance",  
            "+4 DODGE", 
            "-5% Stress Heal Receivedt" 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Highwayman",     
        id: "Flashfire Gunpowder",
        rarity: "Common",
        restrictions: "Highwayman",
        description: 
        [
            "+10% DMG Ranged Skillse",  
            "-20% Stun Resist", 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Highwayman",     
        id: "Stalwart Buckle",
        rarity: "Common",
        restrictions: "Highwayman",
        description: 
        [
            "+5% CRIT",  
            "+5% Stress", 
            "-3% Virtue Chance" 
        ],
    },

    {   
        row:1,
        num:4,
        category:"Highwayman",     
        id: "Dodgy Sheath",
        rarity: "Uncommon",
        restrictions: "Highwayman",
        description: 
        [
            "+8 DODGE", 
            "+1 SPD",
            "-10 ACC Ranged Skills", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Highwayman",     
        id: "Sharpening Sheath",
        rarity: "Rare",
        restrictions: "Highwayman",
        description: 
        [
            "+7% CRIT Melee Skills",  
            "+40% Bleed Skill Chance",
            "-1 SPD", 
        ],
    },

    {   
        row:1,
        num:6,
        category:"Highwayman",     
        id: "Gunslinger's Buckle",
        rarity: "Very Rare",
        restrictions: "Highwayman",
        region:"Ruins Exclusive",
        description: 
        [
            "+20% DMG Ranged Skills",  
            "+15 ACC Ranged Skills", 
            "-10% DMG Melee Skills",
            "-5% CRIT Melee Skills",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Highwayman",     
        id: "Bloodied Neckerchief",
        rarity: "Crimson Court",
        restrictions: "Highwayman",        
        description: 
        [
            "+2 SPD",
            "+10 DODGE",  
        ],
        ccsettxt: "A reflex - I didn't mean to...",
        ccsetdescription: ["+45% Virtue Chance"]
    },

    {   
        row:2,
        num:2,
        category:"Highwayman",     
        id: "Shameful Locket",
        rarity: "Crimson Court",        
        restrictions: "Highwayman",        
        description: 
        [
            "+10 ACC",  
            "+5% CRIT" ,
            "+15% Stress",
        ],
        ccsettxt: "A reflex - I didn't mean to...",
        ccsetdescription:["+45% Virtue Chance"]
    },

    {   
        row:3,
        num:1,
        category:"Highwayman",
        extrainfo:"Costs 90 <span class ='crystalline'>Shards</span>",          
        id: "Crystalline Gunpowder",
        rarity: "Crystalline",
        restrictions: "Highwayman",        
        description: 
        [
            "+20% DMG",  
            "+3 SPD",
            "-15% Stun Resist", 
        ],
    },

    
    //Houndmaster

    {   
        row:1,
        num:1,
        category:"Houndmaster",     
        id: "Agility Whistle",
        rarity: "Common",
        restrictions: "Houndmaster",
        description: 
        [
            "+4 DODGE",  
            "+1 SPD", 
            "-20% Debuff Resist" 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Houndmaster",     
        id: "Scouting Whistle",
        rarity: "Common",
        restrictions: "Houndmaster",
        description: 
        [
            "+20% Scouting Chance if Torch below 51",  
            "+20% Trap Disarm Chance", 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Houndmaster",     
        id: "Cudgel Weight",
        rarity: "Uncommon",
        restrictions: "Houndmaster",
        description: 
        [
            "+25% Stun Skill Chance", 
            "-1 SPD", 
        ],
    },

    {   
        row:1,
        num:4,
        category:"Houndmaster",     
        id: "Protective Collar",
        rarity: "Rare",
        restrictions: "Houndmaster",
        description: 
        [
            "+12 DODGE",  
            "+15% DMG",
        ],
    },

    {   
        row:1,
        num:5,
        category:"Houndmaster",     
        id: "Spiked Collar",
        rarity: "Very Rare",
        restrictions: "Houndmaster",
        region:"Warrens Exclusive",
        description: 
        [
            "+20% DMG",  
            "+30% Bleed Skill Chance", 
            "-50% Healing Skills",
            "-20% Healing Received",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Houndmaster",     
        id: "Evidence of Corruption",
        rarity: "Crimson Court",
        restrictions: "Houndmaster",        
        description: 
        [
            "+25% Scouting Chance",
            "-15% Chance Party Surprised",
            "+10% Stress",  
        ],
        ccsettxt: "Even the Chief was in on it.",
        ccsetdescription: ["+25% DMG vs Lacerated", "+5% CRIT vs Lacerated"]
    },

    {   
        row:2,
        num:2,
        category:"Houndmaster",     
        id: "Battered Lawman's Badge",
        rarity: "Crimson Court",        
        restrictions: "Houndmaster",        
        description: 
        [
            "+15 ACC Ranged Skills",  
            "+50% Stress Skills while Camping" ,
            "+25% Healing Skills",
            "-20% Stun Resist",
            "-20% Debuff Resist",
        ],
        ccsettxt: "Even the Chief was in on it.",
        ccsetdescription: ["+25% DMG vs Lacerated", "+5% CRIT vs Lacerated"]
    },

    {   
        row:3,
        num:1,
        category:"Houndmaster",
        extrainfo:"Costs 70 <span class ='crystalline'>Shards</span>",          
        id: "Huskfang Whistle",
        rarity: "Crystalline",
        restrictions: "Houndmaster",        
        description: 
        [
            "+50% Bleed Skill Chance if Dog Treats in inventory",  
            "+40% Stress Skills while Protecting",
            "-10 DODGE",
            "+66% Guard Duration", 
        ],
    },

    
    //Jester

    {   
        row:1,
        num:1,
        category:"Jester",     
        id: "Bloody Dice",
        rarity: "Common",
        restrictions: "Jester",
        description: 
        [
            "+30% Bleed Skill Chance",  
            "-10% Bleed Resist", 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Jester",     
        id: "Lucky Dice",
        rarity: "Common",
        restrictions: "Jester",
        description: 
        [
            "+4 ACC",  
            "+4 DODGE", 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Jester",     
        id: "Critical Dice",
        rarity: "Uncommon",
        restrictions: "Jester",
        description: 
        [
            "+7% CRIT",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Jester",     
        id: "Bright Tambourine",
        rarity: "Rare",
        restrictions: "Jester",
        description: 
        [
            "+20% Stress Skills",  
            "-25% Stress if Torch above 75",
            "+15% Stress if Torch below 51", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Jester",     
        id: "Dark Tambourine",
        rarity: "Very Rare",
        restrictions: "Jester",
        description: 
        [
            "+12% Death Blow Resist",  
            "-25% Stress if Torch below 26", 
            "+10% Virtue Chance if Torch below 26",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Jester",     
        id: "Tyrant's Tasting Cup",
        rarity: "Crimson Court",
        restrictions: "Jester",        
        description: 
        [
            "+33% Stress Skills",
            "+25% Stress",  
        ],
        ccsettxt: "Heh. The last laugh is mine!",
        ccsetdescription: ["+33% Stress Skills while Camping"]
    },

    {   
        row:2,
        num:2,
        category:"Jester",     
        id: "Tyrant's Fingerbone",
        rarity: "Crimson Court",        
        restrictions: "Jester",        
        description: 
        [
            "+3 SPD if in position 1",  
            "+20 DODGE if in position 1" ,
        ],
        ccsettxt: "Heh. The last laugh is mine!",
        ccsetdescription: ["+33% Stress Skills while Camping"]
    },

    {   
        row:3,
        num:1,
        category:"Jester",
        extrainfo:"Costs 60 <span class ='crystalline'>Shards</span>",          
        id: "Dirge For The Devoured",
        rarity: "Crystalline",
        restrictions: "Jester",        
        description: 
        [
            "+25% Stress Skills",  
            "+25% DMG if Laudanum in inventory",
            "+10% Stress", 
        ],
    },

    
    //Leper

    {   
        row:1,
        num:1,
        category:"Leper",     
        id: "Healing Armlet",
        rarity: "Common",
        restrictions: "Leper",
        description: 
        [
            "+20% Healing Received",  
        ],
    },

    {   
        row:1,
        num:2,
        category:"Leper",     
        id: "Redemption Armlet",
        rarity: "Common",
        restrictions: "Leper",
        description: 
        [
            "+15% DMG if in position 1",  
            "-3% Virtue Chance", 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Leper",     
        id: "Fortunate Armlet",
        rarity: "Uncommon",
        restrictions: "Leper",
        description: 
        [
            "+8 ACC",            
            "+3% CRIT", 
            "+10% Stress",   
        ],
    },

    {   
        row:1,
        num:4,
        category:"Leper",     
        id: "Immunity Mask",
        rarity: "Rare",
        restrictions: "Leper",
        description: 
        [
            "+40% Stun Resist",  
            "+30% Blight Resist",
            "+30% Bleed Resist",
            "-10% MAX HP", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Leper",     
        id: "Berserk Mask",
        rarity: "Very Rare",
        restrictions: "Leper",
        description: 
        [
            "+8% CRIT",  
            "+3 SPD", 
            "-10% Virtue Chance",
            "-33% Healing Received",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Leper",     
        id: "Last Will and Testament",
        rarity: "Crimson Court",
        restrictions: "Leper",        
        description: 
        [
            "+15% PROT",
            "+15% MAX HP",
            "-10% Death Blow Resist",  
        ],
        ccsettxt: "The last treasures of a King.",
        ccsetdescription: ["+15 ACC if HP above 60%"]
    },

    {   
        row:2,
        num:2,
        category:"Leper",     
        id: "Tin Flute",
        rarity: "Crimson Court",        
        restrictions: "Leper",        
        description: 
        [
            "-20% Stress",  
            "+33% Stress Skills while Camping" ,
        ],
        ccsettxt: "The last treasures of a King.",
        ccsetdescription: ["+15 ACC if HP above 60%"]
    },

    {   
        row:3,
        num:1,
        category:"Leper",
        extrainfo:"Costs 80 <span class ='crystalline'>Shards</span>",          
        id: "Petrified Amulet",
        rarity: "Crystalline",
        restrictions: "Leper",        
        description: 
        [
            "+10 ACC if Bandage in inventory",  
            "+15% MAX HP",
            "-15% Bleed Resist", 
        ],
    },



    //Man-at-Arns

    {   
        row:1,
        num:1,
        category:"Man-at-Arms",     
        id: "Cleansing Eyepatch",
        rarity: "Common",
        restrictions: "Man-at-Arns",
        region:"Weald Exclusive",
        description: 
        [
            "+30% Blight Resist",  
            "+20% Disease Resist", 
            "-2 DODGE" 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Man-at-Arms",     
        id: "Sly Eyepatch",
        rarity: "Common",
        restrictions: "Man-at-Arns",
        description: 
        [
            "+4 DODGE",  
            "-20% Stun Resist", 
            "-10% Move Resist" 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Man-at-Arms",     
        id: "Longevity Eyepatch",
        rarity: "Uncommon",
        restrictions: "Man-at-Arns",
        description: 
        [
            "+15% MAX HP", 
            "-2 SPD", 
        ],
    },

    {   
        row:1,
        num:4,
        category:"Man-at-Arms",     
        id: "Rampart Shield",
        rarity: "Rare",
        restrictions: "Man-at-Arns",
        description: 
        [
            "+40% Move Skill Chance",  
            "+30% Stun Skill Chance",
            "-15% DMG", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Man-at-Arms",     
        id: "Guardian's Shield",
        rarity: "Very Rare",
        restrictions: "Man-at-Arns",
        description: 
        [
            "+10% PROT if in position 4",  
            "+50% Healing Received if in position 4", 
            "+10 DODGE if in position 4",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Man-at-Arms",     
        id: "Old Unit Standard",
        rarity: "Crimson Court",
        restrictions: "Man-at-Arns",        
        description: 
        [
            "+15% Stun Skill Chance",
            "+20% Debuff Skill Chance",
            "+15% Death Blow Resist",
            "+10% Stress",  
        ],
        ccsettxt: "Glory days? Hmph.",
        ccsetdescription: ["Riposte: +25% DMG", "Riposte: +10 ACC"]
    },

    {   
        row:2,
        num:2,
        category:"Man-at-Arms",     
        id: "Toy Soldier",
        rarity: "Crimson Court",        
        restrictions: "Man-at-Arns",        
        description: 
        [
            "+10% PROT",  
            "+5% CRIT" ,
        ],
        ccsettxt: "Glory days? Hmph.",
        ccsetdescription: ["Riposte: +25% DMG", "Riposte: +10 ACC"]
    },

    {   
        row:3,
        num:1,
        category:"Man-at-Arms",
        extrainfo:"Costs 75 <span class ='crystalline'>Shards</span>",          
        id: "Mirror Shield",
        rarity: "Crystalline",
        restrictions: "Man-at-Arns",        
        description: 
        [
            "+10 DODGE",  
            "30% Damage Reflection",
            "+20% Stun Resist", 
        ],
    },


    
    //Occultist

    {   
        row:1,
        num:1,
        category:"Occultist",     
        id: "Eldritch Killing Incense",
        rarity: "Common",
        restrictions: "Occultist",
        description: 
        [
            "+6% CRIT vs Eldritch",  
            "+15% DMG vs Eldritch", 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Occultist",     
        id: "Evasion Incense",
        rarity: "Common",
        restrictions: "Occultist",
        description: 
        [
            "+8 DODGE",  
            "-1 SPD", 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Occultist",     
        id: "Cursed Incense",
        rarity: "Uncommon",
        restrictions: "Occultist",
        description: 
        [
            "+40% Debuff Skill Chance",
            "+20% Move Skill Chance",
            "-10% MAX HP",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Occultist",     
        id: "Sacrificial Cauldron",
        rarity: "Rare",
        restrictions: "Occultist",
        description: 
        [
            "+20% DMG",  
            "+10% Stress",
        ],
    },

    {   
        row:1,
        num:5,
        category:"Occultist",     
        id: "Demon's Cauldron",
        rarity: "Very Rare",
        restrictions: "Occultist",
        description: 
        [
            "+30% Stun Skill Chance",  
            "+40% Debuff Skill Chance", 
            "+3% CRIT",
            "-10% Virtue Chance",
            "+15% Stress",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Occultist",     
        id: "Blood Pact",
        rarity: "Crimson Court",
        restrictions: "Occultist",        
        description: 
        [
            "+4 SPD if Torch below 60",
            "+25% DMG if Torch below 60",
            "-25% Bleed Skill Chance",
            "-10% MAX HP",  
        ],
        ccsettxt: "The bargain is struck!",
        ccsetdescription: ["+15 DODGE"]
    },

    {   
        row:2,
        num:2,
        category:"Occultist",     
        id: "Vial of Sand",
        rarity: "Crimson Court",        
        restrictions: "Occultist",        
        description: 
        [
            "+20% Debuff Skill Chance",  
            "+20% Stun Skill Chance" ,
            "+20% Move Skill Chance",
            "+20% Stun Resist",
        ],
        ccsettxt: "The bargain is struck!",
        ccsetdescription:["+15 DODGE"]
    },

    {   
        row:3,
        num:1,
        category:"Occultist",
        extrainfo:"Costs 25 <span class ='crystalline'>Shards</span>",          
        id: "Petrified Skull",
        rarity: "Crystalline",
        restrictions: "Occultist",        
        description: 
        [
            "+40% PROT When Attacked By Husk",  
            "-20% Healing Received", 
            "+30% PROT When Attacked By Eldritch",
            "+15% MAX HP",
        ],
    },

    
    //Plague Doctor

    {   
        row:1,
        num:1,
        category:"Plague_Doctor",     
        id: "Diseased Herb",
        rarity: "Common",
        restrictions: "Plague Doctor",
        description: 
        [
            "+40% Disease Resist",  
        ],
    },

    {   
        row:1,
        num:2,
        category:"Plague_Doctor",     
        id: "Rotgut Censer",
        rarity: "Common",
        restrictions: "Plague Doctor",
        description: 
        [
            "+8 ACC",  
            "-5% MAX HP", 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Plague_Doctor",     
        id: "Witch's Vial",
        rarity: "Common",
        restrictions: "Plague Doctor",
        description: 
        [
            "+15% Stun Skill Chance",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Plague_Doctor",     
        id: "Poisoned Herb",
        rarity: "Uncommon",
        restrictions: "Plague Doctor",
        description: 
        [
            "+40% Blight Skill Chance", 
            "-15% MAX HP", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Plague_Doctor",     
        id: "Bloody Herb",
        rarity: "Rare",
        restrictions: "Plague Doctor",
        description: 
        [
            "+10 ACC Melee Skills",  
            "+30% Bleed Skill Chance",
            "+20% DMG Melee Skills", 
        ],
    },

    {   
        row:1,
        num:6,
        category:"Plague_Doctor",     
        id: "Blasphemous Vial",
        rarity: "Very Rare",
        restrictions: "Plague Doctor",
        description: 
        [
            "+10 ACC Ranged Skills",  
            "+20% Stun Skill Chance", 
            "+20% Blight Skill Chance",
            "+25% Stress",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Plague_Doctor",     
        id: "Subject #40 Notes",
        rarity: "Crimson Court",
        restrictions: "Plague Doctor",        
        description: 
        [
            "+25% MAX HP",
            "+35% Disease Resist",  
        ],
        ccsettxt: "Those fools at the University...",
        ccsetdescription: ["+15% Blight Skill Chance", "+15% Stun Skill Chance"]
    },

    {   
        row:2,
        num:2,
        category:"Plague_Doctor",     
        id: "Dissection Kit",
        rarity: "Crimson Court",        
        restrictions: "Plague Doctor",        
        description: 
        [
            "+35% Bleed Skill Chance",  
            "+25% DMG" ,
        ],
        ccsettxt: "Those fools at the University...",
        ccsetdescription: ["+15% Blight Skill Chance", "+15% Stun Skill Chance"]
        
    },

    {   
        row:3,
        num:1,
        category:"Plague_Doctor", 
        extrainfo:"Costs 45 <span class ='crystalline'>Shards</span>",         
        id: "Ashen Distillation",
        rarity: "Crystalline",
        restrictions: "Plague Doctor",        
        description: 
        [
            "+20 DODGE",  
            "+25% Blight Skill Chance",
            "+20% Healing Received if Medicinal Herbs in inventory", 
        ],
    },


    //Vestal

    {   
        row:1,
        num:1,
        category:"Vestal",     
        id: "Virtuous Chalice",
        rarity: "Common",
        restrictions: "Vestal",
        description: 
        [
            "+10% Virtue Chance",  
            "-5% MAX HP", 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Vestal",     
        id: "Haste Chalice",
        rarity: "Uncommon",
        restrictions: "Vestal",
        description: 
        [
            "+8 SPD on First Round",  
            "+2 SPD after First Round", 
            "-25% Stun Skill Chance" 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Vestal",     
        id: "Youth Chalice",
        rarity: "Uncommon",
        restrictions: "Vestal",
        region:"Ruins Exclusive",
        description: 
        [
            "+20% MAX HP", 
            "-10% DMG", 
        ],
    },

    {   
        row:1,
        num:4,
        category:"Vestal",     
        id: "Profane Scroll",
        rarity: "Rare",
        restrictions: "Vestal",
        region:"Ruins Exclusive",
        description: 
        [
            "+15% DMG",  
            "+10% PROT if in position 2",
            "+33% Healing Skills if in position 2",
            "+15% Stress", 
        ],
    },

    {   
        row:1,
        num:5,
        category:"Vestal",     
        id: "Tome of Holy Healing",
        rarity: "Rare",
        restrictions: "Vestal",
        description: 
        [
            "+25% Healing Skills",  
            "+15% MAX HP",
        ],
    },

    {   
        row:1,
        num:6,
        category:"Vestal",     
        id: "Sacred Scroll",
        rarity: "Very Rare",
        restrictions: "Vestal",
        description: 
        [
            "-10% Stress",  
            "+33% Healing Skills", 
            "-10% Stun Skill Chance",
            "-33% DMG",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Vestal",     
        id: "Atonement Beads",
        rarity: "Crimson Court",
        restrictions: "Vestal",        
        description: 
        [
            "+15% DMG Melee Skills",
            "+8% CRIT Melee Skills",
            "-15% Virtue Chance",  
        ],
        ccsettxt: "I fear the whispers of my mind!",
        ccsetdescription:["+35% Debuff Skill Chance", "+35% Stun Skill Chance"]
    },

    {   
        row:2,
        num:2,
        category:"Vestal",     
        id: "Salacious Diary",
        rarity: "Crimson Court",        
        restrictions: "Vestal",        
        description: 
        [
            "+33% Stress Skills while Camping",  
            "+25% Healing Skills" ,
        ],
        ccsettxt: "I fear the whispers of my mind!",
        ccsetdescription:["+35% Debuff Skill Chance", "+35% Stun Skill Chance"]
    },

    {   
        row:3,
        num:1,
        category:"Vestal",
        extrainfo:"Costs 70 <span class ='crystalline'>Shards</span>",          
        id: "Heretical Passage",
        rarity: "Crystalline",
        restrictions: "Vestal",        
        description: 
        [
            "+20% Healing Skills if Holy Water in inventory",  
            "+25% DMG vs Husk",
            "+25% DMG vs Eldritch",
            " +10% Stress",
        ],
    },

    
    //Shieldbreaker

    {   
        row:1,
        num:1,
        category:"Shieldbreaker",
        extrainfo:"Obtained after First Nightmare is Defeated",     
        id: "Venomous Vial",
        rarity: "Common",
        restrictions: "Shieldbreaker",
        description: 
        [
            "+30% Blight Skill Chance",  
            "-10% Blight Resist" 
        ],
    },

    {   
        row:1,
        num:2,
        category:"Shieldbreaker",  
        extrainfo:"Obtained after Second Nightmare is Defeated",        
        id: "Shimmering Scale",
        rarity: "Uncommon",
        restrictions: "Shieldbreaker",
        description: 
        [
            "+10% PROT",  
            "+5% Stress", 
        ],
    },

    {   
        row:1,
        num:3,
        category:"Shieldbreaker",
        extrainfo:"Obtained after Third Nightmare is Defeated",          
        id: "Dancer's Footwraps",
        rarity: "Uncommon",
        restrictions: "Shieldbreaker",
        description: 
        [
            "+40% Move Resist",
            "+2 SPD",  
        ],
    },

    {   
        row:1,
        num:4,
        category:"Shieldbreaker",
        extrainfo:"Obtained after Fourth Nightmare is Defeated",          
        id: "Fanged Spear Tip",
        rarity: "Rare",
        restrictions: "Shieldbreaker",
        description: 
        [
            "+35% DMG vs Branded",  
            "-10% DMG",
        ],
    },

    {   
        row:1,
        num:5,
        category:"Shieldbreaker",     
        id: "Cuirboilli",
        extrainfo:"Obtained after Fifth Nightmare is Defeated",     
        rarity: "Very Rare",
        restrictions: "Shieldbreaker",
        description: 
        [
            "+33% MAX HP",  
            "-2 SPD",
        ],
    },

    {   
        row:2,
        num:1,
        category:"Shieldbreaker",
        extrainfo:"Obtained after Sixth Nightmare is Defeated",          
        id: "Obsidian Dagger",
        rarity: "Crimson Court",
        restrictions: "Shieldbreaker",        
        description: 
        [
            "+40% Debuff Skill Chance",
            "+40% Blight Skill Chance",  
        ],
        ccsettxt: "Broken and Beautiful.",
        ccsetdescription: ["+15% MAX HP", "+10% PROT", "Cannot be Shielded",]
    },

    {   
        row:2,
        num:2,
        category:"Shieldbreaker",
        extrainfo:"Obtained after Seventh Nightmare is Defeated",          
        id: "Severed Hand",
        rarity: "Crimson Court",        
        restrictions: "Shieldbreaker",        
        description: 
        [
            "+50% Blight Resist",  
            "-10% Stress" ,
        ],
        ccsettxt: "Broken and Beautiful.",
        ccsetdescription: ["+15% MAX HP", "+10% PROT", "Cannot be Shielded",]
    },

    {   
        row:3,
        num:1,
        category:"Shieldbreaker", 
        extrainfo:"Costs 65 <span class ='crystalline'>Shards</span>",         
        id: "Spectral Speartip",
        rarity: "Crystalline",
        restrictions: "Shieldbreaker",        
        description: 
        [
            "+15% DMG",  
            "+20% Blight Skill Chance",
            "+15% MAX HP",
            "+5% Random Target Chance", 
        ],
    },


]

function replaceSpecificTrinketText(text) {
    text = text.replace(/Stress/g, '<span class="stress">Stress</span>');  
    text = text.replace(/Virtue/g, '<span class="stress">Virtue</span>');  
    text = text.replace(/Healing/g, '<span class="heal">Healing</span>');
    text = text.replace(/Torch/g, '<span class="highres">Torch</span>');

    text = text.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
    text = text.replace(/Lacerated/g, '<span class="bleed">Bleeding</span>');

    text = text.replace(/Blight/g, '<span class="blight">Blight</span>');
    text = text.replace(/Poisoned/g, '<span class="blight">Blighted</span>');

    text = text.replace(/Stun/g, '<span class="stun">Stun</span>');
    text = text.replace(/Dazed/g, '<span class="stun">Stunned</span>');

    text = text.replace(/Debuff/g, '<span class="debuff">Debuff</span>');
    text = text.replace(/HinderThem/g, '<span class="debuff">Debuff Target:</span>');
    text = text.replace(/Hinder Party/g, '<span class="debuff">Debuff Party</span>');

    text = text.replace(/Random Target Chance/g, '<span class="debuff">Random Target Chance</span>');
    text = text.replace(/Empower Me/g, '<span class="buff">Buff Self:</span>');

    text = text.replace(/Move/g, '<span class="move">Move</span>');

    text = text.replace(/Disease/g, '<span class="disease">Disease</span>');

    text = text.replace(/Death Blow/g, '<span class="mark">Death Blow</span>');
    text = text.replace(/Death's Door/g, '<span class="mark">Death\'s Door</span>');

    text = text.replace(/Ranged/g, '<span class="attack_type">Ranged</span>');
    text = text.replace(/Melee/g, '<span class="attack_type">Melee</span>');

    text = text.replace(/Branded/g, '<span class="mark">Marked</span>');

    text = text.replace(/Stealth/g, '<span class="stealth">Stealth</span>');
    text = text.replace(/Trap/g, '<span class="stealth">Trap</span>');
    text = text.replace(/Scouting/g, '<span class="scouting">Scouting</span>');
    text = text.replace(/Surprised/g, '<span class="scouting">Surprised</span>');

    text = text.replace(/Guard/g, '<span class="buff">Guard</span>');
    text = text.replace(/Protecting/g, '<span class="buff">Guarding</span>');
    text = text.replace(/Cannot be Shielded/g, '<span class="debuff">Cannott be Guarded</span>');


    text = text.replace(/Riposte/g, '<span class="debuff">Riposte</span>');
    text = text.replace(/Damage Reflection/g, '<span class="debuff">Damage Reflection</span>');

    text = text.replace(/(\(\d+% Base\)|\d+% Base)/g, '<span class="chance">$1</span>');

    text = text.replace(/Shard Dust/g, '<span class="crystalline">Shard Dust</span>');
    
    text = text.replace(/Holy Water/g, '<span class="stress">Holy Water</span>');
    text = text.replace(/Medicinal Herbs/g, '<span class="debuff">Medicinal Herbs</span>');
    text = text.replace(/Dog Treats/g, '<span class="debuff">Dog Treats</span>');
    text = text.replace(/Bandage/g, '<span class="attack_type">Bandage</span>');
    text = text.replace(/Laudanum/g, '<span class="very_common">Laudanum</span>');
    text = text.replace(/Thing/g, '<span class="thing">Thing</span>');

    text = text.replace(/Camping/g, '<span class="highres">Camping</span>');
    text = text.replace(/Crimson Curse/g, '<span class="crimson_court">Crimson Curse</span>');
    text = text.replace(/Craving/g, '<span class="crimson_court">Craving</span>');
    text = text.replace(/Wasting/g, '<span class="crimson_court">Wasting</span>');
    text = text.replace(/Bloodlust/g, '<span class="crimson_court">Bloodlust</span>');


    
    return text;
}
trinketData.forEach(trinket => {
    const Trinket = document.createElement("img");
    let trinketURLName = encodeURIComponent(trinket.id.replace(/[\s-]/g, '_'));
    let trinketIDName = trinket.id.replace(/[\s-]/g, '_').toLowerCase();
    Trinket.src = `images/Trinket_Box/${trinket.category}/${trinketURLName}.png`
    Trinket.loading = "lazy"
    Trinket.id = `${trinketIDName}_trinket`
    Trinket.classList.add("trinketbox_trinket")

    let rowNumber = parseInt(trinket.row);
     if (rowNumber >= 1 && rowNumber <= 3) {
        let className = "trinket_row" + rowNumber;
        Trinket.classList.add(className);
    }

    let numNumber = parseInt(trinket.num); 

     if (numNumber >= 1 && numNumber <= 9) {
        let className = "trinket_num" + numNumber;
        Trinket.classList.add(className);
    }

    if(trinket.category === "Very_Common") {
        veryCommonTrinkets.appendChild(Trinket);
    }
    if(trinket.category === "Common") {
        commonTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Uncommon") {
        uncommonTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Rare") {
        rareTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Very_Rare") {
        veryRareTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Ancestral") {
        ancestralTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Trophy") {
        trophyTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Enemy_Specific") {
        enemySpecificTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Crimson_Court") {
        crimsonCourtTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Color_Of_Madness") {
        colorOfMadnessTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Abomination") {
        abominationTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Antiquarian") {
        antiquarianTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Arbalest") {
        arbalestTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Bounty_Hunter") {
        bountyHunterTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Crusader") {
        crusaderTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Grave_Robber") {
        graveRobberTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Hellion") {
        hellionTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Highwayman") {
        highwaymanTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Houndmaster") {
        houndmasterTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Jester") {
        jesterTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Leper") {
        leperTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Man-at-Arms") {
        manatarmsTrinkets.appendChild(Trinket);
    }    
     if(trinket.category === "Musketeer") {
        musketeerTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Occultist") {
        occultistTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Plague_Doctor") {
        plagueDoctorTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Vestal") {
        vestalTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Flagellant") {
        flagellantTrinkets.appendChild(Trinket);
    }
     if(trinket.category === "Shieldbreaker") {
        shieldbreakerTrinkets.appendChild(Trinket);
    }

    TrinketMainBox.appendChild(veryCommonTrinkets);
    TrinketMainBox.appendChild(commonTrinkets);
    TrinketMainBox.appendChild(uncommonTrinkets);
    TrinketMainBox.appendChild(rareTrinkets);
    TrinketMainBox.appendChild(veryRareTrinkets);
    TrinketMainBox.appendChild(ancestralTrinkets);
    TrinketMainBox.appendChild(trophyTrinkets);
    TrinketMainBox.appendChild(enemySpecificTrinkets);
    TrinketMainBox.appendChild(crimsonCourtTrinkets);
    TrinketMainBox.appendChild(colorOfMadnessTrinkets);
    TrinketMainBox.appendChild(abominationTrinkets);
    TrinketMainBox.appendChild(antiquarianTrinkets);
    TrinketMainBox.appendChild(arbalestTrinkets);
    TrinketMainBox.appendChild(bountyHunterTrinkets);
    TrinketMainBox.appendChild(crusaderTrinkets);
    TrinketMainBox.appendChild(graveRobberTrinkets);
    TrinketMainBox.appendChild(hellionTrinkets);
    TrinketMainBox.appendChild(highwaymanTrinkets);
    TrinketMainBox.appendChild(houndmasterTrinkets);
    TrinketMainBox.appendChild(jesterTrinkets);
    TrinketMainBox.appendChild(leperTrinkets);
    TrinketMainBox.appendChild(manatarmsTrinkets);
    TrinketMainBox.appendChild(musketeerTrinkets);
    TrinketMainBox.appendChild(occultistTrinkets);
    TrinketMainBox.appendChild(plagueDoctorTrinkets);
    TrinketMainBox.appendChild(vestalTrinkets);
    TrinketMainBox.appendChild(flagellantTrinkets);
    TrinketMainBox.appendChild(shieldbreakerTrinkets);


})

let trinketHTML = '';

trinketData.forEach(trinket => {
    const TrinketDesc = document.createElement("div");
    let trinketIDName = trinket.id.replace(/[\s-]/g, '_').toLowerCase();
    let rarityID = trinket.rarity.replace(/[\s-]/g, '_').toLowerCase();
    TrinketDesc.id = `${trinketIDName}_trinket_desc`;
    TrinketDesc.className = `general_desc trinket_description trinket_row${parseInt(trinket.row)} trinket_desc_num${parseInt(trinket.num)}`;

    if (trinket.extrainfo) {
        TrinketDesc.innerHTML += `${trinket.extrainfo}<br>`;
    }

    TrinketDesc.innerHTML += `
        <span class="highres">${trinket.id}</span><br>
        <span class="${rarityID}">${trinket.rarity}</span><br>
    `;

    if (trinket.restrictions) {
        TrinketDesc.innerHTML += `<span class="attack_type">[${trinket.restrictions} only]</span><br>`;
    }

    if (trinket.region) {
        TrinketDesc.innerHTML += `<span class="buff">${trinket.region}</span><br>`;
    }

    TrinketDesc.innerHTML += trinket.description.map(item => `${replaceSpecificTrinketText(item)}<br>`).join('');

    if (trinket.ccsettxt) {
        TrinketDesc.innerHTML += `<span class="crimson_court">"${trinket.ccsettxt}"</span><br>`;
    }

    if (trinket.ccsetdescription) {
        TrinketDesc.innerHTML += trinket.ccsetdescription.map(item => `<span class="chance">${replaceSpecificTrinketText(item)}</span><br>`).join('');
    }

    TrinketMainBox.appendChild(TrinketDesc);
});


TrinketMainBox.innerHTML += trinketHTML;

const TrinketInfoDescData = [
    //Overview
    {    
  
      icon_src:"images/Hero_boxes/more_info_icon.png",
      icon_class: "info trinket_overview",
      icon_id:"trinket_overview",
  
      label_class:"ddlogo_text trinket_overview_label",
      labeltext:"Overview",
  
      class: "general_desc trinket_overview_info",
      id:"trinket_overview_desc",
  
      description: [
        "Trinkets! are obtained through Battle & Curio Loot during expeditions or bought from the Nomad Wagon. Some Trinkets are Region Exclusive, they only appear as loot or as a Quest reward in that Region.<br>",
        "A Hero can equip up to 2 Trinkets! at once. and 2 of the same Trinket! cannot be equipped at the same time. Identical Trinkets! do not stack in your Inventory.<br>",
        "Enemy Specific, Ancestral, Trophy, all DLC Trinkets! (With the exception of Rat Carcass), and some Very Rare Trinkets! are limited to 1 per Estate.<br>",
        `Non Shambler Ancestral Trinkets! only appear as Quest Rewards in Normal Dungeons if they are Champion Level Long Dungeons. 
        They can also be randomly dropped in Veteran and Champion Difficulties <br>`,
        `Trinkets! that have been lost are collected by the Shrieker, and a Quest to reclaim them by confronting the bird appears once 8 or more has been lost.
        The difficulty of the battle is determined by the Highest Rarity Trinket! that has been lost.
        Trophy Trinkets! return to your Trinket! Inventory even if lost during an expedition.<br>`,
        "Trinket! Selling Prices (In Gold):",
        "Very Common: 750 // Common: 1125 // Uncommon: 1500 // Rare: 2250",
        "Very Rare: 3750 // Enemy Specific Very Rare: 2250 // Shrieker: 1",
        "Ancestral: 7500 // Crimson Court: 7500",
        "Darkest Dungeon, Trophy, Crystalline, Keepsake, Thing, and all Shieldbreaker Trinkets! cannot be sold",
      ]
    },

    //Crimson Court
    {
  
      icon_src:"images/estate_icons/crimson_court_icon.png",
      icon_class: "info crimson_court_trinket_overview",
      icon_id:"crimson_court_trinket_overview",

      label_class:"ddlogo_text crimson_court_trinket_overview_label crimson_court",
      labeltext:"Crimson Court",
  
      class: "general_desc trinket_overview_info",
      id:"crimson_court_trinket_overview_desc",
  
  
      description: [
        "Crimson Court Rarity Trinkets! are primarily found within The Courtyard",
      ]
    
    },

    //Color Of Madness
    {
  
        icon_src:"images/estate_icons/shard_icon.png",
        icon_class: "info color_of_madness_trinket_overview",
        icon_id:"color_of_madness_trinket_overview",

        label_class:"ddlogo_text color_of_madness_trinket_overview_label crystalline",
        labeltext:"Crystalline",
    
        class: "general_desc trinket_general_info",
        id:"color_of_madness_trinket_overview_desc",
    
    
        description: [
          "All Crystalline Trinkets! are obtained through buying them from the Jeweler found in the Nomad Wagon using Shards found within The Farmstead and cannot be sold",
        ]
      
    },

    //Shieldbreaker
     {
  
      icon_src:"images/estate_icons/aegis_icon.png",
      icon_class: "info shieldbreaker_trinket_overview",
      icon_id:"shieldbreaker_trinket_overview",

      label_class:"ddlogo_text shieldbreaker_trinket_overview_label block",
      labeltext:"Shieldbreaker",
  
      class: "general_desc trinket_general_info",
      id:"shieldbreaker_trinket_overview_desc",
  
  
      description: [
        "Shieldbreaker Trinkets! that have been obtained after Nighmares cannot be sold or lost and will appear in your Trinket! Inventory at the Hamlet even if you don't pick them up.",
      ]
    
    },

      
  ]
  
  
  TrinketInfoDescData.forEach((trinketdesc) => {
    const TrinketIconImg = document.createElement("img");
    TrinketIconImg.src = trinketdesc.icon_src
    TrinketIconImg.loading = "lazy"
    TrinketIconImg.className = trinketdesc.icon_class
    TrinketIconImg.id = trinketdesc.icon_id

      const TrinketIconLabel = document.createElement("div");
      TrinketIconLabel.className = trinketdesc.label_class;
      TrinketIconLabel.innerHTML = trinketdesc.labeltext;

      TrinketMainBox.appendChild(TrinketIconImg);
      TrinketMainBox.appendChild(TrinketIconLabel);


    
})
TrinketInfoDescData.forEach((trinketdesc) => {
const TrinketIconDescContainer = document.createElement("div");
TrinketIconDescContainer.id = trinketdesc.id;
TrinketIconDescContainer.className = trinketdesc.class;

trinketdesc.description.forEach((text, index) => {
    const StyledText = replaceSpecificTrinketDescriptionWords(text);
    TrinketIconDescContainer.innerHTML += StyledText;

    if (index < trinketdesc.description.length - 1) {
      const linebreak = document.createElement("br");
      TrinketIconDescContainer.appendChild(linebreak);
    }

  }); 
  TrinketMainBox.appendChild(TrinketIconDescContainer);
})
  
    function replaceSpecificTrinketDescriptionWords(description) {

      description = description.replace(/Apprentice/g, '<span class="apprentice">Apprentice</span>');
      description = description.replace(/Veteran/g, '<span class="veteran">Veteran</span>');
      description = description.replace(/Champion/g, '<span class="champion">Champion</span>');

      description = description.replace(/Very Common/g, '<span class="common">Very Common</span>');
      description = description.replace(/Common/g, '<span class="common">Common</span>');
      description = description.replace(/Uncommon/g, '<span class="uncommon">Uncommon</span>');
      description = description.replace(/Rare/g, '<span class="rare">Rare</span>');
      description = description.replace(/Very Rare/g, '<span class="very_rare">Very Rare</span>');
      description = description.replace(/Enemy Specific/g, '<span class="very_rare">Enemy Specific</span>');
      description = description.replace(/Ancestral/g, '<span class="ancestral">Ancestral</span>');
      description = description.replace(/Trophy/g, '<span class="trophy">Trophy</span>');
      description = description.replace(/Shrieker/g, '<span class="shrieker">Shrieker</span>');
      description = description.replace(/Shambler/g, '<span class="ancestral">Shambler</span>');
      description = description.replace(/Darkest Dungeon/g, '<span class="ancestral">Darkest Dungeon</span>');

      description = description.replace(/Crimson Court/g, '<span class="crimson_court">Crimson Court</span>');
      description = description.replace(/The Courtyard/g, '<span class="crimson_court">The Courtyard</span>');

      description = description.replace(/Jeweler/g, '<span class="crystalline">Jeweler</span>');
      description = description.replace(/Crystalline/g, '<span class="crystalline">Crystalline</span>');
      description = description.replace(/Keepsake/g, '<span class="crystalline">Keepsake</span>');
      description = description.replace(/Shards/g, '<span class="crystalline">Shards</span>');
      description = description.replace(/The Farmstead/g, '<span class="crystalline">The Farmstead</span>');
      description = description.replace(/Thing/g, '<span class="thing">Thing</span>');

      description = description.replace(/Shieldbreaker/g, '<span class="block">Shieldbreaker</span>');
  
      description = description.replace(/Nomad Wagon/g, '<span class="stress">Nomad Wagon</span>');
      description = description.replace(/Abbey/g, '<span class="stress">Abbey</span>');
      description = description.replace(/Tavern/g, '<span class="stress">Tavern</span>');
      description = description.replace(/Gold/g, '<span class="highres">Gold</span>');
      description = description.replace(/Rat Carcass/g, '<span class="highres">Rat Carcass</span>');

      description = description.replace(/Trinkets!/g, '<span class="attack_type">Trinkets</span>');
      description = description.replace(/Trinket!/g, '<span class="attack_type">Trinket</span>');
  
      description = description.replace(/Region Exclusive/g, '<span class="buff">Region Exclusive</span>');

      description = description.replace(/Curios/g, '<span class="attack_type">Curios</span>');
      description = description.replace(/Curio/g, '<span class="attack_type">Curio</span>');
  
      return description;
  }
