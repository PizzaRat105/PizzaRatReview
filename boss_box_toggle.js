//Content Close

const bossCloseBtns = document.getElementsByClassName("boss_close")
const minionCloseBtns = document.getElementsByClassName("minion_close")

const bossBoxHub = document.getElementById("boss_box_hub")
function CloseBossBoxHub() {bossBoxHub.style.display = 'none'}

function CloseAllMinionBoxes() {
    const AllMinionBoxes = document.getElementsByClassName("boss_minion_infobox")    
    const AllMinionSharedBoxes = document.getElementsByClassName("boss_minion_infobox_shared")
    const AllMinionSprites = document.getElementsByClassName("minion_sprite_main")

    for (const minionBox of AllMinionBoxes) {minionBox.style.display = "none"}
    for (const minionSharedBox of AllMinionSharedBoxes) {minionSharedBox.style.display = "none"}
    for (const minionBox of AllMinionSprites) {minionBox.style.display = "none"}
}


for (const bossCloseBtn of bossCloseBtns){
    bossCloseBtn.addEventListener("click", function() {
        PlayPageClose();
        CloseBossBoxHub();
        HideBackdrops();
    })
}

for (const minionCloseBtn of minionCloseBtns){
    minionCloseBtn.addEventListener("click", function() {
        PlayPageClose();
        CloseAllMinionBoxes();
    })
}

//Portrait Event Listeners

const vanillaBossNav = document.getElementById("base_boss_nav")
const dlcBossNav = document.getElementById("dlc_boss_nav")
const spoilerBossNav = document.getElementById("spoiler_boss_nav")


const VanillaBossBanner = document.getElementById("vanilla_boss_banner")
const DLCBossBanner = document.getElementById("dlc_boss_banner")
const SpoilerBossBanner = document.getElementById("spoiler_boss_banner")

VanillaBossBanner.addEventListener("click", function() {
    PlayPageOpn();
    CloseAllMinionBoxes();
    vanillaBossNav.style.display = 'flex'
    dlcBossNav.style.display = 'none'
    spoilerBossNav.style.display = 'none'
})

DLCBossBanner.addEventListener("click", function() {
    PlayPageOpn();
    CloseAllMinionBoxes();
    vanillaBossNav.style.display = 'none'
    dlcBossNav.style.display = 'flex'
    spoilerBossNav.style.display = 'none'
})

SpoilerBossBanner.addEventListener("click", function() {
    PlayPageOpn();
    CloseAllMinionBoxes();
    vanillaBossNav.style.display = 'none'
    dlcBossNav.style.display = 'none'
    spoilerBossNav.style.display = 'flex'
})

const bossPorts = document.getElementsByClassName("boss_port")
const fleshPorts = document.getElementsByClassName("flesh_port")

for (const bossPort of bossPorts) {
    bossPort.addEventListener("click", function() {
        PlayPageOpn();
        for (const allBossSharedContainer of allBossSharedContainers) {allBossSharedContainer.style.display = 'none';}
        for (const container of bossStrategyContainersArray) {container.style.display = 'none';}
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
        PlayBtnPress();
    })
}

//Assign Difficulty Toggle Sound
const bossDiffBtns = Array.from(document.querySelectorAll('.boss_diff_btn'));
for (const bossDiffBtn of bossDiffBtns){
    bossDiffBtn.addEventListener('click', function() {hideAllBossInfo();})}

const allBossInfo = document.querySelectorAll('[id$="_app_info"], [id$="_vet_info"], [id$="_champ_info"], [id$="_darkest_info"], [id$="_endless_info"]');
const allBossInfoArray = Array.from(allBossInfo);



const allMinionPorts = document.getElementsByClassName("minion_port_img")

for (const minionport of allMinionPorts){
    minionport.addEventListener('click', function() {PlayPageOpn(); CloseAllMinionBoxes();     MinionSharedInfo.style.display = 'block';})}

const allBossSharedContainers = document.querySelectorAll('[id$="_shared_container"]');
const allBossSharedArray = Array.from(allBossSharedContainers)



