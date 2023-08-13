function toggleMissionBox(selectedQuestBox){
    const allQuestBox = 
    [CCBox, CoMBox, DDsBox, EarlyBox1, EarlyBox2, EarlyBox3, VisualsBox, MusicBox, LateBox1, LateBox2, LateBox3,
     BossBox1, BossBox2, MiniBossBox1, BossBox3, BossBox4, MiniBossBox2, BossBox5, BossBox6, MiniBossBox3, BossBox7, BossBox8, CircusBox
     
    ];
    allQuestBox.forEach(questbox => {
        questbox.style.visibility = 'hidden';
    });
    selectedQuestBox.style.visibility = 'visible';
}

function toggleEmbarkBtn1() {
    EmbarkCC.style.display = 'none';
    EmbarkCoM.style.display = 'none';
    EmbarkDDs.style.display = 'none';
    EmbarkDefault.style.display = 'block';
}

function toggleEmbarkBtnCC() {
    EmbarkCC.style.display = 'block';
    EmbarkCoM.style.display = 'none';
    EmbarkDDs.style.display = 'none';
    EmbarkDefault.style.display = 'none';
}

function toggleEmbarkBtnCoM() {
    EmbarkCC.style.display = 'none';
    EmbarkCoM.style.display = 'block';
    EmbarkDDs.style.display = 'none';
    EmbarkDefault.style.display = 'none';
}

function toggleEmbarkBtnDDs() {
    EmbarkCC.style.display = 'none';
    EmbarkCoM.style.display = 'none';
    EmbarkDDs.style.display = 'block';
    EmbarkDefault.style.display = 'none';
}



  const CCBtn = document.getElementById('ccbtn');
  const ComBtn = document.getElementById('combtn');
  const DDsBtn = document.getElementById('ddsbtn');
  const EarlyBtn1 = document.getElementById('early1');
  const EarlyBtn2 = document.getElementById('early2');
  const EarlyBtn3 = document.getElementById('early3');
  const VisualsBtn = document.getElementById('visualsbtn');
  const MusicBtn = document.getElementById('musicbtn');
  const LateBtn1 = document.getElementById('late1');
  const LateBtn2 = document.getElementById('late2');
  const LateBtn3 = document.getElementById('late3');
  const BossBtn1 = document.getElementById("boss1");
  const BossBtn2 = document.getElementById("boss2");
  const MiniBossBtn1 = document.getElementById("miniboss1");
  const BossBtn3 = document.getElementById("boss3");
  const BossBtn4 = document.getElementById("boss4");
  const MiniBossBtn2 = document.getElementById("miniboss2");
  const BossBtn5 = document.getElementById("boss5");
  const BossBtn6 = document.getElementById("boss6");
  const MiniBossBtn3 = document.getElementById("miniboss3");
  const BossBtn7 = document.getElementById("boss7");
  const BossBtn8 = document.getElementById("boss8");
  const CircusBtn = document.getElementById('circus');


  const CCBox = document.getElementById('cc_txtbox');
  const CoMBox = document.getElementById('com_txtbox');
  const DDsBox = document.getElementById('dds_txtbox');
  const EarlyBox1 = document.getElementById('earlybox1');
  const EarlyBox2 = document.getElementById('earlybox2');
  const EarlyBox3 = document.getElementById('earlybox3');
  const VisualsBox = document.getElementById('visuals_box');
  const MusicBox = document.getElementById('music_box');
  const LateBox1 = document.getElementById('latebox1');
  const LateBox2 = document.getElementById('latebox2');
  const LateBox3 = document.getElementById('latebox3');
  const BossBox1 = document.getElementById("bossbox1");
  const BossBox2 = document.getElementById("bossbox2");
  const MiniBossBox1 = document.getElementById("minibossbox1");
  const BossBox3 = document.getElementById("bossbox3");
  const BossBox4 = document.getElementById("bossbox4");
  const MiniBossBox2 = document.getElementById("minibossbox2");
  const BossBox5 = document.getElementById("bossbox5");
  const BossBox6 = document.getElementById("bossbox6");
  const MiniBossBox3 = document.getElementById("minibossbox3");
  const BossBox7 = document.getElementById("bossbox7");
  const BossBox8 = document.getElementById("bossbox8");
  const CircusBox = document.getElementById("circusbox");

  const EmbarkDefault = document.getElementById('embark_button');
  const EmbarkCC = document.getElementById('embark_cc');
  const EmbarkCoM = document.getElementById('embark_com');
  const EmbarkDDs = document.getElementById('embark_dds');

  CCBtn.addEventListener('click', () => toggleMissionBox(CCBox));
  CCBtn.addEventListener('click', () => toggleEmbarkBtnCC());
  ComBtn.addEventListener('click', () => toggleMissionBox(CoMBox));
  ComBtn.addEventListener('click', () => toggleEmbarkBtnCoM());
  DDsBtn.addEventListener('click', () => toggleMissionBox(DDsBox));
  DDsBtn.addEventListener('click', () => toggleEmbarkBtnDDs());
  EarlyBtn1.addEventListener('click', () => toggleMissionBox(EarlyBox1));
  EarlyBtn2.addEventListener('click', () => toggleMissionBox(EarlyBox2));
  EarlyBtn3.addEventListener('click', () => toggleMissionBox(EarlyBox3));
  VisualsBtn.addEventListener('click', () => toggleMissionBox(VisualsBox));
  MusicBtn.addEventListener('click', () => toggleMissionBox(MusicBox));
  LateBtn1.addEventListener('click', () => toggleMissionBox(LateBox1));
  LateBtn2.addEventListener('click', () => toggleMissionBox(LateBox2));
  LateBtn3.addEventListener('click', () => toggleMissionBox(LateBox3));
  BossBtn1.addEventListener('click', () => toggleMissionBox(BossBox1));
  BossBtn2.addEventListener('click', () => toggleMissionBox(BossBox2));
  MiniBossBtn1.addEventListener('click', () => toggleMissionBox(MiniBossBox1));
  BossBtn3.addEventListener('click', () => toggleMissionBox(BossBox3));
  BossBtn4.addEventListener('click', () => toggleMissionBox(BossBox4));
  MiniBossBtn2.addEventListener('click', () => toggleMissionBox(MiniBossBox2));
  BossBtn5.addEventListener('click', () => toggleMissionBox(BossBox5));
  BossBtn6.addEventListener('click', () => toggleMissionBox(BossBox6));
  MiniBossBtn3.addEventListener('click', () => toggleMissionBox(MiniBossBox3));
  BossBtn7.addEventListener('click', () => toggleMissionBox(BossBox7));
  BossBtn8.addEventListener('click', () => toggleMissionBox(BossBox8));
  CircusBtn.addEventListener('click', () => toggleMissionBox(CircusBox));
  EarlyBtn1.addEventListener('click', () => toggleEmbarkBtn1());
  EarlyBtn2.addEventListener('click', toggleEmbarkBtn1);
  EarlyBtn3.addEventListener('click', toggleEmbarkBtn1);
  VisualsBtn.addEventListener('click', toggleEmbarkBtn1);
  MusicBtn.addEventListener('click', toggleEmbarkBtn1);
  LateBtn1.addEventListener('click', toggleEmbarkBtn1);
  LateBtn2.addEventListener('click', toggleEmbarkBtn1);
  LateBtn3.addEventListener('click', toggleEmbarkBtn1);
  

