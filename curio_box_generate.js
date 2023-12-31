


const ruinsCurioTopData = [
    { name: "alchemy_table", isCorridorCurio: true, title: "Alchemy Table", type: "Knowledge", forcedtype: "Knowledge"},
    { name: "altar_of_light", isCorridorCurio: true, title: "Altar of Light", type: "Worship", forcedtype: "Worship"},
    { name: "bookshelf", isCorridorCurio: true, title: "Bookshelf", type: "Knowledge", forcedtype: "Knowledge"},
    { name: "confession_booth", isCorridorCurio: true, title: "Confession Booth", type: "Worship Reflective", forcedtype: "Worship Reflective"},
    { name: "decorative_urn", isCorridorCurio: true, title: "Decorative Urn", type: "Haunted", forcedtype: "Haunted"},
    { name: "holy_fountain", isCorridorCurio: false, title: "Holy Fountain", type: "Fountain Worship", forcedtype: "Fountain Worship"},
    { name: "iron_maiden", isCorridorCurio: true, title: "Iron Maiden", type: "Haunted Torture", forcedtype: "Haunted Torture"},
    { name: "locked_display_cabinet", isCorridorCurio: true, title: "Locked Display Cabinet", type: "Treasure", forcedtype: "Treasure"},
    { name: "locked_sarcophagus", isCorridorCurio: false, title: "Locked Sarcophagus", type: "Haunted Reflective", forcedtype: "Haunted Reflective"},
    { name: "sarcophagus", isCorridorCurio: false, title: "Sarcophagus", type: "Haunted Reflective Body", forcedtype: "Haunted Reflective Body"},
    { name: "suit_of_armor", isCorridorCurio: false, title: "Suit of Armor", type: "Haunted Reflective", forcedtype: "Haunted Reflective"},
]



const wealdCurioTopData = [
    { name: "ancient_coffin", isCorridorCurio: false, title: "Ancient Coffin", type: "Haunted Body", forcedtype: "Haunted Body"},
    { name: "beast_carcass", isCorridorCurio: true, title: "Beast Carcass", type: "Body Food", forcedtype: "Body Food"},
    { name: "eerie_spiderweb", isCorridorCurio: true, title: "Eerie Spiderweb", type: "None", forcedtype: "None"},
    { name: "left_luggage", isCorridorCurio: true, title: "Left Luggage", type: "Treasure", forcedtype: "Treasure"},
    { name: "mummified_remains", isCorridorCurio: true, title: "Mummified Remains", type: "Body Haunted Unholy", forcedtype: "Body Haunted Unholy"},
    { name: "old_tree", isCorridorCurio: true, title: "Old Tree", type: "None", forcedtype: "None"},
    { name: "pristine_fountain", isCorridorCurio: false, title: "Pristine Fountain", type: "Fountain", forcedtype: "Fountain"},
    { name: "shallow_grave", isCorridorCurio: true, title: "Shallow Grave", type: "Body Haunted", forcedtype: "Body Haunted"},
    { name: "traveler's_tent", isCorridorCurio: false, title: "Traveler's Tent", type: "None", forcedtype: "None"},
    { name: "troubling_effigy", isCorridorCurio: true, title: "Troubling Effigy", type: "Unholy Worship", forcedtype: "Unholy Worship"},
    { name: "bandit's_trapped_chest", isCorridorCurio: false, title: "Bandit's Trapped Chest", type: "None", forcedtype: "None", isOldRoadCurio: true},
    { name: "brigand's_tent", isCorridorCurio: true, title: "Brigand's Tent", type: "None", forcedtype: "None", isOldRoadCurio: true},
    { name: "transcendent_terror", isCorridorCurio: true, title: "Transcendent Terror", type: "None", forcedtype: "None", isOldRoadCurio: true},
]

