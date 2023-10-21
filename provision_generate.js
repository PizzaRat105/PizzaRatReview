const provisionMainContainer = document.getElementById("provisionbox");
const provisionAreaMainContainer = document.getElementById("provision_areabox");

const VanillaRegionData = [
    {
        class: "ruins_provision area_provisions_text areabox",
        id: "ruins_area",

        titletext: "The Ruins",
        isdlcregion: false,

        shortfood:"12~18",
        shortshovel:"2",
        shortantivenom:"0~1",
        shortbandage:"0~2",
        shortherbs:"1~2",
        shortkeys:"3~4",
        shortholywater:"2~3",
        shorttorch:"12~16",

        mediumfood:"24",
        mediumshovel:"3",
        mediumantivenom:"0~1",
        mediumbandage:"0~2",
        mediumherbs:"2~4",
        mediumkeys:"4~5",
        mediumholywater:"3~5",
        mediumtorch:"20~24",

        longfood:"36",
        longshovel:"4",
        longantivenom:"0~1",
        longbandage:"0~2",
        longherbs:"4",
        longkeys:"5",
        longholywater:"5",
        longtorch:"24~28",

        trapid: "ruins_trap_info",
        traptxtid: "ruins_trap_info_desc",
    },

     {
        class: "weald_provision area_provisions_text areabox",
        id: "weald_area",

        titletext: "The Weald",
        isdlcregion: false,

        shortfood:"16~18",
        shortshovel:"4",
        shortantivenom:"2~3",
        shortbandage:"2~3",
        shortherbs:"1~2",
        shortkeys:"2~3",
        shortholywater:"1~2",
        shorttorch:"16~18",

        mediumfood:"24",
        mediumshovel:"4",
        mediumantivenom:"3~4",
        mediumbandage:"3",
        mediumherbs:"2~3",
        mediumkeys:"4",
        mediumholywater:"2",
        mediumtorch:"24",

        longfood:"36",
        longshovel:"4+",
        longantivenom:"4~5",
        longbandage:"3~4",
        longherbs:"3",
        longkeys:"5",
        longholywater:"2~3",
        longtorch:"24~28",

        trapid: "weald_trap_info",
        traptxtid: "weald_trap_info_desc",

    },

    {
        class: "warrens_provision area_provisions_text areabox",
        id: "warrens_area",

        titletext: "The Warrens",
        isdlcregion: false,

        shortfood:"12~16",
        shortshovel:"2",
        shortantivenom:"1~2",
        shortbandage:"2~3",
        shortherbs:"2~3",
        shortkeys:"2",
        shortholywater:"1~2",
        shorttorch:"12~16",

        mediumfood:"24",
        mediumshovel:"2",
        mediumantivenom:"2~3",
        mediumbandage:"3~4",
        mediumherbs:"4",
        mediumkeys:"3~4",
        mediumholywater:"2~3",
        mediumtorch:"16~24",

        longfood:"36",
        longshovel:"2~3",
        longantivenom:"3",
        longbandage:"4~5",
        longherbs:"5",
        longkeys:"5",
        longholywater:"3",
        longtorch:"24",

        trapid: "warrens_trap_info",
        traptxtid: "warrens_trap_info_desc",

    },

    {
        class: "cove_provision area_provisions_text areabox",
        id: "cove_area",

        titletext: "The Cove",
        isdlcregion: false,

        shortfood:"12~16",
        shortshovel:"4",
        shortantivenom:"0~1",
        shortbandage:"2",
        shortherbs:"2~3",
        shortkeys:"2~3",
        shortholywater:"1~2",
        shorttorch:"12~16",

        mediumfood:"24",
        mediumshovel:"4",
        mediumantivenom:"0~1",
        mediumbandage:"3",
        mediumherbs:"4",
        mediumkeys:"3~4",
        mediumholywater:"2~3",
        mediumtorch:"20~24",

        longfood:"36",
        longshovel:"4+",
        longantivenom:"0~1",
        longbandage:"4~5",
        longherbs:"5",
        longkeys:"4~5",
        longholywater:"2~3",
        longtorch:"24~28",

        trapid: "cove_trap_info",
        traptxtid: "cove_trap_info_desc",

    },

    {
        class: "courtyard_provision area_provisions_text areabox",
        id: "courtyard_area",

        titletext: "The Courtyard",
        isdlcregion: true,

        provision1:"Food",
        provision2:"Shovels",
        provision3:"Antivenom",
        provision4:"Bandages",
        provision5:"Keys",
        provision6:"Medicinal Herbs",
        provision7:"Holy Water",
        provision8:"Torches",
        provision9:"The Blood",

        provisiondesc1:"Get as Much as Possible",
        provisiondesc2:"Very Useful, will be used to get Firewood for Camping",
        provisiondesc3:"Can be nice to bring",
        provisiondesc4:"Quite Useful, with many Enemies in The Courtyard inflicting Bleeds",
        provisiondesc5:"DO NOT BRING",
        provisiondesc6:"Very useful for gaining large amounts of Food by using them on the Forgotten Delicacies Curio",
        provisiondesc7:"Pretty Useful for Resistance Buffs and a beneficial Curio Interaction that heals Stress if used on the Damned Fountain Curio",
        provisiondesc8:"Used to clear some Obstacles. ACC Buff can be Useful",
        provisiondesc9:"Unsurprisingly useful in The Courtyard",

        trapid: "courtyard_trap_info",
        traptxtid: "courtyard_trap_info_desc",

    },

    {
        class: "farmstead_provision area_provisions_text areabox",
        id: "farmstead_area",

        titletext: "The Farmstead",
        isdlcregion: true,

        provision1:"Food",
        provision2:"Shovels",
        provision3:"Antivenom",
        provision4:"Bandages",
        provision5:"Keys",
        provision6:"Medicinal Herbs",
        provision7:"Holy Water",
        provision8:"Torches",
        provision9:"Laudanum",
        
        provisiondesc1:"Get as Much as Possible",
        provisiondesc2:"Useless",
        provisiondesc3:"Quite Useful",
        provisiondesc4:"Quite Useful",
        provisiondesc5:"Useful for the Cabinet Curio",
        provisiondesc6:"Can be Useful for clearing Debuffs",
        provisiondesc7:"Pretty Useful for Resistance Buffs",
        provisiondesc8:"Useless",
        provisiondesc9:"Can be useful for clearing Horror",


    },
]




