const renameBtns = document.getElementsByClassName('rename_button');
const skinchangeBtns = document.getElementsByClassName('swapskin_btn');
const equipmentlvlBtns = document.getElementsByClassName('hero_lvl_btn');

const HeroPorts = document.getElementsByClassName('hero_port');
const HeroBox = document.getElementById('herobox');

const BtnSelectAudio = document.getElementById('btn_press');
BtnSelectAudio.volume = 0.7;

const OpenAudio = document.getElementById('page_open');
OpenAudio.volume = 0.6;

const CloseBtn = document.getElementById('close_herobox');
const CloseAudio = document.getElementById('page_close');
CloseAudio.volume = 0.6;

function PlayPageOpn() {
  OpenAudio.currentTime = 0;
  OpenAudio.play();
}

function PlayBtnPress() {
  BtnSelectAudio.currentTime = 0; 
  BtnSelectAudio.play();
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && HeroBox.style.display === 'flex') {
    CloseAudio.currentTime = 0;
    CloseAudio.play();
    HeroBox.style.display = 'none';
  }
});

for (const renameBtn of renameBtns) {
  renameBtn.addEventListener('click', function() {PlayBtnPress();})}

for (const skinchangeBtn of skinchangeBtns) {
  skinchangeBtn.addEventListener('click', function() {PlayBtnPress();})}

for (const equipmentlvlBtn of equipmentlvlBtns) {
  equipmentlvlBtn.addEventListener('click', function() {PlayBtnPress();})}

for (const HeroPort of HeroPorts) {
  HeroPort.addEventListener('click', function() {
    PlayPageOpn();
    HeroBox.style.display = 'flex';
  })
}


function HidePassiveHeader() {
  const PassiveHeader = document.getElementById("hero_passive_title")
  PassiveHeader.style.display = 'none'
}


function HideAllPassiveContent() {
  const AllPassiveContent = document.querySelectorAll(`[class*="passive_dic"]`);
  const AllPassiveInfoArray = Array.from(AllPassiveContent); 

  AllPassiveInfoArray.forEach(info => {
    info.style.display = 'none';
  });

  const PassiveHeader = document.getElementById("hero_passive_title")
  PassiveHeader.style.display = 'none'
}


function HideTrinketHeader() {
  const TrinketHeader = document.getElementById("hero_trinket_title")
  TrinketHeader.style.display = 'none'
}


function HideAllTrinketContent() {
  const AllHeroTrinketContent = document.querySelectorAll(`[class*="herotrinketmark"]`);
  const AllHeroTrinketInfoArray = Array.from(AllHeroTrinketContent); 

  AllHeroTrinketInfoArray.forEach(info => {
    info.style.display = 'none';
  });

  const TrinketHeader = document.getElementById("hero_trinket_title")
  TrinketHeader.style.display = 'none'
}



function HideDistrictEffectHeader() {
  const DistrictInfoHeader = document.getElementById("hero_district_effect_title")
  DistrictInfoHeader.style.display = 'none'
}


function HideAllDistrictEffectContent() {
  const AllDistrictInfoContent = document.querySelectorAll(`[class*="herodistrictmark"]`);
  const AllDistrictInfoArray = Array.from(AllDistrictInfoContent); 

  AllDistrictInfoArray.forEach(info => {
    info.style.display = 'none';
  });

  const DistrictInfoHeader = document.getElementById("hero_district_effect_title")
  DistrictInfoHeader.style.display = 'none'
}




CloseBtn.addEventListener('click', function() {
  CloseAudio.currentTime = 0;
  CloseAudio.play();
  HeroBox.style.display = 'none'
})

function HideAllSharedInfo() {
  const AllSharedInfo = document.getElementsByClassName("hero_shared_info");
  const SharedinfoArray = Array.from(AllSharedInfo); 

  SharedinfoArray.forEach(info => {
    info.style.display = 'none';
  });
}

function HideAllSprites() {
  const AllSprites = document.getElementsByClassName("hero_sprite")

  const AllSpritesArray = Array.from(AllSprites); 

  AllSpritesArray.forEach(sprite => {
    sprite.style.display = 'none';
  });

}
function HideAllSkinNumbers() {
  const AllSkinNumbers = document.getElementsByClassName("skin_num")

  const AllSkinNumberArray = Array.from(AllSkinNumbers); 

  AllSkinNumberArray.forEach(number => {
    number.style.display = 'none';
  });

}

