const MainBossBox = document.getElementById("boss_box_hub");



function CreateBossTrinkets(bosstrinketid) {
        const bossTrinketImage = document.createElement("img");
        bossTrinketImage.src = `images/Boss_trinkets/${encodeURIComponent(bosstrinketid)}.png`;
        bossTrinketImage.loading = "lazy";
        bossTrinketImage.className = "boss_trinket"
        bossTrinketImage.id = bosstrinketid;

        return bossTrinketImage
}


const NecromancerTrophy = CreateBossTrinkets("necromancer's_collar")
const ProphetTrophy = CreateBossTrinkets("prophet's_eye")

const HagTrophy = CreateBossTrinkets("hag's_ladle")
const BrigandPounderTrophy = CreateBossTrinkets("fuseman's_matchstick")

const ShriekerTrophy2 = CreateBossTrinkets("distended_crowseye")
const ShriekerTrophy1 = CreateBossTrinkets("callous_talon")
const ShriekerTrophy4 = CreateBossTrinkets("molted_wingfeather")
const ShriekerTrophy3 = CreateBossTrinkets("molted_tailfeather")




const SwinePrinceTrophy = CreateBossTrinkets("wilbur's_flag")
const FleshTrophy = CreateBossTrinkets("flesh's_heart")

const SirenTrophy = CreateBossTrinkets("siren's_conch")
const DrownedCrewTrophy = CreateBossTrinkets("crew's_bell")

const CollectorTrophy1 = CreateBossTrinkets("dismas'_head")
const CollectorTrophy2 = CreateBossTrinkets("barristan's_head")
const CollectorTrophy3 = CreateBossTrinkets("junia's_head")



const ShamblerTrophy = CreateBossTrinkets("shambler_trinkets")
const ShamblerTrophy1 = CreateBossTrinkets("ancestor's_map")
const ShamblerTrophy2 = CreateBossTrinkets("ancestor's_bottle")
const ShamblerTrophy3 = CreateBossTrinkets("ancestor's_candle")
const ShamblerTrophy4 = CreateBossTrinkets("ancestor's_tentacle_idol")
const ShamblerTrophy5 = CreateBossTrinkets("ancestor's_scroll")


const BossLore = [
    {
        containerid: "necromancer_lore_container",
        headertxt: " Towering. Fierce. Terrible. Nightmare Made Material.",
        lorecontent:[
            "Mastery over life and death being among the top of the Ancestor's to-do list, he invited a delegation of experts from overseas in order to plumb the depths of their knowledge and share with them certain techniques and alchemical processes he had found to yield wondrous and terrifying results. ",
            "Having learned all he could from the scholars, the Ancestor murdered them in their sleep and brought them back from the dead with much of their inteklect intact.",
            "Now freed from the trappings of their humanity, they plied their terrible trade anew: the dead reviving the dead, on and on, down the years. Forever.",
            "The scholars now rule the Ruins as Necromancers, raising an endless number of undead soldiers.",
        ]
    },
    {
        containerid: "prophet_lore_container",
        headertxt: " The Madman Hides There, Behind the Pews, Spouting His Mindless Drivel.",
        lorecontent:[
            "When excavations beneath the manor were well underway, the Prophet arrived in the hamlet, boasting an uncanny knowledge of the Ancestor's ambitions and prognosticated publicly that, left unchecked, He (The Ancestor) would soon unleash doom upon the world.",
            "Hearing this, the Ancestor attempted to silence the Prophet, but doing so proved maddeningly impossible with him surviving the stockades, the icy waters, and the knives the Ancestor delivered so enthusiastically into his back.",
            "Having yielded to the Prophet's inhuman resilience, the Ancestor lured him to the dig, where he showed him the THING and detailed the full extent of his plans. ",
            "This caused the Prophet to tear his eyes from their sockets and ran shrieking into the shadows of the Ruina, wailing maniacally that the end was upon us all."
        ]   
    },
    {
        containerid: "hag_lore_container",
        headertxt: " Twisted and Maniacal,  A Slathering Testament to the Powers Of Corruption.",
        lorecontent:[
            "The Ancestor had collected many rare and elusive volumes on ancient herbal properties and was set to enjoy several weeks immersed in comfortable study. His work was interrupted, however, by a singularly striking young woman who insisted on repeated calls to the house.",
            "Her knowledge of horticulturalism and its role in various arcane practices impressed the Ancestor greatly and hislicentious impulse gave way to a genuine professional respect, and together, the two began to plant, harvest, and brew.",
            "As time wore on, her wild policy of self-experimentation grew intolerable. She quaffed all manner of strange fungi, herbs, and concoctions, intent on gaining some insight into the horror they both knew to be growing beneath them.",
            "The change in her was appalling, and no longer able to stomach it, the Ancestor sent the Hag to live in the weald, where her wildness would be welcomed. And there, she continues her alchemical experiemnts.",
        ]
    },
    {
        containerid: "brigand_pounder_lore_container",
        headertxt: " A Marvel Of Technology,  The Engine Of Destruction!",
        lorecontent:[
            "Rumors of the Ancestor's morbid genius and secretive excavations began to fill local legend but in the face of his increasingly egregious flaunting of public taboos, awe turned to ire, and demonstrations were held in the town square.",
            "The wild whispers of heresy roused the rabble to violent action, with the general air of rebellion being so potentthat even the Ancestor's generous offer of gold to the local constabulary was rebuffed.", 
            "To reassert his rule, the Ancestor sought out unscrupulous men skilled in the application of force. Tight-lipped and terrifying, these mercenaries brought with them a war machine of terrible implication.",
            "Eager to end the tiresome domestic distraction, the Ancestor instructed his newly formed militia of hardened bandits, brigands, and killers to go forth and do their work. ",
            "Compliance and order were restored, and the noisome population of the Hamlet was culled to more manageable numbers.",
            "The Brigands and their imposing warmachine now lies in the Weald, terrorizing any who dares to go through the region.",
        ]
    },
    {
        containerid: "shrieker_lore_container",
        headertxt: " Once a Proud Raven,  Now Twisted Beyond Recognition.",
        lorecontent:[
            "The Shrieker dwells deep within the heart of the Weald, with its Nest hidden at the top of a gigantic tree, where its gnarled and twisted branches keep it concealed.",
            "The avian has seen better days, as the corruption that plagues the estate has twisted this feathered bird into a feathered fiend.",
            "Despite being corrupted, this feathered fiend is still a Raven at heart and has an eye for everything that glitters and shines, and its Nest is decorated with all the shiny and glittering Trinkets it has stolen from our Trinkets Chest or taken from the dead bodies of our fallen heroes. ",
            "Reclaiming these items will not be easy, for the Shrieker will defend its Nest from any intruders. But if Shrieker feels that it is not worth its life to protect his hoard of treasures, it will abandon its nest and escape to live another day, free to steal more of our rare and valuable Trinkets.",
        ]
    },
    {
        containerid: "swine_prince_lore_container",
        headertxt: " It is a Travesty. A Blundering Mountain Of Hatred and Rage.",
        lorecontent:[
            "The Ancestor had been partaking in rituals involving blood sacrifice, which is difficult to master. To summon beings from beyond into our reality, an adequate physical vessel with the proper utterances at precise intervals is needed.",
            "After failing  for a time, the Ancestor soon learned that the  condition of the host's meat was a critical factor, the best results coming from pigs, whose flesh is most like that of man.",
            "In light of this discovery, the Ancestor at last succeeded to bring the Swine Prince into our reality, where it resided in the Warrens and required prodigious amounts of meat to sustain itself.",
            "Thankfully, this was but a trifling concern thanks to the Ancestor having access to a village full of it in the form of the citizens of the Hamlet at the time.",
            "Now, the Swine Prince dwells within the Warrens with a swinefolk with 2 flags now directs his actions.",
        ]
    },
    {
        containerid: "flesh_lore_container",
        headertxt: " Squirming, Contorting, and Ever Expanding. This Horror Must Be Unmade!",
        lorecontent:[
            "The Ancestor's zeal for blood rituals and summoning rites had begun to ebb, as each attempt invariably brought only failure and disappointment. Progress was halting, and the rapidly accumulating surplus of wasted flesh had become burdensome.",
            "He was unable to store such a prodigious amount of offal, nor was it possible for him to rid of it easily due to it being possessed by unnameable things from outer spheres.",
            "However, When excavations beneath the manor broke through into an ancient network of aqueducts and tunnels, the Ancestor realized he had found a solution to the problem of disposal. ",
            "The spasmodically squirming, braying, and snorting half-corpses were heaped each upon the other, until at last the Ancestor was rid of them.", 
            "However, due to this the Warrens had become a landfill of snout and hoof, gristle and bone - a mountainous, twitching mass of misshapen flesh, fusing itself together in the darkness..",
        ]
    },
    {
        containerid: "siren_lore_container",
        headertxt: "I Always Wondered What Became To the Unfortunate Little Waif.",
        lorecontent:[
            "It was during a time when the Ancestor could walk the streets or raise a glass in the tavern without concern for molestation.", 
            "Faithful as the tide, one precocious village waif made it her hobby to shadow his every errand. It was charming then, troublesome later.",
            "In financial desperation, the Ancestor struck a bargain with the ancient things that surfaced in search of sacrifice when the moon was right.", 
            "Their price was the delivery of an obscure idol and one other item of more troubling portent. The pact struck, the Ancestor's new-found accomplices slipped silently beneath the brackish water and a fearful stirring at the edge of the torchlight betrayed a familiar witness and gifted him with malign inspiration.",
            "Under the blood moon, the Ancestor lured his wide-eyed prey to the pier's edge, and before she could properly appreciate her position, he clamped down a manacle, chaining her to the leering idol.", 
            "A small push was sufficient to send both into the icy waters. And, when at length the tide receded, jewels of the most magnificent grandeur lay scattered upon the shore.",
            "The Siren now acts as the Cove's Queen, forced to do the Fisherfolk's bidding and lure any traveller in with her alluring song.",
        ]
    },
    {
        containerid: "drowned_crew_lore_container",
        headertxt: " The Poor Devils, Chained and Drowning, For Eternity...",
        lorecontent:[
            "Prying eyes had become a nuisance along the old road, and so the Ancestor undertook to receive his most curious deliveries by way of marine shipments.", 
            "A sheltered jetty was accessible by a narrow stone stair off the back of the manor, and a discreet system of pulleys could hoist even the heaviest prizes up the rock face from a securely tied dinghy below.",
            "The Ancestor employed a crew of particularly unsavory mariners, who for a time sailed the four corners at his behest, retrieving many valuable artifacts, relics and rare texts.", 
            "Predictably, they increased their tariffs to counter the Ancestor's intense stipulations of secrecy. Such resources had long been exhausted, of course, and so he prepared an alternative payment.            ",
            "While the greedy dogs slept off their revelry, the Ancestor hexed their anchor with every twisted incantation he could muster, imbuing it with the weight of his ambition and contempt for their crude extortion. ",
            "At the witching hour, the anchor pulled with preternatural force, dragging craft and crew down into the depths. They must have cried out, but no sound escaped the swirling black waters.            ",
            "The Drowned Crew seemingly having been reanimated through some sort of Unholy powers now dwells within the deeps of the Cove, waiting to have more sailors meet the same fate as they did.",
        ]
    },
    {
        containerid: "collector_lore_container",
        headertxt: " A Full Pack Often Attracts Unwanted Attention.",
        lorecontent:[
            "The Collector, the Baleful King donned in yellow roams the halls in seach of more victims to grow his endless collection of Heads and Riches.",
            "He seems to be capable of reanimating corpses like the Necromancer, although his method of reanimation seems to differ, with Blue Eldritch light shining within the reainimated Heads.",
            "Considering how you can find the Collector Head Trinkets and Puzzling Trapezohedrons from Secret Rooms, it is likely that the Secret Room stash is one of the many stashes of the Collector.",
        ]
    },
    {
        containerid: "shambler_lore_container",
        headertxt: "A Torch and an Altar, What Could Possibly Go Wrong?",
        lorecontent:[
            "The Shambler is a cosmic monstrosity of Eldritch origins who dwells within the Darkness and its own cosmic plane of existence, waiting to drag any who is foolish enough to activate its altar or stay in the Darkness.",
            "The Shambler seems to be an entity that is worshipped by some, having altars dedicated to it.",
            "The Shambler's mere presence seems to have a property or power that snuffs out all Light, with you being unable to raise the Torchlight above 0 as long as it is still alive.",
        ]
    },
]

const LoreContainers = {};


function CreateBossLore() {
    BossLore.forEach((bosslore) => {
        const BossLoreContainer = document.createElement("div");
        BossLoreContainer.id = bosslore.containerid;

        const BossLoreTextContainer = document.createElement("div");
        BossLoreTextContainer.className = "boss_side_text_container boss_lore"; 
        
        const BossLoreHeader = document.createElement("div");
        BossLoreHeader.className = "ddlogo_text veteran lore_headertxt";
        BossLoreHeader.textContent = bosslore.headertxt;

        BossLoreTextContainer.appendChild(BossLoreHeader)

        bosslore.lorecontent.forEach((loreText) => { 
           const loreParagraph = document.createElement("p");
           loreParagraph.textContent = loreText;
           BossLoreTextContainer.appendChild(loreParagraph);
        });

        BossLoreContainer.appendChild(BossLoreTextContainer);
        LoreContainers[bosslore.containerid] = BossLoreContainer;

    })
}

CreateBossLore()
const BossStrategy = [
    {
        containerid: "necromancer_strategy_container",
        strategycontent:[
            "The Necromancer being the first Boss you will fight in an estate, he is not very challenging. Even so, it is best to know how to most effectively defeat him just in case.",
            "The Necromancer starts at rank 1, and moves back with every action he takes. He relies on his summons to keep him safe & overwhelm your party with sheer numbers. Mind the fact that from Veteran onwards the Necromancer can summon Bone Defenders which can potentially Guard him and Bone Captains from Champion, which pack a punch and are very durable.",
            "With the Necromancer's relatively low resistances outside of Stun, any form of damage will do at least decently against him, although Direct Damage will be more desirable considering the boss only takes 1 turn per round, with focusing him down with Mark Based Damage Dealers being the quickest way to finish him off.",
            "If possible, it is good to try to Stun the Necromancer so he cannot hide himself at the back ranks and your frontline damage dealers can continue to dish out damage, although if he gets to the back ranks, his low move resist makes him very susceptible to Pulls to the front ranks.",
            "",
        ]
    },
    {
        containerid: "prophet_strategy_container",
        strategycontent:[
            "The Prophet is a boss who starts at position 4, with his 3 pews occupying the front 3 ranks to keep the boss away from harm's reach. He relies on landing several 'Rubble of Ruin' hits and gradually whittling you down via stress and minor DoT Damage.",
            "Damage Away! - Since the only real danger factor of the fight is from the high damage of 'Rubble of Ruin' you simply debuff prophet's damage to the point where any threat he posed before is invalidated. Debuffs that lower damage like the Leper's Intimidate or the Occultists' Weakening Curse is great for this purpose.",
            "PROT & DODGE Stacking coupled with Guards serves as a good safety net in the very rare instances where things could go south, although they should not be your primary and only countermeasure for the fight.",
            "If you don't want to spend time destroying pews for the loot they drop, you can bring backline damage to the fight to end it more quickly, with Mark Based damage being desirable since the Arbalest/Musketeer(who has a decent debuff in Suppressing Fire/Smokescreen and a Off Heal for safety) and the Houndmaster(Who has a Guard) are good heroes to bring with the Occultist being able to Mark with Vulnerability Hex.",
        ]
    },
    {
        containerid: "hag_strategy_container",
        strategycontent:[
            "The Hag is a boss who will stay in the back 2 ranks, and she relies on her Cauldron to get a hero to Death's Door to actually land a killing blow due to her poor damage output while she tries to last until then by limiting your party to 3 heroes and some minor self healing and debuffs.",
            "Heroes in the Cauldron take 8.75% of their Max HP as damage every time a hero or the Hag takes an action, with the Hero being put at position 1 once they hit Death's Door or the enough damage is dealt to the Filled Cauldron.",
            "Even though your first instinct may be to try to free the trapped hero ASAP, considering the fact that the Hag will simply grab another Hero soon after anyways and the boss having quite a small HP pool, it can be better to try to burst her down quickly with your 3 Heroes.",
            "Due to all of these factors, high backline damage output with flexible positioning is greatly desirable with classes such as the Hellion, with being ready with Healing skills to get Heroes off of Death's Door.",
            "Like many other Bosses, Mark Based Damage is the best way to slay the Hag. Riposte is also a good option due to the Hag using Meat Tenderizer often and there only being 3 heroes to target, making it likely for the boss to target a hero with Riposte active.",
        ]
    },
    {
        containerid: "brigand_pounder_strategy_container",
        strategycontent:[
            "The Brigand Pounder is a boss with potentially great damage output that mainly tries to wear your Heroes down with continuous Brigand Summons. The Pounder has innate Damage Resistance (25%) and some PROT.",
            "The Pounder relies on the Matchman to survive until the end of the round without being Stunned to potentially nuke your entire party with 'BOOOOOOOM!'. ",
            "Due to this, you want your party to have good backline reach with good waveclear and longevity (AKA a solid composition) to be able to kill or Stun the Matchman, keep the other Brigands under control while still dealing Damage to the Pounder.",
            "In terms of dealing damage to the Pounder itself, using Marked Based Damage is the best option with Armor Piercing skills like Pierce or Pick to the Face being decent.",
        ]
    },
    {
        containerid: "shrieker_strategy_container",
        strategycontent:[
            "The Shrieker is an Event Boss that is fought in the Weald at the Shrieker's Nest. The Shrieker is accompanied by his Nest which he uses to shuffle himself to the front or the back ranks.",
            "The Nest can be destroyed for riches(See Icon to the Left of Related Enemies). And winning the encounter via surviving until the boss flees or killing it can grant unique Corvid's Quirks (See Icon to the Right of Stats).",
            "In terms of actually slaying the boss, due to its sky-high DODGE Accuracy trinkets are highly recommended, with Heroes that can target both the front and back ranks with High Damage moves (Be it with Mark Synergy or not) due to the Shrieker moving to the front or back positions constantly.",
             "Riposte is also quite potent with the shrieker having a good few moves that target multiple Heroes. 1 or more Jesters can do well thanks to them being able to quickly charge up Finale and use it for good Damage with essentially no risk of Missing.",
              "In terms of surviving the encounter, the easiest/ most consistent way is to bring a Guarder with high PROT or DODGE with a Healer to Heal off any Damage the Guarder may take or using 1 Leper with PROT trinkets.",
        ]
    },
    {
        containerid: "swine_prince_strategy_container",
        strategycontent:[
            "1. Rallying Flare - Arbalest / Musketeer's Rallying Flare / Skeet Shot abilities are able to clear all Stuns and Marks on every hero BUT THEMSELVES, which effectively nullifies the boss' main gimmick as long as the Arbalest / Musketeer is kept safe from any Marks or Stuns, especially from Veteran Onwards where Wilbur gets a 2nd action to use to potentially Stun them, which is usually done by Guarding them and in the case of being Marked, using the Shieldbreaker's Camping Skill, Sandstorm to make them Unmarkable.",
            "2. Mark and Kill - Since the Swine Prince isn't particularly weak to DoT damage due to the boss only having 1 action per turn for DoT Damage to do its thing, dishing out a lot of direct damage is your best bet for killing it quickly, especially since you are almost always going to bring the Arbalest, who is a Mark Based Damage Dealer.",
            "Outside of this, it is good to keep in mind that non damaging shuffle skills like the Plague Doctor's Disorienting Blast and the Bounty Hunter's Flashbang can move Wilbur to the front while potentially Stunning him without triggering Enraged Destruction, forcing him to use Squeal to go back to the back positions, which stops him from Marking your heroes for the turn, and potentially 2 if the Stun goes through.",
            "In addition, Debuff stacking with skills like Leper's Intimidate and Occultist's Weakening Curse can be used to make the boss hit like a wet noodle, especially if coupled with heroes with High PROT.",
        ]
    },
    {
        containerid: "flesh_strategy_container",
        strategycontent:[
            "The Flesh is a boss comprised of 4 enemies that share a single HP pool, and have attacks that can pack a punch with Stuns and Damage Over Time which can prove to be deadly. They are also aided by having a good bit of RNG during the battle.",
            "All Flesh Parts but the Heart are quite durable with the lowest PROT value being 30% and the highest reaching a whopping 90%.",
            "At the start of every round, each part has a chance to change to a random body part with some restrictions (Heads must be at front, Butts at back)",
            "One thing to note is that with the boss' main Damage Dealing skills, they can be played around due to 'Maws of Life' only hitting the front 2 ranks and 'Undulating Invasion' only being able to target the back positions.",
            "Considering the fact that many of the Flesh Parts have hefty PROT numbers, Bleeds and Blights - preferrably Area of Effect are highly desirable, with Heroes such as the Plague Doctor and Flagellant.",
            "The Shieldbreaker is also a good choice due to having Armor Piercing damage in 'Pierce' and a full cleave that can apply Blight.",
            "Due to the Flesh having a tendency to focus down a Hero, Guards are preferrable as a safety measure with the Houndmaster being the more desirable of the 2 Guarders due to having 'Hound's Harry', a full cleave with Bleeds.",
            "Mark Based Damage can be viable if you are lucky and the Flesh rolls many Flesh's Hearts, but due to it being RNG based there are better alternatives.",
        ]
    },
    {
        containerid: "siren_strategy_container",
        strategycontent:[
            "The Siren is a boss who relies on your own heroes to actually be a threat, having virtually no damage potential herself and using 'Song of Desire' to try to charm one of your Heroes and bring them to her side temporarily.",
            "'Song of Desire' has a flat 70% chance to control a hero instead of depending on the Hero's Debuff Resist, but the Siren's AI is still more likely to target the Hero with the lowest Debuff Resist. In addition, Heroes Charmed by the boss can only use the skills they had equipped at the start of the combat.",
            "She is also quite susceptible to DoT damage from Bleeds and Blights due to taking 2 actions per turn alongside a relatively low Stun Resist.",
            "Due to all of this, the most common tactic used by players is using the Antiquarian with her low Debuff Resist as 'bait' for the Siren to charm, since She won't be a threat when Charmed.",
            "High Damage Heroes are discouraged since they could be a threat when Charmed whereas Heroes like the Plague Doctor or Occultist are encouraged due to the Siren being susceptible to Stuns and DoT damage.",
            "While utilizing Riposte can sound appealing due to the Siren having 2 full party cleaves, they can be risky due to charmed heroes potentially targetting a Hero with Riposte active and taking a blow for it.",
            "Mark Based Damage still remains as a viable strategy, although Heroes like the Bounty Hunter can do hefty damage to your Heroes if Charmed even without a Mark.",
        ]
    },
    {
        containerid: "drowned_crew_strategy_container",
        strategycontent:[
            "The Drowned Crew is a boss that tries to outlast you with passive healing if a Hero is Chained, but overall lacks any real threat to pose to your Heroes due to having ignorable damage potential.",
            "The main gimmick of the boss is with the Anchorman's 'Heave to!' ability,where if the ability hits and a Hero is chained gives the Crew hefty buffs to its resistances and PROT and Heals the Crew whenever a Hero or the boss takes an action.",
            "The first method to trivialising the fight is simply not letting the Anchorman use the ability at all by killing it before it can act (Do mind the anchorman has a hefty amount of PROT before landing 'Heave to!') or Stunning it. Shieldbreaker's Pierce skil is great for killing the Anchorman through its 50% PROT.",
            "The Second method is using high DODGE to simply dodge 'Heave to!' so the Crew cannot gain the buffs. This works well with the Houndmaster due to his Guard skill giving him more DODGE.",
            "The third and most niche method is having a Virtued Hero at Position 1 (where 'Heave to!' will always target if used) since the skill will fail if used on a Virtued Hero, Stress Healing your Heroes instead.",
            "If the Anchorman succeeds in chaining a Hero, just try to get rid of the Anchorman as quickly as possible to get rid of the Buff on the Crew.",
            "In terms of killing the Boss, as long as you can shut down the Anchorman, anything goes, with Bleeds and Blights being decent due to Crew taking 2 actions per Round or using Mark Based Damage Dealers to Mark and Kill the Boss with Pure Damage. ",
        ]
    },
    {
        containerid: "collector_strategy_container",
        strategycontent:[
            "The Collector is a Hallway MiniBoss which has a chance to replace a Hallway Battle if 13 or more of your inventory slots are filled.",
            "Due to the Collector spawning randomly, you can't really prepare for it, although as long as your party composition is solid, you will probably be fine.",
            "The Collector's main threat is the Collected Highwaymen he summons with 'Collect Call' which can deal hefty damage with a Bleed. The Collected Vestal is of minimal threat and  usually buffs and heals its teammates. The Collected Man-at-Arms does a bit of Damage but can potentially Guard The Collector.",
            "That being said, the Collector has middling Stun Resist and Speed, so you can pretty consistently Stun him on Round 1, take off about Half of its HP, and then easily finish the fight on turns 2-4.",
            "Do remember that you may simply retreat from the battle and try again if the turn 1 Stun fails, and if you lack the Damage to kill the Collector quickly, just try to keep the Collected Highwaymen under check and you should be fine.",
            "In summary: Build a solid composition with good Damage, Accuracy, and Reach alongside Stuns AKA just build a solid composition you should be using anyways.",
        ]
    },
    {
        containerid: "shambler_strategy_container",
        strategycontent:[
            "The Shambler is a Hallway Miniboss which can be spawned deliberately at the Shambler's Altar or can be encountered as a random Hallway Fight if your light level is at 0, where there is a chance for the Shambler to replace an existing Hallway Battle. ",
            "The Shambler is a force to be reckoned with, packing Area of Effect attacks with Bleeds, Blights, and Shuffles with a high chance to CRIT thanks to the light level being locked at 0 during the fight if the Shambler is alive.",
            "The Shambler Summons 2 Shambler Tentacles with 2 of its skills, which give themselves a hefty buff every time they land a hit and can get out of hand if left unchecked. The Tentacles are quite frail with low HP but boast a high DODGE stat which can prove to be troublesome or even deadly.",
            "You are guarenteed to be Surprised at the start of an Shambler encounter so make sure to preshuffle your team to get a beneficial reshuffle into more desirable positions and preferrably fight it with a position-flexible party.",
            "You preferrably want to be able to consistently take out both Tentacles every turn and whittle down the Shambler. Stuns can be a risky but worthwhile gambit on turn 1 since it will delay the summons for 1 round and let you lay down important initial damage.",
            "Riposte + DODGE stacking can be very potent thanks to Tentacles requiring their attacks to land to get their buffs and all of the Shambler's attacks being full party Area of Effect.",
            "Mark Based Damage can be good for focusing down the Shambler quickly, but do mind how deadly the Shambler Tentacles can be if they are allowed to stack their buffs up.",
            "Overall, you want a composition that can take care of the summons well with good Accuracy etc, and is quite position flexible. If you encounter an Shambler Altar during a medium/long dungeon, you may want to save it for Buffing your party up in preparation for the battle.",
        ]
    },
]