VanillaRegionData.forEach(region => {
    const AreaProvisionContainer = document.createElement("div");
    AreaProvisionContainer.className = region.class;
    AreaProvisionContainer.id = region.id;


    const AreaRegionTitle = document.createElement("div");
    AreaRegionTitle.className = "provisions_title";
    AreaRegionTitle.textContent = region.titletext;

    AreaProvisionContainer.appendChild(AreaRegionTitle);


    function generateProvisions(region) {

        return `
            <div class = "dungeon_category provision_list">
                <span class = "dungeon_header">Short</span><br> 
                ${region.shortfood} <span class = heal>Food</span> <br>
                ${region.shortshovel} <span class = grey>Shovels</span><br>
                ${region.shortantivenom} <span class = blight>Antivenom</span><br>
                ${region.shortbandage} <span class = bleed>Bandages</span><br>
                ${region.shortherbs} <span class = debuff>Medicinal Herbs</span><br>
                ${region.shortkeys} <span class = "attack_type">Keys</span><br>
                ${region.shortholywater} <span class = stress>Holy Water</span><br>
                ${region.shorttorch} <span class = highres>Torches</span>
            </div>
            
            <div class = "dungeon_category provision_list">
                <span class = "dungeon_header">Medium</span><br> 
                ${region.mediumfood} <span class = heal>Food</span> <br>
                ${region.mediumshovel} <span class = grey>Shovels</span><br>
                ${region.mediumantivenom} <span class = blight>Antivenom</span><br>
                ${region.mediumbandage} <span class = bleed>Bandages</span><br>
                ${region.mediumherbs} <span class = debuff>Medicinal Herbs</span><br>
                ${region.mediumkeys} <span class = "attack_type">Keys</span><br>
                ${region.mediumholywater} <span class = stress>Holy Water</span><br>
                ${region.mediumtorch} <span class = highres>Torches</span>
            </div>

            <div class = "dungeon_category provision_list">
                <span class = "dungeon_header">Long</span><br> 
                ${region.longfood} <span class = heal>Food</span> <br>
                ${region.longshovel} <span class = grey>Shovels</span><br>
                ${region.longantivenom} <span class = blight>Antivenom</span><br>
                ${region.longbandage} <span class = bleed>Bandages</span><br>
                ${region.longherbs} <span class = debuff>Medicinal Herbs</span><br>
                ${region.longkeys} <span class = "attack_type">Keys</span><br>
                ${region.longholywater} <span class = stress>Holy Water</span><br>
                ${region.longtorch} <span class = highres>Torches</span>
            </div>
            
        `;
    }

    function generateDLCProvisions(region) {
        return `
            <div class = "dungeon_category general_provision_list">
                ${region.provision1}: ${region.provisiondesc1} <br>
                ${region.provision2}: ${region.provisiondesc2} <br>
                ${region.provision3}: ${region.provisiondesc3} <br>
                ${region.provision4}: ${region.provisiondesc4} <br>
                ${region.provision5}: ${region.provisiondesc5} <br>
                ${region.provision6}: ${region.provisiondesc6} <br>
                ${region.provision7}: ${region.provisiondesc7} <br>
                ${region.provision8}: ${region.provisiondesc8} <br>
                ${region.provision9}: ${region.provisiondesc9} 
            </div>         
        `;
    }


    
        if(region.isdlcregion === false) {
        const provisionHTML = generateProvisions(region);
        const StyledprovisionHTML = StyleProvisionsUsefulness(provisionHTML)
        AreaProvisionContainer.innerHTML += StyledprovisionHTML;
    }
        else
        { 
            const dlcProvisionHTML = generateDLCProvisions(region);
            const StyleddlcprovisionHTML = StyleProvisionsUsefulness(dlcProvisionHTML)
            AreaProvisionContainer.innerHTML += StyleddlcprovisionHTML;
        }
    
if(region.trapid){
    const RegionTrapInfo = document.createElement("img");
    RegionTrapInfo.src = "images/Hero_boxes/more_info_icon.png"
    RegionTrapInfo.loading = "lazy"

    RegionTrapInfo.className = "info trap_info"
    RegionTrapInfo.id = region.trapid

    const TrapLabel = document.createElement("div")
    TrapLabel.className = "ddlogo_text trap_label"
    TrapLabel.textContent = "Trap Info"
    
    AreaProvisionContainer.appendChild(RegionTrapInfo)
    AreaProvisionContainer.appendChild(TrapLabel)



}
    provisionAreaMainContainer.appendChild(AreaProvisionContainer);

})





