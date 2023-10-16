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


  //Provisions

  attachHoverListeners("[id^='food_box']", "[id^='food_desc']");
  attachHoverListeners("[id^='shovel_box']", "[id^='shovel_desc']");
  attachHoverListeners("[id^='antivenom_box']", "[id^='antivenom_desc']");
  attachHoverListeners("[id^='bandage_box']", "[id^='bandage_desc']");
  attachHoverListeners("[id^='medicinal_herbs_box']", "[id^='medicinal_herbs_desc']");
  attachHoverListeners("[id='skeleton_key_box']", "[id='skeleton_key_desc']");
  attachHoverListeners("[id^='holy_water_box']", "[id^='holy_water_desc']");
  attachHoverListeners("[id^='laudanum_box']", "[id^='laudanum_desc']");
  attachHoverListeners("[id^='torch_box']", "[id^='torch_desc']");
  attachHoverListeners("[id^='dog_treats_box']", "[id^='dog_treats_desc']");
  attachHoverListeners("[id='firewood_box']", "[id='firewood_desc']");
  attachHoverListeners("[id='the_blood_box']", "[id='the_blood_desc']");
  attachHoverListeners("[id='the_cure_box']", "[id='the_cure_desc']");
  attachHoverListeners("[id='shard_dust_box']", "[id='shard_dust_desc']");
  attachHoverListeners("[id='aegis_scale_box']", "[id='aegis_scale_desc']");

  //Traps

  attachHoverListeners("[id='ruins_trap_info']", "[id='ruins_trap_info_desc']");
  attachHoverListeners("[id='weald_trap_info']", "[id='weald_trap_info_desc']");
  attachHoverListeners("[id='warrens_trap_info']", "[id='warrens_trap_info_desc']");
  attachHoverListeners("[id='cove_trap_info']", "[id='cove_trap_info_desc']");
  attachHoverListeners("[id='courtyard_trap_info']", "[id='courtyard_trap_info_desc']");

  //Loot

  attachHoverListeners("[id='gem_info']", "[id='gem_info_desc']");
  attachHoverListeners("[id='heirloom_trade']", "[id='heirloom_trade_desc']");

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

  attachHoverListeners("[id='blueprint_box']", "[id^='blueprint_desc']");
  attachHoverListeners("[id='baron_invite_box']", "[id^='baron_invite_desc']");
  attachHoverListeners("[id='viscount_invite_box']", "[id^='viscount_invite_desc']");
  attachHoverListeners("[id='countess_invite_box']", "[id^='countess_invite_desc']");
  attachHoverListeners("[id='shard_box']", "[id^='shard_desc']");
  attachHoverListeners("[id='memory_box']", "[id^='memory_desc']");


//Quirk Info

attachHoverListeners("[id='prismatic_quirk_info']", "[id='prismatic_quirk_info_desc']");
attachHoverListeners("[id='quirk_overview']", "[id='quirk_overview_desc']");


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
  attachHoverListeners("[id^='twilight_dreamer']", "[id^='twilight_dreamer_desc']");

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
  attachHoverListeners("[id='flagellant']", "[id='flagellant_desc']");

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
  attachHoverListeners("[id^='shard_mercenary']", "[id^='shard_mercenary_desc']");

  //Prismatic
  attachHoverListeners("[id^='prismatic_isolation']", "[id^='prismatic_isolation_desc']");
  attachHoverListeners("[id^='prismatic_stability']", "[id^='prismatic_stability_desc']");
  attachHoverListeners("[id^='prismatic_solidity']", "[id^='prismatic_solidity_desc']");
  attachHoverListeners("[id^='prismatic_coagulation']", "[id^='prismatic_coagulation_desc']");
  attachHoverListeners("[id^='prismatic_purity']", "[id^='prismatic_purity_desc']");
  attachHoverListeners("[id^='prismatic_calm']", "[id^='prismatic_calm_desc']");
  attachHoverListeners("[id^='prismatic_force']", "[id^='prismatic_force_desc']");
  attachHoverListeners("[id^='prismatic_speed']", "[id^='prismatic_speed_desc']");
  attachHoverListeners("[id^='prismatic_precision']", "[id^='prismatic_precision_desc']");
  attachHoverListeners("[id^='prismatic_eye']", "[id^='prismatic_eye_desc']");
  attachHoverListeners("[id^='husk_slayer']", "[id^='husk_slayer_desc']");
  attachHoverListeners("[id^='scythemaster']", "[id^='scythemaster_desc']");


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

attachHoverListeners("[id ='app_slime']", "[id ='app_slime_desc']");
attachHoverListeners("[id ='vet_slime']", "[id ='vet_slime_desc']");
attachHoverListeners("[id ='champ_slime']", "[id ='champ_slime_desc']");

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
attachHoverListeners("[id='champ_spit']", "[id='champ_spit_desc']");

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

attachHoverListeners("[id='vet_rend']", "[id='vet_rend_desc']");
attachHoverListeners("[id='champ_rend']", "[id='champ_rend_desc']");

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

//Curios

attachHoverListeners("[id='universal_forced_interaction']", "[id='universal_forced_interaction_desc']");

//Ruins 

attachHoverListeners("[id='alchemy_table_torch']", "[id='alchemy_table_torch_result']");
attachHoverListeners("[id='alchemy_table_medicinal_herbs']", "[id='alchemy_table_medicinal_herbs_result']");
attachHoverListeners("[id='alchemy_table_touch']", "[id='alchemy_table_touch_result']");

attachHoverListeners("[id='altar_of_light_holy_water']", "[id='altar_of_light_holy_water_result']");
attachHoverListeners("[id='altar_of_light_touch']", "[id='altar_of_light_touch_result']");

attachHoverListeners("[id='bookshelf_touch']", "[id='bookshelf_touch_result']");

attachHoverListeners("[id='confession_booth_holy_water']", "[id='confession_booth_holy_water_result']");
attachHoverListeners("[id='confession_booth_touch']", "[id='confession_booth_touch_result']");

attachHoverListeners("[id='decorative_urn_holy_water']", "[id='decorative_urn_holy_water_result']");
attachHoverListeners("[id='decorative_urn_shovel']", "[id='decorative_urn_shovel_result']");
attachHoverListeners("[id='decorative_urn_touch']", "[id='decorative_urn_touch_result']");

attachHoverListeners("[id='holy_fountain_holy_water']", "[id='holy_fountain_holy_water_result']");
attachHoverListeners("[id='holy_fountain_touch']", "[id='holy_fountain_touch_result']");

attachHoverListeners("[id='iron_maiden_medicinal_herbs']", "[id='iron_maiden_medicinal_herbs_result']");
attachHoverListeners("[id='iron_maiden_touch']", "[id='iron_maiden_touch_result']");

attachHoverListeners("[id='locked_display_cabinet_key']", "[id='locked_display_cabinet_key_result']");
attachHoverListeners("[id='locked_display_cabinet_shovel']", "[id='locked_display_cabinet_shovel_result']");
attachHoverListeners("[id='locked_display_cabinet_touch']", "[id='locked_display_cabinet_touch_result']");

attachHoverListeners("[id='locked_sarcophagus_key']", "[id='locked_sarcophagus_key_result']");
attachHoverListeners("[id='locked_sarcophagus_shovel']", "[id='locked_sarcophagus_shovel_result']");
attachHoverListeners("[id='locked_sarcophagus_touch']", "[id='locked_sarcophagus_touch_result']");

attachHoverListeners("[id='sarcophagus_touch']", "[id='sarcophagus_touch_result']");

attachHoverListeners("[id='suit_of_armor_touch']", "[id='suit_of_armor_touch_result']");


//Weald

attachHoverListeners("[id='ancient_coffin_touch']", "[id='ancient_coffin_touch_result']");

attachHoverListeners("[id='beast_carcass_medicinal_herbs']", "[id='beast_carcass_medicinal_herbs_result']");
attachHoverListeners("[id='beast_carcass_touch']", "[id='beast_carcass_touch_result']");

attachHoverListeners("[id='eerie_spiderweb_bandage']", "[id='eerie_spiderweb_bandage_result']");
attachHoverListeners("[id='eerie_spiderweb_touch']", "[id='eerie_spiderweb_touch_result']");

attachHoverListeners("[id='left_luggage_key']", "[id='left_luggage_key_result']");
attachHoverListeners("[id='left_luggage_antivenom']", "[id='left_luggage_antivenom_result']");
attachHoverListeners("[id='left_luggage_touch']", "[id='left_luggage_touch_result']");

attachHoverListeners("[id='mummified_remains_bandage']", "[id='mummified_remains_bandage_result']");
attachHoverListeners("[id='mummified_remains_touch']", "[id='mummified_remains_touch_result']");

attachHoverListeners("[id='old_tree_antivenom']", "[id='old_tree_antivenom_result']");
attachHoverListeners("[id='old_tree_touch']", "[id='old_tree_touch_result']");

attachHoverListeners("[id='pristine_fountain_holy_water']", "[id='pristine_fountain_holy_water_result']");
attachHoverListeners("[id='pristine_fountain_touch']", "[id='pristine_fountain_touch_result']");

attachHoverListeners("[id='shallow_grave_shovel']", "[id='shallow_grave_shovel_result']");
attachHoverListeners("[id='shallow_grave_touch']", "[id='shallow_grave_touch_result']");

attachHoverListeners("[id='traveler\\'s_tent_touch']", "[id='traveler\\'s_tent_touch_result']");

attachHoverListeners("[id='troubling_effigy_holy_water']", "[id='troubling_effigy_holy_water_result']");
attachHoverListeners("[id='troubling_effigy_touch']", "[id='troubling_effigy_touch_result']");

attachHoverListeners("[id='brigand\\'s_tent_touch']", "[id='brigand\\'s_tent_touch_result']");

attachHoverListeners("[id='bandit\\'s_trapped_chest_key']", "[id='bandit\\'s_trapped_chest_key_result']");
attachHoverListeners("[id='bandit\\'s_trapped_chest_touch']", "[id='bandit\\'s_trapped_chest_touch_result']");

attachHoverListeners("[id='transcendent_terror_touch']", "[id='transcendent_terror_touch_result']");

//Warrens

attachHoverListeners("[id='bone_altar_touch']", "[id='bone_altar_touch_result']");

attachHoverListeners("[id='dinner_cart_medicinal_herbs']", "[id='dinner_cart_medicinal_herbs_result']");
attachHoverListeners("[id='dinner_cart_touch']", "[id='dinner_cart_touch_result']");

attachHoverListeners("[id='makeshift_dining_table_medicinal_herbs']", "[id='makeshift_dining_table_medicinal_herbs_result']");
attachHoverListeners("[id='makeshift_dining_table_touch']", "[id='makeshift_dining_table_touch_result']");

