document.addEventListener("DOMContentLoaded", function() {
  attachHoverListeners("[id^='sharedcamp']", "[id^='genericamp']");
  
  attachHoverListeners("[id^='abomcombat']", "[id^='combatabom']");
  attachHoverListeners("[id^='abomcamp']", "[id^='restabom']");

  attachHoverListeners("[id^='anticombat']", "[id^='combatanti']");
  attachHoverListeners("[id^='anticamp']", "[id^='restanti']");

  attachHoverListeners("[id^='arbcombat']", "[id^='combatarb']");
  attachHoverListeners("[id^='arbcamp']", "[id^='restarb']");

  attachHoverListeners("[id^='bhcombat']", "[id^='combatbh']");
  attachHoverListeners("[id^='bhcamp']", "[id^='restbh']");

  attachHoverListeners("[id^='cruscombat']", "[id^='combatcrus']");
  attachHoverListeners("[id^='cruscamp']", "[id^='restcrus']");

  attachHoverListeners("[id^='flagcombat']", "[id^='combatflag']");
  attachHoverListeners("[id^='flagcamp']", "[id^='restflag']");

  attachHoverListeners("[id^='grcombat']", "[id^='combatgr']");
  attachHoverListeners("[id^='grcamp']", "[id^='restgr']");

  attachHoverListeners("[id^='hellcombat']", "[id^='combathell']");
  attachHoverListeners("[id^='hellcamp']", "[id^='resthell']");

  attachHoverListeners("[id^='hwmcombat']", "[id^='combathwm']");
  attachHoverListeners("[id^='hwmcamp']", "[id^='resthwm']");

  attachHoverListeners("[id^='hmcombat']", "[id^='combathm']");
  attachHoverListeners("[id^='hmcamp']", "[id^='resthm']");

  attachHoverListeners("[id^='jescombat']", "[id^='combatjes']");
  attachHoverListeners("[id^='jescamp']", "[id^='restjes']");

  attachHoverListeners("[id^='lepcombat']", "[id^='combatlep']");
  attachHoverListeners("[id^='lepcamp']", "[id^='restlep']");

  attachHoverListeners("[id^='maacombat']", "[id^='combatmaa']");
  attachHoverListeners("[id^='maacamp']", "[id^='restmaa']");

  attachHoverListeners("[id^='muskcombat']", "[id^='combatmusk']");
  attachHoverListeners("[id^='muskcamp']", "[id^='restmusk']");

  attachHoverListeners("[id^='occcombat']", "[id^='combatocc']");
  attachHoverListeners("[id^='occcamp']", "[id^='restocc']");

  attachHoverListeners("[id^='pdcombat']", "[id^='combatpd']");
  attachHoverListeners("[id^='pdcamp']", "[id^='restpd']");

  attachHoverListeners("[id^='sbcombat']", "[id^='combatsb']");
  attachHoverListeners("[id^='sbcamp']", "[id^='restsb']");

  attachHoverListeners("[id^='vescombat']", "[id^='combatves']");
  attachHoverListeners("[id^='vescamp']", "[id^='restves']");

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
