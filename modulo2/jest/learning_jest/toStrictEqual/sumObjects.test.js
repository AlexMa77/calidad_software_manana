const { sumObjects } = require('./sumObjects');

describe('Suma de Objetos', () => {
  test('Happy Path: Suma de Objetos Correctamente', () => {
    const objeto1 = { x: 2, y: 3 };
    const objeto2 = { x: 1, y: 4 };

    const resultado = sumObjects(objeto1, objeto2);
    expect(resultado).toStrictEqual({ x: 3, y: 7 });
  });

  test('Sad path: Falla si falta una propiedad o cambia de tipo', () => {
    const objeto1 = { x: 2, y: 3 };
    const objeto2 = { y: 4 }; // Falta la propiedad 'x'

    const response = sumObjects(objeto1, objeto2);
    expect(response).not.toStrictEqual({ x: 3, y: 7 });
  });
});