const warrensCurioTopData = [
    { name: "bone_altar", isCorridorCurio: false, title: "Bone Altar", type: "Unholy Worship", forcedtype: "Unholy Worship"},
    { name: "dinner_cart", isCorridorCurio: true, title: "Dinner Cart", type: "Body Drink Food", forcedtype: "Body Drink Food"},
    { name: "makeshift_dining_table", isCorridorCurio: false, title: "Makeshift Dining Table", type: "Drink Food", forcedtype: "Drink Food"},
    { name: "moonshine_barrel", isCorridorCurio: true, title: "Moonshine Barrel", type: "Drink Treasure", forcedtype: "Drink Treasure"},
    { name: "occult_scrawlings", isCorridorCurio: true, title: "Occult Scrawlings", type: "Unholy Knowledge", forcedtype: "Unholy"},
    { name: "pile_of_bones", isCorridorCurio: true, title: "Pile of Bones", type: "Body Haunted Unholy", forcedtype: "Body Haunted Unholy"},
    { name: "pile_of_scrolls", isCorridorCurio: true, title: "Pile of Scrolls", type: "Knowledge", forcedtype: "Knowledge"},
    { name: "rack_of_blades", isCorridorCurio: true, title: "Rack of Blades", type: "None", forcedtype: "None"},
    { name: "sacrificial_stone", isCorridorCurio: false, title: "Sacrificial Stone", type: "Unholy Worship", forcedtype: "Unholy Worship"},
]

const coveCurioTopData = [
    { name: "barnacle_crusted_chest", isCorridorCurio: true, title: "Barnacle Crusted Chest", type: "Treasure", forcedtype: "Treasure"},
    { name: "bas-relief", isCorridorCurio: true, title: "Bas-Relief", type: "Knowledge Worship", forcedtype: "Worship"},
    { name: "brackish_tide_pool", isCorridorCurio: true, title: "Brackish Tide Pool", type: "Drink Fountain", forcedtype: "Drink Fountain"},
    { name: "eerie_coral", isCorridorCurio: true, title: "Eerie Coral", type: "Knowledge", forcedtype: "Knowledge"},
    { name: "fish_idol", isCorridorCurio: false, title: "Fish Idol", type: "Unholy Worship", forcedtype: "Unholy Worship"},
    { name: "fish_carcass", isCorridorCurio: true, title: "Fish Carcass", type: "Food", forcedtype: "Food"},
    { name: "giant_oyster", isCorridorCurio: false, title: "Giant Oyster", type: "Treasure", forcedtype: "Treasure"},
    { name: "ship's_figurehead", isCorridorCurio: false, title: "Ship's Figurehead", type: "Reflective", forcedtype: "Reflective"},
]

const sharedCurioTopData = [
    { name: "crate", isCorridorCurio: true, title: "Crate", type: "Treasure", forcedtype: "Treasure"},
    { name: "discarded_pack", isCorridorCurio: true, title: "Discarded Pack", type: "Treasure", forcedtype: "Treasure"},
    { name: "eldritch_altar", isCorridorCurio: false, title: "Eldritch Altar", type: "Haunted Unholy", forcedtype: "Haunted Unholy"},
    { name: "heirloom_chest_antivenom", isCorridorCurio: false, title: "Heirloom Chest (Antivenom)", type: "Treasure", forcedtype: "Treasure"},
    { name: "heirloom_chest_shovel", isCorridorCurio: false, title: "Heirloom Chest (Shovel)", type: "Treasure", forcedtype: "Treasure"},
    { name: "sack", isCorridorCurio: true, title: "Sack", type: "None", forcedtype: "None"},
    { name: "sconce", isCorridorCurio: true, title: "Sconce", type: "None", forcedtype: "None"},
    { name: "shambler's_altar", isCorridorCurio: true, title: "Shambler's Altar", type: "None", forcedtype: "None"},
    { name: "stack_of_books", isCorridorCurio: true, title: "Stack of Books", type: "Knowledge", forcedtype: "Knowledge", isNotSharedCurio: true},
    { name: "unlocked_strongbox", isCorridorCurio: false, title: "Unlocked Strongbox", type: "Treasure", forcedtype: "Treasure"},
    { name: "ancient_artifact", isCorridorCurio: false, title: "Ancient Artifact", type: "Treasure", forcedtype: "Treasure", isSecretRoomCurio: true},
    { name: "ancestor's_knapsack", isCorridorCurio: false, title: "Ancestor's Knapsack", type: "Treasure Haunted", forcedtype: "Treasure Haunted"},
]

