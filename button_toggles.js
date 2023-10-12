
const BtnSelectAudio = document.getElementById('btn_press');
BtnSelectAudio.volume = 0.7;
const OpenAudio = document.getElementById('page_open');
OpenAudio.volume = 0.6;

function PlayPageOpn() {
  OpenAudio.currentTime = 0;
  OpenAudio.play();
}

function PlayBtnPress() {
  BtnSelectAudio.currentTime = 0; 
  BtnSelectAudio.play();
}
/*Disease Box*/
const DiseaseBox = document.getElementById("diseasebox");
const DiseaseBtn = document.getElementById("diseasebtn");

DiseaseBtn.addEventListener('click' , function() {
  PlayPageOpn();
  DiseaseBox.style.display = 'block';
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && DiseaseBox.style.display === 'block') {
    CloseAudio.currentTime = 0;
    CloseAudio.play();
    DiseaseBox.style.display = 'none';
  }
});




/*Lootbox*/ 
const LootBtn = document.getElementById('Loot');
const LootBox = document.getElementById('lootbox');

LootBtn.addEventListener('click' , function() {
  PlayPageOpn()
  LootBox.style.display = 'block'
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && LootBox.style.display === 'block') {
    CloseAudio.currentTime = 0;
    CloseAudio.play();
    LootBox.style.display = 'none';
  }
});
/*Provisions*/
const ProvisionerBtn = document.getElementById('provisioner')
const ProvisionerBox = document.getElementById('provisionbox')
const RuinsNavigate = document.getElementById('ruins_nav')
const WealdNavigate = document.getElementById('weald_nav')
const WarrensNavigate = document.getElementById('warrens_nav')
const CoveNavigate = document.getElementById('cove_nav')
const CourtyardNavigate = document.getElementById('courtyard_nav')
const FarmsteadNavigate = document.getElementById('farmstead_nav')

const RuinsArea = document.getElementById('ruins_area')
const WealdArea = document.getElementById('weald_area')
const WarrensArea = document.getElementById('warrens_area')
const CoveArea = document.getElementById('cove_area')
const CourtyardArea = document.getElementById('courtyard_area')
const FarmsteadArea = document.getElementById('farmstead_area')


ProvisionerBtn.addEventListener('click' , function() {
  PlayPageOpn()
  ProvisionerBox.style.display = 'block'
})
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && ProvisionerBox.style.display === 'block') {
    CloseAudio.currentTime = 0;
    CloseAudio.play();
    ProvisionerBox.style.display = 'none';
  }
});


RuinsNavigate.addEventListener('click', function() {
  PlayPageOpn()
  RuinsArea.style.display = 'flex'
  WealdArea.style.display = 'none'
  WarrensArea.style.display = 'none'
  CoveArea.style.display = 'none'
  CourtyardArea.style.display = 'none'
  FarmsteadArea.style.display = 'none'
})
WealdNavigate.addEventListener('click', function() {
  PlayPageOpn()
  RuinsArea.style.display = 'none'
  WealdArea.style.display = 'flex'
  WarrensArea.style.display = 'none'
  CoveArea.style.display = 'none'
  CourtyardArea.style.display = 'none'
  FarmsteadArea.style.display = 'none'
})
WarrensNavigate.addEventListener('click', function() {
  PlayPageOpn()
  RuinsArea.style.display = 'none'
  WealdArea.style.display = 'none'
  WarrensArea.style.display = 'flex'
  CoveArea.style.display = 'none'
  CourtyardArea.style.display = 'none'
  FarmsteadArea.style.display = 'none'
})
CoveNavigate.addEventListener('click', function() {
  PlayPageOpn()
  RuinsArea.style.display = 'none'
  WealdArea.style.display = 'none'
  WarrensArea.style.display = 'none'
  CoveArea.style.display = 'flex'
  CourtyardArea.style.display = 'none'
  FarmsteadArea.style.display = 'none'
})
CourtyardNavigate.addEventListener('click', function() {
  PlayPageOpn()
  RuinsArea.style.display = 'none'
  WealdArea.style.display = 'none'
  WarrensArea.style.display = 'none'
  CoveArea.style.display = 'none'
  CourtyardArea.style.display = 'flex'
  FarmsteadArea.style.display = 'none'
})
FarmsteadNavigate.addEventListener('click', function() {
  PlayPageOpn()
  RuinsArea.style.display = 'none'
  WealdArea.style.display = 'none'
  WarrensArea.style.display = 'none'
  CoveArea.style.display = 'none'
  CourtyardArea.style.display = 'none'
  FarmsteadArea.style.display = 'flex'
})



