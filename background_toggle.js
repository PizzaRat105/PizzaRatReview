
// Add event listener to the toggle button
const toggleButton = document.getElementById('toggle_button');
const flexContainers = document.querySelector('.flex-containers');
const hobbyFlexContainers = document.querySelectorAll('.hobby_flex-containers');
const hobbyOptionContainers = document.querySelectorAll('.hobby_option_containers');
const body = document.body;
const musicboxFlexcontainers = document.querySelector('flexbox_music_containers');

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {
    flexContainers.classList.toggle('background-toggle');
    
    hobbyFlexContainers.forEach(container => {
    container.classList.toggle('background-toggle_3');
    });

    hobbyOptionContainers.forEach(container => {
    container.classList.toggle('background-toggle_2');
    });

    body.classList.toggle('background-toggle_3');

});

