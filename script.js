// list of kanade images
const images = [
    'images/kanade1.jpg',   
    'images/kanade2.jpg',
    'images/kanade3.jpg',
    'images/kanade4.jpg',
    'images/kanade5.jpg',
    'images/kanade6.jpg',
    'images/kanade7.jpg'
];

let current = 0;
const body = document.body;
const music = document.getElementById('bg-music');

// set initial background
body.styleBackgroundImage = 'url('${images[current]}')';

// on click, change image and start music
body.addEventListener('click', () => {
    current = (current + 1) % images.length;
    body.style.backgroundImage = 'url('${images[current]}')';

    if (music.paused) {
        music.play():
    }
});
