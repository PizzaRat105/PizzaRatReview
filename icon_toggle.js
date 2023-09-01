document.addEventListener("DOMContentLoaded", function() {
  attachHoverListeners("[id^='sharedcamp']", "[id^='genericamp']");
  attachHoverListeners("[id^='infobtn1']", "[id^='infotxt1']");
  attachHoverListeners("[id^='infobtn2']", "[id^='infotxt2']");
  
  attachHoverListeners("[id^='abomcombat']", "[id^='combatabom']");
  attachHoverListeners("[id^='abomcamp']", "[id^='restabom']");
  attachHoverListeners("[id^='abomweapon']", "[id^='weaponabom']");
  attachHoverListeners("[id^='abomarmor']", "[id^='armorabom']");
  attachHoverListeners("[id^='trinketabom1']", "[id^='abomtrinket1']");
  attachHoverListeners("[id^='trinketabom2']", "[id^='abomtrinket2']");

  attachHoverListeners("[id^='anticombat']", "[id^='combatanti']");
  attachHoverListeners("[id^='anticamp']", "[id^='restanti']");
  attachHoverListeners("[id^='antiweapon']", "[id^='weaponanti']");
  attachHoverListeners("[id^='antiarmor']", "[id^='armoranti']");
  attachHoverListeners("[id^='trinketanti1']", "[id^='antitrinket1']");
  attachHoverListeners("[id^='trinketanti2']", "[id^='antitrinket2']");

  attachHoverListeners("[id^='arbcombat']", "[id^='combatarb']");
  attachHoverListeners("[id^='arbcamp']", "[id^='restarb']");
  attachHoverListeners("[id^='arbweapon']", "[id^='weaponarb']");
  attachHoverListeners("[id^='arbarmor']", "[id^='armorarb']");
  attachHoverListeners("[id^='trinketarb1']", "[id^='arbtrinket1']");
  attachHoverListeners("[id^='trinketarb2']", "[id^='arbtrinket2']");

  attachHoverListeners("[id^='bhcombat']", "[id^='combatbh']");
  attachHoverListeners("[id^='bhcamp']", "[id^='restbh']");
  attachHoverListeners("[id^='bhweapon']", "[id^='weaponbh']");
  attachHoverListeners("[id^='bharmor']", "[id^='armorbh']");
  attachHoverListeners("[id^='trinketbh1']", "[id^='bhtrinket1']");
  attachHoverListeners("[id^='trinketbh2']", "[id^='bhtrinket2']");

  attachHoverListeners("[id^='cruscombat']", "[id^='combatcrus']");
  attachHoverListeners("[id^='cruscamp']", "[id^='restcrus']");
  attachHoverListeners("[id^='crusweapon']", "[id^='weaponcrus']");
  attachHoverListeners("[id^='crusarmor']", "[id^='armorcrus']");
  attachHoverListeners("[id^='trinketcrus1']", "[id^='crustrinket1']");
  attachHoverListeners("[id^='trinketcrus2']", "[id^='crustrinket2']");

  attachHoverListeners("[id^='flagcombat']", "[id^='combatflag']");
  attachHoverListeners("[id^='flagcamp']", "[id^='restflag']");
  attachHoverListeners("[id^='flagweapon']", "[id^='weaponflag']");
  attachHoverListeners("[id^='flagarmor']", "[id^='armorflag']");
  attachHoverListeners("[id^='trinketflag1']", "[id^='flagtrinket1']");
  attachHoverListeners("[id^='trinketflag2']", "[id^='flagtrinket2']");

  attachHoverListeners("[id^='grcombat']", "[id^='combatgr']");
  attachHoverListeners("[id^='grcamp']", "[id^='restgr']");
  attachHoverListeners("[id^='grweapon']", "[id^='weapongr']");
  attachHoverListeners("[id^='grarmor']", "[id^='armorgr']");
  attachHoverListeners("[id^='trinketgr1']", "[id^='grtrinket1']");
  attachHoverListeners("[id^='trinketgr2']", "[id^='grtrinket2']");

  attachHoverListeners("[id^='hellcombat']", "[id^='combathell']");
  attachHoverListeners("[id^='hellcamp']", "[id^='resthell']");
  attachHoverListeners("[id^='hellweapon']", "[id^='weaponhell']");
  attachHoverListeners("[id^='hellarmor']", "[id^='armorhell']");
  attachHoverListeners("[id^='trinkethell1']", "[id^='helltrinket1']");
  attachHoverListeners("[id^='trinkethell2']", "[id^='helltrinket2']");

  attachHoverListeners("[id^='hwmcombat']", "[id^='combathwm']");
  attachHoverListeners("[id^='hwmcamp']", "[id^='resthwm']");
  attachHoverListeners("[id^='hwmweapon']", "[id^='weaponhwm']");
  attachHoverListeners("[id^='hwmarmor']", "[id^='armorhwm']");
  attachHoverListeners("[id^='trinkethwm1']", "[id^='hwmtrinket1']");
  attachHoverListeners("[id^='trinkethwm2']", "[id^='hwmtrinket2']");

  attachHoverListeners("[id^='hmcombat']", "[id^='combathm']");
  attachHoverListeners("[id^='hmcamp']", "[id^='resthm']");
  attachHoverListeners("[id^='hmweapon']", "[id^='weaponhm']");
  attachHoverListeners("[id^='hmarmor']", "[id^='armorhm']");
  attachHoverListeners("[id^='trinkethm1']", "[id^='hmtrinket1']");
  attachHoverListeners("[id^='trinkethm2']", "[id^='hmtrinket2']");

  attachHoverListeners("[id^='jescombat']", "[id^='combatjes']");
  attachHoverListeners("[id^='jescamp']", "[id^='restjes']");
  attachHoverListeners("[id^='jesweapon']", "[id^='weaponjes']");
  attachHoverListeners("[id^='jesarmor']", "[id^='armorjes']");
  attachHoverListeners("[id^='trinketjes1']", "[id^='jestrinket1']");
  attachHoverListeners("[id^='trinketjes2']", "[id^='jestrinket2']");

  attachHoverListeners("[id^='lepcombat']", "[id^='combatlep']");
  attachHoverListeners("[id^='lepcamp']", "[id^='restlep']");
  attachHoverListeners("[id^='lepweapon']", "[id^='weaponlep']");
  attachHoverListeners("[id^='leparmor']", "[id^='armorlep']");
  attachHoverListeners("[id^='trinketlep1']", "[id^='leptrinket1']");
  attachHoverListeners("[id^='trinketlep2']", "[id^='leptrinket2']");

  attachHoverListeners("[id^='maacombat']", "[id^='combatmaa']");
  attachHoverListeners("[id^='maacamp']", "[id^='restmaa']");
  attachHoverListeners("[id^='maaweapon']", "[id^='weaponmaa']");
  attachHoverListeners("[id^='maaarmor']", "[id^='armormaa']");
  attachHoverListeners("[id^='trinketmaa1']", "[id^='maatrinket1']");
  attachHoverListeners("[id^='trinketmaa2']", "[id^='maatrinket2']");

  attachHoverListeners("[id^='muskcombat']", "[id^='combatmusk']");
  attachHoverListeners("[id^='muskcamp']", "[id^='restmusk']");
  attachHoverListeners("[id^='muskweapon']", "[id^='weaponmusk']");
  attachHoverListeners("[id^='muskarmor']", "[id^='armormusk']");
  attachHoverListeners("[id^='trinketmusk1']", "[id^='musktrinket1']");
  attachHoverListeners("[id^='trinketmusk2']", "[id^='musktrinket2']");

  attachHoverListeners("[id^='occcombat']", "[id^='combatocc']");
  attachHoverListeners("[id^='occcamp']", "[id^='restocc']");
  attachHoverListeners("[id^='occweapon']", "[id^='weaponocc']");
  attachHoverListeners("[id^='occarmor']", "[id^='armorocc']");
  attachHoverListeners("[id^='trinketocc1']", "[id^='occtrinket1']");
  attachHoverListeners("[id^='trinketocc2']", "[id^='occtrinket2']");

  attachHoverListeners("[id^='pdcombat']", "[id^='combatpd']");
  attachHoverListeners("[id^='pdcamp']", "[id^='restpd']");
  attachHoverListeners("[id^='pdweapon']", "[id^='weaponpd']");
  attachHoverListeners("[id^='pdarmor']", "[id^='armorpd']");
  attachHoverListeners("[id^='trinketpd1']", "[id^='pdtrinket1']");
  attachHoverListeners("[id^='trinketpd2']", "[id^='pdtrinket2']");

  attachHoverListeners("[id^='sbcombat']", "[id^='combatsb']");
  attachHoverListeners("[id^='sbcamp']", "[id^='restsb']");
  attachHoverListeners("[id^='sbweapon']", "[id^='weaponsb']");
  attachHoverListeners("[id^='sbarmor']", "[id^='armorsb']");
  attachHoverListeners("[id^='trinketsb1']", "[id^='sbtrinket1']");
  attachHoverListeners("[id^='trinketsb2']", "[id^='sbtrinket2']");

  attachHoverListeners("[id^='vescombat']", "[id^='combatves']");
  attachHoverListeners("[id^='vescamp']", "[id^='restves']");
  attachHoverListeners("[id^='vestweapon']", "[id^='weaponves']");
  attachHoverListeners("[id^='vestarmor']", "[id^='armorves']");
  attachHoverListeners("[id^='trinketves1']", "[id^='vestrinket1']");
  attachHoverListeners("[id^='trinketves2']", "[id^='vestrinket2']");


  attachHoverListeners("[id^='food_box']", "[id^='food_desc']");
  attachHoverListeners("[id^='shovel_box']", "[id^='shovel_desc']");
  attachHoverListeners("[id^='antivenom_box']", "[id^='antivenom_desc']");
  attachHoverListeners("[id^='bandage_box']", "[id^='bandage_desc']");
  attachHoverListeners("[id^='herb_box']", "[id^='herb_desc']");
  attachHoverListeners("[id^='key_box']", "[id^='key_desc']");
  attachHoverListeners("[id^='holy_water_box']", "[id^='holy_water_desc']");
  attachHoverListeners("[id^='laudanum_box']", "[id^='laudanum_desc']");
  attachHoverListeners("[id^='torch_box']", "[id^='torch_desc']");
  attachHoverListeners("[id^='dog_treat_box']", "[id^='dog_treat_desc']");
  attachHoverListeners("[id^='firewood_box']", "[id^='firewood_desc']");

  attachHoverListeners("[id^='citrine_box']", "[id^='citrine_desc']");
  attachHoverListeners("[id^='jade_box']", "[id^='jade_desc']");
  attachHoverListeners("[id^='onyx_box']", "[id^='onyx_desc']");
  attachHoverListeners("[id^='emerald_box']", "[id^='emerald_desc']");
  attachHoverListeners("[id^='sapphire_box']", "[id^='sapphire_desc']");
  attachHoverListeners("[id^='ruby_box']", "[id^='ruby_desc']");
  attachHoverListeners("[id^='trapezohedron_box']", "[id^='trapezohedron_desc']");
  attachHoverListeners("[id^='goldbag_box']", "[id^='goldbag_desc']");
  attachHoverListeners("[id^='pew_box']", "[id^='pew_desc']");
  attachHoverListeners("[id^='minor_antique_box']", "[id^='minor_antique_desc']");
  attachHoverListeners("[id^='major_antique_box']", "[id^='major_antique_desc']");
  attachHoverListeners("[id^='tapestry_box']", "[id^='tapestry_desc']");
  attachHoverListeners("[id^='crest_box']", "[id^='crest_desc']");
  attachHoverListeners("[id^='bust_box']", "[id^='bust_desc']");
  attachHoverListeners("[id^='deed_box']", "[id^='deed_desc']");
  attachHoverListeners("[id^='portrait_box']", "[id^='portrait_desc']");

//S Tier Positive
  attachHoverListeners("[id^='luminous']", "[id^='luminous_desc']");
  attachHoverListeners("[id^='corvid_grace']", "[id^='corvid_grace_desc']");
  attachHoverListeners("[id^='corvid_eye']", "[id^='corvid_eye_desc']");
  attachHoverListeners("[id^='eldritch_slayer']", "[id^='eldritch_slayer_desc']");
  attachHoverListeners("[id^='man_slayer']", "[id^='man_slayer_desc']");
  attachHoverListeners("[id^='natural_swing']", "[id^='natural_swing_desc']");
  attachHoverListeners("[id^='quick_reflexes']", "[id^='quick_reflexes_desc']");
  attachHoverListeners("[id^='hippocratic']", "[id^='hippocratic_desc']");
  attachHoverListeners("[id^='precise_striker']", "[id^='precise_striker_desc']");
  attachHoverListeners("[id^='eagle_eye']", "[id^='eagle_eye_desc']");

  //A Tier Positive

  attachHoverListeners("[id^='beast_slayer']", "[id^='beast_slayer_desc']");
  attachHoverListeners("[id^='early_riser']", "[id^='early_riser_desc']");
  attachHoverListeners("[id^='evasive']", "[id^='evasive_desc']");
  attachHoverListeners("[id^='hard_skinned']", "[id^='hard_skinned_desc']");
  attachHoverListeners("[id^='slugger']", "[id^='slugger_desc']");
  attachHoverListeners("[id^='unerring']", "[id^='unerring_desc']");
  attachHoverListeners("[id^='natural_eye']", "[id^='natural_eye_desc']");
  attachHoverListeners("[id^='on_guard']", "[id^='on_guard_desc']");
  attachHoverListeners("[id^='quickdraw']", "[id^='quickdraw_desc']");
  attachHoverListeners("[id^='hot_to_trot']", "[id^='hot_to_trot_desc']")
  attachHoverListeners("[id^='unholy_slayer']", "[id^='unholy_slayer_desc']");
  attachHoverListeners("[id^='tough']", "[id^='tough_desc']");
  attachHoverListeners("[id^='eldritch_hater']", "[id^='eldritch_hater_desc']");
  attachHoverListeners("[id^='mankind_hater']", "[id^='mankind_hater_desc']");
  attachHoverListeners("[id^='beast_hater']", "[id^='beast_hater_desc']");
  attachHoverListeners("[id^='warrior_of_light']", "[id^='warrior_of_light_desc']");

  //B Tier Positive

  attachHoverListeners("[id^='unholy_hater']", "[id^='unholy_hater_desc']");
  attachHoverListeners("[id^='daredevil']", "[id^='daredevil_desc']");
  attachHoverListeners("[id^='hard_noggin']", "[id^='hard_noggin_desc']");
  attachHoverListeners("[id^='clotter']", "[id^='clotter_desc']");
  attachHoverListeners("[id^='thick_blooded']", "[id^='thick_blooded_desc']");
  attachHoverListeners("[id^='photomania']", "[id^='photomania_desc']");
  attachHoverListeners("[id^='balanced']", "[id^='balanced_desc']");

  //C Tier Positive

  attachHoverListeners("[id^='steady']", "[id^='steady_desc']");
  attachHoverListeners("[id^='deadly']", "[id^='deadly_desc']");
  attachHoverListeners("[id^='fairweather_fighter']", "[id^='fairweather_fighter_desc']");
  attachHoverListeners("[id^='second_wind']", "[id^='second_wind_desc']");
  attachHoverListeners("[id^='clutch_hitter']", "[id^='clutch_hitter_desc']");
  attachHoverListeners("[id^='yeet']", "[id^='natural_desc']");
  attachHoverListeners("[id^='corvid_resilience']", "[id^='corvid_resilience_desc']");
  attachHoverListeners("[id^='robust']", "[id^='robust_desc']");
  attachHoverListeners("[id^='tactician_quirks']", "[id^='tactician_quirks_desc']");
  attachHoverListeners("[id^='explorer_quirks']", "[id^='explorer_quirks_desc']");
  attachHoverListeners("[id^='adventurer_quirks']", "[id^='adventurer_quirks_desc']");
  attachHoverListeners("[id^='scrounger_quirks']", "[id^='scrounger_quirks_desc']");
  attachHoverListeners("[id^='lurker']", "[id^='lurker_desc']");
  attachHoverListeners("[id^='night_owl']", "[id^='night_owl_desc']");

  //D Tier Positive

  attachHoverListeners("[id^='irrepressible']", "[id^='irrepressible_desc']");
  attachHoverListeners("[id^='unyielding']", "[id^='unyielding_desc']");
  attachHoverListeners("[id^='resilient']", "[id^='resilient_desc']");
  attachHoverListeners("[id^='weapon_tinker']", "[id^='weapon_tinker_desc']");
  attachHoverListeners("[id^='armor_tinker']", "[id^='armor_tinker_desc']");
  attachHoverListeners("[id^='stress_faster']", "[id^='stress_faster_desc']");
  attachHoverListeners("[id^='gifted']", "[id^='gifted_desc']");
  attachHoverListeners("[id^='healer_gift']", "[id^='healer_gift_desc']");
  attachHoverListeners("[id^='stout']", "[id^='stout_desc']");
  attachHoverListeners("[id^='fast_healer']", "[id^='fast_healer_desc']");

  //E Tier Positive

  attachHoverListeners("[id^='gothic']", "[id^='gothic_desc']");
  attachHoverListeners("[id^='spiritual']", "[id^='spiritual_desc']");
  attachHoverListeners("[id^='musical']", "[id^='musical_desc']");
  attachHoverListeners("[id^='backtracker']", "[id^='backtracker_desc']");
  attachHoverListeners("[id^='fated']", "[id^='fated_desc']");
  attachHoverListeners("[id^='nymphomania']", "[id^='nymphomania_desc']");
  attachHoverListeners("[id^='meditator']", "[id^='meditator_desc']");
  attachHoverListeners("[id^='skilled_gambler']", "[id^='skilled_gambler_desc']");

  //F Tier Positive
  attachHoverListeners("[id^='last_gasp']", "[id^='last_gasp_desc']");

  //Tier 1

  attachHoverListeners("[id^='corvid_curiosity']", "[id^='corvid_curiosity_desc']");
  attachHoverListeners("[id^='compulsive']", "[id^='compulsive_desc']");
  attachHoverListeners("[id^='curious']", "[id^='curious_desc']");

  //Tier 2

  attachHoverListeners("[id^='corvid_appetite']", "[id^='corvid_appetite_desc']");
  attachHoverListeners("[id^='ablutomania']", "[id^='ablutomania_desc']");
  attachHoverListeners("[id^='bloodthirsty']", "[id^='bloodthirsty_desc']");
  attachHoverListeners("[id^='dacnomania']", "[id^='dacnomania_desc']");
  attachHoverListeners("[id^='dark_temptation']", "[id^='dark_temptation_desc']");
  attachHoverListeners("[id^='demonomania']", "[id^='demonomania_desc']");
  attachHoverListeners("[id^='dipsomania']", "[id^='dipsomania_desc']");
  attachHoverListeners("[id^='egomania']", "[id^='egomania_desc']");
  attachHoverListeners("[id^='guilty_conscience']", "[id^='guilty_conscience_desc']");
  attachHoverListeners("[id^='hagiomania']", "[id^='hagiomania_desc']")
  attachHoverListeners("[id^='hieromania']", "[id^='hieromania_desc']");
  attachHoverListeners("[id^='hylomania']", "[id^='hylomania_desc']");
  attachHoverListeners("[id^='kleptomaniac']", "[id^='kleptomaniac_desc']");
  attachHoverListeners("[id^='necromania']", "[id^='necromania_desc']");
  attachHoverListeners("[id^='paranormania']", "[id^='paranormania_desc']");
  attachHoverListeners("[id^='plutomania']", "[id^='plutomania_desc']");
  attachHoverListeners("[id^='sitiomania']", "[id^='sitiomania_desc']");

  //Tier 3

  attachHoverListeners("[id^='fading']", "[id^='fading_desc']");
  attachHoverListeners("[id^='off_guard']", "[id^='off_guard_desc']");
  attachHoverListeners("[id^='slowdraw']", "[id^='slowdraw_desc']");
  attachHoverListeners("[id^='corvid_blindness']", "[id^='corvid_blindness_desc']");
  attachHoverListeners("[id^='fear_of_eldritch']", "[id^='fear_of_eldritch_desc']");
  attachHoverListeners("[id^='fear_of_mankind']", "[id^='fear_of_mankind_desc']");
  attachHoverListeners("[id^='fear_of_beasts']", "[id^='fear_of_beasts_desc']");
  attachHoverListeners("[id^='fear_of_unholy']", "[id^='fear_of_unholy_desc']");
  attachHoverListeners("[id^='the_yips']", "[id^='the_yips_desc']");
  attachHoverListeners("[id^='nocturnal']", "[id^='nocturnal_desc']")
  attachHoverListeners("[id^='fragile']", "[id^='fragile_desc']");
  attachHoverListeners("[id^='imposter_syndrome']", "[id^='imposter_syndrome_desc']");
 
  //Tier 4

  attachHoverListeners("[id^='slow_reflexes']", "[id^='slow_reflexes_desc']");
  attachHoverListeners("[id^='ashen']", "[id^='ashen_desc']");
  attachHoverListeners("[id^='antsy']", "[id^='antsy_desc']");
  attachHoverListeners("[id^='light_sensitive']", "[id^='light_sensitive_desc']");
  attachHoverListeners("[id^='phengophobia']", "[id^='phengophobia_desc']");
  attachHoverListeners("[id^='claustrophobia']", "[id^='claustrophobia_desc']");

  //Tier 5

  attachHoverListeners("[id^='weak_grip']", "[id^='weak_grip_desc']");
  attachHoverListeners("[id^='flawed_release']", "[id^='flawed_release_desc']");
  attachHoverListeners("[id^='lazy_eye']", "[id^='lazy_eye_desc']");
  attachHoverListeners("[id^='torn_rotator']", "[id^='torn_rotator_desc']");
  attachHoverListeners("[id^='scattering']", "[id^='scattering_desc']")
  attachHoverListeners("[id^='bad_healer']", "[id^='bad_healer_desc']");
  attachHoverListeners("[id^='risktaker']", "[id^='risktaker_desc']");

  //Tier 6

  attachHoverListeners("[id^='automatonophobia']", "[id^='automatonophobia_desc']");
  attachHoverListeners("[id^='zoophobia']", "[id^='zoophobia_desc']");
  attachHoverListeners("[id^='satanophobia']", "[id^='satanophobia_desc']");
  attachHoverListeners("[id^='soft']", "[id^='soft_desc']");
  attachHoverListeners("[id^='infirm']", "[id^='infirm_desc']");
  attachHoverListeners("[id^='anemic']", "[id^='anemic_desc']");
  attachHoverListeners("[id^='thin_blooded']", "[id^='thin_blooded_desc']");
  attachHoverListeners("[id^='shocker']", "[id^='shocker_desc']");
  attachHoverListeners("[id^='sickly']", "[id^='sickly_desc']");
  attachHoverListeners("[id^='calm']", "[id^='calm_desc']")
  attachHoverListeners("[id^='clumsy']", "[id^='clumsy_desc']");

  //Tier 7

  attachHoverListeners("[id^='dud_hitter']", "[id^='dud_hitter_desc']");
  attachHoverListeners("[id^='tuckered_out']", "[id^='tuckered_out_desc']");
  attachHoverListeners("[id^='misses_the_spot']", "[id^='misses_the_spot_desc']");
  attachHoverListeners("[id^='weak_grip_on_life']", "[id^='weak_grip_on_life_desc']")
  attachHoverListeners("[id^='thanatophobia']", "[id^='thanatophobia_desc']");

  //Tier 8

  attachHoverListeners("[id^='lygophobia']", "[id^='lygophobia_desc']");
  attachHoverListeners("[id^='area_phobe']", "[id^='area_phobe_desc']");
  attachHoverListeners("[id^='germophobe']", "[id^='germophobe_desc']");
  attachHoverListeners("[id^='nervous_bleeder']", "[id^='nervous_bleeder_desc']");
  attachHoverListeners("[id^='tippler']", "[id^='tippler_desc']");
  attachHoverListeners("[id^='gambler']", "[id^='gambler_desc']");
  attachHoverListeners("[id^='love_interest']", "[id^='love_interest_desc']");
  attachHoverListeners("[id^='stress_eater']", "[id^='stress_eater_desc']");
  attachHoverListeners("[id^='night_blindness']", "[id^='night_blindness_desc']");
  attachHoverListeners("[id^='diurnal']", "[id^='diurnal_desc']")

  //Tier 9

  attachHoverListeners("[id^='mercurial']", "[id^='mercurial_desc']");
  attachHoverListeners("[id^='perfectionist']", "[id^='perfectionist_desc']");
  attachHoverListeners("[id^='ruminator']", "[id^='ruminator_desc']");
  attachHoverListeners("[id^='enlightened']", "[id^='enlightened_desc']");
  attachHoverListeners("[id^='god_fearing']", "[id^='god_fearing_desc']");
  attachHoverListeners("[id^='flagellant']", "[id^='flagellant_desc']");

  //Tier 10

  attachHoverListeners("[id^='winded']", "[id^='winded_desc']");
  attachHoverListeners("[id^='ascetic']", "[id^='ascetic_desc']");
  attachHoverListeners("[id^='scientific']", "[id^='scientific_desc']");
  attachHoverListeners("[id^='unquiet_mind']", "[id^='unquiet_mind_desc']");
  attachHoverListeners("[id^='witness']", "[id^='witness_desc']");
  attachHoverListeners("[id^='faithless']", "[id^='faithless_desc']");
  attachHoverListeners("[id^='tone_deaf']", "[id^='tone_deaf_desc']");
  attachHoverListeners("[id^='resolution']", "[id^='resolution_desc']");
  attachHoverListeners("[id^='known_cheat']", "[id^='known_cheat_desc']");
  attachHoverListeners("[id^='deviant_tastes']", "[id^='deviant_tastes_desc']")
  attachHoverListeners("[id^='bad_gambler']", "[id^='bad_gambler_desc']");

});
function attachHoverListeners(triggerSelector, targetSelector) {
  var triggerElements = document.querySelectorAll(triggerSelector);
  var targetElements = document.querySelectorAll(targetSelector);

  for (var i = 0; i < triggerElements.length; i++) {
    attachHoverListener(triggerElements[i], targetElements[i]);
  }
}

function attachHoverListener(trigger, target) {
  trigger.addEventListener("mouseenter", function() {
    target.style.display = "block";
  });

  trigger.addEventListener("mouseleave", function() {
    target.style.display = "none";
  });
}

