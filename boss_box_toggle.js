//Content Sounds
const contentClose = document.getElementById("page_close")
contentClose.volume = 0.6;
const contentSelectAudio = document.getElementById('btn_press');
contentSelectAudio.volume = 0.7;
const contentOpenAudio = document.getElementById('page_open');
contentOpenAudio.volume = 0.6;

function PlayContentClose() {
    contentClose.currentTime = 0;
    contentClose.play();
}
function PlayContentSelect() {
    contentSelectAudio.currentTime = 0; 
    contentSelectAudio.play();
}
function PlayContentOpen() {
    contentOpenAudio.currentTime = 0;
    contentOpenAudio.play();
}


//Content Close

const bossCloseBtns = document.getElementsByClassName("boss_close")
const minionCloseBtns = document.getElementsByClassName("minion_close")

const bossBoxHub = document.getElementById("boss_box_hub")
function CloseBossBoxHub() {bossBoxHub.style.display = 'none'}

function CloseAllMinionBoxes() {
    const AllMinionBoxes = document.getElementsByClassName("boss_minion_infobox")
    for (const minionBox of AllMinionBoxes) {
        minionBox.style.display = "none"
    }
    const AllMinionSharedBoxes = document.getElementsByClassName("boss_minion_infobox_shared")
    for (const minionSharedBox of AllMinionSharedBoxes) {
        minionSharedBox.style.display = "none"
    }
}


for (const bossCloseBtn of bossCloseBtns){
    bossCloseBtn.addEventListener("click", function() {
        PlayContentClose();
        CloseBossBoxHub();
    })
}

for (const minionCloseBtn of minionCloseBtns){
    minionCloseBtn.addEventListener("click", function() {
        PlayContentClose();
        CloseAllMinionBoxes();
    })
}

//Portrait Event Listeners

const vanillaBossNav = document.getElementById("base_boss_nav")
const dlcBossNav = document.getElementById("dlc_boss_nav")





const bossPorts = document.getElementsByClassName("boss_port")
const fleshPorts = document.getElementsByClassName("flesh_port")

for (const bossPort of bossPorts) {
    bossPort.addEventListener("click", function() {
        PlayContentOpen();
        for (const allBossSharedContainer of allBossSharedContainers) {allBossSharedContainer.style.display = 'none';}
        for (const container of strategyContainersArray) {container.style.display = 'none';}
        for (const container of loreContainersArray) {container.style.display = 'none';}
        bossLoreTitle.style.display = 'block';
        bossStrategyTitle.style.display = 'none';

        CloseAllMinionBoxes();
        hideAllBossInfo()
    });
}

function hideAllBossInfo() {
    allBossInfoArray.forEach(item => {
        item.style.display = 'none';
    });
}

for (const fleshPort of fleshPorts){
    fleshPort.addEventListener("click", function() {
        PlayContentSelect();
    })
}

//Assign Difficulty Toggle Sound
const bossDiffBtns = document.getElementsByClassName("boss_diff_btn")
const allBossInfo = document.querySelectorAll('[id$="_app_info"], [id$="_vet_info"], [id$="_champ_info"], [id$="_darkest_info"]');
const allBossInfoArray = Array.from(allBossInfo);

const allMinionPorts = document.getElementsByClassName("minion_port_img")

for (const minionport of allMinionPorts){
    minionport.addEventListener('click', function() {PlayContentOpen();
})
}

const allBossSharedContainers = document.querySelectorAll('[id$="_shared_container"]');
const allBossSharedArray = Array.from(allBossSharedContainers)



for (const bossDiffBtn of bossDiffBtns){
    bossDiffBtn.addEventListener("click", function() {
        PlayContentSelect();
        for (const allBossInfo of allBossInfoArray) {allBossInfo.style.display = 'none';}
    })
}

//Boss Lore Button and Strategy Button Swap Toggle 
//+ Lore & Strategy Hide

const bossLoreBtns = document.getElementsByClassName("boss_lore_btn")
const bossStrategyBtns = document.getElementsByClassName("boss_strategy_btn")
const bossLoreTitle = document.getElementById("boss_lore_title")
const bossStrategyTitle = document.getElementById("boss_strategy_title")

const loreContainers = document.querySelectorAll('[id$="_lore_container"]');
const loreContainersArray = Array.from(loreContainers);

const strategyContainers = document.querySelectorAll('[id$="_strategy_container"]');
const strategyContainersArray = Array.from(strategyContainers);

for (const bossLoreBtn of bossLoreBtns){
    bossLoreBtn.addEventListener("click", function() {
        PlayContentSelect();
        bossLoreTitle.style.display = 'block';
        bossStrategyTitle.style.display = 'none';

        for (const container of strategyContainersArray) {container.style.display = 'none';}
    })
}

for (const bossStrategyBtn of bossStrategyBtns){
    bossStrategyBtn.addEventListener("click", function() {
        PlayContentSelect();
        bossStrategyTitle.style.display = 'block';        
        bossLoreTitle.style.display = 'none';
        
        for (const container of loreContainersArray) {container.style.display = 'none';}
    })
}

//Endless Repetition Begins




//Ruins Boss Btn
const RuinsBossButton = document.getElementById("ruins3");
RuinsBossButton.addEventListener('click', function() {
    for (const allBossSharedContainer of allBossSharedContainers) {allBossSharedContainer.style.display = 'none';}
    for (const container of strategyContainersArray) {container.style.display = 'none';}
    for (const container of loreContainersArray) {container.style.display = 'none';}
    CloseAllMinionBoxes();
    hideAllBossInfo()
    bossLoreTitle.style.display = 'block';
    bossStrategyTitle.style.display = 'none';

    vanillaBossNav.style.display = 'flex'
    dlcBossNav.style.display = 'none'

    NecromancerShared.style.display = 'block';
    NecromancerLore.style.display = 'block';
    NecromancerAppInfo.style.display = 'block';
    NecromancerVetInfo.style.display = 'none';
    NecromancerChampInfo.style.display = 'none'
})


//Necromancer

const NecromancerLoreBtn = document.getElementById("necromancer_lore_btn")
const NecromancerStrategyBtn = document.getElementById("necromancer_strategy_btn")
const NecromancerLore = document.getElementById("necromancer_lore_container")
const NecromancerStrategy = document.getElementById("necromancer_strategy_container")

NecromancerLoreBtn.addEventListener('click', function() {
    NecromancerLore.style.display = 'block';
    NecromancerStrategy.style.display = 'none';
})

NecromancerStrategyBtn.addEventListener('click', function() {    
    NecromancerStrategy.style.display = 'block';
    NecromancerLore.style.display = 'none';
})

