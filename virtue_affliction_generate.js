const ResolveMainContainer = document.getElementById("resolve_box");

const VirtueAfflictionData = [
    {
        column:"1",
        num:"1",
        name: "Stalwart",
        statchange: [
            "+15% PROT",
            "+8% Death Blow Resist",
        ],
        total:"25%",
        actout: [
            "Self: Stress -15 (25% Chance)",
        ],
    },
    {
        column:"1",
        num:"2",
        name: "Courageous",
        statchange: [
            "-33% Stress",
            "+2 SPD",
        ],
        total:"25%",
        actout: [
            "All Companions: Stress -4 (25% Chance)",
        ],
    },
    {
        column:"1",
        num:"3",
        name: "Focused",
        statchange: [
            "+10 ACC",
            "+8% CRIT",
        ],
        total:"25%",
        actout: [
            "Buff Companion: +10 ACC (3 rds) // +10% CRIT (3 rds) (25% Chance)",
        ],
    },
    {
        column:"1",
        num:"4",
        name: "Powerful",
        statchange: [
            "+25% DMG",
        ],
        total:"25%",
        actout: [
            "Buff Companions: +15% DMG (3 rds) (25% Chance)",
        ],
    },
    {
        column:"1",
        num:"5",
        name: "Vigorous",
        statchange: [
            "+4 SPD",
            "+10% DODGE",
        ],
        total:"25%",
        actout: [
            "Self: Heal 10% of MAX HP (25% Chance)",
        ],
    },

    {
        column:"2",
        num:"1",
        name: "Fearful",
        statchange: [          
            "+10 DODGE // +2 SPD",
            "-25% DMG",
        ],
        total:"31.5%",
        actout: [
            "10.5% - Stress +6 to party // 10.5% - Move: Back 1",
            "10.5% - Pass turn",
        ],
        comment: [
            "Hero is attacked (20%) // Ally is attacked (20%)",
            "Ally attack misses (20%) //Ally interacts with any Curio (33%)",
        ],
        other: [
            "Refuse to use a Camping Skill (33%)",
            "Refuse to be Moved (33%)",
        ],
        misc: [
            "Forced Interaction with Hallway Worship Curios (50% Chance)",
            "(Steals Loot)",
        ],
    },
    {
        column:"2",
        num:"2",
        name: "Paranoid",
        statchange: [
            "+10 DODGE // +2 SPD",
            "-25% DMG // -5 ACC",
        ],
        total:"31.25%",
        actout: [
            "9.38% - Stress +6 to party // 9.38% - Move: Back 1",
            "9.38% - Use a random skill // 3.11% - Attack ally",
        ],
        comment: [
            "Hero is attacked (20%)",
        ],
        other: [
            "Refuse Buffs (10%) // Refuse being Healed or Moved (33%)",
            "Refuse to retreat (33%) // Refuse to use an item (10%)",
            "Refuse to use or be the target of a Camping Skill (33%)",
        ],

    },
    {
        column:"2",
        num:"3",
        name: "Selfish",
        statchange: [
            "-5 ACC // -10% DMG",
            "+5 DODGE",
        ],
        total:"33.33%",
        actout: [
            "8.33% - Stress +6 to party // 8.33% - Move: Back 1",
            "8.33% - Pass turn // 8.33% - Use a random skill",
        ],
        comment: [
            "Hero is hit (20%) // Ally attacks (20%)",
            "Ally interacts with any Curio (33%)",
        ],
        other: [
            "Refuse to use a Camping Skill (33%)",
        ],
        misc: [
            "Forced Interaction with Hallway Treasure Curios (50% Chance)",
            "Steals Loot",
        ],
    },
    {
        column:"2",
        num:"4",
        name: "Masochistic",
        statchange: [
            "-15 DODGE",
        ],
        total:"33.33%",
        actout: [
            "8.33% - Stress +6 to party // 8.33% - Move: Forward 1",
            "8.33% - Pass turn // 8.33% - Mark Self (2 rds)",
            "8.33% - Attack Self (10% MAX HP)",
        ],
        comment: [
            "Hero is attacked (20%) // Ally is hit (20%)",
            "Ally triggers a Trap (37.5%)",
            "Ally interacts with any Curio (33%)",
        ],
        other: [
            "Refuse being Healed or Buffed or Moved (33%)",
            "Refuse to retreat (33%) // Refuse to use an item (33%)",
            "Refuse to use or be the target of a Camping Skill (33%)",
            "Refuse to eat while Camping (33%)",
        ],
        misc: [
            "Forced Interaction with Hallway Torture Curios (50% Chance)",
        ],
    },
    {
        column:"2",
        num:"5",
        name: "Abusive",
        statchange: [
            "-5 ACC // -15 DODGE",
            "+20% DMG"
        ],
        total:"29.4%",
        actout: [
            "23.52% - Stress +6 to party // 5.88% - Attack ally",
        ],
        comment: [
            "Ally is hit (20%) // Ally attacks (20%)",
        ],
        other: [
            "Refuse being Moved (33%)",
            "Refuse to use or be the target of a Camping Skill (33%)",
        ],
    },
    {
        column:"2",
        num:"6",
        name: "Hopeless",
        statchange: [
            "-5 ACC // -5 DODGE",
            "-3 SPD"
        ],
        total:"35%",
        actout: [
            "5% - Stress +6 to party // 10% - Move 1 (Front/Back)",
            "5% - Pass turn // 5% - Mark Self (2 rds)",
            "5% - Attack Self (10% MAX HP) // 5% - Use a random skill",
        ],
        comment: [
            "Ally triggers a Trap (37.5%)",
        ],
        other: [
            "Refuse being Healed or Buffed (33%) // Refuse to retreat (33%)",
            "Refuse to use an item (33%) // Refuse to eat while Camping (33%)",
            "Refuse to use or be the target of a Camping Skill (33%)",
        ],
    },
    {
        column:"2",
        num:"7",
        name: "Irrational",
        statchange: [
            "+2 SPD // -10% DMG",
            "-5 ACC // -5 DODGE",
        ],
        total:"33.33%",
        actout: [
            "5.21% - Stress +6 to party // 5.21% - Move 1 (Front/Back)",
            "5.21% - Pass turn // 5.21% - Mark Self (2 rds)",
            "5.21% - Attack Self (10% MAX HP) // 1.7% - Attack ally",
            "5.21% - Use a random skill",
        ],
        comment: [
            "Hero is attacked (20%) // Ally is attacked (20%)",
            "Ally attacks (20%) // Ally triggers a Trap (37.5%)",
            "Ally interacts with any Curio (33%)",
        ],
        other: [
            "Refuse being Healed or Buffed or Moved (33%)",
            "Refuse to retreat (33%) // Refuse to use an item (33%)",
            "Refuse to use or be the target of a Camping Skill (33%)",
            "Refuse to eat while Camping (33%)",
        ],
        misc: [
            "Forced Interaction with any Hallway Curios (7.5% Chance)",
        ],
    },
    {
        column:"2",
        num:"8",
        name: "Rapturous",
        statchange: [
            "+25% DMG // +3 SPD",
            "-20 DODGE",
        ],
        total:"41.67%",
        actout: [
            "8.33% - Stress +6 to party // 8.33% - Move: Forward 1",
            "8.33% - Attack Self (10% MAX HP) // 8.33% - Attack ally",
            "8.33% - Use a random skill",
        ],
        comment: [
            "Hero is attacked (20%)",
        ],
        other: [
            "Refuse Buffs (10%) // Refuse being Healed or Moved (33%)",
            "Refuse to retreat (33%) // Refuse to use an item (10%)",
            "Refuse to use or be the target of a Camping Skill (33%)",
        ],

        misc: [
            "Flagellant Exclusive",
        ],
        dlc:"Crimson Court DLC",
    },
    {
        column:"2",
        num:"9",
        name: "Refracted",
        statchange: [
            "+20% Stress // -5 SPD",
            "+15% Bleed & Blight Skill Chance",
            "Ignore Stealth",
        ],
        total:"39%",
        actout: [
            "7.3% - Stress +6 to party // 7.3% - Move 1 (Front/Back)",
            "7.3% - Pass turn // 7.3% - Mark Self (2 rds)",
            "7.3% - Use a random item // 2.4% - Attack ally",
        ],
        comment: [
            "Hero is hit (33%) // Ally is hit (33%) ",
            "Ally's attack hits (33%) // Ally triggers a Trap (33%)",
            "Ally interacts with any Curio (33%)",
        ],
        other:[
            "Refuse Heals or Buffs (33%)",
            "Refuse to eat while Camping (33%)",
            "Refuse to use or be the target of a Camping Skill (33%)",
        ],
        misc: [
            "Only acquired by heroes who have been to The Farmstead.",
            "Act-out attack gains secondary effect (Overrides existing ones): ",
            "Horror 5 stress/rd for 3 rds",
        ],
        dlc:"Color of Madness DLC",
    },
]

  
const resolveColumn1 = document.createElement("div");
resolveColumn1.className = "resolve_column resolve1";
const resolveColumn2 = document.createElement("div");
resolveColumn2.className = "resolve_column resolve2";

