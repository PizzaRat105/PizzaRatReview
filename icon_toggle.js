document.addEventListener("DOMContentLoaded", function() {
  attachHoverListeners("[id^='sharedcamp']", "[id^='genericamp']");
  attachHoverListeners("[id^='infobtn1']", "[id^='infotxt1']");
  attachHoverListeners("[id^='infobtn2']", "[id^='infotxt2']");
  
  attachHoverListeners("[id^='abomcombat']", "[id^='combatabom']");
  attachHoverListeners("[id^='abomcamp']", "[id^='restabom']");
  attachHoverListeners("[id^='abomweapon']", "[id^='weaponabom']");
  attachHoverListeners("[id^='abomarmor']", "[id^='armorabom']");

  attachHoverListeners("[id^='anticombat']", "[id^='combatanti']");
  attachHoverListeners("[id^='anticamp']", "[id^='restanti']");
  attachHoverListeners("[id^='antiweapon']", "[id^='weaponanti']");
  attachHoverListeners("[id^='antiarmor']", "[id^='armoranti']");

  attachHoverListeners("[id^='arbcombat']", "[id^='combatarb']");
  attachHoverListeners("[id^='arbcamp']", "[id^='restarb']");
  attachHoverListeners("[id^='arbweapon']", "[id^='weaponarb']");
  attachHoverListeners("[id^='arbarmor']", "[id^='armorarb']");

  attachHoverListeners("[id^='bhcombat']", "[id^='combatbh']");
  attachHoverListeners("[id^='bhcamp']", "[id^='restbh']");
  attachHoverListeners("[id^='bhweapon']", "[id^='weaponbh']");
  attachHoverListeners("[id^='bharmor']", "[id^='armorbh']");

  attachHoverListeners("[id^='cruscombat']", "[id^='combatcrus']");
  attachHoverListeners("[id^='cruscamp']", "[id^='restcrus']");
  attachHoverListeners("[id^='crusweapon']", "[id^='weaponcrus']");
  attachHoverListeners("[id^='crusarmor']", "[id^='armorcrus']");

  attachHoverListeners("[id^='flagcombat']", "[id^='combatflag']");
  attachHoverListeners("[id^='flagcamp']", "[id^='restflag']");
  attachHoverListeners("[id^='flagweapon']", "[id^='weaponflag']");
  attachHoverListeners("[id^='flagarmor']", "[id^='armorflag']");

  attachHoverListeners("[id^='grcombat']", "[id^='combatgr']");
  attachHoverListeners("[id^='grcamp']", "[id^='restgr']");
  attachHoverListeners("[id^='grweapon']", "[id^='weapongr']");
  attachHoverListeners("[id^='grarmor']", "[id^='armorgr']");

  attachHoverListeners("[id^='hellcombat']", "[id^='combathell']");
  attachHoverListeners("[id^='hellcamp']", "[id^='resthell']");
  attachHoverListeners("[id^='hellweapon']", "[id^='weaponhell']");
  attachHoverListeners("[id^='hellarmor']", "[id^='armorhell']");

  attachHoverListeners("[id^='hwmcombat']", "[id^='combathwm']");
  attachHoverListeners("[id^='hwmcamp']", "[id^='resthwm']");
  attachHoverListeners("[id^='hwmweapon']", "[id^='weaponhwm']");
  attachHoverListeners("[id^='hwmarmor']", "[id^='armorhwm']");

  attachHoverListeners("[id^='hmcombat']", "[id^='combathm']");
  attachHoverListeners("[id^='hmcamp']", "[id^='resthm']");
  attachHoverListeners("[id^='hmweapon']", "[id^='weaponhm']");
  attachHoverListeners("[id^='hmarmor']", "[id^='armorhm']");

  attachHoverListeners("[id^='jescombat']", "[id^='combatjes']");
  attachHoverListeners("[id^='jescamp']", "[id^='restjes']");
  attachHoverListeners("[id^='jesweapon']", "[id^='weaponjes']");
  attachHoverListeners("[id^='jesarmor']", "[id^='armorjes']");

  attachHoverListeners("[id^='lepcombat']", "[id^='combatlep']");
  attachHoverListeners("[id^='lepcamp']", "[id^='restlep']");
  attachHoverListeners("[id^='lepweapon']", "[id^='weaponlep']");
  attachHoverListeners("[id^='leparmor']", "[id^='armorlep']");

  attachHoverListeners("[id^='maacombat']", "[id^='combatmaa']");
  attachHoverListeners("[id^='maacamp']", "[id^='restmaa']");
  attachHoverListeners("[id^='maaweapon']", "[id^='weaponmaa']");
  attachHoverListeners("[id^='maaarmor']", "[id^='armormaa']");

  attachHoverListeners("[id^='muskcombat']", "[id^='combatmusk']");
  attachHoverListeners("[id^='muskcamp']", "[id^='restmusk']");
  attachHoverListeners("[id^='muskweapon']", "[id^='weaponmusk']");
  attachHoverListeners("[id^='muskarmor']", "[id^='armormusk']");

  attachHoverListeners("[id^='occcombat']", "[id^='combatocc']");
  attachHoverListeners("[id^='occcamp']", "[id^='restocc']");
  attachHoverListeners("[id^='occweapon']", "[id^='weaponocc']");
  attachHoverListeners("[id^='occarmor']", "[id^='armorocc']");

  attachHoverListeners("[id^='pdcombat']", "[id^='combatpd']");
  attachHoverListeners("[id^='pdcamp']", "[id^='restpd']");
  attachHoverListeners("[id^='pdweapon']", "[id^='weaponpd']");
  attachHoverListeners("[id^='pdarmor']", "[id^='armorpd']");

  attachHoverListeners("[id^='sbcombat']", "[id^='combatsb']");
  attachHoverListeners("[id^='sbcamp']", "[id^='restsb']");
  attachHoverListeners("[id^='sbweapon']", "[id^='weaponsb']");
  attachHoverListeners("[id^='sbarmor']", "[id^='armorsb']");

  attachHoverListeners("[id^='vescombat']", "[id^='combatves']");
  attachHoverListeners("[id^='vescamp']", "[id^='restves']");
  attachHoverListeners("[id^='vestweapon']", "[id^='weaponves']");
  attachHoverListeners("[id^='vestarmor']", "[id^='armorves']");

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