attachHoverListeners("[id='moonshine_barrel_medicinal_herbs']", "[id='moonshine_barrel_medicinal_herbs_result']");
attachHoverListeners("[id='moonshine_barrel_touch']", "[id='moonshine_barrel_touch_result']");

attachHoverListeners("[id='occult_scrawlings_holy_water']", "[id='occult_scrawlings_holy_water_result']");
attachHoverListeners("[id='occult_scrawlings_touch']", "[id='occult_scrawlings_touch_result']");

attachHoverListeners("[id='pile_of_bones_holy_water']", "[id='pile_of_bones_holy_water_result']");
attachHoverListeners("[id='pile_of_bones_touch']", "[id='pile_of_bones_touch_result']");

attachHoverListeners("[id='pile_of_scrolls_torch']", "[id='pile_of_scrolls_torch_result']");
attachHoverListeners("[id='pile_of_scrolls_touch']", "[id='pile_of_scrolls_touch_result']");

attachHoverListeners("[id='rack_of_blades_bandage']", "[id='rack_of_blades_bandage_result']");
attachHoverListeners("[id='rack_of_blades_touch']", "[id='rack_of_blades_touch_result']");

attachHoverListeners("[id='sacrificial_stone_touch']", "[id='sacrificial_stone_touch_result']");

//Cove

attachHoverListeners("[id='barnacle_crusted_chest_shovel']", "[id='barnacle_crusted_chest_shovel_result']");
attachHoverListeners("[id='barnacle_crusted_chest_touch']", "[id='barnacle_crusted_chest_touch_result']");

attachHoverListeners("[id='bas-relief_shovel']", "[id='bas-relief_shovel_result']");
attachHoverListeners("[id='bas-relief_touch']", "[id='bas-relief_touch_result']");

attachHoverListeners("[id='brackish_tide_pool_antivenom']", "[id='brackish_tide_pool_antivenom_result']");
attachHoverListeners("[id='brackish_tide_pool_touch']", "[id='brackish_tide_pool_touch_result']");

attachHoverListeners("[id='fish_carcass_medicinal_herbs']", "[id='fish_carcass_medicinal_herbs_result']");
attachHoverListeners("[id='fish_carcass_touch']", "[id='fish_carcass_touch_result']");

attachHoverListeners("[id='fish_idol_holy_water']", "[id='fish_idol_holy_water_result']");
attachHoverListeners("[id='fish_idol_touch']", "[id='fish_idol_touch_result']");

attachHoverListeners("[id='eerie_coral_medicinal_herbs']", "[id='eerie_coral_medicinal_herbs_result']");
attachHoverListeners("[id='eerie_coral_touch']", "[id='eerie_coral_touch_result']");

attachHoverListeners("[id='giant_oyster_shovel']", "[id='giant_oyster_shovel_result']");
attachHoverListeners("[id='giant_oyster_dog_treat']", "[id='giant_oyster_dog_treat_result']");
attachHoverListeners("[id='giant_oyster_touch']", "[id='giant_oyster_touch_result']");

attachHoverListeners("[id='ship\\'s_figurehead_touch']", "[id='ship\\'s_figurehead_touch_result']");


//Shared

attachHoverListeners("[id='crate_touch']", "[id='crate_touch_result']");

attachHoverListeners("[id='discarded_pack_touch']", "[id='discarded_pack_touch_result']");

attachHoverListeners("[id='eldritch_altar_holy_water']", "[id='eldritch_altar_holy_water_result']");
attachHoverListeners("[id='eldritch_altar_touch']", "[id='eldritch_altar_touch_result']");

attachHoverListeners("[id='heirloom_chest_antivenom_key']", "[id='heirloom_chest_antivenom_key_result']");
attachHoverListeners("[id='heirloom_chest_antivenom_antivenom']", "[id='heirloom_chest_antivenom_antivenom_result']");
attachHoverListeners("[id='heirloom_chest_antivenom_touch']", "[id='heirloom_chest_antivenom_touch_result']");

attachHoverListeners("[id='heirloom_chest_shovel_key']", "[id='heirloom_chest_shovel_key_result']");
attachHoverListeners("[id='heirloom_chest_shovel_shovel']", "[id='heirloom_chest_shovel_shovel_result']");
attachHoverListeners("[id='heirloom_chest_shovel_touch']", "[id='heirloom_chest_shovel_touch_result']");

attachHoverListeners("[id='sack_touch']", "[id='sack_touch_result']");

attachHoverListeners("[id='sconce_touch']", "[id='sconce_touch_result']");

attachHoverListeners("[id='shambler\\'s_altar_torch']", "[id='shambler\\'s_altar_torch_result']");
attachHoverListeners("[id='shambler\\'s_altar_touch']", "[id='shambler\\'s_altar_touch_result']");

attachHoverListeners("[id='stack_of_books_torch']", "[id='stack_of_books_torch_result']");
attachHoverListeners("[id='stack_of_books_touch']", "[id='stack_of_books_touch_result']");

attachHoverListeners("[id='unlocked_strongbox_touch']", "[id='unlocked_strongbox_touch_result']");

attachHoverListeners("[id='ancient_artifact_key']", "[id='ancient_artifact_key_result']");
attachHoverListeners("[id='ancient_artifact_touch']", "[id='ancient_artifact_touch_result']");



//Boss Shared Info
attachHoverListeners("[id='boss_locate']", "[id='boss_locate_desc']");
attachHoverListeners("[id='can_scroll']", "[id='can_scroll_desc']");
attachHoverListeners("[id='lifelink_info']", "[id='lifelink_info_desc']");
attachHoverListeners("[id='trophy_info']", "[id='trophy_info_desc']");

//Boss Specific Info
attachHoverListeners("[id='prophet_additional_info_app']", "[id='prophet_additional_info_desc']");
attachHoverListeners("[id='prophet_additional_info_vet']", "[id='prophet_additional_info_desc']");
attachHoverListeners("[id='prophet_additional_info_champ']", "[id='prophet_additional_info_desc']");

attachHoverListeners("[id='brigand_pounder_additional_info_app']", "[id='brigand_pounder_additional_info_desc']");
attachHoverListeners("[id='brigand_pounder_additional_info_vet']", "[id='brigand_pounder_additional_info_desc']");
attachHoverListeners("[id='brigand_pounder_additional_info_champ']", "[id='brigand_pounder_additional_info_desc']");

attachHoverListeners("[id='shrieker_additional_info_app']", "[id='shrieker_additional_info_desc']");
attachHoverListeners("[id='shrieker_additional_info_vet']", "[id='shrieker_additional_info_desc']");
attachHoverListeners("[id='shrieker_additional_info_champ']", "[id='shrieker_additional_info_desc']");
attachHoverListeners("[id='shrieker_additional_info']", "[id='shrieker_additional_info_desc']");

attachHoverListeners("[id='swine_prince_additional_info_app']", "[id='swine_prince_additional_info_desc']");
attachHoverListeners("[id='swine_prince_additional_info_vet']", "[id='swine_prince_additional_info_desc']");
attachHoverListeners("[id='swine_prince_additional_info_champ']", "[id='swine_prince_additional_info_desc']");

attachHoverListeners("[id='flesh_additional_info_app']", "[id='flesh_additional_info_desc']");
attachHoverListeners("[id='flesh_additional_info_vet']", "[id='flesh_additional_info_desc']");
attachHoverListeners("[id='flesh_additional_info_champ']", "[id='flesh_additional_info_desc']");

attachHoverListeners("[id='siren_additional_info_app']", "[id='siren_additional_info_desc']");
attachHoverListeners("[id='siren_additional_info_vet']", "[id='siren_additional_info_desc']");
attachHoverListeners("[id='siren_additional_info_champ']", "[id='siren_additional_info_desc']");

attachHoverListeners("[id='drowned_crew_additional_info_app']", "[id='drowned_crew_additional_info_desc']");
attachHoverListeners("[id='drowned_crew_additional_info_vet']", "[id='drowned_crew_additional_info_desc']");
attachHoverListeners("[id='drowned_crew_additional_info_champ']", "[id='drowned_crew_additional_info_desc']");

attachHoverListeners("[id='collector_additional_info_app']", "[id='collector_additional_info_desc']");
attachHoverListeners("[id='collector_additional_info_vet']", "[id='collector_additional_info_desc']");
attachHoverListeners("[id='collector_additional_info_champ']", "[id='collector_additional_info_desc']");

attachHoverListeners("[id='shambler_additional_info_app']", "[id='shambler_additional_info_desc']");
attachHoverListeners("[id='shambler_additional_info_vet']", "[id='shambler_additional_info_desc']");
attachHoverListeners("[id='shambler_additional_info_champ']", "[id='shambler_additional_info_desc']");



attachHoverListeners("[id='shambler_additional_info']", "[id='shambler_additional_info_desc']");
attachHoverListeners("[id='shambler_endless_info']", "[id='shambler_endless_info_desc']");
attachHoverListeners("[id='shrieker_endless_info']", "[id='shrieker_endless_info_desc']");
attachHoverListeners("[id='shrieker_quirk_info']", "[id='shrieker_quirk_info_desc']");



//Boss Minion Info
attachHoverListeners("[id='necromancer_minion_more_info_app']", "[id='necromancer_minion_more_info_desc']");
attachHoverListeners("[id='necromancer_minion_more_info_vet']", "[id='necromancer_minion_more_info_desc']");
attachHoverListeners("[id='necromancer_minion_more_info_champ']", "[id='necromancer_minion_more_info_desc']");

attachHoverListeners("[id='prophet_minion_more_info_app']", "[id='prophet_minion_more_info_desc']");
attachHoverListeners("[id='prophet_minion_more_info_vet']", "[id='prophet_minion_more_info_desc']");
attachHoverListeners("[id='prophet_minion_more_info_champ']", "[id='prophet_minion_more_info_desc']");

attachHoverListeners("[id='brigand_pounder_minion_more_info_app']", "[id='brigand_pounder_minion_more_info_desc']");
attachHoverListeners("[id='brigand_pounder_minion_more_info_vet']", "[id='brigand_pounder_minion_more_info_desc']");
attachHoverListeners("[id='brigand_pounder_minion_more_info_champ']", "[id='brigand_pounder_minion_more_info_desc']");

attachHoverListeners("[id='shrieker_minion_more_info_app']", "[id='shrieker_minion_more_info_desc']");
attachHoverListeners("[id='shrieker_minion_more_info_vet']", "[id='shrieker_minion_more_info_desc']");
attachHoverListeners("[id='shrieker_minion_more_info_champ']", "[id='shrieker_minion_more_info_desc']");

attachHoverListeners("[id='swine_prince_minion_more_info_app']", "[id='swine_prince_minion_more_info_desc']");
attachHoverListeners("[id='swine_prince_minion_more_info_vet']", "[id='swine_prince_minion_more_info_desc']");
attachHoverListeners("[id='swine_prince_minion_more_info_champ']", "[id='swine_prince_minion_more_info_desc']");

