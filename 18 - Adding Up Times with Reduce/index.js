const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes.map(node => {
    const [mins, secs] = node.dataset.time;
    return (mins * 60) + secs;
})
    .map(time => parseFloat(time))
    .reduce((total, seconds) => total + seconds)


const hours = Math.floor(seconds / 3600);
let secondsLeft = seconds % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(`${hours}:${minutes}:${secondsLeft}`)

module.exports = { seconds, timeNodes, hours };
