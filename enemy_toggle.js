//All Content Close

const enemyCloseBtns = document.getElementsByClassName("enemy_close")

const enemyMainHub = document.getElementById("enemy_box_hub")
function CloseEnemyMainHub() {enemyMainHub.style.display = 'none'}



for (const enemyCloseBtn of enemyCloseBtns){
    enemyCloseBtn.addEventListener("click", function() {
        PlayPageClose();
        CloseEnemyMainHub();
        HideBackdrops();
    })
}



//Enemy Nav Bar Toggle

const RuinsEnemyNav = document.getElementById("ruins_enemy_nav")
const WealdEnemyNav = document.getElementById("weald_enemy_nav")
const WarrensEnemyNav = document.getElementById("warrens_enemy_nav")
const CoveEnemyNav = document.getElementById("cove_enemy_nav")
const CrimsonCourtEnemyNav = document.getElementById("crimson_court_enemy_nav")
const ColorOfMadnessEnemyNav = document.getElementById("color_of_madness_enemy_nav")
const SpoilerEnemyNav = document.getElementById("spoiler_enemy_nav")
const SharedEnemyNav = document.getElementById("shared_enemy_nav")

const allEnemyNavs = document.querySelectorAll('[id$="_enemy_nav"]');
function HideAllEnemyNavs(){
    for(const allEnemyNav of allEnemyNavs) {
        allEnemyNav.style.display = 'none'
    }
}


const RuinsEnemyRegionHeader = document.getElementById("ruins_enemy_header")
const WealdEnemyRegionHeader = document.getElementById("weald_enemy_header")
const WarrensEnemyRegionHeader = document.getElementById("warrens_enemy_header")
const CoveEnemyRegionHeader = document.getElementById("cove_enemy_header")
const CrimsonCourtEnemyRegionHeader = document.getElementById("crimson_court_enemy_header")
const ColorOfMadnessEnemyRegionHeader = document.getElementById("color_of_madness_enemy_header")
const ShieldbreakerEnemyRegionHeader = document.getElementById("shieldbreaker_enemy_header")
const SpoilerEnemyRegionHeader = document.getElementById("spoiler_enemy_header")
const SharedEnemyRegionHeader = document.getElementById("shared_enemy_header")


const RuinsEnemyButton = document.getElementById("ruins1");
const WealdEnemyButton = document.getElementById("weald1");
const WarrensEnemyButton = document.getElementById("warrens1");
const CoveEnemyButton = document.getElementById("cove1");
const SharedEnemyButton = document.getElementById("shared1");
const CrimsonCourtEnemyButton = document.getElementById("crimson1");
const MadnessEnemyButton = document.getElementById("madness1");
const SpoilerEnemyButton = document.getElementById("gauntlet1a");



const enemyPorts = document.getElementsByClassName("enemy_port")
const EnemyDiffBtns = document.querySelectorAll('.enemy_diff_btn');

for (const enemyPort of enemyPorts) {
    enemyPort.addEventListener("click", function() {
        PlayPageOpn();
        hideAllEnemyInfo()
        hideAllEnemySharedContent()
    });
}

for (const enemydiff of EnemyDiffBtns) {
    enemydiff.addEventListener("click", function() {
        PlayBtnPress();
        hideAllEnemyInfo()
    });
}

