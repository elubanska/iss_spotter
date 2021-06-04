// index.js
// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("99.245.49.160", (error, coordinates) => {
//     if (error) {
//         console.log("It didn't work!" , error);
//         return;
//     }

//     console.log('It worked! Returned coordinates: ',coordinates);
// });

fetchISSFlyOverTimes( {latitude: '43.599', longitude: '-79.6885'}, (error,flyOverTimes) => {
    if (error) {
        console.log("It didn't work!" , error);
        return;
    }

    console.log('It worked! Returned coordinates: ',flyOverTimes);
});