const mission_btns = document.getElementsByClassName('mission_btn');
const mission_button_audio = document.getElementById('mission_select_sfx');
mission_button_audio.volume = 0.2;
    
const back_button = document.getElementById('back_arrow');
const back_audio = document.getElementById('back_button_sfx');

const backups = document.getElementsByClassName('backup');

const bc_enter_button = document.getElementById('circus');
const bc_audio = document.getElementById('bc_enter');
bc_audio.volume = 0.5;

const herobutton = document.getElementById('hero_btn');
const herobutton_audio = document.getElementById('hero_sfx');
herobutton_audio.volume = 0.8;

const EmbarkButton = document.getElementById('embark_button');
const Embark_Audio = document.getElementById('embark_sfx');

EmbarkButton.addEventListener('click', function() {
  Embark_Audio.currentTime = 0;
  Embark_Audio.play()
})

function playupbtnAudio() {
  back_audio.currentTime = 0;
  back_audio.play();
}

for (const backup of backups) {
  backup.addEventListener('click', function() {
    playupbtnAudio();
  })
}



function playAudioMission() {
    mission_button_audio.currentTime = 0; // Reset the playback position to the beginning
    mission_button_audio.play();
}

for (const mission_btn of mission_btns) {
    mission_btn.addEventListener('click', function() {
    // Play the audio when the button is clicked
    playAudioMission();});
  };

back_button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    back_audio.currentTime = 0;
    back_audio.play();
    setTimeout(() => {
      window.location.href = back_button.href; // Navigate to the new page after the sound has played
    }, 500); // Adjust the delay as needed to allow enough time for the audio to play
  });

bc_enter_button.addEventListener('click', function() {
  bc_audio.currentTime = 0;
  bc_audio.play();
})

herobutton.addEventListener('click', function() {
  herobutton_audio.currentTime = 0;
  herobutton_audio.play();
})
const Embarkcc = document.getElementById('cclink');
const Embarkcom = document.getElementById('comlink');
const Embarkdds = document.getElementById('ddslink')
const ExEmbarkAudio = document.getElementById('dungeon_embark');
ExEmbarkAudio.volume = 0.3

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