function StyleProvisionsUsefulness(description) {
    description = description.replace(/Stress/g, '<span class="stress">Stress</span>');
    description = description.replace(/Horror/g, '<span class="stress">Horror</span>');

    description = description.replace(/Holy Water/g, '<span class="stress">Holy Water</span>');
    description = description.replace(/Laudanum/g, '<span class="stress">Laudanum</span>');
    description = description.replace(/The Blood/g, '<span class="crimson_court">The Blood</span>');   
    description = description.replace(/Torches/g, '<span class="highres">Torches</span>');
    description = description.replace(/Food/g, '<span class="heal">Food</span>');    
    description = description.replace(/Firewood/g, '<span class="veteran">Firewood</span>');
    description = description.replace(/Antivenom/g, '<span class="blight">Antivenom</span>');
    description = description.replace(/Bandages/g, '<span class="bleed">Bandages</span>');
    description = description.replace(/Shovels/g, '<span class="grey">Shovels</span>');
    description = description.replace(/Keys/g, '<span class="attack_type">Keys</span>');
    description = description.replace(/Medicinal Herbs/g, '<span class="debuff">Medicinal Herbs</span>');


    description = description.replace(/The Courtyard/g, '<span class="crimson_court">The Courtyard</span>');
    description = description.replace(/Forgotten Delicacies/g, '<span class="crimson_court">Forgotten Delicacies</span>');
    description = description.replace(/Damned Fountain/g, '<span class="crimson_court">Damned Fountain</span>');
    description = description.replace(/Cabinet/g, '<span class="highres">Cabinet</span>');

    description = description.replace(/Obstacles/g, '<span class="rare">Obstacles</span>');
    description = description.replace(/Buffs/g, '<span class="buff">Buffs</span>');
    description = description.replace(/Buff/g, '<span class="buff">Buff</span>');

    description = description.replace(/Debuffs/g, '<span class="debuff">Debuffs</span>');
    description = description.replace(/Debuff/g, '<span class="debuff">Debuff</span>');
    description = description.replace(/Camping/g, '<span class="veteran">Camping</span>');

    description = description.replace(/Curios/g, '<span class="attack_type">Curios</span>');
    description = description.replace(/Curio/g, '<span class="attack_type">Curio</span>');

    description = description.replace(/Bleeds/g, '<span class="bleed">Bleeds</span>');
    description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');

    return description;
}

      