const NecromancerPortrait = document.getElementById("necromancer_portrait");
const NecromancerShared = document.getElementById("necromancer_shared_container")
const NecromancerAppBtn = document.getElementById("necromancer_app_btn")
const NecromancerAppInfo = document.getElementById("necromancer_app_info")
const NecromancerVetBtn = document.getElementById("necromancer_vet_btn")
const NecromancerVetInfo = document.getElementById("necromancer_vet_info")
const NecromancerChampBtn = document.getElementById("necromancer_champ_btn")
const NecromancerChampInfo = document.getElementById("necromancer_champ_info")


NecromancerPortrait.addEventListener('click', function() {
    NecromancerShared.style.display = 'block';
    NecromancerLore.style.display = 'block';
    NecromancerAppInfo.style.display = 'block';
    NecromancerVetInfo.style.display = 'none';
    NecromancerChampInfo.style.display = 'none'
}) 

NecromancerAppBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    NecromancerAppInfo.style.display = 'block';
    NecromancerVetInfo.style.display = 'none';
    NecromancerChampInfo.style.display = 'none';
})
NecromancerVetBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    NecromancerAppInfo.style.display = 'none';
    NecromancerVetInfo.style.display = 'block';
    NecromancerChampInfo.style.display = 'none';
})
NecromancerChampBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    NecromancerAppInfo.style.display = 'none';
    NecromancerVetInfo.style.display = 'none';
    NecromancerChampInfo.style.display = 'block';
})

//Prophet

const ProphetLoreBtn = document.getElementById("prophet_lore_btn")
const ProphetStrategyBtn = document.getElementById("prophet_strategy_btn")
const ProphetLore = document.getElementById("prophet_lore_container")
const ProphetStrategy = document.getElementById("prophet_strategy_container")

ProphetLoreBtn.addEventListener('click', function() {
    ProphetLore.style.display = 'block';
    ProphetStrategy.style.display = 'none';
})

ProphetStrategyBtn.addEventListener('click', function() {    
    ProphetStrategy.style.display = 'block';
    ProphetLore.style.display = 'none';
})

const ProphetPortrait = document.getElementById("prophet_portrait");
const ProphetShared = document.getElementById("prophet_shared_container")
const ProphetAppBtn = document.getElementById("prophet_app_btn")
const ProphetAppInfo = document.getElementById("prophet_app_info")
const ProphetVetBtn = document.getElementById("prophet_vet_btn")
const ProphetVetInfo = document.getElementById("prophet_vet_info")
const ProphetChampBtn = document.getElementById("prophet_champ_btn")
const ProphetChampInfo = document.getElementById("prophet_champ_info")


ProphetPortrait.addEventListener('click', function() {
    ProphetShared.style.display = 'block';
    ProphetLore.style.display = 'block';
    ProphetAppInfo.style.display = 'block';
    ProphetVetInfo.style.display = 'none';
    ProphetChampInfo.style.display = 'none'
}) 

ProphetAppBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    ProphetAppInfo.style.display = 'block';
    ProphetVetInfo.style.display = 'none';
    ProphetChampInfo.style.display = 'none';
})
ProphetVetBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    ProphetAppInfo.style.display = 'none';
    ProphetVetInfo.style.display = 'block';
    ProphetChampInfo.style.display = 'none';
})
ProphetChampBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    ProphetAppInfo.style.display = 'none';
    ProphetVetInfo.style.display = 'none';
    ProphetChampInfo.style.display = 'block';
})

//Weald Boss Btn

const WealdBossButton = document.getElementById("weald3");
WealdBossButton.addEventListener('click', function() {
    for (const allBossSharedContainer of allBossSharedContainers) {allBossSharedContainer.style.display = 'none';}
    for (const container of strategyContainersArray) {container.style.display = 'none';}
    for (const container of loreContainersArray) {container.style.display = 'none';}
    CloseAllMinionBoxes();
    hideAllBossInfo()
    bossLoreTitle.style.display = 'block';
    bossStrategyTitle.style.display = 'none';

    vanillaBossNav.style.display = 'flex'
    dlcBossNav.style.display = 'none'

    
    HagShared.style.display = 'block';
    HagLore.style.display = 'block';
    HagAppInfo.style.display = 'block';
    HagVetInfo.style.display = 'none';
    HagChampInfo.style.display = 'none'
})


//Hag

const HagLoreBtn = document.getElementById("hag_lore_btn")
const HagStrategyBtn = document.getElementById("hag_strategy_btn")
const HagLore = document.getElementById("hag_lore_container")
const HagStrategy = document.getElementById("hag_strategy_container")

HagLoreBtn.addEventListener('click', function() {
    HagLore.style.display = 'block';
    HagStrategy.style.display = 'none';
})

HagStrategyBtn.addEventListener('click', function() {    
    HagStrategy.style.display = 'block';
    HagLore.style.display = 'none';
})

const HagPortrait = document.getElementById("hag_portrait");
const HagShared = document.getElementById("hag_shared_container")
const HagAppBtn = document.getElementById("hag_app_btn")
const HagAppInfo = document.getElementById("hag_app_info")
const HagVetBtn = document.getElementById("hag_vet_btn")
const HagVetInfo = document.getElementById("hag_vet_info")
const HagChampBtn = document.getElementById("hag_champ_btn")
const HagChampInfo = document.getElementById("hag_champ_info")


HagPortrait.addEventListener('click', function() {
    HagShared.style.display = 'block';
    HagLore.style.display = 'block';
    HagAppInfo.style.display = 'block';
    HagVetInfo.style.display = 'none';
    HagChampInfo.style.display = 'none'
}) 

HagAppBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    HagAppInfo.style.display = 'block';
    HagVetInfo.style.display = 'none';
    HagChampInfo.style.display = 'none';
})
HagVetBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    HagAppInfo.style.display = 'none';
    HagVetInfo.style.display = 'block';
    HagChampInfo.style.display = 'none';
})
HagChampBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    HagAppInfo.style.display = 'none';
    HagVetInfo.style.display = 'none';
    HagChampInfo.style.display = 'block';
})

//BrigandPounder

const BrigandPounderLoreBtn = document.getElementById("brigand_pounder_lore_btn")
const BrigandPounderStrategyBtn = document.getElementById("brigand_pounder_strategy_btn")
const BrigandPounderLore = document.getElementById("brigand_pounder_lore_container")
const BrigandPounderStrategy = document.getElementById("brigand_pounder_strategy_container")

BrigandPounderLoreBtn.addEventListener('click', function() {
    BrigandPounderLore.style.display = 'block';
    BrigandPounderStrategy.style.display = 'none';
})

