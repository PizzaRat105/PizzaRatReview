const TorchMainContainer = document.getElementById("torchlight_box");

const TorchlightData = [
    {
        column:"1",
        num:"1",
        name: "Radiant Light",
        id:"radiant_light",
        light_range:"(76+)",
        scouting:"++ Scouting (+15%)",
        monster_surprise:"++ Monsters Surprised (+25%)",
        dodge:"+ DODGE (+7.5 on Radiant, +4 on Darkest, +2.5 on Stygian & Bloodmoon)",
        battleloot:"Battle: 0% chance of 1 bonus reward (Gold/Gems)",
        curioloot:"Curio: 0% chance of 1 bonus reward (Any Loot)",


    },
    {
        column:"1",
        num:"2",
        name: "Dim Light",
        id:"dim_light",
        light_range:"(51~75)",
        stress:"+ Stress (+10%)",
        scouting:"+ Scouting (+7.5%)",
        monster_surprise:"++ Monsters Surprised (+15%)",
        dodge:"+ DODGE (+4 on Radiant, +2.5 on Darkest, +0 on Stygian & Bloodmoon)",
        monster_crit:"+ Monster CRIT (+1%)",
        battleloot:"Battle: 25% chance of 1 bonus reward (Gold/Gems)",
        curioloot:"Curio: 25% chance of 1 bonus reward (Any Loot)",
    },
    {
        column:"1",
        num:"3",
        name: "Shadowy",
        id:"shadowy",
        light_range:"(26~50)",
        stress:"++ Stress (+20% on Radiant & Darkest, +25% on Stygian & Bloodmoon)",
        monster_acc:"+ Monster ACC (+5)",
        monster_dmg:"+ Monster DMG (+10%)",
        monster_surprise:"+ Monsters Surprised (+10% on Radiant & Darkest, +5% on Stygian & Bloodmoon)",
        hero_surprise:"+ Heroes Surprised (+15%)",
        extraloot:"+ Loot (Gold/Items +10%/+4 Draws)",
        player_crit:"+ Player CRIT (+1%)",
        monster_crit:"+ Monster CRIT (+2% on Radiant & Darkest, +2.5% on Stygian & Bloodmoon)",
        battleloot:"Battle: 50% chance of 1 bonus reward (Gold/Gems)",
        curioloot:"Curio: 50% chance of 1 bonus reward (Any Loot)",
    },
    {
        column:"1",
        num:"4",
        name: "Dark",
        id:"dark",
        light_range:"(1~25)",
        stress:"+++ Stress (+30% on Radiant & Darkest, +35% on Stygian & Bloodmoon)",
        monster_acc:"++ Monster ACC (+10)",
        monster_dmg:"++ Monster DMG (+15% on Radiant & Darkest, +17.5% on Stygian & Bloodmoon)",
        monster_surprise:"+ Monsters Surprised (+5% on Radiant & Darkest, +0% on Stygian & Bloodmoon)",
        hero_surprise:"++ Heroes Surprised (+25%)",
        extraloot:"++ Loot (Gold/Items +15%/+8 draws on Radiant & Darkest, +20%/+8 draws on Stygian & Bloodmoon)",
        player_crit:"++ Player CRIT (+2% on Radiant & Darkest, +2.5% on Stygian & Bloodmoon)",
        monster_crit:"++ Monster CRIT (+3% on Radiant & Darkest, +3.5% on Stygian & Bloodmoon)",
        battleloot:"Battle: 75% chance of 1 bonus reward (Gold/Gems)",
        curioloot:"Curio: 75% chance of 1 bonus reward (Any Loot)",
    },
    {
        column:"1",
        num:"5",
        name: "Black as Pitch",
        id:"black_as_pitch",
        light_range:"(0)",
        stress:"++++ Stress (+40% on Radiant & Darkest, +50% on Stygian & Bloodmoon)",
        monster_acc:"+++ Monster ACC (+12.5)",
        monster_dmg:"+++ Monster DMG (+25% on Radiant & Darkest, +30% on Stygian & Bloodmoon)",
        hero_surprise:"+++ Heroes Surprised (+40%)",
        extraloot:"+++ Loot (Gold/Items +30%/+12 draws)",
        player_crit:"+++ Player CRIT (+3%)",
        monster_crit:"+++ Monster CRIT (+5% on Radiant & Darkest, +6% on Stygian & Bloodmoon)",
        battleloot:"Battle: 75% chance of 2 bonus rewards (Gold/Gems)",
        curioloot:"Curio: 95% chance of 1 bonus reward (Any Loot)",
    },

    {
        column:"1",
        num:"7",
        name: "Radiant Light",
        id:"radiant_light_cartographer",
        light_range:"(76+)",
        scouting:"+++ Scouting (+17.5%)",
        monster_surprise:"+++++ Monsters Surprised (+30%)",
        dodge:"+ DODGE (+10 on Radiant, +7.5 on Darkest & Bloodmoon)",
        hero_surprise:"- Heroes Surprised (-5%)",
        extraloot:"+ Loot (Gold/Items +1%/+1 draws)",
        player_crit:"+ Player CRIT (+1%)",
        battleloot:"Battle: 25% chance of 1 bonus reward (Gold/Gems)",
        curioloot:"Curio: 25% chance of 1 bonus reward (Any Loot)",


    },
    {
        column:"1",
        num:"8",
        name: "Dim Light",
        id:"dim_light_cartographer",
        light_range:"(51~75)",
        stress:"+ Stress (+10%)",
        scouting:"++ Scouting (+10%)",
        monster_surprise:"++++ Monsters Surprised (+20%)",
        dodge:"+ DODGE (+2.5 on Radiant, +0 on Darkest & Bloodmoon)",
        hero_surprise:"- Heroes Surprised (-5%)",
        extraloot:"++ Loot (Gold/Items +2%/+2 draws)",
        player_crit:"+ Player CRIT (+1%)",
        monster_crit:"+ Monster CRIT (+1%)",
        battleloot:"Battle: 50% chance of 1 bonus reward (Gold/Gems)",
        curioloot:"Curio: 50% chance of 1 bonus reward (Any Loot)",
    },
    {
        column:"1",
        num:"9",
        name: "Shadowy",
        id:"shadowy_cartographer",
        light_range:"(26~50)",
        stress:"++ Stress (+20% on Radiant & Darkest, +25% on Bloodmoon)",
        monster_acc:"+ Monster ACC (+5)",
        monster_dmg:"+ Monster DMG (+10%)",        
        scouting:"+ Scouting (+2.5%)",
        monster_surprise:"+ Monsters Surprised (+15% on Radiant & Darkest, +10% on Bloodmoon)",
        hero_surprise:"+ Heroes Surprised (+10%)",
        extraloot:"+++ Loot (Gold/Items +3%/+3 Draws)",
        player_crit:"++ Player CRIT (+2%)",
        monster_crit:"+ Monster CRIT (+2% on Radiant & Darkest, +2.5% on Bloodmoon)",
        battleloot:"Battle: 75% chance of 1 bonus reward (Gold/Gems)",
        curioloot:"Curio: 75% chance of 1 bonus reward (Any Loot)",
    },
    {
        column:"1",
        num:"10",
        name: "Dark",
        id:"dark_cartographer",
        light_range:"(1~25)",
        stress:"+++ Stress (+30% on Radiant & Darkest, +35% on Bloodmoon)",
        monster_acc:"++ Monster ACC (+10)",
        monster_dmg:"++ Monster DMG (+15% on Radiant & Darkest, +17.5% on Bloodmoon)",
        scouting:"+ Scouting (+2.5%)",
        monster_surprise:"+ Monsters Surprised (+10%)",
        hero_surprise:"+ Heroes Surprised (+20%)",
        extraloot:"++++ Loot (Gold/Items +4%/+4 Draws)",
        player_crit:"+++ Player CRIT (+3%)",
        monster_crit:"++ Monster CRIT (+3% on Radiant & Darkest, +3.5% on Bloodmoon)",
        battleloot:"Battle: 90% chance of 1 bonus reward (Gold/Gems)",
        curioloot:"Curio: 90% chance of 1 bonus reward (Any Loot)",
    },
    {
        column:"1",
        num:"11",
        name: "Black as Pitch",
        id:"black_as_pitch_cartographer",
        light_range:"(0)",
        stress:"++++ Stress (+40% on Radiant & Darkest, +50% on Bloodmoon)",
        monster_acc:"+++ Monster ACC (+12.5)",
        monster_dmg:"+++ Monster DMG (+25% on Radiant & Darkest, +30% on Bloodmoon)",
        scouting:"+ Scouting (+2.5%)",
        monster_surprise:"+ Monsters Surprised (+5%)",
        hero_surprise:"+ Heroes Surprised (+35%)",
        extraloot:"+++++ Loot (Gold/Items +5%/+5 draws)",
        player_crit:"++++ Player CRIT (+4%)",
        monster_crit:"+++ Monster CRIT (+5% on Radiant & Darkest, +6% on Bloodmoon)",
        battleloot:"Battle: 90% chance of 2 bonus rewards (Gold/Gems)",
        curioloot:"Curio: 99% chance of 1 bonus reward (Any Loot)",
    },

    {
        column:"2",
        num:"1",
        name: "Bloodlight",
        id:"bloodlight",
        light_range:"(100)",
        statchange: [          
            "+10% Stress",
            "+10% Bleed Resist",
        ],
        misc: [
            "Light level is fixed at 100",
        ],
        area:"The Courtyard",
        dlc:"Crimson Court DLC",

    },
    {
        column:"2",
        num:"2",
        name: "Farmstead Miasma",
        id:"farmstead_miasma",
        light_range:"(100)",
        herostat: [             
            "-10% Healing Received",
            "+10% Stress",
        ],
        monsterstat: [          
            "None",
        ],
        misc: [
            "Light level is fixed at 100",
        ],
        area:"The Farmstead",
        dlc:"Color of Madness DLC",

    },
    {
        column:"2",
        num:"3",
        name: "Blazing",
        id:"blazing",
        light_range:"(100)",
        herostat: [             
            "+20% DMG vs Marked",
            "+20% Debuff Skill Chance",
        ],
        monsterstat: [          
            "+3 SPD",
            "+10% PROT",
        ],
        misc: [
            "Light level is fixed at 100",
        ],
        area:"The Farmstead",
        dlc:"Color of Madness DLC",
    },
    {
        column:"2",
        num:"4",
        name: "Haunting",
        id:"haunting",
        light_range:"(100)",
        herostat: [             
            "+15% Blight Skill Chance",
            "+10% Stress",
        ],
        monsterstat: [          
            "+15% Blight Skill Chance",
            "+10 DODGE",
        ],
        misc: [
            "Light level is fixed at 100",
        ],
        area:"The Farmstead",
        dlc:"Color of Madness DLC",
    },
    {
        column:"2",
        num:"5",
        name: "Gleaming",
        id:"gleaming",
        light_range:"(100)",
        herostat: [             
            "+15% Bleed Skill Chance",
            "+15% Healing Skills",
        ],
        monsterstat: [          
            "+15% Bleed Skill Chance",
            "+5% CRIT",
        ],
        misc: [
            "Light level is fixed at 100",
        ],
        area:"The Farmstead",
        dlc:"Color of Madness DLC",
    },
    {
        column:"2",
        num:"6",
        name: "Splendorous",
        id:"splendorous",
        light_range:"(100)",
        herostat: [             
            "+5% Virtue Chance",
            "+20% Stress Skills",
        ],
        monsterstat: [          
            "-10% Bleed Resist",
            "-10% Blight Resist",
        ],
        misc: [
            "Light level is fixed at 100",
        ],
        area:"The Farmstead",
        dlc:"Color of Madness DLC",
    },
    {
        column:"2",
        num:"8",
        name: "Unbearable Reflection",
        id:"unbearable_reflection",
        light_range:"(100)",
        herostat: [             
            "+33% Stress",
            "-33% Stress Skills",
        ],
        monsterstat: [          
            "+4 SPD",
        ],
        misc: [
            "Light level is fixed at 100",
        ],
        area:"The Farmstead",
        dlc:"Color of Madness DLC",
    },
    {
        column:"2",
        num:"9",
        name: "Reflection of Decay",
        id:"reflection_of_decay",
        light_range:"(100)",
        herostat: [             
            "-50% Healing",
            "+20% Stress Skills",
        ],
        monsterstat: [          
            "+15% PROT",
            "+25% Stun Resist",
            "+25% Debuff Resist",
        ],
        misc: [
            "Light level is fixed at 100",
        ],
        area:"The Farmstead",
        dlc:"Color of Madness DLC",
    },
    {
        column:"2",
        num:"10",
        name: "Sanguine Reflection",
        id:"sanguine_reflection",
        light_range:"(100)",
        herostat: [             
            "-8% Death Blow Resist",
        ],
        monsterstat: [    
            "+7.5% CRIT",      
            "+3 SPD",
        ],
        misc: [
            "Light level is fixed at 100",
        ],
        area:"The Farmstead",
        dlc:"Color of Madness DLC",
    },
    {
        column:"2",
        num:"11",
        name: "Reflection Obscura",
        id:"reflection_obscura",
        light_range:"(100)",
        herostat: [             
            "-20% Stress",
            "-20% Healing",
        ],
        monsterstat: [          
            "+10% PROT",
            "+25% DMG",
        ],
        misc: [
            "Light level is fixed at 100",
        ],
        area:"The Farmstead",
        dlc:"Color of Madness DLC",
    },
]

  

