const MainHeroBox = document.getElementById("herobox")

const HeroSharedInfoData = [
    //Abomination
    {
        id: "abom", 
        heroheader: "The Abomination",
        from:"Base Game Hero",
        canon:"Bigby",

        positive: [
            "Potent Stun + Blight", 
            "High Speed & DMG", 
            "Decent Reach", 
            "Self Sustain",
            "No Locked Skills",
        ],

        negative: [
            "Position Dependant", 
            "Beast Form Stress", 
            "Lacks Rank 4 Reach",
        ],

        resists1:[
            "40%",
            "60%",
            "20%",
            "67%",
        ],

        resists2:[
            "40%",
            "30%",
            "20%",
            "10%",
        ],
        provision:"empty_inventory",

        miscdata:[
            "Front 1 Back 2",
            "+20% DMG (3 rds)",
            "Outsiders Bonfire",
        ],
        pos4:"pospip_barely_full",
        pos3:"pospip_half_full",
        pos2:"pospip_full",
        pos1:"pospip_half_full",

        target1:"negpip_full",
        target2:"negpip_full",
        target3:"negpip_half_full",
        target4:"empty_pip",
        hasdistrict:true,
        district:`outsiders_bonfire`,

        
    },

    //Antiquarian
    {
        id: "anti", 
        heroheader: "The Antiquarian",
        from:"Base Game Hero",
        canon:"Josephine",

        positive: [
            "Can Target All Ranks",             
            "Rank-Flexible", 
            "High Dodge",            
            "Antique Gatherer",
            "Support & Healing", 
        ],

        negative: [
            "Very Low Max HP", 
            "Low Resistances", 
            "Low DMG",
            "Prefers Back Ranks",
        ],

        resists1:[
            "20%",
            "20%",
            "20%",
            "67%",
        ],

        resists2:[
            "20%",
            "20%",
            "20%",
            "10%",
        ],
        provision:"Skeleton_Key",

        miscdata:[
            "Front 2 Back 2",
            "+10 DODGE (2 rds)",
            "Athenaeum",
        ],
        pos4:"pospip_full",
        pos3:"pospip_full",
        pos2:"pospip_half_full",
        pos1:"pospip_half_full",

        target1:"negpip_half_full",
        target2:"negpip_half_full",
        target3:"negpip_half_full",
        target4:"negpip_quarter_full",

        haspassiveinfo:true,
        hasdistrict:true,
        district:`athenaeum`,

        
    },

    //Arbalest
    {
        id: "arb", 
        heroheader: "The Arbalest",
        from:"Base Game Hero",
        canon:"Missandei",

        positive: [
            "Good Backline Reach", 
            "Mark Synergy", 
            "HP & Stress Healing", 
            "High Accuracy Attacks",
            "Mark & Stun Clear",
        ],

        negative: [
            "Backline Dependant", 
            "Mark Reliant DMG", 
            "Rank 1 Targetting",
        ],

        resists1:[
            "40%",
            "30%",
            "30%",
            "67%",
        ],

        resists2:[
            "40%",
            "30%",
            "30%",
            "10%",
        ],
        provision:"Bandage",

        miscdata:[
            "Front 0 Back 2",
            "+33% DMG vs Marked (3 rds)",
            "Training Ring",
        ],
        pos4:"pospip_full",
        pos3:"pospip_full",
        pos2:"pospip_barely_full",
        pos1:"pospip_barely_full",

        target1:"negpip_barely_full",
        target2:"negpip_full",
        target3:"negpip_full",
        target4:"negpip_full",
        hasdistrict:true,
        district:`training_ring`,

        
    },   

    //Bounty Hunter
    {
        id: "bh", 
        heroheader: "The Bounty Hunter",
        from:"Base Game Hero",
        canon:"Tardif",

        positive: [
            "Stuns and Displacement", 
            "Quite Rank-Flexible", 
            "Good Trap Disarm", 
            "Mark Synergy",
            "Good DMG and Reach",
        ],

        negative: [
            "Limited Stun Chance", 
            "No Self Sustain", 
        ],

        resists1:[
            "40%",
            "30%",
            "20%",
            "67%",
        ],

        resists2:[
            "40%",
            "30%",
            "30%",
            "40%",
        ],
        provision:"empty_inventory",

        miscdata:[
            "Front 2 Back 2",
            "+33% DMG vs Marked (3 rds)",
            "House of the Yellow Hand",
        ],
        pos4:"pospip_quarter_full",
        pos3:"pospip_half_full",
        pos2:"pospip_full",
        pos1:"pospip_half_full",

        target1:"negpip_half_full",
        target2:"negpip_full",
        target3:"negpip_full",
        target4:"negpip_half_full",
        hasdistrict:true,
        district:`house_of_the_yellow_hand`,

        
    },

    //Crusader
    {
        id: "crus", 
        heroheader: "The Crusader",
        from:"Base Game Hero",
        canon:"Reynauld",

        positive: [
            "Versatile & Durable", 
            "Can Target All Ranks", 
            "HP & Stress Healing", 
            "Ambush Prevention",
            "Torch Increasing Skills",
        ],

        negative: [            
            "DMG Suffers vs Prot", 
            "Very Slow", 
        ],

        resists1:[
            "40%<span class = 'highres'> (10%+) </span>",
            "30%",
            "30%",
            "67%",
        ],

        resists2:[
            "40%",
            "30%",
            "30%",
            "10%",
        ],
        provision:"Holy_Water",

        miscdata:[
            "Front 1 Back 1",
            "+15% PROT (2 rds)",
            "Altar of Light",
        ],
        pos4:"pospip_half_full",
        pos3:"pospip_half_full",
        pos2:"pospip_full",
        pos1:"pospip_full",

        target1:"negpip_half_full",
        target2:"negpip_full",
        target3:"negpip_barely_full",
        target4:"negpip_barely_full",
        hasdistrict:true,
        district:`altar_of_light`,

        
    },

     //Flagellant
    {
        id: "flag", 
        heroheader: "The Flagellant",
        from:"Crimson Court DLC",
        canon:"Damian",

        positive: [
            "Healing & Support", 
            "High Speed & Resists", 
            "Self Sustain ++", 
            "Potent Bleeds",
            "Can Target All Ranks",
        ],

        negative: [

            "Position Dependant",
            "Cannot Virtue",
            "Low Base Damage",
            "Lacks Burst DMG",
            "Mediocre Max HP",

        ],

        resists1:[
            "50%<span class = 'highres'> (10%+) </span>",
            "30%",
            "30%",
            "73%",
        ],

        resists2:[
            "50%",
            "65%",
            "40%",
            "0%",
        ],
        provision:"empty_inventory",

        miscdata:[
            "Front 3 Back 1",
            "+20% Bleed Skill Chance (2 rds)",
            "Altar of Light",
        ],
        pos4:"pospip_half_full",
        pos3:"pospip_half_full",
        pos2:"pospip_full",
        pos1:"pospip_full",

        target1:"negpip_quarter_full",
        target2:"negpip_quarter_full",
        target3:"negpip_barely_full",
        target4:"negpip_barely_full",

        haspassiveinfo:true,
        hasdistrict:true,
        district:`altar_of_light`,

        
    },

    //Grave Robber
    {
        id: "gr", 
        heroheader: "The Grave Robber",
        from:"Base Game Hero",
        canon:"Audrey",

        positive: [
            "High Spd & Dodge", 
            "Rank-Flexible", 
            "Good Trap Disarm", 
            "Disease Removal",
            "Can Target All Ranks",
        ],

        negative: [
            "Low Max HP",
            "Offense Oriented", 
            "No Self Sustain", 
        ],

        resists1:[
            "20%",
            "50%",
            "30%",
            "67%",
        ],

        resists2:[
            "20%",
            "30%",
            "30%",
            "50%",
        ],
        provision:"Shovel",

        miscdata:[
            "Front 2 Back 2",
            "+10 DODGE (2 rds)",
            "House of the Yellow Hand",
        ],
        pos4:"pospip_full",
        pos3:"pospip_full",
        pos2:"pospip_full",
        pos1:"pospip_quarter_full",

        target1:"negpip_half_full",
        target2:"negpip_full",
        target3:"negpip_full",
        target4:"negpip_quarter_full",
        hasdistrict:true,
        district:`house_of_the_yellow_hand`,

        
    },

    //Hellion
    {
        id: "hell", 
        heroheader: "The Hellion",
        from:"Base Game Hero",
        canon:"Boudica",

        positive: [
            "High DMG & Dodge", 
            "Frontline Stun", 
            "Bleeds",            
            "Can Target All Ranks",
            "Minor Self Sustain",
        ],

        negative: [
            "Position Dependant", 
            "Limited Movement", 
        ],

        resists1:[
            "40%",
            "40%",
            "30%",
            "67%",
        ],

        resists2:[
            "40%",
            "40%",
            "30%",
            "20%",
        ],
        provision:"empty_inventory",

        miscdata:[
            "Front 1 Back 0",
            "+33% DMG vs Bleeding (3 rds)",
            "Outsiders Bonfire",
        ],
        pos4:"pospip_barely_full",
        pos3:"pospip_quarter_full",
        pos2:"pospip_half_full",
        pos1:"pospip_full",

        target1:"negpip_full",
        target2:"negpip_full",
        target3:"negpip_quarter_full",
        target4:"negpip_barely_full",
        hasdistrict:true,
        district:`outsiders_bonfire`,

        
    },

    //Highwayman
    {
        id: "hwm", 
        heroheader: "The Highwayman",
        from:"Base Game Hero",
        canon:"Dismas",

        positive: [            
            "High Dodge + Riposte",
            "Rank Flexible", 
            "Can Target All Ranks",             
            "Good Trap Disarm", 
            "Ambush Prevention",
        ],

        negative: [
            "DMG Suffers vs Prot",
            "Offense Oriented", 
            "No Self Sustain", 
        ],

        resists1:[
            "30%",
            "30%",
            "30%",
            "67%",
        ],

        resists2:[
            "30%",
            "30%",
            "30%",
            "40%",
        ],
        provision:"empty_inventory",

        miscdata:[
            "Front 2 Back 2",
            "+2 SPD (2 rds)",
            "House of the Yellow Hand",
        ],
        pos4:"pospip_half_full",
        pos3:"pospip_full",
        pos2:"pospip_full",
        pos1:"pospip_half_full",

        target1:"negpip_full",
        target2:"negpip_full",
        target3:"negpip_full",
        target4:"negpip_half_full",
        hasdistrict:true,
        district:`house_of_the_yellow_hand`,

    },

    //Houndmaster
    {
        id: "hm", 
        heroheader: "The Houndmaster",
        from:"Base Game Hero",
        canon:"William",

        positive: [
            "Rank Flexible/Omnireach", 
            "Great Support Skills", 
            "Mark Synergy + Stun", 
            "Ambush Prevention",
            "High Dodge & Trap Disarm",
        ],

        negative: [
            "Mark Reliant DMG", 
            "Dislikes Position 1", 
        ],

        resists1:[
            "40%",
            "40%",
            "30%",
            "67%",
        ],

        resists2:[
            "40%",
            "40%",
            "30%",
            "40%",
        ],
        provision:"2_Dog_Treats",

        miscdata:[
            "Front 2 Back 2",
            "+20% Bleed Skill Chance (2 rds)",
            "Training Ring",
        ],
        pos4:"pospip_full",
        pos3:"pospip_full",
        pos2:"pospip_full",
        pos1:"pospip_half_full",

        target1:"negpip_full",
        target2:"negpip_full",
        target3:"negpip_full",
        target4:"negpip_half_full",
        hasdistrict:true,
        district:`training_ring`,

        
    },

    //Jester
    {
        id: "jes", 
        heroheader: "The Jester",
        from:"Base Game Hero",
        canon:"Sarmenti",

        positive: [            
            "Flexible/Decent Reach",              
            "Good Trap Disarm",
            "High Speed & Dodge", 
            "Burst DMG (Finale)", 
            "Support & Stress Relief",
        ],

        negative: [
            "No Self Sustain", 
            "Low Max HP", 
            "Overall Low DMG",
        ],

        resists1:[
            "20%",
            "40%",
            "20%",
            "67%",
        ],

        resists2:[
            "20%",
            "30%",
            "40%",
            "30%",
        ],
        provision:"Medicinal_Herbs",

        miscdata:[
            "Front 3 Back 3",
            "+40% Stress Relief Skills (2 rds)",
            "Performance Hall",
        ],
        pos4:"pospip_half_full",
        pos3:"pospip_full",
        pos2:"pospip_half_full",
        pos1:"pospip_quarter_full",

        target1:"negpip_half_full",
        target2:"negpip_full",
        target3:"negpip_full",
        target4:"negpip_barely_full",
        hasdistrict:true,
        district:`performance_hall`,

        
    },

    //Leper
    {
        id: "lep", 
        heroheader: "The Leper",
        from:"Base Game Hero",
        canon:"Baldwin",

        positive: [
            "High Stun & Move Resist", 
            "Very Durable", 
            "Very High Base DMG",            
            "Self Sustain",
            "Versatile Debuff",
        ],

        negative: [
            "Frontline Dependant", 
            "Limited Reach", 
            "Overall Low ACC",
            "Very Slow",
            "DMG Suffers vs Prot",
        ],

        resists1:[
            "60%",
            "50%",
            "20%",
            "67%",
        ],

        resists2:[
            "60%",
            "10%",
            "40%",
            "10%",
        ],
        provision:"Medicinal_Herbs",

        miscdata:[
            "Front 1 Back 0",
            "+10 ACC (2 rds)",
            "Outsiders Bonfire",
        ],
        pos4:"pospip_barely_full",
        pos3:"pospip_barely_full",
        pos2:"pospip_half_full",
        pos1:"pospip_full",

        target1:"negpip_full",
        target2:"negpip_full",
        target3:"negpip_barely_full",
        target4:"negpip_barely_full",
        
        hasdistrict:true,
        district:`outsiders_bonfire`,

        
    },

    //MAA
    {
        id: "maa", 
        heroheader: "The Man-at-Arms",
        from:"Base Game Hero",
        canon:"Barristan",

        positive: [
            "Very Durable + Guard", 
            "Decent Reach", 
            "Riposte & Stun", 
            "Great Buffs & Debuffs",
            "Superb Camping Skills",
        ],

        negative: [
            "No Self Sustain", 
            "Relatively Slow", 
            "Prefers Front Ranks",            
            "Medicore Base DMG",

        ],

        resists1:[
            "40%",
            "30%",
            "30%",
            "67%",
        ],

        resists2:[
            "40%",
            "40%",
            "30%",
            "10%",
        ],
        provision:"empty_inventory",

        miscdata:[
            "Front 2 Back 2",
            "-33% Stress (3 rds)",
            "Training Ring",
        ],
        pos4:"pospip_quarter_full",
        pos3:"pospip_half_full",
        pos2:"pospip_full",
        pos1:"pospip_full",

        target1:"negpip_full",
        target2:"negpip_full",
        target3:"negpip_half_full",
        target4:"negpip_barely_full",
        hasdistrict:true,
        district:`training_ring`,

        
    },

    //Musketeer
    {
        id: "musk", 
        heroheader: "The Musketeer",
        from:"Musketeer FLC",
        canon:"Margaret",

        positive: [
            "Good Backline Reach", 
            "Mark Synergy", 
            "HP & Stress Healing", 
            "High Accuracy Attacks",
            "Mark & Stun Clear",
        ],

        negative: [
            "Backline Dependant", 
            "Mark Reliant DMG", 
            "Rank 1 Targetting",
        ],

        resists1:[
            "40%",
            "30%",
            "30%",
            "67%",
        ],

        resists2:[
            "40%",
            "30%",
            "30%",
            "10%",
        ],
        provision:"Bandage",

        miscdata:[
            "Front 0 Back 2",
            "+33% DMG vs Marked (3 rds)",
            "Training Ring",
        ],
        pos4:"pospip_full",
        pos3:"pospip_full",
        pos2:"pospip_barely_full",
        pos1:"pospip_barely_full",

        target1:"negpip_barely_full",
        target2:"negpip_full",
        target3:"negpip_full",
        target4:"negpip_full",

        hasdistrict:true,
        district:`training_ring`,

    },

    //Occultist
    {
        id: "occ", 
        heroheader: "The Occultist",
        from:"Base Game Hero",
        canon:"Alhazred",

        positive: [
            "High Speed & Dodge",              
            "Potent Stun/Debuffs", 
            "Decent Reach + Mark",
            "Rank Flexible Healing",
            "Ambush Prevention",
        ],

        negative: [                
            "Inconsistent Healing", 
            "Low DMG Output",
            "Low Max HP",            
            "Prefers Front Ranks",
            "Easily Stunned & Moved", 

        ],

        resists1:[
            "20%",
            "20%",
            "40%",
            "67%",
        ],

        resists2:[
            "20%",
            "40%",
            "60%",
            "10%",
        ],
        provision:"empty_inventory",

        miscdata:[
            "Front 2 Back 2",
            "+25% Healing Skills (2 rds)",
            "Athenaeum",
        ],
        pos4:"pospip_half_full",
        pos3:"pospip_full",
        pos2:"pospip_full",
        pos1:"pospip_half_full",

        target1:"negpip_half_full",
        target2:"negpip_half_full",
        target3:"negpip_full",
        target4:"negpip_half_full",

        hasdistrict:true,
        district:`athenaeum`,

    },

    //Plague Doctor
    {
        id: "pd", 
        heroheader: "The Plague Doctor",
        from:"Base Game Hero",
        canon:"Paracelsus",

        positive: [
            "Omnireach + High Acc",
            "High Speed + Stuns",  
            "Bleed & Blight", 
            "DoT Cure",
            "Disease Cure",
        ],

        negative: [           
            "Easily Stunned & Moved", 
            "Low Base DMG",            
            "Low Dodge",            
            "Backline Dependant", 
            "Mediocre Max HP",
        ],

        resists1:[
            "20%",
            "60%",
            "50%",
            "67%",
        ],

        resists2:[
            "20%",
            "20%",
            "50%",
            "20%",
        ],
        provision:"Antivenom",

        miscdata:[
            "Front 1 Back 1",
            "+20% Blight Skill Chance (2 rds)",
            "Athenaeum",
        ],
        pos4:"pospip_full",
        pos3:"pospip_full",
        pos2:"pospip_half_full",
        pos1:"pospip_barely_full",

        target1:"negpip_quarter_full",
        target2:"negpip_half_full",
        target3:"negpip_half_full",
        target4:"negpip_half_full",

        hasdistrict:true,
        district:`athenaeum`,

    },

    //Shieldbreaker
    {
        id: "sb", 
        heroheader: "The Shieldbreaker",
        from:"Shieldbreaker DLC",
        canon:"Amani",

        positive: [
            "Rank Flexible/Omnireach", 
            "Armor Piercing",                    
            "Blight",                  
            "Block Generation", 
            "High Speed/Guardbreak", 
        ],

        negative: [           
            "Nightmare Flashbacks",
            "No Self Sustain",
            "Offense Oriented",            
            "Mediocre Max HP",

        ],

        resists1:[
            "50%",
            "20%",
            "30%",
            "67%",
        ],

        resists2:[
            "50%",
            "30%",
            "30%",
            "20%",
        ],
        provision:"empty_inventory",

        miscdata:[
            "Front 2 Back 2",
            "+15% PROT (2 rds)",
            "Training Ring",
        ],
        pos4:"pospip_barely_full",
        pos3:"pospip_full",
        pos2:"pospip_full",
        pos1:"pospip_full",

        target1:"negpip_full",
        target2:"negpip_full",
        target3:"negpip_full",
        target4:"negpip_half_full",

        haspassiveinfo:true,
        hasdistrict:true,
        district:`training_ring`,

        
    },

     //Vestal
    {
        id: "ves", 
        heroheader: "The Vestal",
        from:"Base Game Hero",
        canon:"Junia",

        positive: [
            "AoE Healing", 
            "Consistent Healing", 
            "Decent Reach + Stun", 
            "Ambush Prevention",
            "Torch Increasing Skills",
        ],

        negative: [
            "Backline Dependant", 
            "Lacks Offense", 
            "Minimal Synergy",
            "Low Dodge",
            "Limited Skill Selection",
        ],

        resists1:[
            "30%<span class = 'highres'> (10%+) </span>",
            "30%",
            "30%",
            "67%",
        ],

        resists2:[
            "30%",
            "40%",
            "30%",
            "10%",
        ],
        provision:"empty_inventory",

        miscdata:[
            "Front 1 Back 1",
            "+25% Healing Skills (2 rds)",
            "Altar of Light",
        ],
        pos4:"pospip_full",
        pos3:"pospip_full",
        pos2:"pospip_full",
        pos1:"pospip_quarter_full",

        target1:"negpip_full",
        target2:"negpip_full",
        target3:"negpip_full",
        target4:"negpip_half_full",

        hasdistrict:true,
        district:`altar_of_light`,

        
    },


]

