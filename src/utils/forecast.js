const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/f7f26b939d19274a4d14747af4c37cb1/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '?units=si';

    request({ url, json: true, }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find the location', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.' + ' There is a ' + body.currently.precipProbability + ' chance of rain.');
        }
    })

}



module.exports = forecast