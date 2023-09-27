const bc_enter_button = document.getElementById('circus');
const bc_audio = document.getElementById('bc_enter');
bc_audio.volume = 0.5;

bc_enter_button.addEventListener('click', function() {
  bc_audio.currentTime = 0;
  bc_audio.play();
})


const mission_btns = document.getElementsByClassName('mission_btn');
const mission_button_audio = document.getElementById('mission_select_sfx');
mission_button_audio.volume = 0.2;
 
function playAudioMission() {
    mission_button_audio.currentTime = 0; 
    mission_button_audio.play();
}

for (const mission_btn of mission_btns) {
    mission_btn.addEventListener('click', function() {
    playAudioMission();});
  };


function toggleMissionBox(selectedQuestBox){
    const allQuestBox = 
    [CrimsonBox, MadnessBox, GauntletBox, BossBoxHub, 
      RuinsBox1, RuinsBox2, 
      WealdBox1, WealdBox2, 
      WarrensBox1, WarrensBox2, 
      CoveBox1, CoveBox2,
      HamletBox1, HamletBox2, 
      CircusBox
    ];
    allQuestBox.forEach(questbox => {
        questbox.style.display = 'none'
    });
    selectedQuestBox.style.display = 'block'
    
   
}

const HideAudio = document.getElementById('page_close');
HideAudio.volume = 0.6;



document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      handleEscape(CrimsonBox, CrimsonBackdrop, EmbarkCrimson);
      handleEscape(MadnessBox, MadnessBackdrop, EmbarkMadness);
      handleEscape(GauntletBox, GauntletBackdrop, EmbarkGauntlet);
      handleEscape(RuinsBox1, Ruins1Backdrop, EmbarkDefault);
      handleEscape(RuinsBox2, Ruins2Backdrop, EmbarkDefault);

      handleEscape(BossBoxHub, Ruins3Backdrop, EmbarkDefault, Weald3Backdrop, Warrens3Backdrop, Cove3Backdrop, Hamlet3Backdrop);      


      handleEscape(WealdBox1, Weald1Backdrop, EmbarkDefault);
      handleEscape(WealdBox2, Weald2Backdrop, EmbarkDefault);

      handleEscape(WarrensBox1, Warrens1Backdrop, EmbarkDefault);
      handleEscape(WarrensBox2, Warrens2Backdrop, EmbarkDefault);
      handleEscape(BossBoxHub, Warrens3Backdrop, EmbarkDefault);
      handleEscape(CoveBox1, Cove1Backdrop, EmbarkDefault);
      handleEscape(CoveBox2, Cove2Backdrop, EmbarkDefault);
      handleEscape(HamletBox1, Hamlet1Backdrop, EmbarkDefault);
      handleEscape(HamletBox2, Hamlet2Backdrop, EmbarkDefault);

      handleEscape(CircusBox);
      
    }
  });
  
  function handleEscape(keyElement, backdropElement, embarkElement, backdropElement2, backdropElement3, backdropElement4) {
    if (keyElement.style.display === 'block') {
      HideAudio.currentTime = 0;
      HideAudio.play();
      keyElement.style.display = 'none';

      if(backdropElement) {
      backdropElement.style.display = 'none';
    }
    if(backdropElement2) {
      backdropElement2.style.display = 'none';
    }
    if(backdropElement3) {
      backdropElement3.style.display = 'none';
    }
    if(backdropElement4) {
      backdropElement4.style.display = 'none';
    }
      if (embarkElement) {
        embarkElement.style.display = 'none';
    }
  }
}

const EmbarkDefault = document.getElementById('embark_button');
const EmbarkCrimson = document.getElementById('embark_crimson');
const EmbarkMadness = document.getElementById('embark_madness');
const EmbarkGauntlet = document.getElementById('embark_gauntlet');


function toggleEmbarkBtn() {
  EmbarkCrimson.style.display = 'none';
  EmbarkMadness.style.display = 'none';
  EmbarkGauntlet.style.display = 'none';
  EmbarkDefault.style.display = 'block';
}

function toggleEmbarkBtnCC() {
  EmbarkCrimson.style.display = 'block';
  EmbarkMadness.style.display = 'none';
  EmbarkGauntlet.style.display = 'none';
  EmbarkDefault.style.display = 'none';
}

function toggleEmbarkBtnCoM() {
  EmbarkCrimson.style.display = 'none';
  EmbarkMadness.style.display = 'block';
  EmbarkGauntlet.style.display = 'none';
  EmbarkDefault.style.display = 'none';
}

function toggleEmbarkBtnDDs() {
  EmbarkCrimson.style.display = 'none';
  EmbarkMadness.style.display = 'none';
  EmbarkGauntlet.style.display = 'block';
  EmbarkDefault.style.display = 'none';
}