function attachEnemyDiffBtnClickListeners(enemyid) {
    var EnemyPortrait = document.getElementById(`${enemyid}_portrait`);
    var EnemyShared = document.getElementById(`${enemyid}_shared_enemy_container`);

    var EnemyAppBtn = document.getElementById(`${enemyid}_app_btn`);
    var EnemyAppInfo = document.getElementById(`${enemyid}_app_enemy_info`);
    var EnemyVetBtn = document.getElementById(`${enemyid}_vet_btn`);
    var EnemyVetInfo = document.getElementById(`${enemyid}_vet_enemy_info`);
    var EnemyChampBtn = document.getElementById(`${enemyid}_champ_btn`);
    var EnemyChampInfo = document.getElementById(`${enemyid}_champ_enemy_info`);

 
    EnemyPortrait.addEventListener("click", function() {
        EnemyShared.style.display = "block";
        EnemyAppInfo.style.display = "block";
    })

    EnemyAppBtn.addEventListener("click", function() {EnemyAppInfo.style.display = "block"})
    EnemyVetBtn.addEventListener("click", function() {EnemyVetInfo.style.display = "block"})
    EnemyChampBtn.addEventListener("click", function() {EnemyChampInfo.style.display = "block"})
  }  
  
  attachEnemyDiffBtnClickListeners("bone_soldier")
  attachEnemyDiffBtnClickListeners("bone_defender")
  attachEnemyDiffBtnClickListeners("bone_arbalist")
  attachEnemyDiffBtnClickListeners("bone_courtier")

  attachEnemyDiffBtnClickListeners("fungal_scratcher")
  attachEnemyDiffBtnClickListeners("fungal_artillery")
  attachEnemyDiffBtnClickListeners("rabid_gnasher")
  attachEnemyDiffBtnClickListeners("ectoplasm")
  attachEnemyDiffBtnClickListeners("large_ectoplasm")

  attachEnemyDiffBtnClickListeners("swine_chopper")
  attachEnemyDiffBtnClickListeners("swine_drummer")
  attachEnemyDiffBtnClickListeners("swine_wretch")
  attachEnemyDiffBtnClickListeners("swine_slasher")
  attachEnemyDiffBtnClickListeners("carrion_eater")

  attachEnemyDiffBtnClickListeners("pelagic_grouper")
  attachEnemyDiffBtnClickListeners("pelagic_shaman")
  attachEnemyDiffBtnClickListeners("pelagic_guardian")
  attachEnemyDiffBtnClickListeners("deep_stinger")
  attachEnemyDiffBtnClickListeners("sea_maggot")
  attachEnemyDiffBtnClickListeners("drowned_thrall")

  attachEnemyDiffBtnClickListeners("brigand_cutthroat")
  attachEnemyDiffBtnClickListeners("brigand_fusilier")
  attachEnemyDiffBtnClickListeners("brigand_bloodletter")
  attachEnemyDiffBtnClickListeners("cultist_brawler")
  attachEnemyDiffBtnClickListeners("cultist_acolyte")
  attachEnemyDiffBtnClickListeners("madman")
  attachEnemyDiffBtnClickListeners("webber")
  attachEnemyDiffBtnClickListeners("spitter")
  attachEnemyDiffBtnClickListeners("maggot")
  attachEnemyDiffBtnClickListeners("bone_rabble")


  attachEnemyDiffBtnClickListeners("supplicant")
  attachEnemyDiffBtnClickListeners("sycophant")
  attachEnemyDiffBtnClickListeners("sycophant_bloodlust")
  attachEnemyDiffBtnClickListeners("manservant")
  attachEnemyDiffBtnClickListeners("manservant_bloodlust")
  attachEnemyDiffBtnClickListeners("gatekeeper")

  attachEnemyDiffBtnClickListeners("rattler")
  attachEnemyDiffBtnClickListeners("pilskin")
  attachEnemyDiffBtnClickListeners("adder")





  function attachEnemyDiffBtnVetChampClickListeners(enemyid) {
    var EnemyPortrait = document.getElementById(`${enemyid}_portrait`);
    var EnemyShared = document.getElementById(`${enemyid}_shared_enemy_container`);

    var EnemyVetBtn = document.getElementById(`${enemyid}_vet_btn`);
    var EnemyVetInfo = document.getElementById(`${enemyid}_vet_enemy_info`);
    var EnemyChampBtn = document.getElementById(`${enemyid}_champ_btn`);
    var EnemyChampInfo = document.getElementById(`${enemyid}_champ_enemy_info`);

 
    EnemyPortrait.addEventListener("click", function() {
        EnemyShared.style.display = "block";
        EnemyVetInfo.style.display = "block";
    })

    EnemyVetBtn.addEventListener("click", function() {EnemyVetInfo.style.display = "block"})
    EnemyChampBtn.addEventListener("click", function() {EnemyChampInfo.style.display = "block"})
  }

  attachEnemyDiffBtnVetChampClickListeners("bone_spearman")
  attachEnemyDiffBtnVetChampClickListeners("bone_captain")

  attachEnemyDiffBtnVetChampClickListeners("crone")
  attachEnemyDiffBtnVetChampClickListeners("unclean_giant")

  attachEnemyDiffBtnVetChampClickListeners("large_carrion_eater")
  attachEnemyDiffBtnVetChampClickListeners("swinetaur")

  attachEnemyDiffBtnVetChampClickListeners("uca_crusher")

  attachEnemyDiffBtnVetChampClickListeners("ghoul")
  attachEnemyDiffBtnVetChampClickListeners("gargoyle")

  attachEnemyDiffBtnVetChampClickListeners("esquire")
  attachEnemyDiffBtnVetChampClickListeners("esquire_bloodlust")
  attachEnemyDiffBtnVetChampClickListeners("courtesan")
  attachEnemyDiffBtnVetChampClickListeners("courtesan_bloodlust")
  attachEnemyDiffBtnVetChampClickListeners("chevalier")




  function attachEnemyDiffBtnChampClickListeners(enemyid) {
    var EnemyPortrait = document.getElementById(`${enemyid}_portrait`);
    var EnemyShared = document.getElementById(`${enemyid}_shared_enemy_container`);

    var EnemyChampBtn = document.getElementById(`${enemyid}_champ_btn`);
    var EnemyChampInfo = document.getElementById(`${enemyid}_champ_enemy_info`);

 
    EnemyPortrait.addEventListener("click", function() {
        EnemyShared.style.display = "block";
        EnemyChampInfo.style.display = "block";
    })

    EnemyChampBtn.addEventListener("click", function() {EnemyChampInfo.style.display = "block"})
  }