function HideAllEquipmentNumbers() {
  const AllEquipmentNumbers = document.querySelectorAll('[class*="equipment_lvl_num1"], [class*="equipment_lvl_num2"]');

  const AllEquipmentNumberArray = Array.from(AllEquipmentNumbers); 

  AllEquipmentNumberArray.forEach(number => {
    number.style.display = 'none';
  });

}

function HideAllSkillLevelNumbers() {
  const AllSkillLvlNumbers = document.querySelectorAll('[class*="skill_lvl_container"]');

  const AllSkillLvlNumbersArray = Array.from(AllSkillLvlNumbers); 

  AllSkillLvlNumbersArray.forEach(number => {
    number.style.display = 'none';
  });

}

function HideAllDiffInfo() {
  const AllDiffInfo = document.querySelectorAll('[id$="_info_lvl1"], [id$="_info_lvl2"], [id$="_info_lvl3"], [id$="_info_lvl4"], [id$="_info_lvl5"]');
  const AllDiffinfoArray = Array.from(AllDiffInfo); 

  AllDiffinfoArray.forEach(info => {
    info.style.display = 'none';
  });
}

function HideAllResolveLvls() {
  const AllResolveLvls = document.getElementsByClassName("resolve_lvl")
  const AllResolveLvlsArray = Array.from(AllResolveLvls); 

  AllResolveLvlsArray.forEach(lvl => { 
    lvl.style.display = 'none'
  })
}





function attachHeroGearListener(hero, lvl) {
  const HeroLvlBtn = document.getElementById(`${hero}_gear_lvl${lvl}`);
  HeroLvlBtn.addEventListener('click', function () {
    hideAllInfoLevels();
    showResolveLevel(lvl);
    HideAllSkillLevelNumbers();

    const WeaponNum = document.getElementById(`weapon_num${lvl}`);
    const ArmorNum = document.getElementById(`armor_num${lvl}`);
    const SkillLvlNum = document.getElementById(`lvl${lvl}_skills`);

    const DiffData = document.getElementById(`${hero}_info_lvl${lvl}`);

    WeaponNum.style.display = 'block';
    ArmorNum.style.display = 'block';
    SkillLvlNum.style.display = 'flex';

    DiffData.style.display = 'flex';
  });
}

function hideAllInfoLevels() {
  HideAllDiffInfo();
  HideAllResolveLvls();
  HideAllEquipmentNumbers();
}

function showResolveLevel(lvl) {
  const resolveLevel = document.getElementById(`resolve_${lvl}`);
  resolveLevel.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  const heroNames = [
    "abom", 
    "anti", 
    "arb",
    "bh",
    "crus",
    "flag",
    "gr",
    "hell",
    "hwm",
    "hm",
    "jes",
    "lep",
    "maa",
    "musk",
    "occ",
    "pd",
    "sb",
    "ves",
  
]; 

  for (const hero of heroNames) {
    for (let i = 1; i <= 5; i++) {
      attachHeroGearListener(hero, i);
    }
  }
});



const SkillLevel1 = document.getElementById("lvl1_skills")
const Resolve0 = document.getElementById('resolve_1');
//const Resolve1 = document.getElementById('resolve_1');
const Resolve2 = document.getElementById('resolve_2');
const Resolve3 = document.getElementById('resolve_3');
const Resolve4 = document.getElementById('resolve_4');
const Resolve5 = document.getElementById('resolve_5');
//const Resolve6 = document.getElementById('resolve_6');

const SkinNum1 = document.getElementById('skin_number1');
const SkinNum2 = document.getElementById('skin_number2');
const SkinNum3 = document.getElementById('skin_number3');
const SkinNum4 = document.getElementById('skin_number4');

const WeaponNum1 = document.getElementById('weapon_num1');
const WeaponNum2 = document.getElementById('weapon_num2');
const WeaponNum3 = document.getElementById('weapon_num3');
const WeaponNum4 = document.getElementById('weapon_num4');
const WeaponNum5 = document.getElementById('weapon_num5');

const ArmorNum1 = document.getElementById('armor_num1');
const ArmorNum2 = document.getElementById('armor_num2');
const ArmorNum3 = document.getElementById('armor_num3');
const ArmorNum4 = document.getElementById('armor_num4');
const ArmorNum5 = document.getElementById('armor_num5');