function generateTorchStates(torch) {
    const torchDescID = `${torch.id}_desc`;
    const torchDescClass = `torchlight_desc`
    const StatInfo = document.createElement("div");   
    const MiscInfo = document.createElement("div");
    const HeroStatInfo = document.createElement("div");
    const MonsterStatInfo = document.createElement("div");    
 

    let titleClass = ""; // Declare titleClass variable here



if(torch.column === "1") {
    titleClass = "highres"
}


if(torch.id === "unbearable_reflection") {
    titleClass = "crystalline"
}else if(torch.id === "reflection_of_decay") {
    titleClass = "crystalline"
}else if(torch.id === "sanguine_reflection") {
    titleClass = "crystalline"
}else if(torch.id === "reflection_obscura") {
    titleClass = "crystalline"
}else if(torch.id === "farmstead_miasma") {
    titleClass = "crystalline"
}else if(torch.id === "bloodlight") {
    titleClass = "crimson_court"
}else if(torch.id === "blazing") {
    titleClass = "rare"
}else if(torch.id === "haunting") {
    titleClass = "haunting"
}else if(torch.id === "gleaming") {
    titleClass = "gleaming"
}else if(torch.id === "splendorous") {
    titleClass = "highres"
}

let stress = torch.stress? replaceSpecificTorchDesc(torch.stress) + '<br>': '';
let monster_acc = torch.monster_acc? replaceSpecificTorchDesc(torch.monster_acc) + '<br>': '';
let monster_dmg = torch.monster_dmg? replaceSpecificTorchDesc(torch.monster_dmg) + '<br>': '';
let scouting = torch.scouting? replaceSpecificTorchDesc(torch.scouting) + '<br>': '';
let monster_surprise = torch.monster_surprise? replaceSpecificTorchDesc(torch.monster_surprise) + '<br>': '';
let dodge = torch.dodge? replaceSpecificTorchDesc(torch.dodge) + '<br>': '';
let hero_surprise = torch.hero_surprise? replaceSpecificTorchDesc(torch.hero_surprise) + '<br>': '';
let extraloot = torch.extraloot? replaceSpecificTorchDesc(torch.extraloot) + '<br>': '';
let player_crit = torch.player_crit? replaceSpecificTorchDesc(torch.player_crit) + '<br>': '';
let monster_crit = torch.monster_crit? replaceSpecificTorchDesc(torch.monster_crit) + '<br>': '';
let battleloot = torch.battleloot? replaceSpecificTorchDesc(torch.battleloot) + '<br>': '';
let curioloot = torch.curioloot? replaceSpecificTorchDesc(torch.curioloot) + '<br>': '';

let area = torch.area? replaceSpecificTorchDesc(torch.area) + '<br>': '';
let dlc = torch.dlc? replaceSpecificTorchDesc(torch.dlc) : '';


if (torch.misc) {
    MiscInfo.innerHTML += `<span class = "torchlight_desc_margin highres"> Misc Info </span> <br>`
    torch.misc.forEach(text => {
        const StyledText = replaceSpecificTorchDesc(text);
        const linebreak = document.createElement("br");
        MiscInfo.innerHTML +=StyledText
        MiscInfo.appendChild(linebreak)
    });
}

if (torch.statchange) {
    torch.statchange.forEach(text => {
        const StyledText = replaceSpecificTorchDesc(text);
        const linebreak = document.createElement("br");
        StatInfo.innerHTML +=StyledText
        StatInfo.appendChild(linebreak)
    });
}

if (torch.herostat) {
    HeroStatInfo.innerHTML += `<span class = "torchlight_desc_margin highres"> Heroes: </span> <br>`
    torch.herostat.forEach(text => {
        const StyledText = replaceSpecificTorchDesc(text);
        const linebreak = document.createElement("br");
        
        HeroStatInfo.innerHTML +=StyledText
        HeroStatInfo.appendChild(linebreak)
    });
}

if (torch.monsterstat) {
    MonsterStatInfo.innerHTML += `<span class = "torchlight_desc_margin negative"> Monsters: </span> <br>`
    torch.monsterstat.forEach(text => {
        const StyledText = replaceSpecificTorchDesc(text);
        const linebreak = document.createElement("br");
        
        MonsterStatInfo.innerHTML +=StyledText
        MonsterStatInfo.appendChild(linebreak)
    });
}



    
     return `
            <div class = "${torchDescClass}" id = ${torchDescID}>
                <span class = "${titleClass} torchlight_title">${torch.name} ${torch.light_range}</span><br>
                <span class = "torchlight_desc_margin highres"> Torchlight Effects </span> <br>
                ${stress}
                ${monster_acc}
                ${monster_dmg}
                ${scouting}
                ${monster_surprise}
                ${dodge}
                ${hero_surprise}
                ${extraloot}
                ${player_crit}
                ${monster_crit}
                ${battleloot}
                ${curioloot}

                ${StatInfo.innerHTML}
                ${HeroStatInfo.innerHTML}
                ${MonsterStatInfo.innerHTML}
                ${MiscInfo.innerHTML}
                <span class = "torchlight_desc_margin">${area}</span>
                <span class = "torchlight_desc_margin">${dlc}</span><br>
            </div>
            
           
        `;
  }

  TorchlightData.forEach((torch) => {
    const torchHTML = generateTorchStates(torch);
    TorchMainContainer.innerHTML += torchHTML;
});
function replaceSpecificTorchDesc(description) {
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
    description = description.replace(/Healing/g, '<span class="heal">Healing</span>');
    description = description.replace(/Heal/g, '<span class="heal">Heal</span>');
    description = description.replace(/Marked/g, '<span class="mark">Marked</span>');  

    description = description.replace(/Mark/g, '<span class="mark">Mark</span>');  

    description = description.replace(/Blight/g, '<span class="blight">Blight</span>');
    description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
    description = description.replace(/Stun/g, '<span class="stun">Stun</span>');
    description = description.replace(/Death Blow/g, '<span class="mark">Death Blow</span>');
    description = description.replace(/Disease/g, '<span class="disease">Disease</span>');

    description = description.replace(/Debuff Target:/g, '<span class="debuff">Debuff Target:</span>');
    description = description.replace(/Debuff Self:/g, '<span class="debuff">Debuff Self:</span>');
    description = description.replace(/Debuff/g, '<span class="debuff">Debuff</span>');

    
    description = description.replace(/Buffed/g, '<span class="buff">Buffed</span>');
    description = description.replace(/Buff Self:/g, '<span class="buff">Buff Self:</span>');
    description = description.replace(/Buff Target:/g, '<span class="buff">Buff Target:</span>');
    description = description.replace(/Buff Companions:/g, '<span class="buff">Buff Companions:</span>');
    description = description.replace(/Buff Companion:/g, '<span class="buff">Buff Companion:</span>');
    description = description.replace(/Buff/g, '<span class="buff">Buff</span>');

    description = description.replace(/Scouting/g, '<span class="scouting">Scouting</span>');
    description = description.replace(/Surprised/g, '<span class="scouting">Surprised</span>');


    description = description.replace(/Loot/g, '<span class="highres">Loot</span>');
    description = description.replace(/Gold/g, '<span class="highres">Gold</span>');
    description = description.replace(/Gems/g, '<span class="buff">Gems</span>');
    description = description.replace(/Gem/g, '<span class="buff">Gem</span>');
    
    description = description.replace(/Battle/g, '<span class="attack_type">Battle</span>');
    description = description.replace(/Items/g, '<span class="attack_type">Items</span>');

    description = description.replace(/Light level/g, '<span class="highres">Light Level</span>');
    description = description.replace(/Radiant/g, '<span class="highres">Radiant</span>');
    description = description.replace(/Darkest/g, '<span class="highres">Darkest</span>');

    description = description.replace(/Heroes/g, '<span class="highres">Heroes</span>');
    description = description.replace(/Hero/g, '<span class="highres">Hero</span>');


    description = description.replace(/Curios/g, '<span class="attack_type">Curios</span>');
    description = description.replace(/Curio/g, '<span class="attack_type">Curio</span>');

    description = description.replace(/(\(\d+% Base\)|\d+% Base)/g, '<span class="chance">$1</span>');

    description = description.replace(/Monsters/g, '<span class="negative">Monsters</span>');
    description = description.replace(/Monster/g, '<span class="negative">Monster</span>');
    description = description.replace(/Stygian/g, '<span class="negative">Stygian</span>');

    description = description.replace(/Color of Madness DLC/g, '<span class="crystalline">Color of Madness DLC</span>');
    description = description.replace(/The Farmstead/g, '<span class="crystalline">The Farmstead</span>');

    description = description.replace(/The Courtyard/g, '<span class="crimson_court">The Courtyard</span>');
    description = description.replace(/Bloodmoon/g, '<span class="crimson_court">Bloodmoon</span>');
    description = description.replace(/Crimson Court DLC/g, '<span class="crimson_court">Crimson Court DLC</span>');
    description = description.replace(/Flagellant/g, '<span class="crimson_court">Flagellant</span>');
    description = description.replace(/Shieldbreaker/g, '<span class="block">Shieldbreaker</span>');


    
    return description;
}

