const sortedBands = require('./index')

test('should return alphabetical list of bandnames, ignoring a, an and the', () => {
    expect(sortedBands[3]).toEqual('The Devil Wears Prada');
})