attachHoverListeners("[id='siren_minion_more_info_app']", "[id='siren_minion_more_info_desc']");
attachHoverListeners("[id='siren_minion_more_info_vet']", "[id='siren_minion_more_info_desc']");
attachHoverListeners("[id='siren_minion_more_info_champ']", "[id='siren_minion_more_info_desc']");

attachHoverListeners("[id='drowned_crew_minion_more_info_app']", "[id='drowned_crew_minion_more_info_desc']");
attachHoverListeners("[id='drowned_crew_minion_more_info_vet']", "[id='drowned_crew_minion_more_info_desc']");
attachHoverListeners("[id='drowned_crew_minion_more_info_champ']", "[id='drowned_crew_minion_more_info_desc']");

attachHoverListeners("[id='collector_minion_more_info_app']", "[id='collector_minion_more_info_desc']");
attachHoverListeners("[id='collector_minion_more_info_vet']", "[id='collector_minion_more_info_desc']");
attachHoverListeners("[id='collector_minion_more_info_champ']", "[id='collector_minion_more_info_desc']");

attachHoverListeners("[id='shambler_minion_more_info_app']", "[id='shambler_minion_more_info_desc']");
attachHoverListeners("[id='shambler_minion_more_info_vet']", "[id='shambler_minion_more_info_desc']");
attachHoverListeners("[id='shambler_minion_more_info_champ']", "[id='shambler_minion_more_info_desc']");

attachHoverListeners("[id='shrieker_minion_more_info']", "[id='shrieker_minion_more_info_desc']");
attachHoverListeners("[id='shambler_minion_more_info']", "[id='shambler_minion_more_info_desc']");

//Trophies
attachHoverListeners("[id='necromancer\\'s_collar']", "[id='necromancer\\'s_collar_desc']");
attachHoverListeners("[id='prophet\\'s_eye']", "[id='prophet\\'s_eye_desc']");
attachHoverListeners("[id='hag\\'s_ladle']", "[id='hag\\'s_ladle_desc']");
attachHoverListeners("[id='fuseman\\'s_matchstick']", "[id='fuseman\\'s_matchstick_desc']");

attachHoverListeners("[id='callous_talon']", "[id='callous_talon_desc']");
attachHoverListeners("[id='distended_crowseye']", "[id='distended_crowseye_desc']");
attachHoverListeners("[id='molted_tailfeather']", "[id='molted_tailfeather_desc']");
attachHoverListeners("[id='molted_wingfeather']", "[id='molted_wingfeather_desc']");

attachHoverListeners("[id='wilbur\\'s_flag']", "[id='wilbur\\'s_flag_desc']");
attachHoverListeners("[id='flesh\\'s_heart']", "[id='flesh\\'s_heart_desc']");
attachHoverListeners("[id='siren\\'s_conch']", "[id='siren\\'s_conch_desc']");
attachHoverListeners("[id='crew\\'s_bell']", "[id='crew\\'s_bell_desc']");


attachHoverListeners("[id='dismas\\'_head']", "[id='dismas\\'_head_desc']");
attachHoverListeners("[id='barristan\\'s_head']", "[id='barristan\\'s_head_desc']");
attachHoverListeners("[id='junia\\'s_head']", "[id='junia\\'s_head_desc']");

attachHoverListeners("[id='ancestor\\'s_map']", "[id='ancestor\\'s_map_desc']");
attachHoverListeners("[id='ancestor\\'s_bottle']", "[id='ancestor\\'s_bottle_desc']");
attachHoverListeners("[id='ancestor\\'s_candle']", "[id='ancestor\\'s_candle_desc']");
attachHoverListeners("[id='ancestor\\'s_tentacle_idol']", "[id='ancestor\\'s_tentacle_idol_desc']");
attachHoverListeners("[id='ancestor\\'s_scroll']", "[id='ancestor\\'s_scroll_desc']");


//Boss Skills

//Necromancer
attachHoverListeners("[id='the_flesh_is_willing_app_lvl']", "[id='app_the_flesh_is_willing_desc']");
attachHoverListeners("[id='the_flesh_is_willing_vet_lvl']", "[id='vet_the_flesh_is_willing_desc']");
attachHoverListeners("[id='the_flesh_is_willing_champ_lvl']", "[id='champ_the_flesh_is_willing_desc']");

attachHoverListeners("[id='the_clawing_dead_app_lvl']", "[id='app_the_clawing_dead_desc']");
attachHoverListeners("[id='the_clawing_dead_vet_lvl']", "[id='vet_the_clawing_dead_desc']");
attachHoverListeners("[id='the_clawing_dead_champ_lvl']", "[id='champ_the_clawing_dead_desc']");

attachHoverListeners("[id='six_feet_under_app_lvl']", "[id='app_six_feet_under_desc']");
attachHoverListeners("[id='six_feet_under_vet_lvl']", "[id='vet_six_feet_under_desc']");
attachHoverListeners("[id='six_feet_under_champ_lvl']", "[id='champ_six_feet_under_desc']");

//Prophet

attachHoverListeners("[id='prognostication_app_lvl']", "[id='app_prognostication_desc']");
attachHoverListeners("[id='prognostication_vet_lvl']", "[id='vet_prognostication_desc']");
attachHoverListeners("[id='prognostication_champ_lvl']", "[id='champ_prognostication_desc']");

attachHoverListeners("[id='rubble_of_ruin_app_lvl']", "[id='app_rubble_of_ruin_desc']");
attachHoverListeners("[id='rubble_of_ruin_vet_lvl']", "[id='vet_rubble_of_ruin_desc']");
attachHoverListeners("[id='rubble_of_ruin_champ_lvl']", "[id='champ_rubble_of_ruin_desc']");

attachHoverListeners("[id='eye_on_you_app_lvl']", "[id='app_eye_on_you_desc']");
attachHoverListeners("[id='eye_on_you_vet_lvl']", "[id='vet_eye_on_you_desc']");
attachHoverListeners("[id='eye_on_you_champ_lvl']", "[id='champ_eye_on_you_desc']");

attachHoverListeners("[id='fulminate_app_lvl']", "[id='app_fulminate_desc']");
attachHoverListeners("[id='fulminate_vet_lvl']", "[id='vet_fulminate_desc']");
attachHoverListeners("[id='fulminate_champ_lvl']", "[id='champ_fulminate_desc']");

//Hag

attachHoverListeners("[id='into_the_pot_app_lvl']", "[id='app_into_the_pot_desc']");
attachHoverListeners("[id='into_the_pot_vet_lvl']", "[id='vet_into_the_pot_desc']");
attachHoverListeners("[id='into_the_pot_champ_lvl']", "[id='champ_into_the_pot_desc']");

attachHoverListeners("[id='meat_tenderizer_app_lvl']", "[id='app_meat_tenderizer_desc']");
attachHoverListeners("[id='meat_tenderizer_vet_lvl']", "[id='vet_meat_tenderizer_desc']");
attachHoverListeners("[id='meat_tenderizer_champ_lvl']", "[id='champ_meat_tenderizer_desc']");

attachHoverListeners("[id='season_to_perfection_app_lvl']", "[id='app_season_to_perfection_desc']");
attachHoverListeners("[id='season_to_perfection_vet_lvl']", "[id='vet_season_to_perfection_desc']");
attachHoverListeners("[id='season_to_perfection_champ_lvl']", "[id='champ_season_to_perfection_desc']");

attachHoverListeners("[id='taste_the_stew_app_lvl']", "[id='app_taste_the_stew_desc']");
attachHoverListeners("[id='taste_the_stew_vet_lvl']", "[id='vet_taste_the_stew_desc']");
attachHoverListeners("[id='taste_the_stew_champ_lvl']", "[id='champ_taste_the_stew_desc']");

//Pounder

attachHoverListeners("[id='booooooom_app_lvl']", "[id='app_booooooom_desc']");
attachHoverListeners("[id='booooooom_vet_lvl']", "[id='vet_booooooom_desc']");
attachHoverListeners("[id='booooooom_champ_lvl']", "[id='champ_booooooom_desc']");

attachHoverListeners("[id='reinforcements_app_lvl']", "[id='app_reinforcements_desc']");
attachHoverListeners("[id='reinforcements_vet_lvl']", "[id='vet_reinforcements_desc']");
attachHoverListeners("[id='reinforcements_champ_lvl']", "[id='champ_reinforcements_desc']");

attachHoverListeners("[id='misfire_app_lvl']", "[id='app_misfire_desc']");
attachHoverListeners("[id='misfire_vet_lvl']", "[id='vet_misfire_desc']");
attachHoverListeners("[id='misfire_champ_lvl']", "[id='champ_misfire_desc']");

attachHoverListeners("[id='pounder_passive_app_lvl']", "[id='pounder_passive_desc']");
attachHoverListeners("[id='pounder_passive_vet_lvl']", "[id='pounder_passive_desc']");
attachHoverListeners("[id='pounder_passive_champ_lvl']", "[id='pounder_passive_desc']");
//Shrieker

attachHoverListeners("[id='peck_app_lvl']", "[id='app_peck_desc']");
attachHoverListeners("[id='peck_vet_lvl']", "[id='vet_peck_desc']");
attachHoverListeners("[id='peck_champ_lvl']", "[id='champ_peck_desc']");
attachHoverListeners("[id='peck_darkest_lvl']", "[id='darkest_peck_desc']");

attachHoverListeners("[id='caw_app_lvl']", "[id='app_caw_desc']");
attachHoverListeners("[id='caw_vet_lvl']", "[id='vet_caw_desc']");
attachHoverListeners("[id='caw_champ_lvl']", "[id='champ_caw_desc']");
attachHoverListeners("[id='caw_darkest_lvl']", "[id='darkest_caw_desc']");

attachHoverListeners("[id='call_the_murder_app_lvl']", "[id='app_call_the_murder_desc']");
attachHoverListeners("[id='call_the_murder_vet_lvl']", "[id='vet_call_the_murder_desc']");
attachHoverListeners("[id='call_the_murder_champ_lvl']", "[id='champ_call_the_murder_desc']");
attachHoverListeners("[id='call_the_murder_darkest_lvl']", "[id='darkest_call_the_murder_desc']");

attachHoverListeners("[id='regurgitate_app_lvl']", "[id='app_regurgitate_desc']");
attachHoverListeners("[id='regurgitate_vet_lvl']", "[id='vet_regurgitate_desc']");
attachHoverListeners("[id='regurgitate_champ_lvl']", "[id='champ_regurgitate_desc']");
attachHoverListeners("[id='regurgitate_darkest_lvl']", "[id='darkest_regurgitate_desc']");

