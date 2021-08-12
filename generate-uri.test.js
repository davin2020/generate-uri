const generateUri = require('generate-uri');

//testing with Bristol and Thekla (success)
test('Town of Bristol and Venue of Thekla generates venue URI of /bristol-events/thekla', () => {
  expect(generateUri.getVenueUri('Bristol', 'Thekla')).toBe('/bristol-events/thekla');
  console.log('Town of Bristol and Venue of Thekla generates venue URI of /bristol-events/thekla')
});

//testing with Weston-Super-Mare and The Playhouse (success)
test('Town of Weston-Super-Mare and Venue of The Playhouse generates venue URI of /weston-super-mare-events/the-playhouse', () => {
  expect(generateUri.getVenueUri('Weston-Super-Mare', 'The-Playhouse')).toBe('/weston-super-mare-events/the-playhouse');
});

//testing with characters like extra spaces, full stop and apostrophe in Bury St.   Edmunds and O'Neills (success)
test('Town of Bury St.   Edmunds and Venue of O\'Neills generates venue URI of /bury-st-edmunds-events/oneills', () => {
  expect(generateUri.getVenueUri('Bury St.    Edmunds   ', 'O\'Neills')).toBe('/bury-st-edmunds-events/oneills');
});

//testing passing in int instead of string for Venue (malformed & failure test)
test('Town of string 33 and Venue of int 2021 returns Error: Argument of Venue 2021 passed to getVenueUri is not a string', () => {
  expect(generateUri.getVenueUri("33", 2021)).toBe('Error: Argument of Venue 2021 passed to getVenueUri is not a string');
  expect(generateUri.getVenueUri("33", 2021)).not.toBe('/33-events/2021');
});

//testing passing in int instead of string for Town (malformed & failure test)
test('Town of int 55 and Venue of string 789 returns Error: Argument of Town 55 passed to getVenueUri is not a string', () => {
  expect(generateUri.getVenueUri(55, "789")).toBe('Error: Argument of Town 55 passed to getVenueUri is not a string');
  expect(generateUri.getVenueUri(55, "789")).not.toBe('/55-events/789');
});

//test passing in only 1 argument (malformed)
test('Town of Bath and empty Venue returns Error: Argument of Venue undefined passed to getVenueUri is not a string', () => {
  expect(generateUri.getVenueUri("Bath")).toBe('Error: Argument of Venue undefined passed to getVenueUri is not a string');
});