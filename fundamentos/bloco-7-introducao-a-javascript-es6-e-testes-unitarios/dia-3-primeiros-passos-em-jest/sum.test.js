const soma = require('./sum');


describe('A função soma', () => {
  test('4 e 5 tem que ser igual a 9', () => {
    expect(soma(4, 5)).toBe(9);
  });
  test('0 e 0 tem que ser igual a 0', () => {
    expect(soma(0, 0)).toBe(0);
  });
  test('testa se foi passado uma string como parametro', () => {
    expect(()=> {soma()}).toThrow();
  });
});