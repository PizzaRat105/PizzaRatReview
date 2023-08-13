const embark_button = document.getElementById('embark_button');
const embark_audio = document.getElementById('embark_sfx');
embark_audio.volume = 0.5;

embark_button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    embark_audio.currentTime = 0;
    embark_audio.play();
    setTimeout(() => {
      window.location.href = embark_button.href; // Navigate to the new page after the sound has played
    }, 500); // Adjust the delay as needed to allow enough time for the audio to play
  });