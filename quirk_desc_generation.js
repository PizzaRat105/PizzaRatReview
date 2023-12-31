function createTierContainer(id, id2, headerText, isNegative, isPrismatic) {
    const tierContainer = document.createElement('div');
    tierContainer.className = 'quirk_tier_container nondisplay';
    tierContainer.id = id;
  
    const header = document.createElement('div');
    header.className = 'ddlogo_text tier_header_txt' + (isNegative ? ' negative' : ''); 
    header.textContent = headerText;
    if(isPrismatic) {
      header.className = 'ddlogo_text tier_header_txt crystalline';
    }
  
    const quirkContainer = document.createElement('div');
    quirkContainer.className = 'quirk_container quirk_text' + (isNegative ? ' negative' : '') 
    quirkContainer.id = id2 + '_names';
  
    tierContainer.appendChild(header);
    tierContainer.appendChild(quirkContainer);
  
    return tierContainer;
  }
  
  function appendTierContainers() {
    const glossaryBox = document.getElementById('glossarybox');
  
    // Positive Quirks
    const positiveTiers = [
      { id: 'positive_stier', id2: 'stier', headerText: 'S Tier: Very Noticeable Improvements' },
      { id: 'positive_atier', id2: 'atier', headerText: 'A Tier: Quirks that are Always Nice to Have' },
      { id: 'positive_btier', id2: 'btier', headerText: 'B Tier: Pretty Ok Quirks, no Complaints' },
      { id: 'positive_ctier', id2: 'ctier', headerText: 'C Tier: Situational &  Lower Impact' },
      { id: 'positive_dtier', id2: 'dtier', headerText: 'D Tier: Incredibly Niche at Best' },
      { id: 'positive_etier', id2: 'etier', headerText: 'E Tier: Quirks That Might as Well Do Nothing' },
      { id: 'positive_ftier', id2: 'ftier', headerText: 'F Tier: This Quirk Could Kill a Hero' },
    ];
  
    // Negative Quirks
    const negativeTiers = [
      { id: 'negative_tier1', id2: 'tier1', headerText: 'Priority Lvl 1: The Worst of the Worst' },
      { id: 'negative_tier2', id2: 'tier2', headerText: 'Priority Lvl 2: Forced Interaction Quirks' },
      { id: 'negative_tier3', id2: 'tier3', headerText: 'Priority Lvl 3: Remove as Soon as Possible' },
      { id: 'negative_tier4', id2: 'tier4', headerText:  'Priority Lvl 4: Bad but Removal can be Delayed' },
      { id: 'negative_tier5', id2: 'tier5', headerText:  'Priority Lvl 5: Bad for Only Some Heroes' },
      { id: 'negative_tier6', id2: 'tier6', headerText:  'Priority Lvl 6: Pretty Bad Negatives' },
      { id: 'negative_tier7', id2: 'tier7', headerText:  'Priority Lvl 7: Annoying Negatives' },
      { id: 'negative_tier8', id2: 'tier8', headerText:  'Priority Lvl 8: Annoying but Ignorable' },
      { id: 'negative_tier9', id2: 'tier9', headerText:  'Priority Lvl 9: Negatives with Minimal Impact' },
      { id: 'negative_tier10', id2: 'tier10', headerText: 'Priority Lvl 10: Unnoticable at Best' },
    ];

    const prismaticTier =[
      { id: 'prismatic_tier', id2: 'crystaltier', headerText: 'Prismatic Quirks'},
    ]
  
    positiveTiers.forEach((tier) => {
      const tierContainer = createTierContainer(tier.id,tier.id2, tier.headerText, false, false);
      glossaryBox.appendChild(tierContainer);
    });
  
    negativeTiers.forEach((tier) => {
      const tierContainer = createTierContainer(tier.id, tier.id2, tier.headerText, true, false);
      glossaryBox.appendChild(tierContainer);
    });

    prismaticTier.forEach((tier) => {
      const tierContainer = createTierContainer(tier.id,tier.id2, tier.headerText, false, true);
      glossaryBox.appendChild(tierContainer);
    });
  
  }
  
  appendTierContainers();