attachHoverListeners("[id='shrieking_flight_app_lvl']", "[id='app_shrieking_flight_desc']");
attachHoverListeners("[id='shrieking_flight_vet_lvl']", "[id='vet_shrieking_flight_desc']");
attachHoverListeners("[id='shrieking_flight_champ_lvl']", "[id='champ_shrieking_flight_desc']");
attachHoverListeners("[id='shrieking_flight_darkest_lvl']", "[id='darkest_shrieking_flight_desc']");

//Swine Prince

attachHoverListeners("[id='obliterate_body_app_lvl']", "[id='app_obliterate_body_desc']");
attachHoverListeners("[id='obliterate_body_vet_lvl']", "[id='vet_obliterate_body_desc']");
attachHoverListeners("[id='obliterate_body_champ_lvl']", "[id='champ_obliterate_body_desc']");

attachHoverListeners("[id='obliterate_masses_app_lvl']", "[id='app_obliterate_masses_desc']");
attachHoverListeners("[id='obliterate_masses_vet_lvl']", "[id='vet_obliterate_masses_desc']");
attachHoverListeners("[id='obliterate_masses_champ_lvl']", "[id='champ_obliterate_masses_desc']");

attachHoverListeners("[id='enraged_destruction_app_lvl']", "[id='app_enraged_destruction_desc']");
attachHoverListeners("[id='enraged_destruction_vet_lvl']", "[id='vet_enraged_destruction_desc']");
attachHoverListeners("[id='enraged_destruction_champ_lvl']", "[id='champ_enraged_destruction_desc']");

attachHoverListeners("[id='wild_flailing_app_lvl']", "[id='app_wild_flailing_desc']");
attachHoverListeners("[id='wild_flailing_vet_lvl']", "[id='vet_wild_flailing_desc']");
attachHoverListeners("[id='wild_flailing_champ_lvl']", "[id='champ_wild_flailing_desc']");

//Flesh

attachHoverListeners("[id='maws_of_life_app_lvl']", "[id='app_maws_of_life_desc']");
attachHoverListeners("[id='maws_of_life_vet_lvl']", "[id='vet_maws_of_life_desc']");
attachHoverListeners("[id='maws_of_life_champ_lvl']", "[id='champ_maws_of_life_desc']");

attachHoverListeners("[id='bone_zephyr_app_lvl']", "[id='app_bone_zephyr_desc']");
attachHoverListeners("[id='bone_zephyr_vet_lvl']", "[id='vet_bone_zephyr_desc']");
attachHoverListeners("[id='bone_zephyr_champ_lvl']", "[id='champ_bone_zephyr_desc']");

attachHoverListeners("[id='sanguine_stroke_app_lvl']", "[id='app_sanguine_stroke_desc']");
attachHoverListeners("[id='sanguine_stroke_vet_lvl']", "[id='vet_sanguine_stroke_desc']");
attachHoverListeners("[id='sanguine_stroke_champ_lvl']", "[id='champ_sanguine_stroke_desc']");

attachHoverListeners("[id='undulating_invasion_app_lvl']", "[id='app_undulating_invasion_desc']");
attachHoverListeners("[id='undulating_invasion_vet_lvl']", "[id='vet_undulating_invasion_desc']");
attachHoverListeners("[id='undulating_invasion_champ_lvl']", "[id='champ_undulating_invasion_desc']");

//Siren

attachHoverListeners("[id='song_of_desire_app_lvl']", "[id='app_song_of_desire_desc']");
attachHoverListeners("[id='song_of_desire_vet_lvl']", "[id='vet_song_of_desire_desc']");
attachHoverListeners("[id='song_of_desire_champ_lvl']", "[id='champ_song_of_desire_desc']");

attachHoverListeners("[id='high_tide_app_lvl']", "[id='high_tide_desc']");
attachHoverListeners("[id='high_tide_vet_lvl']", "[id='high_tide_desc']");
attachHoverListeners("[id='high_tide_champ_lvl']", "[id='high_tide_desc']");

attachHoverListeners("[id='pressure_crash_app_lvl']", "[id='app_pressure_crash_desc']");
attachHoverListeners("[id='pressure_crash_vet_lvl']", "[id='vet_pressure_crash_desc']");
attachHoverListeners("[id='pressure_crash_champ_lvl']", "[id='champ_pressure_crash_desc']");

attachHoverListeners("[id='devour_app_lvl']", "[id='app_devour_desc']");
attachHoverListeners("[id='devour_vet_lvl']", "[id='vet_devour_desc']");
attachHoverListeners("[id='devour_champ_lvl']", "[id='champ_devour_desc']");

//Drowned Crew

attachHoverListeners("[id='all_hands_on_deck_app_lvl']", "[id='app_all_hands_on_deck_desc']");
attachHoverListeners("[id='all_hands_on_deck_vet_lvl']", "[id='vet_all_hands_on_deck_desc']");
attachHoverListeners("[id='all_hands_on_deck_champ_lvl']", "[id='champ_all_hands_on_deck_desc']");

attachHoverListeners("[id='mutiny_app_lvl']", "[id='app_mutiny_desc']");
attachHoverListeners("[id='mutiny_vet_lvl']", "[id='vet_mutiny_desc']");
attachHoverListeners("[id='mutiny_champ_lvl']", "[id='champ_mutiny_desc']");

attachHoverListeners("[id='drink_with_the_dead_app_lvl']", "[id='app_drink_with_the_dead_desc']");
attachHoverListeners("[id='drink_with_the_dead_vet_lvl']", "[id='vet_drink_with_the_dead_desc']");
attachHoverListeners("[id='drink_with_the_dead_champ_lvl']", "[id='champ_drink_with_the_dead_desc']");

attachHoverListeners("[id='boarding_clutch_app_lvl']", "[id='app_boarding_clutch_desc']");
attachHoverListeners("[id='boarding_clutch_vet_lvl']", "[id='vet_boarding_clutch_desc']");
attachHoverListeners("[id='boarding_clutch_champ_lvl']", "[id='champ_boarding_clutch_desc']");

//Collector

attachHoverListeners("[id='collect_call_app_lvl']", "[id='collect_call_desc']");
attachHoverListeners("[id='collect_call_vet_lvl']", "[id='collect_call_desc']");
attachHoverListeners("[id='collect_call_champ_lvl']", "[id='collect_call_desc']");

attachHoverListeners("[id='show_collection_app_lvl']", "[id='app_show_collection_desc']");
attachHoverListeners("[id='show_collection_vet_lvl']", "[id='vet_show_collection_desc']");
attachHoverListeners("[id='show_collection_champ_lvl']", "[id='champ_show_collection_desc']");

attachHoverListeners("[id='life_steal_app_lvl']", "[id='app_life_steal_desc']");
attachHoverListeners("[id='life_steal_vet_lvl']", "[id='vet_life_steal_desc']");
attachHoverListeners("[id='life_steal_champ_lvl']", "[id='champ_life_steal_desc']");

//Shambler

attachHoverListeners("[id='obdurous_advancement_app_lvl']", "[id='app_obdurous_advancement_desc']");
attachHoverListeners("[id='obdurous_advancement_vet_lvl']", "[id='vet_obdurous_advancement_desc']");
attachHoverListeners("[id='obdurous_advancement_champ_lvl']", "[id='champ_obdurous_advancement_desc']");
attachHoverListeners("[id='obdurous_advancement_darkest_lvl']", "[id='darkest_obdurous_advancement_desc']");

attachHoverListeners("[id='undulating_withdrawal_app_lvl']", "[id='app_undulating_withdrawal_desc']");
attachHoverListeners("[id='undulating_withdrawal_vet_lvl']", "[id='vet_undulating_withdrawal_desc']");
attachHoverListeners("[id='undulating_withdrawal_champ_lvl']", "[id='champ_undulating_withdrawal_desc']");
attachHoverListeners("[id='undulating_withdrawal_darkest_lvl']", "[id='darkest_undulating_withdrawal_desc']");

attachHoverListeners("[id='stentorious_lament_app_lvl']", "[id='app_stentorious_lament_desc']");
attachHoverListeners("[id='stentorious_lament_vet_lvl']", "[id='vet_stentorious_lament_desc']");
attachHoverListeners("[id='stentorious_lament_champ_lvl']", "[id='champ_stentorious_lament_desc']");
attachHoverListeners("[id='stentorious_lament_darkest_lvl']", "[id='darkest_stentorious_lament_desc']");

//Full Cauldron

attachHoverListeners("[id='cauldron_passive_app_lvl']", "[id='cauldron_passive_desc']");
attachHoverListeners("[id='cauldron_passive_vet_lvl']", "[id='cauldron_passive_desc']");
attachHoverListeners("[id='cauldron_passive_champ_lvl']", "[id='cauldron_passive_desc']");

//Matchman

attachHoverListeners("[id='fire_in_the_hole_app_lvl']", "[id='app_fire_in_the_hole_desc']");
attachHoverListeners("[id='fire_in_the_hole_vet_lvl']", "[id='vet_fire_in_the_hole_desc']");
attachHoverListeners("[id='fire_in_the_hole_champ_lvl']", "[id='champ_fire_in_the_hole_desc']");

attachHoverListeners("[id='hot_shot_app_lvl']", "[id='app_hot_shot_desc']");
attachHoverListeners("[id='hot_shot_vet_lvl']", "[id='vet_hot_shot_desc']");
attachHoverListeners("[id='hot_shot_champ_lvl']", "[id='champ_hot_shot_desc']");

//Wilbur Skills

attachHoverListeners("[id='squeal_app_lvl']", "[id='app_squeal_desc']");
attachHoverListeners("[id='squeal_vet_lvl']", "[id='vet_squeal_desc']");
attachHoverListeners("[id='squeal_champ_lvl']", "[id='champ_squeal_desc']");

attachHoverListeners("[id='end_this_one_app_lvl']", "[id='app_end_this_one_desc']");
attachHoverListeners("[id='end_this_one_vet_lvl']", "[id='vet_end_this_one_desc']");
attachHoverListeners("[id='end_this_one_champ_lvl']", "[id='champ_end_this_one_desc']");

attachHoverListeners("[id='end_these_two_app_lvl']", "[id='app_end_these_two_desc']");
attachHoverListeners("[id='end_these_two_vet_lvl']", "[id='vet_end_these_two_desc']");
attachHoverListeners("[id='end_these_two_champ_lvl']", "[id='champ_end_these_two_desc']");

attachHoverListeners("[id='bit_o_squeal_app_lvl']", "[id='app_bit_o_squeal_desc']");
attachHoverListeners("[id='bit_o_squeal_vet_lvl']", "[id='vet_bit_o_squeal_desc']");
attachHoverListeners("[id='bit_o_squeal_champ_lvl']", "[id='champ_bit_o_squeal_desc']");

//Anchorman