function EffectColorCoding(description) {
    description = description.replace(/Stress/g, '<span class="stress">Stress</span>'); 

    description = description.replace(/Healing/g, '<span class="heal">Healing</span>');

    description = description.replace(/Marked/g, '<span class="mark">Marked</span>');
    description = description.replace(/Mark/g, '<span class="mark">Mark</span>');      
    
    description = description.replace(/Bleeding/g, '<span class="bleed">Bleeding</span>');
    description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>'); 

    description = description.replace(/Blight/g, '<span class="blight">Blight</span>');

    description = description.replace(/Stun/g, '<span class="stun">Stun</span>');

    description = description.replace(/Front/g, '<span class="move">Front</span>');    
    description = description.replace(/Back/g, '<span class="move">Back</span>');
  
    description = description.replace(/Debuff/g, '<span class="debuff">Debuff</span>');
    description = description.replace(/Buff/g, '<span class="buff">Buff</span>');

    description = description.replace(/Bandage/g, '<span class="bleed">Bandage</span>');
    description = description.replace(/Antivenom/g, '<span class="blight">Antivenom</span>');

    description = description.replace(/Shovel/g, '<span class="common">Shovel</span>');
    description = description.replace(/Skeleton Key/g, '<span class="common">Skeleton Key</span>');
    description = description.replace(/Holy Water/g, '<span class="stress">Holy Water</span>');
    description = description.replace(/Medicinal Herbs/g, '<span class="debuff">Medicinal Herbs</span>');
    description = description.replace(/Dog Treats/g, '<span class="debuff">Dog Treats</span>');
    
    return description;
}
function CreateHeroSharedInfo(hero) {

    const HeroOrigins = document.createElement("div");    
    HeroOrigins.textContent = hero.from
    if(hero.from === "Crimson Court DLC") 
    {HeroOrigins.classList = "quotebox crimson_court"}

    else if(hero.from === "Shieldbreaker DLC")
     {HeroOrigins.classList = "quotebox block"}    

    else {HeroOrigins.classList = "quotebox attack_type"}

    const HeroPositive = document.createElement("div");

    hero.positive.forEach((quirk) => {
        const HeroQuirk = document.createTextNode(quirk)
        const lineBreak = document.createElement("br");

        HeroPositive.appendChild(HeroQuirk);
        HeroPositive.appendChild(lineBreak);

    })


    const HeroNegative = document.createElement("div");
    hero.negative.forEach((quirk) => {
        const HeroQuirk = document.createTextNode(quirk)
        const lineBreak = document.createElement("br");

        HeroNegative.appendChild(HeroQuirk);
        HeroNegative.appendChild(lineBreak);

    })


    const HeroResists = document.createElement("div");
    HeroResists.classList = "resist_text"

    const ResistLine1 = document.createElement("ul");
    ResistLine1.classList = "resist1"

    const ResistLine2 = document.createElement("ul");
    ResistLine2.classList = "resist2"

    hero.resists1.forEach((resist) => {
        const HeroResist1 = document.createElement("li")
        HeroResist1.innerHTML = resist
        ResistLine1.appendChild(HeroResist1);
    })


    hero.resists2.forEach((resist) => {
        const HeroResist2 = document.createElement("li")
        HeroResist2.innerHTML = resist
        ResistLine2.appendChild(HeroResist2);
    })

    HeroResists.appendChild(ResistLine1)
    HeroResists.appendChild(ResistLine2)




    const HeroMiscBox = document.createElement("div");
    HeroMiscBox.classList = "numbers_container misc"
    const HeroMiscStats = document.createElement("div");
    HeroMiscStats.classList = "misc_numbers_box1 statline misc_statline"


    hero.miscdata.forEach((data) => {
        const HeroMiscData = document.createElement("div");
        HeroMiscData.innerHTML = EffectColorCoding(data);
        HeroMiscData.appendChild(document.createElement('br'));
    
        HeroMiscStats.innerHTML += HeroMiscData.innerHTML;
    })

    HeroMiscBox.appendChild(HeroMiscStats)
    const provisionclass = document.createElement("span");

    if (hero.provision === "Holy_Water") {
        provisionclass.textContent = "holy_water_provision"
    }
    else if (hero.provision === "Bandage") {
        provisionclass.textContent = "bandage_provision"
    }else if (hero.provision === "Skeleton_Key") {
        provisionclass.textContent = "skeleton_key_provision"
    }else if (hero.provision === "Shovel") {
        provisionclass.textContent = "shovel_provision"
    }else if (hero.provision === "2_Dog_Treats") {
        provisionclass.textContent = "dog_treats_provision"
    }else if (hero.provision === "Antivenom") {
        provisionclass.textContent = "antivenom_provision"
    }else if (hero.provision === "Medicinal_Herbs") {
        provisionclass.textContent = "medicinal_herbs_provision"
    }else{provisionclass.textContent = ""}


    const DistrictToggleClass = document.createElement("span");
    if (hero.haspassiveinfo && hero.hasdistrict) {
        DistrictToggleClass.textContent = "hero_district_toggle"} 
    else{DistrictToggleClass.textContent = "hero_passive_toggle"}






        return `
      
        <div class =  "hero_shared_info" id = "${hero.id}_shared">
            <div class = "header_bg" id = "${hero.id}_banner"></div>

            <img src = "images/Hero_boxes/rename_btn.png" class= "rename_button" id = "rename_${hero.id}">
            <img src = "images/Hero_boxes/dismiss.png" class= "dismiss_btn" id = "dismiss_hero">
            
            <div class = "canon_name"> ${hero.canon} </div>

            <div class = "hero_header" id = "edit_${hero.id}" contenteditable="false">${hero.heroheader}</div>    
            ${HeroOrigins.outerHTML}
    
            <div class="posquirk_text">        
                ${HeroPositive.innerHTML}
            </div>

            <div class="negquirk_text negflex">        
                ${HeroNegative.innerHTML}
            </div>

            ${HeroResists.outerHTML}

            ${HeroMiscBox.outerHTML}

            <div class = "pref_position_container">
                <img src = "images/Hero_boxes/${hero.pos4}.png" class = "pref_position_pip first_pip">
                <img src = "images/Hero_boxes/${hero.pos3}.png" class = "pref_position_pip middle_pip">
                <img src = "images/Hero_boxes/${hero.pos2}.png" class = "pref_position_pip middle_pip">
                <img src = "images/Hero_boxes/${hero.pos1}.png" class = "pref_position_pip last_pip">
            </div>

            <div class = "pref_target_container">
                <img src = "images/Hero_boxes/${hero.target1}.png" class = "pref_position_pip first_pip">
                <img src = "images/Hero_boxes/${hero.target2}.png" class = "pref_position_pip middle_pip">
                <img src = "images/Hero_boxes/${hero.target3}.png" class = "pref_position_pip middle_pip">
                <img src = "images/Hero_boxes/${hero.target4}.png" class = "pref_position_pip last_pip">
            </div>

             <div class = "combat_skill_container">
                <img src = "images/Skill_icons/${hero.id}combat1.png" class = "skill_icon" id = "${hero.id}combat1">
                <img src = "images/Skill_icons/${hero.id}combat2.png" class = "skill_icon" id = "${hero.id}combat2">
                <img src = "images/Skill_icons/${hero.id}combat3.png" class = "skill_icon" id = "${hero.id}combat3">
                <img src = "images/Skill_icons/${hero.id}combat4.png" class = "skill_icon" id = "${hero.id}combat4">
                <img src = "images/Skill_icons/${hero.id}combat5.png" class = "skill_icon" id = "${hero.id}combat5">
                <img src = "images/Skill_icons/${hero.id}combat6.png" class = "skill_icon" id = "${hero.id}combat6">
                <img src = "images/Skill_icons/${hero.id}combat7.png" class = "skill_icon" id = "${hero.id}combat7">  
                
            </div>

            <div class = "camping_skill_container">
            ${hero.id !== "flag" ? `
            <img src = "images/Camp_Icons/camp_shared1.png" class = "skill_icon sharedcamp1" id = "sharedcamp1">
            <img src = "images/Camp_Icons/camp_shared2.png" class = "skill_icon sharedcamp2" id = "sharedcamp2">
            <img src = "images/Camp_Icons/camp_shared3.png" class = "skill_icon sharedcamp3" id = "sharedcamp3">
        ` : ''}
                <img src = "images/Camp_Icons/${hero.id}camp1.png" class = "skill_icon" id = "${hero.id}camp1">
                <img src = "images/Camp_Icons/${hero.id}camp2.png" class = "skill_icon" id = "${hero.id}camp2">
                <img src = "images/Camp_Icons/${hero.id}camp3.png" class = "skill_icon" id = "${hero.id}camp3">
                <img src = "images/Camp_Icons/${hero.id}camp4.png" class = "skill_icon" id = "${hero.id}camp4">
            </div>


           
            <img src = "images/curios/${hero.provision}.png" class = "hero_gear hero_provision ${provisionclass.textContent}">

            <div class="hero_lvl_navigate" id="${hero.id}_gear_nav">
                <img src="images/Glossary/tier1.png" class="hero_lvl_btn" id="${hero.id}_gear_lvl1">
                <img src="images/Glossary/tier2.png" class="hero_lvl_btn" id="${hero.id}_gear_lvl2">
                <img src="images/Glossary/tier3.png" class="hero_lvl_btn" id="${hero.id}_gear_lvl3">
                <img src="images/Glossary/tier4.png" class="hero_lvl_btn" id="${hero.id}_gear_lvl4">
                <img src="images/Glossary/tier5.png" class="hero_lvl_btn" id="${hero.id}_gear_lvl5">
            </div>

            <div class="hero_info_navigate" id="${hero.id}_info_nav">
                <img src="images/Boss_monsters/boss_strategy_btn.png" class="hero_more_info_btn" id="${hero.id}_passive_info">
                <img src="images/Boss_monsters/boss_lore_btn.png" class="hero_more_info_btn" id="${hero.id}_trinket_info">
            </div>



            ${hero.haspassiveinfo ? 
            `<div class = "hero_passive_toggle ddlogo_text">
                <div class = "passive_toggle_header ddlogo_text">Hero Passive</div><br>
                <img src = "images/Hero_boxes/show_btn.png" class = "passive_toggle_btn1" id = "${hero.id}_passive_info_open">
                <img src = "images/Hero_boxes/hide_btn.png" class = "passive_toggle_btn2" id = "${hero.id}_passive_info_close">
            </div>
            ` : ''}

            <div class = "hero_passive_toggle hero_trinket_toggle ddlogo_text">
                <div class = "passive_toggle_header ddlogo_text">Hero Trinkets</div><br>
                <img src = "images/Hero_boxes/show_btn.png" class = "passive_toggle_btn1" id = "${hero.id}_trinket_info_open">
                <img src = "images/Hero_boxes/hide_btn.png" class = "passive_toggle_btn2" id = "${hero.id}_trinket_info_close">
            </div>


            ${hero.hasdistrict ? 
                `<div class = "${DistrictToggleClass.innerHTML} ddlogo_text">
                    <div class = "passive_toggle_header ddlogo_text">District Info</div><br>
                    <img src = "images/Hero_boxes/show_btn.png" class = "passive_toggle_btn1 ${hero.district}_onbtn" id = "${hero.id}_district_info_open">
                    <img src = "images/Hero_boxes/hide_btn.png" class = "passive_toggle_btn2 ${hero.district}_offbtn" id = "${hero.id}_district_info_close">
                </div>
                ` : ''}

            


            <img src = "images/Hero_boxes/skinswap.png" class = "swapskin_btn" id = "${hero.id}_skinswap">
            
            <img src = "images/Hero_boxes/${hero.id}sprite1.webp" class= "sprite_${hero.id} hero_sprite" id = "${hero.id}sprite1">
            <img src = "images/Hero_boxes/${hero.id}sprite2.webp" class= "sprite_${hero.id} hero_sprite" id = "${hero.id}sprite2">
            <img src = "images/Hero_boxes/${hero.id}sprite3.webp" class= "sprite_${hero.id} hero_sprite" id = "${hero.id}sprite3">
            <img src = "images/Hero_boxes/${hero.id}sprite4.webp" class= "sprite_${hero.id} hero_sprite" id = "${hero.id}sprite4">

        

        </div>
        
       
    `;
    }


    HeroSharedInfoData.forEach((herodata) => {
        const HeroSharedDataHTML = CreateHeroSharedInfo(herodata);
        document.getElementById("infotxt2").insertAdjacentHTML("beforebegin", HeroSharedDataHTML);
    });


    //<div class = "hero_trinket_panel ubuntu_desc" id = "${hero.id}_trinkets1"></div>
    //<div class = "hero_trinket_panel ubuntu_desc" id = "${hero.id}_trinkets2"></div>






    // Usage
    const HeroLevelData = [
        //Abomination
        {
            id: "abom", 
    
            prot:"0%", acc:"+0", religious:"NO",
    
            dmg1:"6-11", dmg2:"7-13", dmg3:"8-15", dmg4:"10-18", dmg5:"11-20",
            crit1:"2.0%", crit2:"3.0%", crit3:"4.0%", crit4:"5.0%", crit5:"6.0%",
            spd1:"7", spd2:"7", spd3:"8", spd4:"8", spd5:"9",
    
            hp1:"26", hp2:"31", hp3:"36", hp4:"41", hp5:"46",
            dodge1:"7.5", dodge2:"12.5", dodge3:"17.5", dodge4:"22.5", dodge5:"27.5",
    
            armor1:"Rusty Chains",
            armor2:"Iron Chains",
            armor3:"Steel Chains",
            armor4:"Hellforged Chains",
            armor5:"Inhuman Bondage",
    
            weapon1:"Incubating Mutation",
            weapon2:"Progressive Mutation",
            weapon3:"Aggressive Mutation",
            weapon4:"Malignant Mutation	",
            weapon5:"Damnation's Gift",
    
    
    
            
        },       
       //Antiquarian
       {
        id: "anti", 

        prot:"0%", acc:"+0", religious:"NO",

        dmg1:"3-5", dmg2:"4-6", dmg3:"4-7", dmg4:"5-8", dmg5:"5-9",
        crit1:"1.0%", crit2:"2.0%", crit3:"3.0%", crit4:"4.0%", crit5:"5.0%",
        spd1:"5", spd2:"5", spd3:"6", spd4:"6", spd5:"7",

        hp1:"17", hp2:"20", hp3:"23", hp4:"26", hp5:"29",
        dodge1:"10", dodge2:"15", dodge3:"20", dodge4:"25", dodge5:"30",

        armor1:"Rucksack & Baubles",
        armor2:"Pouches & Curiosities",
        armor3:"Sturdy Satchel and Oddities",
        armor4:"Expedition Pack & Relics",
        armor5:"Timurik's Bottomless Bag",

        weapon1:"Makeshift Censer",
        weapon2:"Pungent Censer",
        weapon3:"Ordained Censer",
        weapon4:"Ceremonial Censer",
        weapon5:"The Sarcophagus",



        
    },     
       //Arbalest
       {
        id: "arb", 

        prot:"0%", acc:"+0 <span class = 'highres'>(+4)</span>", religious:"NO",

        dmg1:"4-7", dmg2:"5-8", dmg3:"6-10", dmg4:"6-11", dmg5:"7-13",
        crit1:"6.0%", crit2:"7.0%", crit3:"8.0%", crit4:"9.0%", crit5:"10.0%",
        spd1:"3", spd2:"3", spd3:"4", spd4:"4", spd5:"5",

        hp1:"27 <span class = 'highres'>(+3)</span>", 
        hp2:"32 <span class = 'highres'>(+4)</span>", 
        hp3:"37 <span class = 'highres'>(+4)</span>", 
        hp4:"42 <span class = 'highres'>(+5)</span>", 
        hp5:"47 <span class = 'highres'>(+5)</span>",

        dodge1:"0", dodge2:"5", dodge3:"10", dodge4:"15", dodge5:"20",

        armor1:"Second-Hand Plate",
        armor2:"Pawned Plate",
        armor3:"Reliable Plate",
        armor4:"Refined Plate",
        armor5:"Survivor",

        weapon1:"Crude Crossbow",
        weapon2:"Reinforced Crossbow",
        weapon3:"Heavy Crossbow",
        weapon4:"Veteran's Crossbow",
        weapon5:"Millicent",



        
    },         
       //Bounty Hunter
       {
        id: "bh", 

        prot:"0%", acc:"+0", religious:"NO",
        dmg1:"5-10", dmg2:"6-12", dmg3:"7-13", dmg4:"7-15", dmg5:"8-16",

        crit1:"4.0% <span class = 'highres'>(+4.0%)</span>",
        crit2:"5.0% <span class = 'highres'>(+4.0%)</span>", 
        crit3:"6.0% <span class = 'highres'>(+4.0%)</span>", 
        crit4:"7.0% <span class = 'highres'>(+4.0%)</span>", 
        crit5:"8.0% <span class = 'highres'>(+4.0%)</span>",

        spd1:"5", spd2:"5", spd3:"6", spd4:"6", spd5:"7",

        hp1:"25", hp2:"30", hp3:"35", hp4:"40", hp5:"45",
        dodge1:"5", dodge2:"10", dodge3:"15", dodge4:"20", dodge5:"25",

        armor1:"Rigid Leathers",
        armor2:"Buckled Leathers",
        armor3:"Reinforced Leathers",
        armor4:"Scale and Leathers",
        armor5:"Death's Head",

        weapon1:"Abandoned Axe",
        weapon2:"Refurbished Axe",
        weapon3:"Fine Axe",
        weapon4:"Professional's Axe",
        weapon5:"The Widowmaker",



        
    },       
       //Crusader
       {
        id: "crus", 

        prot:"0%", acc:"+0", religious:"YES",

        dmg1:"6-12", dmg2:"7-14", dmg3:"8-16", dmg4:"9-17", dmg5:"10-19",
        crit1:"3.0%", crit2:"4.0%", crit3:"5.0%", crit4:"6.0%", crit5:"7.0%",
        spd1:"1", spd2:"1", spd3:"2", spd4:"2", spd5:"3",

        hp1:"33", hp2:"40", hp3:"47", hp4:"54", hp5:"61",
        dodge1:"5", dodge2:"10", dodge3:"15", dodge4:"20", dodge5:"25",

        armor1:"Rusty Hauberk",
        armor2:"Chainmail",
        armor3:"Chain and Plate",
        armor4:"Plate",
        armor5:"Zealous Conviction",

        weapon1:"Battered Longsword",
        weapon2:"Longsword",
        weapon3:"Questing Longsword",
        weapon4:"Greatsword",
        weapon5:"The Long Crusade",



        
    },
        //Flagellant
        {
           id: "flag", 

           prot:"0%", acc:"+0", religious:"YES",

           dmg1:"3-6", dmg2:"4-7", dmg3:"4-8", dmg4:"5-10", dmg5:"5-11",
           crit1:"2.0%", crit2:"3.0%", crit3:"4.0%", crit4:"5.0%", crit5:"6.0%",
           spd1:"6", spd2:"6", spd3:"8", spd4:"8", spd5:"9",

           hp1:"22", hp2:"26", hp3:"30", hp4:"34", hp5:"38",
           dodge1:"0", dodge2:"5", dodge3:"10", dodge4:"15", dodge5:"20",

           armor1:"Sinner's Flesh",
           armor2:"Lacerated Flesh",
           armor3:"Scarred Flesh",
           armor4:"Martyr's Flesh",
           armor5:"The Testament",

           weapon1:"Hand-Fashioned Flail",
           weapon2:"Initiate's Flail",
           weapon3:"Suffering Flail",
           weapon4:"Bloodthirsty Flail",
           weapon5:"The Burden",



           
       },
   
       //Grave Robber
       {
        id: "gr", 

        prot:"0%", acc:"+0", religious:"NO",
        dmg1:"4-8", dmg2:"5-10", dmg3:"6-11", dmg4:"6-13", dmg5:"7-14",

        crit1:"6.0% <span class = 'highres'>(+4.0%)</span>",
        crit2:"7.0% <span class = 'highres'>(+4.0%)</span>", 
        crit3:"8.0% <span class = 'highres'>(+4.0%)</span>", 
        crit4:"9.0% <span class = 'highres'>(+4.0%)</span>", 
        crit5:"10.0% <span class = 'highres'>(+4.0%)</span>",

        spd1:"8", spd2:"8", spd3:"9", spd4:"9", spd5:"10",

        hp1:"20", hp2:"24", hp3:"28", hp4:"32", hp5:"36",
        dodge1:"10", dodge2:"15", dodge3:"20", dodge4:"25", dodge5:"30",

        armor1:"Pilfered Jacket",
        armor2:"Patched Jacket",
        armor3:"Fine Jacket",
        armor4:"Formal Jacket",
        armor5:"Shadowlace",

        weapon1:"Stolen Pick and Knives",
        weapon2:"Reliable Pick and Knives",
        weapon3:"Balanced Pick and Knives",
        weapon4:"Exceptional Pick and Knives",
        weapon5:"The Razor's Edge",



        
    },      
       //Hellion
       {
        id: "hell", 

        prot:"0%", acc:"+0", religious:"NO",

        dmg1:"6-12", dmg2:"7-14", dmg3:"8-16", dmg4:"9-17", dmg5:"10-19",
        crit1:"5.0%", crit2:"6.0%", crit3:"7.0%", crit4:"8.0%", crit5:"9.0%",
        spd1:"4", spd2:"4", spd3:"5", spd4:"5", spd5:"6",

        hp1:"26", hp2:"31", hp3:"36", hp4:"41", hp5:"46",
        dodge1:"10", dodge2:"15", dodge3:"20", dodge4:"25", dodge5:"30",

        armor1:"Worn Leather, Tattered Furs",
        armor2:"Restitched Leather and Furs",
        armor3:"Fresh Leather and Furs",
        armor4:"Master-Sewn Leather and Furs",
        armor5:"Wolf's Pelt",

        weapon1:"Primitive Glaive",
        weapon2:"Reinforced Glaive",
        weapon3:"Resilient Glaive",
        weapon4:"Battle-Tested Glaive",
        weapon5:"The Wolf's Tooth",



        
    },      
       //Highwayman
       {
        id: "hwm", 

        prot:"0%", acc:"+0", religious:"NO",
        dmg1:"5-10", dmg2:"6-12", dmg3:"7-13", dmg4:"8-15", dmg5:"9-16",

        crit1:"5.0% <span class = 'highres'>(+4.0%)</span>",
        crit2:"6.0% <span class = 'highres'>(+4.0%)</span>", 
        crit3:"7.0% <span class = 'highres'>(+4.0%)</span>", 
        crit4:"8.0% <span class = 'highres'>(+4.0%)</span>", 
        crit5:"9.0% <span class = 'highres'>(+4.0%)</span>",

        spd1:"5", spd2:"5", spd3:"6", spd4:"6", spd5:"7",

        hp1:"23", hp2:"28", hp3:"33", hp4:"38", hp5:"43",
        dodge1:"10", dodge2:"15", dodge3:"20", dodge4:"25", dodge5:"30",

        armor1:"Worn Overcoat",
        armor2:"Durable Overcoat",
        armor3:"Padded Overcoat",
        armor4:"Bandit's Overcoat",
        armor5:"The Uncatchable",

        weapon1:"Flintlock, Rusty Blade",
        weapon2:"Versatile Pistol and Blade",
        weapon3:"Polished Pistol and Blade",
        weapon4:"Fluted Pistol, Sharpened Edge",
        weapon5:"Thunder and Lightning",



        
    },       
       //Houndmaster
       {
        id: "hm", 

        prot:"0%", acc:"+0 <span class = 'highres'>(+4)</span>", religious:"NO",

        dmg1:"4-7", dmg2:"5-8", dmg3:"6-10", dmg4:"6-11", dmg5:"7-13",
        crit1:"4.0%", crit2:"5.0%", crit3:"6.0%", crit4:"7.0%", crit5:"8.0%",
        spd1:"5", spd2:"5", spd3:"6", spd4:"6", spd5:"7",

        hp1:"21 <span class = 'highres'>(+3)</span>", 
        hp2:"25 <span class = 'highres'>(+3)</span>", 
        hp3:"29 <span class = 'highres'>(+3)</span>", 
        hp4:"33 <span class = 'highres'>(+4)</span>", 
        hp5:"37 <span class = 'highres'>(+4)</span>",

        dodge1:"10", dodge2:"15", dodge3:"20", dodge4:"25", dodge5:"30",

        armor1:"Ragged Leather Vest",
        armor2:"Stitched Leather Vest",
        armor3:"Resilient Leather Vest",
        armor4:"Splinted Leather Vest",
        armor5:"Gendarme's Pride",

        weapon1:"Crude Cudgel, Frayed Collar",
        weapon2:"Sturdy Cudgel, Rope Collar",
        weapon3:"Fine Cudgel, Leather Collar",
        weapon4:"Studded Cudgel & Collar",
        weapon5:"Lawbringer",



        
    },       
       //Jester
       {
        id: "jes", 

        prot:"0%", acc:"+0", religious:"NO",

        dmg1:"4-7", dmg2:"5-8", dmg3:"6-10", dmg4:"6-11", dmg5:"7-13",
        crit1:"4.0%", crit2:"5.0%", crit3:"6.0%", crit4:"7.0%", crit5:"8.0%",
        spd1:"7 <span class = 'highres'>(+2)</span>", 
        spd2:"7 <span class = 'highres'>(+2)</span>", 
        spd3:"8 <span class = 'highres'>(+2)</span>", 
        spd4:"8 <span class = 'highres'>(+2)</span>", 
        spd5:"9 <span class = 'highres'>(+2)</span>",

        hp1:"19", hp2:"23", hp3:"27", hp4:"31", hp5:"35",
        dodge1:"15", dodge2:"20", dodge3:"25", dodge4:"30", dodge5:"35",

        armor1:"Motley Garb",
        armor2:"Mocking Garb",
        armor3:"Padded Garb",
        armor4:"Armored Garb",
        armor5:"The Cruelest Crown",

        weapon1:"Worn Sickle, Untuned Lute",
        weapon2:"Reclaimed Sickle and Lute",
        weapon3:"Sharpened Sickle, Restrung Lute",
        weapon4:"Masterwork Sickle, Fine Lute",
        weapon5:"Slash and Solo",



        
    },      
       //Leper
       {
        id: "lep", 

        prot:"0%", acc:"+0", religious:"YES",

        dmg1:"8-16", dmg2:"9-18", dmg3:"10-21", dmg4:"12-23", dmg5:"13-26",
        crit1:"1.0%", crit2:"2.0%", crit3:"3.0%", crit4:"4.0%", crit5:"5.0%",
        spd1:"2", spd2:"2", spd3:"3", spd4:"3", spd5:"4",

        hp1:"35", hp2:"42", hp3:"49", hp4:"56", hp5:"63",
        dodge1:"0", dodge2:"5", dodge3:"10", dodge4:"15", dodge5:"20",

        armor1:"Battered Chestplate",
        armor2:"Reforged Chestplate",
        armor3:"Reinforced Chestplate",
        armor4:"Bronzed Chestplate",
        armor5:"Indomitable",

        weapon1:"Rusted Executioner's Sword",
        weapon2:"Heavy Executioner's Sword",
        weapon3:"Sharpened Executioner's Blade",
        weapon4:"Masterful Executioner's Sword",
        weapon5:"The Broken Blade",



        
    },
   
       //MAA
       {
        id: "maa", 

        prot:"0%", acc:"+0 <span class = 'highres'>(+4)</span>", religious:"NO",

        dmg1:"5-9", dmg2:"6-10", dmg3:"7-12", dmg4:"7-13", dmg5:"8-14",
        crit1:"2.0%", crit2:"3.0%", crit3:"4.0%", crit4:"5.0%", crit5:"6.0%",
        spd1:"3", spd2:"3", spd3:"4", spd4:"4", spd5:"5",

        hp1:"31 <span class = 'highres'>(+4)</span>", 
        hp2:"37 <span class = 'highres'>(+4)</span>", 
        hp3:"43 <span class = 'highres'>(+5)</span>", 
        hp4:"49 <span class = 'highres'>(+5)</span>", 
        hp5:"55 <span class = 'highres'>(+6)</span>",

        dodge1:"5", dodge2:"10", dodge3:"15", dodge4:"20", dodge5:"25",

        armor1:"Shoddy Splint",
        armor2:"Military-Issue Armor",
        armor3:"Sergeant Major's Plate",
        armor4:"Master Sergeant's Plate",
        armor5:"The Bulwark",

        weapon1:"Footman's Mace",
        weapon2:"Private's Mace",
        weapon3:"Seargent Major's Mace",
        weapon4:"Master Seargent's Mace",
        weapon5:"Bludgeon",



        
    },            
       //Musketeer
       {
        id: "musk", 

        prot:"0%", acc:"+0 <span class = 'highres'>(+4)</span>", religious:"NO",

        dmg1:"4-7", dmg2:"5-8", dmg3:"6-10", dmg4:"6-11", dmg5:"7-13",
        crit1:"6.0%", crit2:"7.0%", crit3:"8.0%", crit4:"9.0%", crit5:"10.0%",
        spd1:"3", spd2:"3", spd3:"4", spd4:"4", spd5:"5",

        hp1:"27 <span class = 'highres'>(+3)</span>", 
        hp2:"32 <span class = 'highres'>(+4)</span>", 
        hp3:"37 <span class = 'highres'>(+4)</span>", 
        hp4:"42 <span class = 'highres'>(+5)</span>", 
        hp5:"47 <span class = 'highres'>(+5)</span>",

        dodge1:"0", dodge2:"5", dodge3:"10", dodge4:"15", dodge5:"20",

        armor1:"Participant's Vest & Cloak",
        armor2:"Competitor's Vest & Cloak",
        armor3:"Finalist's Vest & Cloak",
        armor4:"Medalist's Vest & Cloak",
        armor5:"The Champion's Regalia",

        weapon1:"Shoddy Musket",
        weapon2:"Reliable Musket",
        weapon3:"Balanced Musket",
        weapon4:"Marksman's Musket",
        weapon5:"Trueshot",



        
    },            
       //Occultist
       {
        id: "occ", 

        prot:"0%", acc:"+0", religious:"NO",

        dmg1:"4-7", dmg2:"5-8", dmg3:"6-10", dmg4:"6-11", dmg5:"7-13",
        crit1:"6.0%", crit2:"7.0%", crit3:"8.0%", crit4:"9.0%", crit5:"10.0%",
        spd1:"6", spd2:"6", spd3:"7", spd4:"7", spd5:"8",

        hp1:"19", hp2:"23", hp3:"27", hp4:"31", hp5:"35",
        dodge1:"10", dodge2:"15", dodge3:"20", dodge4:"25", dodge5:"30",

        armor1:"Tattered Robes",
        armor2:"Scholar's Robes	",
        armor3:"Academic's Robes",
        armor4:"Antiquarian Robes",
        armor5:"Dark Inquisition",

        weapon1:"Battered Skull",
        weapon2:"Bleached Skull",
        weapon3:"Fine Skull",
        weapon4:"Scholar's Skull",
        weapon5:"The Mentor's Skull",



        
    },   
       //Plague Doctor
       {
        id: "pd", 

        prot:"0%", acc:"+0", religious:"NO",

        dmg1:"4-7", dmg2:"5-8", dmg3:"6-10", dmg4:"6-11", dmg5:"7-13",
        crit1:"2.0%", crit2:"3.0%", crit3:"4.0%", crit4:"5.0%", crit5:"6.0%",
        spd1:"7", spd2:"7", spd3:"8", spd4:"8", spd5:"9",

        hp1:"22", hp2:"26", hp3:"30", hp4:"34", hp5:"38",
        dodge1:"0", dodge2:"5", dodge3:"10", dodge4:"15", dodge5:"20",

        armor1:"Attendant's Robes",
        armor2:"Intern's Robes",
        armor3:"Doctor's Robes",
        armor4:"Surgeon's Robes",
        armor5:"The Malignant Mantle",

        weapon1:"Crude Sachets",
        weapon2:"Crafted Sachets",
        weapon3:"Diseased Sachets",
        weapon4:"Toxic Grenades	",
        weapon5:"The Bubonic Herald",



        
    },
   
       //Shieldbreaker
       {
        id: "sb", 

        prot:"0%", acc:"+0 <span class = 'highres'>(+4)</span>", religious:"NO",

        dmg1:"5-10", dmg2:"6-12", dmg3:"7-14", dmg4:"8-16", dmg5:"9-18",
        crit1:"6.0%", crit2:"7.0%", crit3:"8.0%", crit4:"9.0%", crit5:"10.0%",
        spd1:"5", spd2:"6", spd3:"8", spd4:"8", spd5:"9",

        hp1:"20 <span class = 'highres'>(+2)</span>", 
        hp2:"24 <span class = 'highres'>(+3)</span>", 
        hp3:"28 <span class = 'highres'>(+3)</span>", 
        hp4:"32 <span class = 'highres'>(+4)</span>", 
        hp5:"36 <span class = 'highres'>(+4)</span>",

        dodge1:"8", dodge2:"13", dodge3:"18", dodge4:"23", dodge5:"28",

        armor1:"Tattered Rags",
        armor2:"Stitched Bedlah",
        armor3:"Fine Bedlah",
        armor4:"Armored Bedlah",
        armor5:"Sirocco",

        weapon1:"Crude Spear",
        weapon2:"Sharpened Spear",
        weapon3:"Sturdy Assegai",
        weapon4:"Deadly Assegai	",
        weapon5:"The Adder's Fang",



        
    },            
        //Vestal
        {
            id: "ves", 
    
            prot:"0%", acc:"+0", religious:"YES",
    
            dmg1:"4-8", dmg2:"5-10", dmg3:"6-11", dmg4:"6-13", dmg5:"7-14",
            crit1:"1.0%", crit2:"2.0%", crit3:"3.0%", crit4:"4.0%", crit5:"5.0%",
            spd1:"4", spd2:"4", spd3:"5", spd4:"5", spd5:"6",
    
            hp1:"24", hp2:"29", hp3:"34", hp4:"39", hp5:"44",
            dodge1:"0", dodge2:"5", dodge3:"10", dodge4:"15", dodge5:"20",
    
            armor1:"Worn Cloth and Plate",
            armor2:"Light Cloth and Plate",
            armor3:"Fine Cloth, Hammered Plate",
            armor4:"Silk Robes, Hardened Plate",
            armor5:"The Blessed Bulwark",
    
            weapon1:"Rusted Mace",
            weapon2:"Steady Mace",
            weapon3:"Stalwart Mace",
            weapon4:"Gilded Mace",
            weapon5:"The Hand of Light",
    
    
    
            
        },
   
   ];

    function CreateHeroLevelData(hero, level) {
        return `
            <div class="nondisplay" id="${hero.id}_info_lvl${level}">
                <div class="stat_box">
                    <div class="numbers_container numbers_box1 statline">
                        ${hero[`hp${level}`]} <br> ${hero[`dodge${level}`]} <br> ${hero.prot} <br> ${hero[`spd${level}`]}<br>
                    </div>
                    <div class="numbers_container numbers_box2 statline">
                        ${hero.acc} <br> ${hero[`crit${level}`]}  <br> ${hero[`dmg${level}`]} <br> ${hero.religious}<br>
                    </div>
                </div>
                <div class="equip_box">
                    <div class="equip_desc_align weapon_desc" id="${hero.id}_weapon_desc${level}">
                        <div class="equip_desc ${getRarityClass(level)}">  ${hero[`weapon${level}`]} </div>
                    </div>
                    <div class="equip_desc_align armor_desc" id="${hero.id}_armor_desc${level}">
                        <div class="equip_desc ${getRarityClass(level)}"> ${hero[`armor${level}`]} </div>
                    </div>
                </div>
                <div class="equip_box">
                    <img src="images/Hero_equip/${hero.id}_weapon${level}.png" class="hero_gear" id="${hero.id}_weapon${level}">
                    <img src="images/Hero_equip/${hero.id}_armor${level}.png" class="hero_gear" id="${hero.id}_armor${level}">
                </div>
            </div>
        `;
    }
    
    function getRarityClass(level) {
        if (level === 1 )
        return 'attack_type';
        else if (level === 2 )
        return 'default_color';
        else if (level === 3 )
        return 'uncommon';
        else if (level === 4 )
        return 'rare';
        else if (level === 5 )
        return 'ancestral';
    }
    

   
for (let i = 0; i < HeroLevelData.length; i++) {
    const currentHero = HeroLevelData[i];

    for (let level = 1; level <= 5; level++) {
        const HeroLvlDataHTML = CreateHeroLevelData(currentHero, level);
        document.getElementById("infotxt2").insertAdjacentHTML("beforebegin", HeroLvlDataHTML);
    }
}
    
const HeroCampSkills = [
    //shared

    {
        hero: 'shared',
        skillnum:'1',
        positionnum:'1',
        name: 'ENCOURAGE',        
        camptime:'2',
        description:"One Companion <br> -15 Stress",
    },

    {
        hero: 'shared',
        skillnum:'2',
        positionnum:'2',
        name: 'WOUND CARE',        
        camptime:'2',
        description:"One Companion <br> Heal 15% HP <br> Remove Bleeding <br> Remove Blight",

    },

    {
        hero: 'shared',
        skillnum:'3',
        positionnum:'3',
        name: 'PEP TALK',        
        camptime:'2',
        description:"One Companion <br> -15% Stress (4 Battles)",

    },

       //Abomination

       {
        hero: 'abom',
        skillnum:'1',
        positionnum:'4',
        name: 'ANGER MANAGEMENT',        
        camptime:'3',
        description:"Self Only <br> +20 Stress <br> All Companions <br> -10 Stress",

    },

    {
        hero: 'abom',
        skillnum:'2',
        positionnum:'5',
        name: 'PSYCH UP',        
        camptime:'3',
        description:"Self Only <br> +25% DMG (4 Battles) <br> All Companions <br> If Not Religious: +10 Stress <br> If Religious: +20 Stress",

    },

    {
        hero: 'abom',
        skillnum:'3',
        positionnum:'6',
        name: 'THE QUICKENING',        
        camptime:'3',
        description:"Self Only <br> +4 SPD (4 Battles)",

    },

    {
        hero: 'abom',
        skillnum:'4',
        positionnum:'7',
        name: 'ELDRITCH BLOOD',        
        camptime:'3',
        description:"Self Only <br> +40% Blight Resist (4 Battles) <br> +40% Bleed Resist (4 Battles) <br> +40% Disease Resist (4 Battles) <br> +20% Stress (4 Battles) ",

    },

       //Antiquarian

       {
        hero: 'anti',
        skillnum:'1',
        positionnum:'4',
        name: 'RESUPPLY',        
        camptime:'1',
        description:"Self Only <br> Produces a Random Supply Item <br> <span class = 'negative'> Total Uses: 3</span> ",

    },

    {
        hero: 'anti',
        skillnum:'2',
        positionnum:'5',
        name: 'TRINKET SCROUNGE',        
        camptime:'2',
        description:`
        Self Only <br> Produces a Random Trinket <br>
        Very Common Trinket (40% Chance)<br>  
        Common Trinket (28% Chance)<br>  
        Uncommon Trinket (20% Chance)<br>  
        Rare! Trinket (8% Chance)<br>  
        Very Rare Trinket (4% Chance)<br>
        Region Restrictions Still Apply  
                    `,

    },

    {
        hero: 'anti',
        skillnum:'3',
        positionnum:'6',
        name: 'STRANGE POWDERS',        
        camptime:'2',
        description:`
        One Companion <br> 
        +20% Bleed Resist (4 Battles)<br> 
        +20% Blight Resist (4 Battles)<br> 
        +20% Move Resist (4 Battles)<br> 
        +20% Debuff Resist (4 Battles)<br> 
        +20% Disease Resist (4 Battles)<br> 
        `,

    },

    {
        hero: 'anti',
        skillnum:'4',
        positionnum:'7',
        name: 'CURIOUS INCANTATION',        
        camptime:'1',
        description:`
        Self Only <br> 
        -50% Stress (4 Battles)
        `,
       

    },

       //Arbalest

       {
        hero: 'arb',
        skillnum:'1',
        positionnum:'4',
        name: 'FIELD DRESSING',        
        camptime:'2',
        description:`
        One Companion <br>
        (75% Chance) Heal 35% HP <br>
        (25% Chance) Heal 50% HP <br>
        Remove Bleeding
        `,

    },

    {
        hero: 'arb',
        skillnum:'2',
        positionnum:'5',
        name: 'MARCHING PLAN',        
        camptime:'3',
        description:`
        All Companions <br>
        +2 SPD (4 Battles)
        `,

    },

    {
        hero: 'arb',
        skillnum:'3',
        positionnum:'6',
        name: 'RESTRING CROSSBOW',        
        camptime:'3',
        description:`
        Self Only <br> 
        +10 ACC Ranged Skills (4 Battles)<br> 
        +20% DMG Ranged Skills (4 Battles)<br>
        +8% CRIT Ranged Skills (4 Battles)<br>
        -2 SPD (4 Battles)<br>
        `,

    },

    {
        hero: 'arb',
        skillnum:'4',
        positionnum:'7',
        name: 'TRIAGE',        
        camptime:'3',
        description:`
        All Companions <br>
        Heal 20% HP
        `,

    },

       //Bounty Hunter

       
       {
        hero: 'bh',
        skillnum:'1',
        positionnum:'4',
        name: 'THIS IS HOW WE DO IT',        
        camptime:'2',
        description:`
        Self Only <br>
        +10 ACC (4 Battles)<br>
        +8% CRIT (4 Battles)

        `,

    },

    {
        hero: 'bh',
        skillnum:'2',
        positionnum:'5',
        name: 'TRACKING',        
        camptime:'2',
        description:`
        Self Only <br>
        -15% Chance Party Surprised (4 Battles)<br>
        +10% Chance Monsters Surprised (4 Battles)
        `,

    },

    {
        hero: 'bh',
        skillnum:'3',
        positionnum:'6',
        name: 'PLANNED TAKEDOWN',        
        camptime:'4',
        description:`
        Self Only <br> 
        +25% DMG vs Size 2 or Higher (4 Battles)<br>       
        +15 ACC vs Size 2 or Higher (4 Battles)
        `,

    },

    {
        hero: 'bh',
        skillnum:'4',
        positionnum:'7',
        name: 'SCOUT AHEAD',        
        camptime:'3',
        description:`
        Self Only <br> 
        +25% Scouting Chance (4 Battles)<br> 
        `,

    },
    //Crusader

    {
        hero: 'crus',
        skillnum:'1',
        positionnum:'4',
        name: 'UNSHAKEABLE LEADER',        
        camptime:'2',
        description:"Self Only <br> -25% Stress (4 Battles)",

    },

    {
        hero: 'crus',
        skillnum:'2',
        positionnum:'5',
        name: 'STAND TALL',        
        camptime:'3',
        description:"One Companion <br> -15 Stress <br> Remove Mortality Debuffs",

    },

    {
        hero: 'crus',
        skillnum:'3',
        positionnum:'6',
        name: 'ZEALOUS SPEECH',        
        camptime:'5',
        description:"Party <br> -15 Stress <br> All Companions <br> -15% Stress (4 Battles)",

    },

    {
        hero: 'crus',
        skillnum:'4',
        positionnum:'7',
        name: 'ZEALOUS VIGIL',        
        camptime:'4',
        description:"Self Only <br> -25 Stress <br> If Afflicted: Additional -15 Stress <br> Prevents Nighttime Ambush",

    },

     //Grave Robber

       
     {
        hero: 'gr',
        skillnum:'1',
        positionnum:'4',
        name: 'SNUFF BOX',        
        camptime:'3',
        description:`
        Self Only <br>
        Remove All Diseases<br>
        One Companion <br>
        Remove All Diseases<br>
        `,

    },

    {
        hero: 'gr',
        skillnum:'2',
        positionnum:'5',
        name: 'GALLOWS HUMOR',        
        camptime:'4',
        description:`
        Self Only <br>
        -25 Stress<br>
        All Companions<br>
        (75% Chance) -20 Stress<br>
        (25% Chance) +10 Stress<br>
        `,

    },

    {
        hero: 'gr',
        skillnum:'3',
        positionnum:'6',
        name: 'NIGHT MOVES',        
        camptime:'2',
        description:`
        Self Only <br> 
        +20% Scouting Chance (4 Battles)<br> 
        `,

    },

    {
        hero: 'gr',
        skillnum:'4',
        positionnum:'7',
        name: 'PILFER',        
        camptime:'1',
        description:`
        Self Only <br> 
        Produces a Random Supply Item
        `,

    },

     //Hellion

       
     {
        hero: 'hell',
        skillnum:'1',
        positionnum:'4',
        name: 'BATTLE TRANCE',        
        camptime:'3',
        description:`
        Self Only <br>
        +25% DMG if in Position 1 (4 Battles)<br>
        -25% DMG if Not in Position 1 (4 Battles)

        `,

    },

    {
        hero: 'hell',
        skillnum:'2',
        positionnum:'5',
        name: 'REVEL',        
        camptime:'3',
        description:`
        Party <br>
        -5 ACC (4 Battles)<br>
        -2 SPD (4 Battles)<br>
        -20 Stress <br>
        -10% Stress (4 Battles)<br>

        `,

    },

    {
        hero: 'hell',
        skillnum:'3',
        positionnum:'6',
        name: 'REJECT THE GODS',        
        camptime:'2',
        description:`
        Self Only <br> 
       -30 Stress<br>       
       All Companions <br> 
       If Not Religious: +7 Stress <br> 
       If Religious: +15 Stress
        `,

    },

    {
        hero: 'hell',
        skillnum:'4',
        positionnum:'7',
        name: 'SHARPEN SPEAR',        
        camptime:'3',
        description:`
        Self Only <br> 
        +10% CRIT(4 Battles)<br> 
        `,

    },

     //Highwayman

       
     {
        hero: 'hwm',
        skillnum:'1',
        positionnum:'4',
        name: 'GALLOWS HUMOR',        
        camptime:'4',
        description:`
        Self Only <br>
        -25 Stress<br>
        All Companions<br>
        (75% Chance) -20 Stress<br>
        (25% Chance) +10 Stress<br>
        `,


    },

    {
        hero: 'hwm',
        skillnum:'2',
        positionnum:'5',
        name: 'UNPARALLELED FINESSE',        
        camptime:'4',
        description:`
        Self Only <br>  
        +10 DODGE (4 Battles)<br>
        +2 SPD (4 Battles)<br>
        +20% DMG Melee Skills (4 Battles)<br>
        +10 ACC Melee Skills (4 Battles)<br> 
        `,

    },

    {
        hero: 'hwm',
        skillnum:'3',
        positionnum:'6',
        name: 'CLEAN GUNS',        
        camptime:'4',
        description:`
        Self Only <br> 
        +10 ACC Ranged Skills (4 Battles)<br> 
        +20% DMG Ranged Skills (4 Battles)<br>
        +8% CRIT Ranged Skills (4 Battles)<br>
        `,

    },

    {
        hero: 'hwm',
        skillnum:'4',
        positionnum:'7',
        name: "BANDIT'S SENSE",        
        camptime:'4',
        description:`
        Self Only <br>
        Prevents Nighttime Ambush<br> 
        -20% Chance Party Surprised (4 Battles)<br>
        +20% Chance Monsters Surprised (4 Battles)        
        `,

    },

     //Houndmaster

       
     {
        hero: 'hm',
        skillnum:'1',
        positionnum:'4',
        name: "HOUND'S WATCH",        
        camptime:'4',
        description:`
        Self Only <br>
        -20% Chance Party Surprised (4 Battles)<br>
        +20% Chance Monsters Surprised (4 Battles) <br>        
        Prevents Nighttime Ambush<br> 
       

        `,

    },

    {
        hero: 'hm',
        skillnum:'2',
        positionnum:'5',
        name: 'THERAPY DOG',        
        camptime:'3',
        description:`
        All Companions <br> 
        -10 Stress<br>
        -10% Stress (4 Battles)
        `,

    },

    {
        hero: 'hm',
        skillnum:'3',
        positionnum:'6',
        name: "MAN'S BEST FRIEND",        
        camptime:'2',
        description:`
        Self Only <br>
        -20 Stress<br>
        `,

    },

    {
        hero: 'hm',
        skillnum:'4',
        positionnum:'7',
        name: 'RELEASE THE HOUND',        
        camptime:'4',
        description:`
        Self Only <br> 
        +30% Scouting Chance (4 Battles)<br> 
        `,

    },

     //Jester

       
     {
        hero: 'jes',
        skillnum:'1',
        positionnum:'4',
        name: 'TURN BACK TIME',        
        camptime:'3',
        description:`
        One Companion <br>
        -30 Stress <br> 
        If Afflicted: Additional -15 Stress 
        `,

    },

    {
        hero: 'jes',
        skillnum:'2',
        positionnum:'5',
        name: 'EVERY ROSE HAS ITS THORN',        
        camptime:'3',
        description:`
        All Companions <br> 
        -15 Stress<br>
        -15% Stress (4 Battles)
        `,

    },

    {
        hero: 'jes',
        skillnum:'3',
        positionnum:'6',
        name: "TIGER'S EYE",        
        camptime:'3',
        description:`
        One Companion <br> 
        +10 ACC (4 Battles)<br>       
        +8% CRIT (4 Battles)
        `,

    },

    {
        hero: 'jes',
        skillnum:'4',
        positionnum:'7',
        name: 'MOCKERY',        
        camptime:'2',
        description:`        
        One Companion <br>
        +20 Stress<br>
        All Other Companions <br>
        -20 Stress <br> 

        `,

    },

     //Leper

       
     {
        hero: 'lep',
        skillnum:'1',
        positionnum:'4',
        name: 'LET THE MASK DOWN',        
        camptime:'1',
        description:`
        Self Only <br> 
        -25 Stress<br>       
        All Companions <br> 
        +5 Stress <br> 


        `,

    },

    {
        hero: 'lep',
        skillnum:'2',
        positionnum:'5',
        name: 'BLOODY SHROUD',        
        camptime:'2',
        description:`
        Self Only <br>
        +25% Bleed Resist (4 Battles)<br> 
        +25% Blight Resist (4 Battles)<br> 
        +25% Move Resist (4 Battles)<br> 
        +25% Debuff Resist (4 Battles)<br> 
        `,

    },

    {
        hero: 'lep',
        skillnum:'3',
        positionnum:'6',
        name: 'REFLECTION',        
        camptime:'3',
        description:`
        Self Only <br> 
        -20 Stress<br>
        +10 ACC (4 Battles)<br>       
        +8% CRIT (4 Battles)
        `,

    },

    {
        hero: 'lep',
        skillnum:'4',
        positionnum:'7',
        name: 'QUARANTINE',        
        camptime:'3',
        description:`
        Self Only <br> 
        Suffer 20% HP DMG<br>
        All Companions <br> 
        (50% Chance) -20 Stress<br>
        (50% Chance) -15 Stress<br>
        `,

    },

     //MAA

       
     {
        hero: 'maa',
        skillnum:'1',
        positionnum:'4',
        name: 'MAINTAIN EQUIPMENT',        
        camptime:'4',
        description:`
        Self Only <br>
        +15% PROT (4 Battles)<br>
        +15% DMG (4 Battles)

        `,

    },

    {
        hero: 'maa',
        skillnum:'2',
        positionnum:'5',
        name: 'TACTICS',        
        camptime:'4',
        description:`
        Party <br>
        +10 DODGE (4 Battles)<br>
        +5% CRIT (4 Battles)
        `,

    },

    {
        hero: 'maa',
        skillnum:'3',
        positionnum:'6',
        name: 'INSTRUCTION',        
        camptime:'3',
        description:`
        One Companion <br> 
        +10 ACC (4 Battles)<br>       
        +3 SPD (4 Battles)
        `,

    },

    {
        hero: 'maa',
        skillnum:'4',
        positionnum:'7',
        name: 'WEAPONS PRACTICE',        
        camptime:'4',
        description:`
        All Companions <br>
        +10% DMG (4 Battles)<br>
        (75% Chance) +8% CRIT (4 Battles)
        `,

    },

    
       //Musketeer

       {
        hero: 'musk',
        skillnum:'1',
        positionnum:'4',
        name: 'FIELD DRESSING',        
        camptime:'2',
        description:`
        One Companion <br>
        (75% Chance) Heal 35% HP <br>
        (25% Chance) Heal 50% HP <br>
        Remove Bleeding
        `,

    },

    {
        hero: 'musk',
        skillnum:'2',
        positionnum:'5',
        name: 'MARCHING PLAN',        
        camptime:'3',
        description:`
        All Companions <br>
        +2 SPD (4 Battles)
        `,

    },

    {
        hero: 'musk',
        skillnum:'3',
        positionnum:'6',
        name: 'CLEAN MUSKET',        
        camptime:'3',
        description:`
        Self Only <br> 
        +10 ACC Ranged Skills (4 Battles)<br> 
        +20% DMG Ranged Skills (4 Battles)<br>
        +8% CRIT Ranged Skills (4 Battles)<br>
        -2 SPD (4 Battles)<br>
        `,

    },

    {
        hero: 'musk',
        skillnum:'4',
        positionnum:'7',
        name: 'TRIAGE',        
        camptime:'3',
        description:`
        All Companions <br>
        Heal 20% HP
        `,

    },


       //Occultist

       
       {
        hero: 'occ',
        skillnum:'1',
        positionnum:'4',
        name: 'ABANDON HOPE',        
        camptime:'1',
        description:`
        Self Only <br> 
        -25 Stress<br>       
        All Companions <br> 
        (50% Chance) +10 Stress <br>
        (50% Chance) +5 Stress <br>


        `,

    },

    {
        hero: 'occ',
        skillnum:'2',
        positionnum:'5',
        name: 'DARK RITUAL',        
        camptime:'3',
        description:`
        Self Only <br>
        Reduce Torchlight by 100<br>
        +15 Stress <br>
        One Companion<br>
        Heal 50% HP<br>
        Remove Mortality Debuffs
        `,

    },

    {
        hero: 'occ',
        skillnum:'3',
        positionnum:'6',
        name: 'DARK STRENGTH',        
        camptime:'2',
        description:`
        Self Only <br>
        +15 Stress <br>
        One Companion<br>
        +20% DMG (4 Battles)<br>       
        `,

    },

    {
        hero: 'occ',
        skillnum:'4',
        positionnum:'7',
        name: 'UNSPEAKABLE COMMUNE',        
        camptime:'3',
        description:`
        Self Only <br> 
        Prevents Nighttime Ambush<br>       
        All Companions <br> 
        +7 Stress <br>
        `,

    },
    

    //PD
       
    {
        hero: 'pd',
        skillnum:'1',
        positionnum:'4',
        name: 'EXPERIMENTAL VAPOURS',        
        camptime:'4',
        description:`
        One Companion <br>
        Heal 50% HP <br>
        +33% Healing Recieved (4 Battles)

        `,

    },

    {
        hero: 'pd',
        skillnum:'2',
        positionnum:'5',
        name: 'LEECHES',        
        camptime:'3',
        description:`
        One Companion <br>
        Heal 15% HP <br>
        Remove Blight<br>
        Remove All Diseases
        `,

    },

    {
        hero: 'pd',
        skillnum:'3',
        positionnum:'6',
        name: 'THE CURE',        
        camptime:'1',
        description:`
        Self Only <br> 
        Remove All Diseases<br>       
        +20% Disease Resist (4 Battles)
        `,

    },

    {
        hero: 'pd',
        skillnum:'4',
        positionnum:'7',
        name: 'SELF-MEDICATE',        
        camptime:'3',
        description:`
        Self Only <br> 
        -10 Stress<br> 
        Heal 20% HP <br>
        Remove Blight<br>
        Remove Bleeding<br>
        +10 ACC (4 Battles)<br>
        `,

    },
    

       // SB

       
    {
        hero: 'sb',
        skillnum:'1',
        positionnum:'4',
        name: 'SNAKE EYES',        
        camptime:'3',
        description:`
        All Companions <br>
       Armor Piercing: +15% (4 Battles) <br>
        `,

    },

    {
        hero: 'sb',
        skillnum:'2',
        positionnum:'5',
        name: 'SNAKESKIN',        
        camptime:'3',
        description:`
        Self Only <br>
        +15% PROT (4 Battles)<br>
        +15% MAX HP (4 Battles)
        `,

    },

    {
        hero: 'sb',
        skillnum:'3',
        positionnum:'6',
        name: 'SANDSTORM',        
        camptime:'2',
        description:`
        One Companion <br> 
        Can't be Marked (4 Battles)<br>       
        `,

    },

    {
        hero: 'sb',
        skillnum:'4',
        positionnum:'7',
        name: "ADDER'S EMBRACE",        
        camptime:'2',
        description:`
        Self Only <br> 
        +20% Blight Skill Chance (4 Battles)<br> 
        +20% Blight Resist (4 Battles)<br> 
        `,

    },
    

       //Vestal

       
    {
        hero: 'ves',
        skillnum:'1',
        positionnum:'4',
        name: 'BLESS',        
        camptime:'3',
        description:`
        One Companion <br>
        +10 ACC (4 Battles)<br>
        +10 DODGE (4 Battles)

        `,

    },

    {
        hero: 'ves',
        skillnum:'2',
        positionnum:'5',
        name: 'CHANT',        
        camptime:'3',
        description:`
        One Companion <br>
        If Religious: -15 Stress<br>
        If Not Religious: -5 Stress <br> 
        If Religious: -20% Stress (4 Battles)<br>
        If Not Religious: -10% Stress (4 Battles) <br> 
        `,

    },

    {
        hero: 'ves',
        skillnum:'3',
        positionnum:'6',
        name: 'PRAY',        
        camptime:'3',
        description:`
        All Companions <br>         
        If Religious: -15 Stress<br>
        If Not Religious: -5 Stress <br> 
        If Religious: +15% PROT (4 Battles)<br>
        If Not Religious: +5% PROT (4 Battles) <br> 
        `,

    },

    {
        hero: 'ves',
        skillnum:'4',
        positionnum:'7',
        name: 'SANCTUARY',        
        camptime:'4',
        description:`
        Self Only <br> 
        Prevents Nighttime Ambush<br>       
        All Companions <br> 
        If Mortality Debuffs: Heal 50% HP <br>
        If Mortality Debuffs: -25 Stress <br>
        `,

    },

    
]

