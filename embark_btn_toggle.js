const BtnTop = document.getElementById('embarktop');
const CCBtn = document.getElementById('ccbtn');
const CCEmbark = document.getElementById('cc_embark');
const CoMBtn = document.getElementById('combtn');
const CoMEmbark = document.getElementById('com_embark');
const CoMEmbarkTop = document.getElementById('com_embarktop');
const DDsBtn = document.getElementById('ddsbtn');

function ToggleEmbarkBtn(selectedquestbtn){
const allQuestBtn = [CCBtn, CoMBtn, DDsBtn]
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

