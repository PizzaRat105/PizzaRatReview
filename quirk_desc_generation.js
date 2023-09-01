const STierquirkData = [
    //s tier
    { row: 1, num: 1, id: "luminous_desc", content: "+2 SPD <br> +5 DODGE" },
    { row: 1, num: 2, id: "corvid_grace_desc", content: "+6 DODGE <br> +25% <span class='move'> Move</span> Resistance" },
    { row: 1, num: 3, id: "corvid_eye_desc", content: "+8 ACC <br> +8% <span class='scouting'> Scouting </span> Chance" },
    { row: 1, num: 4, id: "eldritch_slayer_desc", content: "+10 ACC vs Eldritch <br> +5% CRIT vs Eldritch" },
    { row: 1, num: 5, id: "man_slayer_desc", content: "+10 ACC vs Human <br> +5% CRIT vs Human" },
    { row: 1, num: 6, id: "natural_swing_desc", content: "+5 ACC" },
    { row: 1, num: 7, id: "quick_reflexes_desc", content: "+2 SPD" },
    { row: 1, num: 8, id: "hippocratic_desc", content: "+20% <span class = heal>Healing</span> Skills" },
    { row: 1, num: 9, id: "precise_striker_desc", content: "+5% CRIT <span class = 'attack_type'> Melee </span> Skills" },
    { row: 1, num: 10, id: "eagle_eye_desc", content: "+5% CRIT <span class = 'attack_type'> Ranged </span> Skills" },
];

const ATierquirkData = [
//a tier
{ row: 1, num: 1, id: "beast_slayer_desc", content: "+10 ACC vs Beast <br> +5% CRIT vs Beast" },
{ row: 1, num: 2, id: "early_riser_desc", content: "+2 SPD if <span class = 'highres'> Torch </span> above 75" },
{ row: 1, num: 3, id: "evasive_desc", content: "+5 DODGE" },
{ row: 1, num: 4, id: "hard_skinned_desc", content: "+10% PROT" },
{ row: 1, num: 5, id: "slugger_desc", content: "+10% DMG <span class = 'attack_type'> Melee </span> Skills" },
{ row: 1, num: 6, id: "unerring_desc", content: "+10% DMG <span class = 'attack_type'> Ranged </span> Skills" },
{ row: 1, num: 7, id: "natural_eye_desc", content: "+5 ACC <span class = 'attack_type'> Ranged </span> Skills" },
{ row: 1, num: 8, id: "on_guard_desc", content: "+4 SPD and +5 DODGE on First Round" },
{ row: 1, num: 9, id: "quickdraw_desc", content: "+4 SPD on First Round" },
{ row: 1, num: 10, id: "hot_to_trot_desc", content: "+25% DMG, +20 ACC, +5% CRIT on First Round" },
{ row: 1, num: 11, id: "unholy_slayer_desc", content: "+10 ACC vs Unholy <br> +5% CRIT vs Unholy" },
{ row: 1, num: 12, id: "tough_desc", content: "+10% MAX HP" },
{ row: 2, num: 1, id: "eldritch_hater_desc", content: "+15% DMG vs Eldritch <br> -15% <span class = 'stress'>Stress</span> vs Eldritch" },
{ row: 2, num: 2, id: "mankind_hater_desc", content: "+15% DMG vs Human <br> -15% <span class = 'stress'>Stress</span> vs Human" },
{ row: 2, num: 3, id: "beast_hater_desc", content: "+15% DMG vs Beast <br> -15% <span class = 'stress'>Stress</span> vs Beast" },
{ row: 2, num: 4, id: "warrior_of_light_desc", content: "+10% DMG if <span class = 'highres'> Torch </span> above 75" },
];

const BTierquirkData = [
    //b tier
    { row: 1, num: 1, id: "unholy_hater_desc", content: "+15% DMG vs Unholy <br> -15% <span class = 'stress'>Stress</span> vs Unholy" },
    { row: 1, num: 2, id: "daredevil_desc", content: "+15 DODGE if HP below 25%" },
    { row: 1, num: 3, id: "hard_noggin_desc", content: "+15% <span class = 'stun'> Stun </span> Resist" },
    { row: 1, num: 4, id: "clotter_desc", content: "+15% <span class = 'bleed'> Bleed </span> Resist" },
    { row: 1, num: 5, id: "thick_blooded_desc", content: "+15% <span class = 'blight'> Blight </span> Resist" },
    { row: 1, num: 6, id: "photomania_desc", content: "-20% <span class = 'stress'> Stress </span> if <span class = 'highres'> Torch </span> above 75" },
    { row: 1, num: 7, id: "balanced_desc", content: "+15% <span class = 'move'> Move </span> Resist" },
    ];

