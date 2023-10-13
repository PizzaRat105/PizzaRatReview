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