attachHoverListeners("[id='heave_to_app_lvl']", "[id='app_heave_to_desc']");
attachHoverListeners("[id='heave_to_vet_lvl']", "[id='vet_heave_to_desc']");
attachHoverListeners("[id='heave_to_champ_lvl']", "[id='champ_heave_to_desc']");

attachHoverListeners("[id='innate_self_buff_app_lvl']", "[id='innate_self_buff_desc']");
attachHoverListeners("[id='innate_self_buff_vet_lvl']", "[id='innate_self_buff_desc']");
attachHoverListeners("[id='innate_self_buff_champ_lvl']", "[id='innate_self_buff_desc']");

attachHoverListeners("[id='chained_passive_app_lvl']", "[id='app_chained_passive_desc']");
attachHoverListeners("[id='chained_passive_vet_lvl']", "[id='vet_chained_passive_desc']");
attachHoverListeners("[id='chained_passive_champ_lvl']", "[id='champ_chained_passive_desc']");

//Collected HWM

attachHoverListeners("[id='headhunt_app_lvl']", "[id='app_headhunt_desc']");
attachHoverListeners("[id='headhunt_vet_lvl']", "[id='vet_headhunt_desc']");
attachHoverListeners("[id='headhunt_champ_lvl']", "[id='champ_headhunt_desc']");

//Collected MAA

attachHoverListeners("[id='head_games_app_lvl']", "[id='head_games_desc']");
attachHoverListeners("[id='head_games_vet_lvl']", "[id='head_games_desc']");
attachHoverListeners("[id='head_games_champ_lvl']", "[id='head_games_desc']");

attachHoverListeners("[id='head_knocker_app_lvl']", "[id='app_head_knocker_desc']");
attachHoverListeners("[id='head_knocker_vet_lvl']", "[id='vet_head_knocker_desc']");
attachHoverListeners("[id='head_knocker_champ_lvl']", "[id='champ_head_knocker_desc']");

//Collected Vestal

attachHoverListeners("[id='headstrong_app_lvl']", "[id='app_headstrong_desc']");
attachHoverListeners("[id='headstrong_vet_lvl']", "[id='vet_headstrong_desc']");
attachHoverListeners("[id='headstrong_champ_lvl']", "[id='champ_headstrong_desc']");

attachHoverListeners("[id='headache_app_lvl']", "[id='headache_desc']");
attachHoverListeners("[id='headache_vet_lvl']", "[id='headache_desc']");
attachHoverListeners("[id='headache_champ_lvl']", "[id='headache_desc']");

attachHoverListeners("[id='head_rush_app_lvl']", "[id='app_head_rush_desc']");
attachHoverListeners("[id='head_rush_vet_lvl']", "[id='vet_head_rush_desc']");
attachHoverListeners("[id='head_rush_champ_lvl']", "[id='champ_head_rush_desc']");

//Shambler Tentacles

attachHoverListeners("[id='clapperclaw_app_lvl']", "[id='app_clapperclaw_desc']");
attachHoverListeners("[id='clapperclaw_vet_lvl']", "[id='vet_clapperclaw_desc']");
attachHoverListeners("[id='clapperclaw_champ_lvl']", "[id='champ_clapperclaw_desc']");
attachHoverListeners("[id='clapperclaw_darkest_lvl']", "[id='darkest_clapperclaw_desc']");

//Additional Minion Info

attachHoverListeners("[id='small_pew_minion_more_info_app']", "[id='small_pew_minion_more_info_desc']");
attachHoverListeners("[id='small_pew_minion_more_info_vet']", "[id='small_pew_minion_more_info_desc']");
attachHoverListeners("[id='small_pew_minion_more_info_champ']", "[id='small_pew_minion_more_info_desc']");

attachHoverListeners("[id='medium_pew_minion_more_info_app']", "[id='small_pew_minion_more_info_desc']");
attachHoverListeners("[id='medium_pew_minion_more_info_vet']", "[id='small_pew_minion_more_info_desc']");
attachHoverListeners("[id='medium_pew_minion_more_info_champ']", "[id='small_pew_minion_more_info_desc']");

attachHoverListeners("[id='large_pew_minion_more_info_app']", "[id='small_pew_minion_more_info_desc']");
attachHoverListeners("[id='large_pew_minion_more_info_vet']", "[id='small_pew_minion_more_info_desc']");
attachHoverListeners("[id='large_pew_minion_more_info_champ']", "[id='small_pew_minion_more_info_desc']");

attachHoverListeners("[id='cauldron_full_minion_more_info_app']", "[id='small_pew_minion_more_info_desc']");
attachHoverListeners("[id='cauldron_full_minion_more_info_vet']", "[id='small_pew_minion_more_info_desc']");
attachHoverListeners("[id='cauldron_full_minion_more_info_champ']", "[id='small_pew_minion_more_info_desc']");

attachHoverListeners("[id='shrieker\\'s_nest_minion_more_info_app']", "[id='small_pew_minion_more_info_desc']");
attachHoverListeners("[id='shrieker\\'s_nest_minion_more_info_vet']", "[id='small_pew_minion_more_info_desc']");
attachHoverListeners("[id='shrieker\\'s_nest_minion_more_info_champ']", "[id='small_pew_minion_more_info_desc']");

attachHoverListeners("[id='cauldron_empty_minion_more_info_app']", "[id='cauldron_empty_minion_more_info_desc']");
attachHoverListeners("[id='cauldron_empty_minion_more_info_vet']", "[id='cauldron_empty_minion_more_info_desc']");
attachHoverListeners("[id='cauldron_empty_minion_more_info_champ']", "[id='cauldron_empty_minion_more_info_desc']");

//Disease Icons
attachHoverListeners("[id='disease_shared_info']", "[id='disease_shared_info_desc']");
attachHoverListeners("[id='disease_enemy_info']", "[id='disease_enemy_info_desc']");
attachHoverListeners("[id='disease_curio_info']", "[id='disease_curio_info_desc']");
attachHoverListeners("[id='dlc_disease_enemy_info']", "[id='dlc_disease_enemy_info_desc']");
attachHoverListeners("[id='dlc_disease_curio_info']", "[id='dlc_disease_curio_info_desc']");
attachHoverListeners("[id='crimson_curse_cure_info']", "[id='crimson_curse_cure_info_desc']");
attachHoverListeners("[id='crimson_curse_benefit_info']", "[id='crimson_curse_benefit_info_desc']");


//Disease Descs
attachHoverListeners("[id='bad_humors']", "[id='bad_humors_desc']");
attachHoverListeners("[id='the_black_plague']", "[id='the_black_plague_desc']");
attachHoverListeners("[id='bullmic']", "[id='bullmic_desc']");
attachHoverListeners("[id='creeping_cough']", "[id='creeping_cough_desc']");
attachHoverListeners("[id='ennui']", "[id='ennui_desc']");
attachHoverListeners("[id='grey_rot']", "[id='grey_rot_desc']");
attachHoverListeners("[id='hemophilia']", "[id='hemophilia_desc']");
attachHoverListeners("[id='hysterical_blindness']", "[id='hysterical_blindness_desc']");
attachHoverListeners("[id='lethargy']", "[id='lethargy_desc']");
attachHoverListeners("[id='rabies']", "[id='rabies_desc']");
attachHoverListeners("[id='scurvy']", "[id='scurvy_desc']");
attachHoverListeners("[id='spasm_of_the_entrails']", "[id='spasm_of_the_entrails_desc']");
attachHoverListeners("[id='spotted_fever']", "[id='spotted_fever_desc']");
attachHoverListeners("[id='syphilis']", "[id='syphilis_desc']");
attachHoverListeners("[id='tapeworm']", "[id='tapeworm_desc']");
attachHoverListeners("[id='tetanus']", "[id='tetanus_desc']");
attachHoverListeners("[id='the_ague']", "[id='the_ague_desc']");
attachHoverListeners("[id='the_fits']", "[id='the_fits_desc']");
attachHoverListeners("[id='the_red_plague']", "[id='the_red_plague_desc']");
attachHoverListeners("[id='the_runs']", "[id='the_runs_desc']");
attachHoverListeners("[id='the_worries']", "[id='the_worries_desc']");
attachHoverListeners("[id='vertigo']", "[id='vertigo_desc']");
attachHoverListeners("[id='vampiric_spirits']", "[id='vampiric_spirits_desc']");
attachHoverListeners("[id='wasting_sickness']", "[id='wasting_sickness_desc']");

attachHoverListeners("[id='crimson_curse_passive']", "[id='crimson_curse_passive_desc']");
attachHoverListeners("[id='crimson_curse_craving']", "[id='crimson_curse_craving_desc']");
attachHoverListeners("[id='crimson_curse_bloodlust']", "[id='crimson_curse_bloodlust_desc']");
attachHoverListeners("[id='crimson_curse_wasting']", "[id='crimson_curse_wasting_desc']");
attachHoverListeners("[id='sky_taint']", "[id='sky_taint_desc']");


//Trinket Info

attachHoverListeners("[id='trinket_overview']", "[id='trinket_overview_desc']");
attachHoverListeners("[id='crimson_court_trinket_overview']", "[id='crimson_court_trinket_overview_desc']");
attachHoverListeners("[id='color_of_madness_trinket_overview']", "[id='color_of_madness_trinket_overview_desc']");
attachHoverListeners("[id='shieldbreaker_trinket_overview']", "[id='shieldbreaker_trinket_overview_desc']");


//Trinket Descriptions

//Very Common

attachHoverListeners("[id='accuracy_stone_trinket']", "[id='accuracy_stone_trinket_desc']");
attachHoverListeners("[id='bleed_charm_trinket']", "[id='bleed_charm_trinket_desc']");
attachHoverListeners("[id='bleed_stone_trinket']", "[id='bleed_stone_trinket_desc']");
attachHoverListeners("[id='blight_charm_trinket']", "[id='blight_charm_trinket_desc']");
attachHoverListeners("[id='blight_stone_trinket']", "[id='blight_stone_trinket_desc']");
attachHoverListeners("[id='critical_stone_trinket']", "[id='critical_stone_trinket_desc']");
attachHoverListeners("[id='debuff_charm_trinket']", "[id='debuff_charm_trinket_desc']");
attachHoverListeners("[id='debuff_stone_trinket']", "[id='debuff_stone_trinket_desc']");
attachHoverListeners("[id='disease_charm_trinket']", "[id='disease_charm_trinket_desc']");
attachHoverListeners("[id='dodge_stone_trinket']", "[id='dodge_stone_trinket_desc']");
attachHoverListeners("[id='health_stone_trinket']", "[id='health_stone_trinket_desc']");
attachHoverListeners("[id='move_charm_trinket']", "[id='move_charm_trinket_desc']");
attachHoverListeners("[id='move_stone_trinket']", "[id='move_stone_trinket_desc']");
attachHoverListeners("[id='protection_stone_trinket']", "[id='protection_stone_trinket_desc']");
attachHoverListeners("[id='stun_charm_trinket']", "[id='stun_charm_trinket_desc']");
attachHoverListeners("[id='stun_stone_trinket']", "[id='stun_stone_trinket_desc']");

