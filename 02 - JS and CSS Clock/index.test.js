const functions = require('./index')

beforeEach(() => {
    document.body.innerHTML += '<div class="hand second-hand"></div>' +
        '<div class="hand hour-hand"></div>' +
        '<div class="hand min-hand"></div>'
})

test('Should change transform property on second hand to current seconds divided by 60, times 360 plus 90', () => {
    const secondsDegree = ((new Date().getSeconds() / 60) * 360) + 90;
    expect(functions.setDate()).toBe(`rotate(${secondsDegree}deg)`)
})