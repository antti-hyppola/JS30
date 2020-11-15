const { methods, comments } = require('./index');

describe('array methods', () => {
    test('isAdult returns true', () => {
        expect(methods.isAdult).toBeTruthy();
    });
    test('allAdults returns false', () => {
        expect(methods.allAdults).toBeFalsy();
    })
    test('comment to equal to comments[1]', () => {
        expect(methods.comment).toEqual(comments[1])
    })
    test('index to be equal to comments[1]', () => {
        expect(methods.index).toEqual(comments[1])
    })
})