function createTierNav() {
    const posNav = document.createElement('div');
    posNav.className = 'tier_nav';
    posNav.id = 'pos_nav';
  
    const negNav = document.createElement('div');
    negNav.className = 'tier_nav';
    negNav.id = 'neg_nav';
  
    const glossaryBox = document.getElementById('glossarybox');
    glossaryBox.appendChild(posNav);
    glossaryBox.appendChild(negNav);
  
    const positiveTiers = ['s', 'a', 'b', 'c', 'd', 'e', 'f'];
    positiveTiers.forEach(tier => {
      const img = document.createElement('img');
      img.src = `images/Glossary/tier_${tier}.png`;
      img.className = 'tier_btn_positive';
      img.id = `${tier}tier_positive`; 
      posNav.appendChild(img);
    });
  
    
    const negativeTiers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    negativeTiers.forEach(tier => {
      const img = document.createElement('img');
      img.src = `images/Glossary/tier${tier}.png`;
      img.className = 'tier_btn_negative';
      img.id = `tier${tier}_negative`; 
      negNav.appendChild(img);
    });
  }
  

  createTierNav();



const STierquirkData = [
    //s tier
    { row: 1, num: 1, id: "luminous_desc", content: "+2 SPD <br> +5 DODGE" },
    { row: 1, num: 2, id: "corvid_grace_desc", content: "+6 DODGE <br> +25%  Move Resistance" },
    { row: 1, num: 3, id: "corvid_eye_desc", content: "+8 ACC <br> +8%  Scouting Chance" },
    { row: 1, num: 4, id: "eldritch_slayer_desc", content: "+10 ACC vs Eldritch <br> +5% CRIT vs Eldritch" },
    { row: 1, num: 5, id: "man_slayer_desc", content: "+10 ACC vs Human <br> +5% CRIT vs Human" },
    { row: 1, num: 6, id: "natural_swing_desc", content: "+5 ACC" },
    { row: 1, num: 7, id: "quick_reflexes_desc", content: "+2 SPD" },
    { row: 1, num: 8, id: "hippocratic_desc", content: "+20% Healing Skills" },
    { row: 1, num: 9, id: "precise_striker_desc", content: "+5% CRIT  Melee  Skills" },
    { row: 1, num: 10, id: "eagle_eye_desc", content: "+5% CRIT Ranged Skills" },
];

const ATierquirkData = [
//a tier
{ row: 1, num: 1, id: "beast_slayer_desc", content: "+10 ACC vs Beast <br> +5% CRIT vs Beast" },
{ row: 1, num: 2, id: "early_riser_desc", content: "+2 SPD if  Torch  above 75" },
{ row: 1, num: 3, id: "evasive_desc", content: "+5 DODGE" },
{ row: 1, num: 4, id: "hard_skinned_desc", content: "+10% PROT" },
{ row: 1, num: 5, id: "slugger_desc", content: "+10% DMG  Melee  Skills" },
{ row: 1, num: 6, id: "unerring_desc", content: "+10% DMG Ranged  Skills" },
{ row: 1, num: 7, id: "natural_eye_desc", content: "+5 ACC  Ranged  Skills" },
{ row: 1, num: 8, id: "on_guard_desc", content: "+4 SPD and +5 DODGE on First Round" },
{ row: 1, num: 9, id: "quickdraw_desc", content: "+4 SPD on First Round" },
{ row: 1, num: 10, id: "hot_to_trot_desc", content: "+25% DMG, +20 ACC, +5% CRIT on First Round" },
{ row: 1, num: 11, id: "unholy_slayer_desc", content: "+10 ACC vs Unholy <br> +5% CRIT vs Unholy" },
{ row: 1, num: 12, id: "tough_desc", content: "+10% MAX HP" },
{ row: 2, num: 1, id: "eldritch_hater_desc", content: "+15% DMG vs Eldritch <br> -15% Stress vs Eldritch" },
{ row: 2, num: 2, id: "mankind_hater_desc", content: "+15% DMG vs Human <br> -15% Stress vs Human" },
{ row: 2, num: 3, id: "beast_hater_desc", content: "+15% DMG vs Beast <br> -15% Stress vs Beast" },
{ row: 2, num: 4, id: "warrior_of_light_desc", content: "+10% DMG if  Torch  above 75" },
{ row: 2, num: 5, id: "twilight_dreamer_desc", content: "Ignores <span class ='stealth'>Stealth</span> <br> (One per roster) <br> Auto-Locked <br> Additional Heroes with the Quirk can be obtained through Town Events <br> Color of Madness DLC" },

];

