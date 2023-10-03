const diseaseNames = [
    ["Bad Humors", "The Black Plague", "Bullmic", "Creeping Cough", "Ennui", "Grey Rot", "Hemophilia", "Hysterical Blindness", "Lethargy", "Rabies", "Scurvy", "Spasm of the Entrails"],
    ["Spotted Fever", "Syphilis", "Tapeworm", "Tetanus", "The Ague", "The Fits", "The Red Plague", "The Runs", "The Worries", "Vertigo", "Vampiric Spirits", "Wasting Sickness"]
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


function replaceSpecificEffects(description) {
    description = description.replace(/Stress/g, '<span class="stress">Stress</span>');
    description = description.replace(/Virtue/g, '<span class="stress">Virtue</span>');
    description = description.replace(/Move/g, '<span class="move">Move</span>');
    description = description.replace(/Healing/g, '<span class="heal">Healing</span>');
    description = description.replace(/Heal/g, '<span class="heal">Heal</span>');
    description = description.replace(/Torch/g, '<span class="highres">Torch</span>');
    description = description.replace(/Blight/g, '<span class="blight">Blight</span>');
    description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
    description = description.replace(/Stun/g, '<span class="stun">Stun</span>');
    description = description.replace(/Disease/g, '<span class="disease">Disease</span>');
    description = description.replace(/Debuff/g, '<span class="debuff">Debuff</span>');
    
    return description;
}

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
