
const lootMainBox = document.getElementById("lootbox")

const LootIconData = [
    //Gem stack
    {    
  
      icon_src:"images/estate_icons/shard_icon.png",
      icon_id:"gem_info",
  
      label_class:"ddlogo_text gem_label",
      labeltext:"Gems",
  
      class: "general_desc gem_info_desc",
      id:"gem_info_desc",
  
      description: [
        "Gems gain +1 Stack Limit if the Geological Studyhall Color of Madness DLC District is built",
      ]
    },
//Heirloom Trade
    {    
  
        icon_src:"images/estate_icons/heirloom_icon.png",
        icon_id:"heirloom_trade",
    
        label_class:"ddlogo_text heirloom_label",
        labeltext:"Heirlooms",
    
        class: "general_desc heirloom_trade_desc",
        id:"heirloom_trade_desc",
    
        description: [
          "Heirloom Trading ",
          "3 Crests - 1 Bust/Deed // 6 Crests - 1 Portrait ",
          "2 Busts/Deeds - 3 Crests // 3 Busts - 2 Deeds // 3 Deeds - 2 Busts",
          "1 Portrait - 3 Crests // 2 Portraits - 3 Busts/Deeds ",
          "3 Comet Shards - 2 Crests/1 Deed/1 Bust // 6 Comet Shards - 1 Portrait ",
        ]
      },
]


LootIconData.forEach((icon) => {
    const LootIconImg = document.createElement("img");
    LootIconImg.src = icon.icon_src
    LootIconImg.loading = "lazy"
    LootIconImg.id = icon.icon_id

      const LootIconLabel = document.createElement("div");
      LootIconLabel.className = icon.label_class;
      LootIconLabel.innerHTML = icon.labeltext;

      lootMainBox.insertBefore(LootIconLabel, lootMainBox.firstChild);
      lootMainBox.insertBefore(LootIconImg, lootMainBox.firstChild);     

})
LootIconData.forEach((icon) => {
const LootIconDescContainer = document.createElement("div");
LootIconDescContainer.id = icon.id;
LootIconDescContainer.className = icon.class;

icon.description.forEach((text, index) => {
    const StyledText = replaceSpecificLootDescriptionText(text);
    LootIconDescContainer.innerHTML += StyledText;

    if (index < icon.description.length - 1) {
      const linebreak = document.createElement("br");
      LootIconDescContainer.appendChild(linebreak);
    }

  }); 
  lootMainBox.appendChild(LootIconDescContainer);
})

function replaceSpecificLootDescriptionText(description) {
    description = description.replace(/Color of Madness DLC/g, '<span class="crystalline">Color of Madness DLC</span>');
    description = description.replace(/District/g, '<span class="scouting">District</span>');
    description = description.replace(/Geological Studyhall/g, '<span class="highres">Geological Studyhall</span>');
    description = description.replace(/Gems/g, '<span class="buff">Gems</span>');
    description = description.replace(/Heirloom Trading/g, '<span class="stealth">Heirloom Trading</span>');
    description = description.replace(/Comet Shards/g, '<span class="crystalline">Comet Shards</span>');
    return description;
}