const BTierquirkData = [
    //b tier
    { row: 1, num: 1, id: "unholy_hater_desc", content: "+15% DMG vs Unholy <br> -15% Stress vs Unholy" },
    { row: 1, num: 2, id: "daredevil_desc", content: "+15 DODGE if HP below 25%" },
    { row: 1, num: 3, id: "hard_noggin_desc", content: "+15% Stun  Resist" },
    { row: 1, num: 4, id: "clotter_desc", content: "+15%  Bleed  Resist" },
    { row: 1, num: 5, id: "thick_blooded_desc", content: "+15%  Blight  Resist" },
    { row: 1, num: 6, id: "photomania_desc", content: "-20%  Stress  if Torch above 75" },
    { row: 1, num: 7, id: "balanced_desc", content: "+15%  Move Resist" },
    ];

const CTierquirkData = [
//c tier
{ row: 1, num: 1, id: "steady_desc", content: "-10%  Stress " },
{ row: 1, num: 2, id: "deadly_desc", content: "+2% CRIT" },
{ row: 1, num: 3, id: "fairweather_fighter_desc", content: "+20% DMG if HP above 99%" },
{ row: 1, num: 4, id: "second_wind_desc", content: "+10% DMG if HP below 50%" },
{ row: 1, num: 5, id: "clutch_hitter_desc", content: "+5% CRIT if HP below 50%" },
{ row: 1, num: 6, id: "natural_desc", content: "+20% MAX HP, +20%  Healing Received, <br> and +3 SPD when wearing no trinkets" },
{ row: 1, num: 7, id: "corvid_resilience_desc", content: "+33%  Disease Resist" },
{ row: 1, num: 8, id: "robust_desc", content: "+15%  Disease  Resist" },
{ row: 1, num: 9, id: "tactician_quirks_desc", content: "+15% DMG in X region" },
{ row: 1, num: 10, id: "explorer_quirks_desc", content: "+10%   Scouting  Chance in X region" },
{ row: 1, num: 11, id: "adventurer_quirks_desc", content: "-20%  Stress  in X region" },
{ row: 1, num: 12, id: "scrounger_quirks_desc", content: "+5%   Scouting  Chance in X region" },
{ row: 2, num: 1, id: "lurker_desc", content: "+10% DMG if  Torch  below 26" },
{ row: 2, num: 2, id: "night_owl_desc", content: "+2 SPD if  Torch below 26" },
];

const DTierquirkData = [
    //d tier
    { row: 1, num: 1, id: "irrepressible_desc", content: "+5%  Virtue  Chance"  },
    { row: 1, num: 2, id: "unyielding_desc", content: "+10%   Death Blow  Resist" },
    { row: 1, num: 3, id: "resilient_desc", content: "+10%  Stress  Heal Recieved" },
    { row: 1, num: 4, id: "weapon_tinker_desc", content: "-20% Weapon Upgrade Cost at the Blacksmith" },
    { row: 1, num: 5, id: "armor_tinker_desc", content: "-20% Armor Upgrade Cost at the Blacksmith" },
    { row: 1, num: 6, id: "stress_faster_desc", content: "-100% Food Consumed if Stress  above 50 " },
    { row: 1, num: 7, id: "gifted_desc", content: "+20% Healing  Recieved" },
    { row: 1, num: 8, id: "healer_gift_desc", content: "+20% Healing Skills while Camping" },
    { row: 1, num: 9, id: "stout_desc", content: "+15% Healing Skills while Camping" },
    { row: 1, num: 10, id: "fast_healer_desc", content: "+10% Healing Skills while Camping" },
    ];


const ETierquirkData = [
//e tier
{ row: 1, num: 1, id: "gothic_desc", content: "Wyrd Reconstruction: <br> +25% Healing Recieved" },
{ row: 1, num: 2, id: "spiritual_desc", content: "Divine Grace, Divine Comfort: <br> +25% Healing Recieved " },
{ row: 1, num: 3, id: "musical_desc", content: "Inspiring Tune: <br> +25%  Stress  Heal Recieved" },
{ row: 1, num: 4, id: "backtracker_desc", content: "No  Stress  penalty when walking backwards" },
{ row: 1, num: 5, id: "fated_desc", content: "10% Chance to turn any MISS (not DODGE) into a HIT" },
{ row: 1, num: 6, id: "nymphomania_desc", content: "+20% Stress  Heal Recieved from Brothel" },
{ row: 1, num: 7, id: "meditator_desc", content: "+20%  Stress  Heal Recieved from Meditation" },
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
    { row: 1, num: 4, id: "corvid_blindness_desc", content: "-10 ACC if Torch above 50" },
    { row: 1, num: 5, id: "fear_of_eldritch_desc", content: "+15% Stress vs Eldritch <br> -10 ACC vs Eldritch" },
    { row: 1, num: 6, id: "fear_of_mankind_desc", content: "+15% Stress vs Human <br> -10 ACC vs Human" },
    { row: 1, num: 7, id: "fear_of_beasts_desc", content: "+15% Stress vs Beast <br> -10 ACC vs Beast" },
    { row: 1, num: 8, id: "fear_of_unholy_desc", content: "+15% Stress vs Unholy <br> -10 ACC vs Unholy" },
    { row: 1, num: 9, id: "the_yips_desc", content: "-5 ACC" },
    { row: 1, num: 10, id: "nocturnal_desc", content: "-2 SPD if Torch above 75" },
    { row: 1, num: 11, id: "fragile_desc", content: "-10% MAX HP" },
    { row: 1, num: 12, id: "imposter_syndrome_desc", content: "Consumed by thoughts of inadequacy <br> 4% Chance to pass turn" },
];

