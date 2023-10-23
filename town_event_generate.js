const TownEventMainContainer = document.getElementById("town_event_box")

const TownEventData = [
    {
        name: "Helping Hand",
        category: "general",
        type:"positive",
        description: [
            "Level Restrictions Removed for Next Quest.",
        ],
        dlc:"Base Game",
    },
    {
        name: "Supply Run",
        category: "general",
        type:"positive",
        description: [
            "Supply costs change by -50%.",
            "Provision costs change by -50%.",
        ],
        dlc:"Base Game",
    },
    {
        name: "Valiant Spirit",
        category: "general",
        type:"positive",
        description: [
            "Party Gains +15% Virtue Chance on Next Quest.",
        ],
        dlc:"Base Game",
    },
    {
        name: "A Job Well Done",
        category: "general",
        type:"positive",
        description: [
            "Free Upgrade: Armour x 1.",
        ],
        dlc:"Base Game",
    },
    {
        name: "A Ray of Sunlight",
        category: "general",
        type:"positive",
        description: [
            "All Stress Relief Activities More Effective.",
            "(Does not include Idle Hero Stress Healing).",
        ],
        dlc:"Base Game",
    },
    {
        name: "One Good Week",
        category: "general",
        type:"positive",
        description: [
            "All Idle Heroes: +200% Stress Relief.",
        ],
        dlc:"Base Game",
    },
    {
        name: "A Day Long Awaited",
        category: "general",
        type:"positive",
        description: [
            "Stagecoach has an additional 6 Recruits for this Week.",
        ],
        dlc:"Base Game",
    },
    {
        name: "From Beyond",
        category: "general",
        type:"positive",
        description: [
            "Requires you to have at least 3 dead Heroes in the Graveyard.",
            "You get a choice of 1 of 3 random Heroes from your Graveyard to Resurrect. ",
            "The Resurrected Hero will keep their Resolve Level, but their Skills, Armour and Weapon will be lost.",
        ],
        dlc:"Base Game",
    },
    {
        name: "Lost Shipment",
        category: "general",
        type:"negative",
        description: [
            "Supply Quantities change by -50%.",
            "Provision Quantities change by -50%.",
        ],
        dlc:"Base Game",
    },
    {
        name: "The Dark is Rising",
        category: "general",
        type:"negative",
        description: [
            "Party Gains -15% Virtue Chance on Next Quest.",
        ],
        dlc:"Base Game",
    },
    {
        name: "The Miserable Dark",
        category: "general",
        type:"negative",
        description: [
            "All Stress Relief Activities Less Effective.",
        ],
        dlc:"Base Game",
    },
    //Quest Related
    {
        name: "All Saints Day",
        category: "quest",
        type:"positive",
        description: [
            "Triggered by completing a Ruins Gather Quest.",
            "Cloister is Free.",
            "Transept is Free.",
            "Penance Hall is Free.",
        ],
        dlc:"Base Game",
    },     
    {
        name: "Silence in The Crypts",
        category: "quest",
        type:"positive",
        description: [
            "Triggered by completing a Ruins Activate Quest.",
            "Party Gains +33% Resolve XP in Ruins on Next Quest.",
            "Party Gains +15% DMG in Ruins on Next Quest."
        ],
        dlc:"Base Game",
    },     
    {
        name: "Caregivers Convention",
        category: "quest",
        type:"positive",
        description: [
            "Triggered by completing a Weald Gather Quest.",
            "Sanitarium is Free.",
        ],
        dlc:"Base Game",
    },     
    {
        name: "Sunshine in the Thicket",
        category: "quest",
        type:"positive",
        description: [
            "Triggered by completing a Weald Activate Quest.",
            "Party Gains +33% Resolve XP in Weald on Next Quest.",
            "Party Gains +15% DMG in Weald on Next Quest."
        ],
        dlc:"Base Game",
    }, 
    {
        name: "Bumper Crop",
        category: "quest",
        type:"positive",
        description: [
            "Triggered by completing a Warrens Gather Quest.",
            "Supply costs change by -100%.",
            "Provision costs change by -100%.",
        ],
        dlc:"Base Game",
    },
    {
        name: "Fresh Air in the Tunnels",
        category: "quest",
        type:"positive",
        description: [
            "Triggered by completing a Warrens Activate Quest.",
            "Party Gains +33% Resolve XP in Warrens on Next Quest.",
            "Party Gains +15% DMG in Warrens on Next Quest."
        ],
        dlc:"Base Game",
    },     
    {
        name: "Lost and Found",
        category: "quest",
        type:"positive",
        description: [
            "Triggered by completing a Cove Gather Quest.",
            "Free Upgrade: Weapon x 1.",
        ],
        dlc:"Base Game",
    },
    {
        name: "Gentle Tide",
        category: "quest",
        type:"positive",
        description: [
            "Triggered by completing a Cove Activate Quest.",
            "Party Gains +33% Resolve XP in Cove on Next Quest.",
            "Party Gains +15% DMG in Cove on Next Quest."
        ],
        dlc:"Base Game",
    },
    {
        name: "A Thief in the Night",
        category: "quest",
        type:"negative",
        description: [
            "8 of your Trinkets are stolen by the Shrieker. ",
            "Triggers a Plot Quest to face the Shrieker and reclaim the stolen Trinkets.",
            "(There is no need to kill the Shrieker, surviving the battle will grant you the stolen Trinkets).",
        ],
        dlc:"Base Game",
    },     
    {
        name: "Shrieker's Prize",
        category: "quest",
        type:"negative",
        description: [
            "Triggers Plot Quest: Shrieker's Prize - a chance to face the Shrieker to gain one of its Signature Trinkets.",
            "(There is no need to kill the Shrieker, surviving the battle will grant you the stolen Trinkets).",
        ],
        dlc:"Base Game",
    },     
    {
        name: "Brigand Incursion",
        category: "quest",
        type:"negative",
        description: [
            "Triggers Plot Quest: Wolves at the Door - a Darkest level mission where you face the Brigands who have invaded the Hamlet.",
            "Ignoring the Quest will let the Brigands destroy 3 of your building upgrades within the Hamlet.",
            "Sending in a low level Hero to be killed off will prevent the destruction of any buildings, although as long as you do not complete the Quest it will appear again eventually.",
        ],
        dlc:"Base Game",
    },      

   //Town Facility

   {
    name: "Absent Abbot",
    category: "facility",
    type:"positive",
    description: [        
        "Transept is Locked.",
        "Cloister costs change by -50%.",
        "Penance Hall costs change by -50%.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Cell Cleaning",
    category: "facility",
    type:"positive",
    description: [        
        "Penance Hall is Locked.",
        "Cloister costs change by -50%.",
        "Penance Hall costs change by -50%.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Daylight Robbery",
    category: "facility",
    type:"positive",
    description: [        
        "Gambling Hall is Locked.",
        "Bar costs change by -50%.",
        "Brothel costs change by -50%.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Empty Kegs",
    category: "facility",
    type:"positive",
    description: [        
        "Bar is Locked",
        "Gambling Hall costs change by -50%.",
        "Brothel costs change by -50%.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Labour Force",
    category: "facility",
    type:"positive",
    description: [        
        "Free Upgrade: Building x 1.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Laundry Day",
    category: "facility",
    type:"positive",
    description: [        
        "Brothel is Locked.",
        "Gambling Hall costs change by -50%.",
        "Bar costs change by -50%.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Mardis Gras",
    category: "facility",
    type:"positive",
    description: [        
        "Bar is Free.",
        "Gambling Hall is Free.",
        "Brothel is Free.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Medical Breakthrough",
    category: "facility",
    type:"positive",
    description: [        
        "Medical Devices (Disease Treatment) is Free.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Noisy Repairs",
    category: "facility",
    type:"positive",
    description: [        
        "Cloister is Locked",
        "Transept costs change by -50%.",
        "Penance Hall costs change by -50%.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Nomad New Year",
    category: "facility",
    type:"positive",
    description: [        
        "Trinkets discounted by 50%.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Town Fair",
    category: "facility",
    type:"positive",
    description: [        
        "All Stress Relief Activities & Sanitarium Free.",
    ],
    dlc:"Base Game",
   }, 

   //Heroes

   {
    name: "A Gibbous Moon",
    category: "hero",
    type:"positive",
    description: [        
        "Idle Abominations gain 1 Resolve Level.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Antique Roadshow",
    category: "hero",
    type:"positive",
    description: [        
        "You get 2 Antiquarians you may add to your roster.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Archery Tournament",
    category: "hero",
    type:"positive",
    description: [        
        "Idle Arbalests gain 1 Resolve Level.",
        "Idle Musketeers gain 1 Resolve Level.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Call of the Crusade",
    category: "hero",
    type:"positive",
    description: [        
        "You get 2 Crusaders you may add to your roster.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Eat the Rich",
    category: "hero",
    type:"positive",
    description: [        
        "Idle Grave Robbers gain 1 Resolve Level.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Holy Gathering",
    category: "hero",
    type:"positive",
    description: [        
        "You get 2 Vestals you may add to your roster.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Idle Busking",
    category: "hero",
    type:"positive",
    description: [        
        "Idle Jesters gain 1 Resolve Level.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Laying Low",
    category: "hero",
    type:"positive",
    description: [        
        "Idle Highwaymen gain 1 Resolve Level.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Leper Colony",
    category: "hero",
    type:"positive",
    description: [        
        "You get 2 Lepers you may add to your roster.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Militia Training",
    category: "hero",
    type:"positive",
    description: [        
        "Idle Men-at-Arms gain 1 Resolve Level.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Rats Among Us",
    category: "hero",
    type:"positive",
    description: [        
        "Idle Houndmasters gain 1 Resolve Level.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Revelry",
    category: "hero",
    type:"positive",
    description: [        
        "You get 2 Hellions you may add to your roster.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Rumour of Riches",
    category: "hero",
    type:"positive",
    description: [        
        "You get 2 Bounty Hunters you may add to your roster.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "The Plague",
    category: "hero",
    type:"positive",
    description: [        
        "Idle Plague Doctors gain 1 Resolve Level.",
    ],
    dlc:"Base Game",
   }, 
   {
    name: "Wyrd Council",
    category: "hero",
    type:"positive",
    description: [        
        "You get 2 Occultists you may add to your roster.",
    ],
    dlc:"Base Game",
   }, 

   //DLC CONTENT
   {
    name: "Cornerstone",
    category: "dlc",
    type:"positive",
    description: [        
        "1 Blueprint awarded! (One time Event).",
        "This Event usually appears between Week 7 and 10.",
    ],
    dlc:"Crimson Court DLC",
   }, 
   {
    name: "Blood Pilgrimage",
    category: "dlc",
    type:"positive",
    description: [        
        "You get 2 Flagellants you may add to your roster.",
    ],
    dlc:"Crimson Court DLC",
   }, 
   {
    name: "Blood Scourge",
    category: "dlc",
    type:"positive",
    description: [        
        "The Flagellant can now be found in the Stage Coach.",
        "You may also add 1 to your roster.",
        "This Event only appears once on Week 5.",
    ],
    dlc:"Crimson Court DLC",
   }, 
   {
    name: "A Maddening Whine",
    category: "dlc",
    type:"negative",
    description: [        
        "Triggers Plot Quest: Burn the Hives.",
        "This Event appears on Week 3 and only once.",
    ],
    dlc:"Crimson Court DLC",
   }, 
   {
    name: "A Veil Lifted",
    category: "dlc",
    type:"positive",
    description: [        
        "Removes the Crimson Curse from all affected Heroes.",
        "This Event only occurs after beating the Baron, Viscount or Countess.",
        "The >Countess Version of the Event lets you treat the Crimson Curse using the Sanitarium",
    ],
    dlc:"Crimson Court DLC",
   }, 
   {
    name: "Heresy in the Blood",
    category: "dlc",
    type:"negative",
    description: [        
        "Lets The Fanatic spawn if at least two of your Heroes who enter the next dungeon have the Crimson Curse.",
        "20% Chance with 2 Heroes, 33% Chance with 3 Heroes, 75% chance with 4 Heroes.",
    ],
    dlc:"Crimson Court DLC",
   }, 
   {
    name: "The Town is Abuzz!",
    category: "dlc",
    type:"negative",
    description: [        
        "Stress Relief Activities in the Hamlet are slightly less effective.",
        "Only triggers if the Quest 'Burn the Hives' is not completed after it becomes available. This Event will keep repeating unless a priority Event occurs (such as Blood Scourge) or 'Burn the Hives' is completed.",
    ],
    dlc:"Crimson Court DLC",
   }, 
   {
    name: "The Lights",
    category: "dlc",
    type:"positive",
    description: [        
        "Doubled Chance of encountering the 'Gleaming Shards' Farmstead Curio between Waves.",
    ],
    dlc:"Color of Madness DLC",
   }, 
   {
    name: "Experienced Hero for Hire",
    category: "dlc",
    type:"positive",
    description: [        
        "You may recruit a Resolve 6 Hero for 20 Shards. The Hero will have fully upgraded Skills and Equipment, and it will have the Twilight Dreamer Quirk, even if you already have a Hero with that Quirk.",
    ],
    dlc:"Color of Madness DLC",
   }, 
   {
    name: "Crystaline Focii",
    category: "dlc",
    type:"positive",
    description: [        
        "For 30 Shards every Hero in the roster Heals 50 Stress.",
    ],
    dlc:"Color of Madness DLC",
   }, 
   {
    name: "Shard Harvest",
    category: "dlc",
    type:"positive",
    description: [        
        "Gain 25 Shards.",
    ],
    dlc:"Color of Madness DLC",
   }, 
   {
    name: "They Made a Tonic",
    category: "dlc",
    type:"positive",
    description: [        
        "For 30 Shards every Hero in the roster has 1 Disease cured. This also applies to the Crimson Curse.",
    ],
    dlc:"Color of Madness DLC",
   }, 
   {
    name: "A Desert Wind",
    category: "dlc",
    type:"positive",
    description: [        
        "You get 1 Shieldbreaker you may add to your roster.",
        "This Event only appears once after Week 3.",
    ],
    dlc:"Shieldbreaker DLC",
   }, 
   {
    name: "The Adder's Kiss",
    category: "dlc",
    type:"positive",
    description: [        
        "You get 2 Shieldbreakers you may add to your roster.",
    ],
    dlc:"Shieldbreaker DLC",
   }, 
   {
    name: "The Butcher's Circus",
    category: "dlc",
    type:"positive",
    description: [        
        "Enter the PvP Arena to reduce all Hero's Stress by 10.",
    ],
    dlc:"Butcher's Circus DLC",
   }, 
   {
    name: "Bloodthirsty Crowds",
    category: "dlc",
    type:"positive",
    description: [        
        "Enter the PvP Arena to reduce all Hero's Stress by 10.",
    ],
    dlc:"Butcher's Circus DLC",
   }, 
]
const GeneralEventContainer = document.getElementById("general_town_event_names")
const QuestEventContainer = document.getElementById("quest_town_event_names")
const FacilityEventContainer = document.getElementById("facility_town_event_names")
const HeroEventContainer = document.getElementById("hero_town_event_names")
const DLCEventContainer = document.getElementById("dlc_town_event_names")

TownEventData.forEach((event) => {

    const eventElement = document.createElement("span");
    const eventIDName = event.name.toLowerCase().replace(/\s/g, '_');
    const linebreak = document.createElement("br");
    eventElement.textContent = event.name

        eventElement.id = eventIDName;
        if(event.type === "positive") {
            eventElement.className = "highres event_name"
        }
        if(event.type === "negative") {
            eventElement.className = "negative event_name"
        }
        if(event.dlc === "Crimson Court DLC") {
            eventElement.className = "crimson_court event_name"
        }
        if(event.dlc === "Color of Madness DLC") {
            eventElement.className = "crystalline event_name"
        }
        if(event.dlc === "Shieldbreaker DLC") {
            eventElement.className = "block event_name"
        }
        if(event.dlc === "Butcher's Circus DLC") {
            eventElement.className = "highres event_name"
        }
        eventElement.id = eventIDName

        if(event.category === "general") {
            GeneralEventContainer.appendChild(eventElement);        
            GeneralEventContainer.appendChild(linebreak);
        }
        if(event.category === "quest") {
            QuestEventContainer.appendChild(eventElement);        
            QuestEventContainer.appendChild(linebreak);
        }
        if(event.category === "facility") {
            FacilityEventContainer.appendChild(eventElement);        
            FacilityEventContainer.appendChild(linebreak);
        }
        if(event.category === "hero") {
            HeroEventContainer.appendChild(eventElement);        
            HeroEventContainer.appendChild(linebreak);
        }
        if(event.category === "dlc") {
            DLCEventContainer.appendChild(eventElement);        
            DLCEventContainer.appendChild(linebreak);
        }
});
    

function generateTownEvents(event) {
    const eventIDName = event.name.toLowerCase().replace(/\s/g, '_');
    const eventID = `${eventIDName}_box`;
    const eventImgSrc = event.name.replace(/\s/g, '_');
    const EventInfo = document.createElement("div");


    event.description.forEach(text => {
        const StyledText = replaceSpecificEventDesc(text);
        const linebreak = document.createElement("br");
        
        EventInfo.innerHTML +=StyledText
        EventInfo.appendChild(linebreak)
    });




    const EventOrigin = event.dlc? replaceSpecificEventDesc(event.dlc) : '';
    
     return `
            <div class = "event_info_container nondisplay" id = "${eventID}">
                <img src = "images/Town_Events/${eventImgSrc}.webp" class = "event_img">
                <div class = "ddlogo_text town_event_title">${event.name}</div>
                ${EventInfo.innerHTML}
                <div class = "ddlogo_text event_origin">${EventOrigin}</div>
            </div>
            
           
        `;
  }

  function replaceSpecificEventDesc(description) {
    description = description.replace(/Stress Relief/g, '<span class="stress">Stress Relief</span>');
    description = description.replace(/Healing/g, '<span class="stress">Healing</span>');
    description = description.replace(/Heals/g, '<span class="stress">Heals</span>');
    description = description.replace(/Heal/g, '<span class="stress">Heal</span>');
    description = description.replace(/Stress/g, '<span class="stress">Stress</span>');
    description = description.replace(/Virtue/g, '<span class="stress">Virtue</span>');
    description = description.replace(/Disease/g, '<span class="disease">Disease</span>');
    description = description.replace(/Heroes/g, '<span class="highres">Heroes</span>');
    description = description.replace(/Hero/g, '<span class="highres">Hero</span>');
    description = description.replace(/Resolve Level/g, '<span class="highres">Resolve Level</span>');
    description = description.replace(/Event/g, '<span class="attack_type">Event</span>');
    description = description.replace(/Quirks/g, '<span class="attack_type">Quirks</span>');
    description = description.replace(/Quirk/g, '<span class="attack_type">Quirk</span>');

    description = description.replace(/Medical Devices/g, '<span class="highres">Medical Devices</span>');
    description = description.replace(/Gleaming Shards/g, '<span class="highres">Gleaming Shards</span>');

    description = description.replace(/Graveyard/g, '<span class="grey">Graveyard</span>');
    description = description.replace(/Stagecoach/g, '<span class="grey">Stagecoach</span>');
    description = description.replace(/Stage Coach/g, '<span class="grey">Stage Coach</span>');
    description = description.replace(/Bar/g, '<span class="grey">Bar</span>');
    description = description.replace(/Gambling Hall/g, '<span class="grey">Gambling Hall</span>');
    description = description.replace(/Brothel/g, '<span class="grey">Brothel</span>');
    description = description.replace(/Tansept/g, '<span class="grey">Tansept</span>');
    description = description.replace(/Cloister/g, '<span class="grey">Cloister</span>');
    description = description.replace(/Penance Hall/g, '<span class="grey">Penance Hall</span>');
    description = description.replace(/Sanitarium/g, '<span class="grey">Sanitarium</span>');

    description = description.replace(/Ruins/g, '<span class="buff">Ruins</span>');
    description = description.replace(/Weald/g, '<span class="buff">Weald</span>');
    description = description.replace(/Warrens/g, '<span class="buff">Warrens</span>');
    description = description.replace(/Cove/g, '<span class="buff">Cove</span>');
    description = description.replace(/Gather/g, '<span class="buff">Gather</span>');
    description = description.replace(/Activate/g, '<span class="buff">Activate</span>');
    description = description.replace(/Plot Quest/g, '<span class="buff">Plot Quest</span>');

    description = description.replace(/Shrieker's Prize/g, "<span class='shrieker'>Shrieker's Prize</span>");
    description = description.replace(/Shrieker/g, '<span class="shrieker">Shrieker</span>');
    description = description.replace(/Wolves at the Door/g, "<span class='ancestral'>Wolves at the Door</span>");
    description = description.replace(/Darkest/g, "<span class='ancestral'>Darkest</span>");
    description = description.replace(/Brigands/g, "<span class='negative'>Brigands</span>");

    description = description.replace(/Hamlet/g, '<span class="attack_type">Hamlet</span>');

    description = description.replace(/Armor/g, '<span class="attack_type">Armor</span>');
    description = description.replace(/Weapon/g, '<span class="attack_type">Weapon</span>');
    description = description.replace(/Trinkets/g, '<span class="attack_type">Trinkets</span>');
    description = description.replace(/Trinket/g, '<span class="attack_type">Trinket</span>');
    description = description.replace(/Curios/g, '<span class="attack_type">Curios</span>');
    description = description.replace(/Curio/g, '<span class="attack_type">Curio</span>');

    description = description.replace(/Burn the Hives/g, '<span class="crimson_court">Burn the Hives</span>');
    description = description.replace(/Crimson Curse/g, '<span class="crimson_court">Crimson Curse</span>');
    description = description.replace(/Blood Scourge/g, '<span class="crimson_court">Blood Scourge</span>');

    description = description.replace(/Fanatic/g, '<span class="crimson_court">Fanatic</span>');
    description = description.replace(/Baron/g, '<span class="crimson_court">Baron</span>');
    description = description.replace(/Viscount/g, '<span class="crimson_court">Viscount</span>');
    description = description.replace(/Countess/g, '<span class="crimson_court">Countess</span>');
    description = description.replace(/Blueprint/g, '<span class="rare">Blueprint</span>');

    description = description.replace(/The Farmstead/g, '<span class="crystalline">The Farmstead</span>');
    description = description.replace(/Farmstead/g, '<span class="crystalline">Farmstead</span>');
    description = description.replace(/Shards/g, '<span class="crystalline">Shards</span>');
    description = description.replace(/Shard/g, '<span class="crystalline">Shard</span>');
    description = description.replace(/Twilight Dreamer/g, '<span class="crystalline">Twilight Dreamer</span>');


    description = description.replace(/Color of Madness DLC/g, '<span class="crystalline">Color of Madness DLC</span>');
    description = description.replace(/Crimson Court DLC/g, '<span class="crimson_court">Crimson Court DLC</span>');
    description = description.replace(/Shieldbreaker DLC/g, '<span class="block">Shieldbreaker DLC</span>');

    description = description.replace(/Flagellants/g, '<span class="crimson_court">Flagellants</span>');
    description = description.replace(/Flagellant/g, '<span class="crimson_court">Flagellant</span>');
    description = description.replace(/Shieldbreakers/g, '<span class="block">Shieldbreakers</span>');
    description = description.replace(/Shieldbreaker/g, '<span class="block">Shieldbreaker</span>');
    description = description.replace(/Abominations/g, '<span class="highres">Abominations</span>');
    description = description.replace(/Arbalests/g, '<span class="highres">Arbalests</span>');
    description = description.replace(/Musketeers/g, '<span class="highres">Musketeers</span>');
    description = description.replace(/Antiquarians/g, '<span class="highres">Antiquarians</span>');
    description = description.replace(/Crusaders/g, '<span class="highres">Crusaders</span>');
    description = description.replace(/Grave Robbers/g, '<span class="highres">Grave Robbers</span>');
    description = description.replace(/Vestals/g, '<span class="highres">Vestals</span>');
    description = description.replace(/Jesters/g, '<span class="highres">Jesters</span>');
    description = description.replace(/Highwaymen/g, '<span class="highres">Highwaymen</span>');
    description = description.replace(/Lepers/g, '<span class="highres">Lepers</span>');
    description = description.replace(/Men-at-Arms/g, '<span class="highres">Men-at-Arms</span>');
    description = description.replace(/Houndmasters/g, '<span class="highres">Houndmasters</span>');
    description = description.replace(/Hellions/g, '<span class="highres">Hellions</span>');
    description = description.replace(/Bounty Hunters/g, '<span class="highres">Bounty Hunters</span>');
    description = description.replace(/Plague Doctors/g, '<span class="highres">Plague Doctors</span>');
    description = description.replace(/Occultists/g, '<span class="highres">Occultists</span>');


    
    return description;
}

  TownEventData.forEach((event) => {
    const eventHTML = generateTownEvents(event);
    TownEventMainContainer.innerHTML += eventHTML;
});

