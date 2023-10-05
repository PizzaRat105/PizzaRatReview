const RuinsEnemyBox = document.getElementById('ruinsbox1');
const WealdEnemyBox = document.getElementById('wealdbox1');
const WarrensEnemyBox = document.getElementById('warrensbox1'); 
const CoveEnemyBox = document.getElementById('covebox1');
const SharedEnemyBox = document.getElementById('sharedbox1');


const RuinsenemySidenav = document.createElement("div");
RuinsenemySidenav.className = "content_sidenav";
RuinsenemySidenav.id = "ruins_enemy_nav";

const WealdenemySidenav = document.createElement("div");
WealdenemySidenav.className = "content_sidenav sidenav9";
WealdenemySidenav.id = "weald_enemy_nav";

const WarrensenemySidenav = document.createElement("div");
WarrensenemySidenav.className = "content_sidenav";
WarrensenemySidenav.id = "warrens_enemy_nav";

const CoveenemySidenav = document.createElement("div");
CoveenemySidenav.className = "content_sidenav";
CoveenemySidenav.id = "cove_enemy_nav";

const SharedenemySidenav = document.createElement("div");
SharedenemySidenav.className = "content_sidenav sidenav13";
SharedenemySidenav.id = "shared_enemy_nav";


const ruinsEnemies = [
    { src: "images/portraits/Bone_Soldier.png", id: "bone_soldier_nav" },
    { src: "images/portraits/Bone_Defender.png", id: "bone_defender_nav" },
    { src: "images/portraits/Bone_Arbalest.png", id: "bone_arbalest_nav" },
    { src: "images/portraits/Bone_Courtier.png", id: "bone_courtier_nav" },
    { src: "images/portraits/Bone_Spearman.png", id: "bone_spearman_nav" },
    { src: "images/portraits/Bone_Captain.png", id: "bone_captain_nav" },
    { src: "images/portraits/Bone_Bearer.png", id: "bone_bearer_nav" }
];

const wealdEnemies = [
    { src: "images/portraits/Fungal_Scratcher.png", id: "fungal_scratcher_nav" },
    { src: "images/portraits/Fungal_Artillery.png", id: "fungal_artillery_nav" },
    { src: "images/portraits/Rabid_Gnasher.png", id: "rabid_gnasher_nav" },
    { src: "images/portraits/Ectoplasm.png", id: "ectoplasm_nav" },
    { src: "images/portraits/Large_Ectoplasm.png", id: "large_ectoplasm_nav" },
    { src: "images/portraits/Crone.png", id: "crone_nav" },
    { src: "images/portraits/Unclean_Giant.png", id: "unclean_giant_nav" },
    { src: "images/portraits/Hateful_Virago.png", id: "hateful_virago_nav" },
    { src: "images/portraits/Necrotic_Fungus.png", id: "necrotic_fungus_nav" }
];

const warrensEnemies = [
    { src: "images/portraits/Swine_Chopper.png", id: "swine_chopper_nav" },
    { src: "images/portraits/Swine_Wretch.png", id: "swine_wretch_nav" },
    { src: "images/portraits/Swine_Drummer.png", id: "swine_drummer_nav" },
    { src: "images/portraits/Swine_Hooker.png", id: "swine_slasher_nav" },
    { src: "images/portraits/Carrion_Small.png", id: "carrion_eater_nav" },
    { src: "images/portraits/Carrion_Large.png", id: "large_carrion_eater_nav" },
    { src: "images/portraits/Swinetaur.png", id: "swinetaur_nav" },
    { src: "images/portraits/Swine_Skiver.png", id: "swine_skiver_nav" }
];

const coveEnemies = [
    { src: "images/portraits/Pelagic_Grouper.png", id: "pelagic_grouper_nav" },
    { src: "images/portraits/Pelagic_Guardian.png", id: "pelagic_guardian_nav" },
    { src: "images/portraits/Pelagic_Shaman.png", id: "pelagic_shaman_nav" },
    { src: "images/portraits/Deep_Stinger.png", id: "deep_stinger_nav" },
    { src: "images/portraits/Drowned_Thrall.png", id: "drowned_thrall_nav" },
    { src: "images/portraits/Sea_Maggot.png", id: "sea_maggot_nav" },
    { src: "images/portraits/Uca_Crusher.png", id: "uca_crusher_nav" },
    { src: "images/portraits/Squiffy_Ghast.png", id: "squiffy_ghast_nav" }
];

const sharedEnemies = [
    { src: "images/portraits/Brigand_Cutthroat.png", id: "brigand_cutthroat_nav" },
    { src: "images/portraits/Brigand_Bloodletter.png", id: "brigand_bloodletter_nav" },
    { src: "images/portraits/Brigand_Fusilier.png", id: "brigand_fusilier_nav" },
    { src: "images/portraits/Cultist_Brawler.png", id: "cultist_brawler_nav" },
    { src: "images/portraits/Cultist_Acolyte.png", id: "cultist_acolyte_nav" },
    { src: "images/portraits/Madman.png", id: "madman_nav" },
    { src: "images/portraits/Webber.png", id: "webber_nav" },
    { src: "images/portraits/Spitter.png", id: "spitter_nav" },
    { src: "images/portraits/Maggot.png", id: "maggot_nav" },
    { src: "images/portraits/Bone_Rabble.png", id: "bone_rabble_nav" },
    { src: "images/portraits/Gargoyle.png", id: "gargoyle_nav" },
    { src: "images/portraits/Ghoul.png", id: "ghoul_nav" },
    { src: "images/portraits/Brigand_Raider.png", id: "brigand_raider_nav" },
    { src: "images/portraits/Brigand_Hunter.png", id: "brigand_hunter_nav" }
];



ruinsEnemies.forEach(function(enemy) {
    const img = document.createElement("img");
    img.src = enemy.src;
    img.className = "enemy_port";
    img.id = enemy.id;
    img.loading = "lazy";

    RuinsenemySidenav.appendChild(img);
});

wealdEnemies.forEach(function(enemy) {
    const img = document.createElement("img");
    img.src = enemy.src;
    img.className = "enemy_port";
    img.id = enemy.id;
    img.loading = "lazy";

    WealdenemySidenav.appendChild(img);
});

warrensEnemies.forEach(function(enemy) {
    const img = document.createElement("img");
    img.src = enemy.src;
    img.className = "enemy_port";
    img.id = enemy.id;
    img.loading = "lazy";

    WarrensenemySidenav.appendChild(img);
});

coveEnemies.forEach(function(enemy) {
    const img = document.createElement("img");
    img.src = enemy.src;
    img.className = "enemy_port";
    img.id = enemy.id;
    img.loading = "lazy";

    CoveenemySidenav.appendChild(img);
});

sharedEnemies.forEach(function(enemy) {
    const img = document.createElement("img");
    img.src = enemy.src;
    img.className = "enemy_port";
    img.id = enemy.id;
    img.loading = "lazy";

    SharedenemySidenav.appendChild(img);
});

RuinsEnemyBox.appendChild(RuinsenemySidenav);
WealdEnemyBox.appendChild(WealdenemySidenav);
WarrensEnemyBox.appendChild(WarrensenemySidenav);
CoveEnemyBox.appendChild(CoveenemySidenav);
SharedEnemyBox.appendChild(SharedenemySidenav);


const RuinsEnemySpriteData = [
    { id: "bone_soldier", content: "Bone Soldier", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "bone_defender", content: "Bone Defender",useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false,  hasVeryShortName: false,},
    { id: "bone_arbalest", content: "Bone Arbalist", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "bone_courtier", content: "Bone Courtier", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "bone_spearman", content: "Bone Spearman", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false,hasApprentice: false, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,}, 
    { id: "bone_captain", content: "Bone Captain", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false,hasApprentice: false, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},     
    { id: "bone_bearer", content: "Bone Bearer", useBigSprite: false, useTallSprite:true,useMediumSprite:false, useMedTallSprite: false,useSmallSprite: false,hasApprentice: false, hasVeteran: false, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
]

const WealdEnemySpriteData = [
    { id: "fungal_scratcher", content: "Fungal Scratcher", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "fungal_artillery", content: "Fungal Artillery", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: false,useSmallSprite: true, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "rabid_gnasher", content: "Rabid Gnasher", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: false,useSmallSprite: true, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "ectoplasm", content: "Ectoplasm", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: true, hasMediumName:false, hasLongName: false, hasVeryShortName: false,},
    { id: "large_ectoplasm", content: "Large Ectoplasm",useBigSprite: true,useTallSprite:false,useMediumSprite:false, useMedTallSprite: false,useSmallSprite: false, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "crone", content: "Crone", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false,hasApprentice: false, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:false, hasLongName: false, hasVeryShortName: true,}, 
    { id: "unclean_giant", content: "Unclean Giant", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false,hasApprentice: false, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},     
    { id: "hateful_virago", content: "Hateful Virago", useBigSprite: false, useTallSprite:true,useMediumSprite:false, useMedTallSprite: false,useSmallSprite: false,hasApprentice: false, hasVeteran: false, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "necrotic_fungus", content: "Necrotic Fungus", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false,hasApprentice: false, hasVeteran: false, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},

];

const WarrensEnemySpriteData = [
    { id: "swine_chopper", content: "Swine Chopper", useBigSprite: false,useTallSprite:false,useMediumSprite:true, useMedTallSprite: false,useSmallSprite: false, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "swine_wretch", content: "Swine Wretch", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: false, useSmallSprite: true,hasApprentice: true , hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "swine_drummer", content: "Swine Drummer", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true, useSmallSprite: false,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "swine_slasher", content: "Swine Slasher", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "carrion_eater", content: "Carrion Eater", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: false,useSmallSprite: true,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "swinetaur", content: "Swinetaur", useBigSprite: true, useTallSprite:false,useMediumSprite:false, useMedTallSprite: false,useSmallSprite: false,hasApprentice: false, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: true, hasMediumName:false, hasLongName: false, hasVeryShortName: false,}, 
    { id: "large_carrion_eater", content: "Large Carrion Eater", useBigSprite: true, useTallSprite:false,useMediumSprite:true, useMedTallSprite: false,useSmallSprite: false,hasApprentice: false, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},     
    { id: "swine_skiver", content: "Swine Skiver", useBigSprite: false, useTallSprite:true,useMediumSprite:false, useMedTallSprite: false,useSmallSprite: false,hasApprentice: false, hasVeteran: false, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
];

const CoveEnemySpriteData = [
    { id: "pelagic_grouper", content: "Pelagic Grouper", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "pelagic_guardian", content: "Pelagic Guardian", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "pelagic_shaman", content: "Pelagic Shaman", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true, useSmallSprite: false,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "deep_stinger", content: "Deep Stinger", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "drowned_thrall", content: "Drowned Thrall", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: true,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "sea_maggot", content: "Sea Maggot", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: false,useSmallSprite: true,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,}, 
    { id: "uca_crusher", content: "Uca Crusher", useBigSprite: true, useTallSprite:false,useMediumSprite:false, useMedTallSprite: false,useSmallSprite: false,hasApprentice: false, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},     
    { id: "squiffy_ghast", content: "Squiffy Ghast", useBigSprite: false, useTallSprite:true,useMediumSprite:false, useMedTallSprite: false,useSmallSprite: false,hasApprentice: false, hasVeteran: false, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
];

const SharedEnemySpriteData = [
    { id: "brigand_cutthroat", content: "Brigand Cutthroat", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "brigand_bloodletter", content: "Brigand Bloodletter", useBigSprite: true,useTallSprite:false,useMediumSprite:false, useMedTallSprite: false, useSmallSprite: false,hasApprentice: true , hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "brigand_fusilier", content: "Brigand Fusilier", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true, useSmallSprite: false,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "cultist_brawler", content: "Cultist Brawler", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "cultist_acolyte", content: "Cultist Acolyte", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "madman", content: "Madman", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false, hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: true, hasMediumName:false, hasLongName: false, hasVeryShortName: false,},
    { id: "webber", content: "Webber", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: false, useSmallSprite: true,hasApprentice: true , hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:false, hasLongName: false, hasVeryShortName: true,},
    { id: "spitter", content: "Spitter", useBigSprite: false,useTallSprite:false,useMediumSprite:false, useMedTallSprite: false, useSmallSprite: true,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:false, hasLongName: false, hasVeryShortName: true,},
    { id: "maggot", content: "Maggot", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: false,useSmallSprite: true,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:false, hasLongName: false, hasVeryShortName: true,},
    { id: "bone_rabble", content: "Bone Rabble", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false,hasApprentice: true, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "gargoyle", content: "Gargoyle", useBigSprite: false, useTallSprite:false,useMediumSprite:true, useMedTallSprite: false,useSmallSprite: false,hasApprentice: false, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: true, hasMediumName:false, hasLongName: false, hasVeryShortName: false,}, 
    { id: "ghoul", content: "Ghoul", useBigSprite: true, useTallSprite:false,useMediumSprite:true, useMedTallSprite: false,useSmallSprite: false,hasApprentice: false, hasVeteran: true, hasChampion:true, hasDarkest:false, hasShortName: false, hasMediumName:false, hasLongName: false, hasVeryShortName: true,},     
    { id: "brigand_raider", content: "Brigand Raider", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false,hasApprentice: false, hasVeteran: false, hasChampion:true, hasDarkest:true, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},
    { id: "brigand_hunter", content: "Brigand Hunter", useBigSprite: false, useTallSprite:false,useMediumSprite:false, useMedTallSprite: true,useSmallSprite: false,hasApprentice: false, hasVeteran: false, hasChampion:true, hasDarkest:true, hasShortName: false, hasMediumName:true, hasLongName: false, hasVeryShortName: false,},

];



function AddSpriteContainer(enemySpriteData, container) {
    enemySpriteData.forEach(enemy => {
        const enemySpriteContainer = document.createElement("div");
        enemySpriteContainer.className = `enemy_sprite_container`;
        enemySpriteContainer.id = `${enemy.id}_sprite`;

        const enemySpriteImage = document.createElement("img");
        enemySpriteImage.src = `images/monsters/${enemy.id}.webp`;
        enemySpriteImage.loading = "lazy";
        if (enemy.useMedTallSprite) {
            enemySpriteImage.className = 'enemy_medtall_sprite';
          } else if (enemy.useBigSprite) {
            enemySpriteImage.className = 'enemy_size2_sprite';
          } else if (enemy.useTallSprite) {
            enemySpriteImage.className = 'enemy_tall_sprite';
          } else if (enemy.useMediumSprite) {
            enemySpriteImage.className = 'enemy_sprite';
          } else if (enemy.useSmallSprite) {
            enemySpriteImage.className = 'enemy_small_sprite';
          }
        
        if (enemy.hasApprentice) {
            const apprenticeBtn = createLevelButton('app_banner', 'app_lvl', `${enemy.id}_app`);
            enemySpriteContainer.appendChild(apprenticeBtn);
        }
        if (enemy.hasVeteran) {
            const veteranBtn = createLevelButton('vet_banner', 'vet_lvl', `${enemy.id}_vet`);
            enemySpriteContainer.appendChild(veteranBtn);
        }

        if (enemy.hasChampion) {
            const championBtn = createLevelButton('champ_banner', 'champ_lvl', `${enemy.id}_champ`);
            enemySpriteContainer.appendChild(championBtn);
        }
        if (enemy.hasDarkest) {
            const darkestBtn = createLevelButton('darkest_banner', 'darkest_lvl', `${enemy.id}_darkest`);
            enemySpriteContainer.appendChild(darkestBtn);
        }
        
        

        const monsterNameDiv = document.createElement('div');
        if (enemy.hasShortName) {
            monsterNameDiv.className = 'ddlogo_text monster_name_short';
          } else if (enemy.hasMediumName) {
            monsterNameDiv.className = 'ddlogo_text monster_name_medium';
          } else if (enemy.hasLongName) {
            monsterNameDiv.className = 'ddlogo_text monster_name_long';
          }else if (enemy.hasVeryShortName) {
            monsterNameDiv.className = 'ddlogo_text monster_name_veryshort';
          }
        
        monsterNameDiv.textContent = enemy.content; 

        enemySpriteContainer.appendChild(enemySpriteImage);
        enemySpriteContainer.appendChild(monsterNameDiv);

        container.appendChild(enemySpriteContainer);
    });
}


function createLevelButton(imgSrc, className, id) {
    const button = document.createElement('img');
    button.src = `images/Boxes/${imgSrc}.png`;
    button.className = `lvl_btn ${className}`;
    button.loading = "lazy";
    button.id = id;
    return button;
}
AddSpriteContainer(RuinsEnemySpriteData, RuinsEnemyBox);
AddSpriteContainer(WealdEnemySpriteData, WealdEnemyBox);
AddSpriteContainer(WarrensEnemySpriteData, WarrensEnemyBox);
AddSpriteContainer(CoveEnemySpriteData, CoveEnemyBox);
AddSpriteContainer(SharedEnemySpriteData, SharedEnemyBox);

const ruinsenemies = [
    'bone_soldier',
    'bone_defender',
    'bone_arbalest',
    'bone_courtier',
    'bone_spearman',
    'bone_captain',
    'bone_bearer',
]

const wealdenemies = [
    'fungal_scratcher',
    'fungal_artillery',
    'rabid_gnasher',
    'ectoplasm',
    'large_ectoplasm',
    'crone',
    'unclean_giant',
    'hateful_virago',
    'necrotic_fungus',
]

const warrenenemies = [
    'swine_chopper',
    'swine_wretch',
    'swine_drummer',
    'swine_slasher',
    'carrion_eater',
    'large_carrion_eater',
    'swinetaur',
    'swine_skiver'
];

const coveenemies = [
    'pelagic_grouper',
    'pelagic_guardian',
    'pelagic_shaman',
    'deep_stinger',
    'drowned_thrall',
    'sea_maggot',
    'uca_crusher',
    'squiffy_ghast'
];

const sharedenemies = [
    'brigand_cutthroat',
    'brigand_bloodletter',
    'brigand_fusilier',
    'cultist_brawler',
    'cultist_acolyte',
    'madman',
    'webber',
    'spitter',
    'maggot',
    'bone_rabble',
    'gargoyle',
    'ghoul',
    'brigand_raider',
    'brigand_hunter',
];

const RuinsEnemyStats = document.getElementById('enemy_stat_ruins'); 
const WealdEnemyStats = document.getElementById('enemy_stat_weald'); 
const WarrensEnemyStats = document.getElementById('enemy_stat_warrens'); 
const CoveEnemyStats = document.getElementById('enemy_stat_cove'); 
const SharedEnemyStats = document.getElementById('enemy_stat_shared'); 

function generateEnemyToggle() {
    const RuinsToggleContainer = document.getElementById('enemy_stat_ruins');
    const WealdToggleContainer = document.getElementById('enemy_stat_weald');
    const WarrensToggleContainer = document.getElementById('enemy_stat_warrens');
    const CoveToggleContainer = document.getElementById('enemy_stat_cove');
    const SharedToggleContainer = document.getElementById('enemy_stat_shared');

    ruinsenemies.forEach((enemy) => {
        const enemyContainer = document.createElement('div');
        enemyContainer.classList.add('enemy_toggle_container');
        enemyContainer.id = enemy + '_toggle';

        const img1 = document.createElement('img');
        img1.src = 'images/Boxes/enemy_stat.png';
        img1.classList.add('enemy_toggle_btn1');
        img1.id = enemy + '_toggle1';
        img1.loading = "lazy";


        const img2 = document.createElement('img');
        img2.src = 'images/Boxes/enemy_strategy.png';
        img2.classList.add('enemy_toggle_btn2');
        img2.id = enemy + '_toggle2';
        img2.loading = "lazy";


        enemyContainer.appendChild(img1);
        enemyContainer.appendChild(img2);

        RuinsToggleContainer.appendChild(enemyContainer);
    });

    wealdenemies.forEach((enemy) => {
        const enemyContainer = document.createElement('div');
        enemyContainer.classList.add('enemy_toggle_container');
        enemyContainer.id = enemy + '_toggle';

        const img1 = document.createElement('img');
        img1.src = 'images/Boxes/enemy_stat.png';
        img1.classList.add('enemy_toggle_btn1');
        img1.id = enemy + '_toggle1';
        img1.loading = "lazy";

        const img2 = document.createElement('img');
        img2.src = 'images/Boxes/enemy_strategy.png';
        img2.classList.add('enemy_toggle_btn2');
        img2.id = enemy + '_toggle2';
        img2.loading = "lazy";

        enemyContainer.appendChild(img1);
        enemyContainer.appendChild(img2);

        WealdToggleContainer.appendChild(enemyContainer);
    });

    warrenenemies.forEach((enemy) => {
        const enemyContainer = document.createElement('div');
        enemyContainer.classList.add('enemy_toggle_container');
        enemyContainer.id = enemy + '_toggle';

        const img1 = document.createElement('img');
        img1.src = 'images/Boxes/enemy_stat.png';
        img1.classList.add('enemy_toggle_btn1');
        img1.id = enemy + '_toggle1';
        img1.loading = "lazy";

        const img2 = document.createElement('img');
        img2.src = 'images/Boxes/enemy_strategy.png';
        img2.classList.add('enemy_toggle_btn2');
        img2.id = enemy + '_toggle2';
        img2.loading = "lazy";

        enemyContainer.appendChild(img1);
        enemyContainer.appendChild(img2);

        WarrensToggleContainer.appendChild(enemyContainer);
    });

    coveenemies.forEach((enemy) => {
        const enemyContainer = document.createElement('div');
        enemyContainer.classList.add('enemy_toggle_container');
        enemyContainer.id = enemy + '_toggle';

        const img1 = document.createElement('img');
        img1.src = 'images/Boxes/enemy_stat.png';
        img1.classList.add('enemy_toggle_btn1');
        img1.id = enemy + '_toggle1';
        img1.loading = "lazy";

        const img2 = document.createElement('img');
        img2.src = 'images/Boxes/enemy_strategy.png';
        img2.classList.add('enemy_toggle_btn2');
        img2.id = enemy + '_toggle2';
        img2.loading = "lazy";

        enemyContainer.appendChild(img1);
        enemyContainer.appendChild(img2);

        CoveToggleContainer.appendChild(enemyContainer);
    });

    sharedenemies.forEach((enemy) => {
        const enemyContainer = document.createElement('div');
        enemyContainer.classList.add('enemy_toggle_container');
        enemyContainer.id = enemy + '_toggle';

        const img1 = document.createElement('img');
        img1.src = 'images/Boxes/enemy_stat.png';
        img1.classList.add('enemy_toggle_btn1');
        img1.id = enemy + '_toggle1';
        img1.loading = "lazy";

        const img2 = document.createElement('img');
        img2.src = 'images/Boxes/enemy_strategy.png';
        img2.classList.add('enemy_toggle_btn2');
        img2.id = enemy + '_toggle2';
        img2.loading = "lazy";

        enemyContainer.appendChild(img1);
        enemyContainer.appendChild(img2);

        SharedToggleContainer.appendChild(enemyContainer);
    });
}


generateEnemyToggle();


const ruinsenemyNumbersData = [

//Bone Soldier

    [
        'Unholy <br><br> 10 / *12 <br>',
        '2 <br>0 <br> 15% <br>',
        '25%  <br> 10% <br> 20%',
        '200% <br> 15% <br> No'
    ],
 
    [
        'Unholy <br><br> 14 / *17 <br>',
        '3 <br> 8.75 <br> 25% <br>',
        '45%  <br> 30% <br> 40%',
        '220% <br> 35% <br> Yes'
    ],
     
    [
        'Unholy <br><br> 20 / *24 <br>',
        '4 <br> 21.25 <br> 15% <br>',
        '65%  <br> 50% <br> 60%',
        '240% <br> 55% <br> Yes'
    ],

//Bone Defender
     
    [
        'Unholy <br><br> 15 / *18 <br>',
        '0 <br> 0 <br> 25% <br>',
        '25%  <br> 10% <br> 50%',
        '200% <br> 15% <br> No'
    ],

     
    [
        'Unholy <br><br> 21 / *26 <br>',
        '1 <br> 8.75 <br> 45% <br>',
        '45%  <br> 30% <br> 70%',
        '220% <br> 35% <br> No'
    ],

     
    [
        'Unholy <br><br> 29 / *35 <br>',
        '2 <br> 21.25 <br> 45% <br>',
        '65%  <br> 50% <br> 90%',
        '240% <br> 55% <br> No'
    ],

//Bone Arbalest
     
    [
        'Unholy <br><br> 15 / *18 <br>',
        '5 <br> 5 <br> 0% <br>',
        '10%  <br> 10% <br> 25%',
        '200% <br> 15% <br> No'
    ],

     
    [
        'Unholy <br><br> 21 / *26 <br>',
        '6 <br> 13.75 <br> 0% <br>',
        '30%  <br> 30% <br> 55%',
        '220% <br> 35% <br> No'
    ],

     
    [
        'Unholy <br><br> 29 / *35 <br>',
        '7 <br> 26.25 <br> 0% <br>',
        '50%  <br> 50% <br> 75%',
        '240% <br> 55% <br> No'
    ],

//Bone Courtier
     
    [
        'Unholy <br><br> 10 / *12 <br>',
        '8 <br> 12.5 <br> 0% <br>',
        '10%  <br> 10% <br> 10%',
        '200% <br> 15% <br> No'
    ],

     
    [
        'Unholy <br><br> 14 / *17 <br>',
        '9 <br> 21.25 <br> 0% <br>',
        '30%  <br> 30% <br> 30%',
        '220% <br> 35% <br> No'
    ],

     
    [
        'Unholy <br><br> 20 / *24 <br>',
        '10 <br> 33.75 <br> 0% <br>',
        '50%  <br> 50% <br> 50%',
        '240% <br> 55% <br> No'
    ],

//Bone Spearman
     
    [
        'Unholy <br><br> 21 / *26 <br>',
        '4 <br> 8.75 <br> 0% <br>',
        '45%  <br> 30% <br> 45%',
        '220% <br> 35% <br> No'
    ],

     
    [
        'Unholy <br><br> 29 / *35 <br>',
        '5 <br> 21.25 <br> 0% <br>',
        '65%  <br> 50% <br> 65%',
        '240% <br> 55% <br> No'
    ],

//Bone Captain
     
    [
        'Unholy <br><br> 49 / *59 <br>',
        '1 <br> 8.75 <br> 33% <br>',
        '70%  <br> 30% <br> 95%',
        '220% <br> 40% <br> No'
    ],

     
    [
        'Unholy <br><br> 68 / *82 <br>',
        '2 <br> 21.25 <br> 33% <br>',
        '90%  <br> 50% <br> 115%',
        '240% <br> 60% <br> No'
    ],

//Bone Bearer

    [
        'Unholy <br><br> 43 / *52 <br>',
        '7 <br> 34.25 <br> 15% <br>',
        '240%  <br> 70% <br> 55%',
        '240% <br> 55% <br> No'
    ],
]

const wealdenemyNumbersData = [
    //Fungal Scratcher
    [
        'Human /<br> Eldritch <br> 19 / *23 <br>',
        '0 <br> 0 <br> 33% <br>',
        '25%  <br> 60% <br> 25%',
        '20% <br> 15% <br> No'
    ],
    [
        'Human /<br> Eldritch <br> 27 / *33 <br>',
        '1 <br> 8.75 <br> 50% <br>',
        '45%  <br> 80% <br> 45%',
        '40% <br> 35% <br> No'
    ],
    [
        'Human /<br> Eldritch <br> 37 / *45  <br>',
        '2 <br> 21.25 <br> 50% <br>',
        '65%  <br> 100% <br> 65%',
        '60% <br> 55% <br> No'
    ],
//Fungal Artillery


    [
        'Human /<br> Eldritch <br> 14 / *17 <br>',
        '2 <br> 5 <br> 15% <br>',
        '25%  <br> 60% <br> 25%',
        '20% <br> 15% <br> No'
    ],

    [
        'Human /<br> Eldritch <br> 20 / *24 <br>',
        '3 <br> 13.75 <br> 25% <br>',
        '45%  <br> 80% <br> 45%',
        '30% <br> 35% <br> No'
    ],

    [
        'Human /<br> Eldritch <br> 27 / *33 <br>',
        '4 <br> 26.25 <br> 25% <br>',
        '65%  <br> 100% <br> 65%',
        '50% <br> 55% <br> No'
    ],


//Rabid Gnasher

    [
        'Beast <br><br> 10 / *12 <br>',
        '8 <br> 15 <br> 0% <br>',
        '10%  <br> 60% <br> 10%',
        '20% <br> 10% <br> No'
    ],

    [
        'Beast <br><br> 14 / *17 <br>',
        '9 <br> 23.75 <br> 0% <br>',
        '30%  <br> 80% <br> 30%',
        '40% <br> 30% <br> No'
    ],

    [
        'Beast <br><br> 20 / *24 <br>',
        '10 <br> 36.25 <br> 0% <br>',
        '50%  <br> 100% <br> 50%',
        '60% <br> 50% <br> No'
    ],

//Ectoplasm

    [
        'Eldritch <br><br> 8 / *10 <br>',
        '1 <br> 0 <br> 0% <br>',
        '50%  <br> 60% <br> 25%',
        '60% <br> 40% <br> No'
    ],

    [
        'Eldritch <br><br> 11 / *14 <br>',
        '2 <br> 8.75 <br> 0% <br>',
        '70%  <br> 80% <br> 45%',
        '80% <br> 60% <br> No'
    ],

    [
        'Eldritch <br><br> 16 / *20 <br>',
        '3 <br> 21.25 <br> 0% <br>',
        '90%  <br> 100% <br> 65%',
        '100% <br> 80% <br> No'
    ],

//Large Ectoplasm

    [
        'Eldritch <br><br> 35 / *42 <br>',
        '1 <br> 0 <br> 20% <br>',
        '75%  <br> 60% <br> 50%',
        '60% <br> 40% <br> No'
    ],

    [
        'Eldritch <br><br> 49 / *59 <br>',
        '2 <br> 8.75 <br> 33% <br>',
        '95%  <br> 80% <br> 70%',
        '80% <br> 60% <br> No'
    ],

    [
        'Eldritch <br><br> 68 / *82 <br>',
        '3 <br> 21.25 <br> 33% <br>',
        '115%  <br> 100% <br> 90%',
        '100% <br> 80% <br> No'
    ],

//Crone

    [
        'Human<br><br> 18 / *22 <br>',
        '9 <br> 28.75 <br> 0% <br>',
        '30%  <br> 60% <br> 30%',
        '40% <br> 60% <br> Yes'
    ],

    [
        'Human<br><br> 25 / *30 <br>',
        '10 <br> 41.25 <br> 0% <br>',
        '50%  <br> 80% <br> 50%',
        '60% <br> 80% <br> Yes'
    ],

//Giant

[
    'Human /<br>Beast<br> 98 / *118 <br>',
    '1 <br>8.75 <br> 0% <br>',
    '70%  <br> 80% <br> 95%',
    '40% <br> 60% <br> No'
],
[
    'Human /<br>Beast<br> 137 / *165 <br>',
    '2 <br>21.25 <br> 0% <br>',
    '90%  <br> 100% <br> 115%',
    '60% <br> 80% <br> No'
],

//Virago

    [
        'Human <br><br> 55 / *66 <br>',
        '10 <br> 46.25 <br> 7% <br>',
        '240%  <br> 140% <br> 70%',
        '80% <br> 110% <br> No'
    ],

//Fungus

    [
        'Eldritch <br><br> 31 / *38 <br>',
        '3 <br> 0 <br> 0% <br>',
        '240%  <br> 80% <br> 120%',
        '80% <br> 140% <br> No'
    ],
]

const warrensenemyNumbersData = [
//Chopper
    [
        'Human /<br>Beast<br> 21 / *26 <br>',
        '3 <br>0 <br> 15% <br>',
        '25%  <br> 60% <br> 50%',
        '20% <br> 15% <br> No'
    ],
    [
        'Human /<br>Beast<br> 29 / *35 <br>',
        '4 <br>8.75 <br> 33% <br>',
        '45%  <br> 80% <br> 70%',
        '40% <br> 35% <br> No'
    ],
    [
        'Human /<br>Beast<br> 41 / *50  <br>',
        '5 <br>21.25 <br> 33% <br>',
        '65%  <br> 100% <br> 90%',
        '60% <br> 55% <br> No'
    ],
//Wretch


    [
        'Beast<br><br> 12 / *15 <br>',
        '8 <br>12.5 <br> 0% <br>',
        '10%  <br> 40% <br> 0%',
        '10% <br> 15% <br> No'
    ],

    [
        'Beast<br><br> 17 / *21 <br>',
        '9 <br>21.25 <br> 0% <br>',
        '30%  <br> 60% <br> 20%',
        '30% <br> 35% <br> No'
    ],

    [
        'Beast<br><br> 23 / *28 <br>',
        '10 <br>33.75 <br> 0% <br>',
        '50%  <br> 80% <br> 40%',
        '50% <br> 55% <br> No'
    ],


//Drummer

    [
        'Human /<br>Beast<br> 15 / *18 <br>',
        '7 <br>0 <br> 0% <br>',
        '10%  <br> 40% <br> 25%',
        '20% <br> 15% <br> No'
    ],

    [
        'Human /<br>Beast<br> 21 / *26 <br>',
        '8 <br>8.75 <br> 0% <br>',
        '30%  <br> 60% <br> 45%',
        '40% <br> 35% <br> No'
    ],

    [
        'Human /<br>Beast<br> 29 / *35 <br>',
        '9 <br> 21.25 <br> 0% <br>',
        '50%  <br> 80% <br> 65%',
        '60% <br> 55% <br> No'
    ],

//Slasher

    [
        'Human /<br>Beast<br> 8 / *10 <br>',
        '5 <br>7.5 <br> 25% <br>',
        '10%  <br> 40% <br> 25%',
        '40% <br> 15% <br> No'
    ],

    [
        'Human /<br>Beast<br> 11 / *14 <br>',
        '6 <br>16.25 <br> 40% <br>',
        '30%  <br> 60% <br> 45%',
        '60% <br> 35% <br> Yes'
    ],

    [
        'Human /<br>Beast<br> 16 / *20 <br>',
        '7 <br>28.75 <br> 40% <br>',
        '50%  <br> 80% <br> 65%',
        '80% <br> 55% <br> Yes'
    ],

//Carrion Eater

    [
        'Beast<br><br> 11 / *14 <br>',
        '4 <br>0 <br> 0% <br>',
        '50%  <br> 100% <br> 50%',
        '60% <br> 40% <br> No'
    ],

    [
        'Beast<br><br> 15 / *18 <br>',
        '5 <br>8.75 <br> 0% <br>',
        '70%  <br> 120% <br> 70%',
        '80% <br> 60% <br> No'
    ],

    [
        'Beast<br><br> 21 / *26 <br>',
        '6 <br>21.25 <br> 0% <br>',
        '90%  <br> 140% <br> 90%',
        '100% <br> 80% <br> No'
    ],

//Large Carrion Eater

    [
        'Beast<br><br> 52 / *58 <br>',
        '2 <br>8.75 <br> 15% <br>',
        '70%  <br> 120% <br> 95%',
        '80% <br> 60% <br> No'
    ],

    [
        'Beast<br><br> 72 / *87 <br>',
        '3 <br>21.25 <br> 15% <br>',
        '90%  <br> 140% <br> 115%',
        '100% <br> 80% <br> No'
    ],

//Swinetaur

[
    'Human /<br>Beast<br> 63 / *76 <br>',
    '1 <br>8.75 <br> 40% <br>',
    '95%  <br> 80% <br> 120%',
    '40% <br> 40% <br> No'
],
[
    'Human /<br>Beast<br> 88 / *106 <br>',
    '2 <br>21.25 <br> 40% <br>',
    '115%  <br> 100% <br> 140%',
    '60% <br> 60% <br> No'
],

//Skiver

    [
        'Human /<br>Beast<br> 49 / *59 <br>',
        '9 <br>31.25 <br> 15% <br>',
        '85%  <br> 100% <br> 65%',
        '60% <br> 70% <br> No'
    ]
];

const coveenemyNumbersData = [
    //Pelagic Grouper
    [
        'Eldritch <br><br> 14 / *17 <br>',
        '6 <br> 5 <br> 0% <br>',
        '10%  <br> 10% <br> 10%',
        '50% <br> 10% <br> No'
    ],
    [
        'Eldritch <br><br> 20 / *24 <br>',
        '7 <br> 13.75 <br> 0% <br>',
        '30%  <br> 30% <br> 30%',
        '70% <br> 30% <br> No'
    ],
    [
        'Eldritch <br><br> 27 / *33  <br>',
        '8 <br> 26.25 <br> 0% <br>',
        '50%  <br> 50% <br> 50%',
        '90% <br> 50% <br> No'
    ],
//Pelagic Guardian


    [
        'Eldritch <br><br> 25 / *30 <br>',
        '0 <br> 0 <br> 33% <br>',
        '25%  <br> 10% <br> 50%',
        '60% <br> 10% <br> No'
    ],

    [
        'Eldritch <br><br> 35 / *42 <br>',
        '1 <br> 8.75 <br> 50% <br>',
        '45%  <br> 30% <br> 70%',
        '80% <br> 35% <br> No'
    ],

    [
        'Eldritch <br><br> 49 / *59 <br>',
        '2 <br> 21.25 <br> 50% <br>',
        '65%  <br> 50% <br> 90%',
        '100% <br> 55% <br> No'
    ],


//Pelagic Shaman

    [
        'Eldritch <br><br> 12 / *15 <br>',
        '10 <br> 7.5 <br> 0% <br>',
        '10%  <br> 10% <br> 10%',
        '50% <br> 20% <br> No'
    ],

    [
        'Eldritch <br><br> 17 / *21 <br>',
        '11 <br> 16.25 <br> 0% <br>',
        '30%  <br> 30% <br> 30%',
        '70% <br> 40% <br> Yes'
    ],

    [
        'Eldritch <br><br> 23 / *28 <br>',
        '12 <br> 28.75 <br> 0% <br>',
        '50%  <br> 50% <br> 50%',
        '90% <br> 60% <br> Yes'
    ],

//Deep Stinger

    [
        'Eldritch <br><br> 10 / *12 <br>',
        '7 <br> 12.5 <br> 0% <br>',
        '50%  <br> 10% <br> 10%',
        '50% <br> 10% <br> No'
    ],

    [
        'Eldritch <br><br> 14 / *17 <br>',
        '8 <br> 21.25 <br> 0% <br>',
        '70%  <br> 30% <br> 30%',
        '70% <br> 30% <br> No'
    ],

    [
        'Eldritch <br><br> 20 / *24 <br>',
        '9 <br> 33.75 <br> 0% <br>',
        '90%  <br> 50% <br> 50%',
        '90% <br> 50% <br> No'
    ],

//Drowned Thrall 

    [
        'Eldritch /<br> Unholy <br> 14 / *17 <br>',
        '0 <br> 0 <br> 0% <br>',
        '50%  <br> 10% <br> 25%',
        '20% <br> 10% <br> No'
    ],

    [
        'Eldritch /<br> Unholy <br> 20 / *24 <br>',
        '1 <br> 8.75 <br> 0% <br>',
        '70%  <br> 30% <br> 45%',
        '40% <br> 30% <br> No'
    ],

    [
        'Eldritch /<br> Unholy <br> 27 / *33 <br>',
        '2 <br> 21.25 <br> 0% <br>',
        '90%  <br> 50% <br> 65%',
        '60% <br> 50% <br> No'
    ],

//Sea Maggot

    [
        'Eldritch <br><br> 5 / *6 <br>',
        '-5 <br> 0 <br> 75% <br>',
        '50%  <br> 20% <br> 10%',
        '40% <br> 10% <br> No'
    ],

    [
        'Eldritch <br><br> 7 / *9 <br>',
        '-4 <br> 8.75 <br> 75% <br>',
        '70%  <br> 40% <br> 30%',
        '60% <br> 30% <br> No'
    ],

    [
        'Eldritch <br><br> 10 / *12 <br>',
        '-3 <br> 21.25 <br> 75% <br>',
        '90%  <br> 60% <br> 50%',
        '80% <br> 50% <br> No'
    ],

//Uca Crusher

[
    'Eldritch <br><br> 59 / *71 <br>',
    '1 <br> 8.75 <br> 50% <br>',
    '70%  <br> 30% <br> 70%',
    '80% <br> 40% <br> No'
],
[
    'Eldritch <br><br> 82 / *99 <br>',
    '2 <br> 21.25 <br> 50% <br>',
    '90%  <br> 50% <br> 90%',
    '100% <br> 60% <br> No'
],

//Squiffy Ghast

    [
        'Unholy <br><br> 53 / *64 <br>',
        '8 <br>32.25 <br> 0% <br>',
        '110%  <br> 55% <br> 45%',
        '140% <br> 55% <br> No'
    ],
]

const sharedenemyNumbersData = [

//Brigand Cutthroat
    [
        'Human <br><br> 12 / *15 <br>',
        '3 <br> 2.5 <br> 15% <br>',
        '25%  <br> 20% <br> 25%',
        '20% <br> 15% <br> No'
    ],

    [
        'Human <br><br> 17 / *21 <br>',
        '4 <br> 11.25 <br> 25% <br>',
        '45%  <br> 40% <br> 70%',
        '40% <br> 35% <br> No'
    ],

    [
        'Human <br><br> 23 / *28  <br>',
        '5 <br> 23.75 <br> 25% <br>',
        '65%  <br> 60% <br> 65%',
        '60% <br> 55% <br> No'
    ],

//Brigand Bloodletter


    [
        'Human <br><br> 35 / *42 <br>',
        '1 <br> 0 <br> 0% <br>',
        '50%  <br> 20% <br> 75%',
        '20% <br> 15% <br> No'
    ],

    [
        'Human <br><br> 49 / *59 <br>',
        '2 <br> 8.75 <br> 0% <br>',
        '70%  <br> 40% <br> 95%',
        '40% <br> 35% <br> No'
    ],

    [
        'Human <br><br> 68 / *82 <br>',
        '3 <br> 21.25 <br> 0% <br>',
        '90%  <br> 60% <br> 115%',
        '60% <br> 55% <br> No'
    ],


//Brigand Fusilier

    [
        'Human <br><br> 12 / *15 <br>',
        '6 <br> 2.5 <br> 0% <br>',
        '25%  <br> 20% <br> 25%',
        '20% <br> 15% <br> No'
    ],

    [
        'Human <br><br> 17 / *21 <br>',
        '7 <br> 11.25 <br> 0% <br>',
        '45%  <br> 40% <br> 70%',
        '40% <br> 35% <br> Yes'
    ],

    [
        'Human <br><br> 23 / *28  <br>',
        '8 <br> 23.75 <br> 0% <br>',
        '65%  <br> 60% <br> 65%',
        '60% <br> 55% <br> Yes'
    ],

//Cultist Brawler

    [
        'Human <br><br> 15 / *18 <br>',
        '5 <br> 0 <br> 0% <br>',
        '25%  <br> 20% <br> 25%',
        '20% <br> 15% <br> No'
    ],

    [
        'Human <br><br> 21 / *26 <br>',
        '6 <br> 8.75 <br> 40% <br>',
        '45%  <br> 40% <br> 45%',
        '40% <br> 35% <br> No'
    ],

    [
        'Human <br><br> 29 / *35 <br>',
        '7 <br> 21.25 <br> 40% <br>',
        '65%  <br> 60% <br> 65%',
        '60% <br> 55% <br> No'
    ],

//Cultist Acolyte

    [
        'Human <br><br> 13 / *17 <br>',
        '7 <br> 12.5 <br> 0% <br>',
        '25%  <br> 20% <br> 10%',
        '20% <br> 40% <br> No'
    ],

    [
        'Human <br><br> 18 / *22 <br>',
        '8 <br> 21.25 <br> 0% <br>',
        '45%  <br> 40% <br> 30%',
        '40% <br> 60% <br> No'
    ],

    [
        'Human <br><br> 25 / *30 <br>',
        '9 <br> 33.75 <br> 0% <br>',
        '65%  <br> 60% <br> 50%',
        '60% <br> 80% <br> No'
    ],

//Madman

    [
        'Human <br><br> 14 / *17 <br>',
        '9 <br> 20 <br> 0% <br>',
        '10%  <br> 10% <br> 10%',
        '10% <br> 15% <br> No'
    ],

    [
        'Human <br><br> 20 / *24 <br>',
        '10 <br> 28.75 <br> 0% <br>',
        '30%  <br> 30% <br> 30%',
        '30% <br> 35% <br> Yes'
    ],

    [
        'Human <br><br> 27 / *33 <br>',
        '11 <br> 41.25 <br> 0% <br>',
        '50%  <br> 50% <br> 50%',
        '50% <br> 55% <br> Yes'
    ],

//Webber

    [
        'Beast<br><br> 7 / *9 <br>',
        '5 <br> 15 <br> 0% <br>',
        '25%  <br> 20% <br> 10%',
        '20% <br> 10% <br> No'
    ],

    [
        'Beast<br><br> 10 / *12 <br>',
        '6 <br> 23.75 <br> 0% <br>',
        '45%  <br> 40% <br> 30%',
        '40% <br> 30% <br> No'
    ],

    [
        'Beast<br><br> 14 / *17 <br>',
        '7 <br> 36.25 <br> 0% <br>',
        '65%  <br> 60% <br> 50%',
        '60% <br> 50% <br> No'
    ],

//Spitter

    [
        'Beast<br><br> 7 / *9 <br>',
        '4 <br> 15 <br> 0% <br>',
        '25%  <br> 20% <br> 10%',
        '20% <br> 10% <br> No'
    ],

    [
        'Beast<br><br> 10 / *12 <br>',
        '5 <br> 23.75 <br> 0% <br>',
        '45%  <br> 40% <br> 30%',
        '40% <br> 30% <br> No'
    ],

    [
        'Beast<br><br> 14 / *17 <br>',
        '6 <br> 36.25 <br> 0% <br>',
        '65%  <br> 60% <br> 50%',
        '60% <br> 50% <br> No'
    ],

//Maggot

    [
        'Beast<br><br> 6 / *8 <br>',
        '3 <br> 0 <br> 0% <br>',
        '100%  <br> 40% <br> 0%',
        '40% <br> 60% <br> No'
    ],

    [
        'Beast<br><br> 8 / *10 <br>',
        '4 <br> 8.75 <br> 0% <br>',
        '120%  <br> 60% <br> 20%',
        '60% <br> 80% <br> No'
    ],

    [
        'Beast<br><br> 12 / *15 <br>',
        '5 <br> 21.25 <br> 0% <br>',
        '140%  <br> 80% <br> 40%',
        '80% <br> 100% <br> No'
    ],

//Bone Rabble

    [
        'Unholy <br><br> 8 / *10 <br>',
        '1 <br> 0 <br> 0% <br>',
        '10%  <br> 10% <br> 10%',
        '200% <br> 15% <br> No'
    ],

     
    [
        'Unholy <br><br> 11 / *14 <br>',
        '2 <br> 8.75 <br> 0% <br>',
        '30%  <br> 30% <br> 30%',
        '220% <br> 35% <br> No'
    ],

     
    [
        'Unholy <br><br> 16 / *20 <br>',
        '3 <br> 21.25 <br> 0% <br>',
        '50%  <br> 50% <br> 50%',
        '240% <br> 55% <br> No'
    ],

//Gargoyle
     
    [
        'Stonework <br> Unholy <br> 10 / *12 <br>',
        '9 <br> 16.25 <br> 50% <br>',
        '30%  <br> 40% <br> 30%',
        '120% <br> 35% <br> No'
    ],

     
    [
        'Stonework <br> Unholy <br> 14 / *17 <br>',
        '10 <br> 28.75 <br> 50% <br>',
        '50%  <br> 60% <br> 50%',
        '140% <br> 55% <br> No'
    ],

//Ghoul

    [
        'Unholy <br><br> 41 / *50 <br>',
        '6 <br> 13.75 <br> 40% <br>',
        '70%  <br> 40% <br> 82%',
        '40% <br> 40% <br> No'
    ],

    [
        'Unholy <br><br> 57 / *69 <br>',
        '7 <br> 26.25 <br> 40% <br>',
        '90%  <br> 60% <br> 102%',
        '60% <br> 60% <br> No'
    ],

//Brigand Raider

    [
        'Human <br><br> 25 / *30 <br>',
        '5 <br> 26.25 <br> 25% <br>',
        '72.5%  <br> 67.5% <br> 73%',
        '67.5% <br> 62.5% <br> No'
    ],

//Brigand Hunter

    [
        'Human <br><br> 25 / *30 <br>',
        '8 <br> 31.25 <br> 0% <br>',
        '72.5%  <br> 67.5% <br> 73%',
        '67.5% <br> 62.5% <br> Yes'
    ],
]

// Function to create an enemy numbers container
function createEnemyNumbersContainer(id, numbers) {
    const container = document.createElement('div');
    container.id = id;
    container.classList.add('nondisplay')

    numbers.forEach((number, index) => {
        const div = document.createElement('div');
        div.className = `enemy_numbers${index + 1} `;
        div.innerHTML = number;
        container.appendChild(div);
    });

    return container;
}

//Ruins Numbers

const boneSoldierAppNumbers = createEnemyNumbersContainer('bone_soldier_app_numbers', ruinsenemyNumbersData[0]);
const boneSoldierVetNumbers = createEnemyNumbersContainer('bone_soldier_vet_numbers', ruinsenemyNumbersData[1]);
const boneSoldierChampNumbers = createEnemyNumbersContainer('bone_soldier_champ_numbers', ruinsenemyNumbersData[2]);

const boneDefenderAppNumbers = createEnemyNumbersContainer('bone_defender_app_numbers', ruinsenemyNumbersData[3]);
const boneDefenderVetNumbers = createEnemyNumbersContainer('bone_defender_vet_numbers', ruinsenemyNumbersData[4]);
const boneDefenderChampNumbers = createEnemyNumbersContainer('bone_defender_champ_numbers', ruinsenemyNumbersData[5]);

const boneArbalestAppNumbers = createEnemyNumbersContainer('bone_arbalest_app_numbers', ruinsenemyNumbersData[6]);
const boneArbalestVetNumbers = createEnemyNumbersContainer('bone_arbalest_vet_numbers', ruinsenemyNumbersData[7]);
const boneArbalestChampNumbers = createEnemyNumbersContainer('bone_arbalest_champ_numbers', ruinsenemyNumbersData[8]);

const boneCourtierAppNumbers = createEnemyNumbersContainer('bone_courtier_app_numbers', ruinsenemyNumbersData[9]);
const boneCourtierVetNumbers = createEnemyNumbersContainer('bone_courtier_vet_numbers', ruinsenemyNumbersData[10]);
const boneCourtierChampNumbers = createEnemyNumbersContainer('bone_courtier_champ_numbers', ruinsenemyNumbersData[11]);

const boneSpearmanVetNumbers = createEnemyNumbersContainer('bone_spearman_vet_numbers', ruinsenemyNumbersData[12]);
const boneSpearmanChampNumbers = createEnemyNumbersContainer('bone_spearman_champ_numbers', ruinsenemyNumbersData[13]);

const boneCaptainVetNumbers = createEnemyNumbersContainer('bone_captain_vet_numbers', ruinsenemyNumbersData[14]);
const boneCaptainChampNumbers = createEnemyNumbersContainer('bone_captain_champ_numbers', ruinsenemyNumbersData[15]);

const boneBearerChampNumbers = createEnemyNumbersContainer('bone_bearer_champ_numbers', ruinsenemyNumbersData[16]);

//Weald Numbers

const fungalScratcherAppNumbers = createEnemyNumbersContainer('fungal_scratcher_app_numbers',wealdenemyNumbersData[0]);
const fungalScratcherVetNumbers = createEnemyNumbersContainer('fungal_scratcher_vet_numbers', wealdenemyNumbersData[1]);
const fungalScratcherChampNumbers = createEnemyNumbersContainer('fungal_scratcher_champ_numbers', wealdenemyNumbersData[2]);

const fungalArtilleryAppNumbers = createEnemyNumbersContainer('fungal_artillery_app_numbers', wealdenemyNumbersData[3]);
const fungalArtilleryVetNumbers = createEnemyNumbersContainer('fungal_artillery_vet_numbers', wealdenemyNumbersData[4]);
const fungalArtilleryChampNumbers = createEnemyNumbersContainer('fungal_artillery_champ_numbers', wealdenemyNumbersData[5]);

const rabidGnasherAppNumbers = createEnemyNumbersContainer('rabid_gnasher_app_numbers', wealdenemyNumbersData[6]);
const rabidGnasherVetNumbers = createEnemyNumbersContainer('rabid_gnasher_vet_numbers', wealdenemyNumbersData[7]);
const rabidGnasherChampNumbers = createEnemyNumbersContainer('rabid_gnasher_champ_numbers', wealdenemyNumbersData[8]);

const ectoplasmAppNumbers = createEnemyNumbersContainer('ectoplasm_app_numbers', wealdenemyNumbersData[9]);
const ectoplasmVetNumbers = createEnemyNumbersContainer('ectoplasm_vet_numbers', wealdenemyNumbersData[10]);
const ectoplasmChampNumbers = createEnemyNumbersContainer('ectoplasm_champ_numbers', wealdenemyNumbersData[11]);

const largeEctoplasmAppNumbers = createEnemyNumbersContainer('large_ectoplasm_app_numbers', wealdenemyNumbersData[12]);
const largeEctoplasmVetNumbers = createEnemyNumbersContainer('large_ectoplasm_vet_numbers', wealdenemyNumbersData[13]);
const largeEctoplasmChampNumbers = createEnemyNumbersContainer('large_ectoplasm_champ_numbers', wealdenemyNumbersData[14]);

const croneVetNumbers = createEnemyNumbersContainer('crone_vet_numbers', wealdenemyNumbersData[15]);
const croneChampNumbers = createEnemyNumbersContainer('crone_champ_numbers', wealdenemyNumbersData[16]);

const uncleanGiantVetNumbers = createEnemyNumbersContainer('unclean_giant_vet_numbers', wealdenemyNumbersData[17]);
const uncleanGiantChampNumbers = createEnemyNumbersContainer('unclean_giant_champ_numbers', wealdenemyNumbersData[18]);

const hatefulViragoChampNumbers = createEnemyNumbersContainer('hateful_virago_champ_numbers', wealdenemyNumbersData[19]);
const necroticFungusChampNumbers = createEnemyNumbersContainer('necrotic_fungus_champ_numbers', wealdenemyNumbersData[20]);

//Warrens Numbers

const swineChopperAppNumbers = createEnemyNumbersContainer('swine_chopper_app_numbers', warrensenemyNumbersData[0]);
const swineChopperVetNumbers = createEnemyNumbersContainer('swine_chopper_vet_numbers', warrensenemyNumbersData[1]);
const swineChopperChampNumbers = createEnemyNumbersContainer('swine_chopper_champ_numbers', warrensenemyNumbersData[2]);

const swineWretchAppNumbers = createEnemyNumbersContainer('swine_wretch_app_numbers', warrensenemyNumbersData[3]);
const swineWretchVetNumbers = createEnemyNumbersContainer('swine_wretch_vet_numbers', warrensenemyNumbersData[4]);
const swineWretchChampNumbers = createEnemyNumbersContainer('swine_wretch_champ_numbers', warrensenemyNumbersData[5]);

const swineDrummerAppNumbers = createEnemyNumbersContainer('swine_drummer_app_numbers', warrensenemyNumbersData[6]);
const swineDrummerVetNumbers = createEnemyNumbersContainer('swine_drummer_vet_numbers', warrensenemyNumbersData[7]);
const swineDrummerChampNumbers = createEnemyNumbersContainer('swine_drummer_champ_numbers', warrensenemyNumbersData[8]);

const swineSlasherAppNumbers = createEnemyNumbersContainer('swine_slasher_app_numbers', warrensenemyNumbersData[9]);
const swineSlasherVetNumbers = createEnemyNumbersContainer('swine_slasher_vet_numbers', warrensenemyNumbersData[10]);
const swineSlasherChampNumbers = createEnemyNumbersContainer('swine_slasher_champ_numbers', warrensenemyNumbersData[11]);

const carrionEaterAppNumbers = createEnemyNumbersContainer('carrion_eater_app_numbers', warrensenemyNumbersData[12]);
const carrionEaterVetNumbers = createEnemyNumbersContainer('carrion_eater_vet_numbers', warrensenemyNumbersData[13]);
const carrionEaterChampNumbers = createEnemyNumbersContainer('carrion_eater_champ_numbers', warrensenemyNumbersData[14]);

const largeCarrionEaterVetNumbers = createEnemyNumbersContainer('large_carrion_eater_vet_numbers', warrensenemyNumbersData[15]);
const largeCarrionEaterChampNumbers = createEnemyNumbersContainer('large_carrion_eater_champ_numbers', warrensenemyNumbersData[16]);

const swinetaurVetNumbers = createEnemyNumbersContainer('swinetaur_vet_numbers', warrensenemyNumbersData[17]);
const swinetaurChampNumbers = createEnemyNumbersContainer('swinetaur_champ_numbers', warrensenemyNumbersData[18]);

const swineSkiverChampNumbers = createEnemyNumbersContainer('swine_skiver_champ_numbers', warrensenemyNumbersData[19]);

//Cove Numbers

const pelagicGrouperAppNumbers = createEnemyNumbersContainer('pelagic_grouper_app_numbers', coveenemyNumbersData[0]);
const pelagicGrouperVetNumbers = createEnemyNumbersContainer('pelagic_grouper_vet_numbers', coveenemyNumbersData[1]);
const pelagicGrouperChampNumbers = createEnemyNumbersContainer('pelagic_grouper_champ_numbers', coveenemyNumbersData[2]);

const pelagicGuardianAppNumbers = createEnemyNumbersContainer('pelagic_guardian_app_numbers', coveenemyNumbersData[3]);
const pelagicGuardianVetNumbers = createEnemyNumbersContainer('pelagic_guardian_vet_numbers', coveenemyNumbersData[4]);
const pelagicGuardianChampNumbers = createEnemyNumbersContainer('pelagic_guardian_champ_numbers', coveenemyNumbersData[5]);

const pelagicShamanAppNumbers = createEnemyNumbersContainer('pelagic_shaman_app_numbers', coveenemyNumbersData[6]);
const pelagicShamanVetNumbers = createEnemyNumbersContainer('pelagic_shaman_vet_numbers', coveenemyNumbersData[7]);
const pelagicShamanChampNumbers = createEnemyNumbersContainer('pelagic_shaman_champ_numbers', coveenemyNumbersData[8]);

const deepStingerAppNumbers = createEnemyNumbersContainer('deep_stinger_app_numbers', coveenemyNumbersData[9]);
const deepStingerVetNumbers = createEnemyNumbersContainer('deep_stinger_vet_numbers', coveenemyNumbersData[10]);
const deepStingerChampNumbers = createEnemyNumbersContainer('deep_stinger_champ_numbers', coveenemyNumbersData[11]);

const drownedThrallAppNumbers = createEnemyNumbersContainer('drowned_thrall_app_numbers', coveenemyNumbersData[12]);
const drownedThrallVetNumbers = createEnemyNumbersContainer('drowned_thrall_vet_numbers', coveenemyNumbersData[13]);
const drownedThrallChampNumbers = createEnemyNumbersContainer('drowned_thrall_champ_numbers', coveenemyNumbersData[14]);

const seaMaggotAppNumbers = createEnemyNumbersContainer('sea_maggot_app_numbers',coveenemyNumbersData[15]);
const seaMaggotVetNumbers = createEnemyNumbersContainer('sea_maggot_vet_numbers', coveenemyNumbersData[16]);
const seaMaggotChampNumbers = createEnemyNumbersContainer('sea_maggot_champ_numbers', coveenemyNumbersData[17]);

const ucaCrusherVetNumbers = createEnemyNumbersContainer('uca_crusher_vet_numbers', coveenemyNumbersData[18]);
const ucaCrusherChampNumbers = createEnemyNumbersContainer('uca_crusher_champ_numbers', coveenemyNumbersData[19]);

const squiffyGhastChampNumbers = createEnemyNumbersContainer('squiffy_ghast_champ_numbers', coveenemyNumbersData[20]);

//Shared Numbers

const brigandCutthroatAppNumbers = createEnemyNumbersContainer('brigand_cutthroat_app_numbers', sharedenemyNumbersData[0]);
const brigandCutthroatVetNumbers = createEnemyNumbersContainer('brigand_cutthroat_vet_numbers', sharedenemyNumbersData[1]);
const brigandCutthroatChampNumbers = createEnemyNumbersContainer('brigand_cutthroat_champ_numbers', sharedenemyNumbersData[2]);

const brigandBloodletterAppNumbers = createEnemyNumbersContainer('brigand_bloodletter_app_numbers', sharedenemyNumbersData[3]);
const brigandBloodletterVetNumbers = createEnemyNumbersContainer('brigand_bloodletter_vet_numbers', sharedenemyNumbersData[4]);
const brigandBloodletterChampNumbers = createEnemyNumbersContainer('brigand_bloodletter_champ_numbers', sharedenemyNumbersData[5]);

const brigandFusilierAppNumbers = createEnemyNumbersContainer('brigand_fusilier_app_numbers', sharedenemyNumbersData[6]);
const brigandFusilierVetNumbers = createEnemyNumbersContainer('brigand_fusilier_vet_numbers', sharedenemyNumbersData[7]);
const brigandFusilierChampNumbers = createEnemyNumbersContainer('brigand_fusilier_champ_numbers', sharedenemyNumbersData[8]);

const cultistBrawlerAppNumbers = createEnemyNumbersContainer('cultist_brawler_app_numbers', sharedenemyNumbersData[9]);
const cultistBrawlerVetNumbers = createEnemyNumbersContainer('cultist_brawler_vet_numbers', sharedenemyNumbersData[10]);
const cultistBrawlerChampNumbers = createEnemyNumbersContainer('cultist_brawler_champ_numbers', sharedenemyNumbersData[11]);

const cultistAcolyteAppNumbers = createEnemyNumbersContainer('cultist_acolyte_app_numbers', sharedenemyNumbersData[12]);
const cultistAcolyteVetNumbers = createEnemyNumbersContainer('cultist_acolyte_vet_numbers', sharedenemyNumbersData[13]);
const cultistAcolyteChampNumbers = createEnemyNumbersContainer('cultist_acolyte_champ_numbers', sharedenemyNumbersData[14]);

const madmanAppNumbers = createEnemyNumbersContainer('madman_app_numbers',sharedenemyNumbersData[15]);
const madmanVetNumbers = createEnemyNumbersContainer('madman_vet_numbers', sharedenemyNumbersData[16]);
const madmanChampNumbers = createEnemyNumbersContainer('madman_champ_numbers', sharedenemyNumbersData[17]);

const webberAppNumbers = createEnemyNumbersContainer('webber_app_numbers', sharedenemyNumbersData[18]);
const webberVetNumbers = createEnemyNumbersContainer('webber_vet_numbers', sharedenemyNumbersData[19]);
const webberChampNumbers = createEnemyNumbersContainer('webber_champ_numbers', sharedenemyNumbersData[20]);

const spitterAppNumbers = createEnemyNumbersContainer('spitter_app_numbers', sharedenemyNumbersData[21]);
const spitterVetNumbers = createEnemyNumbersContainer('spitter_vet_numbers', sharedenemyNumbersData[22]);
const spitterChampNumbers = createEnemyNumbersContainer('spitter_champ_numbers', sharedenemyNumbersData[23]);

const maggotAppNumbers = createEnemyNumbersContainer('maggot_app_numbers', sharedenemyNumbersData[24]);
const maggotVetNumbers = createEnemyNumbersContainer('maggot_vet_numbers', sharedenemyNumbersData[25]);
const maggotChampNumbers = createEnemyNumbersContainer('maggot_champ_numbers', sharedenemyNumbersData[26]);

const boneRabbleAppNumbers = createEnemyNumbersContainer('bone_rabble_app_numbers',sharedenemyNumbersData[27]);
const boneRabbleVetNumbers = createEnemyNumbersContainer('bone_rabble_vet_numbers', sharedenemyNumbersData[28]);
const boneRabbleChampNumbers = createEnemyNumbersContainer('bone_rabble_champ_numbers', sharedenemyNumbersData[29]);

const gargoyleVetNumbers = createEnemyNumbersContainer('gargoyle_vet_numbers', sharedenemyNumbersData[30]);
const gargoyleChampNumbers = createEnemyNumbersContainer('gargoyle_champ_numbers', sharedenemyNumbersData[31]);

const ghoulVetNumbers = createEnemyNumbersContainer('ghoul_vet_numbers', sharedenemyNumbersData[32]);
const ghoulChampNumbers = createEnemyNumbersContainer('ghoul_champ_numbers', sharedenemyNumbersData[33]);

const brigandRaiderDarkestNumbers = createEnemyNumbersContainer('brigand_raider_darkest_numbers', sharedenemyNumbersData[34]);
const brigandHunterDarkestNumbers = createEnemyNumbersContainer('brigand_hunter_darkest_numbers', sharedenemyNumbersData[35]);

//append stats to respective stat containers

RuinsEnemyStats.append(
    boneSoldierAppNumbers,boneSoldierVetNumbers,boneSoldierChampNumbers,
    boneDefenderAppNumbers,boneDefenderVetNumbers,boneDefenderChampNumbers,
    boneArbalestAppNumbers,boneArbalestVetNumbers,boneArbalestChampNumbers,
    boneCourtierAppNumbers,boneCourtierVetNumbers,boneCourtierChampNumbers,
    boneSpearmanVetNumbers,boneSpearmanChampNumbers,
    boneCaptainVetNumbers,boneCaptainChampNumbers,
    boneBearerChampNumbers
);

WealdEnemyStats.append(
    fungalScratcherAppNumbers,fungalScratcherVetNumbers,fungalScratcherChampNumbers,
    fungalArtilleryAppNumbers,fungalArtilleryVetNumbers,fungalArtilleryChampNumbers,
    rabidGnasherAppNumbers,rabidGnasherVetNumbers,rabidGnasherChampNumbers,
    ectoplasmAppNumbers,ectoplasmVetNumbers,ectoplasmChampNumbers,
    largeEctoplasmAppNumbers,largeEctoplasmVetNumbers,largeEctoplasmChampNumbers,
    croneVetNumbers,croneChampNumbers,
    uncleanGiantVetNumbers,uncleanGiantChampNumbers,
    hatefulViragoChampNumbers,
    necroticFungusChampNumbers,
);

WarrensEnemyStats.append(
    swineChopperAppNumbers,swineChopperVetNumbers,swineChopperChampNumbers,
    swineWretchAppNumbers,swineWretchVetNumbers,swineWretchChampNumbers,
    swineDrummerAppNumbers,swineDrummerVetNumbers,swineDrummerChampNumbers,
    swineSlasherAppNumbers,swineSlasherVetNumbers,swineSlasherChampNumbers,
    carrionEaterAppNumbers,carrionEaterVetNumbers,carrionEaterChampNumbers,
    largeCarrionEaterVetNumbers,largeCarrionEaterChampNumbers,
    swinetaurVetNumbers,swinetaurChampNumbers,
    swineSkiverChampNumbers
);

CoveEnemyStats.append(
    pelagicGrouperAppNumbers,pelagicGrouperVetNumbers,pelagicGrouperChampNumbers,
    pelagicGuardianAppNumbers,pelagicGuardianVetNumbers,pelagicGuardianChampNumbers,
    pelagicShamanAppNumbers,pelagicShamanVetNumbers,pelagicShamanChampNumbers,
    deepStingerAppNumbers,deepStingerVetNumbers,deepStingerChampNumbers,
    drownedThrallAppNumbers,drownedThrallVetNumbers,drownedThrallChampNumbers,
    seaMaggotAppNumbers,seaMaggotVetNumbers,seaMaggotChampNumbers,
    ucaCrusherVetNumbers,ucaCrusherChampNumbers,
    squiffyGhastChampNumbers,
);

SharedEnemyStats.append(
    brigandCutthroatAppNumbers,brigandCutthroatVetNumbers,brigandCutthroatChampNumbers,
    brigandBloodletterAppNumbers,brigandBloodletterVetNumbers,brigandBloodletterChampNumbers,
    brigandFusilierAppNumbers,brigandFusilierVetNumbers,brigandFusilierChampNumbers,
    cultistBrawlerAppNumbers,cultistBrawlerVetNumbers,cultistBrawlerChampNumbers,
    cultistAcolyteAppNumbers,cultistAcolyteVetNumbers,cultistAcolyteChampNumbers,
    madmanAppNumbers,madmanVetNumbers,madmanChampNumbers,
    webberAppNumbers,webberVetNumbers,webberChampNumbers,
    spitterAppNumbers,spitterVetNumbers,spitterChampNumbers,
    maggotAppNumbers,maggotVetNumbers,maggotChampNumbers,
    boneRabbleAppNumbers,boneRabbleVetNumbers,boneRabbleChampNumbers,
    gargoyleVetNumbers,gargoyleChampNumbers,
    ghoulVetNumbers,ghoulChampNumbers,
    brigandRaiderDarkestNumbers,
    brigandHunterDarkestNumbers,
)

//skill container creation

function createSkillContainer(id, skills, isApp, isVet, isChamp, isDarkest) {
    const container = document.createElement('div');
    container.classList.add('enemy_skill_container');
    container.id = id;

    skills.forEach(skill => {
        const span = document.createElement('span');
        span.textContent = skill;

        if (isApp) {
            span.id = `app_${skill.toLowerCase().replace(/\s/g, '_')}`;
        } else if (isVet) {
            span.id = `vet_${skill.toLowerCase().replace(/\s/g, '_')}`;
        } else if (isChamp) {
            span.id = `champ_${skill.toLowerCase().replace(/\s/g, '_')}`;
        } else if (isDarkest) {
            span.id = `darkest_${skill.toLowerCase().replace(/\s/g, '_')}`;
        }

        container.appendChild(span);
        container.appendChild(document.createElement('br'));
    });

    return container;
}

//Ruins Enemy Skills

const boneSoldierAppSkills = ['Graveyard Slash', 'Graveyard Stumble']
const boneSoldierVetSkills = ['Graveyard Slash', 'Graveyard Stumble']
const boneSoldierChampSkills = ['Graveyard Slash', 'Graveyard Stumble']

const boneDefenderAppSkills = ['Axeblade', 'Dead Weight', 'Clumsy Axeblade']
const boneDefenderVetSkills = ['Axeblade', 'Dead Weight', 'Clumsy Axeblade', 'Foul Warding']
const boneDefenderChampSkills = ['Axeblade', 'Dead Weight', 'Clumsy Axeblade', 'Foul Warding']

const boneArbalestAppSkills = ['Quarrel', 'Bayonet Jab']
const boneArbalestVetSkills = ['Quarrel', 'Bayonet Jab']
const boneArbalestChampSkills = ['Quarrel', 'Bayonet Jab']

const boneCourtierAppSkills = ['Tempting Goblet', 'Knife in the Dark']
const boneCourtierVetSkills = ['Tempting Goblet', 'Knife in the Dark']
const boneCourtierChampSkills = ['Tempting Goblet', 'Knife in the Dark']

const boneSpearmanVetSkills = ['Spear Thrust', 'Impale']
const boneSpearmanChampSkills = ['Spear Thrust', 'Impale']

const boneCaptainVetSkills = ['Crushing Blow', 'Ground Pound']
const boneCaptainChampSkills = ['Crushing Blow', 'Ground Pound']

const boneBearerChampSkills = ['Defend the Icon', 'Wicked Surge', 'Unholy Rally', 'Bone Bearer Passive']


//Containers for Ruins skills
const boneSoldierAppContainer = createSkillContainer('bone_soldier_skill_app', boneSoldierAppSkills, true, false, false, false);
const boneSoldierVetContainer = createSkillContainer('bone_soldier_skill_vet', boneSoldierVetSkills, false, true, false, false);
const boneSoldierChampContainer = createSkillContainer('bone_soldier_skill_champ', boneSoldierChampSkills, false, false, true, false);

const boneDefenderAppContainer = createSkillContainer('bone_defender_skill_app', boneDefenderAppSkills, true, false, false, false);
const boneDefenderVetContainer = createSkillContainer('bone_defender_skill_vet', boneDefenderVetSkills, false, true, false, false);
const boneDefenderChampContainer = createSkillContainer('bone_defender_skill_champ', boneDefenderChampSkills, false, false, true, false);

const boneArbalestAppContainer = createSkillContainer('bone_arbalest_skill_app', boneArbalestAppSkills, true, false, false, false);
const boneArbalestVetContainer = createSkillContainer('bone_arbalest_skill_vet', boneArbalestVetSkills, false, true, false, false);
const boneArbalestChampContainer = createSkillContainer('bone_arbalest_skill_champ', boneArbalestChampSkills, false, false, true, false);

const boneCourtierAppContainer = createSkillContainer('bone_courtier_skill_app', boneCourtierAppSkills, true, false, false, false);
const boneCourtierVetContainer = createSkillContainer('bone_courtier_skill_vet', boneCourtierVetSkills, false, true, false, false);
const boneCourtierChampContainer = createSkillContainer('bone_courtier_skill_champ', boneCourtierChampSkills, false, false, true, false);

const boneSpearmanVetContainer = createSkillContainer('bone_spearman_skill_vet', boneSpearmanVetSkills, false, true, false, false);
const boneSpearmanChampContainer = createSkillContainer('bone_spearman_skill_champ', boneSpearmanChampSkills, false, false, true, false);

const boneCaptainVetContainer = createSkillContainer('bone_captain_skill_vet', boneCaptainVetSkills, false, true, false, false);
const boneCaptainChampContainer = createSkillContainer('bone_captain_skill_champ', boneCaptainChampSkills, false, false, true, false);

const boneBearerChampContainer = createSkillContainer('bone_bearer_skill_champ', boneBearerChampSkills, false, false, true, false);

//adding ruins skills to main container

RuinsEnemyBox.insertBefore(boneSoldierAppContainer, RuinsEnemyBox.firstChild);
RuinsEnemyBox.insertBefore(boneSoldierVetContainer, RuinsEnemyBox.firstChild);
RuinsEnemyBox.insertBefore(boneSoldierChampContainer, RuinsEnemyBox.firstChild);

RuinsEnemyBox.insertBefore(boneDefenderAppContainer, RuinsEnemyBox.firstChild);
RuinsEnemyBox.insertBefore(boneDefenderVetContainer, RuinsEnemyBox.firstChild);
RuinsEnemyBox.insertBefore(boneDefenderChampContainer, RuinsEnemyBox.firstChild);

RuinsEnemyBox.insertBefore(boneArbalestAppContainer, RuinsEnemyBox.firstChild);
RuinsEnemyBox.insertBefore(boneArbalestVetContainer, RuinsEnemyBox.firstChild);
RuinsEnemyBox.insertBefore(boneArbalestChampContainer, RuinsEnemyBox.firstChild);

RuinsEnemyBox.insertBefore(boneCourtierAppContainer, RuinsEnemyBox.firstChild);
RuinsEnemyBox.insertBefore(boneCourtierVetContainer, RuinsEnemyBox.firstChild);
RuinsEnemyBox.insertBefore(boneCourtierChampContainer, RuinsEnemyBox.firstChild);

RuinsEnemyBox.insertBefore(boneSpearmanVetContainer, RuinsEnemyBox.firstChild);
RuinsEnemyBox.insertBefore(boneSpearmanChampContainer, RuinsEnemyBox.firstChild);

RuinsEnemyBox.insertBefore(boneCaptainVetContainer, RuinsEnemyBox.firstChild);
RuinsEnemyBox.insertBefore(boneCaptainChampContainer, RuinsEnemyBox.firstChild);

RuinsEnemyBox.insertBefore(boneBearerChampContainer, RuinsEnemyBox.firstChild);


//Weald Enemy Skills


const fungalScratcherAppSkills = ['Groping Swipe', 'Rend the Marked', 'Harmless Swipe']
const fungalScratcherVetSkills = ['Groping Swipe', 'Rend the Marked', 'Harmless Swipe']
const fungalScratcherChampSkills = ['Groping Swipe', 'Rend the Marked', 'Harmless Swipe']

const fungalArtilleryAppSkills = ['Mark Prey', 'Rain of Blight', 'Escape Cloud']
const fungalArtilleryVetSkills = ['Mark Prey', 'Rain of Blight', 'Escape Cloud']
const fungalArtilleryChampSkills = ['Mark Prey', 'Rain of Blight', 'Escape Cloud']

const rabidGnasherAppSkills = ['Rabid Rush']
const rabidGnasherVetSkills = ['Rabid Rush']
const rabidGnasherChampSkills = ['Rabid Rush']

const ectoplasmAppSkills = ['Slime', 'Cytokinesis(Small)', 'Ectoplasmic Profusion']
const ectoplasmVetSkills = ['Slime', 'Cytokinesis(Small)', 'Ectoplasmic Profusion']
const ectoplasmChampSkills = ['Slime', 'Cytokinesis(Small)', 'Ectoplasmic Profusion']

const largeEctoplasmAppSkills = ['Big Slime', 'Slimesmack', 'Cytokinesis(Big)', ]
const largeEctoplasmVetSkills = ['Big Slime', 'Slimesmack', 'Cytokinesis(Big)']
const largeEctoplasmChampSkills = ['Big Slime', 'Slimesmack', 'Cytokinesis(Big)']

const croneVetSkills = ['Curse of Vulnerability', 'Fetid Censer', 'Embrace the Dark']
const croneChampSkills = ['Curse of Vulnerability', 'Fetid Censer', 'Embrace the Dark']

const uncleanGiantVetSkills = ['Treebranch Smackdown', 'Confusion Spores', 'Poison Spores']
const uncleanGiantChampSkills = ['Treebranch Smackdown', 'Confusion Spores', 'Poison Spores']

const hatefulViragoChampSkills = ['Ruinous Hex', 'Putrefying Breath', 'From Death Comes Life']
const necroticFungusChampSkills = ['Necrotic Fungus Passive']

//Containers for Weald skills
const fungalScratcherAppContainer = createSkillContainer('fungal_scratcher_skill_app', fungalScratcherAppSkills, true, false, false, false);
const fungalScratcherVetContainer = createSkillContainer('fungal_scratcher_skill_vet', fungalScratcherVetSkills, false, true, false, false);
const fungalScratcherChampContainer = createSkillContainer('fungal_scratcher_skill_champ', fungalScratcherChampSkills, false, false, true, false);

const fungalArtilleryAppContainer = createSkillContainer('fungal_artillery_skill_app', fungalArtilleryAppSkills, true, false, false, false);
const fungalArtilleryVetContainer = createSkillContainer('fungal_artillery_skill_vet', fungalArtilleryVetSkills, false, true, false, false);
const fungalArtilleryChampContainer = createSkillContainer('fungal_artillery_skill_champ', fungalArtilleryChampSkills, false, false, true, false);

const rabidGnasherAppContainer = createSkillContainer('rabid_gnasher_skill_app', rabidGnasherAppSkills, true, false, false, false);
const rabidGnasherVetContainer = createSkillContainer('rabid_gnasher_skill_vet', rabidGnasherVetSkills, false, true, false, false);
const rabidGnasherChampContainer = createSkillContainer('rabid_gnasher_skill_champ', rabidGnasherChampSkills, false, false, true, false);

const ectoplasmAppContainer = createSkillContainer('ectoplasm_skill_app', ectoplasmAppSkills, true, false, false, false);
const ectoplasmVetContainer = createSkillContainer('ectoplasm_skill_vet', ectoplasmVetSkills, false, true, false, false);
const ectoplasmChampContainer = createSkillContainer('ectoplasm_skill_champ', ectoplasmChampSkills, false, false, true, false);

const largeEctoplasmAppContainer = createSkillContainer('large_ectoplasm_skill_app', largeEctoplasmAppSkills, true, false, false, false);
const largeEctoplasmVetContainer = createSkillContainer('large_ectoplasm_skill_vet', largeEctoplasmVetSkills, false, true, false, false);
const largeEctoplasmChampContainer = createSkillContainer('large_ectoplasm_skill_champ', largeEctoplasmChampSkills, false, false, true, false);

const croneVetContainer = createSkillContainer('crone_skill_vet', croneVetSkills, false, true, false, false);
const croneChampContainer = createSkillContainer('crone_skill_champ', croneChampSkills, false, false, true, false);

const uncleanGiantVetContainer = createSkillContainer('unclean_giant_skill_vet', uncleanGiantVetSkills, false, true, false, false);
const uncleanGiantChampContainer = createSkillContainer('unclean_giant_skill_champ', uncleanGiantChampSkills, false, false, true, false);

const hatefulViragoChampContainer = createSkillContainer('hateful_virago_skill_champ', hatefulViragoChampSkills, false, false, true, false);
const necroticFungusChampContainer = createSkillContainer('necrotic_fungus_skill_champ', necroticFungusChampSkills, false, false, true, false);

//adding Weald skills to main container

WealdEnemyBox.insertBefore(fungalScratcherAppContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(fungalScratcherVetContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(fungalScratcherChampContainer, WealdEnemyBox.firstChild);

WealdEnemyBox.insertBefore(fungalArtilleryAppContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(fungalArtilleryVetContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(fungalArtilleryChampContainer, WealdEnemyBox.firstChild);

WealdEnemyBox.insertBefore(rabidGnasherAppContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(rabidGnasherVetContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(rabidGnasherChampContainer, WealdEnemyBox.firstChild);

WealdEnemyBox.insertBefore(ectoplasmAppContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(ectoplasmVetContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(ectoplasmChampContainer, WealdEnemyBox.firstChild);

WealdEnemyBox.insertBefore(largeEctoplasmAppContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(largeEctoplasmVetContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(largeEctoplasmChampContainer, WealdEnemyBox.firstChild);

WealdEnemyBox.insertBefore(croneVetContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(croneChampContainer, WealdEnemyBox.firstChild);

WealdEnemyBox.insertBefore(uncleanGiantVetContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(uncleanGiantChampContainer, WealdEnemyBox.firstChild);

WealdEnemyBox.insertBefore(hatefulViragoChampContainer, WealdEnemyBox.firstChild);
WealdEnemyBox.insertBefore(necroticFungusChampContainer, WealdEnemyBox.firstChild);

//Warrens Enemy Skills

const swineChopperAppSkills = ['Butcher Cut', 'Ball and Chain'];
const swineChopperVetSkills = ['Butcher Cut', 'Ball and Chain'];
const swineChopperChampSkills = ['Butcher Cut', 'Ball and Chain'];

const swineWretchAppSkills = ['Vomit'];
const swineWretchVetSkills = ['Vomit'];
const swineWretchChampSkills = ['Vomit'];

const swineDrummerAppSkills = ['Drums of Debilitation', 'Drums of Doom'];
const swineDrummerVetSkills = ['Drums of Debilitation', 'Drums of Doom'];
const swineDrummerChampSkills = ['Drums of Debilitation', 'Drums of Doom'];

const swineSlasherAppSkills = ['Hook Where It Hurts'];
const swineSlasherVetSkills = ['Hook Where It Hurts'];
const swineSlasherChampSkills = ['Hook Where It Hurts'];

const carrionEaterAppSkills = ['Munch'];
const carrionEaterVetSkills = ['Munch'];
const carrionEaterChampSkills = ['Munch'];

const largeCarrionEaterVetSkills = ['Weaken Prey', 'Tentacle Devour'];
const largeCarrionEaterChampSkills = ['Weaken Prey', 'Tentacle Devour'];

const swinetaurVetSkills = ['Pig Spear', 'Boar Rush', 'Trot Retreat', 'Crunching Backhand'];
const swinetaurChampSkills = ['Pig Spear', 'Boar Rush', 'Trot Retreat', 'Crunching Backhand'];

const swineSkiverChampSkills = ['Spit to Roast', 'Cripple Them', 'Goring Flight']

//Containers for Warrens skills
const swineChopperAppContainer = createSkillContainer('swine_chopper_skill_app', swineChopperAppSkills, true, false, false, false);
const swineChopperVetContainer = createSkillContainer('swine_chopper_skill_vet', swineChopperVetSkills, false, true, false, false);
const swineChopperChampContainer = createSkillContainer('swine_chopper_skill_champ', swineChopperChampSkills, false, false, true, false);

const swineWretchAppContainer = createSkillContainer('swine_wretch_skill_app', swineWretchAppSkills, true, false, false, false);
const swineWretchVetContainer = createSkillContainer('swine_wretch_skill_vet', swineWretchVetSkills, false, true, false, false);
const swineWretchChampContainer = createSkillContainer('swine_wretch_skill_champ', swineWretchChampSkills, false, false, true, false);

const swineDrummerAppContainer = createSkillContainer('swine_drummer_skill_app', swineDrummerAppSkills, true, false, false, false);
const swineDrummerVetContainer = createSkillContainer('swine_drummer_skill_vet', swineDrummerVetSkills, false, true, false, false);
const swineDrummerChampContainer = createSkillContainer('swine_drummer_skill_champ', swineDrummerChampSkills, false, false, true, false);

const swineSlasherAppContainer = createSkillContainer('swine_slasher_skill_app', swineSlasherAppSkills, true, false, false, false);
const swineSlasherVetContainer = createSkillContainer('swine_slasher_skill_vet', swineSlasherVetSkills, false, true, false, false);
const swineSlasherChampContainer = createSkillContainer('swine_slasher_skill_champ', swineSlasherChampSkills, false, false, true, false);

const carrionEaterAppContainer = createSkillContainer('carrion_eater_skill_app', carrionEaterAppSkills, true, false, false, false);
const carrionEaterVetContainer = createSkillContainer('carrion_eater_skill_vet', carrionEaterVetSkills, false, true, false, false);
const carrionEaterChampContainer = createSkillContainer('carrion_eater_skill_champ', carrionEaterChampSkills, false, false, true, false);

const largeCarrionEaterVetContainer = createSkillContainer('large_carrion_eater_skill_vet', largeCarrionEaterVetSkills, false, true, false, false);
const largeCarrionEaterChampContainer = createSkillContainer('large_carrion_eater_skill_champ', largeCarrionEaterChampSkills, false, false, true, false);

const swinetaurVetContainer = createSkillContainer('swinetaur_skill_vet', swinetaurVetSkills, false, true, false, false);
const swinetaurChampContainer = createSkillContainer('swinetaur_skill_champ', swinetaurChampSkills, false, false, true, false);

const swineSkiverChampContainer = createSkillContainer('swine_skiver_skill_champ', swineSkiverChampSkills, false, false, true, false);

//adding warrens skills to main container

WarrensEnemyBox.insertBefore(swineChopperAppContainer, WarrensEnemyBox.firstChild);
WarrensEnemyBox.insertBefore(swineChopperVetContainer, WarrensEnemyBox.firstChild);
WarrensEnemyBox.insertBefore(swineChopperChampContainer, WarrensEnemyBox.firstChild);

WarrensEnemyBox.insertBefore(swineWretchAppContainer, WarrensEnemyBox.firstChild);
WarrensEnemyBox.insertBefore(swineWretchVetContainer, WarrensEnemyBox.firstChild);
WarrensEnemyBox.insertBefore(swineWretchChampContainer, WarrensEnemyBox.firstChild);

WarrensEnemyBox.insertBefore(swineDrummerAppContainer, WarrensEnemyBox.firstChild);
WarrensEnemyBox.insertBefore(swineDrummerVetContainer, WarrensEnemyBox.firstChild);
WarrensEnemyBox.insertBefore(swineDrummerChampContainer, WarrensEnemyBox.firstChild);

WarrensEnemyBox.insertBefore(swineSlasherAppContainer, WarrensEnemyBox.firstChild);
WarrensEnemyBox.insertBefore(swineSlasherVetContainer, WarrensEnemyBox.firstChild);
WarrensEnemyBox.insertBefore(swineSlasherChampContainer, WarrensEnemyBox.firstChild);

WarrensEnemyBox.insertBefore(carrionEaterAppContainer, WarrensEnemyBox.firstChild);
WarrensEnemyBox.insertBefore(carrionEaterVetContainer, WarrensEnemyBox.firstChild);
WarrensEnemyBox.insertBefore(carrionEaterChampContainer, WarrensEnemyBox.firstChild);

WarrensEnemyBox.insertBefore(largeCarrionEaterVetContainer, WarrensEnemyBox.firstChild);
WarrensEnemyBox.insertBefore(largeCarrionEaterChampContainer, WarrensEnemyBox.firstChild);

WarrensEnemyBox.insertBefore(swinetaurVetContainer, WarrensEnemyBox.firstChild);
WarrensEnemyBox.insertBefore(swinetaurChampContainer, WarrensEnemyBox.firstChild);

WarrensEnemyBox.insertBefore(swineSkiverChampContainer, WarrensEnemyBox.firstChild);

//Cove Enemy Skills

const pelagicGrouperAppSkills = ['Seaward Slash', 'Spearfishing'];
const pelagicGrouperVetSkills = ['Seaward Slash', 'Spearfishing'];
const pelagicGrouperChampSkills = ['Seaward Slash', 'Spearfishing'];

const pelagicGuardianAppSkills = ['Octocestus', 'Barnacle Barrier'];
const pelagicGuardianVetSkills = ['Octocestus', 'Barnacle Barrier'];
const pelagicGuardianChampSkills = ['Octocestus', 'Barnacle Barrier'];

const pelagicShamanAppSkills = ['Stress Wave', 'Call of the Deep', 'Ceremonial Cut', 'Sea Breeze'];
const pelagicShamanVetSkills = ['Stress Wave', 'Call of the Deep', 'Ceremonial Cut', 'Sea Breeze'];
const pelagicShamanChampSkills = ['Stress Wave', 'Call of the Deep', 'Ceremonial Cut', 'Sea Breeze'];

const deepStingerAppSkills = ['Shocker', 'Salty Gouge'];
const deepStingerVetSkills = ['Shocker', 'Salty Gouge'];
const deepStingerChampSkills = ['Shocker', 'Salty Gouge'];

const drownedThrallAppSkills = ['Gargling Grab', 'The Revenge'];
const drownedThrallVetSkills = ['Gargling Grab', 'The Revenge'];
const drownedThrallChampSkills = ['Gargling Grab', 'The Revenge'];

const seaMaggotAppSkills = ['Brine'];
const seaMaggotVetSkills = ['Brine'];
const seaMaggotChampSkills = ['Brine'];

const ucaCrusherVetSkills = ['Arterial Pinch', 'Tidal Slam'];
const ucaCrusherChampSkills = ['Arterial Pinch', 'Tidal Slam'];

const squiffyGhastChampSkills = ['Maddening Shanty', 'Offkilter Jig']


//Containers for Cove skills
const pelagicGrouperAppContainer = createSkillContainer('pelagic_grouper_skill_app', pelagicGrouperAppSkills, true, false, false, false);
const pelagicGrouperVetContainer = createSkillContainer('pelagic_grouper_skill_vet', pelagicGrouperVetSkills, false, true, false, false);
const pelagicGrouperChampContainer = createSkillContainer('pelagic_grouper_skill_champ', pelagicGrouperChampSkills, false, false, true, false);

const pelagicGuardianAppContainer = createSkillContainer('pelagic_guardian_skill_app', pelagicGuardianAppSkills, true, false, false, false);
const pelagicGuardianVetContainer = createSkillContainer('pelagic_guardian_skill_vet', pelagicGuardianVetSkills, false, true, false, false);
const pelagicGuardianChampContainer = createSkillContainer('pelagic_guardian_skill_champ', pelagicGuardianChampSkills, false, false, true, false);

const pelagicShamanAppContainer = createSkillContainer('pelagic_shaman_skill_app', pelagicShamanAppSkills, true, false, false, false);
const pelagicShamanVetContainer = createSkillContainer('pelagic_shaman_skill_vet', pelagicShamanVetSkills, false, true, false, false);
const pelagicShamanChampContainer = createSkillContainer('pelagic_shaman_skill_champ', pelagicShamanChampSkills, false, false, true, false);

const deepStingerAppContainer = createSkillContainer('deep_stinger_skill_app', deepStingerAppSkills, true, false, false, false);
const deepStingerVetContainer = createSkillContainer('deep_stinger_skill_vet', deepStingerVetSkills, false, true, false, false);
const deepStingerChampContainer = createSkillContainer('deep_stinger_skill_champ', deepStingerChampSkills, false, false, true, false);

const drownedThrallAppContainer = createSkillContainer('drowned_thrall_skill_app', drownedThrallAppSkills, true, false, false, false);
const drownedThrallVetContainer = createSkillContainer('drowned_thrall_skill_vet', drownedThrallVetSkills, false, true, false, false);
const drownedThrallChampContainer = createSkillContainer('drowned_thrall_skill_champ', drownedThrallChampSkills, false, false, true, false);

const seaMaggotAppContainer = createSkillContainer('sea_maggot_skill_app', seaMaggotAppSkills, true, false, false, false);
const seaMaggotVetContainer = createSkillContainer('sea_maggot_skill_vet', seaMaggotVetSkills, false, true, false, false);
const seaMaggotChampContainer = createSkillContainer('sea_maggot_skill_champ', seaMaggotChampSkills, false, false, true, false);

const ucaCrusherVetContainer = createSkillContainer('uca_crusher_skill_vet', ucaCrusherVetSkills, false, true, false, false);
const ucaCrusherChampContainer = createSkillContainer('uca_crusher_skill_champ', ucaCrusherChampSkills, false, false, true, false);

const squiffyGhastChampContainer = createSkillContainer('squiffy_ghast_skill_champ', squiffyGhastChampSkills, false, false, true, false);

//adding Cove skills to main container

CoveEnemyBox.insertBefore(pelagicGrouperAppContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(pelagicGrouperVetContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(pelagicGrouperChampContainer, CoveEnemyBox.firstChild);

CoveEnemyBox.insertBefore(pelagicGuardianAppContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(pelagicGuardianVetContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(pelagicGuardianChampContainer, CoveEnemyBox.firstChild);

CoveEnemyBox.insertBefore(pelagicShamanAppContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(pelagicShamanVetContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(pelagicShamanChampContainer, CoveEnemyBox.firstChild);

CoveEnemyBox.insertBefore(deepStingerAppContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(deepStingerVetContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(deepStingerChampContainer, CoveEnemyBox.firstChild);

CoveEnemyBox.insertBefore(drownedThrallAppContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(drownedThrallVetContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(drownedThrallChampContainer, CoveEnemyBox.firstChild);

CoveEnemyBox.insertBefore(seaMaggotAppContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(seaMaggotVetContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(seaMaggotChampContainer, CoveEnemyBox.firstChild);

CoveEnemyBox.insertBefore(ucaCrusherVetContainer, CoveEnemyBox.firstChild);
CoveEnemyBox.insertBefore(ucaCrusherChampContainer, CoveEnemyBox.firstChild);

CoveEnemyBox.insertBefore(squiffyGhastChampContainer, CoveEnemyBox.firstChild);

//Shared Enemy Skills

const brigandCutthroatAppSkills = ['Slice and Dice', 'Uppercut Slice', 'Shank', 'Harmless Poke'];
const brigandCutthroatVetSkills = ['Slice and Dice', 'Uppercut Slice', 'Shank', 'Harmless Poke'];
const brigandCutthroatChampSkills = ['Slice and Dice', 'Uppercut Slice', 'Shank', 'Harmless Poke'];

const brigandBloodletterAppSkills = ['Rain of Whips', 'Punishment', 'Point Blank Shot'];
const brigandBloodletterVetSkills = ['Rain of Whips', 'Punishment', 'Point Blank Shot'];
const brigandBloodletterChampSkills = ['Rain of Whips', 'Punishment', 'Point Blank Shot'];

const brigandFusilierAppSkills = ['Blanket Fire', 'Rushed Shot'];
const brigandFusilierVetSkills = ['Blanket Fire', 'Rushed Shot'];
const brigandFusilierChampSkills = ['Blanket Fire', 'Rushed Shot'];

const cultistBrawlerAppSkills = ['Rend for The Old Gods', 'Stumbling Scratch'];
const cultistBrawlerVetSkills = ['Rend for The Old Gods', 'Stumbling Scratch'];
const cultistBrawlerChampSkills = ['Rend for The Old Gods', 'Stumbling Scratch'];

const cultistAcolyteAppSkills = ['Eldritch Pull', 'Eldritch Push', 'Stressful Incantation'];
const cultistAcolyteVetSkills = ['Eldritch Pull', 'Eldritch Push', 'Stressful Incantation'];
const cultistAcolyteChampSkills = ['Eldritch Pull', 'Eldritch Push', 'Stressful Incantation'];

const madmanAppSkills = ['Accusation', 'Doomsay'];
const madmanVetSkills = ['Accusation', 'Doomsay'];
const madmanChampSkills = ['Accusation', 'Doomsay'];

const webberAppSkills = ['Web', 'Bite(Webber)'];
const webberVetSkills = ['Web', 'Bite(Webber)'];
const webberChampSkills = ['Web', 'Bite(Webber)'];

const spitterAppSkills = ['Spit', 'Bite(Spitter)'];
const spitterVetSkills = ['Spit', 'Bite(Spitter)'];
const spitterChampSkills = ['Spit', 'Bite(Spitter)'];

const maggotAppSkills = ['Grave Nibble'];
const maggotVetSkills = ['Grave Nibble'];
const maggotChampSkills = ['Grave Nibble'];

const boneRabbleAppSkills = ['Bump In The Night', 'Tic-Toc'];
const boneRabbleVetSkills = ['Bump In The Night', 'Tic-Toc'];
const boneRabbleChampSkills = ['Bump In The Night', 'Tic-Toc'];

const gargoyleVetSkills = ['Flurry of Claws', 'Lash of the Tail'];
const gargoyleChampSkills = ['Flurry of Claws', 'Lash of the Tail'];

const ghoulVetSkills = ['Rend', 'Skull Toss', 'Howl'];
const ghoulChampSkills = ['Rend', 'Skull Toss', 'Howl'];

const brigandRaiderDarkestSkills = ['Slice and Dice', 'Uppercut Slice', 'Shank', 'Harmless Poke'];
const brigandHunterDarkestSkills = ['Blanket Fire', 'Rushed Shot'];

//Containers for Warrens skills

const brigandCutthroatAppContainer = createSkillContainer('brigand_cutthroat_skill_app', brigandCutthroatAppSkills, true, false, false, false);
const brigandCutthroatVetContainer = createSkillContainer('brigand_cutthroat_skill_vet', brigandCutthroatVetSkills, false, true, false, false);
const brigandCutthroatChampContainer = createSkillContainer('brigand_cutthroat_skill_champ', brigandCutthroatChampSkills, false, false, true, false);

const brigandBloodletterAppContainer = createSkillContainer('brigand_bloodletter_skill_app', brigandBloodletterAppSkills, true, false, false, false);
const brigandBloodletterVetContainer = createSkillContainer('brigand_bloodletter_skill_vet', brigandBloodletterVetSkills, false, true, false, false);
const brigandBloodletterChampContainer = createSkillContainer('brigand_bloodletter_skill_champ', brigandBloodletterChampSkills, false, false, true, false);

const brigandFusilierAppContainer = createSkillContainer('brigand_fusilier_skill_app', brigandFusilierAppSkills, true, false, false, false);
const brigandFusilierVetContainer = createSkillContainer('brigand_fusilier_skill_vet', brigandFusilierVetSkills, false, true, false, false);
const brigandFusilierChampContainer = createSkillContainer('brigand_fusilier_skill_champ', brigandFusilierChampSkills, false, false, true, false);

const cultistBrawlerAppContainer = createSkillContainer('cultist_brawler_skill_app', cultistBrawlerAppSkills, true, false, false, false);
const cultistBrawlerVetContainer = createSkillContainer('cultist_brawler_skill_vet', cultistBrawlerVetSkills, false, true, false, false);
const cultistBrawlerChampContainer = createSkillContainer('cultist_brawler_skill_champ', cultistBrawlerChampSkills, false, false, true, false);

const cultistAcolyteAppContainer = createSkillContainer('cultist_acolyte_skill_app', cultistAcolyteAppSkills, true, false, false, false);
const cultistAcolyteVetContainer = createSkillContainer('cultist_acolyte_skill_vet', cultistAcolyteVetSkills, false, true, false, false);
const cultistAcolyteChampContainer = createSkillContainer('cultist_acolyte_skill_champ', cultistAcolyteChampSkills, false, false, true, false);

const madmanAppContainer = createSkillContainer('madman_skill_app', madmanAppSkills, true, false, false, false);
const madmanVetContainer = createSkillContainer('madman_skill_vet', madmanVetSkills, false, true, false, false);
const madmanChampContainer = createSkillContainer('madman_skill_champ', madmanChampSkills, false, false, true, false);

const webberAppContainer = createSkillContainer('webber_skill_app', webberAppSkills, true, false, false, false);
const webberVetContainer = createSkillContainer('webber_skill_vet', webberVetSkills, false, true, false, false);
const webberChampContainer = createSkillContainer('webber_skill_champ', webberChampSkills, false, false, true, false);

const spitterAppContainer = createSkillContainer('spitter_skill_app', spitterAppSkills, true, false, false, false);
const spitterVetContainer = createSkillContainer('spitter_skill_vet', spitterVetSkills, false, true, false, false);
const spitterChampContainer = createSkillContainer('spitter_skill_champ', spitterChampSkills, false, false, true, false);

const maggotAppContainer = createSkillContainer('maggot_skill_app', maggotAppSkills, true, false, false, false);
const maggotVetContainer = createSkillContainer('maggot_skill_vet', maggotVetSkills, false, true, false, false);
const maggotChampContainer = createSkillContainer('maggot_skill_champ', maggotChampSkills, false, false, true, false);

const boneRabbleAppContainer = createSkillContainer('bone_rabble_skill_app', boneRabbleAppSkills, true, false, false, false);
const boneRabbleVetContainer = createSkillContainer('bone_rabble_skill_vet', boneRabbleVetSkills, false, true, false, false);
const boneRabbleChampContainer = createSkillContainer('bone_rabble_skill_champ', boneRabbleChampSkills, false, false, true, false);

const gargoyleVetContainer = createSkillContainer('gargoyle_skill_vet', gargoyleVetSkills, false, true, false, false);
const gargoyleChampContainer = createSkillContainer('gargoyle_skill_champ', gargoyleChampSkills, false, false, true, false);

const ghoulVetContainer = createSkillContainer('ghoul_skill_vet', ghoulVetSkills, false, true, false, false);
const ghoulChampContainer = createSkillContainer('ghoul_skill_champ', ghoulChampSkills, false, false, true, false);

const brigandRaiderDarkestContainer = createSkillContainer('brigand_raider_skill_darkest', brigandRaiderDarkestSkills, false, false, false, true);
const brigandHunterDarkestContainer = createSkillContainer('brigand_hunter_skill_darkest', brigandHunterDarkestSkills, false, false, false, true);

//adding warrens skills to main container

SharedEnemyBox.insertBefore(brigandCutthroatAppContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(brigandCutthroatVetContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(brigandCutthroatChampContainer, SharedEnemyBox.firstChild);

SharedEnemyBox.insertBefore(brigandBloodletterAppContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(brigandBloodletterVetContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(brigandBloodletterChampContainer, SharedEnemyBox.firstChild);

SharedEnemyBox.insertBefore(brigandFusilierAppContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(brigandFusilierVetContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(brigandFusilierChampContainer, SharedEnemyBox.firstChild);

SharedEnemyBox.insertBefore(cultistBrawlerAppContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(cultistBrawlerVetContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(cultistBrawlerChampContainer, SharedEnemyBox.firstChild);

SharedEnemyBox.insertBefore(cultistAcolyteAppContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(cultistAcolyteVetContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(cultistAcolyteChampContainer, SharedEnemyBox.firstChild);

SharedEnemyBox.insertBefore(madmanAppContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(madmanVetContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(madmanChampContainer, SharedEnemyBox.firstChild);

SharedEnemyBox.insertBefore(webberAppContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(webberVetContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(webberChampContainer, SharedEnemyBox.firstChild);

SharedEnemyBox.insertBefore(spitterAppContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(spitterVetContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(spitterChampContainer, SharedEnemyBox.firstChild);

SharedEnemyBox.insertBefore(maggotAppContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(maggotVetContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(maggotChampContainer, SharedEnemyBox.firstChild);

SharedEnemyBox.insertBefore(boneRabbleAppContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(boneRabbleVetContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(boneRabbleChampContainer, SharedEnemyBox.firstChild);

SharedEnemyBox.insertBefore(gargoyleVetContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(gargoyleChampContainer, SharedEnemyBox.firstChild);

SharedEnemyBox.insertBefore(ghoulVetContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(ghoulChampContainer, SharedEnemyBox.firstChild);

SharedEnemyBox.insertBefore(brigandRaiderDarkestContainer, SharedEnemyBox.firstChild);
SharedEnemyBox.insertBefore(brigandHunterDarkestContainer, SharedEnemyBox.firstChild);

//Ruins Skill Descriptions

const ruinskills = [
    //Bone Soldier

    {
        id: 'app_graveyard_slash_desc',
        position: '123ally_123enemy.png',
        name: 'Graveyard Slash',
        type: 'Melee',
        accuracy: 82.5,
        critRate: 'CRIT : 6%',
        damage: '3-8',
    },

    {
        id: 'vet_graveyard_slash_desc',
        position: '123ally_123enemy.png',
        name: 'Graveyard Slash',
        type: 'Melee',
        accuracy: 88.75,
        critRate: 'CRIT : 12%',
        damage: '4-11',
    },

    {
        id: 'champ_graveyard_slash_desc',
        position: '123ally_123enemy.png',
        name: 'Graveyard Slash',
        type: 'Melee',
        accuracy: 102.5,
        critRate: 'CRIT : 14%',
        damage: '5-14',
    }, 

    {
        id: 'app_graveyard_stumble_desc',
        position: '12ally_4enemy.png',
        name: 'Graveyard Stumble',
        type: 'Melee',
        forward: 'Forward 1',
        accuracy: 42.5,
        critRate: 'Cannot CRIT',
        damage: '2-5',
    },

    {
        id: 'vet_graveyard_stumble_desc',
        position: '12ally_4enemy.png',
        name: 'Graveyard Stumble',
        type: 'Melee',
        forward: 'Forward 1',
        accuracy: 48.75,
        critRate: 'Cannot CRIT',
        damage: '2-6',
    },

   {
        id: 'champ_graveyard_stumble_desc',
        position: '12ally_4enemy.png',
        name: 'Graveyard Stumble',
        type: 'Melee',
        forward: 'Forward 1',
        accuracy: 62.5,
        critRate: 'Cannot CRIT',
        damage: '3-8',
    },

//Bone Defender

{
    id: 'app_axeblade_desc',
    position: '12ally_12enemy.png',
    name: 'Axeblade',
    type: 'Melee',
    accuracy: 72.5,
    critRate: 'CRIT : 6%',
    damage: '3-5',
},

{
    id: 'vet_axeblade_desc',
    position: '12ally_12enemy.png',
    name: 'Axeblade',
    type: 'Melee',
    accuracy: 78.75,
    critRate: 'CRIT : 12%',
    damage: '4-7',
    effects: 'Debuff Target: <br> -20% Stun Resist (3 rds) (120% Base) <br>  -20% Move Resist (3 rds) (120% Base)'
},

{
    id: 'champ_axeblade_desc',
    position: '12ally_12enemy.png',
    name: 'Axeblade',
    type: 'Melee',
    accuracy: 92.5,
    critRate: 'CRIT : 14%',
    damage: '5-10',
    effects: 'Debuff Target: <br> -30% Stun Resist (3 rds) (140% Base) <br>  -30% Move Resist (3 rds) (140% Base)'
},


{
    id: 'app_dead_weight_desc',
    position: '12ally_12enemy.png',
    name: 'Dead Weight',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'CRIT : 6%',
    damage: '2-4',
    effects: 'Stun (100% Base) <br> Knockback 1 (100% Base)'
},

{
    id: 'vet_dead_weight_desc',
    position: '12ally_12enemy.png',
    name: 'Dead Weight',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'CRIT : 12%',
    damage: '3-5',
    effects: 'Stun (120% Base) <br> Knockback 1 (120% Base)'
},


{
    id: 'champ_dead_weight_desc',
    position: '12ally_12enemy.png',
    name: 'Dead Weight',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'CRIT : 14%',
    damage: '4-7',
    effects: 'Stun (140% Base) <br> Knockback 1 (140% Base)'
},


{
    id: 'app_clumsy_axeblade_desc',
    position: '12ally_34enemy.png',
    name: 'Clumsy Axeblade',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 42.5,
    critRate: 'Cannot CRIT',
    damage: '2-4',
},

{
    id: 'vet_clumsy_axeblade_desc',
    position: '12ally_34enemy.png',
    name: 'Clumsy Axeblade',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 48.75,
    critRate: 'Cannot CRIT',
    damage: '3-5',
},

{
    id: 'champ_clumsy_axeblade_desc',
    position: '12ally_34enemy.png',
    name: 'Clumsy Axeblade',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 62.5,
    critRate: 'Cannot CRIT',
    damage: '4-7',
},


{
    extrainfo: 'Cooldown: 2 rds<br>',
    id: 'vet_foul_warding_desc',
    position: '1234enemy.png',
    name: 'Foul Warding',
    type: 'Support',
    effects: 'Guard Ally (3 rds) <br> Buff Self:<br> +25% PROT (2 rds)'
},

{
    extrainfo: 'Cooldown: 2 rds<br>',
    id: 'champ_foul_warding_desc',
    position: '1234enemy.png',
    name: 'Foul Warding',
    type: 'Support',
    effects: 'Guard Ally (3 rds) <br> Buff Self:<br> +25% PROT (2 rds)'
},



//Bone Arbalest

{
    id: 'app_quarrel_desc',
    position: '234ally_34enemy.png',
    name: 'Quarrel',
    type: 'Ranged',
    accuracy: 82.5,
    critRate: 'CRIT : 12%',
    damage: '3-7',
    effects: ' +25% DMG vs Branded'
},

{
    id: 'app_bayonet_jab_desc',
    position: '12ally_12enemy.png',
    name: 'Bayonet Jab',
    type: 'Melee',
    forward: 'Back 1',
    accuracy: 72.5,
    critRate: 'CRIT : 2%',
    damage: '2-4',
},

{
    id: 'vet_quarrel_desc',
    position: '234ally_34enemy.png',
    name: 'Quarrel',
    type: 'Ranged',
    accuracy: 88.75,
    critRate: 'CRIT : 16%',
    damage: '5-9',
    effects: ' +50% DMG vs Branded'
},

{
    id: 'vet_bayonet_jab_desc',
    position: '12ally_12enemy.png',
    name: 'Bayonet Jab',
    type: 'Melee',
    forward: 'Back 1',
    accuracy: 78.75,
    critRate: 'CRIT : 6%',
    damage: '3-5',
},

{
    id: 'champ_quarrel_desc',
    position: '234ally_34enemy.png',
    name: 'Quarrel',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'CRIT : 19%',
    damage: '6-13',
    effects: ' +50% DMG vs Branded'
},

{
    id: 'champ_bayonet_jab_desc',
    position: '12ally_12enemy.png',
    name: 'Bayonet Jab',
    type: 'Melee',
    forward: 'Back 1',
    accuracy: 92.5,
    critRate: 'CRIT : 9%',
    damage: '4-7',
},


//Bone Courtier 

{ 
    id: 'app_tempting_goblet_desc',
    position: '1234ally_234enemy.png',
    name: 'Tempting Goblet',
    type: 'Ranged',
    accuracy: 92.5,
    critRate: 'Cannot CRIT',
    damage: '2-4',
    effects: ' Stress +15'
},

{ 
    id: 'vet_tempting_goblet_desc',
    position: '1234ally_234enemy.png',
    name: 'Tempting Goblet',
    type: 'Ranged',
    accuracy: 98.75,
    critRate: 'CRIT : 4%',
    damage: '3-5',
    effects: ' Stress +15<br> Debuff Target: <br> -3% CRIT (3 rds) (120% Base)'
},

{ 
    id: 'champ_tempting_goblet_desc',
    position: '1234ally_234enemy.png',
    name: 'Tempting Goblet',
    type: 'Ranged',
    accuracy: 112.5,
    critRate: 'CRIT : 7%',
    damage: '4-7',
    effects: ' Stress +15<br> Debuff Target: <br> -5% CRIT (3 rds) (140% Base)'
},


{ 
    id: 'app_knife_in_the_dark_desc',
    position: '12ally_12enemy.png',
    name: 'Knife in the Dark',
    type: 'Melee',
    accuracy: 62.5,
    critRate: 'CRIT : 6%',
    damage: '2-4',
},

{ 
    id: 'vet_knife_in_the_dark_desc',
    position: '12ally_12enemy.png',
    name: 'Knife in the Dark',
    type: 'Melee',
    accuracy: 68.75,
    critRate: 'CRIT : 12%',
    damage: '3-5',
},


{ 
    id: 'champ_knife_in_the_dark_desc',
    position: '12ally_12enemy.png',
    name: 'Knife in the Dark',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'CRIT : 14%',
    damage: '4-7',
},



//Bone Spearman

{ 
    id: 'vet_spear_thrust_desc',
    position: '1234ally_1234enemy.png',
    name: 'Spear Thrust',
    type: 'Melee',
    accuracy: 78.75,
    critRate: 'CRIT : 12%',
    damage: '5-11',
    effects: 'Knockback 1 (120% Base) '
},


{ 
    id: 'vet_impale_desc',
    position: '1234cleaveally_12enemy.png',
    name: 'Impale',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'CRIT : 16%',
    damage: '3-5',
},

{ 
    id: 'champ_spear_thrust_desc',
    position: '1234ally_1234enemy.png',
    name: 'Spear Thrust',
    type: 'Melee',
    accuracy: 92.5,
    critRate: 'CRIT : 14%',
    damage: '7-15',
    effects: 'Knockback 1 (140% Base) '
},


{ 
    id: 'champ_impale_desc',
    position: '1234cleaveally_12enemy.png',
    name: 'Impale',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'CRIT : 19%',
    damage: '4-7',
},



//Bone Captain

    {
        id: 'vet_crushing_blow_desc',
        position: '12ally_12enemy.png',
        name: 'Crushing Blow',
        type: 'Melee',
        accuracy: 88.75,
        critRate: 'CRIT : 16%',
        damage: '8-16',
        effects: 'Debuff Target: <br> -30% Stun Resist (3 rds) (120% Base)'
    },


    { 
        id: 'vet_ground_pound_desc',
        position: '1234cleaveally_1234enemy.png',
        name: 'Ground Pound',
        type: 'Ranged',
        accuracy: 88.75,
        critRate: 'CRIT : 12%',
        damage: '3-5',
        effects: 'Stun (80% Base)'
    },

    {
        id: 'champ_crushing_blow_desc',
        position: '12ally_12enemy.png',
        name: 'Crushing Blow',
        type: 'Melee',
        accuracy: 102.5,
        critRate: 'CRIT : 19%',
        damage: '11-22',
        effects: 'Debuff Target: <br> -40% Stun Resist (3 rds) (140% Base)'
    },


    { 
        id: 'champ_ground_pound_desc',
        position: '1234cleaveally_1234enemy.png',
        name: 'Ground Pound',
        type: 'Ranged',
        accuracy: 102.5,
        critRate: 'CRIT : 14%',
        damage: '4-7',
        effects: 'Stun (100% Base)'
    },




//Bone Bearer
    { 
        extrainfo: 'Cannot Target Self<br>',
        id: 'champ_wicked_surge_desc',
        position: '1234enemy.png',
        name: 'Wicked Surge',
        type: 'Support',
        effects: 'Buff Target: <br> +10 ACC (2 rds) <br> +20% DMG (2 rds)'
    },

    { 
        id: 'champ_defend_the_icon_desc',
        position: '12ally_12enemy.png',
        name: 'Defend the Icon',
        type: 'Melee',
        forward: 'Back 1',
        accuracy: 92.5,
        critRate: 'CRIT : 11%',
        damage: '5-11',
    },

    { 
        id: 'champ_unholy_rally_desc',
        position: '1234enemy.png',
        name: 'Unholy Rally',
        type: 'Auto Action',
        effects: 'At Round End: <br> Revives a Corpse to full health'
    },

    { 
        id: 'champ_bone_bearer_passive_desc',
        position: '1234cleaveenemy.png',
        name: 'Bone Bearer Passive',
        type: 'Support',
        effects: 'Buff Target: <br> +25% DMG (Self Excluded)'
    },
]

//Weald Skikk Descriptions

const wealdskills = [

    //Fungal Scratcher

    {
        id: 'app_groping_swipe_desc',
        position: '12ally_12enemy.png',
        name: 'Groping Swipe',
        type: 'Melee',
        accuracy: 72.5,
        critRate: 'CRIT : 6%',
        damage: '3-5',
    },
    
    {
        id: 'vet_groping_swipe_desc',
        position: '12ally_12enemy.png',
        name: 'Groping Swipe',
        type: 'Melee',
        accuracy: 78.75,
        critRate: 'CRIT : 12%',
        damage: '4-7',
        effects: ' Blight (120% Base) 2pts/rd for 3rds'
    },

    {
        id: 'champ_groping_swipe_desc',
        position: '12ally_12enemy.png',
        name: 'Groping Swipe',
        type: 'Melee',
        accuracy: 92.5,
        critRate: 'CRIT : 14%',
        damage: '5-10',
        effects: ' Blight (140% Base) 3pts/rd for 3rds'
    },


    {
        id: 'app_rend_the_marked_desc',
        position: '12ally_12enemy.png',
        name: 'Rend The Marked',
        type: 'Melee',
        accuracy: 82.5,
        critRate: 'CRIT : 6%',
        damage: '3-5',
        effects: ' +50% DMG vs Branded'
    },


    {
        id: 'app_harmless_swipe_desc',
        position: '12ally_34enemy.png',
        name: 'Harmless Swipe',
        type: 'Melee',
        forward:'Forward 1',
        accuracy: 42.5,
        critRate: 'Cannot CRIT',
        damage: '2-4',
    },

    {
        id: 'vet_rend_the_marked_desc',
        position: '12ally_12enemy.png',
        name: 'Rend The Marked',
        type: 'Melee',
        accuracy: 88.75,
        critRate: 'CRIT : 12%',
        damage: '4-7',
        effects: ' +50% DMG vs Branded'
    },


    {
        id: 'vet_harmless_swipe_desc',
        position: '12ally_34enemy.png',
        name: 'Harmless Swipe',
        type: 'Melee',
        forward:'Forward 1',
        accuracy: 48.75,
        critRate: 'Cannot CRIT',
        damage: '3-5',
    },

    {
        id: 'champ_rend_the_marked_desc',
        position: '12ally_12enemy.png',
        name: 'Rend The Marked',
        type: 'Melee',
        accuracy: 102.5,
        critRate: 'CRIT : 14%',
        damage: '5-10',
        effects: ' +50% DMG vs Branded'
    },


    {
        id: 'champ_harmless_swipe_desc',
        position: '12ally_34enemy.png',
        name: 'Harmless Swipe',
        type: 'Melee',
        forward:'Forward 1',
        accuracy: 62.5,
        critRate: 'Cannot CRIT',
        damage: '4-7',
    },


   

//Fungal Artillery

{
    id: 'app_mark_prey_desc',
    position: '12ally_34enemy.png',
    name: 'Mark Prey',
    type: 'Ranged',
    accuracy: 92.5,
    critRate: 'CRIT : 6%',
    damage: '1',
    effects: 'Mark Target (3 rds) <br> Debuff Target: <br>  -5 DODGE (3 rds) (100% Base)'

},

{
    id: 'app_rain_of_blight_desc',
    position: '34cleaveally_34enemy.png',
    name: 'Rain of Blight',
    type: 'Ranged',
    accuracy: 97.5,
    critRate: 'CRIT : 6%',
    damage: '1',
    effects: 'Blight (100% Base) 2 pts/rd for 3 rds <br>  Disease (Any) (15% Chance)',
},

{
    id: 'app_escape_cloud_desc',
    position: '12cleaveally_12enemy.png',
    name: 'Escape Cloud',
    type: 'Melee',
    forward: 'Back 2',
    accuracy: 97.5,
    critRate: 'CRIT : 6%',
    damage: '1',
    effects: 'Blight (100% Base) 1 pts/rd for 3 rds'
},


{
    id: 'vet_mark_prey_desc',
    position: '12ally_34enemy.png',
    name: 'Mark Prey',
    type: 'Ranged',
    accuracy: 98.75,
    critRate: 'CRIT : 12%',
    damage: '1-2',
    effects: 'Mark Target (3 rds) <br> Debuff Target: <br>  -7 DODGE (3 rds) (120% Base)'

},

{
    id: 'vet_rain_of_blight_desc',
    position: '34cleaveally_34enemy.png',
    name: 'Rain of Blight',
    type: 'Ranged',
    accuracy: 103.75,
    critRate: 'CRIT : 12%',
    damage: '2',
    effects: 'Blight (120% Base) 3 pts/rd for 3 rds <br>  Disease (Any) (15% Chance)',
},


{
    id: 'vet_escape_cloud_desc',
    position: '12cleaveally_12enemy.png',
    name: 'Escape Cloud',
    type: 'Melee',
    forward: 'Back 2',
    accuracy: 103.75,
    critRate: 'CRIT : 12%',
    damage: '2',
    effects: 'Blight (120% Base) 2 pts/rd for 3 rds'
},


{
    id: 'champ_mark_prey_desc',
    position: '12ally_34enemy.png',
    name: 'Mark Prey',
    type: 'Ranged',
    accuracy: 112.5,
    critRate: 'CRIT : 14%',
    damage: '1-3',
    effects: 'Mark Target (3 rds) <br> Debuff Target: <br>  -10 DODGE (3 rds) (140% Base)'

},

{
    id: 'champ_rain_of_blight_desc',
    position: '34cleaveally_34enemy.png',
    name: 'Rain of Blight',
    type: 'Ranged',
    accuracy: 117.5,
    critRate: 'CRIT : 14%',
    damage: '2',
    effects: 'Blight (140% Base) 4 pts/rd for 3 rds <br>  Disease (Any) (15% Chance)',
},

{
    id: 'champ_escape_cloud_desc',
    position: '12cleaveally_12enemy.png',
    name: 'Escape Cloud',
    type: 'Melee',
    forward: 'Back 2',
    accuracy: 117.5,
    critRate: 'CRIT : 14%',
    damage: '2',
    effects: 'Blight (140% Base) 3 pts/rd for 3 rds'
},


//Rabid Gnasher

{
    id: 'app_rabid_rush_desc',
    position: '1234ally_1234enemy.png',
    name: 'Rabid Rush',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'CRIT : 16%',
    damage: '1-3',
    effects: 'Disease (Rabies) (10% Chance) <br> Bleed (100% Base) 1pt/rd for 3rds '
},

{
    id: 'vet_rabid_rush_desc',
    position: '1234ally_1234enemy.png',
    name: 'Rabid Rush',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'CRIT : 22%',
    damage: '2-4',
    effects: 'Disease (Rabies) (10% Chance) <br> Bleed (120% Base) 2pts/rd for 3rds '
},

{
    id: 'champ_rabid_rush_desc',
    position: '1234ally_1234enemy.png',
    name: 'Rabid Rush',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'CRIT : 24%',
    damage: '2-5',
    effects: 'Disease (Rabies) (10% Chance) <br> Bleed (140% Base) 3pts/rd for 3rds '
},

//Ectoplasm 

{ 
    id: 'app_slime_desc',
    position: '1234ally_1234enemy.png',
    name: 'Slime',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'CRIT : 6%',
    damage: '3-5',
},

{ 
    id: 'vet_slime_desc',
    position: '1234ally_1234enemy.png',
    name: 'Slime',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'CRIT : 12%',
    damage: '4-7',
    effects: 'Debuff Target: <br> -1 SPD (3 rds) (120% Base) '
},

{ 
    id: 'champ_slime_desc',
    position: '1234ally_1234enemy.png',
    name: 'Slime',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'CRIT : 14%',
    damage: '6-9',
    effects: 'Debuff Target: <br> -2 SPD (3 rds) (140% Base) '
},

{ 
    extrainfo: 'Requires 1 Corpse/Empty Space<br>',
    id: 'app_cytokinesis(small)_desc',
    position: '1234ally_1234enemy.png',
    name: 'Cytokinesis',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'CRIT : 6%',
    damage: '1',
    effects: 'Summon 1 Ectoplasm'
},

{ 
    extrainfo: 'Requires 2 Corpses/Empty Spaces <br> Only way to encounter Apprentice Large Ectoplasm<br>',
    id: 'app_ectoplasmic_profusion_desc',
    position: '1234cleaveally_1234enemy.png',
    name: 'Ectoplasmic Profusion',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'Cannot CRIT',
    damage: '1',
    effects: ' Stress +10<br> Summon 1 Large Ectoplasm'
},

{ 
    extrainfo: 'Requires 1 Corpse/Empty Space<br>',
    id: 'vet_cytokinesis(small)_desc',
    position: '1234ally_1234enemy.png',
    name: 'Cytokinesis',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'CRIT : 12%',
    damage: '2',
    effects: 'Summon 1 Ectoplasm'
},

{ 
    extrainfo: 'Requires 2 Corpses/Empty Spaces <br> ',
    id: 'vet_ectoplasmic_profusion_desc',
    position: '1234cleaveally_1234enemy.png',
    name: 'Ectoplasmic Profusion',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'Cannot CRIT',
    damage: '2',
    effects: ' Stress +10<br> Summon 1 Large Ectoplasm'
},


{ 
    extrainfo: 'Requires 1 Corpse/Empty Space<br>',
    id: 'champ_cytokinesis(small)_desc',
    position: '1234ally_1234enemy.png',
    name: 'Cytokinesis',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'CRIT : 14%',
    damage: '2',
    effects: 'Summon 1 Ectoplasm'
},

{ 
    extrainfo: 'Requires 2 Corpses/Empty Spaces <br>',
    id: 'champ_ectoplasmic_profusion_desc',
    position: '1234cleaveally_1234enemy.png',
    name: 'Ectoplasmic Profusion',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'Cannot CRIT',
    damage: '2',
    effects: ' Stress +10<br> Summon 1 Large Ectoplasm'
},



//Large Ectoplasm 

{ 
    id: 'app_big_slime_desc',
    position: '1234ally_1234enemy.png',
    name: 'Big Slime',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'CRIT : 12%',
    damage: '4-8',
},

{ 
    id: 'vet_big_slime_desc',
    position: '1234ally_1234enemy.png',
    name: 'Big Slime',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'CRIT : 16%',
    damage: '5-11',
    effects: 'Debuff Target: <br> -2 SPD (3 rds) (120% Base) '
},

{ 
    id: 'champ_big_slime_desc',
    position: '1234ally_1234enemy.png',
    name: 'Big Slime',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'CRIT : 19%',
    damage: '7-15',
    effects: 'Debuff Target: <br> -3 SPD (3 rds) (140% Base) '
},

{ 
    id: 'app_slimesmack_desc',
    position: '12cleaveally_1234enemy.png',
    name: 'Slimesmack',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'CRIT : 2%',
    damage: '2-4',
    effects: 'Stun (100% Base)'
},

{ 
    id: 'vet_slimesmack_desc',
    position: '12cleaveally_1234enemy.png',
    name: 'Slimesmack',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'CRIT : 6%',
    damage: '3-5',
    effects: 'Stun (110% Base)'
},

{ 
    id: 'champ_slimesmack_desc',
    position: '12cleaveally_1234enemy.png',
    name: 'Slimesmack',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'CRIT : 9%',
    damage: '4-7',
    effects: 'Stun (120% Base)'
},

{ 
    extrainfo: 'Requires 1 Corpse/Empty Space<br>',
    id: 'app_cytokinesis(big)_desc',
    position: '1234ally_1234enemy.png',
    name: 'Cytokinesis',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'CRIT : 2%',
    damage: '2-4',
    effects: 'Summon 1 Ectoplasm'
},

{ 
    extrainfo: 'Requires 1 Corpse/Empty Space<br>',
    id: 'vet_cytokinesis(big)_desc',
    position: '1234ally_1234enemy.png',
    name: 'Cytokinesis',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'CRIT : 6%',
    damage: '3-5',
    effects: 'Summon 1 Ectoplasm'
},

{ 
    extrainfo: 'Requires 1 Corpse/Empty Space<br>',
    id: 'champ_cytokinesis(big)_desc',
    position: '1234ally_1234enemy.png',
    name: 'Cytokinesis',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'CRIT : 9%',
    damage: '4-7',
    effects: 'Summon 1 Ectoplasm'
},



//Crone

{ 
    extrainfo: 'Cooldown: 2 rds <br> Extra Target 1 (60% Chance)<br>',
    id: 'vet_curse_of_vulnerability_desc',
    position: '1234ally_1234enemy.png',
    name: 'Curse of Vulnerbility',
    type: 'Ranged',
    accuracy: 88.75,
    critRate: 'CRIT : 6%',
    damage: '1-2',
    effects: 'Mark Target (3 rds) <br> Debuff Target: <br> -7 ACC (3 rds) (120% Base) <br> -15 DODGE (3 rds) (120% Base)'
},

{ 
    extrainfo: 'Cooldown: 2 rds <br> Extra Target 1 (75% Chance)<br>',
    id: 'champ_curse_of_vulnerability_desc',
    position: '1234ally_1234enemy.png',
    name: 'Curse of Vulnerbility',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'CRIT : 9%',
    damage: '1-3',
    effects: 'Mark Target (3 rds) <br> Debuff Target: <br> -10 ACC (3 rds) (140% Base) <br> -20 DODGE (3 rds) (140% Base)'
},


{ 
    id: 'vet_fetid_censer_desc',
    position: '12cleaveally_12enemy.png',
    name: 'Fetid Censer',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'CRIT : 12%',
    damage: '2-3',
    effects: ' Stress +10<br> Blight (120% Base) 3 pts/rd for 3 rds <br> Disease (Any) (7% Chance) '
},

{ 
    id: 'champ_fetid_censer_desc',
    position: '12cleaveally_12enemy.png',
    name: 'Fetid Censer',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'CRIT : 14%',
    damage: '2-5',
    effects: ' Stress +10<br> Blight (140% Base) 4 pts/rd for 3 rds <br> Disease (Any) (9% Chance) '
},

{     
    extrainfo: 'Extra Target 1 (50% Chance)<br>',
    id: 'vet_embrace_the_dark_desc',
    position: '1234ally_1234enemy.png',
    name: 'Embrace the Dark',
    type: 'Ranged',
    accuracy: 88.75,
    critRate: 'Cannot CRIT',
    damage: '0',
    effects: ' Stress +10<br> -10 Torch '
},

{     
    extrainfo: 'Extra Target 1 (60% Chance)<br>',
    id: 'champ_embrace_the_dark_desc',
    position: '1234ally_1234enemy.png',
    name: 'Embrace the Dark',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'Cannot CRIT',
    damage: '0',
    effects: ' Stress +10<br> -10 Torch '
},



//Unclean Giant

    {
        id: 'vet_treebranch_smackdown_desc',
        position: '12ally_1234enemy.png',
        name: 'Treebranch Smackdown',
        type: 'Melee',
        accuracy: 83.75,
        critRate: 'CRIT : 14%',
        damage: '14-27',
        effects: 'Knockback 1 (120% Base)'
    },


    { 
        extrainfo: 'Cooldown: 2 rds<br>',
        id: 'vet_confusion_spores_desc',
        position: '1234cleaveally_1234enemy.png',
        name: 'Confusion Spores',
        type: 'Ranged',
        accuracy: 88.75,
        critRate: 'CRIT : 12%',
        damage: '2',
        effects: 'Shuffle Party (90% Base) <br> Debuff Target: <br> -7 ACC (3 rds) (120% Base)'
    },

    
    {
        extrainfo: 'Cooldown: 2 rds<br>',
        id: 'vet_poison_spores_desc',
        position: '1234ally_1234enemy.png',
        name: 'Poison Spores',
        type: 'Ranged',
        accuracy: 88.75,
        critRate: 'CRIT : 6%',
        damage: '2',
        effects: 'Blight (120% Base) 3 pts/rd for 3 rds'
    },

    {
        id: 'champ_treebranch_smackdown_desc',
        position: '12ally_1234enemy.png',
        name: 'Treebranch Smackdown',
        type: 'Melee',
        accuracy: 97.5,
        critRate: 'CRIT : 16%',
        damage: '19-37',
        effects: 'Knockback 1 (140% Base)'
    },


    { 
        extrainfo: 'Cooldown: 2 rds<br>',
        id: 'champ_confusion_spores_desc',
        position: '1234cleaveally_1234enemy.png',
        name: 'Confusion Spores',
        type: 'Ranged',
        accuracy: 102.5,
        critRate: 'CRIT : 14%',
        damage: '2',
        effects: 'Shuffle Party (100% Base) <br> Debuff Target: <br> -10 ACC (3 rds) (140% Base)'
    },

    
    {
        extrainfo: 'Cooldown: 2 rds<br>',
        id: 'champ_poison_spores_desc',
        position: '1234ally_1234enemy.png',
        name: 'Poison Spores',
        type: 'Ranged',
        accuracy: 102.5,
        critRate: 'CRIT : 9%',
        damage: '2',
        effects: 'Blight (140% Base) 4 pts/rd for 3 rds'
    },



//Hateful Virago
    { 
        extrainfo: 'Extra Target 1 (75% Chance)<br>',
        id: 'champ_ruinous_hex_desc',
        position: '1234ally_1234enemy.png',
        name: 'Ruinous Hex',
        type: 'Melee',
        accuracy: 97.5,
        critRate: 'CRIT : 9%',
        damage: '4-7',
        effects: 'Mark Target (3 rds) <br> Debuff Target: <br> -10 ACC (3 rds) (140% Base) <br> -20 DODGE (3 rds) (140% Base)'

    },

    { 
        id: 'champ_putrefying_breath_desc',
        position: '123ally_1234enemy.png',
        name: 'Putrefying Breath',
        type: 'Ranged',
        accuracy: 97.5,
        critRate: 'CRIT : 14%',
        damage: '6-13',
        effects: 'Blight (120% Base) 3 pts/rd for 3 rds <br> Knockback 1 (150% Base)'
    },

    { 
        id: 'champ_from_death_comes_life_desc',
        position: '1234enemy.png',
        name: 'From Death Comes Life',
        type: 'Auto Action',
        effects: 'At Round End: <br> Consumes a Corpse and <br> Creates a Necrotic Fungus'
    },

//Necrotic Fungus

    { 
        id: 'champ_necrotic_fungus_passive_desc',
        position: '1234cleaveally.png',
        name: 'Necrotic Fungus Passive',
        type: 'Hinderance',
        effects: 'All Heroes: <br> Disable Healing Skills'
    },
]

//Warrens Skill Descriptions

const warrenskills = [
//Chopper
    {
        id: 'app_butcher_cut_desc',
        position: '123ally_12enemy.png',
        name: 'Butcher Cut',
        type: 'Melee',
        accuracy: 82.5,
        critRate: 'CRIT : 12%',
        damage: '3-7',
        effects: 'Bleed (100% Base) 2 pts/rd for 3 rds'
    },

    {
        id: 'vet_butcher_cut_desc',
        position: '123ally_12enemy.png',
        name: 'Butcher Cut',
        type: 'Melee',
        accuracy: 88.75,
        critRate: 'CRIT : 16%',
        damage: '5-9',
        effects: 'Bleed (120% Base) 3 pts/rd for 3 rds <br> Debuff Target: <br> -33%  Healing  Recieved (3 rds) (120% Base)'
    },

    {
        id: 'champ_butcher_cut_desc',
        position: '123ally_12enemy.png',
        name: 'Butcher Cut',
        type: 'Melee',
        accuracy: 102.5,
        critRate: 'CRIT : 17%',
        damage: '7-13',
        effects: 'Bleed (140% Base) 4 pts/rd for 3 rds <br> Debuff Target: <br>  -50%  Healing  Recieved (3 rds) (140% Base)'
    },

    {
        id: 'app_ball_and_chain_desc',
        position: '34ally_1234enemy.png',
        name: 'Ball And Chain',
        type: 'Ranged',
        accuracy: 82.5,
        critRate: 'CRIT : 12%',
        damage: '2-4',
        effects: 'Knockback 1 (100% Base) <br> Stun (100% Base)'
    },

    {
        id: 'vet_ball_and_chain_desc',
        position: '34ally_1234enemy.png',
        name: 'Ball And Chain',
        type: 'Ranged',
        accuracy: 88.75,
        critRate: 'CRIT : 16%',
        damage: '3-5',
        effects: 'Knockback 1 (120% Base) <br> Stun (120% Base)'
    },

    {
        id: 'champ_ball_and_chain_desc',
        position: '34ally_1234enemy.png',
        name: 'Ball And Chain',
        type: 'Ranged',
        accuracy: 102.5,
        critRate: 'CRIT : 17%',
        damage: '4-8',
        effects: 'Knockback 1 (140% Base) <br> Stun (140% Base)'
    },
//Wretch

{
    id: 'app_vomit_desc',
    position: '1234ally_1234enemy.png',
    name: 'Vomit',
    type: 'Ranged',
    accuracy: 82.5,
    critRate: 'CRIT : 12%',
    damage: '1',
    effects: 'Stress + 10 <br> Disease (Any) (33% Chance)'
},

{
    id: 'vet_vomit_desc',
    position: '1234ally_1234enemy.png',
    name: 'Vomit',
    type: 'Ranged',
    accuracy: 88.75,
    critRate: 'CRIT : 16%',
    damage: '1-2',
    effects: 'Stress + 10 <br> Disease (Any) (33% Chance)  <br> Debuff Target: <br> -7 DODGE (3 rds) (120% Base)'
},

{
    id: 'champ_vomit_desc',
    position: '1234ally_1234enemy.png',
    name: 'Vomit',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'CRIT : 19%',
    damage: '1-3',
    effects: 'Stress + 10 <br> Disease (Any) (33% Chance) <br> Debuff Target: <br> -10 DODGE (3 rds) (140% Base)'
},

//Drummer

{
    id: 'app_drums_of_debilitation_desc',
    position: '1234ally_1234enemy.png',
    name: 'Drums of Debilitation',
    type: 'Ranged',
    accuracy: 82.5,
    critRate: 'CRIT : 6%',
    damage: '1',
    effects: 'Mark Target (3 rds) <br> Debuff Target: <br>  -10 DODGE (3 rds) (100% Base)'
},

{
    id: 'vet_drums_of_debilitation_desc',
    position: '1234ally_1234enemy.png',
    name: 'Drums of Debilitation',
    type: 'Ranged',
    accuracy: 88.75,
    critRate: 'CRIT : 12%',
    damage: '2',
    effects: 'Mark Target (3 rds) <br> Debuff Target: <br>  -15 DODGE (3 rds) (120% Base)'
},

{
    id: 'champ_drums_of_debilitation_desc',
    position: '1234ally_1234enemy.png',
    name: 'Drums of Debilitation',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'CRIT : 14%',
    damage: '2',
    effects: 'Mark Target (3 rds) <br> Debuff Target: <br>  -20 DODGE (3 rds) (140% Base)'
},

{
    id: 'app_drums_of_doom_desc',
    position: '1234cleaveally_1234enemy.png',
    name: 'Drums of Doom',
    type: 'Ranged',
    accuracy: 82.5,
    critRate: 'CRIT : 2%',
    damage: '1',
    effects: ' Stress +5(70% Chance)'
},

{
    id: 'vet_drums_of_doom_desc',
    position: '1234cleaveally_1234enemy.png',
    name: 'Drums of Doom',
    type: 'Ranged',
    accuracy: 88.75,
    critRate: 'CRIT : 6%',
    damage: '2',
    effects: ' Stress +5(70% Chance)'
},


{
    id: 'champ_drums_of_doom_desc',
    position: '1234cleaveally_1234enemy.png',
    name: 'Drums of Doom',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'CRIT : 9%',
    damage: '2',
    effects: ' Stress +5(70% Chance)'
},

//Slasher

{ 
    id: 'app_hook_where_it_hurts_desc',
    position: '123ally_1234enemy.png',
    name: 'Hook Where It Hurts',
    type: 'Melee',
    forward: 'Back 1',
    accuracy: 82.5,
    critRate: 'CRIT : 16%',
    damage: '3-7',
},

{ 
    id: 'vet_hook_where_it_hurts_desc',
    position: '123ally_1234enemy.png',
    name: 'Hook Where It Hurts',
    type: 'Melee',
    forward: 'Back 1',
    accuracy: 88.75,
    critRate: 'CRIT : 22%',
    damage: '5-9',
    effects: 'Debuff Target: <br> -20% Bleed Resist (3 rds) (120% Base) <br> -10% Disease Resist (3 rds) (120% Base)'
},

{ 
    id: 'champ_hook_where_it_hurts_desc',
    position: '123ally_1234enemy.png',
    name: 'Hook Where It Hurts',
    type: 'Melee',
    forward: 'Back 1',
    accuracy: 102.5,
    critRate: 'CRIT : 24%',
    damage: '6-13',
    effects: 'Debuff Target: <br> -30% Bleed Resist (3 rds) (140% Base) <br> -15% Disease Resist (3 rds) (140% Base)'
},

//Carrion Eater

{ 
    id: 'app_munch_desc',
    position: '123ally_1234enemy.png',
    name: 'Munch',
    type: 'Melee',
    accuracy: 87.5,
    critRate: 'CRIT : 12%',
    damage: '2-4',
    effects: '+100% DMG vs Branded <br> Blight (100% Base) 1 pt/rd for 3 rds '
},

{ 
    id: 'vet_munch_desc',
    position: '123ally_1234enemy.png',
    name: 'Munch',
    type: 'Melee',
    accuracy: 93.75,
    critRate: 'CRIT : 16%',
    damage: '3-5',
    effects: '+100% DMG vs Branded <br> Blight (120% Base) 2 pts/rd for 3 rds <br>  Disease (Any) (7% Chance)'
},

{ 
    id: 'champ_munch_desc',
    position: '123ally_1234enemy.png',
    name: 'Munch',
    type: 'Melee',
    accuracy: 107.5,
    critRate: 'CRIT : 19%',
    damage: '4-7',
    effects: '+100% DMG vs Branded <br> Blight (140% Base) 3 pts/rd for 3 rds <br>  Disease (Any) (9% Chance)'
},

//Large Carrion Eater

{ 
    id: 'vet_weaken_prey_desc',
    position: '123ally_1234enemy.png',
    name: 'Weaken Prey',
    type: 'Melee',
    accuracy: 93.75,
    critRate: 'CRIT : 12%',
    damage: '3-5',
    effects: 'Mark Target (3 rds) <br> Debuff Target: <br> -10 ACC (3 rds) (120% Base) <br> -25% DMG (3 rds) (120% Base) <br> -15% DMG (3 rds) (120% Base) '
},

{ 
    id: 'champ_weaken_prey_desc',
    position: '123ally_1234enemy.png',
    name: 'Weaken Prey',
    type: 'Melee',
    accuracy: 107.5,
    critRate: 'CRIT : 14%',
    damage: '4-7',
    effects: 'Mark Target (3 rds) <br> Debuff Target: <br> -10 ACC (3 rds) (140% Base) <br> -25% DMG (3 rds) (140% Base) <br> -15% DMG (3 rds) (140% Base) '
},

{ 
    id: 'vet_tentacle_devour_desc',
    position: '123ally_1234enemy.png',
    name: 'Tentacle Devour',
    type: 'Melee',
    accuracy: 93.75,
    critRate: 'CRIT : 16%',
    damage: '7-15',
    effects: '+100% DMG vs Branded <br> Debuff Target: <br> -5% CRIT (3 rds) (120% Base)'
},

{ 
    id: 'champ_tentacle_devour_desc',
    position: '123ally_1234enemy.png',
    name: 'Tentacle Devour',
    type: 'Melee',
    accuracy: 107.5,
    critRate: 'CRIT : 19%',
    damage: '10-20',
    effects: '+100% DMG vs Branded <br> Debuff Target: <br> -7% CRIT (3 rds) (140% Base)'
},


//Swinetaur

    {
        id: 'vet_pig_spear_desc',
        position: '1234cleaveally_34enemy.png',
        name: 'Pig Spear',
        type: 'Melee',
        forward: 'Forward 2',
        accuracy: 88.75,
        critRate: 'CRIT : 12%',
        damage: '4-10',
    },

    {
        id: 'champ_pig_spear_desc',
        position: '1234cleaveally_34enemy.png',
        name: 'Pig Spear',
        type: 'Melee',
        forward: 'Forward 2',
        accuracy: 102.5,
        critRate: 'CRIT : 14%',
        damage: '6-13',
    },


    { 
        id: 'vet_boar_rush_desc',
        position: '12ally_34enemy.png',
        name: 'Boar Rush',
        type: 'Melee',
        forward: 'Forward 2',
        accuracy: 88.75,
        critRate: 'CRIT : 16%',
        damage: '8-16',
        effects: 'Knockback 3 (140% Base) <br>  Stun (145% Base)'
    },

    { 
        id: 'champ_boar_rush_desc',
        position: '12ally_34enemy.png',
        name: 'Boar Rush',
        type: 'Melee',
        forward: 'Forward 2',
        accuracy: 102.5,
        critRate: 'CRIT : 19%',
        damage: '11-22',
        effects: 'Knockback 3 (160% Base) <br>  Stun (165% Base)'
    },

    { 
        id: 'vet_trot_retreat_desc',
        position: '1234ally_12enemy.png',
        name: 'Trot Retreat',
        type: 'Ranged',
        forward: 'Back 3',
        accuracy: 0,
        critRate: 'Cannot Crit',
        damage: '0',
    },

    { 
        id: 'champ_trot_retreat_desc',
        position: '1234ally_12enemy.png',
        name: 'Trot Retreat',
        type: 'Ranged',
        forward: 'Back 3',
        accuracy: 0,
        critRate: 'Cannot Crit',
        damage: '0',
    },

    { 
        extrainfo: 'Extra Target 1(50% Chance)<br>',
        id: 'vet_crunching_backhand_desc',
        position: '123ally_1enemy.png',
        name: 'Crunching Backhand',
        type: 'Melee',
        accuracy: 78.75,
        critRate: 'CRIT : 12%',
        damage: '5-9',
        effects: 'Stun (80% Base)'
    },

    { 
        extrainfo: 'Extra Target 1(60% Chance)<br>',
        id: 'champ_crunching_backhand_desc',
        position: '123ally_1enemy.png',
        name: 'Crunching Backhand',
        type: 'Melee',
        accuracy: 92.5,
        critRate: 'CRIT : 14%',
        damage: '6-13',
        effects: 'Stun (95% Base)'
    },

//Skiver

    { 
        extrainfo: 'Cooldown: 1 rd <br>',
        id: 'champ_spit_to_roast_desc',
        position: '123ally_234enemy.png',
        name: 'Spit to Roast',
        type: 'Ranged',
        forward: 'Forward 1',
        accuracy: 107.5,
        critRate: 'CRIT : 21%',
        damage: '12-18',
        effects: 'Knockback 3 (120% Base) <br>  Stun (130% Base)'
    },

    { 
        id: 'champ_cripple_them_desc',
        position: '234cleaveally_234enemy.png',
        name: 'Cripple Them',
        type: 'Ranged',
        accuracy: 97.5,
        critRate: 'CRIT : 9%',
        damage: '6-13',
        effects: 'Blight (120% Base) 3 pts/rd for 3 rds <br> Debuff Target: <br> -8 DODGE (3 rds) (130% Base) <br> -6 SPD (3 rds) (130% Base)'
    },

    { 
        id: 'champ_goring_flight_desc',
        position: '12ally_12enemy.png',
        name: 'Goring Flight',
        type: 'Melee',
        forward: 'Back 4',
        accuracy: 92.5,
        critRate: 'CRIT : 7%',
        damage: '4-7',
    },


];

const coveskills = [

    //Pelagic Grouper

        {
            id: 'app_seaward_slash_desc',
            position: '12ally_12enemy.png',
            name: 'Seaward Slash',
            type: 'Melee',
            accuracy: 77.5,
            critRate: 'CRIT : 2%',
            damage: '5-9',
        },

        {
            id: 'vet_seaward_slash_desc',
            position: '12ally_12enemy.png',
            name: 'Seaward Slash',
            type: 'Melee',
            accuracy: 83.75,
            critRate: 'CRIT : 6%',
            damage: '6-13',
        },

        {
            id: 'champ_seaward_slash_desc',
            position: '12ally_12enemy.png',
            name: 'Seaward Slash',
            type: 'Melee',
            accuracy: 97.5,
            critRate: 'CRIT : 9%',
            damage: '9-17',
        },
    
        {
            id: 'app_spearfishing_desc',
            position: '34ally_34enemy.png',
            name: 'Spearfishing',
            type: 'Melee',
            accuracy: 77.5,
            critRate: 'CRIT : 6%',
            damage: '3-7',
        },
    
        {
            id: 'vet_spearfishing_desc',
            position: '34ally_34enemy.png',
            name: 'Spearfishing',
            type: 'Melee',
            accuracy: 83.75,
            critRate: 'CRIT : 12%',
            damage: '5-9',
            effects: 'Pull 1 (120% Base)'
        },

        {
            id: 'champ_spearfishing_desc',
            position: '34ally_34enemy.png',
            name: 'Spearfishing',
            type: 'Melee',
            accuracy: 97.5,
            critRate: 'CRIT : 14%',
            damage: '6-13',
            effects: 'Pull 1 (140% Base)'
        },
    
    //Pelagic Guardian
    
    {
        id: 'app_octocestus_desc',
        position: '12ally_1234enemy.png',
        name: 'Octocestus',
        type: 'Melee',
        accuracy: 77.5,
        critRate: 'CRIT : 6%',
        damage: '3-5',
        effects: 'Bleed (100% Base) 2 pts/rd for 3 rds'
    },

    {
        id: 'vet_octocestus_desc',
        position: '12ally_1234enemy.png',
        name: 'Octocestus',
        type: 'Melee',
        accuracy: 83.75,
        critRate: 'CRIT : 12%',
        damage: '4-7',
        effects: 'Bleed (120% Base) 3 pts/rd for 3 rds'
    },

    {
        id: 'champ_octocestus_desc',
        position: '12ally_1234enemy.png',
        name: 'Octocestus',
        type: 'Melee',
        accuracy: 97.5,
        critRate: 'CRIT : 14%',
        damage: '5-10',
        effects: 'Bleed (140% Base) 4 pts/rd for 3 rds'
    },
    
    {    
        extrainfo: 'Cooldown: 2 rds<br>',
        id: 'app_barnacle_barrier_desc',
        position: '1234enemy.png',
        name: 'Barnacle Barrier',
        type: 'Support',
        effects: 'Guard Ally (3 rds) <br> Buff Self:<br> +25% PROT (3 rds)'
    },

    {    
        extrainfo: 'Cooldown: 2 rds<br>',
        id: 'vet_barnacle_barrier_desc',
        position: '1234enemy.png',
        name: 'Barnacle Barrier',
        type: 'Support',
        effects: 'Guard Ally (3 rds) <br> Buff Self:<br> +25% PROT (3 rds)'
    },

    {    
        extrainfo: 'Cooldown: 2 rds<br>',
        id: 'champ_barnacle_barrier_desc',
        position: '1234enemy.png',
        name: 'Barnacle Barrier',
        type: 'Support',
        effects: 'Guard Ally (3 rds) <br> Buff Self:<br> +25% PROT (3 rds)'
    },
    
    //Pelagic Shaman
    
    {    
        extrainfo: 'Extra Target 1 (25% Chance)<br>',
        id: 'app_stress_wave_desc',
        position: '1234ally_234enemy.png',
        name: 'Stress Wave',
        type: 'Ranged',
        forward: 'Back 1',
        accuracy: 82.5,
        critRate: 'Cannot CRIT',
        damage: '1',
        effects: ' Stress +15'
    },
    
    {
        extrainfo: 'Cooldown: 2 rds <br> Cannot Target Self<br>',
        id: 'app_call_of_the_deep_desc',
        position: '123enemy1234buff.png',
        name: 'Call of the Deep',
        type: 'Support',
        effects: 'Buff Target: <br> +5 ACC (3 rds) <br> +3% CRIT (3 rds) <br> +25% DMG (3 rds)'
    },

    {
        id: 'app_ceremonial_cut_desc',
        position: '12ally_1enemy.png',
        name: 'Ceremonial Cut',
        type: 'Melee',
        accuracy: 62.5,
        critRate: 'CRIT : 2%',
        damage: '2-4',
    },

    {
        extrainfo: 'Cooldown: 3 rds <br> Cannot Target Self<br>',
        id: 'app_sea_breeze_desc',
        position: '123enemy1234buff.png',
        name: 'Sea Breeze',
        type: 'Support',
        effects: 'Target Ally: <br> Heal 6-12'
    },

    {    
        extrainfo: 'Extra Target 1 (30% Chance)<br>',
        id: 'vet_stress_wave_desc',
        position: '1234ally_234enemy.png',
        name: 'Stress Wave',
        type: 'Ranged',
        forward: 'Back 1',
        accuracy: 88.75,
        critRate: 'Cannot CRIT',
        damage: '1-2',
        effects: 'Stress +15'
    },
    
    {
        extrainfo: 'Cooldown: 2 rds <br> Cannot Target Self<br>',
        id: 'vet_call_of_the_deep_desc',
        position: '123enemy1234buff.png',
        name: 'Call of the Deep',
        type: 'Support',
        effects: 'Buff Target: <br> +7 ACC (3 rds) <br> +5% CRIT (3 rds) <br> +25% DMG (3 rds)'
    },

    {
        id: 'vet_ceremonial_cut_desc',
        position: '12ally_1enemy.png',
        name: 'Ceremonial Cut',
        type: 'Melee',
        accuracy: 68.75,
        critRate: 'CRIT : 6%',
        damage: '3-5',
    },

    {
        extrainfo: 'Cooldown: 2 rds <br> Cannot Target Self<br>',
        id: 'vet_sea_breeze_desc',
        position: '123enemy1234buff.png',
        name: 'Sea Breeze',
        type: 'Support',
        effects: 'Target Ally: <br> Heal 8-14'
    },

    {    
        extrainfo: 'Extra Target 1 (35% Chance)<br>',
        id: 'champ_stress_wave_desc',
        position: '1234ally_234enemy.png',
        name: 'Stress Wave',
        type: 'Ranged',
        forward: 'Back 1',
        accuracy: 102.5,
        critRate: 'Cannot CRIT',
        damage: '1-3',
        effects: ' Stress +15'
    },
    
    {
        extrainfo: 'Cooldown: 2 rds <br> Cannot Target Self<br>',
        id: 'champ_call_of_the_deep_desc',
        position: '123enemy1234buff.png',
        name: 'Call of the Deep',
        type: 'Support',
        effects: 'Buff Target: <br> +10 ACC (3 rds) <br> +7% CRIT (3 rds) <br> +25% DMG (3 rds)'
    },

    {
        id: 'champ_ceremonial_cut_desc',
        position: '12ally_1enemy.png',
        name: 'Ceremonial Cut',
        type: 'Melee',
        accuracy: 82.5,
        critRate: 'CRIT : 9%',
        damage: '4-7',
    },

    {
        extrainfo: 'Cooldown: 2 rds <br> Cannot Target Self<br>',
        id: 'champ_sea_breeze_desc',
        position: '123enemy1234buff.png',
        name: 'Sea Breeze',
        type: 'Support',
        effects: 'Target Ally: <br> Heal 10-18'
    },
    
    
    //Deep Stinger
    
    { 
        id: 'app_shocker_desc',
        position: '1234ally_1234enemy.png',
        name: 'Shocker',
        type: 'Melee',
        accuracy: 92.5,
        critRate: 'CRIT : 6%',
        damage: '1',
        effects:'Stun (100% Base) <br> Disease (Any) (6% Chance) <br> Debuff Target: <br> -20% Bleed Resist (3 rds) (100% Base)',
    },

    { 
        id: 'app_salty_gouge_desc',
        position: '1234ally_1234enemy.png',
        name: 'Salty Gouge',
        type: 'Melee',
        accuracy: 92.5,
        critRate: 'CRIT : 6%',
        damage: '2-4',
        effects:'Bleed (100% Base) 2 pts/rd for 3 rds <br> Disease (Any) (6% Chance) <br> Debuff Target: <br> -5 DODGE (3 rds) (100% Base)',
    },

    { 
        id: 'vet_shocker_desc',
        position: '1234ally_1234enemy.png',
        name: 'Shocker',
        type: 'Melee',
        accuracy: 98.75,
        critRate: 'CRIT : 12%',
        damage: '1-2',
        effects:'Stun (120% Base) <br> Disease (Any) (6% Chance) <br> Debuff Target: <br> -30% Bleed Resist (3 rds) (120% Base)',
    },

    { 
        id: 'vet_salty_gouge_desc',
        position: '1234ally_1234enemy.png',
        name: 'Salty Gouge',
        type: 'Melee',
        accuracy: 98.75,
        critRate: 'CRIT : 12%',
        damage: '3-5',
        effects:'Bleed (120% Base) 3 pts/rd for 3 rds <br> Disease (Any) (6% Chance) <br> Debuff Target: <br> -7 DODGE (3 rds) (120% Base)',
    },

    { 
        id: 'champ_shocker_desc',
        position: '1234ally_1234enemy.png',
        name: 'Shocker',
        type: 'Melee',
        accuracy: 112.5,
        critRate: 'CRIT : 14%',
        damage: '1-3',
        effects:'Stun (140% Base) <br> Disease (Any) (6% Chance) <br> Debuff Target: <br> -40% Bleed Resist (3 rds) (140% Base)',
    },

    { 
        id: 'champ_salty_gouge_desc',
        position: '1234ally_1234enemy.png',
        name: 'Salty Gouge',
        type: 'Melee',
        accuracy: 112.5,
        critRate: 'CRIT : 14%',
        damage: '4-7',
        effects:'Bleed (140% Base) 4 pts/rd for 3 rds <br> Disease (Any) (6% Chance) <br> Debuff Target: <br> -10 DODGE (3 rds) (140% Base)',
    },
    
    
    
    //Drowned Thrall
    
    { 
        id: 'app_gargling_grab_desc',
        position: '12ally_1234enemy.png',
        name: 'Gargling Grab',
        type: 'Melee',
        accuracy: 62.5,
        critRate: 'CRIT : 2%',
        damage: '5-9',
        effects: ' Stress +10'
    },

    { 
        extrainfo: 'Used if 2nd time using a Skill <br> Cannot be Riposted<br>',
        id: 'app_the_revenge_desc',
        position: '1234cleaveally_1234enemy.png',
        name: 'The Revenge',
        type: 'Melee',
        accuracy: 72.5,
        critRate: 'CRIT : 2%',
        damage: '5-13',
        effects: ' Stress +5<br> Kill Self '
    },

    { 
        id: 'vet_gargling_grab_desc',
        position: '12ally_1234enemy.png',
        name: 'Gargling Grab',
        type: 'Melee',
        accuracy: 68.75,
        critRate: 'CRIT : 6%',
        damage: '6-13',
        effects: ' Stress +10'
    },

    { 
        extrainfo: 'Used if 2nd time using a Skill <br> Cannot be Riposted<br>',
        id: 'vet_the_revenge_desc',
        position: '1234cleaveally_1234enemy.png',
        name: 'The Revenge',
        type: 'Melee',
        accuracy: 78.75,
        critRate: 'CRIT : 6%',
        damage: '7-17',
        effects: 'Stress +8 <br> Kill Self '
    },

    { 
        id: 'champ_gargling_grab_desc',
        position: '12ally_1234enemy.png',
        name: 'Gargling Grab',
        type: 'Melee',
        accuracy: 82.5,
        critRate: 'CRIT : 9%',
        damage: '9-17',
        effects: ' Stress +10'
    },

    { 
        extrainfo: 'Used if 2nd time using a Skill <br> Cannot be Riposted<br>',
        id: 'champ_the_revenge_desc',
        position: '1234cleaveally_1234enemy.png',
        name: 'The Revenge',
        type: 'Melee',
        accuracy: 92.5,
        critRate: 'CRIT : 9%',
        damage: '10-23',
        effects: ' Stress +13<br> Kill Self '
    },
    
    
    //Sea Maggot
    
    { 
        id: 'app_brine_desc',
        position: '1234ally_1234enemy.png',
        name: 'Brine',
        type: 'Melee',
        accuracy: 62.5,
        critRate: 'CRIT : 2%',
        damage: '2-4',
        effects: 'Disease (Any) (8% Chance) <br> Debuff Target: <br> -20 DODGE (3 rds) (100% Base) <br> -3 SPD (3 rds) (100% Base)'
    },

    { 
        id: 'vet_brine_desc',
        position: '1234ally_1234enemy.png',
        name: 'Brine',
        type: 'Melee',
        accuracy: 68.75,
        critRate: 'CRIT : 6%',
        damage: '3-5',
        effects: 'Disease (Any) (8% Chance) <br> Debuff Target: <br> -20 DODGE (3 rds) (120% Base) <br> -3 SPD (3 rds) (120% Base)'
    },

    { 
        id: 'champ_brine_desc',
        position: '1234ally_1234enemy.png',
        name: 'Brine',
        type: 'Melee',
        accuracy: 82.5,
        critRate: 'CRIT : 9%',
        damage: '4-7',
        effects: 'Disease (Any) (8% Chance) <br> Debuff Target: <br> -20 DODGE (3 rds) (140% Base) <br> -3 SPD (3 rds) (140% Base)'
    },
    
    
    //Uca Crusher
    
        {
            id: 'vet_arterial_pinch_desc',
            position: '123ally_123enemy.png',
            name: 'Arterial Pinch',
            type: 'Melee',
            accuracy: 88.75,
            critRate: 'CRIT : 12%',
            damage: '1-2',
            effects: 'Bleed (120% Base) 8 pts/rd for 3 rds  <br> Debuff Target: <br> -33% Healing Received (3 rds) (120% Base)'
        },
    
    
        { 
            id: 'vet_tidal_slam_desc',
            position: '12ally_12enemy.png',
            name: 'Tidal Slam',
            type: 'Melee',
            accuracy: 88.75,
            critRate: 'CRIT : 12%',
            damage: '5-9',
            effects: 'Knockback 3 (120% Base) <br>  Stun (120% Base)'
        },

        {
            id: 'champ_arterial_pinch_desc',
            position: '123ally_123enemy.png',
            name: 'Arterial Pinch',
            type: 'Melee',
            accuracy: 102.5,
            critRate: 'CRIT : 14%',
            damage: '1-3',
            effects: 'Bleed (140% Base) 10 pts/rd for 3 rds  <br> Debuff Target: <br> -33% Healing Received (3 rds) (140% Base)'
        },
    
       
        { 
            id: 'champ_tidal_slam_desc',
            position: '12ally_12enemy.png',
            name: 'Tidal Slam',
            type: 'Melee',
            accuracy: 102.5,
            critRate: 'CRIT : 14%',
            damage: '6-13',
            effects: 'Knockback 3 (140% Base) <br>  Stun (140% Base)'
        },
    
    //Squiffy Ghast
        
        { 
            extrainfo: 'If present, Jester is always targetted<br>',
            id: 'champ_maddening_shanty_desc',
            position: '1234ally_1234enemy.png',
            name: 'Maddening Shanty',
            type: 'Ranged',
            forward: 'Forward 4',
            accuracy: 87.5,
            critRate: 'Cannot CRIT',
            damage: '1-3',
            effects: 'Stress +8  <br> Debuff Target: <br>  +10% Stress (until camp) (100% Base)'
        },
    
        { 
            extrainfo: 'Cooldown: 1 rd <br> Requires 2 other enemies to be present<br>',
            id: 'champ_offkilter_jig_desc',
            position: '1234cleaveally_12enemy.png',
            name: 'Offkilter Jig',
            type: 'Ranged',
            forward: 'Back 4',
            accuracy: 87.5,
            critRate: 'Cannot CRIT',
            damage: '0',
            effects: ' Stress +9 <br> Horror 5 stress/rd for 4 rds'
        },
    
    
    ];

const sharedskills = [
//Brigand Cutthroat
    {
        id: 'app_slice_and_dice_desc',
        position: '12cleaveally_123enemy.png',
        name: 'Slice and Dice',
        type: 'Melee',
        accuracy: 72.5,
        critRate: 'CRIT : 12%',
        damage: '3-5',
        effects: 'Debuff Target: <br> -15%  Bleed Resist (3 rds) (100% Base)'
    },

    {
        id: 'app_uppercut_slice_desc',
        position: '123ally_12enemy.png',
        name: 'Uppercut Slice',
        type: 'Melee',
        accuracy: 72.5,
        critRate: 'CRIT : 6%',
        damage: '2-4',
        effects: 'Knockback 1 (100% Base)'
    },

    {
        id: 'app_shank_desc',
        position: '1234ally_123enemy.png',
        name: 'Shank',
        type: 'Melee',
        accuracy: 72.5,
        critRate: 'CRIT : 6%',
        damage: '4-8',
        effects: 'Bleed (100% Base) 1 pt/rd for 3 rds'
    },

    {
        id: 'app_harmless_poke_desc',
        position: '1234ally_4enemy.png',
        name: 'Harmless Poke',
        type: 'Melee',
        forward: 'Forward 1',
        accuracy: 42.5,
        critRate: 'Cannot CRIT',
        damage: '2-4',
        effects: 'On Attack Hit: <br> Buff Self: <br> +2 SPD (3 rds)'
    },

    {
        id: 'vet_slice_and_dice_desc',
        position: '12cleaveally_123enemy.png',
        name: 'Slice and Dice',
        type: 'Melee',
        accuracy: 78.75,
        critRate: 'CRIT : 16%',
        damage: '4-7',
        effects: 'Debuff Target: <br> -25%  Bleed Resist (3 rds) (120% Base)'
    },

    {
        id: 'vet_uppercut_slice_desc',
        position: '123ally_12enemy.png',
        name: 'Uppercut Slice',
        type: 'Melee',
        accuracy: 78.75,
        critRate: 'CRIT : 12%',
        damage: '3-5',
        effects: 'Knockback 1 (120% Base)'
    },

    {
        id: 'vet_shank_desc',
        position: '1234ally_123enemy.png',
        name: 'Shank',
        type: 'Melee',
        accuracy: 82.5,
        critRate: 'CRIT : 12%',
        damage: '5-11',
        effects: 'Bleed (120% Base) 2 pts/rd for 3 rds'
    },

    {
        id: 'vet_harmless_poke_desc',
        position: '1234ally_4enemy.png',
        name: 'Harmless Poke',
        type: 'Melee',
        forward: 'Forward 1',
        accuracy: 52.5,
        critRate: 'Cannot CRIT',
        damage: '3-5',
        effects: 'On Attack Hit: <br> Buff Self: <br> +2 SPD (3 rds)'
    },


    {
        id: 'champ_slice_and_dice_desc',
        position: '12cleaveally_123enemy.png',
        name: 'Slice and Dice',
        type: 'Melee',
        accuracy: 92.5,
        critRate: 'CRIT : 19%',
        damage: '5-10',
        effects: 'Debuff Target: <br> -35%  Bleed Resist (3 rds) (140% Base)'
    },

    {
        id: 'champ_uppercut_slice_desc',
        position: '123ally_12enemy.png',
        name: 'Uppercut Slice',
        type: 'Melee',
        accuracy: 92.5,
        critRate: 'CRIT : 14%',
        damage: '4-7',
        effects: 'Knockback 1 (140% Base)'
    },

    {
        id: 'champ_shank_desc',
        position: '1234ally_123enemy.png',
        name: 'Shank',
        type: 'Melee',
        accuracy: 90,
        critRate: 'CRIT : 14%',
        damage: '7-15',
        effects: 'Bleed (140% Base) 3 pts/rd for 3 rds'
    },

    {
        id: 'champ_harmless_poke_desc',
        position: '1234ally_4enemy.png',
        name: 'Harmless Poke',
        type: 'Melee',
        forward: 'Forward 1',
        accuracy: 60,
        critRate: 'Cannot CRIT',
        damage: '4-7',
        effects: 'On Attack Hit: <br> Buff Self: <br> +2 SPD (3 rds)'
    },


   
//Brigand Bloodletter
{
    id: 'app_rain_of_whips_desc',
    position: '1234cleaveally_12enemy.png',
    name: 'Rain of Whips',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'Cannot CRIT',
    damage: '1',
    effects: 'Bleed (100% Base) 1 pt/rd for 3 rds <br> Stress + 5 '
},

{
    id: 'app_punishment_desc',
    position: '1234ally_1234enemy.png',
    name: 'Punishment',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'CRIT : 12%',
    damage: '2-4',
    effects: 'Bleed (100% Base) 2 pts/rd for 3 rds <br> Stress + 5'
},

{
    extrainfo:'Cooldown: 2 rds<br>',
    id: 'app_point_blank_shot_desc',
    position: '1ally_1enemy.png',
    name: 'Point Blank Shot',
    type: 'Ranged',
    accuracy: 82.5,
    critRate: 'CRIT : 16%',
    damage: '4-11',
    effects: 'Knockback 1 (100% Base) <br> Debuff Self: <br> -2 SPD (3 rds)'
},

{
    id: 'vet_rain_of_whips_desc',
    position: '1234cleaveally_12enemy.png',
    name: 'Rain of Whips',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'CRIT : 4%',
    damage: '1-2',
    effects: 'Bleed (120% Base) 2 pts/rd for 3 rds <br> Stress + 5 '
},

{
    id: 'vet_punishment_desc',
    position: '1234ally_1234enemy.png',
    name: 'Punishment',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'CRIT : 16%',
    damage: '3-5',
    effects: 'Bleed (120% Base) 3 pts/rd for 3 rds <br> Stress + 5'
},

{
    id: 'vet_point_blank_shot_desc',
    position: '1ally_1enemy.png',
    name: 'Point Blank Shot',
    type: 'Ranged',
    accuracy: 92.5,
    critRate: 'CRIT : 22%',
    damage: '5-14',
    effects: 'Knockback 1 (120% Base) <br> Debuff Self: <br> -2 SPD (3 rds)'
},

{
    id: 'champ_rain_of_whips_desc',
    position: '1234cleaveally_12enemy.png',
    name: 'Rain of Whips',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'CRIT : 7%',
    damage: '1-3',
    effects: 'Bleed (140% Base) 3 pts/rd for 3 rds <br> Stress + 5 '
},

{
    id: 'champ_punishment_desc',
    position: '1234ally_1234enemy.png',
    name: 'Punishment',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'CRIT : 19%',
    damage: '4-7',
    effects: 'Bleed (140% Base) 4 pts/rd for 3 rds <br> Stress + 5'
},

{
    id: 'champ_point_blank_shot_desc',
    position: '1ally_1enemy.png',
    name: 'Point Blank Shot',
    type: 'Ranged',
    accuracy: 100,
    critRate: 'CRIT : 24%',
    damage: '7-20',
    effects: 'Knockback 1 (140% Base) <br> Debuff Self: <br> -2 SPD (3 rds)'
},

//Brigand Fusilier

{
    id: 'app_blanket_fire_desc',
    position: '1234cleaveally_234enemy.png',
    name: 'Blanket Fire',
    type: 'Ranged',
    accuracy: 72.5,
    critRate: 'Cannot CRIT',
    damage: '1-3',
    effects: 'Debuff Target: <br>  -2 DODGE (3 rds) (100% Base)'
},

{
    id: 'app_rushed_shot_desc',
    position: '123ally_1enemy.png',
    name: 'Rushed Shot',
    type: 'Melee',
    forward:'Back 1',
    accuracy: 62.5,
    critRate: 'CRIT : 6%',
    damage: '2-4',
},

{
    id: 'vet_blanket_fire_desc',
    position: '1234cleaveally_234enemy.png',
    name: 'Blanket Fire',
    type: 'Ranged',
    accuracy: 78.75,
    critRate: 'CRIT : 4%',
    damage: '1-4',
    effects: 'Debuff Target: <br>  -4 DODGE (3 rds) (120% Base)'
},

{
    id: 'vet_rushed_shot_desc',
    position: '123ally_1enemy.png',
    name: 'Rushed Shot',
    type: 'Melee',
    forward:'Back 1',
    accuracy: 68.75,
    critRate: 'CRIT : 12%',
    damage: '3-5',
},

{
    id: 'champ_blanket_fire_desc',
    position: '1234cleaveally_234enemy.png',
    name: 'Blanket Fire',
    type: 'Ranged',
    accuracy: 92.5,
    critRate: 'CRIT : 7%',
    damage: '2-5',
    effects: 'Debuff Target: <br>  -6 DODGE (3 rds) (140% Base)'
},

{
    id: 'champ_rushed_shot_desc',
    position: '123ally_1enemy.png',
    name: 'Rushed Shot',
    type: 'Melee',
    forward:'Back 1',
    accuracy: 82.5,
    critRate: 'CRIT : 14%',
    damage: '4-7',
},


//Cultist Brawler

{ 
    id: 'app_rend_for_the_old_gods_desc',
    position: '12ally_12enemy.png',
    name: 'Rend for the Old Gods',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 72.5,
    critRate: 'CRIT : 12%',
    damage: '2-4',
    effects: '+50% DMG vs Branded <br> Bleed (100% Base) 1 pt/rd for 3 rds <br> Debuff Target: <br> +10% Stress (3 rds) (100% Base)'
},

{ 
    id: 'app_stumbling_scratch_desc',
    position: '12ally_34enemy.png',
    name: 'Stumbling Scratch',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 42.5,
    critRate: 'Cannot CRIT',
    damage: '2-4',
},

{ 
    id: 'vet_rend_for_the_old_gods_desc',
    position: '12ally_12enemy.png',
    name: 'Rend for the Old Gods',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 78.75,
    critRate: 'CRIT : 16%',
    damage: '3-5',
    effects: '+50% DMG vs Branded <br> Bleed (120% Base) 2 pts/rd for 3 rds <br> Debuff Target: <br> +15% Stress (3 rds) (120% Base)'
},

{ 
    id: 'vet_stumbling_scratch_desc',
    position: '12ally_34enemy.png',
    name: 'Stumbling Scratch',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 48.75,
    critRate: 'Cannot CRIT',
    damage: '3-5',
},

{ 
    id: 'champ_rend_for_the_old_gods_desc',
    position: '12ally_12enemy.png',
    name: 'Rend for the Old Gods',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 92.5,
    critRate: 'CRIT : 19%',
    damage: '4-7',
    effects: '+50% DMG vs Branded <br> Bleed (140% Base) 3 pts/rd for 3 rds <br> Debuff Target: <br> +20% Stress (3 rds) (140% Base)'
},

{ 
    id: 'champ_stumbling_scratch_desc',
    position: '12ally_34enemy.png',
    name: 'Stumbling Scratch',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 62.5,
    critRate: 'Cannot CRIT',
    damage: '4-7',
},


//Cultist Acolyte

{ 
    id: 'app_stressful_incantation_desc',
    position: '1234ally_1234enemy.png',
    name: 'Stressful Incantation',
    type: 'Ranged',
    accuracy: 82.5,
    critRate: 'Cannot CRIT',
    damage: '1',
    effects: ' Stress +15<br> Torch -10 '
},

{ 
    id: 'app_eldritch_pull_desc',
    position: '34ally_234enemy.png',
    name: 'Eldritch Pull',
    type: 'Ranged',
    accuracy: 82.5,
    critRate: 'CRIT : 6%',
    damage: '1',
    effects: 'Pull 2 (100% Base)'
},

{ 
    id: 'app_eldritch_push_desc',
    position: '12ally_1234enemy.png',
    name: 'Eldritch Push',
    type: 'Ranged',
    accuracy: 82.5,
    critRate: 'CRIT : 6%',
    damage: '1',
    effects: 'Knockback 2 (100% Base)'
},

{ 
    id: 'vet_stressful_incantation_desc',
    position: '1234ally_1234enemy.png',
    name: 'Stressful Incantation',
    type: 'Ranged',
    accuracy: 92.5,
    critRate: 'Cannot CRIT',
    damage: '1-2',
    effects: ' Stress +17<br> Torch -10 <br> Mark Target (3 rds) '
},

{ 
    extrainfo:'Cooldown: 2 rds<br>',
    id: 'vet_eldritch_pull_desc',
    position: '34ally_234enemy.png',
    name: 'Eldritch Pull',
    type: 'Ranged',
    accuracy: 88.75,
    critRate: 'CRIT : 12%',
    damage: '1-2',
    effects: 'Pull 2 (120% Base) <br> Stress +5'
},

{
    extrainfo:'Cooldown: 2 rds<br>', 
    id: 'vet_eldritch_push_desc',
    position: '12ally_1234enemy.png',
    name: 'Eldritch Push',
    type: 'Ranged',
    accuracy: 88.75,
    critRate: 'CRIT : 12%',
    damage: '1-2',
    effects: 'Knockback 2 (120% Base) <br> Stress +5'
},


{ 
    id: 'champ_stressful_incantation_desc',
    position: '1234ally_1234enemy.png',
    name: 'Stressful Incantation',
    type: 'Ranged',
    accuracy: 100,
    critRate: 'Cannot CRIT',
    damage: '1-3',
    effects: ' Stress +20 <br> Torch -10 <br> Mark Target (3 rds) '
},

{ 
    extrainfo:'Cooldown: 2 rds<br>',
    id: 'champ_eldritch_pull_desc',
    position: '34ally_234enemy.png',
    name: 'Eldritch Pull',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'CRIT : 14%',
    damage: '1-3',
    effects: 'Pull 2 (140% Base) <br>  Stress +8'
},

{
    extrainfo:'Cooldown: 2 rds<br>', 
    id: 'champ_eldritch_push_desc',
    position: '12ally_1234enemy.png',
    name: 'Eldritch Push',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'CRIT : 14%',
    damage: '1-3',
    effects: 'Knockback 2 (140% Base) <br>  Stress +8'
},

//Madman

{ 
    id: 'app_accusation_desc',
    position: '1234ally_1234enemy.png',
    name: 'Accusation',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'Cannot CRIT',
    damage: '1',
    effects: 'Horror  3 stress/rd for 4 rds <br> Debuff Target: <br> +15% Stress (until camp) (100% Base)',
},

{ 
    id: 'app_doomsay_desc',
    position: '1234cleaveally_1234enemy.png',
    name: 'Doomsay',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'Cannot CRIT',
    damage: '0',
    effects: ' Stress +7 (80% Chance) '
},

{ 
    id: 'vet_accusation_desc',
    position: '1234ally_1234enemy.png',
    name: 'Accusation',
    type: 'Ranged',
    accuracy: 108.75,
    critRate: 'Cannot CRIT',
    damage: '1-2',
    effects: 'Horror 4 stress/rd for 4 rds <br> Debuff Target: <br> +15% Stress (until camp) (120% Base)',
},

{ 
    id: 'vet_doomsay_desc',
    position: '1234cleaveally_1234enemy.png',
    name: 'Doomsay',
    type: 'Ranged',
    accuracy: 108.75,
    critRate: 'Cannot CRIT',
    damage: '0',
    effects: ' Stress +9 (80% Chance) '
},

{ 
    id: 'champ_accusation_desc',
    position: '1234ally_1234enemy.png',
    name: 'Accusation',
    type: 'Ranged',
    accuracy: 122.5,
    critRate: 'Cannot CRIT',
    damage: '1-3',
    effects: 'Horror 4 stress/rd for 4 rds <br> Debuff Target: <br> +15% Stress (until camp) (140% Base)',
},

{ 
    id: 'champ_doomsay_desc',
    position: '1234cleaveally_1234enemy.png',
    name: 'Doomsay',
    type: 'Ranged',
    accuracy: 122.5,
    critRate: 'Cannot CRIT',
    damage: '0',
    effects: ' Stress +9 (80% Chance) '
},

//Webber

{ 
    id: 'app_web_desc',
    position: '1234ally_1234enemy.png',
    name: 'Web',
    type: 'Ranged',
    accuracy: 82.5,
    critRate: 'CRIT : 6%',
    damage: '1',
    effects: 'Stun (100% Base) <br> Mark Target (3 rds) <br> Debuff Target: <br> -15% Blight Resist (3 rds) (100% Base) ',
},

{ 
    id: 'app_bite(webber)_desc',
    position: '1234ally_1234enemy.png',
    name: 'Bite',
    type: 'Melee',
    accuracy: 72.5,
    critRate: 'CRIT : 2%',
    damage: '1-3',
    effects: '+100% DMG vs Branded <br> Blight (100% Base) 1 pt/rd for 3 rds'
},

{ 
    id: 'vet_web_desc',
    position: '1234ally_1234enemy.png',
    name: 'Web',
    type: 'Ranged',
    accuracy: 88.75,
    critRate: 'CRIT : 12%',
    damage: '2',
    effects: 'Stun (120% Base) <br> Mark Target (3 rds) <br> Debuff Target: <br> -20% Blight Resist (3 rds) (120% Base) ',
},

{ 
    id: 'vet_bite(webber)_desc',
    position: '1234ally_1234enemy.png',
    name: 'Bite',
    type: 'Melee',
    accuracy: 78.75,
    critRate: 'CRIT : 6%',
    damage: '2-3',
    effects: '+100% DMG vs Branded <br> Blight (120% Base) 2 pts/rd for 3 rds'
},


{ 
    id: 'champ_web_desc',
    position: '1234ally_1234enemy.png',
    name: 'Web',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'CRIT : 14%',
    damage: '2',
    effects: 'Stun (140% Base) <br> Mark Target (3 rds) <br> Debuff Target: <br> -25% Blight Resist (3 rds) (140% Base) ',
},

{ 
    id: 'champ_bite(webber)_desc',
    position: '1234ally_1234enemy.png',
    name: 'Bite',
    type: 'Melee',
    accuracy: 92.5,
    critRate: 'CRIT : 9%',
    damage: '2-5',
    effects: '+100% DMG vs Branded <br> Blight (140% Base) 3 pts/rd for 3 rds'
},


//Spitter

{ 
    id: 'app_spit_desc',
    position: '1234ally_34enemy.png',
    name: 'Spit',
    type: 'Ranged',
    accuracy: 82.5,
    critRate: 'CRIT : 12%',
    damage: '3-5',
    effects: '+100% DMG vs Branded <br> Blight (100% Base) 1 pt/rd for 3 rds <br>Debuff Target: <br> -5 ACC (3 rds) (100% Base)'
},

{ 
    id: 'app_bite(spitter)_desc',
    position: '1234ally_12enemy.png',
    name: 'Bite',
    type: 'Melee',
    accuracy: 72.5,
    critRate: 'CRIT : 2%',
    damage: '1-3',
    effects: '+100% DMG vs Branded <br> Blight (100% Base) 1 pt/rd for 3 rds'
},

{ 
    id: 'vet_spit_desc',
    position: '1234ally_34enemy.png',
    name: 'Spit',
    type: 'Ranged',
    accuracy: 88.75,
    critRate: 'CRIT : 16%',
    damage: '4-7',
    effects: '+100% DMG vs Branded <br> Blight (120% Base) 2 pts/rd for 3 rds <br>Debuff Target: <br> -7 ACC (3 rds) (120% Base)'
},

{ 
    id: 'vet_bite(spitter)_desc',
    position: '1234ally_12enemy.png',
    name: 'Bite',
    type: 'Melee',
    accuracy: 78.75,
    critRate: 'CRIT : 6%',
    damage: '2-3',
    effects: '+100% DMG vs Branded <br> Blight (120% Base) 2 pts/rd for 3 rds'
},

{ 
    id: 'champ_spit_desc',
    position: '1234ally_34enemy.png',
    name: 'Spit',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'CRIT : 19%',
    damage: '5-10',
    effects: '+100% DMG vs Branded <br> Blight (140% Base) 3 pts/rd for 3 rds <br>Debuff Target: <br> -10 ACC (3 rds) (140% Base)'
},

{ 
    id: 'champ_bite(spitter)_desc',
    position: '1234ally_12enemy.png',
    name: 'Bite',
    type: 'Melee',
    accuracy: 92.5,
    critRate: 'CRIT : 9%',
    damage: '2-5',
    effects: '+100% DMG vs Branded <br> Blight (140% Base) 3 pts/rd for 3 rds'
},


//Maggot

{ 
    id: 'app_grave_nibble_desc',
    position: '1234ally_1234enemy.png',
    name: 'Grave Nibble',
    type: 'Melee',
    accuracy: 62.5,
    critRate: 'CRIT : 12%',
    damage: '2-4',
    effects: 'Stress +5 <br> Stun (75% Base) <br> Disease (Any) (15% Chance) '
},

{ 
    id: 'vet_grave_nibble_desc',
    position: '1234ally_1234enemy.png',
    name: 'Grave Nibble',
    type: 'Melee',
    accuracy: 68.75,
    critRate: 'CRIT : 16%',
    damage: '3-5',
    effects: 'Stress +5 <br> Stun (85% Base) <br> Disease (Any) (15% Chance) '
},

{ 
    id: 'champ_grave_nibble_desc',
    position: '1234ally_1234enemy.png',
    name: 'Grave Nibble',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'CRIT : 19%',
    damage: '4-7',
    effects: 'Stress +5 <br> Stun (95% Base) <br> Disease (Any) (15% Chance) '
},

//Bone Rabble

{ 
    id: 'app_bump_in_the_night_desc',
    position: '12ally_123enemy.png',
    name: 'Bump in the Night',
    type: 'Melee',
    accuracy: 62.5,
    critRate: 'CRIT : 2%',
    damage: '2-5',
},

{ 
    id: 'app_tic-toc_desc',
    position: '12ally_4enemy.png',
    name: 'Tic-Toc',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 42.5,
    critRate: 'Cannot CRIT',
    damage: '2-5',
},

{ 
    id: 'vet_bump_in_the_night_desc',
    position: '12ally_123enemy.png',
    name: 'Bump in the Night',
    type: 'Melee',
    accuracy: 68.75,
    critRate: 'CRIT : 6%',
    damage: '2-6',
    effects: 'Debuff Target: <br> -7 DODGE (3 rds) (120% Base) ',
},

{ 
    id: 'vet_tic-toc_desc',
    position: '12ally_4enemy.png',
    name: 'Tic-Toc',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 48.75,
    critRate: 'Cannot CRIT',
    damage: '2-6',
},

{ 
    id: 'champ_bump_in_the_night_desc',
    position: '12ally_123enemy.png',
    name: 'Bump in the Night',
    type: 'Melee',
    accuracy: 82.5,
    critRate: 'CRIT : 9%',
    damage: '3-8',
    effects: 'Debuff Target: <br> -10 DODGE (3 rds) (140% Base) ',
},

{ 
    id: 'champ_tic-toc_desc',
    position: '12ally_4enemy.png',
    name: 'Tic-Toc',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 62.5,
    critRate: 'Cannot CRIT',
    damage: '3-8',
},

//Gargoyle

{ 
    id: 'vet_flurry_of_claws_desc',
    position: '12cleaveally_123enemy.png',
    name: 'Flurry of Claws',
    type: 'Melee',
    accuracy: 88.75,
    critRate: 'CRIT : 12%',
    damage: '2-3',
    effects: 'Shuffle Targets (50% Base)'
},


{ 
    id: 'vet_lash_of_the_tail_desc',
    position: '1234ally_1234enemy.png',
    name: 'Lash of the Tail',
    type: 'Ranged',
    accuracy: 88.75,
    critRate: 'CRIT : 12%',
    damage: '1-2',
    effects: 'Stun (120% Base) <br> Knockback 1 (85% Base)'
},

{ 
    id: 'champ_flurry_of_claws_desc',
    position: '12cleaveally_123enemy.png',
    name: 'Flurry of Claws',
    type: 'Melee',
    accuracy: 102.5,
    critRate: 'CRIT : 14%',
    damage: '2-5',
    effects: 'Shuffle Targets (65% Base)'
},


{ 
    id: 'champ_lash_of_the_tail_desc',
    position: '1234ally_1234enemy.png',
    name: 'Lash of the Tail',
    type: 'Ranged',
    accuracy: 102.5,
    critRate: 'CRIT : 14%',
    damage: '1-3',
    effects: 'Stun (140% Base) <br> Knockback 1 (100% Base)'
},



//Ghoul

    {
        id: 'vet_rend_desc',
        position: '12ally_12enemy.png',
        name: 'Rend',
        type: 'Melee',
        accuracy: 88.75,
        critRate: 'CRIT : 16%',
        damage: '5-11',
        effects: ' Bleed (120% Base) 3 pts/rd for 3 rds <br> Debuff Target: <br> +15% Stress (3 rds) (120% Base)'

    },


    { 
        id: 'vet_skull_toss_desc',
        position: '34ally_1234enemy.png',
        name: 'Skull Toss',
        type: 'Ranged',
        accuracy: 88.75,
        critRate: 'CRIT : 12%',
        damage: '5-11',
        effects: 'Stress +15 <br>  Stun (100% Base)'
    },


    { 
        id: 'vet_howl_desc',
        position: '1234cleaveally_1234enemy.png',
        name: 'Howl',
        type: 'Ranged',
        accuracy: 92.5,
        critRate: 'Cannot Crit',
        damage: '0',
        effects: ' Horror (75% Chance) 3 stress/rd for 3 rds <br> Torch -10 <br> Disease (The Worries) (5% Chance)'
    },

    {
        id: 'champ_rend_desc',
        position: '12ally_12enemy.png',
        name: 'Rend',
        type: 'Melee',
        accuracy: 102.5,
        critRate: 'CRIT : 19%',
        damage: '7-15',
        effects: ' Bleed (140% Base) 4 pts/rd for 3 rds <br> Debuff Target: <br> +20% Stress (3 rds) (140% Base)'

    },


    { 
        id: 'champ_skull_toss_desc',
        position: '34ally_1234enemy.png',
        name: 'Skull Toss',
        type: 'Ranged',
        accuracy: 102.5,
        critRate: 'CRIT : 14%',
        damage: '7-15',
        effects: 'Stress +15 <br>  Stun (130% Base)'
    },


    { 
        id: 'champ_howl_desc',
        position: '1234cleaveally_1234enemy.png',
        name: 'Howl',
        type: 'Ranged',
        accuracy: 100,
        critRate: 'Cannot Crit',
        damage: '0',
        effects: ' Horror (75% Chance) 3 stress/rd for 3 rds <br> Torch -10 <br> Disease (The Worries) (5% Chance)'
    },

   

//Brigand Raider

{
    id: 'darkest_slice_and_dice_desc',
    position: '12cleaveally_123enemy.png',
    name: 'Slice and Dice',
    type: 'Melee',
    accuracy: 93.75,
    critRate: 'CRIT : 20%',
    damage: '6-11',
    effects: 'Debuff Target: <br> -35%  Bleed Resist (3 rds) (160% Base)'
},

{
    id: 'darkest_uppercut_slice_desc',
    position: '123ally_12enemy.png',
    name: 'Uppercut Slice',
    type: 'Melee',
    accuracy: 93.75,
    critRate: 'CRIT : 15%',
    damage: '4-9',
    effects: 'Knockback 1 (140% Base)'
},

{
    id: 'darkest_shank_desc',
    position: '1234ally_123enemy.png',
    name: 'Shank',
    type: 'Melee',
    accuracy: 92.5,
    critRate: 'CRIT : 11%',
    damage: '7-15',
    effects: 'Bleed (140% Base) 3 pts/rd for 3 rds <br> Mark Target (3 rds)'
},

{
    id: 'darkest_harmless_poke_desc',
    position: '1234ally_4enemy.png',
    name: 'Harmless Poke',
    type: 'Melee',
    forward: 'Forward 1',
    accuracy: 62.5,
    critRate: 'Cannot CRIT',
    damage: '4-9',
    effects: 'On Attack Hit: <br> Buff Self: <br> +2 SPD (3 rds)'
},




//Brigand Hunter

{
    id: 'darkest_blanket_fire_desc',
    position: '1234cleaveally_234enemy.png',
    name: 'Blanket Fire',
    type: 'Ranged',
    accuracy: 93.75,
    critRate: 'CRIT : 7%',
    damage: '2-6',
    effects: 'Debuff Target: <br>  -6 DODGE (3 rds) (160% Base) <br>  Stress +4'
},

{
    id: 'darkest_rushed_shot_desc',
    position: '123ally_1enemy.png',
    name: 'Rushed Shot',
    type: 'Melee',
    forward:'Back 1',
    accuracy: 83.75,
    critRate: 'CRIT : 15%',
    damage: '4-9',
},


];


function replaceSpecificWords(description) {
    description = description.replace(/Stress/g, '<span class="stress">Stress</span>');
    description = description.replace(/Move/g, '<span class="move">Move</span>');
    description = description.replace(/Horror/g, '<span class="stress">Horror</span>');   
    description = description.replace(/Healing/g, '<span class="heal">Healing</span>');
    description = description.replace(/Heal/g, '<span class="heal">Heal</span>');
    description = description.replace(/Mark/g, '<span class="mark">Mark</span>');   
    description = description.replace(/Branded/g, '<span class="mark">Marked</span>');
    description = description.replace(/Torch/g, '<span class="highres">Torch</span>');
    description = description.replace(/Summon/g, '<span class="stealth">Summon</span>');
    description = description.replace(/Blight/g, '<span class="blight">Blight</span>');
    description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
    description = description.replace(/Stuns/g, '<span class="stun">Stuns</span>');
    description = description.replace(/Stun/g, '<span class="stun">Stun</span>');
    description = description.replace(/Knockback/g, '<span class="move">Knockback</span>');
    description = description.replace(/Shuffles/g, '<span class="move">Shuffles</span>');
    description = description.replace(/Shuffle/g, '<span class="move">Shuffle</span>');
    description = description.replace(/Pull/g, '<span class="move">Pull</span>');
    description = description.replace(/Death Blow/g, '<span class="mark">Death Blow</span>');
    description = description.replace(/Ranged/g, '<span class="attack_type">Ranged</span>');
    description = description.replace(/Support/g, '<span class="buff">Support</span>');
    description = description.replace(/Melee/g, '<span class="attack_type">Melee</span>');
    description = description.replace(/Disease/g, '<span class="disease">Disease</span>');
    description = description.replace(/Debuff Target:/g, '<span class="debuff">Debuff Target:</span>');
    description = description.replace(/Debuff Self:/g, '<span class="debuff">Debuff Self:</span>');
    description = description.replace(/Hinderance/g, '<span class="debuff">Debuff</span>');
    description = description.replace(/Buff Self:/g, '<span class="buff">Buff Self:</span>');
    description = description.replace(/Buff Target:/g, '<span class="buff">Buff Target:</span>');
    description = description.replace(/Buff Companions :/g, '<span class="buff">Buff Companions:</span>');
    description = description.replace(/Guard/g, '<span class="buff">Guard</span>');
    description = description.replace(/Creates/g, '<span class="stealth">Creates</span>');
    description = description.replace(/Necrotic Fungus/g, '<span class="debuff">Necrotic Fungus</span>');
    description = description.replace(/Riposted/g, '<span class="debuff">Riposted</span>');
    description = description.replace(/Stealth/g, '<span class="stealth">Stealth</span>');


    
    return description;
}

function generateSkillDescription(skill) {
    let forward = skill.forward ? skill.forward : '';
    forward = forward.replace(/Forward/g, '<span class="move">Forward</span>').replace(/Back/g, '<span class="move">Back</span>');
    forward = forward ? `${forward}<br>` : '';

    let type = skill.type ? `<span class="attack_type">${skill.type}</span><br>` : ''; // Wrap skill.type in <span class="attack_type">
    type = replaceSpecificWords(type); // Apply replaceSpecificWords to type

    let description = skill.effects ? replaceSpecificWords(skill.effects) : ''; // Check for empty skill.effects
    description = description.replace(/(\(\d+% Base\)|\d+% Base)/g, '<span class="chance">$1</span>');


    let extrainfo = skill.extrainfo ? skill.extrainfo : '';

    let stats = '';
    if (skill.accuracy !== undefined && skill.critRate !== undefined && skill.damage !== undefined) {
        stats = `ACC : ${skill.accuracy} / ${skill.critRate} / DMG : ${skill.damage} <br>`;
    }


    return `
        <div class="enemy_skill_desc_container" id="${skill.id}">
            ${extrainfo}
            <img src="images/position_icons/${skill.position}" class="position_icons"><br>
            ${skill.name} <br>
            ${type}
            ${forward}
            ${stats}
            ${description}
        </div>
    `;
}


ruinskills.forEach((skill) => {
    const skillHTML = generateSkillDescription(skill);
    RuinsEnemyBox.innerHTML += skillHTML;
});

wealdskills.forEach((skill) => {
    const skillHTML = generateSkillDescription(skill);
    WealdEnemyBox.innerHTML += skillHTML;
});

warrenskills.forEach((skill) => {
    const skillHTML = generateSkillDescription(skill);
    WarrensEnemyBox.innerHTML += skillHTML;
});

coveskills.forEach((skill) => {
    const skillHTML = generateSkillDescription(skill);
    CoveEnemyBox.innerHTML += skillHTML;
});

sharedskills.forEach((skill) => {
    const skillHTML = generateSkillDescription(skill);
    SharedEnemyBox.innerHTML += skillHTML;
});

const RuinsenemyStrategies = [
    {
        id: "bone_soldier_strat",
        content: [
            "The Bone Soldier is your typical bland frontliner, with decent damage and some PROT, albeit with a somewhat low HP Pool",
            "From Veteran it gains Stealth, which helps it survive and deal some damage, but nothing much else.",
        ],
    },

    {
        id: "bone_defender_strat",
        content: [
            "The Bone Defender is a durable frontliner with decent PROT and a frontline disruption skill in Dead Weight. ",
            "From Veteran it gains a Guard skill that makes it more tanky, but lacks the damage to be of any real threat.",
            "It is quite position dependant, needing to be in positions 1 or 2 to use many of its skills.",
        ],
    },

    {
        id: "bone_arbalest_strat",
        content: [
            "The Bone Arbalist is your typical backline damage dealer with a minor damage bonus vs Marked heroes.",
            "It can easily be shut down by moving it into the front 2 ranks, where it can only use Bayonet Jab.",
            "The fact that Quarrel cannot hit position 1 can be taken advantage of to ensure a hero's safety.",
        ],
    },

    {
        id: "bone_courtier_strat",
        content: [
            "The Bone Courtier is your typical backline Stress dealer with High Speed & DODGE.", 
            "It can be shut down by moving it into position 1, where it can only use its weak melee skill.",
            "In Champion level Ruins dungeons, defeating this enemy may reward you the Tempting Goblet trinket (About 4.5%).",
        ],
    },

    {
        id: "bone_spearman_strat",
        content: [
            "The Bone Spearman is the first of the Ruins enemies to be of real threat.",
            "While Spear Thrust is somewhat of a threat, Impale is an AoE damage move that can be spammed by the Spearman if it's in the front 2 positions.",
            "This threat is amplified on Champion where it can be made more potent with support from the Bone Bearer.",
            "Try to make sure it cannot be of much threat with Stuns and Shuffles.",
        ],
    },

    {
        id: "bone_captain_strat",
        content: [
            "The Bone Captain is a tanky High PROT & HP frontliner with a strong single target damage skill and a AoE Stun.",
            "It can pose a real threat especially with Bone Bearer Support and has a relatively high Stun Resist (Although Stuns are still a valid method of shutting it down).",
            "Debuffs are good for nutering its damage dealing potential, even potentially making it Stalling material and Blight helps bypass its High PROT.",
        ],
    },

   {
        id: "bone_bearer_strat",
        content: [
            "The Bone Bearer is a backliner with High Speed and DODGE and has a sky-high Stun Resist.",
            "It provides a passive +25% DMG Buff to all other enemies and Buffs them more with Wicked Surge.",
            "It also automatically resurrects any enemy Corpses at the end of the round.",
            "It can be somewhat hindered if pulled to the front but you probably want to kill it.",
        ],
    },

];

const WealdenemyStrategies = [
    {
        id: "fungal_scratcher_strat",
        content: [
            "The Fungal Scratcher is a tanky frontliner with High PROT.",
            "The Scratcher itself doesn't deal much damage outside of Rend the Marked and can inflict minor Blight with Groping Swipe from Veteran onwards.",
            "It is quite position dependant, needing to be in positions 1 or 2 to function.",
            "All of these traits make it a low-priority target.",
        ],
    },

    {
        id: "fungal_artillery_strat",
        content: [
            "The Fungal Artillery is a decently sturdy backliner that can Mark and Blight.",
            "While not dealing much actual damage, its Marks enables Fungal Scratchers to focus down Marked Heroes and Rain of Blight can inflict Diseases.",
            "Bringing it to the front doesn't do much since it tends to Crit with Escape Cloud.",
            "It is usually easier and better to get rid of it before the frontliners.",
        ],
    },

    {
        id: "rabid_gnasher_strat",
        content: [
            "The Rabid Gnasher is a High Speed and DODGE enemy that inflicts Bleeds and has a chance to give a Hero the Rabies Disease.",
            "They can be a problem early on when you lack Accuracy boosting trinkets.",
            "Thankfully they are quite frail and only 1 or 2 hits will get rid of them.",            
        ],
    },

    {
        id: "ectoplasm_strat",
        content: [
            "The Ectoplasm is a enemy with High Resists but with a lacking HP Stat.",
            "They themselves pose little threat, so they try to wear you down by summoning many copies of themselves.",
            "Make sure to eliminate the 1 or 2 remaining ones quickly for they can use Ectoplasmic Profusion which stresses your party out and summons a Large Ectoplasm, continuing the war of attrition.",
        ],
    },

    {
        id: "large_ectoplasm_strat",
        content: [
            "The Large Ectoplasm shares its cousin's High Resists and has some PROT.",
            "It deals more damage than its smaller counterparts but isn't particularly threatening.",
            "It also summons more Ectoplasms with Cytokinesis, which can survive to use Ectoplasmic Profusion and reset the situation if not careful, so the summons are best killed first.",
        ],
    },

    {
        id: "crone_strat",
        content: [
            "The Crone is a High Speed and DODGE backliner who starts Stealthed and deals Stress, Marks, & Debuffs.",
            "Its Debuffs and Marks enable hard hitting but less accurate threats to land heavy blows on your Party.",
            "While you do want to focus it down since it's quite frail, be wary of bringing it to the front for Fetid Censer can be very nasty with a chance to inflict Diseases.",
        ],
    },

    {
        id: "unclean_giant_strat",
        content: [
            "The Unclean Giant has a Massive HP Pool and has Treebranch Smackdown, which can be devastating.",
            "It usually uses Confusion Spores on the first round (Which usually Crits), Shuffling and Debuffing your party.",
            "You either choose to focus down the Giant or kill everything around it first.",
            "With Debuffs & Stuns (and preferrably a Guard), the Giant can be used for stalling.",
        ],
    },

   {
        id: "hateful_virago_strat",
        content: [
            "The Virago is a backliner with High Resists with a High Speed and Dodge Stat.",
            "It can inflict potent Debuffs and some Blight, but the real threat the Virago poses is the fact she can summon a Necrotic Fungus from a corpse that blocks all your Healing Skills, which can get your heroes in quite the pickle.",
            "Try to focus it down and take care to not give it a chance to have a corpse to summon a Necrotic Fungus from.",

        ],
    },

    {
        id: "necrotic_fungus_strat",
        content: [
            "Necrotic Fungi can only be encountered by a Hateful Virago summoning it.",
            "Its Passive Debuff blocks all Healing Skills, which can be very problematic if other enemy threats are still around.",
            "It has no actions and its Passive Debuff goes away once it dies.",
        ],
    },
];

const WarrensenemyStrategies = [
    {
        id: "swine_chopper_strat",
        content: [
            "The Swine Chopper has decent Resists & PROT with a backline disruption skill in Ball and Chain and a Bleed skill in Butcher Cut that gains a Heal Received Debuff starting from Veteran.", 
            "This can be a massive threat when coupled with the many other threats in the Warrens.",
            "That being said, you are still better off prioritizing the bigger threats and using Stuns to neutralize it if needed."
        ],
    },

    {
        id: "swine_wretch_strat",
        content: [
            "The Swine Wretch was made to be difficult to deal with.",
            "While it itself does minimal HP damage, its Vomit skill has a 33% chance of inflicting a Disease, which is bad enough, but it has high Speed and DODGE, making it difficult to take care of before it can get an attack off."
        ],
    },

    {
        id: "swine_drummer_strat",
        content: [
            "The Swine Drummer is a Stress dealer with Branding capabilities which it uses to help the few Mark-Based damage dealers in the Warrens.",
            "Being a Stress dealer, it is annoying, but it doesn't pose any real threat especially from Veteran onwards, unless enemies that benefit from its Mark are present."
        ],
    },

    {
        id: "swine_slasher_strat",
        content: [
            "The Swine Slasher has decent PROT which covers for its tiny HP Pool.",
            "Its only skill has high CRIT and gains a Disease & Bleed Resist Debuff from Veteran, which synergizes with its swine brethren.",
            "The Slasher gains Stealth from Veteran, making it harder to get rid of early."
        ],
    },

    {
        id: "carrion_eater_strat",
        content: [
            "The Carrion Eater has High Resists and deals hefty damage to Marked Heroes.",
            "The Blight on Munch makes the skill more threatening since it can cause an Death's Door check and prove to be fatal.",
            "From Veteran, they gain a small chance to inflict a Disease as well.",
            "Try to get rid of any Markers or kill the worms outright, and mind how Munch cannot target position 4."
        ],
    },

    {
        id: "large_carrion_eater_strat",
        content: [
            "The Large Carrion Eater shares the High Resists of its cousins as well as their damage bonus vs Marked Heroes.",
            "They are able to Mark & Debuff heroes and hit them with Tentacle Devour, which can be devestating.",
            "Thankfully it can be Stunned reliably and cannot target position 4.",
            "Guards, Self-Brand PROT tanking or Mark clear via Arbalest or Musketeer helps significantly as well."
        ],
    },

   {
        id: "swinetaur_strat",
        content: [
            "The Swinetaur is a tank with High Resists & PROT with a Huge HP Pool.",
            "Make sure to keep it at rank 1 by eliminating any enemies/corpses it could stand behind after using Trot Retreat, for it can use two very threatening skills from the back.",
            "If left as the last enemy, it is an easy enemy to stall against."
        ],
    },

    {
        id: "swine_skiver_strat",
        content: [
            "The Skiver has decent Resists, good DODGE, and decent HP with 9 Speed.",
            "It packs a punch, with a powerful AoE with Blight & Debuffs and a high damage disruption skill.",
            "Focus it down quickly, or try pulling it to the front ranks where it will be a non-issue for a turn (2 if Stunned).",
            "Do mind that blindly trying to kill the Skiver will let the other threats show you they're no slouch either."
        ],
    },
];

const CoveenemyStrategies = [
    {
        id: "pelagic_grouper_strat",
        content: [
            "The Pelagic Grouper is a frontliner with High Speed and Damage albeit with a pitiful Stun Resist.",
            "It targets the backline if in the back and the front 2 positions if in the front.",
            "It can be a big threat in the front with Seaward Slash's High Damage and Spearfishing does less damage but gains the ability to Pull Heroes from Veteran.",
            "You can use its positional targetting to your advantage to keep heroes safe if need be."
        ],
    },

    {
        id: "pelagic_guardian_strat",
        content: [
            "The Pelagic Guardian is a tanky frontliner with High PROT and HP Pool equipped with a Guard and a Bleed skill.",
            "Since the Guardian itself is of no real threat, you want to kill everything around it first and bring Guardbreak or Stuns to bypass its Guard.",
        ],
    },

    {
        id: "pelagic_shaman_strat",
        content: [
            "The Pelagic Shaman is a backline stress caster with High Speed & DODGE who also provides support, being able to buff and heal its allies.",
            "It can be shut down by being moved to position 1, where it can only use its weak Melee attack.",
            "It is optimal to set up your heroes so you are able to stun/eliminate it on turn 1."
        ],
    },

    {
        id: "deep_stinger_strat",
        content: [
            "The Deep Stinger is a High Speed & DODGE enemy that disrupts your heroes with its Stun and deals Minor Bleeds.",
            "Since both of its skills can inflict a hero with a Disease, you want to get rid of it quickly.",
            "Thankfully, it is quite fragile and isn't too difficult to eliminate.",
        ],
    },

    {
        id: "drowned_thrall_strat",
        content: [
            "The Drowned Thrall is a suicide frontliner who can deal a ton of damage to your entire party if it gets to act twice.",
            "You want to get rid of this enemy quickly and thankfully the Thrall is quite frail and slow.",
            "Do consider the fact that Pelagic Guardians can guard the Thrall and Shamans can Heal it, so make sure you are ready for those things happening.",
        ],
    },

    {
        id: "sea_maggot_strat",
        content: [
            "The Sea Maggot is essentially an armored Maggot with a Debuff instead of Stress and Stuns and lower chance of Disease.",
            "Since it has such a tiny HP Pool Bleeds and Blights do nicely against them.",
        ],
    },

   {
        id: "uca_crusher_strat",
        content: [
            "The Uca Crusher is a tanky frontliner with High PROT, and has a very potent Bleed Skill which also applies a Healing Received Debuff, which can be problematic.",
            "It also has a frontline disruption skill which can be annoying at times.",
            "That being said as long as you have a way to cure its Bleeds (cough Plague Doctor, cough) it poses essentially no threat.",
        ],
    },

    {
        id: "squiffy_ghast_strat",
        content: [
            "The Squiffy Ghast is a powerful Stress Dealer with High Speed & DODGE.",
            "It has a rivalry with the Jester shown in the fact that it will always target a Jester if present.  ",
            "It should be noted Offkilter Jig is only used if there are 2 other living monsters.",
            "Since the Ghast has Low Move Resist, you can keep it in the backline using Skills with Knockback to deny it from using Offkilter Jig and try to get rid of it in the meantime.",
        ],
    },
];

const SharedenemyStrategies = [

    {
        id: "brigand_cutthroat_strat",
        content: [
            "The Brigand Cutthroat is a enemy with surprisingly High Damage and some PROT.",
            "It can inflict Minor Bleeds, disrupt formations, and hit your frontline with a AoE attack which does a considerable amount of Damage.",
            "They should be dealth with first via killing or Stunning when fighting Brigand Mashes."
        ],
    },

    {
        id: "brigand_bloodletter_strat",
        content: [
            "The Brigand Bloodletter is a frontliner who deals Minor Bleed and Stress with Rain of Whips and Punishment.",
            "The main threat the Bloodletter poses to your heroes is its potentially dangerous skill, Point Blank Shot, which deals a good amount of damage with a High Crit Chance.",
            "Otherwise, the Bloodletter really isn't too dangerous, not being too hard to get rid of.",
        ],
    },

    {
        id: "brigand_fusilier_strat",
        content: [
            "The Brigand Fusilier is your typical backline enemy, armed with a weak aoe damage skill which applies a Small Dodge Debuff.",
            "This enemy poses no real threat, making them a low priority to kill. ",
            "They can be shut down if moved to position 1, where they can only use Rushed Shot.",
            "From Veteran they gain innate Stealth and a actual Crit chance on Blanket Fire, making them slightly more of a conern.",
        ],
    },

    {
        id: "cultist_brawler_strat",
        content: [
            "The Cultist Brawler is a frontliner who deals Minor Bleeds and has a Minor Damage Bonus vs Marked Heroes.",
            "Their main attack inflicts a Stress Received Debuff to synergize with the Cultist Acolytes.",
            "They are quite position dependant, needing to be in the front 2 ranks to be of any use, which makes them easy to shut down.",
        ],
    },

    {
        id: "cultist_acolyte_strat",
        content: [
            "The Cultist Acolyte is a Stress Dealer with High Speed and DODGE.",
            "From Veteran, it gains a Mark on Stressful Incantation, synergizing with its Cultist bretheren and some regional enemies.",
            "They also have a Pull and Push that can disrupt your formation.",
            "They are not position dependant, so you'll have to actually kill them to shut them down. ",
        ],
    },

    {
        id: "madman_strat",
        content: [
            "The Madman is a Stress Dealer with High Speed and DODGE ",
            "You want to be able to eliminate or at least Stun the Madman on round 1 to minimize the Stress it can dish out.",
            "Do mind that Accusation's + Stress Debuff is until camp although you can just use a medicinal herb to cure it.",
            "The Madman has a small chance (about 4%) to drop 1 of 3 Music Box Trinkets which can be helpful."
        ],
    },

    {
        id: "webber_strat",
        content: [
            "Webbers are High DODGE but frail enemies that Mark and Debuff Heroes with Web for their Spitter bretheren to take advantage of using Spit.",
            "Bite deals Double Damage to Marked Heroes but its Damage is too low to be of any real concern.",
            "It's not too difficult to outspeed and kill these enemies, making them not much of a threat as long as you land your hits.",
            "Both Spiders appear in every region but The Cove."
        ],
    },
    {
        id: "spitter_strat",
        content: [
            "Spitters who also have High DODGE and Low HP capitalize on the Marks the Webbers have applied with Web.",
            "Spit is a skill with a High Crit Chance and decent Damage that applies minor Blight and deals Double Damage to Marked Heroes. ",
            "Since Spitters cannot use Spit in the frontlines and have to use the much weaker Bite, as long as you get rid of the Webbers you'll be safe.",
        ],
    },

    {
        id: "maggot_strat",
        content: [
            "Maggots are very fragile enemies that spawn in all areas but The Cove.",
            "Grave Nibble, their only skill deals minor Stress, with a low stun chance and a decent chance to apply a Disease, alongside a high Crit chance which is hindered by the skill's lacking Accuracy and Damage.",
            "Considering you don't want to let your heroes get Diseased and the Maggots are easy enough to kill, just get rid of them quickly.",
        ],
    },

    {
        id: "bone_rabble_strat",
        content: [
            "The Bone Rabble is the weakest enemy in the game, with pitiful Accuracy and Damage on its attacks alongside being very frail.",
            "It appears most commonly in the Ruins, but can rarely be encountered in the Weald and Warrens.",
        ],
    },

    {
        id: "gargoyle_strat",
        content: [
            "Gargoyles are one of the only Stonework enemies in the game as has High Speed and PROT but Low HP. They appear commonly in the Ruins with the other undead and rarely in the Weald alongside a Ghoul.",
            "The Gargoyle essentially has no Damage Dealing capabilities and tries to disrupt your Party with its 2 skills, which have a low Move Chance.",
            "Since they aren't threatening at all, you can mostly ignore them and go after the more threatening enemies.",
        ],
    },

    {
        id: "ghoul_strat",
        content: [
            "The Ghoul is a durable enemy with decent PROT and Speed and Damage.",
            "Rend is a Bleed with can deal hefty Damage to your frontliners, Skull Toss can hit your more soft backliners quite hard and Howl is famous for applying The Worries, a Disease.",
            "That being said, if you don't mind the chance of getting the Worries, you can stall on the Ghoul quite easily.",
        ],
    },

    {
        id: "brigand_raider_strat",
        content: [
            "The Brigand Raider is a upgraded version of the Champion Level Brigand Cutthroat with slightly better stats overall.",
            "The only noteworthy difference in terms of skills is the fact that Shank Marks now, making other enemies more inclined to focus down the Marked Hero.",
        ],
    },

   {
        id: "brigand_hunter_strat",
        content: [
            "The Brigand Hunter is a upgraded version of the Champion Level Brigand Fusilier with slightly better stats overall.",
            "Notably, Blanket Fire gains a baseline amount of Stress dealt, making the skill more problematic."
        ],
    },

];


function swapSpecificWords(description) {
    description = description.replace(/Stress/g, '<span class="stress">Stress</span>');
    description = description.replace(/Move/g, '<span class="move">Move</span>');
    description = description.replace(/Horror/g, '<span class="stress">Horror</span>');   
    description = description.replace(/Healing/g, '<span class="heal">Healing</span>');
    description = description.replace(/Heal/g, '<span class="heal">Heal</span>');
    description = description.replace(/Marks/g, '<span class="mark">Marks</span>');   
    description = description.replace(/Mark/g, '<span class="mark">Mark</span>');   
    description = description.replace(/Self-Brand/g, '<span class="mark">Self-Mark</span>');  
    description = description.replace(/Branded/g, '<span class="mark">Marked</span>');
    description = description.replace(/Branding/g, '<span class="mark">Marking</span>');
    description = description.replace(/Torch/g, '<span class="highres">Torch</span>');
    description = description.replace(/Tempting Goblet/g, '<span class="highres">Tempting Goblet</span>');
    description = description.replace(/Summon/g, '<span class="stealth">Summon</span>');
    description = description.replace(/Blights/g, '<span class="blight">Blights</span>');
    description = description.replace(/Blight/g, '<span class="blight">Blight</span>');
    description = description.replace(/Bleeds/g, '<span class="bleed">Bleeds</span>');
    description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
    description = description.replace(/Stuns/g, '<span class="stun">Stuns</span>');
    description = description.replace(/Stunned/g, '<span class="stun">Stunned</span>');
    description = description.replace(/Stun/g, '<span class="stun">Stun</span>');
    description = description.replace(/Knockback/g, '<span class="move">Knockback</span>');
    description = description.replace(/Shuffles/g, '<span class="move">Shuffles</span>');
    description = description.replace(/Shuffle/g, '<span class="move">Shuffle</span>');
    description = description.replace(/Pull/g, '<span class="move">Pull</span>');
    description = description.replace(/Death Blow/g, '<span class="mark">Death Blow</span>');
    description = description.replace(/Death's Door'/g, "<span class='mark'>Death's Door</span>");
    description = description.replace(/Diseases/g, '<span class="disease">Diseases</span>');
    description = description.replace(/Disease/g, '<span class="disease">Disease</span>');
    description = description.replace(/Debuffs/g, '<span class="debuff">Debuffs</span>');
    description = description.replace(/Debuff/g, '<span class="debuff">Debuff</span>');
    description = description.replace(/Buffs/g, '<span class="buff">Buffs</span>');
    description = description.replace(/Buff/g, '<span class="buff">Buff</span>');
    description = description.replace(/Guard/g, '<span class="buff">Guard</span>');
    description = description.replace(/Creates/g, '<span class="stealth">Creates</span>');
    description = description.replace(/Stealth/g, '<span class="stealth">Stealth</span>');
    description = description.replace(/Apprentice/g, '<span class="apprentice">Apprentice</span>');
    description = description.replace(/Veteran/g, '<span class="veteran">Veteran</span>');
    description = description.replace(/Champion/g, '<span class="champion">Champion</span>');
    description = description.replace(/Poison/g, 'Blight');
    description = description.replace(/Targetted/g, 'Marked');




    
    return description;
}

function createEnemyStrategies() {
    const ruinstratcontainer = document.getElementById("ruinsbox1");
    const wealdstratcontainer = document.getElementById("wealdbox1");
    const warrenstratcontainer = document.getElementById("warrensbox1");
    const covestratcontainer = document.getElementById("covebox1");
    const sharedstratcontainer = document.getElementById("sharedbox1"); 

    RuinsenemyStrategies.forEach((strategy) => {
        const div = document.createElement("div");
        div.className = "enemy_strat";
        div.id = strategy.id;

        strategy.content.forEach((itemText) => {div.innerHTML += itemText + '<br>';});


        ruinstratcontainer.appendChild(div);
    });

    WealdenemyStrategies.forEach((strategy) => {
        const div = document.createElement("div");
        div.className = "enemy_strat";
        div.id = strategy.id;

        strategy.content.forEach((itemText) => {div.innerHTML += itemText + '<br>';});

        wealdstratcontainer.appendChild(div);
    });

    WarrensenemyStrategies.forEach((strategy) => {
        const div = document.createElement("div");
        div.className = "enemy_strat";
        div.id = strategy.id;

        strategy.content.forEach((itemText) => {div.innerHTML += itemText + '<br>';});


        warrenstratcontainer.appendChild(div);
    });

    CoveenemyStrategies.forEach((strategy) => {
        const div = document.createElement("div");
        div.className = "enemy_strat";
        div.id = strategy.id;

        strategy.content.forEach((itemText) => {div.innerHTML += itemText + '<br>';});


        covestratcontainer.appendChild(div);
    });

    SharedenemyStrategies.forEach((strategy) => {
        const div = document.createElement("div");
        div.className = "enemy_strat";
        div.id = strategy.id;

        strategy.content.forEach((itemText) => {div.innerHTML += itemText + '<br>';});

        sharedstratcontainer.appendChild(div);
    });
}


createEnemyStrategies();

const BtnClickAudio = document.getElementById('btn_press');
BtnClickAudio.volume = 0.7;
const OpenSound = document.getElementById('page_open');
OpenSound.volume = 0.6;

function PlayPageOpn() {
    OpenSound.currentTime = 0;
    OpenSound.play();
  }

function PlayBtnPress() {
    BtnClickAudio.currentTime = 0; 
    BtnClickAudio.play();
}





   

function HideAllEnemyStats() {
    const AllEnemyStats = [

        //Ruins
        BoneSoldierAppStat,BoneSoldierVetStat,BoneSoldierChampStat,
        BoneDefenderAppStat,BoneDefenderVetStat,BoneDefenderChampStat,
        BoneArbalestAppStat,BoneArbalestVetStat,BoneArbalestChampStat,
        BoneCourtierAppStat,BoneCourtierVetStat,BoneCourtierChampStat,
        BoneSpearmanVetStat,BoneSpearmanChampStat,
        BoneCaptainVetStat,BoneCaptainChampStat,
        BoneBearerChampStat,

        //Weald
        FungalScratcherAppStat,FungalScratcherVetStat,FungalScratcherChampStat,
        FungalArtilleryAppStat,FungalArtilleryVetStat,FungalArtilleryChampStat,
        RabidGnasherAppStat,RabidGnasherVetStat,RabidGnasherChampStat,
        EctoplasmAppStat,EctoplasmVetStat,EctoplasmChampStat,
        LargeEctoplasmAppStat,LargeEctoplasmVetStat,LargeEctoplasmChampStat,
        CroneVetStat,CroneChampStat,
        UncleanGiantVetStat,UncleanGiantChampStat,
        HatefulViragoChampStat,NecroticFungusChampStat,

        //Warrens
        SwineChopperAppStat, SwineChopperVetStat, SwineChopperChampStat,
        SwineWretchAppStat,SwineWretchVetStat,SwineWretchChampStat,
        SwineDrummerAppStat,SwineDrummerVetStat,SwineDrummerChampStat,
        SwineSlasherAppStat,SwineSlasherVetStat,SwineSlasherChampStat,
        CarrionEaterAppStat,CarrionEaterVetStat,CarrionEaterChampStat,
        SwinetaurVetStat,SwinetaurChampStat,
        LargeCarrionEaterVetStat,LargeCarrionEaterChampStat,
        SwineSkiverChampStat,

        //Cove
        PelagicGrouperAppStat,PelagicGrouperVetStat,PelagicGrouperChampStat,
        PelagicGuardianAppStat,PelagicGuardianVetStat,PelagicGuardianChampStat,
        PelagicShamanAppStat,PelagicShamanVetStat,PelagicShamanChampStat,
        DeepStingerAppStat,DeepStingerVetStat,DeepStingerChampStat,
        DrownedThrallAppStat,DrownedThrallVetStat,DrownedThrallChampStat,
        SeaMaggotAppStat,SeaMaggotVetStat,SeaMaggotChampStat,
        UcaCrusherVetStat,UcaCrusherChampStat,
        SquiffyGhastChampStat,

        //Shared
        BrigandCutthroatAppStat,BrigandCutthroatVetStat,BrigandCutthroatChampStat,
        BrigandBloodletterAppStat,BrigandBloodletterVetStat,BrigandBloodletterChampStat,
        BrigandFusilierAppStat,BrigandFusilierVetStat,BrigandFusilierChampStat,
        CultistBrawlerAppStat,CultistBrawlerVetStat,CultistBrawlerChampStat,
        CultistAcolyteAppStat,CultistAcolyteVetStat,CultistAcolyteChampStat,
        MadmanAppStat,MadmanVetStat,MadmanChampStat,
        WebberAppStat,WebberVetStat,WebberChampStat,
        SpitterAppStat,SpitterVetStat,SpitterChampStat,
        MaggotAppStat,MaggotVetStat,MaggotChampStat,
        BoneRabbleAppStat,BoneRabbleVetStat,BoneRabbleChampStat,
        GargoyleVetStat,GargoyleChampStat,
        GhoulVetStat,GhoulChampStat,
        BrigandRaiderDarkestStat,
        BrigandHunterDarkestStat,

        
    ]

    AllEnemyStats.forEach(enemystat => {
        enemystat.style.display = 'none'
    });
}

function HideAllEnemySkills() {
    const AllEnemySkills = [

        //Ruins
        BoneSoldierAppSkills,BoneSoldierVetSkills,BoneSoldierChampSkills,
        BoneDefenderAppSkills,BoneDefenderVetSkills,BoneDefenderChampSkills,
        BoneArbalestAppSkills,BoneArbalestVetSkills,BoneArbalestChampSkills,
        BoneCourtierAppSkills,BoneCourtierVetSkills,BoneCourtierChampSkills,
        BoneSpearmanVetSkills,BoneSpearmanChampSkills,
        BoneCaptainVetSkills,BoneCaptainChampSkills,
        BoneBearerChampSkills,

        //Weald
        FungalScratcherAppSkills,FungalScratcherVetSkills,FungalScratcherChampSkills,
        FungalArtilleryAppSkills,FungalArtilleryVetSkills,FungalArtilleryChampSkills,
        RabidGnasherAppSkills,RabidGnasherVetSkills,RabidGnasherChampSkills,
        EctoplasmAppSkills,EctoplasmVetSkills,EctoplasmChampSkills,
        LargeEctoplasmAppSkills,LargeEctoplasmVetSkills,LargeEctoplasmChampSkills,
        CroneVetSkills,CroneChampSkills,
        UncleanGiantVetSkills,UncleanGiantChampSkills,
        HatefulViragoChampSkills,NecroticFungusChampSkills,

        //Warrens
        SwineChopperAppSkills, SwineChopperVetSkills, SwineChopperChampSkills,
        SwineWretchAppSkills, SwineWretchVetSkills, SwineWretchChampSkills,
        SwineDrummerAppSkills, SwineDrummerVetSkills, SwineDrummerChampSkills,
        SwineSlasherAppSkills, SwineSlasherVetSkills, SwineSlasherChampSkills,
        CarrionEaterAppSkills, CarrionEaterVetSkills, CarrionEaterChampSkills,
        LargeCarrionEaterVetSkills, LargeCarrionEaterChampSkills,
        SwinetaurVetSkills, SwinetaurChampSkills,
        SwineSkiverChampSkills,

        //Cove
        PelagicGrouperAppSkills,PelagicGrouperVetSkills,PelagicGrouperChampSkills,
        PelagicGuardianAppSkills,PelagicGuardianVetSkills,PelagicGuardianChampSkills,
        PelagicShamanAppSkills,PelagicShamanVetSkills,PelagicShamanChampSkills,
        DeepStingerAppSkills,DeepStingerVetSkills,DeepStingerChampSkills,
        DrownedThrallAppSkills,DrownedThrallVetSkills,DrownedThrallChampSkills,
        SeaMaggotAppSkills,SeaMaggotVetSkills,SeaMaggotChampSkills,
        UcaCrusherVetSkills,UcaCrusherChampSkills,
        SquiffyGhastChampSkills,

        //Shared
        BrigandCutthroatAppSkills,BrigandCutthroatVetSkills,BrigandCutthroatChampSkills,
        BrigandBloodletterAppSkills,BrigandBloodletterVetSkills,BrigandBloodletterChampSkills,
        BrigandFusilierAppSkills,BrigandFusilierVetSkills,BrigandFusilierChampSkills,
        CultistBrawlerAppSkills,CultistBrawlerVetSkills,CultistBrawlerChampSkills,
        CultistAcolyteAppSkills,CultistAcolyteVetSkills,CultistAcolyteChampSkills,
        MadmanAppSkills,MadmanVetSkills,MadmanChampSkills,
        WebberAppSkills,WebberVetSkills,WebberChampSkills,
        SpitterAppSkills,SpitterVetSkills,SpitterChampSkills,
        MaggotAppSkills,MaggotVetSkills,MaggotChampSkills,
        BoneRabbleAppSkills,BoneRabbleVetSkills,BoneRabbleChampSkills,
        GargoyleVetSkills,GargoyleChampSkills,
        GhoulVetSkills,GhoulChampSkills,
        BrigandRaiderDarkestSkills,
        BrigandHunterDarkestSkills,
    ]

    AllEnemySkills.forEach(enemyskill => {
        enemyskill.style.display = 'none'
    });
}

function HideAllEnemyLvlToggle() {
    const AllEnemyLvlToggle = [

        //Ruins
        BoneSoldierApp ,BoneSoldierVet ,BoneSoldierChamp ,
        BoneDefenderApp ,BoneDefenderVet ,BoneDefenderChamp ,
        BoneArbalestApp ,BoneArbalestVet ,BoneArbalestChamp ,
        BoneCourtierApp ,BoneCourtierVet ,BoneCourtierChamp ,
        BoneSpearmanVet ,BoneSpearmanChamp ,
        BoneCaptainVet ,BoneCaptainChamp ,
        BoneBearerChamp ,

        //Weald
        FungalScratcherApp ,FungalScratcherVet ,FungalScratcherChamp ,
        FungalArtilleryApp ,FungalArtilleryVet ,FungalArtilleryChamp ,
        RabidGnasherApp ,RabidGnasherVet ,RabidGnasherChamp ,
        EctoplasmApp ,EctoplasmVet ,EctoplasmChamp ,
        LargeEctoplasmApp ,LargeEctoplasmVet ,LargeEctoplasmChamp ,
        CroneVet ,CroneChamp ,
        UncleanGiantVet ,UncleanGiantChamp ,
        HatefulViragoChamp ,NecroticFungusChamp ,

        //Warrens
        SwineChopperApp, SwineChopperVet, SwineChopperChamp,
        SwineWretchApp, SwineWretchVet,SwineWretchChamp,
        SwineDrummerApp,SwineDrummerVet,SwineDrummerChamp,
        SwineSlasherApp,SwineSlasherVet,SwineSlasherChamp,
        CarrionEaterApp,CarrionEaterVet,CarrionEaterChamp,
        SwinetaurVet,SwinetaurChamp,
        LargeCarrionEaterVet,LargeCarrionEaterChamp,
        SwineSkiverChamp,

        //Cove
        PelagicGrouperApp,PelagicGrouperVet,PelagicGrouperChamp,
        PelagicGuardianApp,PelagicGuardianVet,PelagicGuardianChamp,
        PelagicShamanApp,PelagicShamanVet,PelagicShamanChamp,
        DeepStingerApp,DeepStingerVet,DeepStingerChamp,
        DrownedThrallApp,DrownedThrallVet,DrownedThrallChamp,
        SeaMaggotApp,SeaMaggotVet,SeaMaggotChamp,
        UcaCrusherVet,UcaCrusherChamp,
        SquiffyGhastChamp,

        //Shared
        BrigandCutthroatApp,BrigandCutthroatVet,BrigandCutthroatChamp,
        BrigandBloodletterApp,BrigandBloodletterVet,BrigandBloodletterChamp,
        BrigandFusilierApp,BrigandFusilierVet,BrigandFusilierChamp,
        CultistBrawlerApp,CultistBrawlerVet,CultistBrawlerChamp,
        CultistAcolyteApp,CultistAcolyteVet,CultistAcolyteChamp,
        MadmanApp,MadmanVet,MadmanChamp,
        WebberApp,WebberVet,WebberChamp,
        SpitterApp,SpitterVet,SpitterChamp,
        MaggotApp,MaggotVet,MaggotChamp,
        BoneRabbleApp,BoneRabbleVet,BoneRabbleChamp,
        GargoyleVet,GargoyleChamp,
        GhoulVet,GhoulChamp,
        BrigandRaiderDarkest,
        BrigandHunterDarkest,
    ]

    AllEnemyLvlToggle.forEach(enemylvl => {
        enemylvl.style.display = 'none'
    });
}

function HideAllEnemySprites() {
    const AllEnemySprites = [

        //Ruins
        BoneSoldierSprite,BoneDefenderSprite, BoneArbalestSprite, BoneCourtierSprite,
        BoneSpearmanSprite,BoneCaptainSprite, BoneBearerSprite,

        //Weald
        FungalScratcherSprite,FungalArtillerySprite,RabidGnasherSprite,EctoplasmSprite,LargeEctoplasmSprite,
        CroneSprite,UncleanGiantSprite,HatefulViragoSprite,NecroticFungusSprite,

        //Warrens
        SwineChopperSprite,SwineWretchSprite, SwineDrummerSprite, SwineSlasherSprite,
        CarrionEaterSprite,LargeCarrionEaterSprite,SwinetaurSprite,SwineSkiverSprite,

        //Cove
        PelagicGrouperSprite,PelagicGuardianSprite,PelagicShamanSprite,DeepStingerSprite,DrownedThrallSprite,SeaMaggotSprite,
        UcaCrusherSprite,SquiffyGhastSprite,

        //Shared
        BrigandCutthroatSprite,BrigandBloodletterSprite,BrigandFusilierSprite,CultistBrawlerSprite,CultistAcolyteSprite,
        MadmanSprite,WebberSprite,SpitterSprite,MaggotSprite,BoneRabbleSprite,GargoyleSprite,GhoulSprite,
        BrigandRaiderSprite,BrigandHunterSprite,
    ]

    AllEnemySprites.forEach(enemysprite => {
        enemysprite.style.display = 'none'
    });
}

function HideAllEnemyToggleBtns() {
    const AllEnemyToggleBtns = [

        //Ruins
        BoneSoldierStatBtn,BoneDefenderStatBtn, BoneArbalestStatBtn, BoneCourtierStatBtn,
        BoneSpearmanStatBtn,BoneCaptainStatBtn, BoneBearerStatBtn,
        BoneSoldierStratBtn,BoneDefenderStratBtn, BoneArbalestStratBtn, BoneCourtierStratBtn,
        BoneSpearmanStratBtn,BoneCaptainStratBtn, BoneBearerStratBtn,

        //Weald
        FungalScratcherStatBtn,FungalArtilleryStatBtn,RabidGnasherStatBtn,EctoplasmStatBtn,LargeEctoplasmStatBtn,
        CroneStatBtn,UncleanGiantStatBtn,HatefulViragoStatBtn,NecroticFungusStatBtn,
        FungalScratcherStratBtn,FungalArtilleryStratBtn,RabidGnasherStratBtn,EctoplasmStratBtn,LargeEctoplasmStratBtn,
        CroneStratBtn,UncleanGiantStratBtn,HatefulViragoStratBtn,NecroticFungusStratBtn,

        //Warrens
        SwineChopperStatBtn,SwineChopperStratBtn,
        SwineWretchStatBtn,SwineWretchStratBtn,
        SwineDrummerStatBtn,SwineDrummerStratBtn,
        SwineSlasherStatBtn,SwineSlasherStratBtn,
        CarrionEaterStatBtn,CarrionEaterStratBtn,
        LargeCarrionEaterStatBtn,LargeCarrionEaterStratBtn,
        SwinetaurStatBtn, SwinetaurStratBtn,
        SwineSkiverStatBtn,SwineSkiverStratBtn,

        //Cove
        PelagicGrouperStatBtn,PelagicGuardianStatBtn,PelagicShamanStatBtn,DeepStingerStatBtn,DrownedThrallStatBtn,SeaMaggotStatBtn,
        UcaCrusherStatBtn,SquiffyGhastStatBtn,
        PelagicGrouperStratBtn,PelagicGuardianStratBtn,PelagicShamanStratBtn,DeepStingerStratBtn,DrownedThrallStratBtn,SeaMaggotStratBtn,
        UcaCrusherStratBtn,SquiffyGhastStratBtn,

        //Shared
        BrigandCutthroatStatBtn,BrigandBloodletterStatBtn,BrigandFusilierStatBtn,CultistBrawlerStatBtn,CultistAcolyteStatBtn,
        MadmanStatBtn,WebberStatBtn,SpitterStatBtn,MaggotStatBtn,BoneRabbleStatBtn,GargoyleStatBtn,GhoulStatBtn,
        BrigandRaiderStatBtn,BrigandHunterStatBtn,

        BrigandCutthroatStratBtn,BrigandBloodletterStratBtn,BrigandFusilierStratBtn,CultistBrawlerStratBtn,CultistAcolyteStratBtn,
        MadmanStratBtn,WebberStratBtn,SpitterStratBtn,MaggotStratBtn,BoneRabbleStratBtn,GargoyleStratBtn,GhoulStratBtn,
        BrigandRaiderStratBtn,BrigandHunterStratBtn,

    ]

    AllEnemyToggleBtns.forEach(enemytogglebtn => {
        enemytogglebtn.style.display = 'none'
    });
}

function HideAllEnemyStrats() {
    const AllEnemyStrats = [

        //Ruins
        BoneSoldierStrat,BoneDefenderStrat, BoneArbalestStrat, BoneCourtierStrat,
        BoneSpearmanStrat,BoneCaptainStrat, BoneBearerStrat,

        //Weald
        FungalScratcherStrat,FungalArtilleryStrat,RabidGnasherStrat,EctoplasmStrat,LargeEctoplasmStrat,
        CroneStrat,UncleanGiantStrat,HatefulViragoStrat,NecroticFungusStrat,

        //Warrens
        SwineChopperStrat,SwineWretchStrat, SwineDrummerStrat, SwineSlasherStrat,
        CarrionEaterStrat,LargeCarrionEaterStrat,SwinetaurStrat,SwineSkiverStrat,

        //Cove
        PelagicGrouperStrat,PelagicGuardianStrat,PelagicShamanStrat,DeepStingerStrat,DrownedThrallStrat,SeaMaggotStrat,
        UcaCrusherStrat,SquiffyGhastStrat,

        //Shared
        BrigandCutthroatStrat,BrigandBloodletterStrat,BrigandFusilierStrat,CultistBrawlerStrat,CultistAcolyteStrat,
        MadmanStrat,WebberStrat,SpitterStrat,MaggotStrat,BoneRabbleStrat,GargoyleStrat,GhoulStrat,
        BrigandRaiderStrat,BrigandHunterStrat,
    ]

    AllEnemyStrats.forEach(enemystrat => {
        enemystrat.style.display = 'none'
    });
}

const EnemyPorts = document.getElementsByClassName('enemy_port')
for (const EnemyPort of EnemyPorts) {
   EnemyPort.addEventListener('click', function() {
    PlayBtnPress();  
    HideAllEnemyStrats();     
    HideAllEnemySkills();   
    HideAllEnemySprites()
    HideAllEnemyLvlToggle()
    HideAllEnemyToggleBtns()
    HideAllEnemyStats()
})}

//Ruins Portraits

const BoneSoldierPortrait = document.getElementById('bone_soldier_nav');
const BoneDefenderPortrait = document.getElementById('bone_defender_nav');
const BoneArbalestPortrait = document.getElementById('bone_arbalest_nav');
const BoneCourtierPortrait = document.getElementById('bone_courtier_nav');
const BoneSpearmanPortrait = document.getElementById('bone_spearman_nav');
const BoneCaptainPortrait = document.getElementById('bone_captain_nav');
const BoneBearerPortrait = document.getElementById('bone_bearer_nav');


//Weald Portraits

const FungalScratcherPortrait = document.getElementById('fungal_scratcher_nav');
const FungalArtilleryPortrait = document.getElementById('fungal_artillery_nav');
const RabidGnasherPortrait = document.getElementById('rabid_gnasher_nav');
const EctoplasmPortrait = document.getElementById('ectoplasm_nav');
const LargeEctoplasmPortrait = document.getElementById('large_ectoplasm_nav');
const CronePortrait = document.getElementById('crone_nav');
const UncleanGiantPortrait = document.getElementById('unclean_giant_nav');
const HatefulViragoPortrait = document.getElementById('hateful_virago_nav');
const NecroticFungusPortrait = document.getElementById('necrotic_fungus_nav');

//Warrens Portraits

const SwineChopperPortrait = document.getElementById('swine_chopper_nav');
const SwineWretchPortrait = document.getElementById('swine_wretch_nav');
const SwineDrummerPortrait = document.getElementById('swine_drummer_nav');
const SwineSlasherPortrait = document.getElementById('swine_slasher_nav');
const CarrionEaterPortrait = document.getElementById('carrion_eater_nav');
const LargeCarrionEaterPortrait = document.getElementById('large_carrion_eater_nav');
const SwinetaurPortrait = document.getElementById('swinetaur_nav');
const SwineSkiverPortrait = document.getElementById('swine_skiver_nav');


//Cove Portraits

const PelagicGrouperPortrait = document.getElementById('pelagic_grouper_nav');
const PelagicGuardianPortrait = document.getElementById('pelagic_guardian_nav');
const PelagicShamanPortrait = document.getElementById('pelagic_shaman_nav');
const DeepStingerPortrait = document.getElementById('deep_stinger_nav');
const DrownedThrallPortrait = document.getElementById('drowned_thrall_nav');
const SeaMaggotPortrait = document.getElementById('sea_maggot_nav');
const UcaCrusherPortrait = document.getElementById('uca_crusher_nav');
const SquiffyGhastPortrait = document.getElementById('squiffy_ghast_nav');

//Shared Portraits

const BrigandCutthroatPortrait = document.getElementById('brigand_cutthroat_nav');
const BrigandBloodletterPortrait = document.getElementById('brigand_bloodletter_nav');
const BrigandFusilierPortrait = document.getElementById('brigand_fusilier_nav');
const CultistBrawlerPortrait = document.getElementById('cultist_brawler_nav');
const CultistAcolytePortrait = document.getElementById('cultist_acolyte_nav');
const MadmanPortrait = document.getElementById('madman_nav');
const WebberPortrait = document.getElementById('webber_nav');
const SpitterPortrait = document.getElementById('spitter_nav');
const MaggotPortrait = document.getElementById('maggot_nav');
const BoneRabblePortrait = document.getElementById('bone_rabble_nav');
const GargoylePortrait = document.getElementById('gargoyle_nav');
const GhoulPortrait = document.getElementById('ghoul_nav');
const BrigandRaiderPortrait = document.getElementById('brigand_raider_nav');
const BrigandHunterPortrait = document.getElementById('brigand_hunter_nav');

//Header Hiders

const HideHeadersRuins = document.getElementById('hide_headers_ruins')
const HideHeadersWeald = document.getElementById('hide_headers_weald')
const HideHeadersWarrens = document.getElementById('hide_headers_warrens')
const HideHeadersCove = document.getElementById('hide_headers_cove')
const HideHeadersShared = document.getElementById('hide_headers_shared')

//Enemy Nav Containers

const RuinsEnemies = document.getElementById('ruins_enemy_nav')
const WealdEnemies = document.getElementById('weald_enemy_nav')
const WarrensEnemies = document.getElementById('warrens_enemy_nav')
const CoveEnemies = document.getElementById('cove_enemy_nav')
const SharedEnemies = document.getElementById('shared_enemy_nav')


//Ruins Elements


//Bone Soldier
const BoneSoldierStatBtn = document.getElementById('bone_soldier_toggle1')
const BoneSoldierStratBtn = document.getElementById('bone_soldier_toggle2')
const BoneSoldierStrat = document.getElementById('bone_soldier_strat');
const BoneSoldierSprite = document.getElementById('bone_soldier_sprite')

const BoneSoldierApp = document.getElementById('bone_soldier_app')
const BoneSoldierVet = document.getElementById('bone_soldier_vet')
const BoneSoldierChamp = document.getElementById('bone_soldier_champ')

const BoneSoldierAppStat = document.getElementById('bone_soldier_app_numbers');
const BoneSoldierVetStat = document.getElementById('bone_soldier_vet_numbers');
const BoneSoldierChampStat = document.getElementById('bone_soldier_champ_numbers');

const BoneSoldierAppSkills = document.getElementById('bone_soldier_skill_app');
const BoneSoldierVetSkills = document.getElementById('bone_soldier_skill_vet');
const BoneSoldierChampSkills = document.getElementById('bone_soldier_skill_champ');

//Bone Defender
const BoneDefenderStatBtn = document.getElementById('bone_defender_toggle1')
const BoneDefenderStratBtn = document.getElementById('bone_defender_toggle2')
const BoneDefenderStrat = document.getElementById('bone_defender_strat');
const BoneDefenderSprite = document.getElementById('bone_defender_sprite')

const BoneDefenderApp = document.getElementById('bone_defender_app')
const BoneDefenderVet = document.getElementById('bone_defender_vet')
const BoneDefenderChamp = document.getElementById('bone_defender_champ')

const BoneDefenderAppStat = document.getElementById('bone_defender_app_numbers');
const BoneDefenderVetStat = document.getElementById('bone_defender_vet_numbers');
const BoneDefenderChampStat = document.getElementById('bone_defender_champ_numbers');

const BoneDefenderAppSkills = document.getElementById('bone_defender_skill_app');
const BoneDefenderVetSkills = document.getElementById('bone_defender_skill_vet');
const BoneDefenderChampSkills = document.getElementById('bone_defender_skill_champ');

//Bone Arbalest
const BoneArbalestStatBtn = document.getElementById('bone_arbalest_toggle1')
const BoneArbalestStratBtn = document.getElementById('bone_arbalest_toggle2')
const BoneArbalestStrat = document.getElementById('bone_arbalest_strat');
const BoneArbalestSprite = document.getElementById('bone_arbalest_sprite')

const BoneArbalestApp = document.getElementById('bone_arbalest_app')
const BoneArbalestVet = document.getElementById('bone_arbalest_vet')
const BoneArbalestChamp = document.getElementById('bone_arbalest_champ')

const BoneArbalestAppStat = document.getElementById('bone_arbalest_app_numbers');
const BoneArbalestVetStat = document.getElementById('bone_arbalest_vet_numbers');
const BoneArbalestChampStat = document.getElementById('bone_arbalest_champ_numbers');

const BoneArbalestAppSkills = document.getElementById('bone_arbalest_skill_app');
const BoneArbalestVetSkills = document.getElementById('bone_arbalest_skill_vet');
const BoneArbalestChampSkills = document.getElementById('bone_arbalest_skill_champ');

//Bone Courtier
const BoneCourtierStatBtn = document.getElementById('bone_courtier_toggle1')
const BoneCourtierStratBtn = document.getElementById('bone_courtier_toggle2')
const BoneCourtierStrat = document.getElementById('bone_courtier_strat');
const BoneCourtierSprite = document.getElementById('bone_courtier_sprite')

const BoneCourtierApp = document.getElementById('bone_courtier_app')
const BoneCourtierVet = document.getElementById('bone_courtier_vet')
const BoneCourtierChamp = document.getElementById('bone_courtier_champ')

const BoneCourtierAppStat = document.getElementById('bone_courtier_app_numbers');
const BoneCourtierVetStat = document.getElementById('bone_courtier_vet_numbers');
const BoneCourtierChampStat = document.getElementById('bone_courtier_champ_numbers');

const BoneCourtierAppSkills = document.getElementById('bone_courtier_skill_app');
const BoneCourtierVetSkills = document.getElementById('bone_courtier_skill_vet');
const BoneCourtierChampSkills = document.getElementById('bone_courtier_skill_champ');

//Bone Spearman
const BoneSpearmanStatBtn = document.getElementById('bone_spearman_toggle1')
const BoneSpearmanStratBtn = document.getElementById('bone_spearman_toggle2')
const BoneSpearmanStrat = document.getElementById('bone_spearman_strat');
const BoneSpearmanSprite = document.getElementById('bone_spearman_sprite')

const BoneSpearmanVet = document.getElementById('bone_spearman_vet')
const BoneSpearmanChamp = document.getElementById('bone_spearman_champ')

const BoneSpearmanVetStat = document.getElementById('bone_spearman_vet_numbers');
const BoneSpearmanChampStat = document.getElementById('bone_spearman_champ_numbers');

const BoneSpearmanVetSkills = document.getElementById('bone_spearman_skill_vet');
const BoneSpearmanChampSkills = document.getElementById('bone_spearman_skill_champ');

//Bone Captain
const BoneCaptainStatBtn = document.getElementById('bone_captain_toggle1')
const BoneCaptainStratBtn = document.getElementById('bone_captain_toggle2')
const BoneCaptainStrat = document.getElementById('bone_captain_strat');
const BoneCaptainSprite = document.getElementById('bone_captain_sprite')

const BoneCaptainVet = document.getElementById('bone_captain_vet')
const BoneCaptainChamp = document.getElementById('bone_captain_champ')

const BoneCaptainVetStat = document.getElementById('bone_captain_vet_numbers');
const BoneCaptainChampStat = document.getElementById('bone_captain_champ_numbers');

const BoneCaptainVetSkills = document.getElementById('bone_captain_skill_vet');
const BoneCaptainChampSkills = document.getElementById('bone_captain_skill_champ');

//Bone Bearer
const BoneBearerStatBtn = document.getElementById('bone_bearer_toggle1')
const BoneBearerStratBtn = document.getElementById('bone_bearer_toggle2')
const BoneBearerStrat = document.getElementById('bone_bearer_strat');
const BoneBearerSprite = document.getElementById('bone_bearer_sprite')

const BoneBearerChamp = document.getElementById('bone_bearer_champ')
const BoneBearerChampStat = document.getElementById('bone_bearer_champ_numbers');
const BoneBearerChampSkills = document.getElementById('bone_bearer_skill_champ');

//Weald Elements

//Fungal Scratcher

const FungalScratcherStatBtn = document.getElementById('fungal_scratcher_toggle1')
const FungalScratcherStratBtn = document.getElementById('fungal_scratcher_toggle2')
const FungalScratcherStrat = document.getElementById('fungal_scratcher_strat');
const FungalScratcherSprite = document.getElementById('fungal_scratcher_sprite')

const FungalScratcherApp = document.getElementById('fungal_scratcher_app')
const FungalScratcherVet = document.getElementById('fungal_scratcher_vet')
const FungalScratcherChamp = document.getElementById('fungal_scratcher_champ')

const FungalScratcherAppStat = document.getElementById('fungal_scratcher_app_numbers');
const FungalScratcherVetStat = document.getElementById('fungal_scratcher_vet_numbers');
const FungalScratcherChampStat = document.getElementById('fungal_scratcher_champ_numbers');

const FungalScratcherAppSkills = document.getElementById('fungal_scratcher_skill_app');
const FungalScratcherVetSkills = document.getElementById('fungal_scratcher_skill_vet');
const FungalScratcherChampSkills = document.getElementById('fungal_scratcher_skill_champ');

//Fungal Artillery

const FungalArtilleryStatBtn = document.getElementById('fungal_artillery_toggle1')
const FungalArtilleryStratBtn = document.getElementById('fungal_artillery_toggle2')
const FungalArtilleryStrat = document.getElementById('fungal_artillery_strat');
const FungalArtillerySprite = document.getElementById('fungal_artillery_sprite')

const FungalArtilleryApp = document.getElementById('fungal_artillery_app')
const FungalArtilleryVet = document.getElementById('fungal_artillery_vet')
const FungalArtilleryChamp = document.getElementById('fungal_artillery_champ')

const FungalArtilleryAppStat = document.getElementById('fungal_artillery_app_numbers');
const FungalArtilleryVetStat = document.getElementById('fungal_artillery_vet_numbers');
const FungalArtilleryChampStat = document.getElementById('fungal_artillery_champ_numbers');

const FungalArtilleryAppSkills = document.getElementById('fungal_artillery_skill_app');
const FungalArtilleryVetSkills = document.getElementById('fungal_artillery_skill_vet');
const FungalArtilleryChampSkills = document.getElementById('fungal_artillery_skill_champ');

//Rabid Gnasher

const RabidGnasherStatBtn = document.getElementById('rabid_gnasher_toggle1')
const RabidGnasherStratBtn = document.getElementById('rabid_gnasher_toggle2')
const RabidGnasherStrat = document.getElementById('rabid_gnasher_strat');
const RabidGnasherSprite = document.getElementById('rabid_gnasher_sprite')

const RabidGnasherApp = document.getElementById('rabid_gnasher_app')
const RabidGnasherVet = document.getElementById('rabid_gnasher_vet')
const RabidGnasherChamp = document.getElementById('rabid_gnasher_champ')

const RabidGnasherAppStat = document.getElementById('rabid_gnasher_app_numbers');
const RabidGnasherVetStat = document.getElementById('rabid_gnasher_vet_numbers');
const RabidGnasherChampStat = document.getElementById('rabid_gnasher_champ_numbers');

const RabidGnasherAppSkills = document.getElementById('rabid_gnasher_skill_app');
const RabidGnasherVetSkills = document.getElementById('rabid_gnasher_skill_vet');
const RabidGnasherChampSkills = document.getElementById('rabid_gnasher_skill_champ');

//Ectoplasm

const EctoplasmStatBtn = document.getElementById('ectoplasm_toggle1')
const EctoplasmStratBtn = document.getElementById('ectoplasm_toggle2')
const EctoplasmStrat = document.getElementById('ectoplasm_strat');
const EctoplasmSprite = document.getElementById('ectoplasm_sprite')

const EctoplasmApp = document.getElementById('ectoplasm_app')
const EctoplasmVet = document.getElementById('ectoplasm_vet')
const EctoplasmChamp = document.getElementById('ectoplasm_champ')

const EctoplasmAppStat = document.getElementById('ectoplasm_app_numbers');
const EctoplasmVetStat = document.getElementById('ectoplasm_vet_numbers');
const EctoplasmChampStat = document.getElementById('ectoplasm_champ_numbers');

const EctoplasmAppSkills = document.getElementById('ectoplasm_skill_app');
const EctoplasmVetSkills = document.getElementById('ectoplasm_skill_vet');
const EctoplasmChampSkills = document.getElementById('ectoplasm_skill_champ');

//Large Ectoplasm

const LargeEctoplasmStatBtn = document.getElementById('large_ectoplasm_toggle1')
const LargeEctoplasmStratBtn = document.getElementById('large_ectoplasm_toggle2')
const LargeEctoplasmStrat = document.getElementById('large_ectoplasm_strat');
const LargeEctoplasmSprite = document.getElementById('large_ectoplasm_sprite')

const LargeEctoplasmApp = document.getElementById('large_ectoplasm_app')
const LargeEctoplasmVet = document.getElementById('large_ectoplasm_vet')
const LargeEctoplasmChamp = document.getElementById('large_ectoplasm_champ')

const LargeEctoplasmAppStat = document.getElementById('large_ectoplasm_app_numbers');
const LargeEctoplasmVetStat = document.getElementById('large_ectoplasm_vet_numbers');
const LargeEctoplasmChampStat = document.getElementById('large_ectoplasm_champ_numbers');

const LargeEctoplasmAppSkills = document.getElementById('large_ectoplasm_skill_app');
const LargeEctoplasmVetSkills = document.getElementById('large_ectoplasm_skill_vet');
const LargeEctoplasmChampSkills = document.getElementById('large_ectoplasm_skill_champ');

//Crone

const CroneStatBtn = document.getElementById('crone_toggle1')
const CroneStratBtn = document.getElementById('crone_toggle2')
const CroneStrat = document.getElementById('crone_strat');
const CroneSprite = document.getElementById('crone_sprite')

const CroneVet = document.getElementById('crone_vet')
const CroneChamp = document.getElementById('crone_champ')

const CroneVetStat = document.getElementById('crone_vet_numbers');
const CroneChampStat = document.getElementById('crone_champ_numbers');

const CroneVetSkills = document.getElementById('crone_skill_vet');
const CroneChampSkills = document.getElementById('crone_skill_champ');

//Unclean Giant

const UncleanGiantStatBtn = document.getElementById('unclean_giant_toggle1')
const UncleanGiantStratBtn = document.getElementById('unclean_giant_toggle2')
const UncleanGiantStrat = document.getElementById('unclean_giant_strat');
const UncleanGiantSprite = document.getElementById('unclean_giant_sprite')

const UncleanGiantVet = document.getElementById('unclean_giant_vet')
const UncleanGiantChamp = document.getElementById('unclean_giant_champ')

const UncleanGiantVetStat = document.getElementById('unclean_giant_vet_numbers');
const UncleanGiantChampStat = document.getElementById('unclean_giant_champ_numbers');

const UncleanGiantVetSkills = document.getElementById('unclean_giant_skill_vet');
const UncleanGiantChampSkills = document.getElementById('unclean_giant_skill_champ');

//Hateful Virago

const HatefulViragoStatBtn = document.getElementById('hateful_virago_toggle1')
const HatefulViragoStratBtn = document.getElementById('hateful_virago_toggle2')
const HatefulViragoStrat = document.getElementById('hateful_virago_strat');
const HatefulViragoSprite = document.getElementById('hateful_virago_sprite')

const HatefulViragoChamp = document.getElementById('hateful_virago_champ')
const HatefulViragoChampStat = document.getElementById('hateful_virago_champ_numbers');
const HatefulViragoChampSkills = document.getElementById('hateful_virago_skill_champ');

//Necrotic Fungus

const NecroticFungusStatBtn = document.getElementById('necrotic_fungus_toggle1')
const NecroticFungusStratBtn = document.getElementById('necrotic_fungus_toggle2')
const NecroticFungusStrat = document.getElementById('necrotic_fungus_strat');
const NecroticFungusSprite = document.getElementById('necrotic_fungus_sprite')

const NecroticFungusChamp = document.getElementById('necrotic_fungus_champ')
const NecroticFungusChampStat = document.getElementById('necrotic_fungus_champ_numbers');
const NecroticFungusChampSkills = document.getElementById('necrotic_fungus_skill_champ');


//Warrens Elements

//Chopper
const SwineChopperStatBtn = document.getElementById('swine_chopper_toggle1')
const SwineChopperStratBtn = document.getElementById('swine_chopper_toggle2')
const SwineChopperStrat = document.getElementById('swine_chopper_strat');
const SwineChopperSprite = document.getElementById('swine_chopper_sprite')

const SwineChopperApp = document.getElementById('swine_chopper_app')
const SwineChopperVet = document.getElementById('swine_chopper_vet')
const SwineChopperChamp = document.getElementById('swine_chopper_champ')

const SwineChopperAppStat = document.getElementById('swine_chopper_app_numbers');
const SwineChopperVetStat = document.getElementById('swine_chopper_vet_numbers');
const SwineChopperChampStat = document.getElementById('swine_chopper_champ_numbers');

const SwineChopperAppSkills = document.getElementById('swine_chopper_skill_app');
const SwineChopperVetSkills = document.getElementById('swine_chopper_skill_vet');
const SwineChopperChampSkills = document.getElementById('swine_chopper_skill_champ');

//Wretch
const SwineWretchStatBtn = document.getElementById('swine_wretch_toggle1')
const SwineWretchStratBtn = document.getElementById('swine_wretch_toggle2')
const SwineWretchStrat = document.getElementById('swine_wretch_strat');
const SwineWretchSprite = document.getElementById('swine_wretch_sprite')

const SwineWretchApp = document.getElementById('swine_wretch_app')
const SwineWretchVet = document.getElementById('swine_wretch_vet')
const SwineWretchChamp = document.getElementById('swine_wretch_champ')

const SwineWretchAppStat = document.getElementById('swine_wretch_app_numbers');
const SwineWretchVetStat = document.getElementById('swine_wretch_vet_numbers');
const SwineWretchChampStat = document.getElementById('swine_wretch_champ_numbers');

const SwineWretchAppSkills = document.getElementById('swine_wretch_skill_app');
const SwineWretchVetSkills = document.getElementById('swine_wretch_skill_vet');
const SwineWretchChampSkills = document.getElementById('swine_wretch_skill_champ');

//Drummer
const SwineDrummerStatBtn = document.getElementById('swine_drummer_toggle1')
const SwineDrummerStratBtn = document.getElementById('swine_drummer_toggle2')
const SwineDrummerStrat = document.getElementById('swine_drummer_strat');
const SwineDrummerSprite = document.getElementById('swine_drummer_sprite')

const SwineDrummerApp = document.getElementById('swine_drummer_app')
const SwineDrummerVet = document.getElementById('swine_drummer_vet')
const SwineDrummerChamp = document.getElementById('swine_drummer_champ')

const SwineDrummerAppStat = document.getElementById('swine_drummer_app_numbers');
const SwineDrummerVetStat = document.getElementById('swine_drummer_vet_numbers');
const SwineDrummerChampStat = document.getElementById('swine_drummer_champ_numbers');

const SwineDrummerAppSkills = document.getElementById('swine_drummer_skill_app');
const SwineDrummerVetSkills = document.getElementById('swine_drummer_skill_vet');
const SwineDrummerChampSkills = document.getElementById('swine_drummer_skill_champ');

//Slasher
const SwineSlasherStatBtn = document.getElementById('swine_slasher_toggle1')
const SwineSlasherStratBtn = document.getElementById('swine_slasher_toggle2')
const SwineSlasherStrat = document.getElementById('swine_slasher_strat');
const SwineSlasherSprite = document.getElementById('swine_slasher_sprite')
const SwineSlasherApp = document.getElementById('swine_slasher_app')
const SwineSlasherVet = document.getElementById('swine_slasher_vet')
const SwineSlasherChamp = document.getElementById('swine_slasher_champ')

const SwineSlasherAppStat = document.getElementById('swine_slasher_app_numbers');
const SwineSlasherVetStat = document.getElementById('swine_slasher_vet_numbers');
const SwineSlasherChampStat = document.getElementById('swine_slasher_champ_numbers');

const SwineSlasherAppSkills = document.getElementById('swine_slasher_skill_app');
const SwineSlasherVetSkills = document.getElementById('swine_slasher_skill_vet');
const SwineSlasherChampSkills = document.getElementById('swine_slasher_skill_champ');

//Carrion Eater
const CarrionEaterStatBtn = document.getElementById('carrion_eater_toggle1')
const CarrionEaterStratBtn = document.getElementById('carrion_eater_toggle2')
const CarrionEaterStrat = document.getElementById('carrion_eater_strat');
const CarrionEaterSprite = document.getElementById('carrion_eater_sprite')
const CarrionEaterApp = document.getElementById('carrion_eater_app')
const CarrionEaterVet = document.getElementById('carrion_eater_vet')
const CarrionEaterChamp = document.getElementById('carrion_eater_champ')

const CarrionEaterAppStat = document.getElementById('carrion_eater_app_numbers');
const CarrionEaterVetStat = document.getElementById('carrion_eater_vet_numbers');
const CarrionEaterChampStat = document.getElementById('carrion_eater_champ_numbers');

const CarrionEaterAppSkills = document.getElementById('carrion_eater_skill_app');
const CarrionEaterVetSkills = document.getElementById('carrion_eater_skill_vet');
const CarrionEaterChampSkills = document.getElementById('carrion_eater_skill_champ');

//Large Carrion Eater
const LargeCarrionEaterStatBtn = document.getElementById('large_carrion_eater_toggle1')
const LargeCarrionEaterStratBtn = document.getElementById('large_carrion_eater_toggle2')
const LargeCarrionEaterStrat = document.getElementById('large_carrion_eater_strat');
const LargeCarrionEaterSprite = document.getElementById('large_carrion_eater_sprite')
const LargeCarrionEaterVet = document.getElementById('large_carrion_eater_vet')
const LargeCarrionEaterChamp = document.getElementById('large_carrion_eater_champ')

const LargeCarrionEaterVetStat = document.getElementById('large_carrion_eater_vet_numbers');
const LargeCarrionEaterChampStat = document.getElementById('large_carrion_eater_champ_numbers');

const LargeCarrionEaterVetSkills = document.getElementById('large_carrion_eater_skill_vet');
const LargeCarrionEaterChampSkills = document.getElementById('large_carrion_eater_skill_champ');

//Swinetaur
const SwinetaurStatBtn = document.getElementById('swinetaur_toggle1')
const SwinetaurStratBtn = document.getElementById('swinetaur_toggle2')
const SwinetaurStrat = document.getElementById('swinetaur_strat');
const SwinetaurSprite = document.getElementById('swinetaur_sprite')
const SwinetaurVet = document.getElementById('swinetaur_vet')
const SwinetaurChamp = document.getElementById('swinetaur_champ')

const SwinetaurVetStat = document.getElementById('swinetaur_vet_numbers');
const SwinetaurChampStat = document.getElementById('swinetaur_champ_numbers');

const SwinetaurVetSkills = document.getElementById('swinetaur_skill_vet');
const SwinetaurChampSkills = document.getElementById('swinetaur_skill_champ');

//Swine Skiver
const SwineSkiverStatBtn = document.getElementById('swine_skiver_toggle1')
const SwineSkiverStratBtn = document.getElementById('swine_skiver_toggle2')
const SwineSkiverStrat = document.getElementById('swine_skiver_strat');
const SwineSkiverSprite = document.getElementById('swine_skiver_sprite')

const SwineSkiverChamp = document.getElementById('swine_skiver_champ')
const SwineSkiverChampStat = document.getElementById('swine_skiver_champ_numbers')
const SwineSkiverChampSkills = document.getElementById('swine_skiver_skill_champ')


//Cove Elements

//Pelagic Grouper

const PelagicGrouperStatBtn = document.getElementById('pelagic_grouper_toggle1')
const PelagicGrouperStratBtn = document.getElementById('pelagic_grouper_toggle2')
const PelagicGrouperStrat = document.getElementById('pelagic_grouper_strat');
const PelagicGrouperSprite = document.getElementById('pelagic_grouper_sprite')

const PelagicGrouperApp = document.getElementById('pelagic_grouper_app')
const PelagicGrouperVet = document.getElementById('pelagic_grouper_vet')
const PelagicGrouperChamp = document.getElementById('pelagic_grouper_champ')

const PelagicGrouperAppStat = document.getElementById('pelagic_grouper_app_numbers');
const PelagicGrouperVetStat = document.getElementById('pelagic_grouper_vet_numbers');
const PelagicGrouperChampStat = document.getElementById('pelagic_grouper_champ_numbers');

const PelagicGrouperAppSkills = document.getElementById('pelagic_grouper_skill_app');
const PelagicGrouperVetSkills = document.getElementById('pelagic_grouper_skill_vet');
const PelagicGrouperChampSkills = document.getElementById('pelagic_grouper_skill_champ');

//Pelagic Guardian

const PelagicGuardianStatBtn = document.getElementById('pelagic_guardian_toggle1')
const PelagicGuardianStratBtn = document.getElementById('pelagic_guardian_toggle2')
const PelagicGuardianStrat = document.getElementById('pelagic_guardian_strat');
const PelagicGuardianSprite = document.getElementById('pelagic_guardian_sprite')

const PelagicGuardianApp = document.getElementById('pelagic_guardian_app')
const PelagicGuardianVet = document.getElementById('pelagic_guardian_vet')
const PelagicGuardianChamp = document.getElementById('pelagic_guardian_champ')

const PelagicGuardianAppStat = document.getElementById('pelagic_guardian_app_numbers');
const PelagicGuardianVetStat = document.getElementById('pelagic_guardian_vet_numbers');
const PelagicGuardianChampStat = document.getElementById('pelagic_guardian_champ_numbers');

const PelagicGuardianAppSkills = document.getElementById('pelagic_guardian_skill_app');
const PelagicGuardianVetSkills = document.getElementById('pelagic_guardian_skill_vet');
const PelagicGuardianChampSkills = document.getElementById('pelagic_guardian_skill_champ');

//Pelagic Shaman

const PelagicShamanStatBtn = document.getElementById('pelagic_shaman_toggle1')
const PelagicShamanStratBtn = document.getElementById('pelagic_shaman_toggle2')
const PelagicShamanStrat = document.getElementById('pelagic_shaman_strat');
const PelagicShamanSprite = document.getElementById('pelagic_shaman_sprite')

const PelagicShamanApp = document.getElementById('pelagic_shaman_app')
const PelagicShamanVet = document.getElementById('pelagic_shaman_vet')
const PelagicShamanChamp = document.getElementById('pelagic_shaman_champ')

const PelagicShamanAppStat = document.getElementById('pelagic_shaman_app_numbers');
const PelagicShamanVetStat = document.getElementById('pelagic_shaman_vet_numbers');
const PelagicShamanChampStat = document.getElementById('pelagic_shaman_champ_numbers');

const PelagicShamanAppSkills = document.getElementById('pelagic_shaman_skill_app');
const PelagicShamanVetSkills = document.getElementById('pelagic_shaman_skill_vet');
const PelagicShamanChampSkills = document.getElementById('pelagic_shaman_skill_champ');

//Deep Stinger

const DeepStingerStatBtn = document.getElementById('deep_stinger_toggle1')
const DeepStingerStratBtn = document.getElementById('deep_stinger_toggle2')
const DeepStingerStrat = document.getElementById('deep_stinger_strat');
const DeepStingerSprite = document.getElementById('deep_stinger_sprite')

const DeepStingerApp = document.getElementById('deep_stinger_app')
const DeepStingerVet = document.getElementById('deep_stinger_vet')
const DeepStingerChamp = document.getElementById('deep_stinger_champ')

const DeepStingerAppStat = document.getElementById('deep_stinger_app_numbers');
const DeepStingerVetStat = document.getElementById('deep_stinger_vet_numbers');
const DeepStingerChampStat = document.getElementById('deep_stinger_champ_numbers');

const DeepStingerAppSkills = document.getElementById('deep_stinger_skill_app');
const DeepStingerVetSkills = document.getElementById('deep_stinger_skill_vet');
const DeepStingerChampSkills = document.getElementById('deep_stinger_skill_champ');

//Drowned Thrall

const DrownedThrallStatBtn = document.getElementById('drowned_thrall_toggle1')
const DrownedThrallStratBtn = document.getElementById('drowned_thrall_toggle2')
const DrownedThrallStrat = document.getElementById('drowned_thrall_strat');
const DrownedThrallSprite = document.getElementById('drowned_thrall_sprite')

const DrownedThrallApp = document.getElementById('drowned_thrall_app')
const DrownedThrallVet = document.getElementById('drowned_thrall_vet')
const DrownedThrallChamp = document.getElementById('drowned_thrall_champ')

const DrownedThrallAppStat = document.getElementById('drowned_thrall_app_numbers');
const DrownedThrallVetStat = document.getElementById('drowned_thrall_vet_numbers');
const DrownedThrallChampStat = document.getElementById('drowned_thrall_champ_numbers');

const DrownedThrallAppSkills = document.getElementById('drowned_thrall_skill_app');
const DrownedThrallVetSkills = document.getElementById('drowned_thrall_skill_vet');
const DrownedThrallChampSkills = document.getElementById('drowned_thrall_skill_champ');

//Sea Maggot

const SeaMaggotStatBtn = document.getElementById('sea_maggot_toggle1')
const SeaMaggotStratBtn = document.getElementById('sea_maggot_toggle2')
const SeaMaggotStrat = document.getElementById('sea_maggot_strat');
const SeaMaggotSprite = document.getElementById('sea_maggot_sprite')

const SeaMaggotApp = document.getElementById('sea_maggot_app')
const SeaMaggotVet = document.getElementById('sea_maggot_vet')
const SeaMaggotChamp = document.getElementById('sea_maggot_champ')

const SeaMaggotAppStat = document.getElementById('sea_maggot_app_numbers');
const SeaMaggotVetStat = document.getElementById('sea_maggot_vet_numbers');
const SeaMaggotChampStat = document.getElementById('sea_maggot_champ_numbers');

const SeaMaggotAppSkills = document.getElementById('sea_maggot_skill_app');
const SeaMaggotVetSkills = document.getElementById('sea_maggot_skill_vet');
const SeaMaggotChampSkills = document.getElementById('sea_maggot_skill_champ');

//Uca Crusher

const UcaCrusherStatBtn = document.getElementById('uca_crusher_toggle1')
const UcaCrusherStratBtn = document.getElementById('uca_crusher_toggle2')
const UcaCrusherStrat = document.getElementById('uca_crusher_strat');
const UcaCrusherSprite = document.getElementById('uca_crusher_sprite')

const UcaCrusherVet = document.getElementById('uca_crusher_vet')
const UcaCrusherChamp = document.getElementById('uca_crusher_champ')

const UcaCrusherVetStat = document.getElementById('uca_crusher_vet_numbers');
const UcaCrusherChampStat = document.getElementById('uca_crusher_champ_numbers');

const UcaCrusherVetSkills = document.getElementById('uca_crusher_skill_vet');
const UcaCrusherChampSkills = document.getElementById('uca_crusher_skill_champ');

//Squiffy Ghast

const SquiffyGhastStatBtn = document.getElementById('squiffy_ghast_toggle1')
const SquiffyGhastStratBtn = document.getElementById('squiffy_ghast_toggle2')
const SquiffyGhastStrat = document.getElementById('squiffy_ghast_strat');
const SquiffyGhastSprite = document.getElementById('squiffy_ghast_sprite')

const SquiffyGhastChamp = document.getElementById('squiffy_ghast_champ')
const SquiffyGhastChampStat = document.getElementById('squiffy_ghast_champ_numbers');
const SquiffyGhastChampSkills = document.getElementById('squiffy_ghast_skill_champ');


//Shared Elements

//Brigand Cutthroat

const BrigandCutthroatStatBtn = document.getElementById('brigand_cutthroat_toggle1')
const BrigandCutthroatStratBtn = document.getElementById('brigand_cutthroat_toggle2')
const BrigandCutthroatStrat = document.getElementById('brigand_cutthroat_strat');
const BrigandCutthroatSprite = document.getElementById('brigand_cutthroat_sprite')

const BrigandCutthroatApp = document.getElementById('brigand_cutthroat_app')
const BrigandCutthroatVet = document.getElementById('brigand_cutthroat_vet')
const BrigandCutthroatChamp = document.getElementById('brigand_cutthroat_champ')

const BrigandCutthroatAppStat = document.getElementById('brigand_cutthroat_app_numbers');
const BrigandCutthroatVetStat = document.getElementById('brigand_cutthroat_vet_numbers');
const BrigandCutthroatChampStat = document.getElementById('brigand_cutthroat_champ_numbers');

const BrigandCutthroatAppSkills = document.getElementById('brigand_cutthroat_skill_app');
const BrigandCutthroatVetSkills = document.getElementById('brigand_cutthroat_skill_vet');
const BrigandCutthroatChampSkills = document.getElementById('brigand_cutthroat_skill_champ');

//Brigand Bloodletter

const BrigandBloodletterStatBtn = document.getElementById('brigand_bloodletter_toggle1')
const BrigandBloodletterStratBtn = document.getElementById('brigand_bloodletter_toggle2')
const BrigandBloodletterStrat = document.getElementById('brigand_bloodletter_strat');
const BrigandBloodletterSprite = document.getElementById('brigand_bloodletter_sprite')

const BrigandBloodletterApp = document.getElementById('brigand_bloodletter_app')
const BrigandBloodletterVet = document.getElementById('brigand_bloodletter_vet')
const BrigandBloodletterChamp = document.getElementById('brigand_bloodletter_champ')

const BrigandBloodletterAppStat = document.getElementById('brigand_bloodletter_app_numbers');
const BrigandBloodletterVetStat = document.getElementById('brigand_bloodletter_vet_numbers');
const BrigandBloodletterChampStat = document.getElementById('brigand_bloodletter_champ_numbers');

const BrigandBloodletterAppSkills = document.getElementById('brigand_bloodletter_skill_app');
const BrigandBloodletterVetSkills = document.getElementById('brigand_bloodletter_skill_vet');
const BrigandBloodletterChampSkills = document.getElementById('brigand_bloodletter_skill_champ');

//Brigand Fusilier

const BrigandFusilierStatBtn = document.getElementById('brigand_fusilier_toggle1')
const BrigandFusilierStratBtn = document.getElementById('brigand_fusilier_toggle2')
const BrigandFusilierStrat = document.getElementById('brigand_fusilier_strat');
const BrigandFusilierSprite = document.getElementById('brigand_fusilier_sprite')

const BrigandFusilierApp = document.getElementById('brigand_fusilier_app')
const BrigandFusilierVet = document.getElementById('brigand_fusilier_vet')
const BrigandFusilierChamp = document.getElementById('brigand_fusilier_champ')

const BrigandFusilierAppStat = document.getElementById('brigand_fusilier_app_numbers');
const BrigandFusilierVetStat = document.getElementById('brigand_fusilier_vet_numbers');
const BrigandFusilierChampStat = document.getElementById('brigand_fusilier_champ_numbers');

const BrigandFusilierAppSkills = document.getElementById('brigand_fusilier_skill_app');
const BrigandFusilierVetSkills = document.getElementById('brigand_fusilier_skill_vet');
const BrigandFusilierChampSkills = document.getElementById('brigand_fusilier_skill_champ');

//Cultist Brawler

const CultistBrawlerStatBtn = document.getElementById('cultist_brawler_toggle1')
const CultistBrawlerStratBtn = document.getElementById('cultist_brawler_toggle2')
const CultistBrawlerStrat = document.getElementById('cultist_brawler_strat');
const CultistBrawlerSprite = document.getElementById('cultist_brawler_sprite')

const CultistBrawlerApp = document.getElementById('cultist_brawler_app')
const CultistBrawlerVet = document.getElementById('cultist_brawler_vet')
const CultistBrawlerChamp = document.getElementById('cultist_brawler_champ')

const CultistBrawlerAppStat = document.getElementById('cultist_brawler_app_numbers');
const CultistBrawlerVetStat = document.getElementById('cultist_brawler_vet_numbers');
const CultistBrawlerChampStat = document.getElementById('cultist_brawler_champ_numbers');

const CultistBrawlerAppSkills = document.getElementById('cultist_brawler_skill_app');
const CultistBrawlerVetSkills = document.getElementById('cultist_brawler_skill_vet');
const CultistBrawlerChampSkills = document.getElementById('cultist_brawler_skill_champ');

//Cultist Acolyte

const CultistAcolyteStatBtn = document.getElementById('cultist_acolyte_toggle1')
const CultistAcolyteStratBtn = document.getElementById('cultist_acolyte_toggle2')
const CultistAcolyteStrat = document.getElementById('cultist_acolyte_strat');
const CultistAcolyteSprite = document.getElementById('cultist_acolyte_sprite')

const CultistAcolyteApp = document.getElementById('cultist_acolyte_app')
const CultistAcolyteVet = document.getElementById('cultist_acolyte_vet')
const CultistAcolyteChamp = document.getElementById('cultist_acolyte_champ')

const CultistAcolyteAppStat = document.getElementById('cultist_acolyte_app_numbers');
const CultistAcolyteVetStat = document.getElementById('cultist_acolyte_vet_numbers');
const CultistAcolyteChampStat = document.getElementById('cultist_acolyte_champ_numbers');

const CultistAcolyteAppSkills = document.getElementById('cultist_acolyte_skill_app');
const CultistAcolyteVetSkills = document.getElementById('cultist_acolyte_skill_vet');
const CultistAcolyteChampSkills = document.getElementById('cultist_acolyte_skill_champ');

//Madman

const MadmanStatBtn = document.getElementById('madman_toggle1')
const MadmanStratBtn = document.getElementById('madman_toggle2')
const MadmanStrat = document.getElementById('madman_strat');
const MadmanSprite = document.getElementById('madman_sprite')

const MadmanApp = document.getElementById('madman_app')
const MadmanVet = document.getElementById('madman_vet')
const MadmanChamp = document.getElementById('madman_champ')

const MadmanAppStat = document.getElementById('madman_app_numbers');
const MadmanVetStat = document.getElementById('madman_vet_numbers');
const MadmanChampStat = document.getElementById('madman_champ_numbers');

const MadmanAppSkills = document.getElementById('madman_skill_app');
const MadmanVetSkills = document.getElementById('madman_skill_vet');
const MadmanChampSkills = document.getElementById('madman_skill_champ');

//Webber

const WebberStatBtn = document.getElementById('webber_toggle1')
const WebberStratBtn = document.getElementById('webber_toggle2')
const WebberStrat = document.getElementById('webber_strat');
const WebberSprite = document.getElementById('webber_sprite')

const WebberApp = document.getElementById('webber_app')
const WebberVet = document.getElementById('webber_vet')
const WebberChamp = document.getElementById('webber_champ')

const WebberAppStat = document.getElementById('webber_app_numbers');
const WebberVetStat = document.getElementById('webber_vet_numbers');
const WebberChampStat = document.getElementById('webber_champ_numbers');

const WebberAppSkills = document.getElementById('webber_skill_app');
const WebberVetSkills = document.getElementById('webber_skill_vet');
const WebberChampSkills = document.getElementById('webber_skill_champ');

//Spitter

const SpitterStatBtn = document.getElementById('spitter_toggle1')
const SpitterStratBtn = document.getElementById('spitter_toggle2')
const SpitterStrat = document.getElementById('spitter_strat');
const SpitterSprite = document.getElementById('spitter_sprite')

const SpitterApp = document.getElementById('spitter_app')
const SpitterVet = document.getElementById('spitter_vet')
const SpitterChamp = document.getElementById('spitter_champ')

const SpitterAppStat = document.getElementById('spitter_app_numbers');
const SpitterVetStat = document.getElementById('spitter_vet_numbers');
const SpitterChampStat = document.getElementById('spitter_champ_numbers');

const SpitterAppSkills = document.getElementById('spitter_skill_app');
const SpitterVetSkills = document.getElementById('spitter_skill_vet');
const SpitterChampSkills = document.getElementById('spitter_skill_champ');

//Maggot

const MaggotStatBtn = document.getElementById('maggot_toggle1')
const MaggotStratBtn = document.getElementById('maggot_toggle2')
const MaggotStrat = document.getElementById('maggot_strat');
const MaggotSprite = document.getElementById('maggot_sprite')

const MaggotApp = document.getElementById('maggot_app')
const MaggotVet = document.getElementById('maggot_vet')
const MaggotChamp = document.getElementById('maggot_champ')

const MaggotAppStat = document.getElementById('maggot_app_numbers');
const MaggotVetStat = document.getElementById('maggot_vet_numbers');
const MaggotChampStat = document.getElementById('maggot_champ_numbers');

const MaggotAppSkills = document.getElementById('maggot_skill_app');
const MaggotVetSkills = document.getElementById('maggot_skill_vet');
const MaggotChampSkills = document.getElementById('maggot_skill_champ');

//Bone Rabble

const BoneRabbleStatBtn = document.getElementById('bone_rabble_toggle1')
const BoneRabbleStratBtn = document.getElementById('bone_rabble_toggle2')
const BoneRabbleStrat = document.getElementById('bone_rabble_strat');
const BoneRabbleSprite = document.getElementById('bone_rabble_sprite')

const BoneRabbleApp = document.getElementById('bone_rabble_app')
const BoneRabbleVet = document.getElementById('bone_rabble_vet')
const BoneRabbleChamp = document.getElementById('bone_rabble_champ')

const BoneRabbleAppStat = document.getElementById('bone_rabble_app_numbers');
const BoneRabbleVetStat = document.getElementById('bone_rabble_vet_numbers');
const BoneRabbleChampStat = document.getElementById('bone_rabble_champ_numbers');

const BoneRabbleAppSkills = document.getElementById('bone_rabble_skill_app');
const BoneRabbleVetSkills = document.getElementById('bone_rabble_skill_vet');
const BoneRabbleChampSkills = document.getElementById('bone_rabble_skill_champ');

//Gargoyle

const GargoyleStatBtn = document.getElementById('gargoyle_toggle1')
const GargoyleStratBtn = document.getElementById('gargoyle_toggle2')
const GargoyleStrat = document.getElementById('gargoyle_strat');
const GargoyleSprite = document.getElementById('gargoyle_sprite')

const GargoyleVet = document.getElementById('gargoyle_vet')
const GargoyleChamp = document.getElementById('gargoyle_champ')

const GargoyleVetStat = document.getElementById('gargoyle_vet_numbers');
const GargoyleChampStat = document.getElementById('gargoyle_champ_numbers');

const GargoyleVetSkills = document.getElementById('gargoyle_skill_vet');
const GargoyleChampSkills = document.getElementById('gargoyle_skill_champ');

//Ghoul

const GhoulStatBtn = document.getElementById('ghoul_toggle1')
const GhoulStratBtn = document.getElementById('ghoul_toggle2')
const GhoulStrat = document.getElementById('ghoul_strat');
const GhoulSprite = document.getElementById('ghoul_sprite')

const GhoulVet = document.getElementById('ghoul_vet')
const GhoulChamp = document.getElementById('ghoul_champ')

const GhoulVetStat = document.getElementById('ghoul_vet_numbers');
const GhoulChampStat = document.getElementById('ghoul_champ_numbers');

const GhoulVetSkills = document.getElementById('ghoul_skill_vet');
const GhoulChampSkills = document.getElementById('ghoul_skill_champ');

//Brigand Raider

const BrigandRaiderStatBtn = document.getElementById('brigand_raider_toggle1')
const BrigandRaiderStratBtn = document.getElementById('brigand_raider_toggle2')
const BrigandRaiderStrat = document.getElementById('brigand_raider_strat');
const BrigandRaiderSprite = document.getElementById('brigand_raider_sprite')

const BrigandRaiderDarkest = document.getElementById('brigand_raider_darkest')
const BrigandRaiderDarkestStat = document.getElementById('brigand_raider_darkest_numbers');
const BrigandRaiderDarkestSkills = document.getElementById('brigand_raider_skill_darkest');

//Brigand Hunter

const BrigandHunterStatBtn = document.getElementById('brigand_hunter_toggle1')
const BrigandHunterStratBtn = document.getElementById('brigand_hunter_toggle2')
const BrigandHunterStrat = document.getElementById('brigand_hunter_strat');
const BrigandHunterSprite = document.getElementById('brigand_hunter_sprite')

const BrigandHunterDarkest = document.getElementById('brigand_hunter_darkest')
const BrigandHunterDarkestStat = document.getElementById('brigand_hunter_darkest_numbers');
const BrigandHunterDarkestSkills = document.getElementById('brigand_hunter_skill_darkest');



//Adding Event Listeners to Portraits

//Ruins

BoneSoldierPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'
   
    BoneSoldierStrat.style.display = 'none' 
    BoneSoldierSprite.style.display = 'block'
    BoneSoldierStatBtn.style.display = 'block'
    BoneSoldierStratBtn.style.display = 'block'

    BoneSoldierApp.style.display = 'block'
    BoneSoldierVet.style.display = 'block'  
    BoneSoldierChamp.style.display = 'block' 
    BoneSoldierVetStat.style.display = 'none'
    BoneSoldierChampStat.style.display = 'none'
    BoneSoldierAppStat.style.display = 'block'
    BoneSoldierAppSkills.style.display = 'block'
    BoneSoldierVetSkills.style.display = 'none'
    BoneSoldierChampSkills.style.display = 'none' 

})

BoneDefenderPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'
   
    BoneDefenderStrat.style.display = 'none' 
    BoneDefenderSprite.style.display = 'block'
    BoneDefenderStatBtn.style.display = 'block'
    BoneDefenderStratBtn.style.display = 'block'

    BoneDefenderApp.style.display = 'block'
    BoneDefenderVet.style.display = 'block'  
    BoneDefenderChamp.style.display = 'block' 
    BoneDefenderVetStat.style.display = 'none'
    BoneDefenderChampStat.style.display = 'none'
    BoneDefenderAppStat.style.display = 'block'
    BoneDefenderAppSkills.style.display = 'block'
    BoneDefenderVetSkills.style.display = 'none'
    BoneDefenderChampSkills.style.display = 'none' 

})

BoneArbalestPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'
   
    BoneArbalestStrat.style.display = 'none' 
    BoneArbalestSprite.style.display = 'block'
    BoneArbalestStatBtn.style.display = 'block'
    BoneArbalestStratBtn.style.display = 'block'

    BoneArbalestApp.style.display = 'block'
    BoneArbalestVet.style.display = 'block'  
    BoneArbalestChamp.style.display = 'block' 
    BoneArbalestVetStat.style.display = 'none'
    BoneArbalestChampStat.style.display = 'none'
    BoneArbalestAppStat.style.display = 'block'
    BoneArbalestAppSkills.style.display = 'block'
    BoneArbalestVetSkills.style.display = 'none'
    BoneArbalestChampSkills.style.display = 'none' 

})

BoneCourtierPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'
   
    BoneCourtierStrat.style.display = 'none' 
    BoneCourtierSprite.style.display = 'block'
    BoneCourtierStatBtn.style.display = 'block'
    BoneCourtierStratBtn.style.display = 'block'

    BoneCourtierApp.style.display = 'block'
    BoneCourtierVet.style.display = 'block'  
    BoneCourtierChamp.style.display = 'block' 
    BoneCourtierVetStat.style.display = 'none'
    BoneCourtierChampStat.style.display = 'none'
    BoneCourtierAppStat.style.display = 'block'
    BoneCourtierAppSkills.style.display = 'block'
    BoneCourtierVetSkills.style.display = 'none'
    BoneCourtierChampSkills.style.display = 'none' 

})

BoneSpearmanPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'

    BoneSpearmanStrat.style.display = 'none' 
    BoneSpearmanSprite.style.display = 'block'
    BoneSpearmanStatBtn.style.display = 'block'
    BoneSpearmanStratBtn.style.display = 'block'

    BoneSpearmanVet.style.display = 'block'  
    BoneSpearmanChamp.style.display = 'block' 

    BoneSpearmanChampStat.style.display = 'none'
    BoneSpearmanVetStat.style.display = 'block'
    BoneSpearmanVetSkills.style.display = 'block'
    BoneSpearmanChampSkills.style.display = 'none' 

})

BoneCaptainPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'

    BoneCaptainStrat.style.display = 'none' 
    BoneCaptainSprite.style.display = 'block'
    BoneCaptainStatBtn.style.display = 'block'
    BoneCaptainStratBtn.style.display = 'block'

    BoneCaptainVet.style.display = 'block'  
    BoneCaptainChamp.style.display = 'block' 

    BoneCaptainChampStat.style.display = 'none'
    BoneCaptainVetStat.style.display = 'block'
    BoneCaptainVetSkills.style.display = 'block'
    BoneCaptainChampSkills.style.display = 'none' 

})

BoneBearerPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'
   
    BoneBearerSprite.style.display = 'block'
    BoneBearerStatBtn.style.display = 'block'
    BoneBearerStratBtn.style.display = 'block'

   
    BoneBearerChamp.style.display = 'block' 
    BoneBearerChampStat.style.display = 'block'
    BoneBearerChampSkills.style.display = 'block'
    
})


//Weald

FungalScratcherPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    FungalScratcherStrat.style.display = 'none' 
    FungalScratcherSprite.style.display = 'block'
    FungalScratcherStatBtn.style.display = 'block'
    FungalScratcherStratBtn.style.display = 'block'

    FungalScratcherApp.style.display = 'block'
    FungalScratcherVet.style.display = 'block'  
    FungalScratcherChamp.style.display = 'block' 
    FungalScratcherVetStat.style.display = 'none'
    FungalScratcherChampStat.style.display = 'none'
    FungalScratcherAppStat.style.display = 'block'
    FungalScratcherAppSkills.style.display = 'block'
    FungalScratcherVetSkills.style.display = 'none'
    FungalScratcherChampSkills.style.display = 'none' 

})

FungalArtilleryPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    FungalArtilleryStrat.style.display = 'none' 
    FungalArtillerySprite.style.display = 'block'
    FungalArtilleryStatBtn.style.display = 'block'
    FungalArtilleryStratBtn.style.display = 'block'

    FungalArtilleryApp.style.display = 'block'
    FungalArtilleryVet.style.display = 'block'  
    FungalArtilleryChamp.style.display = 'block' 
    FungalArtilleryVetStat.style.display = 'none'
    FungalArtilleryChampStat.style.display = 'none'
    FungalArtilleryAppStat.style.display = 'block'
    FungalArtilleryAppSkills.style.display = 'block'
    FungalArtilleryVetSkills.style.display = 'none'
    FungalArtilleryChampSkills.style.display = 'none' 

})

RabidGnasherPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    RabidGnasherStrat.style.display = 'none' 
    RabidGnasherSprite.style.display = 'block'
    RabidGnasherStatBtn.style.display = 'block'
    RabidGnasherStratBtn.style.display = 'block'

    RabidGnasherApp.style.display = 'block'
    RabidGnasherVet.style.display = 'block'  
    RabidGnasherChamp.style.display = 'block' 
    RabidGnasherVetStat.style.display = 'none'
    RabidGnasherChampStat.style.display = 'none'
    RabidGnasherAppStat.style.display = 'block'
    RabidGnasherAppSkills.style.display = 'block'
    RabidGnasherVetSkills.style.display = 'none'
    RabidGnasherChampSkills.style.display = 'none' 

})

EctoplasmPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    EctoplasmStrat.style.display = 'none' 
    EctoplasmSprite.style.display = 'block'
    EctoplasmStatBtn.style.display = 'block'
    EctoplasmStratBtn.style.display = 'block'

    EctoplasmApp.style.display = 'block'
    EctoplasmVet.style.display = 'block'  
    EctoplasmChamp.style.display = 'block' 
    EctoplasmVetStat.style.display = 'none'
    EctoplasmChampStat.style.display = 'none'
    EctoplasmAppStat.style.display = 'block'
    EctoplasmAppSkills.style.display = 'block'
    EctoplasmVetSkills.style.display = 'none'
    EctoplasmChampSkills.style.display = 'none' 

})

LargeEctoplasmPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    LargeEctoplasmStrat.style.display = 'none' 
    LargeEctoplasmSprite.style.display = 'block'
    LargeEctoplasmStatBtn.style.display = 'block'
    LargeEctoplasmStratBtn.style.display = 'block'

    LargeEctoplasmApp.style.display = 'block'
    LargeEctoplasmVet.style.display = 'block'  
    LargeEctoplasmChamp.style.display = 'block' 
    LargeEctoplasmVetStat.style.display = 'none'
    LargeEctoplasmChampStat.style.display = 'none'
    LargeEctoplasmAppStat.style.display = 'block'
    LargeEctoplasmAppSkills.style.display = 'block'
    LargeEctoplasmVetSkills.style.display = 'none'
    LargeEctoplasmChampSkills.style.display = 'none' 

})

CronePortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'

    CroneStrat.style.display = 'none' 
    CroneSprite.style.display = 'block'
    CroneStatBtn.style.display = 'block'
    CroneStratBtn.style.display = 'block'

    CroneVet.style.display = 'block'  
    CroneChamp.style.display = 'block' 

    CroneChampStat.style.display = 'none'
    CroneVetStat.style.display = 'block'
    CroneVetSkills.style.display = 'block'
    CroneChampSkills.style.display = 'none' 

})

UncleanGiantPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'

    UncleanGiantStrat.style.display = 'none' 
    UncleanGiantSprite.style.display = 'block'
    UncleanGiantStatBtn.style.display = 'block'
    UncleanGiantStratBtn.style.display = 'block'

    UncleanGiantVet.style.display = 'block'  
    UncleanGiantChamp.style.display = 'block' 

    UncleanGiantChampStat.style.display = 'none'
    UncleanGiantVetStat.style.display = 'block'
    UncleanGiantVetSkills.style.display = 'block'
    UncleanGiantChampSkills.style.display = 'none' 

})

HatefulViragoPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    HatefulViragoSprite.style.display = 'block'
    HatefulViragoStatBtn.style.display = 'block'
    HatefulViragoStratBtn.style.display = 'block'

   
    HatefulViragoChamp.style.display = 'block' 
    HatefulViragoChampStat.style.display = 'block'
    HatefulViragoChampSkills.style.display = 'block'
    
})

NecroticFungusPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    NecroticFungusSprite.style.display = 'block'
    NecroticFungusStatBtn.style.display = 'block'
    NecroticFungusStratBtn.style.display = 'block'

   
    NecroticFungusChamp.style.display = 'block' 
    NecroticFungusChampStat.style.display = 'block'
    NecroticFungusChampSkills.style.display = 'block'
    
})

//Warrens

SwineChopperPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'
   
    SwineChopperStrat.style.display = 'none' 
    SwineChopperSprite.style.display = 'block'
    SwineChopperStatBtn.style.display = 'block'
    SwineChopperStratBtn.style.display = 'block'

    SwineChopperApp.style.display = 'block'
    SwineChopperVet.style.display = 'block'  
    SwineChopperChamp.style.display = 'block' 
    SwineChopperVetStat.style.display = 'none'
    SwineChopperChampStat.style.display = 'none'
    SwineChopperAppStat.style.display = 'block'
    SwineChopperAppSkills.style.display = 'block'
    SwineChopperVetSkills.style.display = 'none'
    SwineChopperChampSkills.style.display = 'none' 

})

SwineWretchPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'
   
    SwineWretchStrat.style.display = 'none' 
    SwineWretchSprite.style.display = 'block'
    SwineWretchStatBtn.style.display = 'block'
    SwineWretchStratBtn.style.display = 'block'

    SwineWretchApp.style.display = 'block'
    SwineWretchVet.style.display = 'block'  
    SwineWretchChamp.style.display = 'block' 
    SwineWretchVetStat.style.display = 'none'
    SwineWretchChampStat.style.display = 'none'
    SwineWretchAppStat.style.display = 'block'
    SwineWretchAppSkills.style.display = 'block'
    SwineWretchVetSkills.style.display = 'none'
    SwineWretchChampSkills.style.display = 'none' 

})


SwineDrummerPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'
   
    SwineDrummerStrat.style.display = 'none' 
    SwineDrummerSprite.style.display = 'block'
    SwineDrummerStatBtn.style.display = 'block'
    SwineDrummerStratBtn.style.display = 'block'

    SwineDrummerApp.style.display = 'block'
    SwineDrummerVet.style.display = 'block'  
    SwineDrummerChamp.style.display = 'block' 
    SwineDrummerVetStat.style.display = 'none'
    SwineDrummerChampStat.style.display = 'none'
    SwineDrummerAppStat.style.display = 'block'
    SwineDrummerAppSkills.style.display = 'block'
    SwineDrummerVetSkills.style.display = 'none'
    SwineDrummerChampSkills.style.display = 'none' 

})


SwineSlasherPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'

    SwineSlasherStrat.style.display = 'none' 
    SwineSlasherSprite.style.display = 'block'
    SwineSlasherStatBtn.style.display = 'block'
    SwineSlasherStratBtn.style.display = 'block'

    SwineSlasherApp.style.display = 'block'
    SwineSlasherVet.style.display = 'block'  
    SwineSlasherChamp.style.display = 'block' 
    SwineSlasherVetStat.style.display = 'none'
    SwineSlasherChampStat.style.display = 'none'
    SwineSlasherAppStat.style.display = 'block'
    SwineSlasherAppSkills.style.display = 'block'
    SwineSlasherVetSkills.style.display = 'none'
    SwineSlasherChampSkills.style.display = 'none' 

})


CarrionEaterPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'
   
    CarrionEaterStrat.style.display = 'none' 
    CarrionEaterSprite.style.display = 'block'
    CarrionEaterStatBtn.style.display = 'block'
    CarrionEaterStratBtn.style.display = 'block'

    CarrionEaterApp.style.display = 'block'
    CarrionEaterVet.style.display = 'block'  
    CarrionEaterChamp.style.display = 'block' 
    CarrionEaterVetStat.style.display = 'none'
    CarrionEaterChampStat.style.display = 'none'
    CarrionEaterAppStat.style.display = 'block'
    CarrionEaterAppSkills.style.display = 'block'
    CarrionEaterVetSkills.style.display = 'none'
    CarrionEaterChampSkills.style.display = 'none' 

})

LargeCarrionEaterPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'

    LargeCarrionEaterStrat.style.display = 'none' 
    LargeCarrionEaterSprite.style.display = 'block'
    LargeCarrionEaterStatBtn.style.display = 'block'
    LargeCarrionEaterStratBtn.style.display = 'block'
    
    LargeCarrionEaterChampStat.style.display = 'none'
    LargeCarrionEaterVetStat.style.display = 'block'
    LargeCarrionEaterVetSkills.style.display = 'block'
    LargeCarrionEaterChampSkills.style.display = 'none' 
    LargeCarrionEaterVet.style.display = 'block'  
    LargeCarrionEaterChamp.style.display = 'block' 

})


SwinetaurPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'

    SwinetaurStrat.style.display = 'none' 
    SwinetaurSprite.style.display = 'block'
    SwinetaurStatBtn.style.display = 'block'
    SwinetaurStratBtn.style.display = 'block'

    SwinetaurVet.style.display = 'block'  
    SwinetaurChamp.style.display = 'block' 

    SwinetaurChampStat.style.display = 'none'
    SwinetaurVetStat.style.display = 'block'
    SwinetaurVetSkills.style.display = 'block'
    SwinetaurChampSkills.style.display = 'none' 

})


SwineSkiverPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'
   
    SwineSkiverSprite.style.display = 'block'
    SwineSkiverStatBtn.style.display = 'block'
    SwineSkiverStratBtn.style.display = 'block'

   
    SwineSkiverChamp.style.display = 'block' 
    SwineSkiverChampStat.style.display = 'block'
    SwineSkiverChampSkills.style.display = 'block'
    
})

//Cove

PelagicGrouperPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    PelagicGrouperStrat.style.display = 'none' 
    PelagicGrouperSprite.style.display = 'block'
    PelagicGrouperStatBtn.style.display = 'block'
    PelagicGrouperStratBtn.style.display = 'block'

    PelagicGrouperApp.style.display = 'block'
    PelagicGrouperVet.style.display = 'block'  
    PelagicGrouperChamp.style.display = 'block' 
    PelagicGrouperVetStat.style.display = 'none'
    PelagicGrouperChampStat.style.display = 'none'
    PelagicGrouperAppStat.style.display = 'block'
    PelagicGrouperAppSkills.style.display = 'block'
    PelagicGrouperVetSkills.style.display = 'none'
    PelagicGrouperChampSkills.style.display = 'none' 

})

PelagicGuardianPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    PelagicGuardianStrat.style.display = 'none' 
    PelagicGuardianSprite.style.display = 'block'
    PelagicGuardianStatBtn.style.display = 'block'
    PelagicGuardianStratBtn.style.display = 'block'

    PelagicGuardianApp.style.display = 'block'
    PelagicGuardianVet.style.display = 'block'  
    PelagicGuardianChamp.style.display = 'block' 
    PelagicGuardianVetStat.style.display = 'none'
    PelagicGuardianChampStat.style.display = 'none'
    PelagicGuardianAppStat.style.display = 'block'
    PelagicGuardianAppSkills.style.display = 'block'
    PelagicGuardianVetSkills.style.display = 'none'
    PelagicGuardianChampSkills.style.display = 'none' 

})

PelagicShamanPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    PelagicShamanStrat.style.display = 'none' 
    PelagicShamanSprite.style.display = 'block'
    PelagicShamanStatBtn.style.display = 'block'
    PelagicShamanStratBtn.style.display = 'block'

    PelagicShamanApp.style.display = 'block'
    PelagicShamanVet.style.display = 'block'  
    PelagicShamanChamp.style.display = 'block' 
    PelagicShamanVetStat.style.display = 'none'
    PelagicShamanChampStat.style.display = 'none'
    PelagicShamanAppStat.style.display = 'block'
    PelagicShamanAppSkills.style.display = 'block'
    PelagicShamanVetSkills.style.display = 'none'
    PelagicShamanChampSkills.style.display = 'none' 

})

DeepStingerPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    DeepStingerStrat.style.display = 'none' 
    DeepStingerSprite.style.display = 'block'
    DeepStingerStatBtn.style.display = 'block'
    DeepStingerStratBtn.style.display = 'block'

    DeepStingerApp.style.display = 'block'
    DeepStingerVet.style.display = 'block'  
    DeepStingerChamp.style.display = 'block' 
    DeepStingerVetStat.style.display = 'none'
    DeepStingerChampStat.style.display = 'none'
    DeepStingerAppStat.style.display = 'block'
    DeepStingerAppSkills.style.display = 'block'
    DeepStingerVetSkills.style.display = 'none'
    DeepStingerChampSkills.style.display = 'none' 

})

DrownedThrallPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    DrownedThrallStrat.style.display = 'none' 
    DrownedThrallSprite.style.display = 'block'
    DrownedThrallStatBtn.style.display = 'block'
    DrownedThrallStratBtn.style.display = 'block'

    DrownedThrallApp.style.display = 'block'
    DrownedThrallVet.style.display = 'block'  
    DrownedThrallChamp.style.display = 'block' 
    DrownedThrallVetStat.style.display = 'none'
    DrownedThrallChampStat.style.display = 'none'
    DrownedThrallAppStat.style.display = 'block'
    DrownedThrallAppSkills.style.display = 'block'
    DrownedThrallVetSkills.style.display = 'none'
    DrownedThrallChampSkills.style.display = 'none' 

})

SeaMaggotPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    SeaMaggotStrat.style.display = 'none' 
    SeaMaggotSprite.style.display = 'block'
    SeaMaggotStatBtn.style.display = 'block'
    SeaMaggotStratBtn.style.display = 'block'

    SeaMaggotApp.style.display = 'block'
    SeaMaggotVet.style.display = 'block'  
    SeaMaggotChamp.style.display = 'block' 
    SeaMaggotVetStat.style.display = 'none'
    SeaMaggotChampStat.style.display = 'none'
    SeaMaggotAppStat.style.display = 'block'
    SeaMaggotAppSkills.style.display = 'block'
    SeaMaggotVetSkills.style.display = 'none'
    SeaMaggotChampSkills.style.display = 'none' 

})

UcaCrusherPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'

    UcaCrusherStrat.style.display = 'none' 
    UcaCrusherSprite.style.display = 'block'
    UcaCrusherStatBtn.style.display = 'block'
    UcaCrusherStratBtn.style.display = 'block'

    UcaCrusherVet.style.display = 'block'  
    UcaCrusherChamp.style.display = 'block' 

    UcaCrusherChampStat.style.display = 'none'
    UcaCrusherVetStat.style.display = 'block'
    UcaCrusherVetSkills.style.display = 'block'
    UcaCrusherChampSkills.style.display = 'none' 

})

SquiffyGhastPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    SquiffyGhastSprite.style.display = 'block'
    SquiffyGhastStatBtn.style.display = 'block'
    SquiffyGhastStratBtn.style.display = 'block'

   
    SquiffyGhastChamp.style.display = 'block' 
    SquiffyGhastChampStat.style.display = 'block'
    SquiffyGhastChampSkills.style.display = 'block'
    
})


//Shared

BrigandCutthroatPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    BrigandCutthroatStrat.style.display = 'none' 
    BrigandCutthroatSprite.style.display = 'block'
    BrigandCutthroatStatBtn.style.display = 'block'
    BrigandCutthroatStratBtn.style.display = 'block'

    BrigandCutthroatApp.style.display = 'block'
    BrigandCutthroatVet.style.display = 'block'  
    BrigandCutthroatChamp.style.display = 'block' 
    BrigandCutthroatVetStat.style.display = 'none'
    BrigandCutthroatChampStat.style.display = 'none'
    BrigandCutthroatAppStat.style.display = 'block'
    BrigandCutthroatAppSkills.style.display = 'block'
    BrigandCutthroatVetSkills.style.display = 'none'
    BrigandCutthroatChampSkills.style.display = 'none' 

})

BrigandBloodletterPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    BrigandBloodletterStrat.style.display = 'none' 
    BrigandBloodletterSprite.style.display = 'block'
    BrigandBloodletterStatBtn.style.display = 'block'
    BrigandBloodletterStratBtn.style.display = 'block'

    BrigandBloodletterApp.style.display = 'block'
    BrigandBloodletterVet.style.display = 'block'  
    BrigandBloodletterChamp.style.display = 'block' 
    BrigandBloodletterVetStat.style.display = 'none'
    BrigandBloodletterChampStat.style.display = 'none'
    BrigandBloodletterAppStat.style.display = 'block'
    BrigandBloodletterAppSkills.style.display = 'block'
    BrigandBloodletterVetSkills.style.display = 'none'
    BrigandBloodletterChampSkills.style.display = 'none' 

})

BrigandFusilierPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    BrigandFusilierStrat.style.display = 'none' 
    BrigandFusilierSprite.style.display = 'block'
    BrigandFusilierStatBtn.style.display = 'block'
    BrigandFusilierStratBtn.style.display = 'block'

    BrigandFusilierApp.style.display = 'block'
    BrigandFusilierVet.style.display = 'block'  
    BrigandFusilierChamp.style.display = 'block' 
    BrigandFusilierVetStat.style.display = 'none'
    BrigandFusilierChampStat.style.display = 'none'
    BrigandFusilierAppStat.style.display = 'block'
    BrigandFusilierAppSkills.style.display = 'block'
    BrigandFusilierVetSkills.style.display = 'none'
    BrigandFusilierChampSkills.style.display = 'none' 

})

CultistBrawlerPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    CultistBrawlerStrat.style.display = 'none' 
    CultistBrawlerSprite.style.display = 'block'
    CultistBrawlerStatBtn.style.display = 'block'
    CultistBrawlerStratBtn.style.display = 'block'

    CultistBrawlerApp.style.display = 'block'
    CultistBrawlerVet.style.display = 'block'  
    CultistBrawlerChamp.style.display = 'block' 
    CultistBrawlerVetStat.style.display = 'none'
    CultistBrawlerChampStat.style.display = 'none'
    CultistBrawlerAppStat.style.display = 'block'
    CultistBrawlerAppSkills.style.display = 'block'
    CultistBrawlerVetSkills.style.display = 'none'
    CultistBrawlerChampSkills.style.display = 'none' 

})

CultistAcolytePortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    CultistAcolyteStrat.style.display = 'none' 
    CultistAcolyteSprite.style.display = 'block'
    CultistAcolyteStatBtn.style.display = 'block'
    CultistAcolyteStratBtn.style.display = 'block'

    CultistAcolyteApp.style.display = 'block'
    CultistAcolyteVet.style.display = 'block'  
    CultistAcolyteChamp.style.display = 'block' 
    CultistAcolyteVetStat.style.display = 'none'
    CultistAcolyteChampStat.style.display = 'none'
    CultistAcolyteAppStat.style.display = 'block'
    CultistAcolyteAppSkills.style.display = 'block'
    CultistAcolyteVetSkills.style.display = 'none'
    CultistAcolyteChampSkills.style.display = 'none' 

})

MadmanPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    MadmanStrat.style.display = 'none' 
    MadmanSprite.style.display = 'block'
    MadmanStatBtn.style.display = 'block'
    MadmanStratBtn.style.display = 'block'

    MadmanApp.style.display = 'block'
    MadmanVet.style.display = 'block'  
    MadmanChamp.style.display = 'block' 
    MadmanVetStat.style.display = 'none'
    MadmanChampStat.style.display = 'none'
    MadmanAppStat.style.display = 'block'
    MadmanAppSkills.style.display = 'block'
    MadmanVetSkills.style.display = 'none'
    MadmanChampSkills.style.display = 'none' 

})

WebberPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    WebberStrat.style.display = 'none' 
    WebberSprite.style.display = 'block'
    WebberStatBtn.style.display = 'block'
    WebberStratBtn.style.display = 'block'

    WebberApp.style.display = 'block'
    WebberVet.style.display = 'block'  
    WebberChamp.style.display = 'block' 
    WebberVetStat.style.display = 'none'
    WebberChampStat.style.display = 'none'
    WebberAppStat.style.display = 'block'
    WebberAppSkills.style.display = 'block'
    WebberVetSkills.style.display = 'none'
    WebberChampSkills.style.display = 'none' 

})

SpitterPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    SpitterStrat.style.display = 'none' 
    SpitterSprite.style.display = 'block'
    SpitterStatBtn.style.display = 'block'
    SpitterStratBtn.style.display = 'block'

    SpitterApp.style.display = 'block'
    SpitterVet.style.display = 'block'  
    SpitterChamp.style.display = 'block' 
    SpitterVetStat.style.display = 'none'
    SpitterChampStat.style.display = 'none'
    SpitterAppStat.style.display = 'block'
    SpitterAppSkills.style.display = 'block'
    SpitterVetSkills.style.display = 'none'
    SpitterChampSkills.style.display = 'none' 

})

MaggotPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    MaggotStrat.style.display = 'none' 
    MaggotSprite.style.display = 'block'
    MaggotStatBtn.style.display = 'block'
    MaggotStratBtn.style.display = 'block'

    MaggotApp.style.display = 'block'
    MaggotVet.style.display = 'block'  
    MaggotChamp.style.display = 'block' 
    MaggotVetStat.style.display = 'none'
    MaggotChampStat.style.display = 'none'
    MaggotAppStat.style.display = 'block'
    MaggotAppSkills.style.display = 'block'
    MaggotVetSkills.style.display = 'none'
    MaggotChampSkills.style.display = 'none' 

})

BoneRabblePortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    BoneRabbleStrat.style.display = 'none' 
    BoneRabbleSprite.style.display = 'block'
    BoneRabbleStatBtn.style.display = 'block'
    BoneRabbleStratBtn.style.display = 'block'

    BoneRabbleApp.style.display = 'block'
    BoneRabbleVet.style.display = 'block'  
    BoneRabbleChamp.style.display = 'block' 
    BoneRabbleVetStat.style.display = 'none'
    BoneRabbleChampStat.style.display = 'none'
    BoneRabbleAppStat.style.display = 'block'
    BoneRabbleAppSkills.style.display = 'block'
    BoneRabbleVetSkills.style.display = 'none'
    BoneRabbleChampSkills.style.display = 'none' 

})

GargoylePortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'

    GargoyleStrat.style.display = 'none' 
    GargoyleSprite.style.display = 'block'
    GargoyleStatBtn.style.display = 'block'
    GargoyleStratBtn.style.display = 'block'

    GargoyleVet.style.display = 'block'  
    GargoyleChamp.style.display = 'block' 

    GargoyleChampStat.style.display = 'none'
    GargoyleVetStat.style.display = 'block'
    GargoyleVetSkills.style.display = 'block'
    GargoyleChampSkills.style.display = 'none' 

})

GhoulPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'

    GhoulStrat.style.display = 'none' 
    GhoulSprite.style.display = 'block'
    GhoulStatBtn.style.display = 'block'
    GhoulStratBtn.style.display = 'block'

    GhoulVet.style.display = 'block'  
    GhoulChamp.style.display = 'block' 

    GhoulChampStat.style.display = 'none'
    GhoulVetStat.style.display = 'block'
    GhoulVetSkills.style.display = 'block'
    GhoulChampSkills.style.display = 'none' 

})

BrigandRaiderPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    BrigandRaiderSprite.style.display = 'block'
    BrigandRaiderStatBtn.style.display = 'block'
    BrigandRaiderStratBtn.style.display = 'block'

   
    BrigandRaiderDarkest.style.display = 'block' 
    BrigandRaiderDarkestStat.style.display = 'block'
    BrigandRaiderDarkestSkills.style.display = 'block'
    
})

BrigandHunterPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    BrigandHunterSprite.style.display = 'block'
    BrigandHunterStatBtn.style.display = 'block'
    BrigandHunterStratBtn.style.display = 'block'

   
    BrigandHunterDarkest.style.display = 'block' 
    BrigandHunterDarkestStat.style.display = 'block'
    BrigandHunterDarkestSkills.style.display = 'block'
    
})

//Add Lvl Toggle Listeners

//Ruins

BoneSoldierApp.addEventListener('click', function() {
    PlayBtnPress()
    BoneSoldierStrat.style.display = 'none'    
    BoneSoldierAppStat.style.display = 'block'
    BoneSoldierVetStat.style.display = 'none'
    BoneSoldierChampStat.style.display = 'none'
    BoneSoldierAppSkills.style.display = 'block'
    BoneSoldierVetSkills.style.display = 'none'
    BoneSoldierChampSkills.style.display = 'none'

})

BoneSoldierVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneSoldierStrat.style.display = 'none'    
    BoneSoldierAppStat.style.display = 'none'
    BoneSoldierVetStat.style.display = 'block'
    BoneSoldierChampStat.style.display = 'none'
    BoneSoldierAppSkills.style.display = 'none'
    BoneSoldierVetSkills.style.display = 'block'
    BoneSoldierChampSkills.style.display = 'none'
})

BoneSoldierChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneSoldierStrat.style.display = 'none'    
    BoneSoldierAppStat.style.display = 'none'
    BoneSoldierVetStat.style.display = 'none'
    BoneSoldierChampStat.style.display = 'block'
    BoneSoldierAppSkills.style.display = 'none'
    BoneSoldierVetSkills.style.display = 'none'
    BoneSoldierChampSkills.style.display = 'block'
})

BoneDefenderApp.addEventListener('click', function() {
    PlayBtnPress()
    BoneDefenderStrat.style.display = 'none'    
    BoneDefenderAppStat.style.display = 'block'
    BoneDefenderVetStat.style.display = 'none'
    BoneDefenderChampStat.style.display = 'none'
    BoneDefenderAppSkills.style.display = 'block'
    BoneDefenderVetSkills.style.display = 'none'
    BoneDefenderChampSkills.style.display = 'none'

})

BoneDefenderVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneDefenderStrat.style.display = 'none'    
    BoneDefenderAppStat.style.display = 'none'
    BoneDefenderVetStat.style.display = 'block'
    BoneDefenderChampStat.style.display = 'none'
    BoneDefenderAppSkills.style.display = 'none'
    BoneDefenderVetSkills.style.display = 'block'
    BoneDefenderChampSkills.style.display = 'none'
})

BoneDefenderChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneDefenderStrat.style.display = 'none'    
    BoneDefenderAppStat.style.display = 'none'
    BoneDefenderVetStat.style.display = 'none'
    BoneDefenderChampStat.style.display = 'block'
    BoneDefenderAppSkills.style.display = 'none'
    BoneDefenderVetSkills.style.display = 'none'
    BoneDefenderChampSkills.style.display = 'block'
})

BoneArbalestApp.addEventListener('click', function() {
    PlayBtnPress()
    BoneArbalestStrat.style.display = 'none'    
    BoneArbalestAppStat.style.display = 'block'
    BoneArbalestVetStat.style.display = 'none'
    BoneArbalestChampStat.style.display = 'none'
    BoneArbalestAppSkills.style.display = 'block'
    BoneArbalestVetSkills.style.display = 'none'
    BoneArbalestChampSkills.style.display = 'none'

})

BoneArbalestVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneArbalestStrat.style.display = 'none'    
    BoneArbalestAppStat.style.display = 'none'
    BoneArbalestVetStat.style.display = 'block'
    BoneArbalestChampStat.style.display = 'none'
    BoneArbalestAppSkills.style.display = 'none'
    BoneArbalestVetSkills.style.display = 'block'
    BoneArbalestChampSkills.style.display = 'none'
})

BoneArbalestChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneArbalestStrat.style.display = 'none'    
    BoneArbalestAppStat.style.display = 'none'
    BoneArbalestVetStat.style.display = 'none'
    BoneArbalestChampStat.style.display = 'block'
    BoneArbalestAppSkills.style.display = 'none'
    BoneArbalestVetSkills.style.display = 'none'
    BoneArbalestChampSkills.style.display = 'block'
})

BoneCourtierApp.addEventListener('click', function() {
    PlayBtnPress()
    BoneCourtierStrat.style.display = 'none'    
    BoneCourtierAppStat.style.display = 'block'
    BoneCourtierVetStat.style.display = 'none'
    BoneCourtierChampStat.style.display = 'none'
    BoneCourtierAppSkills.style.display = 'block'
    BoneCourtierVetSkills.style.display = 'none'
    BoneCourtierChampSkills.style.display = 'none'

})

BoneCourtierVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneCourtierStrat.style.display = 'none'    
    BoneCourtierAppStat.style.display = 'none'
    BoneCourtierVetStat.style.display = 'block'
    BoneCourtierChampStat.style.display = 'none'
    BoneCourtierAppSkills.style.display = 'none'
    BoneCourtierVetSkills.style.display = 'block'
    BoneCourtierChampSkills.style.display = 'none'
})

BoneCourtierChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneCourtierStrat.style.display = 'none'    
    BoneCourtierAppStat.style.display = 'none'
    BoneCourtierVetStat.style.display = 'none'
    BoneCourtierChampStat.style.display = 'block'
    BoneCourtierAppSkills.style.display = 'none'
    BoneCourtierVetSkills.style.display = 'none'
    BoneCourtierChampSkills.style.display = 'block'
})

BoneSpearmanVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneSpearmanStrat.style.display = 'none'    
    BoneSpearmanVetStat.style.display = 'block'
    BoneSpearmanChampStat.style.display = 'none'
    BoneSpearmanVetSkills.style.display = 'block'
    BoneSpearmanChampSkills.style.display = 'none'

})

BoneSpearmanChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneSpearmanStrat.style.display = 'none'    
    BoneSpearmanVetStat.style.display = 'none'
    BoneSpearmanChampStat.style.display = 'block'
    BoneSpearmanVetSkills.style.display = 'none'
    BoneSpearmanChampSkills.style.display = 'block'
})

BoneCaptainVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneCaptainStrat.style.display = 'none'    
    BoneCaptainVetStat.style.display = 'block'
    BoneCaptainChampStat.style.display = 'none'
    BoneCaptainVetSkills.style.display = 'block'
    BoneCaptainChampSkills.style.display = 'none'

})

BoneCaptainChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneCaptainStrat.style.display = 'none'    
    BoneCaptainVetStat.style.display = 'none'
    BoneCaptainChampStat.style.display = 'block'
    BoneCaptainVetSkills.style.display = 'none'
    BoneCaptainChampSkills.style.display = 'block'
})

BoneBearerChamp.addEventListener('click', function() {PlayBtnPress(); BoneBearerStrat.style.display = 'none';})

//Weald

FungalScratcherApp.addEventListener('click', function() {
    PlayBtnPress()
    FungalScratcherStrat.style.display = 'none'    
    FungalScratcherAppStat.style.display = 'block'
    FungalScratcherVetStat.style.display = 'none'
    FungalScratcherChampStat.style.display = 'none'
    FungalScratcherAppSkills.style.display = 'block'
    FungalScratcherVetSkills.style.display = 'none'
    FungalScratcherChampSkills.style.display = 'none'

})

FungalScratcherVet.addEventListener('click', function() {
    PlayBtnPress()
    FungalScratcherStrat.style.display = 'none'    
    FungalScratcherAppStat.style.display = 'none'
    FungalScratcherVetStat.style.display = 'block'
    FungalScratcherChampStat.style.display = 'none'
    FungalScratcherAppSkills.style.display = 'none'
    FungalScratcherVetSkills.style.display = 'block'
    FungalScratcherChampSkills.style.display = 'none'
})

FungalScratcherChamp.addEventListener('click', function() {
    PlayBtnPress()
    FungalScratcherStrat.style.display = 'none'    
    FungalScratcherAppStat.style.display = 'none'
    FungalScratcherVetStat.style.display = 'none'
    FungalScratcherChampStat.style.display = 'block'
    FungalScratcherAppSkills.style.display = 'none'
    FungalScratcherVetSkills.style.display = 'none'
    FungalScratcherChampSkills.style.display = 'block'
})

FungalArtilleryApp.addEventListener('click', function() {
    PlayBtnPress()
    FungalArtilleryStrat.style.display = 'none'    
    FungalArtilleryAppStat.style.display = 'block'
    FungalArtilleryVetStat.style.display = 'none'
    FungalArtilleryChampStat.style.display = 'none'
    FungalArtilleryAppSkills.style.display = 'block'
    FungalArtilleryVetSkills.style.display = 'none'
    FungalArtilleryChampSkills.style.display = 'none'

})

FungalArtilleryVet.addEventListener('click', function() {
    PlayBtnPress()
    FungalArtilleryStrat.style.display = 'none'    
    FungalArtilleryAppStat.style.display = 'none'
    FungalArtilleryVetStat.style.display = 'block'
    FungalArtilleryChampStat.style.display = 'none'
    FungalArtilleryAppSkills.style.display = 'none'
    FungalArtilleryVetSkills.style.display = 'block'
    FungalArtilleryChampSkills.style.display = 'none'
})

FungalArtilleryChamp.addEventListener('click', function() {
    PlayBtnPress()
    FungalArtilleryStrat.style.display = 'none'    
    FungalArtilleryAppStat.style.display = 'none'
    FungalArtilleryVetStat.style.display = 'none'
    FungalArtilleryChampStat.style.display = 'block'
    FungalArtilleryAppSkills.style.display = 'none'
    FungalArtilleryVetSkills.style.display = 'none'
    FungalArtilleryChampSkills.style.display = 'block'
})

RabidGnasherApp.addEventListener('click', function() {
    PlayBtnPress()
    RabidGnasherStrat.style.display = 'none'    
    RabidGnasherAppStat.style.display = 'block'
    RabidGnasherVetStat.style.display = 'none'
    RabidGnasherChampStat.style.display = 'none'
    RabidGnasherAppSkills.style.display = 'block'
    RabidGnasherVetSkills.style.display = 'none'
    RabidGnasherChampSkills.style.display = 'none'

})

RabidGnasherVet.addEventListener('click', function() {
    PlayBtnPress()
    RabidGnasherStrat.style.display = 'none'    
    RabidGnasherAppStat.style.display = 'none'
    RabidGnasherVetStat.style.display = 'block'
    RabidGnasherChampStat.style.display = 'none'
    RabidGnasherAppSkills.style.display = 'none'
    RabidGnasherVetSkills.style.display = 'block'
    RabidGnasherChampSkills.style.display = 'none'
})

RabidGnasherChamp.addEventListener('click', function() {
    PlayBtnPress()
    RabidGnasherStrat.style.display = 'none'    
    RabidGnasherAppStat.style.display = 'none'
    RabidGnasherVetStat.style.display = 'none'
    RabidGnasherChampStat.style.display = 'block'
    RabidGnasherAppSkills.style.display = 'none'
    RabidGnasherVetSkills.style.display = 'none'
    RabidGnasherChampSkills.style.display = 'block'
})

EctoplasmApp.addEventListener('click', function() {
    PlayBtnPress()
    EctoplasmStrat.style.display = 'none'    
    EctoplasmAppStat.style.display = 'block'
    EctoplasmVetStat.style.display = 'none'
    EctoplasmChampStat.style.display = 'none'
    EctoplasmAppSkills.style.display = 'block'
    EctoplasmVetSkills.style.display = 'none'
    EctoplasmChampSkills.style.display = 'none'

})

EctoplasmVet.addEventListener('click', function() {
    PlayBtnPress()
    EctoplasmStrat.style.display = 'none'    
    EctoplasmAppStat.style.display = 'none'
    EctoplasmVetStat.style.display = 'block'
    EctoplasmChampStat.style.display = 'none'
    EctoplasmAppSkills.style.display = 'none'
    EctoplasmVetSkills.style.display = 'block'
    EctoplasmChampSkills.style.display = 'none'
})

EctoplasmChamp.addEventListener('click', function() {
    PlayBtnPress()
    EctoplasmStrat.style.display = 'none'    
    EctoplasmAppStat.style.display = 'none'
    EctoplasmVetStat.style.display = 'none'
    EctoplasmChampStat.style.display = 'block'
    EctoplasmAppSkills.style.display = 'none'
    EctoplasmVetSkills.style.display = 'none'
    EctoplasmChampSkills.style.display = 'block'
})

LargeEctoplasmApp.addEventListener('click', function() {
    PlayBtnPress()
    LargeEctoplasmStrat.style.display = 'none'    
    LargeEctoplasmAppStat.style.display = 'block'
    LargeEctoplasmVetStat.style.display = 'none'
    LargeEctoplasmChampStat.style.display = 'none'
    LargeEctoplasmAppSkills.style.display = 'block'
    LargeEctoplasmVetSkills.style.display = 'none'
    LargeEctoplasmChampSkills.style.display = 'none'

})

LargeEctoplasmVet.addEventListener('click', function() {
    PlayBtnPress()
    LargeEctoplasmStrat.style.display = 'none'    
    LargeEctoplasmAppStat.style.display = 'none'
    LargeEctoplasmVetStat.style.display = 'block'
    LargeEctoplasmChampStat.style.display = 'none'
    LargeEctoplasmAppSkills.style.display = 'none'
    LargeEctoplasmVetSkills.style.display = 'block'
    LargeEctoplasmChampSkills.style.display = 'none'
})

LargeEctoplasmChamp.addEventListener('click', function() {
    PlayBtnPress()
    LargeEctoplasmStrat.style.display = 'none'    
    LargeEctoplasmAppStat.style.display = 'none'
    LargeEctoplasmVetStat.style.display = 'none'
    LargeEctoplasmChampStat.style.display = 'block'
    LargeEctoplasmAppSkills.style.display = 'none'
    LargeEctoplasmVetSkills.style.display = 'none'
    LargeEctoplasmChampSkills.style.display = 'block'
})

CroneVet.addEventListener('click', function() {
    PlayBtnPress()
    CroneStrat.style.display = 'none'    
    CroneVetStat.style.display = 'block'
    CroneChampStat.style.display = 'none'
    CroneVetSkills.style.display = 'block'
    CroneChampSkills.style.display = 'none'

})

CroneChamp.addEventListener('click', function() {
    PlayBtnPress()
    CroneStrat.style.display = 'none'    
    CroneVetStat.style.display = 'none'
    CroneChampStat.style.display = 'block'
    CroneVetSkills.style.display = 'none'
    CroneChampSkills.style.display = 'block'
})

UncleanGiantVet.addEventListener('click', function() {
    PlayBtnPress()
    UncleanGiantStrat.style.display = 'none'    
    UncleanGiantVetStat.style.display = 'block'
    UncleanGiantChampStat.style.display = 'none'
    UncleanGiantVetSkills.style.display = 'block'
    UncleanGiantChampSkills.style.display = 'none'

})

UncleanGiantChamp.addEventListener('click', function() {
    PlayBtnPress()
    UncleanGiantStrat.style.display = 'none'    
    UncleanGiantVetStat.style.display = 'none'
    UncleanGiantChampStat.style.display = 'block'
    UncleanGiantVetSkills.style.display = 'none'
    UncleanGiantChampSkills.style.display = 'block'
})

HatefulViragoChamp.addEventListener('click', function() {PlayBtnPress(); HatefulViragoStrat.style.display = 'none';})
NecroticFungusChamp.addEventListener('click', function() {PlayBtnPress(); NecroticFungusStrat.style.display = 'none';})

//Warrens

SwineChopperApp.addEventListener('click', function() {
    PlayBtnPress()
    SwineChopperStrat.style.display = 'none'    
    SwineChopperAppStat.style.display = 'block'
    SwineChopperVetStat.style.display = 'none'
    SwineChopperChampStat.style.display = 'none'
    SwineChopperAppSkills.style.display = 'block'
    SwineChopperVetSkills.style.display = 'none'
    SwineChopperChampSkills.style.display = 'none'

})

SwineChopperVet.addEventListener('click', function() {
    PlayBtnPress()
    SwineChopperStrat.style.display = 'none'    
    SwineChopperAppStat.style.display = 'none'
    SwineChopperVetStat.style.display = 'block'
    SwineChopperChampStat.style.display = 'none'
    SwineChopperAppSkills.style.display = 'none'
    SwineChopperVetSkills.style.display = 'block'
    SwineChopperChampSkills.style.display = 'none'
})

SwineChopperChamp.addEventListener('click', function() {
    PlayBtnPress()
    SwineChopperStrat.style.display = 'none'    
    SwineChopperAppStat.style.display = 'none'
    SwineChopperVetStat.style.display = 'none'
    SwineChopperChampStat.style.display = 'block'
    SwineChopperAppSkills.style.display = 'none'
    SwineChopperVetSkills.style.display = 'none'
    SwineChopperChampSkills.style.display = 'block'
})

SwineWretchApp.addEventListener('click', function() {
    PlayBtnPress();
    SwineWretchStrat.style.display = 'none';
    SwineWretchAppStat.style.display = 'block';
    SwineWretchVetStat.style.display = 'none';
    SwineWretchChampStat.style.display = 'none';
    SwineWretchAppSkills.style.display = 'block';
    SwineWretchVetSkills.style.display = 'none';
    SwineWretchChampSkills.style.display = 'none';
});

SwineWretchVet.addEventListener('click', function() {
    PlayBtnPress();
    SwineWretchStrat.style.display = 'none';
    SwineWretchAppStat.style.display = 'none';
    SwineWretchVetStat.style.display = 'block';
    SwineWretchChampStat.style.display = 'none';
    SwineWretchAppSkills.style.display = 'none';
    SwineWretchVetSkills.style.display = 'block';
    SwineWretchChampSkills.style.display = 'none';
});

SwineWretchChamp.addEventListener('click', function() {
    PlayBtnPress();
    SwineWretchStrat.style.display = 'none';
    SwineWretchAppStat.style.display = 'none';
    SwineWretchVetStat.style.display = 'none';
    SwineWretchChampStat.style.display = 'block';
    SwineWretchAppSkills.style.display = 'none';
    SwineWretchVetSkills.style.display = 'none';
    SwineWretchChampSkills.style.display = 'block';
});

SwineDrummerApp.addEventListener('click', function() {
    PlayBtnPress();
    SwineDrummerStrat.style.display = 'none';
    SwineDrummerAppStat.style.display = 'block';
    SwineDrummerVetStat.style.display = 'none';
    SwineDrummerChampStat.style.display = 'none';
    SwineDrummerAppSkills.style.display = 'block';
    SwineDrummerVetSkills.style.display = 'none';
    SwineDrummerChampSkills.style.display = 'none';
});

SwineDrummerVet.addEventListener('click', function() {
    PlayBtnPress();
    SwineDrummerStrat.style.display = 'none';
    SwineDrummerAppStat.style.display = 'none';
    SwineDrummerVetStat.style.display = 'block';
    SwineDrummerChampStat.style.display = 'none';
    SwineDrummerAppSkills.style.display = 'none';
    SwineDrummerVetSkills.style.display = 'block';
    SwineDrummerChampSkills.style.display = 'none';
});

SwineDrummerChamp.addEventListener('click', function() {
    PlayBtnPress();
    SwineDrummerStrat.style.display = 'none';
    SwineDrummerAppStat.style.display = 'none';
    SwineDrummerVetStat.style.display = 'none';
    SwineDrummerChampStat.style.display = 'block';
    SwineDrummerAppSkills.style.display = 'none';
    SwineDrummerVetSkills.style.display = 'none';
    SwineDrummerChampSkills.style.display = 'block';
})

SwineSlasherApp.addEventListener('click', function() {
    PlayBtnPress()
    SwineSlasherStrat.style.display = 'none'    
    SwineSlasherAppStat.style.display = 'block'
    SwineSlasherVetStat.style.display = 'none'
    SwineSlasherChampStat.style.display = 'none'
    SwineSlasherAppSkills.style.display = 'block'
    SwineSlasherVetSkills.style.display = 'none'
    SwineSlasherChampSkills.style.display = 'none'

})

SwineSlasherVet.addEventListener('click', function() {
    PlayBtnPress()
    SwineSlasherStrat.style.display = 'none'    
    SwineSlasherAppStat.style.display = 'none'
    SwineSlasherVetStat.style.display = 'block'
    SwineSlasherChampStat.style.display = 'none'
    SwineSlasherAppSkills.style.display = 'none'
    SwineSlasherVetSkills.style.display = 'block'
    SwineSlasherChampSkills.style.display = 'none'
})

SwineSlasherChamp.addEventListener('click', function() {
    PlayBtnPress()
    SwineSlasherStrat.style.display = 'none'    
    SwineSlasherAppStat.style.display = 'none'
    SwineSlasherVetStat.style.display = 'none'
    SwineSlasherChampStat.style.display = 'block'
    SwineSlasherAppSkills.style.display = 'none'
    SwineSlasherVetSkills.style.display = 'none'
    SwineSlasherChampSkills.style.display = 'block'
})


CarrionEaterApp.addEventListener('click', function() {
    PlayBtnPress()
    CarrionEaterStrat.style.display = 'none'    
    CarrionEaterAppStat.style.display = 'block'
    CarrionEaterVetStat.style.display = 'none'
    CarrionEaterChampStat.style.display = 'none'
    CarrionEaterAppSkills.style.display = 'block'
    CarrionEaterVetSkills.style.display = 'none'
    CarrionEaterChampSkills.style.display = 'none'

})

CarrionEaterVet.addEventListener('click', function() {
    PlayBtnPress()
    CarrionEaterStrat.style.display = 'none'    
    CarrionEaterAppStat.style.display = 'none'
    CarrionEaterVetStat.style.display = 'block'
    CarrionEaterChampStat.style.display = 'none'
    CarrionEaterAppSkills.style.display = 'none'
    CarrionEaterVetSkills.style.display = 'block'
    CarrionEaterChampSkills.style.display = 'none'
})

CarrionEaterChamp.addEventListener('click', function() {
    PlayBtnPress()
    CarrionEaterStrat.style.display = 'none'    
    CarrionEaterAppStat.style.display = 'none'
    CarrionEaterVetStat.style.display = 'none'
    CarrionEaterChampStat.style.display = 'block'
    CarrionEaterAppSkills.style.display = 'none'
    CarrionEaterVetSkills.style.display = 'none'
    CarrionEaterChampSkills.style.display = 'block'
})


SwinetaurVet.addEventListener('click', function() {
    PlayBtnPress()
    SwinetaurStrat.style.display = 'none'    
    SwinetaurVetStat.style.display = 'block'
    SwinetaurChampStat.style.display = 'none'
    SwinetaurVetSkills.style.display = 'block'
    SwinetaurChampSkills.style.display = 'none'

})

SwinetaurChamp.addEventListener('click', function() {
    PlayBtnPress()
    SwinetaurStrat.style.display = 'none'    
    SwinetaurVetStat.style.display = 'none'
    SwinetaurChampStat.style.display = 'block'
    SwinetaurVetSkills.style.display = 'none'
    SwinetaurChampSkills.style.display = 'block'
})

LargeCarrionEaterVet.addEventListener('click', function() {
    PlayBtnPress()
    LargeCarrionEaterStrat.style.display = 'none'    
    LargeCarrionEaterVetStat.style.display = 'block'
    LargeCarrionEaterChampStat.style.display = 'none'
    LargeCarrionEaterVetSkills.style.display = 'block'
    LargeCarrionEaterChampSkills.style.display = 'none'

})

LargeCarrionEaterChamp.addEventListener('click', function() {
    PlayBtnPress()
    LargeCarrionEaterStrat.style.display = 'none'    
    LargeCarrionEaterVetStat.style.display = 'none'
    LargeCarrionEaterChampStat.style.display = 'block'
    LargeCarrionEaterVetSkills.style.display = 'none'
    LargeCarrionEaterChampSkills.style.display = 'block'
})

SwineSkiverChamp.addEventListener('click', function() {PlayBtnPress(); SwineSkiverStrat.style.display = 'none';})

//Cove

PelagicGrouperApp.addEventListener('click', function() {
    PlayBtnPress()
    PelagicGrouperStrat.style.display = 'none'    
    PelagicGrouperAppStat.style.display = 'block'
    PelagicGrouperVetStat.style.display = 'none'
    PelagicGrouperChampStat.style.display = 'none'
    PelagicGrouperAppSkills.style.display = 'block'
    PelagicGrouperVetSkills.style.display = 'none'
    PelagicGrouperChampSkills.style.display = 'none'

})

PelagicGrouperVet.addEventListener('click', function() {
    PlayBtnPress()
    PelagicGrouperStrat.style.display = 'none'    
    PelagicGrouperAppStat.style.display = 'none'
    PelagicGrouperVetStat.style.display = 'block'
    PelagicGrouperChampStat.style.display = 'none'
    PelagicGrouperAppSkills.style.display = 'none'
    PelagicGrouperVetSkills.style.display = 'block'
    PelagicGrouperChampSkills.style.display = 'none'
})

PelagicGrouperChamp.addEventListener('click', function() {
    PlayBtnPress()
    PelagicGrouperStrat.style.display = 'none'    
    PelagicGrouperAppStat.style.display = 'none'
    PelagicGrouperVetStat.style.display = 'none'
    PelagicGrouperChampStat.style.display = 'block'
    PelagicGrouperAppSkills.style.display = 'none'
    PelagicGrouperVetSkills.style.display = 'none'
    PelagicGrouperChampSkills.style.display = 'block'
})

PelagicGuardianApp.addEventListener('click', function() {
    PlayBtnPress()
    PelagicGuardianStrat.style.display = 'none'    
    PelagicGuardianAppStat.style.display = 'block'
    PelagicGuardianVetStat.style.display = 'none'
    PelagicGuardianChampStat.style.display = 'none'
    PelagicGuardianAppSkills.style.display = 'block'
    PelagicGuardianVetSkills.style.display = 'none'
    PelagicGuardianChampSkills.style.display = 'none'

})

PelagicGuardianVet.addEventListener('click', function() {
    PlayBtnPress()
    PelagicGuardianStrat.style.display = 'none'    
    PelagicGuardianAppStat.style.display = 'none'
    PelagicGuardianVetStat.style.display = 'block'
    PelagicGuardianChampStat.style.display = 'none'
    PelagicGuardianAppSkills.style.display = 'none'
    PelagicGuardianVetSkills.style.display = 'block'
    PelagicGuardianChampSkills.style.display = 'none'
})

PelagicGuardianChamp.addEventListener('click', function() {
    PlayBtnPress()
    PelagicGuardianStrat.style.display = 'none'    
    PelagicGuardianAppStat.style.display = 'none'
    PelagicGuardianVetStat.style.display = 'none'
    PelagicGuardianChampStat.style.display = 'block'
    PelagicGuardianAppSkills.style.display = 'none'
    PelagicGuardianVetSkills.style.display = 'none'
    PelagicGuardianChampSkills.style.display = 'block'
})

PelagicShamanApp.addEventListener('click', function() {
    PlayBtnPress()
    PelagicShamanStrat.style.display = 'none'    
    PelagicShamanAppStat.style.display = 'block'
    PelagicShamanVetStat.style.display = 'none'
    PelagicShamanChampStat.style.display = 'none'
    PelagicShamanAppSkills.style.display = 'block'
    PelagicShamanVetSkills.style.display = 'none'
    PelagicShamanChampSkills.style.display = 'none'

})

PelagicShamanVet.addEventListener('click', function() {
    PlayBtnPress()
    PelagicShamanStrat.style.display = 'none'    
    PelagicShamanAppStat.style.display = 'none'
    PelagicShamanVetStat.style.display = 'block'
    PelagicShamanChampStat.style.display = 'none'
    PelagicShamanAppSkills.style.display = 'none'
    PelagicShamanVetSkills.style.display = 'block'
    PelagicShamanChampSkills.style.display = 'none'
})

PelagicShamanChamp.addEventListener('click', function() {
    PlayBtnPress()
    PelagicShamanStrat.style.display = 'none'    
    PelagicShamanAppStat.style.display = 'none'
    PelagicShamanVetStat.style.display = 'none'
    PelagicShamanChampStat.style.display = 'block'
    PelagicShamanAppSkills.style.display = 'none'
    PelagicShamanVetSkills.style.display = 'none'
    PelagicShamanChampSkills.style.display = 'block'
})

DeepStingerApp.addEventListener('click', function() {
    PlayBtnPress()
    DeepStingerStrat.style.display = 'none'    
    DeepStingerAppStat.style.display = 'block'
    DeepStingerVetStat.style.display = 'none'
    DeepStingerChampStat.style.display = 'none'
    DeepStingerAppSkills.style.display = 'block'
    DeepStingerVetSkills.style.display = 'none'
    DeepStingerChampSkills.style.display = 'none'

})

DeepStingerVet.addEventListener('click', function() {
    PlayBtnPress()
    DeepStingerStrat.style.display = 'none'    
    DeepStingerAppStat.style.display = 'none'
    DeepStingerVetStat.style.display = 'block'
    DeepStingerChampStat.style.display = 'none'
    DeepStingerAppSkills.style.display = 'none'
    DeepStingerVetSkills.style.display = 'block'
    DeepStingerChampSkills.style.display = 'none'
})

DeepStingerChamp.addEventListener('click', function() {
    PlayBtnPress()
    DeepStingerStrat.style.display = 'none'    
    DeepStingerAppStat.style.display = 'none'
    DeepStingerVetStat.style.display = 'none'
    DeepStingerChampStat.style.display = 'block'
    DeepStingerAppSkills.style.display = 'none'
    DeepStingerVetSkills.style.display = 'none'
    DeepStingerChampSkills.style.display = 'block'
})

DrownedThrallApp.addEventListener('click', function() {
    PlayBtnPress()
    DrownedThrallStrat.style.display = 'none'    
    DrownedThrallAppStat.style.display = 'block'
    DrownedThrallVetStat.style.display = 'none'
    DrownedThrallChampStat.style.display = 'none'
    DrownedThrallAppSkills.style.display = 'block'
    DrownedThrallVetSkills.style.display = 'none'
    DrownedThrallChampSkills.style.display = 'none'

})

DrownedThrallVet.addEventListener('click', function() {
    PlayBtnPress()
    DrownedThrallStrat.style.display = 'none'    
    DrownedThrallAppStat.style.display = 'none'
    DrownedThrallVetStat.style.display = 'block'
    DrownedThrallChampStat.style.display = 'none'
    DrownedThrallAppSkills.style.display = 'none'
    DrownedThrallVetSkills.style.display = 'block'
    DrownedThrallChampSkills.style.display = 'none'
})

DrownedThrallChamp.addEventListener('click', function() {
    PlayBtnPress()
    DrownedThrallStrat.style.display = 'none'    
    DrownedThrallAppStat.style.display = 'none'
    DrownedThrallVetStat.style.display = 'none'
    DrownedThrallChampStat.style.display = 'block'
    DrownedThrallAppSkills.style.display = 'none'
    DrownedThrallVetSkills.style.display = 'none'
    DrownedThrallChampSkills.style.display = 'block'
})

SeaMaggotApp.addEventListener('click', function() {
    PlayBtnPress()
    SeaMaggotStrat.style.display = 'none'    
    SeaMaggotAppStat.style.display = 'block'
    SeaMaggotVetStat.style.display = 'none'
    SeaMaggotChampStat.style.display = 'none'
    SeaMaggotAppSkills.style.display = 'block'
    SeaMaggotVetSkills.style.display = 'none'
    SeaMaggotChampSkills.style.display = 'none'

})

SeaMaggotVet.addEventListener('click', function() {
    PlayBtnPress()
    SeaMaggotStrat.style.display = 'none'    
    SeaMaggotAppStat.style.display = 'none'
    SeaMaggotVetStat.style.display = 'block'
    SeaMaggotChampStat.style.display = 'none'
    SeaMaggotAppSkills.style.display = 'none'
    SeaMaggotVetSkills.style.display = 'block'
    SeaMaggotChampSkills.style.display = 'none'
})

SeaMaggotChamp.addEventListener('click', function() {
    PlayBtnPress()
    SeaMaggotStrat.style.display = 'none'    
    SeaMaggotAppStat.style.display = 'none'
    SeaMaggotVetStat.style.display = 'none'
    SeaMaggotChampStat.style.display = 'block'
    SeaMaggotAppSkills.style.display = 'none'
    SeaMaggotVetSkills.style.display = 'none'
    SeaMaggotChampSkills.style.display = 'block'
})

UcaCrusherVet.addEventListener('click', function() {
    PlayBtnPress()
    UcaCrusherStrat.style.display = 'none'    
    UcaCrusherVetStat.style.display = 'block'
    UcaCrusherChampStat.style.display = 'none'
    UcaCrusherVetSkills.style.display = 'block'
    UcaCrusherChampSkills.style.display = 'none'

})

UcaCrusherChamp.addEventListener('click', function() {
    PlayBtnPress()
    UcaCrusherStrat.style.display = 'none'    
    UcaCrusherVetStat.style.display = 'none'
    UcaCrusherChampStat.style.display = 'block'
    UcaCrusherVetSkills.style.display = 'none'
    UcaCrusherChampSkills.style.display = 'block'
})

SquiffyGhastChamp.addEventListener('click', function() {PlayBtnPress(); SquiffyGhastStrat.style.display = 'none';})

//Shared

BrigandCutthroatApp.addEventListener('click', function() {
    PlayBtnPress()
    BrigandCutthroatStrat.style.display = 'none'    
    BrigandCutthroatAppStat.style.display = 'block'
    BrigandCutthroatVetStat.style.display = 'none'
    BrigandCutthroatChampStat.style.display = 'none'
    BrigandCutthroatAppSkills.style.display = 'block'
    BrigandCutthroatVetSkills.style.display = 'none'
    BrigandCutthroatChampSkills.style.display = 'none'

})

BrigandCutthroatVet.addEventListener('click', function() {
    PlayBtnPress()
    BrigandCutthroatStrat.style.display = 'none'    
    BrigandCutthroatAppStat.style.display = 'none'
    BrigandCutthroatVetStat.style.display = 'block'
    BrigandCutthroatChampStat.style.display = 'none'
    BrigandCutthroatAppSkills.style.display = 'none'
    BrigandCutthroatVetSkills.style.display = 'block'
    BrigandCutthroatChampSkills.style.display = 'none'
})

BrigandCutthroatChamp.addEventListener('click', function() {
    PlayBtnPress()
    BrigandCutthroatStrat.style.display = 'none'    
    BrigandCutthroatAppStat.style.display = 'none'
    BrigandCutthroatVetStat.style.display = 'none'
    BrigandCutthroatChampStat.style.display = 'block'
    BrigandCutthroatAppSkills.style.display = 'none'
    BrigandCutthroatVetSkills.style.display = 'none'
    BrigandCutthroatChampSkills.style.display = 'block'
})

BrigandBloodletterApp.addEventListener('click', function() {
    PlayBtnPress()
    BrigandBloodletterStrat.style.display = 'none'    
    BrigandBloodletterAppStat.style.display = 'block'
    BrigandBloodletterVetStat.style.display = 'none'
    BrigandBloodletterChampStat.style.display = 'none'
    BrigandBloodletterAppSkills.style.display = 'block'
    BrigandBloodletterVetSkills.style.display = 'none'
    BrigandBloodletterChampSkills.style.display = 'none'

})

BrigandBloodletterVet.addEventListener('click', function() {
    PlayBtnPress()
    BrigandBloodletterStrat.style.display = 'none'    
    BrigandBloodletterAppStat.style.display = 'none'
    BrigandBloodletterVetStat.style.display = 'block'
    BrigandBloodletterChampStat.style.display = 'none'
    BrigandBloodletterAppSkills.style.display = 'none'
    BrigandBloodletterVetSkills.style.display = 'block'
    BrigandBloodletterChampSkills.style.display = 'none'
})

BrigandBloodletterChamp.addEventListener('click', function() {
    PlayBtnPress()
    BrigandBloodletterStrat.style.display = 'none'    
    BrigandBloodletterAppStat.style.display = 'none'
    BrigandBloodletterVetStat.style.display = 'none'
    BrigandBloodletterChampStat.style.display = 'block'
    BrigandBloodletterAppSkills.style.display = 'none'
    BrigandBloodletterVetSkills.style.display = 'none'
    BrigandBloodletterChampSkills.style.display = 'block'
})

BrigandFusilierApp.addEventListener('click', function() {
    PlayBtnPress()
    BrigandFusilierStrat.style.display = 'none'    
    BrigandFusilierAppStat.style.display = 'block'
    BrigandFusilierVetStat.style.display = 'none'
    BrigandFusilierChampStat.style.display = 'none'
    BrigandFusilierAppSkills.style.display = 'block'
    BrigandFusilierVetSkills.style.display = 'none'
    BrigandFusilierChampSkills.style.display = 'none'

})

BrigandFusilierVet.addEventListener('click', function() {
    PlayBtnPress()
    BrigandFusilierStrat.style.display = 'none'    
    BrigandFusilierAppStat.style.display = 'none'
    BrigandFusilierVetStat.style.display = 'block'
    BrigandFusilierChampStat.style.display = 'none'
    BrigandFusilierAppSkills.style.display = 'none'
    BrigandFusilierVetSkills.style.display = 'block'
    BrigandFusilierChampSkills.style.display = 'none'
})

BrigandFusilierChamp.addEventListener('click', function() {
    PlayBtnPress()
    BrigandFusilierStrat.style.display = 'none'    
    BrigandFusilierAppStat.style.display = 'none'
    BrigandFusilierVetStat.style.display = 'none'
    BrigandFusilierChampStat.style.display = 'block'
    BrigandFusilierAppSkills.style.display = 'none'
    BrigandFusilierVetSkills.style.display = 'none'
    BrigandFusilierChampSkills.style.display = 'block'
})

CultistBrawlerApp.addEventListener('click', function() {
    PlayBtnPress()
    CultistBrawlerStrat.style.display = 'none'    
    CultistBrawlerAppStat.style.display = 'block'
    CultistBrawlerVetStat.style.display = 'none'
    CultistBrawlerChampStat.style.display = 'none'
    CultistBrawlerAppSkills.style.display = 'block'
    CultistBrawlerVetSkills.style.display = 'none'
    CultistBrawlerChampSkills.style.display = 'none'

})

CultistBrawlerVet.addEventListener('click', function() {
    PlayBtnPress()
    CultistBrawlerStrat.style.display = 'none'    
    CultistBrawlerAppStat.style.display = 'none'
    CultistBrawlerVetStat.style.display = 'block'
    CultistBrawlerChampStat.style.display = 'none'
    CultistBrawlerAppSkills.style.display = 'none'
    CultistBrawlerVetSkills.style.display = 'block'
    CultistBrawlerChampSkills.style.display = 'none'
})

CultistBrawlerChamp.addEventListener('click', function() {
    PlayBtnPress()
    CultistBrawlerStrat.style.display = 'none'    
    CultistBrawlerAppStat.style.display = 'none'
    CultistBrawlerVetStat.style.display = 'none'
    CultistBrawlerChampStat.style.display = 'block'
    CultistBrawlerAppSkills.style.display = 'none'
    CultistBrawlerVetSkills.style.display = 'none'
    CultistBrawlerChampSkills.style.display = 'block'
})

CultistAcolyteApp.addEventListener('click', function() {
    PlayBtnPress()
    CultistAcolyteStrat.style.display = 'none'    
    CultistAcolyteAppStat.style.display = 'block'
    CultistAcolyteVetStat.style.display = 'none'
    CultistAcolyteChampStat.style.display = 'none'
    CultistAcolyteAppSkills.style.display = 'block'
    CultistAcolyteVetSkills.style.display = 'none'
    CultistAcolyteChampSkills.style.display = 'none'

})

CultistAcolyteVet.addEventListener('click', function() {
    PlayBtnPress()
    CultistAcolyteStrat.style.display = 'none'    
    CultistAcolyteAppStat.style.display = 'none'
    CultistAcolyteVetStat.style.display = 'block'
    CultistAcolyteChampStat.style.display = 'none'
    CultistAcolyteAppSkills.style.display = 'none'
    CultistAcolyteVetSkills.style.display = 'block'
    CultistAcolyteChampSkills.style.display = 'none'
})

CultistAcolyteChamp.addEventListener('click', function() {
    PlayBtnPress()
    CultistAcolyteStrat.style.display = 'none'    
    CultistAcolyteAppStat.style.display = 'none'
    CultistAcolyteVetStat.style.display = 'none'
    CultistAcolyteChampStat.style.display = 'block'
    CultistAcolyteAppSkills.style.display = 'none'
    CultistAcolyteVetSkills.style.display = 'none'
    CultistAcolyteChampSkills.style.display = 'block'
})

MadmanApp.addEventListener('click', function() {
    PlayBtnPress()
    MadmanStrat.style.display = 'none'    
    MadmanAppStat.style.display = 'block'
    MadmanVetStat.style.display = 'none'
    MadmanChampStat.style.display = 'none'
    MadmanAppSkills.style.display = 'block'
    MadmanVetSkills.style.display = 'none'
    MadmanChampSkills.style.display = 'none'

})

MadmanVet.addEventListener('click', function() {
    PlayBtnPress()
    MadmanStrat.style.display = 'none'    
    MadmanAppStat.style.display = 'none'
    MadmanVetStat.style.display = 'block'
    MadmanChampStat.style.display = 'none'
    MadmanAppSkills.style.display = 'none'
    MadmanVetSkills.style.display = 'block'
    MadmanChampSkills.style.display = 'none'
})

MadmanChamp.addEventListener('click', function() {
    PlayBtnPress()
    MadmanStrat.style.display = 'none'    
    MadmanAppStat.style.display = 'none'
    MadmanVetStat.style.display = 'none'
    MadmanChampStat.style.display = 'block'
    MadmanAppSkills.style.display = 'none'
    MadmanVetSkills.style.display = 'none'
    MadmanChampSkills.style.display = 'block'
})

WebberApp.addEventListener('click', function() {
    PlayBtnPress()
    WebberStrat.style.display = 'none'    
    WebberAppStat.style.display = 'block'
    WebberVetStat.style.display = 'none'
    WebberChampStat.style.display = 'none'
    WebberAppSkills.style.display = 'block'
    WebberVetSkills.style.display = 'none'
    WebberChampSkills.style.display = 'none'

})

WebberVet.addEventListener('click', function() {
    PlayBtnPress()
    WebberStrat.style.display = 'none'    
    WebberAppStat.style.display = 'none'
    WebberVetStat.style.display = 'block'
    WebberChampStat.style.display = 'none'
    WebberAppSkills.style.display = 'none'
    WebberVetSkills.style.display = 'block'
    WebberChampSkills.style.display = 'none'
})

WebberChamp.addEventListener('click', function() {
    PlayBtnPress()
    WebberStrat.style.display = 'none'    
    WebberAppStat.style.display = 'none'
    WebberVetStat.style.display = 'none'
    WebberChampStat.style.display = 'block'
    WebberAppSkills.style.display = 'none'
    WebberVetSkills.style.display = 'none'
    WebberChampSkills.style.display = 'block'
})

SpitterApp.addEventListener('click', function() {
    PlayBtnPress()
    SpitterStrat.style.display = 'none'    
    SpitterAppStat.style.display = 'block'
    SpitterVetStat.style.display = 'none'
    SpitterChampStat.style.display = 'none'
    SpitterAppSkills.style.display = 'block'
    SpitterVetSkills.style.display = 'none'
    SpitterChampSkills.style.display = 'none'

})

SpitterVet.addEventListener('click', function() {
    PlayBtnPress()
    SpitterStrat.style.display = 'none'    
    SpitterAppStat.style.display = 'none'
    SpitterVetStat.style.display = 'block'
    SpitterChampStat.style.display = 'none'
    SpitterAppSkills.style.display = 'none'
    SpitterVetSkills.style.display = 'block'
    SpitterChampSkills.style.display = 'none'
})

SpitterChamp.addEventListener('click', function() {
    PlayBtnPress()
    SpitterStrat.style.display = 'none'    
    SpitterAppStat.style.display = 'none'
    SpitterVetStat.style.display = 'none'
    SpitterChampStat.style.display = 'block'
    SpitterAppSkills.style.display = 'none'
    SpitterVetSkills.style.display = 'none'
    SpitterChampSkills.style.display = 'block'
})

MaggotApp.addEventListener('click', function() {
    PlayBtnPress()
    MaggotStrat.style.display = 'none'    
    MaggotAppStat.style.display = 'block'
    MaggotVetStat.style.display = 'none'
    MaggotChampStat.style.display = 'none'
    MaggotAppSkills.style.display = 'block'
    MaggotVetSkills.style.display = 'none'
    MaggotChampSkills.style.display = 'none'

})

MaggotVet.addEventListener('click', function() {
    PlayBtnPress()
    MaggotStrat.style.display = 'none'    
    MaggotAppStat.style.display = 'none'
    MaggotVetStat.style.display = 'block'
    MaggotChampStat.style.display = 'none'
    MaggotAppSkills.style.display = 'none'
    MaggotVetSkills.style.display = 'block'
    MaggotChampSkills.style.display = 'none'
})

MaggotChamp.addEventListener('click', function() {
    PlayBtnPress()
    MaggotStrat.style.display = 'none'    
    MaggotAppStat.style.display = 'none'
    MaggotVetStat.style.display = 'none'
    MaggotChampStat.style.display = 'block'
    MaggotAppSkills.style.display = 'none'
    MaggotVetSkills.style.display = 'none'
    MaggotChampSkills.style.display = 'block'
})

BoneRabbleApp.addEventListener('click', function() {
    PlayBtnPress()
    BoneRabbleStrat.style.display = 'none'    
    BoneRabbleAppStat.style.display = 'block'
    BoneRabbleVetStat.style.display = 'none'
    BoneRabbleChampStat.style.display = 'none'
    BoneRabbleAppSkills.style.display = 'block'
    BoneRabbleVetSkills.style.display = 'none'
    BoneRabbleChampSkills.style.display = 'none'

})

BoneRabbleVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneRabbleStrat.style.display = 'none'    
    BoneRabbleAppStat.style.display = 'none'
    BoneRabbleVetStat.style.display = 'block'
    BoneRabbleChampStat.style.display = 'none'
    BoneRabbleAppSkills.style.display = 'none'
    BoneRabbleVetSkills.style.display = 'block'
    BoneRabbleChampSkills.style.display = 'none'
})

BoneRabbleChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneRabbleStrat.style.display = 'none'    
    BoneRabbleAppStat.style.display = 'none'
    BoneRabbleVetStat.style.display = 'none'
    BoneRabbleChampStat.style.display = 'block'
    BoneRabbleAppSkills.style.display = 'none'
    BoneRabbleVetSkills.style.display = 'none'
    BoneRabbleChampSkills.style.display = 'block'
})

GargoyleVet.addEventListener('click', function() {
    PlayBtnPress()
    GargoyleStrat.style.display = 'none'    
    GargoyleVetStat.style.display = 'block'
    GargoyleChampStat.style.display = 'none'
    GargoyleVetSkills.style.display = 'block'
    GargoyleChampSkills.style.display = 'none'

})

GargoyleChamp.addEventListener('click', function() {
    PlayBtnPress()
    GargoyleStrat.style.display = 'none'    
    GargoyleVetStat.style.display = 'none'
    GargoyleChampStat.style.display = 'block'
    GargoyleVetSkills.style.display = 'none'
    GargoyleChampSkills.style.display = 'block'
})

GhoulVet.addEventListener('click', function() {
    PlayBtnPress()
    GhoulStrat.style.display = 'none'    
    GhoulVetStat.style.display = 'block'
    GhoulChampStat.style.display = 'none'
    GhoulVetSkills.style.display = 'block'
    GhoulChampSkills.style.display = 'none'

})

GhoulChamp.addEventListener('click', function() {
    PlayBtnPress()
    GhoulStrat.style.display = 'none'    
    GhoulVetStat.style.display = 'none'
    GhoulChampStat.style.display = 'block'
    GhoulVetSkills.style.display = 'none'
    GhoulChampSkills.style.display = 'block'
})

BrigandRaiderDarkest.addEventListener('click', function() {PlayBtnPress(); BrigandRaiderStrat.style.display = 'none';})
BrigandHunterDarkest.addEventListener('click', function() {PlayBtnPress(); BrigandHunterStrat.style.display = 'none';})

//Adding Stat and Strat Toggle Listeners

//Ruins

BoneSoldierStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneSoldierStrat.style.display = 'none'})
BoneSoldierStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneSoldierStrat.style.display = 'block'})

BoneDefenderStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneDefenderStrat.style.display = 'none'})
BoneDefenderStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneDefenderStrat.style.display = 'block'})

BoneArbalestStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneArbalestStrat.style.display = 'none'})
BoneArbalestStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneArbalestStrat.style.display = 'block'})

BoneCourtierStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneCourtierStrat.style.display = 'none'})
BoneCourtierStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneCourtierStrat.style.display = 'block'})

BoneSpearmanStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneSpearmanStrat.style.display = 'none'})
BoneSpearmanStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneSpearmanStrat.style.display = 'block'})

BoneCaptainStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneCaptainStrat.style.display = 'none'})
BoneCaptainStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneCaptainStrat.style.display = 'block'})

BoneBearerStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneBearerStrat.style.display = 'none'})
BoneBearerStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneBearerStrat.style.display = 'block'})


//Weald

FungalScratcherStatBtn.addEventListener ('click', function() { PlayPageOpn();FungalScratcherStrat.style.display = 'none'})
FungalScratcherStratBtn.addEventListener ('click', function() {PlayPageOpn();FungalScratcherStrat.style.display = 'block'})

FungalArtilleryStatBtn.addEventListener ('click', function() { PlayPageOpn();FungalArtilleryStrat.style.display = 'none'})
FungalArtilleryStratBtn.addEventListener ('click', function() {PlayPageOpn();FungalArtilleryStrat.style.display = 'block'})

RabidGnasherStatBtn.addEventListener ('click', function() { PlayPageOpn();RabidGnasherStrat.style.display = 'none'})
RabidGnasherStratBtn.addEventListener ('click', function() {PlayPageOpn();RabidGnasherStrat.style.display = 'block'})

EctoplasmStatBtn.addEventListener ('click', function() { PlayPageOpn();EctoplasmStrat.style.display = 'none'})
EctoplasmStratBtn.addEventListener ('click', function() {PlayPageOpn();EctoplasmStrat.style.display = 'block'})

LargeEctoplasmStatBtn.addEventListener ('click', function() { PlayPageOpn();LargeEctoplasmStrat.style.display = 'none'})
LargeEctoplasmStratBtn.addEventListener ('click', function() {PlayPageOpn();LargeEctoplasmStrat.style.display = 'block'})

CroneStatBtn.addEventListener ('click', function() { PlayPageOpn();CroneStrat.style.display = 'none'})
CroneStratBtn.addEventListener ('click', function() {PlayPageOpn();CroneStrat.style.display = 'block'})

UncleanGiantStatBtn.addEventListener ('click', function() { PlayPageOpn();UncleanGiantStrat.style.display = 'none'})
UncleanGiantStratBtn.addEventListener ('click', function() {PlayPageOpn();UncleanGiantStrat.style.display = 'block'})

HatefulViragoStatBtn.addEventListener ('click', function() { PlayPageOpn();HatefulViragoStrat.style.display = 'none'})
HatefulViragoStratBtn.addEventListener ('click', function() {PlayPageOpn();HatefulViragoStrat.style.display = 'block'})

NecroticFungusStatBtn.addEventListener ('click', function() { PlayPageOpn();NecroticFungusStrat.style.display = 'none'})
NecroticFungusStratBtn.addEventListener ('click', function() {PlayPageOpn();NecroticFungusStrat.style.display = 'block'})


//Warrens

SwineChopperStatBtn.addEventListener ('click', function() { PlayPageOpn();SwineChopperStrat.style.display = 'none'})
SwineChopperStratBtn.addEventListener ('click', function() {PlayPageOpn();SwineChopperStrat.style.display = 'block'})

SwineWretchStatBtn.addEventListener ('click', function() { PlayPageOpn();SwineWretchStrat.style.display = 'none'})
SwineWretchStratBtn.addEventListener ('click', function() { PlayPageOpn();SwineWretchStrat.style.display = 'block'})

SwineDrummerStatBtn.addEventListener ('click', function() { PlayPageOpn();SwineDrummerStrat.style.display = 'none'})
SwineDrummerStratBtn.addEventListener ('click', function() { PlayPageOpn();SwineDrummerStrat.style.display = 'block'})

SwineSlasherStatBtn.addEventListener ('click', function() { PlayPageOpn();SwineSlasherStrat.style.display = 'none'})
SwineSlasherStratBtn.addEventListener ('click', function() { PlayPageOpn();SwineSlasherStrat.style.display = 'block'})

CarrionEaterStatBtn.addEventListener ('click', function() { PlayPageOpn();CarrionEaterStrat.style.display = 'none'})
CarrionEaterStratBtn.addEventListener ('click', function() { PlayPageOpn();CarrionEaterStrat.style.display = 'block'})

LargeCarrionEaterStatBtn.addEventListener ('click', function() { PlayPageOpn();LargeCarrionEaterStrat.style.display = 'none'})
LargeCarrionEaterStratBtn.addEventListener ('click', function() { PlayPageOpn();LargeCarrionEaterStrat.style.display = 'block'})

SwinetaurStatBtn.addEventListener ('click', function() {PlayPageOpn();SwinetaurStrat.style.display = 'none'})
SwinetaurStratBtn.addEventListener ('click', function() {PlayPageOpn();SwinetaurStrat.style.display = 'block'})

SwineSkiverStatBtn.addEventListener ('click', function() {PlayPageOpn();SwineSkiverStrat.style.display = 'none'})
SwineSkiverStratBtn.addEventListener ('click', function() {PlayPageOpn();SwineSkiverStrat.style.display = 'block'})


//Cove

PelagicGrouperStatBtn.addEventListener ('click', function() { PlayPageOpn();PelagicGrouperStrat.style.display = 'none'})
PelagicGrouperStratBtn.addEventListener ('click', function() {PlayPageOpn();PelagicGrouperStrat.style.display = 'block'})

PelagicGuardianStatBtn.addEventListener ('click', function() { PlayPageOpn();PelagicGuardianStrat.style.display = 'none'})
PelagicGuardianStratBtn.addEventListener ('click', function() {PlayPageOpn();PelagicGuardianStrat.style.display = 'block'})

PelagicShamanStatBtn.addEventListener ('click', function() { PlayPageOpn();PelagicShamanStrat.style.display = 'none'})
PelagicShamanStratBtn.addEventListener ('click', function() {PlayPageOpn();PelagicShamanStrat.style.display = 'block'})

DeepStingerStatBtn.addEventListener ('click', function() { PlayPageOpn();DeepStingerStrat.style.display = 'none'})
DeepStingerStratBtn.addEventListener ('click', function() {PlayPageOpn();DeepStingerStrat.style.display = 'block'})

DrownedThrallStatBtn.addEventListener ('click', function() { PlayPageOpn();DrownedThrallStrat.style.display = 'none'})
DrownedThrallStratBtn.addEventListener ('click', function() {PlayPageOpn();DrownedThrallStrat.style.display = 'block'})

SeaMaggotStatBtn.addEventListener ('click', function() { PlayPageOpn();SeaMaggotStrat.style.display = 'none'})
SeaMaggotStratBtn.addEventListener ('click', function() {PlayPageOpn();SeaMaggotStrat.style.display = 'block'})

UcaCrusherStatBtn.addEventListener ('click', function() { PlayPageOpn();UcaCrusherStrat.style.display = 'none'})
UcaCrusherStratBtn.addEventListener ('click', function() {PlayPageOpn();UcaCrusherStrat.style.display = 'block'})

SquiffyGhastStatBtn.addEventListener ('click', function() { PlayPageOpn();SquiffyGhastStrat.style.display = 'none'})
SquiffyGhastStratBtn.addEventListener ('click', function() {PlayPageOpn();SquiffyGhastStrat.style.display = 'block'})


//Shared

BrigandCutthroatStatBtn.addEventListener ('click', function() { PlayPageOpn();BrigandCutthroatStrat.style.display = 'none'})
BrigandCutthroatStratBtn.addEventListener ('click', function() {PlayPageOpn();BrigandCutthroatStrat.style.display = 'block'})

BrigandBloodletterStatBtn.addEventListener ('click', function() { PlayPageOpn();BrigandBloodletterStrat.style.display = 'none'})
BrigandBloodletterStratBtn.addEventListener ('click', function() {PlayPageOpn();BrigandBloodletterStrat.style.display = 'block'})

BrigandFusilierStatBtn.addEventListener ('click', function() { PlayPageOpn();BrigandFusilierStrat.style.display = 'none'})
BrigandFusilierStratBtn.addEventListener ('click', function() {PlayPageOpn();BrigandFusilierStrat.style.display = 'block'})

CultistBrawlerStatBtn.addEventListener ('click', function() { PlayPageOpn();CultistBrawlerStrat.style.display = 'none'})
CultistBrawlerStratBtn.addEventListener ('click', function() {PlayPageOpn();CultistBrawlerStrat.style.display = 'block'})

CultistAcolyteStatBtn.addEventListener ('click', function() { PlayPageOpn();CultistAcolyteStrat.style.display = 'none'})
CultistAcolyteStratBtn.addEventListener ('click', function() {PlayPageOpn();CultistAcolyteStrat.style.display = 'block'})

MadmanStatBtn.addEventListener ('click', function() { PlayPageOpn();MadmanStrat.style.display = 'none'})
MadmanStratBtn.addEventListener ('click', function() {PlayPageOpn();MadmanStrat.style.display = 'block'})

WebberStatBtn.addEventListener ('click', function() { PlayPageOpn();WebberStrat.style.display = 'none'})
WebberStratBtn.addEventListener ('click', function() {PlayPageOpn();WebberStrat.style.display = 'block'})

SpitterStatBtn.addEventListener ('click', function() { PlayPageOpn();SpitterStrat.style.display = 'none'})
SpitterStratBtn.addEventListener ('click', function() {PlayPageOpn();SpitterStrat.style.display = 'block'})

MaggotStatBtn.addEventListener ('click', function() { PlayPageOpn();MaggotStrat.style.display = 'none'})
MaggotStratBtn.addEventListener ('click', function() {PlayPageOpn();MaggotStrat.style.display = 'block'})

BoneRabbleStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneRabbleStrat.style.display = 'none'})
BoneRabbleStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneRabbleStrat.style.display = 'block'})

GargoyleStatBtn.addEventListener ('click', function() { PlayPageOpn();GargoyleStrat.style.display = 'none'})
GargoyleStratBtn.addEventListener ('click', function() {PlayPageOpn();GargoyleStrat.style.display = 'block'})

GhoulStatBtn.addEventListener ('click', function() { PlayPageOpn();GhoulStrat.style.display = 'none'})
GhoulStratBtn.addEventListener ('click', function() {PlayPageOpn();GhoulStrat.style.display = 'block'})

BrigandRaiderStatBtn.addEventListener ('click', function() { PlayPageOpn();BrigandRaiderStrat.style.display = 'none'})
BrigandRaiderStratBtn.addEventListener ('click', function() {PlayPageOpn();BrigandRaiderStrat.style.display = 'block'})

BrigandHunterStatBtn.addEventListener ('click', function() { PlayPageOpn();BrigandHunterStrat.style.display = 'none'})
BrigandHunterStratBtn.addEventListener ('click', function() {PlayPageOpn();BrigandHunterStrat.style.display = 'block'})



  
