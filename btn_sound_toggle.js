const back_button = document.getElementById('back_arrow');
const back_audio = document.getElementById('back_button_sfx');

back_button.addEventListener('click', function(event) {
    event.preventDefault(); 
    back_audio.currentTime = 0;
    back_audio.play();
    setTimeout(() => {
      window.location.href = back_button.href;
    }, 500); 
  });


const EmbarkButton = document.getElementById('embark_button');
const Embark_Audio = document.getElementById('embark_sfx');
const Embarkcc = document.getElementById('cclink');
const Embarkcom = document.getElementById('comlink');
const Embarkdds = document.getElementById('ddslink')
const EmbarkHero = document.getElementById('herolink')
const ExEmbarkAudio = document.getElementById('dungeon_embark');
ExEmbarkAudio.volume = 0.3



EmbarkButton.addEventListener('click', function() {
  Embark_Audio.currentTime = 0;
  Embark_Audio.play()
})

Embarkcc.addEventListener('click', function(event) {
    event.preventDefault();
    ExEmbarkAudio.currentTime = 0;
    ExEmbarkAudio.play();
    setTimeout(() => {
      window.location.href = Embarkcc.href;
    }, 1500); 
  });  

Embarkcom.addEventListener('click', function(event) {
    event.preventDefault();
    ExEmbarkAudio.currentTime = 0;
    ExEmbarkAudio.play();
    setTimeout(() => {
      window.location.href = Embarkcom.href;
    }, 1500); 
  });

  Embarkdds.addEventListener('click', function(event) {
    event.preventDefault();
    ExEmbarkAudio.currentTime = 0;
    ExEmbarkAudio.play();
    setTimeout(() => {
      window.location.href = Embarkdds.href;
    }, 1500); 
  });

const herobutton = document.getElementById('hero_btn');
const herobutton_audio = document.getElementById('hero_sfx');
herobutton_audio.volume = 0.8;

  herobutton.addEventListener('click', function(event) {
    event.preventDefault();
    herobutton_audio.currentTime = 0;
    herobutton_audio.play();
    setTimeout(() => {
      window.location.href = EmbarkHero.href;
    }, 1500); 
  })


//const boss_btns = document.getElementsByClassName('boss_button');
//const boss_button_audio = document.getElementById('boss_sfx');
//boss_button_audio.volume = 0.3;

//function playBossAudio() {
//  boss_button_audio.currentTime = 0;
//  boss_button_audio.play();
//}

//for (const boss_button of boss_btns) {
//  boss_button.addEventListener('click', function() {
//    playBossAudio();
//})
//}