VirtueAfflictionData.forEach((resolve) => {

    const resolveElement = document.createElement("span");
    const resolveIDName = resolve.name.toLowerCase().replace(/\s/g, '_');
    const linebreak = document.createElement("br");
    resolveElement.textContent = resolve.name

        resolveElement.id = resolveIDName;
        if(resolve.column === "1") {
            resolveElement.className = "resolve_name"
            resolveColumn1.appendChild(resolveElement);        
            resolveColumn1.appendChild(linebreak);
        }
        if(resolve.column === "2") {
            resolveElement.className = "resolve_name"
            resolveColumn2.appendChild(resolveElement);        
            resolveColumn2.appendChild(linebreak);
        }
});
    
ResolveMainContainer.appendChild(resolveColumn1);
ResolveMainContainer.appendChild(resolveColumn2);

function generateResolveStates(resolve) {
    const resolveIDName = resolve.name.toLowerCase().replace(/\s/g, '_');
    const resolveID = `${resolveIDName}_desc`;
    const resolveClass = `resolve_desc resolve_desc_row${resolve.column} resolve_desc_num${resolve.num}`
    const StatInfo = document.createElement("div");
    const ActoutInfo = document.createElement("div");
    const CommentInfo = document.createElement("div");    
    const OtherInfo = document.createElement("div");
    const MiscInfo = document.createElement("div");

    let titleClass = ""; // Declare titleClass variable here



if(resolve.column === "1") {
    titleClass = "highres"
}
else if(resolve.column === "2") {
    titleClass = "negative"
}

StatInfo.innerHTML += `<span class = "${titleClass}  resolve_desc_margin "> Stat Changes </span> <br>`
    resolve.statchange.forEach(text => {
        const StyledText = replaceSpecificResolveDesc(text);
        const linebreak = document.createElement("br");
        
        StatInfo.innerHTML +=StyledText
        StatInfo.appendChild(linebreak)
    });

ActoutInfo.innerHTML += `<span class = "${titleClass} resolve_desc_margin"> Act-outs (${resolve.total} Total) </span> <br>`
    resolve.actout.forEach(text => {
        const StyledText = replaceSpecificResolveDesc(text);
        const linebreak = document.createElement("br");
        
        ActoutInfo.innerHTML +=StyledText
        ActoutInfo.appendChild(linebreak)
    });        

    if (resolve.comment) {
    CommentInfo.innerHTML += `<span class = "${titleClass} resolve_desc_margin"> Comments </span> <br>`
    resolve.comment.forEach(text => {
        const StyledText = replaceSpecificResolveDesc(text);
        const linebreak = document.createElement("br");
        CommentInfo.innerHTML +=StyledText
        CommentInfo.appendChild(linebreak)
    });
}

if (resolve.other) {
    OtherInfo.innerHTML += `<span class = "${titleClass} resolve_desc_margin"> Other Interactions </span> <br>`
    resolve.other.forEach(text => {
        const StyledText = replaceSpecificResolveDesc(text);
        const linebreak = document.createElement("br");
        
        OtherInfo.innerHTML +=StyledText
        OtherInfo.appendChild(linebreak)
    });
}

if (resolve.misc) {
    MiscInfo.innerHTML += `<span class = "${titleClass} resolve_desc_margin"> Misc Info </span> <br>`
    resolve.misc.forEach(text => {
        const StyledText = replaceSpecificResolveDesc(text);
        const linebreak = document.createElement("br");
        
        MiscInfo.innerHTML +=StyledText
        MiscInfo.appendChild(linebreak)
    });
}

    let dlc = resolve.dlc? replaceSpecificResolveDesc(resolve.dlc) : '';
    
     return `
            <div class = "${resolveClass}" id = ${resolveID}>
                <span class = "${titleClass} resolve_title">${resolve.name}</span><br>
                ${StatInfo.innerHTML}
                ${ActoutInfo.innerHTML}
                ${CommentInfo.innerHTML}
                ${OtherInfo.innerHTML}
                ${MiscInfo.innerHTML}
                <span class = "resolve_desc_margin">${dlc}</span>
            </div>
            
           
        `;
  }

  VirtueAfflictionData.forEach((resolve) => {
    const resolveHTML = generateResolveStates(resolve);
    ResolveMainContainer.innerHTML += resolveHTML;
});
function replaceSpecificResolveDesc(description) {
    description = description.replace(/Stress/g, '<span class="stress">Stress</span>');
    description = description.replace(/Horror/g, '<span class="stress">Horror</span>');

    description = description.replace(/Stealth/g, '<span class="stealth">Stealth</span>');
    description = description.replace(/Trap/g, '<span class="stealth">Trap</span>');

    description = description.replace(/Moved/g, '<span class="move">Moved</span>');
    description = description.replace(/Move/g, '<span class="move">Move</span>');
    description = description.replace(/Forward/g, '<span class="move">Forward</span>');
    description = description.replace(/Front/g, '<span class="move">Front</span>');
    description = description.replace(/Back/g, '<span class="move">Back</span>');

    description = description.replace(/Healed/g, '<span class="heal">Healed</span>');
    description = description.replace(/Heals/g, '<span class="heal">Heals</span>');
    description = description.replace(/Heal/g, '<span class="heal">Heal</span>');

    description = description.replace(/Mark/g, '<span class="mark">Mark</span>');  

    description = description.replace(/Blight/g, '<span class="blight">Blight</span>');
    description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
    description = description.replace(/Stun/g, '<span class="stun">Stun</span>');
    description = description.replace(/Death Blow/g, '<span class="mark">Death Blow</span>');
    description = description.replace(/Disease/g, '<span class="disease">Disease</span>');

    description = description.replace(/Debuff Target:/g, '<span class="debuff">Debuff Target:</span>');
    description = description.replace(/Debuff Self:/g, '<span class="debuff">Debuff Self:</span>');
    description = description.replace(/Debuff/g, '<span class="debuff">Debuff</span>');

    description = description.replace(/Buffs/g, '<span class="buff">Buffs</span>');
    description = description.replace(/Buffed/g, '<span class="buff">Buffed</span>');
    description = description.replace(/Buff Self:/g, '<span class="buff">Buff Self:</span>');
    description = description.replace(/Buff Target:/g, '<span class="buff">Buff Target:</span>');
    description = description.replace(/Buff Companions:/g, '<span class="buff">Buff Companions:</span>');
    description = description.replace(/Buff Companion:/g, '<span class="buff">Buff Companion:</span>');
    description = description.replace(/Buff/g, '<span class="buff">Buff</span>');

    description = description.replace(/Curios/g, '<span class="attack_type">Curios</span>');
    description = description.replace(/Curio/g, '<span class="attack_type">Curio</span>');
    description = description.replace(/Treasure/g, '<span class="highres">Treasure</span>');
    description = description.replace(/Worship/g, '<span class="highres">Worship</span>');
    description = description.replace(/Torture/g, '<span class="highres">Torture</span>');

    description = description.replace(/(\(\d+% Base\)|\d+% Base)/g, '<span class="chance">$1</span>');

    description = description.replace(/Camping/g, '<span class="veteran">Camping</span>');
    description = description.replace(/Steals Loot/g, '<span class="negative">(Steals Loot)</span>');
    description = description.replace(/Forced Interaction/g, '<span class="negative">Forced Interaction</span>');

    description = description.replace(/Color of Madness DLC/g, '<span class="crystalline">Color of Madness DLC</span>');
    description = description.replace(/The Farmstead/g, '<span class="crystalline">The Farmstead</span>');

    description = description.replace(/Crimson Court DLC/g, '<span class="crimson_court">Crimson Court DLC</span>');
    description = description.replace(/Flagellant/g, '<span class="crimson_court">Flagellant</span>');
    description = description.replace(/Shieldbreaker/g, '<span class="block">Shieldbreaker</span>');


    
    return description;
}