const Tier4quirkData = [

    { row: 1, num: 1, id: "slow_reflexes_desc", content: "-1 SPD" },
    { row: 1, num: 2, id: "ashen_desc", content: "-10% Bleed Resist <br> -10%  Blight Resist" },
    { row: 1, num: 3, id: "antsy_desc", content: "+20 Stress when left Idle for the week" },
    { row: 1, num: 4, id: "light_sensitive_desc", content: "-10% DMG if Torch above 75" },
    { row: 1, num: 5, id: "phengophobia_desc", content: "+20% Stress if Torch above 75" },
    { row: 1, num: 6, id: "claustrophobia_desc", content: "+20% Stress in Hallways" },
];

const Tier5quirkData = [

    { row: 1, num: 1, id: "weak_grip_desc", content: "-5% CRIT  Melee  Skills" },
    { row: 1, num: 2, id: "flawed_release_desc", content: "-5% CRIT  Ranged  Skills" },
    { row: 1, num: 3, id: "lazy_eye_desc", content: "-5 ACC  Ranged  Skills" },
    { row: 1, num: 4, id: "torn_rotator_desc", content: "-5% DMG  Melee  Skills" },
    { row: 1, num: 5, id: "scattering_desc", content: "-5% DMG  Ranged  Skills" },
    { row: 1, num: 6, id: "bad_healer_desc", content: "-20% Healing Skills" },
    { row: 1, num: 7, id: "risktaker_desc", content: "+10% DMG <br> -10 DODGE" },
];

const Tier6quirkData = [

    { row: 1, num: 1, id: "automatonophobia_desc", content: "+20% Stress vs Human" },
    { row: 1, num: 2, id: "zoophobia_desc", content: "+20% Stress vs Beast" },
    { row: 1, num: 3, id: "satanophobia_desc", content: "+20% Stress vs Unholy" },
    { row: 1, num: 4, id: "soft_desc", content: "-5% MAX HP" },
    { row: 1, num: 5, id: "infirm_desc", content: "-20% Healing Recieved" },
    { row: 1, num: 6, id: "anemic_desc", content: "-10% Bleed Resist" },
    { row: 1, num: 7, id: "thin_blooded_desc", content: "-10%  Blight  Resist" },
    { row: 1, num: 8, id: "shocker_desc", content: "-10%  Stun  Resist" },
    { row: 1, num: 9, id: "sickly_desc", content: "-10%  Disease  Resist" },
    { row: 1, num: 10, id: "calm_desc", content: "-15% DMG on First Round  " },
    { row: 1, num: 11, id: "clumsy_desc", content: "-5 DODGE" },
];

const Tier7quirkData = [

    { row: 1, num: 1, id: "dud_hitter_desc", content: "-5% CRIT if HP below 50%" },
    { row: 1, num: 2, id: "tuckered_out_desc", content: "-10% DMG if HP below 50%" },
    { row: 1, num: 3, id: "misses_the_spot_desc", content: "-2% CRIT" },
    { row: 1, num: 4, id: "weak_grip_on_life_desc", content: "-10%   Death Blow  Resist" },
    { row: 1, num: 5, id: "thanatophobia_desc", content: "+20%  Stress  if HP below 50%" },
];