BrigandPounderStrategyBtn.addEventListener('click', function() {    
    BrigandPounderStrategy.style.display = 'block';
    BrigandPounderLore.style.display = 'none';
})

const BrigandPounderPortrait = document.getElementById("brigand_pounder_portrait");
const BrigandPounderShared = document.getElementById("brigand_pounder_shared_container")
const BrigandPounderAppBtn = document.getElementById("brigand_pounder_app_btn")
const BrigandPounderAppInfo = document.getElementById("brigand_pounder_app_info")
const BrigandPounderVetBtn = document.getElementById("brigand_pounder_vet_btn")
const BrigandPounderVetInfo = document.getElementById("brigand_pounder_vet_info")
const BrigandPounderChampBtn = document.getElementById("brigand_pounder_champ_btn")
const BrigandPounderChampInfo = document.getElementById("brigand_pounder_champ_info")


BrigandPounderPortrait.addEventListener('click', function() {
    BrigandPounderShared.style.display = 'block';
    BrigandPounderLore.style.display = 'block';
    BrigandPounderAppInfo.style.display = 'block';
    BrigandPounderVetInfo.style.display = 'none';
    BrigandPounderChampInfo.style.display = 'none'
}) 

BrigandPounderAppBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    BrigandPounderAppInfo.style.display = 'block';
    BrigandPounderVetInfo.style.display = 'none';
    BrigandPounderChampInfo.style.display = 'none';
})
BrigandPounderVetBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    BrigandPounderAppInfo.style.display = 'none';
    BrigandPounderVetInfo.style.display = 'block';
    BrigandPounderChampInfo.style.display = 'none';
})
BrigandPounderChampBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    BrigandPounderAppInfo.style.display = 'none';
    BrigandPounderVetInfo.style.display = 'none';
    BrigandPounderChampInfo.style.display = 'block';
})

//Shrieker

const ShriekerLoreBtn = document.getElementById("shrieker_lore_btn")
const ShriekerStrategyBtn = document.getElementById("shrieker_strategy_btn")
const ShriekerLore = document.getElementById("shrieker_lore_container")
const ShriekerStrategy = document.getElementById("shrieker_strategy_container")

ShriekerLoreBtn.addEventListener('click', function() {
    ShriekerLore.style.display = 'block';
    ShriekerStrategy.style.display = 'none';
})

ShriekerStrategyBtn.addEventListener('click', function() {    
    ShriekerStrategy.style.display = 'block';
    ShriekerLore.style.display = 'none';
})

const ShriekerPortrait = document.getElementById("shrieker_portrait");
const ShriekerShared = document.getElementById("shrieker_shared_container")
const ShriekerAppBtn = document.getElementById("shrieker_app_btn")
const ShriekerAppInfo = document.getElementById("shrieker_app_info")
const ShriekerVetBtn = document.getElementById("shrieker_vet_btn")
const ShriekerVetInfo = document.getElementById("shrieker_vet_info")
const ShriekerChampBtn = document.getElementById("shrieker_champ_btn")
const ShriekerChampInfo = document.getElementById("shrieker_champ_info")
const ShriekerDarkestBtn = document.getElementById("shrieker_darkest_btn")
const ShriekerDarkestInfo = document.getElementById("shrieker_darkest_info")


ShriekerPortrait.addEventListener('click', function() {
    ShriekerShared.style.display = 'block';
    ShriekerLore.style.display = 'block';
    ShriekerAppInfo.style.display = 'block';
    ShriekerVetInfo.style.display = 'none';
    ShriekerChampInfo.style.display = 'none';
    ShriekerDarkestInfo.style.display = 'none'

}) 

ShriekerAppBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    ShriekerAppInfo.style.display = 'block';
    ShriekerVetInfo.style.display = 'none';
    ShriekerChampInfo.style.display = 'none';
    ShriekerDarkestInfo.style.display = 'none'
})
ShriekerVetBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    ShriekerAppInfo.style.display = 'none';
    ShriekerVetInfo.style.display = 'block';
    ShriekerChampInfo.style.display = 'none';
    ShriekerDarkestInfo.style.display = 'none'
})
ShriekerChampBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    ShriekerAppInfo.style.display = 'none';
    ShriekerVetInfo.style.display = 'none';
    ShriekerChampInfo.style.display = 'block';
    ShriekerDarkestInfo.style.display = 'none'
})

ShriekerDarkestBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    ShriekerAppInfo.style.display = 'none';
    ShriekerVetInfo.style.display = 'none';
    ShriekerChampInfo.style.display = 'none';
    ShriekerDarkestInfo.style.display = 'block'
})


//Warrens Boss Btn

const WarrensBossButton = document.getElementById("warrens3");
WarrensBossButton.addEventListener('click', function() {
    for (const allBossSharedContainer of allBossSharedContainers) {allBossSharedContainer.style.display = 'none';}
    for (const container of strategyContainersArray) {container.style.display = 'none';}
    for (const container of loreContainersArray) {container.style.display = 'none';}
    CloseAllMinionBoxes();
    hideAllBossInfo()
    bossLoreTitle.style.display = 'block';
    bossStrategyTitle.style.display = 'none';

    vanillaBossNav.style.display = 'flex'
    dlcBossNav.style.display = 'none'

    
    SwinePrinceShared.style.display = 'block';
    SwinePrinceLore.style.display = 'block';
    SwinePrinceAppInfo.style.display = 'block';
    SwinePrinceVetInfo.style.display = 'none';
    SwinePrinceChampInfo.style.display = 'none'
})


//Swine Prince

const SwinePrinceLoreBtn = document.getElementById("swine_prince_lore_btn")
const SwinePrinceStrategyBtn = document.getElementById("swine_prince_strategy_btn")
const SwinePrinceLore = document.getElementById("swine_prince_lore_container")
const SwinePrinceStrategy = document.getElementById("swine_prince_strategy_container")

SwinePrinceLoreBtn.addEventListener('click', function() {
    SwinePrinceLore.style.display = 'block';
    SwinePrinceStrategy.style.display = 'none';
})

SwinePrinceStrategyBtn.addEventListener('click', function() {    
    SwinePrinceStrategy.style.display = 'block';
    SwinePrinceLore.style.display = 'none';
})

const SwinePrincePortrait = document.getElementById("swine_prince_portrait");
const SwinePrinceShared = document.getElementById("swine_prince_shared_container")
const SwinePrinceAppBtn = document.getElementById("swine_prince_app_btn")
const SwinePrinceAppInfo = document.getElementById("swine_prince_app_info")
const SwinePrinceVetBtn = document.getElementById("swine_prince_vet_btn")
const SwinePrinceVetInfo = document.getElementById("swine_prince_vet_info")
const SwinePrinceChampBtn = document.getElementById("swine_prince_champ_btn")
const SwinePrinceChampInfo = document.getElementById("swine_prince_champ_info")


