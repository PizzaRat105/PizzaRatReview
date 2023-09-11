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


//Ruins Skills

//Bone Soldier Skills

attachHoverListeners("[id^='app_graveyard_slash']", "[id^='app_graveyard_slash_desc']");
attachHoverListeners("[id^='vet_graveyard_slash']", "[id^='app_graveyard_slash_desc']");
attachHoverListeners("[id^='champ_graveyard_slash']", "[id^='app_graveyard_slash_desc']");

attachHoverListeners("[id^='app_graveyard_stumble']", "[id^='app_graveyard_stumble_desc']");
attachHoverListeners("[id^='vet_graveyard_stumble']", "[id^='vet_graveyard_stumble_desc']");
attachHoverListeners("[id^='champ_graveyard_stumble']", "[id^='champ_graveyard_stumble_desc']");

//Bone Defender Skills

attachHoverListeners("[id^='app_axeblade']", "[id^='app_axeblade_desc']");
attachHoverListeners("[id^='vet_axeblade']", "[id^='vet_axeblade_desc']");
attachHoverListeners("[id^='champ_axeblade']", "[id^='champ_axeblade_desc']");

attachHoverListeners("[id^='app_dead_weight']", "[id^='app_dead_weight_desc']");
attachHoverListeners("[id^='vet_dead_weight']", "[id^='vet_dead_weight_desc']");
attachHoverListeners("[id^='champ_dead_weight']", "[id^='champ_dead_weight_desc']");;

attachHoverListeners("[id^='app_clumsy_axeblade']", "[id^='app_clumsy_axeblade_desc']");
attachHoverListeners("[id^='vet_clumsy_axeblade']", "[id^='vet_clumsy_axeblade_desc']");
attachHoverListeners("[id^='champ_clumsy_axeblade']", "[id^='champ_clumsy_axeblade_desc']");

attachHoverListeners("[id^='vet_foul_warding']", "[id^='vet_foul_warding_desc']");
attachHoverListeners("[id^='champ_foul_warding']", "[id^='champ_foul_warding_desc']");

//Bone Arbalest Skills

attachHoverListeners("[id^='app_quarrel']", "[id^='app_quarrel_desc']");
attachHoverListeners("[id^='vet_quarrel']", "[id^='vet_quarrel_desc']");
attachHoverListeners("[id^='champ_quarrel']", "[id^='champ_quarrel_desc']");

attachHoverListeners("[id^='app_bayonet_jab']", "[id^='app_bayonet_jab_desc']");
attachHoverListeners("[id^='vet_bayonet_jab']", "[id^='vet_bayonet_jab_desc']");
attachHoverListeners("[id^='champ_bayonet_jab']", "[id^='champ_bayonet_jab_desc']");

//Bone Courtier Skills

attachHoverListeners("[id^='app_tempting_goblet']", "[id^='app_tempting_goblet_desc']");
attachHoverListeners("[id^='vet_tempting_goblet']", "[id^='vet_tempting_goblet_desc']");
attachHoverListeners("[id^='champ_tempting_goblet']", "[id^='champ_tempting_goblet_desc']");

attachHoverListeners("[id^='app_knife_in_the_dark']", "[id^='app_knife_in_the_dark_desc']");
attachHoverListeners("[id^='vet_knife_in_the_dark']", "[id^='vet_knife_in_the_dark_desc']");
attachHoverListeners("[id^='champ_knife_in_the_dark']", "[id^='champ_knife_in_the_dark_desc']");

//Bone Spearman Skills

attachHoverListeners("[id^='vet_spear_thrust']", "[id^='vet_spear_thrust_desc']");
attachHoverListeners("[id^='champ_spear_thrust']", "[id^='champ_spear_thrust_desc']");

attachHoverListeners("[id^='vet_impale']", "[id^='vet_impale_desc']");
attachHoverListeners("[id^='champ_impale']", "[id^='champ_impale_desc']");

//Bone Captain Skills

attachHoverListeners("[id^='vet_crushing_blow']", "[id^='vet_crushing_blow_desc']");
attachHoverListeners("[id^='champ_crushing_blow']", "[id^='champ_crushing_blow_desc']");

attachHoverListeners("[id^='vet_ground_pound']", "[id^='vet_ground_pound_desc']");
attachHoverListeners("[id^='champ_ground_pound']", "[id^='champ_ground_pound_desc']");