//Common

attachHoverListeners("[id='archer\\'s_ring_trinket']", "[id='archer\\'s_ring_trinket_desc']");
attachHoverListeners("[id='bloodied_fetish_trinket']", "[id='bloodied_fetish_trinket_desc']");
attachHoverListeners("[id='book_of_intuition_trinket']", "[id='book_of_intuition_trinket_desc']");
attachHoverListeners("[id='caution_cloak_trinket']", "[id='caution_cloak_trinket_desc']");
attachHoverListeners("[id='damage_stone_trinket']", "[id='damage_stone_trinket_desc']");
attachHoverListeners("[id='dazzling_charm_trinket']", "[id='dazzling_charm_trinket_desc']");
attachHoverListeners("[id='deteriorating_bracer_trinket']", "[id='deteriorating_bracer_trinket_desc']");
attachHoverListeners("[id='reckless_charm_trinket']", "[id='reckless_charm_trinket_desc']");
attachHoverListeners("[id='slippery_boots_trinket']", "[id='slippery_boots_trinket_desc']");
attachHoverListeners("[id='snake_oil_trinket']", "[id='snake_oil_trinket_desc']");
attachHoverListeners("[id='speed_stone_trinket']", "[id='speed_stone_trinket_desc']");
attachHoverListeners("[id='survival_guide_trinket']", "[id='survival_guide_trinket_desc']");
attachHoverListeners("[id='warrior\\'s_bracer_trinket']", "[id='warrior\\'s_bracer_trinket_desc']");
attachHoverListeners("[id='warrior\\'s_cap_trinket']", "[id='warrior\\'s_cap_trinket_desc']");

//Uncommon

attachHoverListeners("[id='bleed_amulet_trinket']", "[id='bleed_amulet_trinket_desc']");
attachHoverListeners("[id='blight_amulet_trinket']", "[id='blight_amulet_trinket_desc']");
attachHoverListeners("[id='blood_charm_trinket']", "[id='blood_charm_trinket_desc']");
attachHoverListeners("[id='bloodthirst_ring_trinket']", "[id='bloodthirst_ring_trinket_desc']");
attachHoverListeners("[id='book_of_constitution_trinket']", "[id='book_of_constitution_trinket_desc']");
attachHoverListeners("[id='book_of_holiness_trinket']", "[id='book_of_holiness_trinket_desc']");
attachHoverListeners("[id='book_of_rage_trinket']", "[id='book_of_rage_trinket_desc']");
attachHoverListeners("[id='book_of_relaxation_trinket']", "[id='book_of_relaxation_trinket_desc']");
attachHoverListeners("[id='camouflage_cloak_trinket']", "[id='camouflage_cloak_trinket_desc']");
attachHoverListeners("[id='calming_crystal_trinket']", "[id='calming_crystal_trinket_desc']");
attachHoverListeners("[id='chirurgeon\\'s_charm_trinket']", "[id='chirurgeon\\'s_charm_trinket_desc']");
attachHoverListeners("[id='dark_bracer_trinket']", "[id='dark_bracer_trinket_desc']");
attachHoverListeners("[id='debuff_amulet_trinket']", "[id='debuff_amulet_trinket_desc']");
attachHoverListeners("[id='gambler\\'s_charm_trinket']", "[id='gambler\\'s_charm_trinket_desc']");
attachHoverListeners("[id='heavy_boots_trinket']", "[id='heavy_boots_trinket_desc']");
attachHoverListeners("[id='life_crystal_trinket']", "[id='life_crystal_trinket_desc']");
attachHoverListeners("[id='move_amulet_trinket']", "[id='move_amulet_trinket_desc']");
attachHoverListeners("[id='seer_stone_trinket']", "[id='seer_stone_trinket_desc']");
attachHoverListeners("[id='shimmering_cloak_trinket']", "[id='shimmering_cloak_trinket_desc']");
attachHoverListeners("[id='solar_bracer_trinket']", "[id='solar_bracer_trinket_desc']");
attachHoverListeners("[id='steady_bracer_trinket']", "[id='steady_bracer_trinket_desc']");
attachHoverListeners("[id='stun_amulet_trinket']", "[id='stun_amulet_trinket_desc']");
attachHoverListeners("[id='surgical_gloves_trinket']", "[id='surgical_gloves_trinket_desc']");
attachHoverListeners("[id='swift_cloak_trinket']", "[id='swift_cloak_trinket_desc']");
attachHoverListeners("[id='tenacity_ring_trinket']", "[id='tenacity_ring_trinket_desc']");
attachHoverListeners("[id='worrystone_trinket']", "[id='worrystone_trinket_desc']");

//Rare

attachHoverListeners("[id='beast_slayer\\'s_ring_trinket']", "[id='beast_slayer\\'s_ring_trinket_desc']");
attachHoverListeners("[id='berserk_charm_trinket']", "[id='berserk_charm_trinket_desc']");
attachHoverListeners("[id='brawler\\'s_gloves_trinket']", "[id='brawler\\'s_gloves_trinket_desc']");
attachHoverListeners("[id='dark_crown_trinket']", "[id='dark_crown_trinket_desc']");
attachHoverListeners("[id='eldritch_slayer\\'s_ring_trinket']", "[id='eldritch_slayer\\'s_ring_trinket_desc']");
attachHoverListeners("[id='fasting_seal_trinket']", "[id='fasting_seal_trinket_desc']");
attachHoverListeners("[id='feather_crystal_trinket']", "[id='feather_crystal_trinket_desc']");
attachHoverListeners("[id='man_slayer\\'s_ring_trinket']", "[id='man_slayer\\'s_ring_trinket_desc']");
attachHoverListeners("[id='moon_cloak_trinket']", "[id='moon_cloak_trinket_desc']");
attachHoverListeners("[id='moon_ring_trinket']", "[id='moon_ring_trinket_desc']");
attachHoverListeners("[id='quick_draw_charm_trinket']", "[id='quick_draw_charm_trinket_desc']");
attachHoverListeners("[id='recovery_charm_trinket']", "[id='recovery_charm_trinket_desc']");
attachHoverListeners("[id='sniper\\'s_ring_trinket']", "[id='sniper\\'s_ring_trinket_desc']");
attachHoverListeners("[id='solar_crown_trinket']", "[id='solar_crown_trinket_desc']");
attachHoverListeners("[id='sun_cloak_trinket']", "[id='sun_cloak_trinket_desc']");
attachHoverListeners("[id='sun_ring_trinket']", "[id='sun_ring_trinket_desc']");
attachHoverListeners("[id='unholy_slayer\\'s_ring_trinket']", "[id='unholy_slayer\\'s_ring_trinket_desc']");

//Very Rare

attachHoverListeners("[id='book_of_sanity_trinket']", "[id='book_of_sanity_trinket_desc']");
attachHoverListeners("[id='cleansing_crystal_trinket']", "[id='cleansing_crystal_trinket_desc']");
attachHoverListeners("[id='ethereal_crucifix_trinket']", "[id='ethereal_crucifix_trinket_desc']");
attachHoverListeners("[id='focus_ring_trinket']", "[id='focus_ring_trinket_desc']");
attachHoverListeners("[id='fortifying_garlic_trinket']", "[id='fortifying_garlic_trinket_desc']");
attachHoverListeners("[id='hero\\'s_ring_trinket']", "[id='hero\\'s_ring_trinket_desc']");
attachHoverListeners("[id='legendary_bracer_trinket']", "[id='legendary_bracer_trinket_desc']");
attachHoverListeners("[id='martyr\\'s_seal_trinket']", "[id='martyr\\'s_seal_trinket_desc']");
attachHoverListeners("[id='tough_ring_trinket']", "[id='tough_ring_trinket_desc']");

//Ancestral

attachHoverListeners("[id='ancestor\\'s_bottle_trinket']", "[id='ancestor\\'s_bottle_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_candle_trinket']", "[id='ancestor\\'s_candle_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_coat_trinket']", "[id='ancestor\\'s_coat_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_handkerchief_trinket']", "[id='ancestor\\'s_handkerchief_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_lantern_trinket']", "[id='ancestor\\'s_lantern_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_map_trinket']", "[id='ancestor\\'s_map_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_mustache_cream_trinket']", "[id='ancestor\\'s_mustache_cream_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_musket_ball_trinket']", "[id='ancestor\\'s_musket_ball_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_pen_trinket']", "[id='ancestor\\'s_pen_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_pistol_trinket']", "[id='ancestor\\'s_pistol_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_portrait_trinket']", "[id='ancestor\\'s_portrait_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_scroll_trinket']", "[id='ancestor\\'s_scroll_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_signet_ring_trinket']", "[id='ancestor\\'s_signet_ring_trinket_desc']");
attachHoverListeners("[id='ancestor\\'s_tentacle_idol_trinket']", "[id='ancestor\\'s_tentacle_idol_trinket_desc']");
attachHoverListeners("[id='talisman_of_the_flame_trinket']", "[id='talisman_of_the_flame_trinket_desc']");

//Trophy

attachHoverListeners("[id='necromancer\\'s_collar_trinket']", "[id='necromancer\\'s_collar_trinket_desc']");
attachHoverListeners("[id='prophet\\'s_eye_trinket']", "[id='prophet\\'s_eye_trinket_desc']");
attachHoverListeners("[id='hag\\'s_ladle_trinket']", "[id='hag\\'s_ladle_trinket_desc']");
attachHoverListeners("[id='fuseman\\'s_matchstick_trinket']", "[id='fuseman\\'s_matchstick_trinket_desc']");
attachHoverListeners("[id='wilbur\\'s_flag_trinket']", "[id='wilbur\\'s_flag_trinket_desc']");
attachHoverListeners("[id='flesh\\'s_heart_trinket']", "[id='flesh\\'s_heart_trinket_desc']");
attachHoverListeners("[id='siren\\'s_conch_trinket']", "[id='siren\\'s_conch_trinket_desc']");
attachHoverListeners("[id='crew\\'s_bell_trinket']", "[id='crew\\'s_bell_trinket_desc']");
attachHoverListeners("[id='vvulf\\'s_tassle_trinket']", "[id='vvulf\\'s_tassle_trinket_desc']");

//Enemy Specific