function generateHeroCampSkills(skill) {
   
    let description = skill.description ? colorCodeHeroSkills(skill.description) : ''; // Check for empty skill.description

    return `
        <div class="skill_desc_align camping_skill combatskill${skill.positionnum}" id="${skill.hero}_camp_desc${skill.skillnum}">
            <div class = "desc_box camping_skill_box">
                <span class = "highres">${skill.name}</span> <br>    
                <span class = "attack_type">Time Cost: ${skill.camptime}</span> <br>                    
                ${description}
            </div>
        </div>
    `;
}

HeroCampSkills.forEach((campdata) => {
    const HeroCampSkillHTML = generateHeroCampSkills(campdata);
    MainHeroBox.innerHTML += HeroCampSkillHTML;});

const AbominationCombatSkills = [

    //Transform
    {
        num:`1`,
        id: 'abomcombat_desc1a',
        uses:`2 <br> 1 Round Cooldown`,
        position: '1234hero',
        name: 'Transform 1',
        attacktype:`Free Action`,
        description:`
        As Human: <br> 
        Self:<br>
        Change to Mode: Beast / Heal 5 HP <br>
        Buff Self: +1 SPD (4 rds) <br>
        +20% Blight Resist (4 rds) / +10% DMG (3 rds)<br>
        Other Heroes: Stress +8<br><br>
        
        At the end of every Turn if in Beast Form:<br>
        Self: +6 Stress<br><br>

        As Beast:<br> 
        Self:<br>
        Change to Mode: Human<br>
        Debuff Self: -4 SPD (4 rds)<br>
        Other Heroes: Stress -2<br>
        `,
    },

    {
        num:`1`,
        id: 'abomcombat_desc1b',
        uses:`2 <br> 1 Round Cooldown`,
        position: '1234hero',
        name: 'Transform 2',
        attacktype:`Free Action`,
        description:`
        As Human: <br> 
        Self:<br>
        Change to Mode: Beast / Heal 6 HP <br>
        Buff Self: +2 SPD (4 rds) <br>
        +22% Blight Resist (4 rds) / +14% DMG (3 rds)<br>
        Other Heroes: Stress +8<br><br>

        At the end of every Turn if in Beast Form:<br>
        Self: +6 Stress<br><br>

        As Beast:<br> 
        Self:<br>
        Change to Mode: Human<br>
        Debuff Self: -3 SPD (4 rds)<br>
        Other Heroes: Stress -2<br>
        `,
    },

    {
        num:`1`,
        id: 'abomcombat_desc1c',
        uses:`2 <br> 1 Round Cooldown`,
        position: '1234hero',
        name: 'Transform 3',
        attacktype:`Free Action`,
        description:`
        As Human: <br> 
        Self:<br>
        Change to Mode: Beast / Heal 7 HP <br>
        Buff Self: +3 SPD (4 rds) <br>
        +25% Blight Resist (4 rds) / +17% DMG (3 rds)<br>
        Other Heroes: Stress +8<br><br>

        At the end of every Turn if in Beast Form:<br>
        Self: +6 Stress<br><br>

        As Beast:<br> 
        Self:<br>
        Change to Mode: Human<br>
        Debuff Self: -2 SPD (4 rds)<br>
        Other Heroes: Stress -2<br>
        `,
    },

    {
        num:`1`,
        id: 'abomcombat_desc1d',
        uses:`2 <br> 1 Round Cooldown`,
        position: '1234hero',
        name: 'Transform 4',
        attacktype:`Free Action`,
        description:`
        As Human: <br> 
        Self:<br>
        Change to Mode: Beast / Heal 8 HP <br>
        Buff Self: +4 SPD (4 rds) <br>
        +27% Blight Resist (4 rds) / +21% DMG (3 rds)<br>
        Other Heroes: Stress +8<br><br>

        At the end of every Turn if in Beast Form:<br>
        Self: +6 Stress<br><br>

        As Beast:<br> 
        Self:<br>
        Change to Mode: Human<br>
        Debuff Self: -1 SPD (4 rds)<br>
        Other Heroes: Stress -2<br>
        `,
    },


    {
        num:`1`,
        id: 'abomcombat_desc1e',
        uses:`2 <br> 1 Round Cooldown`,
        position: '1234hero',
        name: 'Transform 5',
        attacktype:`Free Action`,
        description:`
        As Human: <br> 
        Self:<br>
        Change to Mode: Beast / Heal 10 HP <br>
        Buff Self: +5 SPD (4 rds) <br>
        +30% Blight Resist (4 rds) / +25% DMG (3 rds)<br>
        Other Heroes: Stress +8<br><br>

        At the end of every Turn if in Beast Form:<br>
        Self: +6 Stress<br><br>

        As Beast:<br> 
        Self:<br>
        Change to Mode: Human<br>
        Other Heroes: Stress -2<br>
        `,
    },

     //Manacles

     {
        num:`2`,
        id: 'abomcombat_desc2a',
        extratext:`Usable in Mode: Human`,
        position: '23ally_123enemy',
        name: 'Manacles 1',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-60%`,
        critmod:`+1.0%`,
        description:`
        Stun1<br>
        `,
    },

    {
        num:`2`,
        id: 'abomcombat_desc2b',
        extratext:`Usable in Mode: Human`,
        position: '23ally_123enemy',
        name: 'Manacles 2',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-60%`,
        critmod:`+2.0%`,
        description:`
        Stun2<br>
        `,
    },

    {
        num:`2`,
        id: 'abomcombat_desc2c',
        extratext:`Usable in Mode: Human`,
        position: '23ally_123enemy',
        name: 'Manacles 3',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-60%`,
        critmod:`+3.0%`,
        description:`
        Stun3<br>
        `,
    },

    {
        num:`2`,
        id: 'abomcombat_desc2d',
        extratext:`Usable in Mode: Human`,
        position: '23ally_123enemy',
        name: 'Manacles 4',
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-60%`,
        critmod:`+4.0%`,
        description:`
        Stun4<br>
        `,
    },

    {
        num:`2`,
        id: 'abomcombat_desc2e',
        extratext:`Usable in Mode: Human`,
        position: '23ally_123enemy',
        name: 'Manacles 5',
        attacktype:`Ranged`,
        accuracy:'115',
        dmgmod:`-60%`,
        critmod:`+5.0%`,
        description:`
        Stun5<br>
        `,
    },

    //Beast's Bile

    {
        num:`3`,
        id: 'abomcombat_desc3a',
        extratext:`Usable in Mode: Human`,
        position: '23ally_23cleaveenemy',
        name: "Beast's Bile 1",
        attacktype:`Ranged`,
        accuracy:'95 / DMG Mod: -90% / CRIT Mod: +2.0%',
        description:`
        Blight (100% Base) <br>
        2pts/rd for 3 rds<br>
        PsnDbf1
        `
    },

    {
        num:`3`,
        id: 'abomcombat_desc3b',
        extratext:`Usable in Mode: Human`,
        position: '23ally_23cleaveenemy',
        name: `Beast's Bile 2`,
        attacktype:`Ranged`,
        accuracy:'100 / DMG Mod: -90% / CRIT Mod: +3.0%',
        description:`
        Blight (110% Base) <br>
        3pts/rd for 3 rds<br>
        PsnDbf2
        `
    },


    {
        num:`3`,
        id: 'abomcombat_desc3c',
        extratext:`Usable in Mode: Human`,
        position: '23ally_23cleaveenemy',
        name: `Beast's Bile 3`,
        attacktype:`Ranged`,
        accuracy:'105 / DMG Mod: -90% / CRIT Mod: +4.0%',
        description:`
        Blight (120% Base) <br>
        3pts/rd for 3 rds<br>
        PsnDbf3
        `
    },


    {
        num:`3`,
        id: 'abomcombat_desc3d',
        extratext:`Usable in Mode: Human`,
        position: '23ally_23cleaveenemy',
        name: `Beast's Bile 4`,
        attacktype:`Ranged`,
        accuracy:'110 / DMG Mod: -90% / CRIT Mod: +5.0%',
        description:`
        Blight (130% Base) <br>
        4pts/rd for 3 rds<br>
        PsnDbf4
        `
    },


    {
        num:`3`,
        id: 'abomcombat_desc3e',
        extratext:`Usable in Mode: Human`,
        position: '23ally_23cleaveenemy',
        name: `Beast's Bile 5`,
        attacktype:`Ranged`,
        accuracy:'115 / DMG Mod: -90% / CRIT Mod: +6.0%',
        description:`
        Blight (140% Base) <br>
        5pts/rd for 3 rds<br>
        PsnDbf5
        `
    },

    //Absolution

    {
        num:`4`,
        id: 'abomcombat_desc4a',
        extratext:`Usable in Mode: Human`,
        position: '1234hero',
        name: 'Absolution 1',
        description:`
        Self:<br>
        Stress -7<br>
        Heal 3 HP<br>
        `,
    },

    {
        num:`4`,
        id: 'abomcombat_desc4b',
        extratext:`Usable in Mode: Human`,
        position: '1234hero',
        name: 'Absolution 2',
        description:`
        Self:<br>
        Stress -8<br>
        Heal 3 HP<br>
        `,
    },

    {
        num:`4`,
        id: 'abomcombat_desc4c',
        extratext:`Usable in Mode: Human`,
        position: '1234hero',
        name: 'Absolution 3',
        description:`
        Self:<br>
        Stress -8<br>
        Heal 4 HP<br>
        `,
    },

    {
        num:`4`,
        id: 'abomcombat_desc4d',
        extratext:`Usable in Mode: Human`,
        position: '1234hero',
        name: 'Absolution 4',
        description:`
        Self:<br>
        Stress -9<br>
        Heal 4 HP<br>
        `,
    },

    {
        num:`4`,
        id: 'abomcombat_desc4e',
        extratext:`Usable in Mode: Human`,
        position: '1234hero',
        name: 'Absolution 5',
        description:`
        Self:<br>
        Stress -10<br>
        Heal 5 HP<br>
        `,
    },


    //Rake

    {
        num:`5`,
        id: 'abomcombat_desc5a',
        extratext:`Usable in Mode: Beast`,
        position: '12ally_12cleaveenemy',
        name: 'Rake 1',
        attacktype:`Melee`,
        accuracy:'90',
        dmgmod:`-50%`,
        critmod:`-3.0%`,
        description:`
        Buff Self <br>
        Rake: +15% DMG (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'abomcombat_desc5b',
        extratext:`Usable in Mode: Beast`,
        position: '12ally_12cleaveenemy',
        name: 'Rake 2',
        attacktype:`Melee`,
        accuracy:'95',
        dmgmod:`-50%`,
        critmod:`-2.0%`,
        description:`
        Buff Self <br>
        Rake: +17% DMG (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'abomcombat_desc5c',
        extratext:`Usable in Mode: Beast`,
        position: '12ally_12cleaveenemy',
        name: 'Rake 3',
        attacktype:`Melee`,
        accuracy:'100',
        dmgmod:`-50%`,
        critmod:`-1.0%`,
        description:`
        Buff Self <br>
        Rake: +20% DMG (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'abomcombat_desc5d',
        extratext:`Usable in Mode: Beast`,
        position: '12ally_12cleaveenemy',
        name: 'Rake 4',
        attacktype:`Melee`,
        accuracy:'105',
        dmgmod:`-50%`,
        description:`
        Buff Self <br>
        Rake: +22% DMG (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'abomcombat_desc5e',
        extratext:`Usable in Mode: Beast`,
        position: '12ally_12cleaveenemy',
        name: 'Rake 5',
        attacktype:`Melee`,
        accuracy:'110',
        dmgmod:`-50%`,
        critmod:`+1.0%`,
        description:`
        Buff Self <br>
        Rake: +25% DMG (4 rds)
        `,
    },

    //Rage

    {
        num:`6`,
        id: 'abomcombat_desc6a',
        extratext:`Usable in Mode: Beast`,
        position: '12ally_123enemy',
        name: 'Rage 1',
        attacktype:`Melee`,
        accuracy:'85',
        critmod:'+7.5%',
    },

    {
        num:`6`,
        id: 'abomcombat_desc6b',
        extratext:`Usable in Mode: Beast`,
        position: '12ally_123enemy',
        name: 'Rage 2',
        attacktype:`Melee`,
        accuracy:'90',
        critmod:'+8.5%',
    },

    {
        num:`6`,
        id: 'abomcombat_desc6c',
        extratext:`Usable in Mode: Beast`,
        position: '12ally_123enemy',
        name: 'Rage 3',
        attacktype:`Melee`,
        accuracy:'95',
        critmod:'+9.5%',
    },

    {   
        num:`6`,
        id: 'abomcombat_desc6d',
        extratext:`Usable in Mode: Beast`,
        position: '12ally_123enemy',
        name: 'Rage 4',
        attacktype:`Melee`,
        accuracy:'100',
        critmod:'+10.5%',
    },

    {
        num:`6`,
        id: 'abomcombat_desc6e',
        extratext:`Usable in Mode: Beast`,
        position: '12ally_123enemy',
        name: 'Rage 5',
        attacktype:`Melee`,
        accuracy:'105',
        critmod:'+11.5%',
    },




    //Slam

    {
        num:`7`,
        id: 'abomcombat_desc7a',
        extratext:`Usable in Mode: Beast`,
        position: '123ally_12enemy',
        name: 'Slam 1',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:`80 / DMG Mod: -25% / CRIT Mod: +1.0%`,
        description:`
        Knockback2a<br>
        Debuff Target<br>
        -10 DODGE (3 rds) (100% Base)<br>
        -2 SPD (3 rds) (100% Base)<br>
        `,
    },

    {
        num:`7`,
        id: 'abomcombat_desc7b',
        extratext:`Usable in Mode: Beast`,
        position: '123ally_12enemy',
        name: 'Slam 2',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:`85 / DMG Mod: -25% / CRIT Mod: +2.0%`,
        description:`
        Knockback2b<br>
        Debuff Target<br>
        -12 DODGE (3 rds) (110% Base)<br>
        -3 SPD (3 rds) (110% Base)<br>
        `,
    },

    {
        num:`7`,
        id: 'abomcombat_desc7c',
        extratext:`Usable in Mode: Beast`,
        position: '123ally_12enemy',
        name: 'Slam 3',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:`90 / DMG Mod: -25% / CRIT Mod: +3.0%`,
        description:`
        Knockback2c<br>
        Debuff Target<br>
        -15 DODGE (3 rds) (120% Base)<br>
        -4 SPD (3 rds) (120% Base)<br>
        `,
    },

    {
        num:`7`, 
        id: 'abomcombat_desc7d',
        extratext:`Usable in Mode: Beast`,
        position: '123ally_12enemy',
        name: 'Slam 4',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:`95 / DMG Mod: -25% / CRIT Mod: +4.0%`,
        description:`
        Knockback2d<br>
        Debuff Target<br>
        -17 DODGE (3 rds) (130% Base)<br>
        -5 SPD (3 rds) (130% Base)<br>
        `,
    },


    {
        num:`7`,
        id: 'abomcombat_desc7e',
        extratext:`Usable in Mode: Beast`,
        position: '123ally_12enemy',
        name: 'Slam 5',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:`100 / DMG Mod: -25% / CRIT Mod: +5.0%`,
        description:`
        Knockback2e<br>
        Debuff Target<br>
        -20 DODGE (3 rds) (140% Base)<br>
        -6 SPD (3 rds) (140% Base)<br>
        `,
    },
]
const AntiquarianCombatSkills = [

    //Nervous Stab
    {
        num:`1`,
        id: 'anticombat_desc1a',
        position: '1234ally_123enemy',
        name: 'Nervous Stab 1',
        attacktype:`Melee`,
        accuracy:'85',
        critmod:'+3.0%',
    },

    {
        num:`1`,
        id: 'anticombat_desc1b',
        position: '1234ally_123enemy',
        name: 'Nervous Stab 2',
        attacktype:`Melee`,
        accuracy:'90',
        critmod:'+4.0%',
    },

    {
        num:`1`,
        id: 'anticombat_desc1c',
        position: '1234ally_123enemy',
        name: 'Nervous Stab 3',
        attacktype:`Melee`,
        accuracy:'95',
        critmod:'+5.0%',
    },

    {
        num:`1`,
        id: 'anticombat_desc1d',
        position: '1234ally_123enemy',
        name: 'Nervous Stab 4',
        attacktype:`Melee`,
        accuracy:'100',
        critmod:'+6.0%',
    },


    {
        num:`1`,
        id: 'anticombat_desc1e',
        position: '1234ally_123enemy',
        name: 'Nervous Stab 5',
        attacktype:`Melee`,
        accuracy:'105',
        critmod:'+7.0%',
    },

     //Festering Vapors

     {
        num:`2`,
        id: 'anticombat_desc2a',
        position: '1234ally_1234enemy',
        name: 'Festering Vapors 1',
        attacktype:`Ranged`,
        accuracy:'95 / DMG Mod: -75%',
        description:`
        Blight (100% Base)<br>
        1pt/rd for 3 rds<br>
        Debuff Target<br>
        -20% Blight Resist (3 rds) (100% Base)
        `,
    },

    {
        num:`2`,
        id: 'anticombat_desc2b',
        position: '1234ally_1234enemy',
        name: 'Festering Vapors 2',
        attacktype:`Ranged`,
        accuracy:'100 / DMG Mod: -75% / CRIT Mod: +1.0%',
        description:`
        Blight (110% Base)<br>
        2pts/rd for 3 rds<br>
        Debuff Target<br>
        -24% Blight Resist (3 rds) (110% Base)
        `,
    },

    {
        num:`2`,
        id: 'anticombat_desc2c',
        position: '1234ally_1234enemy',
        name: 'Festering Vapors 3',
        attacktype:`Ranged`,
        accuracy:'105 / DMG Mod: -75% / CRIT Mod: +2.0%',
        description:`
        Blight (120% Base)<br>
        2pts/rd for 3 rds<br>
        Debuff Target<br>
        -28% Blight Resist (3 rds) (120% Base)
        `,
    },

    {
        num:`2`,
        id: 'anticombat_desc2d',
        position: '1234ally_1234enemy',
        name: 'Festering Vapors 4',
        attacktype:`Ranged`,
        accuracy:'100 / DMG Mod: -75% / CRIT Mod: +3.0%',
        description:`
        Blight (130% Base)<br>
        3pts/rd for 3 rds<br>
        Debuff Target<br>
        -32% Blight Resist (3 rds) (130% Base)
        `,
    },

    {
        num:`2`,
        id: 'anticombat_desc2e',
        position: '1234ally_1234enemy',
        name: 'Festering Vapors 5',
        attacktype:`Ranged`,
        accuracy:'115 / DMG Mod: -75% / CRIT Mod: +4.0%',
        description:`
        Blight (140% Base)<br>
        4pts/rd for 3 rds<br>
        Debuff Target<br>
        -36% Blight Resist (3 rds) (140% Base)
        `,
    },

    //Get Down!

    {
        num:`3`,
        id: 'anticombat_desc3a',
        position: '1234hero',
        name: "Get Down! 1",
        movement:`Back 2`,
        description:`
        Buff Self <br>
        +15 DODGE (4 rds)<br>
        +1 SPD (4 rds)<br>
        +10% Blight Skill Chance (4 rds)<br>
        `
    },

    {
        num:`3`,
        id: 'anticombat_desc3b',
        position: '1234hero',
        name: `Get Down! 2`,
        movement:`Back 2`,
        description:`
        Buff Self <br>
        +18 DODGE (4 rds)<br>
        +2 SPD (4 rds)<br>
        +11% Blight Skill Chance (4 rds)<br>
        `
    },


    {
        num:`3`,
        id: 'anticombat_desc3c',
        position: '1234hero',
        name: `Get Down! 3`,
        movement:`Back 2`,
        description:`
        Buff Self <br>
        +20 DODGE (4 rds)<br>
        +3 SPD (4 rds)<br>
        +12% Blight Skill Chance (4 rds)<br>
        `
    },


    {
        num:`3`,
        id: 'anticombat_desc3d',
        position: '1234hero',
        name: `Get Down! 4`,
        movement:`Back 2`,
        description:`
        Buff Self <br>
        +22 DODGE (4 rds)<br>
        +4 SPD (4 rds)<br>
        +13% Blight Skill Chance (4 rds)<br>
        `
    },


    {
        num:`3`,
        id: 'anticombat_desc3e',
        position: '1234hero',
        name: `Get Down! 5`,
        movement:`Back 2`,
        description:`
        Buff Self <br>
        +25 DODGE (4 rds)<br>
        +5 SPD (4 rds)<br>
        +15% Blight Skill Chance (4 rds)<br>
        `
    },

    //Flashpowder

    {
        num:`4`,
        id: 'anticombat_desc4a',
        position: '1234ally_1234enemy',
        name: 'Flashpowder 1',
        attacktype:`Ranged`,        
        accuracy:'95',
        dmgmod:`-100%`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -10 ACC (2 rds) (100% Base)<br>
        `,
    },

    {
        num:`4`,
        id: 'anticombat_desc4b',
        position: '1234ally_1234enemy',
        name: 'Flashpowder 2',
        attacktype:`Ranged`,        
        accuracy:'100',
        dmgmod:`-100%`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -11 ACC (2 rds) (110% Base)<br>
        `,
    },

    {
        num:`4`,
        id: 'anticombat_desc4c',
        position: '1234ally_1234enemy',
        name: 'Flashpowder 3',
        attacktype:`Ranged`,        
        accuracy:'105',
        dmgmod:`-100%`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -12 ACC (2 rds) (120% Base)<br>
        `,
    },

    {
        num:`4`,
        id: 'anticombat_desc4d',
        position: '1234ally_1234enemy',
        name: 'Flashpowder 4',
        attacktype:`Ranged`,        
        accuracy:'110',
        dmgmod:`-100%`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -14 ACC (2 rds) (130% Base)<br>
        `,
    },

    {
        num:`4`,
        id: 'anticombat_desc4e',
        position: '1234ally_1234enemy',
        name: 'Flashpowder 5',
        attacktype:`Ranged`,        
        accuracy:'115',
        dmgmod:`-100%`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -15 ACC (2 rds) (140% Base)<br>
        `,
    },


    //Fortifying Vapours

    {
        num:`5`,
        id: 'anticombat_desc5a',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Fortifying Vapours 1',
        description:`
        Target Hero:<br>
        Heal 1-1 <br>
        Buff Target<br>
        +10% Bleed Resist (3 rds) <br>
        +10% Blight Resist (3 rds)
        `,
    },

    {
        num:`5`,
        id: 'anticombat_desc5b',
        isdoubleicon:true,
        position: '34ally_1234heal',        
        name: 'Fortifying Vapours 2',
        description:`
        Target Hero:<br>
        Heal 1-2 <br>
        Buff Target<br>
        +11% Bleed Resist (3 rds) <br>
        +11% Blight Resist (3 rds)
        `,
    },

    {
        num:`5`,
        id: 'anticombat_desc5c',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Fortifying Vapours 3',
        description:`
        Target Hero:<br>
        Heal 2-2 <br>
        Buff Target<br>
        +12% Bleed Resist (3 rds) <br>
        +12% Blight Resist (3 rds)
        `,
    },

    {
        num:`5`,
        id: 'anticombat_desc5d',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Fortifying Vapours 4',
        description:`
        Target Hero:<br>
        Heal 2-3 <br>
        Buff Target<br>
        +14% Bleed Resist (3 rds) <br>
        +14% Blight Resist (3 rds)
        `,
    },

    {
        num:`5`,
        id: 'anticombat_desc5e',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Fortifying Vapours 5',
        description:`
        Target Hero:<br>
        Heal 3-3 <br>
        Buff Target<br>
        +15% Bleed Resist (3 rds) <br>
        +15% Blight Resist (3 rds)
        `,
    },

    //Invigorating Vapours

    {
        num:`6`,
        id: 'anticombat_desc6a',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Invigorating Vapours 1',
        description:`
        Buff Party<br>
        +3 DODGE (3 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'anticombat_desc6b',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Invigorating Vapours 2',
        description:`
        Buff Party<br>
        +5 DODGE (3 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'anticombat_desc6c',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Invigorating Vapours 3',
        description:`
        Buff Party<br>
        +7 DODGE (3 rds)<br>
        `,
    },

    {   
        num:`6`,
        id: 'anticombat_desc6d',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Invigorating Vapours 4',
        description:`
        Buff Party<br>
        +9 DODGE (3 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'anticombat_desc6e',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Invigorating Vapours 5',
        description:`
        Buff Party<br>
        +10 DODGE (3 rds)<br>
        `,
    },




    //Protect Me

    {
        num:`7`,
        extratext:`Always Unlocked`,
        id: 'anticombat_desc7a',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Protect Me 1',
        description:`
        Target Hero: <br>
        Mark (3 rds) / Force Guard (2 rds) <br>
        Buff Target<br>
        +4 DODGE (4 rds)<br>
        +10% PROT (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'anticombat_desc7b',
        isdoubleicon:true,
        position: '1234ally_1234heal',       
        name: 'Protect Me 2',
        description:`
        Target Hero: <br>
        Mark (3 rds) / Force Guard (2 rds) <br>
        Buff Target<br>
        +5 DODGE (4 rds)<br>
        +13% PROT (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'anticombat_desc7c',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Protect Me 3',
        description:`
        Target Hero: <br>
        Mark (3 rds) / Force Guard (2 rds) <br>
        Buff Target<br>
        +6 DODGE (4 rds)<br>
        +15% PROT (4 rds)<br>
        `,
    },

    {
        num:`7`, 
        id: 'anticombat_desc7d',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Protect Me 4',
        description:`
        Target Hero: <br>
        Mark (3 rds) / Force Guard (2 rds) <br>
        Buff Target<br>
        +7 DODGE (4 rds)<br>
        +18% PROT (4 rds)<br>
        `,
    },


    {
        num:`7`,
        id: 'anticombat_desc7e',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Protect Me 5',
        description:`
        Target Hero: <br>
        Mark (3 rds) / Force Guard (2 rds) <br>
        Buff Target<br>
        +8 DODGE (4 rds)<br>
        +20% PROT (4 rds)<br>
        `,
    },
]
const ArbalestCombatSkills = [

    //Sniper Shot
    {
        num:`1`,
        extratext:`Always Unlocked`,
        id: 'arbcombat_desc1a',
        position: '34ally_234enemy',
        name: 'Sniper Shot 1',
        attacktype:`Ranged`,
        accuracy:'95',
        critmod:'+5.0%',
        description:`
        +50% DMG vs Marked <br>
        +9% CRIT vs Marked <br>
        `,
    },

    {
        num:`1`,
        id: 'arbcombat_desc1b',
        position: '34ally_234enemy',
        name: 'Sniper Shot 2',
        attacktype:`Ranged`,
        accuracy:'100',
        critmod:'+6.0%',
        description:`
        +60% DMG vs Marked <br>
        +10% CRIT vs Marked <br>
        `,
    },

    {
        num:`1`,
        id: 'arbcombat_desc1c',
        position: '34ally_234enemy',
        name: 'Sniper Shot 3',
        attacktype:`Ranged`,
        accuracy:'105',
        critmod:'+7.0%',
        description:`
        +70% DMG vs Marked <br>
        +11% CRIT vs Marked <br>
        `,
    },

    {
        num:`1`,
        id: 'arbcombat_desc1d',
        position: '34ally_234enemy',
        name: 'Sniper Shot 4',
        attacktype:`Ranged`,
        accuracy:'110',
        critmod:'+8.0%',
        description:`
        +80% DMG vs Marked <br>
        +12% CRIT vs Marked <br>
        `,
    },


    {
        num:`1`,
        id: 'arbcombat_desc1e',
        position: '34ally_234enemy',
        name: 'Sniper Shot 5',
        attacktype:`Ranged`,
        accuracy:'115',
        critmod:'+9.0%',
        description:`
        +100% DMG vs Marked <br>
        +13% CRIT vs Marked <br>
        `,
    },

     //Suppressing Fire

     {
        num:`2`,
        id: 'arbcombat_desc2a',
        position: '34ally_34cleaveenemy',
        name: 'Suppressing Fire 1',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-80%`,
        critmod:'-10.0%',
        description:`
        Debuff Target<br>
        -15 ACC (2 rds) (100% Base)<br>
        -15 CRIT (2 rds) (100% Base)<br
        `,
    },

    {
        num:`2`,
        id: 'arbcombat_desc2b',
        position: '34ally_34cleaveenemy',
        name: 'Suppressing Fire 2',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-80%`,
        critmod:'-9.0%',
        description:`
        Debuff Target<br>
        -16 ACC (2 rds) (110% Base)<br>
        -16 CRIT (2 rds) (110% Base)<br
        `,
    },

    {
        num:`2`,
        id: 'arbcombat_desc2c',
        position: '34ally_34cleaveenemy',
        name: 'Suppressing Fire 3',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-80%`,
        critmod:'-8.0%',
        description:`
        Debuff Target<br>
        -17 ACC (2 rds) (120% Base)<br>
        -17 CRIT (2 rds) (120% Base)<br
        `,
    },

    {
        num:`2`,
        id: 'arbcombat_desc2d',
        position: '34ally_34cleaveenemy',
        name: 'Suppressing Fire 4',
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-80%`,
        critmod:'-7.0%',
        description:`
        Debuff Target<br>
        -18 ACC (2 rds) (130% Base)<br>
        -18 CRIT (2 rds) (130% Base)<br
        `,
    },

    {
        num:`2`,
        id: 'arbcombat_desc2e',
        position: '34ally_34cleaveenemy',
        name: 'Suppressing Fire 5',
        attacktype:`Ranged`,
        accuracy:'115',
        dmgmod:`-80%`,
        critmod:'-6.0%',
        description:`
        Debuff Target<br>
        -20 ACC (2 rds) (140% Base)<br>
        -19 CRIT (2 rds) (140% Base)<br
        `,
    },

    //Sniper's Mark

    {
        num:`3`,
        id: 'arbcombat_desc3a',
        position: '34ally_234enemy',
        name: "Sniper's Mark 1",
        attacktype:`Ranged`,
        accuracy:'100 / DMG Mod: -100%',
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -20 DODGE (2 rds) (100% Base)
        `
    },

    {
        num:`3`,
        id: 'arbcombat_desc3b',
        position: '34ally_234enemy',
        name: `Sniper's Mark 2`,
        attacktype:`Ranged`,
        accuracy:'105 / DMG Mod: -100%',
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -22 DODGE (2 rds) (110% Base)
        `
    },


    {
        num:`3`,
        id: 'arbcombat_desc3c',
        position: '34ally_234enemy',
        name: `Sniper's Mark 3`,
        attacktype:`Ranged`,
        accuracy:'110 / DMG Mod: -100%',
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -25 DODGE (2 rds) (120% Base)
        `
    },


    {
        num:`3`,
        id: 'arbcombat_desc3d',
        position: '34ally_234enemy',
        name: `Sniper's Mark 4`,
        attacktype:`Ranged`,
        accuracy:'115 / DMG Mod: -100%',
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -27 DODGE (2 rds) (130% Base)
        `
    },


    {
        num:`3`,
        id: 'arbcombat_desc3e',
        position: '34ally_234enemy',
        name: `Sniper's Mark 5`,
        attacktype:`Ranged`,
        accuracy:'120 / DMG Mod: -100%',
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -30 DODGE (2 rds) (140% Base)
        `
    },

    //Bola

    {
        num:`4`,
        id: 'arbcombat_desc4a',
        position: '34ally_12cleaveenemy',
        name: 'Bola 1',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-50%`,
        critmod:'+2.0%',
        description:`
        Knockback 1 (75% Base) <br>
        `,
    },

    {
        num:`4`,
        id: 'arbcombat_desc4b',
        position: '34ally_12cleaveenemy',
        name: 'Bola 2',
        attacktype:`Ranged`,        
        accuracy:'100',
        dmgmod:`-50%`,
        critmod:'+3.0%',
        description:`
        Knockback 1 (85% Base) <br>
        `,
    },

    {
        num:`4`,
        id: 'arbcombat_desc4c',
        position: '34ally_12cleaveenemy',
        name: 'Bola 3',
        attacktype:`Ranged`,        
        accuracy:'105',
        dmgmod:`-50%`,
        critmod:'+4.0%',
        description:`
        Knockback 1 (95% Base) <br>
        `,
    },

    {
        num:`4`,
        id: 'arbcombat_desc4d',
        position: '34ally_12cleaveenemy',
        name: 'Bola 4',
        attacktype:`Ranged`,        
        accuracy:'110',
        dmgmod:`-50%`,
        critmod:'+5.0%',
        description:`
        Knockback 1 (105% Base) <br>
        `,
    },

    {
        num:`4`,
        id: 'arbcombat_desc4e',
        position: '34ally_12cleaveenemy',
        name: 'Bola 5',
        attacktype:`Ranged`,        
        accuracy:'115',
        dmgmod:`-50%`,
        critmod:'+6.0%',
        description:`
        Knockback 1 (115% Base) <br>
        `,
    },


    //Blindfire

    {
        num:`5`,
        id: 'arbcombat_desc5a',
        position: '1234ally_1234enemy',
        name: 'Blindfire 1',
        attacktype:`Random Target Ranged`,
        accuracy:'75',
        dmgmod:`-10%`,
        description:`
        Buff Self<br>
        +3 SPD (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'arbcombat_desc5b',
        position: '1234ally_1234enemy',
        name: 'Blindfire 2',
        attacktype:`Random Target Ranged`,
        accuracy:'80',
        dmgmod:`-10%`,
        critmod:'+1.0%',
        description:`
        Buff Self<br>
        +3 SPD (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'arbcombat_desc5c',
        position: '1234ally_1234enemy',
        name: 'Blindfire 3',
        attacktype:`Random Target Ranged`,
        accuracy:'85',
        dmgmod:`-10%`,
        critmod:'+2.0%',
        description:`
        Buff Self<br>
        +4 SPD (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'arbcombat_desc5d',
        position: '1234ally_1234enemy',
        name: 'Blindfire 4',
        attacktype:`Random Target Ranged`,
        accuracy:'90',
        dmgmod:`-10%`,
        critmod:'+3.0%',
        description:`
        Buff Self<br>
        +4 SPD (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'arbcombat_desc5e',
        position: '1234ally_1234enemy',
        name: 'Blindfire 5',
        attacktype:`Random Target Ranged`,
        accuracy:'95',
        dmgmod:`-10%`,
        critmod:'+4.0%',
        description:`
        Buff Self<br>
        +5 SPD (4 rds)
        `,
    },

    //Battlefield Bandage

    {
        num:`6`,
        id: 'arbcombat_desc6a',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Battlefield Bandage 1',
        description:`
        Heal 2-3<br>
        Buff Target<br>
        +20% Healing Received (3 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'arbcombat_desc6b',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Battlefield Bandage 2',
        description:`
        Heal 3-3<br>
        Buff Target<br>
        +24% Healing Received (3 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'arbcombat_desc6c',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Battlefield Bandage 3',
        description:`
        Heal 3-4<br>
        Buff Target<br>
        +28% Healing Received (3 rds)<br>
        `,
    },

    {   
        num:`6`,
        id: 'arbcombat_desc6d',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Battlefield Bandage 4',
        description:`
        Heal 4-4<br>
        Buff Target<br>
        +33% Healing Received (3 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'arbcombat_desc6e',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Battlefield Bandage 5',
        description:`
        Heal 4-5<br>
        Buff Target<br>
        +38% Healing Received (3 rds)<br>
        `,
    },




    //Rallying Flare

    {
        num:`7`,
        id: 'arbcombat_desc7a',
        position: '1234ally_1234cleaveenemy',
        name: 'Rallying Flare 1',
        attacktype:`Ranged`,
        accuracy:'95 / DMG Mod: -100%',
        description:`
        Bypass Stealth / De-stealth <br>
        Torch +3 <br>
        Other Heroes:<br>
        Clear Stun and Mark<br>
        Stress -1 (60% Chance)<br>
        `,
    },

    {
        num:`7`,
        id: 'arbcombat_desc7b',
        position: '1234ally_1234cleaveenemy',
        name: 'Rallying Flare 2',
        attacktype:`Ranged`,
        accuracy:'100 / DMG Mod: -100%',
        description:`
        Bypass Stealth / De-stealth <br>
        Torch +4 <br>
        Other Heroes:<br>
        Clear Stun and Mark<br>
        Stress -2 (60% Chance)<br>
        `,
    },

    {
        num:`7`,
        id: 'arbcombat_desc7c',
        position: '1234ally_1234cleaveenemy',
        name: 'Rallying Flare 3',
        attacktype:`Ranged`,
        accuracy:'105 / DMG Mod: -100%',
        description:`
        Bypass Stealth / De-stealth <br>
        Torch +5 <br>
        Other Heroes:<br>
        Clear Stun and Mark<br>
        Stress -2 (67% Chance)<br>
        `,
    },

    {
        num:`7`, 
        id: 'arbcombat_desc7d',
        position: '1234ally_1234cleaveenemy',
        name: 'Rallying Flare 4',
        attacktype:`Ranged`,
        accuracy:'110 / DMG Mod: -100%',
        description:`
        Bypass Stealth / De-stealth <br>
        Torch +6 <br>
        Other Heroes:<br>
        Clear Stun and Mark<br>
        Stress -3 (60% Chance)<br>
        `,
    },


    {
        num:`7`,
        id: 'arbcombat_desc7e',
        position: '1234ally_1234cleaveenemy',
        name: 'Rallying Flare 5',
        attacktype:`Ranged`,
        accuracy:'115 / DMG Mod: -100%',
        description:`
        Bypass Stealth / De-stealth <br>
        Torch +7 <br>
        Other Heroes:<br>
        Clear Stun and Mark<br>
        Stress -3 (67% Chance)<br>
        `,
    },
]
const BHCombatSkills = [

    //Collect Bounty
    {
        num:`1`,
        extratext:`Always Unlocked`,
        id: 'bhcombat_desc1a',
        position: '123ally_12enemy',
        name: 'Collect Bounty 1',
        attacktype:`Melee`,
        accuracy:'85',
        critmod:'+7.0%',
        description:`
        +90% DMG vs Marked <br>
        +15% DMG vs Human <br>
        `,
    },

    {
        num:`1`,
        id: 'bhcombat_desc1b',
        position: '123ally_12enemy',
        name: 'Collect Bounty 2',
        attacktype:`Melee`,
        accuracy:'90',
        critmod:'+8.0%',
        description:`
        +90% DMG vs Marked <br>
        +20% DMG vs Human <br>
        `,
    },

    {
        num:`1`,
        id: 'bhcombat_desc1c',
        position: '123ally_12enemy',
        name: 'Collect Bounty 3',
        attacktype:`Melee`,
        accuracy:'95',
        critmod:'+9.0%',
        description:`
        +90% DMG vs Marked <br>
        +25% DMG vs Human <br>
        `,
    },

    {
        num:`1`,
        id: 'bhcombat_desc1d',
        position: '123ally_12enemy',
        name: 'Collect Bounty 4',
        attacktype:`Melee`,
        accuracy:'100',
        critmod:'+10.0%',
        description:`
        +90% DMG vs Marked <br>
        +30% DMG vs Human <br>
        `,
    },


    {
        num:`1`,
        id: 'bhcombat_desc1e',
        position: '123ally_12enemy',
        name: 'Collect Bounty 5',
        attacktype:`Melee`,
        accuracy:'105',
        critmod:'+11.0%',
        description:`
        +90% DMG vs Marked <br>
        +35% DMG vs Human <br>
        `,
    },

     //Mark for Death

     {
        num:`2`,
        id: 'bhcombat_desc2a',
        position: '1234ally_1234enemy',
        name: 'Mark for Death 1',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-100%`,
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -10% PROT (3 rds) (100% Base)<br>
        Buff Self<br>
        +3 SPD (2 rds)
        `,
    },

    {
        num:`2`,
        id: 'bhcombat_desc2b',
        position: '1234ally_1234enemy',
        name: 'Mark for Death 2',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-100%`,
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -12.5% PROT (3 rds) (110% Base)<br>
        Buff Self<br>
        +3 SPD (2 rds)
        `,
    },

    {
        num:`2`,
        id: 'bhcombat_desc2c',
        position: '1234ally_1234enemy',
        name: 'Mark for Death 3',
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-100%`,
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -15% PROT (3 rds) (120% Base)<br>
        Buff Self<br>
        +4 SPD (2 rds)
        `,
    },

    {
        num:`2`,
        id: 'bhcombat_desc2d',
        position: '1234ally_1234enemy',
        name: 'Mark for Death 4',
        attacktype:`Ranged`,
        accuracy:'115',
        dmgmod:`-100%`,
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -17.5% PROT (3 rds) (130% Base)<br>
        Buff Self<br>
        +4 SPD (2 rds)
        `,
    },

    {
        num:`2`,
        id: 'bhcombat_desc2e',
        position: '1234ally_1234enemy',
        name: 'Mark for Death 5',
        attacktype:`Ranged`,
        accuracy:'120',
        dmgmod:`-100%`,
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -20% PROT (3 rds) (140% Base)<br>
        Buff Self<br>
        +5 SPD (2 rds)
        `,
    },

    //Come Hither

    {
        num:`3`,
        id: 'bhcombat_desc3a',
        position: '1234ally_34enemy',
        name: "Come Hither 1",
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:'-80%',
        description:`
        Pull2a<br>
        Mark Target (2 rds) <br>
        `
    },

    {
        num:`3`,
        id: 'bhcombat_desc3b',
        position: '1234ally_34enemy',
        name: `Come Hither 2`,
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:'-80%',
        critmod:`+1.0%`,   
        description:`
        Pull2b<br>
        Mark Target (2 rds) <br>
        `
    },


    {
        num:`3`,
        id: 'bhcombat_desc3c',
        position: '1234ally_34enemy',
        name: `Come Hither 3`,
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:'-80%',
        critmod:`+2.0%`,   
        description:`
        Pull2c<br>
        Mark Target (2 rds) <br>
        `
    },


    {
        num:`3`,
        id: 'bhcombat_desc3d',
        position: '1234ally_34enemy',
        name: `Come Hither 4`,
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:'-80%',
        critmod:`+3.0%`,   
        description:`
        Pull2d<br>
        Mark Target (2 rds) <br>
        `
    },


    {
        num:`3`,
        id: 'bhcombat_desc3e',
        position: '1234ally_34enemy',
        name: `Come Hither 5`,
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:'-80%',
        critmod:`+4.0%`,   
        description:`
        Pull2e<br>
        Mark Target (2 rds) <br>
        `
    },

    //Uppercut

    {
        num:`4`,
        id: 'bhcombat_desc4a',
        position: '12ally_12enemy',
        name: 'Uppercut 1',
        attacktype:`Melee`,        
        accuracy:'90',
        dmgmod:'-67%',
        description:`
        Knockback2a<br>
        Stun2<br>
        `,
    },

    {
        num:`4`,
        id: 'bhcombat_desc4b',
        position: '12ally_12enemy',
        name: 'Uppercut 2',
        attacktype:`Melee`,        
        accuracy:'95',
        dmgmod:'-67%',
        critmod:`+1.0%`,          
        description:`
        Knockback2b<br>
        Stun3<br>
        `,
    },

    {
        num:`4`,
        id: 'bhcombat_desc4c',
        position: '12ally_12enemy',
        name: 'Uppercut 3',
        attacktype:`Melee`,        
        accuracy:'100',
        dmgmod:'-67%',
        critmod:`+2.0%`,          
        description:`
        Knockback2c<br>
        Stun4<br>
        `,
    },

    {
        num:`4`,
        id: 'bhcombat_desc4d',
        position: '12ally_12enemy',
        name: 'Uppercut 4',
        attacktype:`Melee`,        
        accuracy:'90',
        dmgmod:'-67%',
        critmod:`+3.0%`,          
        description:`
        Knockback2d<br>
        Stun5<br>
        `,
    },

    {
        num:`4`,
        id: 'bhcombat_desc4e',
        position: '12ally_12enemy',
        name: 'Uppercut 5',
        attacktype:`Melee`,        
        accuracy:'90',
        dmgmod:'-67%',
        critmod:`+4.0%`,          
        description:`
        Knockback2e<br>
        Stun6<br>
        `,
    },


    //Flashbang

    {
        num:`5`,
        id: 'bhcombat_desc5a',
        position: '234ally_234enemy',
        name: 'Flashbang 1',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:'-100%',        
        description:`
        Stun3<br>
        Shuffle1
        `,
    },

    {
        num:`5`,
        id: 'bhcombat_desc5b',
        position: '234ally_234enemy',
        name: 'Flashbang 2',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:'-100%',        
        description:`
        Stun4<br>
        Shuffle2
        `,
    },

    {
        num:`5`,
        id: 'bhcombat_desc5c',
        position: '234ally_234enemy',
        name: 'Flashbang 3',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:'-100%',        
        description:`
        Stun5<br>
        Shuffle3
        `,
    },

    {
        num:`5`,
        id: 'bhcombat_desc5d',
        position: '234ally_234enemy',
        name: 'Flashbang 4',
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:'-100%',        
        description:`
        Stun6<br>
        Shuffle4
        `,
    },

    {
        num:`5`,
        id: 'bhcombat_desc5e',
        position: '234ally_234enemy',
        name: 'Flashbang 5',
        attacktype:`Ranged`,
        accuracy:'115',
        dmgmod:'-100%',        
        description:`
        Stun7<br>
        Shuffle5
        `,
    },

    //Finish Him

    {
        num:`6`,
        id: 'bhcombat_desc6a',
        position: '123ally_123enemy',
        name: 'Finish Him 1',
        attacktype:`Melee`,
        accuracy:'85',
        critmod:'+5.0%',
        description:`
        +25% DMG vs Stunned<br>
        `,
    },

    {
        num:`6`,
        id: 'bhcombat_desc6b',
        position: '123ally_123enemy',
        name: 'Finish Him 2',
        attacktype:`Melee`,
        accuracy:'90',
        critmod:'+6.0%',
        description:`
        +33% DMG vs Stunned<br>
        `,
    },

    {
        num:`6`,
        id: 'bhcombat_desc6c',
        position: '123ally_123enemy',
        name: 'Finish Him 3',
        attacktype:`Melee`,
        accuracy:'95',
        critmod:'+7.0%',
        description:`
        +40% DMG vs Stunned<br>
        `,
    },

    {   
        num:`6`,
        id: 'bhcombat_desc6d',
        position: '123ally_123enemy',
        name: 'Finish Him 4',
        attacktype:`Melee`,
        accuracy:'100',
        critmod:'+8.0%',
        description:`
        +50% DMG vs Stunned<br>
        `,
    },

    {
        num:`6`,
        id: 'bhcombat_desc6e',
        position: '123ally_123enemy',
        name: 'Finish Him 5',
        attacktype:`Melee`,
        accuracy:'105',
        critmod:'+9.0%',
        description:`
        +60% DMG vs Stunned<br>
        `,
    },




    //Caltrops

    {
        num:`7`,
        id: 'bhcombat_desc7a',
        position: '234ally_34enemy',
        name: 'Caltrops 1',
        attacktype:`Ranged`,
        accuracy:'90 / DMG Mod: -95% / CRIT Mod: +5.0%',
        description:`
        MidBld1 <br>
        Debuff Target<br>
        -4 SPD (3 rds) (100% Base)<br>
        +10% DMG Taken (3 rds) (100% Base)<br>
        `,
    },

    {
        num:`7`,
        id: 'bhcombat_desc7b',
        position: '234ally_34enemy',
        name: 'Caltrops 2',
        attacktype:`Ranged`,
        accuracy:'95 / DMG Mod: -95% / CRIT Mod: +6.0%',
        description:`
        MidBld2 <br>
        Debuff Target<br>
        -5 SPD (3 rds) (110% Base)<br>
        +12% DMG Taken (3 rds) (110% Base)<br>
        `,
    },

    {
        num:`7`,
        id: 'bhcombat_desc7c',
        position: '234ally_34enemy',
        name: 'Caltrops 3',
        attacktype:`Ranged`,
        accuracy:'100 / DMG Mod: -95% / CRIT Mod: +7.0%',
        description:`
        MidBld3 <br>
        Debuff Target<br>
        -6 SPD (3 rds) (120% Base)<br>
        +15% DMG Taken (3 rds) (120% Base)<br>
        `,
    },

    {
        num:`7`, 
        id: 'bhcombat_desc7d',
        position: '234ally_34enemy',
        name: 'Caltrops 4',
        attacktype:`Ranged`,
        accuracy:'105 / DMG Mod: -95% / CRIT Mod: +8.0%',
        description:`
        MidBld4 <br>
        Debuff Target<br>
        -7 SPD (3 rds) (130% Base)<br>
        +18% DMG Taken (3 rds) (130% Base)<br>
        `,
    },


    {
        num:`7`,
        id: 'bhcombat_desc7e',
        position: '234ally_34enemy',
        name: 'Caltrops 5',
        attacktype:`Ranged`,
        accuracy:'110 / DMG Mod: -95% / CRIT Mod: +9.0%',
        description:`
        MidBld5 <br>
        Debuff Target<br>
        -8 SPD (3 rds) (140% Base)<br>
        +20% DMG Taken (3 rds) (140% Base)<br>
        `,
    },
]
const CrusaderCombatSkills = [
    //Crusader

    //Smite
    {
        num:`1`,
        extratext:`Always Unlocked`,
        id: 'cruscombat_desc1a',
        position: '12ally_12enemy',
        name: 'Smite 1',
        attacktype:`Melee`,
        accuracy:'85',
        description:`
        +15% DMG vs Unholy
        `,
    },

    {
        num:`1`,
        id: 'cruscombat_desc1b',
        position: '12ally_12enemy',
        name: 'Smite 2',
        attacktype:`Melee`,
        accuracy:'90',
        critmod:'+1.0%',
        description:`
        +20% DMG vs Unholy
        `,
    },

    {
        num:`1`,
        id: 'cruscombat_desc1c',
        position: '12ally_12enemy',
        name: 'Smite 3',
        attacktype:`Melee`,
        accuracy:'95',
        critmod:'+2.0%',
        description:`
        +25% DMG vs Unholy
        `,
    },

    {
        num:`1`,
        id: 'cruscombat_desc1d',
        position: '12ally_12enemy',
        name: 'Smite 4',
        attacktype:`Melee`,
        accuracy:'100',
        critmod:'+3.0%',
        description:`
        +30% DMG vs Unholy
        `,
    },


    {
        num:`1`,
        id: 'cruscombat_desc1e',
        position: '12ally_12enemy',
        name: 'Smite 5',
        attacktype:`Melee`,
        accuracy:'105',
        critmod:'+4.0%',
        description:`
        +35% DMG vs Unholy
        `,
    },

     //Zealous Accusation

     {
        num:`2`,
        id: 'cruscombat_desc2a',
        position: '12ally_12cleaveenemy',
        name: 'Zealous Accusation 1',
        attacktype:`Ranged`,
        dmgmod:`-40%`,
        accuracy:'85',
        critmod:`-4.0%`,
    },

    {
        num:`2`,
        id: 'cruscombat_desc2b',
        position: '12ally_12cleaveenemy',
        name: 'Zealous Accusation 2',
        attacktype:`Ranged`,
        dmgmod:`-40%`,
        accuracy:'90',
        critmod:`-3.0%`,
    },

    {
        num:`2`,
        id: 'cruscombat_desc2c',
        position: '12ally_12cleaveenemy',
        name: 'Zealous Accusation 3',
        attacktype:`Ranged`,
        dmgmod:`-40%`,
        accuracy:'95',
        critmod:`-2.0%`,
    },

    {
        num:`2`,
        id: 'cruscombat_desc2d',
        position: '12ally_12cleaveenemy',
        name: 'Zealous Accusation 4',
        attacktype:`Ranged`,
        dmgmod:`-40%`,
        accuracy:'100',
        critmod:`-1.0%`,
    },

    {
        num:`2`,
        id: 'cruscombat_desc2e',
        position: '12ally_12cleaveenemy',
        name: 'Zealous Accusation 5',
        attacktype:`Ranged`,
        dmgmod:`-40%`,
        accuracy:'105',
    },

    //Stunning Blow
    {
        num:`3`,
        id: 'cruscombat_desc3a',
        position: '12ally_12enemy',
        name: 'Stunning Blow 1',
        attacktype:`Melee`,
        dmgmod:`-50%`,
        accuracy:'90',
        description:`
        Stun2
        `
    },

    {
        num:`3`,
        id: 'cruscombat_desc3b',
        position: '12ally_12enemy',
        name: 'Stunning Blow 2',
        attacktype:`Melee`,
        accuracy:'95',        
        dmgmod:`-50%`,
        critmod:`+1.0%`,
        description:`
        Stun3
        `
    },

    {
        num:`3`,
        id: 'cruscombat_desc3c',
        position: '12ally_12enemy',
        name: 'Stunning Blow 3',
        attacktype:`Melee`,
        dmgmod:`-50%`,
        accuracy:'100',
        critmod:`+2.0%`,
        description:`
        Stun4
        `
    },

    {
        num:`3`,
        id: 'cruscombat_desc3d',
        position: '12ally_12enemy',
        name: 'Stunning Blow 4',
        attacktype:`Melee`,
        dmgmod:`-50%`,
        accuracy:'105',
        critmod:`+3.0%`,
        description:`
        Stun5
        `
    },

    {
        num:`3`,
        id: 'cruscombat_desc3e',
        position: '12ally_12enemy',
        name: 'Stunning Blow 5',
        attacktype:`Melee`,
        dmgmod:`-50%`,
        accuracy:'110',
        critmod:`+4.0%`,
        description:`
        Stun6
        `
    },

    //Bulwark of Faith
    {
        num:`4`,
        id: 'cruscombat_desc4a',
        uses:`1`,
        position: '12hero',
        issingle:true,
        name: 'Bulwark of Faith 1',
        description:`
        Torch +24<br>
        Mark Self (1 Battle)<br>
        Buff Self<br>
        +20% PROT (1 Battle)
        `
    },

    {
        num:`4`,
        id: 'cruscombat_desc4b',
        uses:`1`,
        position: '12hero',
        issingle:true,
        name: 'Bulwark of Faith 2',
        description:`
        Torch +24<br>
        Mark Self (1 Battle)<br>
        Buff Self<br>
        +22% PROT (1 Battle)
        `
    },

    {
        num:`4`,
        id: 'cruscombat_desc4c',
        uses:`1`,
        position: '12hero',
        issingle:true,
        name: 'Bulwark of Faith 3',
        description:`
        Torch +24<br>
        Mark Self (1 Battle)<br>
        Buff Self<br>
        +25% PROT (1 Battle)
        `
    },

    {
        num:`4`,
        id: 'cruscombat_desc4d',
        uses:`1`,
        position: '12hero',
        issingle:true,
        name: 'Bulwark of Faith 4',
        description:`
        Torch +24<br>
        Mark Self (1 Battle)<br>
        Buff Self<br>
        +28% PROT (1 Battle)
        `
    },

    {
        num:`4`,
        id: 'cruscombat_desc4e',
        uses:`1`,
        position: '12hero',
        issingle:true,
        name: 'Bulwark of Faith 5',
        description:`
        Torch +24<br>
        Mark Self (1 Battle)<br>
        Buff Self<br>
        +30% PROT (1 Battle)
        `
    },

    //Battle Heal

    {
        num:`5`,
        id: 'cruscombat_desc5a',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Battle Heal 1',
        description:`
        Target Hero: <br>
        Heal 2-3
        `,
    },

    {
        num:`5`,
        id: 'cruscombat_desc5b',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Battle Heal 2',
        description:`
        Target Hero: <br>
        Heal 3-3
        `,
    },

    {
        num:`5`,
        id: 'cruscombat_desc5c',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Battle Heal 3',
        description:`
        Target Hero: <br>
        Heal 3-4
        `,
    },

    {
        num:`5`,
        id: 'cruscombat_desc5d',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Battle Heal 4',
        description:`
        Target Hero: <br>
        Heal 4-5
        `,
    },

    {
        num:`5`,
        id: 'cruscombat_desc5e',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Battle Heal 5',
        description:`
        Target Hero: <br>
        Heal 5-6
        `,
    },

    //Holy Lance

    {
        num:`6`,
        id: 'cruscombat_desc6a',
        position: '34ally_234enemy',
        name: 'Holy Lance 1',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'85',
        critmod:`+6.5%`,
        description:`
        +15% DMG vs Unholy
        `,
    },

    {
        num:`6`,
        id: 'cruscombat_desc6b',
        position: '34ally_234enemy',
        name: 'Holy Lance 2',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'90',
        critmod:`+7.5%`,
        description:`
        +20% DMG vs Unholy
        `,
    },

    {
        num:`6`,
        id: 'cruscombat_desc6c',
        position: '34ally_234enemy',
        name: 'Holy Lance 3',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'95',
        critmod:`+8.5%`,
        description:`
        +25% DMG vs Unholy
        `,
    },

    {   
        num:`6`,
        id: 'cruscombat_desc6d',
        position: '34ally_234enemy',
        name: 'Holy Lance 4',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'100',
        critmod:`+9.5%`,
        description:`
        +30% DMG vs Unholy
        `,
    },

    {
        num:`6`,
        id: 'cruscombat_desc6e',
        position: '34ally_234enemy',
        name: 'Holy Lance 5',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'105',
        critmod:`+10.5%`,
        description:`
        +35% DMG vs Unholy
        `,
    },




    //Insp Cry

    {
        num:`7`,
        id: 'cruscombat_desc7a',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Inspiring Cry 1',
        description:"Target Hero: <br> Heal 1-1 <br> Stress -5 <br> Torch1",
    },

    {
        num:`7`,
        id: 'cruscombat_desc7b',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Inspiring Cry 2',
        description:"Target Hero: <br> Heal 1-1 <br> Stress -5 <br> Torch2",
    },

    {
        num:`7`,
        id: 'cruscombat_desc7c',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Inspiring Cry 3',
        description:"Target Hero: <br> Heal 1-2 <br> Stress -6 <br> Torch3",
    },

    {
        num:`7`, 
        id: 'cruscombat_desc7d',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Inspiring Cry 4',
        description:"Target Hero: <br> Heal 1-2 <br> Stress -7 <br> Torch4",
    },


    {
        num:`7`,
        id: 'cruscombat_desc7e',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Inspiring Cry 5',
        description:"Target Hero: <br> Heal 2-2 <br> Stress -8 <br> Torch5",
    },
]
const FlagellantCombatSkills = [

    //Punish
    {
        num:`1`,
        extratext:`Always Unlocked`,
        id: 'flagcombat_desc1a',
        position: '12ally_12enemy',
        name: 'Punish 1',
        attacktype:`Melee`,
        accuracy:'95 / CRIT Mod: +5.0%',
        description:`
        Bleed (100% Base) <br> 4pts/rd for 3 rds<br>
        BldDbf1

        `,
    },

    {
        num:`1`,
        id: 'flagcombat_desc1b',
        position: '12ally_12enemy',
        name: 'Punish 2',
        attacktype:`Melee`,
        accuracy:'100 / CRIT Mod: +6.0%',
        description:`
        Bleed (110% Base) <br> 4pts/rd for 3 rds<br>
        BldDbf2        
        `,
    },

    {
        num:`1`,
        id: 'flagcombat_desc1c',
        position: '12ally_12enemy',
        name: 'Punish 3',
        attacktype:`Melee`,
        accuracy:'105 / CRIT Mod: +7.0%',
        description:`
        Bleed (120% Base) <br> 5pts/rd for 3 rds<br>
        BldDbf3
        `,
    },

    {
        num:`1`,
        id: 'flagcombat_desc1d',
        position: '12ally_12enemy',
        name: 'Punish 4',
        attacktype:`Melee`,
        accuracy:'110 / CRIT Mod: +8.0%',
        description:`
        Bleed (130% Base) <br> 5pts/rd for 3 rds<br>
        BldDbf4
        `,
    },


    {
        num:`1`,
        id: 'flagcombat_desc1e',
        position: '12ally_12enemy',
        name: 'Punish 5',
        attacktype:`Melee`,
        accuracy:'115 / CRIT Mod: +9.0%',
        description:`
        Bleed (140% Base) <br> 6pts/rd for 3 rds<br>
        BldDbf5
        `,
    },

     //Rain of Sorrows

     {
        num:`2`,
        id: 'flagcombat_desc2a',
        position: '12ally_34cleaveenemy',
        name: 'Rain of Sorrows 1',
        attacktype:`Melee`,
        accuracy:'95 / DMG Mod: -67% / CRIT Mod: +2.0%',
        description:`
        BigBld1<br>
        BldDbf1   
        `,
    },

    {
        num:`2`,
        id: 'flagcombat_desc2b',
        position: '12ally_34cleaveenemy',
        name: 'Rain of Sorrows 2',
        attacktype:`Melee`,
        accuracy:'100 / DMG Mod: -67% / CRIT Mod: +3.0%',
        description:`
        BigBld2<br>
        BldDbf2   
        `,
    },

    {
        num:`2`,
        id: 'flagcombat_desc2c',
        position: '12ally_34cleaveenemy',
        name: 'Rain of Sorrows 3',
        attacktype:`Melee`,
        accuracy:'105 / DMG Mod: -67% / CRIT Mod: +4.0%',
        description:`
        BigBld3<br>
        BldDbf3   
        `,
    },

    {
        num:`2`,
        id: 'flagcombat_desc2d',
        position: '12ally_34cleaveenemy',
        name: 'Rain of Sorrows 4',
        attacktype:`Melee`,
        accuracy:'110 / DMG Mod: -67% / CRIT Mod: +5.0%',
        description:`
        BigBld4<br>
        BldDbf4   
        `,
    },

    {
        num:`2`,
        id: 'flagcombat_desc2e',
        position: '12ally_34cleaveenemy',
        name: 'Rain of Sorrows 5',
        attacktype:`Melee`,
        accuracy:'115 / DMG Mod: -67% / CRIT Mod: +6.0%',
        description:`
        BigBld5<br>
        BldDbf5   
        `,
    },

    //Exsanguinate

    {
        num:`3`,
        id: 'flagcombat_desc3a',
        uses:`3<br>Valid Below 40% HP`,
        position: '12ally_12enemy',
        name: 'Exsanguinate 1',
        attacktype:`Melee`,
        accuracy:'90 / CRIT Mod: +3.0%',
        description:`
        Bleed (100% Base) <br> 5pts/rd for 3 rds<br>
        On Attack Hit:<br>
        Self: Heal 35% Max HP<br>
        FlagExhaust  

        `
    },

    {
        num:`3`,
        id: 'flagcombat_desc3b',
        uses:`3<br>Valid Below 40% HP`,
        position: '12ally_12enemy',
        name: 'Exsanguinate 2',
        attacktype:`Melee`,
        accuracy:'95 / CRIT Mod: +4.0%',
        description:`
        Bleed (110% Base) <br> 6pts/rd for 3 rds<br>
        On Attack Hit:<br>
        Self: Heal 39% Max HP<br>
        FlagExhaust  
        `
    },


    {
        num:`3`,
        id: 'flagcombat_desc3c',
        uses:`3<br>Valid Below 40% HP`,
        position: '12ally_12enemy',
        name: 'Exsanguinate 3',
        attacktype:`Melee`,
        accuracy:'100 / CRIT Mod: +5.0%',
        description:`
        Bleed (120% Base) <br> 7pts/rd for 3 rds<br>
        On Attack Hit:<br>
        Self: Heal 42% Max HP<br>
        FlagExhaust  
        `
    },


    {
        num:`3`,
        id: 'flagcombat_desc3d',
        uses:`3<br>Valid Below 40% HP`,
        position: '12ally_12enemy',
        name: 'Exsanguinate 4',
        attacktype:`Melee`,
        accuracy:'105 / CRIT Mod: +6.0%',
        description:`
        Bleed (130% Base) <br> 8pts/rd for 3 rds<br>
        On Attack Hit:<br>
        Self: Heal 46% Max HP<br>
        FlagExhaust  
        `
    },


    {
        num:`3`,
        id: 'flagcombat_desc3e',
        uses:`3<br>Valid Below 40% HP`,
        position: '12ally_12enemy',
        name: 'Exsanguinate 5',
        attacktype:`Melee`,
        accuracy:'110 / CRIT Mod: +7.0%',
        description:`
        Bleed (140% Base) <br> 9pts/rd for 3 rds<br>
        On Attack Hit:<br>
        Self: Heal 50% Max HP<br>
        FlagExhaust  
        `
    },

    //Reclaim

    {
        num:`4`,
        id: 'flagcombat_desc4a',
        extratext:`Cannot Target Self`,
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Reclaim 1',
        description:`
        Target Hero:<br>
        Heal 2 pts/rd for 2 rds<br>
        Self:<br>
        Bleed (120% Base)<br>3pts/rd for 3 rds<br>
        `
    },

    {
        num:`4`,
        id: 'flagcombat_desc4b',
        extratext:`Cannot Target Self`,
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Reclaim 2',
        description:`
        Target Hero:<br>
        Heal 2 pts/rd for 3 rds<br>
        Self:<br>
        Bleed (130% Base)<br>3pts/rd for 3 rds<br>
        `
    },

    {
        num:`4`,
        id: 'flagcombat_desc4c',
        extratext:`Cannot Target Self`,
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Reclaim 3',
        description:`
        Target Hero:<br>
        Heal 3 pts/rd for 2 rds<br>
        Self:<br>
        Bleed (140% Base)<br>4pts/rd for 3 rds<br>
        `
    },

    {
        num:`4`,
        id: 'flagcombat_desc4d',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        extratext:`Cannot Target Self`,
        name: 'Reclaim 4',
        description:`
        Target Hero:<br>
        Heal 3 pts/rd for 3 rds<br>
        Self:<br>
        Bleed (150% Base)<br>4pts/rd for 3 rds<br>
        `
    },

    {
        num:`4`,
        id: 'flagcombat_desc4e',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        extratext:`Cannot Target Self`,
        name: 'Reclaim 5',
        description:`
        Target Hero:<br>
        Heal 4 pts/rd for 3 rds<br>
        Self:<br>
        Bleed (160% Base)<br>5pts/rd for 3 rds<br>
        `
    },


    //Redeem

    {
        num:`5`,
        uses:`2<br>Valid Below 40% HP<br>Cannot Target Self`,
        id: 'flagcombat_desc5a',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Redeem 1',
        description:`
        Target Hero: <br>
        Heal 33% Max HP<br>
        Self: Heal 35% Max HP<br>
        FlagExhaust       
        `,
    },

    {
        num:`5`,
        uses:`2<br>Valid Below 40% HP<br>Cannot Target Self`,
        id: 'flagcombat_desc5b',
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Redeem 2',
        description:`
        Target Hero: <br>
        Heal 35% Max HP<br>
        Self: Heal 39% Max HP<br>
        FlagExhaust
        `,
    },

    {
        num:`5`,
        id: 'flagcombat_desc5c',
        uses:`2<br>Valid Below 40% HP<br>Cannot Target Self`,
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Redeem 3',
        description:`
        Target Hero: <br>
        Heal 37.5% Max HP<br>
        Self: Heal 42% Max HP<br>
        FlagExhaust  
        `,
    },

    {
        num:`5`,
        id: 'flagcombat_desc5d',
        uses:`2<br>Valid Below 40% HP<br>Cannot Target Self`,
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Redeem 4',
        description:`
        Target Hero: <br>
        Heal 40% Max HP<br>
        Self: Heal 46% Max HP<br>
        FlagExhaust
        `,
    },

    {
        num:`5`,
        id: 'flagcombat_desc5e',
        uses:`2<br>Valid Below 40% HP<br>Cannot Target Self`,
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Redeem 5',
        description:`
        Target Hero: <br>
        Heal 43% Max HP<br>
        Self: Heal 50% Max HP<br>
        FlagExhaust       
        `,
    },

    //Endure

    {
        num:`6`,
        id: 'flagcombat_desc6a',
        isdoubleicon: true,
        extratext:`Cannot Target Self`,
        position: '1234ally_1234heal',
        name: 'Endure 1',
        description:`
        Target Hero:<br>
        Stress -10<br>
        Self:<br>
        Stress +10<br>
        Buff Self <br>
        +1 SPD (4 rds)
        `,
    },

    {
        num:`6`,
        id: 'flagcombat_desc6b',
        isdoubleicon: true,
        extratext:`Cannot Target Self`,
        position: '1234ally_1234heal',
        name: 'Endure 2',
        description:`
        Target Hero:<br>
        Stress -11<br>
        Self:<br>
        Stress +9<br>
        Buff Self <br>
        +1 SPD (4 rds)
        `,
    },

    { 
        num:`6`,
        id: 'flagcombat_desc6c',
        isdoubleicon: true,
        extratext:`Cannot Target Self`,
        position: '1234ally_1234heal',
        name: 'Endure 3',
        description:`
        Target Hero:<br>
        Stress -12<br>
        Self:<br>
        Stress +8<br>
        Buff Self <br>
        +2 SPD (4 rds)
        `,
    },

    {   
        num:`6`,
        id: 'flagcombat_desc6d',
        isdoubleicon: true,
        extratext:`Cannot Target Self`,
        position: '1234ally_1234heal',
        name: 'Endure 4',
        description:`
        Target Hero:<br>
        Stress -13<br>
        Self:<br>
        Stress +7<br>
        Buff Self <br>
        +2 SPD (4 rds)
        `,
    },

    {
        num:`6`,
        id: 'flagcombat_desc6e',
        isdoubleicon: true,
        extratext:`Cannot Target Self`,
        position: '1234ally_1234heal',
        name: 'Endure 5',
        description:`
        Target Hero:<br>
        Stress -14<br>
        Self:<br>
        Stress +6<br>
        Buff Self <br>
        +3 SPD (4 rds)
        `,
    },




    //Suffer

    {
        num:`7`,
        id: 'flagcombat_desc7a',
        extratext:`Cannot Target Self`,
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Suffer 1',
        description:`
        Target Hero: <br>
        Clear Mark <br>
        Transfer Bleed & Blight to User <br> 
        Self: Mark (2 rds)<br>
        Buff Self<br>
        -20% Stress (4 rds)<br>
        +6% Death Blow Resist (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'flagcombat_desc7b',
        extratext:`Cannot Target Self`,
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Suffer 2',
        description:`
        Target Hero <br>
        Clear Mark <br>
        Transfer Bleed & Blight to User <br> 
        Self: Mark (2 rds)<br>
        Buff Self<br>
        -25% Stress (4 rds)<br>
        +7% Death Blow Resist (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'flagcombat_desc7c',
        extratext:`Cannot Target Self`,
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Suffer 3',
        description:`
        Target Hero <br>
        Clear Mark <br>
        Transfer Bleed & Blight to User <br> 
        Self: Mark (2 rds)<br>
        Buff Self<br>
        -30% Stress (4 rds)<br>
        +8% Death Blow Resist (4 rds)<br>
        `,
    },

    {
        num:`7`, 
        id: 'flagcombat_desc7d',
        extratext:`Cannot Target Self`,
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Suffer 4',
        description:`
        Target Hero <br>
        Clear Mark <br>
        Transfer Bleed & Blight to User <br> 
        Self: Mark (2 rds)<br>
        Buff Self<br>
        -35% Stress (4 rds)<br>
        +9% Death Blow Resist (4 rds)<br>
        `,
    },


    {
        num:`7`,
        id: 'flagcombat_desc7e',
        extratext:`Cannot Target Self`,
        isdoubleicon: true,
        position: '1234ally_1234heal',
        name: 'Suffer 5',
        description:`
        Target Hero <br>
        Clear Mark <br>
        Transfer Bleed & Blight to User <br> 
        Self: Mark (2 rds)<br>
        Buff Self<br>
        -40% Stress (4 rds)<br>
        +10% Death Blow Resist (4 rds)<br>
        `,
    },
]
const GraveRobberCombatSkills = [

    //Pick to the Face
    {
        num:`1`,
        id: 'grcombat_desc1a',
        position: '123ally_12enemy',
        name: 'Pick to the Face 1',
        attacktype:`Melee`,
        accuracy:'90',
        dmgmod:`-15%`,
        critmod:'+1.0%',
        description:`
        Armor Piercing
        `,
    },

    {
        num:`1`,
        id: 'grcombat_desc1b',
        position: '123ally_12enemy',
        name: 'Pick to the Face 2',
        attacktype:`Melee`,
        accuracy:'95',
        dmgmod:`-15%`,
        critmod:'+2.0%',
        description:`
        Armor Piercing
        `,
    },

    {
        num:`1`,
        id: 'grcombat_desc1c',
        position: '123ally_12enemy',
        name: 'Pick to the Face 3',
        attacktype:`Melee`,
        accuracy:'100',
        dmgmod:`-15%`,
        critmod:'+3.0%',
        description:`
        Armor Piercing
        `,
    },

    {
        num:`1`,
        id: 'grcombat_desc1d',
        position: '123ally_12enemy',
        name: 'Pick to the Face 4',
        attacktype:`Melee`,
        accuracy:'105',
        dmgmod:`-15%`,
        critmod:'+4.0%',
        description:`
        Armor Piercing
        `,
    },


    {
        num:`1`,
        id: 'grcombat_desc1e',
        position: '123ally_12enemy',
        name: 'Pick to the Face 5',
        attacktype:`Melee`,
        accuracy:'110',
        dmgmod:`-15%`,
        critmod:'+5.0%',
        description:`
        Armor Piercing
        `,
    },

     //Lunge

     {
        num:`2`,
        id: 'grcombat_desc2a',
        position: '34ally_123enemy',
        name: 'Lunge 1',
        attacktype:`Melee`,
        movement:`Forward 2`,
        accuracy:'95',
        dmgmod:`+40%`,
        critmod:'+8.0%',
        description:`
        +20% DMG vs Blighted
        `,
    },

    {
        num:`2`,
        id: 'grcombat_desc2b',
        position: '34ally_123enemy',
        name: 'Lunge 2',
        attacktype:`Melee`,
        movement:`Forward 2`,
        accuracy:'100',
        dmgmod:`+40%`,
        critmod:'+9.0%',
        description:`
        +23% DMG vs Blighted
        `,
    },

    {
        num:`2`,
        id: 'grcombat_desc2c',
        position: '34ally_123enemy',
        name: 'Lunge 3',
        attacktype:`Melee`,
        movement:`Forward 2`,
        accuracy:'105',
        dmgmod:`+40%`,
        critmod:'+10.0%',
        description:`
        +26% DMG vs Blighted
        `,
    },

    {
        num:`2`,
        id: 'grcombat_desc2d',
        position: '34ally_123enemy',
        name: 'Lunge 4',
        attacktype:`Melee`,
        movement:`Forward 2`,
        accuracy:'110',
        dmgmod:`+40%`,
        critmod:'+11.0%',
        description:`
        +29% DMG vs Blighted
        `,
    },

    {
        num:`2`,
        id: 'grcombat_desc2e',
        position: '34ally_123enemy',
        name: 'Lunge 5',
        attacktype:`Melee`,
        movement:`Forward 2`,
        accuracy:'115',
        dmgmod:`+40%`,
        critmod:'+12.0%',
        description:`
        +33% DMG vs Blighted
        `,
    },

    //Flashing Daggers

    {
        num:`3`,
        id: 'grcombat_desc3a',
        position: '234ally_23cleaveenemy',
        name: "Flashing Daggers 1",
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:`-33%`,
        critmod:'-5.0%',
        description:`
        BldDbf1 
        `
    },

    {
        num:`3`,
        id: 'grcombat_desc3b',
        position: '234ally_23cleaveenemy',
        name: `Flashing Daggers 2`,
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-33%`,
        critmod:'-4.0%',
        description:`
        BldDbf2
        `
    },


    {
        num:`3`,
        id: 'grcombat_desc3c',
        position: '234ally_23cleaveenemy',
        name: `Flashing Daggers 3`,
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-33%`,
        critmod:'-3.0%',
        description:`
        BldDbf3 
        `
    },


    {
        num:`3`,
        id: 'grcombat_desc3d',
        position: '234ally_23cleaveenemy',
        name: `Flashing Daggers 4`,
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-33%`,
        critmod:'-2.0%',
        description:`
        BldDbf4
        `
    },


    {
        num:`3`,
        id: 'grcombat_desc3e',
        position: '234ally_23cleaveenemy',
        name: `Flashing Daggers 5`,
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-33%`,
        critmod:'-1.0%',
        description:`
        BldDbf5 
        `
    },

    //Shadow Fade

    {
        num:`4`,
        extratext:`Always Unlocked`,
        id: 'grcombat_desc4a',
        position: '12hero',
        name: 'Shadow Fade 1',
        movement:`Back 2`,
        description:`
        Self: Stealth (2 rds)<br>
        Buff Self<br>
        +80% DMG (2 rds)<br>
        +10 DODGE (4 rds)<br>
        `,
    },

    {
        num:`4`,
        id: 'grcombat_desc4b',
        position: '12hero',
        name: 'Shadow Fade 2',
        movement:`Back 2`,
        description:`
        Self: Stealth (2 rds)<br>
        Buff Self<br>
        +85% DMG (2 rds)<br>
        +11 DODGE (4 rds)<br>
        `,
    },

    {
        num:`4`,
        id: 'grcombat_desc4c',
        position: '12hero',
        name: 'Shadow Fade 3',
        movement:`Back 2`,
        description:`
        Self: Stealth (2 rds)<br>
        Buff Self<br>
        +90% DMG (2 rds)<br>
        +12 DODGE (4 rds)<br>
        `,
    },

    {
        num:`4`,
        id: 'grcombat_desc4d',
        position: '12hero',
        name: 'Shadow Fade 4',
        movement:`Back 2`,
        description:`
        Self: Stealth (2 rds)<br>
        Buff Self<br>
        +95% DMG (2 rds)<br>
        +13 DODGE (4 rds)<br>
        `,
    },

    {
        num:`4`,
        id: 'grcombat_desc4e',
        position: '12hero',
        name: 'Shadow Fade 5',
        movement:`Back 2`,
        description:`
        Self: Stealth (2 rds)<br>
        Buff Self<br>
        +100% DMG (2 rds)<br>
        +15 DODGE (4 rds)<br>
        `,
    },


    //Thrown Dagger

    {
        num:`5`,
        id: 'grcombat_desc5a',
        position: '234ally_234enemy',
        name: 'Thrown Dagger 1',
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:`-10%`,
        critmod:'+8.0%',        
        description:`
        +25% DMG vs Marked<br>
        +20% DMG vs Blighted<br>
        On Attack Hit:<br>
        Buff Self<br>
        +5 ACC (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'grcombat_desc5b',
        position: '234ally_234enemy',
        name: 'Thrown Dagger 2',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-10%`,
        critmod:'+9.0%',        
        description:`
        +28% DMG vs Marked<br>
        +23% DMG vs Blighted<br>
        On Attack Hit:<br>
        Buff Self<br>
        +6 ACC (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'grcombat_desc5c',
        position: '234ally_234enemy',
        name: 'Thrown Dagger 3',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-10%`,
        critmod:'+10.0%',        
        description:`
        +32% DMG vs Marked<br>
        +26% DMG vs Blighted<br>
        On Attack Hit:<br>
        Buff Self<br>
        +7 ACC (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'grcombat_desc5d',
        position: '234ally_234enemy',
        name: 'Thrown Dagger 4',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-10%`,
        critmod:'+11.0%',        
        description:`
        +36% DMG vs Marked<br>
        +29% DMG vs Blighted<br>
        On Attack Hit:<br>
        Buff Self<br>
        +8 ACC (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'grcombat_desc5e',
        position: '234ally_234enemy',
        name: 'Thrown Dagger 5',
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-10%`,
        critmod:'+12.0%',        
        description:`
        +40% DMG vs Marked<br>
        +33% DMG vs Blighted<br>
        On Attack Hit:<br>
        Buff Self<br>
        +10 ACC (4 rds)
        `,
    },

    //Poison Darts

    {
        num:`6`,
        id: 'grcombat_desc6a',
        position: '234ally_1234enemy',
        name: 'Poison Darts 1',
        attacktype:`Ranged`,
        accuracy:'95 / DMG Mod: -60% / CRIT Mod: +7.5%',
        description:`
        Blight (100% Base)<br>
        2pts/rd for 4 rds<br>
        PsnDbf1<br>
        `,
    },

    {
        num:`6`,
        id: 'grcombat_desc6b',
        position: '234ally_1234enemy',
        name: 'Poison Darts 2',
        attacktype:`Ranged`,
        accuracy:'100 / DMG Mod: -60% / CRIT Mod: +8.5%',
        description:`
        Blight (110% Base)<br>
        2pts/rd for 4 rds<br>
        PsnDbf1<br>
        `,
    },

    {
        num:`6`,
        id: 'grcombat_desc6c',
        position: '234ally_1234enemy',
        name: 'Poison Darts 3',
        attacktype:`Ranged`,
        accuracy:'105 / DMG Mod: -60% / CRIT Mod: +9.5%',
        description:`
        Blight (120% Base)<br>
        3pts/rd for 4 rds<br>
        PsnDbf1<br>
        `,
    },

    {   
        num:`6`,
        id: 'grcombat_desc6d',
        position: '234ally_1234enemy',
        name: 'Poison Darts 4',
        attacktype:`Ranged`,
        accuracy:'110 / DMG Mod: -60% / CRIT Mod: +10.5%',
        description:`
        Blight (130% Base)<br>
        3pts/rd for 4 rds<br>
        PsnDbf1<br>
        `,
    },

    {
        num:`6`,
        id: 'grcombat_desc6e',
        position: '234ally_1234enemy',
        name: 'Poison Darts 5',
        attacktype:`Ranged`,
        accuracy:'115 / DMG Mod: -60% / CRIT Mod: +11.5%',
        description:`
        Blight (140% Base)<br>
        4pts/rd for 4 rds<br>
        PsnDbf1<br>
        `,
    },




    //Toxin Trickery 

    {
        num:`7`,
        id: 'grcombat_desc7a',
        position: '1234hero',
        name: 'Toxin Trickery 1',
        description:`
        Self: <br>
        DOTCURE <br>
        Buff Self<br>
        +9 DODGE (1 Battle)<br>
        +2 SPD (1 Battle)<br>        `,
    },

    {
        num:`7`,
        id: 'grcombat_desc7b',
        position: '1234hero',
        name: 'Toxin Trickery 2',
        description:`
        Self: <br>
        DOTCURE <br>
        Buff Self<br>
        +10 DODGE (1 Battle)<br>
        +2 SPD (1 Battle)<br> 
        `,
    },

    {
        num:`7`,
        id: 'grcombat_desc7c',
        position: '1234hero',
        name: 'Toxin Trickery 3',
        description:`
        Self: <br>
        DOTCURE <br>
        Buff Self<br>
        +11 DODGE (1 Battle)<br>
        +3 SPD (1 Battle)<br> 
        `,
    },

    {
        num:`7`, 
        id: 'grcombat_desc7d',
        position: '1234heal',
        name: 'Toxin Trickery 4',
        description:`
        Self: <br>
        DOTCURE <br>
        Buff Self<br>
        +12 DODGE (1 Battle)<br>
        +3 SPD (1 Battle)<br> 
        `,
    },


    {
        num:`7`,
        id: 'grcombat_desc7e',
        position: '1234hero',
        name: 'Toxin Trickery 5',
        description:`
        Self: <br>
        DOTCURE <br>
        Buff Self<br>
        +13 DODGE (1 Battle)<br>
        +4 SPD (1 Battle)<br> 
        `,
    },
]
const HellionCombatSkills = [

    //Wicked Hack
    {
        num:`1`,
        extratext:`Always Unlocked`,
        id: 'hellcombat_desc1a',
        position: '12ally_12enemy',
        name: 'Wicked Hack 1',
        attacktype:`Melee`,
        accuracy:'85',
        critmod:'+4.0%',
    },

    {
        num:`1`,
        id: 'hellcombat_desc1b',
        position: '12ally_12enemy',
        name: 'Wicked Hack 2',
        attacktype:`Melee`,
        accuracy:'90',
        critmod:'+5.0%',
    },

    {
        num:`1`,
        id: 'hellcombat_desc1c',
        position: '12ally_12enemy',
        name: 'Wicked Hack 3',
        attacktype:`Melee`,
        accuracy:'95',
        critmod:'+6.0%',
    },

    {
        num:`1`,
        id: 'hellcombat_desc1d',
        position: '12ally_12enemy',
        name: 'Wicked Hack 4',
        attacktype:`Melee`,
        accuracy:'100',
        critmod:'+7.0%',
    },

    {
        num:`1`,
        id: 'hellcombat_desc1e',
        position: '12ally_12enemy',
        name: 'Wicked Hack 5',
        attacktype:`Melee`,
        accuracy:'105',
        critmod:'+8.0%',
    },

     //Iron Swan

     {
        num:`2`,
        id: 'hellcombat_desc2a',
        position: '1ally_4enemy',
        name: 'Iron Swan 1',
        attacktype:`Melee`,
        accuracy:'85',
        critmod:`+5.0%`,
    },

    {
        num:`2`,
        id: 'hellcombat_desc2b',
        position: '1ally_4enemy',
        name: 'Iron Swan 2',
        attacktype:`Melee`,
        accuracy:'90',
        critmod:`+6.0%`,
    },

    {
        num:`2`,
        id: 'hellcombat_desc2c',
        position: '1ally_4enemy',
        name: 'Iron Swan 3',
        attacktype:`Melee`,
        accuracy:'95',
        critmod:`+7.0%`,
    },

    {
        num:`2`,
        id: 'hellcombat_desc2d',
        position: '1ally_4enemy',
        name: 'Iron Swan 4',
        attacktype:`Melee`,
        accuracy:'100',
        critmod:`+8.0%`,
    },

    {
        num:`2`,
        id: 'hellcombat_desc2e',
        position: '1ally_4enemy',
        name: 'Iron Swan 5',
        attacktype:`Melee`,
        accuracy:'105',
        critmod:`+9.0%`,
    },

    //Barbaric YAWP!

    {
        num:`3`,
        id: 'hellcombat_desc3a',
        uses:`3`,
        position: '12ally_12cleaveenemy',
        name: "Barbaric YAWP! 1",
        attacktype:`Melee`,
        accuracy:'95',
        dmgmod:`-100%`,
        description:`
        Stun3<br>
        HellionExhaust2
        `
    },

    {
        num:`3`,
        id: 'hellcombat_desc3b',
        uses:`3`,
        position: '12ally_12cleaveenemy',
        name: `Barbaric YAWP! 2`,
        attacktype:`Melee`,
        accuracy:'100',
        dmgmod:`-100%`,
        description:`
        Stun4<br>
        HellionExhaust2
        `
    },

    {
        num:`3`,
        id: 'hellcombat_desc3c',
        uses:`3`,
        position: '12ally_12cleaveenemy',
        name: `Barbaric YAWP! 3`,
        attacktype:`Melee`,
        accuracy:'105',
        dmgmod:`-100%`,
        description:`
        Stun5<br>
        HellionExhaust2
        `
    },

    {
        num:`3`,
        id: 'hellcombat_desc3d',
        uses:`3`,
        position: '12ally_12cleaveenemy',
        name: `Barbaric YAWP! 4`,
        attacktype:`Melee`,
        accuracy:'110',
        dmgmod:`-100%`,
        description:`
        Stun6<br>
        HellionExhaust2
        `
    },

    {
        num:`3`,
        id: 'hellcombat_desc3e',
        uses:`3`,
        position: '12ally_12cleaveenemy',
        name: `Barbaric YAWP! 5`,
        attacktype:`Melee`,
        accuracy:'115',
        dmgmod:`-100%`,
        description:`
        Stun7<br>
        HellionExhaust2
        `
    },

    //If it Bleeds

    {
        num:`4`,
        id: 'hellcombat_desc4a',
        position: '123ally_23enemy',
        name: 'If it Bleeds 1',
        attacktype:`Melee`,        
        accuracy:'85',
        dmgmod:`-35%`,
        description:`
        MidBld1
        `,
    },

    {
        num:`4`,
        id: 'hellcombat_desc4b',
        position: '123ally_23enemy',
        name: 'If it Bleeds 2',
        attacktype:`Melee`,        
        accuracy:'90',
        dmgmod:`-35%`,
        critmod:`+1.0%`,
        description:`
        MidBld2
        `,
    },

    {
        num:`4`,
        id: 'hellcombat_desc4c',
        position: '123ally_23enemy',
        name: 'If it Bleeds 3',
        attacktype:`Melee`,        
        accuracy:'95',
        dmgmod:`-35%`,
        critmod:`+2.0%`,
        description:`
        MidBld3
        `,
    },

    {
        num:`4`,
        id: 'hellcombat_desc4d',
        position: '123ally_23enemy',
        name: 'If it Bleeds 4',
        attacktype:`Melee`,        
        accuracy:'100',
        dmgmod:`-35%`,
        critmod:`+3.0%`,
        description:`
        MidBld4
        `,
    },

    {
        num:`4`,
        id: 'hellcombat_desc4e',
        position: '123ally_23enemy',
        name: 'If it Bleeds 5',
        attacktype:`Melee`,        
        accuracy:'105',
        dmgmod:`-35%`,
        critmod:`+4.0%`,
        description:`
        MidBld5
        `,
    },

    //Breakthrough

    {
        num:`5`,
        id: 'hellcombat_desc5a',
        position: '234ally_123cleaveenemy',
        name: 'Breakthrough 1',
        attacktype:`Melee`,
        movement: `Forward 1`,
        accuracy:'85 / DMG Mod: -50% / CRIT Mod: -1.0%',
        description:`
        HellionExhaust1
        `,
    },

    {
        num:`5`,
        id: 'hellcombat_desc5b',
        position: '234ally_123cleaveenemy',
        name: 'Breakthrough 2',
        attacktype:`Melee`,
        movement: `Forward 1`,
        accuracy:'90 / DMG Mod: -50%',
        description:`
        HellionExhaust1
        `,
    },

    {
        num:`5`,
        id: 'hellcombat_desc5c',
        position: '234ally_123cleaveenemy',
        name: 'Breakthrough 3',
        attacktype:`Melee`,
        movement: `Forward 1`,
        accuracy:'95 / DMG Mod: -50% / CRIT Mod: +1.0%',
        description:`
        HellionExhaust1
        `,
    },

    {
        num:`5`,
        id: 'hellcombat_desc5d',
        position: '234ally_123cleaveenemy',
        name: 'Breakthrough 4',
        attacktype:`Melee`,
        movement: `Forward 1`,
        accuracy:'100 / DMG Mod: -50% / CRIT Mod: +2.0%',
        description:`
        HellionExhaust1
        `,
    },

    {
        num:`5`,
        id: 'hellcombat_desc5e',
        position: '234ally_123cleaveenemy',
        name: 'Breakthrough 5',
        attacktype:`Melee`,
        movement: `Forward 1`,
        accuracy:'105 / DMG Mod: -50% / CRIT Mod: -3.0%',
        description:`
        HellionExhaust1
        `,
    },

    //Adrenaline Rush

    {
        num:`6`,
        id: 'hellcombat_desc6a',
        position: '1234hero',
        name: 'Adrenaline Rush 1',
        description:`
        Self:<br>
        DOTCURE<br>
        Heal 1 HP<br>
        Buff Self<br>
        +5 ACC (4 rds)<br>
        +20% DMG (4 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'hellcombat_desc6b',
        position: '1234hero',
        name: 'Adrenaline Rush 2',
        description:`
        Self:<br>
        DOTCURE<br>
        Heal 2 HP<br>
        Buff Self<br>
        +6 ACC (4 rds)<br>
        +22% DMG (4 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'hellcombat_desc6c',
        position: '1234hero',
        name: 'Adrenaline Rush 3',
        description:`
        Self:<br>
        DOTCURE<br>
        Heal 2 HP<br>
        Buff Self<br>
        +7 ACC (4 rds)<br>
        +24% DMG (4 rds)<br>
        `,
    },

    {   
        num:`6`,
        id: 'hellcombat_desc6d',
        position: '1234hero',
        name: 'Adrenaline Rush 4',
        description:`
        Self:<br>
        DOTCURE<br>
        Heal 3 HP<br>
        Buff Self<br>
        +8 ACC (4 rds)<br>
        +26% DMG (4 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'hellcombat_desc6e',
        position: '1234hero',
        name: 'Adrenaline Rush 5',
        description:`
        Self:<br>
        DOTCURE<br>
        Heal 4 HP<br>
        Buff Self<br>
        +10 ACC (4 rds)<br>
        +30% DMG (4 rds)<br>
        `,
    },

    //Bleed Out

    {
        num:`7`,
        id: 'hellcombat_desc7a',
        position: '1ally_1enemy',
        name: 'Bleed Out 1',
        attacktype:`Melee`,
        accuracy:'85 / DMG Mod: +20% / CRIT Mod: +6.0%',
        description:`
        BigBld1<br>
        HellionExhaust2
        `,
    },

    {
        num:`7`,
        id: 'hellcombat_desc7b',
        position: '1ally_1enemy',
        name: 'Bleed Out 2',
        accuracy:'90 / DMG Mod: +20% / CRIT Mod: +7.0%',
        description:`
        BigBld2<br>
        HellionExhaust2
        `,
    },

    {
        num:`7`,
        id: 'hellcombat_desc7c',
        position: '1ally_1enemy',
        name: 'Bleed Out 3',
        accuracy:'95 / DMG Mod: +20% / CRIT Mod: +8.0%',
        description:`
        BigBld3<br>
        HellionExhaust2
        `,
    },

    {
        num:`7`, 
        id: 'hellcombat_desc7d',
        position: '1ally_1enemy',
        name: 'Bleed Out 4',
        accuracy:'100 / DMG Mod: +20% / CRIT Mod: +9.0%',
        description:`
        BigBld4<br>
        HellionExhaust2
        `,
    },

    {
        num:`7`,
        id: 'hellcombat_desc7e',
        position: '1ally_1enemy',
        name: 'Bleed Out 5',
        accuracy:'105 / DMG Mod: +20% / CRIT Mod: +10.0%',
        description:`
        BigBld5<br>
        HellionExhaust2
        `,
    },
]
const HWMCombatSkills = [

    //Wicked Slice
    {
        num:`1`,
        id: 'hwmcombat_desc1a',
        position: '123ally_12enemy',
        name: 'Wicked Slice 1',
        attacktype:`Melee`,
        accuracy:'85',
        dmgmod:`+15%`,
        critmod:'+5.0%',
    },

    {
        num:`1`,
        id: 'hwmcombat_desc1b',
        position: '123ally_12enemy',
        name: 'Wicked Slice 2',
        attacktype:`Melee`,
        accuracy:'90',
        dmgmod:`+15%`,
        critmod:'+6.0%',
    },

    {
        num:`1`,
        id: 'hwmcombat_desc1c',
        position: '123ally_12enemy',
        name: 'Wicked Slice 3',
        attacktype:`Melee`,
        accuracy:'95',
        dmgmod:`+15%`,
        critmod:'+7.0%',

    },

    {
        num:`1`,
        id: 'hwmcombat_desc1d',
        position: '123ally_12enemy',
        name: 'Wicked Slice 4',
        attacktype:`Melee`,
        accuracy:'100',
        dmgmod:`+15%`,
        critmod:'+8.0%',
    },


    {
        num:`1`,
        id: 'hwmcombat_desc1e',
        position: '123ally_12enemy',
        name: 'Wicked Slice 5',
        attacktype:`Melee`,
        accuracy:'105',
        dmgmod:`+15%`,
        critmod:'+9.0%',
    },

     //Pistol Shot

     {
        num:`2`,
        extratext:`Always Unlocked`,
        id: 'hwmcombat_desc2a',
        position: '234ally_234enemy',
        name: 'Pistol Shot 1',
        attacktype:`Ranged`,
        accuracy:'85',
        dmgmod:`-15%`,
        critmod:'+7.5%',
        description:`
        +25% DMG vs Marked<br>
        `,
    },

    {
        num:`2`,
        id: 'hwmcombat_desc2b',
        position: '234ally_234enemy',
        name: 'Pistol Shot 2',
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:`-15%`,
        critmod:'+8.5%',
        description:`
        +30% DMG vs Marked<br>
        `,
    },

    {
        num:`2`,
        id: 'hwmcombat_desc2c',
        position: '234ally_234enemy',
        name: 'Pistol Shot 3',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-15%`,
        critmod:'+9.5%',
        description:`
        +35% DMG vs Marked<br>
        `,
    },

    {
        num:`2`,
        id: 'hwmcombat_desc2d',
        position: '234ally_234enemy',
        name: 'Pistol Shot 4',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-15%`,
        critmod:'+10.5%',
        description:`
        +40% DMG vs Marked<br>
        `,
    },

    {
        num:`2`,
        id: 'hwmcombat_desc2e',
        position: '234ally_234enemy',
        name: 'Pistol Shot 5',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-15%`,
        critmod:'+11.5%',
        description:`
        +50% DMG vs Marked<br>
        `,
    },

    //Point Blank Shot

    {
        num:`3`,
        id: 'hwmcombat_desc3a',
        position: '1ally_1enemy',       
        name: "Point Blank Shot 1",
        attacktype:`Ranged`,
        movement:`Back 1`,
        accuracy:'95',
        dmgmod:`+50%`,
        critmod:`+5.0%`,
        description:`
        Knockback1a 
        `
    },

    {
        num:`3`,
        id: 'hwmcombat_desc3b',
        position: '1ally_1enemy',
        name: `Point Blank Shot 2`,
        attacktype:`Ranged`,
        movement:`Back 1`,
        accuracy:'100',
        dmgmod:`+50%`,
        critmod:`+6.0%`,
        description:`
        Knockback1b 
        `
    },


    {
        num:`3`,
        id: 'hwmcombat_desc3c',
        position: '1ally_1enemy',       
        name: `Point Blank Shot 3`,
        attacktype:`Ranged`,
        movement:`Back 1`,
        accuracy:'105',
        dmgmod:`+50%`,
        critmod:`+7.0%`,
        description:`
        Knockback1c
        `
    },


    {
        num:`3`,
        id: 'hwmcombat_desc3d',
        position: '1ally_1enemy',       
        name: `Point Blank Shot 4`,
        attacktype:`Ranged`,
        movement:`Back 1`,
        accuracy:'110',
        dmgmod:`+50%`,
        critmod:`+8.0%`,
        description:`
        Knockback1d
        `
    },


    {
        num:`3`,
        id: 'hwmcombat_desc3e',
        position: '1ally_1enemy',       
        name: `Point Blank Shot 5`,
        attacktype:`Ranged`,
        movement:`Back 1`,
        accuracy:'115',
        dmgmod:`+50%`,
        critmod:`+9.0%`,
        description:`
        Knockback1e 
        `
    },

    //Grapeshot Blast

    {
        num:`4`,
        id: 'hwmcombat_desc4a',
        position: '23ally_123cleaveenemy',
        name: 'Grapeshot Blast 1',
        attacktype:`Ranged`,        
        accuracy:'75',
        dmgmod:`-50%`,
        critmod:`-9.0%`,
        description:`
        Debuff Target<br>
        Crits Received Chance: +4% (3 rds) (100% Base)<br>
        `,
    },

    {
        num:`4`,
        id: 'hwmcombat_desc4b',
        position: '23ally_123cleaveenemy',
        name: 'Grapeshot Blast 2',
        attacktype:`Ranged`,        
        accuracy:'80',
        dmgmod:`-50%`,
        critmod:`-8.0%`,
        description:`
        Debuff Target<br>
        Crits Received Chance: +5% (3 rds) (110% Base)<br>
        `,
    },

    {
        num:`4`,
        id: 'hwmcombat_desc4c',
        position: '23ally_123cleaveenemy',
        name: 'Grapeshot Blast 3',
        attacktype:`Ranged`,        
        accuracy:'85',
        dmgmod:`-50%`,
        critmod:`-7.0%`,
        description:`
        Debuff Target<br>
        Crits Received Chance: +6% (3 rds) (120% Base)<br>
        `,
    },

    {
        num:`4`,
        id: 'hwmcombat_desc4d',
        position: '23ally_123cleaveenemy',
        name: 'Grapeshot Blast 4',
        attacktype:`Ranged`,        
        accuracy:'90',
        dmgmod:`-50%`,
        critmod:`-6.0%`,
        description:`
        Debuff Target<br>
        Crits Received Chance: +7% (3 rds) (130% Base)<br>
        `,
    },

    {
        num:`4`,
        id: 'hwmcombat_desc4e',
        position: '23ally_123cleaveenemy',
        name: 'Grapeshot Blast 5',
        attacktype:`Ranged`,        
        accuracy:'95',
        dmgmod:`-50%`,
        critmod:`-5.0%`,
        description:`
        Debuff Target<br>
        Crits Received Chance: +8% (3 rds) (140% Base)<br>
        `,
    },


    //Tracking Shot

    {
        num:`5`,
        id: 'hwmcombat_desc5a',
        uses:`1`,
        position: '1234ally_234enemy',
        name: 'Tracking Shot 1',
        attacktype:`Ranged`,
        accuracy:'95 / DMG Mod: -80%',
        description:`
        Bypass Stealth / De-stealth<br>
        Buff Self<br>
        +6 ACC (1 Battle)<br>
        +4% CRIT (1 Battle)<br>
        +12% DMG (1 Battle)<br>
        `,
    },

    {
        num:`5`,
        id: 'hwmcombat_desc5b',
        uses:`1`,
        position: '1234ally_234enemy',        
        name: 'Tracking Shot 2',
        attacktype:`Ranged`,
        accuracy:'100 / DMG Mod: -80%',
        description:`
        Bypass Stealth / De-stealth<br>
        Buff Self<br>
        +7 ACC (1 Battle)<br>
        +5% CRIT (1 Battle)<br>
        +14% DMG (1 Battle)<br>
        `,
    },

    {
        num:`5`,
        id: 'hwmcombat_desc5c',
        uses:`1`,
        position: '1234ally_234enemy',
        name: 'Tracking Shot 3',
        attacktype:`Ranged`,
        accuracy:'105 / DMG Mod: -80% / CRIT Mod: +0.5%',
        description:`
        Bypass Stealth / De-stealth<br>
        Buff Self<br>
        +8 ACC (1 Battle)<br>
        +6% CRIT (1 Battle)<br>
        +16% DMG (1 Battle)<br>
        `,
    },

    {
        num:`5`,
        id: 'hwmcombat_desc5d',
        uses:`1`,
        position: '1234ally_234enemy',
        name: 'Tracking Shot 4',
        attacktype:`Ranged`,
        accuracy:'110 / DMG Mod: -80% / CRIT Mod: +0.5%',
        description:`
        Bypass Stealth / De-stealth<br>
        Buff Self<br>
        +9 ACC (1 Battle)<br>
        +7% CRIT (1 Battle)<br>
        +18% DMG (1 Battle)<br>
        `,
    },

    {
        num:`5`,
        id: 'hwmcombat_desc5e',
        uses:`1`,
        position: '1234ally_234enemy',
        name: 'Tracking Shot 5',
        attacktype:`Ranged`,
        accuracy:'115 / DMG Mod: -80% / CRIT Mod: +1.0%',
        description:`
        Bypass Stealth / De-stealth<br>
        Buff Self<br>
        +10 ACC (1 Battle)<br>
        +8% CRIT (1 Battle)<br>
        +20% DMG (1 Battle)<br>
        `,
    },

    //Duelist's Advance

    {
        num:`6`,
        id: 'hwmcombat_desc6a',
        position: '234ally_123enemy',
        name: `Duelist's Advance 1`,
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'90 / DMG Mod: -20% / CRIT Mod: +5.0%',
        description:`
        Self:<br>
        Activate Riposte (3 rds)<br>
        Riposte: -40% DMG <br>
        `,
    },

    {
        num:`6`,
        id: 'hwmcombat_desc6b',
        position: '234ally_123enemy',
        name: `Duelist's Advance 2`,
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'95 / DMG Mod: -20% / CRIT Mod: +6.0%',
        description:`
        Self:<br>
        Activate Riposte (3 rds)<br>
        Riposte: -33% DMG / +2% CRIT <br>
        `,
    },

    {
        num:`6`,
        id: 'hwmcombat_desc6c',
        position: '234ally_123enemy',
        name: `Duelist's Advance 3`,
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'100 / DMG Mod: -20% / CRIT Mod: +7.0%',
        description:`
        Self:<br>
        Activate Riposte (3 rds)<br>
        Riposte: -25% DMG / +3% CRIT <br>
        `,
    },

    {   
        num:`6`,
        id: 'hwmcombat_desc6d',
        position: '234ally_123enemy',
        name: `Duelist's Advance 4`,
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'105 / DMG Mod: -20% / CRIT Mod: +8.0%',
        description:`
        Self:<br>
        Activate Riposte (3 rds)<br>
        Riposte: -20% DMG / +4% CRIT <br>
        `,
    },

    {
        num:`6`,
        id: 'hwmcombat_desc6e',
        position: '234ally_123enemy',
        name: `Duelist's Advance 5`,
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'110 / DMG Mod: -20% / CRIT Mod: +9.0%',
        description:`
        Self:<br>
        Activate Riposte (3 rds)<br>
        Riposte: -15% DMG / +5% CRIT <br>
        `,
    },




    //Open Vein

    {
        num:`7`,
        id: 'hwmcombat_desc7a',
        position: '123ally_12enemy',
        name: 'Open Vein 1',
        attacktype:`Melee`,
        accuracy:'95 / DMG Mod: -15%',
        description:`
        MidBld1<br>
        BldDbf1<br>
        -1 SPD (3 rds) (100% Base)
        `,
    },

    {
        num:`7`,
        id: 'hwmcombat_desc7b',
        position: '123ally_12enemy',
        name: 'Open Vein 2',
        attacktype:`Melee`,
        accuracy:'100 / DMG Mod: -15% / CRIT Mod: +1.0%',
        description:`
        MidBld2<br>
        BldDbf2<br>
        -1 SPD (3 rds) (110% Base)
        `,
    },

    {
        num:`7`,
        id: 'hwmcombat_desc7c',
        position: '123ally_12enemy',
        name: 'Open Vein 3',
        attacktype:`Melee`,
        accuracy:'105 / DMG Mod: -15% / CRIT Mod: +2.0%',
        description:`
        MidBld3<br>
        BldDbf3<br>
        -2 SPD (3 rds) (120% Base)
        `,
    },

    {
        num:`7`, 
        id: 'hwmcombat_desc7d',
        position: '123ally_12enemy',
        name: 'Open Vein 4',
        attacktype:`Melee`,
        accuracy:'110 / DMG Mod: -15% / CRIT Mod: +3.0%',
        description:`
        MidBld4<br>
        BldDbf4<br>
        -2 SPD (3 rds) (130% Base)
        `,
    },


    {
        num:`7`,
        id: 'hwmcombat_desc7e',
        position: '123ally_12enemy',
        name: 'Open Vein 5',
        attacktype:`Melee`,
        accuracy:'115 / DMG Mod: -15% / CRIT Mod: +4.0%',
        description:`
        MidBld5<br>
        BldDbf5<br>
        -3 SPD (3 rds) (140% Base)
        `,
    },
]
const HoundmasterCombatSkills = [

    //Hound's Rush
    {
        num:`1`,
        extratext:`Always Unlocked`,
        id: 'hmcombat_desc1a',
        position: '1234ally_1234enemy',
        name: `Hound's Rush 1`,
        attacktype:`Ranged`,
        accuracy:'85',
        critmod:'+5.0%',
        description:`
        Bleed (100% Base) <br>
        1pt/rd for 3 rds<br>
        +15% DMG vs Beast<br>
        +60% DMG vs Marked<br>
        `,
    },

    {
        num:`1`,
        id: 'hmcombat_desc1b',
        position: '1234ally_1234enemy',
        name: `Hound's Rush 2`,
        attacktype:`Ranged`,
        accuracy:'90',
        critmod:'+6.0%',
        description:`
        Bleed (110% Base) <br>
        1pt/rd for 3 rds<br>
        +20% DMG vs Beast<br>
        +70% DMG vs Marked<br>
        `,
    },

    {
        num:`1`,
        id: 'hmcombat_desc1c',
        position: '1234ally_1234enemy',
        name: `Hound's Rush 3`,
        attacktype:`Ranged`,
        accuracy:'95',
        critmod:'+7.0%',
        description:`
        Bleed (120% Base) <br>
        1pt/rd for 3 rds<br>
        +25% DMG vs Beast<br>
        +80% DMG vs Marked<br>
        `,
    },

    {
        num:`1`,
        id: 'hmcombat_desc1d',
        position: '1234ally_1234enemy',
        name: `Hound's Rush 4`,
        attacktype:`Ranged`,
        accuracy:'100',
        critmod:'+8.0%',
        description:`
        Bleed (130% Base) <br>
        2pts/rd for 3 rds<br>
        +30% DMG vs Beast<br>
        +90% DMG vs Marked<br>
        `,
    },

    {
        num:`1`,
        id: 'hmcombat_desc1e',
        position: '1234ally_1234enemy',
        name: `Hound's Rush 5`,
        attacktype:`Ranged`,
        accuracy:'105',
        critmod:'+9.0%',
        description:`
        Bleed (140% Base) <br>
        2pts/rd for 3 rds<br>
        +35% DMG vs Beast<br>
        +100% DMG vs Marked<br>
        `,
    },

     //Hound's Harry

     {
        num:`2`,
        id: 'hmcombat_desc2a',
        position: '1234ally_1234cleaveenemy',
        name: "Hound's Harry 1",
        attacktype:`Ranged`,
        accuracy:'85',
        dmgmod:`-75%`,
        critmod:'-5.0%',
        description:`
        Bleed (110% Base) <br>
        1pt/rd for 3 rds<br>
        `,
    },

    {
        num:`2`,
        id: 'hmcombat_desc2b',
        position: '1234ally_1234cleaveenemy',
        name: "Hound's Harry 2",
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:`-75%`,
        critmod:'-5.0%',
        description:`
        Bleed (120% Base) <br>
        1pt/rd for 3 rds<br>
        `,
    },

    {
        num:`2`,
        id: 'hmcombat_desc2c',
        position: '1234ally_1234cleaveenemy',
        name: "Hound's Harry 3",
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-75%`,
        critmod:'-3.0%',
        description:`
        Bleed (130% Base) <br>
        2pts/rd for 3 rds<br>
        `,
    },

    {
        num:`2`,
        id: 'hmcombat_desc2d',
        position: '1234ally_1234cleaveenemy',
        name: "Hound's Harry 4",
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-75%`,
        critmod:'-2.0%',
        description:`
        Bleed (140% Base) <br>
        2pts/rd for 3 rds<br>
        `,
    },

    {
        num:`2`,
        id: 'hmcombat_desc2e',
        position: '1234ally_1234cleaveenemy',
        name: "Hound's Harry 5",
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-75%`,
        critmod:'-1.0%',
        description:`
        Bleed (150% Base) <br>
        3pts/rd for 3 rds<br>
        `,
    },

    //Target Whistle

    {
        num:`3`,
        id: 'hmcombat_desc3a',
        position: '1234ally_1234enemy',
        name: "Target Whistle 1",
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-100%`,
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -20% PROT (4 rds) (130% Base)<br>
        `
    },

    {
        num:`3`,
        id: 'hmcombat_desc3b',
        position: '1234ally_1234enemy',
        name: `Target Whistle 2`,
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-100%`,
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -22% PROT (4 rds) (140% Base)<br>
        `
    },


    {
        num:`3`,
        id: 'hmcombat_desc3c',
        position: '1234ally_1234enemy',
        name: `Target Whistle 3`,
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-100%`,
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -25% PROT (4 rds) (150% Base)<br>
        `
    },


    {
        num:`3`,
        id: 'hmcombat_desc3d',
        position: '1234ally_1234enemy',
        name: `Target Whistle 4`,
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-100%`,
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -27% PROT (4 rds) (160% Base)<br>
        `
    },


    {
        num:`3`,
        id: 'hmcombat_desc3e',
        position: '1234ally_1234enemy',
        name: `Target Whistle 5`,
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-100%`,
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -30% PROT (4 rds) (170% Base)<br>
        `
    },

    //Cry Havoc

    {
        num:`4`,
        id: 'hmcombat_desc4a',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Cry Havoc 1',
        description:`
        Each Hero:<br>
        Stress -2 (66% Chance)
        `,
    },

    {
        num:`4`,
        id: 'hmcombat_desc4b',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Cry Havoc 2',
        description:`
        Each Hero:<br>
        Stress -3 (68% Chance)
        `,
    },

    {
        num:`4`,
        id: 'hmcombat_desc4c',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Cry Havoc 3',
        description:`
        Each Hero:<br>
        Stress -4 (70% Chance)
        `,
    },

    {
        num:`4`,
        id: 'hmcombat_desc4d',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Cry Havoc 4',
        description:`
        Each Hero:<br>
        Stress -5 (72% Chance)
        `,
    },

    {
        num:`4`,
        id: 'hmcombat_desc4e',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Cry Havoc 5',
        description:`
        Each Hero:<br>
        Stress -6 (74% Chance)
        `,
    },


    //Guard Dog

    {
        num:`5`,
        id: 'hmcombat_desc5a',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Guard Dog 1',
        description:`
        Guard Target Ally (2 rds)<br>
        Buff Self<br>
        +10 DODGE (3 rds)
        `,
    },

    {
        num:`5`,
        id: 'hmcombat_desc5b',
        isdoubleicon:true,
        position: '1234ally_1234heal',        
        name: 'Guard Dog 2',
        description:`
        Guard Target Ally (2 rds)<br>
        Buff Self<br>
        +10 DODGE (3 rds)
        `,
    },

    {
        num:`5`,
        id: 'hmcombat_desc5c',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Guard Dog 3',
        description:`
        Guard Target Ally (2 rds)<br>
        Buff Self<br>
        +10 DODGE (3 rds)
        `,
    },

    {
        num:`5`,
        id: 'hmcombat_desc5d',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Guard Dog 4',
        description:`
        Guard Target Ally (2 rds)<br>
        Buff Self<br>
        +10 DODGE (3 rds)
        `,
    },

    {
        num:`5`,
        id: 'hmcombat_desc5e',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Guard Dog 5',
        description:`
        Guard Target Ally (2 rds)<br>
        Buff Self<br>
        +10 DODGE (3 rds)
        `,
    },

    //Lick Wounds

    {
        num:`6`,
        id: 'hmcombat_desc6a',
        position: '234hero',
        name: 'Lick Wounds 1',
        description:`
        Self:<br>
        Heal 4 HP
        `,
    },

    {
        num:`6`,
        id: 'hmcombat_desc6b',
        position: '234hero',
        name: 'Lick Wounds 2',
        description:`
        Self:<br>
        Heal 5 HP
        `,
    },

    {
        num:`6`,
        id: 'hmcombat_desc6c',
        position: '234hero',
        name: 'Lick Wounds 3',
        description:`
        Self:<br>
        Heal 6 HP
        `,
    },

    {   
        num:`6`,
        id: 'hmcombat_desc6d',
        position: '234hero',
        name: 'Lick Wounds 4',
        description:`
        Self:<br>
        Heal 7 HP
        `,
    },

    {
        num:`6`,
        id: 'hmcombat_desc6e',
        position: '234hero',
        name: 'Lick Wounds 5',
        description:`
        Self:<br>
        Heal 8 HP
        `,
    },




    //Blackjack

    {
        num:`7`,
        id: 'hmcombat_desc7a',
        position: '12ally_123enemy',
        name: 'Blackjack 1',
        attacktype:`Melee`,
        accuracy:'95',
        dmgmod:`-65%`,
        critmod:'+5.0%',
        description:`
        Stun3
        `,
    },

    {
        num:`7`,
        id: 'hmcombat_desc7b',
        position: '12ally_123enemy',
        name: 'Blackjack 2',
        attacktype:`Melee`,
        accuracy:'100',
        dmgmod:`-65%`,
        critmod:'+6.0%',
        description:`
        Stun4
        `,
    },

    {
        num:`7`,
        id: 'hmcombat_desc7c',
        position: '12ally_123enemy',
        name: 'Blackjack 3',
        attacktype:`Melee`,
        accuracy:'105',
        dmgmod:`-65%`,
        critmod:'+7.0%',
        description:`
        Stun5
        `,
    },

    {
        num:`7`, 
        id: 'hmcombat_desc7d',
        position: '12ally_123enemy',
        name: 'Blackjack 4',
        attacktype:`Melee`,
        accuracy:'110',
        dmgmod:`-65%`,
        critmod:'+8.0%',
        description:`
        Stun6
        `,
    },


    {
        num:`7`,
        id: 'hmcombat_desc7e',
        position: '12ally_123enemy',
        name: 'Blackjack 5',
        attacktype:`Melee`,
        accuracy:'115',
        dmgmod:`-65%`,
        critmod:'+9.0%',
        description:`
        Stun7
        `,
    },
]
const JesterCombatSkills = [

    //Dirk Stab
    {
        num:`1`,
        id: 'jescombat_desc1a',
        position: '1234ally_123enemy',
        name: 'Dirk Stab 1',
        movement:`Forward 1`,
        attacktype:`Melee`,
        accuracy:'85',
        critmod:'+5.0%',
        description:`
        Bypass Guard <br>
        finbuff1
        `,
    },

    {
        num:`1`,
        id: 'jescombat_desc1b',
        position: '1234ally_123enemy',
        name: 'Dirk Stab 2',
        movement:`Forward 1`,
        attacktype:`Melee`,
        accuracy:'90',
        critmod:'+6.0%',
        description:`
        Bypass Guard <br>
        finbuff1
        `,
    },

    {
        num:`1`,
        id: 'jescombat_desc1c',
        position: '1234ally_123enemy',
        name: 'Dirk Stab 3',
        movement:`Forward 1`,
        attacktype:`Melee`,
        accuracy:'95',
        critmod:'+7.0%',
        description:`
        Bypass Guard <br>
        finbuff1
        `,
    },

    {
        num:`1`,
        id: 'jescombat_desc1d',
        position: '1234ally_123enemy',
        name: 'Dirk Stab 4',
        movement:`Forward 1`,
        attacktype:`Melee`,
        accuracy:'100',
        critmod:'+8.0%',
        description:`
        Bypass Guard <br>
        finbuff1
        `,
    },


    {
        num:`1`,
        id: 'jescombat_desc1e',
        position: '1234ally_123enemy',
        name: 'Dirk Stab 5',
        movement:`Forward 1`,
        attacktype:`Melee`,
        accuracy:'105',
        critmod:'+9.0%',
        description:`
        Bypass Guard <br>
        finbuff1
        `,
    },

     //Harvest

     {
        num:`2`,
        extratext:`Always Unlocked`,
        id: 'jescombat_desc2a',
        position: '23ally_23cleaveenemy',
        name: 'Harvest 1',
        attacktype:`Melee`,
        accuracy:'90 / DMG Mod: -50%',
        description:`
        MidBld1<br>
        finbuff1
        `,
    },

    {
        num:`2`,
        id: 'jescombat_desc2b',
        position: '23ally_23cleaveenemy',
        name: 'Harvest 2',
        attacktype:`Melee`,
        accuracy:'95 / DMG Mod: -50% / CRIT Mod: +1.0%',
        description:`
        MidBld2<br>
        finbuff1
        `,
    },

    {
        num:`2`,
        id: 'jescombat_desc2c',
        position: '23ally_23cleaveenemy',
        name: 'Harvest 3',
        attacktype:`Melee`,
        accuracy:'100 / DMG Mod: -50% / CRIT Mod: +2.0%',
        description:`
        MidBld3<br>
        finbuff1
        `,
    },

    {
        num:`2`,
        id: 'jescombat_desc2d',
        position: '23ally_23cleaveenemy',
        name: 'Harvest 4',
        attacktype:`Melee`,
        accuracy:'105 / DMG Mod: -50% / CRIT Mod: +3.0%',
        description:`
        MidBld4<br>
        finbuff1
        `,
    },

    {
        num:`2`,
        id: 'jescombat_desc2e',
        position: '23ally_23cleaveenemy',
        name: 'Harvest 5',
        attacktype:`Melee`,
        accuracy:'110 / DMG Mod: -50% / CRIT Mod: +4.0%',
        description:`
        MidBld5<br>
        finbuff1
        `,
    },

    //Finale

    {
        num:`3`,
        id: 'jescombat_desc3a',
        uses:`1`,
        position: '12ally_1234enemy',
        name: "Finale 1",
        attacktype:`Melee`,
        movement:`Back 3`,
        accuracy:'140 / DMG Mod: +50% / CRIT Mod: +5.0%',
        description:`
        JesterExhaust 
        `
    },

    {
        num:`3`,
        id: 'jescombat_desc3b',
        uses:`1`,
        position: '12ally_1234enemy',
        name: `Finale 2`,
        attacktype:`Melee`,
        movement:`Back 3`,
        accuracy:'145 / DMG Mod: +50% / CRIT Mod: +6.0%',
        description:`
        JesterExhaust 
        `
    },


    {
        num:`3`,
        id: 'jescombat_desc3c',
        uses:`1`,
        position: '12ally_1234enemy',
        name: `Finale 3`,
        attacktype:`Melee`,
        movement:`Back 3`,
        accuracy:'150 / DMG Mod: +50% / CRIT Mod: +7.0%',
        description:`
        JesterExhaust 
        `
    },


    {
        num:`3`,
        id: 'jescombat_desc3d',
        uses:`1`,
        position: '12ally_1234enemy',
        name: `Finale 4`,
        attacktype:`Melee`,
        movement:`Back 3`,
        accuracy:'155 / DMG Mod: +50% / CRIT Mod: +8.0%',
        description:`
        JesterExhaust 
        `
    },


    {
        num:`3`,
        id: 'jescombat_desc3e',
        uses:`1`,
        position: '12ally_1234enemy',
        name: `Finale 5`,
        attacktype:`Melee`,
        movement:`Back 3`,
        accuracy:'160 / DMG Mod: +50% / CRIT Mod: +9.0%',
        description:`
        JesterExhaust 
        `
    },

    //Solo

    {
        num:`4`,
        id: 'jescombat_desc4a',
        uses:`2`,
        position: '34ally_1234cleaveenemy',
        name: 'Solo 1',
        attacktype:`Ranged`,        
        movement:`Forward 3`,
        accuracy:'125 / DMG Mod: -100%',
        description:`
        Mark Self (3 rds)<br>
        Buff Self<br>
        +20 DODGE (4 rds)<br>
        finbuff3
        `,
    },

    {
        num:`4`,
        id: 'jescombat_desc4b',
        uses:`2`,
        position: '34ally_1234cleaveenemy',
        name: 'Solo 2',
        attacktype:`Ranged`,        
        movement:`Forward 3`,
        accuracy:'130 / DMG Mod: -100%',
        description:`
        Mark Self (3 rds)<br>
        Buff Self<br>
        +22 DODGE (4 rds)<br>
        finbuff3
        `,
    },

    {
        num:`4`,
        id: 'jescombat_desc4c',
        uses:`2`,
        position: '34ally_1234cleaveenemy',
        name: 'Solo 3',
        attacktype:`Ranged`,        
        movement:`Forward 3`,
        accuracy:'135 / DMG Mod: -100%',
        description:`
        Mark Self (3 rds)<br>
        Buff Self<br>
        +25 DODGE (4 rds)<br>
        finbuff3
        `,
    },

    {
        num:`4`,
        id: 'jescombat_desc4d',
        uses:`2`,
        position: '34ally_1234cleaveenemy',
        name: 'Solo 4',
        attacktype:`Ranged`,        
        movement:`Forward 3`,
        accuracy:'140 / DMG Mod: -100%',
        description:`
        Mark Self (3 rds)<br>
        Buff Self<br>
        +27 DODGE (4 rds)<br>
        finbuff3
        `,
    },

    {
        num:`4`,
        id: 'jescombat_desc4e',
        uses:`2`,
        position: '34ally_1234cleaveenemy',
        name: 'Solo 5',
        attacktype:`Ranged`,        
        movement:`Forward 3`,
        accuracy:'145 / DMG Mod: -100%',
        description:`
        Mark Self (3 rds)<br>
        Buff Self<br>
        +30 DODGE (4 rds)<br>
        finbuff3
        `,
    },


    //Slice Off

    {
        num:`5`,
        id: 'jescombat_desc5a',
        position: '23ally_23enemy',
        name: 'Slice Off 1',
        attacktype:`Melee`,
        accuracy:'95 / DMG Mod: -33% / CRIT Mod: +8.0%',
        description:`
        BigBld1<br>
        finbuff1
        `,
    },

    {
        num:`5`,
        id: 'jescombat_desc5b',
        position: '23ally_23enemy',
        name: 'Slice Off 2',
        attacktype:`Melee`,
        accuracy:'100 / DMG Mod: -33% / CRIT Mod: +9.0%',
        description:`
        BigBld2<br>
        finbuff1
        `,
    },

    {
        num:`5`,
        id: 'jescombat_desc5c',
        position: '23ally_23enemy',
        name: 'Slice Off 3',
        attacktype:`Melee`,
        accuracy:'105 / DMG Mod: -33% / CRIT Mod: +10.0%',
        description:`
        BigBld3<br>
        finbuff1
        `,
    },

    {
        num:`5`,
        id: 'jescombat_desc5d',
        position: '23ally_23enemy',
        name: 'Slice Off 4',
        attacktype:`Melee`,
        accuracy:'110 / DMG Mod: -33% / CRIT Mod: +11.0%',
        description:`
        BigBld4<br>
        finbuff1
        `,
    },

    {
        num:`5`,
        id: 'jescombat_desc5e',
        position: '23ally_23enemy',
        name: 'Slice Off 5',
        attacktype:`Melee`,
        accuracy:'115 / DMG Mod: -33% / CRIT Mod: +12.0%',
        description:`
        BigBld5<br>
        finbuff1
        `,
    },

    //Battle Ballad

    {
        num:`6`,
        id: 'jescombat_desc6a',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Battle Ballad 1',
        description:`
        Buff Party<br>
        +5 ACC (4 rds)<br>
        +2% CRIT (4 rds)<br>
        +2 SPD (4 rds)<br>
        finbuffa
        `,
    },

    {
        num:`6`,
        id: 'jescombat_desc6b',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Battle Ballad 2',
        description:`
        Buff Party<br>
        +6 ACC (4 rds)<br>
        +3% CRIT (4 rds)<br>
        +2 SPD (4 rds)<br>
        finbuffa
        `,
    },

    {
        num:`6`,
        id: 'jescombat_desc6c',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Battle Ballad 3',
        description:`
        Buff Party<br>
        +7 ACC (4 rds)<br>
        +4% CRIT (4 rds)<br>
        +3 SPD (4 rds)<br>
        finbuffa
        `,
    },

    {   
        num:`6`,
        id: 'jescombat_desc6d',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Battle Ballad 4',
        description:`
        Buff Party<br>
        +8 ACC (4 rds)<br>
        +5% CRIT (4 rds)<br>
        +3 SPD (4 rds)<br>
        finbuffa
        `,
    },

    {
        num:`6`,
        id: 'jescombat_desc6e',
        isdoubleicon:true,
        position: '34ally_1234cleaveheal',
        name: 'Battle Ballad 5',
        description:`
        Buff Party<br>
        +10 ACC (4 rds)<br>
        +6% CRIT (4 rds)<br>
        +4 SPD (4 rds)<br>
        finbuffa
        `,
    },




    //Inspiring Tune

    {
        num:`7`,
        id: 'jescombat_desc7a',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Inspiring Tune 1',
        description:`
        Target Hero: <br>
        Stress -8 <br>
        Buff Target<br>
        -10% Stress (3 rds)<br>
        finbuffa
        `,
    },

    {
        num:`7`,
        id: 'jescombat_desc7b',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Inspiring Tune 2',
        description:`
        Target Hero: <br>
        Stress -9 <br>
        Buff Target<br>
        -12.5% Stress (3 rds)<br>
        finbuffa
        `,
    },

    {
        num:`7`,
        id: 'jescombat_desc7c',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Inspiring Tune 3',
        description:`
        Target Hero: <br>
        Stress -10 <br>
        Buff Target<br>
        -15% Stress (3 rds)<br>
        finbuffa
        `,
    },

    {
        num:`7`, 
        id: 'jescombat_desc7d',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Inspiring Tune 4',
        description:`
        Target Hero: <br>
        Stress -11 <br>
        Buff Target<br>
        -17.5% Stress (3 rds)<br>
        finbuffa
        `,
    },


    {
        num:`7`,
        id: 'jescombat_desc7e',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Inspiring Tune 5',
        description:`
        Target Hero: <br>
        Stress -12 <br>
        Buff Target<br>
        -20% Stress (3 rds)<br>
        finbuffa
        `,
    },
]
const LeperCombatSkills = [

    //Chop
    {
        num:`1`,
        extratext:`Always Unlocked`,
        id: 'lepcombat_desc1a',
        position: '12ally_12enemy',
        name: 'Chop 1',
        attacktype:`Melee`,
        accuracy:'75',
        critmod:'+3.0%',
    },

    {
        num:`1`,
        id: 'lepcombat_desc1b',
        position: '12ally_12enemy',
        name: 'Chop 2',
        attacktype:`Melee`,
        accuracy:'80',
        critmod:'+4.0%',
    },

    {
        num:`1`,
        id: 'lepcombat_desc1c',
        position: '12ally_12enemy',
        name: 'Chop 3',
        attacktype:`Melee`,
        accuracy:'85',
        critmod:'+5.0%',
    },

    {
        num:`1`,
        id: 'lepcombat_desc1d',
        position: '12ally_12enemy',
        name: 'Chop 4',
        attacktype:`Melee`,
        accuracy:'90',
        critmod:'+6.0%',
    },

    {
        num:`1`,
        id: 'lepcombat_desc1e',
        position: '12ally_12enemy',
        name: 'Chop 5',
        attacktype:`Melee`,
        accuracy:'95',
        critmod:'+7.0%',
    },

     //Hew

     {
        num:`2`,
        id: 'lepcombat_desc2a',
        position: '12ally_12cleaveenemy',
        name: 'Hew 1',
        attacktype:`Melee`,
        accuracy:'75',
        dmgmod:`-50%`,
        critmod:'-4.0%',
    },

    {
        num:`2`,
        id: 'lepcombat_desc2b',
        position: '12ally_12cleaveenemy',
        name: 'Hew 2',
        attacktype:`Melee`,
        accuracy:'80',
        dmgmod:`-50%`,
        critmod:'-3.0%',
    },

    {
        num:`2`,
        id: 'lepcombat_desc2c',
        position: '12ally_12cleaveenemy',
        name: 'Hew 3',
        attacktype:`Melee`,
        accuracy:'85',
        dmgmod:`-50%`,
        critmod:'-2.0%',
    },

    {
        num:`2`,
        id: 'lepcombat_desc2d',
        position: '12ally_12cleaveenemy',
        name: 'Hew 4',
        attacktype:`Melee`,
        accuracy:'90',
        dmgmod:`-50%`,
        critmod:'-1.0%',
    },

    {
        num:`2`,
        id: 'lepcombat_desc2e',
        position: '12ally_12cleaveenemy',
        name: 'Hew 5',
        attacktype:`Melee`,
        accuracy:'95',
        dmgmod:`-50%`,
    },

    //Purge

    {
        num:`3`,
        id: 'lepcombat_desc3a',
        position: '1ally_1enemy',
        name: "Purge 1",
        attacktype:`Melee`,
        accuracy:'85 / DMG Mod: -40%',
        description:`
        Knockback3a<br>
        CLEARCORPSE<br>
        Buff Self<br>
        +5 ACC (4 rds)
        `
    },

    {
        num:`3`,
        id: 'lepcombat_desc3b',
        position: '1ally_1enemy',
        name: `Purge 2`,
        attacktype:`Melee`,
        accuracy:'90 / DMG Mod: -40% / CRIT Mod: +1.0%',
        description:`
        Knockback3b<br>
        CLEARCORPSE<br>
        Buff Self<br>
        +5 ACC (4 rds)
        `
    },

    {
        num:`3`,
        id: 'lepcombat_desc3c',
        position: '1ally_1enemy',
        name: `Purge 3`,
        attacktype:`Melee`,
        accuracy:'95 / DMG Mod: -40% / CRIT Mod: +2.0%',
        description:`
        Knockback3c<br>
        CLEARCORPSE<br>
        Buff Self<br>
        +5 ACC (4 rds)
        `
    },

    {
        num:`3`,
        id: 'lepcombat_desc3d',
        position: '1ally_1enemy',
        name: `Purge 4`,
        attacktype:`Melee`,
        accuracy:'100 / DMG Mod: -40% / CRIT Mod: +3.0%',
        description:`
        Knockback3d<br>
        CLEARCORPSE<br>
        Buff Self<br>
        +5 ACC (4 rds)
        `
    },

    {
        num:`3`,
        id: 'lepcombat_desc3e',
        position: '1ally_1enemy',
        name: `Purge 5`,
        attacktype:`Melee`,
        accuracy:'105 / DMG Mod: -40% / CRIT Mod: +4.0%',
        description:`
        Knockback3e<br>
        CLEARCORPSE<br>
        Buff Self<br>
        +5 ACC (4 rds)
        `
    },

    //Revenge

    {
        num:`4`,
        id: 'lepcombat_desc4a',
        uses:`1`,
        position: '1234hero',
        name: 'Revenge 1',
        description:`
        Buff Self<br>
        +10 ACC (1 Battle)<br>
        +25% DMG (1 Battle)<br>
        +7% CRIT (1 Battle)<br>
        LeperExhaust
        `,
    },

    {
        num:`4`,
        id: 'lepcombat_desc4b',
        uses:`1`,
        position: '1234hero',
        name: 'Revenge 2',
        description:`
        Buff Self<br>
        +11 ACC (1 Battle)<br>
        +27% DMG (1 Battle)<br>
        +8% CRIT (1 Battle)<br>
        LeperExhaust
        `,
    },

    {
        num:`4`,
        id: 'lepcombat_desc4c',
        uses:`1`,
        position: '1234hero',
        name: 'Revenge 3',
        description:`
        Buff Self<br>
        +12 ACC (1 Battle)<br>
        +30% DMG (1 Battle)<br>
        +9% CRIT (1 Battle)<br>
        LeperExhaust
        `,
    },

    {
        num:`4`,
        id: 'lepcombat_desc4d',
        uses:`1`,
        position: '1234hero',
        name: 'Revenge 4',
        description:`
        Buff Self<br>
        +13 ACC (1 Battle)<br>
        +32% DMG (1 Battle)<br>
        +10% CRIT (1 Battle)<br>
        LeperExhaust
        `,
    },

    {
        num:`4`,
        id: 'lepcombat_desc4e',
        uses:`1`,
        position: '1234hero',
        name: 'Revenge 5',
        description:`
        Buff Self<br>
        +15 ACC (1 Battle)<br>
        +35% DMG (1 Battle)<br>
        +11% CRIT (1 Battle)<br>
        LeperExhaust
        `,
    },

    //Withstand

    {
        num:`5`,
        id: 'lepcombat_desc5a',
        uses:`1`,
        position: '123hero',        
        name: 'Withstand 1',
        description:`
        Mark Self (1 Battle)<br>
        Buff Self<br>
        +20% PROT (1 Battle)<br>
        LeperResist
        `,
    },

    {
        num:`5`,
        id: 'lepcombat_desc5b',
        uses:`1`,
        position: '123hero',         
        name: 'Withstand 2',
        description:`
        Mark Self (1 Battle)<br>
        Buff Self<br>
        +22% PROT (1 Battle)<br>
        LeperResist
        `,
    },

    {
        num:`5`,
        id: 'lepcombat_desc5c',
        uses:`1`,
        position: '123hero',         
        name: 'Withstand 3',
        description:`
        Mark Self (1 Battle)<br>
        Buff Self<br>
        +25% PROT (1 Battle)<br>
        LeperResist
        `,
    },

    {
        num:`5`,
        id: 'lepcombat_desc5d',
        uses:`1`,
        position: '123hero',         
        name: 'Withstand 4',
        description:`
        Mark Self (1 Battle)<br>
        Buff Self<br>
        +27% PROT (1 Battle)<br>
        LeperResist
        `,
    },

    {
        num:`5`,
        id: 'lepcombat_desc5e',
        uses:`1`,
        position: '123hero',         
        name: 'Withstand 5',
        description:`
        Mark Self (1 Battle)<br>
        Buff Self<br>
        +30% PROT (1 Battle)<br>
        LeperResist
        `,
    },



    //Solemnity

    {
        num:`6`,
        id: 'lepcombat_desc6a',
        position: '12hero',
        name: 'Solemnity 1',
        description:`
        Self: <br>
        Heal 6 HP <br>
        Stress -5<br>
        `,
    },

    {
        num:`6`,
        id: 'lepcombat_desc6b',
        position: '12hero',
        name: 'Solemnity 2',
        description:`
        Self: <br>
        Heal 7 HP <br>
        Stress -5<br>
        `,
    },

    {
        num:`6`,
        id: 'lepcombat_desc6c',
        position: '12hero',
        name: 'Solemnity 3',
        description:`
        Self:<br>
        Heal 8 HP <br>
        Stress -6<br>
        `,
    },

    {   
        num:`6`,
        id: 'lepcombat_desc6d',
        position: '12hero',
        name: 'Solemnity 4',
        description:`
        Self: <br>
        Heal 9 HP <br>
        Stress -6<br>
        `,
    },

    {
        num:`6`,
        id: 'lepcombat_desc6e',
        position: '12hero',
        name: 'Solemnity 5',
        description:`
        Self: <br>
        Heal 10 HP <br>
        Stress -7<br>
        `,
    },


    //Intimidate

    {
        num:`7`,
        id: 'lepcombat_desc7a',
        position: '1ally_1234enemy',
        name: 'Intimidate 1',
        attacktype:`Melee`,
        accuracy:`95 / DMG Mod: -85%`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -20% DMG (3 rds) (100% Base)<br>
        -3 SPD (3 rds) (100% Base)<br>
        Self: Mark (4 rds)<br>
        Buff Self<br>
        +2 SPD (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'lepcombat_desc7b',
        position: '1ally_1234enemy',
        name: 'Intimidate 2',
        attacktype:`Melee`,
        accuracy:`100 / DMG Mod: -85%`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -23% DMG (3 rds) (110% Base)<br>
        -3 SPD (3 rds) (110% Base)<br>
        Self: Mark (4 rds)<br>
        Buff Self<br>
        +2 SPD (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'lepcombat_desc7c',
        position: '1ally_1234enemy',
        name: 'Intimidate 3',
        attacktype:`Melee`,
        accuracy:`105 / DMG Mod: -80%`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -26% DMG (3 rds) (120% Base)<br>
        -4 SPD (3 rds) (120% Base)<br>
        Self: Mark (4 rds)<br>
        Buff Self<br>
        +3 SPD (4 rds)<br>
        `,
    },

    {
        num:`7`, 
        id: 'lepcombat_desc7d',
        position: '1ally_1234enemy',
        name: 'Intimidate 4',
        attacktype:`Melee`,
        accuracy:`110 / DMG Mod: -80%`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -29% DMG (3 rds) (130% Base)<br>
        -4 SPD (3 rds) (130% Base)<br>
        Self: Mark (4 rds)<br>
        Buff Self<br>
        +3 SPD (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'lepcombat_desc7e',
        position: '1ally_1234enemy',
        name: 'Intimidate 5',
        attacktype:`Melee`,
        accuracy:`115 / DMG Mod: -80%`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -33% DMG (3 rds) (140% Base)<br>
        -5 SPD (3 rds) (140% Base)<br>
        Self: Mark (4 rds)<br>
        Buff Self<br>
        +4 SPD (4 rds)<br>
        `,
    },
]
const MAACombatSkills = [

    //Crush
    {
        num:`1`,
        extratext:`Always Unlocked`,
        id: 'maacombat_desc1a',
        position: '12ally_123enemy',
        name: 'Crush 1',
        attacktype:`Melee`,
        accuracy:'85',
        critmod:'+5.0%',
    },

    {
        num:`1`,
        id: 'maacombat_desc1b',
        position: '12ally_123enemy',
        name: 'Crush 2',
        attacktype:`Melee`,
        accuracy:'90',
        critmod:'+6.0%',
    },

    {
        num:`1`,
        id: 'maacombat_desc1c',
        position: '12ally_123enemy',
        name: 'Crush 3',
        attacktype:`Melee`,
        accuracy:'95',
        critmod:'+7.0%',
    },

    {
        num:`1`,
        id: 'maacombat_desc1d',
        position: '12ally_123enemy',
        name: 'Crush 4',
        attacktype:`Melee`,
        accuracy:'100',
        critmod:'+8.0%',
    },


    {
        num:`1`,
        id: 'maacombat_desc1e',
        position: '12ally_123enemy',
        name: 'Crush 5',
        attacktype:`Melee`,
        accuracy:'105',
        critmod:'+9.0%',
    },

     //Rampart

     {
        num:`2`,
        id: 'maacombat_desc2a',
        position: '123ally_12enemy',
        name: 'Rampart 1',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'90',
        dmgmod:`-60%`,
        critmod:'+5.0%',        
        description:`
        Knockback1a<br>
        Stun2
        `,
    },

    {
        num:`2`,
        id: 'maacombat_desc2b',
        position: '123ally_12enemy',
        name: 'Rampart 2',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'95',
        dmgmod:`-60%`,
        critmod:'+6.0%',        
        description:`
        Knockback1b<br>
        Stun3
        `,
    },

    {
        num:`2`,
        id: 'maacombat_desc2c',
        position: '123ally_12enemy',
        name: 'Rampart 3',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'100',
        dmgmod:`-60%`,
        critmod:'+7.0%',        
        description:`
        Knockback1c<br>
        Stun4
        `,
    },

    {
        num:`2`,
        id: 'maacombat_desc2d',
        position: '123ally_12enemy',
        name: 'Rampart 4',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'105',
        dmgmod:`-60%`,
        critmod:'+8.0%',        
        description:`
        Knockback1d<br>
        Stun5
        `,
    },

    {
        num:`2`,
        id: 'maacombat_desc2e',
        position: '123ally_12enemy',
        name: 'Rampart 5',
        attacktype:`Melee`,
        movement:`Forward 1`,
        accuracy:'110',
        dmgmod:`-60%`,
        critmod:'+9.0%',        
        description:`
        Knockback1e<br>
        Stun6
        `,
    },

    //Bellow

    {
        num:`3`,
        id: 'maacombat_desc3a',
        position: '1234ally_1234cleaveenemy',
        name: "Bellow 1",
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:`-100%`,
        description:`
        Debuff Target<br>
        -5 DODGE (3 rds) (100% Base)<br>
        -5 SPD (3 rds) (100% Base)<br>
        CRITs Received Chance: +5% While Marked (3 rds) (100% Base)<br>
        `
    },

    {
        num:`3`,
        id: 'maacombat_desc3b',
        position: '1234ally_1234cleaveenemy',
        name: `Bellow 2`,
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-100%`,
        description:`
        Debuff Target<br>
        -6 DODGE (3 rds) (110% Base)<br>
        -5 SPD (3 rds) (110% Base)<br>
        CRITs Received Chance: +5% While Marked (3 rds) (110% Base)<br>
        `
    },


    {
        num:`3`,
        id: 'maacombat_desc3c',
        position: '1234ally_1234cleaveenemy',
        name: `Bellow 3`,
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-100%`,
        description:`
        Debuff Target<br>
        -7 DODGE (3 rds) (120% Base)<br>
        -6 SPD (3 rds) (120% Base)<br>
        CRITs Received Chance: +5% While Marked (3 rds) (120% Base)<br>
        `
    },


    {
        num:`3`,
        id: 'maacombat_desc3d',
        position: '1234ally_1234cleaveenemy',
        name: `Bellow 4`,
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-100%`,
        description:`
        Debuff Target<br>
        -8 DODGE (3 rds) (130% Base)<br>
        -6 SPD (3 rds) (130% Base)<br>
        CRITs Received Chance: +5% While Marked (3 rds) (130% Base)<br>
        `
    },


    {
        num:`3`,
        id: 'maacombat_desc3e',
        position: '1234ally_1234cleaveenemy',
        name: `Bellow 5`,
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-100%`,
        description:`
        Debuff Target<br>
        -10 DODGE (3 rds) (140% Base)<br>
        -7 SPD (3 rds) (140% Base)<br>
        CRITs Received Chance: +5% While Marked (3 rds) (140% Base)<br>
        `
    },

    //Defender

    {
        num:`4`,
        id: 'maacombat_desc4a',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Defender 1',
        description:`
        Guard Target Ally (3 rds)<br>
        Buff Self<br>
        +15% PROT (4 rds)<br>
        `,
    },

    {
        num:`4`,
        id: 'maacombat_desc4b',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Defender 2',
        description:`
        Guard Target Ally (3 rds)<br>
        Buff Self<br>
        +18% PROT (4 rds)<br>
        `,
    },

    {
        num:`4`,
        id: 'maacombat_desc4c',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Defender 3',
        description:`
        Guard Target Ally (3 rds)<br>
        Buff Self<br>
        +22% PROT (4 rds)<br>
        `,
    },

    {
        num:`4`,
        id: 'maacombat_desc4d',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Defender 4',
        description:`
        Guard Target Ally (3 rds)<br>
        Buff Self<br>
        +26% PROT (4 rds)<br>
        `,
    },

    {
        num:`4`,
        id: 'maacombat_desc4e',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Defender 5',
        description:`
        Guard Target Ally (3 rds)<br>
        Buff Self<br>
        +30% PROT (4 rds)<br>
        `,
    },


    //Retribution

    {
        num:`5`,
        id: 'maacombat_desc5a',
        position: '123ally_123enemy',
        name: 'Retribution 1',
        attacktype:`Melee`,
        accuracy:'85 / DMG Mod: -75% / CRIT Mod: +2.5%',
        description:`
        Mark Self (2 rds) <br>
        Activate Riposte (3 rds)<br>
        Riposte: -40% DMG<br>
        `,
    },

    {
        num:`5`,
        id: 'maacombat_desc5b',
        position: '123ally_123enemy',
        name: 'Retribution 2',
        attacktype:`Melee`,
        accuracy:'90 / DMG Mod: -75% / CRIT Mod: +3.5%',
        description:`
        Mark Self (2 rds) <br>
        Activate Riposte (3 rds)<br>
        Riposte: -35% DMG / +1% CRIT <br>
        `,
    },

    {
        num:`5`,
        id: 'maacombat_desc5c',
        position: '123ally_123enemy',
        name: 'Retribution 3',
        attacktype:`Melee`,
        accuracy:'95 / DMG Mod: -75% / CRIT Mod: +4.5%',
        description:`
        Mark Self (2 rds) <br>
        Activate Riposte (3 rds)<br>
        Riposte: -30% DMG / +2% CRIT <br>
        `,
    },

    {
        num:`5`,
        id: 'maacombat_desc5d',
        position: '123ally_123enemy',
        name: 'Retribution 4',
        attacktype:`Melee`,
        accuracy:'100 / DMG Mod: -75% / CRIT Mod: +5.5%',
        description:`
        Mark Self (2 rds) <br>
        Activate Riposte (3 rds)<br>
        Riposte: -25% DMG / +3% CRIT <br>
        `,
    },

    {
        num:`5`,
        id: 'maacombat_desc5e',
        position: '123ally_123enemy',
        name: 'Retribution 5',
        attacktype:`Melee`,
        accuracy:'105 / DMG Mod: -75% / CRIT Mod: +6.5%',
        description:`
        Mark Self (2 rds) <br>
        Activate Riposte (3 rds)<br>
        Riposte: -20% DMG / +4% CRIT <br>
        `,
    },

    //Command

    {
        num:`6`,
        id: 'maacombat_desc6a',
        isdoubleicon:true,
        position: '1234ally_1234cleaveheal',
        name: 'Command 1',
        description:`
        Buff Party<br>
        +5 ACC (3 rds)<br>
        +4% CRIT (3 rds)<br>
        +15% DMG when Guarded (3 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'maacombat_desc6b',
        isdoubleicon:true,
        position: '1234ally_1234cleaveheal',
        name: 'Command 2',
        description:`
        Buff Party<br>
        +6 ACC (3 rds)<br>
        +5% CRIT (3 rds)<br>
        +17% DMG when Guarded (3 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'maacombat_desc6c',
        isdoubleicon:true,
        position: '1234ally_1234cleaveheal',
        name: 'Command 3',
        description:`
        Buff Party<br>
        +7 ACC (3 rds)<br>
        +6% CRIT (3 rds)<br>
        +20% DMG when Guarded (3 rds)<br>
        `,
    },

    {   
        num:`6`,
        id: 'maacombat_desc6d',
        isdoubleicon:true,
        position: '1234ally_1234cleaveheal',
        name: 'Command 4',
        description:`
        Buff Party<br>
        +8 ACC (3 rds)<br>
        +7% CRIT (3 rds)<br>
        +22% DMG when Guarded (3 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'maacombat_desc6e',
        isdoubleicon:true,
        position: '1234ally_1234cleaveheal',
        name: 'Command 5',
        description:`
        Buff Party<br>
        +10 ACC (3 rds)<br>
        +8% CRIT (3 rds)<br>
        +25% DMG when Guarded (3 rds)<br>
        `,
    },




    //Bolster

    {
        num:`7`,
        id: 'maacombat_desc7a',
        uses:`1`,
        isdoubleicon:true,
        position: '1234ally_1234cleaveheal',
        name: 'Bolster 1',
        description:`
        Buff Party <br>
        +5 DODGE (1 Battle) <br>
        -10% Stress (1 Battle)<br>
        `,
    },

    {
        num:`7`,
        id: 'maacombat_desc7b',
        uses:`1`,
        isdoubleicon:true,
        position: '1234ally_1234cleaveheal',
        name: 'Bolster 2',
        description:`
        Buff Party <br>
        +6 DODGE (1 Battle) <br>
        -10% Stress (1 Battle)<br>
        `,
    },

    {
        num:`7`,
        id: 'maacombat_desc7c',
        uses:`1`,
        isdoubleicon:true,
        position: '1234ally_1234cleaveheal',
        name: 'Bolster 3',
        description:`
        Buff Party <br>
        +7 DODGE (1 Battle) <br>
        -15% Stress (1 Battle)<br>
        `,
    },

    {
        num:`7`, 
        id: 'maacombat_desc7d',
        uses:`1`,
        isdoubleicon:true,
        position: '1234ally_1234cleaveheal',
        name: 'Bolster 4',
        description:`
        Buff Party <br>
        +8 DODGE (1 Battle) <br>
        -15% Stress (1 Battle)<br>
        `,
    },


    {
        num:`7`,
        id: 'maacombat_desc7e',
        uses:`1`,
        isdoubleicon:true,
        position: '1234ally_1234cleaveheal',
        name: 'Bolster 5',
        description:`
        Buff Party <br>
        +10 DODGE (1 Battle) <br>
        -20% Stress (1 Battle)<br>
        `,
    },
]
const MusketeerCombatSkills = [

    //Aimed Shot
    {
        num:`1`,
        extratext:`Always Unlocked`,
        id: 'muskcombat_desc1a',
        position: '34ally_234enemy',
        name: 'Aimed Shot 1',
        attacktype:`Ranged`,
        accuracy:'95',
        critmod:'+5.0%',
        description:`
        +50% DMG vs Marked <br>
        +9% CRIT vs Marked <br>
        `,
    },

    {
        num:`1`,
        id: 'muskcombat_desc1b',
        position: '34ally_234enemy',
        name: 'Aimed Shot 2',
        attacktype:`Ranged`,
        accuracy:'100',
        critmod:'+6.0%',
        description:`
        +60% DMG vs Marked <br>
        +10% CRIT vs Marked <br>
        `,
    },

    {
        num:`1`,
        id: 'muskcombat_desc1c',
        position: '34ally_234enemy',
        name: 'Aimed Shot 3',
        attacktype:`Ranged`,
        accuracy:'105',
        critmod:'+7.0%',
        description:`
        +70% DMG vs Marked <br>
        +11% CRIT vs Marked <br>
        `,
    },

    {
        num:`1`,
        id: 'muskcombat_desc1d',
        position: '34ally_234enemy',
        name: 'Aimed Shot 4',
        attacktype:`Ranged`,
        accuracy:'110',
        critmod:'+8.0%',
        description:`
        +80% DMG vs Marked <br>
        +12% CRIT vs Marked <br>
        `,
    },


    {
        num:`1`,
        id: 'muskcombat_desc1e',
        position: '34ally_234enemy',
        name: 'Aimed Shot 5',
        attacktype:`Ranged`,
        accuracy:'115',
        critmod:'+9.0%',
        description:`
        +100% DMG vs Marked <br>
        +13% CRIT vs Marked <br>
        `,
    },

     //Smokescreen

     {
        num:`2`,
        id: 'muskcombat_desc2a',
        position: '34ally_34cleaveenemy',
        name: 'Smokescreen 1',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-80%`,
        critmod:'-10.0%',
        description:`
        Debuff Target<br>
        -15 ACC (2 rds) (100% Base)<br>
        -15 CRIT (2 rds) (100% Base)<br
        `,
    },

    {
        num:`2`,
        id: 'muskcombat_desc2b',
        position: '34ally_34cleaveenemy',
        name: 'Smokescreen 2',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-80%`,
        critmod:'-9.0%',
        description:`
        Debuff Target<br>
        -16 ACC (2 rds) (110% Base)<br>
        -16 CRIT (2 rds) (110% Base)<br
        `,
    },

    {
        num:`2`,
        id: 'muskcombat_desc2c',
        position: '34ally_34cleaveenemy',
        name: 'Smokescreen 3',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-80%`,
        critmod:'-8.0%',
        description:`
        Debuff Target<br>
        -17 ACC (2 rds) (120% Base)<br>
        -17 CRIT (2 rds) (120% Base)<br
        `,
    },

    {
        num:`2`,
        id: 'muskcombat_desc2d',
        position: '34ally_34cleaveenemy',
        name: 'Smokescreen 4',
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-80%`,
        critmod:'-7.0%',
        description:`
        Debuff Target<br>
        -18 ACC (2 rds) (130% Base)<br>
        -18 CRIT (2 rds) (130% Base)<br
        `,
    },

    {
        num:`2`,
        id: 'muskcombat_desc2e',
        position: '34ally_34cleaveenemy',
        name: 'Smokescreen 5',
        attacktype:`Ranged`,
        accuracy:'115',
        dmgmod:`-80%`,
        critmod:'-6.0%',
        description:`
        Debuff Target<br>
        -20 ACC (2 rds) (140% Base)<br>
        -19 CRIT (2 rds) (140% Base)<br
        `,
    },

    //Call the Shot

    {
        num:`3`,
        id: 'muskcombat_desc3a',
        position: '34ally_234enemy',
        name: "Call the Shot 1",
        attacktype:`Ranged`,
        accuracy:'100 / DMG Mod: -100%',
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -20 DODGE (2 rds) (100% Base)
        `
    },

    {
        num:`3`,
        id: 'muskcombat_desc3b',
        position: '34ally_234enemy',
        name: `Call the Shot 2`,
        attacktype:`Ranged`,
        accuracy:'105 / DMG Mod: -100%',
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -22 DODGE (2 rds) (110% Base)
        `
    },


    {
        num:`3`,
        id: 'muskcombat_desc3c',
        position: '34ally_234enemy',
        name: `Call the Shot 3`,
        attacktype:`Ranged`,
        accuracy:'110 / DMG Mod: -100%',
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -25 DODGE (2 rds) (120% Base)
        `
    },


    {
        num:`3`,
        id: 'muskcombat_desc3d',
        position: '34ally_234enemy',
        name: `Call the Shot 4`,
        attacktype:`Ranged`,
        accuracy:'115 / DMG Mod: -100%',
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -27 DODGE (2 rds) (130% Base)
        `
    },


    {
        num:`3`,
        id: 'muskcombat_desc3e',
        position: '34ally_234enemy',
        name: `Call the Shot 5`,
        attacktype:`Ranged`,
        accuracy:'120 / DMG Mod: -100%',
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -30 DODGE (2 rds) (140% Base)
        `
    },

    //Buckshot

    {
        num:`4`,
        id: 'muskcombat_desc4a',
        position: '34ally_12cleaveenemy',
        name: 'Buckshot 1',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-50%`,
        critmod:'+2.0%',
        description:`
        Knockback 1 (75% Base) <br>
        `,
    },

    {
        num:`4`,
        id: 'muskcombat_desc4b',
        position: '34ally_12cleaveenemy',
        name: 'Buckshot 2',
        attacktype:`Ranged`,        
        accuracy:'100',
        dmgmod:`-50%`,
        critmod:'+3.0%',
        description:`
        Knockback 1 (85% Base) <br>
        `,
    },

    {
        num:`4`,
        id: 'muskcombat_desc4c',
        position: '34ally_12cleaveenemy',
        name: 'Buckshot 3',
        attacktype:`Ranged`,        
        accuracy:'105',
        dmgmod:`-50%`,
        critmod:'+4.0%',
        description:`
        Knockback 1 (95% Base) <br>
        `,
    },

    {
        num:`4`,
        id: 'muskcombat_desc4d',
        position: '34ally_12cleaveenemy',
        name: 'Buckshot 4',
        attacktype:`Ranged`,        
        accuracy:'110',
        dmgmod:`-50%`,
        critmod:'+5.0%',
        description:`
        Knockback 1 (105% Base) <br>
        `,
    },

    {
        num:`4`,
        id: 'muskcombat_desc4e',
        position: '34ally_12cleaveenemy',
        name: 'Buckshot 5',
        attacktype:`Ranged`,        
        accuracy:'115',
        dmgmod:`-50%`,
        critmod:'+6.0%',
        description:`
        Knockback 1 (115% Base) <br>
        `,
    },


    //Sidearm

    {
        num:`5`,
        id: 'muskcombat_desc5a',
        position: '1234ally_1234enemy',
        name: 'Sidearm 1',
        attacktype:`Random Target Ranged`,
        accuracy:'75',
        dmgmod:`-10%`,
        description:`
        Buff Self<br>
        +3 SPD (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'muskcombat_desc5b',
        position: '1234ally_1234enemy',
        name: 'Sidearm 2',
        attacktype:`Random Target Ranged`,
        accuracy:'80',
        dmgmod:`-10%`,
        critmod:'+1.0%',
        description:`
        Buff Self<br>
        +3 SPD (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'muskcombat_desc5c',
        position: '1234ally_1234enemy',
        name: 'Sidearm 3',
        attacktype:`Random Target Ranged`,
        accuracy:'85',
        dmgmod:`-10%`,
        critmod:'+2.0%',
        description:`
        Buff Self<br>
        +4 SPD (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'muskcombat_desc5d',
        position: '1234ally_1234enemy',
        name: 'Sidearm 4',
        attacktype:`Random Target Ranged`,
        accuracy:'90',
        dmgmod:`-10%`,
        critmod:'+3.0%',
        description:`
        Buff Self<br>
        +4 SPD (4 rds)
        `,
    },

    {
        num:`5`,
        id: 'muskcombat_desc5e',
        position: '1234ally_1234enemy',
        name: 'Sidearm 5',
        attacktype:`Random Target Ranged`,
        accuracy:'95',
        dmgmod:`-10%`,
        critmod:'+4.0%',
        description:`
        Buff Self<br>
        +5 SPD (4 rds)
        `,
    },

    //Patch Up

    {
        num:`6`,
        id: 'muskcombat_desc6a',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Patch Up 1',
        description:`
        Heal 2-3<br>
        Buff Target<br>
        +20% Healing Received (3 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'muskcombat_desc6b',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Patch Up 2',
        description:`
        Heal 3-3<br>
        Buff Target<br>
        +24% Healing Received (3 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'muskcombat_desc6c',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Patch Up 3',
        description:`
        Heal 3-4<br>
        Buff Target<br>
        +28% Healing Received (3 rds)<br>
        `,
    },

    {   
        num:`6`,
        id: 'muskcombat_desc6d',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Patch Up 4',
        description:`
        Heal 4-4<br>
        Buff Target<br>
        +33% Healing Received (3 rds)<br>
        `,
    },

    {
        num:`6`,
        id: 'muskcombat_desc6e',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Patch Up 5',
        description:`
        Heal 4-5<br>
        Buff Target<br>
        +38% Healing Received (3 rds)<br>
        `,
    },




    //Skeet Shot

    {
        num:`7`,
        id: 'muskcombat_desc7a',
        position: '1234ally_1234cleaveenemy',
        name: 'Skeet Shot 1',
        attacktype:`Ranged`,
        accuracy:'95 / DMG Mod: -100%',
        description:`
        Bypass Stealth / De-stealth <br>
        Torch +3 <br>
        Other Heroes:<br>
        Clear Stun and Mark<br>
        Stress -1 (60% Chance)<br>
        `,
    },

    {
        num:`7`,
        id: 'muskcombat_desc7b',
        position: '1234ally_1234cleaveenemy',
        name: 'Skeet Shot 2',
        attacktype:`Ranged`,
        accuracy:'100 / DMG Mod: -100%',
        description:`
        Bypass Stealth / De-stealth <br>
        Torch +4 <br>
        Other Heroes:<br>
        Clear Stun and Mark<br>
        Stress -2 (60% Chance)<br>
        `,
    },

    {
        num:`7`,
        id: 'muskcombat_desc7c',
        position: '1234ally_1234cleaveenemy',
        name: 'Skeet Shot 3',
        attacktype:`Ranged`,
        accuracy:'105 / DMG Mod: -100%',
        description:`
        Bypass Stealth / De-stealth <br>
        Torch +5 <br>
        Other Heroes:<br>
        Clear Stun and Mark<br>
        Stress -2 (67% Chance)<br>
        `,
    },

    {
        num:`7`, 
        id: 'muskcombat_desc7d',
        position: '1234ally_1234cleaveenemy',
        name: 'Skeet Shot 4',
        attacktype:`Ranged`,
        accuracy:'110 / DMG Mod: -100%',
        description:`
        Bypass Stealth / De-stealth <br>
        Torch +6 <br>
        Other Heroes:<br>
        Clear Stun and Mark<br>
        Stress -3 (60% Chance)<br>
        `,
    },


    {
        num:`7`,
        id: 'muskcombat_desc7e',
        position: '1234ally_1234cleaveenemy',
        name: 'Skeet Shot 5',
        attacktype:`Ranged`,
        accuracy:'115 / DMG Mod: -100%',
        description:`
        Bypass Stealth / De-stealth <br>
        Torch +7 <br>
        Other Heroes:<br>
        Clear Stun and Mark<br>
        Stress -3 (67% Chance)<br>
        `,
    },
]
const OccultistCombatSkills = [

    //Sacrificial Stab
    {
        num:`1`,
        id: 'occcombat_desc1a',
        position: '123ally_123enemy',
        name: 'Sacrificial Stab 1',
        attacktype:`Melee`,
        accuracy:'80',
        critmod:'+9.0%',
        description:`
        +15% DMG vs Eldritch <br>
        `,
    },

    {
        num:`1`,
        id: 'occcombat_desc1b',
        position: '123ally_123enemy',
        name: 'Sacrificial Stab 2',
        attacktype:`Melee`,
        accuracy:'85',
        critmod:'+10.0%',
        description:`
        +20% DMG vs Eldritch <br>
        `,
    },

    {
        num:`1`,
        id: 'occcombat_desc1c',
        position: '123ally_123enemy',
        name: 'Sacrificial Stab 3',
        attacktype:`Melee`,
        accuracy:'90',
        critmod:'+11.0%',
        description:`
        +25% DMG vs Eldritch <br>
        `,
    },

    {
        num:`1`,
        id: 'occcombat_desc1d',
        position: '123ally_123enemy',
        name: 'Sacrificial Stab 4',
        attacktype:`Melee`,
        accuracy:'95',
        critmod:'+12.0%',
        description:`
        +30% DMG vs Eldritch <br>
        `,
    },


    {
        num:`1`,
        id: 'occcombat_desc1e',
        position: '1234ally_123enemy',
        name: 'Sacrificial Stab 5',
        movement:`Forward 1`,
        attacktype:`Melee`,
        accuracy:'100',
        critmod:'+13.0%',
        description:`
        +35% DMG vs Eldritch <br>
        `,
    },

     //Abyssal Artillery

     {
        num:`2`,
        id: 'occcombat_desc2a',
        position: '34ally_34cleaveenemy',
        name: 'Abyssal Artillery 1',
        attacktype:`Ranged`,
        accuracy:'85',
        dmgmod:`-33%`,
        description:`
        +15% DMG vs Eldritch <br>
        `,
    },

    {
        num:`2`,
        id: 'occcombat_desc2b',
        position: '34ally_34cleaveenemy',
        name: 'Abyssal Artillery 2',
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:`-33%`,
        critmod:`+1.0%`,
        description:`
        +17% DMG vs Eldritch <br>
        `,
    },

    {
        num:`2`,
        id: 'occcombat_desc2c',
        position: '34ally_34cleaveenemy',
        name: 'Abyssal Artillery 3',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-33%`,
        critmod:`+2.0%`,
        description:`
        +20% DMG vs Eldritch <br>
        `,
    },

    {
        num:`2`,
        id: 'occcombat_desc2d',
        position: '34ally_34cleaveenemy',
        name: 'Abyssal Artillery 4',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-33%`,
        critmod:`+3.0%`,
        description:`
        +22% DMG vs Eldritch <br>
        `,
    },

    {
        num:`2`,
        id: 'occcombat_desc2e',
        position: '34ally_34cleaveenemy',
        name: 'Abyssal Artillery 5',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-33%`,
        critmod:`+4.0%`,
        description:`
        +25% DMG vs Eldritch <br>
        `,
    },

    //Weakening Curse

    {
        num:`3`,
        id: 'occcombat_desc3a',
        position: '1234ally_1234enemy',
        name: "Weakening Curse 1",
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-75%`,
        critmod:`+5.0%`,        
        description:`
        Debuff Target<br>
        -10% DMG (3 rds) (100% Base)<br>
        -10% PROT (3 rds) (100% Base)<br>
        `
    },

    {
        num:`3`,
        id: 'occcombat_desc3b',
        position: '1234ally_1234enemy',
        name: `Weakening Curse 2`,
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-75%`,
        critmod:`+6.0%`,        
        description:`
        Debuff Target<br>
        -12% DMG (3 rds) (110% Base)<br>
        -13% PROT (3 rds) (110% Base)<br>
        `
    },


    {
        num:`3`,
        id: 'occcombat_desc3c',
        position: '1234ally_1234enemy',
        name: `Weakening Curse 3`,
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-75%`,
        critmod:`+7.0%`,        
        description:`
        Debuff Target<br>
        -15% DMG (3 rds) (120% Base)<br>
        -15% PROT (3 rds) (120% Base)<br>
        `
    },


    {
        num:`3`,
        id: 'occcombat_desc3d',
        position: '1234ally_1234enemy',
        name: `Weakening Curse 4`,
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-75%`,
        critmod:`+8.0%`,        
        description:`
        Debuff Target<br>
        -17% DMG (3 rds) (130% Base)<br>
        -17% PROT (3 rds) (130% Base)<br>
        `
    },


    {
        num:`3`,
        id: 'occcombat_desc3e',
        position: '1234ally_1234enemy',
        name: `Weakening Curse 5`,
        attacktype:`Ranged`,
        accuracy:'115',
        dmgmod:`-75%`,
        critmod:`+9.0%`,        
        description:`
        Debuff Target<br>
        -20% DMG (3 rds) (140% Base)<br>
        -20% PROT (3 rds) (140% Base)<br>
        `
    },

    //Wyrd Reconstruction

    {
        num:`4`,
        id: 'occcombat_desc4a',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Wyrd Reconstruction 1',
        description:`
        Target Hero:<br>
        Heal 0-13 <br>
        Bleed (60% Base)<br>
        1pt/rd for 3 rds<br>
        `,
    },

    {
        num:`4`,
        extratext:`Always Unlocked`,
        id: 'occcombat_desc4b',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Wyrd Reconstruction 2',
        description:`
        Target Hero:<br>
        Heal 0-15 <br>
        Bleed (70% Base)<br>
        1pt/rd for 3 rds<br>
        `,
    },

    {
        num:`4`,
        id: 'occcombat_desc4c',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Wyrd Reconstruction 3',
        description:`
        Target Hero:<br>
        Heal 0-17 <br>
        Bleed (70% Base)<br>
        2pts/rd for 3 rds<br>
        `,
    },

    {
        num:`4`,
        id: 'occcombat_desc4d',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Wyrd Reconstruction 4',
        description:`
        Target Hero:<br>
        Heal 0-19 <br>
        Bleed (80% Base)<br>
        2pts/rd for 3 rds<br>
        `,
    },

    {
        num:`4`,
        id: 'occcombat_desc4e',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Wyrd Reconstruction 5',
        description:`
        Target Hero:<br>
        Heal 0-22 <br>
        Bleed (85% Base)<br>
        3pts/rd for 3 rds<br>
        `,
    },


    //Vulnerability Hex

    {
        num:`5`,
        id: 'occcombat_desc5a',
        position: '1234ally_1234enemy',
        name: 'Vulnerability Hex 1',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-90%`,
        critmod:`+5.0%`,        
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -15 DODGE (3 rds) (100% Base)<br>
        `
    },

    {
        num:`5`,
        id: 'occcombat_desc5b',
        position: '1234ally_1234enemy',
        name: 'Vulnerability Hex 2',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-90%`,
        critmod:`+6.0%`,        
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -16 DODGE (3 rds) (110% Base)<br>
        `
    },

    {
        num:`5`,
        id: 'occcombat_desc5c',
        position: '1234ally_1234enemy',
        name: 'Vulnerability Hex 3',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-90%`,
        critmod:`+7.0%`,        
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -17 DODGE (3 rds) (120% Base)<br>
        `
    },

    {
        num:`5`,
        id: 'occcombat_desc5d',
        position: '1234ally_1234enemy',
        name: 'Vulnerability Hex 4',
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-90%`,
        critmod:`+8.0%`,        
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -18 DODGE (3 rds) (130% Base)<br>
        `
    },

    {
        num:`5`,
        id: 'occcombat_desc5e',
        position: '1234ally_1234enemy',
        name: 'Vulnerability Hex 5',
        attacktype:`Ranged`,
        accuracy:'115',
        dmgmod:`-90%`,
        critmod:`+9.0%`,        
        description:`
        Mark Target (3 rds)<br>
        Debuff Target<br>
        -20 DODGE (3 rds) (140% Base)<br>
        `
    },

    //Hands from the Abyss

    {
        num:`6`,
        id: 'occcombat_desc6a',
        position: '12ally_123enemy',
        name: 'Hands from the Abyss 1',
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:`-50%`,
        critmod:`+9.0%`,  
        description:`
        Stun3<br>
        Torch -5
        `,
    },

    {
        num:`6`,
        id: 'occcombat_desc6b',
        position: '12ally_123enemy',
        name: 'Hands from the Abyss 2',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-50%`,
        critmod:`+10.0%`,  
        description:`
        Stun4<br>
        Torch -5
        `,
    },

    {
        num:`6`,
        id: 'occcombat_desc6c',
        position: '12ally_123enemy',
        name: 'Hands from the Abyss 3',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-50%`,
        critmod:`+11.0%`,  
        description:`
        Stun5<br>
        Torch -5
        `,
    },

    {   
        num:`6`,
        id: 'occcombat_desc6d',
        position: '12ally_123enemy',
        name: 'Hands from the Abyss 4',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-50%`,
        critmod:`+12.0%`,  
        description:`
        Stun6<br>
        Torch -5
        `,
    },

    {
        num:`6`,
        id: 'occcombat_desc6e',
        position: '12ally_123enemy',
        name: 'Hands from the Abyss 5',
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-50%`,
        critmod:`+13.0%`,  
        description:`
        Stun7<br>
        Torch -5
        `,
    },

    //Daemon's Pull

    {
        num:`7`,
        id: 'occcombat_desc7a',
        position: '234ally_34enemy',
        name: "Daemon's Pull 1",
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:`-50%`,
        critmod:`+5.0%`,  
        description:`
        Pull2a <br>
        CLEARCORPSE
        `,
    },

    {
        num:`7`,
        id: 'occcombat_desc7b',
        position: '234ally_34enemy',
        name: "Daemon's Pull 2",
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-50%`,
        critmod:`+6.0%`,  
        description:`
        Pull2b <br>
        CLEARCORPSE
        `,
    },

    {
        num:`7`,
        id: 'occcombat_desc7c',
        position: '234ally_34enemy',
        name: "Daemon's Pull 3",
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-50%`,
        critmod:`+7.0%`,  
        description:`
        Pull2c <br>
        CLEARCORPSE
        `,
    },

    {
        num:`7`, 
        id: 'occcombat_desc7d',
        position: '234ally_34enemy',
        name: "Daemon's Pull 4",
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-50%`,
        critmod:`+8.0%`,  
        description:`
        Pull2d <br>
        CLEARCORPSE
        `,
    },

    {
        num:`7`,
        id: 'occcombat_desc7e',
        position: '234ally_34enemy',
        name: "Daemon's Pull 5",
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-50%`,
        critmod:`+9.0%`,  
        description:`
        Pull2e <br>
        CLEARCORPSE
        `,
    },
]
const PlagueDoctorCombatSkills = [

    //Noxious Blast
    {
        num:`1`,
        id: 'pdcombat_desc1a',
        position: '234ally_12enemy',
        name: 'Noxious Blast 1',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-80%`,
        critmod:'+5.0%',
        description:`
        Blight (100% Base) <br>
        5pts/rd for 3 rds <br> 
        `,
    },

    {
        num:`1`,
        id: 'pdcombat_desc1b',
        position: '234ally_12enemy',
        name: 'Noxious Blast 2',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-80%`,
        critmod:'+6.0%',
        description:`
        Blight (110% Base) <br>
        5pts/rd for 3 rds <br> 
        `,
    },

    {
        num:`1`,
        id: 'pdcombat_desc1c',
        position: '234ally_12enemy',
        name: 'Noxious Blast 3',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-80%`,
        critmod:'+7.0%',
        description:`
        Blight (120% Base) <br>
        6pts/rd for 3 rds <br> 
        Debuff Target<br>
        -6 ACC (3 rds) (120% Base)
        `,
    },

    {
        num:`1`,
        id: 'pdcombat_desc1d',
        position: '234ally_12enemy',
        name: 'Noxious Blast 4',
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-80%`,
        critmod:'+8.0%',
        description:`
        Blight (130% Base) <br>
        6pts/rd for 3 rds <br> 
        Debuff Target<br>
        -6 ACC (3 rds) (130% Base)
        `,
    },

    {
        num:`1`,
        id: 'pdcombat_desc1e',
        position: '234ally_12enemy',
        name: 'Noxious Blast 5',
        attacktype:`Ranged`,
        accuracy:'115',
        dmgmod:`-80%`,
        critmod:'+9.0%',
        description:`
        Blight (140% Base) <br>
        7pts/rd for 3 rds <br> 
        Debuff Target<br>
        -7 ACC (3 rds) (140% Base)
        `,
    },

     //Plague Grenade

     {
        num:`2`,
        extratext:`Always Unlocked`,
        id: 'pdcombat_desc2a',
        position: '34ally_34cleaveenemy',
        name: 'Plague Grenade 1',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-80%`,
        description:`
        Blight (100% Base)<br>
        4pts/rd for 3 rds
        `,
    },

    {
        num:`2`,
        id: 'pdcombat_desc2b',
        position: '34ally_34cleaveenemy',
        name: 'Plague Grenade 2',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-80%`,
        critmod:'+1.0%',        
        description:`
        Blight (110% Base)<br>
        4pts/rd for 3 rds
        `,
    },

    {
        num:`2`,
        id: 'pdcombat_desc2c',
        position: '34ally_34cleaveenemy',
        name: 'Plague Grenade 3',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-80%`,
        critmod:'+2.0%',        
        description:`
        Blight (120% Base)<br>
        5pts/rd for 3 rds
        `,
    },

    {
        num:`2`,
        id: 'pdcombat_desc2d',
        position: '34ally_34cleaveenemy',
        name: 'Plague Grenade 4',
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-80%`,
        critmod:'+3.0%',                
        description:`
        Blight (130% Base)<br>
        5pts/rd for 3 rds
        `,
    },

    {
        num:`2`,
        id: 'pdcombat_desc2e',
        position: '34ally_34cleaveenemy',
        name: 'Plague Grenade 5',
        attacktype:`Ranged`,
        accuracy:'115',
        dmgmod:`-80%`,
        critmod:'+4.0%',                
        description:`
        Blight (140% Base)<br>
        6pts/rd for 3 rds
        `,
    },

    //Blinding Gas

    {
        num:`3`,
        id: 'pdcombat_desc3a',
        uses:`3`,
        position: '34ally_34cleaveenemy',
        name: "Blinding Gas 1",
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-100%`,
        description:`
        Stun2 
        `
    },

    {
        num:`3`,
        id: 'pdcombat_desc3b',
        uses:`3`,
        position: '34ally_34cleaveenemy',
        name: `Blinding Gas 2`,
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-100%`,
        description:`
        Stun3
        `
    },

    {
        num:`3`,
        id: 'pdcombat_desc3c',
        uses:`3`,
        position: '34ally_34cleaveenemy',
        name: `Blinding Gas 3`,
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-100%`,
        description:`
        Stun4
        `
    },

    {
        num:`3`,
        id: 'pdcombat_desc3d',
        uses:`3`,
        position: '34ally_34cleaveenemy',
        name: `Blinding Gas 4`,
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-100%`,
        description:`
        Stun5 
        `
    },

    {
        num:`3`,
        id: 'pdcombat_desc3e',
        uses:`3`,
        position: '34ally_34cleaveenemy',
        name: `Blinding Gas 5`,
        attacktype:`Ranged`,
        accuracy:'115',
        dmgmod:`-100%`,
        description:`
        Stun6 
        `
    },

    //Incision

    {
        num:`4`,
        id: 'pdcombat_desc4a',
        position: '123ally_12enemy',
        name: 'Incision 1',
        attacktype:`Melee`,        
        accuracy:'85',
        critmod:`5.0%`,
        description:`
        MidBld1
        `,
    },

    {
        num:`4`,
        id: 'pdcombat_desc4b',
        position: '123ally_12enemy',
        name: 'Incision 2',
        attacktype:`Melee`,        
        accuracy:'90',
        critmod:`6.0%`,
        description:`
        MidBld2
        `,
    },

    {
        num:`4`,
        id: 'pdcombat_desc4c',
        uses:`2`,
        position: '123ally_12enemy',
        name: 'Incision 3',
        attacktype:`Melee`,        
        accuracy:'95',
        critmod:`7.0%`,
        description:`
        MidBld3
        `,
    },

    {
        num:`4`,
        id: 'pdcombat_desc4d',
        position: '123ally_12enemy',
        name: 'Incision 4',
        attacktype:`Melee`,        
        accuracy:'100',
        critmod:`8.0%`,
        description:`
        MidBld4
        `,
    },

    {
        num:`4`,
        id: 'pdcombat_desc4e',
        position: '123ally_12enemy',
        name: 'Incision 5',
        attacktype:`Melee`,        
        accuracy:'105',
        critmod:`9.0%`,
        description:`
        MidBld5
        `,
    },


    //Battlefield Medicine

    {
        num:`5`,
        id: 'pdcombat_desc5a',
        isdoubleicon:true,
        position: '34ally_1234heal',        
        name: 'Battlefield Medicine 1',
        description:`
        Target Hero:<br>
        Heal 1-1<br>
        DOTCURE<br>
        Self:<br>
        DOTCURE
        `,
    },

    {
        num:`5`,
        id: 'pdcombat_desc5b',
        isdoubleicon:true,
        position: '34ally_1234heal',         
        name: 'Battlefield Medicine 2',
        description:`
        Target Hero:<br>
        Heal 1-2<br>
        DOTCURE<br>
        Self:<br>
        DOTCURE
        `,
    },

    {
        num:`5`,
        id: 'pdcombat_desc5c',
        isdoubleicon:true,
        position: '34ally_1234heal', 
        name: 'Battlefield Medicine 3',
        description:`
        Target Hero:<br>
        Heal 2-2<br>
        DOTCURE<br>
        Self:<br>
        DOTCURE
        `,
    },

    {
        num:`5`,
        id: 'pdcombat_desc5d',
        isdoubleicon:true,
        position: '34ally_1234heal', 
        name: 'Battlefield Medicine 4',
        description:`
        Target Hero:<br>
        Heal 2-3<br>
        DOTCURE<br>
        Self:<br>
        DOTCURE
        `,
    },

    {
        num:`5`,
        id: 'pdcombat_desc5e',
        isdoubleicon:true,
        position: '34ally_1234heal', 
        name: 'Battlefield Medicine 5',
        description:`
        Target Hero:<br>
        Heal 3-3<br>
        DOTCURE<br>
        Self:<br>
        DOTCURE
        `,
    },

    //Emboldening Vapours

    {
        num:`6`,
        id: 'pdcombat_desc6a',
        uses:`2`,
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Emboldening Vapours 1',
        description:`
        Buff Target Hero:<br>
        +20% DMG (1 Battle)<br>
        +3 SPD (1 Battle)<br>
        `,
    },

    {
        num:`6`,
        id: 'pdcombat_desc6b',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Emboldening Vapours 2',
        description:`
        Buff Target Hero:<br>
        +21% DMG (1 Battle)<br>
        +3 SPD (1 Battle)<br>
        `,
    },

    {
        num:`6`,
        id: 'pdcombat_desc6c',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Emboldening Vapours 3',
        description:`
        Buff Target Hero:<br>
        +22% DMG (1 Battle)<br>
        +4 SPD (1 Battle)<br>
        `,
    },

    {   
        num:`6`,
        id: 'pdcombat_desc6d',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Emboldening Vapours 4',
        description:`
        Buff Target Hero:<br>
        +23% DMG (1 Battle)<br>
        +4 SPD (1 Battle)<br>
        `,
    },

    {
        num:`6`,
        id: 'pdcombat_desc6e',
        isdoubleicon:true,
        position: '1234ally_1234heal',
        name: 'Emboldening Vapours 5',
        description:`
        Buff Target Hero:<br>
        +25% DMG (1 Battle)<br>
        +5 SPD (1 Battle)<br>
        `,
    },




    //Disorienting Blast
    {
        num:`7`,
        id: 'pdcombat_desc7a',
        position: '234ally_234enemy',
        name: 'Disorienting Blast 1',
        attacktype:`Ranged`,
        accuracy:'95 / DMG Mod: -100%',
        description:`
        Shuffle1 <br>
        Stun2 <br>
        CLEARCORPSE
        `,
    },

    {
        num:`7`,
        id: 'pdcombat_desc7b',
        position: '234ally_234enemy',
        name: 'Disorienting Blast 2',
        attacktype:`Ranged`,
        accuracy:'100 / DMG Mod: -100%',
        description:`
        Shuffle2 <br>
        Stun3 <br>
        CLEARCORPSE
        `,
    },

    {
        num:`7`,
        id: 'pdcombat_desc7c',
        position: '234ally_234enemy',
        name: 'Disorienting Blast 3',
        attacktype:`Ranged`,
        accuracy:'105 / DMG Mod: -100%',
        description:`
        Shuffle3 <br>
        Stun4 <br>
        CLEARCORPSE
        `,
    },

    {
        num:`7`, 
        id: 'pdcombat_desc7d',
        position: '234ally_234enemy',
        name: 'Disorienting Blast 4',
        attacktype:`Ranged`,
        accuracy:'110 / DMG Mod: -100%',
        description:`
        Shuffle4 <br>
        Stun5 <br>
        CLEARCORPSE
        `,
    },


    {
        num:`7`,
        id: 'pdcombat_desc7e',
        position: '234ally_234enemy',
        name: 'Disorienting Blast 5',
        attacktype:`Ranged`,
        accuracy:'115 / DMG Mod: -100%',
        description:`
        Shuffle5 <br>
        Stun6 <br>
        CLEARCORPSE
        `,
    },
]
const ShieldbreakerCombatSkills = [

    //Pierce
    {
        num:`1`,
        extratext:`Always Unlocked`,
        id: 'sbcombat_desc1a',
        position: '123ally_1234enemy',
        name: 'Pierce 1',
        movement:`Forward 1`,
        attacktype:`Melee`,
        accuracy:'90',
        dmgmod:`-10%`,
        critmod:'+5.0%',
        description:`
        Armor Piercing

        `,
    },

    {
        num:`1`,
        id: 'sbcombat_desc1b',
        position: '123ally_1234enemy',
        name: 'Pierce 2',
        movement:`Forward 1`,
        attacktype:`Melee`,
        accuracy:'95',
        dmgmod:`-10%`,
        critmod:'+6.0%',
        description:`
        Armor Piercing        
        `,
    },

    {
        num:`1`,
        id: 'sbcombat_desc1c',
        position: '123ally_1234enemy',
        name: 'Pierce 3',
        movement:`Forward 1`,
        attacktype:`Melee`,
        accuracy:'100',
        dmgmod:`-10%`,
        critmod:'+7.0%',
        description:`
        Armor Piercing
        `,
    },

    {
        num:`1`,
        id: 'sbcombat_desc1d',
        position: '123ally_1234enemy',
        name: 'Pierce 4',
        movement:`Forward 1`,
        attacktype:`Melee`,
        accuracy:'105',
        dmgmod:`-10%`,
        critmod:'+8.0%',
        description:`
        Armor Piercing
        `,
    },

    {
        num:`1`,
        id: 'sbcombat_desc1e',
        position: '123ally_1234enemy',
        name: 'Pierce 5',
        movement:`Forward 1`,
        attacktype:`Melee`,
        accuracy:'110',
        dmgmod:`-10%`,
        critmod:'+9.0%',
        description:`
        Armor Piercing
        `,
    },

     //Puncture

     {
        num:`2`,
        id: 'sbcombat_desc2a',
        position: '1234ally_1234enemy',
        name: 'Puncture 1',
        movement:`Forward 1`,
        attacktype:`Ranged`,
        accuracy:'90 / DMG Mod: -50%',        
        description:`
        Bypasses and Breaks Guard<br>
        Apply Can't be Guarded (2 rds) (500% Base)<br>
        <span class = "chance">(Applies even on Miss/Dodge)</span><br>
        On Attack Hit:<br>
        Pull2a<br>
        Debuff Target<br>
        -1 SPD (4 rds) (100% Base) 

        

        `,
    },

    {
        num:`2`,
        id: 'sbcombat_desc2b',
        position: '1234ally_1234enemy',
        name: 'Puncture 2',
        movement:`Forward 1`,
        attacktype:`Ranged`,
        accuracy:'95 / DMG Mod: -50%',
        description:`
        Bypasses and Breaks Guard<br>
        Apply Can't be Guarded (2 rds) (500% Base)<br>
        <span class = "chance">(Applies even on Miss/Dodge)</span><br>
        On Attack Hit:<br>
        Pull2b<br>
        Debuff Target<br>
        -1 SPD (4 rds) (110% Base)   
        `,
    },

    {
        num:`2`,
        id: 'sbcombat_desc2c',
        position: '1234ally_1234enemy',
        name: 'Puncture 3',
        movement:`Forward 1`,
        attacktype:`Ranged`,
        accuracy:'100 / DMG Mod: -50%',
        description:`
        Bypasses and Breaks Guard<br>
        Apply Can't be Guarded (2 rds) (500% Base)<br>
        <span class = "chance">(Applies even on Miss/Dodge)</span><br>
        On Attack Hit:<br>
        Pull2c<br>
        Debuff Target<br>
        -2 SPD (4 rds) (120% Base)   
        `,
    },

    {
        num:`2`,
        id: 'sbcombat_desc2d',
        position: '1234ally_1234enemy',
        name: 'Puncture 4',
        movement:`Forward 1`,
        attacktype:`Ranged`,
        accuracy:'105 / DMG Mod: -50%',
        description:`
        Bypasses and Breaks Guard<br>
        Apply Can't be Guarded (2 rds) (500% Base)<br>
        <span class = "chance">(Applies even on Miss/Dodge)</span><br>
        On Attack Hit:<br>
        Pull2d<br>
        Debuff Target<br>
        -2 SPD (4 rds) (130% Base)  
        `,
    },

    {
        num:`2`,
        id: 'sbcombat_desc2e',
        position: '1234ally_1234enemy',
        name: 'Puncture 5',
        movement:`Forward 1`,
        attacktype:`Ranged`,
        accuracy:'110 / DMG Mod: -50%',
        description:`
        Bypasses and Breaks Guard<br>
        Apply Can't be Guarded (2 rds) (500% Base)<br>
        <span class = "chance">(Applies even on Miss/Dodge)</span><br>
        On Attack Hit:<br>
        Pull2e<br>
        Debuff Target<br>
        -3 SPD (4 rds) (140% Base)   
        `,
    },

    //Adder's Kiss

    {
        num:`3`,
        id: 'sbcombat_desc3a',
        position: '1ally_12enemy',
        name: "Adder's Kiss 1",
        attacktype:`Melee`,
        movement:`Back 1`,
        accuracy:'90',
        critmod:`+5.0%`,
        description:`
        MidPsn1 

        `
    },

    {
        num:`3`,
        id: 'sbcombat_desc3b',
        position: '1ally_12enemy',
        name: `Adder's Kiss 2`,
        attacktype:`Melee`,
        movement:`Back 1`,
        accuracy:'95',
        critmod:`+6.0%`,
        description:`
        MidPsn2  
        `
    },

    {
        num:`3`,
        id: 'sbcombat_desc3c',
        position: '1ally_12enemy',
        name: `Adder's Kiss 3`,
        attacktype:`Melee`,
        movement:`Back 1`,
        accuracy:'100',
        critmod:`+7.0%`,
        description:`
        MidPsn3  
        `
    },

    {
        num:`3`,
        id: 'sbcombat_desc3d',
        position: '1ally_12enemy',
        name: `Adder's Kiss 4`,
        attacktype:`Melee`,
        movement:`Back 1`,
        accuracy:'105',
        critmod:`+8.0%`,
        description:`
        MidPsn4  
        `
    },

    {
        num:`3`,
        id: 'sbcombat_desc3e',
        position: '1ally_12enemy',
        name: `Adder's Kiss 5`,
        attacktype:`Melee`,
        movement:`Back 1`,
        accuracy:'110',
        critmod:`+9.0%`,
        description:`
        MidPsn5  
        `
    },

    //Impale

    {
        num:`4`,
        id: 'sbcombat_desc4a',
        position: '1ally_1234cleaveenemy',
        name: 'Impale 1',
        attacktype:`Ranged`,        
        movement:`Back 1`,
        accuracy:'90',
        dmgmod:`-60%`,
        critmod:'-6.0%',
    },

    {
        num:`4`,
        id: 'sbcombat_desc4b',
        position: '1ally_1234cleaveenemy',
        name: 'Impale 2',
        attacktype:`Ranged`,        
        movement:`Back 1`,
        accuracy:'95',
        dmgmod:`-60%`,
        critmod:'-5.0%',
    },

    {
        num:`4`,
        id: 'sbcombat_desc4c',
        position: '1ally_1234cleaveenemy',
        name: 'Impale 3',
        attacktype:`Ranged`,        
        movement:`Back 1`,
        accuracy:'100',
        dmgmod:`-60%`,
        critmod:'-4.0%',
        description:`
        Blight (120% Base) <br> 1pt/rd for 3 rds
        `
    },

    {
        num:`4`,
        id: 'sbcombat_desc4d',
        position: '1ally_1234cleaveenemy',
        name: 'Impale 4',
        attacktype:`Ranged`,        
        movement:`Back 1`,
        accuracy:'105',
        dmgmod:`-60%`,
        critmod:'-3.0%',
        description:`
        Blight (130% Base) <br> 1pt/rd for 3 rds
        `
    },

    {
        num:`4`,
        id: 'sbcombat_desc4e',
        position: '1ally_1234cleaveenemy',
        name: 'Impale 5',
        attacktype:`Ranged`,        
        movement:`Back 1`,
        accuracy:'110',
        dmgmod:`-60%`,
        critmod:'-2.0%',
        description:`
        Blight (140% Base) <br> 2pts/rd for 3 rds
        `
    },

    //Expose

    {
        num:`5`,
        id: 'sbcombat_desc5a',
        position: '123ally_123enemy',
        name: 'Expose 1',
        attacktype:`Melee`,
        movement:`Back 1`,
        accuracy:'85 / DMG Mod: -40% / CRIT Mod: +2.5%',
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        Crits Received Chance +8% (3 rds) (100% Base)<br>
        -4 SPD (4 rds) (100% Base)<br>
        `,
    },

    {
        num:`5`,
        id: 'sbcombat_desc5b',
        position: '123ally_123enemy',
        name: 'Expose 2',
        attacktype:`Melee`,
        movement:`Back 1`,
        accuracy:'90 / DMG Mod: -40% / CRIT Mod: +3.5%',
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        Crits Received Chance +8% (3 rds) (110% Base)<br>
        -5 SPD (4 rds) (110% Base)<br>
        `,
    },

    {
        num:`5`,
        id: 'sbcombat_desc5c',
        position: '123ally_123enemy',
        name: 'Expose 3',
        attacktype:`Melee`,
        movement:`Back 1`,
        accuracy:'95 / DMG Mod: -40% / CRIT Mod: +4.5%',
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        Crits Received Chance +9% (3 rds) (120% Base)<br>
        -6 SPD (4 rds) (120% Base)<br>
        `,
    },

    {
        num:`5`,
        id: 'sbcombat_desc5d',
        position: '123ally_123enemy',
        name: 'Expose 4',
        attacktype:`Melee`,
        movement:`Back 1`,
        accuracy:'85 / DMG Mod: -40% / CRIT Mod: +5.5%',
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        Crits Received Chance +9% (3 rds) (130% Base)<br>
        -7 SPD (4 rds) (130% Base)<br>
        `,
    },

    {
        num:`5`,
        id: 'sbcombat_desc5e',
        position: '123ally_123enemy',
        name: 'Expose 5',
        attacktype:`Melee`,
        movement:`Back 1`,
        accuracy:'105 / DMG Mod: -40% / CRIT Mod: +6.5%',
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        Crits Received Chance +10% (3 rds) (140% Base)<br>
        -8 SPD (4 rds) (140% Base)<br>
        `,
    },

    //Captivate

    {
        num:`6`,
        id: 'sbcombat_desc6a',
        position: '23ally_23enemy',
        name: 'Captivate 1',
        attacktype:`Ranged`,
        accuracy:'85',        
        dmgmod:`-25%`,
        critmod:`+4.0%`,
        description:`
        MidPsn1<br>
        +40% DMG vs Marked
        `,
    },

    {
        num:`6`,
        id: 'sbcombat_desc6b',
        position: '23ally_23enemy',
        name: 'Captivate 2',
        attacktype:`Ranged`,
        accuracy:'90',        
        dmgmod:`-25%`,
        critmod:`+5.0%`,
        description:`
        MidPsn2<br>
        +45% DMG vs Marked
        `,
    },

    {
        num:`6`,
        id: 'sbcombat_desc6c',
        position: '23ally_23enemy',
        name: 'Captivate 3',
        attacktype:`Ranged`,
        accuracy:'95',        
        dmgmod:`-25%`,
        critmod:`+6.0%`,
        description:`
        MidPsn3<br>
        +50% DMG vs Marked
        `,
    },

    {   
        num:`6`,
        id: 'sbcombat_desc6d',
        position: '23ally_23enemy',
        name: 'Captivate 4',
        attacktype:`Ranged`,
        accuracy:'100',        
        dmgmod:`-25%`,
        critmod:`+7.0%`,
        description:`
        MidPsn4<br>
        +55% DMG vs Marked
        `,
    },

    {
        num:`6`,
        id: 'sbcombat_desc6e',
        position: '23ally_23enemy',
        name: 'Captivate 5',
        attacktype:`Ranged`,
        accuracy:'105',        
        dmgmod:`-25%`,
        critmod:`+8.0%`,
        description:`
        MidPsn5<br>
        +60% DMG vs Marked
        `,
    },

    //Serpent Sway

    {
        num:`7`,
        id: 'sbcombat_desc7a',
        uses:`2`,
        position: '123hero',
        name: 'Serpent Sway 1',
        movement:`Forward 1`,
        description:`
        Self: <br>
        Add 2 Blocks <br>
        <span class = "chance">(Each Block Negates <br>  1 Instance of Direct HP DMG)</span><br>
        Buff Self<br>
        +1 SPD (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'sbcombat_desc7b',
        uses:`2`,
        position: '123hero',
        name: 'Serpent Sway 2',
        movement:`Forward 1`,
        description:`
        Self: <br>
        Add 2 Blocks <br>
        <span class = "chance">(Each Block Negates <br>  1 Instance of Direct HP DMG)</span><br>
        Buff Self<br>
        +2 SPD (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'sbcombat_desc7c',
        uses:`2`,
        position: '123hero',
        name: 'Serpent Sway 3',
        movement:`Forward 1`,
        description:`
        Self: <br>
        Add 2 Blocks <br>
        <span class = "chance">(Each Block Negates <br>  1 Instance of Direct HP DMG)</span><br>
        Buff Self<br>
        +3 SPD (4 rds)<br>
        `,
    },

    {
        num:`7`, 
        id: 'sbcombat_desc7d',
        uses:`2`,
        position: '123hero',
        name: 'Serpent Sway 4',
        movement:`Forward 1`,
        description:`
        Self: <br>
        Add 2 Blocks <br>
        <span class = "chance">(Each Block Negates <br>  1 Instance of Direct HP DMG)</span><br>
        Buff Self<br>
        +3 SPD (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'sbcombat_desc7e',
        uses:`2`,
        position: '123hero',
        name: 'Serpent Sway 5',
        movement:`Forward 1`,
        description:`
        Self: <br>
        Add 2 Blocks <br>
        <span class = "chance">(Each Block Negates <br> 1 Instance of Direct HP DMG)</span><br>
        Buff Self<br>
        +4 SPD (4 rds)<br>
        `,
    },
]
const VestalCombatSkills = [

    //Mace Bash
    {
        num:`1`,
        id: 'vescombat_desc1a',
        position: '12ally_12enemy',
        name: 'Mace Bash 1',
        attacktype:`Melee`,
        accuracy:'85',
        description:`
        +15% DMG vs Unholy 
        `,
    },

    {
        num:`1`,
        id: 'vescombat_desc1b',
        position: '12ally_12enemy',
        name: 'Mace Bash 2',
        attacktype:`Melee`,
        accuracy:'90',
        critmod:'+1.0%',
        description:`
        +20% DMG vs Unholy 
        `,
    },

    {
        num:`1`,
        id: 'vescombat_desc1c',
        position: '12ally_12enemy',
        name: 'Mace Bash 3',
        attacktype:`Melee`,
        accuracy:'95',
        critmod:'+2.0%',
        description:`
        +25% DMG vs Unholy 
        `,
    },

    {
        num:`1`,
        id: 'vescombat_desc1d',
        position: '12ally_12enemy',
        name: 'Mace Bash 4',
        attacktype:`Melee`,
        accuracy:'100',
        critmod:'+3.0%',
        description:`
        +30% DMG vs Unholy 
        `,
    },


    {
        num:`1`,
        id: 'vescombat_desc1e',
        position: '12ally_12enemy',
        name: 'Mace Bash 5',
        attacktype:`Melee`,
        accuracy:'105',
        critmod:'+4.0%',
        description:`
        +35% DMG vs Unholy 
        `,
    },

     //Judgement

     {
        num:`2`,
        id: 'vescombat_desc2a',
        position: '34ally_1234enemy',
        name: 'Judgement 1',
        attacktype:`Ranged`,
        accuracy:'85',
        dmgmod:`-25%`,
        critmod:`+5.0%`,
        description:`
        On Attack Hit:<br>
        Self: Heal 3 HP
        `,
    },

    {
        num:`2`,
        id: 'vescombat_desc2b',
        position: '34ally_1234enemy',
        name: 'Judgement 2',
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:`-25%`,
        critmod:`+6.0%`,
        description:`
        On Attack Hit:<br>
        Self: Heal 3 HP
        `,
    },

    {
        num:`2`,
        id: 'vescombat_desc2c',
        position: '34ally_1234enemy',
        name: 'Judgement 3',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-25%`,
        critmod:`+7.0%`,
        description:`
        On Attack Hit:<br>
        Self: Heal 4 HP
        `,
    },

    {
        num:`2`,
        id: 'vescombat_desc2d',
        position: '34ally_1234enemy',
        name: 'Judgement 4',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-25%`,
        critmod:`+8.0%`,
        description:`
        On Attack Hit:<br>
        Self: Heal 4 HP
        `,
    },

    {
        num:`2`,
        id: 'vescombat_desc2e',
        position: '34ally_1234enemy',
        name: 'Judgement 5',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-25%`,
        critmod:`+9.0%`,
        description:`
        On Attack Hit:<br>
        Self: Heal 5 HP        `,
    },

    //Dazzling Light

    {
        num:`3`,
        id: 'vescombat_desc3a',
        position: '234ally_123enemy',
        name: "Dazzling Light 1",
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:`-75%`,
        critmod:`+5.0%`,
        description:`
        Stun2<br>
        Torch2 
        `
    },

    {
        num:`3`,
        id: 'vescombat_desc3b',
        position: '234ally_123enemy',
        name: `Dazzling Light 2`,
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-75%`,
        critmod:`+6.0%`,
        description:`
        Stun3<br>
        Torch2 
        `
    },

    {
        num:`3`,
        id: 'vescombat_desc3c',
        position: '234ally_123enemy',
        name: `Dazzling Light 3`,
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-75%`,
        critmod:`+7.0%`,
        description:`
        Stun4<br>
        Torch2 
        `
    },

    {
        num:`3`,
        id: 'vescombat_desc3d',
        position: '234ally_123enemy',
        name: `Dazzling Light 4`,
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-75%`,
        critmod:`+8.0%`,
        description:`
        Stun5<br>
        Torch2 
        `
    },

    {
        num:`3`,
        id: 'vescombat_desc3e',
        position: '234ally_123enemy',
        name: `Dazzling Light 5`,
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-75%`,
        critmod:`+9.0%`,
        description:`
        Stun6<br>
        Torch2 
        `
    },

    //Divine Grace

    {
        num:`4`,
        extratext:`Always Unlocked`,
        id: 'vescombat_desc4a',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Divine Grace 1',
        description:`
        Target Hero:<br>
        Heal 4-5<br>
        `,
    },

    {
        num:`4`,
        id: 'vescombat_desc4b',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Divine Grace 2',
        description:`
        Target Hero:<br>
        Heal 5-6<br>
        `,
    },

    {
        num:`4`,
        id: 'vescombat_desc4c',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Divine Grace 3',
        description:`
        Target Hero:<br>
        Heal 6-7<br>
        `,
    },

    {
        num:`4`,
        id: 'vescombat_desc4d',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Divine Grace 4',
        description:`
        Target Hero:<br>
        Heal 7-8<br>
        `,
    },

    {
        num:`4`,
        id: 'vescombat_desc4e',
        isdoubleicon:true,
        position: '34ally_1234heal',
        name: 'Divine Grace 5',
        description:`
        Target Hero:<br>
        Heal 8-9<br>
        `,
    },


    //Divine Comfort

    {
        num:`5`,
        id: 'vescombat_desc5a',
        isdoubleicon:true,
        position: '234ally_1234cleaveheal',         
        name: 'Divine Comfort 1',
        description:`
        Party:<br>
        Heal 1-3<br>
        `,
    },

    {
        num:`5`,
        id: 'vescombat_desc5b',
        isdoubleicon:true,
        position: '234ally_1234cleaveheal',         
        name: 'Divine Comfort 2',
        description:`
        Party:<br>
        Heal 2-3<br>
        `,
    },

    {
        num:`5`,
        id: 'vescombat_desc5c',
        isdoubleicon:true,
        position: '234ally_1234cleaveheal',         
        name: 'Divine Comfort 3',
        description:`
        Party:<br>
        Heal 3-3<br>
        `,
    },

    {
        num:`5`,
        id: 'vescombat_desc5d',
        isdoubleicon:true,
        position: '234ally_1234cleaveheal',         
        name: 'Divine Comfort 4',
        description:`
        Party:<br>
        Heal 3-4<br>
        `,
    },

    {
        num:`5`,
        id: 'vescombat_desc5e',
        isdoubleicon:true,
        position: '234ally_1234cleaveheal',         
        name: 'Divine Comfort 5',
        description:`
        Party:<br>
        Heal 4-5<br>
        `,
    },

    //Illumination

    {
        num:`6`,
        id: 'vescombat_desc6a',
        position: '123ally_1234enemy',
        name: 'Illumination 1',
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:`-75% <br> Cannot CRIT`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -20 DODGE (4 rds) (100% Base)<br>
        Torch1
        `,
    },

    {
        num:`6`,
        id: 'vescombat_desc6b',
        position: '123ally_1234enemy',
        name: 'Illumination 2',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-75% <br> Cannot CRIT`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -23 DODGE (4 rds) (110% Base)<br>
        Torch2
        `,
    },

    {
        num:`6`,
        id: 'vescombat_desc6c',
        position: '123ally_1234enemy',
        name: 'Illumination 3',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-75% <br> Cannot CRIT`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -24 DODGE (4 rds) (120% Base)<br>
        Torch3
        `,
    },

    {   
        num:`6`,
        id: 'vescombat_desc6d',
        position: '123ally_1234enemy',
        name: 'Illumination 4',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-75% <br> Cannot CRIT`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -27 DODGE (4 rds) (130% Base)<br>
        Torch4
        `,
    },

    {
        num:`6`,
        id: 'vescombat_desc6e',
        position: '123ally_1234enemy',
        name: 'Illumination 5',
        attacktype:`Ranged`,
        accuracy:'110',
        dmgmod:`-75% <br> Cannot CRIT`,
        description:`
        Bypass Stealth / De-stealth<br>
        Debuff Target<br>
        -30 DODGE (4 rds) (140% Base)<br>
        Torch5
        `,
    },

    //Hand of Light

    {
        num:`7`,
        id: 'vescombat_desc7a',
        position: '12ally_123enemy',
        name: 'Hand of Light 1',
        attacktype:`Ranged`,
        accuracy:'85',
        dmgmod:`-50%`,
        critmod:`+1.0%`,
        description:`
        +15% DMG vs Unholy<br>
        Buff Self<br>
        +6 ACC (4 rds)<br>
        +25% DMG (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'vescombat_desc7b',
        position: '12ally_123enemy',
        name: 'Hand of Light 2',
        attacktype:`Ranged`,
        accuracy:'90',
        dmgmod:`-50%`,
        critmod:`+2.0%`,
        description:`
        +20% DMG vs Unholy<br>
        Buff Self<br>
        +7 ACC (4 rds)<br>
        +27% DMG (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'vescombat_desc7c',
        position: '12ally_123enemy',
        name: 'Hand of Light 3',
        attacktype:`Ranged`,
        accuracy:'95',
        dmgmod:`-50%`,
        critmod:`+3.0%`,
        description:`
        +25% DMG vs Unholy<br>
        Buff Self<br>
        +8 ACC (4 rds)<br>
        +30% DMG (4 rds)<br>
        `,
    },

    {
        num:`7`, 
        id: 'vescombat_desc7d',
        position: '12ally_123enemy',
        name: 'Hand of Light 4',
        attacktype:`Ranged`,
        accuracy:'100',
        dmgmod:`-50%`,
        critmod:`+4.0%`,
        description:`
        +30% DMG vs Unholy<br>
        Buff Self<br>
        +9 ACC (4 rds)<br>
        +33% DMG (4 rds)<br>
        `,
    },

    {
        num:`7`,
        id: 'vescombat_desc7e',
        position: '12ally_123enemy',
        name: 'Hand of Light 5',
        attacktype:`Ranged`,
        accuracy:'105',
        dmgmod:`-50%`,
        critmod:`+5.0%`,
        description:`
        +35% DMG vs Unholy<br>
        Buff Self<br>
        +10 ACC (4 rds)<br>
        +35% DMG (4 rds)<br>
        `,
    },
]

function colorCodeHeroSkills(description) {

    //Camp Skill Exclusive

    description = description.replace(/Afflicted/g, '<span class="negative">Afflicted</span>');   
    description = description.replace(/Afflict/g, '<span class="negative">Afflict</span>');   
    description = description.replace(/Nighttime Ambush/g, '<span class="negative">Nighttime Ambush</span>');   

    description = description.replace(/Torchlight/g, '<span class="highres">Torchlight</span>');

    description = description.replace(/Scouting/g, '<span class="scouting">Scouting</span>');   
    description = description.replace(/Surprised/g, '<span class="scouting">Surprised</span>');   

    description = description.replace(/Mortality Debuffs/g, '<span class="debuff">Mortality Debuffs</span>');

    description = description.replace(/Very Common/g, '<span class="common">Very Common</span>');
    description = description.replace(/Common/g, '<span class="common">Common</span>');
    description = description.replace(/Uncommon/g, '<span class="uncommon">Uncommon</span>');
    description = description.replace(/Rare!/g, '<span class="rare">Rare</span>');
    description = description.replace(/Very Rare/g, '<span class="very_rare">Very Rare</span>');

    //Shared or Combat
 
    description = description.replace(/BldDbf1/g, 'Debuff Target <br> -20% Bleed Resist (3 rds) (100% Base)');
    description = description.replace(/BldDbf2/g, 'Debuff Target <br> -23% Bleed Resist (3 rds) (110% Base)');
    description = description.replace(/BldDbf3/g, 'Debuff Target <br> -26% Bleed Resist (3 rds) (120% Base)');
    description = description.replace(/BldDbf4/g, 'Debuff Target <br> -30% Bleed Resist (3 rds) (130% Base)');
    description = description.replace(/BldDbf5/g, 'Debuff Target <br> -33% Bleed Resist (3 rds) (140% Base)');

    description = description.replace(/PsnDbf1/g, 'Debuff Target <br> -20% Blight Resist (3 rds) (100% Base)');
    description = description.replace(/PsnDbf2/g, 'Debuff Target <br> -23% Blight Resist (3 rds) (110% Base)');
    description = description.replace(/PsnDbf3/g, 'Debuff Target <br> -26% Blight Resist (3 rds) (120% Base)');
    description = description.replace(/PsnDbf4/g, 'Debuff Target <br> -30% Blight Resist (3 rds) (130% Base)');
    description = description.replace(/PsnDbf5/g, 'Debuff Target <br> -33% Blight Resist (3 rds) (140% Base)');

    description = description.replace(/BigBld1/g, 'Bleed (100% Base) <br> 3pts/rd for 3 rds');
    description = description.replace(/BigBld2/g, 'Bleed (110% Base) <br> 3pts/rd for 3 rds');
    description = description.replace(/BigBld3/g, 'Bleed (120% Base) <br> 4pts/rd for 3 rds');
    description = description.replace(/BigBld4/g, 'Bleed (130% Base) <br> 4pts/rd for 3 rds');
    description = description.replace(/BigBld5/g, 'Bleed (140% Base) <br> 5pts/rd for 3 rds');

    description = description.replace(/MidBld1/g, 'Bleed (100% Base) <br> 2pts/rd for 3 rds');
    description = description.replace(/MidBld2/g, 'Bleed (110% Base) <br> 2pts/rd for 3 rds');
    description = description.replace(/MidBld3/g, 'Bleed (120% Base) <br> 3pts/rd for 3 rds');
    description = description.replace(/MidBld4/g, 'Bleed (130% Base) <br> 3pts/rd for 3 rds');
    description = description.replace(/MidBld5/g, 'Bleed (140% Base) <br> 4pts/rd for 3 rds');

    description = description.replace(/MidPsn1/g, 'Blight (100% Base) <br> 3pts/rd for 3 rds');
    description = description.replace(/MidPsn2/g, 'Blight (110% Base) <br> 3pts/rd for 3 rds');
    description = description.replace(/MidPsn3/g, 'Blight (120% Base) <br> 4pts/rd for 3 rds');
    description = description.replace(/MidPsn4/g, 'Blight (130% Base) <br> 4pts/rd for 3 rds');
    description = description.replace(/MidPsn5/g, 'Blight (140% Base) <br> 5pts/rd for 3 rds');



    description = description.replace(/finbuff1/g, 'On Attack Hit: <br> Buff Self <br> Finale: +30% DMG (8 rds)');
    description = description.replace(/finbuff2/g, 'On Attack Hit: <br> Buff Self <br> Finale: +30% DMG (8 rds)<br> Finale: +8% CRIT (8 rds)');
    description = description.replace(/finbuff3/g, 'Finale: +75% DMG (8 rds)<br> Finale: +8% CRIT (8 rds)');
    description = description.replace(/finbuffa/g, 'Buff Self <br> Finale: +30% DMG (8 rds)<br> Finale: +8% CRIT (8 rds)');

    description = description.replace(/DOTCURE/g, 'Cure Blight/Bleed');


    description = description.replace(/Torch1/g, 'Torch +5');
    description = description.replace(/Torch2/g, 'Torch +6');
    description = description.replace(/Torch3/g, 'Torch +7');
    description = description.replace(/Torch4/g, 'Torch +8');
    description = description.replace(/Torch5/g, 'Torch +10');

    description = description.replace(/Stun1/g, 'Stun (90% Base)');
    description = description.replace(/Stun2/g, 'Stun (100% Base)');
    description = description.replace(/Stun3/g, 'Stun (110% Base)');
    description = description.replace(/Stun4/g, 'Stun (120% Base)');
    description = description.replace(/Stun5/g, 'Stun (130% Base)');
    description = description.replace(/Stun6/g, 'Stun (140% Base)');
    description = description.replace(/Stun7/g, 'Stun (150% Base)');

    description = description.replace(/Brand/g, 'Mark Target (3 rds)');

    description = description.replace(/Shuffle1/g, 'Shuffle Single (100% Base)');
    description = description.replace(/Shuffle2/g, 'Shuffle Single (110% Base)');
    description = description.replace(/Shuffle3/g, 'Shuffle Single (120% Base)');
    description = description.replace(/Shuffle4/g, 'Shuffle Single (130% Base)');
    description = description.replace(/Shuffle5/g, 'Shuffle Single (140% Base)');

    description = description.replace(/Knockback([123])a/g, 'Knockback $1 (100% Base)');
    description = description.replace(/Knockback([123])b/g, 'Knockback $1 (110% Base)');
    description = description.replace(/Knockback([123])c/g, 'Knockback $1 (120% Base)');
    description = description.replace(/Knockback([123])d/g, 'Knockback $1 (130% Base)');
    description = description.replace(/Knockback([123])e/g, 'Knockback $1 (140% Base)');

    description = description.replace(/Pull([123])a/g, 'Pull $1 (100% Base)');
    description = description.replace(/Pull([123])b/g, 'Pull $1 (110% Base)');
    description = description.replace(/Pull([123])c/g, 'Pull $1 (120% Base)');
    description = description.replace(/Pull([123])d/g, 'Pull $1 (130% Base)');
    description = description.replace(/Pull([123])e/g, 'Pull $1 (140% Base)');




    description = description.replace(/Blocks/g, '<span class="block">Blocks</span>');


    description = description.replace(/CLEARCORPSE/g, 
    `
    Enemy Party: <br>
    Clear All Corpses
    `);


    description = description.replace(/LeperResist/g, 
    `
    +30% Blight Resist (1 Battle)<br>
    +30% Bleed Resist (1 Battle)<br>
    +30% Debuff Resist (1 Battle)<br>
    +30% Move Resist (1 Battle)<br>
    `);

    description = description.replace(/LeperExhaust/g, 
    `Exhaust Self <br>
    <span class = 'chance'>(Cannot be Cured with Herbs)</span><br>
    -10 DODGE (1 Battle)<br>
    +25% DMG Taken (1 Battle)
    `);


    description = description.replace(/FlagExhaust/g, 
    `Exhaust Self <br>
    <span class = 'chance'>(Cannot be Cured with Herbs)</span><br>
    -25% Healing Skills (3 rds)<br>
    -25% Healing Received (3 rds)<br>
    -3 SPD (3 rds)`);

    description = description.replace(/HellionExhaust1/g, 
    `Exhaust Self <br>
    <span class = 'chance'>(Cannot be Cured with Herbs)</span><br>
    -10% DMG (3 rds)<br>
    -1 SPD (3 rds)`);

    description = description.replace(/HellionExhaust2/g, 
    `Exhaust Self <br>
    <span class = 'chance'>(Cannot be Cured with Herbs)</span><br>
    -20% DMG (3 rds)<br>
    -3 SPD (3 rds)`);

    description = description.replace(/JesterExhaust/g, 
    `Exhaust Self <br>
    <span class = 'chance'>(Cannot be Cured with Herbs)</span><br>
    -25 DODGE (1 Battle)<br>
    -3 SPD (1 Battle)<br>
    +100% Stress (1 Battle)
    `);



    description = description.replace(/Exhaust Self/g, '<span class="exhaust">Exhaust Self</span>');


    description = description.replace(/Stressed/g, '<span class="stress">Stressed</span>');
    description = description.replace(/Stress/g, '<span class="stress">Stress</span>');        
    description = description.replace(/Horror/g, '<span class="stress">Horror</span>');   
    description = description.replace(/Virtued/g, '<span class="stress">Virtued</span>');
    description = description.replace(/Virtue/g, '<span class="stress">Virtue</span>');

    description = description.replace(/Health/g, '<span class="heal">Health</span>');
    description = description.replace(/Healing/g, '<span class="heal">Healing</span>');
    description = description.replace(/Heals/g, '<span class="heal">Heals</span>');
    description = description.replace(/Heal/g, '<span class="heal">Heal</span>');
    description = description.replace(/Restoration/g, '<span class="heal">Restoration</span>');

    description = description.replace(/Marked/g, '<span class="mark">Marked</span>');

    description = description.replace(/Marks/g, '<span class="mark">Marks</span>');   
    description = description.replace(/Mark/g, '<span class="mark">Mark</span>');   
    description = description.replace(/Death Blow/g, '<span class="mark">Death Blow</span>');
    description = description.replace(/Death's Door/g, '<span class="mark">Death\'s Door</span>');


    description = description.replace(/Creates/g, '<span class="stealth">Creates</span>');   
     description = description.replace(/Stealthed/g, '<span class="stealth">Stealthed</span>');
     description = description.replace(/Destealth/g, '<span class="stealth">Destealth</span>');
     description = description.replace(/De-stealth/g, '<span class="stealth">De-stealth</span>');

    description = description.replace(/Stealth/g, '<span class="stealth">Stealth</span>');
    description = description.replace(/Summon/g, '<span class="stealth">Summon</span>');


    description = description.replace(/Bleeding/g, '<span class="bleed">Bleeding</span>');
    description = description.replace(/Blighted/g, '<span class="blight">Blighted</span>');

    description = description.replace(/Blight/g, '<span class="blight">Blight</span>');
    description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
    description = description.replace(/Stunned/g, '<span class="stun">Stunned</span>');
    description = description.replace(/Stuns/g, '<span class="stun">Stuns</span>');
    description = description.replace(/Stun/g, '<span class="stun">Stun</span>');

    description = description.replace(/Diseases/g, '<span class="disease">Diseases</span>');
    description = description.replace(/Disease/g, '<span class="disease">Disease</span>');
    description = description.replace(/Torch/g, '<span class="highres">Torch</span>');


    description = description.replace(/Knockback/g, '<span class="move">Knockback</span>');
    description = description.replace(/Shuffled/g, '<span class="move">Shuffled</span>');
    description = description.replace(/Moved/g, '<span class="move">Moved</span>');

    description = description.replace(/Move/g, '<span class="move">Move</span>');
    description = description.replace(/Shuffle/g, '<span class="move">Shuffle</span>');
    description = description.replace(/Pull/g, '<span class="move">Pull</span>');
    description = description.replace(/Push/g, '<span class="move">Push</span>');
    description = description.replace(/Stumble/g, '<span class="move">Stumble</span>');
    description = description.replace(/Teleports/g, '<span class="move">Teleports</span>');

    description = description.replace(/Ranged/g, '<span class="attack_type">Ranged</span>');
    description = description.replace(/Free Action/g, '<span class="attack_type">Free Action</span>');
    description = description.replace(/Auto Action/g, '<span class="attack_type">Auto Action</span>');
    description = description.replace(/Melee/g, '<span class="attack_type">Melee</span>');
    description = description.replace(/Support/g, '<span class="buff">Support</span>');

    
    description = description.replace(/Armor Piercing/g, '<span class="block">Armor Piercing</span>');


    description = description.replace(/Debuffs/g, '<span class="debuff">Debuffs</span>');
    description = description.replace(/Debuff Target:/g, '<span class="debuff">Debuff Target:</span>');
    description = description.replace(/Debuff Target/g, '<span class="debuff">Debuff Target</span>');
    description = description.replace(/Debuff Self:/g, '<span class="debuff">Debuff Self:</span>');

    description = description.replace(/Debuff Self/g, '<span class="debuff">Debuff Self</span>');
    description = description.replace(/Hinderance/g, '<span class="debuff">Debuff</span>');

    description = description.replace(/Debuff/g, '<span class="debuff">Debuff</span>');
    description = description.replace(/Disable/g, '<span class="debuff">Disable</span>');
    description = description.replace(/Random Target Chance/g, '<span class="debuff">Random Target Chance</span>');

    description = description.replace(/Buff Party:/g, '<span class="buff">Buff Party:</span>');
    description = description.replace(/Buff Party/g, '<span class="buff">Buff Party</span>');
    description = description.replace(/Buff Target Hero:/g, '<span class="buff">Buff Target Hero:</span>');
    description = description.replace(/Buff Target Hero/g, '<span class="buff">Buff Target Hero</span>');
    description = description.replace(/Buff Self:/g, '<span class="buff">Buff Self:</span>');
    description = description.replace(/Buff Self/g, '<span class="buff">Buff Self</span>');
    description = description.replace(/Buff Target:/g, '<span class="buff">Buff Target:</span>');
    description = description.replace(/Buff Target/g, '<span class="buff">Buff Target</span>');
    description = description.replace(/Buff Companions:/g, '<span class="buff">Buff Companions:</span>');
    description = description.replace(/Buff/g, '<span class="buff">Buff</span>');



    description = description.replace(/Riposted/g, '<span class="debuff">Riposted</span>');
    description = description.replace(/Riposte/g, '<span class="debuff">Riposte</span>');

    description = description.replace(/Guarding/g, '<span class="buff">Guarding</span>');
    description = description.replace(/Guarded/g, '<span class="buff">Guarded</span>');
    description = description.replace(/Guards/g, '<span class="buff">Guards</span>');
    description = description.replace(/Guard/g, '<span class="buff">Guard</span>');

    description = description.replace(/Kill Self/g, '<span class="negative">Kill Self</span>');   
    description = description.replace(/Stygian/g, '<span class="negative">Stygian</span>');   




    
    return description;
}

function generateHeroCombatSkills(skill) {
    let position;
    if (skill.isdoubleicon) {position = `<img src="images/position_icons/${skill.position}.png" class="position_icons_double"><br>`;} 
    else if (skill.issingle && !skill.isdoubleicon ) {position = `<img src="images/position_icons/${skill.position}.png" class="position_icons_single"><br>`;} 

    else {position = `<img src="images/position_icons/${skill.position}.png" class="position_icons"><br>`;}

    let usestext = skill.uses ?  `<div class="uses_text">Uses Per Battle:${skill.uses}</div>` : '';
    let extratext = skill.extratext ?  `<div class="uses_text">${skill.extratext}</div>` : '';

    let attacktype = skill.attacktype ? `<span class="attack_type">${skill.attacktype}</span><br>` : '';

    let movement = skill.movement ? skill.movement : '';
    movement = movement.replace(/Forward/g, '<span class="move">Forward</span>').replace(/Back/g, '<span class="move">Back</span>');
    movement = movement ? `${movement}<br>` : '';

    let accuracy = skill.accuracy ?  `ACC Base: ${skill.accuracy}<br>` : '';
    let dmgmodifier = skill.dmgmod ?  `DMG Mod: ${skill.dmgmod}<br>` : '';
    let critmodifier = skill.critmod ?  `CRIT Mod: ${skill.critmod}<br>` : '';

    let description = skill.description ? colorCodeHeroSkills(skill.description) : ''; 
    description = description.replace(/(\(\d+% Base\)|\d+% Base)/g, '<span class="chance">$1</span>');

    return `
        <div class="skill_desc_align combatskill${skill.num}" id="${skill.id}">
            <div class="desc_box">               
                ${usestext}
                ${extratext}
                ${position}
                <span class = "highres">${skill.name}</span> <br>            
                ${attacktype}
                ${movement}
                ${accuracy}
                ${dmgmodifier}
                ${critmodifier}
                ${description}
            </div>
        </div>
    `;
}
AbominationCombatSkills.forEach((combatdata) => {
    const AbominationCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += AbominationCombatSkillHTML;});

AntiquarianCombatSkills.forEach((combatdata) => {
    const AntiquarianCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += AntiquarianCombatSkillHTML;});

ArbalestCombatSkills.forEach((combatdata) => {
   const ArbalestCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += ArbalestCombatSkillHTML;});

BHCombatSkills.forEach((combatdata) => {
    const BHCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += BHCombatSkillHTML;});

CrusaderCombatSkills.forEach((combatdata) => {
    const CrusaderCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += CrusaderCombatSkillHTML;});

FlagellantCombatSkills.forEach((combatdata) => {
    const FlagellantCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += FlagellantCombatSkillHTML;});

GraveRobberCombatSkills.forEach((combatdata) => {
    const GraveRobberCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += GraveRobberCombatSkillHTML;});

HellionCombatSkills.forEach((combatdata) => {
    const HellionCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += HellionCombatSkillHTML;});

HWMCombatSkills.forEach((combatdata) => {
    const HWMCombatSkillsHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += HWMCombatSkillsHTML;});

HoundmasterCombatSkills.forEach((combatdata) => {
    const HoundmasterCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += HoundmasterCombatSkillHTML;});

JesterCombatSkills.forEach((combatdata) => {
    const JesterCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += JesterCombatSkillHTML;});

LeperCombatSkills.forEach((combatdata) => {
    const LeperCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += LeperCombatSkillHTML;});

MAACombatSkills.forEach((combatdata) => {
    const MAACombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += MAACombatSkillHTML;});

MusketeerCombatSkills.forEach((combatdata) => {
    const MusketeerCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += MusketeerCombatSkillHTML;});

ShieldbreakerCombatSkills.forEach((combatdata) => {
    const ShieldbreakerCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += ShieldbreakerCombatSkillHTML;});

OccultistCombatSkills.forEach((combatdata) => {
    const OccultistCombatSkillHTML = generateHeroCombatSkills(combatdata);
   MainHeroBox.innerHTML += OccultistCombatSkillHTML;});

PlagueDoctorCombatSkills.forEach((combatdata) => {
    const PlagueDoctorCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += PlagueDoctorCombatSkillHTML;});

VestalCombatSkills.forEach((combatdata) => {
    const VestalCombatSkillHTML = generateHeroCombatSkills(combatdata);
    MainHeroBox.innerHTML += VestalCombatSkillHTML;});