//Bone Bearer Skills

attachHoverListeners("[id^='champ_defend_the_icon']", "[id^='champ_defend_the_icon_desc']");
attachHoverListeners("[id^='champ_wicked_surge']", "[id^='champ_wicked_surge_desc']");
attachHoverListeners("[id^='champ_unholy_rally']", "[id^='champ_unholy_rally_desc']");
attachHoverListeners("[id^='champ_bone_bearer_passive']", "[id^='champ_bone_bearer_passive_desc']");

//Weald Skills

//Fungal Scratcher Skills

attachHoverListeners("[id^='app_groping_swipe']", "[id^='app_groping_swipe_desc']");
attachHoverListeners("[id^='vet_groping_swipe']", "[id^='vet_groping_swipe_desc']");
attachHoverListeners("[id^='champ_groping_swipe']", "[id^='champ_groping_swipe_desc']");

attachHoverListeners("[id^='app_rend_the_marked']", "[id^='app_rend_the_marked_desc']");
attachHoverListeners("[id^='vet_rend_the_marked']", "[id^='vet_rend_the_marked_desc']");
attachHoverListeners("[id^='champ_rend_the_marked']", "[id^='champ_rend_the_marked_desc']");

attachHoverListeners("[id^='app_harmless_swipe']", "[id^='app_harmless_swipe_desc']");
attachHoverListeners("[id^='vet_harmless_swipe']", "[id^='vet_harmless_swipe_desc']");
attachHoverListeners("[id^='champ_harmless_swipe']", "[id^='champ_harmless_swipe_desc']");

//Fungal Artillery Skills

attachHoverListeners("[id^='app_mark_prey']", "[id^='app_mark_prey_desc']");
attachHoverListeners("[id^='vet_mark_prey']", "[id^='vet_mark_prey_desc']");
attachHoverListeners("[id^='champ_mark_prey']", "[id^='champ_mark_prey_desc']");

attachHoverListeners("[id^='app_rain_of_blight']", "[id^='app_rain_of_blight_desc']");
attachHoverListeners("[id^='vet_rain_of_blight']", "[id^='vet_rain_of_blight_desc']");
attachHoverListeners("[id^='champ_rain_of_blight']", "[id^='champ_rain_of_blight_desc']");

attachHoverListeners("[id^='app_escape_cloud']", "[id^='app_escape_cloud_desc']");
attachHoverListeners("[id^='vet_escape_cloud']", "[id^='vet_escape_cloud_desc']");
attachHoverListeners("[id^='champ_escape_cloud']", "[id^='champ_escape_cloud_desc']");

//Rabid Gnasher Skills

attachHoverListeners("[id^='app_rabid_rush']", "[id^='app_rabid_rush_desc']");
attachHoverListeners("[id^='vet_rabid_rush']", "[id^='vet_rabid_rush_desc']");
attachHoverListeners("[id^='champ_rabid_rush']", "[id^='champ_rabid_rush_desc']");

//Ectoplasm Skills

attachHoverListeners("[id^='app_slime']", "[id^='app_slime_desc']");
attachHoverListeners("[id^='vet_slime']", "[id^='vet_slime_desc']");
attachHoverListeners("[id^='champ_slime']", "[id^='champ_slime_desc']");

attachHoverListeners("[id^='app_cytokinesis(small)']", "[id^='app_cytokinesis(small)_desc']");
attachHoverListeners("[id^='vet_cytokinesis(small)']", "[id^='vet_cytokinesis(small)_desc']");
attachHoverListeners("[id^='champ_cytokinesis(small)']", "[id^='champ_cytokinesis(small)_desc']");

attachHoverListeners("[id^='app_ectoplasmic_profusion']", "[id^='app_ectoplasmic_profusion_desc']");
attachHoverListeners("[id^='vet_ectoplasmic_profusion']", "[id^='vet_ectoplasmic_profusion_desc']");
attachHoverListeners("[id^='champ_ectoplasmic_profusion']", "[id^='champ_ectoplasmic_profusion_desc']");

//Large Ectoplasm Skills

attachHoverListeners("[id^='app_big_slime']", "[id^='app_big_slime_desc']");
attachHoverListeners("[id^='vet_big_slime']", "[id^='vet_big_slime_desc']");
attachHoverListeners("[id^='champ_big_slime']", "[id^='champ_big_slime_desc']");

