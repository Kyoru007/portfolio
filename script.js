document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("shuffle-text");
    const originalText = "MUKTADIRUL ALAM SOWAD";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-`~;:/'\" \[}{]/?1234567890";
    let shuffleInterval;

    function shuffleLetters() {
        let shuffledText = '';
        for (let i = 0; i < originalText.length; i++) {
            if (originalText[i] === ' ') {
                shuffledText += ' ';
            } else {
                shuffledText += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        }
        textElement.textContent = shuffledText;
    }

    function startShuffle() {
        shuffleInterval = setInterval(shuffleLetters, 0.1);
        setTimeout(stopShuffle, 9000); // Stop shuffling after 3 seconds
    }

    function stopShuffle() {
        clearInterval(shuffleInterval);
        textElement.textContent = originalText;
    }

    startShuffle(); // Start shuffling when the page loads
});