SwinePrincePortrait.addEventListener('click', function() {
    SwinePrinceShared.style.display = 'block';
    SwinePrinceLore.style.display = 'block';
    SwinePrinceAppInfo.style.display = 'block';
    SwinePrinceVetInfo.style.display = 'none';
    SwinePrinceChampInfo.style.display = 'none'
}) 

SwinePrinceAppBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    SwinePrinceAppInfo.style.display = 'block';
    SwinePrinceVetInfo.style.display = 'none';
    SwinePrinceChampInfo.style.display = 'none';
})
SwinePrinceVetBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    SwinePrinceAppInfo.style.display = 'none';
    SwinePrinceVetInfo.style.display = 'block';
    SwinePrinceChampInfo.style.display = 'none';
})
SwinePrinceChampBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    SwinePrinceAppInfo.style.display = 'none';
    SwinePrinceVetInfo.style.display = 'none';
    SwinePrinceChampInfo.style.display = 'block';
})







//Flesh

const FleshLoreBtn = document.getElementById("flesh_lore_btn")
const FleshStrategyBtn = document.getElementById("flesh_strategy_btn")
const FleshLore = document.getElementById("flesh_lore_container")
const FleshStrategy = document.getElementById("flesh_strategy_container")

FleshLoreBtn.addEventListener('click', function() {
    FleshLore.style.display = 'block';
    FleshStrategy.style.display = 'none';
})

FleshStrategyBtn.addEventListener('click', function() {    
    FleshStrategy.style.display = 'block';
    FleshLore.style.display = 'none';
})

const FleshPortrait = document.getElementById("flesh_portrait");
const FleshShared = document.getElementById("flesh_shared_container")
const FleshAppBtn = document.getElementById("flesh_app_btn")
const FleshAppInfo = document.getElementById("flesh_app_info")
const FleshVetBtn = document.getElementById("flesh_vet_btn")
const FleshVetInfo = document.getElementById("flesh_vet_info")
const FleshChampBtn = document.getElementById("flesh_champ_btn")
const FleshChampInfo = document.getElementById("flesh_champ_info")


FleshPortrait.addEventListener('click', function() {
    FleshShared.style.display = 'block';
    FleshLore.style.display = 'block';
    FleshVetInfo.style.display = 'none';
    FleshChampInfo.style.display = 'none'    
    FleshAppInfo.style.display = 'block';
    FleshHeadAppStats.style.display = 'block'

}) 

FleshAppBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    FleshAppInfo.style.display = 'block';
    FleshVetInfo.style.display = 'none';
    FleshChampInfo.style.display = 'none';
})
FleshVetBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    FleshAppInfo.style.display = 'none';
    FleshVetInfo.style.display = 'block';
    FleshChampInfo.style.display = 'none';
})
FleshChampBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    FleshAppInfo.style.display = 'none';
    FleshVetInfo.style.display = 'none';
    FleshChampInfo.style.display = 'block';
})


function CloseAllFleshMains() {
    const AllFleshMains = document.getElementsByClassName("flesh_main")
    for (const AllFleshMain of AllFleshMains){
        AllFleshMain.style.display = 'none'
   }   
}

function CloseAllFleshStats() {
    const AllFleshStats = document.getElementsByClassName("flesh_stat")
    for (const AllFleshStat of AllFleshStats){
        AllFleshStat.style.display = 'none'
   }   
}

const FleshAppPort = document.getElementById("flesh_app_port");

const FleshHeadAppPort = document.getElementById("flesh_head_app_port")
const FleshBoneAppPort = document.getElementById("flesh_bone_app_port")
const FleshHeartAppPort = document.getElementById("flesh_heart_app_port")
const FleshButtAppPort = document.getElementById("flesh_butt_app_port")

const FleshHeadAppStats = document.getElementById("flesh_head_app_stats")
const FleshBoneAppStats = document.getElementById("flesh_bone_app_stats")
const FleshHeartAppStats = document.getElementById("flesh_heart_app_stats")
const FleshButtAppStats = document.getElementById("flesh_butt_app_stats")


const FleshVetPort = document.getElementById("flesh_vet_port");

const FleshHeadVetPort = document.getElementById("flesh_head_vet_port")
const FleshBoneVetPort = document.getElementById("flesh_bone_vet_port")
const FleshHeartVetPort = document.getElementById("flesh_heart_vet_port")
const FleshButtVetPort = document.getElementById("flesh_butt_vet_port")

const FleshHeadVetStats = document.getElementById("flesh_head_vet_stats")
const FleshBoneVetStats = document.getElementById("flesh_bone_vet_stats")
const FleshHeartVetStats = document.getElementById("flesh_heart_vet_stats")
const FleshButtVetStats = document.getElementById("flesh_butt_vet_stats")

const FleshChampPort = document.getElementById("flesh_champ_port");

const FleshHeadChampPort = document.getElementById("flesh_head_champ_port")
const FleshBoneChampPort = document.getElementById("flesh_bone_champ_port")
const FleshHeartChampPort = document.getElementById("flesh_heart_champ_port")
const FleshButtChampPort = document.getElementById("flesh_butt_champ_port")

const FleshHeadChampStats = document.getElementById("flesh_head_champ_stats")
const FleshBoneChampStats = document.getElementById("flesh_bone_champ_stats")
const FleshHeartChampStats = document.getElementById("flesh_heart_champ_stats")
const FleshButtChampStats = document.getElementById("flesh_butt_champ_stats")



FleshAppBtn.addEventListener('click', function() {
    CloseAllFleshMains();
    CloseAllFleshStats();
    FleshAppInfo.style.display = 'block';
    FleshHeadAppStats.style.display = 'block'

})

FleshHeadAppPort.addEventListener('click', function() {
    CloseAllFleshStats()
    FleshHeadAppStats.style.display = 'block'
})

FleshBoneAppPort.addEventListener('click', function() {
    CloseAllFleshStats()
    FleshBoneAppStats.style.display = 'block'
})

FleshHeartAppPort.addEventListener('click', function() {
    CloseAllFleshStats()
    FleshHeartAppStats.style.display = 'block'
})

FleshButtAppPort.addEventListener('click', function() {
    CloseAllFleshStats()
    FleshButtAppStats.style.display = 'block'
})

FleshVetBtn.addEventListener('click', function() {
    CloseAllFleshMains();
    CloseAllFleshStats();
    FleshVetInfo.style.display = 'block';
    FleshHeadVetStats.style.display = 'block'
})

FleshHeadVetPort.addEventListener('click', function() {
    CloseAllFleshStats()
    FleshHeadVetStats.style.display = 'block'
})

