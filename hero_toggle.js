const renameBtns = document.getElementsByClassName('rename_button');
const skinchangeBtns = document.getElementsByClassName('swapskin_btn');
const PastHeroBtns = document.getElementsByClassName('prev_btn');
const NextHeroBtns = document.getElementsByClassName('next_btn');
const BtnSelectAudio = document.getElementById('btn_press');
BtnSelectAudio.volume = 0.5;
const HeroBox = document.getElementById('herobox');
const HeroPorts = document.getElementsByClassName('hero_port');
const OpenAudio = document.getElementById('page_open');
OpenAudio.volume = 0.6;

function PlayBtnPress() {
  BtnSelectAudio.currentTime = 0; // Reset the playback position to the beginning
  BtnSelectAudio.play();
}

for (const renameBtn of renameBtns) {
  renameBtn.addEventListener('click', function() {PlayBtnPress();})}

for (const skinchangeBtn of skinchangeBtns) {
  skinchangeBtn.addEventListener('click', function() {PlayBtnPress();})}

for (const PastHeroBtn of PastHeroBtns) {
  PastHeroBtn.addEventListener('click', function() {PlayBtnPress();})};

for (const NextHeroBtn of NextHeroBtns) {
  NextHeroBtn.addEventListener('click', function() {PlayBtnPress();})};

function PlayPageOpn() {
  OpenAudio.currentTime = 0;
  OpenAudio.play();
}

for (const HeroPort of HeroPorts) {
  HeroPort.addEventListener('click', function() {
    PlayPageOpn();
    HeroBox.style.display = 'block';
  })
}
const CloseBtn = document.getElementById('close');
const CloseAudio = document.getElementById('page_close');
CloseAudio.volume = 0.6;

CloseBtn.addEventListener('click', function() {
  CloseAudio.currentTime = 0;
  CloseAudio.play();
  HeroBox.style.display = 'none'
})

function HideAllBox() {
  const AllCharBox = [AbomBox, AntiBox, ArbBox, BHBox, CrusBox, FlagBox, GRBox, HellBox, HWMBox, HMBox, JesBox, LepBox, MAABox, MuskBox, OccBox, PDBox, SBBox, VesBox]
  AllCharBox.forEach(charbox => {
    charbox.style.display = 'none'
  })
}

function HideAllNxt() {
  const AllArrBox = [AbomPrev, AbomNext, AntiPrev, AntiNext, ArbPrev, ArbNext, BHPrev, BHNext, CrusPrev, CrusNext, FlagPrev, FlagNext, GRPrev, GRNext, HellPrev, HellNext, HWMPrev, HWMNext, HMNext, HMPrev, JesPrev, JesNext, LepNext, LepPrev, MAAPrev, MAANext, MuskPrev, MuskNext, OccNext, OccPrev, PDNext, PDPrev, SBPrev, SBNext, VesPrev, VesNext ]
  AllArrBox.forEach(arrbox => {
    arrbox.style.display = 'none'
  })
}
const AllNextBoxes = document.querySelectorAll( '.prev_btn, .next_btn'); 
AllNextBoxes.forEach(function(btn) {
  btn.addEventListener('click', function() {
    HideAll();
  })
})

//const AllBtns = document.getElementsByClassName('hero_port');
//AllBtns.forEach(function(btn) {
//  btn.addEventListener('click', function() {
//    HideAllBox()
//  })
//})


function HideAllSprite() {
  const AllSprites = [ Abom1, Abom2, Abom3, Abom4, Anti1, Anti2, Anti3, Anti4, Arb1, Arb2, Arb3, Arb4, BH1. BH2, BH3, BH4, Crus1, Crus2, Crus3, Crus4, Flag1, Flag2, Flag3, Flag4, GR1, GR2, GR3, GR4, Hell1, Hell2, Hell3, Hell4, HWM1, HWM2, HWM3, HWM4, HM1, HM2, HM3, HM4, Jes1, Jes2, Jes3, Jes4, Lep1, Lep2, Lep3, Lep4, MAA1, MAA2, MAA3, MAA4, Musk1, Musk2, Musk3, Musk4, Occ1, Occ2, Occ3, Occ4, PD1, PD2, PD3, PD4, SB1, SB2, SB3, SB4, Ves1, Ves2, Ves3, Ves4]
  AllSprites.forEach(sprite => {
    sprite.style.display = 'none'
  })
}