const CTierquirkData = [
//c tier
{ row: 1, num: 1, id: "steady_desc", content: "-10% <span class = 'stress'> Stress </span>" },
{ row: 1, num: 2, id: "deadly_desc", content: "+2% CRIT" },
{ row: 1, num: 3, id: "fairweather_fighter_desc", content: "+20% DMG if HP above 99%" },
{ row: 1, num: 4, id: "second_wind_desc", content: "+10% DMG if HP below 50%" },
{ row: 1, num: 5, id: "clutch_hitter_desc", content: "+5% CRIT if HP below 50%" },
{ row: 1, num: 6, id: "natural_desc", content: "+20% MAX HP, +20% <span class = 'heal'> Healing </span> Received, <br> and +3 SPD when wearing no trinkets" },
{ row: 1, num: 7, id: "corvid_resilience_desc", content: "+33% <span class = 'disease'> Disease </span> Resist" },
{ row: 1, num: 8, id: "robust_desc", content: "+15% <span class = 'disease'> Disease </span> Resist" },
{ row: 1, num: 9, id: "tactician_quirks_desc", content: "+15% DMG in X region" },
{ row: 1, num: 10, id: "explorer_quirks_desc", content: "+10%  <span class = 'scouting'> Scouting </span> Chance in X region" },
{ row: 1, num: 11, id: "adventurer_quirks_desc", content: "-20% <span class = 'stress'> Stress </span> in X region" },
{ row: 1, num: 12, id: "scrounger_quirks_desc", content: "+5%  <span class = 'scouting'> Scouting </span> Chance in X region" },
{ row: 2, num: 1, id: "lurker_desc", content: "+10% DMG if <span class = 'highres'> Torch </span> below 26" },
{ row: 2, num: 2, id: "night_owl_desc", content: "+2 SPD if <span class = 'highres'> Torch </span> below 26" },
];

const DTierquirkData = [
    //d tier
    { row: 1, num: 1, id: "irrepressible_desc", content: "+5% <span class = 'stress'> Virtue </span> Chance"  },
    { row: 1, num: 2, id: "unyielding_desc", content: "+10%  <span class = 'mark'> Death Blow </span> Resist" },
    { row: 1, num: 3, id: "resilient_desc", content: "+10% <span class = 'stress'> Stress </span> Heal Recieved" },
    { row: 1, num: 4, id: "weapon_tinker_desc", content: "-20% Weapon Upgrade Cost at the Blacksmith" },
    { row: 1, num: 5, id: "armor_tinker_desc", content: "-20% Armor Upgrade Cost at the Blacksmith" },
    { row: 1, num: 6, id: "stress_faster_desc", content: "-100% Food Consumed if <span class = 'stress'> Stress </span> above 50 " },
    { row: 1, num: 7, id: "gifted_desc", content: "+20% <span class = 'heal'> Healing </span> Recieved" },
    { row: 1, num: 8, id: "healer_gift_desc", content: "+20% <span class = 'heal'> Healing </span> Skills while Camping" },
    { row: 1, num: 9, id: "stout_desc", content: "+15% <span class = 'heal'> Healing </span> Skills while Camping" },
    { row: 1, num: 10, id: "fast_healer_desc", content: "+10% <span class = 'heal'> Healing </span> Skills while Camping" },
    ];


const ETierquirkData = [
//e tier
{ row: 1, num: 1, id: "gothic_desc", content: "Wyrd Reconstruction: <br> +25% <span class = 'heal'> Healing </span> Recieved" },
{ row: 1, num: 2, id: "spiritual_desc", content: "Divine Grace, Divine Comfort: <br> +25% <span class = 'heal'> Healing </span> Recieved " },
{ row: 1, num: 3, id: "musical_desc", content: "Inspiring Tune: <br> +25% <span class = 'stress'> Stress </span> Heal Recieved" },
{ row: 1, num: 4, id: "backtracker_desc", content: "No <span class = 'stress'> Stress </span> penalty when walking backwards" },
{ row: 1, num: 5, id: "fated_desc", content: "10% Chance to turn any MISS (not DODGE) into a HIT" },
{ row: 1, num: 6, id: "nymphomania_desc", content: "+20% <span class = 'stress'> Stress </span> Heal Recieved from Brothel" },
{ row: 1, num: 7, id: "meditator_desc", content: "+20% <span class = 'stress'> Stress </span> Heal Recieved from Meditation" },
{ row: 1, num: 8, id: "skilled_gambler_desc", content: "+12.9% Chance of winning money while Gambling <br> +13.3% chance of winning trinkets while Gambling" },
];

const FTierquirkData = [{ row: 1, num: 1, id: "last_gasp_desc", content: "+1 SPD if HP below 50% <br> A Hero at Death's Door with a DoT applied to them could <br>  move before the healer b/c of the speed from the quirk <br> and end up taking a deathblow check and possibly die" },];