const CrimsonCourtCurioTopData = [
    { name: "bloodflowers",  isbothcurio:true, title: "Bloodflowers", type: "Knowledge", forcedtype: "Knowledge"},
    { name: "damned_fountain",  isbothcurio:true, title: "Damned Fountain", type: "Haunted Unholy Drink Fountain CCrave", forcedtype: "Haunted Unholy Drink Fountain"},
    { name: "disturbing_diversion",  isbothcurio:true, title: "Disturbing Diversion", type: "Haunted Unholy Torture Reflective", forcedtype: "Haunted Unholy Torture Reflective"},
    { name: "forgotten_delicacies",  isbothcurio:true, title: "Forgotten Delicacies", type: "Haunted Unholy Body Food CCrave", forcedtype: "Haunted Unholy Body Food"},
    { name: "hooded_shrew",  isbothcurio:true, title: "Hooded Shrew", type: "Haunted Unholy", forcedtype: "Haunted Unholy"},
    { name: "wizened_shrew",  isbothcurio:true, title: "Wizened Shrew", type: "Haunted Unholy", forcedtype: "Haunted Unholy"},
    { name: "pile_of_strange_bones", isCorridorCurio: true,  title: "Pile of Strange Bones", type: "Haunted Unholy Knowledge", forcedtype: "Haunted Unholy Knowledge"},
    { name: "throbbing_coccoons",  isbothcurio:true, title: "Throbbing Coccoons", type: "Knowledge CCrave", forcedtype: "Knowledge"},
    { name: "thronging_hive",  isbothcurio:true, title: "Thronging Hive", type: "Knowledge CCrave", forcedtype: "Knowledge",},
    { name: "wine_crate",  isbothcurio:true, title: "Wine Crate", type: "Drink Treasure CCrave", forcedtype: "Drink Treasure"},
    { name: "winemaker's_reserve",  isbothcurio:true, title: "Winemaker's Reserve", type: "None", forcedtype: "None", isQuestCurio: true},
    { name: "throbbing_coccoons_shared",isCorridorCurio:true,  title: "Throbbing Coccoons(Shared)", type: "None", forcedtype: "None",},
    { name: "trinket_chest", isCorridorCurio: false, title: "Trinket Chest", type: "None", forcedtype: "None"},
]

const ColorOfMadnessCurioTopData = [
    { name: "gleaming_shards", isCorridorCurio: false, title: "Gleaming Shards", type: "None", forcedtype: "None"},
    { name: "fresh_harvest", isCorridorCurio: false, title: "Fresh Harvest", type: "None", forcedtype: "None"},
    { name: "stockpile", isCorridorCurio: false, title: "Stockpile", type: "None", forcedtype: "None"},
    { name: "rotted_fare", isCorridorCurio: false, title: "Rotted Fare", type: "None", forcedtype: "None"},
    { name: "miller's_hearth", isCorridorCurio: false, title: "Miller's Hearth", type: "None", forcedtype: "None"},
    { name: "corrupted_harvest", isCorridorCurio: false, title: "Corrupted Harvest", type: "None", forcedtype: "None"},
    { name: "plentiful_bounty",isCorridorCurio: false, title: "Plentiful Bounty", type: "None", forcedtype: "None"},
    { name: "mildred", isCorridorCurio: false, title: "Mildred", type: "None", forcedtype: "None", isMildred:true},
]


const RuinsCurioBox = document.getElementById("ruinsbox2")
const WealdCurioBox = document.getElementById("wealdbox2")
const WarrensCurioBox = document.getElementById("warrensbox2")
const CoveCurioBox = document.getElementById("covebox2")
const SharedCurioBox = document.getElementById("sharedbox2")

const CrimsonCurioBox = document.getElementById("crimsonbox2")
const MadnessCurioBox = document.getElementById("madnessbox2")