const AbomBtn = document.getElementById('abomport');
const AbomBox = document.getElementById('abom_shared');
const Abom1 = document.getElementById('abomsprite1');
const Abom2 = document.getElementById('abomsprite2');
const Abom3 = document.getElementById('abomsprite3');
const Abom4 = document.getElementById('abomsprite4');
const AbomSwap = document.getElementById('abom_skinswap');

const AntiBtn = document.getElementById('antiport');
const AntiBox = document.getElementById('anti_shared');
const Anti1 = document.getElementById('antisprite1');
const Anti2 = document.getElementById('antisprite2');
const Anti3 = document.getElementById('antisprite3');
const Anti4 = document.getElementById('antisprite4');
const AntiSwap = document.getElementById('anti_skinswap');

const ArbBtn = document.getElementById('arbport');
const ArbBox = document.getElementById('arb_shared');
const Arb1 = document.getElementById('arbsprite1');
const Arb2 = document.getElementById('arbsprite2');
const Arb3 = document.getElementById('arbsprite3');
const Arb4 = document.getElementById('arbsprite4');
const ArbSwap = document.getElementById('arb_skinswap');

const BHBtn = document.getElementById('bhport');
const BHBox = document.getElementById('bh_shared');


const BH1 = document.getElementById('bhsprite1');
const BH2 = document.getElementById('bhsprite2');
const BH3 = document.getElementById('bhsprite3');
const BH4 = document.getElementById('bhsprite4');
const BHSwap = document.getElementById('bh_skinswap');

const CrusBtn = document.getElementById('crusport');
const CrusBox = document.getElementById('crus_shared');



const Crus1 = document.getElementById('crussprite1');
const Crus2 = document.getElementById('crussprite2');
const Crus3 = document.getElementById('crussprite3');
const Crus4 = document.getElementById('crussprite4');
const CrusSwap = document.getElementById('crus_skinswap');

const FlagBtn = document.getElementById('flagport');
const FlagBox = document.getElementById('flag_shared');



const Flag1 = document.getElementById('flagsprite1');
const Flag2 = document.getElementById('flagsprite2');
const Flag3 = document.getElementById('flagsprite3');
const Flag4 = document.getElementById('flagsprite4');
const FlagSwap = document.getElementById('flag_skinswap');

const GRBtn = document.getElementById('grport');
const GRBox = document.getElementById('gr_shared');
const GR1 = document.getElementById('grsprite1');
const GR2 = document.getElementById('grsprite2');
const GR3 = document.getElementById('grsprite3');
const GR4 = document.getElementById('grsprite4');
const GRSwap = document.getElementById('gr_skinswap');

const HellBtn = document.getElementById('hellport');
const HellBox = document.getElementById('hell_shared');
const Hell1 = document.getElementById('hellsprite1');
const Hell2 = document.getElementById('hellsprite2');
const Hell3 = document.getElementById('hellsprite3');
const Hell4 = document.getElementById('hellsprite4');
const HellSwap = document.getElementById('hell_skinswap');

const HWMBtn = document.getElementById('hwmport');
const HWMBox = document.getElementById('hwm_shared');
const HWM1 = document.getElementById('hwmsprite1');
const HWM2 = document.getElementById('hwmsprite2');
const HWM3 = document.getElementById('hwmsprite3');
const HWM4 = document.getElementById('hwmsprite4');
const HWMSwap = document.getElementById('hwm_skinswap');

const HMBtn = document.getElementById('hmport');
const HMBox = document.getElementById('hm_shared');
const HM1 = document.getElementById('hmsprite1');
const HM2 = document.getElementById('hmsprite2');
const HM3 = document.getElementById('hmsprite3');
const HM4 = document.getElementById('hmsprite4');
const HMSwap = document.getElementById('hm_skinswap');

const JesBtn = document.getElementById('jesport');
const JesBox = document.getElementById('jes_shared');
const Jes1 = document.getElementById('jessprite1');
const Jes2 = document.getElementById('jessprite2');
const Jes3 = document.getElementById('jessprite3');
const Jes4 = document.getElementById('jessprite4');
const JesSwap = document.getElementById('jes_skinswap');

const LepBtn = document.getElementById('lepport');
const LepBox = document.getElementById('lep_shared');
const Lep1 = document.getElementById('lepsprite1');
const Lep2 = document.getElementById('lepsprite2');
const Lep3 = document.getElementById('lepsprite3');
const Lep4 = document.getElementById('lepsprite4');
const LepSwap = document.getElementById('lep_skinswap');

