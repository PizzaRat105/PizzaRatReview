const CurioPorts = document.getElementsByClassName('curio_port')
for (const CurioPort of CurioPorts) {
   CurioPort.addEventListener('click', function() {
    PlayBtnPress();  })
   }
function toggleElementDisplay(trigger, target, interactTarget) {
   trigger.addEventListener('click', function() {

   hideAllElements();
     target.style.display = "block";
     if (interactTarget) {
       interactTarget.style.display = "block";
     }
   });
 }

 function hideAllElements() {
   elementMappings.forEach((mapping) => {
     const trigger = document.getElementById(mapping.triggerId);
     const target = document.getElementById(mapping.targetId);
     const interactTarget = document.getElementById(mapping.interactTargetId);
 
     target.style.display = "none";
     if (interactTarget) {
       interactTarget.style.display = "none";
     }
   });
 }

 

 const elementMappings = [
   {
     triggerId: "alchemy_table_nav",
     targetId: "alchemy_table_container",
     interactTargetId: "alchemy_table_interact_container"
   },

   {
     triggerId: "altar_of_light_nav",
     targetId: "altar_of_light_container",
     interactTargetId: "altar_of_light_interact_container"
   },

   {
     triggerId: "bookshelf_nav",
     targetId: "bookshelf_container",
     interactTargetId: "bookshelf_interact_container"
   },

   {
     triggerId: "confession_booth_nav",
     targetId: "confession_booth_container",
     interactTargetId: "confession_booth_interact_container"
   },

   {
      triggerId: "decorative_urn_nav",
      targetId: "decorative_urn_container",
      interactTargetId: "decorative_urn_interact_container"
   },

   {
     triggerId: "holy_fountain_nav",
     targetId: "holy_fountain_container",
     interactTargetId: "holy_fountain_interact_container"
   },

   {
      triggerId: "iron_maiden_nav",
      targetId: "iron_maiden_container",
      interactTargetId: "iron_maiden_interact_container"
   },

   {
      triggerId: "locked_display_cabinet_nav",
      targetId: "locked_display_cabinet_container",
      interactTargetId: "locked_display_cabinet_interact_container"
   },

   {
      triggerId: "locked_sarcophagus_nav",
      targetId: "locked_sarcophagus_container",
      interactTargetId: "locked_sarcophagus_interact_container"
   },

   {
      triggerId: "sarcophagus_nav",
      targetId: "sarcophagus_container",
      interactTargetId: "sarcophagus_interact_container"
   },

   {
     triggerId: "suit_of_armor_nav",
     targetId: "suit_of_armor_container",
     interactTargetId: "suit_of_armor_interact_container"
   },

   {
      triggerId: "ancient_coffin_nav",
      targetId: "ancient_coffin_container",
      interactTargetId: "ancient_coffin_interact_container"
   },

   {
      triggerId: "beast_carcass_nav",
      targetId: "beast_carcass_container",
      interactTargetId: "beast_carcass_interact_container"
   },

   {
      triggerId: "eerie_spiderweb_nav",
      targetId: "eerie_spiderweb_container",
      interactTargetId: "eerie_spiderweb_interact_container"
   },

   {
      triggerId: "left_luggage_nav",
      targetId: "left_luggage_container",
      interactTargetId: "left_luggage_interact_container"
   },
   
   {
      triggerId: "mummified_remains_nav",
      targetId: "mummified_remains_container",
      interactTargetId: "mummified_remains_interact_container"
   },

   {
      triggerId: "old_tree_nav",
      targetId: "old_tree_container",
      interactTargetId: "old_tree_interact_container"
   },

   {
      triggerId: "pristine_fountain_nav",
      targetId: "pristine_fountain_container",
      interactTargetId: "pristine_fountain_interact_container"
   },

   {
      triggerId: "shallow_grave_nav",
      targetId: "shallow_grave_container",
      interactTargetId: "shallow_grave_interact_container"
   },

   {
      triggerId: "traveler's_tent_nav",
      targetId: "traveler's_tent_container",
      interactTargetId: "traveler's_tent_interact_container"
   },

   {
      triggerId: "troubling_effigy_nav",
      targetId: "troubling_effigy_container",
      interactTargetId: "troubling_effigy_interact_container"
   },

   {
      triggerId: "brigand's_tent_nav",
      targetId: "brigand's_tent_container",
      interactTargetId: "brigand's_tent_interact_container"
   },

   {
      triggerId: "bandit's_trapped_chest_nav",
      targetId: "bandit's_trapped_chest_container",
      interactTargetId: "bandit's_trapped_chest_interact_container"
   },

   {
      triggerId: "transcendent_terror_nav",
      targetId: "transcendent_terror_container",
      interactTargetId: "transcendent_terror_interact_container"
   },

   {
      triggerId: "bone_altar_nav",
      targetId: "bone_altar_container",
      interactTargetId: "bone_altar_interact_container"
   },

   {
      triggerId: "dinner_cart_nav",
      targetId: "dinner_cart_container",
      interactTargetId: "dinner_cart_interact_container"
   },

   {
      triggerId: "makeshift_dining_table_nav",
      targetId: "makeshift_dining_table_container",
      interactTargetId: "makeshift_dining_table_interact_container"
   },

   {
      triggerId: "moonshine_barrel_nav",
      targetId: "moonshine_barrel_container",
      interactTargetId: "moonshine_barrel_interact_container"
   },

   {
      triggerId: "occult_scrawlings_nav",
      targetId: "occult_scrawlings_container",
      interactTargetId: "occult_scrawlings_interact_container"
   },

   {
      triggerId: "pile_of_bones_nav",
      targetId: "pile_of_bones_container",
      interactTargetId: "pile_of_bones_interact_container"
   },

   {
      triggerId: "pile_of_scrolls_nav",
      targetId: "pile_of_scrolls_container",
      interactTargetId: "pile_of_scrolls_interact_container"
   },

   {
      triggerId: "rack_of_blades_nav",
      targetId: "rack_of_blades_container",
      interactTargetId: "rack_of_blades_interact_container"
   },

   {
      triggerId: "sacrificial_stone_nav",
      targetId: "sacrificial_stone_container",
      interactTargetId: "sacrificial_stone_interact_container"
   },
   
   {
      triggerId: "barnacle_crusted_chest_nav",
      targetId: "barnacle_crusted_chest_container",
      interactTargetId: "barnacle_crusted_chest_interact_container"
   },

   {
      triggerId: "bas-relief_nav",
      targetId: "bas-relief_container",
      interactTargetId: "bas-relief_interact_container"
   },

   {
      triggerId: "brackish_tide_pool_nav",
      targetId: "brackish_tide_pool_container",
      interactTargetId: "brackish_tide_pool_interact_container"
   },

   {
      triggerId: "eerie_coral_nav",
      targetId: "eerie_coral_container",
      interactTargetId: "eerie_coral_interact_container"
   },

   {
      triggerId: "fish_carcass_nav",
      targetId: "fish_carcass_container",
      interactTargetId: "fish_carcass_interact_container"
   },

   {
      triggerId: "fish_idol_nav",
      targetId: "fish_idol_container",
      interactTargetId: "fish_idol_interact_container"
   },

   {
      triggerId: "giant_oyster_nav",
      targetId: "giant_oyster_container",
      interactTargetId: "giant_oyster_interact_container"
   },

   {
      triggerId: "ship's_figurehead_nav",
      targetId: "ship's_figurehead_container",
      interactTargetId: "ship's_figurehead_interact_container"
   },

   {
      triggerId: "crate_nav",
      targetId: "crate_container",
      interactTargetId: "crate_interact_container"
   },

   {
      triggerId: "discarded_pack_nav",
      targetId: "discarded_pack_container",
      interactTargetId: "discarded_pack_interact_container"
   },

   {
      triggerId: "eldritch_altar_nav",
      targetId: "eldritch_altar_container",
      interactTargetId: "eldritch_altar_interact_container"
   },

   {
      triggerId: "heirloom_chest_antivenom_nav",
      targetId: "heirloom_chest_antivenom_container",
      interactTargetId: "heirloom_chest_antivenom_interact_container"
   },

   {
      triggerId: "heirloom_chest_shovel_nav",
      targetId: "heirloom_chest_shovel_container",
      interactTargetId: "heirloom_chest_shovel_interact_container"
   },

   {
      triggerId: "sack_nav",
      targetId: "sack_container",
      interactTargetId: "sack_interact_container"
   },

   {
      triggerId: "sconce_nav",
      targetId: "sconce_container",
      interactTargetId: "sconce_interact_container"
   },

   {
      triggerId: "shambler's_altar_nav",
      targetId: "shambler's_altar_container",
      interactTargetId: "shambler's_altar_interact_container"
   },

   {
      triggerId: "stack_of_books_nav",
      targetId: "stack_of_books_container",
      interactTargetId: "stack_of_books_interact_container"
   },

   {
      triggerId: "unlocked_strongbox_nav",
      targetId: "unlocked_strongbox_container",
      interactTargetId: "unlocked_strongbox_interact_container"
   },

   {
      triggerId: "ancient_artifact_nav",
      targetId: "ancient_artifact_container",
      interactTargetId: "ancient_artifact_interact_container"
    },
 {
      triggerId: "ancestor's_knapsack_nav",
      targetId: "ancestor's_knapsack_container",
      interactTargetId: "ancestor's_knapsack_interact_container"
    },
 ];
 
 elementMappings.forEach(mapping => {
   const trigger = document.getElementById(mapping.triggerId);
   const target = document.getElementById(mapping.targetId);
   const interactTarget = document.getElementById(mapping.interactTargetId);
 
   toggleElementDisplay(trigger, target, interactTarget);
 });