attachHoverListeners("[id^='app_slimesmack']", "[id^='app_slimesmack_desc']");
attachHoverListeners("[id^='vet_slimesmack']", "[id^='vet_slimesmack_desc']");
attachHoverListeners("[id^='champ_slimesmack']", "[id^='champ_slimesmack_desc']");;

attachHoverListeners("[id^='app_cytokinesis(big)']", "[id^='app_cytokinesis(big)_desc']");
attachHoverListeners("[id^='vet_cytokinesis(big)']", "[id^='vet_cytokinesis(big)_desc']");
attachHoverListeners("[id^='champ_cytokinesis(big)']", "[id^='champ_cytokinesis(big)_desc']");

//Crone Skills

attachHoverListeners("[id^='vet_curse_of_vulnerability']", "[id^='vet_curse_of_vulnerability_desc']");
attachHoverListeners("[id^='champ_curse_of_vulnerability']", "[id^='champ_curse_of_vulnerability_desc']");

attachHoverListeners("[id^='vet_fetid_censer']", "[id^='vet_fetid_censer_desc']");
attachHoverListeners("[id^='champ_fetid_censer']", "[id^='champ_fetid_censer_desc']");

attachHoverListeners("[id^='vet_embrace_the_dark']", "[id^='vet_embrace_the_dark_desc']");
attachHoverListeners("[id^='champ_embrace_the_dark']", "[id^='champ_embrace_the_dark_desc']");

//Unclean Giant Skills

attachHoverListeners("[id^='vet_treebranch_smackdown']", "[id^='vet_treebranch_smackdown_desc']");
attachHoverListeners("[id^='champ_treebranch_smackdown']", "[id^='champ_treebranch_smackdown_desc']");

attachHoverListeners("[id^='vet_confusion_spores']", "[id^='vet_confusion_spores_desc']");
attachHoverListeners("[id^='champ_confusion_spores']", "[id^='champ_confusion_spores_desc']");

attachHoverListeners("[id^='vet_poison_spores']", "[id^='vet_poison_spores_desc']");
attachHoverListeners("[id^='champ_poison_spores']", "[id^='champ_poison_spores_desc']");

//Hateful Virago Skills

attachHoverListeners("[id^='champ_ruinous_hex']", "[id^='champ_ruinous_hex_desc']");
attachHoverListeners("[id^='champ_putrefying_breath']", "[id^='champ_putrefying_breath_desc']");
attachHoverListeners("[id^='champ_from_death_comes_life']", "[id^='champ_from_death_comes_life_desc']");

//Necrotic Fungus Skills

attachHoverListeners("[id^='champ_necrotic_fungus_passive']", "[id^='champ_necrotic_fungus_passive_desc']");

