
document.addEventListener("DOMContentLoaded", function() {


  for (let i = 1; i <= 9; i++) { 
    attachDescriptionHoverListeners(`crustrinket${i}`)
    attachDescriptionHoverListeners(`hwmtrinket${i}`)
    attachDescriptionHoverListeners(`pdtrinket${i}`)
    attachDescriptionHoverListeners(`vestrinket${i}`)
  }

  for (let i = 1; i <= 8; i++) { 
    attachDescriptionHoverListeners(`abomtrinket${i}`)
    attachDescriptionHoverListeners(`antitrinket${i}`)
    attachDescriptionHoverListeners(`arbtrinket${i}`)
    attachDescriptionHoverListeners(`bhtrinket${i}`)
    attachDescriptionHoverListeners(`flagtrinket${i}`)
    attachDescriptionHoverListeners(`grtrinket${i}`)
    attachDescriptionHoverListeners(`helltrinket${i}`)
    attachDescriptionHoverListeners(`hmtrinket${i}`)
    attachDescriptionHoverListeners(`jestrinket${i}`)
    attachDescriptionHoverListeners(`leptrinket${i}`)
    attachDescriptionHoverListeners(`maatrinket${i}`)
    attachDescriptionHoverListeners(`musktrinket${i}`)
    attachDescriptionHoverListeners(`occtrinket${i}`)
    attachDescriptionHoverListeners(`sbtrinket${i}`)
  }





  for (let i = 1; i <= 4; i++) {    
    addHoverListener(document.getElementById(`abomcamp${i}`), document.getElementById(`abom_camp_desc${i}`));
    addHoverListener(document.getElementById(`anticamp${i}`), document.getElementById(`anti_camp_desc${i}`));
    addHoverListener(document.getElementById(`arbcamp${i}`), document.getElementById(`arb_camp_desc${i}`));
    addHoverListener(document.getElementById(`bhcamp${i}`), document.getElementById(`bh_camp_desc${i}`));
    addHoverListener(document.getElementById(`cruscamp${i}`), document.getElementById(`crus_camp_desc${i}`));
    addHoverListener(document.getElementById(`flagcamp${i}`), document.getElementById(`flag_camp_desc${i}`));
    addHoverListener(document.getElementById(`grcamp${i}`), document.getElementById(`gr_camp_desc${i}`));
    addHoverListener(document.getElementById(`hellcamp${i}`), document.getElementById(`hell_camp_desc${i}`));
    addHoverListener(document.getElementById(`hwmcamp${i}`), document.getElementById(`hwm_camp_desc${i}`));
    addHoverListener(document.getElementById(`hmcamp${i}`), document.getElementById(`hm_camp_desc${i}`));
    addHoverListener(document.getElementById(`jescamp${i}`), document.getElementById(`jes_camp_desc${i}`));
    addHoverListener(document.getElementById(`lepcamp${i}`), document.getElementById(`lep_camp_desc${i}`));
    addHoverListener(document.getElementById(`maacamp${i}`), document.getElementById(`maa_camp_desc${i}`));
    addHoverListener(document.getElementById(`muskcamp${i}`), document.getElementById(`musk_camp_desc${i}`));
    addHoverListener(document.getElementById(`occcamp${i}`), document.getElementById(`occ_camp_desc${i}`));
    addHoverListener(document.getElementById(`pdcamp${i}`), document.getElementById(`pd_camp_desc${i}`));
    addHoverListener(document.getElementById(`sbcamp${i}`), document.getElementById(`sb_camp_desc${i}`));
    addHoverListener(document.getElementById(`vescamp${i}`), document.getElementById(`ves_camp_desc${i}`));

  }

attachHoverListeners("[id='infobtn1']", "[id='infotxt1']");
attachHoverListeners("[id='infobtn2']", "[id='infotxt2']");


attachMultipleHoverListeners(".holy_water_provision", "#holy_water_provision_desc");
attachMultipleHoverListeners(".bandage_provision", "#bandage_provision_desc");
attachMultipleHoverListeners(".skeleton_key_provision", "#skeleton_key_provision_desc");
attachMultipleHoverListeners(".shovel_provision", "#shovel_provision_desc");
attachMultipleHoverListeners(".dog_treats_provision", "#dog_treats_provision_desc");
attachMultipleHoverListeners(".antivenom_provision", "#antivenom_provision_desc");
attachMultipleHoverListeners(".medicinal_herbs_provision", "#medicinal_herbs_provision_desc");


}

)



