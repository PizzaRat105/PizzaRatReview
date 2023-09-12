function createTierContainer(id, id2, headerText, isNegative) {
    const tierContainer = document.createElement('div');
    tierContainer.className = 'quirk_tier_container nondisplay';
    tierContainer.id = id;
  
    const header = document.createElement('div');
    header.className = 'ddlogo_text tier_header_txt' + (isNegative ? ' negative' : '');
    header.textContent = headerText;
  
    const quirkContainer = document.createElement('div');
    quirkContainer.className = 'quirk_container quirk_text' + (isNegative ? ' negative' : '');
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
  
    positiveTiers.forEach((tier) => {
      const tierContainer = createTierContainer(tier.id,tier.id2, tier.headerText, false);
      glossaryBox.appendChild(tierContainer);
    });
  
    negativeTiers.forEach((tier) => {
      const tierContainer = createTierContainer(tier.id, tier.id2, tier.headerText, true);
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



const BtnChooseAudio = document.getElementById('btn_press');
BtnChooseAudio.volume = 0.7;
const OpenSfx = document.getElementById('page_open');
OpenSfx.volume = 0.6;
const CloseSound = document.getElementById('page_close');
CloseSound.volume = 0.6;


function PlayPageOpn() {
  OpenSfx.currentTime = 0;
  OpenSfx.play();
}

function PlayBtnPress() {
  BtnChooseAudio.currentTime = 0; 
  BtnChooseAudio.play();
}

const QuirkClose = document.getElementById('quirk_close')

QuirkClose.addEventListener('click', function() {
  CloseSound.currentTime = 0;
  CloseSound.play();
  GlossaryBox.style.display = 'none'
  GlossaryOpen.style.display = 'none'
  GlossaryClosed.style.display = 'block'
})




const GlossaryOpen = document.getElementById('glossary_open')
const GlossaryClosed = document.getElementById('glossary_closed')
const GlossaryOverlay = document.getElementById('glossary_overlay')
const GlossaryBox = document.getElementById('glossarybox')

GlossaryOpen.addEventListener('click' , function() {
  CloseSound.currentTime = 0;
  CloseSound.play();
  PlayBtnPress()
  GlossaryBox.style.display = 'none'
  GlossaryClosed.style.display = 'block'
  GlossaryOpen.style.display = 'none'
})
GlossaryClosed.addEventListener('click' , function() {
  PlayPageOpn() 
  PlayBtnPress()
  GlossaryBox.style.display = 'block'
  GlossaryClosed.style.display = 'none'
  GlossaryOpen.style.display = 'block'
})
GlossaryOpen.addEventListener('mouseover' , function() {GlossaryOverlay.style.display = 'block'})
GlossaryOpen.addEventListener('mouseleave', function() {GlossaryOverlay.style.display = 'none'; });
GlossaryClosed.addEventListener('mouseover' , function() {GlossaryOverlay.style.display = 'block'})
GlossaryClosed.addEventListener('mouseleave', function() {GlossaryOverlay.style.display = 'none'; });


document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && GlossaryBox.style.display === 'block') {
    CloseSound.currentTime = 0;
    CloseSound.play();
    GlossaryBox.style.display = 'none';
    GlossaryOpen.style.display = 'none';
    GlossaryClosed.style.display = 'block';
  }
});

const PosNavBtns = document.getElementsByClassName('tier_btn_positive');
const NegNavBtns = document.getElementsByClassName('tier_btn_negative');
const PosQuirkBtn = document.getElementById('glossarynav1')
const NegQuirkBtn = document.getElementById('glossarynav2')
const NegQuirkNav = document.getElementById('neg_nav')
const PosQuirkNav = document.getElementById('pos_nav')


PosQuirkBtn.addEventListener('click', function() {
  PlayPageOpn();
  HideAllNegativeContent()
  HideAllPositiveContent()
  NegQuirkNav.style.display = 'none'
  PosQuirkNav.style.display = 'block'
  STierPositiveContent.style.display = 'block'
})

NegQuirkBtn.addEventListener('click', function() {
  PlayPageOpn();
  HideAllPositiveContent()
  HideAllNegativeContent()
  PosQuirkNav.style.display = 'none'
  NegQuirkNav.style.display = 'block'
  Tier1NegativeContent.style.display = 'block'
  }
  )

for (const PosNavBtn of PosNavBtns) {
  PosNavBtn.addEventListener('click', function() {PlayBtnPress();})}

for (const NegNavBtn of NegNavBtns) {
  NegNavBtn.addEventListener('click', function() {PlayBtnPress();})}