const StrategyContainers = {};

function CreateBossStrategy() {
    BossStrategy.forEach((bossStrategy) => {
        const BossStrategyContainer = document.createElement("div");
        BossStrategyContainer.id = bossStrategy.containerid;
        BossStrategyContainer.className = "nondisplay"

        const BossStrategyTextContainer = document.createElement("div");
        BossStrategyTextContainer.className = "boss_side_text_container boss_strategy"; 
        

        bossStrategy.strategycontent.forEach((strategyText) => { 
           const strategyParagraph = document.createElement("p");
           strategyParagraph.textContent = strategyText;
           BossStrategyTextContainer.appendChild(strategyParagraph);
        });

        BossStrategyContainer.appendChild(BossStrategyTextContainer);
        StrategyContainers[bossStrategy.containerid] = BossStrategyContainer;
    })
}


CreateBossStrategy()

const NecromancerLoreBox = LoreContainers["necromancer_lore_container"];
const NecromancerStrategyBox = StrategyContainers["necromancer_strategy_container"];

const ProphetLoreBox = LoreContainers["prophet_lore_container"];
const ProphetStrategyBox = StrategyContainers["prophet_strategy_container"];

const HagLoreBox = LoreContainers["hag_lore_container"];
const HagStrategyBox = StrategyContainers["hag_strategy_container"];

const BrigandPounderLoreBox = LoreContainers["brigand_pounder_lore_container"];
const BrigandPounderStrategyBox = StrategyContainers["brigand_pounder_strategy_container"];

const ShriekerLoreBox = LoreContainers["shrieker_lore_container"];
const ShriekerStrategyBox = StrategyContainers["shrieker_strategy_container"];

const SwinePrinceLoreBox = LoreContainers["swine_prince_lore_container"];
const SwinePrinceStrategyBox = StrategyContainers["swine_prince_strategy_container"];

const FleshLoreBox = LoreContainers["flesh_lore_container"];
const FleshStrategyBox = StrategyContainers["flesh_strategy_container"];

const SirenLoreBox = LoreContainers["siren_lore_container"];
const SirenStrategyBox = StrategyContainers["siren_strategy_container"];

const DrownedCrewLoreBox = LoreContainers["drowned_crew_lore_container"];
const DrownedCrewStrategyBox = StrategyContainers["drowned_crew_strategy_container"];

const CollectorLoreBox = LoreContainers["collector_lore_container"];
const CollectorStrategyBox = StrategyContainers["collector_strategy_container"];

const ShamblerLoreBox = LoreContainers["shambler_lore_container"];
const ShamblerStrategyBox = StrategyContainers["shambler_strategy_container"];

const BossSharedData = [
    {
        id: "necromancer", 
        spritetype: "medium", 
        foretext: "Master of Life and Death", 
        bossheader: "The Necromancer",
        hasdarkest:false,

    },
    {
        id: "prophet", 
        spritetype: "medium", 
        foretext: "He Fortells Our Doom", 
        bossheader: "The Prophet",
        hasdarkest:false,

    },
    {
        id: "hag", 
        spritetype: "medium", 
        foretext: "The Weald is Her Home", 
        bossheader: "The Hag",
        hasdarkest:false,

    },
    {
        id: "brigand_pounder", 
        spritetype: "short", 
        foretext: "It Lies Within the Weald", 
        bossheader: "The Brigand Pounder",
        hasdarkest:false,

    },
    {
        id: "shrieker", 
        spritetype: "short", 
        foretext: "The Thief in the Night", 
        bossheader: "The Shrieker",
        hasdarkest:true,

    },
    {
        id: "swine_prince", 
        spritetype: "normal", 
        foretext: "Royalty of the Warrens", 
        bossheader: "The Swine Prince",
        hasdarkest:false,

    },
    {
        id: "flesh", 
        foretext: "Scourge of the Warrens", 
        bossheader: "The Flesh",
        hasdarkest:false,

    },
    {
        id: "siren", 
        spritetype: "normal", 
        foretext: "Matriarch of the Cove", 
        bossheader: "The Siren",
        hasdarkest:false,

    },
    {
        id: "drowned_crew", 
        spritetype: "normal", 
        foretext: "Within the Depths of the Cove...", 
        bossheader: "The Drowned Crew",
        hasdarkest:false,

    },
    {
        id: "collector", 
        spritetype: "thin", 
        foretext: "He seeks to Grow his Collection", 
        bossheader: "The Collector",
        hasdarkest:false,

    },
    {
        id: "shambler", 
        spritetype: "med_short", 
        foretext: "A Star-Spawned Horror!", 
        bossheader: "The Shambler",
        hasdarkest:true,
    },
]

function CreateBossSharedContent(bossdata, container) {
    bossdata.forEach(boss => {
        const bossSharedContainer = document.createElement("div");
        bossSharedContainer.className = "boss_enemy_main_container nondisplay";
        bossSharedContainer.id = `${boss.id}_shared_container`;

    if (boss.id === "flesh"){
        const fleshSpriteContainer = document.createElement("div");
        fleshSpriteContainer.className = "flesh_sprite_container"

        const fleshButtSprite = document.createElement("img");
        fleshButtSprite.src = "images/Boss_monsters/flesh_butt.webp";
        fleshButtSprite.loading = "lazy"
        fleshButtSprite.classList = "quad_sprite butt_sprite";

        const fleshHeartSprite = document.createElement("img");
        fleshHeartSprite.src = "images/Boss_monsters/flesh_heart.webp";
        fleshHeartSprite.loading = "lazy"
        fleshHeartSprite.classList = "quad_sprite heart_sprite";

        const fleshBoneSprite = document.createElement("img");
        fleshBoneSprite.src = "images/Boss_monsters/flesh_bone.webp";
        fleshBoneSprite.loading = "lazy"
        fleshBoneSprite.classList = "quad_sprite bone_sprite";

        const fleshHeadSprite = document.createElement("img");
        fleshHeadSprite.src = "images/Boss_monsters/flesh_head.webp";
        fleshHeadSprite.loading = "lazy"
        fleshHeadSprite.classList = "quad_sprite head_sprite";

        fleshSpriteContainer.appendChild(fleshButtSprite)
        fleshSpriteContainer.appendChild(fleshHeartSprite)
        fleshSpriteContainer.appendChild(fleshBoneSprite)
        fleshSpriteContainer.appendChild(fleshHeadSprite)

        bossSharedContainer.appendChild(fleshSpriteContainer);
    } 

    else{
        const bossSpriteImage = document.createElement("img");
        bossSpriteImage.src = `images/Boss_monsters/${boss.id}.webp`;
        bossSpriteImage.loading = "lazy";

        if (boss.spritetype === "normal") {
            bossSpriteImage.className = "boss_sprite";
        } else if (boss.spritetype === "medium") {
            bossSpriteImage.className = "boss_sprite medium_boss";
        } else if (boss.spritetype === "short") {
            bossSpriteImage.className = "boss_sprite short_boss";
        } else if (boss.spritetype === "thin") {
            bossSpriteImage.className = "boss_sprite thin_boss";
        } else if (boss.spritetype === "med_short") {
            bossSpriteImage.className = "boss_sprite med_short_boss";
        } 
        bossSharedContainer.appendChild(bossSpriteImage);
    }
    const bossHeaderContainer = document.createElement("div");
    bossHeaderContainer.className = "boss_header_container"

    const ForeTextSpan = document.createElement("span")
    ForeTextSpan.className = "foretext"
    ForeTextSpan.textContent = boss.foretext;

    const lineBreak = document.createElement("br");

    const MainBossHeader = document.createElement("span")
    MainBossHeader.className = "main_boss_header"
    MainBossHeader.textContent = boss.bossheader;

    bossHeaderContainer.appendChild(ForeTextSpan);
    bossHeaderContainer.appendChild(lineBreak);
    bossHeaderContainer.appendChild(MainBossHeader);

    const apprenticeBossBtn = createLevelButton('app_banner', 'boss_app_btn', `${boss.id}_app_btn`);
    const veteranBossBtn = createLevelButton('vet_banner', 'boss_vet_btn', `${boss.id}_vet_btn`);
    const championBossBtn = createLevelButton('champ_banner', 'boss_champ_btn', `${boss.id}_champ_btn`);


    const bossTrinketContainer = document.createElement("div");
    bossTrinketContainer.className = "boss_trinket_container";
    bossTrinketContainer.id = `${boss.id}_trinkets`;

    

    if (boss.id === "necromancer") {
        bossTrinketContainer.appendChild(NecromancerTrophy);
    } else if (boss.id === "prophet") {
        bossTrinketContainer.appendChild(ProphetTrophy);
    } else if (boss.id === "hag") {
        bossTrinketContainer.appendChild(HagTrophy);
    } else if (boss.id === "brigand_pounder") {
        bossTrinketContainer.appendChild(BrigandPounderTrophy);
    } else if (boss.id === "shrieker") {
        bossTrinketContainer.appendChild(ShriekerTrophy1);
        bossTrinketContainer.appendChild(ShriekerTrophy2);
        bossTrinketContainer.appendChild(ShriekerTrophy3);
        bossTrinketContainer.appendChild(ShriekerTrophy4);

    } else if (boss.id === "swine_prince") {
        bossTrinketContainer.appendChild(SwinePrinceTrophy);
    } else if (boss.id === "flesh") {
        bossTrinketContainer.appendChild(FleshTrophy);
    } else if (boss.id === "siren") {
        bossTrinketContainer.appendChild(SirenTrophy);
    } else if (boss.id === "drowned_crew") {
        bossTrinketContainer.appendChild(DrownedCrewTrophy);
    } else if (boss.id === "collector") {
        bossTrinketContainer.appendChild(CollectorTrophy1);
        bossTrinketContainer.appendChild(CollectorTrophy2);
        bossTrinketContainer.appendChild(CollectorTrophy3);

    } else if (boss.id === "shambler") {
        bossTrinketContainer.appendChild(ShamblerTrophy1);
        bossTrinketContainer.appendChild(ShamblerTrophy2);
        bossTrinketContainer.appendChild(ShamblerTrophy3);
        bossTrinketContainer.appendChild(ShamblerTrophy4);
        bossTrinketContainer.appendChild(ShamblerTrophy5);
        
    }     
    


    const bossLoreBtn = document.createElement("img");
    bossLoreBtn.src = `images/Boss_monsters/boss_lore_btn.png`;
    bossLoreBtn.loading = "lazy";
    bossLoreBtn.className = "boss_lore_btn"
    bossLoreBtn.id = `${boss.id}_lore_btn`

    const bossStrategyBtn = document.createElement("img");
    bossStrategyBtn.src = `images/Boss_monsters/boss_strategy_btn.png`;
    bossStrategyBtn.loading = "lazy";
    bossStrategyBtn.className = "boss_strategy_btn"
    bossStrategyBtn.id = `${boss.id}_strategy_btn`


    bossSharedContainer.appendChild(bossHeaderContainer);
    bossSharedContainer.appendChild(apprenticeBossBtn);
    bossSharedContainer.appendChild(veteranBossBtn);
    bossSharedContainer.appendChild(championBossBtn);

    if (boss.hasdarkest){
        const darkestBossBtn = createLevelButton('darkest_banner', 'boss_darkest_btn', `${boss.id}_darkest_btn`);
        bossSharedContainer.appendChild(darkestBossBtn);
    }
    bossSharedContainer.appendChild(bossTrinketContainer);

    const DarkestBossIcon = document.createElement("img");
    DarkestBossIcon.src = "images/estate_icons/info_icon_question_mark.png";
    DarkestBossIcon.className = "info shambler_info";
    DarkestBossIcon.id = "shambler_endless_info";
    DarkestBossIcon.loading = "lazy";

    const EndlessShriekerIcon = document.createElement("img");
    EndlessShriekerIcon.src = "images/estate_icons/info_icon_question_mark.png";
    EndlessShriekerIcon.className = "info shambler_info";
    EndlessShriekerIcon.id = "shrieker_endless_info";
    EndlessShriekerIcon.loading = "lazy";
    
    const bossQuirkIcon = document.createElement("img");
    bossQuirkIcon.src = "images/estate_icons/quirk_icon.png";
    bossQuirkIcon.loading = "lazy";
    bossQuirkIcon.className = "info boss_quirk_info";
    bossQuirkIcon.id = `${boss.id}_quirk_info`

    if (boss.id === "necromancer") {
        bossSharedContainer.appendChild(NecromancerLoreBox);
        bossSharedContainer.appendChild(NecromancerStrategyBox);
    } else if (boss.id === "prophet") {
        bossSharedContainer.appendChild(ProphetLoreBox);
        bossSharedContainer.appendChild(ProphetStrategyBox);
    } else if (boss.id === "hag") {
        bossSharedContainer.appendChild(HagLoreBox);
        bossSharedContainer.appendChild(HagStrategyBox);
    } else if (boss.id === "brigand_pounder") {
        bossSharedContainer.appendChild(BrigandPounderLoreBox);
        bossSharedContainer.appendChild(BrigandPounderStrategyBox);
    } else if (boss.id === "shrieker") {
        bossSharedContainer.appendChild(ShriekerLoreBox);
        bossSharedContainer.appendChild(ShriekerStrategyBox);
        bossSharedContainer.appendChild(EndlessShriekerIcon);
        bossSharedContainer.appendChild(bossQuirkIcon);

    } else if (boss.id === "swine_prince") {
        bossSharedContainer.appendChild(SwinePrinceLoreBox);
        bossSharedContainer.appendChild(SwinePrinceStrategyBox);
    } else if (boss.id === "flesh") {
        bossSharedContainer.appendChild(FleshLoreBox);
        bossSharedContainer.appendChild(FleshStrategyBox);
    } else if (boss.id === "siren") {
        bossSharedContainer.appendChild(SirenLoreBox);
        bossSharedContainer.appendChild(SirenStrategyBox);
    } else if (boss.id === "drowned_crew") {
        bossSharedContainer.appendChild(DrownedCrewLoreBox);
        bossSharedContainer.appendChild(DrownedCrewStrategyBox);
    } else if (boss.id === "collector") {
        bossSharedContainer.appendChild(CollectorLoreBox);
        bossSharedContainer.appendChild(CollectorStrategyBox);
    } else if (boss.id === "shambler") {
        bossSharedContainer.appendChild(ShamblerLoreBox);
        bossSharedContainer.appendChild(ShamblerStrategyBox);
        bossSharedContainer.appendChild(DarkestBossIcon);

    }     

    bossSharedContainer.appendChild(bossLoreBtn)
    bossSharedContainer.appendChild(bossStrategyBtn)

    container.appendChild(bossSharedContainer);    
});
};

