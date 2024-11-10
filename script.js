const loadingText = document.getElementById("loading-text");
const originalText = "Omuk's Page";

// Function to shuffle letters randomly for a hacker effect
function shuffleLetters() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*abcdefghijklmnopqrstuvwxyz";
    let shuffledText = '';
    debugger
    for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] !== ' ') {
            shuffledText += characters.charAt(Math.floor(Math.random() * characters.length));
        } else {
            shuffledText += ' ';
        }
    }

    loadingText.textContent = shuffledText;
}

// Interval to shuffle letters repeatedly
const interval = setInterval(shuffleLetters, 1);

// Redirect after 3 seconds
setTimeout(() => {
    clearInterval(interval);
    loadingText.textContent = originalText;
    window.location.href = "index.html";
}, 5000);
