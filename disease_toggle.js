const DiseaseBox = document.getElementById("diseasebox");
const DiseaseBtn = document.getElementById("diseasebtn");
const DiseaseCloseBtn = document.getElementById("disease_close_btn"); 
const DiseaseHoverLine = document.getElementById("disease_hover_tell");
const DiseaseClickLine = document.getElementById("disease_click_tell");

DiseaseBtn.addEventListener('click' , function() {
  PlayPageOpn();
  DiseaseBox.style.display = 'block';
  ResetDiseaseContent();
});

function ResetDiseaseContent(){
  HideAllDiseaseContent();
  HideAllCrimsonContent();
  sanitariumCharacter.style.display = "block"
  diseaseList.style.display = "block"
  crimsonCurseList.style.display = "none"
  diseaseNav.style.display = "flex"
  crimsonCurseNav.style.display = "none"
  DiseaseClickLine.style.display = "none"
  DiseaseHoverLine.style.display = "block"
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && DiseaseBox.style.display === 'block') {
    PlayPageClose()
    DiseaseBox.style.display = 'none';
  }
});

DiseaseCloseBtn.addEventListener('click', function() {
  PlayPageClose()
  DiseaseBox.style.display = 'none';
});

const diseaseToggle = document.getElementById("disease_banner")
const dlcDiseaseToggle = document.getElementById("dlc_disease_banner")

const sanitariumCharacter = document.getElementById("sanitarium_character")

const diseaseNav = document.getElementById("disease_content_nav1")
const crimsonCurseNav = document.getElementById("disease_content_nav2")

const diseaseOverview = document.getElementById("disease_overview_btn")
const enemyDisease = document.getElementById("disease_enemy_btn")
const curioDisease = document.getElementById("disease_curio_btn")

const diseaseList = document.getElementById("disease_names1")
const crimsonCurseList = document.getElementById("disease_names2")

function HideAllDiseaseContent(){
  const AllDiseaseContent = document.querySelectorAll('[class*="content_textwall_box"]');
  const AllDiseaseContentArray = Array.from(AllDiseaseContent); 

  AllDiseaseContentArray.forEach(content => { 
    content.style.display = 'none'
  })
}

function HideAllCrimsonContent(){
  const AllCrimsonContent = document.querySelectorAll('[class*="crimson_textwall_box"]');
  const AllCrimsonContentArray = Array.from(AllCrimsonContent); 

  AllCrimsonContentArray.forEach(content => { 
    content.style.display = 'none'
  })
}


const diseaseEnemySource = document.getElementById("disease_enemy_info")
const diseaseEnemies = document.getElementById("disease_enemies")

const diseaseCurioSource = document.getElementById("disease_curio_info")
const diseaseCurios = document.getElementById("disease_curios")

const dlcDiseaseEnemySource = document.getElementById("dlc_disease_enemy_info")
const dlcDiseaseEnemies = document.getElementById("dlc_disease_enemies")


diseaseToggle.addEventListener("click",function() {
  PlayBtnPress()
  ResetDiseaseContent();
})
dlcDiseaseToggle.addEventListener("click",function() {
  PlayBtnPress()
  HideAllDiseaseContent();
  HideAllCrimsonContent();

  sanitariumCharacter.style.display = "block"
  diseaseList.style.display = "none"
  crimsonCurseList.style.display = "block"

  diseaseNav.style.display = "none"
  crimsonCurseNav.style.display = "flex"  
  DiseaseHoverLine.style.display = "none"
  DiseaseClickLine.style.display = "block"
})


function AssignDiseaseContentBtnClickListener(id){
  const TriggerElement = document.getElementById(id)
  const TargetElement = document.getElementById(`${id}_desc`)

  TriggerElement.addEventListener("click", function() {
    PlayBtnPress()
    HideAllDiseaseContent();
    sanitariumCharacter.style.display = "none"
    TargetElement.style.display = "block"
  })
}

function AssignCrimsonContentBtnClickListener(id){
  const TriggerElement = document.getElementById(id)
  const TargetElement = document.getElementById(`${id}_desc`)

  TriggerElement.addEventListener("click", function() {
    PlayBtnPress()
    HideAllCrimsonContent();
    TargetElement.style.display = "block"
  })
}

AssignDiseaseContentBtnClickListener("disease_overview_btn")
AssignDiseaseContentBtnClickListener("disease_enemy_btn")
AssignDiseaseContentBtnClickListener("disease_curio_btn")
AssignDiseaseContentBtnClickListener("crimson_curse_overview_btn")
AssignDiseaseContentBtnClickListener("crimson_curse_source_btn")
AssignDiseaseContentBtnClickListener("crimson_curse_cure_btn")



AssignCrimsonContentBtnClickListener("crimson_curse_passive")
AssignCrimsonContentBtnClickListener("crimson_curse_craving")
AssignCrimsonContentBtnClickListener("crimson_curse_bloodlust")
AssignCrimsonContentBtnClickListener("crimson_curse_wasting")


function attachSharedElementHoverListener(elementid) {

  const TriggerElement = document.getElementById(elementid)
  const TargetElement = document.getElementById(`${elementid}_desc`)

  TriggerElement.addEventListener("mouseenter", function() {
    TargetElement.style.display = "block";
  });

  TriggerElement.addEventListener("mouseleave", function() {
    TargetElement.style.display = "none";
  });

}

attachSharedElementHoverListener("bad_humors");
attachSharedElementHoverListener("the_black_plague");
attachSharedElementHoverListener("bullmic");
attachSharedElementHoverListener("creeping_cough");
attachSharedElementHoverListener("ennui");
attachSharedElementHoverListener("grey_rot");
attachSharedElementHoverListener("hemophilia");
attachSharedElementHoverListener("hysterical_blindness");
attachSharedElementHoverListener("lethargy");
attachSharedElementHoverListener("rabies");
attachSharedElementHoverListener("scurvy");
attachSharedElementHoverListener("spasm_of_the_entrails");
attachSharedElementHoverListener("spotted_fever");
attachSharedElementHoverListener("syphilis");
attachSharedElementHoverListener("tapeworm");
attachSharedElementHoverListener("tetanus");
attachSharedElementHoverListener("the_ague");
attachSharedElementHoverListener("the_fits");
attachSharedElementHoverListener("the_red_plague");
attachSharedElementHoverListener("the_runs");
attachSharedElementHoverListener("the_worries");
attachSharedElementHoverListener("vertigo");
attachSharedElementHoverListener("vampiric_spirits");
attachSharedElementHoverListener("wasting_sickness");
attachSharedElementHoverListener("sky_taint");





