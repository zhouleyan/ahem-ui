test('plopfile', () => {
  console.log(new Date(Date.now()).getUTCFullYear());
  expect(new Date(Date.now()).getUTCFullYear()).toBe(2021);
});