FleshBoneVetPort.addEventListener('click', function() {
    CloseAllFleshStats()
    FleshBoneVetStats.style.display = 'block'
})

FleshHeartVetPort.addEventListener('click', function() {
    CloseAllFleshStats()
    FleshHeartVetStats.style.display = 'block'
})

FleshButtVetPort.addEventListener('click', function() {
    CloseAllFleshStats()
    FleshButtVetStats.style.display = 'block'
})


FleshChampBtn.addEventListener('click', function() {
    CloseAllFleshMains();
    CloseAllFleshStats();
    FleshChampInfo.style.display = 'block';
    FleshHeadChampStats.style.display = 'block'
})

FleshHeadChampPort.addEventListener('click', function() {
    CloseAllFleshStats()
    FleshHeadChampStats.style.display = 'block'
})

FleshBoneChampPort.addEventListener('click', function() {
    CloseAllFleshStats()
    FleshBoneChampStats.style.display = 'block'
})

FleshHeartChampPort.addEventListener('click', function() {
    CloseAllFleshStats()
    FleshHeartChampStats.style.display = 'block'
})

FleshButtChampPort.addEventListener('click', function() {
    CloseAllFleshStats()
    FleshButtChampStats.style.display = 'block'
})

//Cove Boss Btn

const CoveBossButton = document.getElementById("cove3");
CoveBossButton.addEventListener('click', function() {
    for (const allBossSharedContainer of allBossSharedContainers) {allBossSharedContainer.style.display = 'none';}
    for (const container of strategyContainersArray) {container.style.display = 'none';}
    for (const container of loreContainersArray) {container.style.display = 'none';}
    CloseAllMinionBoxes();
    hideAllBossInfo()
    bossLoreTitle.style.display = 'block';
    bossStrategyTitle.style.display = 'none';

    vanillaBossNav.style.display = 'flex'
    dlcBossNav.style.display = 'none'

    
    SirenShared.style.display = 'block';
    SirenLore.style.display = 'block';
    SirenAppInfo.style.display = 'block';
    SirenVetInfo.style.display = 'none';
    SirenChampInfo.style.display = 'none'
});

//Siren

const SirenLoreBtn = document.getElementById("siren_lore_btn")
const SirenStrategyBtn = document.getElementById("siren_strategy_btn")
const SirenLore = document.getElementById("siren_lore_container")
const SirenStrategy = document.getElementById("siren_strategy_container")

SirenLoreBtn.addEventListener('click', function() {
    SirenLore.style.display = 'block';
    SirenStrategy.style.display = 'none';
})

SirenStrategyBtn.addEventListener('click', function() {    
    SirenStrategy.style.display = 'block';
    SirenLore.style.display = 'none';
})

const SirenPortrait = document.getElementById("siren_portrait");
const SirenShared = document.getElementById("siren_shared_container")
const SirenAppBtn = document.getElementById("siren_app_btn")
const SirenAppInfo = document.getElementById("siren_app_info")
const SirenVetBtn = document.getElementById("siren_vet_btn")
const SirenVetInfo = document.getElementById("siren_vet_info")
const SirenChampBtn = document.getElementById("siren_champ_btn")
const SirenChampInfo = document.getElementById("siren_champ_info")


SirenPortrait.addEventListener('click', function() {
    SirenShared.style.display = 'block';
    SirenLore.style.display = 'block';
    SirenAppInfo.style.display = 'block';
    SirenVetInfo.style.display = 'none';
    SirenChampInfo.style.display = 'none'
}) 

SirenAppBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    SirenAppInfo.style.display = 'block';
    SirenVetInfo.style.display = 'none';
    SirenChampInfo.style.display = 'none';
})
SirenVetBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    SirenAppInfo.style.display = 'none';
    SirenVetInfo.style.display = 'block';
    SirenChampInfo.style.display = 'none';
})
SirenChampBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    SirenAppInfo.style.display = 'none';
    SirenVetInfo.style.display = 'none';
    SirenChampInfo.style.display = 'block';
});

//DrownedCrew

const DrownedCrewLoreBtn = document.getElementById("drowned_crew_lore_btn")
const DrownedCrewStrategyBtn = document.getElementById("drowned_crew_strategy_btn")
const DrownedCrewLore = document.getElementById("drowned_crew_lore_container")
const DrownedCrewStrategy = document.getElementById("drowned_crew_strategy_container")

DrownedCrewLoreBtn.addEventListener('click', function() {
    DrownedCrewLore.style.display = 'block';
    DrownedCrewStrategy.style.display = 'none';
})

DrownedCrewStrategyBtn.addEventListener('click', function() {    
    DrownedCrewStrategy.style.display = 'block';
    DrownedCrewLore.style.display = 'none';
})

const DrownedCrewPortrait = document.getElementById("drowned_crew_portrait");
const DrownedCrewShared = document.getElementById("drowned_crew_shared_container")
const DrownedCrewAppBtn = document.getElementById("drowned_crew_app_btn")
const DrownedCrewAppInfo = document.getElementById("drowned_crew_app_info")
const DrownedCrewVetBtn = document.getElementById("drowned_crew_vet_btn")
const DrownedCrewVetInfo = document.getElementById("drowned_crew_vet_info")
const DrownedCrewChampBtn = document.getElementById("drowned_crew_champ_btn")
const DrownedCrewChampInfo = document.getElementById("drowned_crew_champ_info")


DrownedCrewPortrait.addEventListener('click', function() {
    DrownedCrewShared.style.display = 'block';
    DrownedCrewLore.style.display = 'block';
    DrownedCrewAppInfo.style.display = 'block';
    DrownedCrewVetInfo.style.display = 'none';
    DrownedCrewChampInfo.style.display = 'none'
}) 

DrownedCrewAppBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    DrownedCrewAppInfo.style.display = 'block';
    DrownedCrewVetInfo.style.display = 'none';
    DrownedCrewChampInfo.style.display = 'none';
})
DrownedCrewVetBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    DrownedCrewAppInfo.style.display = 'none';
    DrownedCrewVetInfo.style.display = 'block';
    DrownedCrewChampInfo.style.display = 'none';
})
DrownedCrewChampBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    DrownedCrewAppInfo.style.display = 'none';
    DrownedCrewVetInfo.style.display = 'none';
    DrownedCrewChampInfo.style.display = 'block';
})

//Shared Boss Btn

