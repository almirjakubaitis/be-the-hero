const generateUniqueId = require('../../src/utils/generateUniqueId');


describe('Generate Unique ID', () => {
    it('shoud generate a unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});

// describe('Generate Unique ID', () => {
//     it('shoud generate a unique ID', () => {
//         expect(2 + 2).toBe(4);
//     });
// });