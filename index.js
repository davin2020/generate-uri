var slug = require('slug');

/*
	Generates and returns a URI string for a venue, 
	based on the slugified args town name and venue name,
	in the format "/[town-slug]-events/[venue-slug]",
	or returns an error if either argument is not a string
*/
exports.getVenueUri = function(strTown, strVenue) {
	let newUri = "";
	try {
		//checks data types as slug() only accepts strings
		if (typeof strTown === "string" && typeof strVenue === "string") {
			let slugTown = slug(strTown);
			let slugVenue = slug(strVenue);
			// let newUri = "/" + strTown + "-events/" + strVenue;
			newUri = `/${slugTown}-events/${slugVenue}`;
		}
		else if (typeof strTown !== "string") {
			throw new Error(`Argument of Town ${strTown} passed to getVenueUri is not a string`);
		}
		else if (typeof strVenue !== "string") {
			throw new Error(`Argument of Venue ${strVenue} passed to getVenueUri is not a string`);
		}
	}
	catch(e) {
		//Returns the error but not the stack trace
		return '' + e;
	}
	return newUri;
}
