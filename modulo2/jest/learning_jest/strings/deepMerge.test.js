
const {deepMerge} = require('./deepMerge');

describe('Buscar Palabras', () => {
    test('Happy path: JEST', () => {
        const response = deepMerge('jest');
        expect(response).toBe('JEST');
    });
    test('Sad path: ERROR', 
        () => {
        expect(() => deepMerge(null)).toThrow('texto invalido');
        expect(() => deepMerge(123)).toThrow('texto invalido');
    }); 
});  