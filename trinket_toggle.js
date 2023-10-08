

//Trinket Category Banners

const VeryCommonBanner = document.getElementById("very_common_trinket_banner")
const CommonBanner = document.getElementById("common_trinket_banner")
const UncommonBanner = document.getElementById("uncommon_trinket_banner")
const RareBanner = document.getElementById("rare_trinket_banner")
const VeryRareBanner = document.getElementById("very_rare_trinket_banner")
const AncestralBanner = document.getElementById("ancestral_trinket_banner")
const TrophyBanner = document.getElementById("trophy_trinket_banner")
const EnemySpecificBanner = document.getElementById("enemy_specific_trinket_banner")
const CrimsonCourtBanner = document.getElementById("crimson_court_trinket_banner")
const ColorofMadnessBanner = document.getElementById("color_of_madness_trinket_banner")

//Trinket Category Containers

const VeryCommonTrinketContainer = document.getElementById("very_common_trinkets");
const CommonTrinketContainer = document.getElementById("common_trinkets");
const UncommonTrinketContainer = document.getElementById("uncommon_trinkets");
const RareTrinketContainer = document.getElementById("rare_trinkets");
const VeryRareTrinketContainer = document.getElementById("very_rare_trinkets");
const AncestralTrinketContainer = document.getElementById("ancestral_trinkets");
const TrophyTrinketContainer = document.getElementById("trophy_trinkets");
const EnemySpecificTrinketContainer = document.getElementById("enemy_specific_trinkets");
const CrimsonCourtTrinketContainer = document.getElementById("crimson_court_trinkets");
const ColorofMadnessTrinketContainer = document.getElementById("color_of_madness_trinkets");

const AbominationTrinketContainer = document.getElementById("abomination_trinkets");
const AbominationTrinketBtn =  document.getElementById("abomination_trinket_btn");

const AntiquarianTrinketContainer = document.getElementById("antiquarian_trinkets");
const AntiquarianTrinketBtn =  document.getElementById("antiquarian_trinket_btn");

const ArbalestTrinketContainer = document.getElementById("arbalest_trinkets");
const ArbalestTrinketBtn =  document.getElementById("arbalest_trinket_btn");

const BountyHunterTrinketContainer = document.getElementById("bounty_hunter_trinkets");
const BountyHunterTrinketBtn =  document.getElementById("bounty_hunter_trinket_btn");

const CrusaderTrinketContainer = document.getElementById("crusader_trinkets");
const CrusaderTrinketBtn =  document.getElementById("crusader_trinket_btn");

const GraveRobberTrinketContainer = document.getElementById("grave_robber_trinkets");
const GraveRobberTrinketBtn =  document.getElementById("grave_robber_trinket_btn");

const HellionTrinketContainer = document.getElementById("hellion_trinkets");
const HellionTrinketBtn =  document.getElementById("hellion_trinket_btn");

const HighwaymanTrinketContainer = document.getElementById("highwayman_trinkets");
const HighwaymanTrinketBtn =  document.getElementById("highwayman_trinket_btn");

const HoundmasterTrinketContainer = document.getElementById("houndmaster_trinkets");
const HoundmasterTrinketBtn =  document.getElementById("houndmaster_trinket_btn");

const JesterTrinketContainer = document.getElementById("jester_trinkets");
const JesterTrinketBtn =  document.getElementById("jester_trinket_btn");

const LeperTrinketContainer = document.getElementById("leper_trinkets");
const LeperTrinketBtn =  document.getElementById("leper_trinket_btn");

const ManAtArmsTrinketContainer = document.getElementById("man_at_arms_trinkets");
const ManAtArmsTrinketBtn =  document.getElementById("man_at_arms_trinket_btn");

const MusketeerTrinketContainer = document.getElementById("musketeer_trinkets");
const MusketeerTrinketBtn =  document.getElementById("musketeer_trinket_btn");

const OccultistTrinketContainer = document.getElementById("occultist_trinkets");
const OccultistTrinketBtn =  document.getElementById("occultist_trinket_btn");

const PlagueDoctorTrinketContainer = document.getElementById("plague_doctor_trinkets");
const PlagueDoctorTrinketBtn =  document.getElementById("plague_doctor_trinket_btn");

const VestalTrinketContainer = document.getElementById("vestal_trinkets");
const VestalTrinketBtn =  document.getElementById("vestal_trinket_btn");

const FlagellantTrinketContainer = document.getElementById("flagellant_trinkets");
const FlagellantTrinketBtn =  document.getElementById("flagellant_trinket_btn");

const ShieldbreakerTrinketContainer = document.getElementById("shieldbreaker_trinkets");
const ShieldbreakerTrinketBtn =  document.getElementById("shieldbreaker_trinket_btn");



function hideElementsByClassName(className) {
    const elements = document.getElementsByClassName(className);

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

// Example usage:
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here

 
VeryCommonBanner.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    VeryCommonTrinketContainer.style.display = "block"
})
CommonBanner.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    CommonTrinketContainer.style.display = "block"
})
UncommonBanner.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    UncommonTrinketContainer.style.display = "block"
})
RareBanner.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    RareTrinketContainer.style.display = "block"
})
VeryRareBanner.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    VeryRareTrinketContainer.style.display = "block"
})
AncestralBanner.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    AncestralTrinketContainer.style.display = "block"
})
TrophyBanner.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    TrophyTrinketContainer.style.display = "block"
})
EnemySpecificBanner.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    EnemySpecificTrinketContainer.style.display = "block"
})
CrimsonCourtBanner.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    CrimsonCourtTrinketContainer.style.display = "block"
})
ColorofMadnessBanner.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    ColorofMadnessTrinketContainer.style.display = "block"
})
AbominationTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    AbominationTrinketContainer.style.display = "block"
})
AntiquarianTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    AntiquarianTrinketContainer.style.display = "block"
})
ArbalestTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    ArbalestTrinketContainer.style.display = "block"
})
BountyHunterTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    BountyHunterTrinketContainer.style.display = "block"
})
CrusaderTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    CrusaderTrinketContainer.style.display = "block"
})
GraveRobberTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    GraveRobberTrinketContainer.style.display = "block"
})
HellionTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    HellionTrinketContainer.style.display = "block"
})
HighwaymanTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    HighwaymanTrinketContainer.style.display = "block"
})
HoundmasterTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    HoundmasterTrinketContainer.style.display = "block"
})
JesterTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    JesterTrinketContainer.style.display = "block"
})
LeperTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    LeperTrinketContainer.style.display = "block"
})
ManAtArmsTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    ManAtArmsTrinketContainer.style.display = "block"
})
MusketeerTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    MusketeerTrinketContainer.style.display = "block"
})
OccultistTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    OccultistTrinketContainer.style.display = "block"
})
PlagueDoctorTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    PlagueDoctorTrinketContainer.style.display = "block"
})
VestalTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    VestalTrinketContainer.style.display = "block"
})
FlagellantTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    FlagellantTrinketContainer.style.display = "block"
})
ShieldbreakerTrinketBtn.addEventListener("click", function() {
    hideElementsByClassName("trinket_category");
    ShieldbreakerTrinketContainer.style.display = "block"
})

});

const AllTrinketButtonElements = document.querySelectorAll('.hero_port, .trinket_banner');

for(const AllTrinketButtonElement of AllTrinketButtonElements) {
    AllTrinketButtonElement.addEventListener('click', function() {
        PlayBtnPress()
    })
}