function StyleTrapDesc(description) {
    
    description = description.replace(/Apprentice/g, '<span class="apprentice">Apprentice</span>');
    description = description.replace(/Veteran/g, '<span class="veteran">Veteran</span>');
    description = description.replace(/Champion/g, '<span class="champion">Champion</span>');
    description = description.replace(/Debuff Hero/g, '<span class="debuff">Debuff Hero</span>');

    description = description.replace(/Stress/g, '<span class="stress">Stress</span>');
    description = description.replace(/Sycophants/g, '<span class="crimson_court">Sycophants</span>');
    description = description.replace(/Supplicants/g, '<span class="crimson_court">Supplicants</span>');
    description = description.replace(/Chevaliers/g, '<span class="crimson_court">Chevaliers</span>');

    description = description.replace(/Summon/g, '<span class="stealth">Summon</span>');
    description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
    description = description.replace(/Blight/g, '<span class="blight">Blight</span>');

    description = description.replace(/(\(\d+% Base\)|\d+% Base)/g, '<span class="chance">$1</span>');


    return description;
}


const TrapDescData = [
    //Ruins
    {    
      class: "general_desc trap_info_text",
      id: "ruins_trap_info_desc",
  
      description: [
        "Apprentice",
        "Hero: Takes Damage Equal to 25% of Hero MAX HP",
        "Stress + 15 <br>",
        "Veteran",
        "Hero: Takes Damage Equal to 28% of Hero MAX HP",
        "Stress + 15 <br>",
        "Champion",
        "Hero: Takes Damage Equal to 30% of Hero MAX HP",
        "Stress + 15",
    ]
    },
     //Weald
    {    
      class: "general_desc trap_info_text",
      id: "weald_trap_info_desc",
  
      description: [
        "Apprentice",
        "Stress + 15 ",
        "Blight (100% Base) 2pts/rd for 3 rds <br>",
        "Veteran",
        "Stress + 15 ",
        "Blight (110% Base) 2pts/rd for 3 rds <br>",
        "Champion",
        "Stress + 15",
        "Blight (120% Base) 3pts/rd for 3 rds",
    ]
    },

    //Warrens
    {    
      class: "general_desc trap_info_text",
      id: "warrens_trap_info_desc",
  
      description: [
        "Apprentice",
        "Hero: Takes Damage Equal to 10% of Hero MAX HP",
        "Stress + 15 ",
        "Bleed (100% Base) 2pts/rd for 3 rds <br>",
        "Veteran",
        "Hero: Takes Damage Equal to 10% of Hero MAX HP",
        "Stress + 15 ",
        "Bleed (110% Base) 2pts/rd for 3 rds <br>",
        "Champion",
        "Hero: Takes Damage Equal to 10% of Hero MAX HP",
        "Stress + 15",
        "Bleed (120% Base) 3pts/rd for 3 rds",
    ]
    },

     //Cove
    {    
      class: "general_desc trap_info_text",
      id: "cove_trap_info_desc",
  
      description: [
        "Apprentice",
        "Hero: Takes Damage Equal to 10% of Hero MAX HP",
        "Stress + 15 ",
        "Debuff Hero",
        "-5 SPD (12 rds) // -20 DODGE (12 rds) <br>",
        "Veteran",
        "Hero: Takes Damage Equal to 10% of Hero MAX HP",
        "Stress + 15 ",
        "Debuff Hero",
        "-6 SPD (12 rds) // -25 DODGE (12 rds) <br>",
        "Champion",
        "Hero: Takes Damage Equal to 10% of Hero MAX HP",
        "Stress + 15",
        "Debuff Hero",
        "-8 SPD (12 rds) // -30 DODGE (12 rds) <br>",
    ]
    },

    //Courtyard
    {    
      class: "general_desc trap_info_text",
      id: "courtyard_trap_info_desc",
  
      description: [
        "Apprentice",
        "Hero: Takes 15 HP DMG",
        "Stress + 15 ",
        "Bleed (100% Base) 2pts/rd for 3 rds",
        "Summon Sycophants and Supplicants (50% Chance)<br>",
        "Veteran",
        "Hero: Takes 18 HP DMG",
        "Stress + 15 ",
        "Bleed (110% Base) 2pts/rd for 3 rds",
        "Summon Sycophants, Supplicants, Chevaliers (50% Chance)<br>",
        "Champion",
        "Hero: Takes 18 HP DMG",
        "Stress + 15",
        "Bleed (120% Base) 3pts/rd for 3 rds",
        "Summon Sycophants, Supplicants, Chevaliers (50% Chance)",
    ]
    },
]