const LootItemData = [
  {
      id: "citrine",
      row:"1",
      num:"1",
      title: "Citrine (5 (6) per Stack)",
      value: "[Value: 250 Gold Each]",
      stackvalue: "[Stack Value: 1250(1500)]",
      category: "Gem",
      description: [
          "Drop Chances",
          "Apprentice: 10/30",
          "Veteran: 8/43",
          "Champion: 5/39",
      ], 
  },
  {
      id: "jade",
      row:"1",
      num:"2",
      title: "Jade (5 (6) per Stack)",
      value: "[Value: 375 Gold Each]",
      stackvalue: "[Stack Value: 1875(2250)]",
      category: "Gem",
      description: [
          "Drop Chances",
          "Apprentice: 10/30",
          "Veteran: 8/43",
          "Champion: 5/39",
      ], 
  },
  {
      id: "onyx",
      row:"1",
      num:"3",
      title: "Onyx (5 (6) per Stack)",
      value: "[Value: 500 Gold Each]",
      stackvalue: "[Stack Value: 2500(3000)]",
      category: "Gem",
      description: [
          "Drop Chances",
          "Apprentice: 4/30",
          "Veteran: 10/43",
          "Champion: 8/39",
      ], 
  },
  {
      id: "emerald",
      row:"1",
      num:"4",
      title: "Emerald (5 (6) per Stack)",
      value: "[Value: 750 Gold Each]",
      stackvalue: "[Stack Value: 3750(4500)]",
      category: "Gem",
      description: [
          "Drop Chances",
          "Apprentice: 4/30",
          "Veteran: 10/43",
          "Champion: 8/39",
      ], 
  },
  {
      id: "sapphire",
      row:"1",
      num:"5",
      title: "Sapphire (5 (6) per Stack)",
      value: "[Value: 1000 Gold Each]",
      stackvalue: "[Stack Value: 5000(6000)]",
      category: "Gem",
      description: [
          "Drop Chances",
          "Apprentice: 1/30",
          "Veteran: 3/43",
          "Champion: 6/39",
      ], 
  },
  {
      id: "ruby",
      row:"1",
      num:"6",
      title: "Ruby (5 (6) per Stack)",
      value: "[Value: 1250 Gold Each]",
      stackvalue: "[Stack Value: 6250(7500)]",
      category: "Gem",
      description: [
          "Drop Chances",
          "Apprentice: 1/30",
          "Veteran: 3/43",
          "Champion: 6/39",
      ], 
  },

  {
      id: "trapezohedron",
      row:"1",
      num:"7",
      title: "Puzzling Trapezohedron (1 (2) per Stack)",
      value: "[Value: 3500 Gold Each]",
      stackvalue: "[Stack Value: 3500(7000)]",
      category: "Gem",
      description: [
          "Found by defeating the Collector or within Secret Rooms",
          "Also can be found by destroying the Shrieker's Nest",
      ], 
  },
  {
      id: "goldbag",
      row:"1",
      num:"8",
      title: "Gold (1750 per Stack) <br> (4750 Max)",
      category: "Currency",
      description: [
          "Each Antiquarian in the party increases Gold stacking by 750",
      ], 
  },
  {
      id: "pew",
      row:"2",
      num:"1",
      title: "Consecrated Pew (1 per Stack)",
      value: "[Value: 2500 Gold Each]",
      category: "Valuables",
      description: [
          "One is dropped for each Pew that has been destroyed",
          "during the Prophet Boss Fight as Battle Loot",
      ], 
  },
  {
      id: "minor_antique",
      row:"2",
      num:"2",
      title: "Minor Antique (20 per Stack)",
      value: "[Value: 500 Gold Each]",
      stackvalue: "[Stack Value: 10000]",
      category: "Antique",
      description: [
          "For each Antiquarian in party:",
          "Obtainable after battles (6/7 Chance)",
          "Loot Curio interacted by Antiquarian:",
          "Obtained from Loot Curio (6/7 Chance)",
      ], 
  },
  {
      id: "major_antique",
      row:"2",
      num:"3",
      title: "Major Antique (5 per Stack)",
      value: "[Value: 1250 Gold Each]",
      stackvalue: "[Stack Value: 6250]",
      category: "Antique",
      description: [
          "For each Antiquarian in party:",
          "Obtainable after battles (1/7 Chance)",
          "Loot Curio interacted by Antiquarian:",
          "Obtained from Loot Curio (1/7 Chance)",
      ], 
  },
  {
      id: "tapestry",
      row:"2",
      num:"4",
      title: "Jute Tapestry (1 per Stack)",
      value: "[Value: 4500 Gold Each]",
      category: "Valuables",
      description: [
          "Drop Chances",
          "Veteran: 1/43",
          "Champion: 1/39",
      ], 
  },
  {
      id: "crest",
      row:"2",
      num:"5",
      title: "Crest (12 per Stack)",
      category: "Heirloom",
      description: [
          "Used to upgrade Town Facilities and build Districts",
          "More Common in The Cove",
         
      ], 
  },
  {
      id: "bust",
      row:"2",
      num:"6",
      title: "Bust (6 per Stack)",
      category: "Heirloom",
      description: [
          "Used to upgrade Town Facilities and build Districts",
          "More Common in The Ruins",
      ], 
  },
  {
      id: "deed",
      row:"2",
      num:"7",
      title: "Deed (6 per Stack)",
      category: "Heirloom",
      description: [
          "Used to upgrade Town Facilities and build Districts",
          "More Common in The Weald",
      ], 
  },
  {
      id: "portrait",
      row:"2",
      num:"8",
      title: "Portrait (3 per Stack)",
      category: "Heirloom",
      description: [
          "Used to upgrade Town Facilities and build Districts",
          "More Common in The Warrens",
      ], 
  },
  {
      id: "blueprint",
      row:"3",
      num:"1",
      title: "Blueprint (1 per Stack)",
      category: "Heirloom",
      description: [
          "Used to build Districts",
          "A Free Blueprint is given to you by around Week 10 from a Town Event",
          "Obtained by defeating Veteran and Champion level Area Bosses (Barring The Flesh)",
      ], 
      dlc:"Crimson Court DLC",
  },
  {
      id: "baron_invite",
      row:"3",
      num:"2",
      title: "Baron's Invitation (99 per Stack)",
      category: "Invitation",
      description: [
          "Used to begin/continue the Plot Quest - Morbid Entertainment",
          "Dropped by Gatekeepers if the mentioned Plot Quest is active",
      ], 
      dlc:"Crimson Court DLC",
  },
  {
      id: "viscount_invite",
      row:"3",
      num:"3",
      title: "Viscount's Invititation (99 per Stack)",
      category: "Invitation",
      description: [
          "Used to begin/continue the Plot Quest - Served Cold",
          "Dropped by Gatekeepers if the mentioned Plot Quest is active",
      ], 
      dlc:"Crimson Court DLC",
  },
  {
      id: "countess_invite",
      row:"3",
      num:"4",
      title: "Countess' Invitation (99 per Stack)",
      category: "Invitation",
      description: [
          "Used to begin/continue the Plot Quest - A Bewitching Predator",
          "Dropped by Gatekeepers if the mentioned Plot Quest is active",
      ], 
      dlc:"Crimson Court DLC",
  },
  {
      id: "shard",
      row:"3",
      num:"6",
      title: "Comet Shard (99 per Stack)",
      category: "Currency",
      description: [
          "Used to purchase Shard Dust and Crystalline Trinkets",
          "Used to build some Districts and can be exchanged for Heirlooms",
          "It is used in some Town Events",
          "Obtained from/during expeditions within The Farmstead",
          "Obtained from slaying the Thing from the Stars",
      ], 
      dlc:"Color of Madness DLC",
  },
  {
      id: "memory",
      row:"3",
      num:"7",
      title: "Memory (1 per Stack)",
      category: "Heirloom",
      description: [
          "Used to build The Mill",
          "Can be Obtained from slaying The Sleeper during The Endless Harvest",
          "Can be Obtained from slaying the Thing from the Stars from Veteran Difficulty Onwards (> 6.7%)",
      ], 
      dlc:"Color of Madness DLC",
  },

  
]

