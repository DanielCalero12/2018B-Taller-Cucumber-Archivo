var request = require('request');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

When('I make an API call using callbacks',function(callback){
            request('https://restcountries.eu/rest/v2/currency/cop', (err,response, body) => {
                if (err) {
                    callback(err);
                } else {
                    currencyDoc=JSON.parse(body);
                    callback();
                    }
                });
            });
	
 Then('I get the request of the colombian currency doc',function(callback){
        console.log(currencyDoc);
        callback();
        return currencyDoc;
    })