/*Districts*/
const DistrictOpen = document.getElementById('district_btn_open')
const DistrictClosed = document.getElementById('district_btn_closed')
const DistrictOpenAudio = document.getElementById('district_open')
const DistrictCloseAudio = document.getElementById('district_close')
const DistrictOverlay = document.getElementById('district_overlay')
DistrictCloseAudio.volume = 0.4;
DistrictOpenAudio.volume = 0.4;


DistrictOpen.addEventListener('click' , function() {
  DistrictCloseAudio.currentTime = 0;
  DistrictCloseAudio.play();
  PlayBtnPress()
  DistrictClosed.style.display = 'block'
  DistrictOpen.style.display = 'none'
})
DistrictClosed.addEventListener('click' , function() {
  DistrictOpenAudio.currentTime - 0;
  DistrictOpenAudio.play();
  PlayBtnPress()
  DistrictClosed.style.display = 'none'
  DistrictOpen.style.display = 'block'
})

DistrictOpen.addEventListener('mouseover' , function() {DistrictOverlay.style.display = 'block'})
DistrictOpen.addEventListener('mouseleave', function() {DistrictOverlay.style.display = 'none'; });
DistrictClosed.addEventListener('mouseover' , function() {DistrictOverlay.style.display = 'block'})
DistrictClosed.addEventListener('mouseleave', function() {DistrictOverlay.style.display = 'none'; });

/*Town Event */
const EventOpen = document.getElementById('town_event_open')
const EventClosed = document.getElementById('town_event_closed')
const EventOverlay = document.getElementById('event_overlay')

EventOpen.addEventListener('click' , function() {
  PlayBtnPress()
  EventClosed.style.display = 'block'
  EventOpen.style.display = 'none'
})
EventClosed.addEventListener('click' , function() {
  PlayBtnPress()
  EventClosed.style.display = 'none'
  EventOpen.style.display = 'block'
})

EventOpen.addEventListener('mouseover' , function() {EventOverlay.style.display = 'block'})
EventOpen.addEventListener('mouseleave', function() {EventOverlay.style.display = 'none'; });
EventClosed.addEventListener('mouseover' , function() {EventOverlay.style.display = 'block'})
EventClosed.addEventListener('mouseleave', function() {EventOverlay.style.display = 'none'; });


/*Activity Section */
const ActivityOpen = document.getElementById('activity_log_open')
const ActivityClosed = document.getElementById('activity_log_closed')
const ActivityOverlay = document.getElementById('activity_overlay')

ActivityOpen.addEventListener('click' , function() {
  CloseAudio.currentTime = 0;
  CloseAudio.play();
  PlayBtnPress()
  ActivityClosed.style.display = 'block'
  ActivityOpen.style.display = 'none'
})
ActivityClosed.addEventListener('click' , function() {
  PlayPageOpn() 
  PlayBtnPress()
  ActivityClosed.style.display = 'none'
  ActivityOpen.style.display = 'block'
})

ActivityOpen.addEventListener('mouseover' , function() {ActivityOverlay.style.display = 'block'})
ActivityOpen.addEventListener('mouseleave', function() {ActivityOverlay.style.display = 'none'; });
ActivityClosed.addEventListener('mouseover' , function() {ActivityOverlay.style.display = 'block'})
ActivityClosed.addEventListener('mouseleave', function() {ActivityOverlay.style.display = 'none'; });

/*Trinket Inv */
const TrinketBox = document.getElementById("trinketbox");
const TrinketBoxOpen = document.getElementById('trinketsbox_open')
const TrinketBoxClosed = document.getElementById('trinketsbox_closed')
const TrinketBoxOpenAudio = document.getElementById('trinketbox_open')
const TrinketBoxCloseAudio = document.getElementById('trinketbox_close')
const TrinketBoxOverlay = document.getElementById('trinketsbox_overlay')
const TrinketBoxCloseBtn = document.getElementById("trinketbox_close_button")
TrinketBoxCloseAudio.volume = 0.3;
TrinketBoxOpenAudio.volume = 0.3;


