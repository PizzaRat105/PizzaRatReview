const GlossaryOpen = document.getElementById('glossary_open')
const GlossaryClosed = document.getElementById('glossary_closed')
const GlossaryOverlay = document.getElementById('glossary_overlay')
const GlossaryBox = document.getElementById('glossarybox')
const QuirkClose = document.getElementById('quirk_close')

QuirkClose.addEventListener('click', function() {
  PlayPageClose()
  GlossaryBox.style.display = 'none'
  GlossaryOpen.style.display = 'none'
  GlossaryClosed.style.display = 'block'
  ResetQuirkContent();
  glossaryCharacter.style.display = 'block'
})

GlossaryOpen.addEventListener('click' , function() {
  PlayPageClose()
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
  ResetQuirkContent();
  QuirkHoverLabel.style.display = 'none'
})

GlossaryOpen.addEventListener('mouseover' , function() {GlossaryOverlay.style.display = 'block'})
GlossaryOpen.addEventListener('mouseleave', function() {GlossaryOverlay.style.display = 'none'; });
GlossaryClosed.addEventListener('mouseover' , function() {GlossaryOverlay.style.display = 'block'})
GlossaryClosed.addEventListener('mouseleave', function() {GlossaryOverlay.style.display = 'none'; });


document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && GlossaryBox.style.display === 'block') {
    PlayPageClose()
    GlossaryBox.style.display = 'none';
    GlossaryOpen.style.display = 'none';
    GlossaryClosed.style.display = 'block';
    HideAllQuirkContent();
    glossaryCharacter.style.display = "block"
  }
});

const PosNavBtns = document.getElementsByClassName('tier_btn_positive');
const NegNavBtns = document.getElementsByClassName('tier_btn_negative');
const PosQuirkBtn = document.getElementById('glossarynav1')
const NegQuirkBtn = document.getElementById('glossarynav2')
const PrismaticQuirkBtn = document.getElementById('glossarynav3')
const QuirkHoverLabel = document.getElementById("quirk_hover_tell")
const NegQuirkNav = document.getElementById('neg_nav')
const PosQuirkNav = document.getElementById('pos_nav')
const glossaryCharacter = document.getElementById("glossary_character")

const PrismaticQuirkInfoIconNav = document.getElementById("prismatic_quirk_info_icons")

const QuirkInfoIconNav = document.getElementById("quirk_info_icons")

function ResetQuirkContent(){
  HideAllPositiveContent();
  HideAllNegativeContent();
  HideAllPrismaticContent();
  HideAllQuirkContent();
  QuirkHoverLabel.style.display = 'block'
  NegQuirkNav.style.display = 'none'
  PosQuirkNav.style.display = 'block'
  QuirkInfoIconNav.style.display = 'flex'
  PrismaticQuirkInfoIconNav.style.display = 'none'
  glossaryCharacter.style.display = 'block'

}



PosQuirkBtn.addEventListener('click', function() {
  PlayPageOpn();
  ResetQuirkContent();
  STierPositiveContent.style.display = 'block'
})

NegQuirkBtn.addEventListener('click', function() {
  PlayPageOpn();
 ResetQuirkContent();
  PosQuirkNav.style.display = 'none'
  NegQuirkNav.style.display = 'block'
  Tier1NegativeContent.style.display = 'block'
  }
  )

PrismaticQuirkBtn.addEventListener('click', function() {
  PlayPageOpn();
  QuirkInfoIconNav.style.display = 'none'

  ResetQuirkContent();
  QuirkInfoIconNav.style.display = 'none'

  PosQuirkNav.style.display = 'none'
  PrismaticContent.style.display = 'block'
  PrismaticQuirkInfoIconNav.style.display = 'flex'
})

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
function HideAllNegativeContent() {
  const AllNegativeContent = [Tier1NegativeContent, Tier2NegativeContent, Tier3NegativeContent, Tier4NegativeContent, Tier5NegativeContent, Tier6NegativeContent, Tier7NegativeContent, Tier8NegativeContent, Tier9NegativeContent, Tier10NegativeContent]
  AllNegativeContent.forEach(negativecontent =>{
    negativecontent.style.display = 'none'
  })
}