const LootItemMainContainer = document.getElementById("loot_container");

LootItemData.forEach(loot => {
  const LootItemImg = document.createElement("img");

  LootItemImg.src = `images/loot/${loot.id}.png`;
  LootItemImg.loading = "lazy";
  LootItemImg.className = `loot_item loot_item_row${loot.row} loot_item_num${loot.num}`;
  LootItemImg.id = `${loot.id}_box`;

LootItemMainContainer.appendChild(LootItemImg)

});

LootItemData.forEach(loot => {
const LootItemHTML = generateLootItem(loot)
LootItemMainContainer.innerHTML += LootItemHTML

});


function generateLootItem(loot) {

  const lootDescID = `${loot.id}_desc`;
  const lootClass = `general_desc loot_desc loot_desc_row${loot.row} loot_desc_num${loot.num}`
  const iteminfo = document.createElement("div");
  loot.description.forEach(text => {
      const StyledText = replaceSpecificLootItemDesc(text);
      const linebreak = document.createElement("br");
      iteminfo.innerHTML +=StyledText
      iteminfo.appendChild(linebreak)
  });
  let value = loot.value? `<span class="highres">${loot.value}</span><br>`: '';
  let stackvalue = loot.stackvalue? `<span class="highres">${loot.stackvalue}</span><br>`: '';
  let category = loot.category ? replaceSpecificLootItemDesc(loot.category) + '<br>' : '';
  let dlc = loot.dlc? replaceSpecificLootItemDesc(loot.dlc) : '';
  
   return `
          <div class = "${lootClass}" id = ${lootDescID}>
              <span class = "highres">${loot.title}</span><br>
              ${value}
              ${stackvalue} 
              ${category} 
              ${iteminfo.innerHTML}
              <span class = "desc_margin">${dlc}</span>
          </div>
          
         
      `;
}
function replaceSpecificLootItemDesc(description) {




  description = description.replace(/Apprentice/g, '<span class="apprentice">Apprentice</span>');
  description = description.replace(/Veteran/g, '<span class="veteran">Veteran</span>');
  description = description.replace(/Champion/g, '<span class="champion">Champion</span>');

  description = description.replace(/Curio/g, '<span class="attack_type">Curio</span>');
  description = description.replace(/Town Events/g, '<span class="attack_type">Town Events</span>');
  description = description.replace(/Town Event/g, '<span class="attack_type">Town Event</span>');
  description = description.replace(/Town Facilities/g, '<span class="grey">Town Facilities</span>');
  description = description.replace(/Drop Chances/g, '<span class="attack_type">[Drop Chances]</span>');

  description = description.replace(/Districts/g, '<span class="scouting">Districts</span>');
  description = description.replace(/District/g, '<span class="scouting">District</span>');
  description = description.replace(/Blueprint/g, '<span class="rare">Blueprint</span>');

  description = description.replace(/Crimson Court DLC/g, '<span class="crimson_court">Crimson Court DLC</span>');
  description = description.replace(/Plot Quest/g, '<span class="buff">Plot Quest</span>');
  description = description.replace(/Gatekeepers/g, '<span class="crimson_court">Gatekeepers</span>');
  description = description.replace(/Morbid Entertainment/g, '<span class="crimson_court">Morbid Entertainment</span>');
  description = description.replace(/Served Cold/g, '<span class="crimson_court">Served Cold</span>');
  description = description.replace(/A Bewitching Predator/g, '<span class="crimson_court">A Bewitching Predator</span>');


  description = description.replace(/Color of Madness DLC/g, '<span class="crystalline">Color of Madness DLC</span>');
  description = description.replace(/Crystalline Trinkets/g, '<span class="crystalline">Crystalline Trinkets</span>');
  description = description.replace(/Thing from the Stars/g, '<span class="thing">Thing from the Stars</span>');
  description = description.replace(/The Endless Harvest/g, '<span class="crystalline">The Endless Harvest</span>');
  description = description.replace(/The Sleeper/g, '<span class="crystalline">The Sleeper</span>');
  description = description.replace(/Shard Dust/g, '<span class="crystalline">Shard Dust</span>');
  description = description.replace(/The Farmstead/g, '<span class="crystalline">The Farmstead</span>');

  description = description.replace(/The Mill/g, '<span class="highres">The Mill</span>');
  description = description.replace(/Gold/g, '<span class="highres">Gold</span>');


  description = description.replace(/Gem/g, '<span class="buff">Gem</span>');
  description = description.replace(/Heirlooms/g, '<span class="stealth">Heirlooms</span>');
  description = description.replace(/Heirloom/g, '<span class="stealth">Heirloom</span>');
  description = description.replace(/Currency/g, '<span class="highres">Currency</span>');
  description = description.replace(/Valuables/g, '<span class="highres">Valuables</span>');
  description = description.replace(/Invitation/g, '<span class="crimson_court">Invitation</span>');
  description = description.replace(/Antique/g, '<span class="common">Antique</span>');


  description = description.replace(/The Ruins/g, '<span class="buff">The Ruins</span>');
  description = description.replace(/The Weald/g, '<span class="buff">The Weald</span>');
  description = description.replace(/The Warrens/g, '<span class="buff">The Warrens</span>');
  description = description.replace(/The Cove/g, '<span class="buff">The Cove</span>');


  description = description.replace(/Secret Rooms/g, '<span class="highres">Secret Rooms</span>');
  description = description.replace(/Shrieker's Nest/g, '<span class="shrieker">Shrieker\'s Nest</span>');

  description = description.replace(/Collector/g, '<span class="negative">Collector</span>');
  description = description.replace(/The Flesh/g, '<span class="negative">The Flesh</span>');
  description = description.replace(/Prophet/g, '<span class="negative">Prophet</span>');
  description = description.replace(/Pew/g, '<span class="negative">Pew</span>');




  return description;
}