const ReflectionIcon = document.createElement("img");
ReflectionIcon.src = "images/estate_icons/info_icon_question_mark.png"
ReflectionIcon.loading = "lazy"
ReflectionIcon.className = "info reflection_info"
ReflectionIcon.id = "reflection_info"

const ReflectionDesc = document.createElement("div");
ReflectionDesc.className = "general_desc reflection_info_desc"
ReflectionDesc.id = "reflection_info_desc"
ReflectionDesc.innerHTML = `<span class = "crystalline">Reflections</span> are<span class = "thing"> Endgame Conditions</span> for the <span class = "crystalline">Endless Harvest</span> in <span class = "crystalline">The Farmstead</span> which take effect <br> once the player has progressed beyond 200 Kills. These effects stack on top of any other light conditions that are present.`;


  TorchMainContainer.appendChild(ReflectionIcon);
  TorchMainContainer.appendChild(ReflectionDesc);

const TorchOverviewIcon = document.createElement("img");
TorchOverviewIcon.src = "images/Hero_boxes/more_info_icon.png"
TorchOverviewIcon.loading = "lazy"
TorchOverviewIcon.className = "info torch_overview"
TorchOverviewIcon.id = "torch_info"

const TorchOverviewLabel = document.createElement("div");
TorchOverviewLabel.className = "ddlogo_text torch_overview_label"
TorchOverviewLabel.innerHTML = `Base Chances`
const TorchOverviewDesc = document.createElement("div");
TorchOverviewDesc.className = "general_desc torch_overview_desc"
TorchOverviewDesc.id = "torch_info_desc"
TorchOverviewDesc.innerHTML = `<span class="negative">Monsters</span> <span class="scouting">Surprised</span> Base Chance: 10% <br> <span class="highres">Heroes</span> <span class="scouting">Surprised</span> Base Chance: 10% <br> Base <span class="scouting">Scouting</span> Chance: 25%`;


  TorchMainContainer.appendChild(ReflectionIcon);
  TorchMainContainer.appendChild(ReflectionDesc);

  TorchMainContainer.appendChild(TorchOverviewIcon);
  TorchMainContainer.appendChild(TorchOverviewLabel);
  TorchMainContainer.appendChild(TorchOverviewDesc);