function toggleBackdropVisibility(selectedBackdrop) {
  const allBackdrops = [
    CrimsonBackdrop, MadnessBackdrop, GauntletBackdrop, 
    Ruins1Backdrop, Ruins2Backdrop, Ruins3Backdrop, 
    Weald1Backdrop, Weald2Backdrop, Weald3Backdrop, 
    Warrens1Backdrop, Warrens2Backdrop, Warrens3Backdrop, 
    Cove1Backdrop, Cove2Backdrop, Cove3Backdrop, 
    Hamlet1Backdrop, Hamlet2Backdrop, Hamlet3Backdrop];

  allBackdrops.forEach(backdrop => {
      backdrop.style.display = 'none';
  });

  selectedBackdrop.style.display = 'block';
}

  const CircusBtn = document.getElementById('circus');
  const CircusBox = document.getElementById("circusbox");
  CircusBtn.addEventListener('click', () => toggleMissionBox(CircusBox));


  const CrimsonButton = document.getElementById('crimsonbutton');
  const MadnessButton = document.getElementById('madnessbtn');
  const GauntletButton = document.getElementById('gauntletbtn');

  const RuinsBtn1 = document.getElementById('ruins1');
  const RuinsBtn2 = document.getElementById('ruins2');
  const RuinsBtn3 = document.getElementById('ruins3');

  const WealdBtn1 = document.getElementById('weald1');
  const WealdBtn2 = document.getElementById('weald2');
  const WealdBtn3 = document.getElementById('weald3');

  const WarrensBtn1 = document.getElementById('warrens1');
  const WarrensBtn2 = document.getElementById('warrens2');
  const WarrensBtn3 = document.getElementById('warrens3');

  const CoveBtn1 = document.getElementById('cove1');
  const CoveBtn2 = document.getElementById('cove2');
  const CoveBtn3 = document.getElementById('cove3');

  const HamletBtn1 = document.getElementById('shared1');
  const HamletBtn2 = document.getElementById('shared2');
  const HamletBtn3 = document.getElementById('shared3');


  const CrimsonBackdrop = document.querySelector('.crimson_backdrop');
  const MadnessBackdrop = document.querySelector('.madness_backdrop');
  const GauntletBackdrop = document.querySelector('.gauntlet_backdrop');

  const Ruins1Backdrop = document.querySelector('.ruins_enemy_backdrop')
  const Ruins2Backdrop = document.querySelector('.ruins_curio_backdrop')
  const Ruins3Backdrop = document.querySelector('.ruins_boss_backdrop')

  const Weald1Backdrop = document.querySelector('.weald_enemy_backdrop');
  const Weald2Backdrop = document.querySelector('.weald_curio_backdrop');
  const Weald3Backdrop = document.querySelector('.weald_boss_backdrop');

  const Warrens1Backdrop = document.querySelector('.warrens_enemy_backdrop');
  const Warrens2Backdrop = document.querySelector('.warrens_curio_backdrop');
  const Warrens3Backdrop = document.querySelector('.warrens_boss_backdrop');

  const Cove1Backdrop = document.querySelector('.cove_enemy_backdrop');
  const Cove2Backdrop = document.querySelector('.cove_curio_backdrop');
  const Cove3Backdrop = document.querySelector('.cove_boss_backdrop');
  
  const Hamlet1Backdrop = document.querySelector('.shared_enemy_backdrop');
  const Hamlet2Backdrop = document.querySelector('.shared_curio_backdrop');
  const Hamlet3Backdrop = document.querySelector('.shared_boss_backdrop');
  



  const CrimsonBox = document.getElementById('crimson_txtbox');
  const MadnessBox = document.getElementById('madness_txtbox');
  const GauntletBox = document.getElementById('gauntlet_txtbox');
  const BossBoxHub= document.getElementById('boss_box_hub');

  const RuinsBox1 = document.getElementById('ruinsbox1');
  const RuinsBox2 = document.getElementById('ruinsbox2');


  const WealdBox1 = document.getElementById('wealdbox1');
  const WealdBox2 = document.getElementById('wealdbox2');


  const WarrensBox1 = document.getElementById('warrensbox1');
  const WarrensBox2 = document.getElementById('warrensbox2');


  const CoveBox1 = document.getElementById('covebox1');
  const CoveBox2 = document.getElementById('covebox2');

  
  const HamletBox1 = document.getElementById('sharedbox1');
  const HamletBox2 = document.getElementById('sharedbox2');
  




function attachClickListener(button, box, embarkFunction, backdrop) {
  button.addEventListener('click', () => {
    toggleMissionBox(box);
    embarkFunction();
    toggleBackdropVisibility(backdrop);
  });
}

attachClickListener(CrimsonButton, CrimsonBox, toggleEmbarkBtnCC, CrimsonBackdrop);
attachClickListener(GauntletButton, GauntletBox, toggleEmbarkBtnDDs, GauntletBackdrop);
attachClickListener(MadnessButton, MadnessBox, toggleEmbarkBtnCoM, MadnessBackdrop);

attachClickListener(RuinsBtn1, RuinsBox1, toggleEmbarkBtn, Ruins1Backdrop);
attachClickListener(RuinsBtn2, RuinsBox2, toggleEmbarkBtn, Ruins2Backdrop);
attachClickListener(RuinsBtn3, BossBoxHub, toggleEmbarkBtn, Ruins3Backdrop);

attachClickListener(WealdBtn1, WealdBox1, toggleEmbarkBtn, Weald1Backdrop);
attachClickListener(WealdBtn2, WealdBox2, toggleEmbarkBtn, Weald2Backdrop);
attachClickListener(WealdBtn3, BossBoxHub, toggleEmbarkBtn, Weald3Backdrop);

attachClickListener(WarrensBtn1, WarrensBox1, toggleEmbarkBtn, Warrens1Backdrop);
attachClickListener(WarrensBtn2, WarrensBox2, toggleEmbarkBtn, Warrens2Backdrop);
attachClickListener(WarrensBtn3, BossBoxHub, toggleEmbarkBtn, Warrens3Backdrop);

attachClickListener(CoveBtn1, CoveBox1, toggleEmbarkBtn, Cove1Backdrop);
attachClickListener(CoveBtn2, CoveBox2, toggleEmbarkBtn, Cove2Backdrop);
attachClickListener(CoveBtn3, BossBoxHub, toggleEmbarkBtn, Cove3Backdrop);

attachClickListener(HamletBtn1, HamletBox1, toggleEmbarkBtn, Hamlet1Backdrop);
attachClickListener(HamletBtn2, HamletBox2, toggleEmbarkBtn, Hamlet2Backdrop);
attachClickListener(HamletBtn3, BossBoxHub, toggleEmbarkBtn, Hamlet3Backdrop);



