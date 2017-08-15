const Twit = require('./node_modules/twit');
const TH = new Twit({ // Twit Handler
    consumer_key: 'KvtuhanMF4WYLfYprSrzCJlcV',
    consumer_secret: 'ZrVfxXxjUzz7rJNuWwiVfsfMpoRt9AM2pH6fnPN0kjEvyka9vD',
    access_token: '	893498060663336964-mRDZqnc09mwxLoOL9RUX9ATMlsoIcGH',
    access_token_secret: '1o60UGZF8OqHbNvf89PvLhb9VFEz2w9a9tHWrOrHdaxPg'
});

const _self = {
    id: 893498060663336964,
    screen_name: 'ratetherenter'
}

const stream = TH.stream('statuses/filter', {
    track: ['mortgage', 'rent', 'building', 'house']
});

stream.on('tweet', (tweet) => {
    TH.post('favourites/create', {
        id: tweet.id_str
    });

    // if (tweet.user.id == _self.id) {
    //     TH.post('statuses/retweet/:id', {
    //         id: tweet.id_str
    //     });
    //     return;
    // }

    // TH.post('statuses/update', {
    //     status: `@${tweet.user.screen_name} Thanks for sharing :)`,
    //     in_reply_to_status_id: tweet.id_str 
    // });
    
});