function HideAll() {
  const AllElements = [AbomBox, AbomNext, AbomPrev, AntiBox, AntiPrev, AntiNext, ArbBox, ArbPrev, ArbNext, BHBox, BHNext, BHPrev, CrusBox, CrusPrev, CrusNext, FlagBox, FlagNext, FlagPrev, GRBox, GRNext, GRPrev, HellBox, HellPrev, HellNext, HWMBox, HWMNext, HWMPrev, HMBox, HMPrev, HMNext, JesBox, JesNext, JesPrev, LepBox, LepPrev, LepNext, MAABox, MAANext, MAAPrev, MuskBox, MuskNext, MuskPrev, OccBox, OccNext, OccPrev, PDBox, PDPrev, PDNext, SBBox, SBPrev, SBNext, VesBox, VesPrev, VesNext ]
  AllElements.forEach(element => { 
    element.style.display = 'none'
  })
}

const AbomBtn = document.getElementById('Abombtn');
const AbomBox = document.getElementById('Abombox');
const Abom1 = document.getElementById('Abom1');
const Abom2 = document.getElementById('Abom2');
const Abom3 = document.getElementById('Abom3');
const Abom4 = document.getElementById('Abom4');
const AbomPrev = document.getElementById('prev_Abom'); 
const AbomNext = document.getElementById('next_Abom');
const AbomSwap = document.getElementById('palette_Abom');

const AntiBtn = document.getElementById('Antibtn');
const AntiBox = document.getElementById('Antibox');
const Anti1 = document.getElementById('Anti1');
const Anti2 = document.getElementById('Anti2');
const Anti3 = document.getElementById('Anti3');
const Anti4 = document.getElementById('Anti4');
const AntiPrev = document.getElementById('prev_Anti');
const AntiNext = document.getElementById('next_Anti');
const AntiSwap = document.getElementById('palette_Anti');

const ArbBtn = document.getElementById('Arbbtn');
const ArbBox = document.getElementById('Arbbox');
const Arb1 = document.getElementById('Arb1');
const Arb2 = document.getElementById('Arb2');
const Arb3 = document.getElementById('Arb3');
const Arb4 = document.getElementById('Arb4');
const ArbPrev = document.getElementById('prev_Arb');
const ArbNext = document.getElementById('next_Arb');
const ArbSwap = document.getElementById('palette_Arb');

const BHBtn = document.getElementById('BHbtn');
const BHBox = document.getElementById('BHbox');
const BH1 = document.getElementById('BH1');
const BH2 = document.getElementById('BH2');
const BH3 = document.getElementById('BH3');
const BH4 = document.getElementById('BH4');
const BHPrev = document.getElementById('prev_BH');
const BHNext = document.getElementById('next_BH');
const BHSwap = document.getElementById('palette_BH');

const CrusBtn = document.getElementById('Crusbtn');
const CrusBox = document.getElementById('Crusbox');
const Crus1 = document.getElementById('Crus1');
const Crus2 = document.getElementById('Crus2');
const Crus3 = document.getElementById('Crus3');
const Crus4 = document.getElementById('Crus4');
const CrusPrev = document.getElementById('prev_Crus');
const CrusNext = document.getElementById('next_Crus');
const CrusSwap = document.getElementById('palette_Crus');

