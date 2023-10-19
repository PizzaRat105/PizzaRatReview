
const BtnChooseAudio = document.getElementById('btn_press');
BtnChooseAudio.volume = 0.7;
const OpenSfx = document.getElementById('page_open');
OpenSfx.volume = 0.6;
const CloseSound = document.getElementById('page_close');
CloseSound.volume = 0.6;


function PlayPageOpn() {
  OpenSfx.currentTime = 0;
  OpenSfx.play();
}

function PlayBtnPress() {
  BtnChooseAudio.currentTime = 0; 
  BtnChooseAudio.play();
}

const QuirkClose = document.getElementById('quirk_close')

QuirkClose.addEventListener('click', function() {
  CloseSound.currentTime = 0;
  CloseSound.play();
  GlossaryBox.style.display = 'none'
  GlossaryOpen.style.display = 'none'
  GlossaryClosed.style.display = 'block'
})




const GlossaryOpen = document.getElementById('glossary_open')
const GlossaryClosed = document.getElementById('glossary_closed')
const GlossaryOverlay = document.getElementById('glossary_overlay')
const GlossaryBox = document.getElementById('glossarybox')

GlossaryOpen.addEventListener('click' , function() {
  CloseSound.currentTime = 0;
  CloseSound.play();
  PlayBtnPress()
  GlossaryBox.style.display = 'none'
  GlossaryClosed.style.display = 'block'
  GlossaryOpen.style.display = 'none'
})
GlossaryClosed.addEventListener('click' , function() {
  PlayPageOpn() 
  PlayBtnPress()
  GlossaryBox.style.display = 'block'
  GlossaryClosed.style.display = 'none'
  GlossaryOpen.style.display = 'block'
})
GlossaryOpen.addEventListener('mouseover' , function() {GlossaryOverlay.style.display = 'block'})
GlossaryOpen.addEventListener('mouseleave', function() {GlossaryOverlay.style.display = 'none'; });
GlossaryClosed.addEventListener('mouseover' , function() {GlossaryOverlay.style.display = 'block'})
GlossaryClosed.addEventListener('mouseleave', function() {GlossaryOverlay.style.display = 'none'; });


document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && GlossaryBox.style.display === 'block') {
    CloseSound.currentTime = 0;
    CloseSound.play();
    GlossaryBox.style.display = 'none';
    GlossaryOpen.style.display = 'none';
    GlossaryClosed.style.display = 'block';
  }
});

const PosNavBtns = document.getElementsByClassName('tier_btn_positive');
const NegNavBtns = document.getElementsByClassName('tier_btn_negative');
const PosQuirkBtn = document.getElementById('glossarynav1')
const NegQuirkBtn = document.getElementById('glossarynav2')
const PrismaticQuirkBtn = document.getElementById('glossarynav3')

const NegQuirkNav = document.getElementById('neg_nav')
const PosQuirkNav = document.getElementById('pos_nav')


PosQuirkBtn.addEventListener('click', function() {
  PlayPageOpn();
  HideAllNegativeContent()
  HideAllPositiveContent()
  HideAllPrismaticContent()
  NegQuirkNav.style.display = 'none'
  PosQuirkNav.style.display = 'block'
  STierPositiveContent.style.display = 'block'
})

NegQuirkBtn.addEventListener('click', function() {
  PlayPageOpn();
  HideAllPositiveContent()
  HideAllNegativeContent()
  HideAllPrismaticContent()
  PosQuirkNav.style.display = 'none'
  NegQuirkNav.style.display = 'block'
  Tier1NegativeContent.style.display = 'block'
  }
  )

PrismaticQuirkBtn.addEventListener('click', function() {
  PlayPageOpn();
  HideAllNegativeContent()
  HideAllPositiveContent()
  HideAllPrismaticContent()
  NegQuirkNav.style.display = 'none'
  PosQuirkNav.style.display = 'none'
  PrismaticContent.style.display = 'block'
})

for (const PosNavBtn of PosNavBtns) {
  PosNavBtn.addEventListener('click', function() {PlayBtnPress();})}

for (const NegNavBtn of NegNavBtns) {
  NegNavBtn.addEventListener('click', function() {PlayBtnPress();})}

const STierBtn = document.getElementById('stier_positive');
const ATierBtn = document.getElementById('atier_positive');
const BTierBtn = document.getElementById('btier_positive');
const CTierBtn = document.getElementById('ctier_positive');
const DTierBtn = document.getElementById('dtier_positive');
const ETierBtn = document.getElementById('etier_positive');
const FTierBtn = document.getElementById('ftier_positive');