TrapDescData.forEach((trap) => {
const TrapInfoDescContainer = document.createElement("div");
TrapInfoDescContainer.id = trap.id;
TrapInfoDescContainer.className = trap.class;

trap.description.forEach((text, index) => {
    const StyledText = StyleTrapDesc(text);
    TrapInfoDescContainer.innerHTML += StyledText;

    if (index < trap.description.length - 1) {
      const linebreak = document.createElement("br");
      TrapInfoDescContainer.appendChild(linebreak);
    }

  }); 
  provisionAreaMainContainer.appendChild(TrapInfoDescContainer);
})




const ProvisionNavMainBox = document.getElementById("provisions_navigation")




const AreaNames = [
    "ruins", 
    "weald", 
    "warrens", 
    "cove", 
    "courtyard", 
    "farmstead", 
]

AreaNames.forEach(area => {

    const areaNav = document.createElement("div")
    areaNav.id = `${area}_nav`

    const areaButton = document.createElement("img");
    areaButton.src = `images/Provisions/${area}_btn.png`;
    areaButton.loading = "lazy";
    areaButton.className = "provisions_navbtn";

    areaNav.appendChild(areaButton);
    ProvisionNavMainBox.appendChild(areaNav)
})

const SupplyItemData = [
    {
        name: "Food",
        title: "Food (12 per Stack)",
        description: [
            "Used to stave off Hunger Checks and Camping",
            "Heroes consume 1 Food per Hunger Check",
            "Heals! 5% MAX HP if manually consumed",
            "(4 Food per hero, refreshes after battles) <br>",
            "With the Granary Crimson Court DLC District:",
            "4~10 additional Food given for every expedition",
            "+15% Healing from Food",
        ], 
        amount: "[Short: 18 / Medium: 24 / Long & Epic: 36]",
    },
    {
        name: "Shovel", 
        title: "Shovel (4 per Stack)",
        description: [
            "Used to clear Obstacles in Corridors",
            "Used in many Curio Interactions",
        ], 
        amount: "[Short: 4 / Medium: 6 / Long & Epic: 8]",
    },
    {
        name: "Antivenom", 
        title: "Antivenom (6 per Stack)",
        description: [
            "Used to cure Blight",
            "Used in many Curio Interactions <br>",
            "With the Miasmal Orchard Color of Madness DLC District:",
            "Buff Hero",
            "+33% Blight Resist (3 rds)",        ], 
        amount: "[Short: 6 / Medium: 9 / Long & Epic: 12]",
    },
    {
        name: "Bandage", 
        title: "Bandage (6 per Stack)",
        description: [
            "Used to cure Bleed",
            "Used in many Curio Interactions",
        ], 
        amount: "[Short: 6 / Medium: 9 / Long & Epic: 12]",
    },
    {
        name: "Medicinal Herbs", 
        title: "Medicinal Herbs (6 per Stack)",
        description: [
            "Used to Cure Debuffs",
            "Used in many Curio Interactions <br>",
            "With the Miasmal Orchard Color of Madness DLC District:",
            "Buff Hero",
            "+25% Disease Resist (3 rds)",
        ], 
        amount: "[Short: 6 / Medium: 9 / Long & Epic: 12]",
    },
    {
        name: "Skeleton Key", 
        title: "Skeleton Key (6 per Stack)",
        description: [
            "Used in many Curio Interactions",
        ], 
        amount: "[Short: 6 / Medium: 9 / Long & Epic: 12]",
    },
    {
        name: "Holy Water", 
        title: "Holy Water (6 per Stack)",
        description: [
            "Used to Buff a Hero's Resistances",            
            "Buff Hero",
            "+33% Bleed Resist (4 rds)",
            "+33% Blight Resist (4 rds)",
            "+33% Debuff Resist (4 rds)",
            "+33% Disease Resist (4 rds)",
            "Used in many Curio Interactions <br>",

            "With the Tainted Well Color of Madness DLC District:",
            "Buff Hero",
            "+45% Bleed Resist (4 rds)",
            "+45% Blight Resist (4 rds)",
            "+45% Debuff Resist (4 rds)",
            "+45% Disease Resist (4 rds)",
        ], 
        amount: "[Short: 6 / Medium: 9 / Long & Epic: 12]",
    },
    {
        name: "Laudanum", 
        title: "Laudanum (6 per Stack)",
        description: [
            "Used to cure Horror<br>",
            "With the Tainted Well Color of Madness DLC District:",
            "Buff Hero",
            "-40% Stress (3 rds)",
        ], 
        amount: "[Short: 6 / Medium: 9 / Long & Epic: 12]",
    },
    {
        name: "Torch", 
        title: "Torch (8 per Stack)",
        description: [
            "Used to raise the Light Level",
            "(+25 Light per Torch)",
            "Used in a few Curio Interactions<br>",
            "Within The Courtyard",
            "Buff Party",
            "+3 ACC (1 Battle)",
            "Used to Clear an Obstacle - Shifting Mist",
        ], 
        amount: "[Short: 18 / Medium: 24 / Long & Epic: 36]",
    },
    {
        name: "Dog Treats", 
        title: "Dog Treats (2 per Stack)",
        description: [
            "Only Usable on the Houndmaster",
            "Buff Hero",
            " +50% DMG (3 rds)",
            "+15 ACC (3 rds)<br>",
            "Used in one notable Curio Interaction:",
            "Giant Oyster",
            "Buff Hero",
            "+25 DODGE (Until Camp)",
        ], 
    },
    {
        name: "Firewood",
        title: "Firewood (1 per Stack)",
        description: [
            "Used to initiate Camping <br>",
            "Within The Courtyard",
            "Can be obtained by using a Shovel on the",
            "Wine Crate Curio",
        ], 
        amount: "[Short: 0 / Medium: 1 / Long: 2/ Epic: 0]",
    },
    {
        name: "The Blood", 
        title: "The Blood (6 per Stack)",
        description: [
            "Used to Control the Crimson Curse",
            "Used in a few Curio Interactions within The Courtyard <br>",
            "If used on a Hero without the Crimson Curse:",
            "Target Hero: Take Damage Equal to 33% of MAX HP // Stress +20",
            "Debuff Hero:",
            "-8 SPD (3 rds) // -10 DODGE (3 rds)",
            "Hidden: Cannot Drink The Blood (3 rds) <br>",
            "Recommended Blood Amount for each Hero with the Crimson Curse",
        ], 
        amount: "[Short: 1 / Medium: 1.5 / Long: 2 / Epic: 2+]",
        dlc: "Crimson Court DLC",
    },
    {
        name: "The Cure",
        title: "The Cure (6 per Stack)",
        description: [
            "Only Dropped by the Fanatic (Gives 2 Cures as Loot) ",
            "Can be used on a Hero with the Crimson Curse during an expedition to cure them",
        ],
        dlc: "Crimson Court DLC",
    },
    {
        name: "Shard Dust", 
        title: "Shard Dust (6 per Stack)",
        description: [
            "Cannot be Used if Hero is Virtued",
            "Refreshes Limited Use Skills (All Uses)<br>",
            "First Use: Buff Hero (1 Battle) +2 SPD // +15% DMG",
            "Debuff Hero Incurable with Herbs (Until Camp) +10% Stress // -10% Virtue Chance ",
            "Target Hero: Stress +10 <br>",
            "Second Use: Buff Hero (10 rds) +2 SPD // +15% DMG",
            "Debuff Hero Incurable with Herbs (Until Camp) +20% Stress // -10% Virtue Chance ",
            "Target Hero: Stress +20 <br>",
            "Subsequent Uses: Buff Hero (5 rds) +2 SPD // +15% DMG // +9% CRIT",
            "Target Hero: Stress +40",
        ], 
        amount: "[Short: 6 / Medium: 9 / Long & Epic: 12]",
        dlc: "Color of Madness DLC",
    },
    {
        name: "Aegis Scale",
        title: "Aegis Scale (4 per Stack)",
        description: [
            "Grants a Hero 1 Block (2 Blocks Max per Hero)",
            "Each Block Negates 1 instance of Direct Damage inflicted on a Hero <br>",
            "Dropped by the 3 Snake Enemies introduced with the",
            "Shieldbreaker DLC (Pilskin (50%), Rattler (50%), and Adder (100%))",
        ], 
        dlc: "Shieldbreaker DLC", 
    }
]