const FlagBtn = document.getElementById('Flagbtn');
const FlagBox = document.getElementById('Flagbox');
const Flag1 = document.getElementById('Flag1');
const Flag2 = document.getElementById('Flag2');
const Flag3 = document.getElementById('Flag3');
const Flag4 = document.getElementById('Flag4');
const FlagPrev = document.getElementById('prev_Flag');
const FlagNext = document.getElementById('next_Flag');
const FlagSwap = document.getElementById('palette_Flag');

const GRBtn = document.getElementById('GRbtn');
const GRBox = document.getElementById('GRbox');
const GR1 = document.getElementById('GR1');
const GR2 = document.getElementById('GR2');
const GR3 = document.getElementById('GR3');
const GR4 = document.getElementById('GR4');
const GRPrev = document.getElementById('prev_GR');
const GRNext = document.getElementById('next_GR');
const GRSwap = document.getElementById('palette_GR');

const HellBtn = document.getElementById('Hellbtn');
const HellBox = document.getElementById('Hellbox');
const Hell1 = document.getElementById('Hell1');
const Hell2 = document.getElementById('Hell2');
const Hell3 = document.getElementById('Hell3');
const Hell4 = document.getElementById('Hell4');
const HellPrev = document.getElementById('prev_Hell');
const HellNext = document.getElementById('next_Hell');
const HellSwap = document.getElementById('palette_Hell');

const HWMBtn = document.getElementById('HWMbtn');
const HWMBox = document.getElementById('HWMbox');
const HWM1 = document.getElementById('HWM1');
const HWM2 = document.getElementById('HWM2');
const HWM3 = document.getElementById('HWM3');
const HWM4 = document.getElementById('HWM4');
const HWMPrev = document.getElementById('prev_HWM');
const HWMNext = document.getElementById('next_HWM');
const HWMSwap = document.getElementById('palette_HWM');

const HMBtn = document.getElementById('HMbtn');
const HMBox = document.getElementById('HMbox');
const HM1 = document.getElementById('HM1');
const HM2 = document.getElementById('HM2');
const HM3 = document.getElementById('HM3');
const HM4 = document.getElementById('HM4');
const HMPrev = document.getElementById('prev_HM');
const HMNext = document.getElementById('next_HM');
const HMSwap = document.getElementById('palette_HM');

const JesBtn = document.getElementById('Jesbtn');
const JesBox = document.getElementById('Jesbox');
const Jes1 = document.getElementById('Jes1');
const Jes2 = document.getElementById('Jes2');
const Jes3 = document.getElementById('Jes3');
const Jes4 = document.getElementById('Jes4');
const JesPrev = document.getElementById('prev_Jes');
const JesNext = document.getElementById('next_Jes');
const JesSwap = document.getElementById('palette_Jes');

const LepBtn = document.getElementById('Lepbtn');
const LepBox = document.getElementById('Lepbox');
const Lep1 = document.getElementById('Lep1');
const Lep2 = document.getElementById('Lep2');
const Lep3 = document.getElementById('Lep3');
const Lep4 = document.getElementById('Lep4');
const LepPrev = document.getElementById('prev_Lep');
const LepNext = document.getElementById('next_Lep');
const LepSwap = document.getElementById('palette_Lep');

const MAABtn = document.getElementById('MAAbtn');
const MAABox = document.getElementById('MAAbox');
const MAA1 = document.getElementById('MAA1');
const MAA2 = document.getElementById('MAA2');
const MAA3 = document.getElementById('MAA3');
const MAA4 = document.getElementById('MAA4');
const MAAPrev = document.getElementById('prev_MAA');
const MAANext = document.getElementById('next_MAA');
const MAASwap = document.getElementById('palette_MAA');

const MuskBtn = document.getElementById('Muskbtn');
const MuskBox = document.getElementById('Muskbox');
const Musk1 = document.getElementById('Musk1');
const Musk2 = document.getElementById('Musk2');
const Musk3 = document.getElementById('Musk3');
const Musk4 = document.getElementById('Musk4');
const MuskPrev = document.getElementById('prev_Musk');
const MuskNext = document.getElementById('next_Musk');
const MuskSwap = document.getElementById('palette_Musk');