const Tier1quirkData = [

    { row: 1, num: 1, id: "corvid_curiosity_desc", content: "27.5% Chance of interacting with all curios" },
    { row: 1, num: 2, id: "compulsive_desc", content: "Suffers intense need to do specific actions <br> 20% Chance of interacting with all curios " },
    { row: 1, num: 3, id: "curious_desc", content: "Obsessed with the acquisition of knowledge <br>	20% Chance of interacting with all curios" },
];

const Tier2quirkData = [

    { row: 1, num: 1, id: "corvid_appetite_desc", content: "+100% Food Consumed <br> 33% chance of interacting with 'Body' curios" },
    { row: 1, num: 2, id: "ablutomania_desc", content: "Obsessed with cleanliness <br> 40% chance of interacting with 'Fountain' curios" },
    { row: 1, num: 3, id: "bloodthirsty_desc", content: "Fascinated with injury, wounds, and torture <br> 35% chance of interacting with 'Torture' curios" },
    { row: 1, num: 4, id: "dacnomania_desc", content: "Obsessed with killing <br> 40% chance of interacting with 'Torture' curios" },
    { row: 1, num: 5, id: "dark_temptation_desc", content: "Prone to investigating the Dark Arts <br> 40% chance of interacting with 'Unholy' curios" },
    { row: 1, num: 6, id: "demonomania_desc", content: "Believes is possessed by demons <br> 40% chance of interacting with 'Unholy' curios" },
    { row: 1, num: 7, id: "dipsomania_desc", content: "Intense craving for alcohol <br> 40% chance of interacting with 'Drink' curios" },
    { row: 1, num: 8, id: "egomania_desc", content: "Obsessed with self-worship	<br> 40% chance of interacting with 'Reflective' curios <br> <span class = 'negative'> Steals Loot </span>" },
    { row: 1, num: 9, id: "guilty_conscience_desc", content: "Bears the crushing guilt of deeds real and imagined <br> 35% chance of interacting with 'Worship' curios" },
    { row: 1, num: 10, id: "hagiomania_desc", content: "Obsessed with sainthood	<br> 40% chance of interacting with 'Worship' curios" },
    { row: 1, num: 11, id: "hieromania_desc", content: "Experiences religious visions and delusions	<br> 35% chance of interacting with 'Worship' curios" },
    { row: 1, num: 12, id: "hylomania_desc", content: "Obsessed with material things <br> 40% chance of interacting with 'Treasure' curios" },
    { row: 2, num: 1, id: "kleptomaniac_desc", content: "Prone to stealing <br> 35% chance of interacting with 'Treasure' curios <br> <span class = 'negative'> Steals Loot </span>" },
    { row: 2, num: 2, id: "necromania_desc", content: "Fascinated with corpses <br> 40% chance of interacting with 'Body' curios" },
    { row: 2, num: 3, id: "paranormania_desc", content: "Obsessed with the paranormal <br> 40% chance of interacting with 'Haunted' curios" },
    { row: 2, num: 4, id: "plutomania_desc", content: "Manic for money <br> 40% chance of interacting with 'Treasure' curios" },
    { row: 2, num: 5, id: "sitiomania_desc", content: "Obsessed with food <br> 40% chance of interacting with 'Food' curios" },
];

const Tier3quirkData = [

    { row: 1, num: 1, id: "fading_desc", content: "-2 SPD <br> -5 DODGE" },
    { row: 1, num: 2, id: "off_guard_desc", content: "-4 SPD and -5 DODGE on First Round" },
    { row: 1, num: 3, id: "slowdraw_desc", content: "-4 SPD on First Round" },
    { row: 1, num: 4, id: "corvid_blindness_desc", content: "-10 ACC if <span class = 'highres'> Torch </span> above 50" },
    { row: 1, num: 5, id: "fear_of_eldritch_desc", content: "+15% <span class = 'stress'> Stress </span> vs Eldritch <br> -10 ACC vs Eldritch" },
    { row: 1, num: 6, id: "fear_of_mankind_desc", content: "+15% <span class = 'stress'> Stress </span> vs Human <br> -10 ACC vs Human" },
    { row: 1, num: 7, id: "fear_of_beasts_desc", content: "+15% <span class = 'stress'> Stress </span> vs Beast <br> -10 ACC vs Beast" },
    { row: 1, num: 8, id: "fear_of_unholy_desc", content: "+15% <span class = 'stress'> Stress </span> vs Unholy <br> -10 ACC vs Unholy" },
    { row: 1, num: 9, id: "the_yips_desc", content: "-5 ACC" },
    { row: 1, num: 10, id: "nocturnal_desc", content: "-2 SPD if <span class = 'highres'> Torch </span> above 75" },
    { row: 1, num: 11, id: "fragile_desc", content: "-10% MAX HP" },
    { row: 1, num: 12, id: "imposter_syndrome_desc", content: "Consumed by thoughts of inadequacy <br> 4% Chance to pass turn" },
];

