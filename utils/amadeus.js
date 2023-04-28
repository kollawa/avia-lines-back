const Amadeus = require('amadeus');

const amadeusApi = new Amadeus({
  clientId: 'scaTkOPIdKkhQb8bY0w8tyIvqxV21JFM',
  clientSecret: 'oVAkrqbm7Cm2LyEr',
  hostname: 'production',
  baseUrl: 'api.amadeus.com'
});

module.exports = amadeusApi;