function attachMultipleHoverListeners(triggerSelector, targetSelector) {
  var triggerElements = document.querySelectorAll(triggerSelector);
  var targetElement = document.querySelector(targetSelector);

  for (var triggerElement of triggerElements) {
    attachHoverListener(triggerElement, targetElement);
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


function attachDescriptionHoverListeners(elementID) {
  var triggerElement = document.getElementById(elementID);

      var targetElementID = elementID + "_desc";
      var targetElement = document.getElementById(targetElementID);


      if (targetElement) {
        attachHoverListener(triggerElement, targetElement);
    }
  }

  function attachSeveralDescriptionHoverListeners(elementID) {
    var triggerElement = document.getElementById(elementID);
  
        var targetElementID = elementID + "_trinket_desc";
        var targetElement = document.getElementById(targetElementID);
  
  
        if (targetElement) {
          attachHoverListener(triggerElement, targetElement);
      }
    }
  



const sharedCamp1 = document.querySelectorAll('.sharedcamp1');
const sharedCampDesc1 = document.getElementById('shared_camp_desc1');

const sharedCamp2 = document.querySelectorAll('.sharedcamp2');
const sharedCampDesc2 = document.getElementById('shared_camp_desc2');

const sharedCamp3 = document.querySelectorAll('.sharedcamp3');
const sharedCampDesc3 = document.getElementById('shared_camp_desc3');

sharedCamp1.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    sharedCampDesc1.style.display = 'flex';
  });

  element.addEventListener('mouseleave', () => {
    sharedCampDesc1.style.display = 'none';
  });
});

sharedCamp2.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    sharedCampDesc2.style.display = 'flex';
  });

  element.addEventListener('mouseleave', () => {
    sharedCampDesc2.style.display = 'none';
  });
});

