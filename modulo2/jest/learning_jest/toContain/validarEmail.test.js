const { validarEmail } = require('./validarEmail');

describe('Validar Email', () => {

  test('Happy Path: Retorna true para un email válido', () => {
    const resultado = validarEmail('usuario@dominio.com');
    expect(resultado).toBe(true);
  });

  test('Sad Path: Retorna false para un email sin arroba', () => {
    const resultado = validarEmail('usuariodominio.com');
    expect(resultado).toBe(false);
  });

  test('Sad Path: Retorna false para un email sin dominio', () => {
    const resultado = validarEmail('usuario@dominio');
    expect(resultado).toBe(false);
  });

  test('Sad Path: Lanza error si el parámetro no es un string', () => {
    expect(() => validarEmail(12345)).toThrow('email debe ser un string');
  });

});