CreateBossSharedContent(BossSharedData,MainBossBox)



function createLevelButton(imgSrc, className, id) {
const button = document.createElement('img');
button.src = `images/Boxes/${imgSrc}.png`;
button.className = `boss_diff_btn ${className}`;
button.loading = "lazy";
button.id = id;
return button;
}


const BossData =  [

    //Necromancer
    {
        id: "necromancer",
        app_stat1:["Unholy", "Eldritch", "105 / !126", "8",],        
        app_stat2:["1", "1", "0", "0%",], 
        app_resist1:["75%", "20%", "25%",],
        app_resist2:["20%", "40%", "Bypass X"],

        vet_stat1:["Unholy", "Eldritch", "158 / !190", "9",], 
        vet_stat2:["1", "1", "8.75", "0%",], 
        vet_resist1:["95%", "40%", "45%",],
        vet_resist2:["40%", "60%", "Bypass X"],

        champ_stat1:["Unholy", "Eldritch", "215 / !258", "10",], 
        champ_stat2:["1", "1", "22.5", "0%",], 
        champ_resist1:["115%", "60%", "65%",],
        champ_resist2:["60%", "80%", "Bypass X"],

        minion: ["bone_rabble", "bone_soldier", "bone_defender", "bone_captain",],
        skills: ["The Flesh Is Willing", "The Clawing Dead", "Six Feet Under",],
        hasmorebossinfo: false,
        hasmoreminioninfo: true,
        hasdarkest:false,

    },

    //Prophet
    {
        id: "prophet",
        app_stat1:["Unholy", "", "105 / !126", "0",],        
        app_stat2:["1", "1*", "5", "0%",], 
        app_resist1:["100%", "0%", "300%",],
        app_resist2:["0%", "20%", "Bypass"],

        vet_stat1:["Unholy", "", "158 / !190", "1",], 
        vet_stat2:["1", "1*", "13.75", "0%",], 
        vet_resist1:["120%", "20%", "320%",],
        vet_resist2:["20%", "40%", "Bypass"],

        champ_stat1:["Unholy", "", "215 / !258", "2",], 
        champ_stat2:["1", "1*", "27.5", "0%",], 
        champ_resist1:["140%", "40%", "340%",],
        champ_resist2:["40%", "60%", "Bypass"],

        minion: ["small_pew", "medium_pew", "large_pew",],
        skills: ["Prognostication", "Rubble of Ruin", "Eye On You", "Fulminate"],
        hasmorebossinfo: true,
        hasmoreminioninfo: true,
        hasdarkest:false,

    },

    //Hag
     {
        id: "hag",
        app_stat1:["Human", "", "66 / !80", "5",],        
        app_stat2:["2", "2", "5", "0%",], 
        app_resist1:["100%", "60%", "200%",],
        app_resist2:["20%", "40%", "Bypass X"],

        vet_stat1:["Human", "", "99 / !119", "6",], 
        vet_stat2:["2", "2", "13.75", "0%",], 
        vet_resist1:["120%", "80%", "220%",],
        vet_resist2:["40%", "60%", "Bypass X"],

        champ_stat1:["Human", "", "135 / !162", "7",], 
        champ_stat2:["2", "2", "27.5", "0%",], 
        champ_resist1:["140%", "100%", "240%",],
        champ_resist2:["60%", "80%", "Bypass X"],

        minion: ["cauldron_empty", "cauldron_full",],
        skills: ["Into The Pot!", "Meat Tenderizer", "Season to Perfection","Taste the Stew"],
        hasmorebossinfo: false,
        hasmoreminioninfo: false,
        hasdarkest:false,

    },

    //Brigand Pounder
     {
        id: "brigand_pounder",
        app_stat1:["Ironwork", "", "76 / !92", "0",],        
        app_stat2:["1", "0*", "0", "20%",], 
        app_resist1:["200%", "200%", "100%",],
        app_resist2:["200%", "200%", "Bypass"],

        vet_stat1:["Ironwork", "", "114 / !137", "1",], 
        vet_stat2:["1", "0*", "8.75", "20%",], 
        vet_resist1:["220%", "220%", "120%",],
        vet_resist2:["220%", "220%", "Bypass"],

        champ_stat1:["Ironwork", "", "156 / !188", "2",], 
        champ_stat2:["1", "0*", "22.5", "25%",], 
        champ_resist1:["240%", "240%", "140%",],
        champ_resist2:["240%", "240%", "Bypass"],

        minion: ["brigand_matchman", "brigand_cutthroat", "brigand_fusilier", "brigand_bloodletter"],
        skills: ["BOOOOOOOM!", "MISFIRE!", "Reinforcements!","Pounder Passive"],
        hasmorebossinfo: true,
        hasmoreminioninfo: true,
        hasdarkest:false,

    },

    //Shrieker
    {
        id: "shrieker",
        app_stat1:["Eldritch", "Beast", "75 / !90", "7",],        
        app_stat2:["2", "3", "40", "0%",], 
        app_resist1:["55%", "200%", "55%",],
        app_resist2:["55%", "30%", "Bypass"],

        vet_stat1:["Eldritch", "Beast", "113 / !136", "8",], 
        vet_stat2:["2", "3", "48.75", "0%",], 
        vet_resist1:["75%", "220%", "75%",],
        vet_resist2:["75%", "50%", "Bypass"],

        champ_stat1:["Eldritch", "Beast", "154 / !185", "9",], 
        champ_stat2:["2", "3", "62.5", "0%",], 
        champ_resist1:["95%", "240%", "95%",],
        champ_resist2:["95%", "70%", "Bypass"],

        darkest_stat1:["Eldritch", "Beast", "154 / !185", "9",], 
        darkest_stat2:["2", "3", "62.5", "0%",], 
        darkest_resist1:["95%", "240%", "95%",],
        darkest_resist2:["95%", "70%", "Bypass"],

        minion: ["shrieker's_nest",],
        skills: ["Peck", "Caw", "Call the Murder", "Regurgitate", "Shrieking Flight"],
        hasmorebossinfo: true,
        hasmoreminioninfo: true,
        hasdarkest:true,

    },

    //Swine Prince
    {
        id: "swine_prince",
        app_stat1:["Beast", "", "132 / !159", "0",],        
        app_stat2:["3", "1*", "0", "0%",], 
        app_resist1:["100%", "0%", "100%",],
        app_resist2:["0%", "20%", "Bypass X"],

        vet_stat1:["Beast", "", "198 / !238", "1",], 
        vet_stat2:["3", "1*", "8.75", "0%",], 
        vet_resist1:["120%", "20%", "120%",],
        vet_resist2:["20%", "40%", "Bypass X"],

        champ_stat1:["Beast", "", "271 / !326", "2",], 
        champ_stat2:["3", "1*", "22.5", "0%",], 
        champ_resist1:["140%", "40%", "140%",],
        champ_resist2:["40%", "60%", "Bypass X"],

        minion: ["wilbur",],
        skills: ["Obliterate Body", "Obliterate Masses", "Enraged Destruction", "Wild Flailing",],
        hasmorebossinfo: true,
        hasmoreminioninfo: true,
        hasdarkest:false,

    },

    //Siren
    {
        id: "siren",
        app_stat1:["Eldritch", "", "119 / !143", "5",],        
        app_stat2:["2", "2", "12.5", "0%",], 
        app_resist1:["50%", "40%", "25%",],
        app_resist2:["60%", "40%", "Bypass"],

        vet_stat1:["Eldritch", "", "179 / !215", "6",], 
        vet_stat2:["2", "2", "21.25", "0%",], 
        vet_resist1:["70%", "60%", "45%",],
        vet_resist2:["80%", "60%", "Bypass"],

        champ_stat1:["Eldritch", "", "244 / !293", "7",], 
        champ_stat2:["2", "2", "35", "0%",], 
        champ_resist1:["90%", "80%", "65%",],
        champ_resist2:["100%", "80%", "Bypass"],

        minion: ["deep_stinger", "pelagic_grouper", "pelagic_guardian",],
        skills: ["Song of Desire", "High Tide", "Pressure Crash", "Devour",],
        hasmorebossinfo: true,
        hasmoreminioninfo: true,
        hasdarkest:false,

    },

    //Drowned Crew
    {
        id: "drowned_crew",
        app_stat1:["Unholy", "", "100 / !120", "3",],        
        app_stat2:["3", "2*", "0", "0%",], 
        app_resist1:["50%", "20%", "200%",],
        app_resist2:["60%", "20%", "Bypass X"],

        vet_stat1:["Unholy", "", "150 / !180", "4",], 
        vet_stat2:["3", "2*", "8.75", "0%",], 
        vet_resist1:["70%", "40%", "220%",],
        vet_resist2:["80%", "40%", "Bypass X"],

        champ_stat1:["Unholy", "", "205 / !246", "5",], 
        champ_stat2:["3", "2*", "22.5", "0%",], 
        champ_resist1:["90%", "60%", "240%",],
        champ_resist2:["100%", "60%", "Bypass X"],

        minion: ["drowned_anchorman",],
        skills: ["All Hands on Deck!", "Mutiny", "Drink with the Dead", "Boarding Clutch",],
        hasmorebossinfo: true,
        hasmoreminioninfo: true,
        hasdarkest:false,

    },

    //Collector
    {
        id: "collector",
        app_stat1:["Human", "Eldritch", "70 / !84", "5",],        
        app_stat2:["1", "1", "0", "0%",], 
        app_resist1:["50%", "20%", "25%",],
        app_resist2:["25%", "20%", "Bypass X"],

        vet_stat1:["Human", "Eldritch", "98 / !118", "6",], 
        vet_stat2:["1", "1", "8.75", "0%",], 
        vet_resist1:["70%", "40%", "45%",],
        vet_resist2:["45%", "40%", "Bypass X"],

        champ_stat1:["Human", "Eldritch", "137 / !165", "7",], 
        champ_stat2:["1", "1", "21.25", "0%",], 
        champ_resist1:["90%", "60%", "65%",],
        champ_resist2:["65%", "60%", "Bypass X"],

        minion: ["collected_highwayman","collected_man_at_arms","collected_vestal"],
        skills: ["Collect Call", "Show Collection", "Life Steal", ],
        hasmorebossinfo: true,
        hasmoreminioninfo: true,
        hasdarkest:false,

    },

    //Shambler
    {
        id: "shambler",
        app_stat1:["Eldritch", "", "77 / !93", "0",],        
        app_stat2:["2", "1", "0", "33%",], 
        app_resist1:["100%", "40%", "50%",],
        app_resist2:["40%", "40%", "Bypass X"],

        vet_stat1:["Eldritch", "", "116 / !136", "1",], 
        vet_stat2:["2", "1", "8.75", "33%",], 
        vet_resist1:["120%", "60%", "70%",],
        vet_resist2:["60%", "60%", "Bypass X"],

        champ_stat1:["Eldritch", "", "158 / !190", "2",], 
        champ_stat2:["2", "1", "22.5", "33%",], 
        champ_resist1:["140%", "80%", "90%",],
        champ_resist2:["80%", "80%", "Bypass X"],

        darkest_stat1:["Eldritch", "", "174 / !209", "3",], 
        darkest_stat2:["2", "1", "25", "33%",], 
        darkest_resist1:["145%", "85%", "95%",],
        darkest_resist2:["85%", "85%", "Bypass X"],

        minion: ["shambler_tentacle",],
        skills: ["Obdurous Advancement", "Undulating Withdrawal", "Stentorious Lament",],
        hasmorebossinfo: true,
        hasmoreminioninfo: true,
        hasdarkest:true,

    },
    

]

