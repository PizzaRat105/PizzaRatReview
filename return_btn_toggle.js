
const ReturnMainLink = document.getElementById('main_page_link')


const returnButton = document.getElementById('back_to_main');
const return_audio = document.getElementById('return_to_main_page');
return_audio.volume = 0.8;

  returnButton.addEventListener('click', function(event) {
    event.preventDefault();
    return_audio.currentTime = 0;
    return_audio.play();
    setTimeout(() => {
      window.location.href = ReturnMainLink.href;
    }, 1000); 
  })