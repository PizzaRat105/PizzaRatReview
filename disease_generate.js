const diseaseNames = [
    ["Bad Humors", "The Black Plague", "Bullmic", "Creeping Cough", "Ennui", "Grey Rot", "Hemophilia", "Hysterical Blindness", "Lethargy", "Rabies", "Scurvy", "Spasm of the Entrails"],
    ["Spotted Fever", "Syphilis", "Tapeworm", "Tetanus", "The Ague", "The Fits", "The Red Plague", "The Runs", "The Worries", "Vertigo", "Vampiric Spirits", "Wasting Sickness"]
];
const dlcDiseaseNames = [
    ["Crimson Curse - Passive", "Crimson Curse - Craving", "Crimson Curse - Bloodlust", "Crimson Curse - Wasting",],
    ["Sky Taint"]
];

const diseaseData = [
    {
        diseaseName: "bad_humors",
        diseaseClass: "disease_row1_num1",
        description: "-20% MAX HP "
    },
    {
        diseaseName: "the_black_plague",
        diseaseClass: "disease_row1_num2",
        description: "-75% Blight Resist <br> -75% Disease Resist <br> -10% MAX HP <br> -5 SPD"
    },
    {
        diseaseName: "bullmic",
        diseaseClass: "disease_row1_num3",
        description: "-20% Healing Skills while Camping"
    },
    {
        diseaseName: "creeping_cough",
        diseaseClass: "disease_row1_num4",
        description: "-20% DMG"
    },
    {
        diseaseName: "ennui",
        diseaseClass: "disease_row1_num5",
        description: "-25% Virtue Chance"
    },
    {
        diseaseName: "grey_rot",
        diseaseClass: "disease_row1_num6",
        description: "+20% MAX HP <br> -10 ACC <br> -10% DMG"
    },
    {
        diseaseName: "hemophilia",
        diseaseClass: "disease_row1_num7",
        description: "-50% Bleed Resist"
    },
    {
        diseaseName: "hysterical_blindness",
        diseaseClass: "disease_row1_num8",
        description: "-20 ACC if Stress above 70"
    },
    {
        diseaseName: "lethargy",
        diseaseClass: "disease_row1_num9",
        description: "-4 SPD"
    },
    {
        diseaseName: "rabies",
        diseaseClass: "disease_row1_num10",
        description: "+15% DMG <br> -10 ACC"
    },
    {
        diseaseName: "scurvy",
        diseaseClass: "disease_row1_num11",
        description: "-40% Bleed Resist <br> -40% Move Resist"
    },
    {
        diseaseName: "spasm_of_the_entrails",
        diseaseClass: "disease_row1_num12",
        description: "-20% Healing Skills while Camping"
    },
    {
        diseaseName: "spotted_fever",
        diseaseClass: "disease_row2_num1",
        description: "-50% Blight Resist"
    },
    {
        diseaseName: "syphilis",
        diseaseClass: "disease_row2_num2",
        description: "-5 ACC <br> -10% DMG <br> -10% MAX HP"
    },
    {
        diseaseName: "tapeworm",
        diseaseClass: "disease_row2_num3",
        description: "+100% Food Consumed <br> 60% chance to interact with Food curios (Steals Loot)"
    },
    {
        diseaseName: "tetanus",
        diseaseClass: "disease_row2_num4",
        description: "-5 ACC <br> -5% CRIT"
    },
    {
        diseaseName: "the_ague",
        diseaseClass: "disease_row2_num5",
        description: "-10% DMG <br> -3 SPD <br> -10% MAX HP"
    },
    {
        diseaseName: "the_fits",
        diseaseClass: "disease_row2_num6",
        description: "+3 SPD <br> -5 ACC <br> -5% CRIT"
    },
    {
        diseaseName: "the_red_plague",
        diseaseClass: "disease_row2_num7",
        description: "-75% Bleed Resist <br> -10% MAX HP <br> -5% CRIT"
    },
    {
        diseaseName: "the_runs",
        diseaseClass: "disease_row2_num8",
        description: "-20 DODGE <br> -10% MAX HP"
    },
    {
        diseaseName: "the_worries",
        diseaseClass: "disease_row2_num9",
        description: "+30% Stress"
    },
    {
        diseaseName: "vertigo",
        diseaseClass: "disease_row2_num10",
        description: "-50% Move Resist"
    },
    {
        diseaseName: "vampiric_spirits",
        diseaseClass: "disease_row2_num11",
        description: "-50% Debuff Resist"
    },
    {
        diseaseName: "wasting_sickness",
        diseaseClass: "disease_row2_num12",
        description: "-50% Disease Resist"
    }
    
    
];

