Node Kraken
===========

NodeJS Client Library for the Kraken (kraken.com) API

This is an asynchronous node js client for the kraken.com API.

It exposes all the API methods found here: https://www.kraken.com/help/api through the 'api' method:

Example Usage:

```javascript
var KrakenClient = require('kraken-api');
var kraken = new KrakenClient('api_key', 'api_secret');

// Display user's balance
kraken.api('Balance', null, function(error, data) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(data.result);
    }
});

// Get Ticker Info
kraken.api('Ticker', {"pair": 'XBTCZUSD'}, function(error, data) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(data.result);
    }
});
```

Credit:
This is a fork of the [kraken-exchange-api](https://github.com/5an1ty/kraken-api) project which is a fork of [npm-kraken-api](https://github.com/nothingisdead/npm-kraken-api) project.
The main change is the use of VErrors which allow errors to be nested.