const Tier8quirkData = [

    { row: 1, num: 1, id: "lygophobia_desc", content: "+20%  Stress  if  Torch below 26" },
    { row: 1, num: 2, id: "area_phobe_desc", content: "+20%  Stress  in X region" },
    { row: 1, num: 3, id: "germophobe_desc", content: "-10 ACC vs Blighted " },
    { row: 1, num: 4, id: "nervous_bleeder_desc", content: "-10 ACC while  Bleeding " },
    { row: 1, num: 5, id: "tippler_desc", content: "In Town, will only visit the Bar for stress relief" },
    { row: 1, num: 6, id: "gambler_desc", content: "In Town, will only Gamble for stress relief	" },
    { row: 1, num: 7, id: "love_interest_desc", content: "In Town, will only visit the Brothel for stress relief" },
    { row: 1, num: 8, id: "stress_eater_desc", content: "+100% Food Consumed if  Stress  above 50 " },
    { row: 1, num: 9, id: "night_blindness_desc", content: "-10% DMG if  Torch  below 26" },
    { row: 1, num: 10, id: "diurnal_desc", content: "-2 SPD if  Torch  below 26" },
];

const Tier9quirkData = [

    { row: 1, num: 1, id: "mercurial_desc", content: "-5%  Virtue Chance" },
    { row: 1, num: 2, id: "perfectionist_desc", content: "On Attack Miss: +5  Stress " },
    { row: 1, num: 3, id: "ruminator_desc", content: "-10%  Stress  Heal Recieved" },
    { row: 1, num: 4, id: "enlightened_desc", content: "In Town, will only Meditate for stress relief" },
    { row: 1, num: 5, id: "god_fearing_desc", content: "In Town, will only Pray for stress relief" },
    { row: 1, num: 6, id: "flagellant_desc", content: "In Town, will only Flagellate for stress relief" },
];

const Tier10quirkData = [

    { row: 1, num: 12, id: "winded_desc", content: "-1 SPD if HP below 50%" },
    { row: 1, num: 2, id: "ascetic_desc", content: "Wyrd Reconstruction: <br> -20% Healing  Recieved" },
    { row: 1, num: 3, id: "scientific_desc", content: "Divine Grace, Divine Comfort: <br> -20%  Healing  Recieved " },
    { row: 1, num: 4, id: "unquiet_mind_desc", content: "In Town, will not meditate in the Cloister for stress relief " },
    { row: 1, num: 5, id: "witness_desc", content: "Will not take part in Prayer activity in town, after certain traumatic events" },
    { row: 1, num: 6, id: "faithless_desc", content: "Will not Pray or Flagellate for stress relief. " },
    { row: 1, num: 7, id: "tone_deaf_desc", content: "Inspiring Tune: <br> -20% Stress Heal Recieved" },
    { row: 1, num: 8, id: "resolution_desc", content: "In Town, will never Drink" },
    { row: 1, num: 9, id: "known_cheat_desc", content: "Is not allowed to visit the Gambling Hall" },
    { row: 1, num: 10, id: "deviant_tastes_desc", content: "Is not allowed to visit the Brothel" },
    { row: 1, num: 11, id: "bad_gambler_desc", content: "+11.4% Chance of losing money while Gambling <br> +13.3% Chance of losing trinkets while Gambling	" },
    { row: 1, num: 1, id: "shard_mercenary_desc", content: "10% Shard loot taken. <br> Hero will only undertake Endless Harvest quest in the Farmstead.  (Cannot be removed via Sanitarium) <br> Color of Madness DLC" },
];

const PrismaticquirkData = [

  { row: 1, num: 1, id: "prismatic_isolation_desc", content: "+25% Debuff Resist<br> Color of Madness DLC" },
  { row: 1, num: 2, id: "prismatic_stability_desc", content: "+25% Move Resist<br> Color of Madness DLC" },
  { row: 1, num: 3, id: "prismatic_solidity_desc", content: "+25% Stun Resist<br> Color of Madness DLC" },
  { row: 1, num: 4, id: "prismatic_coagulation_desc", content: "+25% Bleed Resist<br> Color of Madness DLC" },
  { row: 1, num: 5, id: "prismatic_purity_desc", content: "+25% Blight Resist<br> Color of Madness DLC" },
  { row: 1, num: 6, id: "prismatic_calm_desc", content: "-30% Stress <br> Color of Madness DLC" },
  { row: 1, num: 7, id: "prismatic_force_desc", content: "+15% DMG<br> Color of Madness DLC" },
  { row: 1, num: 8, id: "prismatic_speed_desc", content: "+3 SPD<br> Color of Madness DLC" },
  { row: 1, num: 9, id: "prismatic_precision_desc", content: "+4% CRIT<br> Color of Madness DLC" },
  { row: 1, num: 10, id: "prismatic_eye_desc", content: "+8 ACC<br> Color of Madness DLC" },
  { row: 1, num: 11, id: "husk_slayer_desc", content: "+10 ACC and +5% CRIT vs Husk<br> Color of Madness DLC" },
  { row: 1, num: 12, id: "scythemaster_desc", content: "+15% DMG vs Husk<br> Color of Madness DLC" },
];

