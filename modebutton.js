const modeButtonDark = document.getElementById('modebuttondark');
const modeButtonLight = document.getElementById('modebuttonlight');
const stylesheetLink = document.getElementById('stylesheet');

modeButtonDark.addEventListener('click', () => {
  stylesheetLink.href = 'pain-2.css';
  modeButtonDark.style.display = "none";
  modeButtonLight.style.display = "inline-block";
});

modeButtonLight.addEventListener('click', () => {
  stylesheetLink.href = 'pain.css';
  modeButtonLight.style.display = 'none';
  modeButtonDark.style.display = 'inline-block';
});