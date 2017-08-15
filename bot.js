const express = require('./node_modules/express');
const app = express();
const path = require('./node_modules/path');
app.set('port', (process.env.PORT || 5000));
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
}).listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});

const Twit = require('./node_modules/twit');
const TH = new Twit({ // Twit Handler
    consumer_key: 'KvtuhanMF4WYLfYprSrzCJlcV',
    consumer_secret: 'ZrVfxXxjUzz7rJNuWwiVfsfMpoRt9AM2pH6fnPN0kjEvyka9vD',
    access_token: '893498060663336964-mRDZqnc09mwxLoOL9RUX9ATMlsoIcGH',
    access_token_secret: '1o60UGZF8OqHbNvf89PvLhb9VFEz2w9a9tHWrOrHdaxPg'
});

const _self = {
    id: 893498060663336964,
    screen_name: 'ratetherenter'
}

const stream = TH.stream('statuses/filter', {
    track: ['ratetherenter', 'ratetherenter.co.uk','www.ratetherenter.co.uk']
});

stream.on('tweet', (tweet) => {   
    
    TH.post('favorites/create',{
        id:tweet.id_str
    },function (err,response) { 
    });

    // TH.post('statuses/retweet/:id', {
    //     id: tweet.id_str
    // });   

    TH.post('statuses/update', {
        status: `@${tweet.user.screen_name} Thanks for sharing :)`,
        in_reply_to_status_id: tweet.id_str 
    });

    return; 
    
});