//Warrens Skills

  //Swine Chopper Skills

  attachHoverListeners("[id^='app_butcher_cut']", "[id^='app_butcher_cut_desc']");
  attachHoverListeners("[id^='app_ball_and_chain']", "[id^='app_ball_and_chain_desc']");
  attachHoverListeners("[id^='vet_butcher_cut']", "[id^='vet_butcher_cut_desc']");
  attachHoverListeners("[id^='vet_ball_and_chain']", "[id^='vet_ball_and_chain_desc']");
  attachHoverListeners("[id^='champ_butcher_cut']", "[id^='champ_butcher_cut_desc']");
  attachHoverListeners("[id^='champ_ball_and_chain']", "[id^='champ_ball_and_chain_desc']");

  //Swine Wretch Skills

  attachHoverListeners("[id^='app_vomit']", "[id^='app_vomit_desc']");
  attachHoverListeners("[id^='vet_vomit']", "[id^='vet_vomit_desc']");
  attachHoverListeners("[id^='champ_vomit']", "[id^='champ_vomit_desc']");

  //Swine Drummer Skills

  attachHoverListeners("[id^='app_drums_of_debilitation']", "[id^='app_drums_of_debilitation_desc']");
  attachHoverListeners("[id^='vet_drums_of_debilitation']", "[id^='vet_drums_of_debilitation_desc']");
  attachHoverListeners("[id^='champ_drums_of_debilitation']", "[id^='champ_drums_of_debilitation_desc']");
  attachHoverListeners("[id^='app_drums_of_doom']", "[id^='app_drums_of_doom_desc']");
  attachHoverListeners("[id^='vet_drums_of_doom']", "[id^='vet_drums_of_doom_desc']");
  attachHoverListeners("[id^='champ_drums_of_doom']", "[id^='champ_drums_of_doom_desc']");

  //Swine Slasher Skills

  attachHoverListeners("[id^='app_hook_where_it_hurts']", "[id^='app_hook_where_it_hurts_desc']");
  attachHoverListeners("[id^='vet_hook_where_it_hurts']", "[id^='vet_hook_where_it_hurts_desc']");
  attachHoverListeners("[id^='champ_hook_where_it_hurts']", "[id^='champ_hook_where_it_hurts_desc']");

  //Carrion Eater Skills

  attachHoverListeners("[id^='app_munch']", "[id^='app_munch_desc']");
  attachHoverListeners("[id^='vet_munch']", "[id^='vet_munch_desc']");
  attachHoverListeners("[id^='champ_munch']", "[id^='champ_munch_desc']");

  //Big Carrion Eater Skills

  attachHoverListeners("[id^='vet_weaken_prey']", "[id^='vet_weaken_prey_desc']");
  attachHoverListeners("[id^='champ_weaken_prey']", "[id^='champ_weaken_prey_desc']");
  attachHoverListeners("[id^='vet_tentacle_devour']", "[id^='vet_tentacle_devour_desc']");
  attachHoverListeners("[id^='champ_tentacle_devour']", "[id^='champ_tentacle_devour_desc']");

  //Swinetaur Skills

  attachHoverListeners("[id^='vet_pig_spear']", "[id^='vet_pig_spear_desc']");
  attachHoverListeners("[id^='vet_boar_rush']", "[id^='vet_boar_rush_desc']");
  attachHoverListeners("[id^='vet_trot_retreat']", "[id^='vet_trot_retreat_desc']");
  attachHoverListeners("[id^='vet_crunching_backhand']", "[id^='vet_crunching_backhand_desc']");
  attachHoverListeners("[id^='champ_pig_spear']", "[id^='champ_pig_spear_desc']");
  attachHoverListeners("[id^='champ_boar_rush']", "[id^='champ_boar_rush_desc']");
  attachHoverListeners("[id^='champ_trot_retreat']", "[id^='champ_trot_retreat_desc']");
  attachHoverListeners("[id^='champ_crunching_backhand']", "[id^='champ_crunching_backhand_desc']");

  //Swine Skiver Skills
  attachHoverListeners("[id^='champ_spit_to_roast']", "[id^='champ_spit_to_roast_desc']");
  attachHoverListeners("[id^='champ_cripple_them']", "[id^='champ_cripple_them_desc']");
  attachHoverListeners("[id^='champ_goring_flight']", "[id^='champ_goring_flight_desc']");


//Cove Skills

//Pelagic Grouper Skills 

attachHoverListeners("[id^='app_seaward_slash']", "[id^='app_seaward_slash_desc']");
attachHoverListeners("[id^='vet_seaward_slash']", "[id^='vet_seaward_slash_desc']");
attachHoverListeners("[id^='champ_seaward_slash']", "[id^='champ_seaward_slash_desc']");

attachHoverListeners("[id^='app_spearfishing']", "[id^='app_spearfishing_desc']");
attachHoverListeners("[id^='vet_spearfishing']", "[id^='vet_spearfishing_desc']");
attachHoverListeners("[id^='champ_spearfishing']", "[id^='champ_spearfishing_desc']");

//Pelagic Guardian Skills 

attachHoverListeners("[id^='app_octocestus']", "[id^='app_octocestus_desc']");
attachHoverListeners("[id^='vet_octocestus']", "[id^='vet_octocestus_desc']");
attachHoverListeners("[id^='champ_octocestus']", "[id^='champ_octocestus_desc']");

attachHoverListeners("[id^='app_barnacle_barrier']", "[id^='app_barnacle_barrier_desc']");
attachHoverListeners("[id^='vet_barnacle_barrier']", "[id^='vet_barnacle_barrier_desc']");
attachHoverListeners("[id^='champ_barnacle_barrier']", "[id^='champ_barnacle_barrier_desc']");

//Pelagic Shaman Skills

attachHoverListeners("[id^='app_stress_wave']", "[id^='app_stress_wave_desc']");
attachHoverListeners("[id^='vet_stress_wave']", "[id^='vet_stress_wave_desc']");
attachHoverListeners("[id^='champ_stress_wave']", "[id^='champ_stress_wave_desc']");

