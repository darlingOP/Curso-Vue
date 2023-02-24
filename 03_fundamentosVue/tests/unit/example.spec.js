
describe('Example Componen',() => {
  test('Debe de ser mayor a 10',() => {

    //Arrange: se prepara al sujeto de pruebas
    let value = 10;

    //Act: se aplica el estimulo
    value = value + 2

    //Assert: se espera el resultado
    expect(value).toBeGreaterThan(10)
  })
})