for (const bossDiffBtn of bossDiffBtns){
    bossDiffBtn.addEventListener("click", function() {
        PlayBtnPress();
        CloseAllMinionBoxes();
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

const bossStrategyContainers = document.querySelectorAll('[id$="boss_strategy_container"]');
const bossStrategyContainersArray = Array.from(bossStrategyContainers);

for (const bossLoreBtn of bossLoreBtns){
    bossLoreBtn.addEventListener("click", function() {
        PlayBtnPress();
        bossLoreTitle.style.display = 'block';
        bossStrategyTitle.style.display = 'none';

        for (const container of bossStrategyContainersArray) {container.style.display = 'none';}
        for (const container of loreContainersArray) {container.style.display = 'none';}

    })
}

for (const bossStrategyBtn of bossStrategyBtns){
    bossStrategyBtn.addEventListener("click", function() {
        PlayBtnPress();
        bossStrategyTitle.style.display = 'block';        
        bossLoreTitle.style.display = 'none';
        
        for (const container of loreContainersArray) {container.style.display = 'none';}
        for (const container of bossStrategyContainersArray) {container.style.display = 'none';}


    })
}


function attachBossClickListeners(bossid) {
    var BossPortrait = document.getElementById(`${bossid}_portrait`);
    var BossShared = document.getElementById(`${bossid}_shared_container`);

    var BossLoreBtn = document.getElementById(`${bossid}_lore_btn`);
    var BossStrategyBtn = document.getElementById(`${bossid}_strategy_btn`);

    var BossLore = document.getElementById(`${bossid}_lore_container`);
    var BossStrategy = document.getElementById(`${bossid}_boss_strategy_container`);

    var BossAppBtn = document.getElementById(`${bossid}_app_btn`);
    var BossAppInfo = document.getElementById(`${bossid}_app_info`);
    var BossVetBtn = document.getElementById(`${bossid}_vet_btn`);
    var BossVetInfo = document.getElementById(`${bossid}_vet_info`);
    var BossChampBtn = document.getElementById(`${bossid}_champ_btn`);
    var BossChampInfo = document.getElementById(`${bossid}_champ_info`);

   BossLoreBtn.addEventListener("click", function() {BossLore.style.display = "block"})
   BossStrategyBtn.addEventListener("click", function() {BossStrategy.style.display = "block"})


    BossPortrait.addEventListener("click", function() {
        BossShared.style.display = "block";
        BossAppInfo.style.display = "block";
        BossLore.style.display = "block";
    })

    BossAppBtn.addEventListener("click", function() {BossAppInfo.style.display = "block"})
    BossVetBtn.addEventListener("click", function() {BossVetInfo.style.display = "block"})
    BossChampBtn.addEventListener("click", function() {BossChampInfo.style.display = "block"})
  }
attachBossClickListeners("necromancer");
attachBossClickListeners("prophet");
attachBossClickListeners("hag");
attachBossClickListeners("brigand_pounder");
attachBossClickListeners("swine_prince");
attachBossClickListeners("siren");
attachBossClickListeners("drowned_crew");
attachBossClickListeners("collector");
attachBossClickListeners("fanatic");
attachBossClickListeners("crocodilian");
attachBossClickListeners("fanatic");
attachBossClickListeners("thing_from_the_stars");
attachBossClickListeners("shrieker");
attachBossClickListeners("shambler");



function attachOnlyDarkestBossClickListeners(bossid) {
    var BossPortrait = document.getElementById(`${bossid}_portrait`);
    var BossShared = document.getElementById(`${bossid}_shared_container`);

    var BossLoreBtn = document.getElementById(`${bossid}_lore_btn`);
    var BossStrategyBtn = document.getElementById(`${bossid}_strategy_btn`);

    var BossLore = document.getElementById(`${bossid}_lore_container`);
    var BossStrategy = document.getElementById(`${bossid}_boss_strategy_container`);

    var BossDarkestBtn = document.getElementById(`${bossid}_darkest_btn`);
    var BossDarkestInfo = document.getElementById(`${bossid}_darkest_info`);

   BossLoreBtn.addEventListener("click", function() {BossLore.style.display = "block"})
   BossStrategyBtn.addEventListener("click", function() {BossStrategy.style.display = "block"})


    BossPortrait.addEventListener("click", function() {
        BossShared.style.display = "block";
        BossDarkestInfo.style.display = "block";
        BossLore.style.display = "block";
    })

    BossDarkestBtn.addEventListener("click", function() {BossDarkestInfo.style.display = "block"})
  }

  attachOnlyDarkestBossClickListeners("brigand_vvulf")

  attachOnlyDarkestBossClickListeners("shuffling_horror")
  attachOnlyDarkestBossClickListeners("templar_impaler")
  attachOnlyDarkestBossClickListeners("templar_warlord")
  attachOnlyDarkestBossClickListeners("mammoth_cyst")
  attachOnlyDarkestBossClickListeners("ancestor")
  attachOnlyDarkestBossClickListeners("ancestor_big")
  attachOnlyDarkestBossClickListeners("gestating_heart")
  attachOnlyDarkestBossClickListeners("heart_of_darkness")


  
function attachLoreStrategyClickListeners(bossid) {
    var BossPortrait = document.getElementById(`${bossid}_portrait`);
    var BossShared = document.getElementById(`${bossid}_shared_container`);

    var BossLoreBtn = document.getElementById(`${bossid}_lore_btn`);
    var BossStrategyBtn = document.getElementById(`${bossid}_strategy_btn`);

    var BossLore = document.getElementById(`${bossid}_lore_container`);
    var BossStrategy = document.getElementById(`${bossid}_boss_strategy_container`);


   BossLoreBtn.addEventListener("click", function() {BossLore.style.display = "block"})
   BossStrategyBtn.addEventListener("click", function() {BossStrategy.style.display = "block"})


    BossPortrait.addEventListener("click", function() {
        BossShared.style.display = "block";
        BossLore.style.display = "block";
    })

  }

  attachLoreStrategyClickListeners("baron");
  attachLoreStrategyClickListeners("viscount");
  attachLoreStrategyClickListeners("garden_guardian");
  attachLoreStrategyClickListeners("miller");
  attachLoreStrategyClickListeners("fracture");
  attachLoreStrategyClickListeners("the_sleeper");
  attachLoreStrategyClickListeners("flesh");
  attachLoreStrategyClickListeners("countess");



  const RuinsBossButton = document.getElementById("ruins3");
const WealdBossButton = document.getElementById("weald3");
const WarrensBossButton = document.getElementById("warrens3");
const CoveBossButton = document.getElementById("cove3");
const SharedBossButton = document.getElementById("shared3");
const VvulfButton = document.getElementById("shared4");
const CrimsonCourtBossButton = document.getElementById("crimson3");
const MadnessBossButton = document.getElementById("madness3");
const GauntletBossButton = document.getElementById("gauntlet1b");


const BrigandVvulfPortrait = document.getElementById("brigand_vvulf_portrait")
const BrigandVvulfShared = document.getElementById("brigand_vvulf_shared_container")
const BrigandVvulfLore = document.getElementById("brigand_vvulf_lore_container")
const BrigandVvulfDarkestInfo = document.getElementById("brigand_vvulf_darkest_info")

const ShufflingHorrorShared = document.getElementById("shuffling_horror_shared_container")
const ShufflingHorrorLore = document.getElementById("shuffling_horror_lore_container")
const ShufflingHorrorDarkestInfo = document.getElementById("shuffling_horror_darkest_info")


//Croc 
const CrocodilianPortrait = document.getElementById("crocodilian_portrait");
const CrocodilianShared = document.getElementById("crocodilian_shared_container")
const CrocodilianLore = document.getElementById("crocodilian_lore_container")
const CrocodilianAppInfo = document.getElementById("crocodilian_app_info")



const AllMissionButtons = document.getElementsByClassName("mission_btn")
for (const MissionBtn of AllMissionButtons) {
    MissionBtn.addEventListener("click", function() {
        for (const allBossSharedContainer of allBossSharedContainers) {allBossSharedContainer.style.display = 'none';}
        for (const container of bossStrategyContainersArray) {container.style.display = 'none';}
        for (const container of loreContainersArray) {container.style.display = 'none';}
        CloseAllMinionBoxes();
        hideAllBossInfo()
        bossLoreTitle.style.display = 'block';
        bossStrategyTitle.style.display = 'none';

        vanillaBossNav.style.display = 'none'
        dlcBossNav.style.display = 'none'
        spoilerBossNav.style.display = 'none'    
        

        const clickedButtonId = MissionBtn.id;

        if (clickedButtonId === "vvulf_check") {        
            vanillaBossNav.style.display = 'flex'
            BrigandVvulfShared.style.display = 'block';
            BrigandVvulfLore.style.display = 'block';
            BrigandVvulfDarkestInfo.style.display = 'block';
        }

        if (clickedButtonId === "necro_check") {        
            vanillaBossNav.style.display = 'flex'
            NecromancerShared.style.display = 'block';
            NecromancerLore.style.display = 'block';
            NecromancerAppInfo.style.display = 'block';
            BoneDefenderAppPort.style.display = 'none';
            BoneCaptainAppPort.style.display = 'none';
        }

        if (clickedButtonId === "hag_check") {        
            vanillaBossNav.style.display = 'flex'
            HagShared.style.display = 'block';
            HagLore.style.display = 'block';
            HagAppInfo.style.display = 'block';
        }

        if (clickedButtonId === "prince_check") {        
            vanillaBossNav.style.display = 'flex'
            SwinePrinceShared.style.display = 'block';
            SwinePrinceLore.style.display = 'block';
            SwinePrinceAppInfo.style.display = 'block';
        }

        if (clickedButtonId === "siren_check") {        
            vanillaBossNav.style.display = 'flex'
            SirenShared.style.display = 'block';
            SirenLore.style.display = 'block';
            SirenAppInfo.style.display = 'block';
        }

        if (clickedButtonId === "collector_check") {        
            vanillaBossNav.style.display = 'flex'
            CollectorShared.style.display = 'block';
            CollectorLore.style.display = 'block';
            CollectorAppInfo.style.display = 'block';
        }

        if (clickedButtonId === "croc_check") {        
            dlcBossNav.style.display = 'flex'
            CrocodilianShared.style.display = 'block';
            CrocodilianLore.style.display = 'block';
            CrocodilianAppInfo.style.display = 'block';
        }

        if (clickedButtonId === "thing_check") {        
            dlcBossNav.style.display = 'flex'
            ThingFromTheStarsShared.style.display = 'block';
            ThingFromTheStarsLore.style.display = 'block';
            ThingFromTheStarsAppInfo.style.display = 'block';
        }

        if (clickedButtonId === "spoiler_boss_check") {        
            spoilerBossNav.style.display = 'flex'
            ShufflingHorrorShared.style.display = 'block';
            ShufflingHorrorLore.style.display = 'block';
            ShufflingHorrorDarkestInfo.style.display = 'block';
        }
    })

}




//Crimson Court Boss Btn


//Baron
const BaronPortrait = document.getElementById("baron_portrait");
const BaronVetBtn = document.getElementById("baron_vet_btn")
const BaronVetInfo = document.getElementById("baron_vet_info")

BaronVetBtn.addEventListener('click', function() { BaronVetInfo.style.display = 'block';})
BaronPortrait.addEventListener('click', function() {BaronVetInfo.style.display = 'block';}) 

const ViscountPortrait = document.getElementById("viscount_portrait");
const ViscountChampBtn = document.getElementById("viscount_champ_btn")
const ViscountChampInfo = document.getElementById("viscount_champ_info")

ViscountPortrait.addEventListener('click', function() {ViscountChampInfo.style.display = 'block';}) 
ViscountChampBtn.addEventListener('click', function() {   ViscountChampInfo.style.display = 'block';})

const CountessPortrait = document.getElementById("countess_portrait");
const CountessShared = document.getElementById("countess_shared_container")

const CountessThirstyBtn = document.getElementById("countess_vet_btn")
const CountessFlushedBtn = document.getElementById("countess_champ_btn")
const CountessBloodlustBtn = document.getElementById("countess_darkest_btn")

const CountessThirstyInfo = document.getElementById("countess_darkest_info")
const CountessFlushedInfo = document.getElementById("countess_flushed_darkest_info")
const CountessBloodlustInfo = document.getElementById("countess_bloodlust_darkest_info")

const CountessThirstySprite = document.getElementById("countess_thirsty_spriteimg")
const CountessBloodlustSprite = document.getElementById("countess_bloodlust_spriteimg")


CountessPortrait.addEventListener('click', function() {
    CountessThirstyInfo.style.display = 'block'
    CountessBloodlustSprite.style.display = 'none';
    CountessThirstySprite.style.display = 'block';
    CountessShared.style.display = 'block'
}) 


CountessThirstyBtn.addEventListener('click', function() {   
    CountessBloodlustSprite.style.display = 'none';
    CountessThirstySprite.style.display = 'block';
    CountessThirstyInfo.style.display = 'block';
})

CountessFlushedBtn.addEventListener('click', function() {   
    CountessBloodlustSprite.style.display = 'none';
    CountessThirstySprite.style.display = 'block';    
    CountessFlushedInfo.style.display = 'block';
})

CountessBloodlustBtn.addEventListener('click', function() {   
    CountessThirstySprite.style.display = 'none';
    CountessBloodlustSprite.style.display = 'block';    
    CountessBloodlustInfo.style.display = 'block';
})

const GardenGuardianPortrait = document.getElementById("garden_guardian_portrait");
const GardenGuardianChampBtn = document.getElementById("garden_guardian_champ_btn")
const GardenGuardianChampInfo = document.getElementById("garden_guardian_champ_info")


GardenGuardianChampBtn.addEventListener('click', function() { GardenGuardianChampInfo.style.display = 'block';})
GardenGuardianPortrait.addEventListener('click', function() {GardenGuardianChampInfo.style.display = 'block';}) 


const ThingFromTheStarsPortrait = document.getElementById("thing_from_the_stars_portrait");
const ThingFromTheStarsShared = document.getElementById("thing_from_the_stars_shared_container")
const ThingFromTheStarsLoreBtn = document.getElementById("thing_from_the_stars_lore_btn")
const ThingFromTheStarsStrategyBtn = document.getElementById("thing_from_the_stars_strategy_btn")
const ThingFromTheStarsLore = document.getElementById("thing_from_the_stars_lore_container")
const ThingFromTheStarsStrategy = document.getElementById("thing_from_the_stars_strategy_container")

const ThingFromTheStarsAppBtn = document.getElementById("thing_from_the_stars_app_btn")
const ThingFromTheStarsAppInfo = document.getElementById("thing_from_the_stars_app_info")

//Color of Madness Boss Btn

const MillerPortrait = document.getElementById("miller_portrait");
const MillerVetBtn = document.getElementById("miller_vet_btn")
const MillerVetInfo = document.getElementById("miller_vet_info")
const MillerEndlessBtn = document.getElementById("miller_endless_btn")
const MillerEndlessInfo = document.getElementById("miller_endless_info")

MillerPortrait.addEventListener('click', function() {MillerVetInfo.style.display = 'block';}) 
MillerVetBtn.addEventListener('click', function() {MillerVetInfo.style.display = 'block';})
MillerEndlessBtn.addEventListener('click', function() {MillerEndlessInfo.style.display = 'block';})

const FracturePortrait = document.getElementById("fracture_portrait");
const FractureEndlessBtn = document.getElementById("fracture_endless_btn")
const FractureEndlessInfo = document.getElementById("fracture_endless_info")

FracturePortrait.addEventListener('click', function() {FractureEndlessInfo.style.display = 'block';}) 
FractureEndlessBtn.addEventListener('click', function() {   FractureEndlessInfo.style.display = 'block';})

const TheSleeperPortrait = document.getElementById("the_sleeper_portrait");
const TheSleeperEndlessBtn = document.getElementById("the_sleeper_endless_btn")
const TheSleeperEndlessInfo = document.getElementById("the_sleeper_endless_info")

TheSleeperPortrait.addEventListener('click', function() {TheSleeperEndlessInfo.style.display = 'block';}) 
TheSleeperEndlessBtn.addEventListener('click', function() {   TheSleeperEndlessInfo.style.display = 'block';})


//Necromancer

const NecromancerLoreBtn = document.getElementById("necromancer_lore_btn")
const NecromancerStrategyBtn = document.getElementById("necromancer_strategy_btn")
const NecromancerLore = document.getElementById("necromancer_lore_container")
const NecromancerStrategy = document.getElementById("necromancer_strategy_container")


const NecromancerPortrait = document.getElementById("necromancer_portrait");
const NecromancerShared = document.getElementById("necromancer_shared_container")
const NecromancerAppBtn = document.getElementById("necromancer_app_btn")
const NecromancerAppInfo = document.getElementById("necromancer_app_info")
const NecromancerVetBtn = document.getElementById("necromancer_vet_btn")
const NecromancerChampBtn = document.getElementById("necromancer_champ_btn")

NecromancerAppBtn.addEventListener('click', function() 
{
    BoneDefenderAppPort.style.display = 'none';
    BoneCaptainAppPort.style.display = 'none';

}) 

NecromancerPortrait.addEventListener('click', function() 
{
    BoneDefenderAppPort.style.display = 'none';
    BoneCaptainAppPort.style.display = 'none';

}) 

NecromancerVetBtn.addEventListener('click', function() 
{
    BoneCaptainVetPort.style.display = 'none';

}) 

NecromancerChampBtn.addEventListener('click', function() 
{
    BoneRabbleChampPort.style.display = 'none';

}) 

//Weald Boss Btn

//Hag

const HagLoreBtn = document.getElementById("hag_lore_btn")
const HagStrategyBtn = document.getElementById("hag_strategy_btn")
const HagLore = document.getElementById("hag_lore_container")
const HagStrategy = document.getElementById("hag_strategy_container")

const HagPortrait = document.getElementById("hag_portrait");
const HagShared = document.getElementById("hag_shared_container")
const HagAppBtn = document.getElementById("hag_app_btn")
const HagAppInfo = document.getElementById("hag_app_info")

const BrigandPounderAppBtn = document.getElementById("brigand_pounder_app_btn")
const BrigandPounderPortrait = document.getElementById("brigand_pounder_portrait")

BrigandPounderAppBtn.addEventListener('click', function() 
{
    BrigandBloodletterAppPort.style.display = 'none';
}) 
BrigandPounderPortrait.addEventListener('click', function() 
{
    BrigandBloodletterAppPort.style.display = 'none';
}) 
//Shrieker

const ShriekerEndlessBtn = document.getElementById("shrieker_endless_btn")
const ShriekerEndlessInfo = document.getElementById("shrieker_endless_info")
ShriekerEndlessBtn.addEventListener('click', function() {ShriekerEndlessInfo.style.display = 'block'})


//Swine Prince

const SwinePrinceLoreBtn = document.getElementById("swine_prince_lore_btn")
const SwinePrinceStrategyBtn = document.getElementById("swine_prince_strategy_btn")
const SwinePrinceLore = document.getElementById("swine_prince_lore_container")
const SwinePrinceStrategy = document.getElementById("swine_prince_strategy_container")

const SwinePrincePortrait = document.getElementById("swine_prince_portrait");
const SwinePrinceShared = document.getElementById("swine_prince_shared_container")
const SwinePrinceAppBtn = document.getElementById("swine_prince_app_btn")
const SwinePrinceAppInfo = document.getElementById("swine_prince_app_info")


//Flesh

const FleshPortrait = document.getElementById("flesh_portrait");
const FleshShared = document.getElementById("flesh_shared_container")
const FleshAppBtn = document.getElementById("flesh_app_btn")
const FleshAppInfo = document.getElementById("flesh_app_info")
const FleshVetBtn = document.getElementById("flesh_vet_btn")
const FleshVetInfo = document.getElementById("flesh_vet_info")
const FleshChampBtn = document.getElementById("flesh_champ_btn")
const FleshChampInfo = document.getElementById("flesh_champ_info")


FleshPortrait.addEventListener('click', function() {
    FleshAppInfo.style.display = 'block';
    FleshHeadAppStats.style.display = 'block'
}) 

FleshAppBtn.addEventListener('click', function() {FleshAppInfo.style.display = 'block';})
FleshVetBtn.addEventListener('click', function() {FleshVetInfo.style.display = 'block';})
FleshChampBtn.addEventListener('click', function() {FleshChampInfo.style.display = 'block';})


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

//Siren

const SirenLoreBtn = document.getElementById("siren_lore_btn")
const SirenStrategyBtn = document.getElementById("siren_strategy_btn")
const SirenLore = document.getElementById("siren_lore_container")
const SirenStrategy = document.getElementById("siren_strategy_container")

const SirenPortrait = document.getElementById("siren_portrait");
const SirenShared = document.getElementById("siren_shared_container")
const SirenAppBtn = document.getElementById("siren_app_btn")
const SirenAppInfo = document.getElementById("siren_app_info")


//Shared Boss Btn

//Collector

const CollectorLoreBtn = document.getElementById("collector_lore_btn")
const CollectorStrategyBtn = document.getElementById("collector_strategy_btn")
const CollectorLore = document.getElementById("collector_lore_container")
const CollectorStrategy = document.getElementById("collector_strategy_container")

const CollectorPortrait = document.getElementById("collector_portrait");
const CollectorShared = document.getElementById("collector_shared_container")
const CollectorAppBtn = document.getElementById("collector_app_btn")
const CollectorAppInfo = document.getElementById("collector_app_info")

//Shambler

const ShamblerEndlessBtn = document.getElementById("shambler_endless_btn")
const ShamblerEndlessInfo = document.getElementById("shambler_endless_info")

ShamblerEndlessBtn.addEventListener('click', function() {ShamblerEndlessInfo.style.display = 'block'})

const MinionSharedInfo = document.getElementById("minion_shared_info")

//Bone Soldier
const BoneSoldierMinionSprite = document.getElementById("bone_soldier_sprite_container")
const BoneSoldierAppPort = document.getElementById("bone_soldier_app_port")
const BoneSoldierAppInfo = document.getElementById("bone_soldier_app_info")
const BoneSoldierVetPort = document.getElementById("bone_soldier_vet_port")
const BoneSoldierVetInfo = document.getElementById("bone_soldier_vet_info")
const BoneSoldierChampPort = document.getElementById("bone_soldier_champ_port")
const BoneSoldierChampInfo = document.getElementById("bone_soldier_champ_info")


BoneSoldierAppPort.addEventListener("click", function() {
    BoneSoldierAppInfo.style.display = 'block';
    BoneSoldierMinionSprite.style.display = 'block';
})

BoneSoldierVetPort.addEventListener("click", function() {
    BoneSoldierVetInfo.style.display = 'block';
    BoneSoldierMinionSprite.style.display = 'block';
})

BoneSoldierChampPort.addEventListener("click", function() {
    BoneSoldierChampInfo.style.display = 'block';
    BoneSoldierMinionSprite.style.display = 'block';
})

//Bone Rabble

const BoneRabbleMinionSprite = document.getElementById("bone_rabble_sprite_container")
const BoneRabbleAppPort = document.getElementById("bone_rabble_app_port")
const BoneRabbleAppInfo = document.getElementById("bone_rabble_app_info")
const BoneRabbleVetPort = document.getElementById("bone_rabble_vet_port")
const BoneRabbleVetInfo = document.getElementById("bone_rabble_vet_info")
const BoneRabbleChampPort = document.getElementById("bone_rabble_champ_port")

BoneRabbleAppPort.addEventListener("click", function() {
    BoneRabbleAppInfo.style.display = 'block';
    BoneRabbleMinionSprite.style.display = 'block';
})

BoneRabbleVetPort.addEventListener("click", function() {
    BoneRabbleVetInfo.style.display = 'block';
    BoneRabbleMinionSprite.style.display = 'block';
})

//Bone Defender

const BoneDefenderMinionSprite = document.getElementById("bone_defender_sprite_container")
const BoneDefenderAppPort = document.getElementById("bone_defender_app_port")
const BoneDefenderVetPort = document.getElementById("bone_defender_vet_port")
const BoneDefenderVetInfo = document.getElementById("bone_defender_vet_info")
const BoneDefenderChampPort = document.getElementById("bone_defender_champ_port")
const BoneDefenderChampInfo = document.getElementById("bone_defender_champ_info")

BoneDefenderVetPort.addEventListener("click", function() {
    BoneDefenderVetInfo.style.display = 'block';
    BoneDefenderMinionSprite.style.display = 'block';
})

BoneDefenderChampPort.addEventListener("click", function() {
    BoneDefenderChampInfo.style.display = 'block';
    BoneDefenderMinionSprite.style.display = 'block';
})


//Bone Captain

const BoneCaptainMinionSprite = document.getElementById("bone_captain_sprite_container")
const BoneCaptainAppPort = document.getElementById("bone_captain_app_port")
const BoneCaptainVetPort = document.getElementById("bone_captain_vet_port")
const BoneCaptainChampPort = document.getElementById("bone_captain_champ_port")
const BoneCaptainChampInfo = document.getElementById("bone_captain_champ_info")

BoneCaptainChampPort.addEventListener("click", function() {
    BoneCaptainChampInfo.style.display = 'block';
    BoneCaptainMinionSprite.style.display = 'block';
})

//Small Pew
const SmallPewSprite = document.getElementById("small_pew_sprite_container")
const SmallPewAppPort = document.getElementById("small_pew_app_port")
const SmallPewAppInfo = document.getElementById("small_pew_app_info")
const SmallPewVetPort = document.getElementById("small_pew_vet_port")
const SmallPewVetInfo = document.getElementById("small_pew_vet_info")
const SmallPewChampPort = document.getElementById("small_pew_champ_port")
const SmallPewChampInfo = document.getElementById("small_pew_champ_info")

SmallPewAppPort.addEventListener("click", function() {
    SmallPewAppInfo.style.display = 'block';
    SmallPewSprite.style.display = 'block';
})

SmallPewVetPort.addEventListener("click", function() {
    SmallPewVetInfo.style.display = 'block';
    SmallPewSprite.style.display = 'block';
})

SmallPewChampPort.addEventListener("click", function() {
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
    MediumPewAppInfo.style.display = 'block';
    MediumPewSprite.style.display = 'block';
})

MediumPewVetPort.addEventListener("click", function() {
    MediumPewVetInfo.style.display = 'block';
    MediumPewSprite.style.display = 'block';
})

MediumPewChampPort.addEventListener("click", function() {
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
    LargePewAppInfo.style.display = 'block';
    LargePewSprite.style.display = 'block';
})

LargePewVetPort.addEventListener("click", function() {
    LargePewVetInfo.style.display = 'block';
    LargePewSprite.style.display = 'block';
})

LargePewChampPort.addEventListener("click", function() {
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
    CauldronEmptyAppInfo.style.display = 'block';
    CauldronEmptySprite.style.display = 'block';
})

CauldronEmptyVetPort.addEventListener("click", function() {
    CauldronEmptyVetInfo.style.display = 'block';
    CauldronEmptySprite.style.display = 'block';
})

CauldronEmptyChampPort.addEventListener("click", function() {
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
    CauldronFullAppInfo.style.display = 'block';
    CauldronFullSprite.style.display = 'block';
})

CauldronFullVetPort.addEventListener("click", function() {
    CauldronFullVetInfo.style.display = 'block';
    CauldronFullSprite.style.display = 'block';
})

CauldronFullChampPort.addEventListener("click", function() {
    CauldronFullChampInfo.style.display = 'block';
    CauldronFullSprite.style.display = 'block';
})

//Brigand Cutthroat
const BrigandCutthroatMinionSprite = document.getElementById("brigand_cutthroat_sprite_container")
const BrigandCutthroatAppPort = document.getElementById("brigand_cutthroat_app_port")
const BrigandCutthroatAppInfo = document.getElementById("brigand_cutthroat_app_info")
const BrigandCutthroatVetPort = document.getElementById("brigand_cutthroat_vet_port")
const BrigandCutthroatVetInfo = document.getElementById("brigand_cutthroat_vet_info")
const BrigandCutthroatChampPort = document.getElementById("brigand_cutthroat_champ_port")
const BrigandCutthroatChampInfo = document.getElementById("brigand_cutthroat_champ_info")


BrigandCutthroatAppPort.addEventListener("click", function() {
    BrigandCutthroatAppInfo.style.display = 'block';
    BrigandCutthroatMinionSprite.style.display = 'block';
})

BrigandCutthroatVetPort.addEventListener("click", function() {
    BrigandCutthroatVetInfo.style.display = 'block';
    BrigandCutthroatMinionSprite.style.display = 'block';
})

BrigandCutthroatChampPort.addEventListener("click", function() {
    BrigandCutthroatChampInfo.style.display = 'block';
    BrigandCutthroatMinionSprite.style.display = 'block';
})

//Brigand Fusilier

const BrigandFusilierMinionSprite = document.getElementById("brigand_fusilier_sprite_container")
const BrigandFusilierAppPort = document.getElementById("brigand_fusilier_app_port")
const BrigandFusilierAppInfo = document.getElementById("brigand_fusilier_app_info")
const BrigandFusilierVetPort = document.getElementById("brigand_fusilier_vet_port")
const BrigandFusilierVetInfo = document.getElementById("brigand_fusilier_vet_info")
const BrigandFusilierChampPort = document.getElementById("brigand_fusilier_champ_port")
const BrigandFusilierChampInfo = document.getElementById("brigand_fusilier_champ_info")

BrigandFusilierAppPort.addEventListener("click", function() {
    BrigandFusilierAppInfo.style.display = 'block';
    BrigandFusilierMinionSprite.style.display = 'block';
})

BrigandFusilierVetPort.addEventListener("click", function() {
    BrigandFusilierVetInfo.style.display = 'block';
    BrigandFusilierMinionSprite.style.display = 'block';
})

BrigandFusilierChampPort.addEventListener("click", function() {
    BrigandFusilierChampInfo.style.display = 'block';
    BrigandFusilierMinionSprite.style.display = 'block';
})

//Brigand Bloodletter

const BrigandBloodletterMinionSprite = document.getElementById("brigand_bloodletter_sprite_container")
const BrigandBloodletterVetPort = document.getElementById("brigand_bloodletter_vet_port")
const BrigandBloodletterVetInfo = document.getElementById("brigand_bloodletter_vet_info")
const BrigandBloodletterChampPort = document.getElementById("brigand_bloodletter_champ_port")
const BrigandBloodletterChampInfo = document.getElementById("brigand_bloodletter_champ_info")
const BrigandBloodletterAppPort = document.getElementById("brigand_bloodletter_app_port")

BrigandBloodletterVetPort.addEventListener("click", function() {
    BrigandBloodletterVetInfo.style.display = 'block';
    BrigandBloodletterMinionSprite.style.display = 'block';
})

BrigandBloodletterChampPort.addEventListener("click", function() {
    BrigandBloodletterChampInfo.style.display = 'block';
    BrigandBloodletterMinionSprite.style.display = 'block';
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
    BrigandMatchmanAppInfo.style.display = 'block';
    BrigandMatchmanSprite.style.display = 'block';
})

BrigandMatchmanVetPort.addEventListener("click", function() {
    BrigandMatchmanVetInfo.style.display = 'block';
    BrigandMatchmanSprite.style.display = 'block';
})

BrigandMatchmanChampPort.addEventListener("click", function() {
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
const ShriekerNestEndlessPort = document.getElementById("shrieker's_nest_endless_port")

ShriekerNestAppPort.addEventListener("click", function() {
    ShriekerNestAppInfo.style.display = 'block';
    ShriekerNestSprite.style.display = 'block';
})

ShriekerNestVetPort.addEventListener("click", function() {
    ShriekerNestVetInfo.style.display = 'block';
    ShriekerNestSprite.style.display = 'block';
})

ShriekerNestChampPort.addEventListener("click", function() {
    ShriekerNestChampInfo.style.display = 'block';
    ShriekerNestSprite.style.display = 'block';
})

ShriekerNestEndlessPort.addEventListener("click", function() {
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
    WilburAppInfo.style.display = 'block';
    WilburSprite.style.display = 'block';
})

WilburVetPort.addEventListener("click", function() {
    WilburVetInfo.style.display = 'block';
    WilburSprite.style.display = 'block';
})

WilburChampPort.addEventListener("click", function() {
    WilburChampInfo.style.display = 'block';
    WilburSprite.style.display = 'block';
})

//Deep Stinger
const DeepStingerMinionSprite = document.getElementById("deep_stinger_sprite_container")
const DeepStingerAppPort = document.getElementById("deep_stinger_app_port")
const DeepStingerAppInfo = document.getElementById("deep_stinger_app_info")
const DeepStingerVetPort = document.getElementById("deep_stinger_vet_port")
const DeepStingerVetInfo = document.getElementById("deep_stinger_vet_info")
const DeepStingerChampPort = document.getElementById("deep_stinger_champ_port")
const DeepStingerChampInfo = document.getElementById("deep_stinger_champ_info")


DeepStingerAppPort.addEventListener("click", function() {
    DeepStingerAppInfo.style.display = 'block';
    DeepStingerMinionSprite.style.display = 'block';
})

DeepStingerVetPort.addEventListener("click", function() {
    DeepStingerVetInfo.style.display = 'block';
    DeepStingerMinionSprite.style.display = 'block';
})

DeepStingerChampPort.addEventListener("click", function() {
    DeepStingerChampInfo.style.display = 'block';
    DeepStingerMinionSprite.style.display = 'block';
})


//Pelagic Grouper
const PelagicGrouperMinionSprite = document.getElementById("pelagic_grouper_sprite_container")
const PelagicGrouperAppPort = document.getElementById("pelagic_grouper_app_port")
const PelagicGrouperAppInfo = document.getElementById("pelagic_grouper_app_info")
const PelagicGrouperVetPort = document.getElementById("pelagic_grouper_vet_port")
const PelagicGrouperVetInfo = document.getElementById("pelagic_grouper_vet_info")
const PelagicGrouperChampPort = document.getElementById("pelagic_grouper_champ_port")
const PelagicGrouperChampInfo = document.getElementById("pelagic_grouper_champ_info")


PelagicGrouperAppPort.addEventListener("click", function() {
    PelagicGrouperAppInfo.style.display = 'block';
    PelagicGrouperMinionSprite.style.display = 'block';
})

PelagicGrouperVetPort.addEventListener("click", function() {
    PelagicGrouperVetInfo.style.display = 'block';
    PelagicGrouperMinionSprite.style.display = 'block';
})

PelagicGrouperChampPort.addEventListener("click", function() {
    PelagicGrouperChampInfo.style.display = 'block';
    PelagicGrouperMinionSprite.style.display = 'block';
})

//Pelagic Guardian

const PelagicGuardianMinionSprite = document.getElementById("pelagic_guardian_sprite_container")
const PelagicGuardianAppPort = document.getElementById("pelagic_guardian_app_port")
const PelagicGuardianAppInfo = document.getElementById("pelagic_guardian_app_info")
const PelagicGuardianVetPort = document.getElementById("pelagic_guardian_vet_port")
const PelagicGuardianVetInfo = document.getElementById("pelagic_guardian_vet_info")
const PelagicGuardianChampPort = document.getElementById("pelagic_guardian_champ_port")
const PelagicGuardianChampInfo = document.getElementById("pelagic_guardian_champ_info")


PelagicGuardianAppPort.addEventListener("click", function() {
    PelagicGuardianAppInfo.style.display = 'block';
    PelagicGuardianMinionSprite.style.display = 'block';
})

PelagicGuardianVetPort.addEventListener("click", function() {
    PelagicGuardianVetInfo.style.display = 'block';
    PelagicGuardianMinionSprite.style.display = 'block';
})

PelagicGuardianChampPort.addEventListener("click", function() {
    PelagicGuardianChampInfo.style.display = 'block';
    PelagicGuardianMinionSprite.style.display = 'block';
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
    DrownedAnchormanAppInfo.style.display = 'block';
    DrownedAnchormanSprite.style.display = 'block';
})

DrownedAnchormanVetPort.addEventListener("click", function() {
    DrownedAnchormanVetInfo.style.display = 'block';
    DrownedAnchormanSprite.style.display = 'block';
})

DrownedAnchormanChampPort.addEventListener("click", function() {
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
    CollectedHighwaymanAppInfo.style.display = 'block';
    CollectedHighwaymanSprite.style.display = 'block';
})

CollectedHighwaymanVetPort.addEventListener("click", function() {
    CollectedHighwaymanVetInfo.style.display = 'block';
    CollectedHighwaymanSprite.style.display = 'block';
})

CollectedHighwaymanChampPort.addEventListener("click", function() {
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
    CollectedManAtArmsAppInfo.style.display = 'block';
    CollectedManAtArmsSprite.style.display = 'block';
})

CollectedManAtArmsVetPort.addEventListener("click", function() {
    CollectedManAtArmsVetInfo.style.display = 'block';
    CollectedManAtArmsSprite.style.display = 'block';
})

CollectedManAtArmsChampPort.addEventListener("click", function() {
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
    CollectedVestalAppInfo.style.display = 'block';
    CollectedVestalSprite.style.display = 'block';
})

CollectedVestalVetPort.addEventListener("click", function() {
    CollectedVestalVetInfo.style.display = 'block';
    CollectedVestalSprite.style.display = 'block';
})

CollectedVestalChampPort.addEventListener("click", function() {
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
const ShamblerTentacleEndlessPort = document.getElementById("shambler_tentacle_endless_port")
const ShamblerTentacleEndlessInfo = document.getElementById("shambler_tentacle_endless_info")

ShamblerTentacleAppPort.addEventListener("click", function() {
    ShamblerTentacleAppInfo.style.display = 'block';
    ShamblerTentacleSprite.style.display = 'block';
})

ShamblerTentacleVetPort.addEventListener("click", function() {
    ShamblerTentacleVetInfo.style.display = 'block';
    ShamblerTentacleSprite.style.display = 'block';
})

ShamblerTentacleChampPort.addEventListener("click", function() {
    ShamblerTentacleChampInfo.style.display = 'block';
    ShamblerTentacleSprite.style.display = 'block';
})

ShamblerTentacleEndlessPort.addEventListener("click", function() {
    ShamblerTentacleEndlessInfo.style.display = 'block';
    ShamblerTentacleSprite.style.display = 'block';
})

//Bulrush

const BulrushSprite = document.getElementById("bulrush_sprite_container")
const BulrushAppPort = document.getElementById("bulrush_app_port")
const BulrushAppInfo = document.getElementById("bulrush_app_info")
const BulrushVetPort = document.getElementById("bulrush_vet_port")
const BulrushVetInfo = document.getElementById("bulrush_vet_info")
const BulrushChampPort = document.getElementById("bulrush_champ_port")
const BulrushChampInfo = document.getElementById("bulrush_champ_info")

BulrushAppPort.addEventListener("click", function() {
    BulrushAppInfo.style.display = 'block';
    BulrushSprite.style.display = 'block';
})

BulrushVetPort.addEventListener("click", function() {
    BulrushVetInfo.style.display = 'block';
    BulrushSprite.style.display = 'block';
})

BulrushChampPort.addEventListener("click", function() {
    BulrushChampInfo.style.display = 'block';
    BulrushSprite.style.display = 'block';
})

//Cattail

const CattailSprite = document.getElementById("cattail_sprite_container")
const CattailAppPort = document.getElementById("cattail_app_port")
const CattailAppInfo = document.getElementById("cattail_app_info")
const CattailVetPort = document.getElementById("cattail_vet_port")
const CattailVetInfo = document.getElementById("cattail_vet_info")
const CattailChampPort = document.getElementById("cattail_champ_port")
const CattailChampInfo = document.getElementById("cattail_champ_info")

CattailAppPort.addEventListener("click", function() {
    CattailAppInfo.style.display = 'block';
    CattailSprite.style.display = 'block';
})

CattailVetPort.addEventListener("click", function() {
    CattailVetInfo.style.display = 'block';
    CattailSprite.style.display = 'block';
})

CattailChampPort.addEventListener("click", function() {
    CattailChampInfo.style.display = 'block';
    CattailSprite.style.display = 'block';
})

//Pyre Empty

const PyreEmptySprite = document.getElementById("pyre_empty_sprite_container")
const PyreEmptyAppPort = document.getElementById("pyre_empty_app_port")
const PyreEmptyAppInfo = document.getElementById("pyre_empty_app_info")
const PyreEmptyVetPort = document.getElementById("pyre_empty_vet_port")
const PyreEmptyVetInfo = document.getElementById("pyre_empty_vet_info")
const PyreEmptyChampPort = document.getElementById("pyre_empty_champ_port")
const PyreEmptyChampInfo = document.getElementById("pyre_empty_champ_info")

PyreEmptyAppPort.addEventListener("click", function() {
    PyreEmptyAppInfo.style.display = 'block';
    PyreEmptySprite.style.display = 'block';
})

PyreEmptyVetPort.addEventListener("click", function() {
    PyreEmptyVetInfo.style.display = 'block';
    PyreEmptySprite.style.display = 'block';
})

PyreEmptyChampPort.addEventListener("click", function() {
    PyreEmptyChampInfo.style.display = 'block';
    PyreEmptySprite.style.display = 'block';
})

//Pyre Full

const PyreFullSprite = document.getElementById("pyre_full_sprite_container")
const PyreFullAppPort = document.getElementById("pyre_full_app_port")
const PyreFullAppInfo = document.getElementById("pyre_full_app_info")
const PyreFullVetPort = document.getElementById("pyre_full_vet_port")
const PyreFullVetInfo = document.getElementById("pyre_full_vet_info")
const PyreFullChampPort = document.getElementById("pyre_full_champ_port")
const PyreFullChampInfo = document.getElementById("pyre_full_champ_info")

PyreFullAppPort.addEventListener("click", function() {
    PyreFullAppInfo.style.display = 'block';
    PyreFullSprite.style.display = 'block';
})

PyreFullVetPort.addEventListener("click", function() {
    PyreFullVetInfo.style.display = 'block';
    PyreFullSprite.style.display = 'block';
})

PyreFullChampPort.addEventListener("click", function() {
    PyreFullChampInfo.style.display = 'block';
    PyreFullSprite.style.display = 'block';
})

//Baron Egg 

const PulsatingEggsSprite = document.getElementById("pulsating_eggs_sprite_container")
const PulsatingEggsVetPort = document.getElementById("pulsating_eggs_vet_port")
const PulsatingEggsVetInfo = document.getElementById("pulsating_eggs_vet_info")

PulsatingEggsVetPort.addEventListener("click", function() {
    PulsatingEggsVetInfo.style.display = 'block';
    PulsatingEggsSprite.style.display = 'block';
})

//Supplicant

const SupplicantSprite = document.getElementById("supplicant_sprite_container")
const SupplicantVetPort = document.getElementById("supplicant_vet_port")
const SupplicantVetInfo = document.getElementById("supplicant_vet_info")


SupplicantVetPort.addEventListener("click", function() {
    SupplicantVetInfo.style.display = 'block';
    SupplicantSprite.style.display = 'block';
})


//Sycophant

const SycophantSprite = document.getElementById("sycophant_sprite_container")
const SycophantBloodlustSprite = document.getElementById("sycophant_bloodlust_sprite_container")
const SycophantThirstySpriteBtn = document.getElementById("sycophant_bloodlust_minion_thirsty_sprite_toggle")
const SycophantBloodlustSpriteBtn = document.getElementById("sycophant_minion_bloodlust_sprite_toggle")
const SycophantVetPort = document.getElementById("sycophant_vet_port")
const SycophantVetInfo = document.getElementById("sycophant_vet_info")

SycophantVetPort.addEventListener("click", function() {
    SycophantVetInfo.style.display = 'block';
    SycophantSprite.style.display = 'block';
})

SycophantThirstySpriteBtn.addEventListener("click", function() {
    PlayBtnPress();
    SycophantSprite.style.display = 'block';
    SycophantBloodlustSprite.style.display = 'none';
})

SycophantBloodlustSpriteBtn.addEventListener("click", function() {
    PlayBtnPress();
    SycophantSprite.style.display = 'none';
    SycophantBloodlustSprite.style.display = 'block';
})

//Chevalier

const ChevalierSprite = document.getElementById("chevalier_sprite_container")
const ChevalierVetPort = document.getElementById("chevalier_vet_port")
const ChevalierVetInfo = document.getElementById("chevalier_vet_info")

ChevalierVetPort.addEventListener("click", function() {
    ChevalierVetInfo.style.display = 'block';
    ChevalierSprite.style.display = 'block';
})


//Esquire
const EsquireSprite = document.getElementById("esquire_sprite_container")
const EsquireBloodlustSprite = document.getElementById("esquire_bloodlust_sprite_container")

const EsquireVetPort = document.getElementById("esquire_vet_port")
const EsquireVetInfo = document.getElementById("esquire_vet_info")

const EsquireThirstySpriteBtn = document.getElementById("esquire_bloodlust_minion_thirsty_sprite_toggle")
const EsquireBloodlustSpriteBtn = document.getElementById("esquire_minion_bloodlust_sprite_toggle")

EsquireVetPort.addEventListener("click", function() {
    EsquireVetInfo.style.display = 'block';
    EsquireSprite.style.display = 'block';
})

EsquireThirstySpriteBtn.addEventListener("click", function() {
    PlayBtnPress();
    EsquireSprite.style.display = 'block';
    EsquireBloodlustSprite.style.display = 'none';
})

EsquireBloodlustSpriteBtn.addEventListener("click", function() {
    PlayBtnPress();
    EsquireSprite.style.display = 'none';
    EsquireBloodlustSprite.style.display = 'block';
})


//Emaciated Body
const EmaciatedBodySprite = document.getElementById("emaciated_body_sprite_container")
const EmaciatedBodyChampPort = document.getElementById("emaciated_body_champ_port")
const EmaciatedBodyChampInfo = document.getElementById("emaciated_body_champ_info")

EmaciatedBodyChampPort.addEventListener("click", function() {
    EmaciatedBodyChampInfo.style.display = 'block';
    EmaciatedBodySprite.style.display = 'block';
})

//Body
const BodySprite = document.getElementById("body_sprite_container")
const BodyChampPort = document.getElementById("body_champ_port")
const BodyChampInfo = document.getElementById("body_champ_info")

BodyChampPort.addEventListener("click", function() {
    BodyChampInfo.style.display = 'block';
    BodySprite.style.display = 'block';
})

//BloodStuffedBody

const BloodstuffedBodySprite = document.getElementById("bloodstuffed_body_sprite_container")
const BloodstuffedBodyChampPort = document.getElementById("bloodstuffed_body_champ_port")
const BloodstuffedBodyChampInfo = document.getElementById("bloodstuffed_body_champ_info")

BloodstuffedBodyChampPort.addEventListener("click", function() {
    BloodstuffedBodyChampInfo.style.display = 'block';
    BloodstuffedBodySprite.style.display = 'block';
})

//Blood FOunt
const BloodFountSprite = document.getElementById("blood_fount_sprite_container")
const BloodFountChampPort = document.getElementById("blood_fount_champ_port")
const BloodFountChampInfo = document.getElementById("blood_fount_champ_info")

BloodFountChampPort.addEventListener("click", function() {
    BloodFountChampInfo.style.display = 'block';
    BloodFountSprite.style.display = 'block';
})

//Stone Shield

const StoneShieldSprite = document.getElementById("stone_shield_sprite_container")
const StoneShieldChampPort = document.getElementById("stone_shield_champ_port")
const StoneShieldChampInfo = document.getElementById("stone_shield_champ_info")

StoneShieldChampPort.addEventListener("click", function() {
    StoneShieldChampInfo.style.display = 'block';
    StoneShieldSprite.style.display = 'block';
})


//Crystalline Aberration

const CrystallineAberrationMinionSprite = document.getElementById("crystalline_aberration_sprite_container")
const CrystallineAberrationMinionAppPort = document.getElementById("crystalline_aberration_app_port")
const CrystallineAberrationMinionAppInfo = document.getElementById("crystalline_aberration_app_info")
const CrystallineAberrationMinionVetPort = document.getElementById("crystalline_aberration_vet_port")
const CrystallineAberrationMinionVetInfo = document.getElementById("crystalline_aberration_vet_info")
const CrystallineAberrationMinionChampPort = document.getElementById("crystalline_aberration_champ_port")
const CrystallineAberrationMinionChampInfo = document.getElementById("crystalline_aberration_champ_info")

CrystallineAberrationMinionAppPort.addEventListener("click", function() {
    CrystallineAberrationMinionAppInfo.style.display = 'block';
    CrystallineAberrationMinionSprite.style.display = 'block';
})

CrystallineAberrationMinionVetPort.addEventListener("click", function() {
    CrystallineAberrationMinionVetInfo.style.display = 'block';
    CrystallineAberrationMinionSprite.style.display = 'block';
})

CrystallineAberrationMinionChampPort.addEventListener("click", function() {
    CrystallineAberrationMinionChampInfo.style.display = 'block';
    CrystallineAberrationMinionSprite.style.display = 'block';
})

//Farmhand

const FarmhandSprite = document.getElementById("farmhand_sprite_container")
const FarmhandVetPort = document.getElementById("farmhand_vet_port")
const FarmhandVetInfo = document.getElementById("farmhand_vet_info")
const FarmhandEndlessPort = document.getElementById("farmhand_endless_port")
const FarmhandEndlessInfo = document.getElementById("farmhand_endless_info")

FarmhandVetPort.addEventListener("click", function() {
    FarmhandVetInfo.style.display = 'block';
    FarmhandSprite.style.display = 'block';
})

FarmhandEndlessPort.addEventListener("click", function() {
    FarmhandEndlessInfo.style.display = 'block';
    FarmhandSprite.style.display = 'block';
})
//Frozen
const FrozenFarmhandSprite = document.getElementById("frozen_farmhand_sprite_container")
const FrozenFarmhandVetPort = document.getElementById("frozen_farmhand_vet_port")
const FrozenFarmhandVetInfo = document.getElementById("frozen_farmhand_vet_info")
const FrozenFarmhandEndlessPort = document.getElementById("frozen_farmhand_endless_port")
const FrozenFarmhandEndlessInfo = document.getElementById("frozen_farmhand_endless_info")

FrozenFarmhandVetPort.addEventListener("click", function() {
    FrozenFarmhandVetInfo.style.display = 'block';
    FrozenFarmhandSprite.style.display = 'block';
})

FrozenFarmhandEndlessPort.addEventListener("click", function() {
    FrozenFarmhandEndlessInfo.style.display = 'block';
    FrozenFarmhandSprite.style.display = 'block';
})

//Scare

const ScarecrowSprite = document.getElementById("scarecrow_sprite_container")
const ScarecrowVetPort = document.getElementById("scarecrow_vet_port")
const ScarecrowVetInfo = document.getElementById("scarecrow_vet_info")
const ScarecrowEndlessPort = document.getElementById("scarecrow_endless_port")
const ScarecrowEndlessInfo = document.getElementById("scarecrow_endless_info")

ScarecrowVetPort.addEventListener("click", function() {
    ScarecrowVetInfo.style.display = 'block';
    ScarecrowSprite.style.display = 'block';
})

ScarecrowEndlessPort.addEventListener("click", function() {
    ScarecrowEndlessInfo.style.display = 'block';
    ScarecrowSprite.style.display = 'block';
})

//Herald

const SleeperHeraldSprite = document.getElementById("sleeper's_herald_sprite_container")
const SleeperHeraldVetPort = document.getElementById("sleeper's_herald_vet_port")
const SleeperHeraldVetInfo = document.getElementById("sleeper's_herald_vet_info")
const SleeperHeraldEndlessPort = document.getElementById("sleeper's_herald_endless_port")
const SleeperHeraldEndlessInfo = document.getElementById("sleeper's_herald_endless_info")

SleeperHeraldVetPort.addEventListener("click", function() {
    SleeperHeraldVetInfo.style.display = 'block';
    SleeperHeraldSprite.style.display = 'block';
})

SleeperHeraldEndlessPort.addEventListener("click", function() {
    SleeperHeraldEndlessInfo.style.display = 'block';
    SleeperHeraldSprite.style.display = 'block';
})


//Focus
const FocusPointSprite = document.getElementById("focus_point_sprite_container")
const FocusPointEndlessPort = document.getElementById("focus_point_endless_port")
const FocusPointEndlessInfo = document.getElementById("focus_point_endless_info")


FocusPointEndlessPort.addEventListener("click", function() {
    FocusPointEndlessInfo.style.display = 'block';
    FocusPointSprite.style.display = 'block';
})

//Unfinished

const UnfinishedAberrationSprite = document.getElementById("unfinished_aberration_sprite_container")
const UnfinishedAberrationEndlessPort = document.getElementById("unfinished_aberration_endless_port")
const UnfinishedAberrationEndlessInfo = document.getElementById("unfinished_aberration_endless_info")


UnfinishedAberrationEndlessPort.addEventListener("click", function() {
    UnfinishedAberrationEndlessInfo.style.display = 'block';
    UnfinishedAberrationSprite.style.display = 'block';
})

//Finished

const FinishedAberrationSprite = document.getElementById("finished_aberration_sprite_container")
const FinishedAberrationEndlessPort = document.getElementById("temporal_aberration_endless_port")
const FinishedAberrationEndlessInfo = document.getElementById("finished_aberration_endless_info")


FinishedAberrationEndlessPort.addEventListener("click", function() {
    FinishedAberrationEndlessInfo.style.display = 'block';
    FinishedAberrationSprite.style.display = 'block';
})


//Adamantite

const AdamantiteAberrationSprite = document.getElementById("adamantite_aberration_sprite_container")
const AdamantiteAberrationEndlessPort = document.getElementById("adamantite_aberration_endless_port")
const AdamantiteAberrationEndlessInfo = document.getElementById("adamantite_aberration_endless_info")


AdamantiteAberrationEndlessPort.addEventListener("click", function() {
    AdamantiteAberrationEndlessInfo.style.display = 'block';
    AdamantiteAberrationSprite.style.display = 'block';
})

const BombBarrelSprite = document.getElementById("bomb_barrel_sprite_container")
const BombBarrelDarkestPort = document.getElementById("bomb_barrel_darkest_port")
const BombBarrelDarkestInfo = document.getElementById("bomb_barrel_darkest_info")


BombBarrelDarkestPort.addEventListener("click", function() {
    BombBarrelDarkestInfo.style.display = 'block';
    BombBarrelSprite.style.display = 'block';
})

const BrigandRaiderMinionSprite = document.getElementById("brigand_raider_sprite_container")
const BrigandRaiderDarkestPort = document.getElementById("brigand_raider_darkest_port")
const BrigandRaiderDarkestInfo = document.getElementById("brigand_raider_darkest_info")

BrigandRaiderDarkestPort.addEventListener("click", function() {
    BrigandRaiderDarkestInfo.style.display = 'block';
    BrigandRaiderMinionSprite.style.display = 'block';
})


function attachOnlyDarkestBossMinionPortClickListeners(minionid) {
    var MinionSprite = document.getElementById(`${minionid}_sprite_container`);
    var MinionPortrait = document.getElementById(`${minionid}_darkest_port`);
    var MinionDarkestInfo = document.getElementById(`${minionid}_darkest_info`);


   MinionPortrait.addEventListener("click", function() {
        MinionDarkestInfo.style.display = "block";
        MinionSprite.style.display = "block";
    })
  }

  attachOnlyDarkestBossMinionPortClickListeners("cultist_priest")
  attachOnlyDarkestBossMinionPortClickListeners("defensive_growth")
  attachOnlyDarkestBossMinionPortClickListeners("flesh_hound")
  attachOnlyDarkestBossMinionPortClickListeners("polyp")
  attachOnlyDarkestBossMinionPortClickListeners("white_cell_stalk")
  attachOnlyDarkestBossMinionPortClickListeners("perfect_reflection")
  attachOnlyDarkestBossMinionPortClickListeners("imperfect_reflection")
  attachOnlyDarkestBossMinionPortClickListeners("absolute_nothingness")