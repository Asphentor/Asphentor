function restartAudio() {
    var audio = document.getElementById('myAudio');
    audio.currentTime = 0; // Set playback to the start
    audio.play(); // Optionally, start playing immediately
}