attachEnemyDiffBtnChampClickListeners("bone_bearer")

attachEnemyDiffBtnChampClickListeners("hateful_virago")
attachEnemyDiffBtnChampClickListeners("necrotic_fungus")

attachEnemyDiffBtnChampClickListeners("swine_skiver")

attachEnemyDiffBtnChampClickListeners("squiffy_ghast")

function attachEnemyDiffBtnDarkestClickListeners(enemyid) {
    var EnemyPortrait = document.getElementById(`${enemyid}_portrait`);
    var EnemyShared = document.getElementById(`${enemyid}_shared_enemy_container`);

    var EnemyDarkestBtn = document.getElementById(`${enemyid}_darkest_btn`);
    var EnemyDarkestInfo = document.getElementById(`${enemyid}_darkest_enemy_info`);

 
    EnemyPortrait.addEventListener("click", function() {
        EnemyShared.style.display = "block";
        EnemyDarkestInfo.style.display = "block";
    })

    EnemyDarkestBtn.addEventListener("click", function() {EnemyDarkestInfo.style.display = "block"})
  }

attachEnemyDiffBtnDarkestClickListeners("brigand_raider")
attachEnemyDiffBtnDarkestClickListeners("brigand_hunter")

attachEnemyDiffBtnDarkestClickListeners("ascended_brawler")
attachEnemyDiffBtnDarkestClickListeners("ascended_witch")
attachEnemyDiffBtnDarkestClickListeners("rapturous_cultist")
attachEnemyDiffBtnDarkestClickListeners("cultist_priest")
attachEnemyDiffBtnDarkestClickListeners("malignant_growth")
attachEnemyDiffBtnDarkestClickListeners("defensive_growth")
attachEnemyDiffBtnDarkestClickListeners("flesh_hound")
attachEnemyDiffBtnDarkestClickListeners("polyp")
attachEnemyDiffBtnDarkestClickListeners("antibody")
attachEnemyDiffBtnDarkestClickListeners("templar_gladiator")
attachEnemyDiffBtnDarkestClickListeners("templar_sniper")


