document.getElementById("hero_btn").addEventListener("click", function() {
    const delay = 400// Delay in milliseconds
    setTimeout(function() {
        const scrollHeight = document.body.scrollHeight;
        const animationDuration = 1500; // Animation duration in milliseconds
        const framesPerSecond = 60;
        const frameDuration = 1000 / framesPerSecond;

        let startTime = null;
        function animateScroll(timestamp) {
            if (!startTime) startTime = timestamp;

            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / animationDuration, 1);
            const scrollToValue = progress * scrollHeight;

            window.scrollTo({
                top: scrollToValue,
                behavior: "auto" // Use "auto" to avoid interference with animation
            });

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }, delay);
});