const dlcDiseaseData = [
    {
        diseaseName: "crimson_curse_passive",
        diseaseClass: "disease_row1_num1",
        description: `
        -5% Stun Resist // -5% Blight Resist // -5% Bleed Resist <br>
        -10% MAX HP //  +1 SPD <br>
        Duration: 31-75 rounds - Evolves into Craving on Next Blood Check <br>
        Drinking The Blood - Empower Self (3 rds): +7 DODGE +4 SPD <br>
        Hidden: Cannot Drink The Blood (3 rds)
         `
    },
    {
        diseaseName: "crimson_curse_craving",
        diseaseClass: "disease_row1_num3",
        description: `
        -10% Stun Resist // -10% Blight Resist // -10% Bleed Resist <br>
        -10% MAX HP // -10% Virtue Chance // +2 SPD <br>
        Forced Interaction on any Corridor Curio (10% Chance)<br>
        Duration: 31-46 rounds - Evolves into Wasting on Next Blood Check <br>
        Drinking The Blood - Evolve into Bloodlust <br> <br>
        Possible Actouts <br>
        Deal Stress to Party (Stress +6) // Pass Turns // Move Randomly <br>
        Attack Teammates // Deny Being Moved // Deal Stress to Attacked Teammates (Stress +6) <br>
        Deal Stress to Heroes interacting with Curios (Stress +6)// Deny Healing <br>
        Sometimes refuse to Eat While Camping & Recieve High HP and Stress Damage 
         `
    },
    {
        diseaseName: "crimson_curse_bloodlust",
        diseaseClass: "disease_row1_num5",
        description: `
        +25% Stun Resist // +15% Blight Resist // -10% Bleed Resist <br>
        +25% DMG // +4 SPD <br>
        Duration: 22-30 rounds - Evolves into Passive on Next Blood Check <br>
        Drinking The Blood - Self: Stress +33 <br>
        Empower Self (3 rds) +50% DMG +4 SPD <br>
        Hidden: Cannot Drink The Blood (3 rds)<br><br>
        Possible Actouts <br>
        Self Stress - 15 // Deal Stress to Party (Stress +6) // Move Forwards <br>
        Randomly Attack Teammates with Added Effects <br>
        (Same as Affliction Act Out Attacks) <br>
        Deny Buffs // Deal Stress to Attacked Teammates (Stress +6) <br>
        Use Random Skill (Uses up Turn) 
         `
    },
    {
        diseaseName: "crimson_curse_wasting",
        diseaseClass: "disease_row1_num7",
        description:`
        -10% Stun Resist // -10% Blight Resist // -10% Bleed Resist <br>
        -20% MAX HP // -4 SPD // -10% Death Blow Resist <br>
        Forced Interaction any Corridor Curio (25% Chance)<br>
        Duration: 31-46 rounds - On Next Blood Check: Death <br>
        Drinking The Blood - Evolve into Passive <br> <br>
        Possible Actouts <br>
        Deal Stress to Party (Stress +6) // Pass Turns // Attack Self (10% of MAX HP) <br>
         Deal Stress to Heroes interacting with Curios (Stress +6) // Deny Healing <br>
         Refuse to Eat While Camping & Recieve High HP and Stress Damage 
         `
    },
   {
        diseaseName: "sky_taint",
        diseaseClass: "disease_row1_num9",
        description: `
        +20% Stress <br> 
        -20% Bleed Resist <br>
        -20% Blight Resist <br>
        <span class = "crystalline"> Color of Madness DLC</span>
        `
    },
   
    
];