const ResolveIconData = [
    //Overview
    {    
  
      icon_src:"images/Hero_boxes/more_info_icon.png",
      icon_class: "info resolve_overview",
      icon_id:"resolve_overview",
  
      label_class:"ddlogo_text resolve_overview_label",
      labeltext:"Overview",
  
      class: "general_desc resolve_overview_info",
      id:"resolve_overview_desc",
  
      description: [
        "When a hero reaches 100 Stress, they have a chance to become Virtuous(25%) or Afflicted (75%). This chance can be affected by Trinkets, Quirks, and Town Events. <br>",
        "In the case of heroes who have gone into a higher level dungeon, they lose 5% Virtue Chance per level gap (Capping at -33% if a Resolve level 0 hero goes into a level 6 dungeon).<br>",
        "Although a hero's Virtue chance is always at least 1% (and capped at 95%) there are 2 cases where a hero cannot Virtue.<br>",
        "The first case is with the Flagellant hero, who cannot Virtue, and the second case is with any Shieldbreakers during a Nighmare encounter. <br>",
        "Heroes gain a increased tendency to get Virtues or Afflictions the more they have gotten them in the past.",
      ]
    },

    //Affliction Overview
    {
  
        icon_src:"images/estate_icons/affliction_icon.png",
        icon_class: "info affliction_overview",
        icon_id:"affliction_overview",
  
        label_class:"ddlogo_text affliction_overview_label negative",
        labeltext:"Afflictions",
    
        class: "general_desc affliction_info",
        id:"affliction_overview_desc",
    
    
        description: [
            "When a hero gets an Affliction, they suffer severe Stat Penalties which vary depending on their Affliction, with a nerf to most of their resistences and a loss of MAX HP being shared between all Afflictions but Rapturous.<br>",
            "Afflicted heroes have a chance to perform negative act-outs(which cannot trigger twice in a row). Act-outs outside of passing turns or using a random skill will not use up the hero's turn.<br>",
            "Afflicted heros also have a chance to refuse to use or benefit from a Camping skill, notably, this still uses the Respite points of the Skill.<br>",
            "Afflicted heroes will continue to gain Stress, and if their Stress levels hit 200, they will take a Heart Attack, dropping their HP to 0 and setting their Stress down to 170.<br>",
            "Unlike Virtues, Afflictions remain on the hero after entering the Hamlet, and the Hero's Stress is reset to 100 if they had more than 100 Stress at the end of the expedition.<br>", 
            "Partaking in any Stress relief activity within the Hamlet will remove the Affliction. During expeditions, a hero will lose their Affliction if their Stress levels hit 0.<br>",
            "All Afflictions (except Rapturous) lower Stun, Blight, Bleed, Disease, Debuff, Move, and Trap Resist by 15%, and reduce MAX HP by 10%.",
        ]
      
    },

    //Virtue Overview
    {
  
      icon_src:"images/estate_icons/virtue_icon.png",
      icon_class: "info virtue_overview",
      icon_id:"virtue_overview",

      label_class:"ddlogo_text virtue_overview_label stress",
      labeltext:"Virtues",
  
      class: "general_desc virtue_info",
      id:"virtue_overview_desc",
  
  
      description: [
        "When a hero gets a Virtue, their Stress is set to 45 and they gain a Stat Buff based on their Virtue alongside a boost to most of their resistances. Virtuous heroes also have a 25% chance to perform beneficial act-outs which do not use up their turn - act-outs differ depending on the Virtue a hero has.<br>", 
        "Virtuous heroes do not suffer a Heart Attack when reaching 200 Stress, instead they lose their Virtue and their Stress gets reset to 0<br>",
        "Virtues are removed upon entering the Hamlet, with their Stress levels not being reset unless they had more than 100 Stress at the end of the expedition, in which case their Stress is set to 100 upon entering the Hamlet.<br>",
        "All Virtues increase Stun, Blight, Bleed, Disease, Debuff, and Move Resist by 25%",
      ]
    
    },


    //Act-Out Attacks
     {
  
      icon_src:"images/estate_icons/affliction_icon.png",
      icon_class: "info actout_overview",
      icon_id:"actout_overview",

      label_class:"ddlogo_text actout_overview_label negative",
      labeltext:"Act-Out Attacks",
  
      class: "general_desc actout_general_info",
      id:"actout_overview_desc",
  
  
      description: [
        "Afflicted heroes sometimes attack ally heroes, where, each hero has their own act-out attack with differing damage and effects.",        
        "Arbalest / Musketeer / Bounty Hunter (15% / 10% / 10% base DMG) - Mark Target (3 rds) // Crusader / Man-at-Arms (10% base DMG) - Stun (120% Base)",
        "Flagellant / Highwayman / Leper (25% / 25% / 33% base DMG) // Abomination (15% base DMG) - Blight (120% Base) 3pts/rd for 3 rds ",
        "Plague Doctor (10% base DMG) - Blight (120% Base) 4pts/rd for 3 rds // Grave Robber (10% base DMG) - Blight (120% Base) 2pts/rd for 3 rds",
        "Hellion (15% base DMG) - Bleed (120% Base) 3pts/rd for 3 rds  // Houndmaster (15% base DMG) - Bleed (120% Base) 2pts/rd for 3 rds",
        "Jester (10% base DMG) - Stress +15 // Occultist (10% base DMG) - Debuff (120% Base) -10 DODGE (3 rds) // Vestal (10% base DMG) - Debuff (120% Base) -10 ACC (3 rds)",
        "Shieldbreaker (15% base DMG) - Debuff (120% Base) -7 SPD (3 rds) //  Antiquarian (5% base DMG) - Debuff (120% Base) -4 SPD (3 rds)",

      ]
    
    },

        //Circus
     {
  
      icon_src:"images/Hero_boxes/more_info_icon.png",
      icon_class: "info circus_resolve_overview",
      icon_id:"circus_resolve_overview",
  
      label_class:"ddlogo_text circus_resolve_overview_label",
      labeltext:"The Circus",
  
      class: "general_desc circus_resolve_overview_info",
      id:"circus_resolve_overview_desc",
  
  
      description: [
        "Heroes in the Butcher's Circus have a base Virtue chance of 0%. When a hero gets a Virtue, their Stress is set to 80, and they can suffer from Heart Attacks like normal, although they retain their Virtue.",
      ]
    
    },

   

      
  ]
  
  
  ResolveIconData.forEach((resolvedesc) => {
    const ResolveIconImg = document.createElement("img");
    ResolveIconImg.src = resolvedesc.icon_src
    ResolveIconImg.loading = "lazy"
    ResolveIconImg.className = resolvedesc.icon_class
    ResolveIconImg.id = resolvedesc.icon_id

      const ResolveIconLabel = document.createElement("div");
      ResolveIconLabel.className = resolvedesc.label_class;
      ResolveIconLabel.innerHTML = resolvedesc.labeltext;

      ResolveMainContainer.appendChild(ResolveIconImg);
      ResolveMainContainer.appendChild(ResolveIconLabel);


    
})
ResolveIconData.forEach((resolvedesc) => {
const ResolveIconDescContainer = document.createElement("div");
ResolveIconDescContainer.id = resolvedesc.id;
ResolveIconDescContainer.className = resolvedesc.class;

resolvedesc.description.forEach((text, index) => {
    const StyledText = replaceSpecificResolveIconDesc(text);
    ResolveIconDescContainer.innerHTML += StyledText;

    if (index < resolvedesc.description.length - 1) {
      const linebreak = document.createElement("br");
      ResolveIconDescContainer.appendChild(linebreak);
    }

  }); 
  ResolveMainContainer.appendChild(ResolveIconDescContainer);
})