const OccBtn = document.getElementById('Occbtn');
const OccBox = document.getElementById('Occbox');
const Occ1 = document.getElementById('Occ1');
const Occ2 = document.getElementById('Occ2');
const Occ3 = document.getElementById('Occ3');
const Occ4 = document.getElementById('Occ4');
const OccPrev = document.getElementById('prev_Occ');
const OccNext = document.getElementById('next_Occ');
const OccSwap = document.getElementById('palette_Occ');

const PDBtn = document.getElementById('PDbtn');
const PDBox = document.getElementById('PDbox');
const PD1 = document.getElementById('PD1');
const PD2 = document.getElementById('PD2');
const PD3 = document.getElementById('PD3');
const PD4 = document.getElementById('PD4');
const PDPrev = document.getElementById('prev_PD');
const PDNext = document.getElementById('next_PD');
const PDSwap = document.getElementById('palette_PD');

const SBBtn = document.getElementById('SBbtn');
const SBBox = document.getElementById('SBbox');
const SB1 = document.getElementById('SB1');
const SB2 = document.getElementById('SB2');
const SB3 = document.getElementById('SB3');
const SB4 = document.getElementById('SB4');
const SBPrev = document.getElementById('prev_SB');
const SBNext = document.getElementById('next_SB');
const SBSwap = document.getElementById('palette_SB');

const VesBtn = document.getElementById('Vesbtn');
const VesBox = document.getElementById('Vesbox');
const Ves1 = document.getElementById('Ves1');
const Ves2 = document.getElementById('Ves2');
const Ves3 = document.getElementById('Ves3');
const Ves4 = document.getElementById('Ves4');
const VesPrev = document.getElementById('prev_Ves');
const VesNext = document.getElementById('next_Ves');
const VesSwap = document.getElementById('palette_Ves');


function handleButtonClick(showBox, showElement, showPrev, showNext) {
  HideAllBox();
  showBox.style.display = 'block';
  showElement.style.display = 'block';
  showPrev.style.display = 'block';
  showNext.style.display = 'block';
}

AbomBtn.addEventListener('click', function() {handleButtonClick(AbomBox, Abom1, AbomPrev, AbomNext);});
AntiBtn.addEventListener('click', function() {handleButtonClick(AntiBox, Anti1, AntiPrev, AntiNext);});
ArbBtn.addEventListener('click', function() {handleButtonClick(ArbBox, Arb1, ArbPrev, ArbNext);});
BHBtn.addEventListener('click', function() {handleButtonClick(BHBox, BH1, BHPrev, BHNext);});
CrusBtn.addEventListener('click', function() {handleButtonClick(CrusBox, Crus1, CrusPrev, CrusNext);});
FlagBtn.addEventListener('click', function() {handleButtonClick(FlagBox, Flag1, FlagPrev, FlagNext);});
GRBtn.addEventListener('click', function() {handleButtonClick(GRBox, GR1, GRPrev, GRNext);});
HellBtn.addEventListener('click', function() {handleButtonClick(HellBox, Hell1, HellPrev, HellNext);});
HWMBtn.addEventListener('click', function() {handleButtonClick(HWMBox, HWM1, HWMPrev, HWMNext);});
HMBtn.addEventListener('click', function() {handleButtonClick(HMBox, HM1, HMPrev, HMNext);});
JesBtn.addEventListener('click', function() {handleButtonClick(JesBox, Jes1, JesPrev, JesNext);});
LepBtn.addEventListener('click', function() {handleButtonClick(LepBox, Lep1, LepPrev, LepNext);});
MAABtn.addEventListener('click', function() {handleButtonClick(MAABox, MAA1, MAAPrev, MAANext);});
MuskBtn.addEventListener('click', function() {handleButtonClick(MuskBox, Musk1, MuskPrev, MuskNext);});
OccBtn.addEventListener('click', function() {handleButtonClick(OccBox, Occ1, OccPrev, OccNext);});
PDBtn.addEventListener('click', function() {handleButtonClick(PDBox, PD1, PDPrev, PDNext);});
SBBtn.addEventListener('click', function() {handleButtonClick(SBBox, SB1, SBPrev, SBNext);});
VesBtn.addEventListener('click', function() {handleButtonClick(VesBox, Ves1, VesPrev, VesNext);});

