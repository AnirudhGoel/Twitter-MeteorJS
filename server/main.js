import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	var Twit = Meteor.npmRequire('twit');

	var T = new Twit({
        consumer_key: '0UNftiVQxGfVWhbkdTgYKQAph',
        consumer_secret: 'oSgS1ac3BGdjSdlcx3aERuD7IJmFgsrj4sedVigmxxr3o7cIOn',
        access_token: '918883688-OFRLYE1HaJ3ZqaGkd58Ig7Em7yh0z90yRIpLHHwC', 
        access_token_secret: 'IZs2BMnw0viTuX9KI8lsDC3xKDIuS6UDtuckzbNK4Ro7p'
    });

    T.get('search/tweets',
        {
            q: 'from:Kamalrashidkhan',
            count: 10
        },
        function(err, data, response) {
            console.log(data);
        }
    );
});