const SupplyItemMainContainer = document.getElementById("supply_item_container");

SupplyItemData.forEach(supply => {
    const SupplyItemImg = document.createElement("img");
    const supplyName = supply.name.replace(/ /g, '_');
    const supplyID = `${supply.name.replace(/ /g, '_').toLowerCase()}_box`;

    SupplyItemImg.src = `images/Provisions/${supplyName}.png`;
    SupplyItemImg.loading = "lazy";
    SupplyItemImg.className = "supply_item";
    SupplyItemImg.id = supplyID;

SupplyItemMainContainer.appendChild(SupplyItemImg)

});

SupplyItemData.forEach(supply => {
const supplyitemHTML = generateSupplyItem(supply)
SupplyItemMainContainer.innerHTML += supplyitemHTML

});


function generateSupplyItem(supply) {

    const supplyDescID = `${supply.name.replace(/ /g, '_').toLowerCase()}_desc`;
    const iteminfo = document.createElement("div");
    supply.description.forEach(text => {
        const StyledText = replaceSpecificSupplyItemDesc(text);
        const linebreak = document.createElement("br");
        iteminfo.innerHTML +=StyledText
        iteminfo.appendChild(linebreak)
    });

    let amount = supply.amount? `<span class="attack_type desc_margin">${supply.amount}</span><br>`: ''; 
    let dlc = supply.dlc? replaceSpecificSupplyItemDesc(supply.dlc) : '';
    
     return `
            <div class = "general_desc provision_desc" id = ${supplyDescID}>
                <span class = "highres desc_margin">${supply.title}</span><br> 
                ${iteminfo.innerHTML}
                ${amount}
                <span class = "desc_margin">${dlc}</span>

            </div>
            
           
        `;
}



