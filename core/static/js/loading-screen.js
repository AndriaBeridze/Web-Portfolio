document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const loadingScreen = document.querySelector('#loading-screen');
        if (loadingScreen) {
            loadingScreen.style.transition = 'bottom 1.5s';
            loadingScreen.style.bottom = '100%';
            loadingScreen.addEventListener('transitionend', function() {
                loadingScreen.remove();
            });
        }
    }, 1000);
});