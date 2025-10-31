const {contarPalabras} = require('./contarPalabras');

describe ('Contar Palabras', () => {
    test('Happy path: Hola Mundo Jest -> 3', ()=>{
        const response = contarPalabras(
            'Hola mundo Jest'
        )
        expect(response).toBe(3);
    });
    test('Sad path: ERROR',
        ()=> {
            expect (()=> contarPalabras(null                
            )).toThrow('frase inválida');
            expect (()=> contarPalabras(''))
                .toThrow('frase inválida');
        });
});