// Tier Containers
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

const PrismaticQuirkContainer = document.getElementById("prismatic_tier");


function createAndAppendQuirkContainers(quirkData, container) {
    quirkData.forEach(quirk => {
      const quirkTxT = document.createElement("div");
      quirkTxT.className = `quirk_desc row${quirk.row}num${quirk.num}`;
      quirkTxT.id = quirk.id;
      quirk.content = quirk.content.replace(/Stress/g, '<span class="stress">Stress</span>');
      quirk.content = quirk.content.replace(/Healing/g, '<span class="heal">Healing</span>');
      quirk.content = quirk.content.replace(/Virtue/g, '<span class="stress">Virtue</span>');
      quirk.content = quirk.content.replace(/Torch/g, '<span class = "highres"> Torch </span>');
      quirk.content = quirk.content.replace(/Blighted/g, '<span class="blight">Blighted</span>');
      quirk.content = quirk.content.replace(/Blight/g, '<span class="blight">Blight</span>');
      quirk.content = quirk.content.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
      quirk.content = quirk.content.replace(/Bleeding/g, '<span class="bleed">Bleeding</span>');
      quirk.content = quirk.content.replace(/Stun/g, '<span class="stun">Stun</span>');
      quirk.content = quirk.content.replace(/Move/g, '<span class="move">Move</span>');
      quirk.content = quirk.content.replace(/Death Blow/g, '<span class="mark">Death Blow</span>');
      quirk.content = quirk.content.replace(/Scouting/g, '<span class="scouting">Scouting</span>');
      quirk.content = quirk.content.replace(/Ranged/g, '<span class="attack_type">Ranged</span>');
      quirk.content = quirk.content.replace(/Melee/g, '<span class="attack_type">Melee</span>');
      quirk.content = quirk.content.replace(/Disease/g, '<span class="disease">Disease</span>');
      quirk.content = quirk.content.replace(/Debuff/g, '<span class="debuff">Debuff</span>');
      quirk.content = quirk.content.replace(/Color of Madness DLC/g, '<span class="crystalline">Color of Madness DLC</span>');


      quirkTxT.innerHTML = quirk.content;
      

      container.appendChild(quirkTxT);
    });
  }
  
  // Positive Tier Containers
  createAndAppendQuirkContainers(STierquirkData, STierContainer);
  createAndAppendQuirkContainers(ATierquirkData, ATierContainer);
  createAndAppendQuirkContainers(BTierquirkData, BTierContainer);
  createAndAppendQuirkContainers(CTierquirkData, CTierContainer);
  createAndAppendQuirkContainers(DTierquirkData, DTierContainer);
  createAndAppendQuirkContainers(ETierquirkData, ETierContainer);
  createAndAppendQuirkContainers(FTierquirkData, FTierContainer);
  
  // Negative Tier Containers
  createAndAppendQuirkContainers(Tier1quirkData, Tier1Container);
  createAndAppendQuirkContainers(Tier2quirkData, Tier2Container);
  createAndAppendQuirkContainers(Tier3quirkData, Tier3Container);
  createAndAppendQuirkContainers(Tier4quirkData, Tier4Container);
  createAndAppendQuirkContainers(Tier5quirkData, Tier5Container);
  createAndAppendQuirkContainers(Tier6quirkData, Tier6Container);
  createAndAppendQuirkContainers(Tier7quirkData, Tier7Container);
  createAndAppendQuirkContainers(Tier8quirkData, Tier8Container);
  createAndAppendQuirkContainers(Tier9quirkData, Tier9Container);
  createAndAppendQuirkContainers(Tier10quirkData, Tier10Container);

createAndAppendQuirkContainers(PrismaticquirkData, PrismaticQuirkContainer);


//Quirk Names

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
    { id: "twilight_dreamer", content: "Twilight Dreamer" },

];

const BTierquirkNameData = [
    { id: "unholy_hater", content: "Unholy Hater" },
    { id: "daredevil", content: "Daredevil" },
    { id: "hard_noggin", content: "Hard Noggin" },
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
    { id: "shard_mercenary", content: "Shard Mercenary" },
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
    { id: "winded", content: "Winded" },
];

