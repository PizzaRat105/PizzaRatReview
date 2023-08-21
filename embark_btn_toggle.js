const BtnTop = document.getElementById('embarktop');
const CrimsonBtn = document.getElementById('crimsonbtn');
const CrimsonEmbark = document.getElementById('crimson_embark');
const MadnessBtn = document.getElementById('madnessbtn');
const MadnessEmbark = document.getElementById('madness_embark');
const MadnessEmbarkTop = document.getElementById('madness_embarktop');
const GauntletBtn = document.getElementById('gauntletbtn');

function ToggleEmbarkBtn(selectedquestbtn){
const allQuestBtn = [CrimsonBtn, MadnessBtn, GauntletBtn]
allQuestBtn.forEach(questbtn => {
    questbtn.style.display = 'none';
 });
 selectedquestbtn.style.display = 'block';
}

const embark_button = document.getElementById('embark_button');
const embark_audio = document.getElementById('embark_sfx');
embark_audio.volume = 0.5;

embark_button.addEventListener('click' , function() {
  embark_audio.currentTime = 0; // Reset the playback position to the beginning
  embark_audio.play();
});

