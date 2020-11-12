
window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if(!audio) return; // stops the function from running
    audio.currentTime = 0 // rewinds to the start 
    audio.play();
    console.log(key)
})