attachHoverListeners("[id^='app_call_of_the_deep']", "[id^='app_call_of_the_deep_desc']");
attachHoverListeners("[id^='vet_call_of_the_deep']", "[id^='vet_call_of_the_deep_desc']");
attachHoverListeners("[id^='champ_call_of_the_deep']", "[id^='champ_call_of_the_deep_desc']");

attachHoverListeners("[id^='app_ceremonial_cut']", "[id^='app_ceremonial_cut_desc']");
attachHoverListeners("[id^='vet_ceremonial_cut']", "[id^='vet_ceremonial_cut_desc']");
attachHoverListeners("[id^='champ_ceremonial_cut']", "[id^='champ_ceremonial_cut_desc']");

attachHoverListeners("[id^='app_sea_breeze']", "[id^='app_sea_breeze_desc']");
attachHoverListeners("[id^='vet_sea_breeze']", "[id^='vet_sea_breeze_desc']");
attachHoverListeners("[id^='champ_sea_breeze']", "[id^='champ_sea_breeze_desc']");

//Deep Stinger Skills 

attachHoverListeners("[id^='app_shocker']", "[id^='app_shocker_desc']");
attachHoverListeners("[id^='vet_shocker']", "[id^='vet_shocker_desc']");
attachHoverListeners("[id^='champ_shocker']", "[id^='champ_shocker_desc']");

attachHoverListeners("[id^='app_salty_gouge']", "[id^='app_salty_gouge_desc']");
attachHoverListeners("[id^='vet_salty_gouge']", "[id^='vet_salty_gouge_desc']");
attachHoverListeners("[id^='champ_salty_gouge']", "[id^='champ_salty_gouge_desc']");

//Drowned Thrall Skills 

attachHoverListeners("[id^='app_gargling_grab']", "[id^='app_gargling_grab_desc']");
attachHoverListeners("[id^='vet_gargling_grab']", "[id^='vet_gargling_grab_desc']");
attachHoverListeners("[id^='champ_gargling_grab']", "[id^='champ_gargling_grab_desc']");

attachHoverListeners("[id^='app_the_revenge']", "[id^='app_the_revenge_desc']");
attachHoverListeners("[id^='vet_the_revenge']", "[id^='vet_the_revenge_desc']");
attachHoverListeners("[id^='champ_the_revenge']", "[id^='champ_the_revenge_desc']");

//Sea Maggot Skills 

attachHoverListeners("[id^='app_brine']", "[id^='app_brine_desc']");
attachHoverListeners("[id^='vet_brine']", "[id^='vet_brine_desc']");
attachHoverListeners("[id^='champ_brine']", "[id^='champ_brine_desc']");

//Uca Crusher Skills

attachHoverListeners("[id^='vet_arterial_pinch']", "[id^='vet_arterial_pinch_desc']");
attachHoverListeners("[id^='champ_arterial_pinch']", "[id^='champ_arterial_pinch_desc']");

attachHoverListeners("[id^='vet_tidal_slam']", "[id^='vet_tidal_slam_desc']");
attachHoverListeners("[id^='champ_tidal_slam']", "[id^='champ_tidal_slam_desc']");

//Squiffy Ghast Skills


attachHoverListeners("[id^='champ_maddening_shanty']", "[id^='champ_maddening_shanty_desc']");
attachHoverListeners("[id^='champ_offkilter_jig']", "[id^='champ_offkilter_jig_desc']");



//Shared Skills

//Brigand Cutthroat Skills

attachHoverListeners("[id^='app_slice_and_dice']", "[id^='app_slice_and_dice_desc']");
attachHoverListeners("[id^='vet_slice_and_dice']", "[id^='vet_slice_and_dice_desc']");
attachHoverListeners("[id^='champ_slice_and_dice']", "[id^='champ_slice_and_dice_desc']");

attachHoverListeners("[id^='app_uppercut_slice']", "[id^='app_uppercut_slice_desc']");
attachHoverListeners("[id^='vet_uppercut_slice']", "[id^='vet_uppercut_slice_desc']");
attachHoverListeners("[id^='champ_uppercut_slice']", "[id^='champ_uppercut_slice_desc']");

attachHoverListeners("[id^='app_shank']", "[id^='app_shank_desc']");
attachHoverListeners("[id^='vet_shank']", "[id^='vet_shank_desc']");
attachHoverListeners("[id^='champ_shank']", "[id^='champ_shank_desc']");