function attachEnemyDiffBtnAppVetEndlessClickListeners(enemyid) {
    var EnemyPortrait = document.getElementById(`${enemyid}_portrait`);
    var EnemyShared = document.getElementById(`${enemyid}_shared_enemy_container`);

    var EnemyAppBtn = document.getElementById(`${enemyid}_app_btn`);
    var EnemyAppInfo = document.getElementById(`${enemyid}_app_enemy_info`);
    var EnemyVetBtn = document.getElementById(`${enemyid}_vet_btn`);
    var EnemyVetInfo = document.getElementById(`${enemyid}_vet_enemy_info`);
    var EnemyEndlessBtn = document.getElementById(`${enemyid}_endless_btn`);
    var EnemyEndlessInfo = document.getElementById(`${enemyid}_endless_enemy_info`);

 
    EnemyPortrait.addEventListener("click", function() {
        EnemyShared.style.display = "block";
        EnemyAppInfo.style.display = "block";
    })

    EnemyAppBtn.addEventListener("click", function() {EnemyAppInfo.style.display = "block"})
    EnemyVetBtn.addEventListener("click", function() {EnemyVetInfo.style.display = "block"})
    EnemyEndlessBtn.addEventListener("click", function() {EnemyEndlessInfo.style.display = "block"})
  }  
  
  attachEnemyDiffBtnAppVetEndlessClickListeners("crystalline_aberration")
  attachEnemyDiffBtnAppVetEndlessClickListeners("farmhand")
  attachEnemyDiffBtnAppVetEndlessClickListeners("scarecrow")
  attachEnemyDiffBtnAppVetEndlessClickListeners("sleeper's_herald")
  attachEnemyDiffBtnAppVetEndlessClickListeners("foreman")
  attachEnemyDiffBtnAppVetEndlessClickListeners("plow_horse")
  attachEnemyDiffBtnAppVetEndlessClickListeners("sleeper's_dream")




const BoneSoldierShared = document.getElementById("bone_soldier_shared_enemy_container")
const FungalScratcherShared = document.getElementById("fungal_scratcher_shared_enemy_container")
const SwineChopperShared = document.getElementById("swine_chopper_shared_enemy_container")
const PelagicGrouperShared = document.getElementById("pelagic_grouper_shared_enemy_container")
const BrigandCutthroatShared = document.getElementById("brigand_cutthroat_shared_enemy_container")
const SupplicantShared = document.getElementById("supplicant_shared_enemy_container")
const FarmhandShared = document.getElementById("farmhand_shared_enemy_container")
const RattlerShared = document.getElementById("rattler_shared_enemy_container")
const RapturousCultistShared = document.getElementById("rapturous_cultist_shared_enemy_container")

const BoneSoldierAppData = document.getElementById("bone_soldier_app_enemy_info")
const FungalScratcherAppData = document.getElementById("fungal_scratcher_app_enemy_info")
const SwineChopperAppData = document.getElementById("swine_chopper_app_enemy_info")
const PelagicGrouperAppData = document.getElementById("pelagic_grouper_app_enemy_info")
const BrigandCutthroatAppData = document.getElementById("brigand_cutthroat_app_enemy_info")
const SupplicantAppData = document.getElementById("supplicant_app_enemy_info")
const FarmhandAppData = document.getElementById("farmhand_app_enemy_info")
const RattlerAppData = document.getElementById("rattler_app_enemy_info")
const RapturousCultistDarkestData = document.getElementById("rapturous_cultist_darkest_enemy_info")


const AllEnemyNavs = document.querySelectorAll(".enemy_nav_container");
const AllEnemySharedContent = document.querySelectorAll("[id$='_shared_enemy_container']");
const AllEnemyRegionHeaders = document.querySelectorAll("[id$='_enemy_header']");

function hideAllEnemyNavs() {for(const EnemyNav of AllEnemyNavs) {EnemyNav.style.display = 'none'}}
function hideAllRegionEnemyHeaders() {for(const RegionHeader of AllEnemyRegionHeaders) {RegionHeader.style.display = 'none'}}
function hideAllEnemySharedContent() {for(const EnemyShared of AllEnemySharedContent) {EnemyShared.style.display = 'none'}}

const VanillaCategoryEnemyBanner = document.getElementById("vanilla_enemy_banner")
const DLCCategoryEnemyBanner = document.getElementById("dlc_enemy_banner")
const SpoilerCategoryEnemyBanner = document.getElementById("spoiler_enemy_banner")