function handleButtonNext(charBox, charElement, charPrev, charNext) {
  charBox.style.display = 'block';
  charElement.style.display = 'block';
  charPrev.style.display = 'block';
  charNext.style.display = 'block';
}

AbomPrev.addEventListener('click', function() {handleButtonNext(VesBox, Ves1, VesPrev, VesNext)})
AbomNext.addEventListener('click', function() {handleButtonNext(AntiBox, Anti1, AntiPrev, AntiNext)})
VesPrev.addEventListener('click', function() {handleButtonNext(SBBox, SB1, SBPrev, SBNext)})
VesNext.addEventListener('click', function() {handleButtonNext(AbomBox, Abom1, AbomPrev, AbomNext)})
SBNext.addEventListener('click', function() {handleButtonNext(VesBox, Ves1, VesPrev, VesNext)})
SBPrev.addEventListener('click', function() {handleButtonNext(PDBox, PD1, PDPrev, PDNext)})
PDPrev.addEventListener('click', function() {handleButtonNext(OccBox, Occ1, OccPrev, OccNext)})
PDNext.addEventListener('click', function() {handleButtonNext(SBBox, SB1, SBPrev, SBNext)})
OccPrev.addEventListener('click', function() {handleButtonNext(MuskBox, Musk1, MuskPrev, MuskNext)})
OccNext.addEventListener('click', function() {handleButtonNext(PDBox, PD1, PDPrev, PDNext)})
MuskPrev.addEventListener('click', function() {handleButtonNext(MAABox, MAA1, MAAPrev, MAANext)})
MuskNext.addEventListener('click', function() {handleButtonNext(OccBox, Occ1, OccPrev, OccNext)})
MAAPrev.addEventListener('click', function() { handleButtonNext(LepBox, Lep1, LepPrev, LepNext)})
MAANext.addEventListener('click', function() {handleButtonNext(MuskBox, Musk1, MuskPrev, MuskNext)})
LepPrev.addEventListener('click', function() {handleButtonNext(JesBox, Jes1, JesPrev, JesNext)})
LepNext.addEventListener('click', function() {handleButtonNext(MAABox, MAA1, MAAPrev, MAANext)})
JesPrev.addEventListener('click', function() {handleButtonNext(HMBox, HM1, HMPrev, HMNext)})
JesNext.addEventListener('click', function() {handleButtonNext(LepBox, Lep1, LepPrev, LepNext)})
HMPrev.addEventListener('click', function() {handleButtonNext(HWMBox, HWM1, HWMPrev, HWMNext)})
HMNext.addEventListener('click', function() {handleButtonNext(JesBox, Jes1, JesPrev, JesNext)})
HWMPrev.addEventListener('click', function() {handleButtonNext(HellBox, Hell1, HellPrev, HellNext)})
HWMNext.addEventListener('click', function() { handleButtonNext(HMBox, HM1, HMPrev, HMNext)})
HellPrev.addEventListener('click', function() {handleButtonNext(GRBox, GR1, GRPrev, GRNext)})
HellNext.addEventListener('click', function() {handleButtonNext(HWMBox, HWM1, HWMPrev, HWMNext)})
GRPrev.addEventListener('click', function() { handleButtonNext(FlagBox, Flag1, FlagPrev, FlagNext)})
GRNext.addEventListener('click', function() {handleButtonNext(HellBox, Hell1, HellPrev, HellNext)})
FlagPrev.addEventListener('click', function() {handleButtonNext(CrusBox, Crus1, CrusPrev, CrusNext)})
FlagNext.addEventListener('click', function() {handleButtonNext(GRBox, GR1, GRPrev, GRNext)})
CrusPrev.addEventListener('click', function() {handleButtonNext(BHBox, BH1, BHPrev, BHNext)})
CrusNext.addEventListener('click', function() {handleButtonNext(FlagBox, Flag1, FlagPrev, FlagNext)})
BHPrev.addEventListener('click', function() {handleButtonNext(ArbBox, Arb1, ArbPrev, ArbNext)})
BHNext.addEventListener('click', function() {handleButtonNext(CrusBox, Crus1, CrusPrev, CrusNext)})
ArbPrev.addEventListener('click', function() { handleButtonNext(AntiBox, Anti1, AntiPrev, AntiNext)})
ArbNext.addEventListener('click', function() { handleButtonNext(BHBox, BH1, BHPrev, BHNext)})
AntiPrev.addEventListener('click', function() {handleButtonNext(AbomBox, Abom1, AbomPrev, AbomNext)})
AntiNext.addEventListener('click', function() {handleButtonNext(ArbBox, Arb1, ArbPrev, ArbNext)})