const STierBtn = document.getElementById('stier_positive');
const ATierBtn = document.getElementById('atier_positive');
const BTierBtn = document.getElementById('btier_positive');
const CTierBtn = document.getElementById('ctier_positive');
const DTierBtn = document.getElementById('dtier_positive');
const ETierBtn = document.getElementById('etier_positive');
const FTierBtn = document.getElementById('ftier_positive');

const STierPositiveContent = document.getElementById('positive_stier')
const ATierPositiveContent = document.getElementById('positive_atier')
const BTierPositiveContent = document.getElementById('positive_btier')
const CTierPositiveContent = document.getElementById('positive_ctier')
const DTierPositiveContent = document.getElementById('positive_dtier')
const ETierPositiveContent = document.getElementById('positive_etier')
const FTierPositiveContent = document.getElementById('positive_ftier')

function HideAllPositiveContent() {
  const AllPositiveContent = [STierPositiveContent, ATierPositiveContent, BTierPositiveContent, CTierPositiveContent, DTierPositiveContent, ETierPositiveContent, FTierPositiveContent]
  AllPositiveContent.forEach(positivecontent =>{
    positivecontent.style.display = 'none'
  })
}

STierBtn.addEventListener('click', function() {HideAllPositiveContent(); STierPositiveContent.style.display = 'block'})
ATierBtn.addEventListener('click', function() {HideAllPositiveContent(); ATierPositiveContent.style.display = 'block'})
BTierBtn.addEventListener('click', function() {HideAllPositiveContent(); BTierPositiveContent.style.display = 'block'})
CTierBtn.addEventListener('click', function() {HideAllPositiveContent(); CTierPositiveContent.style.display = 'block'})
DTierBtn.addEventListener('click', function() {HideAllPositiveContent(); DTierPositiveContent.style.display = 'block'})
ETierBtn.addEventListener('click', function() {HideAllPositiveContent(); ETierPositiveContent.style.display = 'block'})
FTierBtn.addEventListener('click', function() {HideAllPositiveContent(); FTierPositiveContent.style.display = 'block'})


const Tier1Btn = document.getElementById('tier1_negative');
const Tier2Btn = document.getElementById('tier2_negative');
const Tier3Btn = document.getElementById('tier3_negative');
const Tier4Btn = document.getElementById('tier4_negative');
const Tier5Btn = document.getElementById('tier5_negative');
const Tier6Btn = document.getElementById('tier6_negative');
const Tier7Btn = document.getElementById('tier7_negative');
const Tier8Btn = document.getElementById('tier8_negative');
const Tier9Btn = document.getElementById('tier9_negative');
const Tier10Btn = document.getElementById('tier10_negative');

const Tier1NegativeContent = document.getElementById('negative_tier1');
const Tier2NegativeContent = document.getElementById('negative_tier2');
const Tier3NegativeContent = document.getElementById('negative_tier3');
const Tier4NegativeContent = document.getElementById('negative_tier4');
const Tier5NegativeContent = document.getElementById('negative_tier5');
const Tier6NegativeContent = document.getElementById('negative_tier6');
const Tier7NegativeContent = document.getElementById('negative_tier7');
const Tier8NegativeContent = document.getElementById('negative_tier8');
const Tier9NegativeContent = document.getElementById('negative_tier9');
const Tier10NegativeContent = document.getElementById('negative_tier10');

Tier1Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier1NegativeContent.style.display = 'block'})
Tier2Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier2NegativeContent.style.display = 'block'})
Tier3Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier3NegativeContent.style.display = 'block'})
Tier4Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier4NegativeContent.style.display = 'block'})
Tier5Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier5NegativeContent.style.display = 'block'})
Tier6Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier6NegativeContent.style.display = 'block'})
Tier7Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier7NegativeContent.style.display = 'block'})
Tier8Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier8NegativeContent.style.display = 'block'})
Tier9Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier9NegativeContent.style.display = 'block'})
Tier10Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier10NegativeContent.style.display = 'block'})

function HideAllNegativeContent() {
  const AllNegativeContent = [Tier1NegativeContent, Tier2NegativeContent, Tier3NegativeContent, Tier4NegativeContent, Tier5NegativeContent, Tier6NegativeContent, Tier7NegativeContent, Tier8NegativeContent, Tier9NegativeContent, Tier10NegativeContent]
  AllNegativeContent.forEach(negativecontent =>{
    negativecontent.style.display = 'none'
  })
}



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

    { row: 1, num: 1, id: "winded_desc", content: "-1 SPD if HP below 50%" },
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