const allEnemyInformation = document.querySelectorAll('[id$="_app_enemy_info"], [id$="_vet_enemy_info"], [id$="_champ_enemy_info"], [id$="_darkest_enemy_info"], [id$="_endless_enemy_info"]');
const allEnemyInformationArray = Array.from(allEnemyInformation);

function hideAllEnemyInfo() {
    allEnemyInformationArray.forEach(item => {
        item.style.display = 'none';
    });
}


//function hideAllEnemyStrategyContent() {for(const EnemyStrategy of AllEnemyStrategyContainers) {EnemyStrategy.style.display = 'none'}}
//const AllEnemyStrategyContainers = document.querySelectorAll('[id$="enemy_strategy_container"]');







const AllEnemyMissionButtons = document.getElementsByClassName("mission_btn")
for (const MissionBtn of AllEnemyMissionButtons) {
    MissionBtn.addEventListener("click", function() {
        hideAllEnemyNavs() 
        hideAllRegionEnemyHeaders()
        hideAllEnemySharedContent()
        hideAllEnemyInfo()
        
    const clickedButtonId = MissionBtn.id;

    if (clickedButtonId === "ruins_enemy_check") {        
    BoneSoldierShared.style.display = "block"
    RuinsEnemyNav.style.display = 'flex'
    RuinsEnemyRegionHeader.style.display = "block"
    BoneSoldierAppData.style.display = "block"
    }

    if (clickedButtonId === "weald_enemy_check") {        
    FungalScratcherShared.style.display = "block"
    WealdEnemyNav.style.display = 'flex'
    WealdEnemyRegionHeader.style.display = "block"
    FungalScratcherAppData.style.display = "block"
    }

    if (clickedButtonId === "warrens_enemy_check") {        
    SwineChopperShared.style.display = "block"
    WarrensEnemyNav.style.display = 'flex'
    WarrensEnemyRegionHeader.style.display = "block"
    SwineChopperAppData.style.display = "block"
    }

    if (clickedButtonId === "cove_enemy_check") {        
    PelagicGrouperShared.style.display = "block"
    CoveEnemyNav.style.display = 'flex'
    CoveEnemyRegionHeader.style.display = "block"
    PelagicGrouperAppData.style.display = "block"
    }

    if (clickedButtonId === "shared_enemy_check") {        
    BrigandCutthroatShared.style.display = "block"
    SharedEnemyNav.style.display = 'flex'
    SharedEnemyRegionHeader.style.display = "block"
    BrigandCutthroatAppData.style.display = "block"
    }

    if (clickedButtonId === "crimson_court_enemy_check") {        
    SupplicantShared.style.display = "block"
    CrimsonCourtEnemyNav.style.display = 'flex'
    CrimsonCourtEnemyRegionHeader.style.display = "block"
    SupplicantAppData.style.display = "block"
    }

    if (clickedButtonId === "color_of_madness_enemy_check") {        
    FarmhandShared.style.display = "block"
    ColorOfMadnessEnemyNav.style.display = 'flex'
    ColorOfMadnessEnemyRegionHeader.style.display = "block"
    FarmhandAppData.style.display = "block"
    }

    if (clickedButtonId === "spoiler_enemy_check") {        
    RapturousCultistShared.style.display = "block"
    SpoilerEnemyNav.style.display = 'flex'
    SpoilerEnemyRegionHeader.style.display = "block"
    RapturousCultistDarkestData.style.display = "block"
    }




    })

   

}




//const RuinsEnemyBanner = document.getElementById("ruins_enemy_banner")
//const WealdEnemyBanner = document.getElementById("weald_enemy_banner")
//const WarrensEnemyBanner = document.getElementById("warrens_enemy_banner")
//const CoveEnemyBanner = document.getElementById("cove_enemy_banner")
//const CrimsonCourtEnemyBanner = document.getElementById("crimson_court_enemy_banner")
//const ColorOfMadnessEnemyBanner = document.getElementById("color_of_madness_enemy_banner")