const SharedBossButton = document.getElementById("shared3");
SharedBossButton.addEventListener('click', function() {
    for (const allBossSharedContainer of allBossSharedContainers) {allBossSharedContainer.style.display = 'none';}
    for (const container of strategyContainersArray) {container.style.display = 'none';}
    for (const container of loreContainersArray) {container.style.display = 'none';}
    CloseAllMinionBoxes();
    hideAllBossInfo()
    bossLoreTitle.style.display = 'block';
    bossStrategyTitle.style.display = 'none';

    vanillaBossNav.style.display = 'flex'
    dlcBossNav.style.display = 'none'

    
    CollectorShared.style.display = 'block';
    CollectorLore.style.display = 'block';
    CollectorAppInfo.style.display = 'block';
    CollectorVetInfo.style.display = 'none';
    CollectorChampInfo.style.display = 'none'
})

//Collector

const CollectorLoreBtn = document.getElementById("collector_lore_btn")
const CollectorStrategyBtn = document.getElementById("collector_strategy_btn")
const CollectorLore = document.getElementById("collector_lore_container")
const CollectorStrategy = document.getElementById("collector_strategy_container")

CollectorLoreBtn.addEventListener('click', function() {
    CollectorLore.style.display = 'block';
    CollectorStrategy.style.display = 'none';
})

CollectorStrategyBtn.addEventListener('click', function() {    
    CollectorStrategy.style.display = 'block';
    CollectorLore.style.display = 'none';
})

const CollectorPortrait = document.getElementById("collector_portrait");
const CollectorShared = document.getElementById("collector_shared_container")
const CollectorAppBtn = document.getElementById("collector_app_btn")
const CollectorAppInfo = document.getElementById("collector_app_info")
const CollectorVetBtn = document.getElementById("collector_vet_btn")
const CollectorVetInfo = document.getElementById("collector_vet_info")
const CollectorChampBtn = document.getElementById("collector_champ_btn")
const CollectorChampInfo = document.getElementById("collector_champ_info")


CollectorPortrait.addEventListener('click', function() {
    CollectorShared.style.display = 'block';
    CollectorLore.style.display = 'block';
    CollectorAppInfo.style.display = 'block';
    CollectorVetInfo.style.display = 'none';
    CollectorChampInfo.style.display = 'none'
}) 

CollectorAppBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    CollectorAppInfo.style.display = 'block';
    CollectorVetInfo.style.display = 'none';
    CollectorChampInfo.style.display = 'none';
})
CollectorVetBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    CollectorAppInfo.style.display = 'none';
    CollectorVetInfo.style.display = 'block';
    CollectorChampInfo.style.display = 'none';
})
CollectorChampBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    CollectorAppInfo.style.display = 'none';
    CollectorVetInfo.style.display = 'none';
    CollectorChampInfo.style.display = 'block';
})

//Shambler

const ShamblerLoreBtn = document.getElementById("shambler_lore_btn")
const ShamblerStrategyBtn = document.getElementById("shambler_strategy_btn")
const ShamblerLore = document.getElementById("shambler_lore_container")
const ShamblerStrategy = document.getElementById("shambler_strategy_container")

ShamblerLoreBtn.addEventListener('click', function() {
    ShamblerLore.style.display = 'block';
    ShamblerStrategy.style.display = 'none';
})

ShamblerStrategyBtn.addEventListener('click', function() {    
    ShamblerStrategy.style.display = 'block';
    ShamblerLore.style.display = 'none';
})

const ShamblerPortrait = document.getElementById("shambler_portrait");
const ShamblerShared = document.getElementById("shambler_shared_container")
const ShamblerAppBtn = document.getElementById("shambler_app_btn")
const ShamblerAppInfo = document.getElementById("shambler_app_info")
const ShamblerVetBtn = document.getElementById("shambler_vet_btn")
const ShamblerVetInfo = document.getElementById("shambler_vet_info")
const ShamblerChampBtn = document.getElementById("shambler_champ_btn")
const ShamblerChampInfo = document.getElementById("shambler_champ_info")
const ShamblerDarkestBtn = document.getElementById("shambler_darkest_btn")
const ShamblerDarkestInfo = document.getElementById("shambler_darkest_info")


ShamblerPortrait.addEventListener('click', function() {
    ShamblerShared.style.display = 'block';
    ShamblerLore.style.display = 'block';
    ShamblerAppInfo.style.display = 'block';
    ShamblerVetInfo.style.display = 'none';
    ShamblerChampInfo.style.display = 'none'
    ShamblerDarkestInfo.style.display = 'none'
}) 

ShamblerAppBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    ShamblerAppInfo.style.display = 'block';
    ShamblerVetInfo.style.display = 'none';
    ShamblerChampInfo.style.display = 'none';
    ShamblerDarkestInfo.style.display = 'none'

})
ShamblerVetBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    ShamblerAppInfo.style.display = 'none';
    ShamblerVetInfo.style.display = 'block';
    ShamblerChampInfo.style.display = 'none';
    ShamblerDarkestInfo.style.display = 'none'

})
ShamblerChampBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    ShamblerAppInfo.style.display = 'none';
    ShamblerVetInfo.style.display = 'none';
    ShamblerChampInfo.style.display = 'block';
    ShamblerDarkestInfo.style.display = 'none'

})

ShamblerDarkestBtn.addEventListener('click', function() {
    CloseAllMinionBoxes();
    ShamblerAppInfo.style.display = 'none';
    ShamblerVetInfo.style.display = 'none';
    ShamblerChampInfo.style.display = 'none';
    ShamblerDarkestInfo.style.display = 'block'

})

const MinionSharedInfo = document.getElementById("minion_shared_info")


//Small Pew
const SmallPewSprite = document.getElementById("small_pew_sprite_container")
const SmallPewAppPort = document.getElementById("small_pew_app_port")
const SmallPewAppInfo = document.getElementById("small_pew_app_info")
const SmallPewVetPort = document.getElementById("small_pew_vet_port")
const SmallPewVetInfo = document.getElementById("small_pew_vet_info")
const SmallPewChampPort = document.getElementById("small_pew_champ_port")
const SmallPewChampInfo = document.getElementById("small_pew_champ_info")

SmallPewAppPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    SmallPewAppInfo.style.display = 'block';
    SmallPewSprite.style.display = 'block';
})

SmallPewVetPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    SmallPewVetInfo.style.display = 'block';
    SmallPewSprite.style.display = 'block';
})

SmallPewChampPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    SmallPewChampInfo.style.display = 'block';
    SmallPewSprite.style.display = 'block';
})

//Medium Pew
const MediumPewSprite = document.getElementById("medium_pew_sprite_container")
const MediumPewAppPort = document.getElementById("medium_pew_app_port")
const MediumPewAppInfo = document.getElementById("medium_pew_app_info")
const MediumPewVetPort = document.getElementById("medium_pew_vet_port")
const MediumPewVetInfo = document.getElementById("medium_pew_vet_info")
const MediumPewChampPort = document.getElementById("medium_pew_champ_port")
const MediumPewChampInfo = document.getElementById("medium_pew_champ_info")

MediumPewAppPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    MediumPewAppInfo.style.display = 'block';
    MediumPewSprite.style.display = 'block';
})

MediumPewVetPort.addEventListener("click", function() {
    PlayPageOpn();
    CloseAllMinionBoxes();
    MinionSharedInfo.style.display = 'block';
    MediumPewVetInfo.style.display = 'block';
    MediumPewSprite.style.display = 'block';
})

MediumPewChampPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    MediumPewChampInfo.style.display = 'block';
    MediumPewSprite.style.display = 'block';
})

//Large Pew
const LargePewSprite = document.getElementById("large_pew_sprite_container")
const LargePewAppPort = document.getElementById("large_pew_app_port")
const LargePewAppInfo = document.getElementById("large_pew_app_info")
const LargePewVetPort = document.getElementById("large_pew_vet_port")
const LargePewVetInfo = document.getElementById("large_pew_vet_info")
const LargePewChampPort = document.getElementById("large_pew_champ_port")
const LargePewChampInfo = document.getElementById("large_pew_champ_info")

LargePewAppPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    LargePewAppInfo.style.display = 'block';
    LargePewSprite.style.display = 'block';
})

LargePewVetPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    LargePewVetInfo.style.display = 'block';
    LargePewSprite.style.display = 'block';
})

LargePewChampPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    LargePewChampInfo.style.display = 'block';
    LargePewSprite.style.display = 'block';
})

//Cauldron(Empty)
const CauldronEmptySprite = document.getElementById("cauldron_empty_sprite_container")
const CauldronEmptyAppPort = document.getElementById("cauldron_empty_app_port")
const CauldronEmptyAppInfo = document.getElementById("cauldron_empty_app_info")
const CauldronEmptyVetPort = document.getElementById("cauldron_empty_vet_port")
const CauldronEmptyVetInfo = document.getElementById("cauldron_empty_vet_info")
const CauldronEmptyChampPort = document.getElementById("cauldron_empty_champ_port")
const CauldronEmptyChampInfo = document.getElementById("cauldron_empty_champ_info")

CauldronEmptyAppPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CauldronEmptyAppInfo.style.display = 'block';
    CauldronEmptySprite.style.display = 'block';
})

CauldronEmptyVetPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CauldronEmptyVetInfo.style.display = 'block';
    CauldronEmptySprite.style.display = 'block';
})

CauldronEmptyChampPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CauldronEmptyChampInfo.style.display = 'block';
    CauldronEmptySprite.style.display = 'block';
})

//Cauldron(Full)
const CauldronFullSprite = document.getElementById("cauldron_full_sprite_container")
const CauldronFullAppPort = document.getElementById("cauldron_full_app_port")
const CauldronFullAppInfo = document.getElementById("cauldron_full_app_info")
const CauldronFullVetPort = document.getElementById("cauldron_full_vet_port")
const CauldronFullVetInfo = document.getElementById("cauldron_full_vet_info")
const CauldronFullChampPort = document.getElementById("cauldron_full_champ_port")
const CauldronFullChampInfo = document.getElementById("cauldron_full_champ_info")

CauldronFullAppPort.addEventListener("click", function() {
    PlayPageOpn();
    CloseAllMinionBoxes();
    MinionSharedInfo.style.display = 'block';
    CauldronFullAppInfo.style.display = 'block';
    CauldronFullSprite.style.display = 'block';
})

CauldronFullVetPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CauldronFullVetInfo.style.display = 'block';
    CauldronFullSprite.style.display = 'block';
})

CauldronFullChampPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CauldronFullChampInfo.style.display = 'block';
    CauldronFullSprite.style.display = 'block';
})

//Brigand Matchman
const BrigandMatchmanSprite = document.getElementById("brigand_matchman_sprite_container")
const BrigandMatchmanAppPort = document.getElementById("brigand_matchman_app_port")
const BrigandMatchmanAppInfo = document.getElementById("brigand_matchman_app_info")
const BrigandMatchmanVetPort = document.getElementById("brigand_matchman_vet_port")
const BrigandMatchmanVetInfo = document.getElementById("brigand_matchman_vet_info")
const BrigandMatchmanChampPort = document.getElementById("brigand_matchman_champ_port")
const BrigandMatchmanChampInfo = document.getElementById("brigand_matchman_champ_info")

BrigandMatchmanAppPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    BrigandMatchmanAppInfo.style.display = 'block';
    BrigandMatchmanSprite.style.display = 'block';
})

BrigandMatchmanVetPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    BrigandMatchmanVetInfo.style.display = 'block';
    BrigandMatchmanSprite.style.display = 'block';
})

BrigandMatchmanChampPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    BrigandMatchmanChampInfo.style.display = 'block';
    BrigandMatchmanSprite.style.display = 'block';
})

//Shrieker's Nest
const ShriekerNestSprite = document.getElementById("shrieker's_nest_sprite_container")
const ShriekerNestAppPort = document.getElementById("shrieker's_nest_app_port")
const ShriekerNestAppInfo = document.getElementById("shrieker's_nest_app_info")
const ShriekerNestVetPort = document.getElementById("shrieker's_nest_vet_port")
const ShriekerNestVetInfo = document.getElementById("shrieker's_nest_vet_info")
const ShriekerNestChampPort = document.getElementById("shrieker's_nest_champ_port")
const ShriekerNestChampInfo = document.getElementById("shrieker's_nest_champ_info")
const ShriekerNestDarkestPort = document.getElementById("shrieker's_nest_darkest_port")

ShriekerNestAppPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    ShriekerNestAppInfo.style.display = 'block';
    ShriekerNestSprite.style.display = 'block';
})

ShriekerNestVetPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    ShriekerNestVetInfo.style.display = 'block';
    ShriekerNestSprite.style.display = 'block';
})

ShriekerNestChampPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    ShriekerNestChampInfo.style.display = 'block';
    ShriekerNestSprite.style.display = 'block';
})

ShriekerNestDarkestPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    ShriekerNestChampInfo.style.display = 'block';
    ShriekerNestSprite.style.display = 'block';
})

//Wilbur
const WilburSprite = document.getElementById("wilbur_sprite_container")
const WilburAppPort = document.getElementById("wilbur_app_port")
const WilburAppInfo = document.getElementById("wilbur_app_info")
const WilburVetPort = document.getElementById("wilbur_vet_port")
const WilburVetInfo = document.getElementById("wilbur_vet_info")
const WilburChampPort = document.getElementById("wilbur_champ_port")
const WilburChampInfo = document.getElementById("wilbur_champ_info")

WilburAppPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    WilburAppInfo.style.display = 'block';
    WilburSprite.style.display = 'block';
})

WilburVetPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    WilburVetInfo.style.display = 'block';
    WilburSprite.style.display = 'block';
})

WilburChampPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    WilburChampInfo.style.display = 'block';
    WilburSprite.style.display = 'block';
})

//Drowned Anchorman

const DrownedAnchormanSprite = document.getElementById("drowned_anchorman_sprite_container")
const DrownedAnchormanAppPort = document.getElementById("drowned_anchorman_app_port")
const DrownedAnchormanAppInfo = document.getElementById("drowned_anchorman_app_info")
const DrownedAnchormanVetPort = document.getElementById("drowned_anchorman_vet_port")
const DrownedAnchormanVetInfo = document.getElementById("drowned_anchorman_vet_info")
const DrownedAnchormanChampPort = document.getElementById("drowned_anchorman_champ_port")
const DrownedAnchormanChampInfo = document.getElementById("drowned_anchorman_champ_info")

DrownedAnchormanAppPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    DrownedAnchormanAppInfo.style.display = 'block';
    DrownedAnchormanSprite.style.display = 'block';
})

DrownedAnchormanVetPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    DrownedAnchormanVetInfo.style.display = 'block';
    DrownedAnchormanSprite.style.display = 'block';
})

DrownedAnchormanChampPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    DrownedAnchormanChampInfo.style.display = 'block';
    DrownedAnchormanSprite.style.display = 'block';
})

//Collected Highwayman
const CollectedHighwaymanSprite = document.getElementById("collected_highwayman_sprite_container")
const CollectedHighwaymanAppPort = document.getElementById("collected_highwayman_app_port")
const CollectedHighwaymanAppInfo = document.getElementById("collected_highwayman_app_info")
const CollectedHighwaymanVetPort = document.getElementById("collected_highwayman_vet_port")
const CollectedHighwaymanVetInfo = document.getElementById("collected_highwayman_vet_info")
const CollectedHighwaymanChampPort = document.getElementById("collected_highwayman_champ_port")
const CollectedHighwaymanChampInfo = document.getElementById("collected_highwayman_champ_info")

CollectedHighwaymanAppPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CollectedHighwaymanAppInfo.style.display = 'block';
    CollectedHighwaymanSprite.style.display = 'block';
})

CollectedHighwaymanVetPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CollectedHighwaymanVetInfo.style.display = 'block';
    CollectedHighwaymanSprite.style.display = 'block';
})

CollectedHighwaymanChampPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CollectedHighwaymanChampInfo.style.display = 'block';
    CollectedHighwaymanSprite.style.display = 'block';
})


//Collected Man-at-Arms
const CollectedManAtArmsSprite = document.getElementById("collected_man_at_arms_sprite_container")
const CollectedManAtArmsAppPort = document.getElementById("collected_man_at_arms_app_port")
const CollectedManAtArmsAppInfo = document.getElementById("collected_man_at_arms_app_info")
const CollectedManAtArmsVetPort = document.getElementById("collected_man_at_arms_vet_port")
const CollectedManAtArmsVetInfo = document.getElementById("collected_man_at_arms_vet_info")
const CollectedManAtArmsChampPort = document.getElementById("collected_man_at_arms_champ_port")
const CollectedManAtArmsChampInfo = document.getElementById("collected_man_at_arms_champ_info")

CollectedManAtArmsAppPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CollectedManAtArmsAppInfo.style.display = 'block';
    CollectedManAtArmsSprite.style.display = 'block';
})

CollectedManAtArmsVetPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CollectedManAtArmsVetInfo.style.display = 'block';
    CollectedManAtArmsSprite.style.display = 'block';
})

CollectedManAtArmsChampPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CollectedManAtArmsChampInfo.style.display = 'block';
    CollectedManAtArmsSprite.style.display = 'block';
})


//Collected Vestal
const CollectedVestalSprite = document.getElementById("collected_vestal_sprite_container")
const CollectedVestalAppPort = document.getElementById("collected_vestal_app_port")
const CollectedVestalAppInfo = document.getElementById("collected_vestal_app_info")
const CollectedVestalVetPort = document.getElementById("collected_vestal_vet_port")
const CollectedVestalVetInfo = document.getElementById("collected_vestal_vet_info")
const CollectedVestalChampPort = document.getElementById("collected_vestal_champ_port")
const CollectedVestalChampInfo = document.getElementById("collected_vestal_champ_info")

CollectedVestalAppPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CollectedVestalAppInfo.style.display = 'block';
    CollectedVestalSprite.style.display = 'block';
})

CollectedVestalVetPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CollectedVestalVetInfo.style.display = 'block';
    CollectedVestalSprite.style.display = 'block';
})

CollectedVestalChampPort.addEventListener("click", function() {
    CloseAllMinionBoxes();
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    CollectedVestalChampInfo.style.display = 'block';
    CollectedVestalSprite.style.display = 'block';
})


//Shambler Tentacle

const ShamblerTentacleSprite = document.getElementById("shambler_tentacle_sprite_container")
const ShamblerTentacleAppPort = document.getElementById("shambler_tentacle_app_port")
const ShamblerTentacleAppInfo = document.getElementById("shambler_tentacle_app_info")
const ShamblerTentacleVetPort = document.getElementById("shambler_tentacle_vet_port")
const ShamblerTentacleVetInfo = document.getElementById("shambler_tentacle_vet_info")
const ShamblerTentacleChampPort = document.getElementById("shambler_tentacle_champ_port")
const ShamblerTentacleChampInfo = document.getElementById("shambler_tentacle_champ_info")
const ShamblerTentacleDarkestPort = document.getElementById("shambler_tentacle_darkest_port")
const ShamblerTentacleDarkestInfo = document.getElementById("shambler_tentacle_darkest_info")

ShamblerTentacleAppPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    ShamblerTentacleAppInfo.style.display = 'block';
    ShamblerTentacleSprite.style.display = 'block';
})

ShamblerTentacleVetPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    ShamblerTentacleVetInfo.style.display = 'block';
    ShamblerTentacleSprite.style.display = 'block';
})

ShamblerTentacleChampPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    ShamblerTentacleChampInfo.style.display = 'block';
    ShamblerTentacleSprite.style.display = 'block';
})

ShamblerTentacleDarkestPort.addEventListener("click", function() {
    PlayPageOpn();
    MinionSharedInfo.style.display = 'block';
    ShamblerTentacleDarkestInfo.style.display = 'block';
    ShamblerTentacleSprite.style.display = 'block';
})