function CreateBossDiffContent(bossdata, container) {
    bossdata.forEach(boss => {

        
        // Main Difficulty Containers
        const bossAppContainer = document.createElement("div");
        bossAppContainer.className = `boss_enemy_main_container ${boss.id}_main nondisplay`;
        bossAppContainer.id = `${boss.id}_app_info`;

        const bossVetContainer = document.createElement("div");
        bossVetContainer.className = `boss_enemy_main_container ${boss.id}_main_vet nondisplay`;
        bossVetContainer.id = `${boss.id}_vet_info`;

        const bossChampContainer = document.createElement("div");
        bossChampContainer.className = `boss_enemy_main_container ${boss.id}_main_champ nondisplay`;
        bossChampContainer.id = `${boss.id}_champ_info`;




        // Stat and Resist Containers


        const bossAppStats = document.createElement("div");
        bossAppStats.className = "boss_stat_container";
        bossAppStats.id = `${boss.id}_app_stats`;

        const bossVetStats = document.createElement("div");
        bossVetStats.className = "boss_stat_container";
        bossVetStats.id = `${boss.id}_vet_stats`;

        const bossChampStats = document.createElement("div");
        bossChampStats.className = "boss_stat_container";
        bossChampStats.id = `${boss.id}_champ_stats`;

        const bossAppResists = document.createElement("div");
        bossAppResists.className = "boss_resist_container";
        bossAppResists.id = `${boss.id}_app_resists`;

        const bossVetResists = document.createElement("div");
        bossVetResists.className = "boss_resist_container";
        bossVetResists.id = `${boss.id}_vet_resists`;

        const bossChampResists = document.createElement("div");
        bossChampResists.className = "boss_resist_container";
        bossChampResists.id = `${boss.id}_champ_resists`;

        // Statline1
        const createStatLine1 = (container, data) => {
            const statline1 = document.createElement("div");
            statline1.className = "statline1";
        
            const updatedData = data.map(line => {
                return line.replace(/!\s*(\d+)/g, '<span class="negative">$1</span>');
            });
        
            statline1.innerHTML = updatedData.join("<br>");
        
            container.appendChild(statline1);
        };
        

        // Statline 2
        const createStatLine2 = (container, data) => {
            const statline2 = document.createElement("div");
            statline2.className = "statline2";
            statline2.innerHTML = data.join("<br>");
            container.appendChild(statline2);
        };


        // Statline 1 & 2 (Stats)
        createStatLine1(bossAppStats, boss.app_stat1);
        createStatLine2(bossAppStats, boss.app_stat2);

        createStatLine1(bossVetStats, boss.vet_stat1);
        createStatLine2(bossVetStats, boss.vet_stat2);

        createStatLine1(bossChampStats, boss.champ_stat1);
        createStatLine2(bossChampStats, boss.champ_stat2);

        // Statline1 & 2 (Resistances)
        createStatLine1(bossAppResists, boss.app_resist1);
        createStatLine1(bossVetResists, boss.vet_resist1);
        createStatLine1(bossChampResists, boss.champ_resist1);

        createStatLine2(bossAppResists, boss.app_resist2);
        createStatLine2(bossVetResists, boss.vet_resist2);
        createStatLine2(bossChampResists, boss.champ_resist2);

     
        bossAppContainer.appendChild(bossAppStats);
        bossAppContainer.appendChild(bossAppResists);

        bossVetContainer.appendChild(bossVetStats);
        bossVetContainer.appendChild(bossVetResists);

        bossChampContainer.appendChild(bossChampStats);
        bossChampContainer.appendChild(bossChampResists);

            

    if (boss.minion) {
        const appMinionContainer = createMinionContainer(boss.minion, "app");
        const vetMinionContainer = createMinionContainer(boss.minion, "vet");
        const champMinionContainer = createMinionContainer(boss.minion, "champ");
    
        bossAppContainer.appendChild(appMinionContainer);
        bossVetContainer.appendChild(vetMinionContainer);
        bossChampContainer.appendChild(champMinionContainer);

    }

        const createSkillsContainer = (difficulty) => {
            const skillsContainer = document.createElement("div");
            skillsContainer.className = "boss_skill_container";
            skillsContainer.id = `${boss.id}_${difficulty}_skills`;

            boss.skills.forEach(skill => {
                const skillText = skill.replace(/!/g, '').replace(/['\s]/g, '_').toLowerCase();
                      
                const skillElement = document.createElement("span");
                skillElement.textContent = skill;
                skillElement.id = `${skillText}_${difficulty}_lvl`;
                skillsContainer.appendChild(skillElement);
                skillsContainer.appendChild(document.createElement("br"));
            });

            return skillsContainer;
        };



        const appSkillsContainer = createSkillsContainer("app");
        const vetSkillsContainer = createSkillsContainer("vet");
        const champSkillsContainer = createSkillsContainer("champ");

        bossAppContainer.appendChild(appSkillsContainer);
        bossVetContainer.appendChild(vetSkillsContainer);
        bossChampContainer.appendChild(champSkillsContainer);

        
        function createMoreInfo(difficulty) {
            const bossMoreInfo = document.createElement("img");
             bossMoreInfo.src = "images/Hero_boxes/more_info_icon.png";
            bossMoreInfo.loading = "lazy";
            bossMoreInfo.className = "info boss_additional_info";
            bossMoreInfo.id = `${boss.id}_additional_info_${difficulty}`
            return bossMoreInfo; 
        };

        function createMoreMinionInfo(difficulty) {
            const bossMinionMoreInfo = document.createElement("img");
            bossMinionMoreInfo.src = "images/Hero_boxes/more_info_icon.png";
            bossMinionMoreInfo.loading = "lazy";
            bossMinionMoreInfo.className = "info boss_minion_additional_info";
            bossMinionMoreInfo.id = `${boss.id}_minion_more_info_${difficulty}`
            return  bossMinionMoreInfo; 
        };



        if(boss.hasmorebossinfo) {
        bossAppContainer.appendChild(createMoreInfo("app"));
        bossVetContainer.appendChild(createMoreInfo("vet"));
        bossChampContainer.appendChild(createMoreInfo("champ"));
    }  
        if(boss.hasmoreminioninfo) {
        bossAppContainer.appendChild(createMoreMinionInfo("app"));
        bossVetContainer.appendChild(createMoreMinionInfo("vet"));
        bossChampContainer.appendChild(createMoreMinionInfo("champ"));
    }  
       


        // Difficulty Containers
    container.appendChild(bossAppContainer);
    container.appendChild(bossVetContainer);
    container.appendChild(bossChampContainer);


        if(boss.hasdarkest) {
            const bossDarkestContainer = document.createElement("div");
            bossDarkestContainer.className = `boss_enemy_main_container ${boss.id}_main_darkest nondisplay`;
            bossDarkestContainer.id = `${boss.id}_darkest_info`;

            const bossDarkestStats = document.createElement("div");
            bossDarkestStats.className = "boss_stat_container";
            bossDarkestStats.id = `${boss.id}_darkest_stats`;

            const bossDarkestResists = document.createElement("div");
            bossDarkestResists.className = "boss_resist_container";
            bossDarkestResists.id = `${boss.id}_darkest_resists`;

            createStatLine1(bossDarkestStats, boss.darkest_stat1);
            createStatLine2(bossDarkestStats, boss.darkest_stat2);
            createStatLine1(bossDarkestResists, boss.darkest_resist1);
            createStatLine2(bossDarkestResists, boss.darkest_resist2);

            bossDarkestContainer.appendChild(bossDarkestStats);
            bossDarkestContainer.appendChild(bossDarkestResists);

            const darkestMinionContainer =  createMinionContainer(boss.minion, "darkest");
            bossDarkestContainer.appendChild(darkestMinionContainer);

            const darkestSkillsContainer = createSkillsContainer("darkest");
            bossDarkestContainer.appendChild(darkestSkillsContainer);

            const bossMoreInfo = document.createElement("img");
            bossMoreInfo.src = "images/Hero_boxes/more_info_icon.png";
            bossMoreInfo.loading = "lazy";
            bossMoreInfo.className = "info boss_additional_info";
            bossMoreInfo.id = `${boss.id}_additional_info`
            bossDarkestContainer.appendChild(bossMoreInfo.cloneNode(true));

            const bossMinionMoreInfo = document.createElement("img");
            bossMinionMoreInfo.src = "images/Hero_boxes/more_info_icon.png";
            bossMinionMoreInfo.loading = "lazy";
            bossMinionMoreInfo.className = "info boss_minion_additional_info";
            bossMinionMoreInfo.id = `${boss.id}_minion_more_info`
            bossDarkestContainer.appendChild(bossMinionMoreInfo.cloneNode(true));
            container.appendChild(bossDarkestContainer);

          
    
        }

        
        function createMinionContainer(minionArray, difficulty) {
            const minionContainer = document.createElement("div");
            minionContainer.className = `boss_minion_port_container ${difficulty}`;
            minionArray.forEach(minion => {
                const minionImage = document.createElement("img");
                minionImage.src = `images/Boss_monsters/${minion}_port.png`;
                minionImage.className = "minion_port_img";
                minionImage.id = `${minion}_${difficulty}_port`;
                minionImage.loading = "lazy";

                minionContainer.appendChild(minionImage);
            });
            return minionContainer;
        }
        

    });
}

CreateBossDiffContent(BossData, MainBossBox);

//Shared Info Icons 
function CreateBossLocateTip(container) {
    const findBossIcon = document.createElement("img");
    findBossIcon.src = "images/estate_icons/info_icon_question_mark.png";
    findBossIcon.className = "info";
    findBossIcon.id = "boss_locate";
    findBossIcon.loading = "lazy";
    container.appendChild(findBossIcon);
}



function CreateBossScrollTip(container) {
    const scrollTextIcon = document.createElement("img");
    scrollTextIcon.src = "images/estate_icons/info_icon_question_mark.png";
    scrollTextIcon.className = "info scroll_info";
    scrollTextIcon.id = "can_scroll";
    scrollTextIcon.loading = "lazy";
    container.appendChild(scrollTextIcon);
}

function CreateTrophyInfo(container) {
    const TrophyInfo = document.createElement("img");
    TrophyInfo.src = "images/estate_icons/info_icon_question_mark.png";
    TrophyInfo.className = "info trophy_info";
    TrophyInfo.id = "trophy_info";
    TrophyInfo.loading = "lazy";
    container.appendChild(TrophyInfo);
}

function CreateLifelinkInfo(container) {
    const LifelinkInfo = document.createElement("img");
    LifelinkInfo.src = "images/estate_icons/info_icon_question_mark.png";
    LifelinkInfo.className = "info lifelink_info";
    LifelinkInfo.id = "lifelink_info";
    LifelinkInfo.loading = "lazy";
    container.appendChild(LifelinkInfo);
}



CreateBossLocateTip(MainBossBox)
CreateBossScrollTip(MainBossBox)
CreateTrophyInfo(MainBossBox)
CreateLifelinkInfo(MainBossBox)


//Minion Shared Info

const MinionSharedData = [
    {
        id: "small_pew", 
        //spritetype: "short", 
        minionName: "Small Pew",
        hasdarkest:false,

    },
    {
        id: "medium_pew", 
        //spritetype: "normal", 
        minionName: "Medium Pew",
        hasdarkest:false,

    },
    {
        id: "large_pew", 
        //spritetype: "short", 
        minionName: "Large Pew",
        hasdarkest:false,
        isthin:true
    },
    {
        id: "cauldron_empty", 
        //spritetype: "normal", 
        minionName: "Cauldron(Empty)",
        hasdarkest:false,

    },
    {
        id: "cauldron_full", 
        //spritetype: "normal", 
        minionName: "Cauldron(Full)",
        hasdarkest:false,

    },

    {
        id: "brigand_matchman", 
        //spritetype: "thin", 
        minionName: "Brigand Matchman",
        hasdarkest:false,
        isthin:true
    },
    
    {
        id: "shrieker's_nest", 
        //spritetype: "med_short", 
        minionName: "Shrieker's Nest",
        hasdarkest:false,
    },

    {
        id: "wilbur", 
        //spritetype: "short", 
        minionName: "Wilbur",
        hasdarkest:false,

    },
    {
        id: "drowned_anchorman", 
        //spritetype: "normal", 
        minionName: "Drowned Anchorman",
        hasdarkest:false,

    },
    {
        id: "collected_highwayman", 
        //spritetype: "short", 
        minionName: "Collected Highwayman",
        hasdarkest:false,
        issmallthin:true


    },
    {
        id: "collected_man_at_arms", 
        //spritetype: "normal", 
        minionName: "Collected Man-at-Arms",
        hasdarkest:false,
        issmallthin:true


    },
    {
        id: "collected_vestal", 
        //spritetype: "normal", 
        minionName: "Collected Vestal",
        hasdarkest:false,
        issmallthin:true


    },   
    {
        id: "shambler_tentacle", 
        //spritetype: "normal", 
        minionName: "Shambler Tentacle",
        hasdarkest:true,

    },

    
]

function CreateBossMinionSharedContent(miniondata, container) {
    miniondata.forEach(minion => {

        //Sprite
        const minionSpriteContainer = document.createElement("div");
        minionSpriteContainer.className = "boss_minion_infobox nondisplay";
        minionSpriteContainer.id = `${minion.id}_sprite_container`;

        const minionSpriteImage = document.createElement("img");
        minionSpriteImage.src = `images/Boss_monsters/${minion.id}.webp`;
        minionSpriteImage.loading = "lazy";
        minionSpriteImage.classList = "boss_minion_sprite"
        if(minion.isthin) {
            minionSpriteImage.classList = "boss_minion_sprite thin_minion"
        }
        if(minion.issmallthin) {
            minionSpriteImage.classList = "boss_minion_sprite small_thin_minion"
        }

        //Name
        const bossMinionName = document.createElement("div");
        bossMinionName.className = "ddlogo_text boss_minion_name";
        bossMinionName.textContent = minion.minionName;

        minionSpriteContainer.appendChild(minionSpriteImage);
        minionSpriteContainer.appendChild(bossMinionName);

        container.appendChild(minionSpriteContainer);
    })
}
    CreateBossMinionSharedContent(MinionSharedData, MainBossBox)

        //Shared Stat Headers
        const minionSharedInfo = document.createElement("div");
        minionSharedInfo.className = "boss_minion_infobox_shared nondisplay";
        minionSharedInfo.id = `minion_shared_info`;

        const minionStatsContainer1 = document.createElement("div");
        minionStatsContainer1.className = "minion_stats boss_minion_stat_header_container1";
        minionStatsContainer1.innerHTML = "TYPE <br> <br> HP<br> SPEED ";
        
        const minionStatsContainer2 = document.createElement("div");
        minionStatsContainer2.className = "minion_stats boss_minion_stat_header_container2";
        minionStatsContainer2.innerHTML = "Size <br> Actions <br> DODGE <br> PROT";
        
        const minionResistContainer1 = document.createElement("div");
        minionResistContainer1.className = "minion_stats boss_minion_resist_header_container1";
        minionResistContainer1.innerHTML = "<span class='stun'> Stun </span> <br><span class='blight'> Blight </span> <br> <span class='move'> Move </span>";
        
        const minionResistContainer2 = document.createElement("div");
        minionResistContainer2.className = "minion_stats boss_minion_resist_header_container2";
        minionResistContainer2.innerHTML = "<span class='bleed'> Bleed </span> <br> <span class='debuff'> Debuff </span> <br> <span class='stealth'> Stealth </span>";
        
        minionSharedInfo.appendChild(minionStatsContainer1);
        minionSharedInfo.appendChild(minionStatsContainer2);
        minionSharedInfo.appendChild(minionResistContainer1);
        minionSharedInfo.appendChild(minionResistContainer2);

        MainBossBox.appendChild(minionSharedInfo)
               
const MinionStatData = [
    //Small Pew
    {
        id: "small_pew",

        app_stat1:["Carpentry", "", "25 / !30", "0",],        
        app_stat2:["1", "0", "0", "0%",], 
        app_resist1:["200%", "200%", "300%",],
        app_resist2:["200%", "200%", "Bypass X"],

        vet_stat1:["Carpentry", "", "38 / !46", "1",], 
        vet_stat2:["1", "0", "8.75", "0%",], 
        vet_resist1:["220%", "220%", "320%",],
        vet_resist2:["220%", "220%", "Bypass X"],

        champ_stat1:["Carpentry", "", "51 / !62", "2",], 
        champ_stat2:["1", "0", "22.5", "0%",], 
        champ_resist1:["240%", "240%", "340%",],
        champ_resist2:["240%", "240%", "Bypass X"],

        hasmoreminioninfo: true,
        hasdarkest:false,

    },

    //Medium Pew
    {
        id: "medium_pew",

        app_stat1:["Carpentry", "", "40 / !48", "0",],        
        app_stat2:["1", "0", "0", "0%",], 
        app_resist1:["200%", "200%", "300%",],
        app_resist2:["200%", "200%", "Bypass X"],

        vet_stat1:["Carpentry", "", "60 / !72", "1",], 
        vet_stat2:["1", "0", "8.75", "0%",], 
        vet_resist1:["220%", "220%", "320%",],
        vet_resist2:["220%", "220%", "Bypass X"],

        champ_stat1:["Carpentry", "", "82 / !99", "2",], 
        champ_stat2:["1", "0", "22.5", "0%",], 
        champ_resist1:["240%", "240%", "340%",],
        champ_resist2:["240%", "240%", "Bypass X"],

        hasmoreminioninfo: true,
        hasdarkest:false,

    },

    //Large Pew
    {
        id: "large_pew",

        app_stat1:["Carpentry", "", "55 / !66", "0",],        
        app_stat2:["1", "0", "0", "0%",], 
        app_resist1:["200%", "200%", "300%",],
        app_resist2:["200%", "200%", "Bypass X"],

        vet_stat1:["Carpentry", "", "83 / !100", "1",], 
        vet_stat2:["1", "0", "8.75", "0%",], 
        vet_resist1:["220%", "220%", "320%",],
        vet_resist2:["220%", "220%", "Bypass X"],

        champ_stat1:["Carpentry", "", "113 / !136", "2",], 
        champ_stat2:["1", "0", "22.5", "0%",], 
        champ_resist1:["240%", "240%", "340%",],
        champ_resist2:["240%", "240%", "Bypass X"],

        hasmoreminioninfo: true,
        hasdarkest:false,

    },

    //Cauldron(Empty)
    {
        id: "cauldron_empty",
        app_stat1:["Crockery", "", "100 / !120", "0",],        
        app_stat2:["2", "0", "0", "100%",], 
        app_resist1:["200%", "200%", "200%",],
        app_resist2:["200%", "200%", "Bypass X"],

        vet_stat1:["Crockery", "", "150 / !180", "1",], 
        vet_stat2:["2", "0", "10", "100%",], 
        vet_resist1:["220%", "220%", "220%",],
        vet_resist2:["220%", "220%", "Bypass X"],

        champ_stat1:["Crockery", "", "205 / !246", "2",], 
        champ_stat2:["2", "0", "20", "100%",], 
        champ_resist1:["240%", "240%", "240%",],
        champ_resist2:["240%", "240%", "Bypass X"],

        hasmoreminioninfo: true,
        hasdarkest:false,

    },

    //Cauldron(Full)
    {
        id: "cauldron_full",
        app_stat1:["Crockery", "", "14 / !17", "0",],        
        app_stat2:["2", "0", "0", "0%",], 
        app_resist1:["200%", "200%", "200%",],
        app_resist2:["200%", "200%", "Bypass X"],

        vet_stat1:["Crockery", "", "21 / !26", "1",], 
        vet_stat2:["2", "0", "8.75", "0%",], 
        vet_resist1:["220%", "220%", "220%",],
        vet_resist2:["220%", "220%", "Bypass X"],

        champ_stat1:["Crockery", "", "29 / !35", "2",], 
        champ_stat2:["2", "0", "22.5", "0%",], 
        champ_resist1:["240%", "240%", "240%",],
        champ_resist2:["240%", "240%", "Bypass X"],

        hasmoreminioninfo: true,
        hasdarkest:false,

        skills: ["Cauldron Passive"],

    },

    //Brigand Matchman
    {
        id: "brigand_matchman",
        app_stat1:["Human", "", "8 / !10", "-20",],        
        app_stat2:["1", "1", "12.5", "0%",], 
        app_resist1:["25%", "10%", "25%",],
        app_resist2:["10%", "15%", "Bypass X"],

        vet_stat1:["Human", "", "12 / !15", "-19",], 
        vet_stat2:["1", "1", "21.25", "0%",], 
        vet_resist1:["45%", "30%", "45%",],
        vet_resist2:["30%", "35%", "Bypass X"],

        champ_stat1:["Human", "", "16 / !20", "-18",], 
        champ_stat2:["1", "1", "35", "0%",], 
        champ_resist1:["65%", "50%", "65%",],
        champ_resist2:["50%", "55%", "Bypass X"],

        hasmoreminioninfo:false,
        hasdarkest:false,

        skills: ["Fire in the Hole!","Hot Shot"],

    },

    //Shrieker Nest
    {
        id: "shrieker's_nest",
        app_stat1:["Thatchery", "", "60 / !72", "0",],        
        app_stat2:["2", "0", "0", "100%",], 
        app_resist1:["200%", "200%", "20%",],
        app_resist2:["200%", "200%", "Bypass X"],

        vet_stat1:["Thatchery", "", "90 / !108", "0",], 
        vet_stat2:["2", "0", "0", "100%",], 
        vet_resist1:["220%", "220%", "40%",],
        vet_resist2:["220%", "220%", "Bypass X"],

        champ_stat1:["Thatchery", "", "123 / !148", "0",], 
        champ_stat2:["2", "0", "0", "100%",], 
        champ_resist1:["240%", "240%", "60%",],
        champ_resist2:["240%", "240%", "Bypass X"],

        hasmoreminioninfo: true,
        hasdarkest:false,

    },

    //Wilbur
    {
        id: "wilbur",
        app_stat1:["Beast", "", "17 / !21", "20",],        
        app_stat2:["1", "1", "15", "0%",], 
        app_resist1:["50%", "0%", "0%",],
        app_resist2:["0%", "0%", "Bypass X"],

        vet_stat1:["Beast", "", "26 / !32", "21",], 
        vet_stat2:["1", "2", "23.75", "0%",], 
        vet_resist1:["70%", "20%", "20%",],
        vet_resist2:["20%", "20%", "Bypass X"],

        champ_stat1:["Beast", "", "35 / !42", "22",], 
        champ_stat2:["1", "2", "37.5", "0%",], 
        champ_resist1:["90%", "40%", "40%",],
        champ_resist2:["40%", "40%", "Bypass X"],

        skills: ["Squeal", "End This One", "End These Two", "Bit'o Squeal"],
        hasmoreminioninfo: false,
        hasdarkest:false,

    },

    //Drowned Anchorman
    {
        id: "drowned_anchorman",
        app_stat1:["Unholy", "", "14 / !17", "0",],        
        app_stat2:["1", "1*", "0", "0%",], 
        app_resist1:["25%", "20%", "200%",],
        app_resist2:["60%", "20%", "Bypass X"],

        vet_stat1:["Unholy", "", "21 / !26", "1",], 
        vet_stat2:["1", "1*", "8.75", "0%",], 
        vet_resist1:["45%", "40%", "220%",],
        vet_resist2:["80%", "40%", "Bypass X"],

        champ_stat1:["Unholy", "", "29 / !35", "2",], 
        champ_stat2:["1", "1*", "22.5", "0%",], 
        champ_resist1:["65%", "60%", "240%",],
        champ_resist2:["100%", "60%", "Bypass X"],

        hasmoreminioninfo: false,
        hasdarkest:false,

        skills: ["Heave to!","Innate Self Buff","Chained Passive",],

    },

    //Collected Highwayman
    {
        id: "collected_highwayman",
        app_stat1:["Eldritch", "", "16 / !20", "3",],        
        app_stat2:["1", "1", "7.5", "0%",], 
        app_resist1:["25%", "40%", "10%",],
        app_resist2:["40%", "15%", "Bypass X"],

        vet_stat1:["Eldritch", "", "22 / !27", "4",], 
        vet_stat2:["1", "1", "16.25", "0%",], 
        vet_resist1:["45%", "60%", "30%",],
        vet_resist2:["60%", "35%", "Bypass X"],

        champ_stat1:["Eldritch", "", "31 / !38", "5",], 
        champ_stat2:["1", "1", "28.75", "0%",], 
        champ_resist1:["65%", "80%", "50%",],
        champ_resist2:["80%", "55%", "Bypass X"],

        hasmoreminioninfo: false,
        hasdarkest:false,

        skills: ["Headhunt"],

    },

        //Collected Man-at-Arms
    {
        id: "collected_man_at_arms",
        app_stat1:["Eldritch", "", "16 / !20", "3",],        
        app_stat2:["1", "1", "7.5", "0%",], 
        app_resist1:["25%", "40%", "10%",],
        app_resist2:["40%", "15%", "Bypass X"],

        vet_stat1:["Eldritch", "", "22 / !27", "4",], 
        vet_stat2:["1", "1", "16.25", "0%",], 
        vet_resist1:["45%", "60%", "30%",],
        vet_resist2:["60%", "35%", "Bypass X"],

        champ_stat1:["Eldritch", "", "31 / !38", "5",], 
        champ_stat2:["1", "1", "28.75", "0%",], 
        champ_resist1:["65%", "80%", "50%",],
        champ_resist2:["80%", "55%", "Bypass X"],

        hasmoreminioninfo: false,
        hasdarkest:false,

        skills: ["Head Games", "Head Knocker"],

    },

    //Collected Vestal
    {
        id: "collected_vestal",
        app_stat1:["Eldritch", "", "16 / !20", "3",],        
        app_stat2:["1", "1", "7.5", "0%",], 
        app_resist1:["25%", "40%", "10%",],
        app_resist2:["40%", "15%", "Bypass X"],

        vet_stat1:["Eldritch", "", "22 / !27", "4",], 
        vet_stat2:["1", "1", "16.25", "0%",], 
        vet_resist1:["45%", "60%", "30%",],
        vet_resist2:["60%", "35%", "Bypass X"],

        champ_stat1:["Eldritch", "", "31 / !38", "5",], 
        champ_stat2:["1", "1", "28.75", "0%",], 
        champ_resist1:["65%", "80%", "50%",],
        champ_resist2:["80%", "55%", "Bypass X"],

        hasmoreminioninfo: false,
        hasdarkest:false,

        skills: ["Headstrong", "Headache", "Head Rush"],

    },
   
    //Shambler Tentacle
    {
        id: "shambler_tentacle",
        app_stat1:["Eldritch", "", "9 / !11", "10",],        
        app_stat2:["1", "1", "17.5", "0%",], 
        app_resist1:["50%", "40%", "40%",],
        app_resist2:["40%", "40%", "Bypass X"],

        vet_stat1:["Eldritch", "", "12 / !15", "11",], 
        vet_stat2:["1", "1", "26.25", "0%",], 
        vet_resist1:["70%", "60%", "60%",],
        vet_resist2:["60%", "60%", "Bypass X"],

        champ_stat1:["Eldritch", "", "16 / !20", "12",], 
        champ_stat2:["1", "1", "40", "0%",], 
        champ_resist1:["90%", "80%", "80%",],
        champ_resist2:["80%", "80%", "Bypass X"],

        darkest_stat1:["Eldritch", "", "18 / !22", "13",], 
        darkest_stat2:["1", "1", "42.5", "0%",], 
        darkest_resist1:["95%", "85%", "85%",],
        darkest_resist2:["85%", "85%", "Bypass X"],


        skills: ["Clapperclaw",],
        hasmoreminioninfo: false,
        hasdarkest:true,

    },     
]

    function CreateBossMinionDiffContent(miniondata, container) {
        miniondata.forEach(minion => {
            
        // Main Difficulty Containers
        const minionAppContainer = document.createElement("div");
        minionAppContainer.className = "boss_minion_infobox_shared nondisplay";
        minionAppContainer.id = `${minion.id}_app_info`;

        const minionVetContainer = document.createElement("div");
        minionVetContainer.className = "boss_minion_infobox_shared nondisplay";
        minionVetContainer.id = `${minion.id}_vet_info`;
        
        const minionChampContainer = document.createElement("div");
        minionChampContainer.className = "boss_minion_infobox_shared nondisplay";
        minionChampContainer.id = `${minion.id}_champ_info`;

        const minionAppStats = document.createElement("div");
        minionAppStats.className = "minion_stat_container";
        minionAppStats.id = `${minion.id}_app_stats`;


        const minionVetStats = document.createElement("div");
        minionVetStats.className = "minion_stat_container";
        minionVetStats.id = `${minion.id}_vet_stats`;


        const minionChampStats = document.createElement("div");
        minionChampStats.className = "minion_stat_container";
        minionChampStats.id = `${minion.id}_champ_stats`;


        const minionAppResists = document.createElement("div");
        minionAppResists.className = "minion_resist_container";
        minionAppResists.id = `${minion.id}_app_resists`;


        const minionVetResists = document.createElement("div");
        minionVetResists.className = "minion_resist_container";
        minionVetResists.id = `${minion.id}_vet_resists`;


        const minionChampResists = document.createElement("div");
        minionChampResists.className = "minion_resist_container";
        minionChampResists.id = `${minion.id}_champ_resists`;


        // Statline1
        const createStatLine1 = (container, data) => {
            const statline1 = document.createElement("div");
            statline1.className = "minion_stats boss_minion_stat_number_container1";
       
            const updatedData = data.map(line => {
                return line.replace(/!\s*(\d+)/g, '<span class="negative">$1</span>');
            });
       
            statline1.innerHTML = updatedData.join("<br>");
       
            container.appendChild(statline1);
        };
       


        // Statline 2
        const createStatLine2 = (container, data) => {
            const statline2 = document.createElement("div");
            statline2.className = "minion_stats boss_minion_stat_number_container2";
            statline2.innerHTML = data.join("<br>");
            container.appendChild(statline2);
        };

        // Resistline 1
        const createResistLine1 = (container, data) => {
            const resistLine1 = document.createElement("div");
            resistLine1.className = "minion_stats boss_minion_resist_number_container1";
            resistLine1.innerHTML = data.join("<br>");
            container.appendChild(resistLine1);
        };

        // Resistline 2
        const createResistLine2 = (container, data) => {
            const resistLine2 = document.createElement("div");
            resistLine2.className = "minion_stats boss_minion_resist_number_container2";
            resistLine2.innerHTML = data.join("<br>");
            container.appendChild(resistLine2);
        };




        // Statline 1 & 2 (Stats)
        createStatLine1(minionAppStats, minion.app_stat1);
        createStatLine2(minionAppStats, minion.app_stat2);


        createStatLine1(minionVetStats, minion.vet_stat1);
        createStatLine2(minionVetStats, minion.vet_stat2);


        createStatLine1(minionChampStats, minion.champ_stat1);
        createStatLine2(minionChampStats, minion.champ_stat2);


        // Statline1 & 2 (Resistances)
        createResistLine1(minionAppResists, minion.app_resist1);
        createResistLine1(minionVetResists, minion.vet_resist1);
        createResistLine1(minionChampResists, minion.champ_resist1);


        createResistLine2(minionAppResists, minion.app_resist2);
        createResistLine2(minionVetResists, minion.vet_resist2);
        createResistLine2(minionChampResists, minion.champ_resist2);


     
        minionAppContainer.appendChild(minionAppStats);
        minionAppContainer.appendChild(minionAppResists);


        minionVetContainer.appendChild(minionVetStats);
        minionVetContainer.appendChild(minionVetResists);


        minionChampContainer.appendChild(minionChampStats);
        minionChampContainer.appendChild(minionChampResists);


           

        const createSkillsContainer = (difficulty) => {
            const skillsContainer = document.createElement("div");
            skillsContainer.className = "minion_stats boss_minion_skill_container";
            skillsContainer.id = `${minion.id}_${difficulty}_skills`;
        
            minion.skills.forEach(skill => {
                const skillText = skill.replace(/!/g, '').replace(/['\s]/g, '_').toLowerCase();
                      
                const skillElement = document.createElement("span");
                skillElement.textContent = skill;
                skillElement.id = `${skillText}_${difficulty}_lvl`;
                skillsContainer.appendChild(skillElement);
                skillsContainer.appendChild(document.createElement("br"));
            });
        
            return skillsContainer;
        };
        

        if (minion.skills){
        const appSkillsContainer = createSkillsContainer("app");
        const vetSkillsContainer = createSkillsContainer("vet");
        const champSkillsContainer = createSkillsContainer("champ");


        minionAppContainer.appendChild(appSkillsContainer);
        minionVetContainer.appendChild(vetSkillsContainer);
        minionChampContainer.appendChild(champSkillsContainer);
}
        if(minion.hasmoreminioninfo) {
            minionAppContainer.appendChild(createExtraMinionInfo("app"));
            minionVetContainer.appendChild(createExtraMinionInfo("vet"));
            minionChampContainer.appendChild(createExtraMinionInfo("champ"));
        }

        function createExtraMinionInfo(difficulty) {
            const MinionMoreInfo = document.createElement("img");
            MinionMoreInfo.src = "images/Hero_boxes/more_info_icon.png";
            MinionMoreInfo.loading = "lazy";
            MinionMoreInfo.className = "info minion_additional_info";
            MinionMoreInfo.id = `${minion.id}_minion_more_info_${difficulty}`
            return MinionMoreInfo; 
        };

        container.appendChild(minionAppContainer);
        container.appendChild(minionVetContainer);
        container.appendChild(minionChampContainer);




        if(minion.hasdarkest) {
            const minionDarkestContainer = document.createElement("div");
            minionDarkestContainer.className = "boss_minion_infobox_shared nondisplay";
            minionDarkestContainer.id = `${minion.id}_darkest_info`;


            const minionDarkestStats = document.createElement("div");
            minionDarkestStats.className = "minion_stat_container";
            minionDarkestStats.id = `${minion.id}_darkest_stats`;


            const minionDarkestResists = document.createElement("div");
            minionDarkestResists.className = "minion_resist_container";
            minionDarkestResists.id = `${minion.id}_darkest_resists`;


            createStatLine1(minionDarkestStats, minion.darkest_stat1);
            createStatLine2(minionDarkestStats, minion.darkest_stat2);
            createResistLine1(minionDarkestResists, minion.darkest_resist1);
            createResistLine2(minionDarkestResists, minion.darkest_resist2);


            minionDarkestContainer.appendChild(minionDarkestStats);
            minionDarkestContainer.appendChild(minionDarkestResists);




            const darkestSkillsContainer = createSkillsContainer("darkest");
            minionDarkestContainer.appendChild(darkestSkillsContainer);


            const MinionMoreInfo = document.createElement("img");
            MinionMoreInfo.src = "images/Hero_boxes/more_info_icon.png";
            MinionMoreInfo.loading = "lazy";
            MinionMoreInfo.className = "info minion_additional_info";
            MinionMoreInfo.id = `${minion.id}_minion_more_info`
            minionDarkestContainer.appendChild(MinionMoreInfo.cloneNode(true));
                
            const minionCloseBtn = document.createElement("img");
            minionCloseBtn.src = "images/Hero_boxes/panel_close.png"
            minionCloseBtn.loading = "lazy";
            minionCloseBtn.className = "minion_close"

            const darkestCloseBtn = minionCloseBtn.cloneNode(true);
            minionDarkestContainer.appendChild(darkestCloseBtn);
            container.appendChild(minionDarkestContainer);



        }


        const minionCloseBtn = document.createElement("img");
        minionCloseBtn.src = "images/Hero_boxes/panel_close.png"
        minionCloseBtn.loading = "lazy";
        minionCloseBtn.className = "minion_close"

        const appCloseBtn = minionCloseBtn.cloneNode(true);
        const vetCloseBtn = minionCloseBtn.cloneNode(true);
        const champCloseBtn = minionCloseBtn.cloneNode(true);

        // Append the close buttons to the containers
        minionAppContainer.appendChild(appCloseBtn);
        minionVetContainer.appendChild(vetCloseBtn);
        minionChampContainer.appendChild(champCloseBtn);

        // Append the containers to the provided parent container
        container.appendChild(minionAppContainer);
        container.appendChild(minionVetContainer);
        container.appendChild(minionChampContainer);

        })
    }
    CreateBossMinionDiffContent(MinionStatData, MainBossBox)

    const trophyData = [
        {
            id: "necromancer's_collar_desc",
            name: "Necromancer's Collar",
            rarity: "Trophy",
            description:"+20% DMG vs Unholy <br> +8% CRIT vs Unholy",
        },
        {
            id: "prophet's_eye_desc",
            name: "Prophet's Eye",
            rarity: "Trophy",
            description:"+15 ACC if in position 4 <br> +3 SPD if in position 4 <br> -15% Stress if in position 4",
        },
        {
            id: "hag's_ladle_desc",
            name: "Hag's Ladle",
            rarity: "Trophy",
            description:"+30% Blight Skill Chance <br> +40% Blight Resist <br> +40% Disease Resist",
        },
        {
            id: "fuseman's_matchstick_desc",
            name: "Fuseman's Matchstick",
            rarity: "Trophy",
            description:"+2 SPD <br> +10% DMG Ranged Skills <br> +6% CRIT Ranged Skills",
        },

        //Shrieker
        {
            id: "callous_talon_desc",
            name: "Callous Talon",
            rarity: "Shrieker",
            placement: "shrieker1",
            description:"+7% CRIT <br> +33% Disease Resist if Torch below 75 <br> +33% Bleed Skill Chance if Torch below 50 <br> +15% Stress",
        },
        {
            id: "distended_crowseye_desc",
            name: "Distended Crowseye",
            rarity: "Shrieker",
            placement: "shrieker2",
            description:"+10 ACC <br> +33% Disease Resist if Torch below 75 <br> +15% Scouting Chance if Torch below 50 <br> +15% Stress",
        },
        {
            id: "molted_tailfeather_desc",
            name: "Molted Tailfeather",
            rarity: "Shrieker",
            placement: "shrieker3",
            description:"+4 SPD <br> +33% Disease Resist if Torch below 75 <br> +33% Stun Resist if Torch below 50 <br> +15% Stress",
        },
        {
            id: "molted_wingfeather_desc",
            name: "Molted Wingfeather",
            rarity: "Shrieker",
            placement: "shrieker4",
            description:"+10 DODGE <br> +33% Disease Resist if Torch below 75 <br> +33% Move Resist if Torch below 50 <br> +15% Stress",
        },

        {
            id: "wilbur's_flag_desc",
            name: "Wilbur's Flag",
            rarity: "Trophy",
            description:"+50% Stun Resist <br> +10 DODGE",
        },
        {
            id: "flesh's_heart_desc",
            name: "Flesh's Heart",
            rarity: "Trophy",
            description:"+50% Bleed Resist <br> +15% MAX HP",
        },
        {
            id: "siren's_conch_desc",
            name: "Siren's Conch",
            rarity: "Trophy",
            description:"+50% Debuff Resist <br> -20% Stress",
        },
        {
            id: "crew's_bell_desc",
            name: "Crew's Bell",
            rarity: "Trophy",
            description:"+50% Move Resist <br> +20% Healing Received",
        },

        //Collector
        {
            id: "dismas'_head_desc",
            name: "Dismas' Head",
            rarity: "Very Rare",
            placement:"position2",
            description:"+25% DMG <br> -10% MAX HP <br> +20% Stress",
        },
        {
            id: "barristan's_head_desc",
            name: "Barristan's Head",
            rarity: "Very Rare",
            description:"+25% PROT <br> +20% Stress",
        },
        {
            id: "junia's_head_desc",
            name: "Junia's Head",
            rarity: "Very Rare",
            placement:"position4",
            description:"+30% Healing Skills <br> +20% Stress",
        },

        //Shambler
        {
            id: "ancestor's_map_desc",
            name: "Ancestor's Map",
            rarity: "Ancestral",
            placement:"position1",
            description:"+25% Trap Disarm Chance <br> +25% Scouting Chance <br> +10% Stress",
        },
        {
            id: "ancestor's_bottle_desc",
            name: "Ancestor's Bottle",
            rarity: "Ancestral",
            placement:"position2",
            description:"+25% MAX HP <br> +50% Food Consumed <br> +10% Stress",
        },
        {
            id: "ancestor's_candle_desc",
            name: "Ancestor's Candle",
            rarity: "Ancestral",
            description:"+15% DMG if Torch above 50 <br> +2 SPD if Torch above 50 <br> +5 DODGE if Torch above 50 <br> +10% Stress",
        },
        {
            id: "ancestor's_tentacle_idol_desc",
            name: "Ancestor's Tentacle Idol",
            rarity: "Ancestral",
            placement:"position4",
            description:"+20% Virtue Chance <br> +8% Death Blow Resist",
        },
        {
            id: "ancestor's_scroll_desc",
            name: "Ancestor's Scroll",
            rarity: "Ancestral",
            placement:"position5",
            description:"+25% Healing Skills <br> +25% Stress Skills <br> +10% Stress",
        },
    ]


    function replaceSpecificText(description) {
        description = description.replace(/Stress/g, '<span class="stress">Stress</span>');
        description = description.replace(/Virtue/g, '<span class="stress">Virtue</span>');
        description = description.replace(/Move/g, '<span class="move">Move</span>');
        description = description.replace(/Healing/g, '<span class="heal">Healing</span>');
        description = description.replace(/Heal/g, '<span class="heal">Heal</span>');
        description = description.replace(/Marked/g, '<span class="mark">Marked</span>');
        description = description.replace(/Torch/g, '<span class="highres">Torch</span>');
        description = description.replace(/Blight/g, '<span class="blight">Blight</span>');
        description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
        description = description.replace(/Stun/g, '<span class="stun">Stun</span>');
        description = description.replace(/Death Blow/g, '<span class="mark">Death Blow</span>');
        description = description.replace(/Ranged/g, '<span class="attack_type">Ranged</span>');
        description = description.replace(/Melee/g, '<span class="attack_type">Melee</span>');
        description = description.replace(/Disease/g, '<span class="disease">Disease</span>');
        description = description.replace(/Debuff/g, '<span class="debuff">Debuff</span>');
        description = description.replace(/Trap/g, '<span class="stealth">Trap</span>');
        description = description.replace(/Surprised/g, '<span class="scouting">Surprised</span>');
        description = description.replace(/Scouting/g, '<span class="scouting">Scouting</span>');
        description = description.replace(/Trophy/g, '<span class="trophy">Trophy</span>');
        description = description.replace(/Ancestral/g, '<span class="ancestral">Ancestral</span>');
        description = description.replace(/Shrieker/g, '<span class="ancestral">Shrieker</span>');
        description = description.replace(/Very Rare/g, '<span class="very_rare">Very Rare</span>');

        return description;
    }
    
    function generateTrinketDescription(trinket) {
        let rarity = trinket.rarity;
        rarity = replaceSpecificText(rarity);
    
        let description = trinket.description;
        description = replaceSpecificText(description);
    
        const trinketClasses = [];
    
        if (trinket.placement === "position1") {
            trinketClasses.push("bosstrinket1");
        }
        if (trinket.placement === "position2") {
            trinketClasses.push("bosstrinket2");
        }
        if (trinket.placement === "position4") {
            trinketClasses.push("bosstrinket4");
        }
        if (trinket.placement === "position5") {
            trinketClasses.push("bosstrinket5");
        }
        if (trinket.placement === "shrieker1") {
            trinketClasses.push("shrieker1");
        }
        if (trinket.placement === "shrieker2") {
            trinketClasses.push("shrieker2");
        }
        if (trinket.placement === "shrieker3") {
            trinketClasses.push("shrieker3");
        }
        if (trinket.placement === "shrieker4") {
            trinketClasses.push("shrieker4");
        }
    
        const trinketClass = trinketClasses.join(" "); 
    
        return `
            <div class="boss_trinket_desc ${trinketClass}" id="${trinket.id}">
                <span class="highres">${trinket.name}</span> <br>
                ${rarity} <br>
                ${description}
            </div>
        `;
    }
    
    
    
    
    trophyData.forEach((trinket) =>{
        const trinketHTML = generateTrinketDescription(trinket);
        MainBossBox.innerHTML += trinketHTML;
    })


    const bossSkillData = [
        //Necromancer
    
        {
            class: "boss_skill_desc_container",
            id: "app_the_flesh_is_willing_desc",
            position: "12cleaveally_1234enemy.png",
            name: "The Flesh Is Willing",
            type: "Melee",
            forward: 'Back 1',
            accuracy: 102.5,
            critRate: "CRIT : 6%",
            damage: "4-8",
            description:"Summon 1 Skeleton",
        },

        {
            class: "boss_skill_desc_container",
            id: "app_the_clawing_dead_desc",
            position: "34cleaveally_1234enemy.png",
            name: "The Clawing Dead",
            type: "Ranged",
            forward: 'Back 1',
            accuracy: 102.5,
            critRate: "CRIT : 6%",
            damage: "3-5",
            description:"Summon 1 Skeleton",
        },

        {
            class: "boss_skill_desc_container",
            id: "app_six_feet_under_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Six Feet Under",
            type: "Ranged",
            forward: 'Back 1',
            accuracy: 102.5,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Summon 1 Skeleton <br> Stress +15",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_the_flesh_is_willing_desc",
            position: "12cleaveally_1234enemy.png",
            name: "The Flesh Is Willing",
            type: "Melee",
            forward: 'Back 1',
            accuracy: 108.75,
            critRate: "CRIT : 12%",
            damage: "5-11",
            description:"Summon 1 Skeleton",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_the_clawing_dead_desc",
            position: "34cleaveally_1234enemy.png",
            name: "The Clawing Dead",
            type: "Ranged",
            forward: 'Back 1',
            accuracy: 108.75,
            critRate: "CRIT : 12%",
            damage: "4-7",
            description:"Summon 1 Skeleton",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_six_feet_under_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Six Feet Under",
            type: "Ranged",
            forward: 'Back 1',
            accuracy: 108.75,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Summon 1 Skeleton <br> Stress +15",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_the_flesh_is_willing_desc",
            position: "12cleaveally_1234enemy.png",
            name: "The Flesh Is Willing",
            type: "Melee",
            forward: 'Back 1',
            accuracy: 122.5,
            critRate: "CRIT : 14%",
            damage: "7-15",
            description:"Summon 1 Skeleton",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_the_clawing_dead_desc",
            position: "34cleaveally_1234enemy.png",
            name: "The Clawing Dead",
            type: "Ranged",
            forward: 'Back 1',
            accuracy: 122.5,
            critRate: "CRIT : 14%",
            damage: "5-10",
            description:"Summon 1 Skeleton",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_six_feet_under_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Six Feet Under",
            type: "Ranged",
            forward: 'Back 1',
            accuracy: 122.5,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Summon 1 Skeleton <br> Stress +15",
        },

        //Prophet
        {
            class: "boss_skill_desc_container",
            id: "app_prognosticate_desc",
            extrainfo:"Extra Target 1 (50% Chance)  ",
            position: "1234ally_1234enemy.png",
            name: "Prognosticate",
            type: "Ranged",
            accuracy: 202.5,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Free Action at Start of Round <br> Mark Target Ranks (Until 'Rubble of Ruin' is used)",
        },

        {
            class: "boss_skill_desc_container",
            id: "app_rubble_of_ruin_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Rubble of Ruin",
            type: "Ranged",
            accuracy: 82.5,
            critRate: "Cannot CRIT",
            damage: "11-23",
            description:"Free Action at End of Round <br> Targets the Branded Ranks",
        },

        {
            class: "boss_skill_desc_container",
            id: "app_eye_on_you_desc",
            extrainfo:"Extra Target 1 (50% Chance)",
            position: "1234ally_1234enemy.png",
            name: "Eye On You",
            type: "Ranged",
            accuracy: 92.5,
            critRate: "2%",
            damage: "1",
            description:"Stun (100% Base) <br> Stress +11",
        },

        {
            class: "boss_skill_desc_container",
            id: "app_fulminate_desc",
            position: "1234ally_1234enemy.png",
            name: "Fulminate",
            type: "Ranged",
            accuracy: 82.5,
            critRate: "6%",
            damage: "1",
            description:"Blight (100% Base) 1pt/rd for 2rds",
        },
        
        {
            class: "boss_skill_desc_container",
            id: "vet_prognosticate_desc",
            extrainfo:"Extra Target 1 (55% Chance)",
            position: "1234ally_1234enemy.png",
            name: "Prognosticate",
            type: "Ranged",
            accuracy: 208.75,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Free Action at Start of Round <br> Mark Target Ranks (Until 'Rubble of Ruin' is used)",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_rubble_of_ruin_desc",
            position: "1234ally_1234enemy.png",
            name: "Rubble of Ruin",
            type: "Ranged",
            accuracy: 88.75,
            critRate: "Cannot CRIT",
            damage: "15-31",
            description:"Free Action at End of Round <br> Targets the Branded Ranks",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_eye_on_you_desc",
            extrainfo:"Extra Target 1 (70% Chance)",
            position: "1234ally_1234enemy.png",
            name: "Eye On You",
            type: "Ranged",
            accuracy: 98.75,
            critRate: "6%",
            damage: "1-2",
            description:"Stun (120% Base) <br> Stress +11",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_fulminate_desc",
            position: "1234ally_1234enemy.png",
            name: "Fulminate",
            type: "Ranged",
            accuracy: 88.75,
            critRate: "12%",
            damage: "1-2",
            description:"Blight (120% Base) 2pts/rd for 2rds",
        },


        {
            class: "boss_skill_desc_container",
            id: "champ_prognosticate_desc",
            extrainfo:"Extra Target 1 (60% Chance)",
            position: "1234ally_1234enemy.png",
            name: "Prognosticate",
            type: "Ranged",
            accuracy: 222.5,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Free Action at Start of Round <br> Mark Target Ranks (Until 'Rubble of Ruin' is used)",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_rubble_of_ruin_desc",
            position: "1234ally_1234enemy.png",
            name: "Rubble of Ruin",
            type: "Ranged",
            accuracy: 102.5,
            critRate: "Cannot CRIT",
            damage: "21-42",
            description:"Free Action at End of Round <br> Targets the Branded Ranks",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_eye_on_you_desc",
            extrainfo:"Extra Target 1 (80% Chance)",
            position: "1234ally_1234enemy.png",
            name: "Eye On You",
            type: "Ranged",
            accuracy: 112.5,
            critRate: "9%",
            damage: "1-3",
            description:"Stun (140% Base) <br> Stress +11",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_fulminate_desc",
            position: "1234ally_1234enemy.png",
            name: "Fulminate",
            type: "Ranged",
            accuracy: 102.5,
            critRate: "14%",
            damage: "1-3",
            description:"Blight (140% Base) 3pts/rd for 2rds",
        },

        //Hag

        {
            class: "boss_skill_desc_container",
            id: "app_into_the_pot_desc",
            extrainfo:"Cannot be used if there is only 1 Hero Remaining",
            position: "1234ally_1234enemy.png",
            name: "Into The Pot!",
            type: "Ranged",
            accuracy: 102.5,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Traps Hero in Cauldron <br> Empty Cauldron changes into Full Cauldron <br> Heroes trapped inside the Cauldron suffer 8.75% HP DMG <br> Whenever the Hag or any Hero takes an action.",
        },
        {
            class: "boss_skill_desc_container",
            id: "vet_into_the_pot_desc",
            extrainfo:"Cannot be used if there is only 1 Hero Remaining",
            position: "1234ally_1234enemy.png",
            name: "Into The Pot!",
            type: "Ranged",
            accuracy: 108.75,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Traps Hero in Cauldron <br> Empty Cauldron changes into Full Cauldron <br> Heroes trapped inside the Cauldron suffer 8.75% HP DMG <br> Whenever the Hag or any Hero takes an action.",
        },
        {
            class: "boss_skill_desc_container",
            id: "champ_into_the_pot_desc",
            extrainfo:"Cannot be used if there is only 1 Hero Remaining",
            position: "1234ally_1234enemy.png",
            name: "Into The Pot!",
            type: "Ranged",
            accuracy: 122.5,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Traps Hero in Cauldron <br> Empty Cauldron changes into Full Cauldron <br> Heroes trapped inside the Cauldron suffer 8.75% HP DMG <br> Whenever the Hag or any Hero takes an action.",
        },
    

        {
            class: "boss_skill_desc_container",
            id: "app_meat_tenderizer_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Meat Tenderizer",
            type: "Melee",
            accuracy: 87.5,
            critRate: "6%",
            damage: "2-4",
        },

        {
            class: "boss_skill_desc_container",
            id: "app_season_to_perfection_desc",
            extrainfo:"Only Usable if there is a Hero Trapped in the Cauldron",
            position: "1234ally_1234enemy.png",
            name: "Season to Perfection",
            type: "Ranged",
            accuracy: 102.5,
            critRate: "Cannot CRIT",
            damage: "1",
            description:"Debuff Target: <br> -10 ACC (3 rds) (100% Base) <br> -25% DNG (3 rds) (100% Base) <br> Stress +10",
        },

        {
            class: "boss_skill_desc_container",
            id: "app_taste_the_stew_desc",
            extrainfo:"Only Usable if there is a Hero Trapped in the Cauldron",
            position: "1234ally_1234enemy.png",
            name: "Taste the Stew",
            type: "Ranged",
            accuracy: 102.5,
            critRate: "Cannot CRIT",
            damage: "1",
            description:"Target Hero: Stress +10 <br>  Self:  Heal 6",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_meat_tenderizer_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Meat Tenderizer",
            type: "Melee",
            accuracy: 93.75,
            critRate: "12%",
            damage: "3-5",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_season_to_perfection_desc",
            extrainfo:"Only Usable if there is a Hero Trapped in the Cauldron",
            position: "1234ally_1234enemy.png",
            name: "Season to Perfection",
            type: "Ranged",
            accuracy: 108.75,
            critRate: "Cannot CRIT",
            damage: "1-2",
            description:"Debuff Target: <br> -10 ACC (3 rds) (120% Base) <br> -25% DNG (3 rds) (120% Base) <br> Stress +10",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_taste_the_stew_desc",
            extrainfo:"Only Usable if there is a Hero Trapped in the Cauldron",
            position: "1234ally_1234enemy.png",
            name: "Taste the Stew",
            type: "Ranged",
            accuracy: 108.75,
            critRate: "Cannot CRIT",
            damage: "2",
            description:"Target Hero:  Stress +10 <br>  Self:  Heal 10",
        },


        {
            class: "boss_skill_desc_container",
            id: "champ_meat_tenderizer_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Meat Tenderizer",
            type: "Melee",
            accuracy: 107.5,
            critRate: "14%",
            damage: "4-7",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_season_to_perfection_desc",
            extrainfo:"Only Usable if there is a Hero Trapped in the Cauldron",
            position: "1234ally_1234enemy.png",
            name: "Season to Perfection",
            type: "Ranged",
            accuracy: 122.5,
            critRate: "Cannot CRIT",
            damage: "1-3",
            description:"Debuff Target: <br> -10 ACC (3 rds) (140% Base) <br> -25% DNG (3 rds) (140% Base) <br> Stress +10",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_taste_the_stew_desc",
            extrainfo:"Only Usable if there is a Hero Trapped in the Cauldron",
            position: "1234ally_1234enemy.png",
            name: "Taste the Stew",
            type: "Ranged",
            accuracy: 122.5,
            critRate: "Cannot CRIT",
            damage: "2",
            description:"Target Hero:  Stress +10 <br> Self: Heal 14",
        },

        //Brigand Pounder
        
        {
            class: "boss_skill_desc_container",
            id: "pounder_passive_desc",
            name: "Pounder Passive",
            type: "Buff",
            description:"25% Damage Resistance",
        },
        {
            class: "boss_skill_desc_container",
            id: "app_reinforcements_desc",
            position: "1234enemy.png",
            name: "Reinforcements!",
            type: "Support",
            description:"Free Action at Start of Round unless all enemy positions are occupied via non corpses <br> Summon Brigand Fuseman <br> Summon Brigands (55% Chance)",
        },

        {
            class: "boss_skill_desc_container",
            id: "app_booooooom_desc",
            extrainfo:"Has a 65% Chance to be Used by the Pounder if 'Fire in the Hole!' is used",
            position: "1234cleaveally_1234enemy.png",
            name: "BOOOOOOOM",
            type: "Ranged",
            accuracy: 82.5,
            critRate: "Cannot CRIT",
            damage: "9-27",
            description:"Stress +15",
        },

        {
            class: "boss_skill_desc_container",
            id: "app_misfire_desc",
            extrainfo:"Has a 35% Chance to be Used by the Pounder if 'Fire in the Hole!' is used",
            position: "1234cleaveally_1234enemy.png",
            name: "MISFIRE!",
            type: "Ranged",
            accuracy: 0,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Stress -10",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_reinforcements_desc",
            position: "1234enemy.png",
            name: "Reinforcements!",
            type: "Support",
            description:"Free Action at Start of Round unless all enemy positions are occupied via non corpses <br> Summon Brigand Fuseman <br> Summon Brigands (60% Chance)",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_booooooom_desc",
            extrainfo:"Has a 70% Chance to be Used by the Pounder if 'Fire in the Hole!' is used",
            position: "1234cleaveally_1234enemy.png",
            name: "BOOOOOOOM",
            type: "Ranged",
            accuracy: 88.75,
            critRate: "Cannot CRIT",
            damage: "12-37",
            description:"Stress +15",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_misfire_desc",
            extrainfo:"Has a 30% Chance to be Used by the Pounder if 'Fire in the Hole!' is used",
            position: "1234cleaveally_1234enemy.png",
            name: "MISFIRE!",
            type: "Ranged",
            accuracy: 0,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Stress -10",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_reinforcements_desc",
            position: "1234enemy.png",
            name: "Reinforcements!",
            type: "Support",
            description:"Free Action at Start of Round unless all enemy positions are occupied via non corpses <br> Summon Brigand Fuseman <br> Summon Brigands (65% Chance)",
        },

        {
            class: "boss_skill_desc_container",
            id: "chmap_booooooom_desc",
            extrainfo:"Has a 75% Chance to be Used by the Pounder if 'Fire in the Hole!' is used",
            position: "1234cleaveally_1234enemy.png",
            name: "BOOOOOOOM",
            type: "Ranged",
            accuracy: 102.5,
            critRate: "Cannot CRIT",
            damage: "17-50",
            description:"Stress +15",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_misfire_desc",
            extrainfo:"Has a 25% Chance to be Used by the Pounder if 'Fire in the Hole!' is used",
            position: "1234cleaveally_1234enemy.png",
            name: "MISFIRE!",
            type: "Ranged",
            accuracy: 0,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Stress -10",
        },

        //Shrieker

        {
            class: "boss_skill_desc_container",
            id: "app_peck_desc",
            position: "1234ally_1234enemy.png",
            name: "Peck",
            type: "Melee",
            forward: 'Forward 4',
            accuracy: 87.5,
            critRate: "CRIT : 16%",
            damage: "6-10",
            description:"Bleed (100% Base) 2pts/rd for 3 rds",
        },

        {
            class: "boss_skill_desc_container",
            id: "app_caw_desc",
            position: "1234ally_1234enemy.png",
            name: "Caw",
            type: "Ranged",
            accuracy: 87.5,
            critRate: "CRIT : 2%",
            damage: "1",
            description:"Stress + 20",
        },


        {
            class: "boss_skill_desc_container",
            id: "app_call_the_murder_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Call the Murder",
            type: "Ranged",
            forward: 'Back 4',
            accuracy: 87.5,
            critRate: "CRIT : 2%",
            damage: "1",
            description:"Stress +12 (70% Chance) <br> Buff Self: <br> +6 SPD (3 rds)",
        },


        {
            class: "boss_skill_desc_container",
            id: "app_regurgitate_desc",
            extrainfo:"Extra Target 1 (25% Chance)",
            position: "1234ally_1234enemy.png",
            name: "Regurgitate",
            type: "Ranged",
            accuracy: 87.5,
            critRate: "CRIT : 2%",
            damage: "1",
            description:"Debuff Target: <br> -15 ACC (3 rds) (100% Base) <br> Disease (Any) (15% Chance)",
        },


        {
            class: "boss_skill_desc_container",
            id: "app_shrieking_flight_desc",
            extrainfo:"Cannot be Riposted <br> Used at the end of Round 4",
            position: "1234cleaveally_1234enemy.png",
            name: "Shrieking Flight",
            type: "Ranged",
            accuracy: 135.5,
            critRate: "CRIT : 2%",
            damage: "1",
            description:"Escapes from Battle <br> Stress +40",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_peck_desc",
            position: "1234ally_1234enemy.png",
            name: "Peck",
            type: "Melee",
            forward: 'Forward 4',
            accuracy: 93.75,
            critRate: "CRIT : 22%",
            damage: "9-13",
            description:"Bleed (120% Base) 3pts/rd for 3 rds",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_caw_desc",
            position: "1234ally_1234enemy.png",
            name: "Caw",
            type: "Ranged",
            accuracy: 93.75,
            critRate: "CRIT : 6%",
            damage: "2",
            description:"Stress + 23",
        },


        {
            class: "boss_skill_desc_container",
            id: "vet_call_the_murder_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Call the Murder",
            type: "Ranged",
            forward: 'Back 4',
            accuracy: 93.75,
            critRate: "CRIT : 6%",
            damage: "2",
            description:"Stress +14 (70% Chance) <br> Buff Self: <br> +7 SPD (3 rds)",
        },


        {
            class: "boss_skill_desc_container",
            id: "vet_regurgitate_desc",
            extrainfo:"Extra Target 1 (33% Chance)",
            position: "1234ally_1234enemy.png",
            name: "Regurgitate",
            type: "Ranged",
            accuracy: 93.75,
            critRate: "CRIT : 6%",
            damage: "2",
            description:"Debuff Target: <br> -15 ACC (3 rds) (120% Base) <br> Disease (Any) (15% Chance)",
        },


        {
            class: "boss_skill_desc_container",
            id: "vet_shrieking_flight_desc",
            extrainfo:"Cannot be Riposted <br> Used at the end of Round 4",
            position: "1234cleaveally_1234enemy.png",
            name: "Shrieking Flight",
            type: "Ranged",
            accuracy: 141.75,
            critRate: "CRIT : 6%",
            damage: "2",
            description:"Escapes from Battle <br> Stress +45",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_peck_desc",
            position: "1234ally_1234enemy.png",
            name: "Peck",
            type: "Melee",
            forward: 'Forward 4',
            accuracy: 107.5,
            critRate: "CRIT : 24%",
            damage: "12-18",
            description:"Bleed (140% Base) 4pts/rd for 3 rds",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_caw_desc",
            position: "1234ally_1234enemy.png",
            name: "Caw",
            type: "Ranged",
            accuracy: 107.5,
            critRate: "CRIT : 9%",
            damage: "2",
            description:"Stress + 23",
        },


        {
            class: "boss_skill_desc_container",
            id: "champ_call_the_murder_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Call the Murder",
            type: "Ranged",
            forward: 'Back 4',
            accuracy: 107.5,
            critRate: "CRIT : 9%",
            damage: "2",
            description:"Stress +16 (70% Chance) <br> Buff Self: <br> +8 SPD (3 rds)",
        },


        {
            class: "boss_skill_desc_container",
            id: "champ_regurgitate_desc",
            extrainfo:"Extra Target 1 (40% Chance)",
            position: "1234ally_1234enemy.png",
            name: "Regurgitate",
            type: "Ranged",
            accuracy: 107.5,
            critRate: "CRIT : 9%",
            damage: "2",
            description:"Debuff Target: <br> -15 ACC (3 rds) (140% Base) <br> Disease (Any) (15% Chance)",
        },


        {
            class: "boss_skill_desc_container",
            id: "champ_shrieking_flight_desc",
            extrainfo:"Cannot be Riposted <br> Used at the end of Round 4",
            position: "1234cleaveally_1234enemy.png",
            name: "Shrieking Flight",
            type: "Ranged",
            accuracy: 155.5,
            critRate: "CRIT : 9%",
            damage: "2",
            description:"Escapes from Battle <br> Stress +50",
        },

        {
            class: "boss_skill_desc_container",
            id: "darkest_peck_desc",
            position: "1234ally_1234enemy.png",
            name: "Peck",
            type: "Melee",
            forward: 'Forward 4',
            accuracy: 110,
            critRate: "CRIT : 20%",
            damage: "12-18",
            description:"Bleed (140% Base) 4pts/rd for 3 rds",
        },

        {
            class: "boss_skill_desc_container",
            id: "darkest_caw_desc",
            position: "1234ally_1234enemy.png",
            name: "Caw",
            type: "Ranged",
            accuracy: 110,
            critRate: "CRIT : 6%",
            damage: "2",
            description:"Stress + 23",
        },


        {
            class: "boss_skill_desc_container",
            id: "darkest_call_the_murder_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Call the Murder",
            type: "Ranged",
            forward: 'Back 4',
            accuracy: 110,
            critRate: "CRIT : 6%",
            damage: "2",
            description:"Stress +16 (70% Chance) <br> Buff Self: <br> +8 SPD (3 rds)",
        },


        {
            class: "boss_skill_desc_container",
            id: "darkest_regurgitate_desc",
            extrainfo:"Extra Target 1 (40% Chance)",
            position: "1234ally_1234enemy.png",
            name: "Regurgitate",
            type: "Ranged",
            accuracy: 110,
            critRate: "CRIT : 6%",
            damage: "2",
            description:"Debuff Target: <br> -15 ACC (3 rds) (140% Base) <br> Disease (Any) (15% Chance)",
        },


        {
            class: "boss_skill_desc_container",
            id: "darkest_shrieking_flight_desc",
            extrainfo:"Cannot be Riposted <br> Used at the end of Round 4",
            position: "1234cleaveally_1234enemy.png",
            name: "Shrieking Flight",
            type: "Ranged",
            accuracy: 158,
            critRate: "CRIT : 6%",
            damage: "2",
            description:"Escapes from Battle <br> Stress +15",
        },

        //Swine Prince

        {
            class: "boss_skill_desc_container",
            id: "app_obliterate_body_desc",
            position: "1234ally_1234enemy.png",
            name: "Obliterate Body",
            type: "Melee",
            accuracy: 102.5,
            critRate: "CRIT : 12%",
            damage: "5-9",
            description:"+100% DMG vs Branded <br> Clears Mark on Hit if Target is Branded",
        },
        {
            class: "boss_skill_desc_container",
            id: "app_obliterate_masses_desc",
            position: "12cleaveally_1234enemy.png",
            name: "Obliterate Masses",
            type: "Melee",
            accuracy: 102.5,
            critRate: "CRIT : 12%",
            damage: "3-7",
            description:"+100% DMG vs Branded <br> Clears Mark on Hit if Target is Branded",
        },
        {
            class: "boss_skill_desc_container",
            id: "app_enraged_destruction_desc",
            extrainfo:"Used as a Free Action if Wilbur takes non Riposte Direct Damage or<br>As its only action every round if Wilbur is Dead",
            position: "1234cleaveally_1234enemy.png",
            name: "Enraged Destruction",
            type: "Melee",
            accuracy: 92.5,
            critRate: "CRIT : 6%",
            damage: "5-9",
            description:"Stun (100% Base)",
        },
        {
            class: "boss_skill_desc_container",
            id: "app_wild_flailing_desc",
            extrainfo:"Used if there are No Marked Targets",
            position: "1234ally_1234enemy.png",
            name: "Wild Flailing",
            type: "Melee",
            accuracy: 72.5,
            critRate: "CRIT : 12%",
            damage: "5-9",
        },

        {
            class: "boss_skill_desc_container",
            id: "vet_obliterate_body_desc",
            position: "1234ally_1234enemy.png",
            name: "Obliterate Body",
            type: "Melee",
            accuracy: 108.75,
            critRate: "CRIT : 16%",
            damage: "6-13",
            description:"+100% DMG vs Branded <br> Clears Mark on Hit if Target is Branded",
        },
        {
            class: "boss_skill_desc_container",
            id: "vet_obliterate_masses_desc",
            position: "12cleaveally_1234enemy.png",
            name: "Obliterate Masses",
            type: "Melee",
            accuracy: 108.75,
            critRate: "CRIT : 16%",
            damage: "5-9",
            description:"+100% DMG vs Branded <br> Clears Mark on Hit if Target is Branded",
        },
        {
            class: "boss_skill_desc_container",
            id: "vet_enraged_destruction_desc",
            extrainfo:"Used as a Free Action if Wilbur takes non Riposte Direct Damage or<br>As its only action every round if Wilbur is Dead",
            position: "1234cleaveally_1234enemy.png",
            name: "Enraged Destruction",
            type: "Melee",
            accuracy: 98.75,
            critRate: "CRIT : 12%",
            damage: "6-13",
            description:"Stun (120% Base)",
        },
        {
            class: "boss_skill_desc_container",
            id: "vet_wild_flailing_desc",
            extrainfo:"Used if there are No Marked Targets",
            position: "1234ally_1234enemy.png",
            name: "Wild Flailing",
            type: "Melee",
            accuracy: 78.75,
            critRate: "CRIT : 16%",
            damage: "6-13",
        },

        {
            class: "boss_skill_desc_container",
            id: "champ_obliterate_body_desc",
            position: "1234ally_1234enemy.png",
            name: "Obliterate Body",
            type: "Melee",
            accuracy: 122.5,
            critRate: "CRIT : 19%",
            damage: "9-17",
            description:"+100% DMG vs Branded <br> Clears Mark on Hit if Target is Branded",
        },
        {
            class: "boss_skill_desc_container",
            id: "champ_obliterate_masses_desc",
            position: "12cleaveally_1234enemy.png",
            name: "Obliterate Masses",
            type: "Melee",
            accuracy: 122.5,
            critRate: "CRIT : 19%",
            damage: "6-13",
            description:"+100% DMG vs Branded <br> Clears Mark on Hit if Target is Branded",
        },
        {
            class: "boss_skill_desc_container",
            id: "champ_enraged_destruction_desc",
            extrainfo:"Used as a Free Action if Wilbur takes non Riposte Direct Damage or<br>As its only action every round if Wilbur is Dead",
            position: "1234cleaveally_1234enemy.png",
            name: "Enraged Destruction",
            type: "Melee",
            accuracy: 112.5,
            critRate: "CRIT : 14%",
            damage: "9-17",
            description:"Stun (140% Base)",
        },
        {
            class: "boss_skill_desc_container",
            id: "champ_wild_flailing_desc",
            extrainfo:"Used if there are No Marked Targets",
            position: "1234ally_1234enemy.png",
            name: "Wild Flailing",
            type: "Melee",
            accuracy: 92.5,
            critRate: "CRIT : 19%",
            damage: "9-17",
        },

    //Flesh 

    {
        class: "boss_skill_desc_container",
        id: "app_maws_of_life_desc",
        extrainfo:"Used by Flesh Head",
        position: "12ally_12enemy.png",
        name: "Maws of Life",
        type: "Melee",
        accuracy: 92.5,
        critRate: "CRIT : 2%",
        damage: "6-12",
        description:"Bleed (100% Base) 2pts/rd for 3 rds",
    },

    {
        class: "boss_skill_desc_container",
        id: "app_bone_zephyr_desc",
        extrainfo:"Used by Flesh Bone",
        position: "1234ally_1234enemy.png",
        name: "Bone Zephyr",
        type: "Melee",
        accuracy: 82.5,
        critRate: "CRIT : 1%",
        damage: "2-4",
        description:"Stun (100% Base)",
    },
    
    {
        class: "boss_skill_desc_container",
        id: "app_sanguine_stroke_desc",
        extrainfo:"Used by Flesh Heart",
        position: "1234enemy.png",
        name: "Sanguine Stroke",
        type: "Support",
        description:"Heal 4-8",
    },

    {
        class: "boss_skill_desc_container",
        id: "app_undulating_invasion_desc",
        extrainfo:"Used by Flesh Butt",
        position: "34ally_34enemy.png",
        name: "Undulating Invasion",
        type: "Melee",
        accuracy: 92.5,
        critRate: "CRIT : 6%",
        damage: "5-9",
        description:"Blight (100% Base) 2pts/rd for 3 rds",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_maws_of_life_desc",
        extrainfo:"Used by Flesh Head <br> Extra Target 1 (10% Chance)",
        position: "12ally_12enemy.png",
        name: "Maws of Life",
        type: "Melee",
        accuracy: 98.75,
        critRate: "CRIT : 6%",
        damage: "8-16",
        description:"Bleed (120% Base) 3pts/rd for 3 rds",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_bone_zephyr_desc",
        extrainfo:"Used by Flesh Bone",
        position: "1234ally_1234enemy.png",
        name: "Bone Zephyr",
        type: "Melee",
        accuracy: 88.75,
        critRate: "CRIT : 1%",
        damage: "3-5",
        description:"Stun (110% Base)",
    },
    
    {
        class: "boss_skill_desc_container",
        id: "vet_sanguine_stroke_desc",
        extrainfo:"Used by Flesh Heart",
        position: "1234enemy.png",
        name: "Sanguine Stroke",
        type: "Support",
        description:"Heal 5-10",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_undulating_invasion_desc",
        extrainfo:"Used by Flesh Butt <br> Extra Target 1 (10% Chance)",
        position: "34ally_34enemy.png",
        name: "Undulating Invasion",
        type: "Melee",
        accuracy: 98.75,
        critRate: "CRIT : 12%",
        damage: "6-13",
        description:"Blight (120% Base) 3pts/rd for 3 rds",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_maws_of_life_desc",
        extrainfo:"Used by Flesh Head <br> Extra Target 1 (20% Chance)",
        position: "12ally_12enemy.png",
        name: "Maws of Life",
        type: "Melee",
        accuracy: 112.5,
        critRate: "CRIT : 9%",
        damage: "11-22",
        description:"Bleed (140% Base) 4pts/rd for 3 rds",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_bone_zephyr_desc",
        extrainfo:"Used by Flesh Bone",
        position: "1234ally_1234enemy.png",
        name: "Bone Zephyr",
        type: "Melee",
        accuracy: 102.5,
        critRate: "CRIT : 1%",
        damage: "4-7",
        description:"Stun (120% Base)",
    },
    
    {
        class: "boss_skill_desc_container",
        id: "champ_sanguine_stroke_desc",
        extrainfo:"Used by Flesh Heart",
        position: "1234enemy.png",
        name: "Sanguine Stroke",
        type: "Support",
        description:"Heal 6-12",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_undulating_invasion_desc",
        extrainfo:"Used by Flesh Butt <br> Extra Target 1 (20% Chance)",
        position: "34ally_34enemy.png",
        name: "Undulating Invasion",
        type: "Melee",
        accuracy: 112.5,
        critRate: "CRIT : 14%",
        damage: "9-17",
        description:"Blight (140% Base) 4pts/rd for 3 rds",
    },

    //Siren
    {
        class: "boss_skill_desc_container",
        id: "high_tide_desc",
        extrainfo:"2X Chance to be Used if Siren has failed to Charm a Hero",
        position: "1234enemy.png",
        name: "High Tide",
        type: "Support",
        description:"Summon Aquatic Monster <br> (Deep Stinger/Pelagic Grouper/Pelagic Guardian)",
    },

    {
        class: "boss_skill_desc_container",
        id: "app_song_of_desire_desc",
        extrainfo:"Cannot be used if 2 or less Heroes are present or if all Heroes are on Death's Door.<br> 25% Chance to be used as 2nd Action as well if No Heroes have been Charmed",
        position: "1234ally_1234enemy.png",
        name: "Song of Desire",
        type: "Ranged",
        accuracy: 102.5,
        critRate: "Cannot CRIT",
        damage: "0",
        description:"Take Control of Target (2 Rounds) (70% Chance) <br> Controlled Hero: Stress +10 (On their turn) <br> On Control Release at End of Round:  Return at Position 4",
    },


    {
        class: "boss_skill_desc_container",
        id: "app_pressure_crash_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Pressure Crash",
        type: "Ranged",
        accuracy: 82.5,
        critRate: "Cannot CRIT",
        damage: "1",
        description:"Stress +10",
    },

    {
        class: "boss_skill_desc_container",
        id: "app_devour_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Devour",
        type: "Ranged",
        accuracy: 82.5,
        critRate: "CRIT : 2%",
        damage: "1",
        description:"Bleed (100% Base) 1pt/rd for 3 rds",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_song_of_desire_desc",
        extrainfo:"Cannot be used if 2 or less Heroes are present or if all Heroes are on Death's Door.<br> 25% Chance to be used as 2nd Action as well if No Heroes have been Charmed",
        position: "1234ally_1234enemy.png",
        name: "Song of Desire",
        type: "Ranged",
        accuracy: 108.75,
        critRate: "Cannot CRIT",
        damage: "0",
        description:"Take Control of Target (2 Rounds) (70% Chance) <br> Controlled Hero: Stress +10 (On their turn) <br> On Control Release at End of Round:  Return at Position 4",
    },


    {
        class: "boss_skill_desc_container",
        id: "vet_pressure_crash_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Pressure Crash",
        type: "Ranged",
        accuracy: 88.75,
        critRate: "Cannot CRIT",
        damage: "1-2",
        description:"Stress +10",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_devour_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Devour",
        type: "Ranged",
        accuracy: 88.75,
        critRate: "CRIT : 6%",
        damage: "1-2",
        description:"Bleed (120% Base) 2pts/rd for 3 rds",
    },
    
    {
        class: "boss_skill_desc_container",
        id: "champ_song_of_desire_desc",
        extrainfo:"Cannot be used if 2 or less Heroes are present or if all Heroes are on Death's Door.<br> 25% Chance to be used as 2nd Action as well if No Heroes have been Charmed",
        position: "1234ally_1234enemy.png",
        name: "Song of Desire",
        type: "Ranged",
        accuracy: 122.5,
        critRate: "Cannot CRIT",
        damage: "0",
        description:"Take Control of Target (2 Rounds) (70% Chance) <br> Controlled Hero: Stress +10 (On their turn) <br> On Control Release at End of Round:  Return at Position 4",
    },


    {
        class: "boss_skill_desc_container",
        id: "champ_pressure_crash_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Pressure Crash",
        type: "Ranged",
        accuracy: 102.5,
        critRate: "Cannot CRIT",
        damage: "1-3",
        description:"Stress +10",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_devour_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Devour",
        type: "Ranged",
        accuracy: 102.5,
        critRate: "CRIT : 9%",
        damage: "1-3",
        description:"Bleed (140% Base) 3pts/rd for 3 rds",
    },

    //Drowned Crew

    {
        class: "boss_skill_desc_container",
        id: "app_all_hands_on_deck_desc",
        extrainfo:"Used as a Free Action at the Start of the Round",
        position: "234ally_1234enemy.png",
        name: "All Hands on Deck!",
        type: "Melee",
        accuracy: 102.5,
        critRate: "Cannot CRIT",
        damage: "0",
        description:"Summon 1 Drowned Anchorman <br> Pull 3 (100% Base)",
    },

    {
        class: "boss_skill_desc_container",
        id: "app_mutiny_desc",
        position: "234ally_1234enemy.png",
        name: "Mutiny",
        type: "Ranged",
        accuracy: 82.5,
        critRate: "Cannot CRIT",
        damage: "1",
        description:"Debuff Target: <br> -10% CRIT (3 rds) (100% Base) <br> -33% DNG (3 rds) (100% Base)",
    },

    {
        class: "boss_skill_desc_container",
        id: "app_drink_with_the_dead_desc",
        position: "234ally_1234enemy.png",
        name: "Drink with the Dead",
        type: "Ranged",
        accuracy: 82.5,
        critRate: "Cannot CRIT",
        damage: "1",
        description:"Stress +10",
    },

    {
        class: "boss_skill_desc_container",
        id: "app_boarding_clutch_desc",
        position: "1234ally_1234enemy.png",
        name: "Boarding Clutch",
        type: "Ranged",
        accuracy: 82.5,
        critRate: "CRIT : 2%",
        damage: "3-7",
        description:"Bleed (100% Base) 2pts/rd for 3 rds",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_all_hands_on_deck_desc",
        extrainfo:"Used as a Free Action at the Start of the Round",
        position: "234ally_1234enemy.png",
        name: "All Hands on Deck!",
        type: "Melee",
        accuracy: 108.75,
        critRate: "Cannot CRIT",
        damage: "0",
        description:"Summon 1 Drowned Anchorman <br> Pull 3 (120% Base)",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_mutiny_desc",
        position: "234ally_1234enemy.png",
        name: "Mutiny",
        type: "Ranged",
        accuracy: 88.75,
        critRate: "Cannot CRIT",
        damage: "1-2",
        description:"Debuff Target: <br> -10% CRIT (3 rds) (120% Base) <br> -33% DNG (3 rds) (120% Base)",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_drink_with_the_dead_desc",
        position: "234ally_1234enemy.png",
        name: "Drink with the Dead",
        type: "Ranged",
        accuracy: 88.75,
        critRate: "Cannot CRIT",
        damage: "1-2",
        description:"Stress +10",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_boarding_clutch_desc",
        position: "1234ally_1234enemy.png",
        name: "Boarding Clutch",
        type: "Ranged",
        accuracy: 88.75,
        critRate: "CRIT : 6%",
        damage: "5-9",
        description:"Bleed (120% Base) 3pts/rd for 3 rds",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_all_hands_on_deck_desc",
        extrainfo:"Used as a Free Action at the Start of the Round",
        position: "234ally_1234enemy.png",
        name: "All Hands on Deck!",
        type: "Melee",
        accuracy: 122.5,
        critRate: "Cannot CRIT",
        damage: "0",
        description:"Summon 1 Drowned Anchorman <br> Pull 3 (120% Base)",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_mutiny_desc",
        position: "234ally_1234enemy.png",
        name: "Mutiny",
        type: "Ranged",
        accuracy: 102.5,
        critRate: "Cannot CRIT",
        damage: "1-3",
        description:"Debuff Target: <br> -10% CRIT (3 rds) (140% Base) <br> -33% DNG (3 rds) (140% Base)",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_drink_with_the_dead_desc",
        position: "234ally_1234enemy.png",
        name: "Drink with the Dead",
        type: "Ranged",
        accuracy: 102.5,
        critRate: "Cannot CRIT",
        damage: "1-3",
        description:"Stress +10",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_boarding_clutch_desc",
        position: "1234ally_1234enemy.png",
        name: "Boarding Clutch",
        type: "Ranged",
        accuracy: 102.5,
        critRate: "CRIT : 9%",
        damage: "6-13",
        description:"Bleed (140% Base) 4pts/rd for 3 rds",
    },

    //Collector

    {
        class: "boss_skill_desc_container",
        id: "collect_call_desc",
        extrainfo:"3X Chance to be Used if 2 Collected Left <br> 9X Chance to be used if 1 Collected Left <br> Essentially Guarenteed if no Collected Highwaymen or no Collected are Left",
        position: "1234enemy.png",
        name: "Collect Call",
        type: "Support",
        description:"Summon 3 Collected (or until all ranks are full)",
    },

    {
        class: "boss_skill_desc_container",
        id: "app_show_collection_desc",
        position: "12cleaveally_1234enemy.png",
        name: "Show Collection",
        type: "Melee",
        accuracy: 92.5,
        critRate: "Cannot CRIT",
        damage: "1",
        description:"Stress +10 (80% Chance)",
    },

    {
        class: "boss_skill_desc_container",
        id: "app_life_steal_desc",
        position: "34ally_1234enemy.png",
        name: "Life Steal",
        type: "Ranged",
        accuracy: 82.5,
        critRate: "CRIT : 16%",
        damage: "3-7",
        description:"Bleed (100% Base) 2pts/rd for 3 rds <br> Mark Target (2 rds) <br> Self: Heal 10",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_show_collection_desc",
        position: "12cleaveally_1234enemy.png",
        name: "Show Collection",
        type: "Melee",
        accuracy: 98.75,
        critRate: "Cannot CRIT",
        damage: "1-2", 
        description:"Stress +10 (80% Chance)",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_life_steal_desc",
        position: "34ally_1234enemy.png",
        name: "Life Steal",
        type: "Ranged",
        accuracy: 88.75,
        critRate: "CRIT : 22%",
        damage: "5-9",
        description:"Bleed (110% Base) 2pts/rd for 3 rds <br> Mark Target (2 rds) <br> Self: Heal 14",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_show_collection_desc",
        position: "12cleaveally_1234enemy.png",
        name: "Show Collection",
        type: "Melee",
        accuracy: 112.5,
        critRate: "Cannot CRIT",
        damage: "1-3",
        description:"Stress +10 (80% Chance)",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_life_steal_desc",
        position: "34ally_1234enemy.png",
        name: "Life Steal",
        type: "Ranged",
        accuracy: 102.5,
        critRate: "CRIT : 24%",
        damage: "6-13",
        description:"Bleed (120% Base) 3pts/rd for 3 rds <br> Mark Target (2 rds) <br> Self: Heal 18",
    },

    //Shambler

    {
        class: "boss_skill_desc_container",
        id: "app_obdurous_advancement_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Obdurous Advancement",
        type: "Melee",
        forward: 'Forward 1',
        accuracy: 82.5,
        critRate: "CRIT : 2%",
        damage: "1",
        description:"Bleed (100% Base) 2pts/rd for 3 rds <br> Summon 2 Shambler Tentacles or until All Ranks are Occupied.",
    },

    {
        class: "boss_skill_desc_container",
        id: "app_undulating_withdrawal_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Undulating Withdrawal",
        type: "Ranged",
        forward: 'Back 1',
        accuracy: 82.5,
        critRate: "CRIT : 2%",
        damage: "1",
        description:"Blight (100% Base) 2pts/rd for 3 rds <br> Summon 2 Shambler Tentacles or until All Ranks are Occupied.",
    },

    {
        class: "boss_skill_desc_container",
        id: "app_stentorious_lament_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Stentorious Lament",
        type: "Ranged",
        accuracy: 82.5,
        critRate: "CRIT : 2%",
        damage: "1", 
        description:"Stress +10 <br> Shuffle Party (80% Base)",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_obdurous_advancement_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Obdurous Advancement",
        type: "Melee",
        forward: 'Forward 1',
        accuracy: 88.75,
        critRate: "CRIT : 6%",
        damage: "1-2", 
        description:"Bleed (120% Base) 3pts/rd for 3 rds <br> Summon 2 Shambler Tentacles or until All Ranks are Occupied.",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_undulating_withdrawal_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Undulating Withdrawal",
        type: "Ranged",
        forward: 'Back 1',
        accuracy: 88.75,
        critRate: "CRIT : 6%",
        damage: "1-2", 
        description:"Blight (120% Base) 3pts/rd for 3 rds <br> Summon 2 Shambler Tentacles or until All Ranks are Occupied.",
    },

    {
        class: "boss_skill_desc_container",
        id: "vet_stentorious_lament_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Stentorious Lament",
        type: "Ranged",
        accuracy: 92.5,
        critRate: "CRIT : 6%",
        damage: "1-2", 
        description:"Stress +10 <br> Shuffle Party (90% Base)",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_obdurous_advancement_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Obdurous Advancement",
        type: "Melee",
        forward: 'Forward 1',
        accuracy: 102.5,
        critRate: "CRIT : 9%",
        damage: "1-3", 
        description:"Bleed (140% Base) 4pts/rd for 3 rds <br> Summon 2 Shambler Tentacles or until All Ranks are Occupied.",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_undulating_withdrawal_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Undulating Withdrawal",
        type: "Ranged",
        forward: 'Back 1',
        accuracy: 102.5,
        critRate: "CRIT : 9%",
        damage: "1-3", 
        description:"Blight (140% Base) 4pts/rd for 3 rds <br> Summon 2 Shambler Tentacles or until All Ranks are Occupied.",
    },

    {
        class: "boss_skill_desc_container",
        id: "champ_stentorious_lament_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Stentorious Lament",
        type: "Ranged",
        accuracy: 100,
        critRate: "CRIT : 9%",
        damage: "1-3", 
        description:"Stress +10 <br> Shuffle Party (100% Base)",
    },

    {
        class: "boss_skill_desc_container",
        id: "darkest_obdurous_advancement_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Obdurous Advancement",
        type: "Melee",
        forward: 'Forward 1',
        accuracy: 115,
        critRate: "CRIT : 14%",
        damage: "2-3", 
        description:"Bleed (150% Base) 5pts/rd for 3 rds <br> Summon 2 Shambler Tentacles or until All Ranks are Occupied.",
    },

    {
        class: "boss_skill_desc_container",
        id: "darkest_undulating_withdrawal_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Undulating Withdrawal",
        type: "Ranged",
        forward: 'Back 1',
        accuracy: 115,
        critRate: "CRIT : 14%",
        damage: "2-3", 
        description:"Blight (150% Base) 5pts/rd for 3 rds <br> Summon 2 Shambler Tentacles or until All Ranks are Occupied.",
    },

    {
        class: "boss_skill_desc_container",
        id: "darkest_stentorious_lament_desc",
        position: "1234cleaveally_1234enemy.png",
        name: "Stentorious Lament",
        type: "Ranged",
        accuracy: 112.5,
        critRate: "CRIT : 14%",
        damage: "2-3", 
        description:"Stress +10 <br> Shuffle Party (110% Base)",
    },

    
    //Minions

        //Full Cauldron

        {
            class: "boss_skill_desc_container minion_skill_desc",
            id: "cauldron_passive_desc",
            name: "Cauldron Passive",
            description:"The Hero inside The Cauldron takes 8.75% HP Dmg <br> after any action taken by your Heroes or The Hag <br> Once the Trapped Hero hits Death's Door,or the Cauldron hits 0 HP <br> the Hero is released at position 1",
        },

        //Matchman

        {
            class: "boss_skill_desc_container minion_skill_desc",
            id: "app_fire_in_the_hole_desc",
            position: "1234enemy.png",
            name: "Fire In the Hole",
            type: "Support",
            description:"Lets the Pounder use 'BOOOOOOOM!'(65% Chance) or 'MISFIRE!'(35% Chance)",
        },

        {
            extrainfo:"Has an Extremely Low Chance (1/1000) to be Used",
            class: "boss_skill_desc_container minion_skill_desc",
            id: "app_hot_shot_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Hot Shot",
            type: "Melee",
            accuracy: 77.5,
            critRate: "CRIT : 2%",
            damage: "1",
        },

        {
            class: "boss_skill_desc_container minion_skill_desc",
            id: "vet_fire_in_the_hole_desc",
            position: "1234enemy.png",
            name: "Fire In the Hole",
            type: "Support",
            description:"Lets the Pounder use 'BOOOOOOOM!'(70% Chance) or 'MISFIRE!'(30% Chance)",
        },

        {
            extrainfo:"Has an Extremely Low Chance (1/1000) to be Used",
            class: "boss_skill_desc_container minion_skill_desc",
            id: "vet_hot_shot_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Hot Shot",
            type: "Melee",
            accuracy: 83.75,
            critRate: "CRIT : 2%",
            damage: "1-2",
        },


        {
            class: "boss_skill_desc_container minion_skill_desc",
            id: "champ_fire_in_the_hole_desc",
            position: "1234enemy.png",
            name: "Fire In the Hole",
            type: "Support",
            description:"Lets the Pounder use 'BOOOOOOOM!'(75% Chance) or 'MISFIRE!'(25% Chance)",
        },

        {
            extrainfo:"Has an Extremely Low Chance (1/1000) to be Used",
            class: "boss_skill_desc_container minion_skill_desc",
            id: "champ_hot_shot_desc",
            position: "1234cleaveally_1234enemy.png",
            name: "Hot Shot",
            type: "Melee",
            accuracy: 97.5,
            critRate: "CRIT : 2%",
            damage: "1-3",
        },

        //Wilbur

        { 
            id: "app_squeal_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234cleaveally_1enemy.png",
            name: "Squeal",
            type: "Ranged",
            forward: 'Back 3',
            accuracy: 102.5,
            critRate: "CRIT: 1%",
            damage: "1",
            description: "Stun (100% Base)"
        },

        { 
            id: "app_end_this_one_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_234enemy.png",
            name: "End This One",
            type: "Ranged",
            accuracy: 102.5,
            critRate: "Cannot CRIT",
            damage: "1",
            description: "Mark Target (2 rds)"
        },

        { 
            id: "app_end_these_two_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "12cleaveally_234enemy.png",
            name: "End These Two",
            type: "Ranged",
            accuracy: 102.5,
            critRate: "Cannot CRIT",
            damage: "1",
            description: "Mark Target (2 rds)"
        },

        { 
            id: "app_bit_o_squeal_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            extrainfo:"Only Used from Veteran Difficulty <br> Always used as Wilbur's First Action of the Round",
            position: "1234ally_1234enemy.png",
            name: "Bit'o Squeal",
            type: "Ranged",
            accuracy: 102.5,
            critRate: "CRIT: 2%",
            damage: "1",
            description: "Stun (100% Base)"
        },
        
        { 
            id: "vet_squeal_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234cleaveally_1enemy.png",
            name: "Squeal",
            type: "Ranged",
            forward: 'Back 3',
            accuracy: 108.75,
            critRate: "CRIT: 1%",
            damage: "2",
            description: "Stun (120% Base)"
        },

        { 
            id: "vet_end_this_one_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_234enemy.png",
            name: "End This One",
            type: "Ranged",
            accuracy: 108.75,
            critRate: "Cannot CRIT",
            damage: "2",
            description: "Mark Target (2 rds)"
        },

        { 
            id: "vet_end_these_two_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "12cleaveally_234enemy.png",
            name: "End These Two",
            type: "Ranged",
            accuracy: 108.75,
            critRate: "Cannot CRIT",
            damage: "2",
            description: "Mark Target (2 rds)"
        },

        { 
            id: "vet_bit_o_squeal_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            extrainfo:"Only Used from Veteran Difficulty <br> Always used as Wilbur's First Action of the Round",
            position: "1234ally_1234enemy.png",
            name: "Bit'o Squeal",
            type: "Ranged",
            accuracy: 108.75,
            critRate: "CRIT: 6%",
            damage: "2",
            description: "Stun (120% Base)"
        },
        
        { 
            id: "champ_squeal_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234cleaveally_1enemy.png",
            name: "Squeal",
            type: "Ranged",
            forward: 'Back 3',
            accuracy: 122.5,
            critRate: "CRIT: 1%",
            damage: "2",
            description: "Stun (140% Base)"
        },

        { 
            id: "champ_end_this_one_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_234enemy.png",
            name: "End This One",
            type: "Ranged",
            accuracy: 122.5,
            critRate: "Cannot CRIT",
            damage: "2",
            description: "Mark Target (2 rds)"
        },

        { 
            id: "champ_end_these_two_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "12cleaveally_234enemy.png",
            name: "End These Two",
            type: "Ranged",
            accuracy: 122.5,
            critRate: "Cannot CRIT",
            damage: "2",
            description: "Mark Target (2 rds)"
        },

        { 
            id: "champ_bit_o_squeal_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            extrainfo:"Extra Target 1 (28% Chance)<br> Only Used from Veteran Difficulty <br> Always used as Wilbur's First Action of the Round",
            position: "1234ally_1234enemy.png",
            name: "Bit'o Squeal",
            type: "Ranged",
            accuracy: 122.5,
            critRate: "CRIT: 9%",
            damage: "2",
            description: "Stun (140% Base)"
        },
        

        //Anchorman
        {
            class: "boss_skill_desc_container minion_skill_desc",
            id: "innate_self_buff_desc",
            name: "Innate Self-Buff",
            description:"+50% PROT <br> +25% Stun Resist <br> +50% Bleed Resist <br> +50% Blight Resist",
        },

        {
            class: "boss_skill_desc_container minion_skill_desc",
            id: "app_heave_to_desc",
            extrainfo:"Fails if used vs <span class = 'stress'>Virtued</span> Heroes",
            position: "1ally_1enemy.png",
            name: "Heave To!",
            type: "Melee",
            accuracy: 102.5,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Transfers Self Buff to Drowned Crew <br> Buff lasts until the Chained Hero is Unchained if <br> Chained Hero hits 100 or 200 Stress or the Anchorman is dead <br> Heal Self to Full",
        },

        {
            class: "boss_skill_desc_container minion_skill_desc",
            id: "app_chained_passive_desc",
            name: "Chained Passive",
            description:"After any Action taken by Heroes or Crew: <br> +6 Stress to Chained Hero <br> Heal Drowned Crew for 2.5% of Max HP",
        },

        {
            class: "boss_skill_desc_container minion_skill_desc",
            id: "vet_heave_to_desc",
            extrainfo:"Fails if used vs <span class = 'stress'>Virtued</span> Heroes",
            position: "1ally_1enemy.png",
            name: "Heave To!",
            type: "Melee",
            accuracy: 108.75,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Transfers Self Buff to Drowned Crew <br> Buff lasts until the Chained Hero is Unchained if <br> Chained Hero hits 100 or 200 Stress or the Anchorman is dead <br> Heal Self to Full",
        },

        {
            class: "boss_skill_desc_container minion_skill_desc",
            id: "vet_chained_passive_desc",
            name: "Chained Passive",
            description:"After any Action taken by Heroes or Crew: <br> +6 Stress to Chained Hero <br> Heal Drowned Crew for 3% of Max HP",
        },


        {
            class: "boss_skill_desc_container minion_skill_desc",
            id: "champ_heave_to_desc",
            extrainfo:"Fails if used vs <span class = 'stress'>Virtued</span> Heroes",
            position: "1ally_1enemy.png",
            name: "Heave To!",
            type: "Melee",
            accuracy: 122.5,
            critRate: "Cannot CRIT",
            damage: "0",
            description:"Transfers Self Buff to Drowned Crew <br> Buff lasts until the Chained Hero is Unchained if <br> Chained Hero hits 100 or 200 Stress or the Anchorman is dead <br> Heal Self to Full",
        },

        {
            class: "boss_skill_desc_container minion_skill_desc",
            id: "champ_chained_passive_desc",
            name: "Chained Passive",
            description:"After any Action taken by Heroes or Crew: <br> +6 Stress to Chained Hero <br> Heal Drowned Crew for 3.5% of Max HP",
        },

        //Collected HWM
        { 
            id: "app_headhunt_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            extrainfo:"3X chance to be used vs Marked Heroes",
            position: "1234ally_1234enemy.png",
            name: "Headhunt",
            type: "Melee",
            accuracy: 87.5,
            critRate: "CRIT: 12%",
            damage: "5-11",
            description: "Bleed (100% Base) 2 pts/rd for 3 rds"
        },
        { 
            id: "vet_headhunt_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            extrainfo:"3X chance to be used vs Marked Heroes",
            position: "1234ally_1234enemy.png",
            name: "Headhunt",
            type: "Melee",
            accuracy: 93.75,
            critRate: "CRIT: 16%",
            damage: "7-15",
            description: "Bleed (120% Base) 3 pts/rd for 3 rds"
        },
        { 
            id: "champ_headhunt_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            extrainfo:"3X chance to be used vs Marked Heroes",
            position: "1234ally_1234enemy.png",
            name: "Headhunt",
            type: "Melee",
            accuracy: 107.5,
            critRate: "CRIT: 19%",
            damage: "10-20",
            description: "Bleed (140% Base) 4 pts/rd for 3 rds"
        },

        //Collected MAA

        { 
            id: "head_games_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            extrainfo:"Only usable if there is another Collected apart from itself<br> Is very likely to be used on the Collector or a Collected Highwayman",
            position: "1234enemy.png",
            name: "Head Games",
            type: "Support",
            description: "Guard Ally (2 rds) <br> Buff Self:<br> +25% PROT (3 rds)"
        },

        { 
            id: "app_head_knocker_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_1234enemy.png",
            name: "Head Knocker",
            type: "Melee",
            accuracy: 92.5,
            critRate: "CRIT: 2%",
            damage: "3-7",
            description: "Stun (100% Base)"
        },

        { 
            id: "vet_head_knocker_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_1234enemy.png",
            name: "Head Knocker",
            type: "Melee",
            accuracy: 98.75,
            critRate: "CRIT: 6%",
            damage: "5-9",
            description: "Stun (110% Base)"
        },

        { 
            id: "champ_head_knocker_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_1234enemy.png",
            name: "Head Knocker",
            type: "Melee",
            accuracy: 112.5,
            critRate: "CRIT: 9%",
            damage: "6-13",
            description: "Stun (120% Base)"
        },

        //Collected Vestal
        { 
            id: "headache_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            extrainfo:"4X chance to be used on Collected Highwaymen",
            position: "1234enemy.png",
            name: "Headache",
            type: "Support",
            description: "Buff Target:<br> +10 ACC (3 rds) <br> +10% CRIT (3 rds) <br> +50% DMG (3 rds)"
        },

        { 
            id: "app_headstrong_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            extrainfo:"5X chance to be used on the Collector",
            position: "1234enemy.png",
            name: "Headstrong",
            type: "Support",
            description: "Target: <br> Heal 6-12"
        },

        { 
            id: "app_head_rush_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_1234enemy.png",
            name: "Head Rush",
            type: "Ranged",
            accuracy: 97.5,
            critRate: "CRIT: 2%",
            damage: "2-4",
            description: "Stress +10"
        },

        { 
            id: "vet_headstrong_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            extrainfo:"5X chance to be used on the Collector",
            position: "1234enemy.png",
            name: "Headstrong",
            type: "Support",
            description: "Target: <br> Heal 8-14"
        },

        { 
            id: "vet_head_rush_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_1234enemy.png",
            name: "Head Rush",
            type: "Ranged",
            accuracy: 103.75,
            critRate: "CRIT: 6%",
            damage: "3-5",
            description: "Stress +10"
        },


        { 
            id: "champ_headstrong_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            extrainfo:"5X chance to be used on the Collector",
            position: "1234enemy.png",
            name: "Headstrong",
            type: "Support",
            description: "Target: <br> Heal 10-18"
        },

        { 
            id: "champ_head_rush_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_1234enemy.png",
            name: "Head Rush",
            type: "Ranged",
            accuracy: 117.5,
            critRate: "CRIT: 9%",
            damage: "4-7",
            description: "Stress +10"
        },

        //Shambler Tentacle

        { 
            id: "app_clapperclaw_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_1234enemy.png",
            name: "Clapperclaw",
            type: "Melee",
            accuracy: 82.5,
            critRate: "CRIT: 2%",
            damage: "2-4",
            description: "Stress +10 <br> Buff Self: <br> +20 ACC, +5% CRIT (3 rds)<br> +50% DMG, +25% PROT (3 rds)"
        },

        { 
            id: "vet_clapperclaw_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_1234enemy.png",
            name: "Clapperclaw",
            type: "Melee",
            accuracy: 88.75,
            critRate: "CRIT: 6%",
            damage: "3-5",
            description: "Stress +10 <br> Buff Self: <br> +20 ACC, +5% CRIT (3 rds)<br> +50% DMG, +25% PROT (3 rds)"
        },


        { 
            id: "champ_clapperclaw_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_1234enemy.png",
            name: "Clapperclaw",
            type: "Melee",
            accuracy: 102.5,
            critRate: "CRIT: 9%",
            damage: "4-7",
            description: "Stress +10 <br> Buff Self: <br> +20 ACC, +5% CRIT (3 rds)<br> +50% DMG, +25% PROT (3 rds)"
        },


        { 
            id: "darkest_clapperclaw_desc",
            class: "boss_skill_desc_container minion_skill_desc",
            position: "1234ally_1234enemy.png",
            name: "Clapperclaw",
            type: "Melee",
            accuracy: 115,
            critRate: "CRIT: 14%",
            damage: "5-9",
            description: "Stress +10 <br> Buff Self: <br> +20 ACC, +5% CRIT (3 rds)<br> +50% DMG, +25% PROT (3 rds)"
        },



    ]
    


    function replaceSpecificWords(description) {
        description = description.replace(/Stress/g, '<span class="stress">Stress</span>');
        description = description.replace(/Move/g, '<span class="move">Move</span>');
        description = description.replace(/Horror/g, '<span class="stress">Horror</span>');   
        description = description.replace(/Healing/g, '<span class="heal">Healing</span>');
        description = description.replace(/Heal/g, '<span class="heal">Heal</span>');
        description = description.replace(/Marks/g, '<span class="mark">Marks</span>');   
        description = description.replace(/Mark/g, '<span class="mark">Mark</span>');   
        description = description.replace(/Branded/g, '<span class="mark">Marked</span>');
        description = description.replace(/Torch/g, '<span class="highres">Torch</span>');
        description = description.replace(/Summon/g, '<span class="stealth">Summon</span>');
        description = description.replace(/Blight/g, '<span class="blight">Blight</span>');
        description = description.replace(/Bleed/g, '<span class="bleed">Bleed</span>');
        description = description.replace(/Stun/g, '<span class="stun">Stun</span>');
        description = description.replace(/Knockback/g, '<span class="move">Knockback</span>');
        description = description.replace(/Shuffle/g, '<span class="move">Shuffle</span>');
        description = description.replace(/Pull/g, '<span class="move">Pull</span>');
        description = description.replace(/Death Blow/g, '<span class="mark">Death Blow</span>');
        description = description.replace(/Ranged/g, '<span class="attack_type">Ranged</span>');
        description = description.replace(/Free Action/g, '<span class="attack_type">Free Action</span>');
        description = description.replace(/Auto Action/g, '<span class="attack_type">Auto Action</span>');
        description = description.replace(/Support/g, '<span class="buff">Support</span>');
        description = description.replace(/Melee/g, '<span class="attack_type">Melee</span>');
        description = description.replace(/Disease/g, '<span class="disease">Disease</span>');
        description = description.replace(/Debuff Target:/g, '<span class="debuff">Debuff Target:</span>');
        description = description.replace(/Debuff Self:/g, '<span class="debuff">Debuff Self:</span>');
        description = description.replace(/Hinderance/g, '<span class="debuff">Debuff</span>');
        description = description.replace(/Buff Self:/g, '<span class="buff">Buff Self:</span>');
        description = description.replace(/Buff Target:/g, '<span class="buff">Buff Target:</span>');
        description = description.replace(/Buff Companions :/g, '<span class="buff">Buff Companions:</span>');
        description = description.replace(/Buff/g, '<span class="buff">Buff</span>');
        description = description.replace(/Guard/g, '<span class="buff">Guard</span>');
        description = description.replace(/Creates/g, '<span class="stealth">Creates</span>');
        description = description.replace(/Riposted/g, '<span class="debuff">Riposted</span>');
        description = description.replace(/Stealth/g, '<span class="stealth">Stealth</span>');
    
    
        
        return description;
    }
    
    function generateBossSkillDescription(skill) {
        let forward = skill.forward ? skill.forward : '';
        forward = forward.replace(/Forward/g, '<span class="move">Forward</span>').replace(/Back/g, '<span class="move">Back</span>');
        forward = forward ? `${forward}<br>` : '';
    
        let type = skill.type ? `<span class="attack_type">${skill.type}</span><br>` : ''; // Wrap skill.type in <span class="attack_type">
        type = replaceSpecificWords(type); // Apply replaceSpecificWords to type
    
        let description = skill.description ? replaceSpecificWords(skill.description) : ''; // Check for empty skill.effects
        description = description.replace(/(\(\d+% Base\)|\d+% Base)/g, '<span class="chance">$1</span>');
    
    
        let extrainfo = skill.extrainfo ? skill.extrainfo + '<br>' : '';
    
        let stats = '';
        if (skill.accuracy !== undefined && skill.critRate !== undefined && skill.damage !== undefined) {
            stats = `ACC : ${skill.accuracy} / ${skill.critRate} / DMG : ${skill.damage} <br>`;
        }
        let positionIcon = skill.position ? `<img src="images/position_icons/${skill.position}" class="position_icons"><br>` : '';

    
    
        return `
            <div class="${skill.class}" id="${skill.id}">
                ${extrainfo}
                ${positionIcon}
                <span class = "highres">${skill.name}</span> <br>
                ${type}
                ${forward}
                ${stats}
                ${description}
            </div>
        `;
    }

    bossSkillData.forEach((skill) =>{
        const skillHTML = generateBossSkillDescription(skill);
        MainBossBox.innerHTML += skillHTML;
    })