const Tier4quirkData = [

    { row: 1, num: 1, id: "slow_reflexes_desc", content: "-1 SPD" },
    { row: 1, num: 2, id: "ashen_desc", content: "-10% <span class = 'bleed'>Bleed</span> Resist <br> -10%  <span class = 'blight'>Blight </span> Resist" },
    { row: 1, num: 3, id: "antsy_desc", content: "+20 <span class = 'stress'> Stress </span> when left Idle for the week" },
    { row: 1, num: 4, id: "light_sensitive_desc", content: "-10% DMG if <span class = 'highres'> Torch </span> above 75" },
    { row: 1, num: 5, id: "phengophobia_desc", content: "+20% <span class = 'stress'> Stress </span> if <span class = 'highres'> Torch </span> above 75" },
    { row: 1, num: 6, id: "claustrophobia_desc", content: "+20% <span class = 'stress'> Stress </span> in Hallways" },
];

const Tier5quirkData = [

    { row: 1, num: 1, id: "weak_grip_desc", content: "-5% CRIT <span class = 'attack_type'> Melee </span> Skills" },
    { row: 1, num: 2, id: "flawed_release_desc", content: "-5% CRIT <span class = 'attack_type'> Ranged </span> Skills" },
    { row: 1, num: 3, id: "lazy_eye_desc", content: "-5 ACC <span class = 'attack_type'> Ranged </span> Skills" },
    { row: 1, num: 4, id: "torn_rotator_desc", content: "-5% DMG <span class = 'attack_type'> Melee </span> Skills" },
    { row: 1, num: 5, id: "scattering_desc", content: "-5% DMG <span class = 'attack_type'> Ranged </span> Skills" },
    { row: 1, num: 6, id: "bad_healer_desc", content: "-20% <span class = heal>Healing</span> Skills" },
    { row: 1, num: 7, id: "risktaker_desc", content: "+10% DMG <br> -10 DODGE" },
];

const Tier6quirkData = [

    { row: 1, num: 1, id: "automatonophobia_desc", content: "+20% <span class = 'stress'> Stress </span> vs Human" },
    { row: 1, num: 2, id: "zoophobia_desc", content: "+20% <span class = 'stress'> Stress </span> vs Beast" },
    { row: 1, num: 3, id: "satanophobia_desc", content: "+20% <span class = 'stress'> Stress </span> vs Unholy" },
    { row: 1, num: 4, id: "soft_desc", content: "-5% MAX HP" },
    { row: 1, num: 5, id: "infirm_desc", content: "-20% <span class = 'heal'> Healing </span> Recieved" },
    { row: 1, num: 6, id: "anemic_desc", content: "-10% <span class = 'bleed'>Bleed</span> Resist" },
    { row: 1, num: 7, id: "thin_blooded_desc", content: "-10%  <span class = 'blight'>Blight </span> Resist" },
    { row: 1, num: 8, id: "shocker_desc", content: "-10% <span class = 'stun'> Stun </span> Resist" },
    { row: 1, num: 9, id: "sickly_desc", content: "-10% <span class = 'disease'> Disease </span> Resist" },
    { row: 1, num: 10, id: "calm_desc", content: "-15% DMG on First Round  " },
    { row: 1, num: 11, id: "clumsy_desc", content: "-5 DODGE" },
];

const Tier7quirkData = [

    { row: 1, num: 1, id: "dud_hitter_desc", content: "-5% CRIT if HP below 50%" },
    { row: 1, num: 2, id: "tuckered_out_desc", content: "-10% DMG if HP below 50%" },
    { row: 1, num: 3, id: "misses_the_spot_desc", content: "-2% CRIT" },
    { row: 1, num: 4, id: "weak_grip_on_life_desc", content: "-10%  <span class = 'mark'> Death Blow </span> Resist" },
    { row: 1, num: 5, id: "thanatophobia_desc", content: "+20% <span class = 'stress'> Stress </span> if HP below 50%" },
];

const Tier8quirkData = [

    { row: 1, num: 1, id: "lygophobia_desc", content: "+20% <span class = 'stress'> Stress </span> if <span class = 'highres'> Torch </span> below 26" },
    { row: 1, num: 2, id: "area_phobe_desc", content: "+20% <span class = 'stress'> Stress </span> in X region" },
    { row: 1, num: 3, id: "germophobe_desc", content: "-10 ACC vs <span class = 'blight'>Blighted</span> " },
    { row: 1, num: 4, id: "nervous_bleeder_desc", content: "-10 ACC while <span class = 'bleed'> Bleeding </span>" },
    { row: 1, num: 5, id: "tippler_desc", content: "In Town, will only visit the Bar for stress relief" },
    { row: 1, num: 6, id: "gambler_desc", content: "In Town, will only Gamble for stress relief	" },
    { row: 1, num: 7, id: "love_interest_desc", content: "In Town, will only visit the Brothel for stress relief" },
    { row: 1, num: 8, id: "stress_eater_desc", content: "+100% Food Consumed if <span class = 'stress'> Stress </span> above 50 " },
    { row: 1, num: 9, id: "night_blindness_desc", content: "-10% DMG if <span class = 'highres'> Torch </span> below 26" },
    { row: 1, num: 10, id: "diurnal_desc", content: "-2 SPD if <span class = 'highres'> Torch </span> below 26" },
];