const diseaseNameContainer = document.getElementById("disease_names")

diseaseNames.forEach((column, columnIndex) => {
    const diseaseColumn = document.createElement("div");
    diseaseColumn.className = `disease_column disease_${columnIndex + 1}`;

    column.forEach((diseaseName) => {
        const diseaseElement = document.createElement("span");
        const diseaseClassName = diseaseName.toLowerCase().replace(/\s/g, '_');
        const linebreak = document.createElement("br");

        diseaseElement.id = diseaseClassName;
        diseaseElement.textContent = diseaseName;
        diseaseColumn.appendChild(diseaseElement);
        diseaseColumn.appendChild(linebreak);
    });

    diseaseNameContainer.appendChild(diseaseColumn);
});

const diseaseMainContainer = document.getElementById("diseasebox");

function generateDiseaseDescription(disease) {
    const diseaseTextContainer = document.createElement("div");
    diseaseTextContainer.classList = `general_desc disease_desc ${disease.diseaseClass}`;
    diseaseTextContainer.id = `${disease.diseaseName}_desc`;
    diseaseTextContainer.textContent = disease.description;
    diseaseTextContainer.innerHTML = replaceSpecificEffects(disease.description);
    return diseaseTextContainer;
}

diseaseData.forEach((disease) => {
    const diseaseHTML = generateDiseaseDescription(disease);
    diseaseMainContainer.appendChild(diseaseHTML);
});



const dlcDiseaseNameContainer = document.getElementById("dlc_disease_names")

dlcDiseaseNames.forEach((column, columnIndex) => {
const diseaseColumn = document.createElement("div");
diseaseColumn.className = `disease_column disease_${columnIndex + 3}`;

column.forEach((dlcDiseaseName) => {
    const diseaseElement = document.createElement("span");
    const diseaseClassName = dlcDiseaseName.toLowerCase().replace(/[\s-]+/g, '_');
    const linebreak1 = document.createElement("br");
    const linebreak2 = document.createElement("br");
    const space = document.createTextNode("\u00A0"); // Non-breaking space

    diseaseElement.id = diseaseClassName;
    diseaseElement.textContent = dlcDiseaseName;
    diseaseColumn.appendChild(diseaseElement);
    diseaseColumn.appendChild(linebreak1);
    diseaseColumn.appendChild(space); // Add some content between line breaks
    diseaseColumn.appendChild(linebreak2);
});

dlcDiseaseNameContainer.appendChild(diseaseColumn);
});



dlcDiseaseData.forEach((disease) => {
const dlcDiseaseHTML = generateDiseaseDescription(disease);
diseaseMainContainer.appendChild(dlcDiseaseHTML);
});





function replaceSpecificEffects(description) {
    description = description.replace(/Stress/g, '<span class="stress">Stress</span>');
    description = description.replace(/Virtue/g, '<span class="stress">Virtue</span>');
    description = description.replace(/Moved/g, '<span class="move">Moved</span>');
    description = description.replace(/Move/g, '<span class="move">Move</span>');
    description = description.replace(/Healing/g, '<span class="heal">Healing</span>');
    description = description.replace(/Heal/g, '<span class="heal">Heal</span>');    
    description = description.replace(/Torch/g, '<span class="highres">Torch</span>');
    description = description.replace(/Blight/g, '<span class="blight">Blight</span>');
    description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
    description = description.replace(/Stun/g, '<span class="stun">Stun</span>');
    description = description.replace(/Disease/g, '<span class="disease">Disease</span>');
    description = description.replace(/Debuff/g, '<span class="debuff">Debuff</span>');
    description = description.replace(/The Blood/g, '<span class="crimson_court">The Blood</span>');
    description = description.replace(/Crimson Court/g, '<span class="crimson_court">Crimson Court</span>');
    description = description.replace(/Crimson Curse/g, '<span class="crimson_court">Crimson Curse</span>');
    description = description.replace(/Empower Self/g, '<span class="buff">Buff Self</span>');
    description = description.replace(/Craving/g, '<span class="crimson_court">Craving</span>');
    description = description.replace(/Passive/g, '<span class="crimson_court">Passive</span>');
    description = description.replace(/Wasting/g, '<span class="crimson_court">Wasting</span>');
    description = description.replace(/Bloodlust/g, '<span class="crimson_court">Bloodlust</span>');
    description = description.replace(/Death Blow/g, '<span class="mark">Death Blow</span>');
    description = description.replace(/Death/g, '<span class="mark">Death</span>');    
    description = description.replace(/Blood/g, '<span class="crimson_court">Blood</span>');
    description = description.replace(/Possible Actouts/g, '<span class="mark">Possible Actouts</span>');
    description = description.replace(/Forced Interaction/g, '<span class="mark">Forced Interaction</span>');
    description = description.replace(/Camping/g, '<span class="veteran">Camping</span>');
    description = description.replace(/Curios/g, '<span class="attack_type">Curios</span>');
    description = description.replace(/Curio/g, '<span class="attack_type">Curio</span>');
    description = description.replace(/Buffs/g, '<span class="buff">Buffs</span>');
    description = description.replace(/Affliction/g, '<span class="mark">Affliction</span>');








    return description;
}



