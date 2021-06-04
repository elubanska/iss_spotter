/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
 const request = require('request');
 
 const fetchMyIP = function(callback) {
    request('https://api.ipify.org?format=json', (error, response, body) => {
      if (error) return callback(error, null);
  
      if (response.statusCode !== 200) {
        callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
        return;
      }
  
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    });
  };


const fetchCoordsByIP = function(ip, callback) {
    let apiText = 'https://freegeoip.app/json/' + ip;
    // console.log(apiText);
    request(apiText, (error, response, body) => {
        if (error) return callback(error, null);
    
        if (response.statusCode !== 200) {
          callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
          return;
        }

        const data = {};
        data.latitude = JSON.parse(body).latitude;
        data.longitude = JSON.parse(body).longitude;
        callback(null, data);
      });
  };
  
  module.exports = { fetchMyIP };
  module.exports = { fetchCoordsByIP };