function HideAllPrismaticContent() {
  const AllPrismaticContent = [PrismaticContent]
  AllPrismaticContent.forEach(prismatic =>{
    prismatic.style.display = 'none'
  })
}
STierBtn.addEventListener('click', function() {HideAllPositiveContent(); STierPositiveContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
ATierBtn.addEventListener('click', function() {HideAllPositiveContent(); ATierPositiveContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
BTierBtn.addEventListener('click', function() {HideAllPositiveContent(); BTierPositiveContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
CTierBtn.addEventListener('click', function() {HideAllPositiveContent(); CTierPositiveContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
DTierBtn.addEventListener('click', function() {HideAllPositiveContent(); DTierPositiveContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
ETierBtn.addEventListener('click', function() {HideAllPositiveContent(); ETierPositiveContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
FTierBtn.addEventListener('click', function() {HideAllPositiveContent(); FTierPositiveContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})


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

Tier1Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier1NegativeContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
Tier2Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier2NegativeContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
Tier3Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier3NegativeContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
Tier4Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier4NegativeContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
Tier5Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier5NegativeContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
Tier6Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier6NegativeContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
Tier7Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier7NegativeContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
Tier8Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier8NegativeContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
Tier9Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier9NegativeContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})
Tier10Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier10NegativeContent.style.display = 'block';QuirkHoverLabel.style.display = 'block'})

const PrismaticContent = document.getElementById("prismatic_tier")

PrismaticQuirkBtn.addEventListener('click', function() {PrismaticContent.style.display = 'block'})


function HideAllQuirkContent(){
  const AllQuirkContent = document.querySelectorAll('[class*="content_textwall_box"]');
  const AllQuirkContentArray = Array.from(AllQuirkContent); 

  AllQuirkContentArray.forEach(content => { 
    content.style.display = 'none'
  })
}


function AssignQuirkContentBtnClickListener(id){
  const TriggerElement = document.getElementById(id)
  const TargetElement = document.getElementById(`${id}_desc`)

  TriggerElement.addEventListener("click", function() {
    PlayBtnPress()
    HideAllQuirkContent();
    glossaryCharacter.style.display = "none"
    TargetElement.style.display = "block"
  })
}

AssignQuirkContentBtnClickListener("quirk_overview_btn")
AssignQuirkContentBtnClickListener("corvid_quirk_btn")
AssignQuirkContentBtnClickListener("prismatic_quirk_btn")
AssignQuirkContentBtnClickListener("curio_town_quirk_btn")


for (let i = 1; i <= 24; i++) { 
  attachSharedElementHoverListener(`quirk_src${i}`)
}


//S Tier Positive 

attachHoverListeners("[id='luminous']", "[id='luminous_desc']");
attachHoverListeners("[id='corvid_grace']", "[id='corvid_grace_desc']");
attachHoverListeners("[id='corvid_eye']", "[id='corvid_eye_desc']");
attachHoverListeners("[id='eldritch_slayer']", "[id='eldritch_slayer_desc']");
attachHoverListeners("[id='man_slayer']", "[id='man_slayer_desc']");
attachHoverListeners("[id='natural_swing']", "[id='natural_swing_desc']");
attachHoverListeners("[id='quick_reflexes']", "[id='quick_reflexes_desc']");
attachHoverListeners("[id='hippocratic']", "[id='hippocratic_desc']");
attachHoverListeners("[id='precise_striker']", "[id='precise_striker_desc']");
attachHoverListeners("[id='eagle_eye']", "[id='eagle_eye_desc']");

//A Tier Positive

attachHoverListeners("[id='beast_slayer']", "[id='beast_slayer_desc']");
attachHoverListeners("[id='early_riser']", "[id='early_riser_desc']");
attachHoverListeners("[id='evasive']", "[id='evasive_desc']");
attachHoverListeners("[id='hard_skinned']", "[id='hard_skinned_desc']");
attachHoverListeners("[id='slugger']", "[id='slugger_desc']");
attachHoverListeners("[id='unerring']", "[id='unerring_desc']");
attachHoverListeners("[id='natural_eye']", "[id='natural_eye_desc']");
attachHoverListeners("[id='on_guard']", "[id='on_guard_desc']");
attachHoverListeners("[id='quickdraw']", "[id='quickdraw_desc']");
attachHoverListeners("[id='hot_to_trot']", "[id='hot_to_trot_desc']")
attachHoverListeners("[id='unholy_slayer']", "[id='unholy_slayer_desc']");
attachHoverListeners("[id='tough']", "[id='tough_desc']");
attachHoverListeners("[id='eldritch_hater']", "[id='eldritch_hater_desc']");
attachHoverListeners("[id='mankind_hater']", "[id='mankind_hater_desc']");
attachHoverListeners("[id='beast_hater']", "[id='beast_hater_desc']");
attachHoverListeners("[id='warrior_of_light']", "[id='warrior_of_light_desc']");
attachHoverListeners("[id='twilight_dreamer']", "[id='twilight_dreamer_desc']");

//B Tier Positive

attachHoverListeners("[id='unholy_hater']", "[id='unholy_hater_desc']");
attachHoverListeners("[id='daredevil']", "[id='daredevil_desc']");
attachHoverListeners("[id='hard_noggin']", "[id='hard_noggin_desc']");
attachHoverListeners("[id='clotter']", "[id='clotter_desc']");
attachHoverListeners("[id='thick_blooded']", "[id='thick_blooded_desc']");
attachHoverListeners("[id='photomania']", "[id='photomania_desc']");
attachHoverListeners("[id='balanced']", "[id='balanced_desc']");

//C Tier Positive

attachHoverListeners("[id='steady']", "[id='steady_desc']");
attachHoverListeners("[id='deadly']", "[id='deadly_desc']");
attachHoverListeners("[id='fairweather_fighter']", "[id='fairweather_fighter_desc']");
attachHoverListeners("[id='second_wind']", "[id='second_wind_desc']");
attachHoverListeners("[id='clutch_hitter']", "[id='clutch_hitter_desc']");
attachHoverListeners("[id='yeet']", "[id='natural_desc']");
attachHoverListeners("[id='corvid_resilience']", "[id='corvid_resilience_desc']");
attachHoverListeners("[id='robust']", "[id='robust_desc']");
attachHoverListeners("[id='tactician_quirks']", "[id='tactician_quirks_desc']");
attachHoverListeners("[id='explorer_quirks']", "[id='explorer_quirks_desc']");
attachHoverListeners("[id='adventurer_quirks']", "[id='adventurer_quirks_desc']");
attachHoverListeners("[id='scrounger_quirks']", "[id='scrounger_quirks_desc']");
attachHoverListeners("[id='lurker']", "[id='lurker_desc']");
attachHoverListeners("[id='night_owl']", "[id='night_owl_desc']");

//D Tier Positive

attachHoverListeners("[id='irrepressible']", "[id='irrepressible_desc']");
attachHoverListeners("[id='unyielding']", "[id='unyielding_desc']");
attachHoverListeners("[id='resilient']", "[id='resilient_desc']");
attachHoverListeners("[id='weapon_tinker']", "[id='weapon_tinker_desc']");
attachHoverListeners("[id='armor_tinker']", "[id='armor_tinker_desc']");
attachHoverListeners("[id='stress_faster']", "[id='stress_faster_desc']");
attachHoverListeners("[id='gifted']", "[id='gifted_desc']");
attachHoverListeners("[id='healer_gift']", "[id='healer_gift_desc']");
attachHoverListeners("[id='stout']", "[id='stout_desc']");
attachHoverListeners("[id='fast_healer']", "[id='fast_healer_desc']");

//E Tier Positive

attachHoverListeners("[id='gothic']", "[id='gothic_desc']");
attachHoverListeners("[id='spiritual']", "[id='spiritual_desc']");
attachHoverListeners("[id='musical']", "[id='musical_desc']");
attachHoverListeners("[id='backtracker']", "[id='backtracker_desc']");
attachHoverListeners("[id='fated']", "[id='fated_desc']");
attachHoverListeners("[id='nymphomania']", "[id='nymphomania_desc']");
attachHoverListeners("[id='meditator']", "[id='meditator_desc']");
attachHoverListeners("[id='skilled_gambler']", "[id='skilled_gambler_desc']");

//F Tier Positive
attachHoverListeners("[id='last_gasp']", "[id='last_gasp_desc']");

//Tier 1

attachHoverListeners("[id='corvid_curiosity']", "[id='corvid_curiosity_desc']");
attachHoverListeners("[id='compulsive']", "[id='compulsive_desc']");
attachHoverListeners("[id='curious']", "[id='curious_desc']");

//Tier 2

attachHoverListeners("[id='corvid_appetite']", "[id='corvid_appetite_desc']");
attachHoverListeners("[id='ablutomania']", "[id='ablutomania_desc']");
attachHoverListeners("[id='bloodthirsty']", "[id='bloodthirsty_desc']");
attachHoverListeners("[id='dacnomania']", "[id='dacnomania_desc']");
attachHoverListeners("[id='dark_temptation']", "[id='dark_temptation_desc']");
attachHoverListeners("[id='demonomania']", "[id='demonomania_desc']");
attachHoverListeners("[id='dipsomania']", "[id='dipsomania_desc']");
attachHoverListeners("[id='egomania']", "[id='egomania_desc']");
attachHoverListeners("[id='guilty_conscience']", "[id='guilty_conscience_desc']");
attachHoverListeners("[id='hagiomania']", "[id='hagiomania_desc']")
attachHoverListeners("[id='hieromania']", "[id='hieromania_desc']");
attachHoverListeners("[id='hylomania']", "[id='hylomania_desc']");
attachHoverListeners("[id='kleptomaniac']", "[id='kleptomaniac_desc']");
attachHoverListeners("[id='necromania']", "[id='necromania_desc']");
attachHoverListeners("[id='paranormania']", "[id='paranormania_desc']");
attachHoverListeners("[id='plutomania']", "[id='plutomania_desc']");
attachHoverListeners("[id='sitiomania']", "[id='sitiomania_desc']");

//Tier 3

attachHoverListeners("[id='fading']", "[id='fading_desc']");
attachHoverListeners("[id='off_guard']", "[id='off_guard_desc']");
attachHoverListeners("[id='slowdraw']", "[id='slowdraw_desc']");
attachHoverListeners("[id='corvid_blindness']", "[id='corvid_blindness_desc']");
attachHoverListeners("[id='fear_of_eldritch']", "[id='fear_of_eldritch_desc']");
attachHoverListeners("[id='fear_of_mankind']", "[id='fear_of_mankind_desc']");
attachHoverListeners("[id='fear_of_beasts']", "[id='fear_of_beasts_desc']");
attachHoverListeners("[id='fear_of_unholy']", "[id='fear_of_unholy_desc']");
attachHoverListeners("[id='the_yips']", "[id='the_yips_desc']");
attachHoverListeners("[id='nocturnal']", "[id='nocturnal_desc']")
attachHoverListeners("[id='fragile']", "[id='fragile_desc']");
attachHoverListeners("[id='imposter_syndrome']", "[id='imposter_syndrome_desc']");

//Tier 4

attachHoverListeners("[id='slow_reflexes']", "[id='slow_reflexes_desc']");
attachHoverListeners("[id='ashen']", "[id='ashen_desc']");
attachHoverListeners("[id='antsy']", "[id='antsy_desc']");
attachHoverListeners("[id='light_sensitive']", "[id='light_sensitive_desc']");
attachHoverListeners("[id='phengophobia']", "[id='phengophobia_desc']");
attachHoverListeners("[id='claustrophobia']", "[id='claustrophobia_desc']");

//Tier 5

attachHoverListeners("[id='weak_grip']", "[id='weak_grip_desc']");
attachHoverListeners("[id='flawed_release']", "[id='flawed_release_desc']");
attachHoverListeners("[id='lazy_eye']", "[id='lazy_eye_desc']");
attachHoverListeners("[id='torn_rotator']", "[id='torn_rotator_desc']");
attachHoverListeners("[id='scattering']", "[id='scattering_desc']")
attachHoverListeners("[id='bad_healer']", "[id='bad_healer_desc']");
attachHoverListeners("[id='risktaker']", "[id='risktaker_desc']");

//Tier 6

attachHoverListeners("[id='automatonophobia']", "[id='automatonophobia_desc']");
attachHoverListeners("[id='zoophobia']", "[id='zoophobia_desc']");
attachHoverListeners("[id='satanophobia']", "[id='satanophobia_desc']");
attachHoverListeners("[id='soft']", "[id='soft_desc']");
attachHoverListeners("[id='infirm']", "[id='infirm_desc']");
attachHoverListeners("[id='anemic']", "[id='anemic_desc']");
attachHoverListeners("[id='thin_blooded']", "[id='thin_blooded_desc']");
attachHoverListeners("[id='shocker']", "[id='shocker_desc']");
attachHoverListeners("[id='sickly']", "[id='sickly_desc']");
attachHoverListeners("[id='calm']", "[id='calm_desc']")
attachHoverListeners("[id='clumsy']", "[id='clumsy_desc']");

//Tier 7

attachHoverListeners("[id='dud_hitter']", "[id='dud_hitter_desc']");
attachHoverListeners("[id='tuckered_out']", "[id='tuckered_out_desc']");
attachHoverListeners("[id='misses_the_spot']", "[id='misses_the_spot_desc']");
attachHoverListeners("[id='weak_grip_on_life']", "[id='weak_grip_on_life_desc']")
attachHoverListeners("[id='thanatophobia']", "[id='thanatophobia_desc']");

//Tier 8

attachHoverListeners("[id='lygophobia']", "[id='lygophobia_desc']");
attachHoverListeners("[id='area_phobe']", "[id='area_phobe_desc']");
attachHoverListeners("[id='germophobe']", "[id='germophobe_desc']");
attachHoverListeners("[id='nervous_bleeder']", "[id='nervous_bleeder_desc']");
attachHoverListeners("[id='tippler']", "[id='tippler_desc']");
attachHoverListeners("[id='gambler']", "[id='gambler_desc']");
attachHoverListeners("[id='love_interest']", "[id='love_interest_desc']");
attachHoverListeners("[id='stress_eater']", "[id='stress_eater_desc']");
attachHoverListeners("[id='night_blindness']", "[id='night_blindness_desc']");
attachHoverListeners("[id='diurnal']", "[id='diurnal_desc']")

//Tier 9

attachHoverListeners("[id='mercurial']", "[id='mercurial_desc']");
attachHoverListeners("[id='perfectionist']", "[id='perfectionist_desc']");
attachHoverListeners("[id='ruminator']", "[id='ruminator_desc']");
attachHoverListeners("[id='enlightened']", "[id='enlightened_desc']");
attachHoverListeners("[id='god_fearing']", "[id='god_fearing_desc']");
attachHoverListeners("[id='flagellant']", "[id='flagellant_desc']");

//Tier 10

attachHoverListeners("[id='winded']", "[id='winded_desc']");
attachHoverListeners("[id='ascetic']", "[id='ascetic_desc']");
attachHoverListeners("[id='scientific']", "[id='scientific_desc']");
attachHoverListeners("[id='unquiet_mind']", "[id='unquiet_mind_desc']");
attachHoverListeners("[id='witness']", "[id='witness_desc']");
attachHoverListeners("[id='faithless']", "[id='faithless_desc']");
attachHoverListeners("[id='tone_deaf']", "[id='tone_deaf_desc']");
attachHoverListeners("[id='resolution']", "[id='resolution_desc']");
attachHoverListeners("[id='known_cheat']", "[id='known_cheat_desc']");
attachHoverListeners("[id='deviant_tastes']", "[id='deviant_tastes_desc']")
attachHoverListeners("[id='bad_gambler']", "[id='bad_gambler_desc']");
attachHoverListeners("[id='shard_mercenary']", "[id='shard_mercenary_desc']");

//Prismatic
attachHoverListeners("[id='prismatic_isolation']", "[id='prismatic_isolation_desc']");
attachHoverListeners("[id='prismatic_stability']", "[id='prismatic_stability_desc']");
attachHoverListeners("[id='prismatic_solidity']", "[id='prismatic_solidity_desc']");
attachHoverListeners("[id='prismatic_coagulation']", "[id='prismatic_coagulation_desc']");
attachHoverListeners("[id='prismatic_purity']", "[id='prismatic_purity_desc']");
attachHoverListeners("[id='prismatic_calm']", "[id='prismatic_calm_desc']");
attachHoverListeners("[id='prismatic_force']", "[id='prismatic_force_desc']");
attachHoverListeners("[id='prismatic_speed']", "[id='prismatic_speed_desc']");
attachHoverListeners("[id='prismatic_precision']", "[id='prismatic_precision_desc']");
attachHoverListeners("[id='prismatic_eye']", "[id='prismatic_eye_desc']");
attachHoverListeners("[id='husk_slayer']", "[id='husk_slayer_desc']");
attachHoverListeners("[id='scythemaster']", "[id='scythemaster_desc']");