const Tier9quirkData = [

    { row: 1, num: 1, id: "mercurial_desc", content: "-5% <span class = 'stress'> Virtue </span> Chance" },
    { row: 1, num: 2, id: "perfectionist_desc", content: "On Attack Miss: +5 <span class = 'stress'> Stress </span>" },
    { row: 1, num: 3, id: "ruminator_desc", content: "-10% <span class = 'stress'> Stress </span> Heal Recieved" },
    { row: 1, num: 4, id: "enlightened_desc", content: "In Town, will only Meditate for stress relief" },
    { row: 1, num: 5, id: "god_fearing_desc", content: "In Town, will only Pray for stress relief" },
    { row: 1, num: 6, id: "flagellant_desc", content: "In Town, will only Flagellate for stress relief" },
];

const Tier10quirkData = [

    { row: 1, num: 1, id: "winded_desc", content: "-1 SPD if HP below 50%" },
    { row: 1, num: 2, id: "ascetic_desc", content: "Wyrd Reconstruction: <br> -20% <span class = 'heal'> Healing </span> Recieved" },
    { row: 1, num: 3, id: "scientific_desc", content: "Divine Grace, Divine Comfort: <br> -20% <span class = 'heal'> Healing </span> Recieved " },
    { row: 1, num: 4, id: "unquiet_mind_desc", content: "In Town, will not meditate in the Cloister for stress relief " },
    { row: 1, num: 5, id: "witness_desc", content: "Will not take part in Prayer activity in town, after certain traumatic events" },
    { row: 1, num: 6, id: "faithless_desc", content: "Will not Pray or Flagellate for stress relief. " },
    { row: 1, num: 7, id: "tone_deaf_desc", content: "Inspiring Tune: <br> -20% <span class = 'stress'> Stress </span> Heal Recieved" },
    { row: 1, num: 8, id: "resolution_desc", content: "In Town, will never Drink" },
    { row: 1, num: 9, id: "known_cheat_desc", content: "Is not allowed to visit the Gambling Hall" },
    { row: 1, num: 10, id: "deviant_tastes_desc", content: "Is not allowed to visit the Brothel" },
    { row: 1, num: 11, id: "bad_gambler_desc", content: "+11.4% Chance of losing money while Gambling <br> +13.3% Chance of losing trinkets while Gambling	" },
];


// Get the container
const STierContainer = document.getElementById("positive_stier");
const ATierContainer = document.getElementById("positive_atier");
const BTierContainer = document.getElementById("positive_btier");
const CTierContainer = document.getElementById("positive_ctier");
const DTierContainer = document.getElementById("positive_dtier");
const ETierContainer = document.getElementById("positive_etier");
const FTierContainer = document.getElementById("positive_ftier");


const Tier1Container = document.getElementById("negative_tier1");
const Tier2Container = document.getElementById("negative_tier2");
const Tier3Container = document.getElementById("negative_tier3");
const Tier4Container = document.getElementById("negative_tier4");
const Tier5Container = document.getElementById("negative_tier5");
const Tier6Container = document.getElementById("negative_tier6");
const Tier7Container = document.getElementById("negative_tier7");
const Tier8Container = document.getElementById("negative_tier8");
const Tier9Container = document.getElementById("negative_tier9");
const Tier10Container = document.getElementById("negative_tier10");


// Loop through the quirk data and create elements
STierquirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    STierContainer.appendChild(QuirkTxT);
});

ATierquirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    ATierContainer.appendChild(QuirkTxT);
});

BTierquirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    BTierContainer.appendChild(QuirkTxT);
});

CTierquirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    CTierContainer.appendChild(QuirkTxT);
});

DTierquirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    DTierContainer.appendChild(QuirkTxT);
});

ETierquirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    ETierContainer.appendChild(QuirkTxT);
});

FTierquirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    FTierContainer.appendChild(QuirkTxT);
});


Tier1quirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    Tier1Container.appendChild(QuirkTxT);
});

Tier2quirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    Tier2Container.appendChild(QuirkTxT);
});

Tier3quirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    Tier3Container.appendChild(QuirkTxT);
});

Tier4quirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    Tier4Container.appendChild(QuirkTxT);
});

Tier5quirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    Tier5Container.appendChild(QuirkTxT);
});

Tier6quirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    Tier6Container.appendChild(QuirkTxT);
});