attachHoverListeners("[id^='app_harmless_poke']", "[id^='app_harmless_poke_desc']");
attachHoverListeners("[id^='vet_harmless_poke']", "[id^='vet_harmless_poke_desc']");
attachHoverListeners("[id^='champ_harmless_poke']", "[id^='champ_harmless_poke_desc']");

//Brigand bloodletter Skills

attachHoverListeners("[id^='app_rain_of_whips']", "[id^='app_rain_of_whips_desc']");
attachHoverListeners("[id^='vet_rain_of_whips']", "[id^='vet_rain_of_whips_desc']");
attachHoverListeners("[id^='champ_rain_of_whips']", "[id^='champ_rain_of_whips_desc']");

attachHoverListeners("[id^='app_punishment']", "[id^='app_punishment_desc']");
attachHoverListeners("[id^='vet_punishment']", "[id^='vet_punishment_desc']");
attachHoverListeners("[id^='champ_punishment']", "[id^='champ_punishment_desc']");

attachHoverListeners("[id^='app_point_blank_shot']", "[id^='app_point_blank_shot_desc']");
attachHoverListeners("[id^='vet_point_blank_shot']", "[id^='vet_point_blank_shot_desc']");
attachHoverListeners("[id^='champ_point_blank_shot']", "[id^='champ_point_blank_shot_desc']");

//Brigand Fusilier Skills

attachHoverListeners("[id^='app_blanket_fire']", "[id^='app_blanket_fire_desc']");
attachHoverListeners("[id^='vet_blanket_fire']", "[id^='vet_blanket_fire_desc']");
attachHoverListeners("[id^='champ_blanket_fire']", "[id^='champ_blanket_fire_desc']");

attachHoverListeners("[id^='app_rushed_shot']", "[id^='app_rushed_shot_desc']");
attachHoverListeners("[id^='vet_rushed_shot']", "[id^='vet_rushed_shot_desc']");
attachHoverListeners("[id^='champ_rushed_shot']", "[id^='champ_rushed_shot_desc']");

//Cultist Brawler Skills

attachHoverListeners("[id^='app_rend_for_the_old_gods']", "[id^='app_rend_for_the_old_gods_desc']");
attachHoverListeners("[id^='vet_rend_for_the_old_gods']", "[id^='vet_rend_for_the_old_gods_desc']");
attachHoverListeners("[id^='champ_rend_for_the_old_gods']", "[id^='champ_rend_for_the_old_gods_desc']");

attachHoverListeners("[id^='app_stumbling_scratch']", "[id^='app_stumbling_scratch_desc']");
attachHoverListeners("[id^='vet_stumbling_scratch']", "[id^='vet_stumbling_scratch_desc']");
attachHoverListeners("[id^='champ_stumbling_scratch']", "[id^='champ_stumbling_scratch_desc']");

//Cultist Acolyte Skills

attachHoverListeners("[id^='app_eldritch_pull']", "[id^='app_eldritch_pull_desc']");
attachHoverListeners("[id^='vet_eldritch_pull']", "[id^='vet_eldritch_pull_desc']");
attachHoverListeners("[id^='champ_eldritch_pull']", "[id^='champ_eldritch_pull_desc']");

attachHoverListeners("[id^='app_eldritch_push']", "[id^='app_eldritch_push_desc']");
attachHoverListeners("[id^='vet_eldritch_push']", "[id^='vet_eldritch_push_desc']");
attachHoverListeners("[id^='champ_eldritch_push']", "[id^='champ_eldritch_push_desc']");

attachHoverListeners("[id^='app_stressful_incantation']", "[id^='app_stressful_incantation_desc']");
attachHoverListeners("[id^='vet_stressful_incantation']", "[id^='vet_stressful_incantation_desc']");
attachHoverListeners("[id^='champ_stressful_incantation']", "[id^='champ_stressful_incantation_desc']");

//Madman Skills

attachHoverListeners("[id^='app_accusation']", "[id^='app_accusation_desc']");
attachHoverListeners("[id^='vet_accusation']", "[id^='vet_accusation_desc']");
attachHoverListeners("[id^='champ_accusation']", "[id^='champ_accusation_desc']");