sharedCamp3.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    sharedCampDesc3.style.display = 'flex';
  });

  element.addEventListener('mouseleave', () => {
    sharedCampDesc3.style.display = 'none';
  });
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





  

  function attachClickListeners(clickTriggerSelector, clickTargetSelector, clickHideSelector) {
    var clickTriggerElements = document.querySelectorAll(clickTriggerSelector);
    var clickTargetElements = document.querySelectorAll(clickTargetSelector);
    var clickHideElements = document.querySelectorAll('.' + clickHideSelector); // Query elements by class name
  
    for (var i = 0; i < clickTriggerElements.length; i++) {
      attachClickListener(clickTriggerElements[i], clickTargetElements[i], clickHideElements);
    }
  }
  
  function attachClickListener(trigger, target, hides) {
    trigger.addEventListener("click", function() {
      PlayIconPress()
      for (var i = 0; i < hides.length; i++) {
        hides[i].style.display = "none";
      }
      target.style.display = "block";
    });
  }
  
  

  function addEquipmentHoverListeners(prefix, count) {
    for (let i = 1; i <= count; i++) {
      const weaponTrigger = document.getElementById(`${prefix}_weapon${i}`);
      const armorTrigger = document.getElementById(`${prefix}_armor${i}`);
  
      const weaponTarget = document.getElementById(`${prefix}_weapon_desc${i}`);
      const armorTarget = document.getElementById(`${prefix}_armor_desc${i}`);
  
      addHoverListener(weaponTrigger, weaponTarget);
      addHoverListener(armorTrigger, armorTarget);
    }
  }
  addEquipmentHoverListeners('abom', 5);
  addEquipmentHoverListeners('anti', 5);
  addEquipmentHoverListeners('arb', 5);
  addEquipmentHoverListeners('bh', 5);
  addEquipmentHoverListeners('crus', 5);
  addEquipmentHoverListeners('flag', 5);
  addEquipmentHoverListeners('gr', 5);
  addEquipmentHoverListeners('hell', 5);
  addEquipmentHoverListeners('hwm', 5);
  addEquipmentHoverListeners('hm', 5);
  addEquipmentHoverListeners('jes', 5);
  addEquipmentHoverListeners('lep', 5);
  addEquipmentHoverListeners('maa', 5);
  addEquipmentHoverListeners('musk', 5);
  addEquipmentHoverListeners('occ', 5);
  addEquipmentHoverListeners('pd', 5);
  addEquipmentHoverListeners('sb', 5);
  addEquipmentHoverListeners('ves', 5);


  
  function addHoverListener(trigger, target) {
    trigger.addEventListener("mouseenter", () => {
      target.style.display = "flex";
    });
  
    trigger.addEventListener("mouseleave", () => {
      target.style.display = "none";
    });
  }


  const ResolveLvl0 = document.getElementById("resolve_1")
  const ResolveLvl2 = document.getElementById("resolve_2")
  const ResolveLvl3 = document.getElementById("resolve_3")
  const ResolveLvl4 = document.getElementById("resolve_4")
  const ResolveLvl6 = document.getElementById("resolve_5")


  function SkillIconToggle(hero, num) {
    const SkillIcon = document.getElementById(`${hero}combat${num}`);
    const SkillDescLvl1 = document.getElementById(`${hero}combat_desc${num}a`);
    const SkillDescLvl2 = document.getElementById(`${hero}combat_desc${num}b`);
    const SkillDescLvl3 = document.getElementById(`${hero}combat_desc${num}c`);
    const SkillDescLvl4 = document.getElementById(`${hero}combat_desc${num}d`);
    const SkillDescLvl5 = document.getElementById(`${hero}combat_desc${num}e`);
  
    SkillIcon.addEventListener('mouseenter', function() {
      if (ResolveLvl0.style.display === 'block') {
        SkillDescLvl1.style.display = 'flex';
      } else if (ResolveLvl2.style.display === 'block') {
        SkillDescLvl2.style.display = 'flex';
      } else if (ResolveLvl3.style.display === 'block') {
        SkillDescLvl3.style.display = 'flex';
      } else if (ResolveLvl4.style.display === 'block') {
        SkillDescLvl4.style.display = 'flex';
      } else if (ResolveLvl6.style.display === 'block') {
        SkillDescLvl5.style.display = 'flex';
      }
    });
  
    SkillIcon.addEventListener('mouseleave', function() {
      SkillDescLvl1.style.display = 'none';
      SkillDescLvl2.style.display = 'none';
      SkillDescLvl3.style.display = 'none';
      SkillDescLvl4.style.display = 'none';
      SkillDescLvl5.style.display = 'none';
    });
  }
  
  for (let i = 1; i <= 7; i++) {   
    SkillIconToggle('abom', i); 
    SkillIconToggle('anti', i);
    SkillIconToggle('arb', i);
    SkillIconToggle('bh', i);
    SkillIconToggle('crus', i);
    SkillIconToggle('flag', i);
    SkillIconToggle('gr', i);
    SkillIconToggle('hell', i);
    SkillIconToggle('hwm', i);
    SkillIconToggle('hm', i);
    SkillIconToggle('jes', i);
    SkillIconToggle('lep', i);    
    SkillIconToggle('maa', i);
    SkillIconToggle('musk', i);
    SkillIconToggle('sb', i);
    SkillIconToggle('occ', i);
    SkillIconToggle('pd', i);
    SkillIconToggle('ves', i);
    }

    