const PrismaticquirkNameData = [
  { id: "prismatic_isolation", content: "Prismatic Isolation" },
  { id: "prismatic_stability", content: "Prismatic Stability" },
  { id: "prismatic_solidity", content: "Prismatic Solidity" },
  { id: "prismatic_coagulation", content: "Prismatic Coagulation" },
  { id: "prismatic_purity", content: "Prismatic Purity" },
  { id: "prismatic_calm", content: "Prismatic Calm" },
  { id: "prismatic_force", content: "Prismatic Force" },   
  { id: "prismatic_speed", content: "Prismatic Speed" },
  { id: "prismatic_precision", content: "Prismatic Precision" },
  { id: "prismatic_eye", content: "Prismatic Eye" },
  { id: "husk_slayer", content: "Husk Slayer" },
  { id: "scythemaster", content: "Scythemaster" },
];

// Quirk Name Container
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
const PrismaticQuirkNameContainer = document.getElementById("crystaltier_names");

function createAndAppendQuirkNames(quirkNameData, container, className = '') {
    quirkNameData.forEach(quirk => {
      const quirkName = document.createElement("div");
      quirkName.id = quirk.id;
      quirkName.className = `fit_width ${className}`;
      quirkName.textContent = quirk.content;
      container.appendChild(quirkName);
    });
  }
  
  // Positive Tier Quirk Name Containers
  createAndAppendQuirkNames(STierquirkNameData, STierquirkContainer);
  createAndAppendQuirkNames(ATierquirkNameData1, ATierquirkContainer);
  createAndAppendQuirkNames(ATierquirkNameData2, ATierquirkContainer, 'quirk_name_line2');
  createAndAppendQuirkNames(BTierquirkNameData, BTierquirkContainer);
  createAndAppendQuirkNames(CTierquirkNameData1, CTierquirkContainer);
  createAndAppendQuirkNames(CTierquirkNameData2, CTierquirkContainer, 'quirk_name_line2');
  createAndAppendQuirkNames(DTierquirkNameData, DTierquirkContainer);
  createAndAppendQuirkNames(ETierquirkNameData, ETierquirkContainer);
  createAndAppendQuirkNames(FTierquirkNameData, FTierquirkContainer);
  
  // Negative Tier Quirk Name Containers
  createAndAppendQuirkNames(Tier1quirkNameData, Tier1quirkContainer);
  createAndAppendQuirkNames(Tier2quirkNameData1, Tier2quirkContainer);
  createAndAppendQuirkNames(Tier2quirkNameData2, Tier2quirkContainer, 'quirk_name_line2');
  createAndAppendQuirkNames(Tier3quirkNameData, Tier3quirkContainer);
  createAndAppendQuirkNames(Tier4quirkNameData, Tier4quirkContainer);
  createAndAppendQuirkNames(Tier5quirkNameData, Tier5quirkContainer);
  createAndAppendQuirkNames(Tier6quirkNameData, Tier6quirkContainer);
  createAndAppendQuirkNames(Tier7quirkNameData, Tier7quirkContainer);
  createAndAppendQuirkNames(Tier8quirkNameData, Tier8quirkContainer);
  createAndAppendQuirkNames(Tier9quirkNameData, Tier9quirkContainer);
  createAndAppendQuirkNames(Tier10quirkNameData, Tier10quirkContainer);

  createAndAppendQuirkNames(PrismaticquirkNameData, PrismaticQuirkNameContainer);



