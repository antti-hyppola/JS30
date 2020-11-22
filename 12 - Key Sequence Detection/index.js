const pressed = [];
const secret = 'chenkomenko'

document.addEventListener('keyup', (e) => {
    pressed.push(e.key)
    pressed.splice(-secret.length - 1, pressed.length - secret.length)
    if (pressed.join('').includes(secret)) document.querySelector('body').innerHTML = '<h1>CHENKO MENKO!!!</h1>'
})