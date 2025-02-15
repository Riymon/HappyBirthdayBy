function blowCandle() {
    const flame = document.getElementById('flame');
    const message = document.getElementById('message');
    const confettiCanvas = document.getElementById('confettiCanvas');
    const showLetterBtn = document.getElementById('showLetterBtn');
    const num = document.getElementById('num');
    const heading = num.querySelector('h1');

    flame.style.display = 'none';
    message.classList.remove('hidden');
    message.style.display = 'block'; // Show the message
    heading.style.color = 'red';
    confettiCanvas.classList.remove('hidden');
    showLetterBtn.classList.remove('hidden'); // Show the new button
    startConfetti();
}

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("background-music");
    audio.currentTime = 14; // Start at 14 seconds
    
    // Try to play the audio on page load
    audio.play().catch(function() {
        // If autoplay is blocked, wait for user interaction
        document.addEventListener("click", function() {
            audio.currentTime = 14; // Ensure it starts at 14 seconds on click
            audio.play();
        }, { once: true });
    });
});

function showLetter() {
    const letter = document.getElementById('letter');
    letter.style.display = 'block'; // Show the letter
}

// Confetti animation
function startConfetti() {
    const confettiCanvas = document.getElementById('confettiCanvas');
    const ctx = confettiCanvas.getContext('2d');
    const confettiCount = 300;
    const confetti = [];

    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            width: Math.random() * 5 + 2,
            height: Math.random() * 10 + 5,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            speed: Math.random() * 3 + 2
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confetti.forEach(p => {
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.width, p.height);
            p.y += p.speed;
            if (p.y > confettiCanvas.height) {
                p.y = -p.height;
            }
        });
        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}

// Resize canvas to fit the window
window.addEventListener('resize', () => {
    const confettiCanvas = document.getElementById('confettiCanvas');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
});

window.dispatchEvent(new Event('resize'));