CreateCurioTop(ruinsCurioTopData, RuinsCurioBox)
CreateCurioTop(wealdCurioTopData, WealdCurioBox)
CreateCurioTop(warrensCurioTopData, WarrensCurioBox)
CreateCurioTop(coveCurioTopData, CoveCurioBox)
CreateCurioTop(sharedCurioTopData, SharedCurioBox)
CreateCurioTop(CrimsonCourtCurioTopData, CrimsonCurioBox)
CreateCurioTop(ColorOfMadnessCurioTopData, MadnessCurioBox)

function CreateCurioTop(areaCurioData, curiobox) {
areaCurioData.forEach(curio => {    
    const curioTopContainer = document.createElement("div");
    curioTopContainer.className = `curio_top_container`;
    curioTopContainer.id = `${curio.name}_top_container`;



const roomcuriospritebox = document.createElement("div")
roomcuriospritebox.className = "room_curio_sprite_container"


const corridorcuriospritebox = document.createElement("div")
corridorcuriospritebox.className = "corridor_curio_sprite_container"

    const curioSpriteImg = document.createElement("img")
    curioSpriteImg.src = `images/curios/${curio.name}.png`
    curioSpriteImg.loading = "lazy"; 


    if (curio.isbothcurio === true) {
        curioSpriteImg.className = "curio_sprite";
        const bothcuriospritebox = document.createElement("div")
       bothcuriospritebox.className = "corridor_curio_sprite_container"
       bothcuriospritebox.appendChild(curioSpriteImg)
        curioTopContainer.appendChild(bothcuriospritebox);
    } 
    else if (curio.isCorridorCurio === true) {
        curioSpriteImg.className = "curio_sprite";
        const corridorcuriospritebox = document.createElement("div")
        corridorcuriospritebox.className = "corridor_curio_sprite_container"
        corridorcuriospritebox.appendChild(curioSpriteImg)
        curioTopContainer.appendChild(corridorcuriospritebox);
    }   
    if (curio.isCorridorCurio === false) {
        curioSpriteImg.className = "curio_sprite room_sprite";
        const roomcuriospritebox = document.createElement("div")
        roomcuriospritebox.className = "room_curio_sprite_container"
        roomcuriospritebox.appendChild(curioSpriteImg)
        curioTopContainer.appendChild(roomcuriospritebox);

    } 

    


    

    const curioNameContainer = document.createElement("div");
    curioNameContainer.className = "curio_name ddlogo_text";
    curioNameContainer.textContent = curio.title;
    curioTopContainer.appendChild(curioNameContainer);


    const roomCurioTxt = document.createTextNode("Room Curio");
    const questCurioTxt = document.createTextNode("Quest Curio");
    const secretRoomCurioTxt = document.createTextNode("Secret Room Curio");
    const corridorCurioTxt = document.createTextNode("Corridor Curio");
    const oldRoadCurioTxt = document.createTextNode("Old Road Curio");
    const isNotSharedCurioTxt = document.createTextNode("Appears in Ruins and Warrens");
    const bothCurioTxt = document.createTextNode("Appears in Corridors and Rooms");
    const cocoonSharedTxt = document.createTextNode("Appears in the 4 Main Regions when Infestation Levels are High.");


    const bodyCurioTxt = document.createTextNode("Body");
    const drinkCurioTxt = document.createTextNode("Drink");
    const foodCurioTxt = document.createTextNode("Food");
    const fountainCurioTxt = document.createTextNode("Fountain");
    const hauntedCurioTxt = document.createTextNode("Haunted");
    const reflectiveCurioTxt = document.createTextNode("Reflective");
    const tortureCurioTxt = document.createTextNode("Torture");
    const treasureCurioTxt = document.createTextNode("Treasure");
    const unholyCurioTxt = document.createTextNode("Unholy");
    const worshipCurioTxt = document.createTextNode("Worship");
    const typelessCurioTxt = document.createTextNode("None");
    const knowledgeCurioTxt = document.createTextNode("Knowledge");
    const ccraveCurioTxt = document.createTextNode("CCrave");
    const knapsackCurioTxt = document.createTextNode("Can only be found in certain Darkest Level Dungeons");

    if (curio.isCorridorCurio === true) {
        curioTopContainer.appendChild(corridorCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 
    else if (curio.isCorridorCurio === false){
        curioTopContainer.appendChild(roomCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.isbothcurio) {
        curioTopContainer.appendChild(bothCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 

    if (curio.isOldRoadCurio) {
        curioTopContainer.appendChild(oldRoadCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 
    
    if (curio.isQuestCurio) {
        curioTopContainer.appendChild(questCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 
    if (curio.isNotSharedCurio) {
        curioTopContainer.appendChild(isNotSharedCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 
    if (curio.name ==="ancestor's_knapsack") {
        curioTopContainer.appendChild(knapsackCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 
    if (curio.name ==="throbbing_coccoons_shared") {
        curioTopContainer.appendChild(cocoonSharedTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 

    if (curio.isSecretRoomCurio) {
        curioTopContainer.appendChild(secretRoomCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 

    if (curio.type === "Haunted") {
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 

    if (curio.type === "Haunted Body") {
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" ")); 
        curioTopContainer.appendChild(bodyCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 
    if (curio.type === "Haunted Unholy") {
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" ")); 
        curioTopContainer.appendChild(unholyCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 
    if (curio.type === "Haunted Unholy Knowledge") {
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" ")); 
        curioTopContainer.appendChild(unholyCurioTxt);        
        curioTopContainer.appendChild(document.createTextNode(" ")); 
        curioTopContainer.appendChild(knowledgeCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 
    if (curio.type === "Haunted Torture") {
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(tortureCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 
    if (curio.type === "Haunted Reflective") {
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(reflectiveCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 

    if (curio.type === "Haunted Reflective Body") {
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(reflectiveCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(bodyCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 

    if (curio.type === "Body") {curioTopContainer.appendChild(bodyCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Body Drink Food") {
        curioTopContainer.appendChild(bodyCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(drinkCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(foodCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Body Food") {
        curioTopContainer.appendChild(bodyCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(foodCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Body Haunted") {
        curioTopContainer.appendChild(bodyCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Body Haunted Unholy") {
        curioTopContainer.appendChild(bodyCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(unholyCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Drink") {curioTopContainer.appendChild(drinkCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Drink Food") {
        curioTopContainer.appendChild(drinkCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(foodCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Drink Fountain") {
        curioTopContainer.appendChild(drinkCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(fountainCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Drink Treasure") {
        curioTopContainer.appendChild(drinkCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(treasureCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Drink Treasure CCrave") {
        curioTopContainer.appendChild(drinkCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(treasureCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(ccraveCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Food") {curioTopContainer.appendChild(foodCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }
    if (curio.type === "Fountain") {
        curioTopContainer.appendChild(fountainCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Fountain Worship") {
        curioTopContainer.appendChild(fountainCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(worshipCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Reflective") {curioTopContainer.appendChild(reflectiveCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }
    if (curio.type === "Torture") {curioTopContainer.appendChild(tortureCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }
    if (curio.type === "Treasure") {
        curioTopContainer.appendChild(treasureCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }
    if (curio.type === "Treasure Haunted") {
        curioTopContainer.appendChild(treasureCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }
    if (curio.type === "Unholy") {curioTopContainer.appendChild(unholyCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Unholy Worship") {
        curioTopContainer.appendChild(unholyCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(worshipCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Unholy Knowledge") {
        curioTopContainer.appendChild(unholyCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(knowledgeCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Worship") {curioTopContainer.appendChild(worshipCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }
    if (curio.type === "Worship Reflective") {
        curioTopContainer.appendChild(worshipCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(reflectiveCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }
    if (curio.type === "None") {curioTopContainer.appendChild(typelessCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }
    if (curio.type === "Knowledge") {curioTopContainer.appendChild(knowledgeCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }
    if (curio.type === "Knowledge Worship") {
        curioTopContainer.appendChild(knowledgeCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(worshipCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Knowledge Treasure") {
        curioTopContainer.appendChild(knowledgeCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(treasureCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }
    if (curio.type === "Knowledge CCrave") {
        curioTopContainer.appendChild(knowledgeCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(ccraveCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    }

    if (curio.type === "Haunted Unholy Drink Fountain CCrave") {
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(unholyCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(drinkCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(fountainCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(ccraveCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 

    if (curio.type === "Haunted Unholy Torture Reflective") {
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(unholyCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(tortureCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(reflectiveCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 

    if (curio.type === "Haunted Unholy Body Food CCrave") {
        curioTopContainer.appendChild(hauntedCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(unholyCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(bodyCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(foodCurioTxt);
        curioTopContainer.appendChild(document.createTextNode(" "));
        curioTopContainer.appendChild(ccraveCurioTxt);
        curioTopContainer.appendChild(document.createElement("br"));
    } 


    const bodyCurioQuirks = document.createElement("div")
    bodyCurioQuirks.className = "body_quirk"

    const drinkCurioQuirks = document.createElement("div")
    drinkCurioQuirks.className = "drink_quirk"

    const foodCurioQuirks = document.createElement("div")
    foodCurioQuirks.className = "food_quirk"

    const fountainCurioQuirks = document.createElement("div")
    fountainCurioQuirks.className = "fountain_quirk"

    const hauntedCurioQuirks = document.createElement("div")
    hauntedCurioQuirks.className = "haunted_quirk"

    const reflectiveCurioQuirks = document.createElement("div")
    reflectiveCurioQuirks.className = "reflective_quirk"

    const tortureCurioQuirks = document.createElement("div")
    tortureCurioQuirks.className = "torture_quirk"

    const treasureCurioQuirks = document.createElement("div")
    treasureCurioQuirks.className = "treasure_quirk"

    const unholyCurioQuirks = document.createElement("div")
    unholyCurioQuirks.className = "unholy_quirk"

    const worshipCurioQuirks = document.createElement("div")
    worshipCurioQuirks.className = "worship_quirk"

    const bodyForced = ["Corvid's Appetite (33%)","Necromania (40%)",];
    const drinkForced = ["Dipsomania (40%)",];
    const foodForced = ["Sitiomania (40%)","Tapeworm (60% - Steals Loot)",];
    const fountainForced = ["Ablutomania (40%)",];
    const hauntedForced = ["Paranormania (40%)",];
    const reflectiveForced = ["Egomania (40% - Steals Loot)",];
    const tortureForced = ["Bloodthirsty (35%)", "Dacnomania (40%)","Masochistic (50%)",];
    const treasureForced = ["Hylomania (40%)","Kleptomaniac (35% - Steals Loot)","Plutomania (40%)", "Selfish (50% - Steals Loot)",];
    const unholyForced = ["Dark Temptation (40%)","Demonomania (40%)",];
    const worshipForced = ["Guilty Conscience (35%)","Hagiomania (40%)","Hieromania (35%)",];

    bodyForced.forEach(forced => {
        const bodyForcedInteractions = document.createElement("span");
        bodyForcedInteractions.className = "negative";
        bodyForcedInteractions.textContent = forced;
        const lineBreak = document.createElement("br");
        bodyCurioQuirks.appendChild(bodyForcedInteractions);
        bodyCurioQuirks.appendChild(lineBreak);
})

    drinkForced.forEach(forced => {
        const drinkForcedInteractions = document.createElement("span");
        drinkForcedInteractions.className = "negative";
        drinkForcedInteractions.textContent = forced;
        const lineBreak = document.createElement("br");
        drinkCurioQuirks.appendChild(drinkForcedInteractions);
        drinkCurioQuirks.appendChild(lineBreak);
})

    foodForced.forEach(forced => {
        const foodForcedInteractions = document.createElement("span");
        foodForcedInteractions.className = "negative";
        foodForcedInteractions.textContent = forced;
        const lineBreak = document.createElement("br");
        foodCurioQuirks.appendChild(foodForcedInteractions);
        foodCurioQuirks.appendChild(lineBreak);
})

    fountainForced.forEach(forced => {
        const fountainForcedInteractions = document.createElement("span");
        fountainForcedInteractions.className = "negative";
        fountainForcedInteractions.textContent = forced;
        const lineBreak = document.createElement("br");
        fountainCurioQuirks.appendChild(fountainForcedInteractions);
        fountainCurioQuirks.appendChild(lineBreak);
})

    hauntedForced.forEach(forced => {
        const hauntedForcedInteractions = document.createElement("span");
        hauntedForcedInteractions.className = "negative";
        hauntedForcedInteractions.textContent = forced;
        const lineBreak = document.createElement("br");
        hauntedCurioQuirks.appendChild(hauntedForcedInteractions);
        hauntedCurioQuirks.appendChild(lineBreak);
})

    reflectiveForced.forEach(forced => {
        const reflectiveForcedInteractions = document.createElement("span");
        reflectiveForcedInteractions.className = "negative";
        reflectiveForcedInteractions.textContent = forced;
        const lineBreak = document.createElement("br");
        reflectiveCurioQuirks.appendChild(reflectiveForcedInteractions);
        reflectiveCurioQuirks.appendChild(lineBreak);
})

    tortureForced.forEach(forced => {
        const tortureForcedInteractions = document.createElement("span");
        tortureForcedInteractions.className = "negative";
        tortureForcedInteractions.textContent = forced;
        const lineBreak = document.createElement("br");
        tortureCurioQuirks.appendChild(tortureForcedInteractions);
        tortureCurioQuirks.appendChild(lineBreak);
})

    treasureForced.forEach(forced => {
        const treasureForcedInteractions = document.createElement("span");
        treasureForcedInteractions.className = "negative";
        treasureForcedInteractions.textContent = forced;
        const lineBreak = document.createElement("br");
        treasureCurioQuirks.appendChild(treasureForcedInteractions);
        treasureCurioQuirks.appendChild(lineBreak);
})

    unholyForced.forEach(forced => {
        const unholyForcedInteractions = document.createElement("span");
        unholyForcedInteractions.className = "negative";
        unholyForcedInteractions.textContent = forced;
        const lineBreak = document.createElement("br");
        unholyCurioQuirks.appendChild(unholyForcedInteractions);
        unholyCurioQuirks.appendChild(lineBreak);
})

    worshipForced.forEach(forced => {
        const worshipForcedInteractions = document.createElement("span");
        worshipForcedInteractions.className = "negative";
        worshipForcedInteractions.textContent = forced;
        const lineBreak = document.createElement("br");
        worshipCurioQuirks.appendChild(worshipForcedInteractions);
        worshipCurioQuirks.appendChild(lineBreak);
})


if (curio.forcedtype === "Haunted" && curio.isCorridorCurio) {curioTopContainer.appendChild(hauntedCurioQuirks);} 

if (curio.forcedtype === "Haunted Body" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(hauntedCurioQuirks);
    curioTopContainer.appendChild(bodyCurioQuirks);
} 
if (curio.forcedtype === "Haunted Unholy" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(hauntedCurioQuirks);
    curioTopContainer.appendChild(unholyCurioQuirks);
} 

if (curio.forcedtype === "Haunted Unholy" && curio.isbothcurio) {
    curioTopContainer.appendChild(hauntedCurioQuirks);
    curioTopContainer.appendChild(unholyCurioQuirks);
} 
if (curio.forcedtype === "Haunted Torture" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(hauntedCurioQuirks);
    curioTopContainer.appendChild(tortureCurioQuirks);
} 
if (curio.forcedtype === "Haunted Reflective" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(hauntedCurioQuirks);
    curioTopContainer.appendChild(reflectiveCurioQuirks);
} 

if (curio.forcedtype === "Haunted Reflective Body" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(hauntedCurioQuirks);
    curioTopContainer.appendChild(reflectiveCurioQuirks);
    curioTopContainer.appendChild(bodyCurioQuirks);
} 

if (curio.forcedtype === "Body" && curio.isCorridorCurio) {curioTopContainer.appendChild(bodyCurioQuirks);}

if (curio.forcedtype === "Body Drink Food" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(bodyCurioQuirks);
    curioTopContainer.appendChild(drinkCurioQuirks);
    curioTopContainer.appendChild(foodCurioQuirks);
}

if (curio.forcedtype === "Body Food" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(bodyCurioQuirks);
    curioTopContainer.appendChild(foodCurioQuirks);
}

if (curio.forcedtype === "Body Haunted" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(bodyCurioQuirks);
    curioTopContainer.appendChild(hauntedCurioQuirks);
}

if (curio.forcedtype === "Body Haunted Unholy" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(bodyCurioQuirks);
    curioTopContainer.appendChild(hauntedCurioQuirks);
    curioTopContainer.appendChild(unholyCurioQuirks);
}

if (curio.forcedtype === "Drink" && curio.isCorridorCurio) {curioTopContainer.appendChild(drinkCurioQuirks);}

if (curio.forcedtype === "Drink Food" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(drinkCurioQuirks);
    curioTopContainer.appendChild(foodCurioQuirks);
}

if (curio.forcedtype === "Drink Fountain" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(drinkCurioQuirks);
    curioTopContainer.appendChild(fountainCurioQuirks);
}

if (curio.forcedtype === "Drink Treasure" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(drinkCurioQuirks);
    curioTopContainer.appendChild(treasureCurioQuirks);
}

if (curio.forcedtype === "Drink Treasure" && curio.isbothcurio) {
    curioTopContainer.appendChild(drinkCurioQuirks);
    curioTopContainer.appendChild(treasureCurioQuirks);
}

if (curio.forcedtype === "Food" && curio.isCorridorCurio) {curioTopContainer.appendChild(foodCurioQuirks);}
if (curio.forcedtype === "Fountain" && curio.isCorridorCurio) {curioTopContainer.appendChild(fountainCurioQuirks);}

if (curio.forcedtype === "Fountain Worship" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(fountainCurioQuirks);
    curioTopContainer.appendChild(worshipCurioQuirks);
}

if (curio.forcedtype === "Reflective" && curio.isCorridorCurio) {curioTopContainer.appendChild(reflectiveCurioQuirks);}
if (curio.forcedtype === "Torture" && curio.isCorridorCurio) {curioTopContainer.appendChild(tortureCurioQuirks);}
if (curio.forcedtype === "Treasure" && curio.isCorridorCurio) {curioTopContainer.appendChild(treasureCurioQuirks);}
if (curio.forcedtype === "Unholy" && curio.isCorridorCurio) {curioTopContainer.appendChild(unholyCurioQuirks);}

if (curio.forcedtype === "Unholy Worship" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(unholyCurioQuirks);
    curioTopContainer.appendChild(worshipCurioQuirks);
}

if (curio.forcedtype === "Haunted Unholy Drink Fountain" && curio.isbothcurio) {
    curioTopContainer.appendChild(hauntedCurioQuirks);
    curioTopContainer.appendChild(unholyCurioQuirks);
    curioTopContainer.appendChild(drinkCurioQuirks);
    curioTopContainer.appendChild(fountainCurioQuirks);
}
if (curio.forcedtype === "Haunted Unholy Torture Reflective" && curio.isbothcurio) {
    curioTopContainer.appendChild(hauntedCurioQuirks);
    curioTopContainer.appendChild(unholyCurioQuirks);
    curioTopContainer.appendChild(tortureCurioQuirks);
    curioTopContainer.appendChild(reflectiveCurioQuirks);
}
if (curio.forcedtype === "Haunted Unholy Body Food" && curio.isbothcurio) {
    curioTopContainer.appendChild(hauntedCurioQuirks);
    curioTopContainer.appendChild(unholyCurioQuirks);
    curioTopContainer.appendChild(bodyCurioQuirks);
    curioTopContainer.appendChild(foodCurioQuirks);
}

if (curio.forcedtype === "Haunted Unholy Knowledge" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(hauntedCurioQuirks);
    curioTopContainer.appendChild(unholyCurioQuirks);
}

if (curio.forcedtype === "Worship" && curio.isCorridorCurio) {curioTopContainer.appendChild(worshipCurioQuirks);}
if (curio.forcedtype === "Worship Reflective" && curio.isCorridorCurio) {
    curioTopContainer.appendChild(worshipCurioQuirks);
    curioTopContainer.appendChild(reflectiveCurioQuirks);
}




const curioContainer = document.createElement("div");
curioContainer.id = `${curio.name}_container`
curioContainer.style.display = "none"

curioContainer.appendChild(curioTopContainer) 
curiobox.appendChild(curioContainer)

});
}








