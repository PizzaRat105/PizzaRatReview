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
        Deal Stress to Party // Pass Turns // Move Randomly <br>
        Attack Teammates // Deny Being Moved // Deal Stress to Attacked Teammates <br>
        Deal Stress to Heroes interacting with Curios // Deny Healing <br>
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
        Empower Self (3 rds) +50% DMG +4 SPD <br><br>
        Possible Actouts <br>
        Self Stress - 15 // Deal Stress to Party // Move Forwards <br>
        Randomly Attack Teammates with Added Effects <br>
        (Same as Affliction Act Out Attacks) <br>
        Deny Buffs // Deal Stress to Attacked Teammates // Use Random Skill 
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
        Deal Stress to Party // Pass Turns // Attack Self <br>
         Deal Stress to Heroes interacting with Curios // Deny Healing <br>
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

const diseaseBanner = document.getElementById("disease_banner")
const dlcDiseaseBanner = document.getElementById("dlc_disease_banner")
const DiseaseSelectAudio = document.getElementById('btn_press');
DiseaseSelectAudio.volume = 0.7;

const diseaseNameBlock = document.getElementById("disease_names")
const dlcDiseaseNameBlock = document.getElementById("dlc_disease_names")

const diseaseEnemySource = document.getElementById("disease_enemy_info")
const diseaseEnemies = document.getElementById("disease_enemies")

const diseaseCurioSource = document.getElementById("disease_curio_info")
const diseaseCurios = document.getElementById("disease_curios")

const dlcDiseaseEnemySource = document.getElementById("dlc_disease_enemy_info")
const dlcDiseaseEnemies = document.getElementById("dlc_disease_enemies")

const dlcDiseaseCurioSource = document.getElementById("dlc_disease_curio_info")
const dlcDiseaseCurios = document.getElementById("dlc_disease_curios")
const cureCrimsonCurse = document.getElementById("crimson_curse_cure_info")
const benefitCrimsonCurse = document.getElementById("crimson_curse_benefit_info")
const cureCrimsonCurseLabel = document.getElementById("crimson_curse_cure_label")
const benefitCrimsonCurseLabel = document.getElementById("crimson_curse_benefit_label")

function PlayDiseasePress() {
  DiseaseSelectAudio.currentTime = 0; 
  DiseaseSelectAudio.play();
}
diseaseBanner.addEventListener("click",function() {
    PlayDiseasePress()
    diseaseNameBlock.style.display = "block"
    dlcDiseaseNameBlock.style.display = "none"

    diseaseCurioSource.style.display = "block"
    diseaseEnemySource.style.display = "block"
    diseaseEnemies.style.display = "block"
    diseaseCurios.style.display = "block"

    dlcDiseaseCurioSource.style.display = "none"
    dlcDiseaseEnemySource.style.display = "none"    
    dlcDiseaseEnemies.style.display = "none"
    dlcDiseaseCurios.style.display = "none"
    benefitCrimsonCurse.style.display = "none"
    cureCrimsonCurse.style.display = "none"
    benefitCrimsonCurseLabel.style.display = "none"
    cureCrimsonCurseLabel.style.display = "none"
})
dlcDiseaseBanner.addEventListener("click",function() {
    PlayDiseasePress()
    diseaseNameBlock.style.display = "none"
    dlcDiseaseNameBlock.style.display = "block"

    diseaseCurioSource.style.display = "none"
    diseaseEnemySource.style.display = "none"
    diseaseEnemies.style.display = "none"
    diseaseCurios.style.display = "none"

    dlcDiseaseCurioSource.style.display = "block"
    dlcDiseaseEnemySource.style.display = "block"    
    dlcDiseaseEnemies.style.display = "block"
    dlcDiseaseCurios.style.display = "block"
    benefitCrimsonCurse.style.display = "block"
    cureCrimsonCurse.style.display = "block"
    benefitCrimsonCurseLabel.style.display = "block"
    cureCrimsonCurseLabel.style.display = "block"
})