function replaceSpecificSupplyItemDesc(description) {

    description = description.replace(/Camping/g, '<span class="veteran">Camping</span>');
    description = description.replace(/Food/g, '<span class="heal">Food</span>');
    description = description.replace(/Heals!/g, '<span class="heal">Heals</span>');
    description = description.replace(/Curio/g, '<span class="attack_type">Curio</span>');

    description = description.replace(/Obstacles/g, '<span class="rare">Obstacles</span>');
    description = description.replace(/Obstacle/g, '<span class="rare">Obstacle</span>');
    description = description.replace(/Shifting Mist/g, '<span class="rare">Shifting Mist</span>');


    description = description.replace(/Cures/g, '<span class="heal">Cures</span>');
    description = description.replace(/Wine Crate/g, '<span class="highres">Wine Crate</span>');
    description = description.replace(/Giant Oyster/g, '<span class="highres">Giant Oyster</span>');
    description = description.replace(/Light Level/g, '<span class="highres">Light Level</span>');
    description = description.replace(/Light/g, '<span class="highres">Light</span>');


    description = description.replace(/Blight/g, '<span class="blight">Blight</span>');
    description = description.replace(/Bleeds/g, '<span class="bleed">Bleeds</span>');
    description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
    description = description.replace(/Stun/g, '<span class="stun">Stun</span>');
    description = description.replace(/Disease/g, '<span class="disease">Disease</span>');
    description = description.replace(/Debuff Hero Incurable with Herbs/g, '<span class="debuff">Debuff Hero (Incurable with Herbs)</span>');
    description = description.replace(/Debuff Hero/g, '<span class="debuff">Debuff Hero</span>');
    description = description.replace(/Debuffs/g, '<span class="debuffs">Debuff</span>');
    description = description.replace(/Debuff/g, '<span class="debuff">Debuff</span>');

    description = description.replace(/Shovel/g, '<span class="grey">Shovel</span>');
    description = description.replace(/Healing/g, '<span class="heal">Healing</span>');


    description = description.replace(/Buffs/g, '<span class="buff">Buffs</span>');
    description = description.replace(/Buff Hero/g, '<span class="buff">Buff Hero</span>');
    description = description.replace(/Buff/g, '<span class="buff">Buff</span>');


    description = description.replace(/Stress/g, '<span class="stress">Stress</span>');
    description = description.replace(/Horror/g, '<span class="stress">Horror</span>');
    description = description.replace(/Virtued/g, '<span class="stress">Virtued</span>');
    description = description.replace(/Virtue/g, '<span class="stress">Virtue</span>');

    description = description.replace(/Crimson Court DLC/g, '<span class="crimson_court">Crimson Court DLC</span>');
    description = description.replace(/Color of Madness DLC/g, '<span class="crystalline">Color of Madness DLC</span>');
    description = description.replace(/Fanatic/g, '<span class="crimson_court">Fanatic</span>');
    description = description.replace(/The Blood/g, '<span class="crimson_court">The Blood</span>');
    description = description.replace(/Blood/g, '<span class="crimson_court">Blood</span>');
    description = description.replace(/The Courtyard/g, '<span class="crimson_court">The Courtyard</span>');
    description = description.replace(/Crimson Curse/g, '<span class="crimson_court">Crimson Curse</span>');
    description = description.replace(/Refreshes/g, '<span class="crystalline">Refreshes</span>');

 
    description = description.replace(/Shards/g, '<span class="crystalline">Shards</span>');
    description = description.replace(/The Farmstead/g, '<span class="crystalline">The Farmstead</span>');

    description = description.replace(/Shieldbreaker DLC/g, '<span class="block">Shieldbreaker DLC</span>');
    description = description.replace(/Block/g, '<span class="block">Block</span>');

    description = description.replace(/Holy Water/g, '<span class="stress">Holy Water</span>');
    description = description.replace(/Laudanum/g, '<span class="stress">Laudanum</span>');
    description = description.replace(/Torch/g, '<span class="highres">Torch</span>');
    description = description.replace(/Antivenom/g, '<span class="blight">Antivenom</span>');
    description = description.replace(/Bandages/g, '<span class="bleed">Bandages</span>');   
    
    description = description.replace(/District/g, '<span class="scouting">District</span>');
    description = description.replace(/Granary/g, '<span class="highres">Granary</span>');
    description = description.replace(/Miasmal Orchard/g, '<span class="highres">Miasmal Orchard</span>');
    description = description.replace(/Tainted Well/g, '<span class="highres">Tainted Well</span>');


    return description;
}
