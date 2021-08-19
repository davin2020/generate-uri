# generate-uri

## About
- Returns a slugified venue URI, based on the string arguments of a Town name and Venue name. 
- If either arguments is not a string, then an error message is returned indicating this


## Installation

To install from npm marketplace (once published)
```
npm install generate-uri
```

To install from local files
```
git clone git@github.com:davin2020/generate-uri.git
npm init
npm install /full/path/to/local/repo/generate-uri
```


## Examples

Add the example code to a new file `index.js` -

```javascript
let generateUri = require('generate-uri');

let bristolVenue = generateUri.getVenueUri('Bristol', 'Thekla');
console.log(bristolVenue);
// outputs /bristol-events/thekla

let westonVenue = generateUri.getVenueUri('Weston-Super-Mare', 'The Playhouse');
console.log(westonVenue);
// outputs /weston-super-mare-events/the-playhouse

let edmundsVenue = generateUri.getVenueUri("Bury St.    Edmunds   ", "O'Neills");
console.log(edmundsVenue);
// outputs /bury-st-edmunds-events/oneills

let incorrectVenue = generateUri.getVenueUri("Bath", 456);
console.log(incorrectVenue);
// outputs Error: Argument of Venue 456 passed to getVenueUri is not a string

let incorrectTown = generateUri.getVenueUri(55, "The Hippodrome");
console.log(incorrectTown);
// outputs Error: Argument of Town 55 passed to getVenueUri is not a string
```


## Testing
To run the unit tests locally -  
`cd` to the directory of the repo `generate-uri`  
`npm run test`  


## Keywords
url, uri, slug, slugify