const MAABtn = document.getElementById('maaport');
const MAABox = document.getElementById('maa_shared');
const MAA1 = document.getElementById('maasprite1');
const MAA2 = document.getElementById('maasprite2');
const MAA3 = document.getElementById('maasprite3');
const MAA4 = document.getElementById('maasprite4');
const MAASwap = document.getElementById('maa_skinswap');

const MuskBtn = document.getElementById('muskport');
const MuskBox = document.getElementById('musk_shared');
const Musk1 = document.getElementById('musksprite1');
const Musk2 = document.getElementById('musksprite2');
const Musk3 = document.getElementById('musksprite3');
const Musk4 = document.getElementById('musksprite4');
const MuskSwap = document.getElementById('musk_skinswap');

const OccBtn = document.getElementById('occport');
const OccBox = document.getElementById('occ_shared');
const Occ1 = document.getElementById('occsprite1');
const Occ2 = document.getElementById('occsprite2');
const Occ3 = document.getElementById('occsprite3');
const Occ4 = document.getElementById('occsprite4');
const OccSwap = document.getElementById('occ_skinswap');

const PDBtn = document.getElementById('pdport');
const PDBox = document.getElementById('pd_shared');
const PD1 = document.getElementById('pdsprite1');
const PD2 = document.getElementById('pdsprite2');
const PD3 = document.getElementById('pdsprite3');
const PD4 = document.getElementById('pdsprite4');
const PDSwap = document.getElementById('pd_skinswap');

const SBBtn = document.getElementById('sbport');
const SBBox = document.getElementById('sb_shared');
const SB1 = document.getElementById('sbsprite1');
const SB2 = document.getElementById('sbsprite2');
const SB3 = document.getElementById('sbsprite3');
const SB4 = document.getElementById('sbsprite4');
const SBSwap = document.getElementById('sb_skinswap');

const VesBtn = document.getElementById('vesport');
const VesBox = document.getElementById('ves_shared');
const Ves1 = document.getElementById('vessprite1');
const Ves2 = document.getElementById('vessprite2');
const Ves3 = document.getElementById('vessprite3');
const Ves4 = document.getElementById('vessprite4');
const VesSwap = document.getElementById('ves_skinswap');







function HeroPortToggle(hero) {
  HideAllSharedInfo();
  HideAllDiffInfo();
  HideAllSkinNumbers();
  HideAllEquipmentNumbers();
  HideAllSprites();
  HideAllSkillLevelNumbers();
  HideAllResolveLvls();
  HidePassiveHeader()
  HideAllPassiveContent();
  HideTrinketHeader();
  HideAllTrinketContent();
  HideDistrictEffectHeader();
  HideAllDistrictEffectContent();
  
  SkinNum1.style.display = 'block';
  WeaponNum1.style.display = 'block';
  ArmorNum1.style.display = 'block';
  Resolve0.style.display = 'block';
  SkillLevel1.style.display = 'flex';

  const HeroSharedInfoBox = document.getElementById(`${hero}_shared`);
  const Lvl1Box = document.getElementById(`${hero}_info_lvl1`);
  const FirstSprite = document.getElementById(`${hero}sprite1`);

  HeroSharedInfoBox.style.display = 'flex';
  Lvl1Box.style.display = 'block';
  FirstSprite.style.display = 'block';

}

AbomBtn.addEventListener('click', function() {HeroPortToggle("abom");});
AntiBtn.addEventListener('click', function() {HeroPortToggle("anti");});
ArbBtn.addEventListener('click', function() {HeroPortToggle("arb");});
BHBtn.addEventListener('click', function() {HeroPortToggle("bh");});
CrusBtn.addEventListener('click', function() {HeroPortToggle("crus");});
FlagBtn.addEventListener('click', function() {HeroPortToggle("flag");});
GRBtn.addEventListener('click', function() {HeroPortToggle("gr");});
HellBtn.addEventListener('click', function() {HeroPortToggle("hell");});
HWMBtn.addEventListener('click', function() {HeroPortToggle("hwm");});
HMBtn.addEventListener('click', function() {HeroPortToggle("hm");});
JesBtn.addEventListener('click', function() {HeroPortToggle("jes");});
LepBtn.addEventListener('click', function() {HeroPortToggle("lep");});
MAABtn.addEventListener('click', function() {HeroPortToggle("maa");});
MuskBtn.addEventListener('click', function() {HeroPortToggle("musk");});
OccBtn.addEventListener('click', function() {HeroPortToggle("occ");});
PDBtn.addEventListener('click', function() {HeroPortToggle("pd");});
SBBtn.addEventListener('click', function() {HeroPortToggle("sb");});
VesBtn.addEventListener('click', function() {HeroPortToggle("ves");});



