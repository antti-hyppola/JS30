const { methods, inventors } = require('./index')

//Filter
// test('Fifteen should return an array with all inventors born in 1500s. (2)', () => {
//     expect(methods.fifteen.length).toBe(2)
// })

//Map
// test('Names should return an array of the inventors first and last names', () => {
//     expect(methods.names).toContain('Galileo Galilei')
// })

//Sort
// // test('Birthday should return an array sorted by the inventors birthday (oldest-youngest)', () => {
// //     expect(methods.birthday[0].year).toEqual(1473)
// // })

//Reduce
// test('Lived should return total years lived by all inventors (861)', () => {
//     expect(methods.lived).toBe(861);
// })

//More sort
// // test('Oldest should return the inventor who lived the most years (inventors[6])', () => {
// //     const oldestIndex = inventors.findIndex(inventor => inventor.first === 'Lise')
// //     expect(methods.oldest[0]).toEqual(inventors[oldestIndex])
// // })

//Even more sort
// test('Aplha index 0 should be "Beck, Glenn"', () => {
//     expect(methods.alpha[0]).toEqual('Beck, Glenn')
// })

//More reduce
test('Transportation should have a key "car" with value of 5', () => {
    expect(methods.transportation.car).toEqual(5)
})