attachHoverListeners("[id='aria_box_trinket']", "[id='aria_box_trinket_desc']");
attachHoverListeners("[id='crescendo_box_trinket']", "[id='crescendo_box_trinket_desc']");
attachHoverListeners("[id='overture_box_trinket']", "[id='overture_box_trinket_desc']");
attachHoverListeners("[id='barristan\\'s_head_trinket']", "[id='barristan\\'s_head_trinket_desc']");
attachHoverListeners("[id='dismas\\'_head_trinket']", "[id='dismas\\'_head_trinket_desc']");
attachHoverListeners("[id='junia\\'s_head_trinket']", "[id='junia\\'s_head_trinket_desc']");
attachHoverListeners("[id='tempting_goblet_trinket']", "[id='tempting_goblet_trinket_desc']");
attachHoverListeners("[id='callous_talon_trinket']", "[id='callous_talon_trinket_desc']");
attachHoverListeners("[id='distended_crowseye_trinket']", "[id='distended_crowseye_trinket_desc']");
attachHoverListeners("[id='molted_tailfeather_trinket']", "[id='molted_tailfeather_trinket_desc']");
attachHoverListeners("[id='molted_wingfeather_trinket']", "[id='molted_wingfeather_trinket_desc']");

//Crimson Court

attachHoverListeners("[id='ancestor\\'s_vintage_trinket']", "[id='ancestor\\'s_vintage_trinket_desc']");
attachHoverListeners("[id='coven_signet_trinket']", "[id='coven_signet_trinket_desc']");
attachHoverListeners("[id='dazzling_mirror_trinket']", "[id='dazzling_mirror_trinket_desc']");
attachHoverListeners("[id='mantra_of_fasting_trinket']", "[id='mantra_of_fasting_trinket_desc']");
attachHoverListeners("[id='mercurial_salve_trinket']", "[id='mercurial_salve_trinket_desc']");
attachHoverListeners("[id='pagan_talisman_trinket']", "[id='pagan_talisman_trinket_desc']");
attachHoverListeners("[id='rat_carcass_trinket']", "[id='rat_carcass_trinket_desc']");
attachHoverListeners("[id='sanguine_snuff_trinket']", "[id='sanguine_snuff_trinket_desc']");
attachHoverListeners("[id='sculptor\\'s_tools_trinket']", "[id='sculptor\\'s_tools_trinket_desc']");

attachHoverListeners("[id='baron\\'s_lash_trinket']", "[id='baron\\'s_lash_trinket_desc']");
attachHoverListeners("[id='viscount\\'s_spices_trinket']", "[id='viscount\\'s_spices_trinket_desc']");
attachHoverListeners("[id='countess\\'_fan_trinket']", "[id='countess\\'_fan_trinket_desc']");

//Color of Madness

attachHoverListeners("[id='lens_of_the_comet_trinket']", "[id='lens_of_the_comet_trinket_desc']");
attachHoverListeners("[id='crystal_pendant_trinket']", "[id='crystal_pendant_trinket_desc']");
attachHoverListeners("[id='cluster_pendant_trinket']", "[id='cluster_pendant_trinket_desc']");
attachHoverListeners("[id='coat_of_many_colors_trinket']", "[id='coat_of_many_colors_trinket_desc']");
attachHoverListeners("[id='miller\\'s_pipe_trinket']", "[id='miller\\'s_pipe_trinket_desc']");
attachHoverListeners("[id='mildred\\'s_locket_trinket']", "[id='mildred\\'s_locket_trinket_desc']");

attachHoverListeners("[id='thing\\'s_mesmerizing_eye_trinket']", "[id='thing\\'s_mesmerizing_eye_trinket_desc']");
attachHoverListeners("[id='crystalline_fang_trinket']", "[id='crystalline_fang_trinket_desc']");
attachHoverListeners("[id='phase_shifting_hide_trinket']", "[id='phase_shifting_hide_trinket_desc']");
attachHoverListeners("[id='prismatic_heart_crystal_trinket']", "[id='prismatic_heart_crystal_trinket_desc']");

//Abomination

attachHoverListeners("[id='lock_of_patience_trinket']", "[id='lock_of_patience_trinket_desc']");
attachHoverListeners("[id='padlock_of_transference_trinket']", "[id='padlock_of_transference_trinket_desc']");
attachHoverListeners("[id='protective_padlock_trinket']", "[id='protective_padlock_trinket_desc']");
attachHoverListeners("[id='lock_of_fury_trinket']", "[id='lock_of_fury_trinket_desc']");
attachHoverListeners("[id='restraining_padlock_trinket']", "[id='restraining_padlock_trinket_desc']");

//Antiquarian

attachHoverListeners("[id='bag_of_marbles_trinket']", "[id='bag_of_marbles_trinket_desc']");
attachHoverListeners("[id='carapace_idol_trinket']", "[id='carapace_idol_trinket_desc']");
attachHoverListeners("[id='bloodcourse_medallion_trinket']", "[id='bloodcourse_medallion_trinket_desc']");
attachHoverListeners("[id='fleet_florin_trinket']", "[id='fleet_florin_trinket_desc']");
attachHoverListeners("[id='candle_of_life_trinket']", "[id='candle_of_life_trinket_desc']");

//Arbalest

attachHoverListeners("[id='sturdy_greaves_trinket']", "[id='sturdy_greaves_trinket_desc']");
attachHoverListeners("[id='vengeful_greaves_trinket']", "[id='vengeful_greaves_trinket_desc']");
attachHoverListeners("[id='medic\\'s_greaves_trinket']", "[id='medic\\'s_greaves_trinket_desc']");
attachHoverListeners("[id='bull\\'s_eye_bandana_trinket']", "[id='bull\\'s_eye_bandana_trinket_desc']");
attachHoverListeners("[id='wrathful_bandana_trinket']", "[id='wrathful_bandana_trinket_desc']");

//Bounty Hunter

attachHoverListeners("[id='agility_talon_trinket']", "[id='agility_talon_trinket_desc']");
attachHoverListeners("[id='unmovable_helmet_trinket']", "[id='unmovable_helmet_trinket_desc']");
attachHoverListeners("[id='camper\\'s_helmet_trinket']", "[id='camper\\'s_helmet_trinket_desc']");
attachHoverListeners("[id='hunter\\'s_talons_trinket']", "[id='hunter\\'s_talons_trinket_desc']");
attachHoverListeners("[id='wounding_helmet_trinket']", "[id='wounding_helmet_trinket_desc']");

//Crusader

attachHoverListeners("[id='defender\\'s_seal_trinket']", "[id='defender\\'s_seal_trinket_desc']");
attachHoverListeners("[id='knight\\'s_crest_trinket']", "[id='knight\\'s_crest_trinket_desc']");
attachHoverListeners("[id='swordsman\\'s_crest_trinket']", "[id='swordsman\\'s_crest_trinket_desc']");
attachHoverListeners("[id='paralyzer\\'s_crest_trinket']", "[id='paralyzer\\'s_crest_trinket_desc']");
attachHoverListeners("[id='commander\\'s_orders_trinket']", "[id='commander\\'s_orders_trinket_desc']");
attachHoverListeners("[id='holy_orders_trinket']", "[id='holy_orders_trinket_desc']");

//Grave Robber

attachHoverListeners("[id='quickening_satchel_trinket']", "[id='quickening_satchel_trinket_desc']");
attachHoverListeners("[id='sickening_satchel_trinket']", "[id='sickening_satchel_trinket_desc']");
attachHoverListeners("[id='blighting_satchel_trinket']", "[id='blighting_satchel_trinket_desc']");
attachHoverListeners("[id='lucky_talisman_trinket']", "[id='lucky_talisman_trinket_desc']");
attachHoverListeners("[id='raider\\'s_talisman_trinket']", "[id='raider\\'s_talisman_trinket_desc']");

//Hellion

attachHoverListeners("[id='bleeding_pendant_trinket']", "[id='bleeding_pendant_trinket_desc']");
attachHoverListeners("[id='selfish_pendant_trinket']", "[id='selfish_pendant_trinket_desc']");
attachHoverListeners("[id='double_edged_pendant_trinket']", "[id='double_edged_pendant_trinket_desc']");
attachHoverListeners("[id='heaven\\'s_hairpin_trinket']", "[id='heaven\\'s_hairpin_trinket_desc']");
attachHoverListeners("[id='hell\\'s_hairpin_trinket']", "[id='hell\\'s_hairpin_trinket_desc']");

//Highwayman

attachHoverListeners("[id='drifter\\'s_buckle_trinket']", "[id='drifter\\'s_buckle_trinket_desc']");
attachHoverListeners("[id='flashfire_gunpowder_trinket']", "[id='flashfire_gunpowder_trinket_desc']");
attachHoverListeners("[id='stalwart_buckle_trinket']", "[id='stalwart_buckle_trinket_desc']");
attachHoverListeners("[id='dodgy_sheath_trinket']", "[id='dodgy_sheath_trinket_desc']");
attachHoverListeners("[id='sharpening_sheath_trinket']", "[id='sharpening_sheath_trinket_desc']");
attachHoverListeners("[id='gunslinger\\'s_buckle_trinket']", "[id='gunslinger\\'s_buckle_trinket_desc']");

//Houndmaster

attachHoverListeners("[id='agility_whistle_trinket']", "[id='agility_whistle_trinket_desc']");
attachHoverListeners("[id='scouting_whistle_trinket']", "[id='scouting_whistle_trinket_desc']");
attachHoverListeners("[id='cudgel_weight_trinket']", "[id='cudgel_weight_trinket_desc']");
attachHoverListeners("[id='protective_collar_trinket']", "[id='protective_collar_trinket_desc']");
attachHoverListeners("[id='spiked_collar_trinket']", "[id='spiked_collar_trinket_desc']");

//Jester

attachHoverListeners("[id='bloody_dice_trinket']", "[id='bloody_dice_trinket_desc']");
attachHoverListeners("[id='lucky_dice_trinket']", "[id='lucky_dice_trinket_desc']");
attachHoverListeners("[id='critical_dice_trinket']", "[id='critical_dice_trinket_desc']");
attachHoverListeners("[id='bright_tambourine_trinket']", "[id='bright_tambourine_trinket_desc']");
attachHoverListeners("[id='dark_tambourine_trinket']", "[id='dark_tambourine_trinket_desc']");

//Leper

attachHoverListeners("[id='healing_armlet_trinket']", "[id='healing_armlet_trinket_desc']");
attachHoverListeners("[id='redemption_armlet_trinket']", "[id='redemption_armlet_trinket_desc']");
attachHoverListeners("[id='fortunate_armlet_trinket']", "[id='fortunate_armlet_trinket_desc']");
attachHoverListeners("[id='immunity_mask_trinket']", "[id='immunity_mask_trinket_desc']");
attachHoverListeners("[id='berserk_mask_trinket']", "[id='berserk_mask_trinket_desc']");

//Man At Arms

