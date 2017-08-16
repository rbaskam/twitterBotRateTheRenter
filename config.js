const Twit = require('twit');
const TH = new Twit({ // Twit Handler
    consumer_key: ENV['consumer_key'],
    consumer_secret: ENV['consumer_secret'],
    access_token: ENV['access_token'],
    access_token_secret: ENV['access_token_secret']
});
