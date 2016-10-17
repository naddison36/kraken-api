var Kraken = require('kraken-api');

// Either pass your API key and secret as the first and second parameters to examples.js. eg
// node examples.js your-api-key your-api-secret
//
// Or enter them below.
// WARNING never commit your API keys into a public repository.
var key = process.argv[2] || 'your-api-key';
var secret = process.argv[3] || 'your-api-secret';

var client = new Kraken(key, secret);

// // Get Ticker Info
// client.api('Ticker', {"pair": 'XETHZUSD'}, function(error, data) {
//     if(error) {
//         console.log(error);
//     }
//     else {
//         console.log(data.result);
//     }
// });

// // Display user's balance
// client.api('Balance', null, function(error, data) {
//     if(error) {
//         console.log(error);
//     }
//     else {
//         console.log(data.result);
//     }
// });

// var testOrder = {
//     "pair": 'XETHZUSD',
//     "type": "sell",
//     "ordertype": "limit",
//     "price": "20",
//     "volume": "0.1"
// };
//
// client.api('AddOrder', testOrder, function(error, data) {
//     if(error) {
//         console.log(error);
//     }
//     else {
//         console.log(data.result);
//     }
// });
//
// client.api('OpenOrders', null, function(error, data) {
//     if(error) {
//         console.log(error);
//     }
//     else {
//         console.log(JSON.stringify(data.result));
//     }
// });

// client.api('CancelOrder', {"txid": "OXMUAX-P5CDF-IEMWXN"}, function(error, data) {
//     if(error) {
//         console.log(error);
//     }
//     else {
//         console.log(JSON.stringify(data.result));
//     }
// });
