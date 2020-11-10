
const functions = {
    setDate: () => {
        const secondHand = document.querySelector('.second-hand')
        const minuteHand = document.querySelector('.min-hand')
        const hourHand = document.querySelector('.hour-hand')
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`

        const mins = now.getMinutes();
        const minsDegree = ((mins / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minsDegree}deg)`

        const hour = now.getHours();
        const hourDegree = ((hour / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hourDegree}deg)`

        return secondHand.style.transform
    }
}


setInterval(functions.setDate, 1000)

module.exports = functions;