const DiseaseIconDescData = [
    //Disease Overview
    {    
  
      icon_src:"images/Hero_boxes/more_info_icon.png",
      icon_class: "info_med disease_universal",
      icon_id: "disease_shared_info",
  
      label_class:"ddlogo_text disease_shared_label",
      labeltext:"Overview",
      labelid:"iextistfornoreason",
  
      class: "general_desc disease_universal_txt",
      id: "disease_shared_info_desc",
  
      description: [
        "Diseases can be contracted through some Enemy Attacks, Negative Curio Interactions, and sometimes at the end of an expedition and stay on the Hero until removed or replaced. <br>",
        "Diseases can be removed through the Sanitarium or certain Camping Skills like the Grave Robber's Snuff Box or the Plague Doctor's Leeches Skill.<br>",
        "Each Hero may only have a maximum of 3 Diseases at once, and new Diseases that have been acquired at that point replace existing ones akin to Quirks. <br>",
        "The chance of contracting a Disease at the end of a dungeon is 32% - (33% * Disease Resist), with a minimum of 5%. You can only get Diseases at the end of a dungeon if the Hero's Resolve Level is at least 2. <br>",
        "Buffs to Disease Resist such as Holy Water or Camping Buffs that boost it can be used before ending the expedition to lessen the chance of contracting a Disease at the end of an expedition."
    ]
    },

     //Curing Crimson Curse
     {
  
        icon_src:"images/estate_icons/crimson_court_icon.png",
        icon_class: "info_med crimson_curse_cure nondisplay",
        icon_id:"crimson_curse_cure_info",

        label_class:"ddlogo_text curse_cure crimson_court nondisplay",
        labeltext:"Curing the <br> Crimson Curse",
        labelid:"crimson_curse_cure_label",
    
        class: "general_desc crimson_curse_cure_txt",
        id:"crimson_curse_cure_info_desc",
    
    
        description: [
            `Ways to Cure the Crimson Curse <br>`,
            `1. Defeat the  Fanatic  to gain Cures <br>`,
            `2. Complete any of the Crimson Court Plot Quests to trigger the Town Event - A Veil Lifted
            and Cure your entire roster of the Crimson Curse <br>`,
            `3. Defeat the Countess  and become able to Cure the Crimson Curse via the Sanitarium <br>`,
            `4. Pay 30 Shards during the Color of Madness DLC Exclusive Town Event - They Made a Tonic
            to Cure your entire roster of any Diseases including the Crimson Curse `,
          ]
      
    },

    //Crimson Curse & Benefits
    {
  
        icon_src:"images/estate_icons/crimson_court_icon.png",
        icon_class: "info_med crimson_curse_benefit nondisplay",
        icon_id:"crimson_curse_benefit_info",

        label_class:"ddlogo_text curse_benefit crimson_court nondisplay",
        labeltext:"Crimson Curse <br> & Benefits",
        labelid:"crimson_curse_benefit_label",

        class: "general_desc crimson_curse_benefit_txt",
        id:"crimson_curse_benefit_info_desc",
    
    
        description: [
            `The Crimson Curse Progresses by 30 turns for Heroes in the Hamlet when you set out on an expedition <br>`,
            `Heroes are Immune to catching other Diseases while they have the Crimson Curse, and any existing Diseases are removed if the Hero catches the Crimson Curse, which can prove to be very useful on top of it providing some Beneficial Stat Buffs
            Thanks to states such as Bloodlust providing massive Damage Bonuses and the ever present SPD Buff the Crimson Curse provides.`,
          ]
        
      
    },

    //Vanilla Disease Enemy Source
    {
  
      icon_src:"images/diseases/sanitarium_icon.png",
      icon_class: "info_med disease_enemy_source",
      icon_id: "disease_enemy_info",

      label_class:"ddlogo_text disease_enemy_label",
      labeltext:"Enemies",
      labelid:"disease_enemies",
  
      class: "general_desc disease_enemy_source_txt",
      id: "disease_enemy_info_desc",
  

      
      description: [
        `Enemies that can inflict Diseases <br>`,
        `Monsters that can inflict Any Non DLC Disease <br>`,
        `Maggot - Grave Nibble (15%) // Swine Wretch - Vomit (15%)`,
        `Carrion Eater - Munch - Veteran (7%) // Champion (9%)`,
        `Crone - Fetid Censer - Veteran (7%) // Champion (9%)`,
        `Sea Maggot - Brine (8%) // Fungal Artillery - Rain of Blight (15%)`,
        `Deep Stinger - Salty Gouge (6%) // Shocker (6%)`,
        `The Shrieker - Regurgitate (15%) <br>`,
        `Monsters that inflict Specific Diseases  `,
        `Ghoul - Howl - The Worries (5%)`,
        `Rabid Gnasher - Rabid Rush - Rabies (10%) <br>`,
        `Town Facilities `,
        `Brothel - Syphilis (about 3%)`,
    ]
    
    },
 //DLC Disease Enemy Source
    {
  
      icon_src:"images/diseases/sanitarium_icon.png",
      icon_class: "info_med disease_enemy_source nondisplay",
      icon_id: "dlc_disease_enemy_info",

      label_class:"ddlogo_text disease_enemy_label crimson_court nondisplay",
      labeltext:"Enemies",
      labelid:"dlc_disease_enemies",
  
      class: "general_desc disease_enemy_source_txt",
      id: "dlc_disease_enemy_info_desc",
  
  
      description: [
        `Monsters that can inflict the Crimson Curse <br>`,
        `Supplicant - Gather the Blood - Apprentice (31%) // Veteran (45%) // Champion (75%)`,
        `Sycophant - The Thirst - Apprentice (31%) // Veteran (45%) // Champion (75%)`,
        `Manservant - The Thirst - Apprentice (31%) // Veteran (45%) // Champion (75%)`,
        `Courtesan - The Thirst - Veteran (45%) // Champion (75%)`,
        ` Esquire - The Thirst - Veteran (45%) // Champion (75%) <br>`,
        `Monsters that inflict Sky Taint `,
        `Thing from the Stars - Phase Gnaw - Apprentice (20%) // Veteran (22%) // Champion (25%)`,
      ]
    
    
    },

    //Vanilla Disease Curio Source
    {
  
        icon_src:"images/diseases/sanitarium_icon.png",
        icon_class: "info_med disease_curio_source",
        icon_id: "disease_curio_info",

        label_class:"ddlogo_text disease_curio_label",
        labeltext:"Curios",
        labelid:"disease_curios",
    
        class: "general_desc disease_curio_source_txt",
        id: "disease_curio_info_desc",
    
    
        description: [
            `Curios which can Inflict Diseases if Interacted Without Supplies <br>`,
            `Curios that can inflict Any Non DLC Disease <br>`,
            `Decorative Urn (3.7%) // Iron Maiden (6.7%) // Pile of Bones (25%)`,
            `Beast Carcass (19.04%) // Shallow Grave (50%) // Bas-Relief (11.1%)`,
            `Brackish Tide Pool (25%) <br>`,
            `Curios that can inflict Specific Diseases if Interacted Without Supplies <br>`,
            `Decorative Urn - Creeping Cough (7.4%)`,
            `Iron Maiden - Tetanus (13.3%)`,
            `Dinner Cart - The Black Plague (12.5%)`,
            `Makeshift Dining Table - Tapeworm (25%)`,
            `Beast Carcass - Rabies (9.52%)`,
            `Fish Carcass - The Red Plague (16.7%)`,
          ]
        
      
    },

   
    //DLC Disease Curio Source
    {    
  
      icon_src:"images/diseases/sanitarium_icon.png",
      icon_class: "info_med disease_curio_source nondisplay",
      icon_id: "dlc_disease_curio_info",
  
      label_class:"ddlogo_text disease_curio_label crimson_court nondisplay",
      labeltext:"Curios",
      labelid:"dlc_disease_curios",
  
      class: "general_desc disease_curio_source_txt",
      id: "dlc_disease_curio_info_desc",
  
      description: [
        `Crimson Court Curios that can inflict the Crimson Curse and other Diseases if Interacted Without Supplies `,        
        `Disclaimer: Numbers for Random Diseases may be Inaccurate <br>`,
        `Note - Random Diseases exclude Sky Taint, which is unique to `,
        `the Thing from the Stars <br>`,
        `Hooded Shrew - Random Disease (7.6%) `,
        `Wizened Shrew - Random Disease (7.6%)`,
        `Bloodflowers - Random Disease (2.56%) // Tetanus (5.12%) `,
        `Forgotten Delicacies - Random Disease (6.7%) // Crimson Curse (13.3%)`,
        `Damned Fountain - Crimson Curse (20%)  `,
        `Pile of Strange Bones - Crimson Curse (10%) `,
        `Wine Crate - Crimson Curse (16.7%)`,
      ]
    
    },

   



      
  ]
  
  
  DiseaseIconDescData.forEach((diseaseinfo) => {
    const DiseaseIconImg = document.createElement("img");
    DiseaseIconImg.src = diseaseinfo.icon_src
    DiseaseIconImg.loading = "lazy"
    DiseaseIconImg.className = diseaseinfo.icon_class
    DiseaseIconImg.id = diseaseinfo.icon_id

      const DiseaseInfoIconLabel = document.createElement("div");
      DiseaseInfoIconLabel.className = diseaseinfo.label_class;
      DiseaseInfoIconLabel.id = diseaseinfo.labelid;
      DiseaseInfoIconLabel.innerHTML = diseaseinfo.labeltext;

      diseaseMainContainer.appendChild(DiseaseIconImg);
      diseaseMainContainer.appendChild(DiseaseInfoIconLabel);


    
})
DiseaseIconDescData.forEach((diseaseinfo) => {
const DiseaseIconDescContainer = document.createElement("div");
DiseaseIconDescContainer.id = diseaseinfo.id;
DiseaseIconDescContainer.className = diseaseinfo.class;

diseaseinfo.description.forEach((text, index) => {
    const StyledText = replaceSpecificDiseaseIconDesc(text);
    DiseaseIconDescContainer.innerHTML += StyledText;

    if (index < diseaseinfo.description.length - 1) {
      const linebreak = document.createElement("br");
      DiseaseIconDescContainer.appendChild(linebreak);
    }

  }); 
  diseaseMainContainer.appendChild(DiseaseIconDescContainer);
})
  
    function replaceSpecificDiseaseIconDesc(description) {

    description = description.replace(/Apprentice/g, '<span class="apprentice">Apprentice</span>');
    description = description.replace(/Veteran/g, '<span class="veteran">Veteran</span>');
    description = description.replace(/Champion/g, '<span class="champion">Champion</span>');

    description = description.replace(/Shrieker/g, '<span class="shrieker">Shrieker</span>');

    description = description.replace(/Crimson Court/g, '<span class="crimson_court">Crimson Court</span>');
    description = description.replace(/Crimson Curse/g, '<span class="crimson_court">Crimson Curse</span>');
    description = description.replace(/The Courtyard/g, '<span class="crimson_court">The Courtyard</span>');
    description = description.replace(/The Thirst/g, '<span class="crimson_court">The Thirst</span>');
    description = description.replace(/Gather the Blood/g, '<span class="crimson_court">Gather the Blood</span>');
    description = description.replace(/Bloodlust/g, '<span class="crimson_court">Bloodlust</span>');

    description = description.replace(/Countess/g, '<span class="crimson_court">Countess</span>');
    description = description.replace(/Fanatic/g, '<span class="crimson_court">Fanatic</span>');


    description = description.replace(/Color of Madness DLC/g, '<span class="crystalline">Color of Madness DLC</span>');
    description = description.replace(/Shards/g, '<span class="crystalline">Shards</span>');
    description = description.replace(/Thing from the Stars/g, '<span class="thing">Thing from the Stars</span>');


    description = description.replace(/Sanitarium/g, '<span class="stress">Sanitarium</span>');
    description = description.replace(/Brothel/g, '<span class="stress">Brothel</span>');
    description = description.replace(/Holy Water/g, '<span class="stress">Holy Water</span>');


    description = description.replace(/Snuff Box/g, '<span class="highres">Snuff Box</span>');
    description = description.replace(/Leeches/g, '<span class="highres">Leeches</span>');
    description = description.replace(/Cures/g, '<span class="highres">Cures</span>');

    description = description.replace(/Camping Skills/g, '<span class="veteran">Camping Skills</span>');


    description = description.replace(/They Made a Tonic/g, '<span class="highres">They Made a Tonic</span>');
    description = description.replace(/A Veil Lifted/g, '<span class="highres">A Veil Lifted</span>');

    description = description.replace(/Enemy Attacks/g, '<span class="negative">Enemy Attacks</span>');
    description = description.replace(/Negative Curio Interactions/g, '<span class="negative">Negative Curio Interactions</span>');


    description = description.replace(/Diseases/g, '<span class="disease">Diseases</span>');    
    description = description.replace(/Random Diseases/g, '<span class="disease">Random Diseases</span>');
    description = description.replace(/Random Disease/g, '<span class="disease">Random Disease</span>');
    description = description.replace(/Disease/g, '<span class="disease">Disease</span>');

    description = description.replace(/Sky Taint/g, '<span class="disease">Sky Taint</span>');
    description = description.replace(/Tetanus/g, '<span class="disease">Tetanus</span>');
    description = description.replace(/Creeping Cough/g, '<span class="disease">Creeping Cough</span>');
    description = description.replace(/The Black Plague/g, '<span class="disease">The Black Plague</span>');
    description = description.replace(/Tapeworm/g, '<span class="disease">Tapeworm</span>');
    description = description.replace(/Rabies/g, '<span class="disease">Rabies</span>');
    description = description.replace(/The Red Plague/g, '<span class="disease">The Red Plague</span>');
    description = description.replace(/The Worries/g, '<span class="disease">The Worries</span>');
    description = description.replace(/Syphilis/g, '<span class="disease">Syphilis</span>');

    description = description.replace(/Phase Gnaw/g, '<span class="disease">Phase Gnaw</span>');
    description = description.replace(/Grave Nibble/g, '<span class="disease">Grave Nibble</span>');
    description = description.replace(/Vomit/g, '<span class="disease">Vomit</span>');
    description = description.replace(/Munch/g, '<span class="disease">Munch</span>');
    description = description.replace(/Fetid Censer/g, '<span class="disease">Fetid Censer</span>');
    description = description.replace(/Brine/g, '<span class="disease">Brine</span>');
    description = description.replace(/Rain of Blight/g, '<span class="disease">Rain of Blight</span>');
    description = description.replace(/Salty Gouge/g, '<span class="disease">Salty Gouge</span>');
    description = description.replace(/Shocker/g, '<span class="disease">Shocker</span>');
    description = description.replace(/Regurgitate/g, '<span class="disease">Regurgitate</span>');
    description = description.replace(/Howl/g, '<span class="disease">Howl</span>');
    description = description.replace(/Rabid Rush/g, '<span class="disease">Rabid Rush</span>');




    description = description.replace(/Camping Buffs/g, '<span class="buff">Camping Buffs</span>');
    description = description.replace(/Buffs/g, '<span class="buff">Buffs</span>');
    description = description.replace(/Buff/g, '<span class="buff">Buff</span>');

    description = description.replace(/Curios/g, '<span class="attack_type">Curios</span>');
    description = description.replace(/Curio/g, '<span class="attack_type">Curio</span>');
    description = description.replace(/Town Event/g, '<span class="attack_type">Town Event</span>');

    description = description.replace(/Decorative Urn/g, '<span class="attack_type">Decorative Urn</span>');
    description = description.replace(/Iron Maiden/g, '<span class="attack_type">Iron Maiden</span>');
    description = description.replace(/Pile of Bones/g, '<span class="attack_type">Pile of Bones</span>');
    description = description.replace(/Beast Carcass/g, '<span class="attack_type">Beast Carcass</span>');
    description = description.replace(/Shallow Grave/g, '<span class="attack_type">Shallow Grave</span>');
    description = description.replace(/Bas-Relief/g, '<span class="attack_type">Bas-Relief</span>');
    description = description.replace(/Brackish Tide Pool/g, '<span class="attack_type">Brackish Tide Pool</span>');
    description = description.replace(/Dinner Cart/g, '<span class="attack_type">Dinner Cart</span>');
    description = description.replace(/Makeshift Dining Table/g, '<span class="attack_type">Makeshift Dining Table</span>');
    description = description.replace(/Fish Carcass/g, '<span class="attack_type">Fish Carcass</span>');
    description = description.replace(/Hooded Shrew/g, '<span class="attack_type">Hooded Shrew</span>');
    description = description.replace(/Wizened Shrew/g, '<span class="attack_type">Wizened Shrew</span>');
    description = description.replace(/Bloodflowers/g, '<span class="attack_type">Bloodflowers</span>');
    description = description.replace(/Forgotten Delicacies/g, '<span class="attack_type">Forgotten Delicacies</span>');
    description = description.replace(/Damned Fountain/g, '<span class="attack_type">Damned Fountain</span>');
    description = description.replace(/Pile of Strange Bones/g, '<span class="attack_type">Pile of Strange Bones</span>');
    description = description.replace(/Wine Crate/g, '<span class="attack_type">Wine Crate</span>');




    description = description.replace(/Monsters/g, '<span class="attack_type">Monsters</span>');
    description = description.replace(/Enemies/g, '<span class="attack_type">Enemies</span>');

    description = description.replace(/Sea Maggot/g, '<span class="attack_type">Sea Maggot</span>');
    description = description.replace(/Maggot/g, '<span class="attack_type">Maggot</span>');
    description = description.replace(/Swine Wretch/g, '<span class="attack_type">Swine Wretch</span>');
    description = description.replace(/Carrion Eater/g, '<span class="attack_type">Carrion Eater</span>');
    description = description.replace(/Crone/g, '<span class="attack_type">Crone</span>');
    description = description.replace(/Fungal Artillery/g, '<span class="attack_type">Fungal Artillery</span>');
    description = description.replace(/Deep Stinger/g, '<span class="attack_type">Deep Stinger</span>');
    description = description.replace(/Ghoul/g, '<span class="attack_type">Ghoul</span>');
    description = description.replace(/Rabid Gnasher/g, '<span class="attack_type">Rabid Gnasher</span>');
    description = description.replace(/Supplicant/g, '<span class="attack_type">Supplicant</span>');
    description = description.replace(/Sycophant/g, '<span class="attack_type">Sycophant</span>');
    description = description.replace(/Manservant/g, '<span class="attack_type">Manservant</span>');
    description = description.replace(/Courtesan/g, '<span class="attack_type">Courtesan</span>');
    description = description.replace(/Esquire/g, '<span class="attack_type">Esquire</span>');


    return description;
}