Tier7quirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    Tier7Container.appendChild(QuirkTxT);
});

Tier8quirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    Tier8Container.appendChild(QuirkTxT);
});

Tier9quirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    Tier9Container.appendChild(QuirkTxT);
});

Tier10quirkData.forEach(quirk => {
    const QuirkTxT = document.createElement("div");
    QuirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
    QuirkTxT.id = quirk.id;
    QuirkTxT.innerHTML = quirk.content;
    Tier10Container.appendChild(QuirkTxT);
});



// Quirk Names
const STierquirkContainer = document.getElementById("stier_names");
const ATierquirkContainer = document.getElementById("atier_names");
const BTierquirkContainer = document.getElementById("btier_names");
const CTierquirkContainer = document.getElementById("ctier_names");
const DTierquirkContainer = document.getElementById("dtier_names");
const ETierquirkContainer = document.getElementById("etier_names");
const FTierquirkContainer = document.getElementById("ftier_names");


const Tier1quirkContainer = document.getElementById("tier1_names");
const Tier2quirkContainer = document.getElementById("tier2_names");
const Tier3quirkContainer = document.getElementById("tier3_names");
const Tier4quirkContainer = document.getElementById("tier4_names");
const Tier5quirkContainer = document.getElementById("tier5_names");
const Tier6quirkContainer = document.getElementById("tier6_names");
const Tier7quirkContainer = document.getElementById("tier7_names");
const Tier8quirkContainer = document.getElementById("tier8_names");
const Tier9quirkContainer = document.getElementById("tier9_names");
const Tier10quirkContainer = document.getElementById("tier10_names");



const STierquirkNameData = [
    { id: "luminous", content: "Luminous" },
    { id: "corvid_grace", content: "Corvid's Grace" },
    { id: "corvid_eye", content: "Corvid's Eye" },
    { id: "eldritch_slayer", content: "Eldritch Slayer" },
    { id: "man_slayer", content: "Man Slayer" },
    { id: "natural_swing", content: "Natural Swing" },
    { id: "quick_reflexes", content: "Quick Reflexes" },
    { id: "hippocratic", content: "Hippocratic" },
    { id: "precise_striker", content: "Precise Striker" },
    { id: "eagle_eye", content: "Eagle Eye" },
];

const ATierquirkNameData1 = [
    { id: "beast_slayer", content: "Beast Slayer" },
    { id: "early_riser", content: "Early Riser" },
    { id: "evasive", content: "Evasive" },
    { id: "hard_skinned", content: "Hard Skinned" },
    { id: "slugger", content: "Slugger" },
    { id: "unerring", content: "Unerring" },
    { id: "natural_eye", content: "Natural Eye" },
    { id: "on_guard", content: "On Guard" },
    { id: "quickdraw", content: "Quickdraw" },
    { id: "hot_to_trot", content: "Hot to Trot" },
    { id: "unholy_slayer", content: "Unholy Slayer" },
    { id: "tough", content: "Tough" },
    
];

const ATierquirkNameData2 = [
    { id: "eldritch_hater", content: "Eldritch Hater" },
    { id: "mankind_hater", content: "Mankind Hater" },
    { id: "beast_hater", content: "Beast Hater" },
    { id: "warrior_of_light", content: "Warrior of Light" },
];

const BTierquirkNameData = [
    { id: "unholy_hater", content: "Unholy Hater" },
    { id: "daredevil", content: "Daredevil" },
    { id: "hard_noggin", content: "Haed Noggin" },
    { id: "clotter", content: "Clotter" },
    { id: "thick_blooded", content: "Thick Blooded" },
    { id: "photomania", content: "Photomania" },
    { id: "balanced", content: "Balanced" },
];

const CTierquirkNameData1 = [
    { id: "steady", content: "Steady" },
    { id: "deadly", content: "Deadly" },
    { id: "fairweather_fighter", content: "Fairweather Fighter" },
    { id: "second_wind", content: "Second Wind" },
    { id: "clutch_hitter", content: "Clutch Hitter" },
    { id: "yeet", content: "Natural" },
    { id: "corvid_resilience", content: "Corvid's Resilience" },   
    { id: "robust", content: "Robust" },
    { id: "tactician_quirks", content: "X Tactician" },
    { id: "explorer_quirks", content: "X Explorer" },
    { id: "adventurer_quirks", content: "X Adventurer" },
    { id: "scrounger_quirks", content: "X Scrounger" },
];

const CTierquirkNameData2 = [
    { id: "lurker", content: "Lurker" },
    { id: "night_owl", content: "Night Owl" },
];

