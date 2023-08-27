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