attachHoverListeners("[id^='app_doomsay']", "[id^='app_doomsay_desc']");
attachHoverListeners("[id^='vet_doomsay']", "[id^='vet_doomsay_desc']");
attachHoverListeners("[id^='champ_doomsay']", "[id^='champ_doomsay_desc']");

//Webber Skills

attachHoverListeners("[id^='app_web']", "[id^='app_web_desc']");
attachHoverListeners("[id^='vet_web']", "[id^='vet_web_desc']");
attachHoverListeners("[id^='champ_web']", "[id^='champ_web_desc']");

attachHoverListeners("[id^='app_bite(webber)']", "[id^='app_bite(webber)_desc']");
attachHoverListeners("[id^='vet_bite(webber)']", "[id^='vet_bite(webber)_desc']");
attachHoverListeners("[id^='champ_bite(webber)']", "[id^='champ_bite(webber)_desc']");

//Spitter Skills

attachHoverListeners("[id^='app_spit']", "[id^='app_spit_desc']");
attachHoverListeners("[id^='vet_spit']", "[id^='vet_spit_desc']");
attachHoverListeners("[id^='champ_spit']", "[id^='champ_spit_desc']");

attachHoverListeners("[id^='app_bite(spitter)']", "[id^='app_bite(spitter)_desc']");
attachHoverListeners("[id^='vet_bite(spitter)']", "[id^='vet_bite(spitter)_desc']");
attachHoverListeners("[id^='champ_bite(spitter)']", "[id^='champ_bite(spitter)_desc']");

//Maggot Skills

attachHoverListeners("[id^='app_grave_nibble']", "[id^='app_grave_nibble_desc']");
attachHoverListeners("[id^='vet_grave_nibble']", "[id^='vet_grave_nibble_desc']");
attachHoverListeners("[id^='champ_grave_nibble']", "[id^='champ_grave_nibble_desc']");

//Bone Rabble Skills

attachHoverListeners("[id^='app_bump_in_the_night']", "[id^='app_bump_in_the_night_desc']");
attachHoverListeners("[id^='vet_bump_in_the_night']", "[id^='vet_bump_in_the_night_desc']");
attachHoverListeners("[id^='champ_bump_in_the_night']", "[id^='champ_bump_in_the_night_desc']");

attachHoverListeners("[id^='app_tic-toc']", "[id^='app_tic-toc_desc']");
attachHoverListeners("[id^='vet_tic-toc']", "[id^='vet_tic-toc_desc']");
attachHoverListeners("[id^='champ_tic-toc']", "[id^='champ_tic-toc_desc']");

//Gargoyle Skills

attachHoverListeners("[id^='vet_flurry_of_claws']", "[id^='vet_flurry_of_claws_desc']");
attachHoverListeners("[id^='champ_flurry_of_claws']", "[id^='champ_flurry_of_claws_desc']");

attachHoverListeners("[id^='vet_lash_of_the_tail']", "[id^='vet_lash_of_the_tail_desc']");
attachHoverListeners("[id^='champ_lash_of_the_tail']", "[id^='champ_lash_of_the_tail_desc']");

//Ghoul Skills 

attachHoverListeners("[id^='vet_rend']", "[id^='vet_rend_desc']");
attachHoverListeners("[id^='champ_rend']", "[id^='champ_rend_desc']");

attachHoverListeners("[id^='vet_skull_toss']", "[id^='vet_skull_toss_desc']");
attachHoverListeners("[id^='champ_skull_toss']", "[id^='champ_skull_toss_desc']");

attachHoverListeners("[id^='vet_howl']", "[id^='vet_howl_desc']");
attachHoverListeners("[id^='champ_howl']", "[id^='champ_howl_desc']");

//Brigand Raider Skills

attachHoverListeners("[id^='darkest_slice_and_dice']", "[id^='darkest_slice_and_dice_desc']");
attachHoverListeners("[id^='darkest_uppercut_slice']", "[id^='darkest_uppercut_slice_desc']");
attachHoverListeners("[id^='darkest_shank']", "[id^='darkest_shank_desc']");
attachHoverListeners("[id^='darkest_harmless_poke']", "[id^='darkest_harmless_poke_desc']");

//Brigand Hunter Skills

attachHoverListeners("[id^='darkest_blanket_fire']", "[id^='darkest_blanket_fire_desc']");
attachHoverListeners("[id^='darkest_rushed_shot']", "[id^='darkest_rushed_shot_desc']");

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