const DTierquirkNameData = [
    { id: "irrepressible", content: "Irrepressible" },
    { id: "unyielding", content: "Unyielding" },
    { id: "resilient", content: "Resilient" },
    { id: "weapon_tinker", content: "Weapon Tinker" },
    { id: "armor_tinker", content: "Armor Tinker" },
    { id: "stress_faster", content: "Stress Faster" },
    { id: "gifted", content: "Gifted" },   
    { id: "healer_gift", content: "Healer's Gift" },
    { id: "stout", content: "Stout" },
    { id: "fast_healer", content: "Fast Healer" },
];

const ETierquirkNameData = [
    { id: "gothic", content: "Gothic" },
    { id: "spiritual", content: "Spiritual" },
    { id: "musical", content: "Musical" },
    { id: "backtracker", content: "Backtracker" },
    { id: "fated", content: "Fated" },
    { id: "nymphomania", content: "Nymphomania" },
    { id: "meditator", content: "Meditator" },   
    { id: "skilled_gambler", content: "Skilled Gambler" },
];

const FTierquirkNameData = [{ id: "last_gasp", content: "Last Gasp" }];

const Tier1quirkNameData = [
    { id: "corvid_curiosity", content: "Corvid's Curiosity" },
    { id: "compulsive", content: "Compulsive" },
    { id: "curious", content: "Curious" },
];

const Tier2quirkNameData1 = [
    { id: "corvid_appetite", content: "Corvid's Appetite" },
    { id: "ablutomania", content: "Ablutomania" },
    { id: "bloodthirsty", content: "Bloodthirsty" },
    { id: "dacnomania", content: "Dacnomania" },
    { id: "dark_temptation", content: "Dark Temptation" },
    { id: "demonomania", content: "Demonomania" },
    { id: "dipsomania", content: "Dipsomania" },
    { id: "egomania", content: "Egomania" },
    { id: "guilty_conscience", content: "Guilty Conscience" },
    { id: "hagiomania", content: "Hagiomania" },
    { id: "hieromania", content: "Hieromania" },
    { id: "hylomania", content: "Hylomania" },
];

const Tier2quirkNameData2 = [
    { id: "kleptomaniac", content: "Kleptomaniac" },
    { id: "necromania", content: "Necromania" },
    { id: "paranormania", content: "Paranormania" },
    { id: "plutomania", content: "Plutomania" },
    { id: "sitiomania", content: "Sitiomania" },
];

const Tier3quirkNameData = [
    { id: "fading", content: "Fading" },
    { id: "off_guard", content: "Off Guard" },
    { id: "slowdraw", content: "Slowdraw" },
    { id: "corvid_blindness", content: "Corvid's Blindness" },
    { id: "fear_of_eldritch", content: "Fear of Eldritch" },
    { id: "fear_of_mankind", content: "Fear of Mankind" },
    { id: "fear_of_beasts", content: "Fear of Beasts" },   
    { id: "fear_of_unholy", content: "Fear of Unholy" },
    { id: "the_yips", content: "The Yips" },
    { id: "nocturnal", content: "Nocturnal" },
    { id: "fragile", content: "Fragile" },
    { id: "imposter_syndrome", content: "Imposter Syndrome" },
];

const Tier4quirkNameData = [
    { id: "slow_reflexes", content: "Slow Reflexes" },
    { id: "ashen", content: "Ashen" },
    { id: "antsy", content: "Antsy" },
    { id: "light_sensitive", content: "Light Sensitive" },
    { id: "phengophobia", content: "Phengophobia" },
    { id: "claustrophobia", content: "Claustrophobia" },
];

const Tier5quirkNameData = [
    { id: "weak_grip", content: "Weak Grip" },
    { id: "flawed_release", content: "Flawed Release" },
    { id: "lazy_eye", content: "Lazy Eye" },
    { id: "torn_rotator", content: "Torn Rotator" },
    { id: "scattering", content: "Scattering" },
    { id: "bad_healer", content: "Bad Healer" },
    { id: "risktaker", content: "Risktaker" },   
];

const Tier6quirkNameData = [
    { id: "automatonophobia", content: "Automatonophobia" },
    { id: "zoophobia", content: "Zoophobia" },
    { id: "satanophobia", content: "Satanophobia" },
    { id: "soft", content: "Soft" },
    { id: "infirm", content: "Infirm" },
    { id: "anemic", content: "Anemic" },
    { id: "thin_blooded", content: "Thin Blooded" },   
    { id: "shocker", content: "Shocker" },
    { id: "sickly", content: "Sickly" },
    { id: "calm", content: "Calm" },
    { id: "clumsy", content: "Clumsy" },
];

const Tier7quirkNameData = [
    { id: "dud_hitter", content: "Dud Hitter" },
    { id: "tuckered_out", content: "Tuckered Out" },
    { id: "misses_the_spot", content: "Misses the Spot" },
    { id: "weak_grip_on_life", content: "Weak Grip on Life" },
    { id: "thanatophobia", content: "Thanatophobia" },
];

