function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)
    const key = document.querySelector(`.key[data-key="${e.key}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    key.classList.add('playing')
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

document.addEventListener('keydown', playSound)
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))