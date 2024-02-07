
const BtnSelectAudio = document.getElementById('btn_press');
BtnSelectAudio.volume = 0.4;
const OpenAudio = document.getElementById('page_open');

const CloseAudio = document.getElementById('page_close');

function PlayPageOpn() {
  OpenAudio.currentTime = 0;
  OpenAudio.volume = 0.4;
  OpenAudio.play();
}

function PlayPageClose() {
  CloseAudio.currentTime = 0;
  CloseAudio.volume = 0.4;
  CloseAudio.play();
}

function PlayBtnPress() {
  BtnSelectAudio.currentTime = 0;
  BtnSelectAudio.volume = 0.4; 
  BtnSelectAudio.play();
}


/*Torch Box*/
const TorchBox = document.getElementById("torchlight_box");
const TorchBtn = document.getElementById("torchlight_btn");

TorchBtn.addEventListener('click' , function() {
  PlayPageOpn();
  TorchBox.style.display = 'block';
});




document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && TorchBox.style.display === 'block') {
    PlayPageClose()

    TorchBox.style.display = 'none';
  }
})

/*Lootbox*/ 
const LootBtn = document.getElementById('Loot');
const LootBox = document.getElementById('lootbox');

LootBtn.addEventListener('click' , function() {
  PlayPageOpn()
  LootBox.style.display = 'block'
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && LootBox.style.display === 'block') {
    PlayPageClose()

    LootBox.style.display = 'none';
  }
});

/*Districts*/
const DistrictOpen = document.getElementById('district_btn_open')
const DistrictClosed = document.getElementById('district_btn_closed')
const DistrictOpenAudio = document.getElementById('district_open')
const DistrictCloseAudio = document.getElementById('district_close')
const DistrictOverlay = document.getElementById('district_overlay')
const DistrictBox = document.getElementById('district_box');
const CloseDistrict = document.getElementById('district_closed');
DistrictCloseAudio.volume = 0.4;
DistrictOpenAudio.volume = 0.4;


DistrictOpen.addEventListener('click' , function() {
  DistrictCloseAudio.currentTime = 0;
  DistrictCloseAudio.play();
  PlayBtnPress()
  DistrictClosed.style.display = 'block'
  DistrictOpen.style.display = 'none'
  DistrictBox.style.display = 'none'
})
DistrictClosed.addEventListener('click' , function() {
  DistrictOpenAudio.currentTime - 0;
  DistrictOpenAudio.play();
  PlayBtnPress()
  DistrictClosed.style.display = 'none'
  DistrictOpen.style.display = 'block'
  DistrictBox.style.display = 'block'
})

CloseDistrict.addEventListener('click' , function() {
  PlayPageClose()

  DistrictClosed.style.display = 'block'
  DistrictOpen.style.display = 'none'
  DistrictBox.style.display = 'none'
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && DistrictBox.style.display === 'block') {
    DistrictCloseAudio.currentTime = 0;
    DistrictCloseAudio.play();
    PlayBtnPress()
    DistrictClosed.style.display = 'block'
    DistrictOpen.style.display = 'none'
    DistrictBox.style.display = 'none';
  }
});

DistrictOpen.addEventListener('mouseover' , function() {DistrictOverlay.style.display = 'block'})
DistrictOpen.addEventListener('mouseleave', function() {DistrictOverlay.style.display = 'none'; });
DistrictClosed.addEventListener('mouseover' , function() {DistrictOverlay.style.display = 'block'})
DistrictClosed.addEventListener('mouseleave', function() {DistrictOverlay.style.display = 'none'; });



/*Activity Section */
const ActivityOpen = document.getElementById('activity_log_open')
const ActivityClosed = document.getElementById('activity_log_closed')
const ActivityOverlay = document.getElementById('activity_overlay')

ActivityOpen.addEventListener('click' , function() {
  PlayPageClose()

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
TrinketBoxCloseAudio.volume = 0.2;
TrinketBoxOpenAudio.volume = 0.2;


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
SettingCloseAudio.volume = 0.4;
SettingOpenAudio.volume = 0.4;

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

const CloseLoot = document.getElementById('lootclose');
const CloseTorch = document.getElementById('torchlight_close');


CloseLoot.addEventListener('click', function() {
  PlayPageClose()
  LootBox.style.display = 'none'
})


CloseTorch.addEventListener('click', function() {
  PlayPageClose()
  TorchBox.style.display = 'none'
})




