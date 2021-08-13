# generate-uri

## About
Returns a slugified venue URI, based on the string arguments of a town name and venue name. If either arguments is not a string, then an error message is returned indicating this

## Installation
`npm install generate-uri`

## Examples
`let generateUri = require('generate-uri');
let bristolVenue = generateUri.getVenueUri('Bristol', 'Thekla');
console.log(bristolVenue);
// /bristol-events/thekla`

`let westonVenue = generateUri.getVenueUri('Weston-Super-Mare', 'The Playhouse');
console.log(westonVenue);
// /weston-super-mare-events/the-playhouse`

`let edmundsVenue = generateUri.getVenueUri("Bury St.    Edmunds   ", "O'Neills");
console.log(edmundsVenue);
// /bury-st-edmunds-events/oneills`

`let incorrectVenue = generateUri.getVenueUri("Bath", 456);
console.log(incorrectVenue);
//Error: Argument of Venue 456 passed to getVenueUri is not a string`

`let incorrectTown = generateUri.getVenueUri(55, "The Hippodrome");
console.log(incorrectTown);
// Error: Argument of Town 55 passed to getVenueUri is not a string`

## Testing
To run the unit tests - 
`npm run test`

## Keywords
url, uri, slug, slugify