function replaceSpecificResolveIconDesc(description) {
    description = description.replace(/Stress/g, '<span class="stress">Stress</span>');
    description = description.replace(/Horror/g, '<span class="stress">Horror</span>');

    description = description.replace(/Virtuous/g, '<span class="stress">Virtuous</span>');
    description = description.replace(/Virtued/g, '<span class="stress">Virtued</span>');
    description = description.replace(/Virtues/g, '<span class="stress">Virtues</span>');
    description = description.replace(/Virtue/g, '<span class="stress">Virtue</span>');

    description = description.replace(/Afflicted/g, '<span class="negative">Afflicted</span>');
    description = description.replace(/Afflictions/g, '<span class="negative">Afflictions</span>');
    description = description.replace(/Affliction/g, '<span class="negative">Affliction</span>');
    description = description.replace(/Heart Attacks/g, '<span class="negative">Heart Attacks</span>');
    description = description.replace(/Heart Attack/g, '<span class="negative">Heart Attack</span>');
    description = description.replace(/Rapturous/g, '<span class="negative">Rapturous</span>');
    description = description.replace(/Refracted/g, '<span class="crystalline">Refracted</span>');


    description = description.replace(/Stealth/g, '<span class="stealth">Stealth</span>');
    description = description.replace(/Trap/g, '<span class="stealth">Trap</span>');

    description = description.replace(/Moved/g, '<span class="move">Moved</span>');
    description = description.replace(/Move/g, '<span class="move">Move</span>');
    description = description.replace(/Forward/g, '<span class="move">Forward</span>');
    description = description.replace(/Front/g, '<span class="move">Front</span>');
    description = description.replace(/Back/g, '<span class="move">Back</span>');

    description = description.replace(/Healed/g, '<span class="heal">Healed</span>');
    description = description.replace(/Heals/g, '<span class="heal">Heals</span>');
    description = description.replace(/Heal/g, '<span class="heal">Heal</span>');

    description = description.replace(/Mark/g, '<span class="mark">Mark</span>');  

    description = description.replace(/Blight/g, '<span class="blight">Blight</span>');
    description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
    description = description.replace(/Stun/g, '<span class="stun">Stun</span>');
    description = description.replace(/Death Blow/g, '<span class="mark">Death Blow</span>');
    description = description.replace(/Disease/g, '<span class="disease">Disease</span>');

    description = description.replace(/Debuff Target:/g, '<span class="debuff">Debuff Target:</span>');
    description = description.replace(/Debuff Self:/g, '<span class="debuff">Debuff Self:</span>');
    description = description.replace(/Debuff/g, '<span class="debuff">Debuff</span>');

    description = description.replace(/Buffs/g, '<span class="buff">Buffs</span>');
    description = description.replace(/Buffed/g, '<span class="buff">Buffed</span>');
    description = description.replace(/Buff Self:/g, '<span class="buff">Buff Self:</span>');
    description = description.replace(/Buff Target:/g, '<span class="buff">Buff Target:</span>');
    description = description.replace(/Buff Companions:/g, '<span class="buff">Buff Companions:</span>');
    description = description.replace(/Buff Companion:/g, '<span class="buff">Buff Companion:</span>');
    description = description.replace(/Buff/g, '<span class="buff">Buff</span>');

    description = description.replace(/Trinkets/g, '<span class="attack_type">Trinkets</span>');
    description = description.replace(/Quirks/g, '<span class="attack_type">Quirks</span>');
    description = description.replace(/Town Events/g, '<span class="attack_type">Town Events</span>');
    description = description.replace(/Hamlet/g, '<span class="attack_type">Hamlet</span>');


    description = description.replace(/(\(\d+% Base\)|\d+% Base)/g, '<span class="chance">$1</span>');

    description = description.replace(/Camping/g, '<span class="veteran">Camping</span>');
    description = description.replace(/Steals Loot/g, '<span class="negative">(Steals Loot)</span>');
    description = description.replace(/Forced Interaction/g, '<span class="negative">Forced Interaction</span>');

    description = description.replace(/Color of Madness DLC/g, '<span class="crystalline">Color of Madness DLC</span>');
    description = description.replace(/The Farmstead/g, '<span class="crystalline">The Farmstead</span>');

    description = description.replace(/Crimson Court DLC/g, '<span class="crimson_court">Crimson Court DLC</span>');
    description = description.replace(/Flagellant/g, '<span class="crimson_court">Flagellant</span>');
    description = description.replace(/Shieldbreakers/g, '<span class="block">Shieldbreakers</span>');
    description = description.replace(/Shieldbreaker/g, '<span class="block">Shieldbreaker</span>');

    description = description.replace(/Abomination/g, '<span class="highres">Abomination</span>');
    description = description.replace(/Antiquarian/g, '<span class="highres">Antiquarian</span>');
    description = description.replace(/Arbalest/g, '<span class="highres">Arbalest</span>');
    description = description.replace(/Bounty Hunter/g, '<span class="highres">Bounty Hunter</span>');
    description = description.replace(/Crusader/g, '<span class="highres">Crusader</span>');
    description = description.replace(/Grave Robber/g, '<span class="highres">Grave Robber</span>');
    description = description.replace(/Hellion/g, '<span class="highres">Hellion</span>');
    description = description.replace(/Highwayman/g, '<span class="highres">Highwayman</span>');
    description = description.replace(/Houndmaster/g, '<span class="highres">Houndmaster</span>');
    description = description.replace(/Jester/g, '<span class="highres">Jester</span>');
    description = description.replace(/Leper/g, '<span class="highres">Leper</span>');
    description = description.replace(/Man-at-Arms/g, '<span class="highres">Man-at-Arms</span>');
    description = description.replace(/Musketeer/g, '<span class="highres">Musketeer</span>');
    description = description.replace(/Occultist/g, '<span class="highres">Occultist</span>');
    description = description.replace(/Plague Doctor/g, '<span class="highres">Plague Doctor</span>');
    description = description.replace(/Vestal/g, '<span class="highres">Vestal</span>');



    
    return description;
}
