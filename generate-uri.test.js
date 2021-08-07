const generateUri = require('generate-uri');

test('generates venue uri from bristol town uri and venue of thekla to equal /bristol-events/thekla', () => {
  expect(generateUri.getVenueUri('thekla')).toBe('/bristol-events/thekla');
});