const QuirkInfoDescData = [
  {    
    container: "glossarybox",

    icon_src:"images/estate_icons/quirk_icon.png",
    icon_class: "info quirk_overview",
    icon_id:"quirk_overview",

    label_class:"ddlogo_text quirk_overview_label",
    labeltext:"Overview",

    class: "general_desc quirk_general_info",
    id:"quirk_overview_desc",
    isdoublebreak:true,

    description: [
      `Quirks! can be gained during expeditions by interacting with Curios, and after expeditions in the post-expedition screen. 
      Quirks! may also occur as a result of partaking in Stress Relief buildings in the Hamlet via the Tavern and Abbey.`,
      `You may Remove Negative Quirks or Reinforce Positive Quirks (Which makes those Positive Quirks Permanent unless you remove the Quirk! yourself) in the Sanitarium.
      Untreated Negative Quirks will become locked over time.`,
      "Only up to 3 Positive Quirks and 3 Negative Quirks may be locked at one time, with Auto Locked Quirks! introduced with the Color of Madness DLC not counting towards the cap.",
      "You are more likely to gain a Positive Quirk at the end of an expedition and less likely to gain a Negative Quirk if you succeed in your expedition and the lower the Hero's Stress Levels are."
    ]
  },
  {
    container: "prismatic",

    icon_src:"images/estate_icons/shard_icon.png",
    icon_class: "prismatic_info",
    icon_id:"prismatic_quirk_info",

    class: "general_desc prismatic_info_txt",
    id:"prismatic_quirk_info_desc",
    isdoublebreak:false,


    description: [
      "Prismatic Quirks are obtained via killing the Thing from the Stars",
      "These Quirks! are Auto Locked & Only 1 of each Quirk! can be obtained per Estate",
      "Auto Locked Quirks! do not count towards the Quirk! Locking Cap",
      "The Quirks! are obtained in the order they have been listed below"
    ]
  
  }
]


  QuirkInfoDescData.forEach((quirkdesc) => {
    const QuirkIconImg = document.createElement("img");
    QuirkIconImg.src = quirkdesc.icon_src
    QuirkIconImg.loading = "lazy"
    QuirkIconImg.className = quirkdesc.icon_class
    QuirkIconImg.id = quirkdesc.icon_id

   
   
    const QuirkIconDescContainer = document.createElement("div");
    QuirkIconDescContainer.id = quirkdesc.id;
    QuirkIconDescContainer.className = quirkdesc.class;

    quirkdesc.description.forEach((text, index) => {
        const StyledText = replaceSpecificQuirkDescriptionWords(text);
        QuirkIconDescContainer.innerHTML += StyledText;

        if (quirkdesc.isdoublebreak === true && index < quirkdesc.description.length - 1) {
            const linebreak1 = document.createElement("br");
            const linebreak2 = document.createElement("br");
            const space = document.createTextNode("\u00A0");

            QuirkIconDescContainer.appendChild(linebreak1);
            QuirkIconDescContainer.appendChild(space);
            QuirkIconDescContainer.appendChild(linebreak2);
        }

        if (quirkdesc.isdoublebreak === false && index < quirkdesc.description.length - 1) {
          const linebreak = document.createElement("br");
          QuirkIconDescContainer.appendChild(linebreak);
        }

      }); 

      if (quirkdesc.container === "glossarybox") {
      GlossaryBox.appendChild(QuirkIconImg);
    } 
    
    if (quirkdesc.label_class) {
      const QuirkIconLabel = document.createElement("div");
      QuirkIconLabel.className = quirkdesc.label_class;
      QuirkIconLabel.innerHTML = quirkdesc.labeltext;

      if (quirkdesc.container === "glossarybox") {
        GlossaryBox.appendChild(QuirkIconLabel);
      } 

    }      
    if (quirkdesc.container === "glossarybox") {
    GlossaryBox.appendChild(QuirkIconDescContainer);
    }
    if (quirkdesc.container === "prismatic") {
      PrismaticQuirkNameContainer.appendChild(QuirkIconImg);
      PrismaticQuirkNameContainer.appendChild(QuirkIconDescContainer);
    }
    })

  

  function replaceSpecificQuirkDescriptionWords(description) {
    description = description.replace(/Stress/g, '<span class="stress">Stress</span>');

    description = description.replace(/Negative Quirks/g, '<span class="negative">Negative Quirks</span>');
    description = description.replace(/Negative Quirk/g, '<span class="negative">Negative Quirk</span>');

    description = description.replace(/Positive Quirks/g, '<span class="highres">Positive Quirks</span>');
    description = description.replace(/Positive Quirk/g, '<span class="highres">Positive Quirk</span>');

    description = description.replace(/Prismatic Quirks/g, '<span class="crystalline">Prismatic Quirks</span>');
    description = description.replace(/Color of Madness DLC/g, '<span class="crystalline">Color of Madness DLC</span>');
    description = description.replace(/Color of Madness/g, '<span class="crystalline">Color of Madness</span>');
    description = description.replace(/Thing from the Stars/g, '<span class="thing">Thing from the Stars</span>');


    description = description.replace(/Sanitarium/g, '<span class="stress">Sanitarium</span>');
    description = description.replace(/Abbey/g, '<span class="stress">Abbey</span>');
    description = description.replace(/Tavern/g, '<span class="stress">Tavern</span>');

    description = description.replace(/Quirks!/g, '<span class="attack_type">Quirks</span>');
    description = description.replace(/Quirk!/g, '<span class="attack_type">Quirk</span>');

    description = description.replace(/Curios/g, '<span class="attack_type">Curios</span>');
    description = description.replace(/Curio/g, '<span class="attack_type">Curio</span>');

    return description;
}
