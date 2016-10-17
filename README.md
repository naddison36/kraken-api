Node Kraken
===========

NodeJS Client Library for the Kraken (kraken.com) API

This is an asynchronous node js client for the kraken.com API.

It exposes all the API methods found here: https://www.kraken.com/help/api through the 'api' method:

Example Usage:

```javascript
var Kraken = require('kraken-api');

// Either pass your API key and secret as the first and second parameters to examples.js. eg
// node examples.js your-api-key your-api-secret
//
// Or enter them below.
// WARNING never commit your API keys into a public repository.
var key = process.argv[2] || 'your-api-key';
var secret = process.argv[3] || 'your-api-secret';

var client = new Kraken(key, secret);

// Get Ticker Info
client.api('Ticker', {"pair": 'XETHZUSD'}, function(error, data) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(data.result);
    }
});

// Display user's balance
client.api('Balance', null, function(error, data) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(data.result);
    }
});

// add a limit sell order for the ETHUSD pair
var testLimitOrder = {
    "pair": 'XETHZUSD',
    "type": "sell",
    "ordertype": "limit",
    "price": "20",
    "volume": "0.1"
};

client.api('AddOrder', testLimitOrder, function(error, data) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(data.result);
    }
});

// add a market sell order for the BTCUSD pair
var testMarketOrder = {
    "pair": 'XXBTZUSD',
    "type": "sell",
    "ordertype": "market",
    "volume": "0.001"
};

client.api('AddOrder', testMarketOrder, function(error, data) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(data.result);
    }
});

// get order information
client.api('QueryOrders', {"txid": "OADWQW-4BSC7-ZECXTG"}, function(error, data) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(JSON.stringify(data.result));
    }
});

// get all open orders
client.api('OpenOrders', null, function(error, data) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(JSON.stringify(data.result));
    }
});

// cancel an order
client.api('CancelOrder', {"txid": "OXMUAX-P5CDF-IEMWXN"}, function(error, data) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(JSON.stringify(data.result));
    }
});
```

Credit:
This is a fork of the [kraken-exchange-api](https://github.com/5an1ty/kraken-api) project which is a fork of [npm-kraken-api](https://github.com/nothingisdead/npm-kraken-api) project.
The main change is the use of VErrors which allow errors to be nested.