function handleSkinSwap(char1, char2, char3, char4) {
if (char1.style.display === 'block') {
  HideAllSkinNumbers();
  SkinNum2.style.display = 'block'
  char1.style.display = 'none'
  char2.style.display = 'block'
}
else if (char2.style.display === 'block') {
  HideAllSkinNumbers();
  SkinNum3.style.display = 'block'
  char2.style.display = 'none'
  char3.style.display = 'block'
}
else if (char3.style.display === 'block') {
  HideAllSkinNumbers();
  SkinNum4.style.display = 'block'
  char3.style.display = 'none'
  char4.style.display = 'block'
}
else if (char4.style.display === 'block') {
  HideAllSkinNumbers();
  SkinNum1.style.display = 'block'
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


const HeroPassiveHeader = document.getElementById("hero_passive_title");

const AntiPassiveOpen = document.getElementById("anti_passive_info_open");
const AntiPassiveClose = document.getElementById("anti_passive_info_close");
const AntiPassiveTxt = document.getElementById("anti_passive_desc");

const FlagPassiveOpen = document.getElementById("flag_passive_info_open");
const FlagPassiveClose = document.getElementById("flag_passive_info_close");
const FlagPassiveTxt = document.getElementById("flag_passive_desc");

const SBPassiveOpen = document.getElementById("sb_passive_info_open");
const SBPassiveClose = document.getElementById("sb_passive_info_close");
const SBPassiveTxt = document.getElementById("sb_passive_desc");


AntiPassiveOpen.addEventListener('click', function(){
  AntiPassiveTxt.style.display = "block"; 
  HideAllTrinketContent();
  HideAllDistrictEffectContent();
  ShowPassiveHeader();
  PlayBtnPress();
  })

AntiPassiveClose.addEventListener('click', function(){
  AntiPassiveTxt.style.display = "none";
  HideAllTrinketContent();  
  HideAllDistrictEffectContent();
  HidePassiveHeader();
  PlayBtnPress();
})
FlagPassiveOpen.addEventListener('click', function(){
  FlagPassiveTxt.style.display = "block"; 
  HideAllTrinketContent(); 
  HideAllDistrictEffectContent();
  ShowPassiveHeader();
  PlayBtnPress();
})
FlagPassiveClose.addEventListener('click', function(){
  FlagPassiveTxt.style.display = "none"; 
  HideAllTrinketContent(); 
  HideAllDistrictEffectContent();
  HidePassiveHeader();
  PlayBtnPress();
})
SBPassiveOpen.addEventListener('click', function(){
  SBPassiveTxt.style.display = "block"; 
  HideAllTrinketContent(); 
  HideAllDistrictEffectContent();
  ShowPassiveHeader();
  PlayBtnPress();
})
SBPassiveClose.addEventListener('click', function(){
  SBPassiveTxt.style.display = "none"; 
  HideAllTrinketContent(); 
  HideAllDistrictEffectContent();
  HidePassiveHeader();
  PlayBtnPress();
})

const HeroTrinketHeader = document.getElementById("hero_trinket_title");

const HWMBaseGameTrinketBtn = document.getElementById("hwm_base_trinket_container");
const HWMDLCTrinketBtn = document.getElementById("hwm_dlc_trinket_container");




function ShowPassiveHeader() {
  const PassiveHeader = document.getElementById("hero_passive_title")
  PassiveHeader.style.display = 'block'
}
function ShowTrinketHeader() {
  const TrinketHeader = document.getElementById("hero_trinket_title")
  TrinketHeader.style.display = 'block'
}
function ShowDistrictEffectHeader() {
  const DistrictInfoHeader = document.getElementById("hero_district_effect_title")
  DistrictInfoHeader.style.display = 'block'
}
const heroNames = [
  "abom", 
  "anti", 
  "arb",
  "bh",
  "crus",
  "flag",
  "gr",
  "hell",
  "hwm",
  "hm",
  "jes",
  "lep",
  "maa",
  "musk",
  "occ",
  "pd",
  "sb",
  "ves",
]; 

function AttachTrinketListenersForAllHeroes() {
  for (const hero of heroNames) {
    AttachTrinketBtnListeners(hero);
  }
}
function AttachDistrictListenersForAllHeroes() {
  for (const hero of heroNames) {
    AttachDistrictListeners(hero);
  }
}
function AttachTrinketBtnListeners(hero){
  const BaseGameTrinketBtn = document.getElementById(`${hero}_base_trinket_toggle`)
  const DLCTrinketBtn = document.getElementById(`${hero}_dlc_trinket_toggle`)

  const HeroBaseGameTrinket = document.getElementById(`${hero}_base_trinket_container`)
  const HeroDLCTrinket = document.getElementById(`${hero}_dlc_trinket_container`)

  BaseGameTrinketBtn.addEventListener('click', function(){
    HeroBaseGameTrinket.style.display = "flex";
    HeroDLCTrinket.style.display = "none";
    PlayBtnPress();
  })

  DLCTrinketBtn.addEventListener('click', function(){
    HeroBaseGameTrinket.style.display = "none";
    HeroDLCTrinket.style.display = "flex";
    PlayBtnPress();
  })

  const HeroTrinketBoxShowBtn = document.getElementById(`${hero}_trinket_info_open`);
  const HeroTrinketBoxHideBtn = document.getElementById(`${hero}_trinket_info_close`);
  const HeroTrinketBox = document.getElementById(`${hero}_trinket_container`);

  HeroTrinketBoxShowBtn.addEventListener('click', function(){  
    PlayBtnPress();
    ShowTrinketHeader();
    HideAllPassiveContent();
    HideAllDistrictEffectContent();
    HeroTrinketBox.style.display = "block";
    HeroDLCTrinket.style.display = "none";
    HeroBaseGameTrinket.style.display = "flex";
  })

  HeroTrinketBoxHideBtn.addEventListener('click', function(){  
    PlayBtnPress();    
    HideTrinketHeader();
    HideAllPassiveContent();
    HideAllDistrictEffectContent();
    HeroDLCTrinket.style.display = "none";
    HeroBaseGameTrinket.style.display = "flex";
    HeroTrinketBox.style.display = "none";
  })

}

AttachTrinketListenersForAllHeroes();






function AttachDistrictListeners(hero){

  const AltarofLightInfo = document.getElementById(`altar_of_light_effect_desc`);
  const AthenaeumInfo = document.getElementById(`athenaeum_effect_desc`);
  const HouseofTheYellowHandInfo = document.getElementById(`house_of_the_yellow_hand_effect_desc`);
  const TrainingRingInfo = document.getElementById(`training_ring_effect_desc`);
  const OutsidersBonfireInfo = document.getElementById(`outsiders_bonfire_effect_desc`);
  const PerformanceHallInfo = document.getElementById(`performance_hall_effect_desc`);

  const DistrictEffectShowBtn = document.getElementById(`${hero}_district_info_open`);
  const DistrictEffectHideBtn = document.getElementById(`${hero}_district_info_close`);

  DistrictEffectShowBtn.addEventListener('click', function(){  
    PlayBtnPress();
    ShowDistrictEffectHeader();
    HideAllPassiveContent();
    HideAllTrinketContent();
    if (["crus", "flag", "ves"].includes(hero)) {AltarofLightInfo.style.display = "block";}
    else if (["anti", "occ", "pd"].includes(hero)) {AthenaeumInfo.style.display = "block";}
    else if (["bh", "gr", "hwm"].includes(hero)) {HouseofTheYellowHandInfo.style.display = "block";}
    else if (["arb", "musk", "sb", "maa", "hm"].includes(hero)) {TrainingRingInfo.style.display = "block";}
    else if (["jes"].includes(hero)) {PerformanceHallInfo.style.display = "block";}
    else if (["abom", "hell", "lep"].includes(hero)) {OutsidersBonfireInfo.style.display = "block";}

  })

  DistrictEffectHideBtn.addEventListener('click', function(){  
    PlayBtnPress();    
    HideAllPassiveContent();
    HideAllTrinketContent();
    HideAllDistrictEffectContent();
  })

}

AttachDistrictListenersForAllHeroes();
