// Function to toggle the visibility of a backdrop element
function toggleBackdropVisibility(selectedBackdrop) {
    const allBackdrops = [ccBackdrop, comBackdrop, ddsBackdrop, visualsBackdrop, musicBackdrop, appcleanseBackdrop, appbossBackdrop, appgatherBackdrop, champgatherBackdrop, champbossBackdrop, champcleanseBackdrop];
  
    // Hide all backdrops
    allBackdrops.forEach(backdrop => {
        backdrop.style.visibility = 'hidden';
    });
  
    // Show the selected backdrop
    selectedBackdrop.style.visibility = 'visible';
  }
  
  // Get references to the buttons and backdrop elements
  const ccBtn = document.querySelector('.cc_btn');
  const comBtn = document.querySelector('.com_btn');
  const ddsBtn = document.querySelector('.dds_btn');
  const visualsBtn = document.querySelector('.visuals_btn');
  const musicBtn = document.querySelector('.music_btn');
  const appcleanseBtn = document.querySelector('.app_cleanse_btn');
  const appbossBtn = document.querySelector('.app_boss_btn');
  const appgatherBtn = document.querySelector('.app_gather_btn');
  const champgatherBtn = document.querySelector('.champ_gather_btn');
  const champbossBtn = document.querySelector('.champ_boss_btn');
  const champcleanseBtn = document.querySelector('.champ_cleanse_btn');
  
  const ccBackdrop = document.querySelector('.cc_backdrop');
  const comBackdrop = document.querySelector('.com_backdrop');
  const ddsBackdrop = document.querySelector('.dds_backdrop');
  const visualsBackdrop = document.querySelector('.visuals_backdrop');
  const musicBackdrop = document.querySelector('.music_backdrop');
  const appcleanseBackdrop = document.querySelector('.app_cleanse_backdrop')
  const appbossBackdrop = document.querySelector('.app_boss_backdrop')
  const appgatherBackdrop = document.querySelector('.app_gather_backdrop')
  const champgatherBackdrop = document.querySelector('.champ_gather_backdrop')
  const champbossBackdrop = document.querySelector('.champ_boss_backdrop')
  const champcleanseBackdrop = document.querySelector('.champ_cleanse_backdrop');
  
  // Add click event listeners to the buttons
  ccBtn.addEventListener('click', () => toggleBackdropVisibility(ccBackdrop));
  comBtn.addEventListener('click', () => toggleBackdropVisibility(comBackdrop));
  ddsBtn.addEventListener('click', () => toggleBackdropVisibility(ddsBackdrop));
  visualsBtn.addEventListener('click', () => toggleBackdropVisibility(visualsBackdrop));
  musicBtn.addEventListener('click', () => toggleBackdropVisibility(musicBackdrop));
  appcleanseBtn.addEventListener('click', () => toggleBackdropVisibility(appcleanseBackdrop));
  appbossBtn.addEventListener('click', () => toggleBackdropVisibility(appbossBackdrop));
  appgatherBtn.addEventListener('click', () => toggleBackdropVisibility(appgatherBackdrop));
  champgatherBtn.addEventListener('click', () => toggleBackdropVisibility(champgatherBackdrop));
  champbossBtn.addEventListener('click', () => toggleBackdropVisibility(champbossBackdrop));
  champcleanseBtn.addEventListener('click', () => toggleBackdropVisibility(champcleanseBackdrop));