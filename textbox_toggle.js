const HideAudio = document.getElementById('page_close');
HideAudio.volume = 0.6;


function toggleMissionBox(selectedQuestBox){
    const allQuestBox = 
    [CrimsonBox, MadnessBox, GauntletBox, RuinsBox1, RuinsBox2, RuinsBox3, WealdBox1, WealdBox2, WealdBox3, WarrensBox1, WarrensBox2, WarrensBox3, CoveBox1, CoveBox2, CoveBox3, HamletBox1, HamletBox2, HamletBox3, CircusBox
    ];
    allQuestBox.forEach(questbox => {
        questbox.style.display = 'none'
    });
    selectedQuestBox.style.display = 'block'
    
   
}



document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      handleEscape(CrimsonBox, CrimsonBackdrop, EmbarkCrimson);
      handleEscape(MadnessBox, MadnessBackdrop, EmbarkMadness);
      handleEscape(GauntletBox, GauntletBackdrop, EmbarkGauntlet);
      handleEscape(RuinsBox1, Ruins1Backdrop, EmbarkDefault);
      handleEscape(RuinsBox2, Ruins2Backdrop, EmbarkDefault);
      handleEscape(RuinsBox3, Ruins3Backdrop, EmbarkDefault);
      handleEscape(WealdBox1, Weald1Backdrop, EmbarkDefault);
      handleEscape(WealdBox2, Weald2Backdrop, EmbarkDefault);
      handleEscape(WealdBox3, Weald3Backdrop, EmbarkDefault);
      handleEscape(WarrensBox1, Warrens1Backdrop, EmbarkDefault);
      handleEscape(WarrensBox2, Warrens2Backdrop, EmbarkDefault);
      handleEscape(WarrensBox3, Warrens3Backdrop, EmbarkDefault);
      handleEscape(CoveBox1, Cove1Backdrop, EmbarkDefault);
      handleEscape(CoveBox2, Cove2Backdrop, EmbarkDefault);
      handleEscape(CoveBox3, Cove3Backdrop, EmbarkDefault);
      handleEscape(HamletBox1, Hamlet1Backdrop, EmbarkDefault);
      handleEscape(HamletBox2, Hamlet2Backdrop, EmbarkDefault);
      handleEscape(HamletBox3, Hamlet3Backdrop, EmbarkDefault);

      handleEscape(CircusBox);
      
    }
  });
  
  function handleEscape(keyElement, backdropElement, embarkElement) {
    if (keyElement.style.display === 'block') {
      HideAudio.currentTime = 0;
      HideAudio.play();
      keyElement.style.display = 'none';

      if(backdropElement) {
      backdropElement.style.display = 'none';
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
  const allBackdrops = [CrimsonBackdrop, MadnessBackdrop, GauntletBackdrop, Ruins1Backdrop, Ruins2Backdrop, Ruins3Backdrop, Weald1Backdrop, Weald2Backdrop, Weald3Backdrop, Warrens1Backdrop, Warrens2Backdrop, Warrens3Backdrop, Cove1Backdrop, Cove2Backdrop, Cove3Backdrop, Hamlet1Backdrop, Hamlet2Backdrop, Hamlet3Backdrop];

  allBackdrops.forEach(backdrop => {
      backdrop.style.display = 'none';
  });

  selectedBackdrop.style.display = 'block';
}



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

  const RuinsBox1 = document.getElementById('ruinsbox1');
  const RuinsBox2 = document.getElementById('ruinsbox2');
  const RuinsBox3 = document.getElementById('ruinsbox3');

  const WealdBox1 = document.getElementById('wealdbox1');
  const WealdBox2 = document.getElementById('wealdbox2');
  const WealdBox3 = document.getElementById('wealdbox3');

  const WarrensBox1 = document.getElementById('warrensbox1');
  const WarrensBox2 = document.getElementById('warrensbox2');
  const WarrensBox3 = document.getElementById('warrensbox3');

  const CoveBox1 = document.getElementById('covebox1');
  const CoveBox2 = document.getElementById('covebox2');
  const CoveBox3 = document.getElementById('covebox3');
  
  const HamletBox1 = document.getElementById('sharedbox1');
  const HamletBox2 = document.getElementById('sharedbox2');
  const HamletBox3 = document.getElementById('sharedbox3');
  




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
attachClickListener(RuinsBtn3, RuinsBox3, toggleEmbarkBtn, Ruins3Backdrop);

attachClickListener(WealdBtn1, WealdBox1, toggleEmbarkBtn, Weald1Backdrop);
attachClickListener(WealdBtn2, WealdBox2, toggleEmbarkBtn, Weald2Backdrop);
attachClickListener(WealdBtn3, WealdBox3, toggleEmbarkBtn, Weald3Backdrop);

attachClickListener(WarrensBtn1, WarrensBox1, toggleEmbarkBtn, Warrens1Backdrop);
attachClickListener(WarrensBtn2, WarrensBox2, toggleEmbarkBtn, Warrens2Backdrop);
attachClickListener(WarrensBtn3, WarrensBox3, toggleEmbarkBtn, Warrens3Backdrop);

attachClickListener(CoveBtn1, CoveBox1, toggleEmbarkBtn, Cove1Backdrop);
attachClickListener(CoveBtn2, CoveBox2, toggleEmbarkBtn, Cove2Backdrop);
attachClickListener(CoveBtn3, CoveBox3, toggleEmbarkBtn, Cove3Backdrop);

attachClickListener(HamletBtn1, HamletBox1, toggleEmbarkBtn, Hamlet1Backdrop);
attachClickListener(HamletBtn2, HamletBox2, toggleEmbarkBtn, Hamlet2Backdrop);
attachClickListener(HamletBtn3, HamletBox3, toggleEmbarkBtn, Hamlet3Backdrop);



  const CircusBtn = document.getElementById('circus');
  const CircusBox = document.getElementById("circusbox");
  CircusBtn.addEventListener('click', () => toggleMissionBox(CircusBox));