const Tier8quirkNameData = [
    { id: "lygophobia", content: "Lygophobia" },
    { id: "area_phobe", content: "X Phobe" },
    { id: "germophobe", content: "Germophobe" },
    { id: "nervous_bleeder", content: "Nervous Bleeder" },
    { id: "tippler", content: "Tippler" },
    { id: "gambler", content: "Gambler" },
    { id: "love_interest", content: "Love Interest" },   
    { id: "stress_eater", content: "Stress Eater" },
    { id: "night_blindness", content: "Night Blindness" },
    { id: "diurnal", content: "Diurnal" },
];

const Tier9quirkNameData = [
    { id: "mercurial", content: "Mercurial" },
    { id: "perfectionist", content: "Perfectionist" },
    { id: "ruminator", content: "Ruminator" },
    { id: "enlightened", content: "Enlightened" },
    { id: "god_fearing", content: "God Fearing" },
    { id: "flagellant", content: "Flagellant" },
];

const Tier10quirkNameData = [
    { id: "winded", content: "Winded" },
    { id: "ascetic", content: "Ascetic" },
    { id: "scientific", content: "Scientific" },
    { id: "unquiet_mind", content: "Unquiet Mind" },
    { id: "witness", content: "Witness" },
    { id: "faithless", content: "Faithless" },
    { id: "tone_deaf", content: "Tone Deaf" },   
    { id: "resolution", content: "Resolution" },
    { id: "known_cheat", content: "Known Cheat" },
    { id: "deviant_tastes", content: "Deviant Tastes" },
    { id: "bad_gambler", content: "Bad Gambler" },
];

STierquirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = 'fit_width';
    QuirkName.textContent = quirk.content;
    STierquirkContainer.appendChild(QuirkName);
});

ATierquirkNameData1.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = 'fit_width';
    QuirkName.textContent = quirk.content;
    ATierquirkContainer.appendChild(QuirkName);
});

ATierquirkNameData2.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = 'quirk_name_line2 fit_width';
    QuirkName.textContent = quirk.content;
    ATierquirkContainer.appendChild(QuirkName);
});

BTierquirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = 'fit_width';
    QuirkName.textContent = quirk.content;
    BTierquirkContainer.appendChild(QuirkName);
});

CTierquirkNameData1.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = 'fit_width';
    QuirkName.textContent = quirk.content;
    CTierquirkContainer.appendChild(QuirkName);
});

CTierquirkNameData2.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = 'quirk_name_line2 fit_width';
    QuirkName.textContent = quirk.content;
    CTierquirkContainer.appendChild(QuirkName);
});

DTierquirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = 'fit_width';
    QuirkName.textContent = quirk.content;
    DTierquirkContainer.appendChild(QuirkName);
});


ETierquirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = 'fit_width';
    QuirkName.textContent = quirk.content;
    ETierquirkContainer.appendChild(QuirkName);
});


FTierquirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = ' fit_width';
    QuirkName.textContent = quirk.content;
    FTierquirkContainer.appendChild(QuirkName);
})

Tier1quirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = ' fit_width';
    QuirkName.textContent = quirk.content;
    Tier1quirkContainer.appendChild(QuirkName);
})

Tier2quirkNameData1.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = ' fit_width';
    QuirkName.textContent = quirk.content;
    Tier2quirkContainer.appendChild(QuirkName);
})

Tier2quirkNameData2.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = 'quirk_name_line2 fit_width';
    QuirkName.textContent = quirk.content;
    Tier2quirkContainer.appendChild(QuirkName);
})

Tier3quirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = ' fit_width';
    QuirkName.textContent = quirk.content;
    Tier3quirkContainer.appendChild(QuirkName);
})

Tier4quirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = ' fit_width';
    QuirkName.textContent = quirk.content;
    Tier4quirkContainer.appendChild(QuirkName);
})


Tier5quirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = ' fit_width';
    QuirkName.textContent = quirk.content;
    Tier5quirkContainer.appendChild(QuirkName);
})


Tier6quirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = ' fit_width';
    QuirkName.textContent = quirk.content;
    Tier6quirkContainer.appendChild(QuirkName);
})

Tier7quirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = ' fit_width';
    QuirkName.textContent = quirk.content;
    Tier7quirkContainer.appendChild(QuirkName);
})

Tier8quirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = ' fit_width';
    QuirkName.textContent = quirk.content;
    Tier8quirkContainer.appendChild(QuirkName);
})

Tier9quirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = ' fit_width';
    QuirkName.textContent = quirk.content;
    Tier9quirkContainer.appendChild(QuirkName);
})

Tier10quirkNameData.forEach(quirk => {
    const QuirkName = document.createElement("div");
    QuirkName.id = quirk.id;
    QuirkName.className = ' fit_width';
    QuirkName.textContent = quirk.content;
    Tier10quirkContainer.appendChild(QuirkName);
})