// list of kanade images
const images = [
    'images/kanade1.jpg',   
    'images/kanade2.jpg',
    'images/kanade3.jpg',
    'images/kanade4.jpg',
    'images/kanade5.jpg',
    'images/kanade6.jpg',
    'images/kanade7.jpg',
];

// preload all images
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

let current = 0;
const body = document.body;
const music = document.getElementById('bg-music');

// set initial background
body.style.backgroundImage = `url('${images[current]}')`;

// function to update background and play music
function updateBackground() {
    body.style.backgroundImage = `url('${images[current]}')`;
}

// flag to check if the first click has been made
let firstClick = false;

// request fullscreen and play music on the first click
function goFullscreenAndPlayMusic() {
    const elem = document.documentElement;
    
    // request fullscreen
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Safari
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE11
        elem.msRequestFullscreen();
    }

    // start music
    music.play();

    firstClick = true;
    document.removeEventListener('click', goFullscreenAndPlayMusic); // Only do this once
}

// first click: trigger fullscreen + play music, subsequent clicks: change image
body.addEventListener('click', () => {
    if (!firstClick) {
        goFullscreenAndPlayMusic(); // first click: fullscreen + music
    } else {
        current = (current + 1) % images.length;
        updateBackground(); // subsequent clicks: change image
    }
});

// arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        current = (current + 1) % images.length;
    } else if (event.key === 'ArrowLeft') {
        current = (current - 1 + images.length) % images.length;
    } else {
        return; // exit if not arrow key
    }
    updateBackground(); // update background with new image
});
