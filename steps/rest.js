var request = require('request');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');
var saveJson;
 

When('I make an API call using callbacks',function(callback){
            request('https://restcountries.eu/rest/v2/alpha/col', (err,response, body) => {
                if (err) {
                    callback(err);
                } else {
                    country=JSON.parse(body);
                    callback();
                    }
                });
            });
	
 Then('the request was successfull in a json',function(callback){
        console.log(country);
        callback();
        return country;
    })