attachHoverListeners("[id='cleansing_eyepatch_trinket']", "[id='cleansing_eyepatch_trinket_desc']");
attachHoverListeners("[id='sly_eyepatch_trinket']", "[id='sly_eyepatch_trinket_desc']");
attachHoverListeners("[id='longevity_eyepatch_trinket']", "[id='longevity_eyepatch_trinket_desc']");
attachHoverListeners("[id='rampart_shield_trinket']", "[id='rampart_shield_trinket_desc']");
attachHoverListeners("[id='guardian\\'s_shield_trinket']", "[id='guardian\\'s_shield_trinket_desc']");

//Musketeer

attachHoverListeners("[id='sturdy_boots_trinket']", "[id='sturdy_boots_trinket_desc']");
attachHoverListeners("[id='vengeful_boots_trinket']", "[id='vengeful_boots_trinket_desc']");
attachHoverListeners("[id='medic\\'s_boots_trinket']", "[id='medic\\'s_boots_trinket_desc']");
attachHoverListeners("[id='bull\\'s_eye_hat_trinket']", "[id='bull\\'s_eye_hat_trinket_desc']");
attachHoverListeners("[id='wrathful_hat_trinket']", "[id='wrathful_hat_trinket_desc']");

//Occultist

attachHoverListeners("[id='eldritch_killing_incense_trinket']", "[id='eldritch_killing_incense_trinket_desc']");
attachHoverListeners("[id='evasion_incense_trinket']", "[id='evasion_incense_trinket_desc']");
attachHoverListeners("[id='cursed_incense_trinket']", "[id='cursed_incense_trinket_desc']");
attachHoverListeners("[id='sacrificial_cauldron_trinket']", "[id='sacrificial_cauldron_trinket_desc']");
attachHoverListeners("[id='demon\\'s_cauldron_trinket']", "[id='demon\\'s_cauldron_trinket_desc']");

//Plague Doctor

attachHoverListeners("[id='diseased_herb_trinket']", "[id='diseased_herb_trinket_desc']");
attachHoverListeners("[id='poisoned_herb_trinket']", "[id='poisoned_herb_trinket_desc']");
attachHoverListeners("[id='bloody_herb_trinket']", "[id='bloody_herb_trinket_desc']");
attachHoverListeners("[id='witch\\'s_vial_trinket']", "[id='witch\\'s_vial_trinket_desc']");
attachHoverListeners("[id='blasphemous_vial_trinket']", "[id='blasphemous_vial_trinket_desc']");
attachHoverListeners("[id='rotgut_censer_trinket']", "[id='rotgut_censer_trinket_desc']");

//Vestal

attachHoverListeners("[id='virtuous_chalice_trinket']", "[id='virtuous_chalice_trinket_desc']");
attachHoverListeners("[id='haste_chalice_trinket']", "[id='haste_chalice_trinket_desc']");
attachHoverListeners("[id='youth_chalice_trinket']", "[id='youth_chalice_trinket_desc']");
attachHoverListeners("[id='profane_scroll_trinket']", "[id='profane_scroll_trinket_desc']");
attachHoverListeners("[id='sacred_scroll_trinket']", "[id='sacred_scroll_trinket_desc']");
attachHoverListeners("[id='tome_of_holy_healing_trinket']", "[id='tome_of_holy_healing_trinket_desc']");

//Flagellant

attachHoverListeners("[id='heartburst_hood_trinket']", "[id='heartburst_hood_trinket_desc']");
attachHoverListeners("[id='punishment\\'s_hood_trinket']", "[id='punishment\\'s_hood_trinket_desc']");
attachHoverListeners("[id='resurrection\\'s_collar_trinket']", "[id='resurrection\\'s_collar_trinket_desc']");
attachHoverListeners("[id='suffering\\'s_collar_trinket']", "[id='suffering\\'s_collar_trinket_desc']");
attachHoverListeners("[id='eternity\\'s_collar_trinket']", "[id='eternity\\'s_collar_trinket_desc']");

//Shieldbreaker

attachHoverListeners("[id='venomous_vial_trinket']", "[id='venomous_vial_trinket_desc']");
attachHoverListeners("[id='shimmering_scale_trinket']", "[id='shimmering_scale_trinket_desc']");
attachHoverListeners("[id='dancer\\'s_footwraps_trinket']", "[id='dancer\\'s_footwraps_trinket_desc']");
attachHoverListeners("[id='fanged_spear_tip_trinket']", "[id='fanged_spear_tip_trinket_desc']");
attachHoverListeners("[id='cuirboilli_trinket']", "[id='cuirboilli_trinket_desc']");

//Class CC Trinkets

attachHoverListeners("[id='shameful_shroud_trinket']", "[id='shameful_shroud_trinket_desc']");
attachHoverListeners("[id='osmond_chains_trinket']", "[id='osmond_chains_trinket_desc']");

attachHoverListeners("[id='the_master\\'s_essence_trinket']", "[id='the_master\\'s_essence_trinket_desc']");
attachHoverListeners("[id='two_of_three_trinket']", "[id='two_of_three_trinket_desc']");

attachHoverListeners("[id='childhood_treasure_trinket']", "[id='childhood_treasure_trinket_desc']");
attachHoverListeners("[id='bedtime_story_trinket']", "[id='bedtime_story_trinket_desc']");

attachHoverListeners("[id='crime_lords\\'_molars_trinket']", "[id='crime_lords\\'_molars_trinket_desc']");
attachHoverListeners("[id='vengeful_kill_list_trinket']", "[id='vengeful_kill_list_trinket_desc']");

attachHoverListeners("[id='glittering_spaulders_trinket']", "[id='glittering_spaulders_trinket_desc']");
attachHoverListeners("[id='signed_conscription_trinket']", "[id='signed_conscription_trinket_desc']");

attachHoverListeners("[id='chipped_tooth_trinket']", "[id='chipped_tooth_trinket_desc']");
attachHoverListeners("[id='shard_of_glass_trinket']", "[id='shard_of_glass_trinket_desc']");

attachHoverListeners("[id='absinthe_trinket']", "[id='absinthe_trinket_desc']");
attachHoverListeners("[id='sharpened_letter_opener_trinket']", "[id='sharpened_letter_opener_trinket_desc']");

attachHoverListeners("[id='lioness_warpaint_trinket']", "[id='lioness_warpaint_trinket_desc']");
attachHoverListeners("[id='mark_of_the_outcast_trinket']", "[id='mark_of_the_outcast_trinket_desc']");

attachHoverListeners("[id='bloodied_neckerchief_trinket']", "[id='bloodied_neckerchief_trinket_desc']");
attachHoverListeners("[id='shameful_locket_trinket']", "[id='shameful_locket_trinket_desc']");

attachHoverListeners("[id='evidence_of_corruption_trinket']", "[id='evidence_of_corruption_trinket_desc']");
attachHoverListeners("[id='battered_lawman\\'s_badge_trinket']", "[id='battered_lawman\\'s_badge_trinket_desc']");

attachHoverListeners("[id='tyrant\\'s_tasting_cup_trinket']", "[id='tyrant\\'s_tasting_cup_trinket_desc']");
attachHoverListeners("[id='tyrant\\'s_fingerbone_trinket']", "[id='tyrant\\'s_fingerbone_trinket_desc']");

attachHoverListeners("[id='last_will_and_testament_trinket']", "[id='last_will_and_testament_trinket_desc']");
attachHoverListeners("[id='tin_flute_trinket']", "[id='tin_flute_trinket_desc']");

attachHoverListeners("[id='old_unit_standard_trinket']", "[id='old_unit_standard_trinket_desc']");
attachHoverListeners("[id='toy_soldier_trinket']", "[id='toy_soldier_trinket_desc']");

attachHoverListeners("[id='second_place_trophy_trinket']", "[id='second_place_trophy_trinket_desc']");
attachHoverListeners("[id='silver_musket_ball_trinket']", "[id='silver_musket_ball_trinket_desc']");

attachHoverListeners("[id='blood_pact_trinket']", "[id='blood_pact_trinket_desc']");
attachHoverListeners("[id='vial_of_sand_trinket']", "[id='vial_of_sand_trinket_desc']");

attachHoverListeners("[id='subject_#40_notes_trinket']", "[id='subject_#40_notes_trinket_desc']");
attachHoverListeners("[id='dissection_kit_trinket']", "[id='dissection_kit_trinket_desc']");

attachHoverListeners("[id='obsidian_dagger_trinket']", "[id='obsidian_dagger_trinket_desc']");
attachHoverListeners("[id='severed_hand_trinket']", "[id='severed_hand_trinket_desc']");

attachHoverListeners("[id='atonement_beads_trinket']", "[id='atonement_beads_trinket_desc']");
attachHoverListeners("[id='salacious_diary_trinket']", "[id='salacious_diary_trinket_desc']");

//Class CoM Trinkets

attachHoverListeners("[id='petrified_skull_trinket']", "[id='petrified_skull_trinket_desc']");
attachHoverListeners("[id='broken_key_trinket']", "[id='broken_key_trinket_desc']");
attachHoverListeners("[id='smoking_skull_trinket']", "[id='smoking_skull_trinket_desc']");
attachHoverListeners("[id='ashen_distillation_trinket']", "[id='ashen_distillation_trinket_desc']");
attachHoverListeners("[id='dirge_for_the_devoured_trinket']", "[id='dirge_for_the_devoured_trinket_desc']");
attachHoverListeners("[id='acidic_husk_ichor_trinket']", "[id='acidic_husk_ichor_trinket_desc']");
attachHoverListeners("[id='spectral_speartip_trinket']", "[id='spectral_speartip_trinket_desc']");
attachHoverListeners("[id='heretical_passage_trinket']", "[id='heretical_passage_trinket_desc']");
attachHoverListeners("[id='huskfang_whistle_trinket']", "[id='huskfang_whistle_trinket_desc']");
attachHoverListeners("[id='mask_of_the_timeless_trinket']", "[id='mask_of_the_timeless_trinket_desc']");
attachHoverListeners("[id='mirror_shield_trinket']", "[id='mirror_shield_trinket_desc']");
attachHoverListeners("[id='topshelf_tonic_trinket']", "[id='topshelf_tonic_trinket_desc']");
attachHoverListeners("[id='petrified_amulet_trinket']", "[id='petrified_amulet_trinket_desc']");
attachHoverListeners("[id='crystalline_gunpowder_trinket']", "[id='crystalline_gunpowder_trinket_desc']");
attachHoverListeners("[id='thirsting_blade_trinket']", "[id='thirsting_blade_trinket_desc']");
attachHoverListeners("[id='icosahedric_musket_balls_trinket']", "[id='icosahedric_musket_balls_trinket_desc']");
attachHoverListeners("[id='keening_bolts_trinket']", "[id='keening_bolts_trinket_desc']");
attachHoverListeners("[id='non_euclidean_hilt_trinket']", "[id='non_euclidean_hilt_trinket_desc']");


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