TrinketBoxOpen.addEventListener('click' , function() {
  TrinketBoxCloseAudio.currentTime = 0;
  TrinketBoxCloseAudio.play();
  PlayBtnPress()
  TrinketBoxClosed.style.display = 'block'
  TrinketBoxOpen.style.display = 'none';
  TrinketBox.style.display = "none";

})
TrinketBoxClosed.addEventListener('click' , function() {
  TrinketBoxOpenAudio.currentTime = 0;
  TrinketBoxOpenAudio.play();
  PlayBtnPress()
  TrinketBoxClosed.style.display = 'none'
  TrinketBoxOpen.style.display = 'block'
  TrinketBox.style.display = "block";
})

TrinketBoxCloseBtn.addEventListener('click' , function() {
  TrinketBoxCloseAudio.currentTime = 0;
  TrinketBoxCloseAudio.play();
  PlayBtnPress()
  TrinketBoxClosed.style.display = 'block'
  TrinketBoxOpen.style.display = 'none';
  TrinketBox.style.display = "none";

})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && TrinketBox.style.display === 'block') {
    TrinketBoxCloseAudio.currentTime = 0;
    TrinketBoxCloseAudio.play();
    PlayBtnPress()
    TrinketBoxClosed.style.display = 'block'
    TrinketBoxOpen.style.display = 'none';
    TrinketBox.style.display = "none";
  }
});


TrinketBoxOpen.addEventListener('mouseover' , function() {TrinketBoxOverlay.style.display = 'block'})
TrinketBoxOpen.addEventListener('mouseleave', function() {TrinketBoxOverlay.style.display = 'none'; });
TrinketBoxClosed.addEventListener('mouseover' , function() {TrinketBoxOverlay.style.display = 'block'})
TrinketBoxClosed.addEventListener('mouseleave', function() {TrinketBoxOverlay.style.display = 'none'; });





/*Credits? */
const SettingIcon1 = document.getElementById('setting1')
const SettingIcon2 = document.getElementById('setting2')
const SettingOpenAudio = document.getElementById('candle_open')
const SettingCloseAudio = document.getElementById('candle_close')
const SettingOverlay = document.getElementById('setting_overlay')
SettingCloseAudio.volume = 0.6;
SettingOpenAudio.volume = 0.6;

SettingIcon2.addEventListener('click' , function() {
  SettingCloseAudio.currentTime = 0;
  SettingCloseAudio.play();
  
  SettingIcon1.style.display = 'block'
  SettingIcon2.style.display = 'none'
})
SettingIcon1.addEventListener('click' , function() {
  SettingOpenAudio.currentTime = 0;
  SettingOpenAudio.play();
  PlayBtnPress()
  SettingIcon1.style.display = 'none'
  SettingIcon2.style.display = 'block'
})

SettingIcon1.addEventListener('mouseover' , function() {SettingOverlay.style.display = 'block'})
SettingIcon1.addEventListener('mouseleave', function() {SettingOverlay.style.display = 'none'; });
SettingIcon2.addEventListener('mouseover' , function() {SettingOverlay.style.display = 'block'})
SettingIcon2.addEventListener('mouseleave', function() {SettingOverlay.style.display = 'none'; });

const CloseProvisions = document.getElementById('food_close')
const CloseLoot = document.getElementById('lootclose');
const DiseaseCloseBtn = document.getElementById("disease_close_btn"); 
const CloseAudio = document.getElementById('page_close');
CloseAudio.volume = 0.6;

DiseaseCloseBtn.addEventListener('click', function() {
  CloseAudio.currentTime = 0;
  CloseAudio.play();
  DiseaseBox.style.display = 'none';
});
CloseProvisions.addEventListener('click', function() {
  CloseAudio.currentTime = 0;
  CloseAudio.play();
  ProvisionerBox.style.display = 'none'
})
CloseLoot.addEventListener('click', function() {
  CloseAudio.currentTime = 0;
  CloseAudio.play();
  LootBox.style.display = 'none'
})