const STierPositiveContent = document.getElementById('positive_stier')
const ATierPositiveContent = document.getElementById('positive_atier')
const BTierPositiveContent = document.getElementById('positive_btier')
const CTierPositiveContent = document.getElementById('positive_ctier')
const DTierPositiveContent = document.getElementById('positive_dtier')
const ETierPositiveContent = document.getElementById('positive_etier')
const FTierPositiveContent = document.getElementById('positive_ftier')

function HideAllPositiveContent() {
  const AllPositiveContent = [STierPositiveContent, ATierPositiveContent, BTierPositiveContent, CTierPositiveContent, DTierPositiveContent, ETierPositiveContent, FTierPositiveContent]
  AllPositiveContent.forEach(positivecontent =>{
    positivecontent.style.display = 'none'
  })
}
function HideAllNegativeContent() {
  const AllNegativeContent = [Tier1NegativeContent, Tier2NegativeContent, Tier3NegativeContent, Tier4NegativeContent, Tier5NegativeContent, Tier6NegativeContent, Tier7NegativeContent, Tier8NegativeContent, Tier9NegativeContent, Tier10NegativeContent]
  AllNegativeContent.forEach(negativecontent =>{
    negativecontent.style.display = 'none'
  })
}

function HideAllPrismaticContent() {
  const AllPrismaticContent = [PrismaticContent]
  AllPrismaticContent.forEach(prismatic =>{
    prismatic.style.display = 'none'
  })
}
STierBtn.addEventListener('click', function() {HideAllPositiveContent(); STierPositiveContent.style.display = 'block'})
ATierBtn.addEventListener('click', function() {HideAllPositiveContent(); ATierPositiveContent.style.display = 'block'})
BTierBtn.addEventListener('click', function() {HideAllPositiveContent(); BTierPositiveContent.style.display = 'block'})
CTierBtn.addEventListener('click', function() {HideAllPositiveContent(); CTierPositiveContent.style.display = 'block'})
DTierBtn.addEventListener('click', function() {HideAllPositiveContent(); DTierPositiveContent.style.display = 'block'})
ETierBtn.addEventListener('click', function() {HideAllPositiveContent(); ETierPositiveContent.style.display = 'block'})
FTierBtn.addEventListener('click', function() {HideAllPositiveContent(); FTierPositiveContent.style.display = 'block'})


const Tier1Btn = document.getElementById('tier1_negative');
const Tier2Btn = document.getElementById('tier2_negative');
const Tier3Btn = document.getElementById('tier3_negative');
const Tier4Btn = document.getElementById('tier4_negative');
const Tier5Btn = document.getElementById('tier5_negative');
const Tier6Btn = document.getElementById('tier6_negative');
const Tier7Btn = document.getElementById('tier7_negative');
const Tier8Btn = document.getElementById('tier8_negative');
const Tier9Btn = document.getElementById('tier9_negative');
const Tier10Btn = document.getElementById('tier10_negative');

const Tier1NegativeContent = document.getElementById('negative_tier1');
const Tier2NegativeContent = document.getElementById('negative_tier2');
const Tier3NegativeContent = document.getElementById('negative_tier3');
const Tier4NegativeContent = document.getElementById('negative_tier4');
const Tier5NegativeContent = document.getElementById('negative_tier5');
const Tier6NegativeContent = document.getElementById('negative_tier6');
const Tier7NegativeContent = document.getElementById('negative_tier7');
const Tier8NegativeContent = document.getElementById('negative_tier8');
const Tier9NegativeContent = document.getElementById('negative_tier9');
const Tier10NegativeContent = document.getElementById('negative_tier10');

Tier1Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier1NegativeContent.style.display = 'block'})
Tier2Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier2NegativeContent.style.display = 'block'})
Tier3Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier3NegativeContent.style.display = 'block'})
Tier4Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier4NegativeContent.style.display = 'block'})
Tier5Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier5NegativeContent.style.display = 'block'})
Tier6Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier6NegativeContent.style.display = 'block'})
Tier7Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier7NegativeContent.style.display = 'block'})
Tier8Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier8NegativeContent.style.display = 'block'})
Tier9Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier9NegativeContent.style.display = 'block'})
Tier10Btn.addEventListener('click', function() {HideAllNegativeContent(); Tier10NegativeContent.style.display = 'block'})

const PrismaticContent = document.getElementById("prismatic_tier")

PrismaticQuirkBtn.addEventListener('click', function() {PrismaticContent.style.display = 'block'})