function handleSkinSwap(char1, char2, char3, char4) {
if (char1.style.display === 'block') {
    char1.style.display = 'none'
    char2.style.display = 'block'
}
else if (char2.style.display === 'block') {
    char2.style.display = 'none'
    char3.style.display = 'block'
}
else if (char3.style.display === 'block') {
    char3.style.display = 'none'
    char4.style.display = 'block'
}
else if (char4.style.display === 'block') {
    char4.style.display = 'none'
    char1.style.display = 'block'
}
}
AbomSwap.addEventListener('click', function() {handleSkinSwap(Abom1, Abom2, Abom3, Abom4)});
AntiSwap.addEventListener('click', function() {handleSkinSwap(Anti1, Anti2, Anti3, Anti4)});
ArbSwap.addEventListener('click', function() {handleSkinSwap(Arb1, Arb2, Arb3, Arb4)});
BHSwap.addEventListener('click', function() {handleSkinSwap(BH1, BH2, BH3, BH4)});
CrusSwap.addEventListener('click', function() {handleSkinSwap(Crus1, Crus2, Crus3, Crus4)});
FlagSwap.addEventListener('click', function() {handleSkinSwap(Flag1, Flag2, Flag3, Flag4)});
GRSwap.addEventListener('click', function() {handleSkinSwap(GR1, GR2, GR3, GR4)});
HellSwap.addEventListener('click', function() {handleSkinSwap(Hell1, Hell2, Hell3, Hell4)});
HWMSwap.addEventListener('click', function() {handleSkinSwap(HWM1, HWM2, HWM3, HWM4)});
HMSwap.addEventListener('click', function() {handleSkinSwap(HM1, HM2, HM3, HM4)});
JesSwap.addEventListener('click', function() {handleSkinSwap(Jes1, Jes2, Jes3, Jes4)});
LepSwap.addEventListener('click', function() {handleSkinSwap(Lep1, Lep2, Lep3, Lep4)});
MAASwap.addEventListener('click', function() {handleSkinSwap(MAA1, MAA2, MAA3, MAA4)});
MuskSwap.addEventListener('click', function() {handleSkinSwap(Musk1, Musk2, Musk3, Musk4)});
OccSwap.addEventListener('click', function() {handleSkinSwap(Occ1, Occ2, Occ3, Occ4)});
PDSwap.addEventListener('click', function() {handleSkinSwap(PD1, PD2, PD3, PD4)});
SBSwap.addEventListener('click', function() {handleSkinSwap(SB1, SB2, SB3, SB4)});
VesSwap.addEventListener('click', function() {handleSkinSwap(Ves1, Ves2, Ves3, Ves4)});

